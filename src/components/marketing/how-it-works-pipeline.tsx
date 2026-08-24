"use client";

import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/cn";

const stages = [
  {
    id: "signal",
    title: "Signal",
    text: "A metric or risk moves. That is the starting fact — not a conclusion.",
    artifact: {
      eyebrow: "Metric",
      body: "Cycle time ↑31%",
      meta: "Payments · 30d window",
    },
  },
  {
    id: "evidence",
    title: "Evidence",
    text: "Nudgeio gathers the PRs, tickets, and review events tied to that change.",
    artifact: {
      eyebrow: "Sources",
      body: "PR #4821 · ENG-1932",
      meta: "GitHub · Jira · review events",
    },
  },
  {
    id: "diagnosis",
    title: "Diagnosis",
    text: "Several explanations compete. Each has confidence and supporting or contradicting evidence.",
    artifact: {
      eyebrow: "Primary · 84%",
      body: "Review congestion",
      meta: "3 supporting · 1 contradicting",
    },
  },
  {
    id: "nudge",
    title: "Nudge",
    text: "You get a concrete next step and can track whether the outcome matched the prediction.",
    artifact: {
      eyebrow: "Action",
      body: "Rebalance reviewers",
      meta: "↓ review wait · ↓ cycle time",
    },
  },
] as const;

type HowItWorksPipelineProps = {
  className?: string;
};

export function HowItWorksPipeline({ className }: HowItWorksPipelineProps): React.ReactElement {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(() => (reduce ? stages.length - 1 : 0));

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => {
      setActive((value) => (value + 1) % stages.length);
    }, 2800);
    return () => window.clearInterval(id);
  }, [reduce]);

  return (
    <div className={cn("space-y-6", className)}>
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {stages.map((stage, index) => {
          const isActive = index === active;
          return (
            <motion.article
              key={stage.id}
              className={cn(
                "theater-stage relative overflow-hidden p-4 transition-[border-color] duration-300",
                isActive ? "border-accent/50" : "opacity-80",
              )}
              animate={
                reduce
                  ? undefined
                  : {
                      opacity: isActive ? 1 : 0.72,
                      y: isActive ? 0 : 4,
                    }
              }
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center justify-between gap-2">
                <p className="type-mono text-xs text-accent">
                  {String(index + 1).padStart(2, "0")}
                </p>
                {isActive ? <Badge tone="accent">Active</Badge> : null}
              </div>
              <h3 className="mt-3 text-lg font-semibold text-foreground">{stage.title}</h3>
              <p className="type-caption mt-2 text-text-secondary">{stage.text}</p>
              <div className="mt-4 rounded-md border border-mock-border bg-mock-panel p-3">
                <p className="mock-label">{stage.artifact.eyebrow}</p>
                <p className="mt-1.5 text-sm font-semibold text-mock-text">{stage.artifact.body}</p>
                <p className="type-metadata mt-1 text-mock-muted">{stage.artifact.meta}</p>
                {stage.id === "diagnosis" ? (
                  <div className="confidence-bar mt-3" aria-hidden>
                    <span style={{ width: "84%" }} />
                  </div>
                ) : null}
              </div>
              {index < stages.length - 1 ? (
                <span className="sr-only">then</span>
              ) : null}
            </motion.article>
          );
        })}
      </div>
      <p className="type-body-small max-w-3xl text-center md:text-left">
        Then action closes the loop - and outcome validation confirms whether the diagnosis held.
      </p>
    </div>
  );
}
