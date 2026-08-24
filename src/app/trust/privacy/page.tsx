import type { Metadata } from "next";

import { SimplePage } from "@/components/marketing/simple-page";
import { ROUTES } from "@/config/routes";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Privacy",
  description:
    "Nudgeio privacy intent: minimize personal data on this marketing site, and do not use analytics for individual surveillance.",
  path: ROUTES.trustPrivacy,
});

export default function Page(): React.ReactElement {
  return (
    <SimplePage
      crumbs={[
        { href: ROUTES.trust, label: "Trust" },
        { href: ROUTES.trustPrivacy, label: "Privacy" },
      ]}
      title="Privacy"
      description="The contact form collects only what is needed to respond to early access, demo, or design-partner requests."
    >
      <p>
        We do not log form bodies or email addresses in the browser console. Analytics are
        abstracted and must not identify individuals. A full legal privacy policy will replace this
        intent page when counsel provides it - we will not invent one.
      </p>
    </SimplePage>
  );
}
