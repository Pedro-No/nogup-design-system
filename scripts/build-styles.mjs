import { cpSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const srcStyles = join(root, "src", "styles");
const distStyles = join(root, "dist", "styles");

mkdirSync(distStyles, { recursive: true });
cpSync(srcStyles, distStyles, { recursive: true });
