const ORBITAL_TARGETS = [
  { id: 25544, name: "ISS", type: "Crewed" },
  { id: 20580, name: "Hubble", type: "Science" },
  { id: 28654, name: "NOAA 18", type: "Weather" },
  { id: 43013, name: "NOAA 20", type: "Weather" },
  { id: 48274, name: "Tiangong", type: "Crewed" },
];

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function normalizeSatellite(raw, target) {
  const lat = Number(raw?.latitude);
  const lng = Number(raw?.longitude);
  const altitudeKm = Number(raw?.altitude);
  const velocityKmh = Number(raw?.velocity);
  if (
    !Number.isFinite(lat)
    || !Number.isFinite(lng)
    || !Number.isFinite(altitudeKm)
    || !Number.isFinite(velocityKmh)
  ) {
    return null;
  }

  // Approximate communication horizon from orbital altitude.
  const earthRadiusKm = 6_371;
  const horizonKm = Math.sqrt((altitudeKm * altitudeKm) + (2 * earthRadiusKm * altitudeKm));
  const horizonDegrees = clamp((horizonKm / 111.32), 4, 42);

  return {
    altitudeKm,
    horizonDegrees,
    id: target.id,
    lat,
    lng,
    name: target.name,
    observedAt: Number(raw?.timestamp) ? Number(raw.timestamp) * 1000 : Date.now(),
    type: target.type,
    velocityKmh,
    visibility: raw?.visibility || "unknown",
  };
}

export default async function handler(req, res) {
  const source = "wheretheiss.at";
  try {
    const settled = await Promise.allSettled(
      ORBITAL_TARGETS.map(async (target) => {
        const response = await fetch(`https://api.wheretheiss.at/v1/satellites/${target.id}`);
        if (!response.ok) {
          throw new Error(`${target.name} returned ${response.status}`);
        }
        const payload = await response.json();
        const normalized = normalizeSatellite(payload, target);
        if (!normalized) {
          throw new Error(`${target.name} returned incomplete position data`);
        }
        return normalized;
      })
    );

    const satellites = settled
      .filter((result) => result.status === "fulfilled")
      .map((result) => result.value)
      .sort((left, right) => right.velocityKmh - left.velocityKmh);

    if (!satellites.length) {
      return res.status(502).json({
        error: "No live orbital positions are currently available.",
      });
    }

    const crewedCount = satellites.filter((satellite) => satellite.type === "Crewed").length;
    const weatherCount = satellites.filter((satellite) => satellite.type === "Weather").length;
    const scienceCount = satellites.filter((satellite) => satellite.type === "Science").length;
    const avgAltitudeKm = satellites.reduce((sum, satellite) => sum + satellite.altitudeKm, 0) / satellites.length;
    const maxVelocityKmh = satellites.reduce((max, satellite) => Math.max(max, satellite.velocityKmh), 0);
    const failedTargets = settled
      .filter((result) => result.status === "rejected")
      .map((result) => result.reason?.message || "unknown fetch error");

    res.setHeader("Cache-Control", "s-maxage=20, stale-while-revalidate=45");
    return res.status(200).json({
      avgAltitudeKm,
      counts: {
        crewed: crewedCount,
        science: scienceCount,
        total: satellites.length,
        weather: weatherCount,
      },
      failedTargets,
      fetchedAt: Date.now(),
      maxVelocityKmh,
      satellites,
      source,
    });
  } catch (error) {
    return res.status(502).json({
      error: `Failed to fetch live orbital data: ${error.message}`,
      source,
    });
  }
}
