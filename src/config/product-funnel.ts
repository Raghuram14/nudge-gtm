export type FunnelStage = {
  title: string;
  text: string;
};

export const productFunnelStages: ReadonlyArray<FunnelStage> = [
  {
    title: "Evidence",
    text: "What happened — drawn from the systems your teams already use.",
  },
  {
    title: "Context",
    text: "Scattered signals become a story you can follow.",
  },
  {
    title: "Graph",
    text: "See how work, code, and decisions connect.",
  },
  {
    title: "Reasoning",
    text: "Ask why — with answers you can trace back to source.",
  },
  {
    title: "Action",
    text: "Move from understanding to what deserves attention next.",
  },
];
