import type { Metadata } from "next";

import { SimplePage } from "@/components/marketing/simple-page";
import { ROUTES } from "@/config/routes";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "No surveillance",
  description:
    "Nudgeio measures engineering systems and outcomes, never individual activity. No individual rankings, no leaderboards, no hours-online monitoring.",
  path: ROUTES.trustNoSurveillance,
});

const never = [
  "Rank, score, or grade individual engineers.",
  "Publish leaderboards of any kind.",
  "Present commit counts, lines of code, or pull request counts as a measure of a person.",
  "Monitor hours online, activity windows, or keystroke-level behaviour.",
  "Send a manager a report characterising one person's output.",
] as const;

const instead = [
  {
    title: "Systems, not people",
    body: "The unit of analysis is a service, a workflow, a sprint, or a review queue - things a team can change. A bottleneck in review routing is a property of the system, not of whoever happened to be assigned.",
  },
  {
    title: "Outcomes, not activity",
    body: "Whether work reached production, whether it stayed up, and whether a change had the effect it was supposed to have. Activity volume tells you almost nothing about any of these.",
  },
  {
    title: "Evidence a person can dispute",
    body: "Because every claim carries its sources, anyone affected by a conclusion can inspect the reasoning and argue with it. Opaque scoring cannot be argued with, which is precisely why it corrodes trust.",
  },
] as const;

export default function Page(): React.ReactElement {
  return (
    <SimplePage
      crumbs={[
        { href: ROUTES.trust, label: "Trust" },
        { href: ROUTES.trustNoSurveillance, label: "No surveillance" },
      ]}
      eyebrow="Trust"
      title="We measure systems, not people."
      description="Engineering intelligence built on individual activity produces surveillance that engineers correctly distrust - and conclusions that do not survive contact with reality."
    >
      <h2>Why this is a design constraint, not a policy</h2>
      <p>
        A setting that an administrator can switch on is not a commitment. If a product can rank
        people, someone eventually will, and everyone in the organisation will assume it already
        happened. The only credible version of this promise is one the product cannot break: the
        measures do not exist, so they cannot be turned on.
      </p>
      <p>
        There is a second, less moral reason. Raw activity is a bad proxy. A developer who spends
        three days reading code and deletes two hundred lines may have done the most valuable work
        that week. Any model that treats output volume as performance will systematically reward
        the wrong behaviour, and engineers will notice long before the dashboard does.
      </p>

      <h2>What Nudgeio will never do</h2>
      <ul className="grid gap-px overflow-hidden rounded-lg border border-border bg-border">
        {never.map((item) => (
          <li key={item} className="bg-surface px-5 py-4 text-sm text-foreground">
            {item}
          </li>
        ))}
      </ul>

      <h2>What it does instead</h2>
      <ul className="grid gap-6">
        {instead.map((item) => (
          <li key={item.title} className="border-l-2 border-border pl-5">
            <p className="text-sm font-medium text-foreground">{item.title}</p>
            <p className="type-caption mt-1.5">{item.body}</p>
          </li>
        ))}
      </ul>

      <h2>On raw metrics generally</h2>
      <p>
        Some activity data is genuinely useful for understanding a system - review wait time, for
        instance, or how long work sits blocked. Where it appears, it carries a window, a scope,
        and a baseline, because a number without those three things cannot be interpreted. Where
        we cannot supply them, we do not show the number.
      </p>

      <h2>On competitors</h2>
      <p>
        Several tools in this market are used in surveillance-sensitive ways. We draw the contrast
        to state our own measurement philosophy, not to make unsourced claims about how any named
        company actually behaves.
      </p>
    </SimplePage>
  );
}
