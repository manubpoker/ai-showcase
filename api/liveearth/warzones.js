const HOTSPOTS = [
  { id: "ukraine", name: "Ukraine Front", region: "Donbas", lat: 48.58, lng: 37.87, query: "\"Ukraine\" war OR conflict" },
  { id: "gaza", name: "Gaza Strip", region: "Eastern Mediterranean", lat: 31.45, lng: 34.4, query: "\"Gaza\" war OR conflict" },
  { id: "sudan", name: "Sudan", region: "Khartoum / Darfur", lat: 15.59, lng: 32.53, query: "\"Sudan\" conflict OR war" },
  { id: "syria", name: "Syria", region: "Idlib / Aleppo", lat: 35.93, lng: 36.63, query: "\"Syria\" conflict OR war" },
  { id: "yemen", name: "Yemen", region: "Red Sea Corridor", lat: 15.37, lng: 44.2, query: "\"Yemen\" conflict OR war" },
  { id: "myanmar", name: "Myanmar", region: "Sagaing / Shan", lat: 21.97, lng: 96.08, query: "\"Myanmar\" conflict OR war" },
  { id: "drc", name: "DR Congo", region: "North Kivu", lat: -1.68, lng: 29.22, query: "\"DR Congo\" conflict OR war" },
];

function cleanEntityText(value) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function severityFromCount(count) {
  if (count >= 5) return "high";
  if (count >= 2) return "elevated";
  return "watch";
}

function parseItems(xml) {
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  const items = [];
  let match;

  while ((match = itemRegex.exec(xml)) !== null && items.length < 6) {
    const block = match[1];
    const title = (
      block.match(/<title><!\[CDATA\[([\s\S]*?)\]\]><\/title>/) ||
      block.match(/<title>([\s\S]*?)<\/title>/) ||
      []
    )[1] || "";
    const link = (block.match(/<link>([\s\S]*?)<\/link>/) || [])[1] || "";
    const pubDate = (block.match(/<pubDate>([\s\S]*?)<\/pubDate>/) || [])[1] || "";
    const source = (block.match(/<source[^>]*>([\s\S]*?)<\/source>/) || [])[1] || "";
    if (!title || !link) continue;
    items.push({
      publishedAt: pubDate || null,
      source: cleanEntityText(source),
      title: cleanEntityText(title),
      url: cleanEntityText(link),
    });
  }

  return items;
}

async function fetchZone(zone, signal) {
  const url = `https://news.google.com/rss/search?q=${encodeURIComponent(zone.query)}&hl=en-GB&gl=GB&ceid=GB:en`;
  const response = await fetch(url, {
    headers: {
      "Accept": "application/rss+xml",
      "User-Agent": "liveearth-showcase/1.0",
    },
    signal,
  });
  if (!response.ok) {
    throw new Error(`Google News returned ${response.status}`);
  }

  const xml = await response.text();
  const items = parseItems(xml);
  const lead = items[0] || null;
  const updatedAt = lead?.publishedAt && Number.isFinite(Date.parse(lead.publishedAt))
    ? Date.parse(lead.publishedAt)
    : Date.now();

  return {
    ...zone,
    articleCount: items.length,
    headline: lead?.title || "Monitoring active conflict reporting",
    source: lead?.source || "Google News",
    updatedAt,
    url: lead?.url || "",
    severity: severityFromCount(items.length),
  };
}

function fallbackZones() {
  return HOTSPOTS.map((zone, index) => ({
    ...zone,
    articleCount: 0,
    headline: "Monitoring active conflict reporting",
    severity: index < 3 ? "high" : "elevated",
    source: "Curated monitor",
    updatedAt: Date.now(),
    url: "",
  }));
}

export default async function handler(req, res) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8_500);

  try {
    const zones = await Promise.all(HOTSPOTS.map((zone) => fetchZone(zone, controller.signal)));
    res.setHeader("Cache-Control", "s-maxage=600, stale-while-revalidate=900");
    return res.status(200).json({
      degraded: false,
      fetchedAt: Date.now(),
      zones,
    });
  } catch (error) {
    res.setHeader("Cache-Control", "s-maxage=600, stale-while-revalidate=1200");
    return res.status(200).json({
      degraded: true,
      fetchedAt: Date.now(),
      warning: `Conflict feed unavailable: ${error.message}`,
      zones: fallbackZones(),
    });
  } finally {
    clearTimeout(timeout);
  }
}
