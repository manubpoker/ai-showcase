import { loadAtlasData } from "../shared/atlas/data.js";
import { createAtlasGlobe } from "../shared/atlas/globe.js";
import {
  buildLegendGradient,
  buildScale,
  colorFor,
  elevationFor,
} from "../shared/atlas/scales.js";
import {
  capitalize,
  fmtArea,
  fmtNum,
  fmtPopulation,
} from "../shared/atlas/format.js";

const root = document.getElementById("root");

root.innerHTML = `
  <div class="status-screen">
    <div><p class="status-screen__eyebrow eyebrow">Earth Atlas</p>
    <h1>Loading…</h1>
    <p>Fetching country boundaries &amp; overlay data</p></div>
  </div>`;

let geojson;
let overlayData;
let countryDetails;

try {
  ({ countryDetails, geojson, overlayData } = await loadAtlasData("./data"));
} catch (error) {
  root.innerHTML = `
    <div class="status-screen status-screen--error">
      <div><p class="status-screen__eyebrow eyebrow">Error</p>
      <h1>Failed to load data</h1>
      <p>${error.message}</p></div>
    </div>`;
  throw error;
}

const overlays = overlayData.overlays;
const countryOverlays = overlays.filter((overlay) => overlay.layerType === "country");
let activeOverlay = overlays[0];
let selectedIso = null;

root.innerHTML = `
  <div class="app-shell">
    <div class="globe-panel">
      <div class="globe-stage" id="globe-container">
        <div class="globe-loading">Initialising globe…</div>
      </div>
      <div class="globe-hud">
        <div class="hud-card hud-card--primary" id="hud-primary">
          <h1 id="hud-title">Earth Atlas</h1>
          <p class="hud-card__description" id="hud-desc"></p>
          <div class="metric-strip" id="hud-metrics"></div>
          <div class="control-row" id="hud-controls"></div>
        </div>
        <div class="hud-card hud-card--hover" id="hud-hover" style="display:none">
          <h2 id="hover-name"></h2>
          <div class="hover-value" id="hover-value"></div>
          <p class="hover-meta" id="hover-meta"></p>
        </div>
      </div>
      <div class="legend-card" id="legend" style="display:none">
        <div class="legend-card__header">
          <span id="legend-title"></span>
          <span id="legend-label"></span>
        </div>
        <div class="legend-gradient" id="legend-gradient"></div>
        <div class="legend-card__range">
          <span id="legend-min"></span>
          <span id="legend-max"></span>
        </div>
        <p class="legend-card__note" id="legend-note"></p>
      </div>
      <div class="country-sheet" id="country-sheet" style="display:none"></div>
    </div>
    <div class="sidebar" id="sidebar">
      <div class="sidebar-header">
        <p class="eyebrow">Data overlays</p>
        <h2>Explore</h2>
      </div>
      <div class="sidebar-summary" id="sidebar-summary"></div>
      <div class="overlay-list" id="overlay-list"></div>
      <div class="source-card" id="source-card"></div>
    </div>
  </div>`;

const $globe = document.getElementById("globe-container");
const $hudTitle = document.getElementById("hud-title");
const $hudDesc = document.getElementById("hud-desc");
const $hudMet = document.getElementById("hud-metrics");
const $hudCtrl = document.getElementById("hud-controls");
const $hover = document.getElementById("hud-hover");
const $hoverNm = document.getElementById("hover-name");
const $hoverVal = document.getElementById("hover-value");
const $hoverMet = document.getElementById("hover-meta");
const $legend = document.getElementById("legend");
const $legTitle = document.getElementById("legend-title");
const $legLabel = document.getElementById("legend-label");
const $legGrad = document.getElementById("legend-gradient");
const $legMin = document.getElementById("legend-min");
const $legMax = document.getElementById("legend-max");
const $legNote = document.getElementById("legend-note");
const $sheet = document.getElementById("country-sheet");
const $sidebar = document.getElementById("sidebar-summary");
const $oList = document.getElementById("overlay-list");
const $source = document.getElementById("source-card");

function renderOverlayList() {
  $oList.innerHTML = overlays
    .map((overlay) => `
      <button class="overlay-card${overlay.id === activeOverlay.id ? " overlay-card--selected" : ""}"
              data-id="${overlay.id}">
        <span class="overlay-card__kicker">${overlay.category}</span>
        <h3>${overlay.title}</h3>
        <p>${overlay.description}</p>
        <div class="overlay-card__meta">
          <span>${overlay.coverageCount} countries</span>
          <span>${overlay.latestLabel || ""}</span>
        </div>
      </button>`)
    .join("");

  $oList.querySelectorAll(".overlay-card").forEach((button) => {
    button.addEventListener("click", () => {
      const overlay = overlays.find((candidate) => candidate.id === button.dataset.id);
      if (overlay) selectOverlay(overlay);
    });
  });
}

