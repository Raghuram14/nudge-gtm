import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { IntegrationDetailPage } from "@/components/marketing/integration-detail-page";
import { getIntegrationBySlug } from "@/config/integrations";
import { ROUTES } from "@/config/routes";
import { buildPageMetadata } from "@/lib/seo/metadata";

const integration = getIntegrationBySlug("jira");

export const metadata: Metadata = buildPageMetadata({
  title: "Jira integration",
  description:
    "How Nudgeio intends to use Jira as engineering context: work items and sprints as canonical entities - not a Jira dashboard.",
  path: ROUTES.integrationsJira,
});

export default function Page(): React.ReactElement {
  if (!integration) {
    notFound();
  }
  return (
    <IntegrationDetailPage
      integration={integration}
      dataUse="Work items, sprints, and delivery state as canonical entities. We say work item, not “the product is a Jira ticket.”"
      questions={[
        "Why is this sprint at risk?",
        "Which work items are blocked and associated with downstream services?",
        "What connects GitHub and Jira engineering context?",
      ]}
      evidence="Example: three blocked work items coinciding with two downstream services. Illustrative only."
    />
  );
}
