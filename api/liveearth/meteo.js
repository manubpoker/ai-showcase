import { WORLD_CITIES } from "../../projects/liveearth/constants.js";

const CITY_COORDS = {
  latitudes: WORLD_CITIES.map((city) => city.lat).join(","),
  longitudes: WORLD_CITIES.map((city) => city.lng).join(","),
};

const DATASETS = {
  airquality: {
    cache: "s-maxage=1800, stale-while-revalidate=1800",
    fallback: [],
    url: () => `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${CITY_COORDS.latitudes}&longitude=${CITY_COORDS.longitudes}&current=us_aqi,pm2_5,pm10`,
  },
  rainfall: {
    cache: "s-maxage=480, stale-while-revalidate=900",
    fallback: [],
    url: () => `https://api.open-meteo.com/v1/forecast?latitude=${CITY_COORDS.latitudes}&longitude=${CITY_COORDS.longitudes}&current=precipitation,rain,snowfall,cloud_cover,weather_code,wind_speed_10m,wind_direction_10m`,
  },
  weather: {
    cache: "s-maxage=1800, stale-while-revalidate=1800",
    fallback: [],
    url: () => `https://api.open-meteo.com/v1/forecast?latitude=${CITY_COORDS.latitudes}&longitude=${CITY_COORDS.longitudes}&current=temperature_2m,weather_code,wind_speed_10m,wind_direction_10m`,
  },
  windstreams: {
    cache: "s-maxage=720, stale-while-revalidate=1200",
    fallback: [],
    url: () => `https://api.open-meteo.com/v1/forecast?latitude=${CITY_COORDS.latitudes}&longitude=${CITY_COORDS.longitudes}&current=wind_speed_10m,wind_direction_10m,wind_gusts_10m,pressure_msl`,
  },
};

export default async function handler(req, res) {
  const datasetKey = String(req.query.dataset || "").trim();
  const dataset = DATASETS[datasetKey];
  if (!dataset) {
    return res.status(400).json({ error: "Unknown dataset" });
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12_000);

  try {
    const response = await fetch(dataset.url(), {
      headers: {
        Accept: "application/json",
        "User-Agent": "liveearth-showcase/1.0",
      },
      signal: controller.signal,
    });
    if (!response.ok) {
      throw new Error(`Open-Meteo returned ${response.status}`);
    }

    const payload = await response.json();
    res.setHeader("Cache-Control", dataset.cache);
    return res.status(200).json(payload);
  } catch (error) {
    res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate=300");
    return res.status(200).json(dataset.fallback);
  } finally {
    clearTimeout(timeout);
  }
}
