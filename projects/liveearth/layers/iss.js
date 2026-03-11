import { createSourceAdapter } from "../../shared/runtime/source-adapter.js";

function createIssMarker(context, payload, state) {
  state.markerEl ??= (() => {
    const element = document.createElement("div");
    element.style.cssText = "cursor:pointer;user-select:none;line-height:1;position:relative;width:60px;height:60px;display:flex;align-items:center;justify-content:center;";
    element.innerHTML = `<div style="position:absolute;inset:0;border-radius:50%;border:2px solid rgba(0,255,136,0.7);animation:issPulse 1.5s ease-out infinite;"></div><div style="position:absolute;inset:8px;border-radius:50%;background:radial-gradient(circle,rgba(0,255,136,0.3) 0%,transparent 70%);animation:issPulse 1.5s ease-out infinite 0.3s;"></div><span style="font-size:1.6rem;position:relative;z-index:1;filter:drop-shadow(0 0 6px rgba(0,255,136,0.8));">🛰️</span>`;
    element.addEventListener("mouseenter", () => {
      const latest = state.lastGoodData;
      if (!latest) return;
      context.globe.controls().autoRotate = false;
      context.showHover(
        "International Space Station",
        `${latest.altitude.toFixed(0)} km altitude`,
        `${latest.velocity.toFixed(0)} km/h · ${latest.visibility}`
      );
    });
    element.addEventListener("mouseleave", () => {
      context.globe.controls().autoRotate = true;
      context.hideHover();
    });
    return element;
  })();

  return {
    ...payload,
    getElement: () => state.markerEl,
    htmlAltitude: 0.07,
  };
}

export const layerDefinition = {
  id: "iss",
  kind: "html+path",
  pollMs: 3_000,
  ttlMs: 1_000,
  source: createSourceAdapter({
    key: "liveearth:iss",
    staleAfterMs: 15_000,
    expireAfterMs: 60 * 60 * 1000,
    async fetch({ config, fetchJson, signal }) {
      return fetchJson(`${config.getApiUrl("external-feed")}?type=iss`, {
        retries: 1,
        signal,
        timeoutMs: 8_000,
      });
    },
    normalize(data) {
      return {
        altitude: data.altitude,
        lat: data.latitude,
        lng: data.longitude,
        velocity: data.velocity,
        visibility: data.visibility,
      };
    },
  }),
  onEnable({ state }) {
    state.trail = [];
    state.hasFocused = false;
  },
  async applyData({ context, payload, state }) {
    state.trail ??= [];
    state.trail.push([payload.lat, payload.lng]);
    if (state.trail.length > 150) state.trail.shift();

    context.renderRegistry.setHtml("iss", [createIssMarker(context, payload, state)]);
    context.renderRegistry.setPaths("iss", [{
      coords: state.trail.slice(),
      pathColor: ["rgba(0, 255, 136, 0.8)", "rgba(0, 255, 136, 0.1)"],
      pathStroke: 2,
      pathDashLength: 0.3,
      pathDashGap: 0.1,
      pathDashAnimateTime: 2_000,
    }]);

    if (!state.hasFocused) {
      state.hasFocused = true;
      context.globe.pointOfView({ lat: payload.lat, lng: payload.lng, altitude: 1.5 }, 1_500);
    }
  },
  onDisable({ context, state }) {
    state.trail = [];
    context.renderRegistry.setPaths("iss", []);
    context.hideHover();
  },
};
