function classifyFlux(flux) {
  if (!Number.isFinite(flux) || flux <= 0) return "Unknown";
  if (flux < 1e-7) return `A${(flux / 1e-8).toFixed(1)}`;
  if (flux < 1e-6) return `B${(flux / 1e-7).toFixed(1)}`;
  if (flux < 1e-5) return `C${(flux / 1e-6).toFixed(1)}`;
  if (flux < 1e-4) return `M${(flux / 1e-5).toFixed(1)}`;
  return `X${(flux / 1e-4).toFixed(1)}`;
}

function parseSamples(payload) {
  return (Array.isArray(payload) ? payload : [])
    .map((entry) => {
      const observedAt = entry?.time_tag ? new Date(entry.time_tag).getTime() : NaN;
      const flux = Number(entry?.flux ?? entry?.observed_flux);
      if (!Number.isFinite(observedAt) || !Number.isFinite(flux) || flux <= 0) return null;
      return {
        observedAt,
        flux,
      };
    })
    .filter(Boolean)
    .sort((left, right) => left.observedAt - right.observedAt);
}

function normalizeTrend(samples) {
  if (samples.length < 8) return "steady";
  const recent = samples.slice(-8);
  const first = recent[0]?.flux;
  const last = recent.at(-1)?.flux;
  if (!Number.isFinite(first) || !Number.isFinite(last) || first <= 0 || last <= 0) return "steady";
  const ratio = last / first;
  if (ratio >= 1.2) return "rising";
  if (ratio <= 0.83) return "falling";
  return "steady";
}

export default async function handler(req, res) {
  try {
    const response = await fetch("https://services.swpc.noaa.gov/json/goes/primary/xrays-1-day.json");
    if (!response.ok) {
      return res.status(502).json({ error: `SWPC returned ${response.status}` });
    }

    const payload = await response.json();
    const samples = parseSamples(payload);
    if (!samples.length) {
      return res.status(502).json({ error: "No usable solar flare samples returned." });
    }

    const latest = samples.at(-1);
    const windowStart = Date.now() - (24 * 60 * 60 * 1000);
    const last24h = samples.filter((sample) => sample.observedAt >= windowStart);
    const peak24h = (last24h.length ? last24h : samples)
      .reduce((max, sample) => (sample.flux > max.flux ? sample : max), latest);

    const compactSamples = samples.filter((sample, index) => (
      index % 4 === 0 || index === samples.length - 1
    ));

    res.setHeader("Cache-Control", "s-maxage=45, stale-while-revalidate=75");
    return res.status(200).json({
      fetchedAt: Date.now(),
      latestClass: classifyFlux(latest.flux),
      latestFlux: latest.flux,
      latestObservedAt: latest.observedAt,
      peakClass24h: classifyFlux(peak24h.flux),
      peakFlux24h: peak24h.flux,
      peakObservedAt24h: peak24h.observedAt,
      samples: compactSamples,
      source: "NOAA SWPC GOES X-ray flux",
      trend: normalizeTrend(samples),
    });
  } catch (error) {
    return res.status(502).json({ error: `Failed to fetch solar flare data: ${error.message}` });
  }
}
