/** Phase 2 - ensures static mock bundle matches API contract before deploy. */
import { describe, expect, it } from "vitest";

import { mockHomeDemoData } from "@/config/home-demo-data";
import { homeDemoDataSchema } from "@/lib/api/schemas";

describe("homeDemoDataSchema", () => {
  it("validates the static GTM mock bundle", () => {
    const parsed = homeDemoDataSchema.safeParse(mockHomeDemoData);
    expect(parsed.success).toBe(true);
  });
});
