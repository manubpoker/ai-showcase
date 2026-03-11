export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "POST only" });
  }

  const { texts, from, to } = req.body || {};
  if (!Array.isArray(texts) || !to) {
    return res.status(400).json({ error: "Missing texts array or target language" });
  }

  const translations = await Promise.all(
    texts.map(async (text) => {
      if (!text || !String(text).trim()) return text;
      try {
        const langPair = `${from || "autodetect"}|${to}`;
        const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${encodeURIComponent(langPair)}`;
        const response = await fetch(url);
        if (!response.ok) return text;
        const payload = await response.json();
        if (payload.responseStatus === 200 && payload.responseData?.translatedText) {
          return payload.responseData.translatedText;
        }
      } catch {
        // Fall back to the original title when the free translator is unavailable.
      }
      return text;
    })
  );

  res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate=3600");
  return res.status(200).json({ translations });
}
