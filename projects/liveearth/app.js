import { ISO3_TO_2, EN_COUNTRIES } from "../shared/atlas/countries.js";
import {
  buildLegendGradient,
  prepareCountryOverlay,
} from "../shared/atlas/scales.js";
import {
  capitalize,
  escHtml,
  fmtArea,
  fmtNum,
  fmtPopulation,
  timeAgo,
} from "../shared/atlas/format.js";
import { createAtlasGlobe } from "../shared/atlas/globe.js";
import { getApiUrl, getRuntimeConfig } from "../shared/site/config.js";
import {
  ensureCountryGeometryVariant,
  prepareCountryGeometry,
} from "./country-geometry.js";
import { layerDefinition as baseLayerDefinition } from "./layers/base.js";
import { LAYER_LEGENDS } from "./constants.js";
import { createLayerRuntime } from "./layer-runtime.js";
import { createRenderRegistry } from "./render-registry.js";

const config = {
  ...getRuntimeConfig(),
  getApiUrl(pathname) {
    return getApiUrl(pathname, "liveearth");
  },
};

const layerMeta = [
  {
    id: "base",
    name: "Countries",
    icon: "\uD83C\uDF0D",
    group: "Base",
    defaultEnabled: true,
    module: { layerDefinition: baseLayerDefinition },
  },
  {
    id: "earthquakes",
    name: "Earthquakes",
    icon: "\uD83D\uDD34",
    group: "Live Data",
    loader: () => import("./layers/earthquakes.js"),
  },
  {
    id: "iss",
    name: "ISS",
    icon: "\uD83D\uDEF0\uFE0F",
    group: "Live Data",
    loader: () => import("./layers/iss.js"),
  },
  {
    id: "orbital",
    name: "Orbital Activity",
    icon: "\uD83D\uDEF0",
    group: "Live Data",
    loader: () => import("./layers/orbital.js"),
  },
  {
    id: "rockets",
    name: "Launches",
    icon: "\uD83D\uDE80",
    group: "Live Data",
    loader: () => import("./layers/rockets.js"),
  },
  {
    id: "radio",
    name: "Radio",
    icon: "\uD83D\uDCFB",
    group: "Live Data",
    loader: () => import("./layers/radio.js"),
  },
  {
    id: "flights",
    name: "Flights",
    icon: "\u2708\uFE0F",
    group: "Live Data",
    loader: () => import("./layers/flights.js"),
  },
  {
    id: "daylight",
    name: "Daylight",
    icon: "\u2600\uFE0F",
    group: "Live Data",
    loader: () => import("./layers/daylight.js"),
  },
  {
    id: "rivers",
    name: "Rivers",
    icon: "\uD83C\uDF0A",
    group: "Live Data",
    loader: () => import("./layers/rivers.js"),
  },
  {
    id: "weather",
    name: "Weather",
    icon: "\u2601\uFE0F",
    group: "Live Data",
    loader: () => import("./layers/weather.js"),
  },
  {
    id: "rainfall",
    name: "Rain Radar",
    icon: "\uD83C\uDF27\uFE0F",
    group: "Live Data",
    loader: () => import("./layers/rainfall.js"),
  },
  {
    id: "windstreams",
    name: "Wind Streams",
    icon: "\uD83D\uDCA8",
    group: "Live Data",
    loader: () => import("./layers/windstreams.js"),
  },
  {
    id: "airquality",
    name: "Air Quality",
    icon: "\uD83C\uDF2B\uFE0F",
    group: "Live Data",
    loader: () => import("./layers/airquality.js"),
  },
  {
    id: "hazards",
    name: "Hazards",
    icon: "\u26A0\uFE0F",
    group: "Live Data",
    loader: () => import("./layers/hazards.js"),
  },
  {
    id: "warzones",
    name: "Warzones",
    icon: "\u2694\uFE0F",
    group: "Live Data",
    loader: () => import("./layers/warzones.js"),
  },
  {
    id: "spaceweather",
    name: "Space Weather",
    icon: "\uD83C\uDF0C",
    group: "Live Data",
    loader: () => import("./layers/spaceweather.js"),
  },
  {
    id: "solarflares",
    name: "Solar Flares",
    icon: "\u2600\uFE0F",
    group: "Live Data",
    loader: () => import("./layers/solarflares.js"),
  },
  {
    id: "ocean",
    name: "Ocean Buoys",
    icon: "\uD83C\uDF0A",
    group: "Live Data",
    loader: () => import("./layers/ocean.js"),
  },
  {
    id: "cyclones",
    name: "Cyclones",
    icon: "\uD83C\uDF00",
    group: "Live Data",
    loader: () => import("./layers/cyclones.js"),
  },
  {
    id: "tsunamiwatch",
    name: "Tsunami Watch",
    icon: "\uD83C\uDF0A",
    group: "Live Data",
    loader: () => import("./layers/tsunamiwatch.js"),
  },
];

const layerById = new Map(layerMeta.map((entry) => [entry.id, entry]));
const stateByLayer = new Map();
const layerExtras = new Map();
const NATURAL_TERRAIN_OVERLAY = {
  data: {},
  decimals: 0,
  id: "__terrain__",
  isTerrain: true,
  layerType: "country",
  range: { max: 0, min: 0 },
  title: "Natural Terrain",
  unit: "",
};

const loadingScreen = document.getElementById("loading-screen");
const menuButton = document.getElementById("menu-btn");
const panel = document.getElementById("layer-panel");
const globeContainer = document.getElementById("globe-container");
const hoverCard = document.getElementById("hover-card");
const hoverName = document.getElementById("hover-name");
const hoverValue = document.getElementById("hover-value");
const hoverMeta = document.getElementById("hover-meta");
const legendBar = document.getElementById("legend-bar");
const legendTitle = document.getElementById("legend-title");
const legendUnit = document.getElementById("legend-unit");
const legendGradient = document.getElementById("legend-gradient");
const legendMin = document.getElementById("legend-min");
const legendMax = document.getElementById("legend-max");
const layerBadge = document.getElementById("layer-badge");
const liveKpiBar = document.getElementById("live-kpi-bar");
const emptyHint = document.getElementById("empty-hint");
const radioPlayer = document.getElementById("radio-player");
const countrySheet = document.getElementById("country-sheet");

const globe = createAtlasGlobe(globeContainer, {
  backgroundImageUrl: "./textures/night-sky.png",
  bumpImageUrl: "./textures/earth-topology.png",
  globeImageUrl: "./textures/earth-dark.jpg",
});
const renderRegistry = createRenderRegistry(globe);
const CLOUD_TEXTURE_URL = "./textures/earth-clouds.svg";
const daylightOverlay = document.createElement("div");
daylightOverlay.id = "daylight-overlay";
daylightOverlay.setAttribute("aria-hidden", "true");
const cloudOverlay = document.createElement("div");
cloudOverlay.id = "cloud-overlay";
cloudOverlay.setAttribute("aria-hidden", "true");
cloudOverlay.innerHTML = '<div class="cloud-overlay__texture"></div>';
globeContainer.append(daylightOverlay, cloudOverlay);

let globeLighting = null;
let globeDaylightShaderState = null;

const DISPLAY_TEXTURES = {
  terrain: {
    globeImageUrl: "./textures/earth-blue-marble.jpg",
    label: "Natural Terrain",
  },
  dark: {
    globeImageUrl: "./textures/earth-dark.jpg",
    label: "Night Infrared",
  },
  topology: {
    globeImageUrl: "./textures/earth-topology.png",
    label: "Topographic",
  },
};

const DISPLAY_BACKGROUNDS = {
  deep: {
    label: "Deep Space",
    url: "./textures/night-sky.png",
  },
  nebula: {
    label: "Nebula Glow",
    url: "./textures/bg-nebula.jpg",
  },
  stars: {
    label: "Starfield",
    url: "./textures/bg-stars.jpg",
  },
  aurora: {
    label: "Aurora Curtain",
    url: "./textures/bg-aurora.jpg",
  },
};

const DISPLAY_GLOWS = {
  aurora: {
    altitude: 0.26,
    color: "#67e8f9",
    label: "Aurora",
  },
  ember: {
    altitude: 0.2,
    color: "#fdba74",
    label: "Ember",
  },
  polar: {
    altitude: 0.3,
    color: "#bae6fd",
    label: "Polar Ice",
  },
};

let globeResizeFrame = 0;
let displayAnimationFrame = 0;
let fpsAnimationFrame = 0;
let liveKpiTimer = 0;
let countryFocusAnimationTimer = 0;
let lastRendererPixelRatio = null;
let globePointerDown = null;

function syncGlobeViewport() {
  cancelAnimationFrame(globeResizeFrame);
  globeResizeFrame = requestAnimationFrame(() => {
    globe.width(globeContainer.clientWidth).height(globeContainer.clientHeight);
    syncRendererPixelRatio();
    syncCloudOverlay();
    syncDaylightOverlay();
  });
}

function getRenderProfile() {
  const altitude = globe.pointOfView().altitude;
  const moving = sharedState.isInteracting || sharedState.isCameraAnimating;

  return {
    altitude,
    labelThreshold: moving ? 1.02 : 1.2,
    limits: {
      cyclones: moving ? 10 : altitude > 1.5 ? 14 : 20,
      flights: moving ? 80 : altitude > 1.6 ? 140 : altitude > 1.1 ? 220 : 320,
      flightTrails: moving ? 28 : altitude > 1.5 ? 56 : 84,
      hazards: moving ? 28 : altitude > 1.4 ? 50 : 80,
      ocean: moving ? 24 : altitude > 1.5 ? 44 : 68,
      rainfallPaths: moving ? 26 : altitude > 1.4 ? 42 : 70,
      rainfallPoints: moving ? 24 : altitude > 1.4 ? 40 : 60,
      rainfallRings: moving ? 10 : altitude > 1.4 ? 16 : 24,
      warzones: moving ? 10 : altitude > 1.5 ? 18 : 28,
      windMarkers: moving ? 20 : altitude > 1.4 ? 34 : 54,
      windPaths: moving ? 18 : altitude > 1.4 ? 28 : 48,
      windRings: moving ? 6 : altitude > 1.4 ? 10 : 14,
    },
    moving,
  };
}

function getTargetPixelRatio() {
  const deviceRatio = window.devicePixelRatio || 1;
  if (sharedState.isInteracting || sharedState.isCameraAnimating) {
    return Math.min(deviceRatio, 0.85);
  }
  return Math.min(deviceRatio, 1.2);
}

function syncRendererPixelRatio() {
  const renderer = typeof globe.renderer === "function" ? globe.renderer() : null;
  if (!renderer?.setPixelRatio) return;

  const nextRatio = getTargetPixelRatio();
  if (lastRendererPixelRatio != null && Math.abs(lastRendererPixelRatio - nextRatio) < 0.01) {
    return;
  }

  renderer.setPixelRatio(nextRatio);
  lastRendererPixelRatio = nextRatio;
}

window.addEventListener("resize", () => {
  syncGlobeViewport();
});

new ResizeObserver(() => {
  syncGlobeViewport();
}).observe(globeContainer);

const sharedState = {
  daylightEffect: null,
  displayLabCollapsed: true,
  displayMode: "terrain",
  displayOptions: {
    activityReactiveMode: false,
    atmosphereAltitude: 0.22,
    atmosphereEnabled: true,
    atmosphereGlowMode: "aurora",
    cinematicPulseMode: false,
    cloudsAltitude: 0.17,
    cloudsEnabled: false,
    geomagneticReactiveMode: false,
    hydroReactiveMode: false,
    rotateSpeed: 0.4,
    orbitalReactiveMode: false,
    seismicReactiveMode: false,
    solarFluxReactiveMode: false,
    stormFlowReactiveMode: false,
    skyMode: "deep",
  },
  activityPulse: 0,
  fps: 0,
  isCameraAnimating: false,
  isInteracting: false,
  liveMetrics: [],
  labelsVisible: false,
  radioPlayerController: null,
  radioPlayerState: { visible: false },
  radioCountryFilter: null,
  selectedCountryIso: null,
};

