import { fmtNum, timeAgo } from "../../shared/atlas/format.js";
import { createSourceAdapter } from "../../shared/runtime/source-adapter.js";

const METRICS = {
  seaTempC: {
    color: d3.scaleLinear().domain([-2, 8, 16, 24, 32]).range(["#0c4a6e", "#0284c7", "#22d3ee", "#f59e0b", "#ef4444"]).clamp(true),
    label: "Sea Temp",
    unit: "C",
    valueLabel: "Sea temp",
  },
  waveHeightM: {
    color: d3.scaleLinear().domain([0, 1.5, 3, 5, 8]).range(["#0ea5e9", "#22d3ee", "#22c55e", "#f59e0b", "#ef4444"]).clamp(true),
    label: "Wave Height",
    unit: "m",
    valueLabel: "Wave",
  },
  windSpeedMps: {
    color: d3.scaleLinear().domain([0, 7, 14, 22, 30]).range(["#22c55e", "#a3e635", "#facc15", "#f97316", "#dc2626"]).clamp(true),
    label: "Wind Speed",
    unit: "m/s",
    valueLabel: "Wind",
  },
};

const INTENSITY_FILTERS = [
  { id: "all", label: "All stations", minScore: 0 },
  { id: "active", label: "Active oceans", minScore: 0.4 },
  { id: "extreme", label: "Extreme only", minScore: 0.7 },
];

function normalize(value) {
  if (!Number.isFinite(value)) return null;
  return Math.max(0, Math.min(1, value));
}

function buoyScore(station) {
  const waveScore = normalize((station.waveHeightM || 0) / 8) || 0;
  const windScore = normalize((station.windSpeedMps || 0) / 30) || 0;
  const tempDelta = Number.isFinite(station.seaTempC) ? Math.abs(station.seaTempC - 15) : 0;
  const tempScore = normalize(tempDelta / 18) || 0;
  return Math.max(waveScore, windScore, tempScore * 0.8);
}

function metricValue(station, metricId) {
  return station[metricId];
}

function buildControls(state, payload, visibleCount, onChange) {
  const node = document.createElement("div");
  node.className = "layer-mini-card";
  node.innerHTML = `
    <div class="layer-mini-title">Ocean controls</div>
    <label class="layer-mini-row">
      <span>Metric</span>
      <select class="overlay-dropdown" data-action="metric">
        ${Object.entries(METRICS).map(([id, metric]) => (
          `<option value="${id}" ${state.metric === id ? "selected" : ""}>${metric.label}</option>`
        )).join("")}
      </select>
    </label>
    <label class="layer-mini-row">
      <span>Focus</span>
      <select class="overlay-dropdown" data-action="filter">
        ${INTENSITY_FILTERS.map((filter) => (
          `<option value="${filter.id}" ${state.filter === filter.id ? "selected" : ""}>${filter.label}</option>`
        )).join("")}
      </select>
    </label>
    <label class="layer-mini-row layer-mini-row--toggle">
      <span>Pulse extremes</span>
      <input type="checkbox" data-action="rings" ${state.showRings ? "checked" : ""} />
    </label>
    <div class="layer-mini-meta">
      ${fmtNum(visibleCount, 0)} visible / ${fmtNum(payload.stations.length, 0)} stations · Updated ${timeAgo(payload.fetchedAt)}
    </div>
  `;

  node.addEventListener("input", (event) => {
    const target = event.target;
    const action = target?.dataset?.action;
    if (!action) return;
    if (action === "metric") onChange({ metric: target.value });
    if (action === "filter") onChange({ filter: target.value });
    if (action === "rings") onChange({ showRings: Boolean(target.checked) });
  });

  return node;
}

function renderPoints(context, stations, metricId) {
  const metric = METRICS[metricId] || METRICS.waveHeightM;
  return stations.map((station) => {
    const value = metricValue(station, metricId);
    const color = Number.isFinite(value) ? metric.color(value) : "#94a3b8";
    const score = buoyScore(station);
    return {
      ...station,
      pointAltitude: 0.1 + score * 0.14,
      pointColor: color,
      pointRadius: 0.06 + score * 0.16,
      onPointHover() {
        context.globe.controls().autoRotate = false;
        const wave = Number.isFinite(station.waveHeightM) ? `${fmtNum(station.waveHeightM, 1)} m` : "n/a";
        const wind = Number.isFinite(station.windSpeedMps) ? `${fmtNum(station.windSpeedMps, 1)} m/s` : "n/a";
        const seaTemp = Number.isFinite(station.seaTempC) ? `${fmtNum(station.seaTempC, 1)} C` : "n/a";
        const metricText = Number.isFinite(value) ? `${fmtNum(value, 1)} ${metric.unit}` : "No reading";
        context.showHover(
          station.name || `Buoy ${station.stationId}`,
          `${metric.valueLabel}: ${metricText}`,
          `Wave ${wave} · Wind ${wind} · Sea temp ${seaTemp} · ${timeAgo(station.observedAt)}`
        );
      },
      onPointLeave() {
        context.globe.controls().autoRotate = true;
        context.hideHover();
      },
    };
  });
}

function stationKey(station) {
  return station.stationId || station.name || `${station.lat}:${station.lng}`;
}

