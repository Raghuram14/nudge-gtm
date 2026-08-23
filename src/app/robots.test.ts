import { describe, expect, it } from "vitest";

import robots from "@/app/robots";

describe("robots.txt contract", () => {
  it("allows public marketing including OAI-SearchBot", () => {
    const result = robots();
    const rules = Array.isArray(result.rules) ? result.rules : [result.rules];
    expect(rules.some((rule) => rule.userAgent === "*" && rule.allow === "/")).toBe(true);
    expect(rules.some((rule) => rule.userAgent === "OAI-SearchBot" && rule.allow === "/")).toBe(
      true,
    );
    expect(String(result.sitemap)).toContain("/sitemap.xml");
  });
});
