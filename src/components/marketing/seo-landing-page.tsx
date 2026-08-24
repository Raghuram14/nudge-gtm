import type { Metadata } from "next";
import Link from "next/link";

import { SimplePage } from "@/components/marketing/simple-page";
import { ROUTES } from "@/config/routes";
import type { SeoLandingPageContent } from "@/config/seo-landing-pages";
import { buildPageMetadata } from "@/lib/seo/metadata";

export function buildSeoLandingMetadata(page: SeoLandingPageContent): Metadata {
  return buildPageMetadata({
    title: page.title,
    description: page.description,
    path: page.path,
  });
}

/**
 * Template behind the eight topic landing pages.
 *
 * Sections are numbered and ruled rather than stacked as anonymous
 * heading-plus-paragraph pairs, so a reader can see the shape of the argument
 * before reading it - and so eight pages built from one template do not all
 * read as an undifferentiated column of text.
 */
export function SeoLandingPageView({
  page,
}: {
  page: SeoLandingPageContent;
}): React.ReactElement {
  return (
    <SimplePage
      crumbs={[{ href: page.path, label: page.title }]}
      eyebrow="Topic"
      title={page.title}
      description={page.intro}
      related={page.relatedLinks}
    >
      <ol className="grid gap-0">
        {page.sections.map((section, index) => (
          <li
            key={section.heading}
            className="grid gap-3 border-t border-border py-8 first:border-t-0 first:pt-0 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-6"
          >
            <span className="type-metadata pt-1.5 tabular-nums" aria-hidden>
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h2>{section.heading}</h2>
              <p className="mt-3">{section.body}</p>
            </div>
          </li>
        ))}
      </ol>

      <p className="type-caption border-t border-border pt-6">
        Capabilities described here as direction or coming soon are not claimed as shipping. The{" "}
        <Link href={`${ROUTES.home}#build-status`}>current build status</Link> says what is
        actually running today.
      </p>
    </SimplePage>
  );
}
