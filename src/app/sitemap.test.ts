import { describe, expect, it } from "vitest";

import sitemap from "@/app/sitemap";
import { loadArticles } from "@/lib/content/load-articles";

describe("sitemap contract", () => {
  it("includes canonical homepage and excludes noindex articles", () => {
    const entries = sitemap();
    const urls = entries.map((entry) => entry.url);
    expect(urls.some((url) => url.endsWith("/") || url.endsWith("localhost:3000"))).toBe(true);
    expect(urls.some((url) => url.includes("/compare/nudgeio-vs-hatica"))).toBe(false);
    const noindex = loadArticles("blog").filter((article) => article.frontmatter.noindex);
    for (const article of noindex) {
      expect(urls.some((url) => url.includes(article.frontmatter.slug))).toBe(false);
    }
  });

  it("loads an empty-safe article list", () => {
    expect(Array.isArray(loadArticles("blog"))).toBe(true);
  });
});
