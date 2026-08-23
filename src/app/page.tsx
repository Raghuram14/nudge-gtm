/** Phase 3 — thin route: metadata + JSON-LD; delegates UI to async `HomePage`. */
import type { Metadata } from "next";

import { HomePage } from "@/components/home/home-page";
import { JsonLd } from "@/components/seo/json-ld";
import { homeFaqs } from "@/config/faq";
import { ROUTES } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { faqJsonLd, softwareApplicationJsonLd } from "@/lib/seo/jsonld";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: `${siteConfig.name} · ${siteConfig.tagline}`,
  description: siteConfig.description,
  path: ROUTES.home,
});

export default async function Page(): Promise<React.ReactElement> {
  return (
    <>
      <JsonLd data={[softwareApplicationJsonLd(), faqJsonLd(homeFaqs)]} />
      <HomePage />
    </>
  );
}
