import { test, expect } from "@playwright/test";

test("showcase gallery renders title images for every project card", async ({ page }) => {
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

  await page.goto("/");
  const cards = page.locator(".tile");
  await expect(cards).toHaveCount(42);
  await expect(page.locator(".tile img")).toHaveCount(42);
});
