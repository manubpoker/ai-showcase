import { timeAgo } from "../../shared/atlas/format.js";
import { createSourceAdapter } from "../../shared/runtime/source-adapter.js";

const CATEGORY_STYLE = {
  severeStorms: { color: "#ef4444", emoji: "🌪️", label: "Severe Storm" },
  volcanoes: { color: "#f97316", emoji: "🌋", label: "Volcano" },
  wildfires: { color: "#f59e0b", emoji: "🔥", label: "Wildfire" },
};

function getCoordinatesFromGeometry(geometry) {
  if (!geometry || geometry.type !== "Point" || !Array.isArray(geometry.coordinates)) return null;
  const [lng, lat] = geometry.coordinates;
  if (!Number.isFinite(lat) || !Number.isFinite(lng)) return null;
  return { lat, lng };
}

function createCategorySummary(events) {
  const counts = new Map();
  for (const event of events) {
    counts.set(event.categoryId, (counts.get(event.categoryId) || 0) + 1);
  }
  return [...counts.entries()]
    .sort((left, right) => right[1] - left[1])
    .slice(0, 3)
    .map(([categoryId, count]) => {
      const style = CATEGORY_STYLE[categoryId] || { emoji: "⚠️", label: categoryId };
      return `${style.emoji} ${style.label}: ${count}`;
    });
}

function buildSummaryNode(events) {
  const node = document.createElement("div");
  node.className = "layer-mini-card";
  const topCategories = createCategorySummary(events);
  node.innerHTML = `
    <div class="layer-mini-title">Open hazard feed</div>
    <div class="layer-mini-meta">${events.length} active events</div>
    <div class="layer-mini-list">${topCategories.map((line) => `<div>${line}</div>`).join("")}</div>
  `;
  return node;
}

function hazardKey(hazard) {
  return `${hazard.categoryId}:${hazard.title}:${hazard.lat}:${hazard.lng}`;
}

function ensureMarker(context, state, hazard) {
  state.elements ??= new Map();
  const key = hazardKey(hazard);
  const existing = state.elements.get(key);
  if (existing) return existing;

  const element = document.createElement("div");
  element.className = "hazard-marker";
  element.innerHTML = `
    <span class="hazard-icon"></span>
    <span class="hazard-label"></span>
  `;
  element.addEventListener("mouseenter", () => {
    const current = element.__hazard;
    const style = element.__style;
    if (!current || !style) return;
    context.globe.controls().autoRotate = false;
    context.showHover(
      current.title,
      `${style.emoji} ${style.label}`,
      `Updated ${timeAgo(current.updatedAt)} · ${current.sourceCount} source${current.sourceCount === 1 ? "" : "s"}`
    );
  });
  element.addEventListener("mouseleave", () => {
    context.globe.controls().autoRotate = true;
    context.hideHover();
  });
  state.elements.set(key, element);
  return element;
}

function createMarker(context, state, hazard) {
  const style = CATEGORY_STYLE[hazard.categoryId] || {
    color: "#f43f5e",
    emoji: "⚠️",
    label: hazard.categoryTitle || "Hazard",
  };
  const element = ensureMarker(context, state, hazard);
  const icon = element.querySelector(".hazard-icon");
  const label = element.querySelector(".hazard-label");

  element.__hazard = hazard;
  element.__style = style;
  element.dataset.category = hazard.categoryId;
  element.style.setProperty("--hazard-color", style.color);
  if (icon) icon.textContent = style.emoji;
  if (label) {
    label.textContent = style.label;
    label.classList.toggle("visible", context.sharedState.labelsVisible);
  }

  return {
    ...hazard,
    getElement: () => element,
    htmlAltitude: hazard.categoryId === "wildfires" ? 0.08 : 0.075,
  };
}

export const layerDefinition = {
  id: "hazards",
  kind: "html+rings",
  pollMs: 600_000,
  ttlMs: 120_000,
  source: createSourceAdapter({
    key: "liveearth:hazards",
    staleAfterMs: 20 * 60 * 1000,
    expireAfterMs: 24 * 60 * 60 * 1000,
    async fetch({ config, fetchJson, signal }) {
      return fetchJson(`${config.getApiUrl("external-feed")}?type=hazards`, {
        retries: 1,
        signal,
        timeoutMs: 12_000,
      });
    },
    normalize(json) {
      return (json?.events || [])
        .map((event) => {
          const geometry = Array.isArray(event.geometry) ? event.geometry.at(-1) : null;
          const coords = getCoordinatesFromGeometry(geometry);
          if (!coords) return null;
          const primaryCategory = event.categories?.[0] || {};
          const updatedAt = geometry?.date ? new Date(geometry.date).getTime() : Date.now();
          return {
            categoryId: primaryCategory.id || "unknown",
            categoryTitle: primaryCategory.title || "Hazard",
            lat: coords.lat,
            lng: coords.lng,
            sourceCount: Array.isArray(event.sources) ? event.sources.length : 0,
            title: event.title || "Natural Hazard",
            updatedAt,
          };
        })
        .filter(Boolean);
    },
  }),
  async applyData({ context, payload, state }) {
    const profile = context.getRenderProfile();
    const visibleHazards = [...payload]
      .sort((left, right) => {
        if ((right.sourceCount || 0) !== (left.sourceCount || 0)) {
          return (right.sourceCount || 0) - (left.sourceCount || 0);
        }
        return (right.updatedAt || 0) - (left.updatedAt || 0);
      })
      .slice(0, profile.limits.hazards);

    context.renderRegistry.setPoints("hazards", []);
    context.renderRegistry.setHtml("hazards", visibleHazards.map((hazard) => createMarker(context, state, hazard)));
    context.renderRegistry.setRings("hazards", visibleHazards.slice(0, Math.min(18, profile.limits.hazards)).map((hazard) => {
      const style = CATEGORY_STYLE[hazard.categoryId] || { color: "#f43f5e" };
      return {
        ...hazard,
        ringColor: [style.color, "transparent"],
        ringMaxRadius: 1.6,
        ringPropagationSpeed: 1.25,
        ringRepeatPeriod: 2_200,
      };
    }));
    context.setLayerExtra("hazards", buildSummaryNode(visibleHazards));
  },
  onDisable({ context }) {
    context.renderRegistry.setHtml("hazards", []);
    context.setLayerExtra("hazards", null);
    context.hideHover();
  },
};
