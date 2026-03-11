import path from "node:path";
import { fileURLToPath } from "node:url";

export const THUMBNAIL_WIDTH = 1600;
export const THUMBNAIL_HEIGHT = 1000;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const repoRoot = path.resolve(__dirname, "..");
export const projectsFile = path.join(repoRoot, "projects.json");
export const thumbnailsDir = path.join(repoRoot, "thumbnails");
export const thumbnailsSrcDir = path.join(thumbnailsDir, "src");
export const thumbnailsManifestFile = path.join(thumbnailsDir, "manifest.json");

const THEME_LIBRARY = {
  dashboard: {
    accent: "#f97316",
    accentSoft: "#fdba74",
    backgroundA: "#1a1325",
    backgroundB: "#44240d",
    grid: "#ffffff12",
    label: "Live Dashboard",
    secondary: "#fb923c",
    surface: "#140d1e",
    text: "#fff8f1",
  },
  finance: {
    accent: "#38bdf8",
    accentSoft: "#7dd3fc",
    backgroundA: "#071b2b",
    backgroundB: "#123645",
    grid: "#ffffff14",
    label: "Market Data",
    secondary: "#22d3ee",
    surface: "#06141f",
    text: "#f4fbff",
  },
  game: {
    accent: "#fb7185",
    accentSoft: "#f9a8d4",
    backgroundA: "#1f1026",
    backgroundB: "#4c1d45",
    grid: "#ffffff10",
    label: "Interactive Game",
    secondary: "#c084fc",
    surface: "#170a20",
    text: "#fff7ff",
  },
  geo: {
    accent: "#2dd4bf",
    accentSoft: "#99f6e4",
    backgroundA: "#071a1f",
    backgroundB: "#0f3b4d",
    grid: "#ffffff10",
    label: "Earth Systems",
    secondary: "#22c55e",
    surface: "#071117",
    text: "#f2fffc",
  },
  generative: {
    accent: "#facc15",
    accentSoft: "#fde68a",
    backgroundA: "#1f1633",
    backgroundB: "#5b2c83",
    grid: "#ffffff12",
    label: "Generative Systems",
    secondary: "#fb7185",
    surface: "#160f26",
    text: "#fffaf2",
  },
  music: {
    accent: "#22c55e",
    accentSoft: "#86efac",
    backgroundA: "#0b1620",
    backgroundB: "#143f2a",
    grid: "#ffffff0f",
    label: "Audio Experience",
    secondary: "#14b8a6",
    surface: "#09131a",
    text: "#f3fff8",
  },
  space: {
    accent: "#a78bfa",
    accentSoft: "#c4b5fd",
    backgroundA: "#090c19",
    backgroundB: "#1f285d",
    grid: "#ffffff0d",
    label: "Space Systems",
    secondary: "#60a5fa",
    surface: "#060914",
    text: "#f5f3ff",
  },
  web: {
    accent: "#f59e0b",
    accentSoft: "#fcd34d",
    backgroundA: "#161616",
    backgroundB: "#42331a",
    grid: "#ffffff10",
    label: "Web Experience",
    secondary: "#fb7185",
    surface: "#100f0d",
    text: "#fffdf7",
  },
};