let atlasData = null;
let activeOverlay = null;
let currentCountryGeometry = null;
let lastToggledLayerId = "base";
let hoveredCountryIso = null;
let selectedCountry = null;
let sheetRequestToken = 0;
let suppressCountrySheetUntil = 0;
let countrySheetCloseTimer = 0;

function radioStationKey(station) {
  if (!station) return "";
  return `${station.name}:${station.url}`;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function globeFocusScale() {
  return selectedCountry && window.innerWidth > 980 ? 0.84 : 0.9;
}

function normalizeLongitude(value) {
  let next = value;
  while (next > 180) next -= 360;
  while (next < -180) next += 360;
  return next;
}

function ensureGlobeLighting() {
  if (globeLighting) return globeLighting;
  if (typeof globe.scene !== "function") return null;

  const scene = globe.scene();
  if (!scene?.children?.length) return null;

  const lights = scene.children.filter((child) => child?.isLight);
  const ambient = lights.find((light) => light.type === "AmbientLight") || null;
  const sun = lights.find((light) => light.type === "DirectionalLight" || light.type === "PointLight") || null;
  if (!ambient || !sun) return null;

  globeLighting = {
    ambient,
    defaults: {
      ambientIntensity: ambient.intensity,
      sunIntensity: sun.intensity,
      sunPosition: typeof sun.position?.clone === "function"
        ? sun.position.clone()
        : { x: sun.position?.x || 0, y: sun.position?.y || 0, z: sun.position?.z || 0 },
    },
    sun,
  };

  return globeLighting;
}

function ensureDaylightShader() {
  if (typeof globe.globeMaterial !== "function") return null;

  const material = globe.globeMaterial();
  if (!material) return null;
  if (globeDaylightShaderState?.material === material) return globeDaylightShaderState;

  const uniforms = {
    enabled: { value: 0 },
    nightFloor: { value: 0.08 },
    softness: { value: 0.18 },
    sunBoost: { value: 0.26 },
    sunDirection: { value: { x: 1, y: 0, z: 0 } },
  };
  const previousOnBeforeCompile = material.onBeforeCompile;

  material.onBeforeCompile = (shader) => {
    previousOnBeforeCompile?.call(material, shader);
    shader.uniforms.liveearthDaylightEnabled = uniforms.enabled;
    shader.uniforms.liveearthDaylightNightFloor = uniforms.nightFloor;
    shader.uniforms.liveearthDaylightSoftness = uniforms.softness;
    shader.uniforms.liveearthDaylightSunBoost = uniforms.sunBoost;
    shader.uniforms.liveearthDaylightSunDirection = uniforms.sunDirection;

    shader.vertexShader = shader.vertexShader
      .replace(
        "#define PHONG",
        `#define PHONG
varying vec3 vLiveearthWorldNormal;`,
      )
      .replace(
        "#include <beginnormal_vertex>",
        `#include <beginnormal_vertex>
vLiveearthWorldNormal = normalize(mat3(modelMatrix) * objectNormal);`,
      );

    shader.fragmentShader = shader.fragmentShader
      .replace(
        "#define PHONG",
        `#define PHONG
uniform float liveearthDaylightEnabled;
uniform float liveearthDaylightNightFloor;
uniform float liveearthDaylightSoftness;
uniform float liveearthDaylightSunBoost;
uniform vec3 liveearthDaylightSunDirection;
varying vec3 vLiveearthWorldNormal;`,
      )
      .replace(
        "#include <dithering_fragment>",
        `
if (liveearthDaylightEnabled > 0.5) {
  float sunDot = dot(normalize(vLiveearthWorldNormal), normalize(liveearthDaylightSunDirection));
  float daylightMix = smoothstep(-liveearthDaylightSoftness, liveearthDaylightSoftness, sunDot);
  float nightShade = mix(liveearthDaylightNightFloor, 1.0, daylightMix);
  float solarBoost = max(sunDot, 0.0) * liveearthDaylightSunBoost;
  gl_FragColor.rgb *= nightShade + solarBoost;
}
#include <dithering_fragment>`,
      );

    material.userData.liveearthDaylightShader = { shader, uniforms };
  };

  material.userData.liveearthDaylightUniforms = uniforms;
  material.needsUpdate = true;

  globeDaylightShaderState = { material, uniforms };
  return globeDaylightShaderState;
}

function globeVectorForLatLng(lat, lng, altitude = 1) {
  if (typeof globe.getCoords === "function") {
    const coords = globe.getCoords(lat, lng, altitude);
    if (coords && Number.isFinite(coords.x) && Number.isFinite(coords.y) && Number.isFinite(coords.z)) {
      return coords;
    }
  }

  const latRad = (lat * Math.PI) / 180;
  const lngRad = (lng * Math.PI) / 180;
  const radius = Math.max(1e-3, altitude);
  return {
    x: radius * Math.cos(latRad) * Math.sin(lngRad),
    y: radius * Math.sin(latRad),
    z: radius * Math.cos(latRad) * Math.cos(lngRad),
  };
}

function normalizeVector(vector) {
  const length = Math.hypot(vector?.x || 0, vector?.y || 0, vector?.z || 0);
  if (!length) return { x: 1, y: 0, z: 0 };
  return {
    x: (vector.x || 0) / length,
    y: (vector.y || 0) / length,
    z: (vector.z || 0) / length,
  };
}

function applyDaylightLighting(effect = null) {
  const shaderState = ensureDaylightShader();
  if (shaderState) {
    shaderState.uniforms.enabled.value = effect?.enabled && effect?.subsolar ? 1 : 0;
  }

  const lighting = ensureGlobeLighting();
  if (!lighting) return;

  if (!effect?.enabled || !effect.subsolar || typeof globe.getCoords !== "function") {
    lighting.ambient.intensity = lighting.defaults.ambientIntensity;
    lighting.sun.intensity = lighting.defaults.sunIntensity;
    lighting.sun.position.set(
      lighting.defaults.sunPosition.x,
      lighting.defaults.sunPosition.y,
      lighting.defaults.sunPosition.z,
    );
    return;
  }

  const sunVector = globeVectorForLatLng(effect.subsolar.lat, effect.subsolar.lng, 920);

  if (shaderState && sunVector) {
    Object.assign(shaderState.uniforms.sunDirection.value, normalizeVector(sunVector));
  }

  lighting.ambient.intensity = 0.72;
  lighting.sun.intensity = 2.35;

  if (sunVector) {
    lighting.sun.position.set(sunVector.x, sunVector.y, sunVector.z);
  }
}

function syncDaylightOverlay() {
  const effect = sharedState.daylightEffect;
  const baseSize = Math.min(globeContainer.clientWidth || window.innerWidth, globeContainer.clientHeight || window.innerHeight);
  const size = Math.max(220, baseSize * globeFocusScale());
  const rect = globeContainer.getBoundingClientRect();

  daylightOverlay.style.setProperty("--daylight-radius", `${size / 2}px`);

  if (!effect?.enabled || !effect.subsolar || typeof globe.getScreenCoords !== "function") {
    daylightOverlay.classList.remove("visible");
    applyDaylightLighting(null);
    return;
  }

  const sunPoint = globe.getScreenCoords(effect.subsolar.lat, effect.subsolar.lng, 0.14) || {};
  const nightPoint = globe.getScreenCoords(effect.antiSolar.lat, effect.antiSolar.lng, 0.08) || {};
  const sunX = Number.isFinite(sunPoint.x) ? sunPoint.x - rect.left : rect.width * 0.68;
  const sunY = Number.isFinite(sunPoint.y) ? sunPoint.y - rect.top : rect.height * 0.38;
  const nightX = Number.isFinite(nightPoint.x) ? nightPoint.x - rect.left : rect.width * 0.32;
  const nightY = Number.isFinite(nightPoint.y) ? nightPoint.y - rect.top : rect.height * 0.62;

  daylightOverlay.style.setProperty("--sun-x", `${sunX}px`);
  daylightOverlay.style.setProperty("--sun-y", `${sunY}px`);
  daylightOverlay.style.setProperty("--night-x", `${nightX}px`);
  daylightOverlay.style.setProperty("--night-y", `${nightY}px`);
  daylightOverlay.classList.add("visible");
  applyDaylightLighting(effect);
}

function setDaylightEffect(payload = null) {
  if (!payload?.subsolar) {
    sharedState.daylightEffect = null;
    syncDaylightOverlay();
    return;
  }

  const subsolar = {
    lat: Number(payload.subsolar.lat) || 0,
    lng: Number(payload.subsolar.lng) || 0,
  };
  const antiSolar = payload.antiSolar || {
    lat: -subsolar.lat,
    lng: normalizeLongitude(subsolar.lng + 180),
  };

  sharedState.daylightEffect = {
    antiSolar,
    enabled: true,
    observedAt: Number(payload.observedAt) || Date.now(),
    subsolar,
  };
  syncDaylightOverlay();
}

function syncCloudOverlay(altitudeOverride = null) {
  const options = sharedState.displayOptions;
  const altitude = Number.isFinite(altitudeOverride) ? altitudeOverride : Number(options.cloudsAltitude);
  const normalizedAltitude = clamp((altitude - 0.08) / 0.27, 0, 1);
  const baseSize = Math.min(globeContainer.clientWidth || window.innerWidth, globeContainer.clientHeight || window.innerHeight);
  const focusScale = globeFocusScale();
  const size = Math.max(220, baseSize * focusScale);
  const opacity = options.cloudsEnabled
    ? clamp(0.18 + (normalizedAltitude * 0.2), 0.18, 0.48)
    : 0;
  const reactiveBoost = options.cloudsEnabled
    ? clamp(
      (options.stormFlowReactiveMode ? windStrength() * 0.12 : 0)
      + (options.hydroReactiveMode ? rainStrength() * 0.1 : 0),
      0,
      0.18,
    )
    : 0;

  cloudOverlay.style.width = `${size}px`;
  cloudOverlay.style.height = `${size}px`;
  cloudOverlay.style.setProperty("--cloud-opacity", `${clamp(opacity + reactiveBoost, 0, 0.52)}`);
  cloudOverlay.style.setProperty("--cloud-scale", `${(0.94 + (normalizedAltitude * 0.22)).toFixed(3)}`);
  cloudOverlay.classList.toggle("visible", options.cloudsEnabled);
}

function mean(values) {
  if (!values.length) return null;
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function solarFluxStrength() {
  const payload = stateByLayer.get("solarflares")?.lastGoodData;
  const flux = Number(payload?.latestFlux);
  if (!Number.isFinite(flux) || flux <= 0) return 0;
  const logMin = Math.log10(1e-8);
  const logMax = Math.log10(5e-4);
  return clamp((Math.log10(flux) - logMin) / (logMax - logMin), 0, 1);
}

function geomagneticStrength() {
  const payload = stateByLayer.get("spaceweather")?.lastGoodData;
  const kp = Number(payload?.latestKp);
  if (!Number.isFinite(kp)) return 0;
  return clamp(kp / 9, 0, 1);
}

function windStrength() {
  const payload = stateByLayer.get("windstreams")?.lastGoodData;
  if (!Array.isArray(payload) || !payload.length) return 0;
  const samples = payload
    .map((station) => Math.max(Number(station?.windKmh) || 0, Number(station?.windGustKmh) || 0))
    .filter(Number.isFinite);
  if (!samples.length) return 0;
  samples.sort((left, right) => right - left);
  const topBand = samples.slice(0, Math.max(1, Math.floor(samples.length * 0.3)));
  return clamp(mean(topBand) / 110, 0, 1);
}

function rainStrength() {
  const payload = stateByLayer.get("rainfall")?.lastGoodData;
  if (!Array.isArray(payload) || !payload.length) return 0;
  const samples = payload
    .map((reading) => Number(reading?.precipitationMmPerHour) || 0)
    .filter((rate) => Number.isFinite(rate) && rate > 0)
    .sort((left, right) => right - left);
  if (!samples.length) return 0;
  const topBand = samples.slice(0, Math.max(1, Math.ceil(samples.length * 0.3)));
  const strongMean = mean(topBand) || 0;
  const severeShare = samples.filter((rate) => rate >= 4).length / samples.length;
  return clamp((clamp(strongMean / 25, 0, 1) * 0.72) + (severeShare * 0.28), 0, 1);
}

function orbitalStrength() {
  const payload = stateByLayer.get("orbital")?.lastGoodData;
  if (!Array.isArray(payload?.satellites) || !payload.satellites.length) return 0;
  const samples = payload.satellites
    .map((satellite) => Number(satellite?.velocityKmh))
    .filter((velocity) => Number.isFinite(velocity) && velocity > 0)
    .sort((left, right) => right - left);
  if (!samples.length) return 0;
  const topBand = samples.slice(0, Math.max(1, Math.ceil(samples.length * 0.4)));
  return clamp((mean(topBand) || 0) / 29_000, 0, 1);
}

function tsunamiStrength() {
  const payload = stateByLayer.get("tsunamiwatch")?.lastGoodData;
  if (!Array.isArray(payload?.events) || !payload.events.length) return 0;
  const scored = payload.events
    .map((event) => {
      const magnitude = Number(event?.magnitude);
      const observedAt = Number(event?.observedAt);
      if (!Number.isFinite(magnitude) || !Number.isFinite(observedAt)) return null;
      const magnitudeScore = clamp((magnitude - 5) / 3.5, 0, 1);
      const ageHours = Math.max(0, (Date.now() - observedAt) / (60 * 60 * 1000));
      const recencyScore = clamp(1 - (ageHours / 72), 0, 1);
      return clamp((magnitudeScore * 0.74) + (recencyScore * 0.26), 0, 1);
    })
    .filter(Number.isFinite)
    .sort((left, right) => right - left);
  if (!scored.length) return 0;
  const topBand = scored.slice(0, Math.max(1, Math.ceil(scored.length * 0.35)));
  return clamp(mean(topBand) || 0, 0, 1);
}

function toActivityScore(layerId, payload) {
  if (!payload) return null;

  if (layerId === "earthquakes" && Array.isArray(payload) && payload.length) {
    const maxMagnitude = payload.reduce((max, quake) => Math.max(max, Number(quake?.mag) || 0), 0);
    const volume = clamp(payload.length / 180, 0, 1);
    return clamp((maxMagnitude / 8 + volume) / 2, 0, 1);
  }
  if (layerId === "flights" && Array.isArray(payload.flights)) {
    return clamp(payload.flights.length / 7_500, 0, 1);
  }
  if (layerId === "orbital" && Array.isArray(payload.satellites)) {
    const avgVelocity = mean(
      payload.satellites
        .map((satellite) => Number(satellite?.velocityKmh))
        .filter((velocity) => Number.isFinite(velocity) && velocity > 0)
    ) || 0;
    return clamp((payload.satellites.length / 8) * 0.5 + (avgVelocity / 29_000) * 0.5, 0, 1);
  }
  if (layerId === "hazards" && Array.isArray(payload)) {
    return clamp(payload.length / 180, 0, 1);
  }
  if (layerId === "warzones" && Array.isArray(payload?.zones)) {
    const high = payload.zones.filter((zone) => zone.severity === "high").length;
    return clamp((payload.zones.length / 12) * 0.45 + (high / Math.max(1, payload.zones.length)) * 0.55, 0, 1);
  }
  if (layerId === "windstreams" && Array.isArray(payload) && payload.length) {
    const strongest = payload.reduce((max, station) => {
      return Math.max(max, Number(station?.windKmh) || 0, Number(station?.windGustKmh) || 0);
    }, 0);
    const severeCount = payload.filter((station) => (
      (Number(station?.windKmh) || 0) >= 60
      || (Number(station?.windGustKmh) || 0) >= 80
    )).length;
    const severeShare = severeCount / Math.max(1, payload.length);
    return clamp((clamp(strongest / 130, 0, 1) * 0.65) + (severeShare * 0.35), 0, 1);
  }
  if (layerId === "rainfall" && Array.isArray(payload) && payload.length) {
    const strongest = payload.reduce(
      (max, reading) => Math.max(max, Number(reading?.precipitationMmPerHour) || 0),
      0
    );
    const heavy = payload.filter((reading) => (Number(reading?.precipitationMmPerHour) || 0) >= 4).length;
    const heavyShare = heavy / Math.max(1, payload.length);
    return clamp((clamp(strongest / 35, 0, 1) * 0.66) + (heavyShare * 0.34), 0, 1);
  }
  if (layerId === "spaceweather" && Number.isFinite(payload.latestKp)) {
    return clamp(payload.latestKp / 9, 0, 1);
  }
  if (layerId === "solarflares" && Number.isFinite(payload.latestFlux)) {
    const logMin = Math.log10(1e-8);
    const logMax = Math.log10(5e-4);
    return clamp((Math.log10(payload.latestFlux) - logMin) / (logMax - logMin), 0, 1);
  }
  if (layerId === "ocean" && Array.isArray(payload.stations) && payload.stations.length) {
    const extremes = payload.stations.filter((station) => (
      (Number(station.waveHeightM) || 0) >= 4
      || (Number(station.windSpeedMps) || 0) >= 18
    )).length;
    return clamp(extremes / Math.max(8, payload.stations.length * 0.25), 0, 1);
  }
  if (layerId === "cyclones" && Array.isArray(payload) && payload.length) {
    const major = payload.filter((storm) => Number(storm?.windKts) >= 64).length;
    const strongest = payload.reduce((max, storm) => Math.max(max, Number(storm?.windKts) || 0), 0);
    const majorShare = major / Math.max(1, payload.length);
    return clamp((majorShare * 0.68) + clamp(strongest / 145, 0, 1) * 0.32, 0, 1);
  }
  if (layerId === "tsunamiwatch" && Array.isArray(payload?.events) && payload.events.length) {
    const strongest = payload.events.reduce((max, event) => Math.max(max, Number(event?.magnitude) || 0), 0);
    const severe = payload.events.filter((event) => Number(event?.magnitude) >= 7).length;
    const severeShare = severe / Math.max(1, payload.events.length);
    return clamp((clamp((strongest - 5) / 3.5, 0, 1) * 0.62) + (severeShare * 0.38), 0, 1);
  }
  if (layerId === "rockets" && Array.isArray(payload) && payload.length) {
    const upcoming = payload.filter((launch) => (
      Number.isFinite(Date.parse(launch?.net))
      && Date.parse(launch.net) > Date.now()
      && Date.parse(launch.net) < Date.now() + (3 * 24 * 60 * 60 * 1_000)
    )).length;
    return clamp(upcoming / 10, 0, 1);
  }

  return null;
}

function collectLiveMetrics() {
  const candidates = [];
  const scoreParts = [];
  const pushMetric = (layerId, label, value, detail = "") => {
    const layerState = stateByLayer.get(layerId);
    if (!layerState?.enabled || !layerState.lastGoodData) return;
    const observedAt = layerState.lastFetchedAt || Date.now();
    const freshness = timeAgo(observedAt);
    candidates.push({
      detail,
      freshness,
      label,
      observedAt,
      value,
    });
    const score = toActivityScore(layerId, layerState.lastGoodData);
    if (Number.isFinite(score)) scoreParts.push(score);
  };

  const quakes = stateByLayer.get("earthquakes")?.lastGoodData;
  if (Array.isArray(quakes) && quakes.length) {
    const maxMagnitude = quakes.reduce((max, quake) => Math.max(max, Number(quake?.mag) || 0), 0);
    pushMetric("earthquakes", "Quakes", fmtNum(quakes.length, 0), `M${fmtNum(maxMagnitude, 1)} max`);
  }

  const flights = stateByLayer.get("flights")?.lastGoodData;
  if (Array.isArray(flights?.flights)) {
    pushMetric("flights", "Flights", fmtNum(flights.flights.length, 0), "tracked");
  }

  const orbital = stateByLayer.get("orbital")?.lastGoodData;
  if (Array.isArray(orbital?.satellites) && orbital.satellites.length) {
    const fastest = orbital.satellites.reduce(
      (max, satellite) => Math.max(max, Number(satellite?.velocityKmh) || 0),
      0
    );
    pushMetric("orbital", "Orbital", fmtNum(orbital.satellites.length, 0), `${fmtNum(fastest, 0)} km/h max`);
  }

  const hazards = stateByLayer.get("hazards")?.lastGoodData;
  if (Array.isArray(hazards)) {
    pushMetric("hazards", "Hazards", fmtNum(hazards.length, 0), "open events");
  }

  const warzones = stateByLayer.get("warzones")?.lastGoodData;
  if (Array.isArray(warzones?.zones) && warzones.zones.length) {
    const high = warzones.zones.filter((zone) => zone.severity === "high").length;
    pushMetric("warzones", "Warzones", fmtNum(warzones.zones.length, 0), `${fmtNum(high, 0)} high alert`);
  }

  const spaceWeather = stateByLayer.get("spaceweather")?.lastGoodData;
  if (Number.isFinite(spaceWeather?.latestKp)) {
    pushMetric("spaceweather", "Geomagnetic", `Kp ${fmtNum(spaceWeather.latestKp, 1)}`);
  }

  const windStreams = stateByLayer.get("windstreams")?.lastGoodData;
  if (Array.isArray(windStreams) && windStreams.length) {
    const strongest = windStreams.reduce((max, station) => (
      Math.max(max, Number(station?.windKmh) || 0, Number(station?.windGustKmh) || 0)
    ), 0);
    const severe = windStreams.filter((station) => (
      (Number(station?.windKmh) || 0) >= 60
      || (Number(station?.windGustKmh) || 0) >= 80
    )).length;
    pushMetric("windstreams", "Jet Winds", `${fmtNum(strongest, 0)} km/h`, `${fmtNum(severe, 0)} severe corridors`);
  }

  const rainfall = stateByLayer.get("rainfall")?.lastGoodData;
  if (Array.isArray(rainfall) && rainfall.length) {
    const strongest = rainfall.reduce((max, reading) => (
      Math.max(max, Number(reading?.precipitationMmPerHour) || 0)
    ), 0);
    const heavy = rainfall.filter((reading) => (Number(reading?.precipitationMmPerHour) || 0) >= 4).length;
    pushMetric("rainfall", "Rain Radar", `${fmtNum(strongest, 1)} mm/h`, `${fmtNum(heavy, 0)} heavy cells`);
  }

  const solarFlares = stateByLayer.get("solarflares")?.lastGoodData;
  if (Number.isFinite(solarFlares?.latestFlux)) {
    pushMetric("solarflares", "Solar X-ray", solarFlares.latestClass || "Unknown", solarFlares.trend || "steady");
  }

  const ocean = stateByLayer.get("ocean")?.lastGoodData;
  if (Array.isArray(ocean?.stations)) {
    pushMetric("ocean", "Buoys", fmtNum(ocean.stations.length, 0), "reporting");
  }

  const cyclones = stateByLayer.get("cyclones")?.lastGoodData;
  if (Array.isArray(cyclones)) {
    const majorCount = cyclones.filter((storm) => Number(storm?.windKts) >= 64).length;
    pushMetric("cyclones", "Cyclones", fmtNum(cyclones.length, 0), `${fmtNum(majorCount, 0)} major`);
  }

  const tsunami = stateByLayer.get("tsunamiwatch")?.lastGoodData;
  if (Array.isArray(tsunami?.events)) {
    const severe = tsunami.events.filter((event) => Number(event?.magnitude) >= 7).length;
    const maxMagnitude = tsunami.events.reduce((max, event) => Math.max(max, Number(event?.magnitude) || 0), 0);
    pushMetric("tsunamiwatch", "Tsunami Watch", fmtNum(tsunami.events.length, 0), `M${fmtNum(maxMagnitude, 1)} max · ${fmtNum(severe, 0)} severe`);
  }

  const launches = stateByLayer.get("rockets")?.lastGoodData;
  if (Array.isArray(launches)) {
    const next24h = launches.filter((launch) => {
      const net = Date.parse(launch?.net);
      return Number.isFinite(net) && net > Date.now() && net < Date.now() + (24 * 60 * 60 * 1_000);
    }).length;
    pushMetric("rockets", "Launches", fmtNum(next24h, 0), "next 24h");
  }

  const air = stateByLayer.get("airquality")?.lastGoodData;
  if (Array.isArray(air) && air.length) {
    const avgAqi = mean(air.map((reading) => Number(reading?.aqi)).filter(Number.isFinite));
    if (Number.isFinite(avgAqi)) {
      pushMetric("airquality", "Avg AQI", fmtNum(avgAqi, 0), "major cities");
    }
  }

  const activityPulse = clamp(mean(scoreParts.filter(Number.isFinite)) ?? 0, 0, 1);
  return {
    activityPulse,
    metrics: candidates
      .sort((left, right) => right.observedAt - left.observedAt)
      .slice(0, 6),
  };
}

function refreshLiveKpiBar() {
  if (!liveKpiBar) return;

  const { metrics, activityPulse } = collectLiveMetrics();
  sharedState.liveMetrics = metrics;
  sharedState.activityPulse = activityPulse;
  const fpsPill = `
    <div class="kpi-pill kpi-pill--fps" id="fps-pill" title="Approximate rendered frames per second">
      <span class="kpi-label">FPS</span>
      <strong>${fmtNum(sharedState.fps || 0, 0)}</strong>
      <span class="kpi-meta">${sharedState.isInteracting || sharedState.isCameraAnimating ? "Rendering" : "Live"}</span>
    </div>`;

  if (!metrics.length) {
    liveKpiBar.innerHTML = `
      ${fpsPill}
      <div class="kpi-pill kpi-pill--status">
        <span class="kpi-label">Live feed</span>
        <strong>Enable layers to populate</strong>
      </div>`;
    return;
  }

  const intensity = activityPulse >= 0.7 ? "Surging"
    : activityPulse >= 0.4 ? "Elevated"
      : "Steady";

  const statusPill = `
    <div class="kpi-pill kpi-pill--status">
      <span class="kpi-label">Planet Pulse</span>
      <strong>${intensity}</strong>
      <span class="kpi-meta">${fmtNum(activityPulse * 100, 0)}%</span>
    </div>`;

  const metricPills = metrics.map((metric) => `
    <div class="kpi-pill" title="${escHtml(metric.freshness)}">
      <span class="kpi-label">${escHtml(metric.label)}</span>
      <strong>${escHtml(metric.value)}</strong>
      <span class="kpi-meta">${escHtml(metric.detail || metric.freshness)}</span>
    </div>
  `).join("");

  liveKpiBar.innerHTML = fpsPill + statusPill + metricPills;
}

function stopDisplayAnimator() {
  cancelAnimationFrame(displayAnimationFrame);
  displayAnimationFrame = 0;
}

function startFpsMonitor() {
  if (fpsAnimationFrame) return;

  let frameCount = 0;
  let elapsed = 0;
  let previousNow = performance.now();

  const tick = (now) => {
    const delta = now - previousNow;
    previousNow = now;

    if (document.visibilityState === "hidden") {
      frameCount = 0;
      elapsed = 0;
      fpsAnimationFrame = requestAnimationFrame(tick);
      return;
    }

    if (delta > 0 && delta < 1_000) {
      frameCount += 1;
      elapsed += delta;
    }

    if (elapsed >= 450) {
      setLiveFps((frameCount * 1_000) / elapsed);
      frameCount = 0;
      elapsed = 0;
    }

    fpsAnimationFrame = requestAnimationFrame(tick);
  };

  fpsAnimationFrame = requestAnimationFrame((now) => {
    previousNow = now;
    tick(now);
  });
}

function runDisplayAnimator() {
  if (displayAnimationFrame) return;

  const tick = (now) => {
    const options = sharedState.displayOptions;
    const glow = DISPLAY_GLOWS[options.atmosphereGlowMode] || DISPLAY_GLOWS.aurora;
    const baseRotate = clamp(options.rotateSpeed, 0, 2.5);
    const cinematicWave = options.cinematicPulseMode
      ? (((Math.sin(now / 1_300) + 1) / 2) * 0.26)
      : 0;
    const activityBoost = options.activityReactiveMode ? sharedState.activityPulse * 0.55 : 0;
    const solarBoost = options.solarFluxReactiveMode ? solarFluxStrength() * 0.45 : 0;
    const geomagneticBoost = options.geomagneticReactiveMode ? geomagneticStrength() * 0.38 : 0;
    const orbitalBoost = options.orbitalReactiveMode ? orbitalStrength() * 0.36 : 0;
    const stormFlowBoost = options.stormFlowReactiveMode ? windStrength() * 0.33 : 0;
    const hydroBoost = options.hydroReactiveMode ? rainStrength() * 0.34 : 0;
    const seismicBoost = options.seismicReactiveMode ? tsunamiStrength() * 0.42 : 0;
    globe.controls().autoRotateSpeed = clamp(baseRotate + cinematicWave + activityBoost + solarBoost + geomagneticBoost + orbitalBoost + stormFlowBoost + hydroBoost + seismicBoost, 0, 2.8);

    if (typeof globe.atmosphereColor === "function" && options.atmosphereEnabled) {
      const activityBlend = options.activityReactiveMode ? clamp(sharedState.activityPulse * 0.7, 0, 0.7) : 0;
      const solarBlend = options.solarFluxReactiveMode ? clamp(solarFluxStrength() * 0.6, 0, 0.6) : 0;
      const geomagneticBlend = options.geomagneticReactiveMode ? clamp(geomagneticStrength() * 0.7, 0, 0.7) : 0;
      const orbitalBlend = options.orbitalReactiveMode ? clamp(orbitalStrength() * 0.68, 0, 0.68) : 0;
      const stormBlend = options.stormFlowReactiveMode ? clamp(windStrength() * 0.7, 0, 0.7) : 0;
      const hydroBlend = options.hydroReactiveMode ? clamp(rainStrength() * 0.74, 0, 0.74) : 0;
      const seismicBlend = options.seismicReactiveMode ? clamp(tsunamiStrength() * 0.78, 0, 0.78) : 0;
      const blend = clamp(activityBlend + solarBlend + geomagneticBlend + orbitalBlend + stormBlend + hydroBlend + seismicBlend, 0, 0.9);
      const reactiveColor = options.hydroReactiveMode
        ? d3.interpolateRgb("#22d3ee", "#0ea5e9")(hydroBlend)
        : options.stormFlowReactiveMode
        ? d3.interpolateRgb("#38bdf8", "#e0f2fe")(stormBlend)
        : options.seismicReactiveMode
        ? d3.interpolateRgb("#facc15", "#ef4444")(seismicBlend)
        : options.orbitalReactiveMode
        ? d3.interpolateRgb("#67e8f9", "#a78bfa")(orbitalBlend)
        : options.geomagneticReactiveMode
        ? d3.interpolateRgb("#22d3ee", "#4ade80")(geomagneticBlend)
        : "#fb7185";
      globe.atmosphereColor(d3.interpolateRgb(glow.color, reactiveColor)(blend));
    }

    if (typeof globe.atmosphereAltitude === "function" && options.atmosphereEnabled && (options.activityReactiveMode || options.solarFluxReactiveMode || options.geomagneticReactiveMode || options.orbitalReactiveMode || options.stormFlowReactiveMode || options.hydroReactiveMode || options.seismicReactiveMode)) {
      const solarAltitude = options.solarFluxReactiveMode ? solarFluxStrength() * 0.06 : 0;
      const geomagneticAltitude = options.geomagneticReactiveMode ? geomagneticStrength() * 0.07 : 0;
      const orbitalAltitude = options.orbitalReactiveMode ? orbitalStrength() * 0.055 : 0;
      const stormAltitude = options.stormFlowReactiveMode ? windStrength() * 0.05 : 0;
      const hydroAltitude = options.hydroReactiveMode ? rainStrength() * 0.058 : 0;
      const seismicAltitude = options.seismicReactiveMode ? tsunamiStrength() * 0.065 : 0;
      const pulse = options.cinematicPulseMode ? Math.sin(now / 1_600) * 0.012 : 0;
      const nextAltitude = clamp(
        options.atmosphereAltitude + (sharedState.activityPulse * 0.09) + solarAltitude + geomagneticAltitude + orbitalAltitude + stormAltitude + hydroAltitude + seismicAltitude + pulse,
        0.06,
        0.46
      );
      globe.atmosphereAltitude(nextAltitude);
    }

    if (typeof globe.cloudsAltitude === "function" && options.cloudsEnabled && (options.stormFlowReactiveMode || options.hydroReactiveMode)) {
      const stormCloudAltitude = clamp(
        options.cloudsAltitude
        + (options.stormFlowReactiveMode ? windStrength() * 0.05 : 0)
        + (options.hydroReactiveMode ? rainStrength() * 0.045 : 0),
        0.08,
        0.35
      );
      globe.cloudsAltitude(stormCloudAltitude);
      syncCloudOverlay(stormCloudAltitude);
    } else {
      syncCloudOverlay();
    }

    displayAnimationFrame = requestAnimationFrame(tick);
  };

  displayAnimationFrame = requestAnimationFrame(tick);
}

function syncDisplayAnimatorState() {
  const options = sharedState.displayOptions;
  const shouldAnimate = options.activityReactiveMode || options.cinematicPulseMode || options.solarFluxReactiveMode || options.geomagneticReactiveMode || options.orbitalReactiveMode || options.stormFlowReactiveMode || options.hydroReactiveMode || options.seismicReactiveMode;
  if (shouldAnimate) {
    runDisplayAnimator();
    return;
  }

  stopDisplayAnimator();
  globe.controls().autoRotateSpeed = clamp(options.rotateSpeed, 0, 2.5);
  const glow = DISPLAY_GLOWS[options.atmosphereGlowMode] || DISPLAY_GLOWS.aurora;
  if (typeof globe.atmosphereColor === "function") {
    globe.atmosphereColor(glow.color);
  }
  syncCloudOverlay();
  syncDaylightOverlay();
}

function applyDisplaySettings() {
  const preset = DISPLAY_TEXTURES[sharedState.displayMode] || DISPLAY_TEXTURES.dark;
  const sky = DISPLAY_BACKGROUNDS[sharedState.displayOptions.skyMode] || DISPLAY_BACKGROUNDS.deep;
  const glow = DISPLAY_GLOWS[sharedState.displayOptions.atmosphereGlowMode] || DISPLAY_GLOWS.aurora;
  const options = sharedState.displayOptions;
  globe
    .globeImageUrl(preset.globeImageUrl)
    .backgroundImageUrl(sky.url)
    .showAtmosphere(options.atmosphereEnabled)
    .atmosphereAltitude(clamp(options.atmosphereAltitude, 0.05, 0.45));

  ensureDaylightShader();

  if (typeof globe.atmosphereColor === "function") {
    globe.atmosphereColor(glow.color);
  }
  if (typeof globe.atmosphereAltitude === "function" && options.atmosphereEnabled) {
    const glowAltitude = clamp((Number(options.atmosphereAltitude) + glow.altitude) / 2, 0.08, 0.45);
    globe.atmosphereAltitude(glowAltitude);
  }

  if (typeof globe.cloudsImageUrl === "function") {
    globe.cloudsImageUrl(
      options.cloudsEnabled ? CLOUD_TEXTURE_URL : null
    );
  }
  if (typeof globe.cloudsAltitude === "function") {
    globe.cloudsAltitude(clamp(options.cloudsAltitude, 0.08, 0.35));
  }
  syncCloudOverlay();
  syncDaylightOverlay();
  globe.controls().autoRotateSpeed = clamp(options.rotateSpeed, 0, 2.5);
  syncDisplayAnimatorState();
}

applyDisplaySettings();

const context = {
  atlasData,
  clearDaylightEffect() {
    setDaylightEffect(null);
  },
  config,
  globe,
  getRenderProfile,
  getTerrainOverlay() {
    return NATURAL_TERRAIN_OVERLAY;
  },
  hideHover,
  renderRegistry,
  runtime: null,
  setBaseData,
  clearBaseLayer,
  setDaylightEffect,
  renderOverlayDropdown,
  getActiveOverlay() {
    return activeOverlay;
  },
  selectOverlay,
  setRadioPlayerController,
  setLayerExtra,
  updateRadioPlayer,
  showHover,
  showCountrySheet,
  sharedState,
};

function detailRow(label, value) {
  return `<div class="sheet-detail-row">
    <span class="sheet-detail-label">${escHtml(label)}</span>
    <span class="sheet-detail-value">${escHtml(value)}</span>
  </div>`;
}

function buildSheetPanel({ bodyClass = "", bodyId = "", extra = "", key, title }) {
  const idAttr = bodyId ? ` id="${bodyId}"` : "";
  const bodyClasses = ["sheet-panel-body", bodyClass].filter(Boolean).join(" ");
  return `
    <section class="sheet-panel" data-panel="${escHtml(key)}">
      <div class="sheet-panel-header">
        <button class="sheet-panel-toggle" type="button" data-section-toggle="${escHtml(key)}" aria-expanded="true">
          <span>${escHtml(title)}</span>
          <span class="sheet-panel-chevron" aria-hidden="true">−</span>
        </button>
        ${extra}
      </div>
      <div class="${bodyClasses}"${idAttr}></div>
    </section>`;
}

function showHover(name, value, meta = "") {
  hoverName.textContent = name || "";
  hoverValue.textContent = value || "";
  hoverMeta.textContent = meta || "";
  hoverCard.classList.add("visible");
}

function hideHover() {
  hoverCard.classList.remove("visible");
}

function updateFpsPill() {
  const fpsPill = document.getElementById("fps-pill");
  if (!fpsPill) return;

  const fpsValue = fpsPill.querySelector("strong");
  const fpsMeta = fpsPill.querySelector(".kpi-meta");
  if (fpsValue) fpsValue.textContent = `${fmtNum(sharedState.fps || 0, 0)}`;
  if (fpsMeta) {
    fpsMeta.textContent = sharedState.isInteracting || sharedState.isCameraAnimating ? "Rendering" : "Live";
  }
}

function setLiveFps(nextFps) {
  const rounded = clamp(Math.round(nextFps || 0), 0, 240);
  if (sharedState.fps === rounded) return;
  sharedState.fps = rounded;
  updateFpsPill();
}

function setRadioPlayerController(controller) {
  sharedState.radioPlayerController = controller;
}

function updateRadioPlayer(nextState = {}) {
  const state = {
    ...sharedState.radioPlayerState,
    ...nextState,
  };
  sharedState.radioPlayerState = state;

  if (selectedCountry?.iso3 && countrySheet.classList.contains("open")) {
    renderCountryStations(selectedCountry.radioStations);
  }

  if (!state.visible || !state.station) {
    radioPlayer.classList.remove("visible");
    radioPlayer.innerHTML = "";
    return;
  }

  const bitrate = state.station.bitrate ? `${state.station.bitrate} kbps` : "Live stream";
  const meta = [state.station.country, bitrate].filter(Boolean).join(" · ");
  const playLabel = state.playing ? "Pause" : "Play";
  const muteLabel = state.muted ? "Unmute" : "Mute";
  const muteGlyph = state.muted ? "\uD83D\uDD07" : "\uD83D\uDD0A";

  radioPlayer.innerHTML = `
    <div class="radio-player-card">
      <div class="radio-player-head">
        <div>
          <div class="radio-player-kicker">Now Playing</div>
          <h3>${escHtml(state.station.name)}</h3>
          <p>${escHtml(meta)}</p>
        </div>
        <button class="radio-player-close" type="button" data-action="close" aria-label="Close radio player">\u2715</button>
      </div>
      <div class="radio-player-controls">
        <button class="radio-player-btn radio-player-btn--primary" type="button" data-action="toggle">
          ${playLabel}
        </button>
        <button class="radio-player-btn" type="button" data-action="next" ${state.canAdvance ? "" : "disabled"}>
          Next
        </button>
        <button class="radio-player-btn" type="button" data-action="mute">
          ${muteGlyph} ${muteLabel}
        </button>
      </div>
    </div>`;
  radioPlayer.classList.add("visible");
}

radioPlayer.addEventListener("click", async (event) => {
  const action = event.target.closest("[data-action]")?.dataset.action;
  if (!action) return;

  const controller = sharedState.radioPlayerController;
  if (!controller) return;

  if (action === "close") {
    await controller.close?.();
    return;
  }
  if (action === "toggle") {
    await controller.toggleCurrent?.();
    return;
  }
  if (action === "next") {
    await controller.next?.();
    return;
  }
  if (action === "mute") {
    await controller.toggleMute?.();
  }
});

countrySheet.addEventListener("click", async (event) => {
  if (event.target.closest(".sheet-close")) {
    closeCountrySheet();
    return;
  }

  const sectionToggle = event.target.closest("[data-section-toggle]");
  if (sectionToggle) {
    const panelElement = sectionToggle.closest(".sheet-panel");
    if (!panelElement) return;

    const collapsed = panelElement.classList.toggle("collapsed");
    sectionToggle.setAttribute("aria-expanded", String(!collapsed));
    const chevron = sectionToggle.querySelector(".sheet-panel-chevron");
    if (chevron) {
      chevron.textContent = collapsed ? "+" : "−";
    }
    return;
  }

  const stationButton = event.target.closest("[data-radio-index]");
  if (!stationButton) return;

  event.preventDefault();
  await playCountryStation(Number(stationButton.dataset.radioIndex));
});

document.addEventListener("pointerdown", (event) => {
  if (!countrySheet.classList.contains("open")) return;
  if (countrySheet.contains(event.target)) return;
  if (radioPlayer.contains(event.target)) return;
  suppressCountrySheetUntil = Date.now() + 260;
  closeCountrySheet();
}, { capture: true });

async function fetchNews(iso3) {
  const iso2 = ISO3_TO_2[iso3];
  if (!iso2) return [];

  try {
    const response = await fetch(`${config.getApiUrl("news")}?country=${iso2}`);
    if (!response.ok) return [];
    const payload = await response.json();
    return payload.articles || [];
  } catch {
    return [];
  }
}

async function translateTexts(texts) {
  try {
    const response = await fetch(config.getApiUrl("translate"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ texts, to: "en" }),
    });
    if (!response.ok) return null;
    const payload = await response.json();
    return payload.translations || null;
  } catch {
    return null;
  }
}

