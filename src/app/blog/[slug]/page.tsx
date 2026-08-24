import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ArticleLayout } from "@/components/content/article-layout";
import { JsonLd } from "@/components/seo/json-ld";
import { ROUTES } from "@/config/routes";
import { absoluteUrl, siteConfig } from "@/config/site";
import { loadArticleBySlug, loadArticles } from "@/lib/content/load-articles";
import { articleJsonLd } from "@/lib/seo/jsonld";
import { buildPageMetadata } from "@/lib/seo/metadata";

type Params = { slug: string };

export function generateStaticParams(): Array<Params> {
  return loadArticles("blog").map((article) => ({ slug: article.frontmatter.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = loadArticleBySlug("blog", slug);
  if (!article) {
    return {};
  }
  const path = article.frontmatter.canonical ?? `/blog/${slug}`;
  return buildPageMetadata({
    title: article.frontmatter.title,
    description: article.frontmatter.description,
    path,
    noindex: article.frontmatter.noindex,
  });
}

export default async function Page({
  params,
}: {
  params: Promise<Params>;
}): Promise<React.ReactElement> {
  const { slug } = await params;
  const article = loadArticleBySlug("blog", slug);
  if (!article) {
    notFound();
  }
  const path = article.frontmatter.canonical ?? `/blog/${slug}`;

  return (
    <ArticleLayout
      article={article}
      eyebrow="Blog"
      crumbs={[
        { href: ROUTES.blog, label: "Blog" },
        { href: path, label: article.frontmatter.title },
      ]}
    >
      <JsonLd
        data={articleJsonLd({
          headline: article.frontmatter.title,
          description: article.frontmatter.description,
          url: absoluteUrl(path),
          datePublished: article.frontmatter.publishedAt,
          dateModified: article.frontmatter.updatedAt,
          author: article.frontmatter.author || siteConfig.name,
        })}
      />
    </ArticleLayout>
  );
}
