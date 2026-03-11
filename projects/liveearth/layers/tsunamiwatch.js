import { fmtNum, timeAgo } from "../../shared/atlas/format.js";
import { createSourceAdapter } from "../../shared/runtime/source-adapter.js";

const riskColor = {
  Advisory: "#38bdf8",
  Elevated: "#facc15",
  Severe: "#f97316",
  Extreme: "#ef4444",
};

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function eventIntensity(event) {
  const magnitude = Number(event?.magnitude) || 0;
  const ageHours = Math.max(0, (Date.now() - (Number(event?.observedAt) || 0)) / (60 * 60 * 1000));
  const magnitudeScore = clamp((magnitude - 5) / 3.5, 0, 1);
  const recencyScore = clamp(1 - (ageHours / 72), 0, 1);
  return clamp((magnitudeScore * 0.72) + (recencyScore * 0.28), 0.16, 1);
}

function buildControls(state, payload, onChange) {
  const severeCount = payload.events.filter((event) => (Number(event?.magnitude) || 0) >= 7).length;
  const strongest = payload.events.reduce((max, event) => (
    (Number(event?.magnitude) || 0) > (Number(max?.magnitude) || 0) ? event : max
  ), null);

  const node = document.createElement("div");
  node.className = "layer-mini-card";
  node.innerHTML = `
    <div class="layer-mini-title">Tsunami watch controls</div>
    <label class="layer-mini-row">
      <span>Window</span>
      <select class="overlay-dropdown" data-action="window">
        <option value="24" ${state.windowHours === 24 ? "selected" : ""}>Past 24h</option>
        <option value="72" ${state.windowHours === 72 ? "selected" : ""}>Past 72h</option>
        <option value="168" ${state.windowHours === 168 ? "selected" : ""}>Past 7d</option>
      </select>
    </label>
    <label class="layer-mini-row">
      <span>Filter</span>
      <select class="overlay-dropdown" data-action="focus">
        <option value="all" ${state.focusMode === "all" ? "selected" : ""}>All alerts</option>
        <option value="major" ${state.focusMode === "major" ? "selected" : ""}>M7+ only</option>
      </select>
    </label>
    <label class="layer-mini-row layer-mini-row--toggle">
      <span>Shock rings</span>
      <input type="checkbox" data-action="rings" ${state.showShockRings ? "checked" : ""} />
    </label>
    <div class="layer-mini-meta">
      ${payload.events.length} alerts · ${fmtNum(severeCount, 0)} severe · ${strongest ? `max M${fmtNum(strongest.magnitude || 0, 1)}` : "No events"}
    </div>
  `;

  node.addEventListener("input", (event) => {
    const target = event.target;
    const action = target?.dataset?.action;
    if (!action) return;
    if (action === "window") {
      const value = Number(target.value);
      const nextWindow = value === 24 || value === 72 || value === 168 ? value : 72;
      onChange({ windowHours: nextWindow });
    }
    if (action === "focus") onChange({ focusMode: target.value === "major" ? "major" : "all" });
    if (action === "rings") onChange({ showShockRings: Boolean(target.checked) });
  });

  return node;
}

function toPathCoords(event, radiusDeg = 16) {
  const lat = Number(event?.lat);
  const lng = Number(event?.lng);
  if (!Number.isFinite(lat) || !Number.isFinite(lng)) return [];

  return Array.from({ length: 40 }, (_, index) => {
    const angle = (index / 39) * Math.PI * 2;
    const dLat = Math.sin(angle) * radiusDeg;
    const dLng = (Math.cos(angle) * radiusDeg) / Math.max(0.25, Math.cos(lat * Math.PI / 180));
    let nextLng = lng + dLng;
    while (nextLng > 180) nextLng -= 360;
    while (nextLng < -180) nextLng += 360;
    return [clamp(lat + dLat, -85, 85), nextLng];
  });
}