function normalizeRadioStation(station) {
  return {
    bitrate: Number.isFinite(Number(station?.bitrate)) ? Number(station.bitrate) : null,
    country: station?.country || "",
    countryCode: station?.countryCode?.toUpperCase?.() || "",
    lat: Number(station?.lat),
    lng: Number(station?.lng),
    name: station?.name || "Live radio",
    tags: station?.tags || "",
    url: station?.url || "",
  };
}

async function fetchRadioStationsByCountry(iso3, countryName) {
  const iso2 = ISO3_TO_2[iso3]?.toUpperCase() || "";
  const matchesCountry = (station) => {
    if (iso2 && station.countryCode?.toUpperCase() === iso2) return true;
    return station.country?.trim().toLowerCase() === countryName.trim().toLowerCase();
  };
  const selectStations = (stations) => stations
    .map(normalizeRadioStation)
    .filter((station) => station.url && station.name)
    .filter(matchesCountry)
    .sort((left, right) => (
      (right.bitrate || 0) - (left.bitrate || 0)
      || left.name.localeCompare(right.name)
    ));

  const cached = stateByLayer.get("radio")?.lastGoodData;
  if (Array.isArray(cached) && cached.length) {
    return selectStations(cached);
  }

  try {
    const response = await fetch(config.getApiUrl("radio"));
    if (!response.ok) return [];
    const payload = await response.json();
    const normalized = (payload.stations || []).map(normalizeRadioStation);
    const radioState = stateByLayer.get("radio");
    if (radioState) {
      radioState.lastGoodData = normalized;
      radioState.lastFetchedAt = Date.now();
    }
    return selectStations(normalized);
  } catch {
    return [];
  }
}