function updateHud(overlay) {
  $hudTitle.textContent = overlay.title;
  $hudDesc.textContent = overlay.description;
  $hudMet.innerHTML = `
    <div>
      <span class="metric-strip__label">Coverage</span>
      <strong>${overlay.coverageCount} / ${overlayData.countryCount}</strong>
    </div>
    <div>
      <span class="metric-strip__label">Period</span>
      <strong>${overlay.latestLabel || "—"}</strong>
    </div>`;
  $hudCtrl.innerHTML = `
    <span>Source: ${overlay.sourceName}</span>
    <a class="ghost-button" href="${overlay.docsUrl}" target="_blank" rel="noopener">Learn more</a>`;
}

function updateLegend(overlay) {
  if (overlay.layerType === "city") {
    $legend.style.display = "none";
    return;
  }

  $legend.style.display = "";
  $legTitle.textContent = overlay.title;
  $legLabel.textContent = overlay.unit;
  $legGrad.style.background = buildLegendGradient(overlay);
  $legMin.textContent = `${fmtNum(overlay.range.min, overlay.decimals)} ${overlay.unit}`;
  $legMax.textContent = `${fmtNum(overlay.range.max, overlay.decimals)} ${overlay.unit}`;
  $legNote.textContent = overlay.legendLabel || "";
}

function updateSource(overlay) {
  $source.innerHTML = `
    <h3>${overlay.sourceName}</h3>
    <p>${overlay.description}</p>
    <div class="source-links">
      <a href="${overlay.sourceUrl}" target="_blank" rel="noopener">Raw data</a>
      <a href="${overlay.docsUrl}" target="_blank" rel="noopener">Documentation</a>
    </div>`;
}

function updateSidebarSummary(overlay) {
  $sidebar.innerHTML = `
    <div>
      <span class="sidebar-summary__label">Min</span>
      <strong>${fmtNum(overlay.range.min, overlay.decimals)} ${overlay.unit}</strong>
    </div>
    <div>
      <span class="sidebar-summary__label">Max</span>
      <strong>${fmtNum(overlay.range.max, overlay.decimals)} ${overlay.unit}</strong>
    </div>`;
}

function detailRow(label, value) {
  return `<div class="country-sheet__detail-row">
    <span class="country-sheet__detail-label">${label}</span>
    <span class="country-sheet__detail-value">${value}</span>
  </div>`;
}

function hideCountrySheet() {
  selectedIso = null;
  $sheet.style.display = "none";
}

function showCountrySheet(iso3, countryName) {
  selectedIso = iso3;
  const details = countryDetails[iso3] || {};
  const overlayEntry = activeOverlay.layerType === "country" ? activeOverlay.data?.[iso3] : null;
  const languages = details.languages ? Object.values(details.languages).join(", ") : "—";
  const currencies = details.currencies
    ? Object.values(details.currencies)
      .map((currency) => currency.name + (currency.symbol ? ` (${currency.symbol})` : ""))
      .join(", ")
    : "—";
  const timezoneText = Array.isArray(details.timezones) && details.timezones.length
    ? (details.timezones.length <= 3
      ? details.timezones.join(", ")
      : `${details.timezones.slice(0, 2).join(", ")} +${details.timezones.length - 2} more`)
    : "—";
  const regionText = [details.continent, details.subregion].filter(Boolean).join(" · ") || "—";
  const flagHtml = details.flagUrl
    ? `<img class="country-sheet__flag" src="${details.flagUrl}" alt="" />`
    : (details.flag || "");

  $sheet.innerHTML = `
    <div class="country-sheet__header">
      <div>
        <div class="country-sheet__title-row">
          ${flagHtml}
          <h3>${countryName}</h3>
        </div>
        <p class="country-sheet__region">${regionText}</p>
      </div>
      <button class="country-sheet__close" id="sheet-close">✕</button>
    </div>

    <div class="country-sheet__details">
      <div class="country-sheet__section-title">General</div>
      ${detailRow("Capital", details.capital || "—")}
      ${detailRow("Population", fmtPopulation(details.population))}
      ${detailRow("Area", fmtArea(details.area))}
      ${detailRow("Demonym", details.demonym || "—")}

      <div class="country-sheet__section-title">Economy &amp; Society</div>
      ${detailRow("Languages", languages)}
      ${detailRow("Currency", currencies)}
      ${detailRow("Gini index", details.gini != null ? details.gini.toFixed(1) : "—")}

      <div class="country-sheet__section-title">Practical</div>
      ${detailRow("Calling code", details.callingCode || "—")}
      ${detailRow("Timezones", timezoneText)}
      ${detailRow("Driving side", details.drivingSide ? capitalize(details.drivingSide) : "—")}
      ${detailRow("UN member", details.unMember ? "Yes" : "No")}

      ${overlayEntry ? `
        <div class="country-sheet__section-title">Current overlay</div>
        ${detailRow(activeOverlay.title, `${fmtNum(overlayEntry.value, activeOverlay.decimals)} ${activeOverlay.unit}`)}
      ` : ""}
    </div>`;

  $sheet.style.display = "";
  document.getElementById("sheet-close").addEventListener("click", hideCountrySheet);
}

