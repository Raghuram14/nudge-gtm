import type { Metadata } from "next";

import { ColorNavCard } from "@/components/marketing/color-nav-card";
import { ResourceNav } from "@/components/marketing/resource-nav";
import { SimplePage } from "@/components/marketing/simple-page";
import { ROUTES } from "@/config/routes";
import { buildPageMetadata } from "@/lib/seo/metadata";

const pillars = [
  {
    title: "Knowledge graph",
    description: "Canonical entities and provenance across engineering systems.",
    accent: "teal" as const,
  },
  {
    title: "Diagnosis",
    description: "Causal explanation with competing hypotheses and confidence.",
    accent: "coral" as const,
  },
  {
    title: "Project health",
    description: "Delivery risk read from evidence rather than status meetings.",
    accent: "amber" as const,
  },
  {
    title: "AI code quality",
    description: "How AI-authored code behaves over time, tracked separately.",
    accent: "slate" as const,
  },
  {
    title: "Due diligence",
    description: "What an engineering organisation looks like from the outside.",
    accent: "blue" as const,
  },
  {
    title: "Incident learning",
    description: "Whether a retro action item actually changed the outcome.",
    accent: "teal" as const,
  },
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
      eyebrow="Writing"
      title="Research"
      description="The questions we are working on. Notes will appear here when they are original and worth someone's time - not before."
    >
      <h2>Research pillars</h2>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {pillars.map((pillar) => (
          <li key={pillar.title}>
            <ColorNavCard
              href={ROUTES.research}
              title={pillar.title}
              description={pillar.description}
              accent={pillar.accent}
            />
          </li>
        ))}
      </ul>
      <p className="rounded-lg border border-dashed border-border bg-surface-elevated px-5 py-5 text-sm text-text-tertiary">
        No research notes are published yet. Learn and Blog carry the first explainers.
      </p>
      <ResourceNav current={ROUTES.research} className="mt-4" />
    </SimplePage>
  );
}
