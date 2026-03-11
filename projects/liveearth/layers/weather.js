import { WMO_CODES, WORLD_CITIES } from "../constants.js";
import { createSourceAdapter } from "../../shared/runtime/source-adapter.js";

function buildMarker(context, weather, state) {
  state.elements ??= new Map();
  const existing = state.elements.get(weather.name);
  const tempColor = weather.temp != null ? d3.interpolateRdYlBu(1 - (weather.temp + 20) / 65) : "#94a3b8";

  if (existing) {
    existing.innerHTML = `<div style="width:24px;height:24px;border-radius:50%;background:${tempColor};margin:0 auto 3px;box-shadow:0 0 12px ${tempColor}"></div><span style="font-size:27px">${weather.temp != null ? `${Math.round(weather.temp)}°` : "?"}</span>`;
  }

  const element = existing || (() => {
    const node = document.createElement("div");
    node.style.cssText = "font-size:30px;color:white;text-align:center;cursor:pointer;text-shadow:0 2px 6px rgba(0,0,0,0.8)";
    node.addEventListener("mouseenter", () => {
      context.globe.controls().autoRotate = false;
      const description = WMO_CODES[weather.weatherCode] || "Unknown";
      const wind = weather.windSpeed != null ? `${weather.windSpeed.toFixed(0)} km/h` : "";
      const windDir = weather.windDir != null ? ` · ${weather.windDir}°` : "";
      context.showHover(
        `${weather.name}, ${weather.country}`,
        weather.temp != null ? `${weather.temp.toFixed(1)}°C` : "No data",
        description + (wind ? ` · Wind ${wind}${windDir}` : "")
      );
    });
    node.addEventListener("mouseleave", () => {
      context.globe.controls().autoRotate = true;
      context.hideHover();
    });
    return node;
  })();

  element.innerHTML = `<div style="width:24px;height:24px;border-radius:50%;background:${tempColor};margin:0 auto 3px;box-shadow:0 0 12px ${tempColor}"></div><span style="font-size:27px">${weather.temp != null ? `${Math.round(weather.temp)}°` : "?"}</span>`;
  state.elements.set(weather.name, element);

  return {
    ...weather,
    getElement: () => element,
    htmlAltitude: 0.07,
  };
}

export const layerDefinition = {
  id: "weather",
  kind: "html",
  pollMs: 1_800_000,
  ttlMs: 300_000,
  source: createSourceAdapter({
    key: "liveearth:weather",
    staleAfterMs: 45 * 60 * 1000,
    expireAfterMs: 24 * 60 * 60 * 1000,
    async fetch({ config, fetchJson, signal }) {
      return fetchJson(`${config.getApiUrl("meteo")}?dataset=weather`, {
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
          temp: current?.temperature_2m,
          weatherCode: current?.weather_code,
          windDir: current?.wind_direction_10m,
          windSpeed: current?.wind_speed_10m,
        };
      });
    },
  }),
  async applyData({ context, payload, state }) {
    context.renderRegistry.setHtml("weather", payload.map((weather) => buildMarker(context, weather, state)));
  },
  onDisable({ context }) {
    context.hideHover();
  },
};
