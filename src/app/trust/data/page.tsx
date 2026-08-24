import type { Metadata } from "next";

import { SimplePage } from "@/components/marketing/simple-page";
import { StatusMarker } from "@/components/marketing/status-marker";
import { ROUTES } from "@/config/routes";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Data",
  description:
    "What Nudgeio reads from connected systems, how it becomes canonical entities and events with provenance, and what is deliberately left out.",
  path: ROUTES.trustData,
});

const sources = [
  {
    source: "GitHub",
    state: "live" as const,
    reads: "Pull requests, reviews and review comments, pushes, builds, deployments, and the identities attached to them.",
  },
  {
    source: "Jira",
    state: "building" as const,
    reads: "Work items, sprints, status transitions, and field history such as changes to acceptance criteria.",
  },
  {
    source: "Everything else",
    state: "roadmap" as const,
    reads: "GitLab, Slack, CI/CD, incident tooling, docs, and telemetry are specified but not built. They are labelled as such wherever they appear on this site.",
  },
] as const;

export default function Page(): React.ReactElement {
  return (
    <SimplePage
      crumbs={[
        { href: ROUTES.trust, label: "Trust" },
        { href: ROUTES.trustData, label: "Data" },
      ]}
      eyebrow="Trust"
      title="What we read, and what we leave alone."
      description="Integrations are data sources. The product is the connected context built on top of them - which means we need relationships, not a copy of everything."
    >
      <h2>Sources</h2>
      <ul className="grid gap-px overflow-hidden rounded-lg border border-border bg-border">
        {sources.map((item) => (
          <li key={item.source} className="bg-surface p-5">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <p className="text-sm font-medium text-foreground">{item.source}</p>
              <StatusMarker state={item.state} />
            </div>
            <p className="type-caption mt-2">{item.reads}</p>
          </li>
        ))}
      </ul>

      <h2>What happens to it</h2>
      <p>
        Provider-specific payloads are normalised into <strong>canonical entities</strong> and{" "}
        <strong>canonical events</strong> &mdash; a merged pull request becomes{" "}
        <code>pull_request.merged</code> regardless of which system it came from. The point of
        that indirection is that a person, a service, or a piece of work means the same thing
        across every connected tool, which is the precondition for connecting anything at all.
      </p>
      <p>
        Every relationship carries provenance: which source it came from, when, and by what
        extraction method. This is what makes an evidence chain inspectable rather than asserted,
        and it is why the graph can show you the artifact behind a claim instead of a summary of
        it.
      </p>

      <h2>What we deliberately do not collect</h2>
      <p>
        Connectors request the context needed to build entities and relationships. We are not
        trying to mirror your source control, and we do not market a webhook firehose. Content
        unrelated to engineering context &mdash; private messages, personal calendars, anything
        that would only be useful for monitoring individuals &mdash; is outside the model, not
        merely filtered after collection.
      </p>

      <h2>Ownership</h2>
      <p>
        Your engineering data is yours. Each customer organisation is an isolated tenant, and
        nothing crosses that boundary. We do not pool customer data to build shared models, and we
        will not start doing so quietly &mdash; if that ever becomes part of the product, it will
        be an explicit, opt-in decision you make, not a change buried in a policy update.
      </p>
    </SimplePage>
  );
}
