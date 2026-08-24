import Link from "next/link";

export function RelatedContent({
  items,
}: {
  items: ReadonlyArray<{ href: string; label: string }>;
}): React.ReactElement {
  return (
    <aside className="lg:sticky lg:top-24">
      <h2 className="type-label border-b border-border pb-3">Related</h2>
      <ul className="mt-1 flex flex-col">
        {items.map((item) => (
          <li key={item.href} className="border-b border-border-subtle">
            <Link
              href={item.href}
              className="flex items-baseline justify-between gap-3 py-3 text-sm text-foreground transition-colors hover:text-accent"
            >
              <span>{item.label}</span>
              <span aria-hidden className="text-text-tertiary">
                &rarr;
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
