"use client";

import { useCallback, useMemo, useState } from "react";

import {
  Evidence,
  type EvidenceArtifact,
  EvidenceDrawer,
  Hypothesis,
  type HypothesisData,
  Nudge,
  type NudgeData,
  Outcome,
  type OutcomeData,
  Signal,
} from "@/components/nudgeio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";

type Step = "signal" | "hypotheses" | "evidence" | "nudge" | "outcome";

const hypotheses: ReadonlyArray<HypothesisData> = [
  {
    id: "h1",
    rank: "primary",
    title: "Review congestion",
    confidence: 84,
    supportingCount: 3,
    contradictingCount: 1,
    summary: "Review wait accounts for most of the cycle-time increase.",
  },
  {
    id: "h2",
    rank: "secondary",
    title: "Late spec expansion",
    confidence: 61,
    supportingCount: 2,
    contradictingCount: 2,
    summary: "Scope grew after sprint commit on a subset of PRs.",
  },
  {
    id: "h3",
    rank: "weak",
    title: "External dependency blockage",
    confidence: 38,
    supportingCount: 1,
    contradictingCount: 3,
    summary: "Ledger migration appears in the chain but is not the primary driver.",
  },
];

const artifactsByHypothesis: Record<string, ReadonlyArray<EvidenceArtifact>> = {
  h1: [
    {
      id: "e1",
      title: "PR #4821",
      summary: "Review latency increased 3.4h on payments-api boundary changes.",
      source: "GitHub",
      artifactType: "Pull request",
      timestamp: "2 hours ago",
      relationship: "supports",
      extractionMethod: "PR timeline + review events",
      confidence: 91,
      relatedClaim: "Review congestion",
    },
    {
      id: "e2",
      title: "ENG-1932",
      summary: "Jira issue shows repeated handoffs waiting on the same two reviewers.",
      source: "Jira",
      artifactType: "Work item",
      timestamp: "1 day ago",
      relationship: "supports",
      extractionMethod: "Status transition analysis",
      confidence: 78,
      relatedClaim: "Review congestion",
    },
    {
      id: "e3",
      title: "Slack thread",
      summary: "Team thread notes review queue backlog during the same window.",
      source: "Slack",
      artifactType: "Message thread",
      timestamp: "3 days ago",
      relationship: "supports",
      extractionMethod: "Thread linkage (example)",
      confidence: 64,
      relatedClaim: "Review congestion",
    },
    {
      id: "e4",
      title: "CI failure cluster",
      summary: "Build failures rose slightly but do not explain the wait distribution.",
      source: "CI/CD",
      artifactType: "Build events",
      timestamp: "4 days ago",
      relationship: "contradicts",
      extractionMethod: "Failure rate correlation",
      confidence: 52,
      relatedClaim: "Review congestion",
    },
  ],
  h2: [
    {
      id: "e5",
      title: "ENG-1901",
      summary: "Acceptance criteria expanded mid-sprint on checkout flow.",
      source: "Jira",
      artifactType: "Work item",
      timestamp: "5 days ago",
      relationship: "supports",
      extractionMethod: "Description diff analysis",
      confidence: 70,
      relatedClaim: "Late spec expansion",
    },
  ],
  h3: [
    {
      id: "e6",
      title: "ADR-032",
      summary: "Ledger migration decision constrained integration changes.",
      source: "Docs",
      artifactType: "Architecture decision",
      timestamp: "2 weeks ago",
      relationship: "contextual",
      extractionMethod: "Decision archive link",
      confidence: 60,
      relatedClaim: "External dependency blockage",
    },
  ],
};

const nudgeData: NudgeData = {
  title: "Review congestion is driving the cycle-time increase.",
  why: "Primary hypothesis at 84% confidence with three supporting artifacts.",
  recommendedAction: "Rebalance review ownership for Payments.",
  expectedImpact: ["↓ review wait", "↓ cycle time"],
};

const outcomeData: OutcomeData = {
  diagnosis: "Review congestion diagnosed",
  action: "Reviewer ownership rebalanced",
  result: "Review wait ↓39% over 3 sprints",
  confirmed: true,
};

type InvestigationExperienceProps = {
  companyName?: string;
  isExample?: boolean;
  className?: string;
};

