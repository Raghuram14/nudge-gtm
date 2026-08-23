/** Build-time MDX loader for blog/learn. Frontmatter validated via Zod in `schema.ts`. */
import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";

import {
  type ArticleFrontmatter,
  articleFrontmatterSchema,
} from "@/lib/content/schema";

export type LoadedArticle = {
  frontmatter: ArticleFrontmatter;
  body: string;
  filePath: string;
};

function contentDir(collection: "blog" | "learn"): string {
  return path.join(process.cwd(), "src/content", collection);
}

export function loadArticles(collection: "blog" | "learn"): LoadedArticle[] {
  const dir = contentDir(collection);
  if (!fs.existsSync(dir)) {
    return [];
  }
  const files = fs.readdirSync(dir).filter((file) => file.endsWith(".mdx"));
  return files
    .map((file) => {
      const filePath = path.join(dir, file);
      const raw = fs.readFileSync(filePath, "utf8");
      const parsed = matter(raw);
      const frontmatter = articleFrontmatterSchema.parse(parsed.data);
      return { frontmatter, body: parsed.content, filePath };
    })
    .sort((a, b) => b.frontmatter.publishedAt.localeCompare(a.frontmatter.publishedAt));
}

export function loadArticleBySlug(
  collection: "blog" | "learn",
  slug: string,
): LoadedArticle | undefined {
  return loadArticles(collection).find((article) => article.frontmatter.slug === slug);
}
