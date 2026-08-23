import "./globals.css";

import type { Metadata } from "next";
import { Geist } from "next/font/google";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SkipLink } from "@/components/layout/skip-link";
import { ClientReady } from "@/components/motion/client-ready";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/config/site";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo/jsonld";
import { buildPageMetadata } from "@/lib/seo/metadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: `${siteConfig.name} · ${siteConfig.category}`,
    description: siteConfig.description,
    path: "/",
  }),
  metadataBase: new URL(process.env.SITE_URL ?? "http://localhost:3000"),
};

export default function RootLayout({ children }: LayoutProps<"/">): React.ReactElement {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} h-full`}
    >
      <body className="flex min-h-full flex-col antialiased">
        <ClientReady />
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        <SkipLink />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
