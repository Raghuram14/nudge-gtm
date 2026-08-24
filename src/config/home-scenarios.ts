/**
 * Illustrative scenarios for the homepage.
 *
 * These are deliberately DIFFERENT stories from the one used by the
 * interactive investigation. The page previously narrated a single scenario
 * three times in three card shapes, which read as repetition rather than
 * reinforcement.
 *
 * All content here is fixture data. It is rendered inside `ProductFrame`,
 * which labels it as an example.
 */

export type EvidenceKind = "observed" | "inferred";

export type EvidenceLine = {
  kind: EvidenceKind;
  /** The artifact or reading itself. */
  text: string;
  /** Where it came from - a source, an id, a timestamp. */
  source: string;
};

/** Hero: a claim, and immediately underneath it, the receipt. */
export const heroScenario = {
  frameLabel: "Diagnosis · Checkout release",
  question: "Why did the Checkout release slip by nine days?",
  claim: "Scope expanded after kickoff, and the expansion was never re-estimated.",
  confidence: "High",
  evidence: [
    {
      kind: "observed",
      text: "Four acceptance criteria added to ENG-2214 on day 6 of the sprint",
      source: "Jira · ENG-2214 · history",
    },
    {
      kind: "observed",
      text: "Story points unchanged after the edit",
      source: "Jira · ENG-2214 · field log",
    },
    {
      kind: "observed",
      text: "PR #5108 grew from 340 to 1,290 lines across three force-pushes",
      source: "GitHub · PR #5108",
    },
    {
      kind: "inferred",
      text: "Late scope growth is the likely driver, not review capacity",
      source: "Reviewer wait held flat at 6h against a 14d baseline",
    },
  ] satisfies ReadonlyArray<EvidenceLine>,
} as const;

/**
 * Section 4: the same mechanism, taken apart. A different subject again, so
 * the reader learns the shape of a receipt rather than re-reading one story.
 */
export const anatomyScenario = {
  frameLabel: "Evidence chain · Deploy failures",
  claim: "Deploy failures on the notifications service are concentrated in one code path.",
  parts: [
    {
      label: "Observed",
      note: "Deterministic. Read from the source system, with a timestamp and an id.",
      lines: [
        { text: "9 of 11 failed deploys in the last 30 days", source: "GitHub · deployments" },
        { text: "All 9 touched src/notifications/retry.ts", source: "GitHub · diff paths" },
      ],
    },
    {
      label: "Inferred",
      note: "A conclusion drawn on top of the facts. Held separately, with its confidence stated.",
      lines: [
        {
          text: "Retry handling is the likely common cause",
          source: "Confidence: Medium",
        },
      ],
    },
    {
      label: "What would change this",
      note: "The disconfirming evidence. Stated up front, so the claim can be argued with.",
      lines: [
        {
          text: "A failure in the same window that does not touch retry.ts",
          source: "None found in the current window",
        },
      ],
    },
  ],
} as const;

/** Section 2: the systems read from, with honest connector status. */
export const sourceStrip = [
  { slug: "github", name: "GitHub", state: "live" },
  { slug: "jira", name: "Jira", state: "building" },
  { slug: "gitlab", name: "GitLab", state: "roadmap" },
  { slug: "slack", name: "Slack", state: "roadmap" },
  { slug: "pagerduty", name: "PagerDuty", state: "roadmap" },
  { slug: "datadog", name: "Datadog", state: "roadmap" },
] as const;