function selectOverlay(overlay) {
  activeOverlay = overlay;
  updateHud(overlay);
  updateLegend(overlay);
  updateSource(overlay);
  updateSidebarSummary(overlay);
  renderOverlayList();

  if (overlay.layerType === "city") {
    applyCountryLayer(null);
    applyCityLayer(overlay);
  } else {
    applyCityLayer(null);
    applyCountryLayer(overlay);
  }

  if (selectedIso) {
    const feature = geojson.features.find((entry) => entry.properties.iso3 === selectedIso);
    if (feature) showCountrySheet(selectedIso, feature.properties.name);
  }
}

const globe = createAtlasGlobe($globe, {
  backgroundImageUrl: "./textures/night-sky.png",
  bumpImageUrl: "./textures/earth-topology.png",
  globeImageUrl: "./textures/earth-dark.jpg",
});

globe.pointLabel(() => "");

const loadingEl = $globe.querySelector(".globe-loading");
if (loadingEl) loadingEl.remove();

function applyCountryLayer(overlay) {
  if (!overlay) {
    globe.polygonsData([]);
    return;
  }

  globe
    .polygonsData(geojson.features)
    .polygonAltitude((feature) => {
      const entry = overlay.data?.[feature.properties.iso3];
      return elevationFor(overlay, entry ? entry.value : null);
    })
    .polygonCapColor((feature) => {
      const entry = overlay.data?.[feature.properties.iso3];
      return colorFor(overlay, entry ? entry.value : null);
    })
    .onPolygonHover((feature) => {
      if (!feature) {
        $hover.style.display = "none";
        globe.controls().autoRotate = true;
        return;
      }

      globe.controls().autoRotate = false;
      const entry = activeOverlay.data?.[feature.properties.iso3];
      $hoverNm.textContent = feature.properties.name;
      if (entry) {
        $hoverVal.textContent = `${fmtNum(entry.value, activeOverlay.decimals)} ${activeOverlay.unit}`;
        $hoverMet.textContent = `${activeOverlay.title} · ${entry.year || activeOverlay.latestLabel || ""}`;
      } else {
        $hoverVal.textContent = "No data";
        $hoverMet.textContent = activeOverlay.title;
      }
      $hover.style.display = "";
    })
    .onPolygonClick((feature) => {
      if (!feature) return;
      showCountrySheet(feature.properties.iso3, feature.properties.name);
    });
}

function applyCityLayer(overlay) {
  if (!overlay?.points) {
    globe
      .pointsData([])
      .pointAltitude(() => 0)
      .pointRadius(() => 0);
    return;
  }

  const scale = buildScale(overlay);

  globe
    .pointsData(overlay.points)
    .pointLat((point) => point.lat)
    .pointLng((point) => point.lng)
    .pointAltitude((point) => 0.01 + scale(point.value) * 0.12)
    .pointRadius((point) => 0.12 + scale(point.value) * 0.45)
    .pointColor((point) => colorFor(overlay, point.value))
    .onPointHover((point) => {
      if (!point) {
        $hover.style.display = "none";
        globe.controls().autoRotate = true;
        return;
      }

      globe.controls().autoRotate = false;
      $hoverNm.textContent = point.name;
      $hoverVal.textContent = fmtPopulation(point.population);
      $hoverMet.textContent = `${point.countryName} · Rank #${point.rank}`;
      $hover.style.display = "";
    })
    .onPointClick((point) => {
      if (!point) return;
      showCountrySheet(point.countryCode, point.countryName);
    });
}

window.addEventListener("resize", () => {
  globe.width($globe.clientWidth).height($globe.clientHeight);
});

window.__atlas = { showCountrySheet, hideCountrySheet, selectOverlay, overlays };

renderOverlayList();
selectOverlay(activeOverlay || countryOverlays[0]);
