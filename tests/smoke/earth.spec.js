import { test, expect } from "@playwright/test";

test("earth atlas loads and switches overlays after the shared-module migration", async ({ page }) => {
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

  await page.goto("/projects/earth/");
  await expect(page.locator("#hud-title")).toHaveText("Life expectancy");
  await page.getByRole("button", { name: /GDP per capita \(PPP\)/ }).click();
  await expect(page.locator("#hud-title")).toHaveText("GDP per capita (PPP)");
  await expect(page.locator("#legend-title")).toHaveText("GDP per capita (PPP)");
});
