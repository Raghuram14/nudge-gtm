import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { IntegrationDetailPage } from "@/components/marketing/integration-detail-page";
import { getIntegrationBySlug } from "@/config/integrations";
import { ROUTES } from "@/config/routes";
import { buildPageMetadata } from "@/lib/seo/metadata";

const integration = getIntegrationBySlug("github");

export const metadata: Metadata = buildPageMetadata({
  title: "GitHub integration",
  description:
    "How Antarang intends to use GitHub as engineering context: pull requests, reviews, and identity — design-partner scope, not GitHub analytics.",
  path: ROUTES.integrationsGithub,
});

export default function Page(): React.ReactElement {
  if (!integration) {
    notFound();
  }
  return (
    <IntegrationDetailPage
      integration={integration}
      dataUse="Repositories, pull requests, reviews, and resolved identity as graph entities. Not a claim of ingesting every GitHub API surface."
      questions={[
        "Which pull requests implement this work item?",
        "Which reviews are associated with sprint risk?",
        "How does GitHub and Jira engineering context connect?",
      ]}
      evidence="Example: a work item implemented_by a pull request that triggers a build. Labeled Example when shown as mock data."
    />
  );
}
