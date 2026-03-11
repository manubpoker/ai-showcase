export function fmtNum(value, decimals = 0) {
  if (value == null || Number.isNaN(value)) return "\u2014";
  if (decimals === 0) return Math.round(value).toLocaleString();
  return Number(value).toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

export function fmtPopulation(value) {
  if (value == null || Number.isNaN(value)) return "\u2014";
  if (value >= 1e9) return `${(value / 1e9).toFixed(2)}B`;
  if (value >= 1e6) return `${(value / 1e6).toFixed(2)}M`;
  if (value >= 1e3) return `${(value / 1e3).toFixed(1)}K`;
  return Number(value).toLocaleString();
}

export function fmtArea(value) {
  if (value == null || Number.isNaN(value)) return "\u2014";
  return `${Math.round(value).toLocaleString()} km\u00B2`;
}

export function escHtml(value) {
  if (value == null) return "";
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function capitalize(value) {
  return value ? value.charAt(0).toUpperCase() + value.slice(1) : "";
}

export function timeAgo(timestamp, now = Date.now()) {
  const seconds = Math.max(0, Math.floor((now - timestamp) / 1000));
  if (seconds < 60) return `${seconds}s ago`;
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
  return `${Math.floor(seconds / 86400)}d ago`;
}
