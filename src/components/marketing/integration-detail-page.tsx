import { IntegrationLogo } from "@/components/marketing/integration-logo";
import { MachinePageContract } from "@/components/marketing/machine-page-contract";
import { SimplePage } from "@/components/marketing/simple-page";
import { Badge } from "@/components/ui/badge";
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
      related={[
        { href: ROUTES.contextGraph, label: "Context Graph" },
        { href: ROUTES.projectHealth, label: "Project health" },
        { href: ROUTES.trustData, label: "Data handling" },
      ]}
    >
      <div className="flex items-center gap-3">
        <IntegrationLogo slug={integration.slug} name={integration.name} size="lg" />
        <Badge tone={coming ? "coming" : "accent"}>
          {coming ? "Coming soon" : "Available"}
        </Badge>
      </div>
      <h2 className="text-xl font-semibold text-foreground">What connects</h2>
      <p>{integration.name} as a source of engineering context — not as the product itself.</p>
      <h2 className="text-xl font-semibold text-foreground">What data we intend to use</h2>
      <p>{dataUse}</p>
      <h2 className="text-xl font-semibold text-foreground">How it becomes graph context</h2>
      <p>
        Signals are normalized into canonical entities and events, then linked in the Knowledge
        Graph with provenance. The story is relationships, not a webhook dump.
      </p>
      <h2 className="text-xl font-semibold text-foreground">Example questions</h2>
      <ul className="list-disc pl-5">
        {questions.map((q) => (
          <li key={q}>{q}</li>
        ))}
      </ul>
      <h2 className="text-xl font-semibold text-foreground">Example evidence</h2>
      <p>{evidence}</p>
      <h2 className="text-xl font-semibold text-foreground">Security / data handling</h2>
      <p>
        See the data and security trust pages. We do not claim certifications we do not have.
      </p>
      <MachinePageContract
        what={`${integration.name} as a connector into the Engineering Knowledge Graph.`}
        who="Engineering leaders and platform owners evaluating design partnership."
        problem="Work and code context live in separate tools."
        how="Canonical entities and relationships, not a GitHub or Jira tab as the hero."
        data={dataUse}
        output="Graph context for investigations such as sprint risk."
        availability={coming ? "Coming soon." : "Design-partner scope. No production-customer claims."}
        differ="The product is connected context, not a source-specific analytics pack."
        learnMore="Context Graph, Jira/GitHub sibling page, trust/data."
      />
    </SimplePage>
  );
}
