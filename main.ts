import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const rant =
  "Per my last email. Four words, and suddenly I'm on trial for a crime I didn't commit. There was no last email. There never was a last email. She invented one, attached it to nothing, and now I have to apologise to a ghost. I checked twice. I'm furious. And somehow, I feel guilty.";

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), rant, "utf8");
