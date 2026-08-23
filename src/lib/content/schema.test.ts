import { describe, expect, it } from "vitest";

import { articleFrontmatterSchema } from "@/lib/content/schema";

describe("articleFrontmatterSchema", () => {
  it("parses complete frontmatter", () => {
    const parsed = articleFrontmatterSchema.parse({
      title: "Title",
      description: "Desc",
      slug: "title",
      publishedAt: "2026-08-18",
      updatedAt: "2026-08-18",
      author: "Antarang",
      category: "blog",
      tags: ["a"],
      primaryKeyword: "engineering intelligence",
      secondaryKeywords: [],
      status: "available",
    });
    expect(parsed.noindex).toBe(false);
  });

  it("fails when required title is missing", () => {
    const result = articleFrontmatterSchema.safeParse({
      description: "Desc",
      slug: "title",
      publishedAt: "2026-08-18",
      updatedAt: "2026-08-18",
      author: "Antarang",
      category: "blog",
      tags: [],
      primaryKeyword: "x",
      secondaryKeywords: [],
      status: "available",
    });
    expect(result.success).toBe(false);
  });
});
