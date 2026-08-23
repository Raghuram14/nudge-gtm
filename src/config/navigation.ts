import { ctaConfig } from "@/config/cta";
import { ROUTES } from "@/config/routes";

export type NavItem = {
  href: string;
  label: string;
  children?: ReadonlyArray<{ href: string; label: string }>;
};

export const primaryNavigation: ReadonlyArray<NavItem> = [
  {
    href: ROUTES.platform,
    label: "Platform",
    children: [
      { href: ROUTES.contextGraph, label: "Context Graph" },
      { href: ROUTES.engineeringIntelligence, label: "Engineering Intelligence" },
      { href: ROUTES.projectHealth, label: "Project health" },
      { href: ROUTES.evidenceFirstAi, label: "Evidence-first AI" },
      { href: ROUTES.mcp, label: "MCP / agents" },
    ],
  },
  { href: ROUTES.useCases, label: "Use Cases" },
  { href: ROUTES.solutions, label: "Solutions" },
  { href: ROUTES.integrations, label: "Integrations" },
  {
    href: ROUTES.blog,
    label: "Resources",
    children: [
      { href: ROUTES.blog, label: "Blog" },
      { href: ROUTES.learn, label: "Learn" },
      { href: ROUTES.research, label: "Research" },
      { href: ROUTES.compare, label: "Compare" },
    ],
  },
  {
    href: ROUTES.trust,
    label: "Company",
    children: [
      { href: ROUTES.trust, label: "Trust" },
      { href: ROUTES.contact, label: "Contact" },
    ],
  },
];

export const headerCta = {
  href: `${ROUTES.contact}?intent=${ctaConfig.seeInAction.intent}`,
  label: ctaConfig.seeInAction.label,
};

export const footerNavigation = {
  product: [
    { href: ROUTES.contextGraph, label: "Context Graph" },
    { href: ROUTES.engineeringIntelligence, label: "Engineering Intelligence" },
    { href: ROUTES.projectHealth, label: "Project health" },
    { href: ROUTES.mcp, label: "MCP / agents" },
  ],
  useCases: [
    { href: ROUTES.useCases, label: "Use cases" },
    { href: ROUTES.solutions, label: "Solutions" },
    { href: ROUTES.integrations, label: "Integrations" },
  ],
  resources: [
    { href: ROUTES.blog, label: "Blog" },
    { href: ROUTES.learn, label: "Learn" },
    { href: ROUTES.research, label: "Research" },
    { href: ROUTES.compare, label: "Compare" },
  ],
  company: [
    { href: ROUTES.contact, label: "Contact" },
    { href: ROUTES.trust, label: "Trust" },
  ],
  trust: [
    { href: ROUTES.trustSecurity, label: "Security" },
    { href: ROUTES.trustPrivacy, label: "Privacy" },
    { href: ROUTES.trustData, label: "Data" },
    { href: ROUTES.trustNoSurveillance, label: "No surveillance" },
  ],
} as const;
