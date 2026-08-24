import type { Metadata } from "next";

import { SimplePage } from "@/components/marketing/simple-page";
import { SolutionCard } from "@/components/marketing/solution-card";
import { solutionAccents } from "@/config/accent-tones";
import { ROUTES } from "@/config/routes";
import { solutions } from "@/config/solutions";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Solutions",
  description:
    "Nudgeio for engineering leaders, managers, Staff+ engineers, and platform teams. Connected context - not surveillance or vanity metrics.",
  path: ROUTES.solutions,
});

export default function Page(): React.ReactElement {
  return (
    <SimplePage
      crumbs={[{ href: ROUTES.solutions, label: "Solutions" }]}
      title="Solutions"
      description="Distinct problems per audience. We do not invent ROI or customer metrics."
    >
      <div className="grid items-stretch gap-4 md:grid-cols-2">
        {solutions.map((solution, index) => (
          <SolutionCard
            key={solution.title}
            title={solution.title}
            problem={solution.problem}
            belief={solution.belief}
            cta={solution.cta}
            accent={solutionAccents[index % solutionAccents.length]}
          />
        ))}
      </div>
    </SimplePage>
  );
}
