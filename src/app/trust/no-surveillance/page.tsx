import type { Metadata } from "next";

import { SimplePage } from "@/components/marketing/simple-page";
import { ROUTES } from "@/config/routes";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "No surveillance",
  description:
    "Antarang measures team and process health, system bottlenecks, delivery outcomes, and explainable evidence — not employee surveillance, productivity rankings, or hours online.",
  path: ROUTES.trustNoSurveillance,
});

export default function Page(): React.ReactElement {
  return (
    <SimplePage
      crumbs={[
        { href: ROUTES.trust, label: "Trust" },
        { href: ROUTES.trustNoSurveillance, label: "No surveillance" },
      ]}
      title="No surveillance"
      description="Philosophy: engineering systems over individual activity."
    >
      <p>
        Antarang is for team and process health, system bottlenecks, delivery outcomes, and
        explainable evidence. It is not employee surveillance, productivity rankings, hours-online
        monitoring, or raw activity scorecards. Team health is not the sum of individual activity.
        We do not publish top or worst developer lists.
      </p>
      <p>
        Some tools in the market are used in a surveillance-sensitive way. We use that contrast to
        state our measurement philosophy — not to smear named competitors on this page.
      </p>
    </SimplePage>
  );
}
