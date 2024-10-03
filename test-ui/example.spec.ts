import { expect } from "@playwright/test";
import { test } from "./coverage_wrapper";

test("find-watman", async ({ page }) => {  
  await page.goto("/");
  await expect(page.getByAltText("This is watman")).toBeInViewport();
});

test("factorial", async({ page }) => {
  await page.goto("/site_a.html");
  await expect(page.getByText("Factorial")).toBeInViewport();
})

test("site-a", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator('#site-a')).toBeVisible();
})
