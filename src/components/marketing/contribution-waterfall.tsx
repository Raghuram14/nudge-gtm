/** Phase 1 - contributor waterfall table; investigation slice via props. */
import { cn } from "@/lib/cn";
import type { Investigation } from "@/lib/marketing/types";

type ContributionWaterfallProps = {
  investigation: Pick<Investigation, "baseline" | "current" | "contributors">;
  className?: string;
};

export function ContributionWaterfall({
  investigation,
  className,
}: ContributionWaterfallProps): React.ReactElement {
  return (
    <div className={cn("space-y-2 text-sm", className)}>
      <div className="flex justify-between text-mock-muted">
        <span>Baseline</span>
        <span className="mock-mono">{investigation.baseline}</span>
      </div>
      {investigation.contributors.map((row) => {
        const positive = row.delta.startsWith("+");
        return (
          <div key={row.label} className="flex items-center justify-between gap-4">
            <span className="text-mock-muted">{row.label}</span>
            <span
              className={cn(
                "mock-mono font-medium",
                positive ? "text-mock-amber" : "text-mock-teal",
              )}
            >
              {row.delta}
            </span>
          </div>
        );
      })}
      <div className="border-t border-mock-border pt-2">
        <div className="flex justify-between font-medium text-mock-text">
          <span>Current</span>
          <span className="mock-mono">{investigation.current}</span>
        </div>
      </div>
    </div>
  );
}
