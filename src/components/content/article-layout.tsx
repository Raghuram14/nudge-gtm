import { ArticleBody } from "@/components/content/article-body";
import { Breadcrumbs, type Crumb } from "@/components/marketing/breadcrumbs";
import { CtaBlock } from "@/components/marketing/cta-block";
import { SectionShell } from "@/components/marketing/section-shell";
import type { LoadedArticle } from "@/lib/content/load-articles";

/**
 * Editorial layout shared by /blog/[slug] and /learn/[slug].
 *
 * Both routes previously hand-rolled the same header, byline, and container.
 */
export function ArticleLayout({
  article,
  crumbs,
  eyebrow,
  children,
}: {
  article: LoadedArticle;
  crumbs: ReadonlyArray<Crumb>;
  eyebrow: string;
  /** JSON-LD or anything else that must render inside the page. */
  children?: React.ReactNode;
}): React.ReactElement {
  const { title, description, author, publishedAt, updatedAt } = article.frontmatter;
  const showUpdated = updatedAt && updatedAt !== publishedAt;

  return (
    <main id="main">
      {children}

      <header className="hero-atmosphere border-b border-border">
        <div className="mx-auto w-full max-w-3xl px-4 py-14 sm:px-6 md:py-20">
          <div className="mb-8">
            <Breadcrumbs items={crumbs} />
          </div>

          <p className="type-label text-accent">{eyebrow}</p>
          <h1 className="type-page-title mt-4 text-balance text-foreground">{title}</h1>
          {description ? <p className="type-lead mt-5">{description}</p> : null}

          <dl className="type-metadata mt-8 flex flex-wrap items-center gap-x-5 gap-y-1 border-t border-border pt-5">
            {author ? (
              <div className="flex gap-1.5">
                <dt className="sr-only">Author</dt>
                <dd>{author}</dd>
              </div>
            ) : null}
            {publishedAt ? (
              <div className="flex gap-1.5">
                <dt className="sr-only">Published</dt>
                <dd>
                  <time dateTime={publishedAt}>{publishedAt}</time>
                </dd>
              </div>
            ) : null}
            {showUpdated ? (
              <div className="flex gap-1.5">
                <dt>Updated</dt>
                <dd>
                  <time dateTime={updatedAt}>{updatedAt}</time>
                </dd>
              </div>
            ) : null}
          </dl>
        </div>
      </header>

      <SectionShell space="md" width="prose">
        <ArticleBody article={article} />
      </SectionShell>

      <SectionShell tone="tinted" space="lg">
        <CtaBlock />
      </SectionShell>
    </main>
  );
}
