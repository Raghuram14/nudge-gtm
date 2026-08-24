import { expect, test } from "@playwright/test";

test("homepage hero copy is in HTML without client JS", async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto("/");
  await expect(page.locator("h1")).toContainText("Engineering Intelligence");
  await expect(page.locator("body")).toContainText(
    "Nudgeio connects the people, projects, work items, code, reviews, builds, deployments, services, incidents, and AI activity",
  );
  const title = await page.title();
  expect(title.toLowerCase()).toContain("nudgeio");
  await context.close();
});

test("canonical and robots allow public pages", async ({ request }) => {
  const home = await request.get("/");
  expect(home.ok()).toBeTruthy();
  const html = await home.text();
  expect(html).toContain('rel="canonical"');
  const robots = await request.get("/robots.txt");
  const robotsText = await robots.text();
  expect(robotsText).toContain("Allow: /");
  const sitemap = await request.get("/sitemap.xml");
  const xml = await sitemap.text();
  expect(xml).toContain("<urlset");
  expect(xml).toContain("/platform/context-graph");
  expect(xml).not.toContain("/compare/nudgeio-vs-hatica");
});
