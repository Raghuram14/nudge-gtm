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
    description: "What we collect, and what we deliberately do not.",
  },
  {
    href: ROUTES.trustData,
    title: "Data",
    description: "Sources, retention direction, and ownership.",
  },
  {
    href: ROUTES.trustNoSurveillance,
    title: "No surveillance",
    description: "Systems and outcomes - never individual scorecards.",
  },
] as const;

const principles = [
  {
    title: "Evidence before assertion",
    body: "A claim without its sources is an opinion. The product is built so that every insight can be traced back to the artifacts that produced it.",
  },
  {
    title: "No surveillance metrics",
    body: "Commit counts, lines of code, and hours online are never used to characterise a person. This is enforced by how the product is built, not by a setting an administrator can switch off.",
  },
  {
    title: "Facts and inferences stay apart",
    body: "Observed data and AI-derived conclusions are visually and structurally distinct, and inferences carry their own confidence.",
  },
  {
    title: "We do not claim what we have not done",
    body: "This site makes no SOC 2, ISO 27001, HIPAA, or similar certification claims, and invents no customers, logos, or metrics.",
  },
] as const;

export const metadata: Metadata = buildPageMetadata({
  title: "Trust",
  description:
    "How Nudgeio intends to treat engineering data: team and process health, evidence, and no employee surveillance. No fabricated certifications.",
  path: ROUTES.trust,
});

export default function Page(): React.ReactElement {
  return (
    <SimplePage
      crumbs={[{ href: ROUTES.trust, label: "Trust" }]}
      eyebrow="Trust"
      title="What we will and will not do with your engineering data."
      description="We only describe controls the product intends to enforce. This site claims no SOC 2, ISO, or similar artifacts."
    >
      <h2>Principles</h2>
      <ul className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
        {principles.map((principle) => (
          <li key={principle.title} className="bg-surface p-6">
            <p className="text-sm font-medium text-foreground">{principle.title}</p>
            <p className="type-caption mt-2">{principle.body}</p>
          </li>
        ))}
      </ul>

      <h2 className="mt-4">In detail</h2>
      <ul className="grid gap-3 sm:grid-cols-2">
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
    </SimplePage>
  );
}
