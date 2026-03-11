import { fmtNum, timeAgo } from "../../shared/atlas/format.js";
import { WORLD_CITIES } from "../constants.js";
import { createSourceAdapter } from "../../shared/runtime/source-adapter.js";

const windScale = d3.scaleLinear()
  .domain([0, 20, 40, 70, 110])
  .range(["#67e8f9", "#38bdf8", "#22c55e", "#f59e0b", "#ef4444"])
  .clamp(true);

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function normalizedIntensity(speedKmh) {
  if (!Number.isFinite(speedKmh) || speedKmh <= 0) return 0;
  return clamp(speedKmh / 110, 0, 1);
}

function projectPath(lat, lng, directionDeg, speedKmh, trailScale = 1) {
  const direction = Number.isFinite(directionDeg) ? directionDeg : 0;
  const speed = Number.isFinite(speedKmh) ? speedKmh : 0;
  const flowDirection = ((direction + 180) % 360) * (Math.PI / 180);
  const distanceDeg = clamp((speed / 20) * trailScale, 0.8, 6.2);
  const latAdjust = Math.cos(flowDirection) * distanceDeg;
  const lngAdjust = Math.sin(flowDirection) * distanceDeg / Math.max(0.3, Math.cos(lat * (Math.PI / 180)));

  let targetLng = lng + lngAdjust;
  while (targetLng > 180) targetLng -= 360;
  while (targetLng < -180) targetLng += 360;
  const targetLat = clamp(lat + latAdjust, -85, 85);
  return [
    [lat, lng],
    [targetLat, targetLng],
  ];
}

function buildControls(state, payload, onChange) {
  const strongest = payload.reduce((max, station) => {
    const candidate = state.speedMode === "gust"
      ? Number(station.windGustKmh)
      : Number(station.windKmh);
    if (!Number.isFinite(candidate)) return max;
    const maxValue = max ? (state.speedMode === "gust" ? Number(max.windGustKmh) : Number(max.windKmh)) : -Infinity;
    return candidate > maxValue ? station : max;
  }, null);

  const strongestSpeed = strongest
    ? (state.speedMode === "gust" ? Number(strongest.windGustKmh) : Number(strongest.windKmh))
    : null;

  const node = document.createElement("div");
  node.className = "layer-mini-card";
  node.innerHTML = `
    <div class="layer-mini-title">Wind stream controls</div>
    <label class="layer-mini-row">
      <span>Speed source</span>
      <select class="overlay-dropdown" data-action="speed">
        <option value="sustained" ${state.speedMode === "sustained" ? "selected" : ""}>Sustained</option>
        <option value="gust" ${state.speedMode === "gust" ? "selected" : ""}>Gusts</option>
      </select>
    </label>
    <label class="layer-mini-row">
      <span>Focus</span>
      <select class="overlay-dropdown" data-action="focus">
        <option value="all" ${state.focusMode === "all" ? "selected" : ""}>All cities</option>
        <option value="storm" ${state.focusMode === "storm" ? "selected" : ""}>Storm corridors</option>
      </select>
    </label>
    <label class="layer-mini-row">
      <span>Trail length</span>
      <select class="overlay-dropdown" data-action="trail">
        <option value="compact" ${state.trailMode === "compact" ? "selected" : ""}>Compact</option>
        <option value="balanced" ${state.trailMode === "balanced" ? "selected" : ""}>Balanced</option>
        <option value="cinematic" ${state.trailMode === "cinematic" ? "selected" : ""}>Cinematic</option>
      </select>
    </label>
    <div class="layer-mini-meta">
      ${payload.length} cities · ${strongest ? `${strongest.name} ${fmtNum(strongestSpeed, 0)} km/h` : "No wind data"}
    </div>
  `;

  node.addEventListener("input", (event) => {
    const target = event.target;
    const action = target?.dataset?.action;
    if (!action) return;
    if (action === "speed") onChange({ speedMode: target.value === "gust" ? "gust" : "sustained" });
    if (action === "focus") onChange({ focusMode: target.value === "storm" ? "storm" : "all" });
    if (action === "trail") {
      const nextMode = target.value === "compact" || target.value === "cinematic" ? target.value : "balanced";
      onChange({ trailMode: nextMode });
    }
  });

  return node;
}

function pickSpeed(station, mode) {
  const gust = Number(station.windGustKmh);
  const sustained = Number(station.windKmh);
  if (mode === "gust") return Number.isFinite(gust) ? gust : sustained;
  return Number.isFinite(sustained) ? sustained : gust;
}

function stationKey(station) {
  return `${station.name}:${station.country}`;
}

function ensureMarker(context, state, station) {
  state.elements ??= new Map();
  const key = stationKey(station);
  const existing = state.elements.get(key);
  if (existing) return existing;

  const element = document.createElement("div");
  element.className = "windstream-marker";
  element.innerHTML = `
    <div class="windstream-arrow">
      <span class="windstream-arrow-shaft"></span>
      <span class="windstream-arrow-head"></span>
    </div>
    <span class="windstream-speed"></span>
  `;

  element.addEventListener("mouseenter", () => {
    const current = element.__station;
    if (!current) return;
    context.globe.controls().autoRotate = false;
    const speed = pickSpeed(current, element.__speedMode || "sustained");
    const sustained = Number.isFinite(current.windKmh) ? `${fmtNum(current.windKmh, 0)} km/h` : "n/a";
    const gust = Number.isFinite(current.windGustKmh) ? `${fmtNum(current.windGustKmh, 0)} km/h` : "n/a";
    const pressure = Number.isFinite(current.pressureMb) ? `${fmtNum(current.pressureMb, 0)} hPa` : "n/a";
    context.showHover(
      `${current.name}, ${current.country}`,
      `${element.__speedMode === "gust" ? "Gust" : "Wind"} ${fmtNum(speed || 0, 0)} km/h`,
      `Dir ${fmtNum(current.windDirDeg || 0, 0)} deg · Sustained ${sustained} · Gust ${gust} · Pressure ${pressure} · Updated ${timeAgo(current.observedAt)}`
    );
  });
  element.addEventListener("mouseleave", () => {
    context.globe.controls().autoRotate = true;
    context.hideHover();
  });

  state.elements.set(key, element);
  return element;
}

