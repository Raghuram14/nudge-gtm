import Link from "next/link";

import { CapabilityLedger } from "@/components/marketing/capability-ledger";
import { EvidenceReceipt } from "@/components/marketing/evidence-receipt";
import { Faq } from "@/components/marketing/faq";
import { IntegrationLogo } from "@/components/marketing/integration-logo";
import { IntegrationPreview } from "@/components/marketing/integration-preview";
import { InvestigationExperience } from "@/components/marketing/investigation-experience";
import { ReceiptAnatomy } from "@/components/marketing/receipt-anatomy";
import { SectionHeading } from "@/components/marketing/section-heading";
import { PullQuote, SectionShell, SplitSection } from "@/components/marketing/section-shell";
import { StatusMarker } from "@/components/marketing/status-marker";
import { Button } from "@/components/ui/button";
import { ctaConfig } from "@/config/cta";
import { homeFaqs } from "@/config/faq";
import { heroScenario, sourceStrip } from "@/config/home-scenarios";
import { ROUTES } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { getHomeDemoData } from "@/lib/api/home-demo";

export async function HomePage(): Promise<React.ReactElement> {
  const demo = await getHomeDemoData();

  return (
    <main id="main">
      {/* 1 - Hero. Assertion, then the receipt for it, side by side. */}
      <section className="hero-atmosphere border-b border-border">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-16 lg:pb-28 lg:pt-24">
          <div className="animate-fade-up">
            <p className="type-label text-accent">{siteConfig.category}</p>
            <h1 className="type-display mt-5 text-balance text-foreground">
              Engineering decisions deserve evidence.
            </h1>
            <p className="type-lead mt-6">
              Nudgeio connects the systems your team already uses and explains why delivery moved -
              with the specific commits, tickets, and reviews behind every claim.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button href={`${ROUTES.contact}?intent=${ctaConfig.demo.intent}`} size="lg">
                Book a demo
              </Button>
              <Button href={ROUTES.evidenceFirstAi} variant="secondary" size="lg">
                Read the thesis
              </Button>
            </div>
            <p className="type-caption mt-6 max-w-md">
              Pre-launch. We work with a small group of design partners, and we publish exactly
              what is built.
            </p>
          </div>

          <div className="animate-fade-up [animation-delay:120ms]">
            <EvidenceReceipt
              frameLabel={heroScenario.frameLabel}
              question={heroScenario.question}
              claim={heroScenario.claim}
              confidence={heroScenario.confidence}
              evidence={heroScenario.evidence}
              caption="Illustrative example. Not customer data."
            />
          </div>
        </div>
      </section>

      {/* 2 - Sources. No customer logos: we have none, so we show what we read. */}
      <SectionShell tone="paper" space="sm" reveal={false}>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <p className="type-label max-w-xs">Reads the systems you already use</p>
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-5">
            {sourceStrip.map((source) => (
              <li key={source.slug} className="flex items-center gap-2.5">
                <IntegrationLogo slug={source.slug} name={source.name} size="sm" />
                <span className="min-w-0">
                  <span className="block text-sm font-medium text-foreground">{source.name}</span>
                  <StatusMarker state={source.state} className="mt-0.5" />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </SectionShell>

      {/* 3 - The problem. Full-bleed tinted band. */}
      <SectionShell tone="tinted" space="lg">
        <div className="max-w-3xl">
          <p className="type-label text-accent">The problem</p>
          <h2 className="type-page-title mt-4 text-balance text-foreground">
            The evidence already exists. The connections don&rsquo;t.
          </h2>
          <p className="type-body mt-6">
            The reason a sprint slipped is sitting in your systems right now - in a ticket edited on
            day six, a pull request that tripled in size, a reviewer who was on leave. But it is
            scattered across tools that do not share a definition of a person, a service, or a
            piece of work.
          </p>
          <p className="type-body mt-4">
            So engineering leaders get dashboards that describe what happened and leave the why to
            memory and meetings. Charts go up, charts go down, and the argument about the cause is
            settled by whoever is most senior in the room.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3">
          {[
            {
              title: "Metrics without cause",
              body: "Cycle time is up 31%. No tool tells you which change made it move.",
            },
            {
              title: "Context that expires",
              body: "The person who knew why the retry logic exists left eighteen months ago.",
            },
            {
              title: "Claims you cannot check",
              body: "An AI summary asserts a cause. There is no way to inspect or dispute it.",
            },
          ].map((item) => (
            <div key={item.title} className="bg-surface p-6">
              <p className="type-subsection text-foreground">{item.title}</p>
              <p className="type-caption mt-2">{item.body}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      {/* 4 - The mechanism, taken apart. */}
      <SectionShell space="lg">
        <SplitSection reverse media={<ReceiptAnatomy />}>
          <p className="type-label text-accent">The mechanism</p>
          <h2 className="type-page-title mt-4 text-balance text-foreground">
            Anatomy of a receipt.
          </h2>
          <p className="type-body mt-6">
            Every claim Nudgeio makes is decomposed into the artifacts that produced it. Facts read
            from a source system are held apart from conclusions drawn on top of them, and each
            conclusion carries its own confidence.
          </p>
          <p className="type-body mt-4">
            The disconfirming evidence is stated too - what we looked for that would have made the
            claim wrong. A diagnosis you cannot argue with is not a diagnosis.
          </p>
          <p className="mt-7">
            <Link
              href={ROUTES.evidenceFirstAi}
              className="text-sm font-medium text-accent underline-offset-4 hover:underline"
            >
              How evidence-first AI works &rarr;
            </Link>
          </p>
        </SplitSection>
      </SectionShell>

      {/* 5 - The one interactive moment on the page. */}
      <SectionShell tone="tinted" space="lg" id="investigation">
        <SectionHeading
          eyebrow="Try it"
          title="Follow an investigation."
          description="Open a hypothesis, inspect the evidence behind it, or apply a simulated nudge. Nothing auto-plays - you drive."
        />
        <InvestigationExperience companyName={demo.company.name} isExample={demo.isExample} />
      </SectionShell>

      {/* 6 - Editorial beat. */}
      <SectionShell space="lg">
        <PullQuote attribution="Product principle">
          Correlation is not causation. An insight you cannot inspect is just an opinion with a
          chart attached.
        </PullQuote>
      </SectionShell>

      {/* 7 - The status ledger. Honesty as a designed element. */}
      <SectionShell tone="tinted" space="lg" id="build-status">
        <SectionHeading
          eyebrow="Build status"
          title="What is live, and what is not."
          description="We are pre-launch. Rather than implying the whole vision ships today, here is the current state of each capability."
        />
        <CapabilityLedger />
        <p className="type-caption mt-6">
          Updated as the product changes.{" "}
          <Link
            href={`${ROUTES.contact}?intent=${ctaConfig.designPartner.intent}`}
            className="font-medium text-accent underline-offset-4 hover:underline"
          >
            Ask us for the current build
          </Link>
          .
        </p>
      </SectionShell>

      {/* 8 - Integrations. */}
      <SectionShell space="lg">
        <SectionHeading
          eyebrow="Sources"
          title="Integrations are inputs, not the product."
          description="GitHub first, Jira next. Everything else carries an honest status rather than a logo wall."
        />
        <IntegrationPreview />
        <p className="mt-6">
          <Link
            href={ROUTES.integrations}
            className="text-sm font-medium text-accent underline-offset-4 hover:underline"
          >
            See all integrations &rarr;
          </Link>
        </p>
      </SectionShell>

      {/* 9 - The position. The page's one tonal inversion. */}
      <SectionShell tone="inverted" space="lg">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <p className="type-label text-accent">Where we stand</p>
            <h2 className="type-page-title mt-4 text-balance">
              We will not rank your developers.
            </h2>
            <p className="type-body mt-6">
              Commit counts, lines of code, and hours online are not performance. Building a
              product on them produces surveillance that engineers correctly distrust, and
              conclusions that do not survive contact with reality.
            </p>
            <p className="type-body mt-4">
              Team health is not the sum of individual activity. This is enforced by how the
              product is built, not by an admin setting someone can switch off.
            </p>
            <p className="mt-7">
              <Link
                href={ROUTES.trustNoSurveillance}
                className="text-sm font-medium text-accent underline-offset-4 hover:underline"
              >
                Read the no-surveillance commitment &rarr;
              </Link>
            </p>
          </div>

          <ul className="grid gap-px self-start overflow-hidden rounded-lg border border-inverted-border bg-inverted-border">
            {[
              { href: ROUTES.trustSecurity, label: "Security", note: "How access is scoped." },
              { href: ROUTES.trustPrivacy, label: "Privacy", note: "What we never collect." },
              { href: ROUTES.trustData, label: "Data", note: "What is stored, and where." },
              {
                href: ROUTES.trustNoSurveillance,
                label: "No surveillance",
                note: "The invariant, in full.",
              },
            ].map((item) => (
              <li key={item.href} className="bg-inverted-bg">
                <Link
                  href={item.href}
                  className="flex items-baseline justify-between gap-4 px-5 py-4 transition-colors hover:bg-inverted-surface"
                >
                  <span className="text-sm font-medium text-inverted-text">{item.label}</span>
                  <span className="type-caption text-right">{item.note}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </SectionShell>

      {/* 10 - FAQ, then the one privileged CTA. */}
      <SectionShell space="lg" id="faq" width="prose">
        <SectionHeading eyebrow="Questions" title="Quick answers." />
        <Faq items={homeFaqs} />
      </SectionShell>

      <SectionShell tone="tinted" space="lg">
        <div className="rounded-xl border border-border-strong bg-surface px-6 py-12 text-center sm:px-12">
          <p className="type-label text-accent">Design partner program</p>
          <h2 className="type-page-title mx-auto mt-4 max-w-2xl text-balance text-foreground">
            See it against your own repositories.
          </h2>
          <p className="type-lead mx-auto mt-5 text-balance">
            We are working with a small number of teams while the graph is built. If you want to
            shape what gets built, this is the moment.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Button href={`${ROUTES.contact}?intent=${ctaConfig.demo.intent}`} size="lg">
              Book a demo
            </Button>
            <Button
              href={`${ROUTES.contact}?intent=${ctaConfig.designPartner.intent}`}
              variant="secondary"
              size="lg"
            >
              {ctaConfig.designPartner.label}
            </Button>
          </div>
        </div>
      </SectionShell>
    </main>
  );
}
