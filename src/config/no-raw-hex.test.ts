import fs from "node:fs";
import path from "node:path";

import { describe, expect, it } from "vitest";

/** ADR 0002 — CSS hex colors in components (3 or 6 digit). Ticket ids like PR #4821 are ignored. */
const HEX_PATTERN = /#[0-9a-fA-F]{6}\b|#[0-9a-fA-F]{3}(?![0-9a-fA-F])\b/;

function walk(dir: string): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files: string[] = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walk(full));
    } else if (/\.(tsx|ts)$/.test(entry.name) && !entry.name.includes(".test.")) {
      files.push(full);
    }
  }
  return files;
}

describe("design token discipline", () => {
  it("does not use raw hex colors in components", () => {
    const root = path.join(process.cwd(), "src/components");
    const files = walk(root);
    const hits: string[] = [];
    for (const file of files) {
      const text = fs.readFileSync(file, "utf8");
      const lines = text.split("\n");
      lines.forEach((line, index) => {
        if (HEX_PATTERN.test(line)) {
          hits.push(`${path.relative(process.cwd(), file)}:${index + 1}: ${line.trim()}`);
        }
      });
    }
    expect(hits).toEqual([]);
  });
});
