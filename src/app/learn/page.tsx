import type { Metadata } from "next";

import { ColorArticleCard } from "@/components/marketing/color-nav-card";
import { ResourceNav } from "@/components/marketing/resource-nav";
import { SimplePage } from "@/components/marketing/simple-page";
import { resourceAccents } from "@/config/accent-tones";
import { ROUTES } from "@/config/routes";
import { loadArticles } from "@/lib/content/load-articles";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Learn",
  description:
    "People-first explainers on engineering context, diagnosis, and the Knowledge Graph.",
  path: ROUTES.learn,
});

export default function Page(): React.ReactElement {
  const posts = loadArticles("learn").filter((post) => !post.frontmatter.noindex);

  return (
    <SimplePage
      crumbs={[{ href: ROUTES.learn, label: "Learn" }]}
      eyebrow="Writing"
      title="Learn"
      description="Explainers for engineering leaders, written to be read once and understood. Not doorway SEO pages."
    >
      {posts.length === 0 ? (
        <p className="rounded-lg border border-dashed border-border bg-surface-elevated px-5 py-6 text-sm text-text-tertiary">
          No explainers yet.
        </p>
      ) : (
        <ul className="grid">
          {posts.map((post, index) => (
            <ColorArticleCard
              key={post.frontmatter.slug}
              href={post.frontmatter.canonical ?? `/learn/${post.frontmatter.slug}`}
              title={post.frontmatter.title}
              description={post.frontmatter.description}
              accent={resourceAccents[index % resourceAccents.length]}
            />
          ))}
        </ul>
      )}
      <ResourceNav current={ROUTES.learn} className="mt-8" />
    </SimplePage>
  );
}
