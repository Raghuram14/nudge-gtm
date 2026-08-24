import { cn } from "@/lib/cn";

import type { OutcomeData } from "./types";

type OutcomeProps = {
  outcome: OutcomeData;
  className?: string;
};

export function Outcome({ outcome, className }: OutcomeProps): React.ReactElement {
  return (
    <article
      className={cn(
        "rounded-lg border border-outcome/35 bg-[color-mix(in_oklab,var(--outcome)_10%,var(--surface))] px-4 py-4",
        className,
      )}
    >
      <p className="type-label text-outcome">
        {outcome.confirmed ? "Diagnosis confirmed" : "Outcome"}
      </p>
      <ol className="mt-3 space-y-0">
        {[outcome.diagnosis, outcome.action, outcome.result].map((step, index) => (
          <li key={step} className="relative pl-6 pb-4 last:pb-0">
            {index < 2 ? (
              <span
                className="absolute left-[7px] top-5 h-[calc(100%-1.25rem)] w-px bg-border"
                aria-hidden
              />
            ) : null}
            <span
              className="absolute left-0 top-1.5 size-3.5 rounded-full border-2 border-outcome bg-surface"
              aria-hidden
            />
            <p className="text-sm text-foreground">{step}</p>
          </li>
        ))}
      </ol>
    </article>
  );
}