function hashString(value) {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function esc(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function toSlug(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function pickThemeKey(project) {
  const corpus = `${project.id} ${project.title} ${(project.tags || []).join(" ")}`.toLowerCase();
  if (/(space|nasa|noaa|aurora|solar|asteroid|launch|iss|orbit)/.test(corpus)) return "space";
  if (/(earth|weather|air|ocean|river|tide|globe|geo|map)/.test(corpus)) return "geo";
  if (/(audio|midi|music|piano|violin|radio)/.test(corpus)) return "music";
  if (/(crypto|forex|finance|market)/.test(corpus)) return "finance";
  if (/(game|retro|board|shoot|reaper|abalone)/.test(corpus)) return "game";
  if (/(dashboard|live data|news|stream|github|wikipedia|hacker|pulse|countdown)/.test(corpus)) return "dashboard";
  if (/(glsl|webgl|ray|fractal|shader|generative|reaction|fluid|terrain|metaball|lorenz)/.test(corpus)) return "generative";
  return "web";
}

function pickMotif(project, themeKey) {
  const corpus = `${project.id} ${project.title} ${(project.tags || []).join(" ")}`.toLowerCase();
  if (themeKey === "space") return /launch|rocket/.test(corpus) ? "launch" : "orbit";
  if (themeKey === "music") return /radio/.test(corpus) ? "broadcast" : "waveform";
  if (themeKey === "finance") return "candles";
  if (themeKey === "game") return /retro|shoot/.test(corpus) ? "arcade" : "hex";
  if (themeKey === "geo") return /earth|globe/.test(corpus) ? "globe" : "contours";
  if (themeKey === "generative") return /fractal|ray/.test(corpus) ? "mesh" : "field";
  if (themeKey === "dashboard") return /news|wiki|hn|github/.test(corpus) ? "cards" : "grid";
  return "panels";
}

function buildMotif(project, theme, motif) {
  const seed = hashString(project.id);
  const x1 = 980 + (seed % 220);
  const y1 = 170 + (seed % 160);
  const x2 = 1110 + ((seed >> 4) % 260);
  const y2 = 520 + ((seed >> 7) % 210);
  const x3 = 1240 + ((seed >> 9) % 200);
  const y3 = 260 + ((seed >> 11) % 300);

  if (motif === "orbit") {
    return `
      <circle cx="1170" cy="500" r="210" fill="none" stroke="${theme.grid}" stroke-width="2" />
      <circle cx="1170" cy="500" r="300" fill="none" stroke="${theme.grid}" stroke-width="2" />
      <circle cx="1170" cy="500" r="86" fill="${theme.surface}" stroke="${theme.accent}" stroke-width="4" />
      <circle cx="${x1}" cy="${y1}" r="16" fill="${theme.accentSoft}" />
      <circle cx="${x2}" cy="${y2}" r="12" fill="${theme.secondary}" />
      <circle cx="${x3}" cy="${y3}" r="20" fill="${theme.accent}" />
      <path d="M970 720 C1120 610 1230 410 1380 300" fill="none" stroke="${theme.accent}" stroke-width="8" stroke-linecap="round" stroke-dasharray="14 18" />
    `;
  }

  if (motif === "launch") {
    return `
      <path d="M1090 730 C1110 610 1170 440 1280 250" fill="none" stroke="${theme.accentSoft}" stroke-width="16" stroke-linecap="round" opacity="0.55" />
      <path d="M1090 730 C1110 610 1170 440 1280 250" fill="none" stroke="${theme.accent}" stroke-width="6" stroke-linecap="round" />
      <polygon points="1245,215 1298,250 1245,286" fill="${theme.accent}" />
      <circle cx="1080" cy="744" r="44" fill="${theme.secondary}" opacity="0.25" />
      <circle cx="1175" cy="490" r="26" fill="${theme.accentSoft}" opacity="0.65" />
    `;
  }

  if (motif === "broadcast") {
    return `
      <circle cx="1160" cy="500" r="18" fill="${theme.accent}" />
      <circle cx="1160" cy="500" r="110" fill="none" stroke="${theme.accentSoft}" stroke-width="10" opacity="0.5" />
      <circle cx="1160" cy="500" r="190" fill="none" stroke="${theme.secondary}" stroke-width="8" opacity="0.45" />
      <circle cx="1160" cy="500" r="270" fill="none" stroke="${theme.accent}" stroke-width="6" opacity="0.25" />
      <path d="M1000 660 L1320 340" stroke="${theme.accentSoft}" stroke-width="5" stroke-dasharray="8 12" />
    `;
  }

  if (motif === "waveform") {
    const points = Array.from({ length: 11 }, (_, index) => {
      const x = 920 + index * 62;
      const y = 500 + Math.sin((seed % 7) + index * 0.8) * 120;
      return `${x},${y.toFixed(1)}`;
    }).join(" ");
    return `
      <polyline points="${points}" fill="none" stroke="${theme.accent}" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" />
      <polyline points="${points}" fill="none" stroke="${theme.accentSoft}" stroke-width="24" stroke-linecap="round" stroke-linejoin="round" opacity="0.18" />
      ${points.split(" ").map((point) => {
        const [x, y] = point.split(",");
        return `<circle cx="${x}" cy="${y}" r="10" fill="${theme.secondary}" />`;
      }).join("")}
    `;
  }

  if (motif === "candles") {
    return Array.from({ length: 8 }, (_, index) => {
      const x = 930 + index * 70;
      const height = 120 + ((seed >> index) % 180);
      const y = 650 - height;
      const wickTop = y - 35;
      const color = index % 2 === 0 ? theme.accent : theme.secondary;
      return `
        <line x1="${x + 22}" y1="${wickTop}" x2="${x + 22}" y2="${660 - (index % 3) * 24}" stroke="${theme.accentSoft}" stroke-width="5" />
        <rect x="${x}" y="${y}" width="44" height="${height}" rx="14" fill="${color}" />
      `;
    }).join("");
  }

  if (motif === "arcade") {
    return `
      <rect x="930" y="230" width="380" height="460" rx="42" fill="${theme.surface}" stroke="${theme.accent}" stroke-width="6" />
      <rect x="985" y="290" width="270" height="170" rx="24" fill="${theme.backgroundB}" stroke="${theme.grid}" stroke-width="4" />
      <circle cx="1030" cy="560" r="48" fill="${theme.secondary}" />
      <circle cx="1200" cy="565" r="22" fill="${theme.accent}" />
      <circle cx="1260" cy="625" r="22" fill="${theme.accentSoft}" />
      <path d="M1020 365 h200" stroke="${theme.accentSoft}" stroke-width="8" stroke-dasharray="18 12" />
      <path d="M1020 405 h140" stroke="${theme.accent}" stroke-width="8" stroke-dasharray="10 10" />
    `;
  }

  if (motif === "hex") {
    return Array.from({ length: 7 }, (_, index) => {
      const x = 980 + (index % 3) * 120 + (index > 2 ? 60 : 0);
      const y = 290 + Math.floor(index / 3) * 120;
      const fill = index % 2 === 0 ? theme.accent : theme.secondary;
      return `<polygon points="${x},${y} ${x + 45},${y + 24} ${x + 45},${y + 76} ${x},${y + 100} ${x - 45},${y + 76} ${x - 45},${y + 24}" fill="${fill}" opacity="${0.22 + index * 0.08}" />`;
    }).join("");
  }

  if (motif === "globe") {
    return `
      <circle cx="1170" cy="510" r="255" fill="${theme.surface}" stroke="${theme.accent}" stroke-width="5" />
      <ellipse cx="1170" cy="510" rx="220" ry="255" fill="none" stroke="${theme.grid}" stroke-width="2" />
      <ellipse cx="1170" cy="510" rx="135" ry="255" fill="none" stroke="${theme.grid}" stroke-width="2" />
      <ellipse cx="1170" cy="510" rx="255" ry="100" fill="none" stroke="${theme.grid}" stroke-width="2" />
      <ellipse cx="1170" cy="510" rx="255" ry="180" fill="none" stroke="${theme.grid}" stroke-width="2" />
      <path d="M1015 460 C1080 380 1180 360 1260 395 C1310 430 1320 505 1260 555 C1205 605 1125 625 1050 590 C1008 560 990 510 1015 460 Z" fill="${theme.accent}" opacity="0.38" />
      <path d="M1125 610 C1190 570 1255 560 1305 590 C1330 612 1320 660 1270 694 C1210 730 1115 730 1058 690 C1030 664 1045 628 1125 610 Z" fill="${theme.secondary}" opacity="0.35" />
    `;
  }

  if (motif === "contours") {
    return Array.from({ length: 5 }, (_, index) => {
      const top = 255 + index * 95;
      return `<path d="M930 ${top} C1020 ${top - 80} 1160 ${top + 55} 1320 ${top - 12} C1385 ${top - 35} 1430 ${top + 20} 1460 ${top + 36}" fill="none" stroke="${index % 2 === 0 ? theme.accent : theme.secondary}" stroke-width="${18 - index * 2}" opacity="${0.22 + index * 0.11}" stroke-linecap="round" />`;
    }).join("");
  }

  if (motif === "mesh") {
    return `
      <polygon points="950,720 1080,300 1370,350 1460,680" fill="url(#meshGrad)" opacity="0.88" />
      <path d="M950 720 L1080 300 L1370 350 L1460 680 Z" fill="none" stroke="${theme.accentSoft}" stroke-width="3" />
      ${[
        [950, 720, 1370, 350],
        [1080, 300, 1460, 680],
        [1010, 520, 1420, 520],
      ].map(([xA, yA, xB, yB]) => `<line x1="${xA}" y1="${yA}" x2="${xB}" y2="${yB}" stroke="${theme.grid}" stroke-width="3" />`).join("")}
    `;
  }

  if (motif === "field") {
    return Array.from({ length: 22 }, (_, index) => {
      const radius = 34 + ((seed >> (index % 8)) % 62);
      const x = 930 + ((index * 79 + seed) % 520);
      const y = 220 + ((index * 59 + (seed >> 5)) % 520);
      const fill = index % 3 === 0 ? theme.accent : index % 3 === 1 ? theme.secondary : theme.accentSoft;
      return `<circle cx="${x}" cy="${y}" r="${radius}" fill="${fill}" opacity="${0.15 + (index % 4) * 0.09}" />`;
    }).join("");
  }

  if (motif === "cards") {
    return Array.from({ length: 4 }, (_, index) => {
      const x = 925 + (index % 2) * 215;
      const y = 245 + Math.floor(index / 2) * 190;
      return `
        <rect x="${x}" y="${y}" width="180" height="132" rx="24" fill="${theme.surface}" stroke="${theme.grid}" stroke-width="3" />
        <rect x="${x + 24}" y="${y + 26}" width="${92 + index * 16}" height="16" rx="8" fill="${theme.accent}" opacity="0.85" />
        <rect x="${x + 24}" y="${y + 58}" width="${130 - index * 8}" height="12" rx="6" fill="${theme.accentSoft}" opacity="0.55" />
        <rect x="${x + 24}" y="${y + 82}" width="${96 + index * 12}" height="12" rx="6" fill="${theme.secondary}" opacity="0.48" />
      `;
    }).join("");
  }

  if (motif === "grid") {
    return `
      ${Array.from({ length: 8 }, (_, index) => `<line x1="${910 + index * 70}" y1="220" x2="${910 + index * 70}" y2="760" stroke="${theme.grid}" stroke-width="2" />`).join("")}
      ${Array.from({ length: 8 }, (_, index) => `<line x1="890" y1="${230 + index * 70}" x2="1460" y2="${230 + index * 70}" stroke="${theme.grid}" stroke-width="2" />`).join("")}
      <rect x="960" y="300" width="165" height="165" rx="24" fill="${theme.accent}" opacity="0.24" />
      <rect x="1140" y="360" width="220" height="220" rx="28" fill="${theme.secondary}" opacity="0.24" />
      <rect x="1040" y="560" width="120" height="120" rx="22" fill="${theme.accentSoft}" opacity="0.24" />
    `;
  }

  return `
    <rect x="920" y="240" width="500" height="440" rx="42" fill="${theme.surface}" stroke="${theme.grid}" stroke-width="3" />
    <rect x="980" y="318" width="240" height="26" rx="13" fill="${theme.accent}" opacity="0.85" />
    <rect x="980" y="372" width="320" height="18" rx="9" fill="${theme.accentSoft}" opacity="0.55" />
    <rect x="980" y="410" width="220" height="18" rx="9" fill="${theme.secondary}" opacity="0.45" />
    <rect x="980" y="514" width="368" height="122" rx="26" fill="${theme.backgroundB}" stroke="${theme.grid}" stroke-width="2" />
  `;
}

function createDescriptionLines(project, maxChars = 52, maxLines = 2) {
  const words = (project.description || "").split(/\s+/).filter(Boolean);
  const lines = [];
  let current = "";

  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (next.length <= maxChars) {
      current = next;
      continue;
    }

    if (current) lines.push(current);
    current = word;
    if (lines.length === maxLines - 1) break;
  }

  if (lines.length < maxLines && current) lines.push(current);
  if (!lines.length) return [""];

  if (words.join(" ").length > lines.join(" ").length) {
    const lastIndex = lines.length - 1;
    lines[lastIndex] = `${lines[lastIndex].slice(0, Math.max(0, maxChars - 3)).trim()}...`;
  }

  return lines.slice(0, maxLines);
}

export function buildProjectDesign(project) {
  const themeKey = pickThemeKey(project);
  const theme = THEME_LIBRARY[themeKey];
  const motif = pickMotif(project, themeKey);
  const corpus = `${project.title} ${(project.tags || []).join(" ")}`;
  const seed = hashString(corpus);
  return {
    ...theme,
    cardAngle: (seed % 14) - 7,
    motif,
    seed,
    themeKey,
  };
}

export function renderProjectSvg(project, design) {
  const descriptionLines = createDescriptionLines(project);
  const tagPills = (project.tags || []).slice(0, 3).map((tag, index) => {
    const x = 92 + index * 170;
    return `
      <rect x="${x}" y="192" width="150" height="38" rx="19" fill="#ffffff14" stroke="#ffffff20" />
      <text x="${x + 22}" y="217" font-family="Trebuchet MS, Segoe UI, sans-serif" font-size="20" fill="${design.text}" opacity="0.88">${esc(tag)}</text>
    `;
  }).join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
  <svg xmlns="http://www.w3.org/2000/svg" width="${THUMBNAIL_WIDTH}" height="${THUMBNAIL_HEIGHT}" viewBox="0 0 ${THUMBNAIL_WIDTH} ${THUMBNAIL_HEIGHT}">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${design.backgroundA}" />
        <stop offset="100%" stop-color="${design.backgroundB}" />
      </linearGradient>
      <radialGradient id="glow" cx="20%" cy="10%" r="80%">
        <stop offset="0%" stop-color="${design.accent}" stop-opacity="0.28" />
        <stop offset="100%" stop-color="${design.accent}" stop-opacity="0" />
      </radialGradient>
      <linearGradient id="meshGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${design.accent}" />
        <stop offset="100%" stop-color="${design.secondary}" />
      </linearGradient>
      <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="26" stdDeviation="28" flood-color="#000000" flood-opacity="0.28" />
      </filter>
    </defs>

    <rect width="${THUMBNAIL_WIDTH}" height="${THUMBNAIL_HEIGHT}" fill="url(#bg)" />
    <rect width="${THUMBNAIL_WIDTH}" height="${THUMBNAIL_HEIGHT}" fill="url(#glow)" />
    <path d="M0 840 C180 760 280 720 450 730 C620 742 710 830 910 845 C1110 860 1300 774 1600 618 L1600 1000 L0 1000 Z" fill="#00000022" />
    <path d="M0 0 L0 260 C250 320 450 312 650 255 C870 190 1100 100 1600 120 L1600 0 Z" fill="#ffffff05" />

    <g stroke="${design.grid}" stroke-width="2" opacity="0.72">
      ${Array.from({ length: 11 }, (_, index) => `<line x1="${780 + index * 74}" y1="120" x2="${690 + index * 74}" y2="880" />`).join("")}
      ${Array.from({ length: 8 }, (_, index) => `<line x1="740" y1="${160 + index * 88}" x2="1520" y2="${130 + index * 72}" />`).join("")}
    </g>

    <g filter="url(#softShadow)">
      <rect x="72" y="88" width="760" height="824" rx="42" fill="#05070fcc" stroke="#ffffff18" />
    </g>

    <rect x="92" y="112" width="164" height="36" rx="18" fill="${design.accent}" opacity="0.18" stroke="${design.accent}" stroke-width="2" />
    <text x="118" y="136" font-family="Trebuchet MS, Segoe UI, sans-serif" font-size="20" font-weight="700" letter-spacing="1.8" fill="${design.accentSoft}">${esc(design.label.toUpperCase())}</text>

    <text x="92" y="330" font-family="Bahnschrift, Trebuchet MS, Segoe UI, sans-serif" font-size="84" font-weight="700" fill="${design.text}">${esc(project.title)}</text>
    ${descriptionLines.map((line, index) => `
      <text x="92" y="${398 + index * 40}" font-family="Trebuchet MS, Segoe UI, sans-serif" font-size="28" fill="${design.text}" opacity="0.82">${esc(line)}</text>
    `).join("")}

    ${tagPills}

    <g transform="rotate(${design.cardAngle} 1180 500)">
      ${buildMotif(project, design, design.motif)}
    </g>

    <rect x="92" y="820" width="300" height="42" rx="21" fill="#ffffff10" />
    <text x="118" y="848" font-family="Trebuchet MS, Segoe UI, sans-serif" font-size="22" fill="${design.text}" opacity="0.88">${esc(toSlug(project.id).replace(/-/g, " / "))}</text>

    <text x="1450" y="918" text-anchor="end" font-family="Trebuchet MS, Segoe UI, sans-serif" font-size="24" fill="${design.text}" opacity="0.65">showcase</text>
  </svg>`;
}