function setLegend(values) {
  legendTitle.textContent = values.title;
  legendUnit.textContent = values.unit;
  legendGradient.style.background = values.gradient;
  legendMin.textContent = values.min;
  legendMax.textContent = values.max;
  legendBar.classList.add("visible");
}

function updateLegendFromOverlay(overlay) {
  if (!overlay || overlay.isTerrain) {
    legendBar.classList.remove("visible");
    return;
  }

  setLegend({
    title: overlay.title,
    unit: overlay.unit,
    gradient: buildLegendGradient(overlay),
    min: `${fmtNum(overlay.range.min, overlay.decimals)} ${overlay.unit}`,
    max: `${fmtNum(overlay.range.max, overlay.decimals)} ${overlay.unit}`,
  });
}

function updateDynamicLegend() {
  let liveLegendId = null;

  if (lastToggledLayerId && lastToggledLayerId !== "base") {
    const state = stateByLayer.get(lastToggledLayerId);
    if (state?.enabled && LAYER_LEGENDS[lastToggledLayerId]) {
      liveLegendId = lastToggledLayerId;
    }
  }

  if (!liveLegendId) {
    liveLegendId = layerMeta.find((meta) => {
      if (meta.id === "base" || !LAYER_LEGENDS[meta.id]) return false;
      return stateByLayer.get(meta.id)?.enabled;
    })?.id || null;
  }

  if (liveLegendId && LAYER_LEGENDS[liveLegendId]) {
    setLegend(LAYER_LEGENDS[liveLegendId]);
    return;
  }

  if (stateByLayer.get("base")?.enabled && activeOverlay) {
    updateLegendFromOverlay(activeOverlay);
    return;
  }

  legendBar.classList.remove("visible");
}

