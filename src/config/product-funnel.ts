export type FunnelStage = {
  title: string;
  text: string;
};

export const productFunnelStages: ReadonlyArray<FunnelStage> = [
  {
    title: "Signal",
    text: "Something changed - a metric, a risk, a pattern that deserves attention.",
  },
  {
    title: "Context",
    text: "Scattered events become a connected story across systems.",
  },
  {
    title: "Understanding",
    text: "Competing hypotheses ranked with confidence and evidence.",
  },
  {
    title: "Nudge",
    text: "A concrete recommendation: what matters and what to do.",
  },
  {
    title: "Action",
    text: "Intervention taken in the tools your teams already use.",
  },
  {
    title: "Outcome",
    text: "Measure whether the diagnosis held - and learn for next time.",
  },
];
