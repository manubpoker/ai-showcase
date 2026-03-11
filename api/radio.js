export default async function handler(req, res) {
  const { country } = req.query;
  const countryParam = country ? `&countryExact=true&country=${encodeURIComponent(country)}` : '';
  const limit = country ? 100 : 500;

  const endpoints = [
    `https://all.api.radio-browser.info/json/stations/search?limit=${limit}&order=clickcount&reverse=true&has_geo_info=true&hidebroken=true${countryParam}`,
    `https://nl1.api.radio-browser.info/json/stations/search?limit=${limit}&order=clickcount&reverse=true&has_geo_info=true&hidebroken=true${countryParam}`,
    `https://de1.api.radio-browser.info/json/stations/search?limit=${limit}&order=clickcount&reverse=true&has_geo_info=true&hidebroken=true${countryParam}`,
  ];

  let data;
  for (const ep of endpoints) {
    try {
      const r = await fetch(ep);
      if (r.ok) { data = await r.json(); break; }
    } catch { continue; }
  }

  if (!data) {
    return res.status(502).json({ error: 'All radio endpoints failed' });
  }

  const stations = data
    .filter(s => s.geo_lat && s.geo_long && (s.url_resolved || s.url))
    .slice(0, limit)
    .map(s => ({
      name: s.name,
      url: s.url_resolved || s.url,
      country: s.country,
      countryCode: s.countrycode,
      tags: s.tags,
      codec: s.codec,
      bitrate: s.bitrate,
      lat: s.geo_lat,
      lng: s.geo_long,
    }));

  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=600');
  return res.status(200).json({ stations });
}
