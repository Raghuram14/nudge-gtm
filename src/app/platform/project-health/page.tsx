import type { Metadata } from "next";

import { AskNudgeioPanel } from "@/components/marketing/ask-nudgeio-panel";
import { MachinePageContract } from "@/components/marketing/machine-page-contract";
import { ProjectHealthCard } from "@/components/marketing/project-health-card";
import { SimplePage } from "@/components/marketing/simple-page";
import { ROUTES } from "@/config/routes";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Project and sprint health",
  description:
    "How engineering leaders should understand project and sprint health: investigations with evidence, not activity scorecards or individual rankings.",
  path: ROUTES.projectHealth,
});

export default function Page(): React.ReactElement {
  return (
    <SimplePage
      crumbs={[
        { href: ROUTES.platform, label: "Platform" },
        { href: ROUTES.projectHealth, label: "Project health" },
      ]}
      eyebrow="Platform"
      title="Project and sprint health"
      description="Is this project or sprint healthy, and why? Delivery risk should be measured with blocked work, dependencies, and review delay - not commits or hours online."
      related={[
        { href: ROUTES.engineeringIntelligence, label: "Engineering Intelligence" },
        { href: ROUTES.evidenceFirstAi, label: "Ask Nudgeio" },
        { href: ROUTES.contextGraph, label: "Context Graph" },
      ]}
    >
      <h2 className="text-xl font-semibold text-foreground">How delivery risk should be measured</h2>
      <p>
        Prefer system signals: blocked work items, downstream services, review latency, and
        dependency delay. Correlation is not causation. Example panels below are illustrative.
      </p>
      <ProjectHealthCard />
      <AskNudgeioPanel />
      <MachinePageContract
        what="Project and sprint health investigations."
        who="Engineering managers and directors."
        problem="Status reporting without evidence."
        how="Graph-backed investigation of why a sprint is at risk."
        data="Work items and pull requests in the current GitHub + Jira slice."
        output="Primary and secondary contributing factors with evidence."
        availability="Closest to MVP. Example UI on this site is labeled Example."
        differ="No individual performance ranking."
        learnMore="Evidence-first AI and the diagnosis explainer."
      />
    </SimplePage>
  );
}
