import type { Metadata } from "next";
import Link from "next/link";

import { SimplePage } from "@/components/marketing/simple-page";
import type { SeoLandingPageContent } from "@/config/seo-landing-pages";
import { buildPageMetadata } from "@/lib/seo/metadata";

export function buildSeoLandingMetadata(page: SeoLandingPageContent): Metadata {
  return buildPageMetadata({
    title: page.title,
    description: page.description,
    path: page.path,
  });
}

export function SeoLandingPageView({
  page,
}: {
  page: SeoLandingPageContent;
}): React.ReactElement {
  return (
    <SimplePage
      crumbs={[{ href: page.path, label: page.title }]}
      title={page.title}
      description={page.intro}
      related={page.relatedLinks}
    >
      {page.sections.map((section) => (
        <section key={section.heading}>
          <h2 className="text-xl font-semibold text-foreground">{section.heading}</h2>
          <p className="mt-3">{section.body}</p>
        </section>
      ))}
      <p className="text-sm text-muted">
        Explore the{" "}
        <Link href={page.relatedLinks[0]?.href ?? "/platform"} className="text-accent hover:underline">
          related product pages
        </Link>{" "}
        for workflow detail. Capabilities marked as direction or coming soon are not claimed as shipping.
      </p>
    </SimplePage>
  );
}
