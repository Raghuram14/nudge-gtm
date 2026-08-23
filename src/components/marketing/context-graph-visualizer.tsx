/** Phase 1 — presentational; graph layout arrives via props from `getHomeDemoData()`. */
"use client";

import { useMemo, useState } from "react";

import type {
  ContextGraphLayout,
  ContextGraphLayoutNode,
  ContextGraphNodeTone,
} from "@/lib/marketing/types";

const NODE_W = 108;
const NODE_H = 36;

const toneColors: Record<
  ContextGraphNodeTone,
  { fill: string; stroke: string; text: string; soft: string }
> = {
  indigo: {
    fill: "color-mix(in oklab, var(--accent) 18%, white)",
    stroke: "var(--accent)",
    text: "var(--accent)",
    soft: "color-mix(in oklab, var(--accent) 35%, transparent)",
  },
  teal: {
    fill: "color-mix(in oklab, var(--observed) 16%, white)",
    stroke: "var(--observed)",
    text: "var(--observed)",
    soft: "color-mix(in oklab, var(--observed) 40%, transparent)",
  },
  amber: {
    fill: "color-mix(in oklab, var(--inferred) 18%, white)",
    stroke: "var(--inferred)",
    text: "#b8860b",
    soft: "color-mix(in oklab, var(--inferred) 45%, transparent)",
  },
  blue: {
    fill: "color-mix(in oklab, var(--reasoning) 16%, white)",
    stroke: "var(--reasoning)",
    text: "var(--reasoning)",
    soft: "color-mix(in oklab, var(--reasoning) 40%, transparent)",
  },
  coral: {
    fill: "color-mix(in oklab, var(--risk-high) 14%, white)",
    stroke: "var(--risk-high)",
    text: "var(--risk-high)",
    soft: "color-mix(in oklab, var(--risk-high) 40%, transparent)",
  },
  violet: {
    fill: "#f3e8ff",
    stroke: "#8b5cf6",
    text: "#7c3aed",
    soft: "color-mix(in oklab, #8b5cf6 40%, transparent)",
  },
};

function nodeById(
  nodes: ReadonlyArray<ContextGraphLayoutNode>,
  id: string,
): ContextGraphLayoutNode | undefined {
  return nodes.find((node) => node.id === id);
}

function center(node: ContextGraphLayoutNode): { x: number; y: number } {
  return { x: node.x + NODE_W / 2, y: node.y + NODE_H / 2 };
}

type ContextGraphVisualizerProps = {
  layout: ContextGraphLayout;
};

export function ContextGraphVisualizer({
  layout,
}: ContextGraphVisualizerProps): React.ReactElement {
  const { nodes, edges } = layout;
  const [active, setActive] = useState<string | null>(null);
  const activeEdge = useMemo(
    () => edges.find((edge) => edge.from === active || edge.to === active),
    [active, edges],
  );

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface p-4 md:p-6">
      <svg
        role="img"
        aria-labelledby="graph-title graph-desc"
        viewBox="0 0 924 280"
        preserveAspectRatio="xMidYMid meet"
        className="mx-auto block h-auto w-full max-w-full"
      >
        <title id="graph-title">How engineering work connects</title>
        <desc id="graph-desc">
          People, projects, work, reviews, builds, and services in one picture.
        </desc>
        <defs>
          {nodes.map((node) => {
            const colors = toneColors[node.tone];
            return (
              <linearGradient
                key={`grad-${node.id}`}
                id={`edge-grad-${node.id}`}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor={colors.stroke} stopOpacity="0.85" />
                <stop offset="100%" stopColor={colors.stroke} stopOpacity="0.35" />
              </linearGradient>
            );
          })}
          <filter id="node-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.12" />
          </filter>
        </defs>

        {edges.map((edge) => {
          const from = nodeById(nodes, edge.from);
          const to = nodeById(nodes, edge.to);
          if (!from || !to) {
            return null;
          }
          const fromCenter = center(from);
          const toCenter = center(to);
          const lit = active === edge.from || active === edge.to;
          const fromTone = toneColors[from.tone];
          const toTone = toneColors[to.tone];
          return (
            <g key={`${edge.from}-${edge.to}`}>
              <line
                x1={fromCenter.x}
                y1={fromCenter.y}
                x2={toCenter.x}
                y2={toCenter.y}
                stroke={lit ? fromTone.stroke : fromTone.soft}
                strokeWidth={lit ? 3 : 2}
                strokeLinecap="round"
                opacity={active && !lit ? 0.25 : 1}
              />
              <circle
                cx={(fromCenter.x + toCenter.x) / 2}
                cy={(fromCenter.y + toCenter.y) / 2}
                r={lit ? 4 : 3}
                fill={lit ? toTone.stroke : fromTone.stroke}
                opacity={active && !lit ? 0.25 : 0.9}
              />
            </g>
          );
        })}

        {nodes.map((node) => {
          const selected = active === node.id;
          const colors = toneColors[node.tone];
          const dimmed = Boolean(active && !selected);
          return (
            <g
              key={node.id}
              opacity={dimmed ? 0.35 : 1}
              style={{ transition: "opacity 0.2s ease" }}
            >
              <rect
                x={node.x}
                y={node.y}
                width={NODE_W}
                height={NODE_H}
                rx={10}
                tabIndex={0}
                role="button"
                aria-label={node.label}
                fill={selected ? colors.stroke : colors.fill}
                stroke={colors.stroke}
                strokeWidth={selected ? 2.5 : 1.75}
                filter="url(#node-shadow)"
                onFocus={() => setActive(node.id)}
                onBlur={() => setActive(null)}
                onMouseEnter={() => setActive(node.id)}
                onMouseLeave={() => setActive(null)}
                className="cursor-pointer"
              />
              <text
                x={node.x + NODE_W / 2}
                y={node.y + NODE_H / 2 + 4}
                textAnchor="middle"
                fill={selected ? "#ffffff" : colors.text}
                className="pointer-events-none text-[11px] font-semibold"
              >
                {node.label}
              </text>
            </g>
          );
        })}
      </svg>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs">
        {(
          [
            ["People", "indigo"],
            ["Work", "blue"],
            ["Code", "teal"],
            ["Delivery", "coral"],
            ["Signals", "amber"],
          ] as const
        ).map(([label, tone]) => (
          <span key={label} className="inline-flex items-center gap-1.5 text-muted">
            <span
              className="size-2.5 rounded-full"
              style={{ background: toneColors[tone].stroke }}
            />
            {label}
          </span>
        ))}
      </div>

      <p className="mt-3 text-center text-sm text-muted">
        {activeEdge
          ? `${nodeById(nodes, activeEdge.from)?.label ?? ""} → ${nodeById(nodes, activeEdge.to)?.label ?? ""}`
          : "Hover a box to see how work connects."}
      </p>
    </div>
  );
}
