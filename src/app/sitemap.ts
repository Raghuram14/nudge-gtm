import type { MetadataRoute } from "next";

import { absoluteUrl } from "@/config/site";
import { loadArticles } from "@/lib/content/load-articles";
import { indexableRoutes } from "@/lib/seo/indexable-routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = indexableRoutes.map((path) => ({
    url: absoluteUrl(path),
    changeFrequency: "weekly" as const,
    priority: path === "/" ? 1 : 0.7,
  }));

  const articles = [...loadArticles("blog"), ...loadArticles("learn")]
    .filter((article) => !article.frontmatter.noindex)
    .map((article) => ({
      url: absoluteUrl(
        article.frontmatter.canonical ??
          `/${article.frontmatter.category === "learn" ? "learn" : "blog"}/${article.frontmatter.slug}`,
      ),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));

  const urls = new Set<string>();
  return [...staticEntries, ...articles].filter((entry) => {
    if (urls.has(entry.url)) {
      return false;
    }
    urls.add(entry.url);
    return true;
  });
}