function bumpLayerBadge() {
  layerBadge.classList.remove("bump");
  requestAnimationFrame(() => {
    layerBadge.classList.add("bump");
    setTimeout(() => layerBadge.classList.remove("bump"), 250);
  });
}

function updateLayerBadge({ bump = false } = {}) {
  const count = [...stateByLayer.values()].filter((state) => state.enabled).length;
  layerBadge.textContent = count === 1 ? "1 layer" : `${count} layers`;
  if (bump) bumpLayerBadge();
}

function updateEmptyHint() {
  const anyEnabled = [...stateByLayer.values()].some((state) => state.enabled);
  emptyHint.classList.toggle("visible", !anyEnabled);
}

function getCountryFeature(iso3) {
  return currentCountryGeometry?.featureByIso.get(iso3)
    || atlasData?.geometryVariants?.get("low")?.featureByIso.get(iso3)
    || null;
}

function buildSelectionPaths(iso3) {
  const sourcePaths = currentCountryGeometry?.borderPathsByIso.get(iso3) || [];
  return sourcePaths.map((path) => ({
    ...path,
    pathColor: "rgba(255, 236, 149, 0.96)",
    pathDashAnimateTime: 0,
    pathStroke: 1.45,
  }));
}

function syncSelectedCountryVisuals() {
  if (!selectedCountry?.iso3 || !currentCountryGeometry) {
    renderRegistry.setPaths("base-selection", []);
    return;
  }

  selectedCountry = {
    ...selectedCountry,
    feature: currentCountryGeometry.featureByIso.get(selectedCountry.iso3) || selectedCountry.feature,
  };
  renderRegistry.setPaths("base-selection", buildSelectionPaths(selectedCountry.iso3));
}

