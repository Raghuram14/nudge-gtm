import { z } from "zod";

export const contentStatusSchema = z.enum([
  "available",
  "in-development",
  "coming-soon",
  "example",
]);

export const articleFrontmatterSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  slug: z.string().min(1),
  canonical: z.string().optional(),
  publishedAt: z.string().min(1),
  updatedAt: z.string().min(1),
  author: z.string().min(1),
  category: z.string().min(1),
  tags: z.array(z.string()),
  primaryKeyword: z.string().min(1),
  secondaryKeywords: z.array(z.string()),
  ogImage: z.string().optional(),
  noindex: z.boolean().default(false),
  status: contentStatusSchema,
});

export type ArticleFrontmatter = z.infer<typeof articleFrontmatterSchema>;