export function InvestigationExperience({
  companyName = "Northstar Labs",
  isExample = true,
  className,
}: InvestigationExperienceProps): React.ReactElement {
  // Stable default: primary hypothesis + evidence visible. No auto-play — it caused
  // height thrash and flicker for content below this section.
  const [step, setStep] = useState<Step>("evidence");
  const [selectedHypothesisId, setSelectedHypothesisId] = useState<string | null>("h1");
  const [drawerArtifact, setDrawerArtifact] = useState<EvidenceArtifact | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [applied, setApplied] = useState(false);

  const evidence = useMemo(
    () => (selectedHypothesisId ? artifactsByHypothesis[selectedHypothesisId] ?? [] : []),
    [selectedHypothesisId],
  );

  const openEvidence = useCallback((artifact: EvidenceArtifact) => {
    setDrawerArtifact(artifact);
    setDrawerOpen(true);
  }, []);

  return (
    <div className={cn("theater-stage overflow-hidden", className)}>
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-mock-border px-5 py-4">
        <div>
          <p className="mock-label text-mock-teal">Interactive example</p>
          <p className="mt-1 text-sm font-medium text-mock-text">
            {companyName} · Payments Platform
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {isExample ? <Badge tone="example">Example</Badge> : null}
          <Badge tone="observed">Observed</Badge>
          <Badge tone="inferred">Inferred</Badge>
        </div>
      </div>

      <div className="grid min-h-[28rem] gap-0 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
        <div className="space-y-4 border-b border-mock-border p-5 lg:border-b-0 lg:border-r lg:p-6">
          <Signal
            label="Signal detected"
            value="+31%"
            delta="Cycle time vs prior month"
            tone="warning"
            selected={step === "signal"}
            onClick={() => {
              setStep("signal");
              setSelectedHypothesisId(null);
              setApplied(false);
            }}
          />

          {step === "signal" ? (
            <Button
              className="w-full"
              onClick={() => {
                setStep("hypotheses");
                setSelectedHypothesisId(null);
              }}
            >
              Investigate
            </Button>
          ) : null}

          {step !== "signal" ? (
            <div className="space-y-2">
              <p className="mock-label">Competing hypotheses</p>
              {hypotheses.map((hypothesis) => (
                <Hypothesis
                  key={hypothesis.id}
                  hypothesis={hypothesis}
                  selected={selectedHypothesisId === hypothesis.id}
                  onClick={() => {
                    setSelectedHypothesisId(hypothesis.id);
                    setStep("evidence");
                    setApplied(false);
                  }}
                />
              ))}
            </div>
          ) : null}

          {step === "nudge" || step === "outcome" ? (
            <Nudge
              nudge={nudgeData}
              applied={applied}
              onApply={() => {
                setApplied(true);
                setStep("outcome");
              }}
            />
          ) : null}

          {step === "outcome" ? <Outcome outcome={outcomeData} /> : null}
        </div>

        <div className="space-y-4 p-5 lg:p-6">
          {step === "signal" ? (
            <div className="flex min-h-64 flex-col justify-center rounded-lg border border-dashed border-mock-border bg-mock-panel/40 px-4 py-8 text-center">
              <p className="type-subsection text-mock-text">Ready to investigate</p>
              <p className="type-body-small mx-auto mt-2 max-w-sm text-mock-muted">
                Rank competing explanations with confidence scores and linked evidence.
              </p>
            </div>
          ) : null}

          {step === "hypotheses" ? (
            <div className="flex min-h-64 flex-col justify-center rounded-lg border border-dashed border-mock-border bg-mock-panel/40 px-4 py-8 text-center">
              <p className="type-subsection text-mock-text">Select a hypothesis</p>
              <p className="type-body-small mx-auto mt-2 max-w-sm text-mock-muted">
                Click a ranked explanation to inspect supporting and contradicting artifacts.
              </p>
            </div>
          ) : null}

          {step === "evidence" || step === "nudge" || step === "outcome" ? (
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <p className="mock-label">Evidence</p>
                {step === "evidence" ? (
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => setStep("nudge")}
                  >
                    View recommended nudge
                  </Button>
                ) : null}
              </div>
              {evidence.map((artifact) => (
                <Evidence
                  key={artifact.id}
                  artifact={artifact}
                  highlighted={drawerArtifact?.id === artifact.id}
                  onClick={() => openEvidence(artifact)}
                />
              ))}
              {evidence.length === 0 ? (
                <p className="type-caption">No artifacts for this hypothesis in the example set.</p>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>

      <EvidenceDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        artifact={drawerArtifact}
      />
    </div>
  );
}
