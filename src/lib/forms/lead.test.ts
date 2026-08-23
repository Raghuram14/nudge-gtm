import { describe, expect, it } from "vitest";

import { parseLeadForm } from "@/lib/forms/lead";

describe("parseLeadForm", () => {
  it("accepts a complete early-access payload", () => {
    const result = parseLeadForm({
      name: "Ada",
      email: "ada@example.com",
      company: "Example",
      role: "CTO",
      intent: "early-access",
      message: "",
      website: "",
    });
    expect(result.success).toBe(true);
  });

  it("rejects an invalid email and missing name", () => {
    const result = parseLeadForm({
      name: "",
      email: "not-an-email",
      company: "Example",
      role: "CTO",
      intent: "demo",
    });
    expect(result.success).toBe(false);
    expect(result.errors.email).toBeTruthy();
    expect(result.errors.name).toBeTruthy();
  });

  it("rejects an unknown intent", () => {
    const result = parseLeadForm({
      name: "Ada",
      email: "ada@example.com",
      company: "Example",
      role: "CTO",
      intent: "free-trial",
    });
    expect(result.success).toBe(false);
    expect(result.errors.intent).toBeTruthy();
  });
});
