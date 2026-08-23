import type { Metadata } from "next";

import { ColorArticleCard, ColorNavCard } from "@/components/marketing/color-nav-card";
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
      title="Learn"
      description="Explainers for engineering leaders. Not doorway SEO pages."
    >
      <div className="mb-8 grid gap-3 sm:grid-cols-3">
        <ColorNavCard href={ROUTES.blog} title="Blog" description="Dated notes" accent="indigo" />
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
          accent="violet"
        />
      </div>
      {posts.length === 0 ? (
        <p className="rounded-xl border border-dashed border-border bg-[color-mix(in_oklab,var(--observed)_10%,white)] px-4 py-6 text-sm text-muted">
          No explainers yet.
        </p>
      ) : (
        <ul className="grid gap-4">
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
    </SimplePage>
  );
}
