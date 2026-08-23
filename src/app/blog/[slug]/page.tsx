import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ArticleBody } from "@/components/content/article-body";
import { Breadcrumbs } from "@/components/marketing/breadcrumbs";
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
    <main id="main" className="mx-auto w-full max-w-6xl px-4 py-8">
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
      <Breadcrumbs
        items={[
          { href: ROUTES.blog, label: "Blog" },
          { href: path, label: article.frontmatter.title },
        ]}
      />
      <h1 className="mb-4 text-4xl font-semibold">{article.frontmatter.title}</h1>
      <p className="mb-8 text-sm text-muted">
        {article.frontmatter.author} · {article.frontmatter.publishedAt} · updated{" "}
        {article.frontmatter.updatedAt}
      </p>
      <ArticleBody article={article} />
    </main>
  );
}
