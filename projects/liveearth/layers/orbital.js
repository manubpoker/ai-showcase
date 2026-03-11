import { fmtNum, timeAgo } from "../../shared/atlas/format.js";
import { createSourceAdapter } from "../../shared/runtime/source-adapter.js";

const TYPE_COLORS = {
  Crewed: "#22d3ee",
  Science: "#f59e0b",
  Weather: "#4ade80",
};

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function createTrail(state, satellite) {
  state.trails ??= new Map();
  const current = state.trails.get(satellite.id) || [];
  const next = [...current, [satellite.lat, satellite.lng]];
  const maxLength = state.trackDensity === "cinematic" ? 200 : state.trackDensity === "compact" ? 80 : 130;
  while (next.length > maxLength) next.shift();
  state.trails.set(satellite.id, next);
  return next;
}

function filteredSatellites(state, payload) {
  const satellites = Array.isArray(payload?.satellites) ? payload.satellites : [];
  if (state.focusMode === "crewed") return satellites.filter((satellite) => satellite.type === "Crewed");
  if (state.focusMode === "science") return satellites.filter((satellite) => satellite.type === "Science");
  if (state.focusMode === "weather") return satellites.filter((satellite) => satellite.type === "Weather");
  return satellites;
}

function buildControls(state, payload, onChange) {
  const counts = payload?.counts || {};
  const card = document.createElement("div");
  card.className = "layer-mini-card";
  card.innerHTML = `
    <div class="layer-mini-title">Orbital controls</div>
    <label class="layer-mini-row">
      <span>Focus</span>
      <select class="overlay-dropdown" data-action="focus">
        <option value="all" ${state.focusMode === "all" ? "selected" : ""}>All tracks</option>
        <option value="crewed" ${state.focusMode === "crewed" ? "selected" : ""}>Crewed only</option>
        <option value="science" ${state.focusMode === "science" ? "selected" : ""}>Science only</option>
        <option value="weather" ${state.focusMode === "weather" ? "selected" : ""}>Weather only</option>
      </select>
    </label>
    <label class="layer-mini-row">
      <span>Trail</span>
      <select class="overlay-dropdown" data-action="trail">
        <option value="compact" ${state.trackDensity === "compact" ? "selected" : ""}>Compact</option>
        <option value="balanced" ${state.trackDensity === "balanced" ? "selected" : ""}>Balanced</option>
        <option value="cinematic" ${state.trackDensity === "cinematic" ? "selected" : ""}>Cinematic</option>
      </select>
    </label>
    <label class="layer-mini-row layer-mini-row--toggle">
      <span>Coverage rings</span>
      <input type="checkbox" data-action="coverage" ${state.showCoverageRings ? "checked" : ""} />
    </label>
    <div class="layer-mini-meta">
      ${fmtNum(counts.total || 0, 0)} live objects · ${fmtNum(counts.crewed || 0, 0)} crewed · ${fmtNum(counts.weather || 0, 0)} weather
    </div>
  `;
  card.addEventListener("input", (event) => {
    const target = event.target;
    const action = target?.dataset?.action;
    if (!action) return;
    if (action === "focus") onChange({ focusMode: target.value });
    if (action === "trail") onChange({ trackDensity: target.value });
    if (action === "coverage") onChange({ showCoverageRings: Boolean(target.checked) });
  });
  return card;
}