async function setCountryGeometry(variant) {
  if (!atlasData) return null;
  currentCountryGeometry = await ensureCountryGeometryVariant(atlasData, "./data", variant);
  renderRegistry.setPaths("base-borders", currentCountryGeometry.borderPaths);
  syncSelectedCountryVisuals();
  return currentCountryGeometry;
}

function refreshSelectedOverlay() {
  syncSelectedCountryVisuals();
}

function setHoveredCountry(feature) {
  hoveredCountryIso = feature?.properties?.iso3 || null;
}

function selectHoveredCountry() {
  if (!hoveredCountryIso || !currentCountryGeometry || Date.now() < suppressCountrySheetUntil) return;

  const feature = currentCountryGeometry.featureByIso.get(hoveredCountryIso);
  if (!feature) return;
  showCountrySheet(feature.properties.iso3, feature.properties.name);
}

function applyCountryFocusLayout(isOpen) {
  const desktopFocus = isOpen && window.innerWidth > 980;
  legendBar.classList.toggle("country-focus", desktopFocus);
  radioPlayer.classList.toggle("country-focus", desktopFocus);
}

function getCountryPointOfView(feature, fallbackLat = 15, fallbackLng = 0) {
  let lat = fallbackLat;
  let lng = fallbackLng;
  const desktopFocus = window.innerWidth > 980;
  let altitude = desktopFocus ? 0.86 : 1.08;

  if (feature) {
    const iso3 = feature.properties?.iso3;
    const centroid = iso3 ? currentCountryGeometry?.centroidByIso.get(iso3) : null;
    if (centroid) {
      lat = centroid.lat;
      lng = centroid.lng;
    } else {
      const fallbackCentroid = d3.geoCentroid(feature);
      if (Array.isArray(fallbackCentroid) && Number.isFinite(fallbackCentroid[0]) && Number.isFinite(fallbackCentroid[1])) {
        [lng, lat] = fallbackCentroid;
      }
    }

    const bounds = iso3 ? currentCountryGeometry?.boundsByIso.get(iso3) : null;
    if (bounds) {
      const span = Math.max(
        bounds.latSpan,
        bounds.lngSpan * (desktopFocus ? 0.74 : 1),
        desktopFocus ? 2.2 : 5.5
      );
      altitude = desktopFocus
        ? clamp(0.48 + (span / 68), 0.46, 1.08)
        : clamp(0.76 + (span / 50), 0.82, 1.65);
    } else {
      const fallbackBounds = d3.geoBounds(feature);
      if (Array.isArray(fallbackBounds) && fallbackBounds.length === 2) {
        const [[west, south], [east, north]] = fallbackBounds;
        let lngSpan = Math.abs(east - west);
        if (lngSpan > 180) lngSpan = 360 - lngSpan;
        const latSpan = Math.abs(north - south);
        const span = Math.max(latSpan, lngSpan * (desktopFocus ? 0.74 : 1), desktopFocus ? 2.2 : 5.5);
        altitude = desktopFocus
          ? clamp(0.48 + (span / 68), 0.46, 1.08)
          : clamp(0.76 + (span / 50), 0.82, 1.65);
      }
    }
  }

  return { altitude, lat, lng };
}

function focusCountryView(country, { duration = 1_650 } = {}) {
  if (!country) return;

  const target = getCountryPointOfView(country.feature, country.lat, country.lng);
  selectedCountry = {
    ...country,
    ...target,
  };

  clearTimeout(countryFocusAnimationTimer);
  sharedState.isCameraAnimating = true;
  updateFpsPill();
  syncRendererPixelRatio();
  requestAnimationFrame(() => {
    globe.pointOfView(target, duration);
  });
  countryFocusAnimationTimer = setTimeout(() => {
    sharedState.isCameraAnimating = false;
    updateFpsPill();
    syncRendererPixelRatio();
  }, Math.max(240, duration + 120));
}

function renderCountryStations(stations = null) {
  const radioSection = document.getElementById("sheet-radio");
  if (!radioSection) return;

  if (stations == null) {
    radioSection.innerHTML = '<div class="sheet-empty">Loading radio stations...</div>';
    return;
  }

  if (!stations.length) {
    radioSection.innerHTML = '<div class="sheet-empty">No radio stations available for this country right now.</div>';
    return;
  }

  const currentStationKey = radioStationKey(sharedState.radioPlayerState.station);
  const isPlaying = Boolean(sharedState.radioPlayerState.playing);

  radioSection.innerHTML = stations.map((station, index) => {
    const meta = [
      station.tags ? station.tags.split(",").map((tag) => tag.trim()).filter(Boolean).slice(0, 3).join(" · ") : "",
      station.bitrate ? `${station.bitrate} kbps` : "",
    ].filter(Boolean).join(" · ");
    const key = radioStationKey(station);
    const isCurrent = key === currentStationKey;
    const actionLabel = isCurrent && isPlaying ? "Pause" : "Play";

    return `<button class="sheet-radio-item${isCurrent ? " active" : ""}" type="button" data-radio-index="${index}">
      <span class="sheet-radio-copy">
        <span class="sheet-radio-name">${escHtml(station.name)}</span>
        <span class="sheet-radio-meta">${escHtml(meta || "Live stream")}</span>
      </span>
      <span class="sheet-radio-action">${actionLabel}</span>
    </button>`;
  }).join("");
}

function closeCountrySheet() {
  clearTimeout(countrySheetCloseTimer);
  countrySheet.classList.remove("open");
  countrySheet.classList.add("closing");
  selectedCountry = null;
  sheetRequestToken += 1;
  sharedState.radioCountryFilter = null;
  sharedState.selectedCountryIso = null;
  applyCountryFocusLayout(false);
  if (stateByLayer.get("radio")?.enabled) {
    context.runtime.redraw("radio");
  }
  globe.controls().autoRotate = true;
  refreshSelectedOverlay();
  sharedState.isCameraAnimating = true;
  updateFpsPill();
  syncRendererPixelRatio();
  requestAnimationFrame(() => {
    globe.pointOfView({ altitude: 2.25, lat: 14, lng: 0 }, 760);
  });
  clearTimeout(countryFocusAnimationTimer);
  countryFocusAnimationTimer = setTimeout(() => {
    sharedState.isCameraAnimating = false;
    updateFpsPill();
    syncRendererPixelRatio();
  }, 920);
  countrySheetCloseTimer = setTimeout(() => {
    countrySheet.classList.remove("closing");
    countrySheet.innerHTML = "";
  }, 220);
}

function setBaseData(payload) {
  atlasData = payload;
  atlasData.geometryVariants = new Map([
    ["low", prepareCountryGeometry(payload.geojson)],
  ]);
  currentCountryGeometry = atlasData.geometryVariants.get("low");
  context.atlasData = payload;
}

function clearBaseLayer() {
  activeOverlay = null;
  hoveredCountryIso = null;
  selectedCountry = null;
  currentCountryGeometry = null;
  sharedState.radioCountryFilter = null;
  sharedState.selectedCountryIso = null;
  clearTimeout(countrySheetCloseTimer);
  globe.polygonsData([]);
  renderRegistry.clearLayer("base-borders");
  renderRegistry.clearLayer("base-selection");
  hideHover();
  countrySheet.classList.remove("open");
  countrySheet.classList.remove("closing");
  countrySheet.innerHTML = "";
  applyCountryFocusLayout(false);
  setLayerExtra("base", null);
  updateDynamicLegend();
}

function selectOverlay(overlay) {
  if (!atlasData?.geojson || !overlay) return;

  activeOverlay = overlay;
  if (overlay.isTerrain) {
    return setCountryGeometry("default").then((geometry) => {
      globe
        .polygonsData(geometry.geojson.features)
        .polygonAltitude(() => 0.004)
        // Keep a barely-there cap so territory hit-testing works without visibly tinting the globe.
        .polygonCapColor(() => "rgba(255,255,255,0.0012)")
        .polygonStrokeColor(() => "rgba(0,0,0,0)")
        .polygonSideColor(() => "rgba(0,0,0,0)")
        .onPolygonHover((feature) => {
          if (!feature) {
            setHoveredCountry(null);
            hideHover();
            globe.controls().autoRotate = !selectedCountry;
            return;
          }

          setHoveredCountry(feature);
          globe.controls().autoRotate = false;
          showHover(
            feature.properties.name || "Country",
            "Natural terrain",
            "Political borders only"
          );
        })
        .onPolygonClick((feature) => {
          if (!feature) return;
          if (Date.now() < suppressCountrySheetUntil) return;
          showCountrySheet(feature.properties.iso3, feature.properties.name);
        });

      updateDynamicLegend();
    });
  }

  return setCountryGeometry("default").then((geometry) => {
    const prepared = prepareCountryOverlay(overlay);

    globe
      .polygonsData(geometry.geojson.features)
      .polygonAltitude((feature) => prepared.elevationByIso.get(feature.properties.iso3) ?? 0.005)
      .polygonCapColor((feature) => prepared.colorByIso.get(feature.properties.iso3) ?? "rgba(40,60,70,0.35)")
      .polygonStrokeColor(() => "rgba(0,0,0,0)")
      .polygonSideColor(() => "rgba(20,50,60,0.34)")
      .onPolygonHover((feature) => {
        if (!feature) {
          setHoveredCountry(null);
          hideHover();
          globe.controls().autoRotate = !selectedCountry;
          return;
        }

        setHoveredCountry(feature);
        globe.controls().autoRotate = false;
        const iso3 = feature.properties.iso3;
        const entry = prepared.valueByIso.get(iso3);
        if (!entry) {
          showHover(feature.properties.name, "No data", overlay.title);
          return;
        }

        const value = `${fmtNum(entry.value, overlay.decimals)} ${overlay.unit}`;
        const meta = `${overlay.title} \u00B7 ${entry.year || overlay.latestLabel || ""}`;
        showHover(feature.properties.name, value, meta);
      })
      .onPolygonClick((feature) => {
        if (!feature) return;
        if (Date.now() < suppressCountrySheetUntil) return;
        showCountrySheet(feature.properties.iso3, feature.properties.name);
      });

    updateDynamicLegend();
  });
}

