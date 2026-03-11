export function createRenderRegistry(globe) {
  const buckets = {
    html: new Map(),
    paths: new Map(),
    points: new Map(),
    rings: new Map(),
  };

  const scheduledKinds = new Set();
  let flushScheduled = false;

  globe
    .pointsData([])
    .pointLat((point) => point.lat)
    .pointLng((point) => point.lng)
    .pointRadius((point) => point.pointRadius ?? 0.2)
    .pointAltitude((point) => point.pointAltitude ?? 0.07)
    .pointColor((point) => point.pointColor ?? "#94a3b8")
    .onPointClick((point) => point?.onPointClick?.(point))
    .onPointHover((point, previousPoint) => {
      if (point && point !== previousPoint) {
        previousPoint?.onPointLeave?.(previousPoint);
        point.onPointHover?.(point);
        return;
      }
      if (!point) {
        previousPoint?.onPointLeave?.(previousPoint);
      }
    });

  globe
    .htmlElementsData([])
    .htmlLat((marker) => marker.lat)
    .htmlLng((marker) => marker.lng)
    .htmlAltitude((marker) => marker.htmlAltitude ?? 0.07)
    .htmlElement((marker) => {
      const element = marker.getElement();
      if (element) {
        element.dataset.markerAltitude = String(marker.htmlAltitude ?? 0.07);
        element.dataset.markerLat = String(marker.lat);
        element.dataset.markerLng = String(marker.lng);
      }
      return element;
    });

  globe
    .pathsData([])
    .pathPoints((pathData) => pathData.coords ?? pathData)
    .pathPointLat((point) => point[0])
    .pathPointLng((point) => point[1])
    .pathColor((pathData) => {
      const value = pathData.pathColor;
      if (Array.isArray(value)) return value[0];
      return value ?? "rgba(255,255,255,0.7)";
    })
    .pathStroke((pathData) => pathData.pathStroke ?? 2)
    .pathDashLength((pathData) => pathData.pathDashLength ?? 0)
    .pathDashGap((pathData) => pathData.pathDashGap ?? 0)
    .pathDashAnimateTime((pathData) => pathData.pathDashAnimateTime ?? 0);

  globe
    .ringsData([])
    .ringLat((ring) => ring.lat)
    .ringLng((ring) => ring.lng)
    .ringMaxRadius((ring) => ring.ringMaxRadius ?? 1)
    .ringPropagationSpeed((ring) => ring.ringPropagationSpeed ?? 1)
    .ringRepeatPeriod((ring) => ring.ringRepeatPeriod ?? 1_000)
    .ringColor((ring) => ring.ringColor ?? ["rgba(255,255,255,0.6)", "transparent"]);

  function flatten(kind) {
    return [...buckets[kind].values()].flat();
  }

  function flushKind(kind) {
    if (kind === "points") {
      globe.pointsData(flatten("points"));
      return;
    }
    if (kind === "html") {
      globe.htmlElementsData(flatten("html"));
      return;
    }
    if (kind === "paths") {
      globe.pathsData(flatten("paths"));
      return;
    }
    if (kind === "rings") {
      globe.ringsData(flatten("rings"));
    }
  }

  function scheduleFlush(kind) {
    scheduledKinds.add(kind);
    if (flushScheduled) return;
    flushScheduled = true;

    requestAnimationFrame(() => {
      const pendingKinds = [...scheduledKinds];
      scheduledKinds.clear();
      flushScheduled = false;
      pendingKinds.forEach((pendingKind) => flushKind(pendingKind));
    });
  }

  function set(kind, layerId, value) {
    buckets[kind].set(layerId, value || []);
    scheduleFlush(kind);
  }

  function clearLayer(layerId) {
    for (const [kind, bucket] of Object.entries(buckets)) {
      if (!bucket.has(layerId)) continue;
      bucket.delete(layerId);
      scheduleFlush(kind);
    }
  }

  return {
    clearLayer,
    setHtml(layerId, markers) {
      set("html", layerId, markers);
    },
    setPaths(layerId, paths) {
      set("paths", layerId, paths);
    },
    setPoints(layerId, points) {
      set("points", layerId, points);
    },
    setRings(layerId, rings) {
      set("rings", layerId, rings);
    },
  };
}
