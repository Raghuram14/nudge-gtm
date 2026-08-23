import fs from "node:fs";
import path from "node:path";

import { describe, expect, it } from "vitest";

import { FORBIDDEN_COPY_PATTERNS } from "@/config/copy-invariants";

function walk(dir: string): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files: string[] = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walk(full));
    } else if (/\.(tsx|ts|mdx|md)$/.test(entry.name) && !entry.name.includes(".test.")) {
      files.push(full);
    }
  }
  return files;
}

describe("copy invariants", () => {
  it("does not market developer scores or fake certifications", () => {
    const roots = [
      path.join(process.cwd(), "src/app"),
      path.join(process.cwd(), "src/components"),
      path.join(process.cwd(), "src/content"),
      path.join(process.cwd(), "src/config"),
    ];
    const files = roots.flatMap((root) => walk(root));
    const hits: string[] = [];
    for (const file of files) {
      if (file.endsWith("copy-invariants.ts")) {
        continue;
      }
      const text = fs.readFileSync(file, "utf8").toLowerCase();
      for (const pattern of FORBIDDEN_COPY_PATTERNS) {
        if (text.includes(pattern)) {
          hits.push(`${file}: ${pattern}`);
        }
      }
    }
    expect(hits).toEqual([]);
  });
});
