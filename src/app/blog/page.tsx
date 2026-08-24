import type { Metadata } from "next";

import { ColorArticleCard, ColorNavCard } from "@/components/marketing/color-nav-card";
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
      title="Blog"
      description="Original, dated notes. Empty state is honest if nothing is published."
    >
      <div className="mb-8 grid gap-3 sm:grid-cols-3">
        <ColorNavCard href={ROUTES.learn} title="Learn" description="Explainers" accent="teal" />
        <ColorNavCard
          href={ROUTES.research}
          title="Research"
          description="Notes & pillars"
          accent="amber"
        />
        <ColorNavCard
          href={ROUTES.compare}
          title="Compare"
          description="Category gaps"
          accent="slate"
        />
      </div>
      {posts.length === 0 ? (
        <p className="rounded-xl border border-dashed border-border bg-accent-muted/40 px-4 py-6 text-sm text-muted">
          No posts yet.
        </p>
      ) : (
        <ul className="grid gap-4">
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
    </SimplePage>
  );
}