function renderOverlayDropdown(countryOverlays, currentOverlay) {
  const stack = document.createElement("div");
  stack.className = "base-extra-stack";

  const overlayWrap = document.createElement("div");
  overlayWrap.className = "overlay-dropdown-wrap";

  const select = document.createElement("select");
  select.className = "overlay-dropdown";

  for (const overlay of countryOverlays) {
    const option = document.createElement("option");
    option.value = overlay.id;
    option.textContent = overlay.title;
    option.selected = overlay.id === currentOverlay.id;
    select.append(option);
  }

  select.addEventListener("change", (event) => {
    const nextOverlay = countryOverlays.find((overlay) => overlay.id === event.target.value);
    if (nextOverlay) {
      lastToggledLayerId = "base";
      selectOverlay(nextOverlay);
    }
  });

  overlayWrap.append(select);

  const displayLab = document.createElement("div");
  displayLab.className = "display-lab";
  displayLab.classList.toggle("collapsed", sharedState.displayLabCollapsed);
  displayLab.innerHTML = `
    <button class="display-lab-toggle" type="button" aria-expanded="${sharedState.displayLabCollapsed ? "false" : "true"}">
      <span class="display-lab-title">Display Lab</span>
      <span class="display-lab-chevron" aria-hidden="true">${sharedState.displayLabCollapsed ? "+" : "−"}</span>
    </button>
    <div class="display-lab-body">
      <label class="display-lab-row">
        <span>Texture</span>
        <select class="overlay-dropdown" data-display="texture">
          ${Object.entries(DISPLAY_TEXTURES).map(([value, preset]) => (
            `<option value="${value}" ${value === sharedState.displayMode ? "selected" : ""}>${escHtml(preset.label)}</option>`
          )).join("")}
        </select>
      </label>
      <label class="display-lab-row">
        <span>Sky</span>
        <select class="overlay-dropdown" data-display="sky">
          ${Object.entries(DISPLAY_BACKGROUNDS).map(([value, preset]) => (
            `<option value="${value}" ${value === sharedState.displayOptions.skyMode ? "selected" : ""}>${escHtml(preset.label)}</option>`
          )).join("")}
        </select>
      </label>
      <label class="display-lab-row">
        <span>Glow Tone</span>
        <select class="overlay-dropdown" data-display="glow">
          ${Object.entries(DISPLAY_GLOWS).map(([value, preset]) => (
            `<option value="${value}" ${value === sharedState.displayOptions.atmosphereGlowMode ? "selected" : ""}>${escHtml(preset.label)}</option>`
          )).join("")}
        </select>
      </label>
      <label class="display-lab-row display-lab-row--toggle">
        <span>Atmosphere</span>
        <input type="checkbox" data-display="atmosphere" ${sharedState.displayOptions.atmosphereEnabled ? "checked" : ""} />
      </label>
      <label class="display-lab-row">
        <span>Rotate</span>
        <input type="range" data-display="rotate-speed" min="0" max="2.5" step="0.1" value="${sharedState.displayOptions.rotateSpeed}" />
      </label>
      <label class="display-lab-row">
        <span>Glow</span>
        <input type="range" data-display="atmosphere-altitude" min="0.05" max="0.45" step="0.01" value="${sharedState.displayOptions.atmosphereAltitude}" />
      </label>
      <label class="display-lab-row display-lab-row--toggle">
        <span>Clouds</span>
        <input type="checkbox" data-display="clouds" ${sharedState.displayOptions.cloudsEnabled ? "checked" : ""} />
      </label>
      <label class="display-lab-row">
        <span>Cloud Alt</span>
        <input type="range" data-display="cloud-altitude" min="0.08" max="0.35" step="0.01" value="${sharedState.displayOptions.cloudsAltitude}" />
      </label>
      <label class="display-lab-row display-lab-row--toggle">
        <span>Reactive</span>
        <input type="checkbox" data-display="activity-reactive" ${sharedState.displayOptions.activityReactiveMode ? "checked" : ""} />
      </label>
      <label class="display-lab-row display-lab-row--toggle">
        <span>Cinematic</span>
        <input type="checkbox" data-display="cinematic-pulse" ${sharedState.displayOptions.cinematicPulseMode ? "checked" : ""} />
      </label>
      <label class="display-lab-row display-lab-row--toggle">
        <span>Solar Flux FX</span>
        <input type="checkbox" data-display="solar-flux-reactive" ${sharedState.displayOptions.solarFluxReactiveMode ? "checked" : ""} />
      </label>
      <label class="display-lab-row display-lab-row--toggle">
        <span>Magnetosphere FX</span>
        <input type="checkbox" data-display="geomagnetic-reactive" ${sharedState.displayOptions.geomagneticReactiveMode ? "checked" : ""} />
      </label>
      <label class="display-lab-row display-lab-row--toggle">
        <span>Orbital Drift FX</span>
        <input type="checkbox" data-display="orbital-reactive" ${sharedState.displayOptions.orbitalReactiveMode ? "checked" : ""} />
      </label>
      <label class="display-lab-row display-lab-row--toggle">
        <span>Storm Flow FX</span>
        <input type="checkbox" data-display="storm-flow-reactive" ${sharedState.displayOptions.stormFlowReactiveMode ? "checked" : ""} />
      </label>
      <label class="display-lab-row display-lab-row--toggle">
        <span>Hydro Pulse FX</span>
        <input type="checkbox" data-display="hydro-reactive" ${sharedState.displayOptions.hydroReactiveMode ? "checked" : ""} />
      </label>
      <label class="display-lab-row display-lab-row--toggle">
        <span>Seismic Shock FX</span>
        <input type="checkbox" data-display="seismic-reactive" ${sharedState.displayOptions.seismicReactiveMode ? "checked" : ""} />
      </label>
    </div>
  `;

  displayLab.querySelector(".display-lab-toggle")?.addEventListener("click", () => {
    sharedState.displayLabCollapsed = !sharedState.displayLabCollapsed;
    displayLab.classList.toggle("collapsed", sharedState.displayLabCollapsed);
    const toggle = displayLab.querySelector(".display-lab-toggle");
    const chevron = displayLab.querySelector(".display-lab-chevron");
    if (toggle) {
      toggle.setAttribute("aria-expanded", String(!sharedState.displayLabCollapsed));
    }
    if (chevron) {
      chevron.textContent = sharedState.displayLabCollapsed ? "+" : "−";
    }
  });

  displayLab.addEventListener("input", (event) => {
    const target = event.target;
    const mode = target?.dataset?.display;
    if (!mode) return;

    if (mode === "texture") {
      sharedState.displayMode = target.value in DISPLAY_TEXTURES ? target.value : "dark";
    } else if (mode === "sky") {
      sharedState.displayOptions.skyMode = target.value in DISPLAY_BACKGROUNDS ? target.value : "deep";
    } else if (mode === "glow") {
      sharedState.displayOptions.atmosphereGlowMode = target.value in DISPLAY_GLOWS ? target.value : "aurora";
    } else if (mode === "atmosphere") {
      sharedState.displayOptions.atmosphereEnabled = Boolean(target.checked);
    } else if (mode === "rotate-speed") {
      sharedState.displayOptions.rotateSpeed = Number(target.value) || 0;
    } else if (mode === "atmosphere-altitude") {
      sharedState.displayOptions.atmosphereAltitude = Number(target.value) || 0.22;
    } else if (mode === "clouds") {
      sharedState.displayOptions.cloudsEnabled = Boolean(target.checked);
    } else if (mode === "cloud-altitude") {
      sharedState.displayOptions.cloudsAltitude = Number(target.value) || 0.17;
    } else if (mode === "activity-reactive") {
      sharedState.displayOptions.activityReactiveMode = Boolean(target.checked);
    } else if (mode === "cinematic-pulse") {
      sharedState.displayOptions.cinematicPulseMode = Boolean(target.checked);
    } else if (mode === "solar-flux-reactive") {
      sharedState.displayOptions.solarFluxReactiveMode = Boolean(target.checked);
    } else if (mode === "geomagnetic-reactive") {
      sharedState.displayOptions.geomagneticReactiveMode = Boolean(target.checked);
    } else if (mode === "orbital-reactive") {
      sharedState.displayOptions.orbitalReactiveMode = Boolean(target.checked);
    } else if (mode === "storm-flow-reactive") {
      sharedState.displayOptions.stormFlowReactiveMode = Boolean(target.checked);
    } else if (mode === "hydro-reactive") {
      sharedState.displayOptions.hydroReactiveMode = Boolean(target.checked);
    } else if (mode === "seismic-reactive") {
      sharedState.displayOptions.seismicReactiveMode = Boolean(target.checked);
    }

    applyDisplaySettings();
  });

  stack.append(overlayWrap, displayLab);
  setLayerExtra("base", stack);
}

function setLayerExtra(layerId, node) {
  layerExtras.set(layerId, node || null);
  const host = document.getElementById(`extra-${layerId}`);
  if (!host) return;

  host.innerHTML = "";
  if (node) {
    host.append(node);
    host.classList.add("visible");
  } else {
    host.classList.remove("visible");
  }
}

function updateLayerRow(layerId, state) {
  stateByLayer.set(layerId, state);

  const row = panel.querySelector(`[data-layer-id="${layerId}"]`);
  const checkbox = panel.querySelector(`input[data-layer-id="${layerId}"]`);
  const status = document.getElementById(`status-${layerId}`);
  if (!row || !checkbox || !status) return;

  checkbox.checked = state.enabled;
  row.classList.toggle("layer-error", state.status === "error");

  const statusText = {
    degraded: "Using last good data",
    error: state.error ? "Source unavailable" : "Error",
    idle: "",
    loading: "Loading...",
    ready: "",
    stale: "Refreshing cached data",
  }[state.status] || "";

  status.textContent = statusText;
  status.classList.toggle("error-msg", state.status === "error");
  row.title = state.error ? `${layerById.get(layerId)?.name}: ${state.error}` : `Toggle ${layerById.get(layerId)?.name}`;

  updateLayerBadge();
  updateEmptyHint();
  updateDynamicLegend();
  refreshLiveKpiBar();
}

function renderPanel() {
  const groups = new Map();
  for (const layer of layerMeta) {
    if (!groups.has(layer.group)) groups.set(layer.group, []);
    groups.get(layer.group).push(layer);
  }

  let html = `
    <div class="panel-header">
      <h1><span>\uD83C\uDF10</span> Live Earth</h1>
    </div>`;

  for (const [group, layers] of groups.entries()) {
    html += `<div class="panel-section"><div class="group-label">${escHtml(group)}</div></div>`;
    for (const layer of layers) {
      const state = stateByLayer.get(layer.id) || { enabled: Boolean(layer.defaultEnabled), status: "idle" };
      html += `
        <div class="layer-row" data-layer-id="${layer.id}">
          <span class="layer-icon">${layer.icon}</span>
          <div class="layer-info">
            <div class="layer-name">${escHtml(layer.name)}</div>
            <div class="layer-status" id="status-${layer.id}"></div>
          </div>
          <label class="toggle-switch">
            <input type="checkbox" data-layer-id="${layer.id}" ${state.enabled ? "checked" : ""} aria-label="Toggle ${escHtml(layer.name)}" />
            <span class="slider"></span>
          </label>
        </div>
        <div class="layer-extra" id="extra-${layer.id}"></div>`;
    }
  }

  panel.innerHTML = html;

  for (const [layerId, node] of layerExtras.entries()) {
    if (node) setLayerExtra(layerId, node);
  }

  panel.querySelectorAll('input[type="checkbox"]').forEach((input) => {
    input.addEventListener("change", async (event) => {
      const layerId = event.target.dataset.layerId;
      const nextEnabled = event.target.checked;
      lastToggledLayerId = nextEnabled ? layerId : lastToggledLayerId;

      if (nextEnabled) await context.runtime.enable(layerId);
      else await context.runtime.disable(layerId);

      updateLayerBadge({ bump: true });
      updateEmptyHint();
      updateDynamicLegend();
    });
  });

  for (const layer of layerMeta) {
    const state = stateByLayer.get(layer.id);
    if (state) updateLayerRow(layer.id, state);
  }
}

function buildSheetMarkup(countryName, details) {
  const regionParts = [details.continent, details.subregion].filter(Boolean);
  return `
    <div class="sheet-header">
      <div>
        <div class="sheet-title-row">
          ${details.flagUrl ? `<img src="${details.flagUrl}" alt="" class="sheet-flag" />` : ""}
          <div>
            <h2>${escHtml(countryName)}</h2>
            <div class="sheet-region">${escHtml(regionParts.join(" \u00B7 ") || "\u2014")}</div>
          </div>
        </div>
      </div>
      <button class="sheet-close" type="button" aria-label="Close">\u2715</button>
    </div>
    <div class="sheet-body" id="sheet-body"></div>`;
}

