export type FaqItem = {
  question: string;
  answer: string;
};

export const homeFaqs: ReadonlyArray<FaqItem> = [
  {
    question: "What is Nudgeio?",
    answer:
      "Nudgeio connects GitHub and Jira into an evidence chain. When engineering metrics move — cycle time, sprint risk, review queues — you get ranked diagnoses you can inspect, then a concrete recommendation (a nudge).",
  },
  {
    question: "How is this different from a dashboard?",
    answer:
      "Dashboards show charts. Nudgeio shows the story behind a change: linked PRs, tickets, and review events, competing hypotheses with confidence, and a suggested action. Facts stay visually separate from inferences.",
  },
  {
    question: "What do you connect first?",
    answer:
      "GitHub and Jira are the current direction. Other sources are labeled honestly when they appear. We do not invent customer logos or live counts.",
  },
  {
    question: "Do you rank people?",
    answer:
      "No. Nudgeio analyzes systems, work, and outcomes — not individual surveillance, scorecards, or top/worst lists.",
  },
  {
    question: "How does AI fit in?",
    answer:
      "AI reasons over connected evidence. Every claim can open its sources. Observed facts are never presented with the same certainty as inferences.",
  },
  {
    question: "How do we start?",
    answer:
      "Request to see Nudgeio in action. There is no public free trial until the product team defines that motion.",
  },
];
