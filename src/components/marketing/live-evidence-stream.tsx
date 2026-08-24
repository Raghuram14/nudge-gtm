"use client";

import { useReducedMotion } from "motion/react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/cn";

const streamItems = [
  { id: "1", label: "PR #4821", meta: "observed · GitHub", tone: "observed" as const },
  { id: "2", label: "ENG-1932", meta: "observed · Jira", tone: "observed" as const },
  { id: "3", label: "review wait +4.2h", meta: "inferred · diagnosis", tone: "inferred" as const },
  { id: "4", label: "deploy 8f31", meta: "observed · CI/CD", tone: "observed" as const },
  { id: "5", label: "nudge: rebalance reviewers", meta: "nudge · Payments", tone: "nudge" as const },
  { id: "6", label: "INC-184 linked", meta: "observed · incidents", tone: "observed" as const },
  { id: "7", label: "ADR-032 recalled", meta: "contextual · decisions", tone: "default" as const },
  { id: "8", label: "outcome: review wait ↓39%", meta: "validated · example", tone: "nudge" as const },
] as const;

type LiveEvidenceStreamProps = {
  className?: string;
};

export function LiveEvidenceStream({ className }: LiveEvidenceStreamProps): React.ReactElement {
  const reduce = useReducedMotion();
  const items = [...streamItems, ...streamItems];

  return (
    <section className={cn("border-y border-border bg-surface", className)} aria-label="Example investigation stream">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-3 px-4 pt-5">
        <Badge tone="example">Example</Badge>
        <p className="type-label text-accent">Example investigation stream</p>
        <p className="type-caption">Labeled demo artifacts - not production traffic.</p>
      </div>
      <div className="relative mt-4 overflow-hidden pb-5">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-surface to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-surface to-transparent" />
        <div
          className={cn("marquee-track px-4", reduce && "flex-wrap justify-center")}
          style={reduce ? { animation: "none", width: "100%" } : undefined}
        >
          {(reduce ? streamItems : items).map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="inline-flex shrink-0 items-center gap-3 rounded-md border border-border bg-surface-raised px-3 py-2"
            >
              <Badge tone={item.tone === "default" ? "default" : item.tone}>{item.tone}</Badge>
              <div>
                <p className="type-mono text-sm text-foreground">{item.label}</p>
                <p className="type-caption">{item.meta}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
