import Link from "next/link";

export function RelatedContent({
  items,
}: {
  items: ReadonlyArray<{ href: string; label: string }>;
}): React.ReactElement {
  return (
    <aside>
      <h2 className="mb-3 text-lg font-semibold">Related</h2>
      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="text-sm text-accent hover:underline">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
