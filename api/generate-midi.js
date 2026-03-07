export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { prompt } = req.body;
  if (!prompt || typeof prompt !== 'string' || prompt.length > 500) {
    return res.status(400).json({ error: 'Invalid prompt' });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'API key not configured' });
  }

  const systemPrompt = `You are a piano composer. Given a description, generate a piano piece as a JSON array of note events.

Each note event has:
- "midi": MIDI note number (21-108, where 60=C4)
- "time": start time in seconds (float)
- "dur": duration in seconds (float)
- "vel": velocity 1-127
- "hand": "left" or "right"

Rules:
- Generate 20-60 seconds of music
- Use both hands: left hand for bass/chords (midi 36-59), right hand for melody (midi 60-84)
- Use realistic velocities (40-100)
- Make it musical: proper rhythm, harmony, and melody
- Keep the tempo steady
- Return ONLY a valid JSON array, no other text`;

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 16000,
        system: systemPrompt,
        messages: [
          { role: 'user', content: `Compose a piano piece: ${prompt}` }
        ],
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error('Anthropic API error:', err);
      return res.status(502).json({ error: 'AI service error' });
    }

    const data = await response.json();
    const text = data.content[0].text;

    // Extract JSON array from response (handle markdown code blocks)
    const jsonMatch = text.match(/\[[\s\S]*\]/);
    if (!jsonMatch) {
      return res.status(502).json({ error: 'Failed to parse AI response' });
    }

    const notes = JSON.parse(jsonMatch[0]);

    // Validate structure
    if (!Array.isArray(notes) || notes.length === 0) {
      return res.status(502).json({ error: 'AI returned empty composition' });
    }

    for (const n of notes) {
      if (typeof n.midi !== 'number' || typeof n.time !== 'number' ||
          typeof n.dur !== 'number' || typeof n.vel !== 'number') {
        return res.status(502).json({ error: 'AI returned invalid note data' });
      }
    }

    return res.status(200).json({ notes, prompt });
  } catch (err) {
    console.error('Generate error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
