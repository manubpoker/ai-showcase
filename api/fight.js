export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { player, opponent } = req.body;
  if (!player || !opponent) return res.status(400).json({ error: 'Missing combatants' });

  const geminiKey = process.env.GEMINI_API_KEY;
  if (!geminiKey) return res.status(500).json({ error: 'API key not configured' });

  try {
    const result = await resolveCombat(geminiKey, player, opponent);
    return res.status(200).json(result);
  } catch (err) {
    console.error('Fight error:', err);
    return res.status(500).json({ error: 'Combat resolution failed' });
  }
}

async function resolveCombat(apiKey, player, opponent) {
  const systemPrompt = `You are the narrator of a monster battle arena. Two creatures fight. Resolve the combat based on their stats and return JSON.

Rules for determining winner:
- Compare total power: (attack * 1.2) + (defense * 0.8) + (speed * 1.0) + (hp * 0.3)
- The creature with higher power has a 65% chance to win, the other 35%
- Roll a random result accounting for these odds
- Factor in special abilities narratively

Return ONLY valid JSON:
{
  "winner": "player" or "opponent",
  "narrative": [array of 4-6 short sentences describing the fight blow-by-blow, dramatic and exciting],
  "playerDamage": number (damage the player took, 0 if player won cleanly, up to 60% of player hp if player won but took hits),
  "mvpStat": which stat was most decisive: "attack", "defense", "speed", or "special"
}`;

  const prompt = `PLAYER MONSTER:
Name: ${player.name}
HP: ${player.hp}, Attack: ${player.attack}, Defense: ${player.defense}, Speed: ${player.speed}
Special: ${player.special} - ${player.specialDesc}

OPPONENT MONSTER:
Name: ${opponent.name}
HP: ${opponent.hp}, Attack: ${opponent.attack}, Defense: ${opponent.defense}, Speed: ${opponent.speed}
Special: ${opponent.special} - ${opponent.specialDesc}

Resolve this battle!`;

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite-preview:generateContent?key=${apiKey}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        systemInstruction: { parts: [{ text: systemPrompt }] },
        generationConfig: { responseMimeType: 'application/json' },
      }),
    }
  );

  if (!response.ok) {
    const err = await response.text();
    console.error('Gemini fight error:', err);
    throw new Error('Combat resolution failed');
  }
  const data = await response.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) throw new Error('No response from Gemini');
  return JSON.parse(text);
}
