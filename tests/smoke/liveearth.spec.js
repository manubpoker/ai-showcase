import { test, expect } from "@playwright/test";

test.setTimeout(180_000);

async function setLayerEnabled(page, layerId, enabled) {
  const checkbox = page.locator(`input[data-layer-id="${layerId}"]`);
  const isChecked = await checkbox.isChecked();
  if (isChecked === enabled) return;
  await page.evaluate(async ({ layerId, enabled }) => {
    const runtime = globalThis.__liveearthTest?.runtime;
    if (!runtime) {
      const node = document.querySelector(`input[data-layer-id="${layerId}"]`);
      if (!node) return;
      node.checked = enabled;
      node.dispatchEvent(new Event("change", { bubbles: true }));
      return;
    }
    if (enabled) await runtime.enable(layerId);
    else await runtime.disable(layerId);
  }, { enabled, layerId });
}

async function expectAnyVisibleMarker(page, selector) {
  await expect(page.locator(selector).first()).toBeAttached({ timeout: 15_000 });
}

async function expectMarkerPinned(page, selector, iconSelector, tolerance = 26) {
  await expect.poll(async () => (
    page.locator(selector).evaluateAll((nodes, { iconSelector, tolerance }) => {
      const visibleNode = nodes.find((node) => {
        const style = window.getComputedStyle(node);
        if (style.display === "none" || style.visibility === "hidden") return false;
        const icon = node.querySelector(iconSelector);
        if (!icon) return false;
        const rect = icon.getBoundingClientRect();
        return rect.width > 0 && rect.height > 0;
      });

      if (!visibleNode) return false;

      const lat = Number(visibleNode.dataset.markerLat);
      const lng = Number(visibleNode.dataset.markerLng);
      const altitude = Number(visibleNode.dataset.markerAltitude);
      const icon = visibleNode.querySelector(iconSelector);
      const coords = window.__liveearthTest?.globe?.getScreenCoords?.(lat, lng, altitude);
      if (!coords || !Number.isFinite(coords.x) || !Number.isFinite(coords.y) || !icon) return false;

      const rect = icon.getBoundingClientRect();
      const centerX = rect.left + (rect.width / 2);
      const centerY = rect.top + (rect.height / 2);
      const delta = Math.hypot(centerX - coords.x, centerY - coords.y);
      return delta <= tolerance;
    }, { iconSelector, tolerance })
  )).toBe(true);
}

