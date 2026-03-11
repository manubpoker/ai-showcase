const COUNTRY_LANG = {
  AD: "es", AE: "ar", AF: "ps", AG: "en", AI: "en", AL: "sq", AM: "hy", AO: "pt-BR",
  AR: "es-419", AS: "en", AT: "de", AU: "en-AU", AZ: "az",
  BA: "bs", BB: "en", BD: "bn", BE: "fr", BF: "fr", BG: "bg", BH: "ar", BI: "fr",
  BJ: "fr", BM: "en", BN: "ms", BO: "es-419", BR: "pt-BR", BS: "en", BT: "en", BW: "en",
  BY: "be", BZ: "en",
  CA: "en-CA", CD: "fr", CF: "fr", CG: "fr", CH: "de", CI: "fr", CK: "en", CL: "es-419",
  CM: "fr", CN: "zh-CN", CO: "es-419", CR: "es-419", CU: "es-419", CV: "pt-PT", CW: "nl",
  CY: "el", CZ: "cs",
  DE: "de", DJ: "fr", DK: "da", DM: "en", DO: "es-419", DZ: "ar",
  EC: "es-419", EE: "et", EG: "ar", ER: "en", ES: "es", ET: "en",
  FI: "fi", FJ: "en", FK: "en", FM: "en", FO: "da", FR: "fr",
  GA: "fr", GB: "en-GB", GD: "en", GE: "ka", GH: "en", GL: "da", GM: "en", GN: "fr",
  GQ: "es", GR: "el", GT: "es-419", GU: "en", GW: "pt-PT", GY: "en",
  HK: "zh-HK", HN: "es-419", HR: "hr", HT: "fr", HU: "hu",
  ID: "id", IE: "en-IE", IL: "he", IN: "en-IN", IQ: "ar", IR: "fa", IS: "is", IT: "it",
  JM: "en", JO: "ar", JP: "ja",
  KE: "en", KG: "ru", KH: "km", KI: "en", KN: "en", KP: "ko", KR: "ko", KW: "ar", KZ: "ru",
  LA: "lo", LB: "ar", LC: "en", LI: "de", LK: "si", LR: "en", LS: "en", LT: "lt", LU: "fr",
  LV: "lv", LY: "ar",
  MA: "fr", MC: "fr", MD: "ro", ME: "sr", MG: "fr", MH: "en", MK: "mk", ML: "fr", MM: "my",
  MN: "mn", MO: "zh-HK", MR: "ar", MT: "en", MU: "en", MV: "en", MW: "en", MX: "es-419",
  MY: "ms", MZ: "pt-BR",
  NA: "en", NC: "fr", NE: "fr", NG: "en", NI: "es-419", NL: "nl", NO: "no", NP: "ne", NR: "en",
  NZ: "en-NZ",
  OM: "ar",
  PA: "es-419", PE: "es-419", PH: "en-PH", PK: "ur", PL: "pl", PR: "es-419", PT: "pt-PT",
  PW: "en", PY: "es-419",
  QA: "ar",
  RO: "ro", RS: "sr", RU: "ru", RW: "fr",
  SA: "ar", SB: "en", SC: "en", SD: "ar", SE: "sv", SG: "en-SG", SI: "sl", SK: "sk", SL: "en",
  SM: "it", SN: "fr", SO: "so", SR: "nl", ST: "pt-PT", SV: "es-419", SY: "ar", SZ: "en",
  TD: "fr", TG: "fr", TH: "th", TJ: "ru", TL: "pt-PT", TM: "ru", TN: "ar", TO: "en",
  TR: "tr", TT: "en", TV: "en", TW: "zh-TW", TZ: "en",
  UA: "uk", UG: "en", US: "en-US", UY: "es-419", UZ: "uz",
  VC: "en", VE: "es-419", VN: "vi", VU: "en",
  WS: "en",
  YE: "ar",
  ZA: "en-ZA", ZM: "en", ZW: "en",
};

function cleanEntityText(value) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

export default async function handler(req, res) {
  const { country } = req.query;
  if (!country || !/^[a-z]{2}$/i.test(country)) {
    return res.status(400).json({ error: "Invalid country code" });
  }

  const cc = country.toUpperCase();
  const lang = COUNTRY_LANG[cc] || "en";
  const baseLang = lang.split("-")[0];
  const url = `https://news.google.com/rss?hl=${lang}&gl=${cc}&ceid=${cc}:${baseLang}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      return res.status(502).json({ error: `Google News returned ${response.status}` });
    }

    const xml = await response.text();
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    const articles = [];
    let match;

    while ((match = itemRegex.exec(xml)) !== null && articles.length < 8) {
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
      articles.push({
        title: cleanEntityText(title),
        url: cleanEntityText(link),
        source: cleanEntityText(source),
        publishedAt: pubDate || null,
      });
    }

    res.setHeader("Cache-Control", "s-maxage=600, stale-while-revalidate=300");
    return res.status(200).json({ articles });
  } catch (error) {
    return res.status(502).json({ error: `Failed to fetch news: ${error.message}` });
  }
}
