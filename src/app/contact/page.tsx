import type { Metadata } from "next";

import { LeadForm } from "@/components/forms/lead-form";
import { PageHero } from "@/components/marketing/page-hero";
import { SectionShell } from "@/components/marketing/section-shell";
import { StatusMarker } from "@/components/marketing/status-marker";
import { type CtaIntent, ctaIntentSchema } from "@/config/cta";
import { ROUTES } from "@/config/routes";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact",
  description:
    "Request early access, book a demo, or join the Nudgeio design partner program. No public free trial.",
  path: ROUTES.contact,
});

type Search = { intent?: string };

const expectations = [
  {
    title: "A working session, not a pitch",
    body: "We walk the evidence model against a problem you actually have, and show where the product is and is not yet.",
  },
  {
    title: "Read-only access, scoped",
    body: "Nothing is connected during a first conversation. When it is, connectors read the engineering context needed to build entities - not a wholesale dump.",
  },
  {
    title: "An honest build status",
    body: "You will get the current state of each capability rather than a roadmap presented as a product.",
  },
];

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<Search>;
}): Promise<React.ReactElement> {
  const params = await searchParams;
  const parsed = ctaIntentSchema.safeParse(params.intent);
  const intent: CtaIntent | undefined = parsed.success ? parsed.data : undefined;

  return (
    <main id="main">
      <PageHero
        crumbs={[{ href: ROUTES.contact, label: "Contact" }]}
        eyebrow="Contact"
        title="Talk to Nudgeio."
        description="Request early access, book a demo, or join the design partner program. There is no public free trial - we are working with a small number of teams while the graph is built."
      />

      <SectionShell space="md">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
          <div className="gtm-panel p-6 md:p-8">
            <LeadForm defaultIntent={intent} />
          </div>

          <div className="lg:pt-2">
            <h2 className="type-section-title text-foreground">What to expect</h2>
            <ul className="mt-6 flex flex-col">
              {expectations.map((item) => (
                <li key={item.title} className="border-t border-border py-5 first:border-t-0 first:pt-0">
                  <p className="text-sm font-medium text-foreground">{item.title}</p>
                  <p className="type-caption mt-1.5">{item.body}</p>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-lg border border-border bg-surface-elevated p-5">
              <p className="type-label">Current build</p>
              <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
                <li className="flex items-center gap-2">
                  <StatusMarker state="live" />
                  <span className="type-caption">GitHub ingestion</span>
                </li>
                <li className="flex items-center gap-2">
                  <StatusMarker state="building" />
                  <span className="type-caption">Knowledge graph</span>
                </li>
              </ul>
              <p className="type-caption mt-3">
                The full ledger is on the{" "}
                <a href={`${ROUTES.home}#build-status`} className="text-accent hover:underline">
                  homepage
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </SectionShell>
    </main>
  );
}
