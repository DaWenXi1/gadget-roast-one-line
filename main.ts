import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const line = "My phone dies at 4pm, yet at 2am it finds 3% to ask if I really meant to leave the torch on.";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
