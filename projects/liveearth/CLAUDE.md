# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Live Earth is an interactive 3D globe dashboard that visualizes 22 real-time data layers (earthquakes, flights, weather, satellites, etc.). It is a sub-project of the `ai-showcase` gallery at `../../`.

- **No build step** — pure ES6 modules loaded directly in browser
- **No framework** — vanilla JS with Globe.gl (Three.js wrapper) and D3.js via CDN
- **Deployed on Vercel** — static files + serverless API proxies

## Development Commands

All commands run from the **parent directory** (`../../`):

```bash
npm run dev                          # Local dev server
npm run test                         # Unit + smoke tests
npm run test:unit                    # node --test tests/unit/**/*.test.js
npm run test:smoke                   # playwright test
npm run generate:liveearth-lods      # Regenerate country GeoJSON LOD variants
```

## Architecture

### Core Modules

| File | Role |
|------|------|
| `app.js` | Main orchestrator: globe init, UI panels, shared state, reactive display modes, KPI bar |
| `layer-runtime.js` | Layer lifecycle engine (`createLayerRuntime`): lazy-load, enable/disable, polling, caching, error recovery |
| `render-registry.js` | Globe rendering abstraction (`createRenderRegistry`): batches updates across 4 render buckets (points, paths, rings, html) |
| `country-geometry.js` | GeoJSON processing: normalizes boundaries, computes centroids/bounds, manages LOD variants (low/medium/high) |
| `constants.js` | Lookup tables: 100+ world cities with coordinates, WMO weather codes, legend color scales |
| `styles.css` | Full UI styling with CSS variables, animations, responsive breakpoints |

### Layer Plugin System

Each file in `layers/` exports a `layerDefinition` object. Layers are lazy-imported when enabled and follow this lifecycle:

```
disabled → enable() → load/hydrate cache → fetch → normalize → applyData → poll → disable/cleanup
```

Key `layerDefinition` properties:
- `id` — unique string identifier
- `kind` — render types used: `"points"`, `"paths"`, `"rings"`, `"html"`, or combinations like `"rings+points"`
- `pollMs` / `ttlMs` — fetch interval and cache freshness
- `source` — optional `createSourceAdapter({ key, fetch, normalize })` for standardized data fetching
- `applyData({ context, payload, runtime, state, freshness })` — pushes data to `context.renderRegistry.setPoints()`, `.setPaths()`, `.setRings()`, `.setHtmlElements()`
- `onEnable` / `onDisable` / `onResume` — lifecycle hooks

Freshness states: `"ready"` (fresh), `"stale"` (cached), `"degraded"` (error with fallback).

### Render Registry

All layers write to shared render buckets via the registry. The registry merges data from all active layers and flushes to Globe.gl in batched updates. Layers must namespace their data with their layer ID.

### Viewport-Adaptive Rendering

`app.js` defines rendering profiles that dynamically cap visible objects based on altitude (zoom), camera motion, and device performance. When adding or modifying layers, respect the budget system in the rendering profiles.

### Reactive Display Modes

The globe visualization reacts to live data through several modes (activity pulse, solar flux glow, hydro cloud opacity, storm/seismic rotation). These are computed in `app.js` from aggregated layer metrics.

## Data & Assets

- `data/countries-low.geojson` / `countries-medium.geojson` / `countries.geojson` — three LOD levels for country boundaries
- `data/overlays.json` — thematic choropleth data (GDP, population, etc.)
- `data/country-details.json` — country metadata for info panels
- `textures/` — earth surface maps, cloud overlay SVG, sky backgrounds

## API Proxies

Live data feeds are proxied through Vercel serverless functions at `../../api/liveearth/`. Layers fetch from relative paths like `/api/liveearth/earthquakes`. Cache headers use `stale-while-revalidate` pattern.

## Conventions

- Layer files are self-contained: each handles its own fetch, normalize, render, and cleanup
- Use `createSourceAdapter` for new data-fetching layers to get caching/retry for free
- Globe.gl HTML elements are preferred over canvas for interactive markers (hover cards, click handlers)
- Performance budgets are enforced at the rendering profile level, not in individual layers
- Country geometry uses the LOD system — default to low-detail, upgrade on selection
