import { fmtNum, timeAgo } from "../../shared/atlas/format.js";
import { createSourceAdapter } from "../../shared/runtime/source-adapter.js";

const quakeColorScale = d3.scaleSequential(d3.interpolateYlOrRd).domain([0, 400]);

function buildFilterNode(range, count, onSelect) {
  const node = document.createElement("div");
  node.className = "quake-time-filter";
  node.innerHTML = `
    <button class="quake-time-btn${range === "all_hour" ? " active" : ""}" data-range="all_hour">1 Hour</button>
    <button class="quake-time-btn${range === "all_day" ? " active" : ""}" data-range="all_day">24 Hours</button>
    <button class="quake-time-btn${range === "all_week" ? " active" : ""}" data-range="all_week">7 Days</button>
    <span id="quake-count" style="font-size:0.6rem;color:var(--muted-text);padding:2px 4px;">${count} events</span>
  `;
  node.addEventListener("click", (event) => {
    const button = event.target.closest(".quake-time-btn");
    if (!button) return;
    onSelect(button.dataset.range);
  });
  return node;
}

function createPoint(context, quake) {
  return {
    ...quake,
    pointAltitude: 0.07,
    pointColor: "rgba(0,0,0,0)",
    pointRadius: Math.max(0.15, quake.mag * 0.2),
    onPointHover() {
      context.globe.controls().autoRotate = false;
      context.showHover(
        quake.place || "Unknown location",
        `M ${quake.mag.toFixed(1)}`,
        `${quake.depth.toFixed(0)}km deep · ${timeAgo(quake.time)}`
      );
    },
    onPointLeave() {
      context.globe.controls().autoRotate = true;
      context.hideHover();
    },
  };
}

export const layerDefinition = {
  id: "earthquakes",
  kind: "rings+points",
  pollMs: 300_000,
  ttlMs: 15_000,
  source: createSourceAdapter({
    key: "liveearth:earthquakes",
    staleAfterMs: 6 * 60 * 1000,
    expireAfterMs: 24 * 60 * 60 * 1000,
    async fetch({ fetchJson, signal, state }) {
      const range = state.quakeTimeRange || "all_day";
      return fetchJson(
        `https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/${range}.geojson`,
        { retries: 1, signal, timeoutMs: 10_000 }
      );
    },
    normalize(json) {
      return (json.features || []).map((feature) => ({
        depth: feature.geometry.coordinates[2],
        lat: feature.geometry.coordinates[1],
        lng: feature.geometry.coordinates[0],
        mag: feature.properties.mag || 0,
        place: feature.properties.place,
        time: feature.properties.time,
      }));
    },
  }),
  async onEnable({ context, runtime, state }) {
    state.quakeTimeRange ??= "all_day";
    context.setLayerExtra(
      "earthquakes",
      buildFilterNode(state.quakeTimeRange, state.lastGoodData?.length || 0, async (nextRange) => {
        state.quakeTimeRange = nextRange;
        context.setLayerExtra(
          "earthquakes",
          buildFilterNode(state.quakeTimeRange, state.lastGoodData?.length || 0, async (range) => {
            state.quakeTimeRange = range;
            await runtime.refresh("earthquakes");
          })
        );
        await runtime.refresh("earthquakes");
      })
    );
  },
  async applyData({ context, payload, state }) {
    context.renderRegistry.setRings(
      "earthquakes",
      payload.map((quake) => ({
        ...quake,
        ringColor: [quakeColorScale(Math.max(0, quake.depth)), "transparent"],
        ringMaxRadius: quake.mag * 1.5,
        ringPropagationSpeed: 2,
        ringRepeatPeriod: 800,
      }))
    );
    context.renderRegistry.setPoints("earthquakes", payload.map((quake) => createPoint(context, quake)));
    context.setLayerExtra(
      "earthquakes",
      buildFilterNode(state.quakeTimeRange || "all_day", payload.length, async (range) => {
        state.quakeTimeRange = range;
        await context.runtime.refresh("earthquakes");
      })
    );
  },
  onDisable({ context }) {
    context.setLayerExtra("earthquakes", null);
    context.hideHover();
  },
};
