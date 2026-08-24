import { ctaConfig } from "@/config/cta";
import { ROUTES } from "@/config/routes";

export type NavItem = {
  href: string;
  label: string;
  children?: ReadonlyArray<{ href: string; label: string }>;
};

/** Slim primary nav - only surfaces visitors need. SEO landings stay linkable, not in chrome. */
export const primaryNavigation: ReadonlyArray<NavItem> = [
  { href: ROUTES.platform, label: "Product" },
  { href: ROUTES.integrations, label: "Integrations" },
  { href: ROUTES.trust, label: "Trust" },
  { href: ROUTES.contact, label: "Contact" },
];

export const headerCta = {
  href: `${ROUTES.contact}?intent=${ctaConfig.earlyAccess.intent}`,
  label: ctaConfig.earlyAccess.label,
};

export const footerNavigation = {
  product: [
    { href: ROUTES.platform, label: "Product" },
    { href: ROUTES.contextGraph, label: "Context Graph" },
    { href: ROUTES.evidenceFirstAi, label: "Evidence-first AI" },
    { href: ROUTES.integrations, label: "Integrations" },
  ],
  company: [
    { href: ROUTES.trust, label: "Trust" },
    { href: ROUTES.trustNoSurveillance, label: "No surveillance" },
    { href: ROUTES.contact, label: "Contact" },
  ],
} as const;
