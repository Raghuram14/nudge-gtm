/** Interactive walkthrough - Phase 1 client UI; data via props from server loader. */
"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/cn";
import type { GraphNode, Investigation } from "@/lib/marketing/types";

const STEPS = [
  { id: "metric", label: "Observe", hint: "What changed" },
  { id: "contributors", label: "Drivers", hint: "What moved the number" },
  { id: "graph", label: "Context", hint: "What connects" },
  { id: "evidence", label: "Evidence", hint: "What supports it" },
  { id: "action", label: "Action", hint: "What to do next" },
] as const;

const AUTO_MS = 850;

type InvestigationDemoProps = {
  company: { name: string };
  investigation: Investigation;
  evidenceItems: ReadonlyArray<string>;
  graphNodes: ReadonlyArray<GraphNode>;
  isExample?: boolean;
};

export function InvestigationDemo({
  company,
  investigation,
  evidenceItems,
  graphNodes,
  isExample = true,
}: InvestigationDemoProps): React.ReactElement {
  const [stepIndex, setStepIndex] = useState(-1);
  const [playing, setPlaying] = useState(false);
  const timerRef = useRef<number | null>(null);

  const clearTimer = useCallback(() => {
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const goTo = useCallback(
    (index: number) => {
      clearTimer();
      setPlaying(false);
      setStepIndex(index);
    },
    [clearTimer],
  );

  const start = useCallback(() => {
    clearTimer();
    setStepIndex(0);
    setPlaying(true);
  }, [clearTimer]);

  const reset = useCallback(() => {
    clearTimer();
    setPlaying(false);
    setStepIndex(-1);
  }, [clearTimer]);

  const advance = useCallback(() => {
    setPlaying(false);
    clearTimer();
    setStepIndex((current) => Math.min(current + 1, STEPS.length - 1));
  }, [clearTimer]);

  useEffect(() => {
    const autoPlaying = playing && stepIndex >= 0 && stepIndex < STEPS.length - 1;
    if (!autoPlaying) {
      return;
    }
    timerRef.current = window.setTimeout(() => {
      setStepIndex((current) => Math.min(current + 1, STEPS.length - 1));
    }, AUTO_MS);
    return clearTimer;
  }, [playing, stepIndex, clearTimer]);

  const idle = stepIndex < 0;
  const complete = stepIndex >= STEPS.length - 1;
  const autoPlaying = playing && !idle && !complete;
  const progress = idle ? 0 : ((stepIndex + 1) / STEPS.length) * 100;
  const nextLabel = STEPS[Math.min(stepIndex + 1, STEPS.length - 1)]?.label;

  return (
    <Card as="section" className="overflow-hidden p-0">
      <div className="border-b border-border px-5 py-5 md:px-6">
        <div className="flex flex-wrap items-center gap-2">
          {isExample ? <Badge tone="example">Interactive example</Badge> : null}
          <Badge tone="inferred">{company.name}</Badge>
        </div>
        <h3 className="mt-3 text-lg font-semibold md:text-xl">{investigation.question}</h3>

        <div className="mt-5">
          <div className="h-1.5 overflow-hidden rounded-full bg-border">
            <div
              className="h-full rounded-full bg-accent transition-[width] duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <ol className="mt-3 grid grid-cols-5 gap-1">
            {STEPS.map((step, index) => {
              const active = index === stepIndex;
              const done = index < stepIndex;
              return (
                <li key={step.id}>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    disabled={idle}
                    onClick={() => goTo(index)}
                    className={cn(
                      "h-auto w-full rounded-lg px-1 py-2 text-center hover:translate-y-0",
                      idle && "cursor-default opacity-40",
                      !idle && "hover:bg-accent-muted/60",
                      active && "bg-accent-muted",
                    )}
                  >
                    <span
                      className={cn(
                        "mx-auto mb-1.5 block size-2 rounded-full transition-colors",
                        done || active ? "bg-accent" : "bg-border",
                      )}
                    />
                    <span
                      className={cn(
                        "block text-[10px] font-semibold uppercase tracking-wide md:text-[11px]",
                        active ? "text-accent" : done ? "text-foreground" : "text-muted",
                      )}
                    >
                      {step.label}
                    </span>
                  </Button>
                </li>
              );
            })}
          </ol>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {idle ? (
            <Button onClick={start}>Ask why</Button>
          ) : (
            <>
              {!complete ? (
                <Button size="sm" onClick={advance}>
                  Continue · {nextLabel}
                </Button>
              ) : (
                <Button size="sm" onClick={start}>
                  Replay
                </Button>
              )}
              {autoPlaying ? (
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => {
                    clearTimer();
                    setPlaying(false);
                  }}
                >
                  Pause
                </Button>
              ) : !complete ? (
                <Button size="sm" variant="secondary" onClick={() => setPlaying(true)}>
                  Auto-play
                </Button>
              ) : null}
              <Button size="sm" variant="ghost" onClick={reset}>
                Reset
              </Button>
            </>
          )}
        </div>
      </div>

      <div className="mock-ui min-h-[300px] p-5 md:p-6">
        {idle ? (
          <div className="flex min-h-[260px] flex-col items-center justify-center text-center">
            <p className="max-w-sm text-sm text-mock-muted">
              Press Ask why to walk from the metric to an evidence-backed next step.
            </p>
          </div>
        ) : (
          <div className="grid items-start gap-6 lg:grid-cols-2">
            <div className="space-y-5">
              {stepIndex >= 0 ? (
                <div key={`m-${stepIndex >= 0}`} className="animate-fade-up">
                  <p className="mock-label">Observation</p>
                  <p className="mt-2 text-5xl font-semibold tabular-nums text-mock-amber">
                    {investigation.metric}
                  </p>
                  <p className="mt-2 text-sm text-mock-muted">
                    {investigation.explanation.summary}
                  </p>
                </div>
              ) : null}

              {stepIndex >= 1 ? (
                <div key="drivers" className="animate-fade-up">
                  <p className="mock-label mb-3">Likely contributors</p>
                  <WaterfallAnimated investigation={investigation} active />
                </div>
              ) : null}
            </div>

            <div className="space-y-5">
              {stepIndex >= 2 ? (
                <div key="graph" className="animate-fade-up">
                  <p className="mock-label mb-3">Related entities</p>
                  <ul className="flex flex-wrap gap-2">
                    {graphNodes.map((node) => (
                      <li
                        key={node.id}
                        className="mock-panel mock-mono rounded-full px-3 py-1.5 text-xs text-mock-teal"
                      >
                        {node.label}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {stepIndex >= 3 ? (
                <div key="evidence" className="animate-fade-up">
                  <p className="mock-label mb-3">Supporting evidence</p>
                  <ul className="space-y-2 text-sm">
                    {evidenceItems.map((item) => (
                      <li key={item} className="flex gap-2 text-mock-muted">
                        <span className="text-mock-teal">✓</span>
                        <span className="mock-mono">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 text-xs text-mock-teal">
                    Evidence strength: {investigation.evidenceStrength} ·{" "}
                    {investigation.evidenceCount} signals · {investigation.corroboratingSources}{" "}
                    sources
                  </p>
                </div>
              ) : null}

              {stepIndex >= 4 ? (
                <div key="action" className="animate-fade-up">
                  <div className="mock-panel border-l-2 border-mock-indigo p-4">
                    <p className="mock-label">Suggested action</p>
                    <p className="mt-2 text-sm leading-relaxed text-mock-text">
                      {investigation.action}
                    </p>
                  </div>
                </div>
              ) : null}

              {stepIndex < 2 ? (
                <p className="text-sm text-mock-muted">
                  {stepIndex === 0
                    ? "Continue to see what drove the change."
                    : "Continue to open related context and evidence."}
                </p>
              ) : null}
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}

function WaterfallAnimated({
  investigation,
  active,
}: {
  investigation: Investigation;
  active: boolean;
}): React.ReactElement {
  const maxAbs = Math.max(
    ...investigation.contributors.map((row) => Math.abs(Number.parseFloat(row.delta))),
  );

  return (
    <div className="space-y-3">
      <div className="flex justify-between text-xs text-mock-muted">
        <span>Baseline</span>
        <span className="mock-mono">{investigation.baseline}</span>
      </div>
      {investigation.contributors.map((row, index) => {
        const value = Number.parseFloat(row.delta);
        const positive = value >= 0;
        const width = `${(Math.abs(value) / maxAbs) * 100}%`;
        return (
          <div key={row.label}>
            <div className="mb-1 flex justify-between text-xs">
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
            <div className="h-1.5 overflow-hidden rounded-full bg-mock-panel-elevated">
              <div
                className="h-full rounded-full transition-[width] duration-700 ease-out"
                style={{
                  width: active ? width : "0%",
                  transitionDelay: `${index * 90}ms`,
                  background: positive ? "var(--mock-amber)" : "var(--mock-teal)",
                }}
              />
            </div>
          </div>
        );
      })}
      <div className="flex justify-between border-t border-mock-border pt-2 text-sm font-medium text-mock-text">
        <span>Current</span>
        <span className="mock-mono">{investigation.current}</span>
      </div>
    </div>
  );
}
