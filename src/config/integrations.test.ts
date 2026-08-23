import { describe, expect, it } from "vitest";

import { getIntegrationHubGroups } from "@/config/integration-hub";
import { getIntegrationsByCategory, integrations } from "@/config/integrations";

describe("integration categories", () => {
  it("groups every integration into a named category", () => {
    const groups = getIntegrationsByCategory();
    const ids = groups.map((group) => group.category.id);
    expect(ids).toContain("cicd");
    expect(ids).toContain("project-management");
    expect(ids).toContain("meetings");
    for (const group of groups) {
      expect(group.items.length).toBeGreaterThan(0);
      expect(group.items.every((item) => item.category === group.category.id)).toBe(true);
    }
  });
});

describe("integration hub", () => {
  it("places every integration on the hub without duplicates", () => {
    const hubGroups = getIntegrationHubGroups();
    const hubSlugs = hubGroups.flatMap((group) => group.items.map((item) => item.slug));
    expect(hubSlugs.length).toBe(integrations.length);
    expect(new Set(hubSlugs).size).toBe(integrations.length);
  });
});
