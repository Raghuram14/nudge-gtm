import type { IntegrationCategoryId, IntegrationRecord } from "@/config/integrations";
import { integrations } from "@/config/integrations";

export type IntegrationHubPosition =
  | "top"
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom"
  | "bottom-right";

export type IntegrationHubGroup = {
  id: string;
  label: string;
  position: IntegrationHubPosition;
  categoryIds: ReadonlyArray<IntegrationCategoryId>;
};

export const integrationHubGroups: ReadonlyArray<IntegrationHubGroup> = [
  {
    id: "source-control",
    label: "Version control",
    position: "top",
    categoryIds: ["source-control"],
  },
  {
    id: "cicd",
    label: "CI/CD",
    position: "top-left",
    categoryIds: ["cicd"],
  },
  {
    id: "project-management",
    label: "Project management",
    position: "top-right",
    categoryIds: ["project-management"],
  },
  {
    id: "docs-ai",
    label: "Docs & AI",
    position: "bottom-left",
    categoryIds: ["docs", "ai-tools"],
  },
  {
    id: "operations",
    label: "Operations",
    position: "bottom",
    categoryIds: ["incidents", "telemetry"],
  },
  {
    id: "collaboration",
    label: "Collaboration",
    position: "bottom-right",
    categoryIds: ["meetings", "communication"],
  },
];

export type IntegrationHubGroupWithItems = IntegrationHubGroup & {
  items: ReadonlyArray<IntegrationRecord>;
};

export function getIntegrationHubGroups(): ReadonlyArray<IntegrationHubGroupWithItems> {
  return integrationHubGroups.map((group) => ({
    ...group,
    items: integrations.filter((item) => group.categoryIds.includes(item.category)),
  }));
}
