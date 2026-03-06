# Star Reaper '86

Small retro browser shoot'em up built with plain HTML, CSS, and Canvas 2D.

## Features

- Side-scrolling arcade combat with score, combo, waves, boss encounters, power-ups, shields, lives, and bombs.
- Xbox controller support through the browser Gamepad API.
- Keyboard fallback controls and simple synthesized retro sound effects via Web Audio.
- No build step and no dependencies.

## Run

Serve the folder over a local web server so controller input works consistently:

```powershell
cd C:\Users\manue\Desktop\Work\AI\shoothemup
python -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000).

## Controls

- Move: `WASD` / Arrow keys / Xbox left stick / D-pad
- Fire: `Space` / `J` / Xbox `A`, `RB`, or `RT`
- Bomb: `X` / `K` / Xbox `B` or `LB`
- Pause / Start / Restart: `Enter` / `Esc` / `P` / Xbox `Start`
