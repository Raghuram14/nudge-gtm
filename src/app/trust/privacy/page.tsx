import type { Metadata } from "next";

import { SimplePage } from "@/components/marketing/simple-page";
import { ROUTES } from "@/config/routes";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Privacy",
  description:
    "What this site collects, what the product collects, and the legal privacy policy status. Nudgeio does not invent policy documents.",
  path: ROUTES.trustPrivacy,
});

export default function Page(): React.ReactElement {
  return (
    <SimplePage
      crumbs={[
        { href: ROUTES.trust, label: "Trust" },
        { href: ROUTES.trustPrivacy, label: "Privacy" },
      ]}
      eyebrow="Trust"
      title="Privacy"
      description="Two different things are worth separating: what this marketing site collects about you, and what the product would collect about your engineering organisation."
    >
      <h2>This website</h2>
      <p>
        The contact form collects only what is needed to reply to an early access, demo, or design
        partner request: a name, a work email, optionally a company and role, and whatever context
        you choose to write. Form bodies and email addresses are not logged to the browser console.
      </p>
      <p>
        Where analytics exist, they are aggregate and must not identify an individual visitor. We
        are not building a profile of you for later.
      </p>

      <h2>The product</h2>
      <p>
        The product reads engineering context from systems you explicitly connect. It is designed
        so that the data needed to characterise an individual&rsquo;s output is not part of the
        model at all &mdash; see <a href={ROUTES.trustNoSurveillance}>no surveillance</a> for why
        that is a structural choice rather than a setting, and{" "}
        <a href={ROUTES.trustData}>data</a> for what is actually read.
      </p>

      <h2>The legal document</h2>
      <p>
        There is no full privacy policy on this site yet, because we have not had one drafted. When
        counsel provides one it will replace this page. We would rather say that plainly than
        publish a template we have not read carefully, which is what most pre-launch companies do.
      </p>
    </SimplePage>
  );
}
