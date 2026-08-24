/** Default CTAs site-wide. Intents are validated in `src/lib/forms/lead.ts`. */
import { z } from "zod";

import { ROUTES } from "@/config/routes";

export const ctaIntentSchema = z.enum([
  "early-access",
  "demo",
  "design-partner",
]);

export type CtaIntent = z.infer<typeof ctaIntentSchema>;

export const ctaConfig = {
  seeInAction: {
    id: "see-in-action",
    label: "Book a demo",
    intent: "demo",
  },
  exploreHowItWorks: {
    id: "explore-how-it-works",
    label: "How it works",
    href: ROUTES.platform,
  },
  earlyAccess: {
    id: "early-access",
    label: "Request Early Access",
    intent: "early-access",
  },
  demo: {
    id: "demo",
    label: "Book an engineering intelligence demo",
    intent: "demo",
  },
  designPartner: {
    id: "design-partner",
    label: "Join the Design Partner Program",
    intent: "design-partner",
  },
} as const;

export const defaultPrimaryCta = ctaConfig.seeInAction;
export const defaultSecondaryCta = ctaConfig.exploreHowItWorks;
