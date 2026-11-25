import { mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const REVIEW =
  "One star. He waters me like a rumour — once, vaguely — then tells guests I'm 'low maintenance' while I sit in a pot with no drainage, photosynthesizing purely out of spite.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR
  ? resolve(process.env.MAKEFUN_OUTPUT_DIR)
  : "/output";

mkdirSync(outputDir, { recursive: true });
if (REVIEW.length >= 280 || REVIEW.includes("\n")) {
  throw new Error("review must be a single line under 280 characters");
}
writeFileSync(join(outputDir, "entry.txt"), REVIEW, "utf8");
