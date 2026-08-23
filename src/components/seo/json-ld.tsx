type JsonLdValue = Record<string, unknown> | ReadonlyArray<Record<string, unknown>>;

export function JsonLd({ data }: { data: JsonLdValue }): React.ReactElement {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
