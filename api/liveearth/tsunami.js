function toNumber(value) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
}

function toTimestamp(value) {
  const parsed = Date.parse(value);
  return Number.isFinite(parsed) ? parsed : null;
}

function classifyRisk(magnitude, tsunamiFlag) {
  if (tsunamiFlag && magnitude >= 8) return "Extreme";
  if (tsunamiFlag && magnitude >= 7) return "Severe";
  if (tsunamiFlag && magnitude >= 6) return "Elevated";
  if (tsunamiFlag) return "Advisory";
  if (magnitude >= 7.5) return "Severe";
  if (magnitude >= 6.5) return "Elevated";
  return "Advisory";
}

function normalizeEvent(feature) {
  const props = feature?.properties || {};
  const coords = Array.isArray(feature?.geometry?.coordinates) ? feature.geometry.coordinates : [];
  const lng = toNumber(coords[0]);
  const lat = toNumber(coords[1]);
  if (!Number.isFinite(lat) || !Number.isFinite(lng)) return null;

  const magnitude = toNumber(props.mag);
  const depthKm = toNumber(coords[2]);
  const observedAt = Number.isFinite(props.time) ? Number(props.time) : toTimestamp(props.updated) || Date.now();
  const tsunamiFlag = Number(props.tsunami) === 1;

  return {
    depthKm,
    id: String(feature?.id || `${observedAt}-${lat}-${lng}`),
    lat,
    lng,
    magnitude,
    observedAt,
    place: String(props.place || "Ocean event"),
    risk: classifyRisk(magnitude || 0, tsunamiFlag),
    sourceUrl: String(props.url || ""),
    status: String(props.status || "reviewed"),
    tsunamiFlag,
    updatedAt: Number.isFinite(props.updated) ? Number(props.updated) : observedAt,
  };
}

export default async function handler(req, res) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8_000);

  try {
    const now = Date.now();
    const lookbackDaysRaw = Number(req.query?.days);
    const minMagRaw = Number(req.query?.minMag);
    const lookbackDays = Number.isFinite(lookbackDaysRaw) ? Math.max(1, Math.min(14, lookbackDaysRaw)) : 7;
    const minMag = Number.isFinite(minMagRaw) ? Math.max(5, Math.min(9.5, minMagRaw)) : 5.5;
    const startTime = new Date(now - (lookbackDays * 24 * 60 * 60 * 1000)).toISOString();

    const url = new URL("https://earthquake.usgs.gov/fdsnws/event/1/query");
    url.searchParams.set("format", "geojson");
    url.searchParams.set("orderby", "time");
    url.searchParams.set("eventtype", "earthquake");
    url.searchParams.set("tsunami", "1");
    url.searchParams.set("minmagnitude", String(minMag));
    url.searchParams.set("starttime", startTime);
    url.searchParams.set("limit", "200");

    const response = await fetch(url.toString(), {
      headers: {
        "Accept": "application/json",
        "User-Agent": "liveearth-showcase/1.0",
      },
      signal: controller.signal,
    });
    if (!response.ok) {
      throw new Error(`USGS returned ${response.status}`);
    }

    const payload = await response.json();
    const events = (Array.isArray(payload?.features) ? payload.features : [])
      .map((feature) => normalizeEvent(feature))
      .filter(Boolean)
      .sort((left, right) => (right.magnitude || 0) - (left.magnitude || 0));

    const maxMagnitude = events.reduce((max, event) => Math.max(max, Number(event.magnitude) || 0), 0);
    const severeCount = events.filter((event) => (Number(event.magnitude) || 0) >= 7).length;

    res.setHeader("Cache-Control", "s-maxage=90, stale-while-revalidate=120");
    return res.status(200).json({
      degraded: false,
      events,
      fetchedAt: now,
      lookbackDays,
      maxMagnitude,
      minMagnitude: minMag,
      severeCount,
      source: "USGS Earthquake Hazards Program (tsunami-flagged events)",
    });
  } catch (error) {
    const now = Date.now();
    res.setHeader("Cache-Control", "s-maxage=90, stale-while-revalidate=180");
    return res.status(200).json({
      degraded: true,
      events: [],
      fetchedAt: now,
      lookbackDays: 7,
      maxMagnitude: 0,
      minMagnitude: 5.5,
      severeCount: 0,
      source: "USGS Earthquake Hazards Program (tsunami-flagged events)",
      warning: `Tsunami feed unavailable: ${error.message}`,
    });
  } finally {
    clearTimeout(timeout);
  }
}
