import type { Metadata } from "next";

import { ContextGraphVisualizer } from "@/components/marketing/context-graph-visualizer";
import { MachinePageContract } from "@/components/marketing/machine-page-contract";
import { SimplePage } from "@/components/marketing/simple-page";
import { ROUTES } from "@/config/routes";
import { getHomeDemoData } from "@/lib/api/home-demo";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Engineering Knowledge Graph (Context Graph)",
  description:
    "Nudgeio’s Engineering Knowledge Graph - also called a Context Graph - connects people, work, code, and runtime context with provenance so leaders can see relationships, not event counts.",
  path: ROUTES.contextGraph,
});

/** Phase 3 - loads graph layout via server demo loader, passes to Phase 1 visualizer. */
export default async function Page(): Promise<React.ReactElement> {
  const demo = await getHomeDemoData();

  return (
    <SimplePage
      crumbs={[
        { href: ROUTES.platform, label: "Platform" },
        { href: ROUTES.contextGraph, label: "Context Graph" },
      ]}
      eyebrow="Platform"
      title="Engineering Knowledge Graph"
      description="Visitor-friendly name: Context Graph. A canonical model of engineering context - entities, relationships, and provenance - not a pitch for a graph database."
      related={[
        { href: ROUTES.engineeringIntelligence, label: "Engineering Intelligence" },
        { href: ROUTES.projectHealth, label: "Project health" },
        { href: ROUTES.integrationsGithub, label: "GitHub" },
        { href: ROUTES.integrationsJira, label: "Jira" },
      ]}
    >
      <h2>What it is</h2>
      <p>
        An engineering context / knowledge graph connects Organization → Team → Person →
        Project → Sprint → Work item → Pull request → Review → Build → Deployment → Service →
        Incident, including customer or product impact when that data exists.
      </p>
      <ContextGraphVisualizer layout={demo.contextGraph} />
      <h2>Why it exists</h2>
      <p>
        Metrics describe what moved. Without relationships, you cannot diagnose why a sprint is
        at risk, which dependency is blocking work, or which service a change affects.
      </p>
      <h2>Available today vs later</h2>
      <p>
        The current product direction is a vertical slice: GitHub + Jira into canonical entities
        and graph context. Broader ingest is coming soon.
      </p>
      <MachinePageContract
        what="A Knowledge Graph of engineering context (Context Graph)."
        who="Engineering leaders who need system-level understanding."
        problem="Tools store events; they do not connect them."
        how="Normalize sources into canonical entities and directed relationships with provenance."
        data="GitHub and Jira first; other sources coming soon."
        output="Traversable context for investigations and Ask Nudgeio."
        availability="Design-partner direction for GitHub + Jira. Not a claimed production graph for all sources."
        differ="Not “we have Neo4j.” The product is connected context."
        learnMore="Engineering Intelligence, Project health, GitHub and Jira pages."
      />
    </SimplePage>
  );
}
