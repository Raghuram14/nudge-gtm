/** Phase 1 - fragmentation vs connected graph; sources + evidence trail via props. */
"use client";

import {
  AlertTriangle,
  BookOpen,
  Code2,
  GitBranch,
  Layers,
  Rocket,
  Ticket,
} from "lucide-react";

import type { EvidenceRefs, FragmentationSource } from "@/lib/marketing/types";

const sourceIcons = {
  GitHub: Code2,
  Jira: Ticket,
  "CI/CD": Rocket,
  Docs: BookOpen,
  Incidents: AlertTriangle,
  Architecture: Layers,
} as const;

type FragmentationVisualProps = {
  sources: ReadonlyArray<FragmentationSource>;
  evidence: EvidenceRefs;
};

export function FragmentationVisual({
  sources,
  evidence,
}: FragmentationVisualProps): React.ReactElement {
  return (
    <div className="grid items-stretch gap-6 lg:grid-cols-[1fr_auto_1fr]">
      <ul className="grid gap-2">
        {sources.map((source) => {
          const Icon = sourceIcons[source.label as keyof typeof sourceIcons] ?? GitBranch;
          return (
            <li
              key={source.label}
              className="flex items-center gap-3 rounded-lg border border-border bg-surface px-4 py-3"
            >
              <Icon className="size-4 shrink-0 text-muted" strokeWidth={1.75} aria-hidden />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium">{source.label}</p>
                <p className="mock-mono truncate text-xs text-observed">{source.detail}</p>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="hidden flex-col items-center justify-center gap-2 lg:flex" aria-hidden>
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <span key={i} className="h-px w-12 bg-border" />
        ))}
        <span className="text-xs font-medium text-accent">→</span>
      </div>

      <div className="mock-ui flex min-h-72 flex-col justify-between p-6">
        <div>
          <p className="mock-label">Nudgeio context graph</p>
          <p className="mt-2 text-xl font-semibold text-mock-text">One connected story</p>
          <p className="mt-2 text-sm text-mock-muted">
            Evidence from every source - linked, traceable, explainable.
          </p>
        </div>
        <svg viewBox="0 0 280 140" className="my-4 h-auto w-full" aria-hidden>
          <line x1="40" y1="70" x2="120" y2="40" stroke="var(--mock-indigo)" strokeWidth="1.5" />
          <line x1="40" y1="70" x2="120" y2="100" stroke="var(--mock-indigo)" strokeWidth="1.5" />
          <line x1="120" y1="40" x2="200" y2="70" stroke="var(--mock-teal)" strokeWidth="1.5" />
          <line x1="120" y1="100" x2="200" y2="70" stroke="var(--mock-teal)" strokeWidth="1.5" />
          <line x1="200" y1="70" x2="250" y2="70" stroke="var(--mock-amber)" strokeWidth="1.5" />
          {[
            { cx: 40, cy: 70, label: "PR" },
            { cx: 120, cy: 40, label: "Issue" },
            { cx: 120, cy: 100, label: "Deploy" },
            { cx: 200, cy: 70, label: "Service" },
            { cx: 250, cy: 70, label: "Why" },
          ].map((node) => (
            <g key={node.label}>
              <circle
                cx={node.cx}
                cy={node.cy}
                r={16}
                fill="var(--mock-panel-elevated)"
                stroke="var(--mock-teal)"
              />
              <text
                x={node.cx}
                y={node.cy + 4}
                textAnchor="middle"
                className="fill-mock-text text-[9px]"
              >
                {node.label}
              </text>
            </g>
          ))}
        </svg>
        <p className="mock-mono text-xs text-mock-muted">
          {evidence.pr} → {evidence.issue} → {evidence.service} → explanation
        </p>
      </div>
    </div>
  );
}
