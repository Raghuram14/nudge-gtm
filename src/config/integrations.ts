/**
 * Integration catalog - content config, not runtime connectors.
 * Add integrations here; UI picks up via IntegrationHub, IntegrationCard, etc.
 */
import { ROUTES } from "@/config/routes";

export const integrationStatus = {
  currentDirection: "current-direction",
  comingSoon: "coming-soon",
} as const;

export type IntegrationStatus =
  (typeof integrationStatus)[keyof typeof integrationStatus];

export const integrationCategoryIds = [
  "source-control",
  "project-management",
  "cicd",
  "meetings",
  "communication",
  "incidents",
  "docs",
  "telemetry",
  "ai-tools",
] as const;

export type IntegrationCategoryId = (typeof integrationCategoryIds)[number];

export type IntegrationCategory = {
  id: IntegrationCategoryId;
  label: string;
  description: string;
};

export const integrationCategories: ReadonlyArray<IntegrationCategory> = [
  {
    id: "source-control",
    label: "Source control",
    description: "Repositories, pull requests, reviews, and identity signals.",
  },
  {
    id: "project-management",
    label: "Project management",
    description: "Work items, sprints, and delivery state as canonical entities.",
  },
  {
    id: "cicd",
    label: "CI/CD",
    description: "Builds, pipelines, and deployment events.",
  },
  {
    id: "meetings",
    label: "Meetings",
    description: "Standups, reviews, and decision conversations recorded as meetings.",
  },
  {
    id: "communication",
    label: "Communication",
    description: "Chat and async discussion that becomes organizational memory.",
  },
  {
    id: "incidents",
    label: "Incidents",
    description: "Incident timelines connected to services and changes.",
  },
  {
    id: "docs",
    label: "Docs",
    description: "Architecture and process writing as graph context.",
  },
  {
    id: "telemetry",
    label: "Telemetry",
    description: "Runtime signals as context for services - not another observability product.",
  },
  {
    id: "ai-tools",
    label: "AI coding tools",
    description: "AI-assisted change as engineering activity, not a vanity score.",
  },
];

export type IntegrationRecord = {
  slug: string;
  name: string;
  href: string;
  status: IntegrationStatus;
  category: IntegrationCategoryId;
  summary: string;
};

function hashHref(slug: string): string {
  return `${ROUTES.integrations}#${slug}`;
}

