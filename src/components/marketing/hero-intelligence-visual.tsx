"use client";

import { useEffect, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/cn";

const stages = [
  { id: "signal", label: "Signal detected", detail: "Cycle time ↑31%" },
  { id: "investigate", label: "Nudgeio investigates", detail: "Linking events across systems" },
  { id: "evidence", label: "Evidence collected", detail: "PR · Jira · review · CI" },
  { id: "hypotheses", label: "Hypotheses ranked", detail: "Review congestion · 84%" },
  { id: "nudge", label: "Nudge generated", detail: "Rebalance review ownership" },
] as const;

type HeroIntelligenceVisualProps = {
  isExample?: boolean;
  className?: string;
};

export function HeroIntelligenceVisual({
  isExample = true,
  className,
}: HeroIntelligenceVisualProps): React.ReactElement {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;
    const id = window.setInterval(() => {
      setActive((value) => (value + 1) % stages.length);
    }, 1600);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className={cn("mock-ui relative overflow-hidden p-5 md:p-6", className)}>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
        <div>
          <p className="mock-label">Live diagnosis</p>
          <p className="mt-1 text-sm font-medium text-mock-text">Payments cycle time</p>
        </div>
        {isExample ? <Badge tone="example">Example</Badge> : null}
      </div>

      <p className="type-metric text-mock-amber">+31%</p>
      <p className="type-caption mt-1 text-mock-muted">vs prior 30 days · observed</p>

      <ol className="mt-6 space-y-0">
        {stages.map((stage, index) => {
          const isActive = index === active;
          const isPast = index < active;
          return (
            <li key={stage.id} className="relative pl-8 pb-5 last:pb-0">
              {index < stages.length - 1 ? (
                <span
                  className={cn(
                    "absolute left-[11px] top-5 h-[calc(100%-0.5rem)] w-px",
                    isPast || isActive ? "bg-mock-teal/60" : "bg-mock-border",
                  )}
                  aria-hidden
                />
              ) : null}
              <span
                className={cn(
                  "absolute left-0 top-1 size-6 rounded-full border-2 border-mock-border bg-mock-panel transition-[background-color,border-color] duration-[var(--motion-narrative)]",
                  (isActive || isPast) && "border-mock-teal bg-mock-teal/20",
                  isActive &&
                    "shadow-[0_0_0_4px_color-mix(in_oklab,var(--mock-teal)_25%,transparent)]",
                )}
                aria-hidden
              />
              <div
                className={cn(
                  "rounded-md px-2 py-1 transition-opacity duration-[var(--motion-ui)]",
                  isActive ? "opacity-100" : "opacity-55",
                )}
              >
                <p className="text-sm font-medium text-mock-text">{stage.label}</p>
                <p className="type-metadata mt-0.5 text-mock-muted">{stage.detail}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
