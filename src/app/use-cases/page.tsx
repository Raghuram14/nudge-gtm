import type { Metadata } from "next";

import { SimplePage } from "@/components/marketing/simple-page";
import { UseCaseCard } from "@/components/marketing/use-case-card";
import { useCaseAccents } from "@/config/accent-tones";
import { ROUTES } from "@/config/routes";
import { useCases } from "@/config/use-cases";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Use cases",
  description:
    "Nudgeio use cases: engineering investigation, architecture understanding, onboarding, project retrospectives, and AI coding context.",
  path: ROUTES.useCases,
});

export default function Page(): React.ReactElement {
  return (
    <SimplePage
      crumbs={[{ href: ROUTES.useCases, label: "Use cases" }]}
      title="Use cases"
      description="Map platform capabilities to the questions engineering organizations actually ask."
    >
      <div className="grid items-stretch gap-4 md:grid-cols-2">
        {useCases.map((useCase, index) => (
          <UseCaseCard
            key={useCase.title}
            title={useCase.title}
            problem={useCase.problem}
            question={useCase.question}
            status={useCase.status}
            accent={useCaseAccents[index % useCaseAccents.length]}
          />
        ))}
      </div>
    </SimplePage>
  );
}
