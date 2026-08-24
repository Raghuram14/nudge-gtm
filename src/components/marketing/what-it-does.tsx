import { cn } from "@/lib/cn";

const steps = [
  {
    n: "01",
    title: "Connect work systems",
    text: "Start with GitHub and Jira. Nudgeio reads commits, PRs, reviews, tickets, and CI events — the trail your team already leaves.",
  },
  {
    n: "02",
    title: "Diagnose with evidence",
    text: "When a metric moves, you get ranked hypotheses and the artifacts behind each claim. Facts stay separate from inferences.",
  },
  {
    n: "03",
    title: "Nudge, then verify",
    text: "Every diagnosis ships with a concrete recommendation. After you act, Nudgeio tracks whether the outcome matched the prediction.",
  },
] as const;

type WhatItDoesProps = {
  className?: string;
};

export function WhatItDoes({ className }: WhatItDoesProps): React.ReactElement {
  return (
    <ol className={cn("grid gap-4 md:grid-cols-3", className)}>
      {steps.map((step) => (
        <li
          key={step.n}
          className="relative overflow-hidden rounded-xl border border-border bg-surface p-5 shadow-[0_8px_28px_color-mix(in_oklab,black_4%,transparent)]"
        >
          <span
            className="absolute inset-y-0 left-0 w-1 bg-accent"
            aria-hidden
          />
          <p className="pl-2 text-xs font-semibold tracking-[0.08em] text-accent uppercase">
            {step.n}
          </p>
          <h3 className="type-subsection mt-3 pl-2 text-foreground">{step.title}</h3>
          <p className="type-body-small mt-2 pl-2">{step.text}</p>
        </li>
      ))}
    </ol>
  );
}
