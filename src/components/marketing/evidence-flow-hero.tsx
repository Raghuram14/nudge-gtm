/** Phase 1 - hero mock card; receives evidence + investigation via props (no config imports). */
"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { EvidenceRefs, Investigation } from "@/lib/marketing/types";

const flowNodes = [
  { id: "pr", label: "PR", x: 48, fill: "var(--mock-teal)" },
  { id: "issue", label: "Issue", x: 128, fill: "var(--mock-indigo)" },
  { id: "svc", label: "Service", x: 208, fill: "var(--reasoning)" },
  { id: "why", label: "Why", x: 288, fill: "var(--mock-amber)" },
] as const;

const sparkLine = "8,52 40,46 72,48 104,36 136,40 168,24 200,28 232,14 264,18 296,8";
const sparkArea = `${sparkLine} 296,60 8,60`;

type EvidenceFlowHeroProps = {
  company: { name: string };
  evidence: EvidenceRefs;
  investigation: Pick<Investigation, "explanation" | "evidenceCount">;
  isExample?: boolean;
};

export function EvidenceFlowHero({
  company,
  evidence,
  investigation,
  isExample = true,
}: EvidenceFlowHeroProps): React.ReactElement {
  const rootRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  const evidenceChips = useMemo(
    () => [
      { id: evidence.pr, color: "var(--mock-teal)" },
      { id: evidence.issue, color: "var(--mock-indigo)" },
      { id: evidence.incident, color: "var(--mock-amber)" },
      { id: evidence.service, color: "var(--reasoning)" },
    ],
    [evidence],
  );

  useEffect(() => {
    const root = rootRef.current;
    if (!root) {
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry?.isIntersecting ?? false);
      },
      { threshold: 0.2 },
    );
    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={rootRef} className="h-full">
      <Card className="mock-ui relative flex min-h-[420px] flex-col overflow-hidden p-0">
        <div className="relative flex items-center justify-between gap-3 border-b border-mock-border px-5 py-3">
          <div className="flex items-center gap-2">
            <span className="size-2 animate-pulse rounded-full bg-mock-teal" />
            <p className="text-sm font-medium text-mock-text">{company.name}</p>
          </div>
          {isExample ? <Badge tone="example">Example</Badge> : null}
        </div>

        <div className="relative flex flex-1 flex-col gap-5 px-5 py-5">
          <div className="grid gap-4 sm:grid-cols-[1fr_1.2fr] sm:items-end">
            <div>
              <p className="mock-label">Cycle time · Payments</p>
              <p
                className={`mt-1 text-6xl font-semibold tabular-nums tracking-tight text-mock-amber transition-all duration-700 ${visible ? "scale-100 opacity-100" : "scale-95 opacity-40"}`}
              >
                +31%
              </p>
              <p className="mt-2 text-sm text-mock-muted">
                <span className="text-mock-text">6.4d</span>
                <span className="mx-1.5 text-mock-border">→</span>
                was 4.9d
              </p>
            </div>
            <svg viewBox="0 0 304 64" className="h-16 w-full" aria-hidden>
              <defs>
                <linearGradient id="hero-spark-fill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--mock-amber)" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="var(--mock-amber)" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="hero-spark-stroke" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="var(--mock-teal)" />
                  <stop offset="50%" stopColor="var(--mock-amber)" />
                  <stop offset="100%" stopColor="var(--risk-high)" />
                </linearGradient>
              </defs>
              <polygon
                points={sparkArea}
                fill="url(#hero-spark-fill)"
                className={visible ? "opacity-100" : "opacity-0"}
              />
              <polyline
                fill="none"
                stroke="url(#hero-spark-stroke)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                points={sparkLine}
                className={visible ? "spark-line" : "opacity-30"}
              />
              <circle
                cx="296"
                cy="8"
                r="4"
                fill="var(--risk-high)"
                className={visible ? "spark-dot" : "opacity-0"}
              />
            </svg>
          </div>

          <div>
            <p className="mock-label mb-3">Evidence → context → answer</p>
            <svg
              viewBox="0 0 336 88"
              className="mx-auto h-auto w-full max-w-md"
              role="img"
              aria-label="Example flow from pull request to explanation"
            >
              {flowNodes.slice(0, -1).map((node, index) => {
                const next = flowNodes[index + 1];
                if (!next) {
                  return null;
                }
                return (
                  <line
                    key={`${node.id}-line`}
                    x1={node.x + 24}
                    y1={40}
                    x2={next.x - 24}
                    y2={40}
                    stroke={node.fill}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    className={visible ? "flow-line" : "opacity-20"}
                    style={{ animationDelay: `${index * 140}ms` }}
                  />
                );
              })}
              {flowNodes.map((node, index) => {
                const isWhy = node.id === "why";
                return (
                  <g key={node.id}>
                    <circle
                      cx={node.x}
                      cy={40}
                      r={isWhy ? 24 : 22}
                      fill={isWhy ? node.fill : "var(--mock-panel-elevated)"}
                      stroke={node.fill}
                      strokeWidth="2.5"
                      className={`transition-all duration-500 ${visible ? "opacity-100" : "opacity-25"}`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    />
                    <text
                      x={node.x}
                      y={44}
                      textAnchor="middle"
                      className={`text-[11px] font-semibold ${isWhy ? "fill-[var(--mock-bg)]" : "fill-mock-text"}`}
                    >
                      {node.label}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          <div
            className={`mock-panel border-l-2 border-mock-amber p-4 transition-all duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}
          >
            <p className="text-sm font-medium text-mock-text">{investigation.explanation.summary}</p>
            <div className="mt-3 flex flex-wrap gap-3 text-xs">
              <span className="rounded-full bg-mock-amber/15 px-2.5 py-1 font-medium text-mock-amber">
                Review wait ×2.1
              </span>
              <span className="rounded-full bg-mock-indigo/20 px-2.5 py-1 font-medium text-mock-indigo">
                7 review rounds
              </span>
              <span className="rounded-full bg-mock-teal/15 px-2.5 py-1 font-medium text-mock-teal">
                {investigation.evidenceCount} events
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {evidenceChips.map((chip) => (
              <span
                key={chip.id}
                className="mock-mono rounded-full border px-3 py-1 text-xs"
                style={{
                  borderColor: `color-mix(in oklab, ${chip.color} 45%, transparent)`,
                  color: chip.color,
                  background: `color-mix(in oklab, ${chip.color} 12%, transparent)`,
                }}
              >
                {chip.id}
              </span>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}
