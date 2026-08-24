import type { Metadata } from "next";

import { MachinePageContract } from "@/components/marketing/machine-page-contract";
import { SimplePage } from "@/components/marketing/simple-page";
import { Badge } from "@/components/ui/badge";
import { ROUTES } from "@/config/routes";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "MCP and agent access",
  description:
    "Nudgeio’s direction for MCP and agents: Claude, Cursor, ChatGPT, and internal agents query the Engineering Knowledge Graph and return evidence. Not a claim of a shipping MCP server.",
  path: ROUTES.mcp,
});

export default function Page(): React.ReactElement {
  return (
    <SimplePage
      crumbs={[
        { href: ROUTES.platform, label: "Platform" },
        { href: ROUTES.mcp, label: "MCP / agents" },
      ]}
      eyebrow="Platform"
      title="MCP and agent access"
      description="Agents should retrieve engineering context with provenance - not scrape a dashboard. This page describes product direction."
      related={[
        { href: ROUTES.evidenceFirstAi, label: "Ask Nudgeio" },
        { href: ROUTES.contextGraph, label: "Context Graph" },
      ]}
    >
      <Badge tone="coming">Product direction</Badge>
      <p>
        We do not claim a generally available MCP server on this site. When agents can query the
        graph, answers must still follow the evidence pattern and must not rank individuals.
      </p>
      <MachinePageContract
        what="Agent and MCP access to the Engineering Knowledge Graph."
        who="Platform teams and AI-assisted engineering workflows."
        problem="Agents guess from local files without organizational context."
        how="Tools query canonical graph context and return evidence."
        data="The same graph as the product - not a parallel chatbot memory."
        output="Evidence-backed answers inside agent surfaces."
        availability="Direction. Not shipping as a public MCP server on this site."
        differ="Graph access, not a generic engineering chatbot."
        learnMore="Context Graph and evidence-first AI."
      />
    </SimplePage>
  );
}
