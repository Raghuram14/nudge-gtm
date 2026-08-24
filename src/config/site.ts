/** Global site identity strings - not page-specific copy (those belong in feature configs). */
import { ROUTES } from "@/config/routes";

export const siteConfig = {
  name: "Nudgeio",
  product: "Nudgeio",
  category: "Engineering intelligence layer",
  tagline: "The intelligence layer for engineering teams.",
  description:
    "Nudgeio connects engineering evidence across your systems so teams understand what changed, why it changed, and what deserves attention next - with every insight backed by a receipt.",
  visitorSentence:
    "Nudgeio turns fragmented engineering signals into evidence-backed understanding, actionable nudges, and measurable outcomes.",
  knowledgeGraphName: "Engineering Knowledge Graph",
  knowledgeGraphSynonym: "Context Graph",
  askSurfaceName: "Ask Nudgeio",
  locale: "en_US",
  twitterHandle: "",
} as const;

export function getSiteUrl(): string {
  const fromEnv = process.env.SITE_URL?.replace(/\/$/, "");
  return fromEnv && fromEnv.length > 0 ? fromEnv : "http://localhost:3000";
}

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${getSiteUrl()}${normalized === "/" ? "/" : normalized}`;
}

export const defaultCtaHref = ROUTES.contact;
