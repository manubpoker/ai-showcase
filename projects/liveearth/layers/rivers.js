import { fmtNum } from "../../shared/atlas/format.js";
import { createSourceAdapter } from "../../shared/runtime/source-adapter.js";

export const layerDefinition = {
  id: "rivers",
  kind: "points",
  pollMs: 900_000,
  ttlMs: 180_000,
  source: createSourceAdapter({
    key: "liveearth:rivers",
    staleAfterMs: 20 * 60 * 1000,
    expireAfterMs: 24 * 60 * 60 * 1000,
    async fetch({ config, fetchJson, signal }) {
      return fetchJson(`${config.getApiUrl("external-feed")}?type=rivers`, {
        retries: 1,
        signal,
        timeoutMs: 10_000,
      });
    },
    normalize(json) {
      const sites = {};
      (json.value?.timeSeries || []).forEach((series) => {
        const siteCode = series.sourceInfo.siteCode[0].value;
        if (!sites[siteCode]) {
          const geo = series.sourceInfo.geoLocation.geogLocation;
          sites[siteCode] = {
            lat: Number(geo.latitude),
            lng: Number(geo.longitude),
            name: series.sourceInfo.siteName,
          };
        }
        const parameter = series.variable.variableCode[0].value;
        const values = series.values[0].value || [];
        const latest = values.length ? Number(values[values.length - 1].value) : null;
        if (parameter === "00060") sites[siteCode].discharge = latest;
        if (parameter === "00065") sites[siteCode].gaugeHeight = latest;
      });
      return Object.values(sites).filter((site) => site.lat && site.lng);
    },
  }),
  async applyData({ context, payload }) {
    context.renderRegistry.setPoints(
      "rivers",
      payload.map((site) => ({
        ...site,
        pointAltitude: 0.07,
        pointColor: "#3b82f6",
        pointRadius: 0.1 + Math.min(Math.log10(Math.max(site.discharge || 1, 1)) / 6, 0.5) * 0.5,
        onPointHover() {
          context.globe.controls().autoRotate = false;
          const discharge = site.discharge != null ? `${fmtNum(site.discharge, 0)} cfs` : "N/A";
          const gauge = site.gaugeHeight != null ? `Gauge: ${fmtNum(site.gaugeHeight, 2)} ft` : "";
          context.showHover(site.name, discharge, gauge);
        },
        onPointLeave() {
          context.globe.controls().autoRotate = true;
          context.hideHover();
        },
      }))
    );
  },
  onDisable({ context }) {
    context.hideHover();
  },
};
