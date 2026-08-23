import type { Metadata } from "next";

import { AskAntarangPanel } from "@/components/marketing/ask-antarang-panel";
import { MachinePageContract } from "@/components/marketing/machine-page-contract";
import { SimplePage } from "@/components/marketing/simple-page";
import { Badge } from "@/components/ui/badge";
import { ROUTES } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Evidence-first AI · Ask Antarang",
  description:
    "Ask Antarang is evidence-first engineering intelligence: inferences are visually distinct from observed facts, and mock answers on this site are labeled Example.",
  path: ROUTES.evidenceFirstAi,
});

export default function Page(): React.ReactElement {
  return (
    <SimplePage
      crumbs={[
        { href: ROUTES.platform, label: "Platform" },
        { href: ROUTES.evidenceFirstAi, label: "Evidence-first AI" },
      ]}
      eyebrow="Platform"
      title="Evidence-first AI"
      description={`${siteConfig.askSurfaceName} answers questions over the Knowledge Graph. It is not an AI chatbot for engineering chat. Inferences are labeled and must show evidence.`}
      related={[
        { href: ROUTES.engineeringIntelligence, label: "Engineering Intelligence" },
        { href: ROUTES.mcp, label: "MCP / agents" },
        { href: ROUTES.projectHealth, label: "Project health" },
      ]}
    >
      <p>
        Observed facts use a solid treatment. Inferred answers use a distinct inferred treatment.
        Confidence is qualitative (high / medium / low) or clearly fake Example percentages — we
        do not manufacture scientific precision.
      </p>
      <div className="flex gap-2">
        <Badge tone="observed">Observed</Badge>
        <Badge tone="inferred">Inferred</Badge>
        <Badge tone="example">Example</Badge>
      </div>
      <AskAntarangPanel />
      <MachinePageContract
        what="Ask Antarang: evidence-first questions over graph context."
        who="Leaders investigating delivery risk."
        problem="AI summaries without provenance."
        how="Question → graph retrieval → evidence → labeled inference."
        data="Canonical entities from current connectors."
        output="Answers with why, evidence, source, confidence."
        availability="Flagship question in the current slice. Not a general chatbot."
        differ="Not surveillance and not unexplained generative text."
        learnMore="MCP direction and project health."
      />
    </SimplePage>
  );
}
