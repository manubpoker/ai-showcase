/* ════════════════════════════════════════════════════════════
   Earth Atlas – vanilla JS + globe.gl
   ════════════════════════════════════════════════════════════ */

(async function () {
  "use strict";

  const root = document.getElementById("root");

  /* ── Loading screen ──────────────────────────────────────── */
  root.innerHTML = `
    <div class="status-screen">
      <div><p class="status-screen__eyebrow eyebrow">Earth Atlas</p>
      <h1>Loading…</h1>
      <p>Fetching country boundaries &amp; overlay data</p></div>
    </div>`;

  /* ── Fetch data ──────────────────────────────────────────── */
  let geojson, overlayData, countryDetails;
  try {
    [geojson, overlayData, countryDetails] = await Promise.all([
      fetch("./data/countries.geojson").then((r) => r.json()),
      fetch("./data/overlays.json").then((r) => r.json()),
      fetch("./data/country-details.json")
        .then((r) => { if (!r.ok) throw new Error("no details"); return r.json(); })
        .catch(() => ({})),
    ]);
  } catch (err) {
    root.innerHTML = `
      <div class="status-screen status-screen--error">
        <div><p class="status-screen__eyebrow eyebrow">Error</p>
        <h1>Failed to load data</h1>
        <p>${err.message}</p></div>
      </div>`;
    return;
  }

  const overlays = overlayData.overlays;
  const countryOverlays = overlays.filter((o) => o.layerType === "country");
  const cityOverlay = overlays.find((o) => o.layerType === "city");
  let activeOverlay = overlays[0];

  /* ── Palette helpers ─────────────────────────────────────── */
  const PALETTES = {
    viridis:  d3.interpolateViridis,
    plasma:   d3.interpolatePlasma,
    inferno:  d3.interpolateInferno,
    magma:    d3.interpolateMagma,
    cividis:  d3.interpolateCividis,
    turbo:    d3.interpolateTurbo,
    ylgnbu:   d3.interpolateYlGnBu,
    bugn:     d3.interpolateBuGn,
    ylorrd:   d3.interpolateYlOrRd,
  };

  function getInterpolator(name) {
    return PALETTES[name] || d3.interpolateViridis;
  }

  function buildScale(overlay) {
    const { min, max } = overlay.range;
    let domain;
    if (overlay.scaleTransform === "log") {
      domain = [Math.max(min, 1), max];
      return d3.scaleLog().domain(domain).range([0, 1]).clamp(true);
    }
    if (overlay.scaleTransform === "sqrt") {
      domain = [min, max];
      return d3.scalePow().exponent(0.5).domain(domain).range([0, 1]).clamp(true);
    }
    return d3.scaleLinear().domain([min, max]).range([0, 1]).clamp(true);
  }

  function colorFor(overlay, value) {
    if (value == null) return "rgba(40,60,70,0.35)";
    const t = buildScale(overlay)(value);
    return getInterpolator(overlay.palette)(t);
  }

  function elevationFor(overlay, value) {
    if (value == null) return 0.005;
    return 0.005 + buildScale(overlay)(value) * 0.06;
  }

  /* ── Number formatting ───────────────────────────────────── */
  function fmtNum(n, decimals) {
    if (n == null) return "—";
    if (decimals === 0) return Math.round(n).toLocaleString();
    return n.toLocaleString(undefined, {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  }

  function fmtPopulation(n) {
    if (n == null) return "—";
    if (n >= 1e9) return (n / 1e9).toFixed(2) + "B";
    if (n >= 1e6) return (n / 1e6).toFixed(2) + "M";
    if (n >= 1e3) return (n / 1e3).toFixed(1) + "K";
    return n.toLocaleString();
  }

  function fmtArea(n) {
    if (n == null) return "—";
    return Math.round(n).toLocaleString() + " km\u00B2";
  }

  /* ── Build DOM ───────────────────────────────────────────── */
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

  /* ── References ──────────────────────────────────────────── */
  const $globe    = document.getElementById("globe-container");
  const $hudTitle = document.getElementById("hud-title");
  const $hudDesc  = document.getElementById("hud-desc");
  const $hudMet   = document.getElementById("hud-metrics");
  const $hudCtrl  = document.getElementById("hud-controls");
  const $hover    = document.getElementById("hud-hover");
  const $hoverNm  = document.getElementById("hover-name");
  const $hoverVal = document.getElementById("hover-value");
  const $hoverMet = document.getElementById("hover-meta");
  const $legend   = document.getElementById("legend");
  const $legTitle = document.getElementById("legend-title");
  const $legLabel = document.getElementById("legend-label");
  const $legGrad  = document.getElementById("legend-gradient");
  const $legMin   = document.getElementById("legend-min");
  const $legMax   = document.getElementById("legend-max");
  const $legNote  = document.getElementById("legend-note");
  const $sheet    = document.getElementById("country-sheet");
  const $sidebar  = document.getElementById("sidebar-summary");
  const $oList    = document.getElementById("overlay-list");
  const $source   = document.getElementById("source-card");

  /* ── Render sidebar overlay list ─────────────────────────── */
  function renderOverlayList() {
    $oList.innerHTML = overlays
      .map(
        (o) => `
      <button class="overlay-card${o.id === activeOverlay.id ? " overlay-card--selected" : ""}"
              data-id="${o.id}">
        <span class="overlay-card__kicker">${o.category}</span>
        <h3>${o.title}</h3>
        <p>${o.description}</p>
        <div class="overlay-card__meta">
          <span>${o.coverageCount} countries</span>
          <span>${o.latestLabel || ""}</span>
        </div>
      </button>`
      )
      .join("");

    $oList.querySelectorAll(".overlay-card").forEach((btn) => {
      btn.addEventListener("click", () => {
        const ov = overlays.find((o) => o.id === btn.dataset.id);
        if (ov) selectOverlay(ov);
      });
    });
  }

  /* ── Update HUD ──────────────────────────────────────────── */
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

  /* ── Update legend ───────────────────────────────────────── */
  function updateLegend(overlay) {
    if (overlay.layerType === "city") {
      $legend.style.display = "none";
      return;
    }
    $legend.style.display = "";
    $legTitle.textContent = overlay.title;
    $legLabel.textContent = overlay.unit;

    const interp = getInterpolator(overlay.palette);
    const stops = Array.from({ length: 12 }, (_, i) => {
      const t = i / 11;
      return `${interp(t)} ${(t * 100).toFixed(0)}%`;
    });
    $legGrad.style.background = `linear-gradient(90deg, ${stops.join(", ")})`;

    $legMin.textContent = fmtNum(overlay.range.min, overlay.decimals) + " " + overlay.unit;
    $legMax.textContent = fmtNum(overlay.range.max, overlay.decimals) + " " + overlay.unit;
    $legNote.textContent = overlay.legendLabel || "";
  }

  /* ── Update source card ──────────────────────────────────── */
  function updateSource(overlay) {
    $source.innerHTML = `
      <h3>${overlay.sourceName}</h3>
      <p>${overlay.description}</p>
      <div class="source-links">
        <a href="${overlay.sourceUrl}" target="_blank" rel="noopener">Raw data</a>
        <a href="${overlay.docsUrl}" target="_blank" rel="noopener">Documentation</a>
      </div>`;
  }

  /* ── Update sidebar summary ──────────────────────────────── */
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

  /* ── Country sheet (redesigned) ──────────────────────────── */
  let selectedIso = null;

  function showCountrySheet(iso3, countryName) {
    selectedIso = iso3;
    const details = countryDetails[iso3] || {};
    const ov = activeOverlay;
    const ovEntry = ov.layerType === "country" ? (ov.data && ov.data[iso3]) : null;

    // Languages as comma-separated string
    const langs = details.languages
      ? Object.values(details.languages).join(", ")
      : "—";

    // Currencies
    let currStr = "—";
    if (details.currencies) {
      const vals = Object.values(details.currencies);
      if (vals.length > 0) {
        currStr = vals
          .map((c) => c.name + (c.symbol ? ` (${c.symbol})` : ""))
          .join(", ");
      }
    }

    // Timezones (show max 3, summarise rest)
    let tzStr = "—";
    if (details.timezones && details.timezones.length > 0) {
      if (details.timezones.length <= 3) {
        tzStr = details.timezones.join(", ");
      } else {
        tzStr = details.timezones.slice(0, 2).join(", ") +
                ` +${details.timezones.length - 2} more`;
      }
    }

    const regionParts = [details.continent, details.subregion].filter(Boolean);
    const regionStr = regionParts.join(" \u00B7 ") || "—";

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
          <p class="country-sheet__region">${regionStr}</p>
        </div>
        <button class="country-sheet__close" id="sheet-close">\u2715</button>
      </div>

      <div class="country-sheet__details">
        <div class="country-sheet__section-title">General</div>
        ${detailRow("Capital", details.capital || "—")}
        ${detailRow("Population", fmtPopulation(details.population))}
        ${detailRow("Area", fmtArea(details.area))}
        ${detailRow("Demonym", details.demonym || "—")}

        <div class="country-sheet__section-title">Economy &amp; Society</div>
        ${detailRow("Languages", langs)}
        ${detailRow("Currency", currStr)}
        ${detailRow("Gini index", details.gini != null ? details.gini.toFixed(1) : "—")}

        <div class="country-sheet__section-title">Practical</div>
        ${detailRow("Calling code", details.callingCode || "—")}
        ${detailRow("Timezones", tzStr)}
        ${detailRow("Driving side", details.drivingSide ? capitalize(details.drivingSide) : "—")}
        ${detailRow("UN member", details.unMember ? "Yes" : "No")}

        ${ovEntry ? `
        <div class="country-sheet__section-title">Current overlay</div>
        ${detailRow(ov.title, fmtNum(ovEntry.value, ov.decimals) + " " + ov.unit)}
        ` : ""}
      </div>`;

    $sheet.style.display = "";
    document.getElementById("sheet-close").addEventListener("click", hideCountrySheet);
  }

  function detailRow(label, value) {
    return `<div class="country-sheet__detail-row">
      <span class="country-sheet__detail-label">${label}</span>
      <span class="country-sheet__detail-value">${value}</span>
    </div>`;
  }

  function capitalize(s) {
    return s ? s.charAt(0).toUpperCase() + s.slice(1) : "";
  }

  function hideCountrySheet() {
    selectedIso = null;
    $sheet.style.display = "none";
  }

  /* ── Select overlay ──────────────────────────────────────── */
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

    // Refresh country sheet if one is open
    if (selectedIso) {
      const feat = geojson.features.find(
        (f) => f.properties.iso3 === selectedIso
      );
      if (feat) showCountrySheet(selectedIso, feat.properties.name);
    }
  }

  /* ── Globe initialisation ────────────────────────────────── */
  const globe = Globe()($globe)
    .globeImageUrl("./textures/earth-dark.jpg")
    .bumpImageUrl("./textures/earth-topology.png")
    .backgroundImageUrl("./textures/night-sky.png")
    .showAtmosphere(true)
    .atmosphereColor("rgba(63,201,255,0.18)")
    .atmosphereAltitude(0.22)
    .showGraticules(true)
    .polygonStrokeColor(() => "rgba(180,230,240,0.22)")
    .polygonSideColor(() => "rgba(20,50,60,0.4)")
    .polygonLabel(() => "")
    .pointLabel(() => "")
    .width($globe.clientWidth)
    .height($globe.clientHeight);

  // Auto-rotate
  globe.controls().autoRotate = true;
  globe.controls().autoRotateSpeed = 0.4;
  globe.controls().enableDamping = true;
  globe.controls().dampingFactor = 0.15;

  // Remove loading text
  const loadingEl = $globe.querySelector(".globe-loading");
  if (loadingEl) loadingEl.remove();

  /* ── Apply country polygon layer ─────────────────────────── */
  function applyCountryLayer(overlay) {
    if (!overlay) {
      globe.polygonsData([]);
      return;
    }

    globe
      .polygonsData(geojson.features)
      .polygonAltitude((feat) => {
        const iso = feat.properties.iso3;
        const entry = overlay.data[iso];
        return elevationFor(overlay, entry ? entry.value : null);
      })
      .polygonCapColor((feat) => {
        const iso = feat.properties.iso3;
        const entry = overlay.data[iso];
        return colorFor(overlay, entry ? entry.value : null);
      })
      .onPolygonHover((feat) => {
        if (!feat) {
          $hover.style.display = "none";
          globe.controls().autoRotate = true;
          return;
        }
        globe.controls().autoRotate = false;
        const iso = feat.properties.iso3;
        const name = feat.properties.name;
        const entry = activeOverlay.data ? activeOverlay.data[iso] : null;
        $hoverNm.textContent = name;
        if (entry) {
          $hoverVal.textContent =
            fmtNum(entry.value, activeOverlay.decimals) + " " + activeOverlay.unit;
          $hoverMet.textContent =
            activeOverlay.title + " \u00B7 " + (entry.year || activeOverlay.latestLabel || "");
        } else {
          $hoverVal.textContent = "No data";
          $hoverMet.textContent = activeOverlay.title;
        }
        $hover.style.display = "";
      })
      .onPolygonClick((feat) => {
        if (!feat) return;
        showCountrySheet(feat.properties.iso3, feat.properties.name);
      });
  }

  /* ── Apply city point layer ──────────────────────────────── */
  function applyCityLayer(overlay) {
    if (!overlay || !overlay.points) {
      globe
        .pointsData([])
        .pointAltitude(() => 0)
        .pointRadius(() => 0);
      return;
    }

    const pts = overlay.points;
    const scale = buildScale(overlay);
    const interp = getInterpolator(overlay.palette);

    globe
      .pointsData(pts)
      .pointLat((d) => d.lat)
      .pointLng((d) => d.lng)
      .pointAltitude((d) => 0.01 + scale(d.value) * 0.12)
      .pointRadius((d) => 0.12 + scale(d.value) * 0.45)
      .pointColor((d) => interp(scale(d.value)))
      .onPointHover((pt) => {
        if (!pt) {
          $hover.style.display = "none";
          globe.controls().autoRotate = true;
          return;
        }
        globe.controls().autoRotate = false;
        $hoverNm.textContent = pt.name;
        $hoverVal.textContent = fmtPopulation(pt.population);
        $hoverMet.textContent = `${pt.countryName} \u00B7 Rank #${pt.rank}`;
        $hover.style.display = "";
      })
      .onPointClick((pt) => {
        if (!pt) return;
        showCountrySheet(pt.countryCode, pt.countryName);
      });
  }

  /* ── Window resize ───────────────────────────────────────── */
  window.addEventListener("resize", () => {
    globe.width($globe.clientWidth).height($globe.clientHeight);
  });

  /* ── Expose for debugging ─────────────────────────────────── */
  window.__atlas = { showCountrySheet, hideCountrySheet, selectOverlay, overlays };

  /* ── Initial render ──────────────────────────────────────── */
  renderOverlayList();
  selectOverlay(activeOverlay);
})();
