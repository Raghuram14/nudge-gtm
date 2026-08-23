import type { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { canonicalFor } from "@/lib/seo/canonical";

export type PageSeoInput = {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
  ogImage?: string;
};

export function buildPageMetadata(input: PageSeoInput): Metadata {
  const canonical = canonicalFor(input.path);
  const title = input.title.includes(siteConfig.name)
    ? input.title
    : `${input.title} · ${siteConfig.name}`;

  return {
    title,
    description: input.description,
    alternates: { canonical },
    robots: input.noindex
      ? { index: false, follow: true }
      : { index: true, follow: true },
    openGraph: {
      title,
      description: input.description,
      url: canonical,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: input.ogImage ? [{ url: input.ogImage }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: input.description,
    },
  };
}

export function titleTemplate(pageTitle: string): string {
  return `${pageTitle} · ${siteConfig.name}`;
}
