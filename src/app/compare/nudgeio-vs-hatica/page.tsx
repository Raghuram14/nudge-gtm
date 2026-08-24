import type { Metadata } from "next";

import { SimplePage } from "@/components/marketing/simple-page";
import { ROUTES } from "@/config/routes";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Nudgeio vs Hatica",
  description:
    "Placeholder comparison. No unsourced feature matrix. Measurement philosophy: systems over individual activity.",
  path: ROUTES.compareHatica,
  noindex: true,
});

export default function Page(): React.ReactElement {
  return (
    <SimplePage
      crumbs={[
        { href: ROUTES.compare, label: "Compare" },
        { href: ROUTES.compareHatica, label: "vs Hatica" },
      ]}
      title="Nudgeio vs Hatica"
      description="This stub is noindex until we have sourced, dated facts. We will not invent a win matrix."
    >
      <p>
        Difference we can state without a competitor teardown: Nudgeio does not market
        developer rankings or hours-online as productivity.
      </p>
    </SimplePage>
  );
}
