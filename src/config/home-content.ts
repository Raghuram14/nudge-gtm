/**
 * Homepage copy — ADR 0003 / 0004. Composition-only in `HomePage`; strings live here.
 */

export const homeHero = {
  brandCategory: "Engineering intelligence",
  headline: "Understand why engineering changes.",
  /** Entity-chain visitor sentence (ADR 0004 / prompt positioning). */
  visitorSentence:
    "Nudgeio connects people, work items, pull requests, builds, deployments, services, and incidents into an Engineering Knowledge Graph—so leaders can see what changed, why it likely changed, and what deserves attention next.",
  audienceLine: "Built for CTOs, VPs, and engineering leaders.",
  audienceLinkLabel: "See the platform",
} as const;

export const homeSections = {
  fragmentation: {
    title: "The evidence exists. The context doesn't.",
    description:
      "Signals sit in separate tools. Without relationships, metrics stay isolated and explanations stay guesswork.",
  },
  contextGraph: {
    eyebrow: "Context graph",
    title: "One map of how work connects.",
    description:
      "Canonical entities and relationships—not another dashboard of disconnected charts.",
    linkLabel: "Explore the graph",
  },
  investigation: {
    eyebrow: "Ask why",
    title: "From metric to evidence-backed next step.",
    description:
      "Walk an example investigation: observation → likely contributors → graph context → evidence → action.",
  },
  howItWorks: {
    eyebrow: "How it works",
    title: "Evidence → Context → Graph → Reasoning → Action",
    description: "A calm system path—not a fake neon command center.",
  },
  personas: {
    eyebrow: "Who it's for",
    title: "Different roles. Same connected context.",
    description: "Leaders and teams ask different questions against one graph.",
  },
  integrations: {
    eyebrow: "Integrations",
    title: "GitHub + Jira first.",
    description: "Integrations are data sources into the graph—not the product.",
  },
  trust: {
    eyebrow: "Trust",
    title: "Evidence-backed. Example data only.",
    description:
      "We show how investigations work with labeled examples. We do not invent certifications or customer counts.",
    links: [
      { hrefKey: "trustSecurity" as const, label: "Security" },
      { hrefKey: "trustPrivacy" as const, label: "Privacy" },
      { hrefKey: "trustData" as const, label: "Data" },
      { hrefKey: "trustNoSurveillance" as const, label: "No surveillance" },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Quick answers.",
  },
  cta: {
    title: "Build a clearer engineering system.",
    description:
      "Request early access, book a demo, or join the design partner program.",
  },
} as const;

/** @deprecated Unlabeled vanity stats removed from homepage (ADR 0005). Kept for reference only. */
export const homeStats = [
  { value: "847", label: "Linked events" },
  { value: "+31%", label: "Cycle time spike" },
  { value: "2.4k", label: "Graph nodes" },
  { value: "18", label: "Evidence sources" },
] as const;

export const homeProblem = {
  title: homeSections.fragmentation.title,
} as const;

export const homeTrustLine = "Evidence-backed · Example data only";
