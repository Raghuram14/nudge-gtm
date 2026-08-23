import type { Metadata } from "next";

import { ColorNavCard } from "@/components/marketing/color-nav-card";
import { SimplePage } from "@/components/marketing/simple-page";
import { ROUTES } from "@/config/routes";
import { buildPageMetadata } from "@/lib/seo/metadata";

const capabilityMatrix = [
  {
    capability: "Delivery metrics",
    basic: true,
    category: true,
    antarang: true,
  },
  {
    capability: "Trend analysis",
    basic: true,
    category: true,
    antarang: true,
  },
  {
    capability: "Multi-source context",
    basic: "Limited",
    category: true,
    antarang: true,
  },
  {
    capability: "Knowledge graph",
    basic: false,
    category: "Varies",
    antarang: "Core concept",
  },
  {
    capability: "Evidence-linked explanations",
    basic: false,
    category: "Varies",
    antarang: "Core concept",
  },
  {
    capability: "Architecture context",
    basic: "Limited",
    category: "Varies",
    antarang: "Core concept",
  },
  {
    capability: "Decision history",
    basic: false,
    category: "Varies",
    antarang: "Core concept",
  },
  {
    capability: "Why analysis",
    basic: "Limited",
    category: "AI-assisted",
    antarang: "Evidence-first",
  },
  {
    capability: "Agent context",
    basic: false,
    category: "Emerging",
    antarang: "Future direction",
  },
] as const;

function CellValue({ value }: { value: boolean | string }): React.ReactElement {
  if (value === true) {
    return <span className="font-semibold text-observed">✓</span>;
  }
  if (value === false) {
    return <span className="text-muted">—</span>;
  }
  if (value === "Core concept" || value === "Evidence-first") {
    return <span className="font-medium text-accent">{value}</span>;
  }
  if (value === "Future direction") {
    return <span className="font-medium text-[#7c3aed]">{value}</span>;
  }
  if (value === "Limited") {
    return <span className="text-inferred">{value}</span>;
  }
  return <span className="text-reasoning">{value}</span>;
}

export const metadata: Metadata = buildPageMetadata({
  title: "Compare",
  description:
    "Category gaps: disconnected metrics vs connected engineering context and evidence-backed reasoning. Respectful comparison — no unsourced competitor claims.",
  path: ROUTES.compare,
});

export default function Page(): React.ReactElement {
  return (
    <SimplePage
      crumbs={[{ href: ROUTES.compare, label: "Compare" }]}
      title="Compare"
      description="The contrast is between disconnected views and connected context — not surveillance or vanity metrics."
    >
      <div className="mb-8 grid gap-3 sm:grid-cols-3">
        <ColorNavCard href={ROUTES.blog} title="Blog" description="Dated notes" accent="indigo" />
        <ColorNavCard href={ROUTES.learn} title="Learn" description="Explainers" accent="teal" />
        <ColorNavCard
          href={ROUTES.research}
          title="Research"
          description="Notes & pillars"
          accent="amber"
        />
      </div>
      <p className="rounded-xl border border-l-4 border-border border-l-accent bg-accent-muted/50 px-4 py-3 text-sm text-muted">
        Metrics tell you where to look. Context tells you what connects. Evidence-backed reasoning
        helps you understand why. We do not claim competitors lack specific capabilities unless
        verified.
      </p>
      <div className="mt-6 overflow-x-auto rounded-xl border border-border">
        <table className="w-full min-w-[720px] border-collapse text-left text-sm">
          <thead>
            <tr className="bg-accent-muted/60">
              <th className="px-4 py-3 font-semibold text-accent">Capability</th>
              <th className="px-4 py-3 font-semibold text-inferred">Basic metrics</th>
              <th className="px-4 py-3 font-semibold text-reasoning">Engineering intelligence</th>
              <th className="px-4 py-3 font-semibold text-observed">Antarang direction</th>
            </tr>
          </thead>
          <tbody>
            {capabilityMatrix.map((row, index) => (
              <tr
                key={row.capability}
                className={
                  index % 2 === 0
                    ? "border-t border-border bg-surface"
                    : "border-t border-border bg-[color-mix(in_oklab,var(--accent)_4%,white)]"
                }
              >
                <td className="px-4 py-3 font-medium text-foreground">{row.capability}</td>
                <td className="px-4 py-3">
                  <CellValue value={row.basic} />
                </td>
                <td className="px-4 py-3">
                  <CellValue value={row.category} />
                </td>
                <td className="px-4 py-3">
                  <CellValue value={row.antarang} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SimplePage>
  );
}
