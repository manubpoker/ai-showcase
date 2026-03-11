import { fmtNum, timeAgo } from "../../shared/atlas/format.js";
import { createSourceAdapter } from "../../shared/runtime/source-adapter.js";

const categoryColor = {
  "Category 1": "#fbbf24",
  "Category 2": "#fb923c",
  "Category 3": "#f97316",
  "Category 4": "#ef4444",
  "Category 5": "#b91c1c",
  Disturbance: "#38bdf8",
  "Tropical Storm": "#facc15",
};

function intensityFromWind(windKts) {
  if (!Number.isFinite(windKts) || windKts <= 0) return 0.2;
  return Math.max(0.2, Math.min(1, windKts / 140));
}

function buildControls(state, payload, onChange) {
  const strongest = payload.reduce((max, storm) => (
    (Number(storm.windKts) || 0) > (Number(max?.windKts) || 0) ? storm : max
  ), null);

  const node = document.createElement("div");
  node.className = "layer-mini-card";
  node.innerHTML = `
    <div class="layer-mini-title">Cyclone controls</div>
    <label class="layer-mini-row">
      <span>Filter</span>
      <select class="overlay-dropdown" data-action="focus">
        <option value="all" ${state.focusMode === "all" ? "selected" : ""}>All active</option>
        <option value="major" ${state.focusMode === "major" ? "selected" : ""}>Major only</option>
      </select>
    </label>
    <label class="layer-mini-row layer-mini-row--toggle">
      <span>Forecast track</span>
      <input type="checkbox" data-action="tracks" ${state.showTracks ? "checked" : ""} />
    </label>
    <div class="layer-mini-meta">
      ${payload.length} storms · ${strongest ? `${strongest.name} ${fmtNum(strongest.windKts || 0, 0)} kt` : "No wind data"}
    </div>
  `;
  node.addEventListener("input", (event) => {
    const target = event.target;
    const action = target?.dataset?.action;
    if (!action) return;
    if (action === "focus") onChange({ focusMode: target.value === "major" ? "major" : "all" });
    if (action === "tracks") onChange({ showTracks: Boolean(target.checked) });
  });
  return node;
}

function createPoint(context, state, cyclone) {
  const color = categoryColor[cyclone.category] || "#f97316";
  const intensity = intensityFromWind(Number(cyclone.windKts));
  const element = ensureMarker(context, state, cyclone, color, intensity);

  return {
    ...cyclone,
    getElement: () => element,
    htmlAltitude: 0.11 + (intensity * 0.08),
  };
}

function cycloneKey(cyclone) {
  return cyclone.id || `${cyclone.name}:${cyclone.lat}:${cyclone.lng}`;
}

function ensureMarker(context, state, cyclone, color, intensity) {
  state.elements ??= new Map();
  const key = cycloneKey(cyclone);
  const existing = state.elements.get(key);
  if (existing) {
    updateMarker(existing, context, cyclone, color, intensity);
    return existing;
  }

  const element = document.createElement("div");
  element.className = "cyclone-marker";
  element.innerHTML = `
    <span class="cyclone-core"></span>
    <span class="cyclone-band cyclone-band--outer"></span>
    <span class="cyclone-band cyclone-band--inner"></span>
    <span class="cyclone-label"></span>
  `;
  element.addEventListener("mouseenter", () => {
    const current = element.__cyclone;
    if (!current) return;
    context.globe.controls().autoRotate = false;
    const details = [
      current.category || "Cyclone",
      Number.isFinite(current.windKts) ? `Wind ${fmtNum(current.windKts, 0)} kt` : "",
      Number.isFinite(current.pressureMb) ? `Pressure ${fmtNum(current.pressureMb, 0)} mb` : "",
      current.movementDir ? `${current.movementDir}${Number.isFinite(current.movementKts) ? ` ${fmtNum(current.movementKts, 0)} kt` : ""}` : "",
    ].filter(Boolean).join(" · ");

    context.showHover(
      current.name || "Tropical Cyclone",
      current.category || "Active system",
      `${details} · Updated ${timeAgo(current.observedAt)}`
    );
  });
  element.addEventListener("mouseleave", () => {
    context.globe.controls().autoRotate = true;
    context.hideHover();
  });
  state.elements.set(key, element);
  updateMarker(element, context, cyclone, color, intensity);
  return element;
}

