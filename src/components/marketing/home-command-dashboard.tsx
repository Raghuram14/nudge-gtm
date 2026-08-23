/** Phase 1 — KPI mock dashboard; SVG sparkline data lives in `dashboard` prop. */
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { CommandDashboardData } from "@/lib/marketing/types";

type HomeCommandDashboardProps = {
  company: { name: string };
  dashboard: CommandDashboardData;
  isExample?: boolean;
};

export function HomeCommandDashboard({
  company,
  dashboard,
  isExample = true,
}: HomeCommandDashboardProps): React.ReactElement {
  const { kpis, drivers, sideStats } = dashboard;

  return (
    <Card className="mock-ui flash-edge animate-float relative overflow-hidden p-0">
      <div className="relative flex items-center justify-between gap-3 border-b border-mock-border px-5 py-4">
        <div className="flex items-center gap-3">
          <span className="size-2 animate-pulse rounded-full bg-mock-teal shadow-[0_0_10px_var(--mock-teal)]" />
          <div>
            <p className="text-sm font-medium text-mock-text">{company.name}</p>
            <p className="mock-label mt-0.5">
              Last 30 days · {isExample ? "live example" : "live data"}
            </p>
          </div>
        </div>
        {isExample ? <Badge tone="example">Example</Badge> : null}
      </div>

      <svg width="0" height="0" className="absolute" aria-hidden>
        <defs>
          <linearGradient id="kpi-fill-amber" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--mock-amber)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="var(--mock-amber)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="kpi-fill-indigo" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--mock-indigo)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="var(--mock-indigo)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="kpi-fill-teal" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--mock-teal)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="var(--mock-teal)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="kpi-fill-coral" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f07a6a" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#f07a6a" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <div className="relative grid gap-px bg-mock-border sm:grid-cols-2 lg:grid-cols-4">
        {kpis.map((kpi, index) => (
          <div key={kpi.label} className="bg-mock-panel px-4 py-4">
            <p className="mock-label">{kpi.label}</p>
            <div className="mt-2 flex items-baseline gap-2">
              <p className="text-3xl font-semibold tabular-nums text-mock-text">{kpi.value}</p>
              <p className="text-sm font-semibold" style={{ color: kpi.stroke }}>
                {kpi.delta}
              </p>
            </div>
            <svg viewBox="0 0 200 40" className="mt-3 h-10 w-full" aria-hidden>
              <polygon points={kpi.area} fill={`url(#${kpi.fillId})`} />
              <polyline
                fill="none"
                stroke={kpi.stroke}
                strokeWidth="2.5"
                strokeLinecap="round"
                points={kpi.points}
                className={`spark-line delay-${index + 1}`}
              />
            </svg>
          </div>
        ))}
      </div>

      <div className="relative grid gap-6 px-5 py-5 lg:grid-cols-[1.4fr_1fr] lg:items-center">
        <div>
          <p className="mock-label mb-4">Why cycle time moved</p>
          <ul className="space-y-3.5">
            {drivers.map((row, index) => (
              <li key={row.label}>
                <div className="mb-1.5 flex justify-between text-sm">
                  <span className="text-mock-muted">{row.label}</span>
                  <span className="mock-mono font-semibold" style={{ color: row.color }}>
                    {row.value}
                  </span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-mock-panel-elevated">
                  <div
                    className={`bar-fill h-full rounded-full delay-${index + 1}`}
                    style={{
                      width: `${row.pct}%`,
                      background: `linear-gradient(90deg, ${row.color}, color-mix(in oklab, ${row.color} 60%, white))`,
                    }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-3 gap-3 lg:grid-cols-1">
          {sideStats.map((stat) => (
            <div
              key={stat.label}
              className="mock-panel flex flex-col justify-center px-4 py-3 text-center lg:text-left"
            >
              <p className={`text-3xl font-semibold tabular-nums ${stat.color}`}>{stat.value}</p>
              <p className="mock-label mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
