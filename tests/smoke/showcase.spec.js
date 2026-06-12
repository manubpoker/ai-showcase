import { test, expect } from "@playwright/test";
import { readFile } from "node:fs/promises";

const projects = JSON.parse(await readFile(new URL("../../projects.json", import.meta.url), "utf8"));

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
  await expect(cards).toHaveCount(projects.length);
  await expect(page.locator(".tile .tile-front img")).toHaveCount(projects.filter((project) => project.thumbnail).length);
  await expect(page.locator('.tile[data-id="drumset"]')).toBeVisible();
  await expect(page.locator('.tile[data-id="drumset"] .tile-back-launch')).toHaveAttribute("href", "projects/drumset/");
});

test("drumset project loads from the showcase path", async ({ page }) => {
  await page.goto("/projects/drumset/");
  await expect(page.getByRole("heading", { name: "Drumset Studio" })).toBeVisible();
  await expect(page.locator("#stage")).toBeVisible();
  await expect(page.locator("[data-song]")).toHaveCount(368);
});
