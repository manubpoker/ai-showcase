import { WMO_CODES, WORLD_CITIES } from "../constants.js";
import { createSourceAdapter } from "../../shared/runtime/source-adapter.js";

function buildMarker(context, weather, state) {
  state.elements ??= new Map();
  const existing = state.elements.get(weather.name);
  const tempColor = weather.temp != null ? d3.interpolateRdYlBu(1 - (weather.temp + 20) / 65) : "#94a3b8";

  const element = existing || (() => {
    const node = document.createElement("div");
    node.className = "weather-chip";
    node.addEventListener("mouseenter", () => {
      context.globe.controls().autoRotate = false;
      const current = node.__weather;
      const title = [current?.name || "Weather", current?.country].filter(Boolean).join(", ");
      const description = WMO_CODES[current?.weatherCode] || "Unknown";
      const wind = current?.windSpeed != null ? `${current.windSpeed.toFixed(0)} km/h` : "";
      const windDir = current?.windDir != null ? ` · ${current.windDir}°` : "";
      context.showHover(
        title,
        current?.temp != null ? `${current.temp.toFixed(1)}°C` : "No data",
        description + (wind ? ` · Wind ${wind}${windDir}` : "")
      );
    });
    node.addEventListener("mouseleave", () => {
      context.globe.controls().autoRotate = true;
      context.hideHover();
    });
    return node;
  })();

  element.__weather = weather;
  element.style.setProperty("--chip-color", tempColor);
  element.innerHTML = `<span class="weather-chip__pill"><span class="weather-chip__dot"></span><span class="weather-chip__temp">${weather.temp != null ? `${Math.round(weather.temp)}°` : "–"}</span></span>`;
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
