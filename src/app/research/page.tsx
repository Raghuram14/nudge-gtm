import type { Metadata } from "next";

import { ColorNavCard } from "@/components/marketing/color-nav-card";
import { SimplePage } from "@/components/marketing/simple-page";
import { ROUTES } from "@/config/routes";
import { buildPageMetadata } from "@/lib/seo/metadata";

const pillars = [
  { title: "Knowledge Graph", accent: "teal" as const },
  { title: "Diagnosis", accent: "coral" as const },
  { title: "Project health", accent: "amber" as const },
  { title: "AI code quality", accent: "slate" as const },
  { title: "Due diligence", accent: "blue" as const },
  { title: "Incident learning", accent: "teal" as const },
] as const;

export const metadata: Metadata = buildPageMetadata({
  title: "Research",
  description:
    "Nudgeio research pillars: Knowledge Graph, diagnosis, project health, and related topics. Not a content farm.",
  path: ROUTES.research,
});

export default function Page(): React.ReactElement {
  return (
    <SimplePage
      crumbs={[{ href: ROUTES.research, label: "Research" }]}
      title="Research"
      description="People-first notes will live here when they are original. Pillars: Knowledge Graph, diagnosis, project health, AI code quality, due diligence, incident learning, product↔engineering, compliance."
    >
      <div className="mb-8 grid gap-3 sm:grid-cols-3">
        <ColorNavCard href={ROUTES.blog} title="Blog" description="Dated notes" accent="teal" />
        <ColorNavCard href={ROUTES.learn} title="Learn" description="Explainers" accent="teal" />
        <ColorNavCard
          href={ROUTES.compare}
          title="Compare"
          description="Category gaps"
          accent="slate"
        />
      </div>
      <h2 className="text-base font-semibold text-foreground">Research pillars</h2>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {pillars.map((pillar) => (
          <li key={pillar.title}>
            <ColorNavCard
              href={ROUTES.research}
              title={pillar.title}
              description="Coming as original notes"
              accent={pillar.accent}
            />
          </li>
        ))}
      </ul>
      <p className="mt-6 rounded-xl border border-dashed border-inferred bg-[color-mix(in_oklab,var(--inferred)_12%,white)] px-4 py-4 text-sm text-muted">
        No research articles yet. See Learn and Blog for the first explainers.
      </p>
    </SimplePage>
  );
}
