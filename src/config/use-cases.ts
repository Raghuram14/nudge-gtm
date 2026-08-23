export type UseCaseStatus = "available" | "in-development" | "coming-soon";

export type UseCaseEntry = {
  title: string;
  problem: string;
  question: string;
  status: UseCaseStatus;
};

export const useCases: ReadonlyArray<UseCaseEntry> = [
  {
    title: "Engineering investigation",
    problem:
      "Understand what changed across code, work, and dependencies when an outcome is unexpected.",
    question: "What changed, what was related, and where should we look first?",
    status: "available",
  },
  {
    title: "Architecture understanding",
    problem: "Recover technical context and decision history around systems and design choices.",
    question: "Why does this architecture exist, and what constraints shaped it?",
    status: "in-development",
  },
  {
    title: "Onboarding",
    problem:
      "Give new engineers a contextual map of systems, repositories, decisions, and historical work.",
    question: "How does this service fit into the larger system?",
    status: "coming-soon",
  },
  {
    title: "Project retrospectives",
    problem:
      "Connect project outcomes to decisions, scope changes, dependencies, and engineering activity.",
    question: "Why did this project take longer than expected?",
    status: "coming-soon",
  },
  {
    title: "AI coding context",
    problem:
      "Provide richer organizational and technical context to AI-assisted development workflows.",
    question: "What context does an AI coding agent need before changing this code?",
    status: "coming-soon",
  },
];
