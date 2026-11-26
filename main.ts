import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "It is 3am. I am writing this excuse from bed. My alarm is set for 6am. I have already decided I will not hear it. I have decided this 4 nights in a row.";

// Sealed gate: the entry must be 1 to 200 UTF-8 characters.
// The guard runs before any output is written, so an over-long
// line fails loudly instead of producing a rejected entry.
const MAX_CHARS = 200;

if (LINE.length < 1 || LINE.length > MAX_CHARS) {
  throw new Error(`entry is ${LINE.length} chars, outside the 1-${MAX_CHARS} gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
