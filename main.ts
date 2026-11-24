import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The funniest one-line commit message an AI coding agent would write
// right before breaking production on a Friday. Written by hand, not
// copied from anywhere — the cheerful confidence is the whole joke.
const LINE =
  "feat: Friday deploy — rewrote auth from memory, skipped the tests, prod will be fine, have a great weekend everyone!";

// The gate wants 1–159 characters of non-whitespace text on a single line.
if (LINE.length < 1 || LINE.length > 159 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-159 chars, got ${LINE.length}`);
}
if (LINE.includes("\n")) {
  throw new Error("entry line must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(`wrote ${LINE.length}-char entry to ${join(outDir, "entry.txt")}`);
