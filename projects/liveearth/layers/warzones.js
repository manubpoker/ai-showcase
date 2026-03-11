import { fmtNum, timeAgo } from "../../shared/atlas/format.js";
import { createSourceAdapter } from "../../shared/runtime/source-adapter.js";

const SEVERITY_STYLE = {
  elevated: { color: "#f59e0b", label: "Elevated", ring: "rgba(245, 158, 11, 0.85)" },
  high: { color: "#ef4444", label: "High alert", ring: "rgba(239, 68, 68, 0.9)" },
  watch: { color: "#facc15", label: "Watch", ring: "rgba(250, 204, 21, 0.78)" },
};

function zoneKey(zone) {
  return zone.id || `${zone.name}:${zone.lat}:${zone.lng}`;
}

function buildSummary(zones) {
  const node = document.createElement("div");
  node.className = "layer-mini-card";
  const highCount = zones.filter((zone) => zone.severity === "high").length;
  node.innerHTML = `
    <div class="layer-mini-title">Conflict monitor</div>
    <div class="layer-mini-meta">${fmtNum(zones.length, 0)} hotspots · ${fmtNum(highCount, 0)} high alert</div>
    <div class="layer-mini-list">${zones.slice(0, 4).map((zone) => (
      `<div>${zone.name}: ${zone.headline}</div>`
    )).join("")}</div>
  `;
  return node;
}

function ensureMarker(context, state, zone) {
  state.elements ??= new Map();
  const key = zoneKey(zone);
  const existing = state.elements.get(key);
  if (existing) return existing;

  const element = document.createElement("div");
  element.className = "warzone-marker";
  element.innerHTML = `
    <span class="warzone-icon">⚔</span>
    <span class="warzone-label"></span>
  `;
  element.addEventListener("mouseenter", () => {
    const current = element.__zone;
    const style = element.__style;
    if (!current || !style) return;
    context.globe.controls().autoRotate = false;
    context.showHover(
      current.name,
      `${style.label} · ${fmtNum(current.articleCount || 0, 0)} headlines`,
      `${current.region} · ${current.headline} · ${timeAgo(current.updatedAt)}`
    );
  });
  element.addEventListener("mouseleave", () => {
    context.globe.controls().autoRotate = true;
    context.hideHover();
  });
  state.elements.set(key, element);
  return element;
}

function renderZone(context, state, zone) {
  const style = SEVERITY_STYLE[zone.severity] || SEVERITY_STYLE.watch;
  const element = ensureMarker(context, state, zone);
  const label = element.querySelector(".warzone-label");

  element.__style = style;
  element.__zone = zone;
  element.dataset.severity = zone.severity;
  element.style.setProperty("--warzone-color", style.color);
  if (label) {
    label.textContent = zone.name;
    label.classList.toggle("visible", context.sharedState.labelsVisible);
  }

  return {
    ...zone,
    getElement: () => element,
    htmlAltitude: zone.severity === "high" ? 0.11 : 0.095,
  };
}

export const layerDefinition = {
  id: "warzones",
  kind: "html+rings",
  pollMs: 900_000,
  ttlMs: 120_000,
  source: createSourceAdapter({
    key: "liveearth:warzones",
    staleAfterMs: 45 * 60 * 1000,
    expireAfterMs: 24 * 60 * 60 * 1000,
    async fetch({ config, fetchJson, signal }) {
      return fetchJson(config.getApiUrl("warzones"), {
        retries: 1,
        signal,
        timeoutMs: 14_000,
      });
    },
    normalize(json) {
      const zones = (Array.isArray(json?.zones) ? json.zones : [])
        .map((zone) => ({
          articleCount: Number(zone.articleCount) || 0,
          headline: String(zone.headline || "Monitoring active conflict reporting"),
          id: String(zone.id || ""),
          lat: Number(zone.lat),
          lng: Number(zone.lng),
          name: String(zone.name || "Conflict hotspot"),
          region: String(zone.region || "Conflict region"),
          severity: String(zone.severity || "watch"),
          source: String(zone.source || "Google News"),
          updatedAt: Number(zone.updatedAt) || Date.now(),
          url: String(zone.url || ""),
        }))
        .filter((zone) => Number.isFinite(zone.lat) && Number.isFinite(zone.lng));
      return {
        fetchedAt: Number(json?.fetchedAt) || Date.now(),
        zones,
      };
    },
  }),
  onEnable({ state }) {
    state.elements ??= new Map();
  },
  async applyData({ context, payload, state }) {
    const profile = context.getRenderProfile();
    const visibleZones = [...payload.zones]
      .sort((left, right) => {
        const severityRank = { high: 3, elevated: 2, watch: 1 };
        const severityDelta = (severityRank[right.severity] || 0) - (severityRank[left.severity] || 0);
        if (severityDelta) return severityDelta;
        return (right.articleCount || 0) - (left.articleCount || 0);
      })
      .slice(0, profile.limits.warzones);

    context.renderRegistry.setHtml("warzones", visibleZones.map((zone) => renderZone(context, state, zone)));
    context.renderRegistry.setRings("warzones", visibleZones.map((zone) => {
      const style = SEVERITY_STYLE[zone.severity] || SEVERITY_STYLE.watch;
      const intensity = zone.severity === "high" ? 1 : zone.severity === "elevated" ? 0.76 : 0.58;
      return {
        lat: zone.lat,
        lng: zone.lng,
        ringColor: [style.ring, "transparent"],
        ringMaxRadius: 1.2 + intensity * 1.2,
        ringPropagationSpeed: 0.55 + intensity * 0.65,
        ringRepeatPeriod: Math.max(1_000, 2_100 - Math.round(intensity * 700)),
      };
    }));
    context.setLayerExtra("warzones", buildSummary(visibleZones));
  },
  onDisable({ context }) {
    context.renderRegistry.setHtml("warzones", []);
    context.setLayerExtra("warzones", null);
    context.hideHover();
  },
};
