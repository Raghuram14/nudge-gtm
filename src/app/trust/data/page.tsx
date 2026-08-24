import type { Metadata } from "next";

import { SimplePage } from "@/components/marketing/simple-page";
import { ROUTES } from "@/config/routes";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Data handling",
  description:
    "How Nudgeio intends to use GitHub and Jira data as graph context: canonical events and entities, not a raw webhook dump as the product.",
  path: ROUTES.trustData,
});

export default function Page(): React.ReactElement {
  return (
    <SimplePage
      crumbs={[
        { href: ROUTES.trust, label: "Trust" },
        { href: ROUTES.trustData, label: "Data" },
      ]}
      title="Data"
      description="Integrations are data sources. The product is connected context."
    >
      <p>
        Intended use in the current slice: GitHub and Jira signals become people, work items, pull
        requests, and related canonical events such as pull_request.merged - with provenance. We do
        not market a webhook firehose. Broader sources are coming soon and are labeled as such.
      </p>
    </SimplePage>
  );
}
