import { loadAtlasData } from "../../shared/atlas/data.js";

export const layerDefinition = {
  id: "base",
  kind: "polygons",
  ttlMs: 0,
  async load({ context }) {
    if (context.atlasData) return context.atlasData;
    context.atlasData = await loadAtlasData("./data");
    return context.atlasData;
  },
  async applyData({ context, payload }) {
    context.setBaseData(payload);
    const countryOverlays = [
      context.getTerrainOverlay(),
      ...payload.overlayData.overlays.filter((overlay) => overlay.layerType === "country"),
    ];
    const currentOverlay = context.getActiveOverlay();
    const nextOverlay = countryOverlays.find((overlay) => overlay.id === currentOverlay?.id) || context.getTerrainOverlay();
    context.renderOverlayDropdown(countryOverlays, nextOverlay);
    await context.selectOverlay(nextOverlay);
  },
  onDisable({ context }) {
    context.clearBaseLayer();
  },
};
