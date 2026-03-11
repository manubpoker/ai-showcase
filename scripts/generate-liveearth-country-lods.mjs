import { readFile, writeFile } from "node:fs/promises";

const sourcePath = new URL("../projects/liveearth/data/countries.geojson", import.meta.url);
const lowPath = new URL("../projects/liveearth/data/countries-low.geojson", import.meta.url);
const mediumPath = new URL("../projects/liveearth/data/countries-medium.geojson", import.meta.url);

const VARIANTS = [
  {
    id: "medium",
    tolerance: 0.12,
    minimumRingArea: 0.00002,
    decimals: 4,
  },
  {
    id: "low",
    tolerance: 0.35,
    minimumRingArea: 0.00008,
    decimals: 3,
  },
];

function squaredSegmentDistance(point, start, end) {
  const [px, py] = point;
  let [x, y] = start;
  const [x2, y2] = end;
  let dx = x2 - x;
  let dy = y2 - y;

  if (dx !== 0 || dy !== 0) {
    const t = ((px - x) * dx + (py - y) * dy) / ((dx * dx) + (dy * dy));
    if (t > 1) {
      x = x2;
      y = y2;
    } else if (t > 0) {
      x += dx * t;
      y += dy * t;
    }
  }

  dx = px - x;
  dy = py - y;
  return (dx * dx) + (dy * dy);
}

function simplifyLine(points, tolerance) {
  if (!Array.isArray(points) || points.length <= 2) return points || [];

  const lastIndex = points.length - 1;
  const markers = new Uint8Array(points.length);
  const stack = [[0, lastIndex]];
  const sqTolerance = tolerance * tolerance;
  markers[0] = 1;
  markers[lastIndex] = 1;

  while (stack.length) {
    const [first, last] = stack.pop();
    let maxDistance = 0;
    let index = 0;

    for (let i = first + 1; i < last; i += 1) {
      const distance = squaredSegmentDistance(points[i], points[first], points[last]);
      if (distance > maxDistance) {
        index = i;
        maxDistance = distance;
      }
    }

    if (maxDistance > sqTolerance) {
      markers[index] = 1;
      if ((index - first) > 1) stack.push([first, index]);
      if ((last - index) > 1) stack.push([index, last]);
    }
  }

  return points.filter((_, index) => markers[index]);
}

function ringArea(ring) {
  if (!Array.isArray(ring) || ring.length < 4) return 0;
  let area = 0;
  for (let index = 0; index < ring.length - 1; index += 1) {
    const [x1, y1] = ring[index];
    const [x2, y2] = ring[index + 1];
    area += (x1 * y2) - (x2 * y1);
  }
  return Math.abs(area) / 2;
}

function roundPoint([lng, lat], decimals) {
  return [
    Number(lng.toFixed(decimals)),
    Number(lat.toFixed(decimals)),
  ];
}

function simplifyRing(ring, config) {
  if (!Array.isArray(ring) || ring.length < 4) return null;

  const openRing = ring.slice(0, -1);
  const simplified = simplifyLine(openRing, config.tolerance).map((point) => roundPoint(point, config.decimals));

  if (simplified.length < 3) return null;

  const closed = [...simplified, simplified[0]];
  if (closed.length < 4) return null;
  if (ringArea(closed) < config.minimumRingArea) return null;
  return closed;
}

function roundRing(ring, decimals) {
  if (!Array.isArray(ring) || ring.length < 4) return null;
  const rounded = ring.map((point) => roundPoint(point, decimals));
  const [firstLng, firstLat] = rounded[0];
  const [lastLng, lastLat] = rounded[rounded.length - 1];
  if (firstLng !== lastLng || firstLat !== lastLat) {
    rounded.push([firstLng, firstLat]);
  }
  return rounded.length >= 4 ? rounded : null;
}

function simplifyPolygon(polygon, config) {
  const simplifiedRings = polygon
    .map((ring, index) => ({ index, ring: simplifyRing(ring, config) }))
    .filter((entry) => entry.ring);

  let outer = simplifiedRings.find((entry) => entry.index === 0)?.ring || null;
  if (!outer) {
    outer = roundRing(polygon[0], config.decimals);
  }
  if (!outer) return null;

  return [
    outer,
    ...simplifiedRings
      .filter((entry) => entry.index !== 0)
      .map((entry) => entry.ring),
  ];
}

function simplifyGeometry(geometry, config) {
  if (!geometry) return null;
  if (geometry.type === "Polygon") {
    const polygon = simplifyPolygon(geometry.coordinates || [], config);
    return polygon ? { ...geometry, coordinates: polygon } : null;
  }

  if (geometry.type === "MultiPolygon") {
    const polygons = (geometry.coordinates || [])
      .map((polygon) => simplifyPolygon(polygon, config))
      .filter(Boolean);
    if (!polygons.length) return null;
    return { ...geometry, coordinates: polygons };
  }

  return geometry;
}

function simplifyFeatureCollection(collection, config) {
  return {
    ...collection,
    features: (collection.features || [])
      .map((feature) => {
        const geometry = simplifyGeometry(feature.geometry, config);
        if (!geometry) return null;
        return { ...feature, geometry };
      })
      .filter(Boolean),
  };
}

const source = JSON.parse(await readFile(sourcePath, "utf8"));
const [medium, low] = VARIANTS.map((variant) => simplifyFeatureCollection(source, variant));

await writeFile(mediumPath, `${JSON.stringify(medium)}\n`);
await writeFile(lowPath, `${JSON.stringify(low)}\n`);

console.log(`Generated ${medium.features.length} medium-res features -> ${mediumPath.pathname}`);
console.log(`Generated ${low.features.length} low-res features -> ${lowPath.pathname}`);
