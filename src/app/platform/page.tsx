import type { Metadata } from "next";

import { ColorNavCard } from "@/components/marketing/color-nav-card";
import { SimplePage } from "@/components/marketing/simple-page";
import { SystemDiagram } from "@/components/marketing/system-diagram";
import { platformAccents } from "@/config/accent-tones";
import { ROUTES } from "@/config/routes";
import { buildPageMetadata } from "@/lib/seo/metadata";

const platformLinks = [
  {
    href: ROUTES.contextGraph,
    title: "Context Graph",
    description: "Relationships and provenance across engineering entities.",
  },
  {
    href: ROUTES.engineeringIntelligence,
    title: "Engineering Intelligence",
    description: "Reason over connected context, with evidence.",
  },
  {
    href: ROUTES.projectHealth,
    title: "Project health",
    description: "Investigate delivery risk from artifacts, not status meetings.",
  },
  {
    href: ROUTES.evidenceFirstAi,
    title: "Evidence-first AI",
    description: "Answers with source citations and labelled inference.",
  },
  {
    href: ROUTES.mcp,
    title: "MCP / agents",
    description: "Organisational context for AI-assisted development.",
  },
] as const;

export const metadata: Metadata = buildPageMetadata({
  title: "Platform",
  description:
    "Nudgeio platform: connect engineering evidence, build context and a knowledge graph, reason with evidence-first AI, and act on understanding.",
  path: ROUTES.platform,
});

export default function Page(): React.ReactElement {
  return (
    <SimplePage
      crumbs={[{ href: ROUTES.platform, label: "Platform" }]}
      eyebrow="Platform"
      title="From scattered artifacts to explainable answers."
      description="An engineering intelligence layer that connects evidence and context across the systems you already run."
    >
      <SystemDiagram />

      <h2 className="mt-4">Explore the layer</h2>
      <ul className="grid items-stretch gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {platformLinks.map((link, index) => (
          <li key={link.href}>
            <ColorNavCard
              href={link.href}
              title={link.title}
              description={link.description}
              accent={platformAccents[index % platformAccents.length]}
            />
          </li>
        ))}
      </ul>
    </SimplePage>
  );
}
