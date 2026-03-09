# Live Earth Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a 3D interactive globe with 7+ independently toggleable live data layers (earthquakes, ISS, launches, radio, rivers, weather, air quality) plus static choropleth base layers from Earth Atlas.

**Architecture:** Single `index.html` file using globe.gl + d3. A layer manager object holds layer definitions, each with fetch/render/refresh logic. The left panel has toggle switches. globe.gl's multiple data layer methods (polygonsData, pointsData, customLayerData, htmlElementsData, ringsData) are used in parallel. Layers lazy-load data on first enable.

**Tech Stack:** globe.gl 2.41, d3 7.9, vanilla JS, no build step.

---

### Task 1: Project scaffold and globe with base choropleth layer

**Files:**
- Create: `liveearth/index.html`
- Copy from: `earth/data/countries.geojson`, `earth/data/overlays.json`, `earth/data/country-details.json`, `earth/textures/`

**Step 1: Create directory and copy Earth Atlas data**

```bash
mkdir -p liveearth/data liveearth/textures
cp earth/data/countries.geojson liveearth/data/
cp earth/data/overlays.json liveearth/data/
cp earth/data/country-details.json liveearth/data/
cp earth/textures/* liveearth/textures/
```

**Step 2: Create index.html with globe, layer panel, and base choropleth**

Build the HTML with:
- globe.gl + d3 CDN imports (same versions as Earth Atlas)
- Full-viewport globe with dark earth texture, atmosphere, graticules
- Left panel (collapsible) with header "Live Earth" and a "Layers" section
- Layer manager: an array of layer objects, each with `{ id, name, icon, group, enabled, data, intervals, onEnable, onDisable }`
- Base choropleth layer (first entry): loads `overlays.json`, renders country polygons via `polygonsData` colored by the first overlay (GDP). Include a dropdown to switch between overlays (GDP, population, etc.) within this single base layer.
- Toggle switches in left panel: each layer gets a row with icon + name + toggle switch
- Only the base choropleth layer is enabled by default

Globe setup (from Earth Atlas):
```js
const globe = Globe()(container)
  .globeImageUrl('./textures/earth-dark.jpg')
  .bumpImageUrl('./textures/earth-topology.png')
  .backgroundImageUrl('./textures/night-sky.png')
  .showAtmosphere(true)
  .atmosphereColor('rgba(63,201,255,0.18)')
  .atmosphereAltitude(0.22)
  .showGraticules(true)
  .polygonStrokeColor(() => 'rgba(180,230,240,0.22)')
  .polygonSideColor(() => 'rgba(20,50,60,0.4)');
```

Layer toggle wiring: when a toggle is flipped, call `layer.onEnable()` or `layer.onDisable()`. `onEnable` fetches data if not cached, then renders. `onDisable` clears the globe.gl layer and stops any refresh interval.