function ensureMarker(context, state, station) {
  state.elements ??= new Map();
  const key = stationKey(station);
  const existing = state.elements.get(key);
  if (existing) return existing;

  const element = document.createElement("div");
  element.className = "buoy-marker";
  element.innerHTML = `
    <span class="buoy-icon">
      <span class="buoy-icon-top"></span>
      <span class="buoy-icon-body"></span>
      <span class="buoy-icon-wave"></span>
    </span>
    <span class="buoy-label"></span>
  `;
  element.addEventListener("mouseenter", () => {
    const current = element.__station;
    const metric = element.__metric;
    if (!current || !metric) return;
    context.globe.controls().autoRotate = false;
    const value = metricValue(current, metric.id);
    const wave = Number.isFinite(current.waveHeightM) ? `${fmtNum(current.waveHeightM, 1)} m` : "n/a";
    const wind = Number.isFinite(current.windSpeedMps) ? `${fmtNum(current.windSpeedMps, 1)} m/s` : "n/a";
    const seaTemp = Number.isFinite(current.seaTempC) ? `${fmtNum(current.seaTempC, 1)} C` : "n/a";
    const metricText = Number.isFinite(value) ? `${fmtNum(value, 1)} ${metric.unit}` : "No reading";
    context.showHover(
      current.name || `Buoy ${current.stationId}`,
      `${metric.valueLabel}: ${metricText}`,
      `Wave ${wave} · Wind ${wind} · Sea temp ${seaTemp} · ${timeAgo(current.observedAt)}`
    );
  });
  element.addEventListener("mouseleave", () => {
    context.globe.controls().autoRotate = true;
    context.hideHover();
  });
  state.elements.set(key, element);
  return element;
}

function renderMarkers(context, state, stations, metricId) {
  const metric = METRICS[metricId] || METRICS.waveHeightM;
  return stations.map((station) => {
    const value = metricValue(station, metricId);
    const color = Number.isFinite(value) ? metric.color(value) : "#94a3b8";
    const score = buoyScore(station);
    const element = ensureMarker(context, state, station);
    const label = element.querySelector(".buoy-label");

    element.__metric = { ...metric, id: metricId };
    element.__station = station;
    element.style.setProperty("--buoy-color", color);
    element.style.setProperty("--buoy-scale", `${(0.82 + score * 0.54).toFixed(3)}`);
    element.classList.toggle("extreme", score >= 0.7);
    if (label) {
      label.textContent = station.name || station.stationId || "Buoy";
      label.classList.toggle("visible", context.sharedState.labelsVisible);
    }

    return {
      ...station,
      getElement: () => element,
      htmlAltitude: 0.095 + score * 0.12,
    };
  });
}

export const layerDefinition = {
  id: "ocean",
  kind: "html+rings",
  pollMs: 180_000,
  ttlMs: 60_000,
  source: createSourceAdapter({
    key: "liveearth:ocean",
    staleAfterMs: 25 * 60 * 1000,
    expireAfterMs: 12 * 60 * 60 * 1000,
    async fetch({ config, fetchJson, signal }) {
      return fetchJson(config.getApiUrl("ocean"), {
        retries: 1,
        signal,
        timeoutMs: 14_000,
      });
    },
    normalize(json) {
      const stations = (Array.isArray(json?.stations) ? json.stations : [])
        .map((station) => ({
          ...station,
          lat: Number(station.lat),
          lng: Number(station.lng),
          observedAt: Number(station.observedAt),
          seaTempC: Number.isFinite(Number(station.seaTempC)) ? Number(station.seaTempC) : null,
          waveHeightM: Number.isFinite(Number(station.waveHeightM)) ? Number(station.waveHeightM) : null,
          windSpeedMps: Number.isFinite(Number(station.windSpeedMps)) ? Number(station.windSpeedMps) : null,
        }))
        .filter((station) => Number.isFinite(station.lat) && Number.isFinite(station.lng));

      return {
        fetchedAt: Number.isFinite(Number(json?.fetchedAt)) ? Number(json.fetchedAt) : Date.now(),
        stations,
      };
    },
  }),
  onEnable({ state }) {
    state.elements ??= new Map();
    state.metric ??= "waveHeightM";
    state.filter ??= "all";
    state.showRings ??= true;
  },
  async applyData({ context, payload, runtime, state }) {
    const profile = context.getRenderProfile();
    const filter = INTENSITY_FILTERS.find((entry) => entry.id === state.filter) || INTENSITY_FILTERS[0];
    const visible = payload.stations
      .filter((station) => buoyScore(station) >= filter.minScore)
      .sort((left, right) => buoyScore(right) - buoyScore(left))
      .slice(0, profile.limits.ocean);
    const markers = renderMarkers(context, state, visible, state.metric);
    const rings = state.showRings
      ? visible
        .filter((station) => buoyScore(station) >= 0.7)
        .map((station) => ({
          lat: station.lat,
          lng: station.lng,
          ringColor: ["rgba(250,204,21,0.75)", "transparent"],
          ringMaxRadius: 1.2 + buoyScore(station) * 1.1,
          ringPropagationSpeed: 0.8,
          ringRepeatPeriod: 2600,
        }))
      : [];

    context.renderRegistry.setPoints("ocean", []);
    context.renderRegistry.setHtml("ocean", markers);
    context.renderRegistry.setRings("ocean", rings);
    context.setLayerExtra(
      "ocean",
      buildControls(state, payload, visible.length, async (changeSet) => {
        Object.assign(state, changeSet);
        await runtime.redraw("ocean");
      })
    );
  },
  onDisable({ context }) {
    context.renderRegistry.setHtml("ocean", []);
    context.setLayerExtra("ocean", null);
    context.hideHover();
  },
};