async function mockLiveEarthRoutes(page, counters) {
  await page.route("https://www.googletagmanager.com/gtag/js**", async (route) => {
    await route.fulfill({
      body: "window.dataLayer = window.dataLayer || [];",
      contentType: "application/javascript",
      status: 200,
    });
  });

  await page.route("https://region1.google-analytics.com/**", async (route) => {
    await route.fulfill({ body: "", status: 204 });
  });

  await page.route("**earthquake.usgs.gov/**", async (route) => {
    counters.earthquakes += 1;
    await route.fulfill({
      contentType: "application/json",
      body: JSON.stringify({
        features: [
          {
            geometry: { coordinates: [2.35, 48.85, 12] },
            properties: { mag: 4.2, place: "Paris Basin", time: Date.now() - 60_000 },
          },
          {
            geometry: { coordinates: [139.69, 35.68, 54] },
            properties: { mag: 5.1, place: "Tokyo Bay", time: Date.now() - 300_000 },
          },
        ],
      }),
      status: 200,
    });
  });

  await page.route("**api.wheretheiss.at/v1/satellites/25544", async (route) => {
    counters.iss += 1;
    await route.fulfill({
      contentType: "application/json",
      body: JSON.stringify({
        altitude: 417,
        latitude: 48.85,
        longitude: 2.35,
        velocity: 27600,
        visibility: "daylight",
      }),
      status: 200,
    });
  });

  await page.route("**waterservices.usgs.gov/**", async (route) => {
    counters.rivers += 1;
    await route.fulfill({
      contentType: "application/json",
      body: JSON.stringify({
        value: {
          timeSeries: [
            {
              sourceInfo: {
                geoLocation: { geogLocation: { latitude: 39.74, longitude: -104.99 } },
                siteCode: [{ value: "06766000" }],
                siteName: "South Platte River",
              },
              variable: { variableCode: [{ value: "00060" }] },
              values: [{ value: [{ value: "2200" }] }],
            },
            {
              sourceInfo: {
                geoLocation: { geogLocation: { latitude: 39.74, longitude: -104.99 } },
                siteCode: [{ value: "06766000" }],
                siteName: "South Platte River",
              },
              variable: { variableCode: [{ value: "00065" }] },
              values: [{ value: [{ value: "6.8" }] }],
            },
          ],
        },
      }),
      status: 200,
    });
  });

  await page.route("**api.open-meteo.com/v1/forecast**", async (route) => {
    const url = route.request().url();
    if (url.includes("wind_gusts_10m")) {
      counters.windstreams += 1;
    } else {
      counters.weather += 1;
    }
    await route.fulfill({
      contentType: "application/json",
      body: JSON.stringify({
        current: {
          cloud_cover: 87,
          precipitation: 2.8,
          pressure_msl: 998,
          rain: 2.3,
          snowfall: 0,
          temperature_2m: 18,
          weather_code: 1,
          wind_direction_10m: 45,
          wind_gusts_10m: 128,
          wind_speed_10m: 12,
          time: new Date().toISOString(),
        },
      }),
      status: 200,
    });
  });

  await page.route("**air-quality-api.open-meteo.com/**", async (route) => {
    counters.airquality += 1;
    await route.fulfill({
      contentType: "application/json",
      body: JSON.stringify({
        current: {
          pm10: 18,
          pm2_5: 9,
          us_aqi: 42,
        },
      }),
      status: 200,
    });
  });

  await page.route("**eonet.gsfc.nasa.gov/api/v3/events**", async (route) => {
    counters.hazards += 1;
    await route.fulfill({
      contentType: "application/json",
      body: JSON.stringify({
        events: [
          {
            title: "California Wildfire",
            categories: [{ id: "wildfires", title: "Wildfires" }],
            geometry: [{ date: new Date().toISOString(), type: "Point", coordinates: [-121.5, 38.6] }],
            sources: [{ id: "1" }],
          },
        ],
      }),
      status: 200,
    });
  });

  await page.route("**/api/liveearth/meteo**", async (route) => {
    const url = new URL(route.request().url());
    const dataset = url.searchParams.get("dataset");

    if (dataset === "windstreams") counters.windstreams += 1;
    if (dataset === "weather") counters.weather += 1;
    if (dataset === "airquality") counters.airquality += 1;
    if (dataset === "rainfall") counters.rainfall += 1;

    if (dataset === "airquality") {
      await route.fulfill({
        contentType: "application/json",
        body: JSON.stringify({
          current: {
            pm10: 18,
            pm2_5: 9,
            us_aqi: 42,
          },
        }),
        status: 200,
      });
      return;
    }

    await route.fulfill({
      contentType: "application/json",
      body: JSON.stringify({
        current: {
          cloud_cover: 87,
          precipitation: 2.8,
          pressure_msl: 998,
          rain: 2.3,
          snowfall: 0,
          temperature_2m: 18,
          time: new Date().toISOString(),
          weather_code: 1,
          wind_direction_10m: 45,
          wind_gusts_10m: 128,
          wind_speed_10m: 12,
        },
      }),
      status: 200,
    });
  });

  await page.route("**/api/liveearth/external-feed**", async (route) => {
    const url = new URL(route.request().url());
    const type = url.searchParams.get("type");

    if (type === "iss") {
      counters.iss += 1;
      await route.fulfill({
        contentType: "application/json",
        body: JSON.stringify({
          altitude: 417,
          latitude: 48.85,
          longitude: 2.35,
          velocity: 27600,
          visibility: "daylight",
        }),
        status: 200,
      });
      return;
    }

    if (type === "rivers") {
      counters.rivers += 1;
      await route.fulfill({
        contentType: "application/json",
        body: JSON.stringify({
          value: {
            timeSeries: [
              {
                sourceInfo: {
                  geoLocation: { geogLocation: { latitude: 39.74, longitude: -104.99 } },
                  siteCode: [{ value: "06766000" }],
                  siteName: "South Platte River",
                },
                variable: { variableCode: [{ value: "00060" }] },
                values: [{ value: [{ value: "2200" }] }],
              },
              {
                sourceInfo: {
                  geoLocation: { geogLocation: { latitude: 39.74, longitude: -104.99 } },
                  siteCode: [{ value: "06766000" }],
                  siteName: "South Platte River",
                },
                variable: { variableCode: [{ value: "00065" }] },
                values: [{ value: [{ value: "6.8" }] }],
              },
            ],
          },
        }),
        status: 200,
      });
      return;
    }

    if (type === "hazards") {
      counters.hazards += 1;
      await route.fulfill({
        contentType: "application/json",
        body: JSON.stringify({
          events: [
            {
              title: "California Wildfire",
              categories: [{ id: "wildfires", title: "Wildfires" }],
              geometry: [{ date: new Date().toISOString(), type: "Point", coordinates: [-121.5, 38.6] }],
              sources: [{ id: "1" }],
            },
          ],
        }),
        status: 200,
      });
      return;
    }

    if (type === "spaceweather") {
      counters.spaceweather += 1;
      await route.fulfill({
        contentType: "application/json",
        body: JSON.stringify([
          { kp_index: 3.7, time_tag: new Date(Date.now() - 60_000).toISOString() },
          { kp_index: 4.1, time_tag: new Date().toISOString() },
        ]),
        status: 200,
      });
      return;
    }

    await route.fulfill({ body: "{}", contentType: "application/json", status: 200 });
  });

  await page.route("**/api/liveearth/orbital**", async (route) => {
    counters.orbital += 1;
    await route.fulfill({
      contentType: "application/json",
      body: JSON.stringify({
        counts: { crewed: 1, science: 1, total: 2, weather: 0 },
        fetchedAt: Date.now(),
        maxVelocityKmh: 27600,
        satellites: [
          {
            altitudeKm: 417,
            horizonDegrees: 20,
            id: 25544,
            lat: 48.85,
            lng: 2.35,
            name: "ISS",
            observedAt: Date.now(),
            type: "Crewed",
            velocityKmh: 27600,
            visibility: "daylight",
          },
          {
            altitudeKm: 540,
            horizonDegrees: 23,
            id: 20580,
            lat: 35.68,
            lng: 139.69,
            name: "Hubble",
            observedAt: Date.now(),
            type: "Science",
            velocityKmh: 27400,
            visibility: "eclipsed",
          },
        ],
      }),
      status: 200,
    });
  });

  await page.route(/\/api\/liveearth\/radio(?:\?|$)/, async (route) => {
    counters.radio += 1;
    await route.fulfill({
      contentType: "application/json",
      body: JSON.stringify({
        stations: [
          {
            bitrate: 128,
            country: "France",
            countryCode: "FR",
            lat: 48.85,
            lng: 2.35,
            name: "Paris FM",
            tags: "news,pop",
            url: "https://example.com/stream.mp3",
          },
          {
            bitrate: 96,
            country: "France",
            countryCode: "FR",
            lat: 45.76,
            lng: 4.84,
            name: "Lyon Jazz",
            tags: "jazz,chill",
            url: "https://example.com/lyon.mp3",
          },
        ],
      }),
      status: 200,
    });
  });

  await page.route("**/api/liveearth/launches**", async (route) => {
    counters.rockets += 1;
    await route.fulfill({
      contentType: "application/json",
      body: JSON.stringify({
        launches: [
          {
            lat: 28.56,
            lng: -80.58,
            location: "Cape Canaveral",
            missionDesc: "Demo mission",
            missionName: "DemoSat",
            name: "Falcon 9 | DemoSat",
            net: new Date(Date.now() + 3_600_000).toISOString(),
            orbitAbbrev: "LEO",
            orbitName: "Low Earth Orbit",
            padName: "SLC-40",
            provider: "SpaceX",
            rocketFamily: "Falcon",
            rocketName: "Falcon 9",
            status: "Go",
          },
        ],
      }),
      status: 200,
    });
  });

  await page.route(/\/api\/liveearth\/solar-flares(?:\?|$)/, async (route) => {
    counters.solarflares += 1;
    const now = Date.now();
    await route.fulfill({
      contentType: "application/json",
      body: JSON.stringify({
        fetchedAt: now,
        latestClass: "C3.2",
        latestFlux: 3.2e-6,
        latestObservedAt: now,
        peakClass24h: "M1.1",
        peakFlux24h: 1.1e-5,
        peakObservedAt24h: now - 2 * 60 * 60 * 1000,
        samples: Array.from({ length: 18 }, (_, index) => ({
          flux: 1e-6 + (index * 1.5e-7),
          observedAt: now - ((17 - index) * 5 * 60 * 1000),
        })),
        trend: "rising",
      }),
      status: 200,
    });
  });

  await page.route("**/api/liveearth/ocean**", async (route) => {
    counters.ocean += 1;
    await route.fulfill({
      contentType: "application/json",
      body: JSON.stringify({
        fetchedAt: Date.now(),
        stations: [
          {
            lat: 36.9,
            lng: -122.2,
            name: "Monterey Bay Buoy",
            observedAt: Date.now(),
            seaTempC: 16.8,
            stationId: "MB01",
            waveHeightM: 3.2,
            windSpeedMps: 14.5,
          },
        ],
      }),
      status: 200,
    });
  });

  await page.route("**/api/liveearth/tsunami**", async (route) => {
    counters.tsunamiwatch += 1;
    await route.fulfill({
      contentType: "application/json",
      body: JSON.stringify({
        events: [
          {
            depthKm: 18,
            id: "quake-tsunami-1",
            lat: -15.2,
            lng: -173.1,
            magnitude: 7.6,
            observedAt: Date.now() - 20 * 60 * 1000,
            place: "South Pacific Ocean",
            risk: "Severe",
            sourceUrl: "https://example.com/quake",
            tsunamiFlag: true,
          },
        ],
        fetchedAt: Date.now(),
        source: "USGS",
      }),
      status: 200,
    });
  });

  await page.route("**/api/liveearth/cyclones**", async (route) => {
    counters.cyclones += 1;
    await route.fulfill({
      contentType: "application/json",
      body: JSON.stringify({
        storms: [
          {
            category: "Category 3",
            id: "storm-1",
            lat: 18.4,
            lng: -63.1,
            movementDir: "NW",
            movementKts: 12,
            name: "Helios",
            observedAt: Date.now(),
            pressureMb: 961,
            track: [[18.4, -63.1], [19.2, -64.4], [20.1, -65.9]],
            windKts: 102,
          },
        ],
      }),
      status: 200,
    });
  });

  await page.route("**/api/liveearth/warzones**", async (route) => {
    counters.warzones += 1;
    await route.fulfill({
      contentType: "application/json",
      body: JSON.stringify({
        fetchedAt: Date.now(),
        zones: [
          {
            articleCount: 6,
            headline: "Frontline pressure intensifies overnight",
            id: "ukraine",
            lat: 48.58,
            lng: 37.87,
            name: "Ukraine Front",
            region: "Donbas",
            severity: "high",
            source: "Google News",
            updatedAt: Date.now() - 60_000,
            url: "https://example.com/ukraine",
          },
        ],
      }),
      status: 200,
    });
  });

  await page.route("**/api/liveearth/flights**", async (route) => {
    counters.flights += 1;
    await route.fulfill({
      contentType: "application/json",
      body: JSON.stringify({
        fetchedAt: Date.now(),
        flights: [
          {
            baroAltitude: 9900,
            callsign: "AFR123",
            geoAltitude: 10150,
            icao24: "abc123",
            lat: 48.85,
            lng: 2.35,
            originCountry: "France",
            track: 65,
            velocity: 235,
            verticalRate: 2.1,
          },
          {
            baroAltitude: 11200,
            callsign: "BAW450",
            geoAltitude: 11350,
            icao24: "def456",
            lat: 51.47,
            lng: -0.45,
            originCountry: "United Kingdom",
            track: 110,
            velocity: 245,
            verticalRate: -1.3,
          },
        ],
        sourceTime: Date.now(),
      }),
      status: 200,
    });
  });

  await page.route("**/api/liveearth/news**", async (route) => {
    counters.news += 1;
    await route.fulfill({
      contentType: "application/json",
      body: JSON.stringify({
        articles: [
          {
            title: "Bonjour Paris",
            url: "https://example.com/article",
            source: "Example News",
            publishedAt: new Date(Date.now() - 3_600_000).toISOString(),
          },
        ],
      }),
      status: 200,
    });
  });

  await page.route(/\/api\/liveearth\/translate(?:\?|$)/, async (route) => {
    counters.translate += 1;
    await route.fulfill({
      contentType: "application/json",
      body: JSON.stringify({ translations: ["Hello Paris"] }),
      status: 200,
    });
  });
}

