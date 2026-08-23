/**
 * Homepage — Phase 3 route integration. Loads demo on the server via `getHomeDemoData()`,
 * passes typed props to Phase 1 presentational blocks (no direct mock imports here).
 */
import Link from "next/link";

import { ContextGraphVisualizer } from "@/components/marketing/context-graph-visualizer";
import { CtaBlock } from "@/components/marketing/cta-block";
import { EvidenceFlowHero } from "@/components/marketing/evidence-flow-hero";
import { Faq } from "@/components/marketing/faq";
import { FragmentationVisual } from "@/components/marketing/fragmentation-visual";
import { HomeCommandDashboard } from "@/components/marketing/home-command-dashboard";
import { HomeSection } from "@/components/marketing/home-section";
import { IntegrationPreview } from "@/components/marketing/integration-preview";
import { InvestigationDemo } from "@/components/marketing/investigation-demo";
import { SectionHeading } from "@/components/marketing/section-heading";
import { SystemDiagram } from "@/components/marketing/system-diagram";
import { Button } from "@/components/ui/button";
import { ctaConfig } from "@/config/cta";
import { homeFaqs } from "@/config/faq";
import { homeProblem, homeStats } from "@/config/home-content";
import { ROUTES } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { getHomeDemoData } from "@/lib/api/home-demo";

const heroSignals = [
  { label: "Evidence", color: "bg-observed" },
  { label: "Context", color: "bg-accent" },
  { label: "Why", color: "bg-inferred" },
] as const;

export async function HomePage(): Promise<React.ReactElement> {
  const demo = await getHomeDemoData();
  const exampleLabel = demo.isExample ? "Example · " : "";

  return (
    <main id="main">
      <section className="hero-grid border-b border-border">
        <div className="mx-auto grid w-full max-w-6xl items-stretch gap-10 px-4 py-14 lg:grid-cols-2 lg:py-20">
          <div className="flex animate-fade-up flex-col justify-center">
            <p className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              {siteConfig.name}
            </p>

            <div className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-accent/30 bg-accent-muted px-3 py-1.5">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-40" />
                <span className="relative inline-flex size-2 rounded-full bg-accent" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                Engineering intelligence
              </span>
            </div>

            <h1 className="mt-5 text-balance text-5xl font-semibold tracking-tight md:text-7xl">
              Understand why engineering{" "}
              <span className="shine-text italic text-accent">changes</span>.
            </h1>

            <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted">
              {siteConfig.visitorSentence}
            </p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {heroSignals.map((signal) => (
                <li
                  key={signal.label}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-sm font-medium text-foreground"
                >
                  <span className={`size-2 rounded-full ${signal.color}`} aria-hidden />
                  {signal.label}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                href={`${ROUTES.contact}?intent=${ctaConfig.seeInAction.intent}`}
                size="lg"
              >
                {ctaConfig.seeInAction.label}
              </Button>
              <Button href={ctaConfig.exploreHowItWorks.href} variant="secondary" size="lg">
                {ctaConfig.exploreHowItWorks.label}
              </Button>
            </div>

            <p className="mt-5 text-sm text-muted">
              Built for CTOs, VPs, and engineering leaders —{" "}
              <Link href={ROUTES.engineeringIntelligence} className="text-accent hover:underline">
                see the platform
              </Link>
              .
            </p>
          </div>
          <EvidenceFlowHero
            company={demo.company}
            evidence={demo.evidence}
            investigation={demo.investigation}
            isExample={demo.isExample}
          />
        </div>
      </section>

      <section className="gtm-glass border-b border-border">
        <dl className="mx-auto grid w-full max-w-6xl items-stretch gap-4 px-4 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {homeStats.map((stat, index) => {
            const tones = [
              "text-accent",
              "text-risk-high",
              "text-observed",
              "text-inferred",
            ] as const;
            return (
              <div
                key={stat.label}
                className="lift breathe-border flex min-h-24 flex-col justify-center rounded-xl border border-border bg-surface px-4 py-4"
              >
                <dt className="text-xs uppercase tracking-wide text-muted">{stat.label}</dt>
                <dd
                  className={`mt-1 text-4xl font-semibold tabular-nums ${tones[index] ?? "text-accent"}`}
                >
                  {stat.value}
                </dd>
              </div>
            );
          })}
        </dl>
      </section>

      <div className="mx-auto w-full max-w-6xl px-4">
        <HomeSection className="py-14">
          <SectionHeading title={homeProblem.title} />
          <FragmentationVisual sources={demo.fragmentationSources} evidence={demo.evidence} />
        </HomeSection>

        <HomeSection className="py-14">
          <SectionHeading
            eyebrow="Live view"
            title="See the signal before the story."
            description={`${exampleLabel}${demo.company.name} · ${demo.isExample ? "not customer data" : "connected workspace"}`}
          />
          <HomeCommandDashboard
            company={demo.company}
            dashboard={demo.dashboard}
            isExample={demo.isExample}
          />
        </HomeSection>

        <HomeSection id="how-it-works" className="py-14">
          <SectionHeading
            eyebrow="How it works"
            title="Evidence → Context → Graph → Reasoning → Action"
          />
          <SystemDiagram />
        </HomeSection>

        <HomeSection className="py-14">
          <SectionHeading eyebrow="Ask why" title="Click through a +31% cycle time spike." />
          <InvestigationDemo
            company={demo.company}
            investigation={demo.investigation}
            evidenceItems={demo.evidenceItems}
            graphNodes={demo.graphNodes}
            isExample={demo.isExample}
          />
        </HomeSection>

        <HomeSection className="py-14">
          <SectionHeading eyebrow="Context graph" title="847 events. One map." />
          <ContextGraphVisualizer layout={demo.contextGraph} />
          <p className="mt-4">
            <Link href={ROUTES.contextGraph} className="text-sm text-accent hover:underline">
              Explore the graph →
            </Link>
          </p>
        </HomeSection>

        <HomeSection className="py-14">
          <SectionHeading eyebrow="Integrations" title="GitHub + Jira first." />
          <IntegrationPreview />
        </HomeSection>

        <HomeSection id="faq" className="py-14">
          <SectionHeading eyebrow="FAQ" title="Quick answers." />
          <Faq items={homeFaqs} />
        </HomeSection>

        <HomeSection className="py-14">
          <CtaBlock />
        </HomeSection>
      </div>
    </main>
  );
}
