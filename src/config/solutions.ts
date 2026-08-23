export type SolutionEntry = {
  title: string;
  problem: string;
  belief: string;
  cta: string;
};

export const solutions: ReadonlyArray<SolutionEntry> = [
  {
    title: "CTO / VP Engineering",
    problem: "High-level engineering visibility without drowning in dashboards.",
    belief:
      "Antarang connects evidence and context so leadership can understand engineering reality faster.",
    cta: "Book an engineering intelligence demo",
  },
  {
    title: "Director / Head of Engineering",
    problem: "Multiple teams, projects, and systems make root-cause understanding difficult.",
    belief: "Antarang creates a shared view across teams and systems.",
    cta: "See how it works",
  },
  {
    title: "Engineering Manager",
    problem: "Hard to reconstruct why work slowed, changed direction, or created follow-up work.",
    belief: "Antarang preserves the context behind engineering activity.",
    cta: "Explore an example",
  },
  {
    title: "Staff+ / Principal Engineer",
    problem: "Architecture, incidents, and technical decisions are spread across tools.",
    belief: "Antarang makes technical context easier to retrieve and connect.",
    cta: "See the knowledge graph",
  },
  {
    title: "Platform / DevEx leader",
    problem: "Tooling generates data but not enough actionable context.",
    belief: "Antarang turns engineering telemetry into explainable intelligence.",
    cta: "Talk to platform team",
  },
];