test("liveearth loads base atlas, opens country sheet, and toggles cached layers", async ({ page }) => {
  const counters = {
    airquality: 0,
    cyclones: 0,
    earthquakes: 0,
    flights: 0,
    hazards: 0,
    iss: 0,
    news: 0,
    ocean: 0,
    orbital: 0,
    rainfall: 0,
    radio: 0,
    rivers: 0,
    rockets: 0,
    solarflares: 0,
    spaceweather: 0,
    translate: 0,
    tsunamiwatch: 0,
    warzones: 0,
    weather: 0,
    windstreams: 0,
  };
  const errors = [];

  page.on("console", (message) => {
    if (message.type() === "error") {
      errors.push(message.text());
    }
  });
  page.on("pageerror", (error) => {
    errors.push(error.message);
  });

  await mockLiveEarthRoutes(page, counters);
  await page.addInitScript(() => {
    class FakeAudio {
      constructor() {
        this._listeners = new Map();
        this.paused = true;
        this.muted = false;
        this.volume = 0.95;
        this.currentSrc = "";
        this.src = "";
      }
      addEventListener(type, handler) {
        if (!this._listeners.has(type)) this._listeners.set(type, []);
        this._listeners.get(type).push(handler);
      }
      emit(type) {
        for (const handler of this._listeners.get(type) || []) handler();
      }
      load() {
        this.currentSrc = this.src;
      }
      async play() {
        this.paused = false;
        this.currentSrc = this.src;
        this.emit("play");
      }
      pause() {
        this.paused = true;
        this.emit("pause");
      }
      removeAttribute(name) {
        if (name === "src") {
          this.src = "";
          this.currentSrc = "";
        }
      }
    }
    Object.defineProperty(window, "Audio", {
      configurable: true,
      value: FakeAudio,
      writable: true,
    });
  });

  await page.goto("/projects/liveearth/");
  await page.waitForFunction(() => globalThis.__liveearthTest?.runtime);
  await expect(page.locator(".overlay-dropdown-wrap .overlay-dropdown")).toBeVisible();
  await expect(page.locator(".display-lab")).toHaveClass(/collapsed/);
  await expect(page.locator(".display-lab-body")).not.toBeVisible();
  await expect.poll(() => page.evaluate(() => globalThis.__liveearthTest.getActiveOverlay()?.id)).toBe("__terrain__");
  await expect(page.locator("#legend-bar")).not.toHaveClass(/visible/);
  await expect(page.locator("#live-kpi-bar")).toContainText("FPS");
  await expect.poll(() => page.evaluate(() => globalThis.__liveearthTest.getFps?.() ?? 0)).toBeGreaterThan(0);

  expect(counters.earthquakes).toBe(0);
  expect(counters.iss).toBe(0);
  expect(counters.orbital).toBe(0);
  expect(counters.radio).toBe(0);
  expect(counters.rockets).toBe(0);
  expect(counters.rivers).toBe(0);
  expect(counters.weather).toBe(0);
  expect(counters.rainfall).toBe(0);
  expect(counters.flights).toBe(0);
  expect(counters.windstreams).toBe(0);
  expect(counters.airquality).toBe(0);
  expect(counters.spaceweather).toBe(0);
  expect(counters.solarflares).toBe(0);
  expect(counters.tsunamiwatch).toBe(0);

  await page.locator(".display-lab-toggle").click();
  await expect(page.locator(".display-lab")).not.toHaveClass(/collapsed/);
  await expect(page.locator(".display-lab-body")).toBeVisible();
  await page.locator('input[data-display="clouds"]').check({ force: true });
  await expect(page.locator("#cloud-overlay")).toHaveClass(/visible/);

  await page.selectOption(".overlay-dropdown-wrap .overlay-dropdown", { label: "GDP per capita (PPP)" });
  await expect(page.locator("#legend-title")).toHaveText("GDP per capita (PPP)");
  await setLayerEnabled(page, "daylight", true);
  await expect(page.locator("#daylight-overlay")).toHaveClass(/visible/);
  await expect.poll(() => page.evaluate(() => {
    const uniforms = globalThis.__liveearthTest?.globe?.globeMaterial?.()?.userData?.liveearthDaylightUniforms;
    return uniforms ? {
      enabled: uniforms.enabled.value,
      nightFloor: uniforms.nightFloor.value,
      sunDirectionLength: Number(Math.hypot(
        uniforms.sunDirection.value.x,
        uniforms.sunDirection.value.y,
        uniforms.sunDirection.value.z,
      ).toFixed(3)),
    } : null;
  })).toEqual({
    enabled: 1,
    nightFloor: 0.08,
    sunDirectionLength: 1,
  });

  await page.evaluate(() => {
    globalThis.__liveearthTest.showCountrySheet("FRA", "France");
  });
  await expect(page.locator("#country-sheet")).toHaveClass(/open/);
  await expect(page.locator("#country-sheet")).toContainText("Capital");
  await expect(page.locator("#country-sheet")).toContainText("Top Headlines");
  await page.locator('[data-section-toggle="news"]').click();
  await expect(page.locator('[data-panel="news"]')).toHaveClass(/collapsed/);
  await page.locator('[data-section-toggle="news"]').click();
  await expect(page.locator('[data-panel="news"]')).not.toHaveClass(/collapsed/);
  await expect(page.locator("#sheet-news")).toBeVisible();
  await expect(page.locator("#news-lang-toggle")).toBeVisible();
  const selectedAltitude = await page.evaluate(() => globalThis.__liveearthTest.getSelectedCountry()?.altitude ?? 10);
  expect(selectedAltitude).toBeLessThan(1.6);
  const layout = await page.evaluate(() => {
    const sheet = document.getElementById("country-sheet")?.getBoundingClientRect();
    const globe = document.getElementById("globe-container")?.getBoundingClientRect();
    const stats = globalThis.__liveearthTest.getCountryGeometryStats?.();
    return {
      featureCount: stats?.featureCount ?? 0,
      globeLeft: globe?.left ?? 0,
      sheetRight: sheet?.right ?? 0,
      sheetWidth: sheet?.width ?? 0,
    };
  });
  expect(layout.featureCount).toBeLessThan(300);
  expect(layout.sheetWidth).toBeGreaterThan(500);
  expect(layout.globeLeft).toBeLessThan(2);

  await page.mouse.click(1400, 90);
  await expect(page.locator("#country-sheet")).not.toHaveClass(/open/);

  for (const layerId of [
    "earthquakes",
    "iss",
    "orbital",
    "flights",
    "rockets",
    "rivers",
    "weather",
    "rainfall",
    "radio",
    "windstreams",
    "airquality",
    "hazards",
    "ocean",
    "cyclones",
    "tsunamiwatch",
    "warzones",
    "spaceweather",
    "solarflares",
  ]) {
    await setLayerEnabled(page, layerId, true);
  }

  await expect.poll(() => counters.earthquakes).toBeGreaterThan(0);
  await expect.poll(() => counters.iss).toBeGreaterThan(0);
  await expect.poll(() => counters.orbital).toBeGreaterThan(0);
  await expect.poll(() => counters.flights).toBeGreaterThan(0);
  await expect.poll(() => counters.rockets).toBeGreaterThan(0);
  await expect.poll(() => counters.rivers).toBeGreaterThan(0);
  await expect.poll(() => counters.weather).toBeGreaterThan(0);
  await expect.poll(() => counters.rainfall).toBeGreaterThan(0);
  await expect.poll(() => counters.radio).toBeGreaterThan(0);
  await expect.poll(() => counters.windstreams).toBeGreaterThan(0);
  await expect.poll(() => counters.airquality).toBeGreaterThan(0);
  await expect.poll(() => counters.hazards).toBeGreaterThan(0);
  await expect.poll(() => counters.ocean).toBeGreaterThan(0);
  await expect.poll(() => counters.cyclones).toBeGreaterThan(0);
  await expect.poll(() => counters.tsunamiwatch).toBeGreaterThan(0);
  await expect.poll(() => counters.warzones).toBeGreaterThan(0);
  await expect.poll(() => counters.spaceweather).toBeGreaterThan(0);
  await expect.poll(() => counters.solarflares).toBeGreaterThan(0);
  await expectAnyVisibleMarker(page, ".flight-marker");
  await expectAnyVisibleMarker(page, ".buoy-marker");
  await expectAnyVisibleMarker(page, ".cyclone-marker");
  await expectAnyVisibleMarker(page, ".windstream-marker");
  await expectMarkerPinned(page, ".flight-marker", ".flight-plane");
  await expectMarkerPinned(page, ".buoy-marker", ".buoy-icon");
  await page.evaluate(() => {
    document.querySelector(".rocket-marker")?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  await expect(page.locator(".traj-panel")).toBeVisible();
  await expect(page.locator(".traj-panel")).toContainText("Falcon 9");
  await expect.poll(() => page.evaluate(() => globalThis.__liveearthTest.getLayerState("flights").status)).toBe("ready");

  expect(errors).toEqual([]);
});
