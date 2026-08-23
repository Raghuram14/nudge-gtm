export type FaqItem = {
  question: string;
  answer: string;
};

export const homeFaqs: ReadonlyArray<FaqItem> = [
  {
    question: "What is Antarang?",
    answer:
      "An engineering intelligence platform that connects evidence and context across your systems so teams can understand what changed, why it changed, and what deserves attention next.",
  },
  {
    question: "How is this different from a dashboard?",
    answer:
      "Dashboards show isolated metrics. Antarang connects events, artifacts, decisions, relationships, and history so you can reconstruct the story behind an outcome.",
  },
  {
    question: "What do you connect first?",
    answer:
      "GitHub and Jira are the current direction. Other sources are coming soon. We do not show fake logos or live customer counts.",
  },
  {
    question: "Do you rank people?",
    answer:
      "No. Antarang analyzes systems, context, work, and outcomes — not individual surveillance, scorecards, or top/worst lists.",
  },
  {
    question: "How does AI fit in?",
    answer:
      "AI reasoning runs over connected evidence. Answers distinguish observed facts from inferred explanation, with source citations where supported.",
  },
  {
    question: "How do we start?",
    answer:
      "See Antarang in action or explore how it works. There is no public free trial until the product team defines the motion.",
  },
];
