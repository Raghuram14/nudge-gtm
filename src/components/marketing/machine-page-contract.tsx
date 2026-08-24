import { Card } from "@/components/ui/card";

export function MachinePageContract({
  what,
  who,
  problem,
  how,
  data,
  output,
  availability,
  differ,
  learnMore,
}: {
  what: string;
  who: string;
  problem: string;
  how: string;
  data: string;
  output: string;
  availability: string;
  differ: string;
  learnMore: string;
}): React.ReactElement {
  return (
    <Card as="section">
      <details>
        <summary className="cursor-pointer text-lg font-semibold">In short</summary>
      <dl className="mt-4 grid gap-3 text-sm">
        <div>
          <dt className="font-medium">What is Nudgeio?</dt>
          <dd className="text-muted">{what}</dd>
        </div>
        <div>
          <dt className="font-medium">Who is it for?</dt>
          <dd className="text-muted">{who}</dd>
        </div>
        <div>
          <dt className="font-medium">What problem?</dt>
          <dd className="text-muted">{problem}</dd>
        </div>
        <div>
          <dt className="font-medium">How it works</dt>
          <dd className="text-muted">{how}</dd>
        </div>
        <div>
          <dt className="font-medium">What data it connects</dt>
          <dd className="text-muted">{data}</dd>
        </div>
        <div>
          <dt className="font-medium">What it outputs</dt>
          <dd className="text-muted">{output}</dd>
        </div>
        <div>
          <dt className="font-medium">Available today vs future</dt>
          <dd className="text-muted">{availability}</dd>
        </div>
        <div>
          <dt className="font-medium">How it differs</dt>
          <dd className="text-muted">{differ}</dd>
        </div>
        <div>
          <dt className="font-medium">Where to learn more</dt>
          <dd className="text-muted">{learnMore}</dd>
        </div>
      </dl>
      </details>
    </Card>
  );
}