CSS: dark theme matching Earth Atlas (--bg: #05131c, glass cards with backdrop-filter). Left panel is 280px wide, collapsible via a hamburger button on mobile.

**Step 3: Verify the globe loads with choropleth**

Open in browser. The globe should render with colored country polygons. The left panel should show toggle switches (only base choropleth on). Hover on countries should show a tooltip card with country name + overlay value.

**Step 4: Commit**

```bash
git add liveearth/
git commit -m "Add Live Earth: globe scaffold with base choropleth layer"
```

---

### Task 2: Earthquake layer

**Files:**
- Modify: `liveearth/index.html`

**Step 1: Add earthquake layer definition**

Add to the layers array:
```js
{
  id: 'earthquakes',
  name: 'Earthquakes',
  icon: '🔴',
  group: 'Live Data',
  enabled: false,
  refreshMs: 5 * 60 * 1000,
  data: [],
  interval: null
}
```

**Step 2: Implement fetch and render**

Fetch function:
```js
async function fetchEarthquakes() {
  const res = await fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson');
  const json = await res.json();
  return json.features.map(f => ({
    lat: f.geometry.coordinates[1],
    lng: f.geometry.coordinates[0],
    depth: f.geometry.coordinates[2],
    mag: f.properties.mag,
    place: f.properties.place,
    time: f.properties.time
  }));
}
```

Render: use globe.gl `ringsData` for pulsing earthquake rings:
- `ringLat/ringLng` from data
- `ringMaxRadius`: scale by magnitude (mag * 1.5)
- `ringPropagationSpeed`: 2
- `ringRepeatPeriod`: 800
- `ringColor`: depth-based via d3 scale (shallow=yellow, deep=red)

Also use `pointsData` (a second point layer via `htmlElementsData`) for clickable dots:
- Size: `0.15 + mag * 0.08`
- Altitude: `mag * 0.01`
- Color: same depth scale

On hover: show popup card with magnitude, location, depth, time ago.

**Step 3: Wire toggle**

When earthquake toggle is enabled:
1. Fetch data, store in layer.data
2. Render rings + points
3. Start interval (re-fetch every 5 min)

When disabled:
1. Clear ringsData([]) and the earthquake htmlElements
2. clearInterval

**Step 4: Verify**

Toggle earthquakes on. Should see pulsing rings around the globe at recent earthquake locations. Hover shows details.

**Step 5: Commit**

```bash
git add liveearth/index.html
git commit -m "Add earthquake layer with pulsing rings and magnitude scaling"
```

---

### Task 3: ISS tracker layer

**Files:**
- Modify: `liveearth/index.html`

**Step 1: Add ISS layer definition**

```js
{
  id: 'iss',
  name: 'ISS Tracker',
  icon: '🛰️',
  group: 'Live Data',
  enabled: false,
  refreshMs: 3000,
  data: null,
  interval: null
}
```

**Step 2: Implement fetch and render**

Fetch: `https://api.wheretheiss.at/v1/satellites/25544` returns `{ latitude, longitude, altitude, velocity }`.

Render using `customLayerData` with a Three.js sprite or `htmlElementsData`:
- Single point for ISS current position
- Use `objectsData` with a custom Three.js mesh (small satellite icon) OR use a simple ring + label
- Trail: keep last 100 positions in an array, render as a polyline using `pathsData`:
  ```js
  globe.pathsData([{ coords: trail }])
    .pathPointLat(p => p[0])
    .pathPointLng(p => p[1])
    .pathColor(() => 'rgba(0, 255, 136, 0.6)')
    .pathStroke(1.5)
    .pathDashLength(0.3)
    .pathDashGap(0.1)
    .pathDashAnimateTime(2000)
  ```

On hover popup: show altitude, velocity, visibility status.

**Step 3: Wire toggle**

Enable: start polling every 3s, append to trail, update position.
Disable: clear interval, clear pathsData and objectsData.

**Step 4: Verify**

Toggle ISS on. Should see a dot moving with a trail behind it. Position updates every 3s.

**Step 5: Commit**

```bash
git add liveearth/index.html
git commit -m "Add ISS tracker layer with orbit trail"
```

---

### Task 4: Rocket launch sites layer

**Files:**
- Modify: `liveearth/index.html`

**Step 1: Add launch layer definition**

```js
{
  id: 'launches',
  name: 'Rocket Launches',
  icon: '🚀',
  group: 'Live Data',
  enabled: false,
  refreshMs: 30 * 60 * 1000,
  data: [],
  interval: null
}
```

**Step 2: Implement fetch and render**

Fetch: `https://ll.thespacedevs.com/2.2.0/launch/upcoming/?limit=20&mode=list`
Extract: `results[].{ name, net, pad.latitude, pad.longitude, pad.location.name, status.abbrev, launch_service_provider.name }`

Render using `labelsData`:
- `labelLat/labelLng` from pad coordinates
- `labelText`: rocket emoji + provider abbreviation
- `labelSize`: 1.2
- `labelColor`: status-based (Go = green, TBD = yellow, Hold = orange)
- `labelDotRadius`: 0.4
- `labelAltitude`: 0.01

On hover popup: show full mission name, provider, countdown timer (calculated from `net` timestamp), pad location.

**Step 3: Wire toggle**

Enable: fetch, render, start 30-min refresh interval.
Disable: clear labelsData, stop interval.

**Step 4: Verify**

Toggle launches on. Should see labeled pins at launch pads (Kennedy, Baikonur, etc.) with countdown info on hover.

**Step 5: Commit**

```bash
git add liveearth/index.html
git commit -m "Add rocket launch sites layer with countdown tooltips"
```

---

### Task 5: Radio stations layer

**Files:**
- Modify: `liveearth/index.html`

**Step 1: Add radio layer definition**

```js
{
  id: 'radio',
  name: 'Radio Stations',
  icon: '📻',
  group: 'Live Data',
  enabled: false,
  refreshMs: 0, // static, fetch once
  data: [],
  interval: null
}
```

**Step 2: Implement fetch and render**

Fetch: `https://de1.api.radio-browser.info/json/stations/search?limit=500&order=clickcount&reverse=true&has_geo_info=true&hidebroken=true`
- This endpoint returns stations with `geo_lat` and `geo_long` fields directly
- Filter to HTTPS streams only: `s.url_resolved.startsWith('https://')`

Render using `pointsData` (separate series from earthquakes — use `htmlElementsData` for one of them):
- `pointLat`: `geo_lat`, `pointLng`: `geo_long`
- `pointRadius`: 0.2
- `pointAltitude`: 0.005
- `pointColor`: `#06b6d4` (cyan)

On click: play audio stream using `new Audio(url_resolved)`. Show popup with station name, country, tags, bitrate. Include play/pause button.

Keep a single Audio instance. Clicking another station stops the current one and starts the new one.

**Step 3: Wire toggle**

Enable: fetch once, render. No refresh.
Disable: stop audio, clear points.

**Step 4: Verify**

Toggle radio on. Should see cyan dots globally. Click one to hear audio. Click another to switch.

**Step 5: Commit**

```bash
git add liveearth/index.html
git commit -m "Add radio stations layer with click-to-play audio"
```

---

### Task 6: River gauges layer

**Files:**
- Modify: `liveearth/index.html`

**Step 1: Add river layer definition**

```js
{
  id: 'rivers',
  name: 'River Gauges',
  icon: '🌊',
  group: 'Live Data',
  enabled: false,
  refreshMs: 15 * 60 * 1000,
  data: [],
  interval: null
}
```

**Step 2: Implement fetch and render**

The USGS API requires specific site IDs. Use a curated list of ~50 major US river gauges (hardcoded array of site IDs covering major rivers: Mississippi, Colorado, Columbia, Ohio, Missouri, etc.).

Fetch: `https://waterservices.usgs.gov/nwis/iv/?format=json&sites=${siteIds}&parameterCd=00060,00065&siteStatus=active`

Parse: extract from `value.timeSeries[]`:
- Site name from `sourceInfo.siteName`
- Lat/lng from `sourceInfo.geoLocation.geogLocation`
- Discharge (00060) and gauge height (00065) from latest value

Render using `pointsData`:
- `pointRadius`: scale by discharge (log scale, 0.15 to 0.6)
- `pointColor`: blue scale from d3.interpolateBlues based on gauge height
- `pointAltitude`: 0.005

On hover: show site name, current discharge (cfs), gauge height (ft).

**Step 3: Wire toggle**

Enable: fetch, render, start 15-min interval.
Disable: clear points, stop interval.

**Step 4: Verify**

Toggle rivers on. Should see blue dots across the US at major river monitoring sites.

**Step 5: Commit**

```bash
git add liveearth/index.html
git commit -m "Add river gauges layer with USGS live flow data"
```

---

### Task 7: Weather layer

**Files:**
- Modify: `liveearth/index.html`

**Step 1: Embed city grid (shared with air quality)**

Add a `WORLD_CITIES` constant: array of ~200 major cities with `{ name, country, lat, lng }`. Cover all continents, weighted toward population. Include cities like: Tokyo, Delhi, Shanghai, Sao Paulo, Mexico City, Cairo, Mumbai, Beijing, Dhaka, Osaka, New York, Karachi, Istanbul, Buenos Aires, Kolkata, Lagos, Kinshasa, Manila, Tianjin, Guangzhou, Rio, Lahore, Bangalore, Moscow, London, Paris, Berlin, Sydney, Toronto, etc.

Use 200 cities (not 500) to keep API calls reasonable. Open-Meteo supports batch lat/lng in a single request.

**Step 2: Add weather layer definition**

```js
{
  id: 'weather',
  name: 'Weather',
  icon: '🌤️',
  group: 'Live Data',
  enabled: false,
  refreshMs: 30 * 60 * 1000,
  data: [],
  interval: null
}
```

**Step 3: Implement fetch and render**

Open-Meteo supports comma-separated lat/lng for batch requests:
```
https://api.open-meteo.com/v1/forecast?latitude=35.68,28.61,...&longitude=139.69,77.23,...&current=temperature_2m,weather_code,wind_speed_10m,wind_direction_10m
```

Batch the 200 cities into a single request (Open-Meteo supports this).

Parse: map response array back to cities, extract `current.temperature_2m`, `current.weather_code`, `current.wind_speed_10m`.

Render using `htmlElementsData`:
- Each city gets a small DOM element with:
  - Temperature-colored circle (d3.interpolateRdYlBu reversed, -20 to 45 range)
  - Temperature label (e.g. "23°")
- Size: fixed small
- Altitude: 0.01

On hover popup: city name, temperature, weather description (map weather_code to text), wind speed + direction.

**Step 4: Wire toggle**

Enable: batch-fetch, render. Start 30-min refresh.
Disable: clear htmlElements, stop interval.

**Step 5: Verify**

Toggle weather on. Should see temperature-colored dots at major cities worldwide. Hover shows details.

**Step 6: Commit**

```bash
git add liveearth/index.html
git commit -m "Add weather layer with temperature-colored city dots"
```

---

### Task 8: Air quality layer

**Files:**
- Modify: `liveearth/index.html`

**Step 1: Add air quality layer definition**

```js
{
  id: 'airquality',
  name: 'Air Quality',
  icon: '💨',
  group: 'Live Data',
  enabled: false,
  refreshMs: 30 * 60 * 1000,
  data: [],
  interval: null
}
```

**Step 2: Implement fetch and render**

Reuse the same `WORLD_CITIES` array.

Fetch: `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=35.68,28.61,...&longitude=139.69,77.23,...&current=us_aqi,pm2_5,pm10`

Parse: map response to cities, extract `current.us_aqi`, `current.pm2_5`, `current.pm10`.

Render using `pointsData` (different series from earthquakes — key: ensure globe.gl can handle multiple point layers, or use `htmlElementsData` for one and `pointsData` for the other):
- Color: AQI-based scale:
  - 0-50: #22c55e (green, Good)
  - 51-100: #eab308 (yellow, Moderate)
  - 101-150: #f97316 (orange, Unhealthy for sensitive)
  - 151-200: #ef4444 (red, Unhealthy)
  - 201-300: #7c3aed (purple, Very unhealthy)
  - 301+: #991b1b (maroon, Hazardous)
- `pointRadius`: 0.25
- `pointAltitude`: 0.015 (slightly above weather dots if both on)

On hover: show city name, AQI value, category label, PM2.5, PM10.

**Step 3: Wire toggle**

Enable: batch-fetch, render. Start 30-min refresh.
Disable: clear, stop interval.

**Step 4: Verify**

Toggle air quality on. Should see colored dots at cities (green in clean areas, red/purple in polluted).

**Step 5: Commit**

```bash
git add liveearth/index.html
git commit -m "Add air quality layer with AQI-colored city markers"
```

---

### Task 9: Popup card system and hover interactions

**Files:**
- Modify: `liveearth/index.html`

**Step 1: Build unified popup card**

Create a floating popup card (positioned near the globe's hover point) that shows context-specific info based on which layer's marker is being hovered:

```html
<div class="popup-card" id="popup" style="display:none">
  <div class="popup-header" id="popup-header"></div>
  <div class="popup-body" id="popup-body"></div>
</div>
```

Each layer defines a `formatPopup(item)` function that returns `{ header, body }` HTML strings.

For the radio layer, the popup includes a play/pause button.

**Step 2: Style popup**

Glass card style matching Earth Atlas. Position absolute, offset from cursor. Auto-hide after 200ms of no hover.

**Step 3: Active layer count badge**

Top-right corner badge showing number of active layers: `3 layers active`.

**Step 4: Dynamic legend**

Bottom-left legend card that shows the scale/legend for the most recently enabled layer. If multiple are on, show a stacked mini-legend for each.

**Step 5: Commit**

```bash
git add liveearth/index.html
git commit -m "Add popup card system and dynamic legend"
```

---

### Task 10: Polish, responsiveness, and performance

**Files:**
- Modify: `liveearth/index.html`

**Step 1: Mobile responsive**

- Left panel collapses to a bottom sheet on mobile (< 768px)
- Toggle panel accessible via floating button
- Popup cards adapt to smaller screens

**Step 2: Performance**

- Ensure layers use lazy loading (no fetch until toggled on)
- Radio stations: only fetch once, cache in memory
- Debounce hover events
- Limit trail history (ISS) to 200 points

**Step 3: Loading states**

Each layer toggle shows a small spinner while its data is being fetched.

**Step 4: Error handling**

If a layer's API fails, show a brief toast notification ("Earthquakes: failed to load") and disable the toggle with a retry option.

**Step 5: Verify all layers together**

Enable all 8 layers simultaneously. Verify:
- Globe remains interactive (no jank)
- All data renders without overlap issues
- Toggling layers on/off works cleanly
- Auto-rotate pauses on hover, resumes on mouse out

**Step 6: Commit**

```bash
git add liveearth/
git commit -m "Polish: responsiveness, loading states, error handling"
```

---

### Task 11: Final integration and deployment

**Step 1: Verify all APIs work**

Test each layer independently and confirm data loads correctly.

**Step 2: Add Google Analytics tag**

Same GA tag as other projects: `G-5HPMN4CHL3`.

**Step 3: Final commit and push**

```bash
git add liveearth/
git commit -m "Add Live Earth — 3D globe with 8 live data layers"
git push
```

---

## Globe.gl layer mapping strategy

Globe.gl allows multiple data series per layer type. The key constraint is that methods like `pointsData()` replace any previous points. To have multiple point-type layers simultaneously, use different globe.gl layer methods:

| Layer | globe.gl method |
|-------|----------------|
| Base choropleth | `polygonsData` |
| Earthquakes | `ringsData` + `htmlElementsData` (for clickable dots) |
| ISS | `pathsData` (trail) + `objectsData` (position marker) |
| Launches | `labelsData` |
| Radio | `pointsData` |
| Rivers | `customLayerData` (Three.js sprites) |
| Weather | `htmlElementsData` (temp labels) — share with earthquakes via combined array |
| Air Quality | `pointsData` — share with radio via combined array |

**Important:** For layers sharing the same globe.gl method, maintain combined arrays. When enabling/disabling, rebuild the combined array from all enabled layers that use that method. For example:

```js
function updatePointsData() {
  const allPoints = [];
  if (layers.radio.enabled) allPoints.push(...layers.radio.data.map(d => ({...d, _layer: 'radio'})));
  if (layers.airquality.enabled) allPoints.push(...layers.airquality.data.map(d => ({...d, _layer: 'aq'})));
  globe.pointsData(allPoints)
    .pointColor(d => d._layer === 'radio' ? '#06b6d4' : aqiColor(d.aqi))
    .pointRadius(d => d._layer === 'radio' ? 0.2 : 0.25);
}
```

Same pattern for `htmlElementsData` (earthquakes + weather).