export const layerDefinition = {
  id: "tsunamiwatch",
  kind: "points+rings+paths",
  pollMs: 2 * 60 * 1000,
  ttlMs: 45 * 1000,
  source: createSourceAdapter({
    key: "liveearth:tsunamiwatch",
    staleAfterMs: 8 * 60 * 1000,
    expireAfterMs: 24 * 60 * 60 * 1000,
    async fetch({ config, fetchJson, signal }) {
      return fetchJson(config.getApiUrl("tsunami"), {
        retries: 1,
        signal,
        timeoutMs: 10_000,
      });
    },
    normalize(json) {
      return {
        events: (Array.isArray(json?.events) ? json.events : []).map((event) => ({
          depthKm: Number(event?.depthKm),
          id: String(event?.id || ""),
          lat: Number(event?.lat),
          lng: Number(event?.lng),
          magnitude: Number(event?.magnitude),
          observedAt: Number(event?.observedAt) || Date.now(),
          place: String(event?.place || "Ocean event"),
          risk: String(event?.risk || "Advisory"),
          sourceUrl: String(event?.sourceUrl || ""),
          tsunamiFlag: Boolean(event?.tsunamiFlag),
        })).filter((event) => Number.isFinite(event.lat) && Number.isFinite(event.lng)),
        fetchedAt: Number(json?.fetchedAt) || Date.now(),
        source: String(json?.source || "USGS"),
      };
    },
  }),
  onEnable({ state }) {
    state.focusMode ??= "all";
    state.windowHours ??= 72;
    state.showShockRings ??= true;
  },
  async applyData({ context, payload, runtime, state }) {
    const now = Date.now();
    const horizon = now - (state.windowHours * 60 * 60 * 1000);

    const filtered = payload.events
      .filter((event) => Number(event.observedAt) >= horizon)
      .filter((event) => (state.focusMode === "major" ? (Number(event.magnitude) || 0) >= 7 : true));

    context.renderRegistry.setPoints("tsunamiwatch", filtered.map((event) => {
      const intensity = eventIntensity(event);
      const color = riskColor[event.risk] || "#f97316";
      return {
        ...event,
        pointAltitude: 0.1 + (intensity * 0.1),
        pointColor: color,
        pointRadius: 0.12 + (intensity * 0.26),
        onPointHover() {
          context.globe.controls().autoRotate = false;
          const depth = Number.isFinite(event.depthKm) ? `${fmtNum(event.depthKm, 0)} km depth` : "depth n/a";
          context.showHover(
            event.place || "Tsunami watch",
            `M${fmtNum(event.magnitude || 0, 1)} · ${event.risk}`,
            `${depth} · ${event.tsunamiFlag ? "Tsunami flag" : "Seismic watch"} · ${timeAgo(event.observedAt)}`
          );
        },
        onPointLeave() {
          context.globe.controls().autoRotate = true;
          context.hideHover();
        },
      };
    }));

    context.renderRegistry.setRings(
      "tsunamiwatch",
      state.showShockRings
        ? filtered
          .slice(0, 40)
          .map((event) => {
            const intensity = eventIntensity(event);
            const color = riskColor[event.risk] || "#f97316";
            return {
              lat: event.lat,
              lng: event.lng,
              ringColor: [color, "transparent"],
              ringMaxRadius: 0.9 + (intensity * 2.8),
              ringPropagationSpeed: 0.3 + (intensity * 0.95),
              ringRepeatPeriod: Math.max(900, 2_600 - Math.round(intensity * 1_350)),
            };
          })
        : []
    );

    context.renderRegistry.setPaths("tsunamiwatch", filtered
      .filter((event) => (Number(event.magnitude) || 0) >= 7.3)
      .slice(0, 12)
      .map((event) => ({
        coords: toPathCoords(event, 14 + (eventIntensity(event) * 8)),
        pathColor: "rgba(56, 189, 248, 0.6)",
        pathStroke: 0.9,
        pathDashLength: 0.18,
        pathDashGap: 0.08,
        pathDashAnimateTime: 2_100,
      })));

    context.setLayerExtra("tsunamiwatch", buildControls(state, payload, async (changes) => {
      Object.assign(state, changes);
      await runtime.redraw("tsunamiwatch");
    }));
  },
  onDisable({ context }) {
    context.setLayerExtra("tsunamiwatch", null);
    context.hideHover();
  },
};
