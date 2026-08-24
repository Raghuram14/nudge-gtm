import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const sparkPoints = "0,36 24,32 48,28 72,30 96,22 120,24 144,14 168,18 192,10 216,12";

export function ExampleSparkline(): React.ReactElement {
  return (
    <svg viewBox="0 0 216 44" className="h-16 w-full text-accent" role="img" aria-labelledby="spark-title">
      <title id="spark-title">Example cycle time trend over one sprint</title>
      <polyline
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        points={sparkPoints}
        className="spark-line"
      />
      <circle cx="216" cy="12" r="4" className="fill-accent spark-dot" />
    </svg>
  );
}

export function ExampleBars(): React.ReactElement {
  const rows = [
    { label: "Review wait", width: "w-5/6", value: "18h" },
    { label: "Blocked work", width: "w-3/5", value: "3 items" },
    { label: "Downstream", width: "w-2/5", value: "2 services" },
  ] as const;

  return (
    <ul className="grid gap-3">
      {rows.map((row, index) => {
        const delays = ["delay-1", "delay-2", "delay-3"] as const;
        const delay = delays[index];
        return (
          <li key={row.label}>
            <div className="mb-1 flex justify-between text-xs text-muted">
              <span>{row.label}</span>
              <span>{row.value}</span>
            </div>
            <div className="h-2 overflow-hidden rounded-sm bg-surface-raised">
              <div className={`bar-fill h-full rounded-sm bg-accent ${row.width} ${delay ?? ""}`} />
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export function ExampleRiskMeter(): React.ReactElement {
  return (
    <div className="flex items-center gap-4">
      <svg viewBox="0 0 120 70" className="h-16 w-28" role="img" aria-labelledby="risk-title">
        <title id="risk-title">Example sprint risk meter at medium</title>
        <path
          d="M10 60 A50 50 0 0 1 110 60"
          className="fill-none stroke-border"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <path
          d="M10 60 A50 50 0 0 1 78 18"
          className="fill-none stroke-risk-medium meter-arc"
          strokeWidth="10"
          strokeLinecap="round"
        />
      </svg>
      <div>
        <p className="text-3xl font-semibold text-risk-medium">Medium</p>
        <p className="text-xs text-muted">Sprint risk · Example</p>
      </div>
    </div>
  );
}

export function HeroMetricsPanel(): React.ReactElement {
  return (
    <Card className="gtm-panel flex h-full flex-col border-accent bg-surface">
      <div className="mb-4 flex items-center justify-between gap-2">
        <p className="text-sm font-medium">Project Alpha · this sprint</p>
        <Badge tone="example">Example</Badge>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-wide text-muted">Cycle time</p>
          <p className="mt-1 text-5xl font-semibold tracking-tight">6.1d</p>
          <p className="mt-1 text-sm text-risk-medium">+1.9d vs prior window</p>
          <ExampleSparkline />
        </div>
        <div>
          <ExampleRiskMeter />
          <div className="mt-4">
            <ExampleBars />
          </div>
        </div>
      </div>
      <p className="mt-4 text-xs text-muted">
        Illustrative numbers only. Window: one sprint. Scope: one project. Not customer data.
      </p>
    </Card>
  );
}
