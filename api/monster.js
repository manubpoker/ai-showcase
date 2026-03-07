export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { description, type } = req.body;
  if (!description) return res.status(400).json({ error: 'Missing description' });

  const geminiKey = process.env.GEMINI_API_KEY;
  const claudeKey = process.env.ANTHROPIC_API_KEY;
  if (!geminiKey || !claudeKey) return res.status(500).json({ error: 'API keys not configured' });

  try {
    // Generate image with Gemini and stats with Claude in parallel
    const [imageResult, statsResult] = await Promise.all([
      generateImage(geminiKey, description, type),
      generateStats(claudeKey, description, type),
    ]);

    return res.status(200).json({
      image: imageResult,
      ...statsResult,
    });
  } catch (err) {
    console.error('Monster generation error:', err);
    return res.status(500).json({ error: err.message || 'Generation failed' });
  }
}

async function generateImage(apiKey, description, type) {
  const prompt = type === 'opponent'
    ? `A fearsome fantasy monster portrait: ${description}. Dark dramatic lighting, detailed digital painting style, square portrait composition, no text or words.`
    : `A fantasy creature portrait: ${description}. Epic dramatic lighting, detailed digital painting style, square portrait composition, no text or words.`;

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-1-image-preview:generateContent?key=${apiKey}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { responseModalities: ['TEXT', 'IMAGE'] },
      }),
    }
  );

  if (!response.ok) {
    const err = await response.text();
    console.error('Gemini error:', err);
    throw new Error('Image generation failed');
  }

  const data = await response.json();
  const parts = data.candidates?.[0]?.content?.parts || [];
  for (const part of parts) {
    if (part.inlineData) {
      return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
    }
  }
  throw new Error('No image in Gemini response');
}

async function generateStats(apiKey, description, type) {
  const systemPrompt = `You generate stats for fantasy monsters in a battle game. Return ONLY valid JSON.

The JSON must have these fields:
- "name": a cool 1-3 word name for the creature
- "hp": health points (${type === 'opponent' ? '60-200 based on how tough it sounds' : '80-150 based on description'})
- "attack": damage per hit (${type === 'opponent' ? '8-30' : '10-25'})
- "defense": damage reduction (${type === 'opponent' ? '3-20' : '5-18'})
- "speed": who attacks first, higher is faster (${type === 'opponent' ? '5-25' : '8-22'})
- "special": a short unique ability name (2-4 words)
- "specialDesc": one sentence describing what the special does in combat

Stats should reflect the creature description logically. Big heavy creatures = high hp/attack, low speed. Quick creatures = high speed, lower hp. etc.`;

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 300,
      system: systemPrompt,
      messages: [{ role: 'user', content: `Generate stats for: ${description}` }],
    }),
  });

  if (!response.ok) throw new Error('Stats generation failed');
  const data = await response.json();
  const text = data.content[0].text;
  const jsonMatch = text.match(/\{[\s\S]*\}/);
  if (!jsonMatch) throw new Error('Failed to parse stats');
  return JSON.parse(jsonMatch[0]);
}
