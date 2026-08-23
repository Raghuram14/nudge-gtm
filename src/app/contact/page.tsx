import type { Metadata } from "next";

import { LeadForm } from "@/components/forms/lead-form";
import { Breadcrumbs } from "@/components/marketing/breadcrumbs";
import { ColorNavCard } from "@/components/marketing/color-nav-card";
import { PageHero } from "@/components/marketing/page-hero";
import { Reveal } from "@/components/motion/reveal";
import { type CtaIntent, ctaIntentSchema } from "@/config/cta";
import { ROUTES } from "@/config/routes";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact",
  description:
    "Request early access, book a demo, or join the Antarang design partner program. No public free trial.",
  path: ROUTES.contact,
});

type Search = { intent?: string };

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<Search>;
}): Promise<React.ReactElement> {
  const params = await searchParams;
  const parsed = ctaIntentSchema.safeParse(params.intent);
  const intent: CtaIntent | undefined = parsed.success ? parsed.data : undefined;

  return (
    <main id="main" className="mx-auto w-full max-w-6xl px-4 py-10">
      <Reveal>
        <Breadcrumbs items={[{ href: ROUTES.contact, label: "Contact" }]} />
        <PageHero
          title="Talk to Antarang"
          description="Request early access, book a demo, or join the design partner program. We do not offer a public free trial on this site."
        />
      </Reveal>
      <Reveal>
        <div className="mb-8 grid gap-3 sm:grid-cols-3">
          <ColorNavCard
            href={`${ROUTES.contact}?intent=demo`}
            title="Book a demo"
            description="See Antarang in action"
            accent="indigo"
          />
          <ColorNavCard
            href={`${ROUTES.contact}?intent=early-access`}
            title="Early access"
            description="Join the waitlist"
            accent="teal"
          />
          <ColorNavCard
            href={ROUTES.trust}
            title="Trust"
            description="Security & privacy"
            accent="coral"
          />
        </div>
        <div className="rounded-xl border border-l-4 border-border border-l-accent bg-accent-muted/40 p-6 md:p-8">
          <LeadForm defaultIntent={intent} />
        </div>
      </Reveal>
    </main>
  );
}
