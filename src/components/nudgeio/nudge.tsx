import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";

import type { NudgeData } from "./types";

type NudgeProps = {
  nudge: NudgeData;
  onApply?: () => void;
  applied?: boolean;
  loading?: boolean;
  className?: string;
};

export function Nudge({
  nudge,
  onApply,
  applied,
  loading,
  className,
}: NudgeProps): React.ReactElement {
  return (
    <article
      className={cn(
        "rounded-lg border border-nudge/35 bg-[color-mix(in_oklab,var(--nudge)_8%,var(--surface))] px-4 py-4",
        applied && "border-success/40 bg-[color-mix(in_oklab,var(--success)_10%,var(--surface))]",
        className,
      )}
    >
      <p className="type-label text-nudge">{applied ? "Nudge applied" : "Nudge"}</p>
      <h3 className="type-subsection mt-2 text-foreground">{nudge.title}</h3>
      <p className="type-body-small mt-2">{nudge.why}</p>
      <p className="mt-3 text-sm font-medium text-foreground">{nudge.recommendedAction}</p>
      <ul className="mt-3 space-y-1">
        {nudge.expectedImpact.map((item) => (
          <li key={item} className="type-mono text-xs text-success">
            {item}
          </li>
        ))}
      </ul>
      {onApply && !applied ? (
        <Button className="mt-4" onClick={onApply} loading={loading} size="sm">
          Apply simulated action
        </Button>
      ) : null}
    </article>
  );
}
