import { describe, expect, it } from "vitest";

import { canonicalFor } from "@/lib/seo/canonical";
import { buildPageMetadata } from "@/lib/seo/metadata";

describe("SEO helpers", () => {
  it("builds a canonical without query params", () => {
    expect(canonicalFor("/platform/context-graph")).toContain("/platform/context-graph");
  });

  it("sets robots noindex when requested", () => {
    const metadata = buildPageMetadata({
      title: "Stub",
      description: "Stub description for comparison template",
      path: "/compare/nudgeio-vs-hatica",
      noindex: true,
    });
    expect(metadata.robots).toMatchObject({ index: false, follow: true });
    expect(metadata.alternates?.canonical).toContain("/compare/nudgeio-vs-hatica");
  });
});
