import type { Metadata } from "next";

import { SimplePage } from "@/components/marketing/simple-page";
import { ROUTES } from "@/config/routes";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Security",
  description:
    "Antarang security intent for the GTM site and product direction: least data needed for graph context, no fake certifications.",
  path: ROUTES.trustSecurity,
});

export default function Page(): React.ReactElement {
  return (
    <SimplePage
      crumbs={[
        { href: ROUTES.trust, label: "Trust" },
        { href: ROUTES.trustSecurity, label: "Security" },
      ]}
      title="Security"
      description="This page describes intent, not a completed audit letter."
    >
      <p>
        Connectors should collect the engineering context required to build canonical entities and
        relationships — not a wholesale dump of unrelated content. Access to sensitive
        individual-level views in the product requires authorization. This public site does not
        claim SOC 2, ISO 27001, or similar certifications.
      </p>
    </SimplePage>
  );
}
