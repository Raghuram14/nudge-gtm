import { SectionHeading } from "@/components/marketing/section-heading";

const layers = [
  {
    n: "1",
    title: "Metrics",
    question: "What changed?",
    detail: "Cycle time, deploy frequency, blocked work - entry points, not the full story.",
  },
  {
    n: "2",
    title: "Context",
    question: "What is connected to it?",
    detail: "PRs, issues, services, incidents, and decisions linked across systems.",
  },
  {
    n: "3",
    title: "Reasoning",
    question: "Why did it happen?",
    detail: "Evidence-backed explanations with supporting signals - not isolated numbers.",
  },
] as const;

export function ThreeLayersSection(): React.ReactElement {
  return (
    <div>
      <SectionHeading
        eyebrow="Why dashboards fall short"
        title="Metrics tell you where to look. Context tells you what connects."
        description="Evidence-backed reasoning helps you understand why."
      />
      <ol className="grid items-stretch gap-4 md:grid-cols-3">
        {layers.map((layer, index) => (
          <li
            key={layer.title}
            className="relative flex flex-col rounded-xl border border-border bg-surface p-6"
          >
            <p className="text-xs font-medium uppercase tracking-wide text-accent">
              Layer {layer.n}
            </p>
            <p className="mt-2 text-xl font-semibold">{layer.title}</p>
            <p className="mt-1 text-sm font-medium text-foreground">{layer.question}</p>
            <p className="mt-3 text-sm text-muted">{layer.detail}</p>
            {index < layers.length - 1 ? (
              <span className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-muted md:inline">
                →
              </span>
            ) : null}
          </li>
        ))}
      </ol>
      <p className="mt-6 max-w-3xl text-sm text-muted">
        Nudgeio spans Layer 2 and Layer 3 while still showing the metrics that point you where to
        investigate. The differentiator is the connected reasoning layer underneath the dashboard.
      </p>
    </div>
  );
}