async function playCountryStation(index) {
  if (!selectedCountry?.radioStations?.length) return;

  const station = selectedCountry.radioStations[index];
  if (!station) return;

  const currentKey = radioStationKey(sharedState.radioPlayerState.station);
  const targetKey = radioStationKey(station);
  if (targetKey && targetKey === currentKey && sharedState.radioPlayerState.station) {
    await sharedState.radioPlayerController?.toggleCurrent?.();
    return;
  }

  if (selectedCountry.iso2) {
    sharedState.radioCountryFilter = selectedCountry.iso2;
  }

  lastToggledLayerId = "radio";
  if (!stateByLayer.get("radio")?.enabled) {
    await context.runtime.enable("radio");
  } else {
    await context.runtime.redraw("radio");
  }

  await sharedState.radioPlayerController?.playStation?.(station, selectedCountry.radioStations);
  renderCountryStations(selectedCountry.radioStations);
}

function showCountrySheet(iso3, countryName) {
  if (!atlasData) return;

  const feature = getCountryFeature(iso3);
  const requestToken = ++sheetRequestToken;
  const iso2 = ISO3_TO_2[iso3] || null;
  const target = getCountryPointOfView(feature);
  selectedCountry = {
    ...target,
    feature,
    iso2,
    iso3,
    name: countryName,
    radioStations: null,
  };
  sharedState.selectedCountryIso = iso3;
  sharedState.radioCountryFilter = iso2;
  globe.controls().autoRotate = false;
  clearTimeout(countrySheetCloseTimer);
  countrySheet.classList.remove("closing");
  applyCountryFocusLayout(true);
  focusCountryView(selectedCountry);
  refreshSelectedOverlay();

  const details = atlasData.countryDetails?.[iso3] || {};
  countrySheet.innerHTML = buildSheetMarkup(countryName, details);
  countrySheet.classList.add("open");

  const radioState = stateByLayer.get("radio");
  if (radioState?.enabled) {
    if (iso2) {
      context.runtime.redraw("radio");
    }
  }

  const sheetBody = document.getElementById("sheet-body");
  const languages = details.languages ? Object.values(details.languages).join(", ") : "\u2014";
  const currencies = details.currencies
    ? Object.values(details.currencies)
      .map((currency) => currency.name + (currency.symbol ? ` (${currency.symbol})` : ""))
      .join(", ")
    : "";
  const timezoneText = Array.isArray(details.timezones) && details.timezones.length
    ? (details.timezones.length <= 3
      ? details.timezones.join(", ")
      : `${details.timezones.slice(0, 2).join(", ")} +${details.timezones.length - 2} more`)
    : "\u2014";

  let overlaySection = "";
  const activeEntry = activeOverlay?.data?.[iso3];
  if (activeEntry && activeOverlay) {
    overlaySection = `
      <section class="sheet-current-overlay">
        <div class="sheet-section-title">Current overlay</div>
        ${detailRow(activeOverlay.title, `${fmtNum(activeEntry.value, activeOverlay.decimals)} ${activeOverlay.unit}`)}
      </section>`;
  }

  const needsTranslate = iso2 && !EN_COUNTRIES.has(iso2.toUpperCase());
  const newsSection = buildSheetPanel({
    bodyClass: `sheet-feed${iso2 ? " sheet-feed--loading" : ""}`,
    bodyId: "sheet-news",
    extra: needsTranslate ? '<button id="news-lang-toggle" class="news-lang-toggle" type="button" title="Translate to English">EN</button>' : "",
    key: "news",
    title: "Top Headlines",
  });
  const radioSection = buildSheetPanel({
    bodyClass: "sheet-radio-list",
    bodyId: "sheet-radio",
    key: "radio",
    title: "Radio stations",
  });

  sheetBody.innerHTML = `
    <div class="sheet-grid">
      <div class="sheet-column">
        <div class="sheet-section-title">General</div>
        ${detailRow("Capital", details.capital || "\u2014")}
        ${detailRow("Population", fmtPopulation(details.population))}
        ${detailRow("Area", fmtArea(details.area))}
        ${detailRow("Demonym", details.demonym || "\u2014")}

        <div class="sheet-section-title">Economy &amp; society</div>
        ${detailRow("Languages", languages)}
        ${detailRow("Currency", currencies || "\u2014")}
        ${detailRow("Gini index", details.gini != null ? details.gini.toFixed(1) : "\u2014")}

        <div class="sheet-section-title">Practical</div>
        ${detailRow("Calling code", details.callingCode || "\u2014")}
        ${detailRow("Timezones", timezoneText)}
        ${detailRow("Driving side", details.drivingSide ? capitalize(details.drivingSide) : "\u2014")}
        ${detailRow("UN member", details.unMember ? "Yes" : "No")}
        ${overlaySection}
        ${radioSection}
      </div>
      <div class="sheet-column sheet-column--live">
        ${newsSection}
      </div>
    </div>`;

  renderCountryStations(null);
  if (!iso2) {
    const newsEl = document.getElementById("sheet-news");
    if (newsEl) {
      newsEl.innerHTML = '<div class="sheet-empty">No headlines available for this country.</div>';
      newsEl.classList.remove("sheet-feed--loading");
    }
  }

  window.setTimeout(() => {
    if (requestToken !== sheetRequestToken || selectedCountry?.iso3 !== iso3) return;

    fetchRadioStationsByCountry(iso3, countryName).then((stations) => {
      if (requestToken !== sheetRequestToken || selectedCountry?.iso3 !== iso3) return;
      selectedCountry.radioStations = stations;
      renderCountryStations(stations);
    });

    if (!iso2) return;

    fetchNews(iso3).then(async (articles) => {
      if (requestToken !== sheetRequestToken) return;

      const newsEl = document.getElementById("sheet-news");
      if (!newsEl) return;

      if (!articles.length) {
        newsEl.innerHTML = '<div class="sheet-empty">No headlines available right now.</div>';
        newsEl.classList.remove("sheet-feed--loading");
        return;
      }

      const originalTitles = articles.map((article) => article.title);
      let translatedTitles = null;
      let showingEnglish = false;

      const renderArticles = (titles) => {
        newsEl.innerHTML = articles.map((article, index) => {
          const source = article.source ? escHtml(article.source) : "";
          const published = article.publishedAt ? timeAgo(new Date(article.publishedAt).getTime()) : "";
          return `<a href="${escHtml(article.url)}" target="_blank" rel="noopener" class="news-item">
            <div class="news-title">${escHtml(titles[index])}</div>
            <div class="news-meta">${source}${published ? ` \u00B7 ${published}` : ""}</div>
          </a>`;
        }).join("");
        newsEl.classList.remove("sheet-feed--loading");
      };

      renderArticles(originalTitles);

      const toggle = document.getElementById("news-lang-toggle");
      if (!toggle) return;

      toggle.addEventListener("click", async () => {
        if (showingEnglish) {
          showingEnglish = false;
          toggle.classList.remove("active");
          renderArticles(originalTitles);
          return;
        }

        if (!translatedTitles) {
          toggle.classList.add("loading");
          toggle.textContent = "...";
          translatedTitles = await translateTexts(originalTitles);
          toggle.classList.remove("loading");
          toggle.textContent = "EN";
        }

        if (!translatedTitles) return;
        showingEnglish = true;
        toggle.classList.add("active");
        renderArticles(translatedTitles);
      });
    });
  }, 460);
}

function updatePanelState() {
  if (window.innerWidth <= 768) {
    panel.classList.add("collapsed");
    panel.classList.remove("open");
  } else {
    panel.classList.remove("collapsed");
    panel.classList.remove("open");
  }

  applyCountryFocusLayout(Boolean(selectedCountry));
  if (selectedCountry) {
    focusCountryView(selectedCountry, { duration: 900 });
  }
}

function updateLabelVisibility() {
  const shouldShowLabels = globe.pointOfView().altitude < getRenderProfile().labelThreshold;
  if (shouldShowLabels === sharedState.labelsVisible) return;

  sharedState.labelsVisible = shouldShowLabels;
  document.querySelectorAll(".radio-label, .rocket-label, .flight-label, .hazard-label, .buoy-label, .cyclone-label, .warzone-label").forEach((label) => {
    label.classList.toggle("visible", shouldShowLabels);
  });
}

globe.controls().addEventListener("change", () => {
  updateLabelVisibility();
  syncDaylightOverlay();
});
globe.controls().addEventListener("start", () => {
  sharedState.isInteracting = true;
  updateFpsPill();
  syncRendererPixelRatio();
});
globe.controls().addEventListener("end", () => {
  sharedState.isInteracting = false;
  updateFpsPill();
  syncRendererPixelRatio();
  updateLabelVisibility();
});

globeContainer.addEventListener("pointerdown", (event) => {
  if (!(event.target instanceof HTMLCanvasElement)) {
    globePointerDown = null;
    return;
  }

  globePointerDown = {
    x: event.clientX,
    y: event.clientY,
  };
});

menuButton.addEventListener("click", () => {
  panel.classList.toggle("open");
  panel.classList.toggle("collapsed");
});

globeContainer.addEventListener("click", (event) => {
  if (window.innerWidth <= 768 && panel.classList.contains("open")) {
    panel.classList.remove("open");
    panel.classList.add("collapsed");
  }

  if (!(event.target instanceof HTMLCanvasElement)) return;
  if (!globePointerDown) return;

  const moved = Math.hypot(event.clientX - globePointerDown.x, event.clientY - globePointerDown.y);
  globePointerDown = null;

  if (moved > 8 || sharedState.isInteracting || sharedState.isCameraAnimating) return;
  selectHoveredCountry();
});

updatePanelState();
window.addEventListener("resize", updatePanelState);

context.runtime = createLayerRuntime({
  layers: layerMeta,
  context,
  onStatusChange(layerId, state) {
    updateLayerRow(layerId, state);
    refreshLiveKpiBar();
  },
});

for (const layer of layerMeta) {
  stateByLayer.set(layer.id, context.runtime.getState(layer.id));
}

renderPanel();
updateLayerBadge();
updateEmptyHint();
refreshLiveKpiBar();
startFpsMonitor();

clearInterval(liveKpiTimer);
liveKpiTimer = setInterval(() => {
  refreshLiveKpiBar();
}, 20_000);

globalThis.__liveearthTest = {
  getActiveOverlay() {
    return activeOverlay;
  },
  getCountryGeometryStats() {
    return currentCountryGeometry
      ? {
        borderPathCount: currentCountryGeometry.borderPaths.length,
        featureCount: currentCountryGeometry.geojson.features.length,
      }
      : null;
  },
  closeCountrySheet,
  getLayerState(layerId) {
    return context.runtime.getState(layerId);
  },
  globe,
  getPointOfView() {
    return globe.pointOfView();
  },
  getRenderProfile,
  getSelectedCountry() {
    return selectedCountry ? { ...selectedCountry } : null;
  },
  async radioAction(action) {
    return sharedState.radioPlayerController?.[action]?.();
  },
  getSharedState() {
    return { ...sharedState };
  },
  getFps() {
    return sharedState.fps;
  },
  runtime: context.runtime,
  selectOverlay,
  showCountrySheet,
};

try {
  await context.runtime.initDefaults();
  updateDynamicLegend();
  updateLabelVisibility();
  loadingScreen.classList.add("hidden");
  setTimeout(() => loadingScreen.remove(), 600);
} catch (error) {
  loadingScreen.innerHTML = `
    <div>
      <div class="loading-spinner">\u26A0\uFE0F</div>
      <h1>Failed to load Live Earth</h1>
      <p>${escHtml(error.message || String(error))}</p>
    </div>`;
}
