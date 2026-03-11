function wrapLongitude(value) {
  let next = value;
  while (next > 180) next -= 360;
  while (next < -180) next += 360;
  return next;
}

function buildFallbackFlights(now = Date.now()) {
  const minutePhase = (now / 60000) % 360;
  const templates = [
    { icao24: "fba001", callsign: "AFR123", originCountry: "France", lat: 48.85, lng: 2.35, track: 62, velocity: 236, altitude: 10800 },
    { icao24: "fba002", callsign: "BAW450", originCountry: "United Kingdom", lat: 51.47, lng: -0.45, track: 112, velocity: 249, altitude: 11250 },
    { icao24: "fba003", callsign: "DAL88", originCountry: "United States", lat: 40.64, lng: -73.78, track: 78, velocity: 257, altitude: 11400 },
    { icao24: "fba004", callsign: "UAE201", originCountry: "United Arab Emirates", lat: 25.25, lng: 55.36, track: 91, velocity: 261, altitude: 11850 },
    { icao24: "fba005", callsign: "QFA12", originCountry: "Australia", lat: -33.94, lng: 151.18, track: 54, velocity: 244, altitude: 10950 },
    { icao24: "fba006", callsign: "SIA318", originCountry: "Singapore", lat: 1.36, lng: 103.99, track: 128, velocity: 252, altitude: 11640 },
    { icao24: "fba007", callsign: "JAL43", originCountry: "Japan", lat: 35.55, lng: 139.78, track: 83, velocity: 246, altitude: 11180 },
    { icao24: "fba008", callsign: "LAT302", originCountry: "Brazil", lat: -23.43, lng: -46.47, track: 102, velocity: 232, altitude: 10460 },
  ];

  return templates.map((template, index) => {
    const heading = ((template.track + minutePhase + (index * 17)) % 360) * (Math.PI / 180);
    const distanceDeg = 0.55 + (index * 0.07);
    const lat = template.lat + Math.cos(heading) * distanceDeg;
    const lng = wrapLongitude(template.lng + (Math.sin(heading) * distanceDeg / Math.max(0.25, Math.cos(template.lat * Math.PI / 180))));
    return {
      baroAltitude: template.altitude - 120,
      callsign: template.callsign,
      geoAltitude: template.altitude,
      icao24: template.icao24,
      lastContact: Math.floor(now / 1000),
      lat: Number(lat.toFixed(4)),
      lng: Number(lng.toFixed(4)),
      originCountry: template.originCountry,
      positionSource: 0,
      spi: false,
      squawk: null,
      timePosition: Math.floor((now - 15_000) / 1000),
      track: Number((((template.track + minutePhase) % 360) + 360).toFixed(1)),
      velocity: template.velocity,
      verticalRate: index % 2 === 0 ? 1.8 : -1.1,
    };
  });
}

export default async function handler(req, res) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8_000);

  try {
    const response = await fetch("https://opensky-network.org/api/states/all", {
      headers: {
        "Accept": "application/json",
        "User-Agent": "liveearth-showcase/1.0",
      },
      signal: controller.signal,
    });
    if (!response.ok) {
      throw new Error(`OpenSky returned ${response.status}`);
    }

    const payload = await response.json();
    const flights = (Array.isArray(payload?.states) ? payload.states : [])
      .map((stateRow) => {
        const [
          icao24,
          callsign,
          originCountry,
          timePosition,
          lastContact,
          longitude,
          latitude,
          baroAltitude,
          onGround,
          velocity,
          trueTrack,
          verticalRate,
          ,
          geoAltitude,
          squawk,
          spi,
          positionSource,
        ] = stateRow;

        if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) return null;
        if (onGround) return null;

        return {
          baroAltitude: Number.isFinite(baroAltitude) ? baroAltitude : null,
          callsign: String(callsign || "").trim() || null,
          geoAltitude: Number.isFinite(geoAltitude) ? geoAltitude : null,
          icao24: String(icao24 || "").trim() || null,
          lastContact: Number.isFinite(lastContact) ? lastContact : null,
          lat: latitude,
          lng: longitude,
          originCountry: String(originCountry || "").trim() || "Unknown",
          positionSource: Number.isFinite(positionSource) ? positionSource : null,
          spi: Boolean(spi),
          squawk: String(squawk || "").trim() || null,
          timePosition: Number.isFinite(timePosition) ? timePosition : null,
          track: Number.isFinite(trueTrack) ? trueTrack : null,
          velocity: Number.isFinite(velocity) ? velocity : null,
          verticalRate: Number.isFinite(verticalRate) ? verticalRate : null,
        };
      })
      .filter(Boolean)
      .sort((left, right) => (right.velocity || 0) - (left.velocity || 0))
      .slice(0, 1500);

    res.setHeader("Cache-Control", "s-maxage=20, stale-while-revalidate=30");
    return res.status(200).json({
      degraded: false,
      fetchedAt: Date.now(),
      flights,
      sourceTime: Number.isFinite(payload?.time) ? payload.time * 1000 : null,
    });
  } catch (error) {
    const now = Date.now();
    res.setHeader("Cache-Control", "s-maxage=20, stale-while-revalidate=60");
    return res.status(200).json({
      degraded: true,
      fetchedAt: now,
      flights: buildFallbackFlights(now),
      sourceTime: now,
      warning: `OpenSky unavailable: ${error.message}`,
    });
  } finally {
    clearTimeout(timeout);
  }
}
