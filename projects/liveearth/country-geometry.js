import { loadCountryGeometry } from "../shared/atlas/data.js";

function normalizeLongitudeSpan(west, east) {
  let span = Math.abs(east - west);
  if (span > 180) span = 360 - span;
  return span;
}

function signedRingArea(ring) {
  if (!Array.isArray(ring) || ring.length < 3) return 0;

  let area = 0;
  for (let index = 0; index < ring.length - 1; index += 1) {
    const [x1, y1] = ring[index];
    const [x2, y2] = ring[index + 1];
    area += (x1 * y2) - (x2 * y1);
  }
  return area / 2;
}

function closeRing(ring) {
  if (!Array.isArray(ring) || ring.length < 3) return ring;
  const [firstLng, firstLat] = ring[0];
  const [lastLng, lastLat] = ring[ring.length - 1];
  if (firstLng === lastLng && firstLat === lastLat) return ring;
  return [...ring, ring[0]];
}

function orientRing(ring, clockwise) {
  const closed = closeRing(ring);
  const area = signedRingArea(closed);
  const isClockwise = area < 0;
  if (clockwise === isClockwise) {
    return closed;
  }

  return closeRing([...closed].reverse());
}

function normalizePolygonWinding(polygon) {
  if (!Array.isArray(polygon) || !polygon.length) return polygon;

  return polygon
    .map((ring, index) => orientRing(ring, index === 0))
    .filter((ring) => Array.isArray(ring) && ring.length >= 4);
}

function normalizeGeometryWinding(geometry) {
  if (!geometry) return geometry;

  if (geometry.type === "Polygon") {
    return {
      ...geometry,
      coordinates: normalizePolygonWinding(geometry.coordinates),
    };
  }

  if (geometry.type === "MultiPolygon") {
    return {
      ...geometry,
      coordinates: (geometry.coordinates || [])
        .map((polygon) => normalizePolygonWinding(polygon))
        .filter((polygon) => Array.isArray(polygon) && polygon.length),
    };
  }

  return geometry;
}

function normalizeFeatureCollectionWinding(geojson) {
  return {
    ...geojson,
    features: (geojson?.features || []).map((feature) => ({
      ...feature,
      geometry: normalizeGeometryWinding(feature.geometry),
    })),
  };
}

function getPrimaryFeature(feature) {
  if (!feature?.geometry || feature.geometry.type !== "MultiPolygon") return feature;

  const polygons = Array.isArray(feature.geometry.coordinates) ? feature.geometry.coordinates : [];
  let best = null;

  for (const coordinates of polygons) {
    const candidate = {
      type: "Feature",
      properties: feature.properties || {},
      geometry: {
        type: "Polygon",
        coordinates,
      },
    };
    const area = d3.geoArea(candidate);
    if (!best || area > best.area) {
      best = { area, feature: candidate };
    }
  }

  return best?.feature || feature;
}

function createBorderPaths(feature) {
  if (!feature?.geometry) return [];

  const toCoords = (ring) => (ring || []).map(([lng, lat]) => [lat, lng]);

  if (feature.geometry.type === "Polygon") {
    const outerRing = feature.geometry.coordinates?.[0];
    return outerRing ? [toCoords(outerRing)] : [];
  }

  if (feature.geometry.type === "MultiPolygon") {
    return (feature.geometry.coordinates || [])
      .map((polygon) => polygon?.[0])
      .filter(Boolean)
      .map((ring) => toCoords(ring));
  }

  return [];
}

export function prepareCountryGeometry(geojson) {
  const normalizedGeojson = normalizeFeatureCollectionWinding(geojson);
  const featureByIso = new Map();
  const primaryFeatureByIso = new Map();
  const centroidByIso = new Map();
  const boundsByIso = new Map();
  const borderPathsByIso = new Map();
  const borderPaths = [];

  for (const feature of normalizedGeojson?.features || []) {
    const iso3 = feature?.properties?.iso3;
    if (!iso3) continue;

    featureByIso.set(iso3, feature);

    const primaryFeature = getPrimaryFeature(feature);
    primaryFeatureByIso.set(iso3, primaryFeature);

    const centroid = d3.geoCentroid(primaryFeature);
    if (Array.isArray(centroid) && Number.isFinite(centroid[0]) && Number.isFinite(centroid[1])) {
      centroidByIso.set(iso3, {
        lat: centroid[1],
        lng: centroid[0],
      });
    }

    const bounds = d3.geoBounds(primaryFeature);
    if (Array.isArray(bounds) && bounds.length === 2) {
      const [[west, south], [east, north]] = bounds;
      boundsByIso.set(iso3, {
        east,
        latSpan: Math.abs(north - south),
        lngSpan: normalizeLongitudeSpan(west, east),
        north,
        south,
        west,
      });
    }

    const featureBorderPaths = createBorderPaths(feature).map((coords) => ({
      coords,
      iso3,
      pathColor: "rgba(171, 228, 239, 0.34)",
      pathStroke: 0.55,
    }));
    borderPathsByIso.set(iso3, featureBorderPaths);
    borderPaths.push(...featureBorderPaths);
  }

  return {
    borderPaths,
    borderPathsByIso,
    boundsByIso,
    centroidByIso,
    featureByIso,
    geojson: normalizedGeojson,
    primaryFeatureByIso,
  };
}

export async function ensureCountryGeometryVariant(atlasData, basePath, variant) {
  atlasData.geometryVariants ||= new Map();
  if (atlasData.geometryVariants.has(variant)) {
    return atlasData.geometryVariants.get(variant);
  }

  const normalizedVariant = variant === "default" ? "default" : variant;
  const geojson = normalizedVariant === "low"
    ? atlasData.geojson
    : await loadCountryGeometry(basePath, normalizedVariant);
  const prepared = prepareCountryGeometry(geojson);
  atlasData.geometryVariants.set(variant, prepared);
  return prepared;
}
