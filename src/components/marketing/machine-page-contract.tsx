/**
 * The machine-readable summary of a page.
 *
 * This exists for answer engines and AI retrieval as much as for readers: a
 * flat, unambiguous question-and-answer contract that states scope and, more
 * importantly, availability. It stays inside a disclosure so it does not
 * compete with the page's argument, but the content is always in the HTML.
 */

type ContractProps = {
  what: string;
  who: string;
  problem: string;
  how: string;
  data: string;
  output: string;
  availability: string;
  differ: string;
  learnMore: string;
};

export function MachinePageContract(props: ContractProps): React.ReactElement {
  const rows: ReadonlyArray<{ term: string; detail: string }> = [
    { term: "What is Nudgeio?", detail: props.what },
    { term: "Who is it for?", detail: props.who },
    { term: "What problem does it solve?", detail: props.problem },
    { term: "How it works", detail: props.how },
    { term: "What data it connects", detail: props.data },
    { term: "What it outputs", detail: props.output },
    { term: "Available today vs future", detail: props.availability },
    { term: "How it differs", detail: props.differ },
    { term: "Where to learn more", detail: props.learnMore },
  ];

  return (
    <details className="group rounded-lg border border-border bg-surface-elevated open:bg-surface">
      <summary className="type-label flex cursor-pointer list-none items-center gap-2 px-5 py-4 text-foreground marker:content-none">
        <span
          aria-hidden
          className="text-text-tertiary transition-transform group-open:rotate-90"
        >
          &rsaquo;
        </span>
        In short
        <span className="ml-auto font-normal text-text-tertiary">Summary for readers and agents</span>
      </summary>

      <dl className="grid gap-px border-t border-border bg-border sm:grid-cols-2">
        {rows.map((row) => (
          <div key={row.term} className="bg-surface p-5">
            <dt className="text-sm font-medium text-foreground">{row.term}</dt>
            <dd className="type-caption mt-1.5">{row.detail}</dd>
          </div>
        ))}
      </dl>
    </details>
  );
}
