import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";

fs.mkdirSync(outputDir, { recursive: true });
fs.copyFileSync(path.join(__dirname, "entry.png"), path.join(outputDir, "entry.png"));
