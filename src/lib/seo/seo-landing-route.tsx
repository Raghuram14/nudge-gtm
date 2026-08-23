/**
 * Factory for SEO landing routes (`/engineering-intelligence`, etc.).
 * Content lives in `src/config/seo-landing-pages.ts`; each route file is three lines:
 * import factory → destructure `{ metadata, Page }` → re-export.
 */
import {
  buildSeoLandingMetadata,
  SeoLandingPageView,
} from "@/components/marketing/seo-landing-page";
import { seoLandingPagesBySlug } from "@/config/seo-landing-pages";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function createSeoLandingPageExports(slug: string) {
  const page = seoLandingPagesBySlug[slug];
  if (!page) {
    throw new Error(`Unknown SEO landing page slug: ${slug}`);
  }

  return {
    metadata: buildSeoLandingMetadata(page),
    Page: function Page(): React.ReactElement {
      return <SeoLandingPageView page={page} />;
    },
  };
}

export function generateSeoStaticParams(): Array<{ slug: string }> {
  return Object.keys(seoLandingPagesBySlug).map((slug) => ({ slug }));
}

export async function SeoLandingPage({ params }: PageProps): Promise<React.ReactElement> {
  const { slug } = await params;
  const page = seoLandingPagesBySlug[slug];
  if (!page) {
    throw new Error(`Unknown SEO landing page: ${slug}`);
  }
  return <SeoLandingPageView page={page} />;
}

export async function seoLandingMetadata({ params }: PageProps) {
  const { slug } = await params;
  const page = seoLandingPagesBySlug[slug];
  if (!page) {
    throw new Error(`Unknown SEO landing page: ${slug}`);
  }
  return buildSeoLandingMetadata(page);
}