function updateMarker(element, context, cyclone, color, intensity) {
  const label = element.querySelector(".cyclone-label");
  element.__cyclone = cyclone;
  element.style.setProperty("--cyclone-color", color);
  element.style.setProperty("--cyclone-scale", `${(0.74 + intensity * 0.9).toFixed(3)}`);
  element.style.setProperty("--cyclone-speed", `${Math.max(1.2, 2.7 - intensity * 1.3).toFixed(2)}s`);
  element.classList.toggle("major", (Number(cyclone.windKts) || 0) >= 64);
  if (label) {
    label.textContent = cyclone.name || "Cyclone";
    label.classList.toggle("visible", context.sharedState.labelsVisible);
  }
}

export const layerDefinition = {
  id: "cyclones",
  kind: "html+rings+paths",
  pollMs: 210_000,
  ttlMs: 35_000,
  source: createSourceAdapter({
    key: "liveearth:cyclones",
    staleAfterMs: 12 * 60 * 1000,
    expireAfterMs: 24 * 60 * 60 * 1000,
    async fetch({ config, fetchJson, signal }) {
      return fetchJson(config.getApiUrl("cyclones"), {
        retries: 1,
        signal,
        timeoutMs: 12_000,
      });
    },
    normalize(json) {
      return (Array.isArray(json?.storms) ? json.storms : [])
        .map((storm) => ({
          basin: storm?.basin || "Unknown",
          category: storm?.category || "Cyclone",
          id: storm?.id || "",
          lat: Number(storm?.lat),
          lng: Number(storm?.lng),
          movementDir: storm?.movementDir || "",
          movementKts: Number(storm?.movementKts),
          name: storm?.name || "Cyclone",
          observedAt: Number(storm?.observedAt) || Date.now(),
          pressureMb: Number(storm?.pressureMb),
          track: Array.isArray(storm?.track) ? storm.track : [],
          windKts: Number(storm?.windKts),
        }))
        .filter((storm) => Number.isFinite(storm.lat) && Number.isFinite(storm.lng));
    },
  }),
  onEnable({ state }) {
    state.elements ??= new Map();
    state.focusMode ??= "all";
    state.showTracks ??= true;
  },
  async applyData({ context, payload, runtime, state }) {
    const profile = context.getRenderProfile();
    const filtered = payload.filter((cyclone) => {
      if (state.focusMode !== "major") return true;
      return Number(cyclone.windKts) >= 64;
    }).sort((left, right) => (Number(right.windKts) || 0) - (Number(left.windKts) || 0));
    const visibleCyclones = filtered.slice(0, profile.limits.cyclones);

    context.renderRegistry.setPoints("cyclones", []);
    context.renderRegistry.setHtml("cyclones", visibleCyclones.map((cyclone) => createPoint(context, state, cyclone)));
    context.renderRegistry.setRings("cyclones", visibleCyclones.map((cyclone) => {
      const wind = Number(cyclone.windKts) || 0;
      const color = categoryColor[cyclone.category] || "#f97316";
      const intensity = intensityFromWind(wind);
      return {
        ...cyclone,
        ringColor: [color, "transparent"],
        ringMaxRadius: 1 + (intensity * 2.7),
        ringPropagationSpeed: 0.35 + (intensity * 0.75),
        ringRepeatPeriod: Math.max(1_150, 2_450 - Math.round(intensity * 900)),
      };
    }));
    context.renderRegistry.setPaths(
      "cyclones",
      state.showTracks
        ? visibleCyclones
          .filter((cyclone) => Array.isArray(cyclone.track) && cyclone.track.length > 1)
          .slice(0, Math.max(8, Math.floor(profile.limits.cyclones * 0.8)))
          .map((cyclone) => ({
            coords: cyclone.track,
            pathColor: "rgba(251, 146, 60, 0.85)",
            pathStroke: 1.2,
            pathDashLength: 0.2,
            pathDashGap: 0.08,
            pathDashAnimateTime: 2_400,
          }))
        : []
    );
    context.setLayerExtra("cyclones", buildControls(state, visibleCyclones, async (changes) => {
      Object.assign(state, changes);
      await runtime.redraw("cyclones");
    }));
  },
  onDisable({ context }) {
    context.renderRegistry.setHtml("cyclones", []);
    context.setLayerExtra("cyclones", null);
    context.hideHover();
  },
};
