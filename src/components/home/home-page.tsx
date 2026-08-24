import Link from "next/link";

import { CtaBlock } from "@/components/marketing/cta-block";
import { Faq } from "@/components/marketing/faq";
import { HeroStage } from "@/components/marketing/hero-stage";
import { HomeSection } from "@/components/marketing/home-section";
import { HowItWorksPipeline } from "@/components/marketing/how-it-works-pipeline";
import { IntegrationPreview } from "@/components/marketing/integration-preview";
import { InvestigationExperience } from "@/components/marketing/investigation-experience";
import { SectionHeading } from "@/components/marketing/section-heading";
import { WhatItDoes } from "@/components/marketing/what-it-does";
import { Button } from "@/components/ui/button";
import { ctaConfig } from "@/config/cta";
import { homeFaqs } from "@/config/faq";
import { ROUTES } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { getHomeDemoData } from "@/lib/api/home-demo";

export async function HomePage(): Promise<React.ReactElement> {
  const demo = await getHomeDemoData();

  return (
    <main id="main">
      <section className="hero-atmosphere border-b border-border">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 pb-16 pt-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center lg:gap-12 lg:pb-20 lg:pt-16">
          <div className="animate-fade-up max-w-xl">
            <p className="type-label text-accent">{siteConfig.category}</p>
            <h1 className="type-display mt-4 text-foreground">
              See why engineering work stalled — and what to fix next.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-text-secondary">
              Nudgeio is the intelligence layer for engineering teams. It connects GitHub and Jira
              into an evidence chain: when cycle time spikes or a sprint slips, you get ranked
              diagnoses you can inspect, then a concrete nudge.
            </p>
            <p className="mt-3 text-base leading-relaxed text-text-tertiary">
              Not another dashboard. Not a black-box AI summary. Every claim has a receipt.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button
                href={`${ROUTES.contact}?intent=${ctaConfig.seeInAction.intent}`}
                size="lg"
              >
                {ctaConfig.seeInAction.label}
              </Button>
              <Button href="#what-it-does" variant="secondary" size="lg">
                What Nudgeio does
              </Button>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
              <li>Evidence behind every insight</li>
              <li>Facts separated from inferences</li>
              <li>No individual surveillance</li>
            </ul>
          </div>

          <div className="animate-fade-up [animation-delay:120ms]">
            <HeroStage isExample={demo.isExample} />
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-6xl px-4">
        <HomeSection id="what-it-does" className="py-16 md:py-20">
          <SectionHeading
            title="What Nudgeio does"
            description="Three steps. Same systems you already use. Understanding you can defend in a meeting."
          />
          <WhatItDoes />
        </HomeSection>

        <HomeSection id="how-it-works" className="py-16 md:py-20">
          <SectionHeading
            title="How a diagnosis is built"
            description="Signal → evidence → competing hypotheses → nudge. You can pause on any step."
          />
          <HowItWorksPipeline />
        </HomeSection>

        <HomeSection className="py-16 md:py-20">
          <SectionHeading
            title="Try an investigation"
            description="Click a hypothesis, open evidence, or apply a simulated nudge when you want — nothing auto-plays."
          />
          <InvestigationExperience
            companyName={demo.company.name}
            isExample={demo.isExample}
          />
        </HomeSection>

        <HomeSection className="py-16 md:py-20">
          <SectionHeading
            title="Works where your team already works"
            description="GitHub and Jira first. Other sources only appear with honest status."
          />
          <IntegrationPreview />
          <p className="mt-4">
            <Link href={ROUTES.integrations} className="text-sm text-accent hover:underline">
              See integrations
            </Link>
          </p>
        </HomeSection>

        <HomeSection className="py-16 md:py-20">
          <SectionHeading
            title="Trust is part of the product"
            description="Sensitive engineering context needs provenance, privacy, and clear boundaries — not surveillance."
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { href: ROUTES.trustSecurity, label: "Security" },
              { href: ROUTES.trustPrivacy, label: "Privacy" },
              { href: ROUTES.trustData, label: "Data" },
              { href: ROUTES.trustNoSurveillance, label: "No surveillance" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg border border-border bg-surface px-4 py-4 text-sm font-medium text-foreground transition-colors hover:border-accent/40 hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </HomeSection>

        <HomeSection id="faq" className="py-16 md:py-20">
          <SectionHeading title="Quick answers" />
          <Faq items={homeFaqs} />
        </HomeSection>

        <HomeSection className="py-16 md:py-20">
          <CtaBlock
            title="Release with understanding."
            description="See Nudgeio turn fragmented signals into evidence-backed diagnosis — then decide what to do next."
          />
        </HomeSection>
      </div>
    </main>
  );
}
