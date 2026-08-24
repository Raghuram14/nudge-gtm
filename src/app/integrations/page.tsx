import type { Metadata } from "next";

import { IntegrationHub } from "@/components/marketing/integration-hub";
import { SimplePage } from "@/components/marketing/simple-page";
import { ROUTES } from "@/config/routes";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Integrations",
  description:
    "Nudgeio connectors by category: source control, project management, CI/CD, meetings, communication, incidents, docs, telemetry, and AI tools. GitHub and Jira are current direction; others coming soon.",
  path: ROUTES.integrations,
});

export default function Page(): React.ReactElement {
  return (
    <SimplePage
      crumbs={[{ href: ROUTES.integrations, label: "Integrations" }]}
      title="Integrations"
      description="Well-known engineering tools connect into one context graph. Logos and names - no long descriptions."
    >
      <IntegrationHub />
    </SimplePage>
  );
}
