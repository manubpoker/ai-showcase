import { defineConfig } from "@playwright/test";

const port = Number(process.env.PORT || 4173);

export default defineConfig({
  testDir: "./tests/smoke",
  timeout: 30_000,
  fullyParallel: false,
  workers: 1,
  use: {
    baseURL: `http://127.0.0.1:${port}`,
    headless: true,
  },
  webServer: {
    command: `node scripts/serve-showcase.mjs --port ${port}`,
    port,
    reuseExistingServer: !process.env.CI,
    timeout: 30_000,
  },
});
