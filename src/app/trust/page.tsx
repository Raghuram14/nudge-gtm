import type { Metadata } from "next";

import { ColorNavCard } from "@/components/marketing/color-nav-card";
import { SimplePage } from "@/components/marketing/simple-page";
import { trustAccents } from "@/config/accent-tones";
import { ROUTES } from "@/config/routes";
import { buildPageMetadata } from "@/lib/seo/metadata";

const trustLinks = [
  {
    href: ROUTES.trustSecurity,
    title: "Security",
    description: "How we intend to protect engineering data.",
  },
  {
    href: ROUTES.trustPrivacy,
    title: "Privacy",
    description: "What we collect and how we handle it.",
  },
  {
    href: ROUTES.trustData,
    title: "Data",
    description: "Sources, retention direction, and ownership.",
  },
  {
    href: ROUTES.trustNoSurveillance,
    title: "No surveillance",
    description: "Systems and outcomes — not individual scorecards.",
  },
] as const;

export const metadata: Metadata = buildPageMetadata({
  title: "Trust",
  description:
    "How Antarang intends to treat engineering data: team and process health, evidence, and no employee surveillance. No fabricated certifications.",
  path: ROUTES.trust,
});

export default function Page(): React.ReactElement {
  return (
    <SimplePage
      crumbs={[{ href: ROUTES.trust, label: "Trust" }]}
      title="Trust"
      description="We only claim controls the product intends to enforce. This site does not claim SOC 2, ISO, or similar artifacts."
    >
      <ul className="grid items-stretch gap-3 sm:grid-cols-2">
        {trustLinks.map((link, index) => (
          <li key={link.href}>
            <ColorNavCard
              href={link.href}
              title={link.title}
              description={link.description}
              accent={trustAccents[index % trustAccents.length]}
            />
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <ColorNavCard
          href={ROUTES.contact}
          title="Contact"
          description="Request early access, book a demo, or join the design partner program."
          accent="violet"
        />
      </div>
    </SimplePage>
  );
}
