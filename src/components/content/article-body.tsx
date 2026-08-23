import { MDXRemote } from "next-mdx-remote/rsc";

import type { LoadedArticle } from "@/lib/content/load-articles";

export async function ArticleBody({
  article,
}: {
  article: LoadedArticle;
}): Promise<React.ReactElement> {
  return (
    <article className="grid w-full max-w-3xl gap-4 text-muted">
      <MDXRemote source={article.body} />
    </article>
  );
}
