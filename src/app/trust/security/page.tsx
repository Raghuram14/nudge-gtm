import type { Metadata } from "next";

import { SimplePage } from "@/components/marketing/simple-page";
import { ROUTES } from "@/config/routes";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Security",
  description:
    "Nudgeio security intent: least data needed for graph context, isolated tenants, authorisation on sensitive views. No fabricated certifications.",
  path: ROUTES.trustSecurity,
});

export default function Page(): React.ReactElement {
  return (
    <SimplePage
      crumbs={[
        { href: ROUTES.trust, label: "Trust" },
        { href: ROUTES.trustSecurity, label: "Security" },
      ]}
      eyebrow="Trust"
      title="Security"
      description="This page describes how the product is built and what we intend to enforce. It is not an audit letter, and it does not pretend to be one."
    >
      <h2>What we do not claim</h2>
      <p>
        This site makes no SOC 2, ISO 27001, HIPAA, or PCI claims. We are pre-launch. When an
        audit is completed, this page will name the report, its scope, and its date, and you will
        be able to ask for the document. Until then, treat any such claim you see attributed to us
        as wrong.
      </p>

      <h2>Least data for the job</h2>
      <p>
        Connectors collect the engineering context required to build canonical entities and
        relationships &mdash; not a wholesale copy of unrelated content. Narrow scope is a security
        property before it is a privacy one: data never collected cannot be exposed.
      </p>

      <h2>Tenant isolation</h2>
      <p>
        Every customer organisation is a separate tenant, and isolation is enforced in the data
        layer rather than left to application code to remember. Authorisation is relationship-based
        and derived from the canonical state of the organisation, so access follows from who someone
        actually is on a team rather than from a role string checked ad hoc at each call site.
      </p>

      <h2>Provenance as an integrity property</h2>
      <p>
        Ingestion records raw payloads and publishes state changes through a transactional outbox,
        so an event cannot be silently dropped between systems. The same machinery that makes an
        evidence chain inspectable also makes ingestion auditable.
      </p>

      <h2>Reporting a problem</h2>
      <p>
        If you believe you have found a security issue, <a href={ROUTES.contact}>contact us</a>{" "}
        and say so in the message. We would much rather hear about it early.
      </p>
    </SimplePage>
  );
}
