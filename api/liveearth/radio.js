export default async function handler(req, res) {
  const { country } = req.query;
  const countryParam = country ? `&countryExact=true&country=${encodeURIComponent(country)}` : "";
  const limit = country ? 100 : 500;
  const endpoints = [
    `https://all.api.radio-browser.info/json/stations/search?limit=${limit}&order=clickcount&reverse=true&has_geo_info=true&hidebroken=true${countryParam}`,
    `https://nl1.api.radio-browser.info/json/stations/search?limit=${limit}&order=clickcount&reverse=true&has_geo_info=true&hidebroken=true${countryParam}`,
    `https://de1.api.radio-browser.info/json/stations/search?limit=${limit}&order=clickcount&reverse=true&has_geo_info=true&hidebroken=true${countryParam}`,
  ];

  let stations = null;
  for (const endpoint of endpoints) {
    try {
      const response = await fetch(endpoint);
      if (!response.ok) continue;
      stations = await response.json();
      break;
    } catch {
      // Try the next mirror.
    }
  }

  if (!stations) {
    return res.status(502).json({ error: "All radio endpoints failed" });
  }

  const payload = stations
    .filter((station) => station.geo_lat && station.geo_long && (station.url_resolved || station.url))
    .slice(0, limit)
    .map((station) => ({
      bitrate: station.bitrate,
      codec: station.codec,
      country: station.country,
      countryCode: station.countrycode,
      lat: station.geo_lat,
      lng: station.geo_long,
      name: station.name,
      tags: station.tags,
      url: station.url_resolved || station.url,
    }));

  res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate=600");
  return res.status(200).json({ stations: payload });
}