function updateMarker(context, state, station) {
  const speed = pickSpeed(station, state.speedMode);
  const intensity = normalizedIntensity(speed);
  const color = windScale(speed || 0);
  const rotation = (((Number.isFinite(station.windDirDeg) ? station.windDirDeg : 0) + 180) % 360);
  const element = ensureMarker(context, state, station);
  const speedLabel = element.querySelector(".windstream-speed");

  element.__speedMode = state.speedMode;
  element.__station = station;
  element.classList.toggle("storm", (speed || 0) >= 80);
  element.style.setProperty("--wind-color", color);
  element.style.setProperty("--wind-duration", `${Math.max(0.8, 2.25 - (intensity * 1.2)).toFixed(2)}s`);
  element.style.setProperty("--wind-rotation", `${rotation.toFixed(1)}deg`);
  element.style.setProperty("--wind-scale", `${(0.82 + (intensity * 0.7)).toFixed(3)}`);

  if (speedLabel) {
    speedLabel.textContent = `${fmtNum(speed || 0, 0)}`;
    speedLabel.classList.toggle("visible", context.sharedState.labelsVisible);
  }

  return {
    ...station,
    getElement: () => element,
    htmlAltitude: 0.09 + (intensity * 0.09),
  };
}

export const layerDefinition = {
  id: "windstreams",
  kind: "points+paths+rings",
  pollMs: 12 * 60 * 1000,
  ttlMs: 4 * 60 * 1000,
  source: createSourceAdapter({
    key: "liveearth:windstreams",
    staleAfterMs: 35 * 60 * 1000,
    expireAfterMs: 24 * 60 * 60 * 1000,
    async fetch({ config, fetchJson, signal }) {
      return fetchJson(`${config.getApiUrl("meteo")}?dataset=windstreams`, {
        retries: 1,
        signal,
        timeoutMs: 12_000,
      });
    },
    normalize(json) {
      return WORLD_CITIES.map((city, index) => {
        const source = Array.isArray(json) ? json[index] : json;
        const current = source?.current || {};
        const observedAt = Number.isFinite(Date.parse(current.time)) ? Date.parse(current.time) : Date.now();
        return {
          ...city,
          observedAt,
          pressureMb: Number(current.pressure_msl),
          windDirDeg: Number(current.wind_direction_10m),
          windGustKmh: Number(current.wind_gusts_10m),
          windKmh: Number(current.wind_speed_10m),
        };
      }).filter((station) => (
        Number.isFinite(station.windKmh)
        || Number.isFinite(station.windGustKmh)
      ));
    },
  }),
  onEnable({ state }) {
    state.focusMode ??= "all";
    state.speedMode ??= "sustained";
    state.trailMode ??= "balanced";
  },
  async applyData({ context, payload, runtime, state }) {
    const profile = context.getRenderProfile();
    const speedThreshold = state.focusMode === "storm" ? 55 : 0;
    const trailScale = state.trailMode === "compact" ? 0.85 : state.trailMode === "cinematic" ? 1.5 : 1.15;
    const filtered = payload
      .filter((station) => pickSpeed(station, state.speedMode) >= speedThreshold)
      .sort((left, right) => pickSpeed(right, state.speedMode) - pickSpeed(left, state.speedMode));
    const visibleMarkers = filtered.slice(0, profile.limits.windMarkers);
    const visiblePaths = filtered.slice(0, profile.limits.windPaths);
    const visibleRings = filtered
      .filter((station) => pickSpeed(station, state.speedMode) >= 80)
      .slice(0, profile.limits.windRings);

    context.renderRegistry.setPoints("windstreams", []);
    context.renderRegistry.setHtml("windstreams", visibleMarkers.map((station) => updateMarker(context, state, station)));

    context.renderRegistry.setPaths("windstreams", visiblePaths.map((station) => {
      const speed = pickSpeed(station, state.speedMode);
      const intensity = normalizedIntensity(speed);
      const color = windScale(speed || 0);
      return {
        coords: projectPath(station.lat, station.lng, station.windDirDeg, speed, trailScale),
        pathColor: color,
        pathStroke: 0.55 + (intensity * 1.35),
        pathDashLength: 0.16,
        pathDashGap: 0.2,
        pathDashAnimateTime: Math.max(550, 2_100 - Math.round(intensity * 1_250)),
      };
    }));

    context.renderRegistry.setRings("windstreams", visibleRings.map((station) => {
        const speed = pickSpeed(station, state.speedMode);
        const intensity = normalizedIntensity(speed);
        const color = windScale(speed || 0);
        return {
          lat: station.lat,
          lng: station.lng,
          ringColor: [color, "transparent"],
          ringMaxRadius: 0.7 + (intensity * 1.6),
          ringPropagationSpeed: 0.45 + (intensity * 1.1),
          ringRepeatPeriod: Math.max(900, 1_800 - Math.round(intensity * 500)),
        };
      }));

    context.setLayerExtra("windstreams", buildControls(state, visibleMarkers, async (changes) => {
      Object.assign(state, changes);
      await runtime.redraw("windstreams");
    }));
  },
  onDisable({ context }) {
    context.renderRegistry.setHtml("windstreams", []);
    context.setLayerExtra("windstreams", null);
    context.hideHover();
  },
};
