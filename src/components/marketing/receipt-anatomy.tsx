import { ProductFrame } from "@/components/marketing/product-frame";
import { anatomyScenario } from "@/config/home-scenarios";

/**
 * The same mechanism as the hero receipt, taken apart and annotated - so the
 * reader learns the shape of a claim rather than re-reading a second story.
 */
export function ReceiptAnatomy(): React.ReactElement {
  return (
    <ProductFrame
      label={anatomyScenario.frameLabel}
      caption="Illustrative. Observed facts, inferences, and disconfirming evidence are held apart by design."
    >
      <p className="mock-label">Claim</p>
      <p className="mt-1.5 text-sm font-medium leading-snug text-mock-text">
        {anatomyScenario.claim}
      </p>

      <div className="mt-5 space-y-4">
        {anatomyScenario.parts.map((part) => (
          <div key={part.label} className="rounded-md border border-mock-border bg-mock-panel p-3">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <p className="mock-label text-mock-text">{part.label}</p>
              <p className="min-w-0 flex-1 text-[0.6875rem] leading-snug text-mock-muted">
                {part.note}
              </p>
            </div>
            <ul className="mt-2.5 space-y-2">
              {part.lines.map((line) => (
                <li key={line.text} className="border-l border-mock-border pl-3">
                  <span className="block text-[0.8125rem] leading-snug text-mock-text">
                    {line.text}
                  </span>
                  <span className="mock-mono mt-0.5 block text-[0.6875rem] text-mock-muted">
                    {line.source}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </ProductFrame>
  );
}
