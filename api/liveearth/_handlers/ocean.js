function parseFloatOrNull(value) {
  const parsed = Number.parseFloat(value);
  return Number.isFinite(parsed) ? parsed : null;
}

function toTimestampUtc(parts) {
  const year = Number.parseInt(parts[0], 10);
  const month = Number.parseInt(parts[1], 10);
  const day = Number.parseInt(parts[2], 10);
  const hour = Number.parseInt(parts[3], 10);
  const minute = Number.parseInt(parts[4], 10);
  if (![year, month, day, hour, minute].every(Number.isFinite)) return Date.now();
  return Date.UTC(year, month - 1, day, hour, minute);
}

function parseLatestObservations(raw) {
  const lines = String(raw || "")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  const headerLine = lines.find((line) => line.startsWith("#STN"));
  if (!headerLine) return [];
  const headers = headerLine.replace(/^#/, "").split(/\s+/);
  const dataStart = lines.indexOf(headerLine) + 2;
  const rows = lines.slice(dataStart);

  return rows.map((row) => {
    const columns = row.split(/\s+/);
    if (columns.length < headers.length) return null;

    const mapped = Object.fromEntries(headers.map((header, index) => [header, columns[index] ?? ""]));
    const stationId = mapped.STN || "";
    const lat = parseFloatOrNull(mapped.LAT);
    const lng = parseFloatOrNull(mapped.LON);
    if (!stationId || !Number.isFinite(lat) || !Number.isFinite(lng)) return null;

    return {
      lat,
      lng,
      name: stationId,
      observedAt: toTimestampUtc([mapped.YYYY, mapped.MM, mapped.DD, mapped.hh, mapped.mm]),
      seaTempC: parseFloatOrNull(mapped.WTMP),
      stationId,
      waveHeightM: parseFloatOrNull(mapped.WVHT),
      windSpeedMps: parseFloatOrNull(mapped.WSPD),
    };
  }).filter(Boolean);
}

export default async function handler(req, res) {
  try {
    const response = await fetch("https://www.ndbc.noaa.gov/data/latest_obs/latest_obs.txt");
    if (!response.ok) {
      return res.status(502).json({ error: `NDBC returned ${response.status}` });
    }

    const text = await response.text();
    const stations = parseLatestObservations(text)
      .sort((left, right) => {
        const rightScore = (right.waveHeightM || 0) * 1.6 + (right.windSpeedMps || 0);
        const leftScore = (left.waveHeightM || 0) * 1.6 + (left.windSpeedMps || 0);
        return rightScore - leftScore;
      })
      .slice(0, 1200);

    res.setHeader("Cache-Control", "s-maxage=90, stale-while-revalidate=120");
    return res.status(200).json({
      fetchedAt: Date.now(),
      stations,
      source: "NOAA NDBC",
    });
  } catch (error) {
    return res.status(502).json({ error: `Failed to fetch ocean observations: ${error.message}` });
  }
}
