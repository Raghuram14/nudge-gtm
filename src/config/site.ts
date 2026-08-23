/** Global site identity strings — not page-specific copy (those belong in feature configs). */
import { ROUTES } from "@/config/routes";

export const siteConfig = {
  name: "Antarang",
  product: "Antarang",
  category: "Engineering intelligence platform",
  tagline: "Understand why engineering changes",
  description:
    "Antarang connects engineering evidence and context across your systems so teams can understand what changed, why it changed, and what deserves attention next.",
  visitorSentence:
    "Antarang connects the context and evidence scattered across your engineering systems, helping leaders and teams understand what changed, why it changed, and what deserves attention next.",
  knowledgeGraphName: "Engineering Knowledge Graph",
  knowledgeGraphSynonym: "Context Graph",
  askSurfaceName: "Ask Antarang",
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
