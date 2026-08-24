import { cn } from "@/lib/cn";

type AnnotatedInsightChartProps = {
  insight: string;
  context: string;
  annotation: string;
  /** Simple sparkline points as SVG path `d` for a polyline, e.g. "0,30 40,28 ..." */
  points: string;
  comparisonLabel?: string;
  className?: string;
};

/**
 * Insight-first visualization: headline understanding first, restrained chart second.
 * Charts must answer a question - never decorative.
 */
export function AnnotatedInsightChart({
  insight,
  context,
  annotation,
  points,
  comparisonLabel = "Last 6 weeks vs prior",
  className,
}: AnnotatedInsightChartProps): React.ReactElement {
  return (
    <figure
      className={cn(
        "rounded-lg border border-border bg-surface-raised p-5",
        className,
      )}
    >
      <figcaption>
        <p className="type-label">Insight</p>
        <p className="type-subsection mt-2 text-foreground">{insight}</p>
        <p className="type-body-small mt-2">{context}</p>
      </figcaption>
      <div className="mt-4 rounded-md border border-border-subtle bg-surface p-3">
        <p className="type-metadata mb-2">{comparisonLabel}</p>
        <svg viewBox="0 0 200 48" className="h-16 w-full" role="img" aria-label={insight}>
          <line x1="0" y1="40" x2="200" y2="40" className="stroke-border" strokeWidth="1" />
          <polyline
            fill="none"
            stroke="var(--accent)"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeLinecap="round"
            points={points}
            className="spark-line"
          />
        </svg>
        <p className="type-caption mt-2 border-l-2 border-accent pl-3 text-foreground">
          {annotation}
        </p>
      </div>
    </figure>
  );
}
