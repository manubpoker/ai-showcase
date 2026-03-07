export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { monster, upgrade } = req.body;
  if (!monster || !upgrade) return res.status(400).json({ error: 'Missing data' });

  const geminiKey = process.env.GEMINI_API_KEY;
  const claudeKey = process.env.ANTHROPIC_API_KEY;
  if (!geminiKey || !claudeKey) return res.status(500).json({ error: 'API keys not configured' });

  try {
    const [imageResult, statsResult] = await Promise.all([
      generateUpgradedImage(geminiKey, monster, upgrade),
      generateUpgradedStats(claudeKey, monster, upgrade),
    ]);

    return res.status(200).json({
      image: imageResult,
      ...statsResult,
    });
  } catch (err) {
    console.error('Upgrade error:', err);
    return res.status(500).json({ error: 'Upgrade failed' });
  }
}

async function generateUpgradedImage(apiKey, monster, upgrade) {
  const prompt = `A fantasy creature portrait: ${monster.originalDescription}. It has now mutated with ${upgrade.mutation}. The creature looks more powerful and evolved. Epic dramatic lighting, detailed digital painting style, square portrait composition, no text or words.`;

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-image-preview:generateContent?key=${apiKey}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { responseModalities: ['TEXT', 'IMAGE'] },
      }),
    }
  );

  if (!response.ok) throw new Error('Image generation failed');
  const data = await response.json();
  const parts = data.candidates?.[0]?.content?.parts || [];
  for (const part of parts) {
    if (part.inlineData) {
      return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
    }
  }
  throw new Error('No image in Gemini response');
}

async function generateUpgradedStats(apiKey, monster, upgrade) {
  const systemPrompt = `You upgrade a monster's stats after a battle victory. Return ONLY valid JSON.

The monster won a fight and chose an upgrade. Apply the upgrade to the existing stats.

Return JSON with:
- "name": keep the same name or add a cool prefix/suffix if the mutation is dramatic
- "hp": updated hp (apply upgrade bonus)
- "attack": updated attack
- "defense": updated defense
- "speed": updated speed
- "special": updated special ability name (can evolve)
- "specialDesc": updated description

The upgrade should boost the relevant stat by 15-30% and may slightly boost others by 5-10%.`;

  const prompt = `Current monster:
Name: ${monster.name}
HP: ${monster.hp}, Attack: ${monster.attack}, Defense: ${monster.defense}, Speed: ${monster.speed}
Special: ${monster.special} - ${monster.specialDesc}

Chosen upgrade: ${upgrade.name} - ${upgrade.mutation}
Primary stat boost: ${upgrade.stat}

Generate the upgraded stats.`;

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
      messages: [{ role: 'user', content: prompt }],
    }),
  });

  if (!response.ok) throw new Error('Stats upgrade failed');
  const data = await response.json();
  const text = data.content[0].text;
  const jsonMatch = text.match(/\{[\s\S]*\}/);
  if (!jsonMatch) throw new Error('Failed to parse upgraded stats');
  return JSON.parse(jsonMatch[0]);
}
