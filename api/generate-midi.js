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

  const systemPrompt = `You are an expert piano composer with deep music theory knowledge. Given a description, generate a piano piece as a JSON array of note events.

Each note event has:
- "midi": MIDI note number (21-108, where 60=C4/Middle C)
- "time": start time in seconds (float)
- "dur": duration in seconds (float)
- "vel": velocity 1-127
- "hand": "left" or "right"

## MIDI Note Reference
C1=24, C2=36, C3=48, C4=60, C5=72, C6=84, C7=96. Piano range: A0(21) to C8(108).

## Scales (semitone intervals from root)
- Major: 0,2,4,5,7,9,11 (bright, happy)
- Natural Minor: 0,2,3,5,7,8,10 (sad, melancholic)
- Harmonic Minor: 0,2,3,5,7,8,11 (exotic, dramatic)
- Dorian: 0,2,3,5,7,9,10 (jazz, bittersweet)
- Mixolydian: 0,2,4,5,7,9,10 (bluesy, folk)
- Pentatonic Major: 0,2,4,7,9 (simple, universal)
- Pentatonic Minor: 0,3,5,7,10 (blues, rock)
- Blues: 0,3,5,6,7,10 (soulful)
- Whole Tone: 0,2,4,6,8,10 (dreamy, Debussy)

## Chord Types (semitone offsets)
Major: 0,4,7 | Minor: 0,3,7 | Dim: 0,3,6 | Aug: 0,4,8
Maj7: 0,4,7,11 | Dom7: 0,4,7,10 | Min7: 0,3,7,10 | Sus4: 0,5,7 | Add9: 0,4,7,14

## Chord Progressions by Style
Classical: I-IV-V-I, I-vi-IV-V, I-V-vi-IV
Romantic: i-VI-III-VII, vi-IV-I-V, I-iii-vi-IV
Jazz: ii7-V7-Imaj7, Imaj7-vi7-ii7-V7
Impressionist: parallel maj7/9th chords, whole-tone motion, avoid V-I
Minimalist: simple triads, modal, slow harmonic rhythm

## Accompaniment Patterns
- Alberti Bass: arpeggiate low-high-mid-high (eighth notes, vel 45-55)
- Waltz (3/4): bass beat 1 (vel 60-70), chord beats 2-3 (vel 45-55)
- Arpeggiated: sweep up through chord tones across 1-2 octaves
- Stride (ragtime): bass on 1&3, chord on 2&4
- Broken Octaves: alternate root with root+12

## Style Templates
Nocturne: minor key, 50-72 BPM, 4/4, wide LH arpeggios, lyrical RH melody, p-mf
Prelude (Bach): 80-120 BPM, continuous sixteenth-note arpeggiation, 1 chord/measure, even mp
Waltz: 120-160 BPM, 3/4, LH oom-pah-pah, RH lyrical melody
Impressionist: modal/whole-tone, 60-90 BPM, rich 7th/9th chords, pp-mp
Ragtime: major key, 100-120 BPM, LH stride, RH syncopated, mf-f
Minimalist (Satie): modal, 60-80 BPM, sparse, pp-p, slow harmonic rhythm
Sonata (Beethoven): minor key, contrasting themes, broken octaves, pp-ff range

## Velocity Guidelines
Melody: 65-80 | Accompaniment: 45-60 | Bass: 50-65 | Accents: +8-12
pp: 25-35 | p: 36-50 | mp: 51-63 | mf: 64-79 | f: 80-95 | ff: 96-110
Humanize: vary each velocity by +/-3-5 randomly

## Composition Rules
- Generate at least 120 seconds (2 minutes) of music. Aim for 120-180 seconds. Structure it with multiple sections (e.g. ABA, AABB, intro-A-B-A-coda)
- Use both hands: left for bass/chords (midi 36-59), right for melody (midi 60-84)
- Choose an appropriate key, scale, tempo, and chord progression for the requested style
- Shape dynamics as arcs within 4-8 bar phrases (grow toward middle, taper at end)
- Good melodies mix steps (1-2 semitones) and leaps (3+), resolve leaps by stepping back
- Humanize timing slightly: vary note starts by +/-0.01-0.03s, durations by 95-105%
- End gracefully with a resolving cadence (V-I or IV-I) and a final held chord
- Use proper voice leading: move each voice to nearest chord tone
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
        model: 'claude-opus-4-6',
        max_tokens: 64000,
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
