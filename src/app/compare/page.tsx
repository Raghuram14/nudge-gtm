import type { Metadata } from "next";

import { ResourceNav } from "@/components/marketing/resource-nav";
import { SimplePage } from "@/components/marketing/simple-page";
import { ROUTES } from "@/config/routes";
import { buildPageMetadata } from "@/lib/seo/metadata";

const capabilityMatrix = [
  { capability: "Delivery metrics", basic: true, category: true, nudgeio: true },
  { capability: "Trend analysis", basic: true, category: true, nudgeio: true },
  { capability: "Multi-source context", basic: "Limited", category: true, nudgeio: true },
  { capability: "Knowledge graph", basic: false, category: "Varies", nudgeio: "Core concept" },
  {
    capability: "Evidence-linked explanations",
    basic: false,
    category: "Varies",
    nudgeio: "Core concept",
  },
  { capability: "Architecture context", basic: "Limited", category: "Varies", nudgeio: "Core concept" },
  { capability: "Decision history", basic: false, category: "Varies", nudgeio: "Core concept" },
  { capability: "Why analysis", basic: "Limited", category: "AI-assisted", nudgeio: "Evidence-first" },
  {
    capability: "Agent context",
    basic: false,
    category: "Emerging",
    nudgeio: "Future direction",
  },
] as const;

function CellValue({ value }: { value: boolean | string }): React.ReactElement {
  if (value === true) {
    return (
      <span className="text-success">
        <span aria-hidden>&#10003;</span>
        <span className="sr-only">Yes</span>
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="text-text-tertiary">
        <span aria-hidden>&mdash;</span>
        <span className="sr-only">No</span>
      </span>
    );
  }
  if (value === "Core concept" || value === "Evidence-first") {
    return <span className="font-medium text-foreground">{value}</span>;
  }
  return <span className="text-text-secondary">{value}</span>;
}

export const metadata: Metadata = buildPageMetadata({
  title: "Compare",
  description:
    "Category gaps: disconnected metrics vs connected engineering context and evidence-backed reasoning. Respectful comparison - no unsourced competitor claims.",
  path: ROUTES.compare,
});

export default function Page(): React.ReactElement {
  return (
    <SimplePage
      crumbs={[{ href: ROUTES.compare, label: "Compare" }]}
      eyebrow="Category"
      title="Compare"
      description="The contrast is between disconnected views and connected context - not surveillance or vanity metrics."
      width="wide"
    >
      <p className="border-l-2 border-accent pl-5">
        Metrics tell you where to look. Context tells you what connects. Evidence-backed reasoning
        helps you understand why. We do not claim a competitor lacks a capability unless we have
        verified it.
      </p>

      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full min-w-[720px] border-collapse text-left text-sm">
          <caption className="sr-only">
            Capability comparison across basic metrics tools, engineering intelligence platforms,
            and the Nudgeio direction.
          </caption>
          <thead>
            <tr className="border-b border-border bg-surface-elevated">
              <th scope="col" className="type-label px-5 py-4">
                Capability
              </th>
              <th scope="col" className="type-label px-5 py-4">
                Basic metrics
              </th>
              <th scope="col" className="type-label px-5 py-4">
                Engineering intelligence
              </th>
              <th scope="col" className="type-label px-5 py-4 text-foreground">
                Nudgeio direction
              </th>
            </tr>
          </thead>
          <tbody>
            {capabilityMatrix.map((row) => (
              <tr key={row.capability} className="border-t border-border-subtle bg-surface">
                <th scope="row" className="px-5 py-4 text-left font-medium text-foreground">
                  {row.capability}
                </th>
                <td className="px-5 py-4">
                  <CellValue value={row.basic} />
                </td>
                <td className="px-5 py-4">
                  <CellValue value={row.category} />
                </td>
                <td className="px-5 py-4">
                  <CellValue value={row.nudgeio} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="type-caption">
        &ldquo;Core concept&rdquo; and &ldquo;Future direction&rdquo; describe intent, not shipped
        capability. See the build status on the{" "}
        <a href={`${ROUTES.home}#build-status`}>homepage</a> for what is actually running.
      </p>

      <ResourceNav current={ROUTES.compare} className="mt-4" />
    </SimplePage>
  );
}
