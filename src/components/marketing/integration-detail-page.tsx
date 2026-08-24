import Link from "next/link";

import { IntegrationLogo } from "@/components/marketing/integration-logo";
import { MachinePageContract } from "@/components/marketing/machine-page-contract";
import { SimplePage } from "@/components/marketing/simple-page";
import { StatusMarker } from "@/components/marketing/status-marker";
import type { IntegrationRecord } from "@/config/integrations";
import { integrationStatus } from "@/config/integrations";
import { ROUTES } from "@/config/routes";

export function IntegrationDetailPage({
  integration,
  dataUse,
  questions,
  evidence,
}: {
  integration: IntegrationRecord;
  dataUse: string;
  questions: ReadonlyArray<string>;
  evidence: string;
}): React.ReactElement {
  const coming = integration.status === integrationStatus.comingSoon;

  return (
    <SimplePage
      crumbs={[
        { href: ROUTES.integrations, label: "Integrations" },
        { href: integration.href, label: integration.name },
      ]}
      eyebrow="Integrations"
      title={`${integration.name} connector`}
      description={integration.summary}
      heroAside={
        <div className="flex items-center gap-4">
          <IntegrationLogo slug={integration.slug} name={integration.name} size="lg" />
          <div>
            <StatusMarker state={coming ? "roadmap" : "live"} />
            <p className="type-caption mt-1">
              {coming
                ? "Specified, not yet built."
                : "Ingesting today for design partners."}
            </p>
          </div>
        </div>
      }
      related={[
        { href: ROUTES.contextGraph, label: "Context Graph" },
        { href: ROUTES.projectHealth, label: "Project health" },
        { href: ROUTES.trustData, label: "Data handling" },
      ]}
    >
      <h2>What connects</h2>
      <p>
        {integration.name} as a source of engineering context &mdash; not as the product itself.
        The connector is an input; the value is in what the graph does once the data is joined to
        everything else.
      </p>

      <h2>What data we intend to use</h2>
      <p>{dataUse}</p>

      <h2>How it becomes graph context</h2>
      <p>
        Signals are normalised into provider-independent canonical entities and events, then
        linked in the knowledge graph with provenance. The story is relationships, not a webhook
        dump.
      </p>

      <h2>Questions it helps answer</h2>
      <ul className="grid gap-px overflow-hidden rounded-lg border border-border bg-border">
        {questions.map((question) => (
          <li key={question} className="bg-surface px-5 py-4 text-sm text-foreground">
            {question}
          </li>
        ))}
      </ul>

      <h2>Example evidence</h2>
      <p>{evidence}</p>

      <h2>Security and data handling</h2>
      <p>
        Connectors read the context needed to build entities and relationships, not a wholesale
        copy of unrelated content. See <Link href={ROUTES.trustData}>data handling</Link> and{" "}
        <Link href={ROUTES.trustSecurity}>security</Link>. We claim no certifications we do not
        hold.
      </p>

      <MachinePageContract
        what={`${integration.name} as a connector into the Engineering Knowledge Graph.`}
        who="Engineering leaders and platform owners evaluating design partnership."
        problem="Work and code context live in separate tools with no shared definition of a person, a service, or a piece of work."
        how="Canonical entities and relationships, not a source-specific analytics tab."
        data={dataUse}
        output="Graph context for investigations such as sprint risk."
        availability={
          coming
            ? "Coming soon. Specified but not built."
            : "Design-partner scope. No production-customer claims."
        }
        differ="The product is connected context, not a source-specific analytics pack."
        learnMore="Context Graph, the sibling connector page, and trust/data."
      />
    </SimplePage>
  );
}
