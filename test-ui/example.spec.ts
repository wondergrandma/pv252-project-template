import { expect } from "@playwright/test";
import { test } from "./coverage_wrapper";

test("find-watman", async ({ page }) => {  
  await page.goto("/");
  await expect(page.getByAltText("This is watman")).toBeInViewport();
});

test("factorial", async({ page }) => {
  await page.goto("/site_a.html");
  await expect(page.getByText("Factorial")).toBeInViewport();
});


test("site-a", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("#site-a")).toBeVisible();
});


test("Find Apps.", async({ page }) => {
  await page.goto("https://play.google.com/")
  await page.click('button:has-text("Apps")');

  expect(page).toHaveURL("https://play.google.com/store/apps")
});


test("Find Instagram.", async({ page }) => {
  await page.goto("https://play.google.com/")

  await page.click('button[aria-label="Search"]');

  await page.fill('input[jsname="oA4zhb"]', "Instagram");

  await page.locator("text=Instagram");
})

test("Get Help.", async ({page}) => {
  await page.goto("https://play.google.com/")

  await page.click('button[aria-label="Help Center"]');

  await page.locator("text=How to add, remove, or edit your Google Play payment method")
})

test("User", async ({page}) => {
  await page.goto("https://play.google.com/")

  await page.click('button[aria-label="Open account menu"]');

  await page.click('li[role="menuitem"]:has-text("Settings")');

  await page.locator("text=Sign in")
})