export const integrations: ReadonlyArray<IntegrationRecord> = [
  {
    slug: "github",
    name: "GitHub",
    href: ROUTES.integrationsGithub,
    status: integrationStatus.currentDirection,
    category: "source-control",
    summary:
      "Pull requests, reviews, repositories, and identity signals as graph context - design-partner scope, not a GitHub analytics product.",
  },
  {
    slug: "gitlab",
    name: "GitLab",
    href: hashHref("gitlab"),
    status: integrationStatus.comingSoon,
    category: "source-control",
    summary: "Source and merge-request context. Coming soon.",
  },
  {
    slug: "bitbucket",
    name: "Bitbucket",
    href: hashHref("bitbucket"),
    status: integrationStatus.comingSoon,
    category: "source-control",
    summary: "Repository and pull-request context. Coming soon.",
  },
  {
    slug: "jira",
    name: "Jira",
    href: ROUTES.integrationsJira,
    status: integrationStatus.currentDirection,
    category: "project-management",
    summary:
      "Work items, sprints, and delivery state as canonical entities - design-partner scope, not a Jira dashboard.",
  },
  {
    slug: "linear",
    name: "Linear",
    href: hashHref("linear"),
    status: integrationStatus.comingSoon,
    category: "project-management",
    summary: "Work items and project delivery state. Coming soon.",
  },
  {
    slug: "azure-boards",
    name: "Azure Boards",
    href: hashHref("azure-boards"),
    status: integrationStatus.comingSoon,
    category: "project-management",
    summary: "Work items and iteration context. Coming soon.",
  },
  {
    slug: "github-actions",
    name: "GitHub Actions",
    href: hashHref("github-actions"),
    status: integrationStatus.comingSoon,
    category: "cicd",
    summary: "Workflow runs as build events. Coming soon.",
  },
  {
    slug: "jenkins",
    name: "Jenkins",
    href: hashHref("jenkins"),
    status: integrationStatus.comingSoon,
    category: "cicd",
    summary: "Pipeline and build events. Coming soon.",
  },
  {
    slug: "circleci",
    name: "CircleCI",
    href: hashHref("circleci"),
    status: integrationStatus.comingSoon,
    category: "cicd",
    summary: "Pipeline and job events. Coming soon.",
  },
  {
    slug: "buildkite",
    name: "Buildkite",
    href: hashHref("buildkite"),
    status: integrationStatus.comingSoon,
    category: "cicd",
    summary: "Pipeline and deployment events. Coming soon.",
  },
  {
    slug: "zoom",
    name: "Zoom",
    href: hashHref("zoom"),
    status: integrationStatus.comingSoon,
    category: "meetings",
    summary: "Meeting context for decisions and reviews. Coming soon.",
  },
  {
    slug: "google-meet",
    name: "Google Meet",
    href: hashHref("google-meet"),
    status: integrationStatus.comingSoon,
    category: "meetings",
    summary: "Meeting context for delivery discussions. Coming soon.",
  },
  {
    slug: "microsoft-teams-meetings",
    name: "Microsoft Teams meetings",
    href: hashHref("microsoft-teams-meetings"),
    status: integrationStatus.comingSoon,
    category: "meetings",
    summary: "Meeting context alongside chat. Coming soon.",
  },
  {
    slug: "slack",
    name: "Slack",
    href: hashHref("slack"),
    status: integrationStatus.comingSoon,
    category: "communication",
    summary: "Discussion and decision memory. Coming soon.",
  },
  {
    slug: "microsoft-teams-chat",
    name: "Microsoft Teams chat",
    href: hashHref("microsoft-teams-chat"),
    status: integrationStatus.comingSoon,
    category: "communication",
    summary: "Async discussion as organizational memory. Coming soon.",
  },
  {
    slug: "pagerduty",
    name: "PagerDuty",
    href: hashHref("pagerduty"),
    status: integrationStatus.comingSoon,
    category: "incidents",
    summary: "Incident events linked to services and changes. Coming soon.",
  },
  {
    slug: "opsgenie",
    name: "Opsgenie",
    href: hashHref("opsgenie"),
    status: integrationStatus.comingSoon,
    category: "incidents",
    summary: "Incident and on-call context. Coming soon.",
  },
  {
    slug: "confluence",
    name: "Confluence",
    href: hashHref("confluence"),
    status: integrationStatus.comingSoon,
    category: "docs",
    summary: "Architecture and process documents. Coming soon.",
  },
  {
    slug: "notion",
    name: "Notion",
    href: hashHref("notion"),
    status: integrationStatus.comingSoon,
    category: "docs",
    summary: "Engineering docs as context. Coming soon.",
  },
  {
    slug: "datadog",
    name: "Datadog",
    href: hashHref("datadog"),
    status: integrationStatus.comingSoon,
    category: "telemetry",
    summary: "Service health as graph context. Coming soon.",
  },
  {
    slug: "cursor",
    name: "Cursor",
    href: hashHref("cursor"),
    status: integrationStatus.comingSoon,
    category: "ai-tools",
    summary: "AI-assisted change as engineering activity. Coming soon.",
  },
];

export type IntegrationsByCategory = {
  category: IntegrationCategory;
  items: ReadonlyArray<IntegrationRecord>;
};

export function getIntegrationsByCategory(): ReadonlyArray<IntegrationsByCategory> {
  return integrationCategories.map((category) => ({
    category,
    items: integrations.filter((item) => item.category === category.id),
  }));
}

export function getIntegrationBySlug(slug: string): IntegrationRecord | undefined {
  return integrations.find((item) => item.slug === slug);
}
