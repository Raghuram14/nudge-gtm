/** Shared interaction-state vocabulary for Nudgeio primitives. */
export type InteractiveState =
  | "default"
  | "hover"
  | "active"
  | "focus"
  | "selected"
  | "disabled"
  | "loading"
  | "success"
  | "warning"
  | "error"
  | "empty"
  | "expanded"
  | "collapsed";

export type ClaimRelationship = "supports" | "contradicts" | "contextual";

export type EvidenceArtifact = {
  id: string;
  title: string;
  summary: string;
  source: string;
  artifactType: string;
  timestamp: string;
  relationship: ClaimRelationship;
  extractionMethod?: string;
  confidence?: number;
  viewSourceHref?: string;
  relatedClaim?: string;
};

export type HypothesisData = {
  id: string;
  rank: "primary" | "secondary" | "weak";
  title: string;
  confidence: number;
  supportingCount: number;
  contradictingCount: number;
  summary?: string;
};

export type NudgeData = {
  title: string;
  why: string;
  recommendedAction: string;
  expectedImpact: ReadonlyArray<string>;
};

export type OutcomeData = {
  diagnosis: string;
  action: string;
  result: string;
  confirmed: boolean;
};
