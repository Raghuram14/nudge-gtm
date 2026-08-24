import type { Metadata } from "next";

import { EvidenceCard } from "@/components/marketing/evidence-card";
import { MachinePageContract } from "@/components/marketing/machine-page-contract";
import { SimplePage } from "@/components/marketing/simple-page";
import { ROUTES } from "@/config/routes";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Engineering Intelligence",
  description:
    "Nudgeio Engineering Intelligence helps teams understand what changed, why it changed, and what deserves attention next - with evidence, not dashboards of what happened.",
  path: ROUTES.engineeringIntelligence,
});

export default function Page(): React.ReactElement {
  return (
    <SimplePage
      crumbs={[
        { href: ROUTES.platform, label: "Platform" },
        { href: ROUTES.engineeringIntelligence, label: "Engineering Intelligence" },
      ]}
      eyebrow="Platform"
      title="Engineering Intelligence"
      description="Reasoning over connected engineering context: why something is happening, with evidence, so humans can act. Not an AI chatbot bolted onto charts."
      related={[
        { href: ROUTES.contextGraph, label: "Context Graph" },
        { href: ROUTES.evidenceFirstAi, label: "Evidence-first AI" },
        { href: ROUTES.learnContextDiagnosis, label: "Diagnosis explainer" },
      ]}
    >
      <h2>Context over raw telemetry</h2>
      <p>
        Dashboards and DORA-style numbers are inputs. They do not explain blocked work, review
        concentration, dependency delay, or why a project took longer than expected. Intelligence
        starts where isolated metrics end: connected context, associated causes, and evidence.
      </p>
      <EvidenceCard
        item={{
          insight: "Delivery is slowing in this window",
          why: "Likely contributing: review wait time coinciding with blocked work items",
          evidence: "Work items blocked; PRs waiting (example)",
          source: "Canonical work-item and pull-request events",
          confidence: "medium",
        }}
      />
      <MachinePageContract
        what="Intelligence over connected engineering context."
        who="CTO, VP Eng, directors, managers."
        problem="Dashboards show what; they rarely show why with evidence."
        how="Deterministic insights plus Ask Nudgeio inferences, visually distinct."
        data="Graph context from connectors."
        output="Investigations, not vanity scores."
        availability="Flagship question in the current slice: why is this sprint at risk?"
        differ="Not another DORA platform or developer ranking engine."
        learnMore="Project health, evidence-first AI, learn explainer."
      />
    </SimplePage>
  );
}
