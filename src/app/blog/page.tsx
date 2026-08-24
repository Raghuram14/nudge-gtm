import type { Metadata } from "next";

import { ColorArticleCard } from "@/components/marketing/color-nav-card";
import { ResourceNav } from "@/components/marketing/resource-nav";
import { SimplePage } from "@/components/marketing/simple-page";
import { resourceAccents } from "@/config/accent-tones";
import { ROUTES } from "@/config/routes";
import { loadArticles } from "@/lib/content/load-articles";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Blog",
  description:
    "Nudgeio writing on engineering operating systems, context, and evidence-first intelligence. People-first, not a content farm.",
  path: ROUTES.blog,
});

export default function Page(): React.ReactElement {
  const posts = loadArticles("blog").filter((post) => !post.frontmatter.noindex);

  return (
    <SimplePage
      crumbs={[{ href: ROUTES.blog, label: "Blog" }]}
      eyebrow="Writing"
      title="Blog"
      description="Original, dated notes. If nothing is published, this page says so rather than padding itself out."
    >
      {posts.length === 0 ? (
        <p className="rounded-lg border border-dashed border-border bg-surface-elevated px-5 py-6 text-sm text-text-tertiary">
          No posts yet.
        </p>
      ) : (
        <ul className="grid">
          {posts.map((post, index) => (
            <ColorArticleCard
              key={post.frontmatter.slug}
              href={post.frontmatter.canonical ?? `/blog/${post.frontmatter.slug}`}
              title={post.frontmatter.title}
              description={post.frontmatter.description}
              meta={post.frontmatter.publishedAt}
              accent={resourceAccents[index % resourceAccents.length]}
            />
          ))}
        </ul>
      )}
      <ResourceNav current={ROUTES.blog} className="mt-8" />
    </SimplePage>
  );
}
