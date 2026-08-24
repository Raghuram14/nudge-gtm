import { ProductFrame } from "@/components/marketing/product-frame";
import type { EvidenceLine } from "@/config/home-scenarios";
import { cn } from "@/lib/cn";

/**
 * A claim with its receipt directly underneath.
 *
 * Observed facts and inferences are rendered differently on purpose: a solid
 * marker for something read from a source system, a dashed one for a
 * conclusion drawn on top of it. That separation is a product invariant, not
 * decoration.
 */

function EvidenceRow({ line }: { line: EvidenceLine }): React.ReactElement {
  const inferred = line.kind === "inferred";

  return (
    <li className="flex gap-3 py-2.5">
      <span
        aria-hidden
        className={cn(
          "mt-1.5 size-2 shrink-0 rounded-full",
          inferred
            ? "border border-dashed border-mock-amber bg-transparent"
            : "bg-mock-teal",
        )}
      />
      <span className="min-w-0">
        <span className="block text-[0.8125rem] leading-snug text-mock-text">{line.text}</span>
        <span className="mock-mono mt-1 block text-[0.6875rem] text-mock-muted">
          {line.source}
        </span>
      </span>
      <span
        className={cn(
          "mock-label ml-auto shrink-0 self-start pt-0.5",
          inferred ? "text-mock-amber" : "text-mock-muted",
        )}
      >
        {inferred ? "Inferred" : "Observed"}
      </span>
    </li>
  );
}

export function EvidenceReceipt({
  frameLabel,
  question,
  claim,
  confidence,
  evidence,
  caption,
  className,
}: {
  frameLabel: string;
  question: string;
  claim: string;
  confidence: string;
  evidence: ReadonlyArray<EvidenceLine>;
  caption?: string;
  className?: string;
}): React.ReactElement {
  return (
    <ProductFrame label={frameLabel} caption={caption} className={className}>
      <p className="mock-label">Question</p>
      <p className="mt-1.5 text-sm font-medium text-mock-text">{question}</p>

      <div className="mt-4 rounded-md border-l-2 border-mock-indigo bg-mock-panel p-3">
        <p className="mock-label">Diagnosis</p>
        <p className="mt-1.5 text-sm leading-snug text-mock-text">{claim}</p>
        <p className="mock-mono mt-2 text-[0.6875rem] text-mock-muted">
          Confidence: {confidence}
        </p>
      </div>

      <p className="mock-label mt-5">Evidence</p>
      <ul className="mt-1 divide-y divide-mock-border">
        {evidence.map((line) => (
          <EvidenceRow key={line.text} line={line} />
        ))}
      </ul>
    </ProductFrame>
  );
}
