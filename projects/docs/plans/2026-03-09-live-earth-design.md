# Live Earth — Design

## Concept
A 3D interactive globe (globe.gl) with a toggle panel for independently stackable data layers. Existing Earth Atlas choropleth overlays (GDP, population, etc.) serve as optional base layers, with 7 live data feeds layered on top as points/markers.

## Architecture

Single-file `index.html` (consistent with other projects) with globe.gl + d3.

**Layer system:**
- Each layer is an object with: `id`, `name`, `icon`, `enabled`, `fetchFn`, `renderFn`, `refreshInterval`
- A layer manager handles toggling, fetching, and rendering independently
- Each layer type maps to a globe.gl layer method (pointsData, htmlElementsData, customLayerData, etc.)

## Layers

| Layer | API | Globe.gl method | Refresh | Visual |
|-------|-----|----------------|---------|--------|
| Base choropleth | Local JSON (from Earth Atlas) | polygonsData | Static | Colored country polygons |
| Earthquakes | earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson | pointsData | 5 min | Pulsing circles, size = magnitude, color = depth |
| ISS Position | api.wheretheiss.at/v1/satellites/25544 | customLayerData | 3 sec | Moving icon + orbit trail |
| Launch Sites | ll.thespacedevs.com/2.2.0/launch/upcoming | pointsData | 30 min | Rocket pins with countdown tooltip |
| Radio Stations | de1.api.radio-browser.info/json/stations/search | pointsData | Static (on load) | Music note dots, click to play audio |
| River Gauges | waterservices.usgs.gov/nwis/iv | pointsData | 15 min | Blue dots, size = flow rate |
| Weather | api.open-meteo.com/v1/forecast (grid of ~500 major cities) | pointsData | 30 min | Temp-colored dots with wind arrows |
| Air Quality | air-quality-api.open-meteo.com/v1/air-quality (same city grid) | pointsData | 30 min | AQI-colored dots (green to red) |

## UI Layout
- **Globe** fills the viewport
- **Left panel** — collapsible toggle list with layer switches (icon + name + on/off)
- **Top-right** — active layer count badge
- **Click/hover** — popup card showing details for the clicked marker
- **Bottom legend** — dynamic, shows scale/legend for whichever layers are active

## City grid for Weather/Air Quality
Pre-baked list of ~500 world cities with lat/lng embedded in the JS. Both weather and air quality layers share this grid. One fetch per layer on enable.

## Performance
- Radio stations: fetch top 500 by votes, not full database
- Cluster markers when zoomed out
- Lazy-load: layers only fetch data when first toggled on
- Clear intervals when layers are toggled off
