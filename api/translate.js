export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'POST only' });
  }

  const { texts, from, to } = req.body || {};
  if (!texts || !Array.isArray(texts) || !to) {
    return res.status(400).json({ error: 'Missing texts array or target language' });
  }

  // Translate each text via MyMemory (no API key needed)
  const results = await Promise.all(
    texts.map(async (text) => {
      if (!text || text.trim().length === 0) return text;
      try {
        const langPair = `${from || 'autodetect'}|${to}`;
        const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${encodeURIComponent(langPair)}`;
        const r = await fetch(url);
        if (!r.ok) return text;
        const data = await r.json();
        if (data.responseStatus === 200 && data.responseData && data.responseData.translatedText) {
          return data.responseData.translatedText;
        }
        return text;
      } catch {
        return text;
      }
    })
  );

  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate=3600');
  return res.status(200).json({ translations: results });
}