export const layerDefinition = {
  id: "orbital",
  kind: "points+rings+paths",
  pollMs: 20_000,
  ttlMs: 10_000,
  source: createSourceAdapter({
    key: "liveearth:orbital",
    staleAfterMs: 2 * 60 * 1000,
    expireAfterMs: 6 * 60 * 60 * 1000,
    async fetch({ config, fetchJson, signal }) {
      return fetchJson(config.getApiUrl("orbital"), {
        retries: 1,
        signal,
        timeoutMs: 14_000,
      });
    },
    normalize(json) {
      const satellites = (Array.isArray(json?.satellites) ? json.satellites : [])
        .map((item) => ({
          altitudeKm: Number(item?.altitudeKm),
          horizonDegrees: Number(item?.horizonDegrees),
          id: Number(item?.id),
          lat: Number(item?.lat),
          lng: Number(item?.lng),
          name: item?.name || "Satellite",
          observedAt: Number(item?.observedAt) || Date.now(),
          type: item?.type || "Unknown",
          velocityKmh: Number(item?.velocityKmh),
          visibility: item?.visibility || "unknown",
        }))
        .filter((item) => (
          Number.isFinite(item.id)
          && Number.isFinite(item.lat)
          && Number.isFinite(item.lng)
          && Number.isFinite(item.altitudeKm)
          && Number.isFinite(item.velocityKmh)
        ));
      return {
        counts: {
          crewed: Number(json?.counts?.crewed) || 0,
          science: Number(json?.counts?.science) || 0,
          total: Number(json?.counts?.total) || satellites.length,
          weather: Number(json?.counts?.weather) || 0,
        },
        fetchedAt: Number(json?.fetchedAt) || Date.now(),
        maxVelocityKmh: Number(json?.maxVelocityKmh) || 0,
        satellites,
      };
    },
  }),
  onEnable({ state }) {
    state.focusMode ??= "all";
    state.trackDensity ??= "balanced";
    state.showCoverageRings ??= true;
    state.trails ??= new Map();
  },
  async applyData({ context, payload, runtime, state }) {
    const satellites = filteredSatellites(state, payload);
    const points = satellites.map((satellite) => {
      const pointColor = TYPE_COLORS[satellite.type] || "#a78bfa";
      const speedRatio = clamp(satellite.velocityKmh / 30_000, 0, 1);
      return {
        ...satellite,
        onPointHover() {
          context.globe.controls().autoRotate = false;
          context.showHover(
            `${satellite.name} (${satellite.type})`,
            `${fmtNum(satellite.altitudeKm, 0)} km · ${fmtNum(satellite.velocityKmh, 0)} km/h`,
            `${satellite.visibility} visibility · Updated ${timeAgo(satellite.observedAt)}`
          );
        },
        onPointLeave() {
          context.globe.controls().autoRotate = true;
          context.hideHover();
        },
        pointAltitude: 0.09 + (speedRatio * 0.05),
        pointColor,
        pointRadius: 0.09 + (speedRatio * 0.06),
      };
    });

    const paths = satellites
      .map((satellite) => {
        const trail = createTrail(state, satellite);
        if (!trail.length || state.trackDensity === "compact" && trail.length < 3) return null;
        return {
          coords: trail,
          pathColor: [TYPE_COLORS[satellite.type] || "rgba(167,139,250,0.9)", "rgba(148,163,184,0.12)"],
          pathDashAnimateTime: 2_000,
          pathDashGap: 0.08,
          pathDashLength: 0.22,
          pathStroke: 1.25,
        };
      })
      .filter(Boolean);

    const rings = state.showCoverageRings
      ? satellites.map((satellite) => ({
          lat: satellite.lat,
          lng: satellite.lng,
          ringColor: ["rgba(125, 211, 252, 0.5)", "transparent"],
          ringMaxRadius: clamp((satellite.horizonDegrees || 8) / 2.8, 1.3, 16),
          ringPropagationSpeed: 0.6,
          ringRepeatPeriod: 2_300,
        }))
      : [];

    context.renderRegistry.setPoints("orbital", points);
    context.renderRegistry.setPaths("orbital", paths);
    context.renderRegistry.setRings("orbital", rings);

    context.setLayerExtra(
      "orbital",
      buildControls(state, payload, async (patch) => {
        Object.assign(state, patch);
        await runtime.redraw("orbital");
      })
    );
  },
  onDisable({ context, state }) {
    state.trails = new Map();
    context.setLayerExtra("orbital", null);
    context.hideHover();
  },
};
