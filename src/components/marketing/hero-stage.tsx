"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/cn";

const phases = [
  {
    id: "signal",
    label: "Signal",
    title: "Cycle time ↑31%",
    detail: "Payments Platform · last 30 days",
    kind: "observed" as const,
    panel: {
      heading: "What changed",
      items: [
        { k: "Metric", v: "Cycle time" },
        { k: "Delta", v: "+31% vs prior month" },
        { k: "Scope", v: "Payments · 14 PRs" },
      ],
    },
  },
  {
    id: "evidence",
    label: "Evidence",
    title: "4 artifacts linked",
    detail: "PR #4821 · ENG-1932 · reviews · CI",
    kind: "observed" as const,
    panel: {
      heading: "Linked sources",
      items: [
        { k: "PR #4821", v: "Waiting 6d · 1 reviewer" },
        { k: "ENG-1932", v: "Scope expanded mid-sprint" },
        { k: "Reviews", v: "Queue depth peaked Tue" },
        { k: "CI", v: "No flaky-test cluster" },
      ],
    },
  },
  {
    id: "diagnosis",
    label: "Diagnosis",
    title: "Review congestion · 84%",
    detail: "Primary hypothesis · inspectable chain",
    kind: "inferred" as const,
    panel: {
      heading: "Ranked hypotheses",
      items: [
        { k: "Review congestion", v: "84% · primary" },
        { k: "Late spec expansion", v: "61% · secondary" },
        { k: "External dependency", v: "38% · weak" },
      ],
    },
  },
  {
    id: "nudge",
    label: "Nudge",
    title: "Rebalance review ownership",
    detail: "Expected: ↓ review wait · ↓ cycle time",
    kind: "nudge" as const,
    panel: {
      heading: "Recommended action",
      items: [
        { k: "Route", v: "Next-best co-owners" },
        { k: "Expect", v: "↓ review wait 30–40%" },
        { k: "Track", v: "Outcome over 2 sprints" },
      ],
    },
  },
] as const;

type HeroStageProps = {
  isExample?: boolean;
  className?: string;
};

export function HeroStage({
  isExample = true,
  className,
}: HeroStageProps): React.ReactElement {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(() => (reduce ? phases.length - 1 : 0));

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => {
      setActive((value) => (value + 1) % phases.length);
    }, 2600);
    return () => window.clearInterval(id);
  }, [reduce]);

  const phase = phases[active] ?? phases[0];

  return (
    <div className={cn("theater-stage overflow-hidden", className)} aria-label="Product example">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-mock-border px-5 py-3">
        <div>
          <p className="mock-label text-mock-teal">Diagnosis flow</p>
          <p className="mt-0.5 text-sm font-medium text-mock-text">Payments cycle time</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {isExample ? <Badge tone="example">Example</Badge> : null}
          <Badge tone="observed">Observed</Badge>
          <Badge tone="inferred">Inferred</Badge>
        </div>
      </div>

      <div className="grid gap-0 lg:grid-cols-[1fr_1.05fr]">
        <div className="space-y-5 border-b border-mock-border p-5 lg:border-b-0 lg:border-r lg:p-6">
          <div>
            <p className="type-label text-mock-muted">Observed fact</p>
            <p className="type-metric mt-2 text-mock-amber">+31%</p>
            <p className="type-caption mt-1 text-mock-muted">vs prior month · not an inference</p>
          </div>

          <ol className="space-y-0" aria-label="Diagnosis phases">
            {phases.map((item, index) => {
              const isActive = index === active;
              const isPast = index < active;
              return (
                <li key={item.id} className="relative pl-8 pb-4 last:pb-0">
                  {index < phases.length - 1 ? (
                    <span
                      className={cn(
                        "absolute left-[11px] top-5 h-[calc(100%-0.5rem)] w-px transition-colors duration-500",
                        isPast || isActive ? "bg-mock-teal/50" : "bg-mock-border",
                      )}
                      aria-hidden
                    />
                  ) : null}
                  <motion.span
                    className={cn(
                      "absolute left-0 top-1 size-6 rounded-full border-2 border-mock-border bg-mock-panel",
                      (isActive || isPast) && "border-mock-teal bg-mock-teal/20",
                    )}
                    animate={
                      isActive && !reduce
                        ? {
                            boxShadow:
                              "0 0 0 4px color-mix(in oklab, var(--mock-teal) 28%, transparent)",
                          }
                        : { boxShadow: "0 0 0 0 transparent" }
                    }
                    transition={{ duration: 0.4 }}
                    aria-hidden
                  />
                  <button
                    type="button"
                    className={cn(
                      "w-full text-left transition-opacity duration-300",
                      isActive ? "opacity-100" : "opacity-45 hover:opacity-80",
                    )}
                    onClick={() => setActive(index)}
                    aria-current={isActive ? "step" : undefined}
                  >
                    <p className="text-sm font-medium text-mock-text">
                      {index + 1}. {item.label}
                    </p>
                    <p className="type-metadata mt-0.5 text-mock-muted">{item.title}</p>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>

        <div className="relative flex min-h-64 flex-col justify-center p-5 lg:min-h-80 lg:p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={phase.id}
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4"
            >
              <div className="mock-panel p-4">
                <div className="flex items-center justify-between gap-2">
                  <p className="mock-label">{phase.label}</p>
                  <Badge
                    tone={
                      phase.kind === "observed"
                        ? "observed"
                        : phase.kind === "inferred"
                          ? "inferred"
                          : "nudge"
                    }
                  >
                    {phase.kind}
                  </Badge>
                </div>
                <p className="mt-3 text-xl font-semibold tracking-tight text-mock-text">
                  {phase.title}
                </p>
                <p className="type-caption mt-2 text-mock-muted">{phase.detail}</p>
                {phase.id === "diagnosis" ? (
                  <div className="confidence-bar mt-4" aria-hidden>
                    <span style={{ width: "84%" }} />
                  </div>
                ) : null}
              </div>

              <div className="mock-panel p-4">
                <p className="mock-label">{phase.panel.heading}</p>
                <ul className="mt-3 space-y-2.5">
                  {phase.panel.items.map((row) => (
                    <li
                      key={row.k}
                      className="flex items-baseline justify-between gap-3 border-b border-mock-border/60 pb-2 last:border-0 last:pb-0"
                    >
                      <span className="text-sm text-mock-text">{row.k}</span>
                      <span className="type-metadata text-right text-mock-muted">{row.v}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
