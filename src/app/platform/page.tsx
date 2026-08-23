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
    description: "Relationships and provenance across engineering entities",
  },
  {
    href: ROUTES.engineeringIntelligence,
    title: "Engineering Intelligence",
    description: "Reason over connected context with evidence",
  },
  {
    href: ROUTES.projectHealth,
    title: "Project health",
    description: "Investigate delivery risk with evidence",
  },
  {
    href: ROUTES.evidenceFirstAi,
    title: "Evidence-first AI",
    description: "Answers with source citations and labeled inference",
  },
  {
    href: ROUTES.mcp,
    title: "MCP / agents",
    description: "Organizational context for AI-assisted development",
  },
] as const;

export const metadata: Metadata = buildPageMetadata({
  title: "Platform",
  description:
    "Antarang platform: connect engineering evidence, build context and a knowledge graph, reason with evidence-first AI, and act on understanding.",
  path: ROUTES.platform,
});

export default function Page(): React.ReactElement {
  return (
    <SimplePage
      crumbs={[{ href: ROUTES.platform, label: "Platform" }]}
      title="Platform"
      description="An engineering intelligence platform that connects evidence and context across systems — from artifacts to explainable answers."
    >
      <SystemDiagram />
      <ul className="mt-8 grid items-stretch gap-3 sm:grid-cols-2">
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
