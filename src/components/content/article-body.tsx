import { MDXRemote } from "next-mdx-remote/rsc";

import type { LoadedArticle } from "@/lib/content/load-articles";

export async function ArticleBody({
  article,
}: {
  article: LoadedArticle;
}): Promise<React.ReactElement> {
  return (
    <article className="page-body grid w-full gap-5">
      <MDXRemote source={article.body} />
    </article>
  );
}
