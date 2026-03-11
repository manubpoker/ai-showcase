const RIVER_SITES = [
  "07010000","07289000","07022000","03611500","03086000",
  "06934500","06893000","06818000","06610000","06486000",
  "14105700","14211720","12472800","14113000","12045500",
  "09380000","09402500","09415000","09427520","09429490",
  "03294500","03293000","03274000","03234500","03049625",
  "02089500","02085000","02084000","01463500","01578310",
  "08158000","08176500","08181500","08188500","08475000",
  "05587450","05543500","05446500","05420500","05331000",
  "02323500","02358000","02329000","02313000","02231000",
  "01646500","01570500","01463500","01357500","01334000",
].join(",");

const FEEDS = {
  hazards: {
    cache: "s-maxage=600, stale-while-revalidate=1200",
    fallback: { events: [] },
    url: "https://eonet.gsfc.nasa.gov/api/v3/events?status=open&limit=250",
  },
  iss: {
    cache: "s-maxage=10, stale-while-revalidate=30",
    fallback: {
      altitude: 408,
      latitude: 0,
      longitude: 0,
      name: "iss",
      timestamp: Date.now(),
      velocity: 27600,
    },
    url: "https://api.wheretheiss.at/v1/satellites/25544",
  },
  rivers: {
    cache: "s-maxage=900, stale-while-revalidate=1800",
    fallback: { value: { timeSeries: [] } },
    url: `https://waterservices.usgs.gov/nwis/iv/?format=json&sites=${RIVER_SITES}&parameterCd=00060,00065&siteStatus=active`,
  },
  spaceweather: {
    cache: "s-maxage=120, stale-while-revalidate=300",
    fallback: [],
    url: "https://services.swpc.noaa.gov/json/planetary_k_index_1m.json",
  },
};

export default async function handler(req, res) {
  const feedKey = String(req.query.type || "").trim();
  const feed = FEEDS[feedKey];
  if (!feed) {
    return res.status(400).json({ error: "Unknown feed type" });
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), feedKey === "iss" ? 8_000 : 12_000);

  try {
    const response = await fetch(feed.url, {
      headers: {
        Accept: "application/json",
        "User-Agent": "liveearth-showcase/1.0",
      },
      signal: controller.signal,
    });
    if (!response.ok) {
      throw new Error(`Upstream returned ${response.status}`);
    }

    const payload = await response.json();
    res.setHeader("Cache-Control", feed.cache);
    return res.status(200).json(payload);
  } catch (error) {
    res.setHeader("Cache-Control", "s-maxage=45, stale-while-revalidate=240");
    return res.status(200).json(feed.fallback);
  } finally {
    clearTimeout(timeout);
  }
}
