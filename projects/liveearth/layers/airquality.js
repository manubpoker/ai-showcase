import { WORLD_CITIES, aqiColor, aqiLabel } from "../constants.js";
import { createSourceAdapter } from "../../shared/runtime/source-adapter.js";

export const layerDefinition = {
  id: "airquality",
  kind: "points",
  pollMs: 1_800_000,
  ttlMs: 300_000,
  source: createSourceAdapter({
    key: "liveearth:airquality",
    staleAfterMs: 45 * 60 * 1000,
    expireAfterMs: 24 * 60 * 60 * 1000,
    async fetch({ config, fetchJson, signal }) {
      return fetchJson(`${config.getApiUrl("meteo")}?dataset=airquality`, {
        retries: 1,
        signal,
        timeoutMs: 10_000,
      });
    },
    normalize(json) {
      return WORLD_CITIES.map((city, index) => {
        const data = Array.isArray(json) ? json[index] : json;
        const current = data?.current;
        return {
          ...city,
          aqi: current?.us_aqi,
          pm10: current?.pm10,
          pm25: current?.pm2_5,
        };
      });
    },
  }),
  async applyData({ context, payload }) {
    context.renderRegistry.setPoints(
      "airquality",
      payload.map((reading) => ({
        ...reading,
        pointAltitude: 0.07,
        pointColor: aqiColor(reading.aqi),
        pointRadius: 0.25,
        onPointHover() {
          context.globe.controls().autoRotate = false;
          const aqiValue = reading.aqi != null ? `AQI ${reading.aqi}` : "AQI N/A";
          const meta = `${aqiLabel(reading.aqi)} · PM2.5: ${reading.pm25 ?? "N/A"} · PM10: ${reading.pm10 ?? "N/A"}`;
          context.showHover(`${reading.name}, ${reading.country}`, aqiValue, meta, { html: false });
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
