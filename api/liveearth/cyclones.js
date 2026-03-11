function toNumber(value) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
}

function normalizeLongitude(value) {
  if (!Number.isFinite(value)) return value;
  let lng = value;
  while (lng > 180) lng -= 360;
  while (lng < -180) lng += 360;
  return lng;
}

function parseObservedAt(record) {
  const candidate = record.time
    || record.date
    || record.datetime
    || record.lastUpdate
    || record.updatedAt
    || record.advisoryDate
    || record.validTime;
  if (!candidate) return Date.now();
  const parsed = Date.parse(candidate);
  return Number.isFinite(parsed) ? parsed : Date.now();
}

function categoryFromWind(windKts) {
  if (!Number.isFinite(windKts) || windKts < 34) return "Disturbance";
  if (windKts < 64) return "Tropical Storm";
  if (windKts < 83) return "Category 1";
  if (windKts < 96) return "Category 2";
  if (windKts < 113) return "Category 3";
  if (windKts < 137) return "Category 4";
  return "Category 5";
}

function parseTrack(record) {
  const candidates = record.track || record.forecast || record.path || record.points;
  if (!Array.isArray(candidates)) return [];
  return candidates
    .map((point) => {
      const lat = toNumber(point?.lat ?? point?.latitude ?? point?.y);
      const lng = toNumber(point?.lon ?? point?.lng ?? point?.longitude ?? point?.x);
      if (!Number.isFinite(lat) || !Number.isFinite(lng)) return null;
      return [lat, normalizeLongitude(lng)];
    })
    .filter(Boolean)
    .slice(0, 30);
}

function flattenCandidates(payload) {
  const queue = [payload];
  const seen = new Set();
  const candidates = [];
  const MAX_VISITS = 4_000;
  let visits = 0;

  while (queue.length && visits < MAX_VISITS) {
    visits += 1;
    const current = queue.shift();
    if (!current || seen.has(current)) continue;
    if (typeof current === "object") seen.add(current);

    if (Array.isArray(current)) {
      for (const item of current) queue.push(item);
      continue;
    }

    if (typeof current !== "object") continue;
    const lat = toNumber(current.lat ?? current.latitude ?? current.center_lat ?? current.y);
    const lng = toNumber(current.lon ?? current.lng ?? current.longitude ?? current.center_lon ?? current.x);
    if (Number.isFinite(lat) && Number.isFinite(lng)) {
      candidates.push(current);
    }

    if (Array.isArray(current.features)) {
      for (const feature of current.features) {
        const geometry = feature?.geometry;
        const coordinates = Array.isArray(geometry?.coordinates) ? geometry.coordinates : [];
        const geoLat = toNumber(coordinates[1]);
        const geoLng = toNumber(coordinates[0]);
        if (Number.isFinite(geoLat) && Number.isFinite(geoLng)) {
          candidates.push({
            ...feature.properties,
            lat: geoLat,
            lng: geoLng,
            track: feature.properties?.track,
          });
        }
      }
    }

    for (const value of Object.values(current)) {
      if (value && typeof value === "object") queue.push(value);
    }
  }

  return candidates;
}

function normalizeStorm(record) {
  const lat = toNumber(record.lat ?? record.latitude ?? record.center_lat ?? record.y);
  const lng = toNumber(record.lon ?? record.lng ?? record.longitude ?? record.center_lon ?? record.x);
  if (!Number.isFinite(lat) || !Number.isFinite(lng)) return null;

  const windKts = toNumber(
    record.windKts
      ?? record.maxWindKts
      ?? record.max_wind_kt
      ?? record.maxwind
      ?? record.vmax
      ?? record.wind
      ?? record.intensity
      ?? record.sustainedWind
  );
  const pressureMb = toNumber(record.pressureMb ?? record.pressure ?? record.mslp ?? record.centralPressure);
  const movementKts = toNumber(record.movementKts ?? record.movementSpeedKts ?? record.speed ?? record.motion_speed);
  const movementDir = record.movementDir ?? record.motionDirection ?? record.movement ?? record.motion;
  const name = String(record.name ?? record.stormName ?? record.storm_name ?? record.atcfName ?? record.id ?? "Cyclone").trim();
  const basin = String(record.basin ?? record.region ?? record.ocean ?? "Unknown").trim();
  const track = parseTrack(record);

  return {
    basin,
    category: categoryFromWind(windKts),
    id: String(record.id ?? record.atcfid ?? record.stormId ?? `${name}-${lat}-${lng}`),
    lat,
    lng: normalizeLongitude(lng),
    movementDir: movementDir ? String(movementDir) : "",
    movementKts,
    name,
    observedAt: parseObservedAt(record),
    pressureMb,
    track,
    windKts,
  };
}

export default async function handler(req, res) {
  try {
    const response = await fetch("https://www.nhc.noaa.gov/CurrentStorms.json");
    if (!response.ok) {
      return res.status(502).json({ error: `NHC returned ${response.status}` });
    }

    const payload = await response.json();
    const storms = flattenCandidates(payload)
      .map((record) => normalizeStorm(record))
      .filter(Boolean)
      .filter((storm, index, arr) => arr.findIndex((entry) => entry.id === storm.id) === index)
      .sort((left, right) => (right.windKts || 0) - (left.windKts || 0))
      .slice(0, 80);

    res.setHeader("Cache-Control", "s-maxage=180, stale-while-revalidate=240");
    return res.status(200).json({
      fetchedAt: Date.now(),
      source: "NOAA National Hurricane Center",
      storms,
    });
  } catch (error) {
    return res.status(502).json({ error: `Failed to fetch cyclone data: ${error.message}` });
  }
}
