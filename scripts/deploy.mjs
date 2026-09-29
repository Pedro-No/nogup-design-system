import { execSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const commitMessage =
  process.argv.slice(2).join(" ").trim() || "chore: rebuild dist";

function run(command) {
  execSync(command, { cwd: root, stdio: "inherit", shell: true });
}

function runCapture(command) {
  return execSync(command, { cwd: root, encoding: "utf8", shell: true }).trim();
}

try {
  runCapture("git rev-parse --is-inside-work-tree");
} catch {
  console.error("deploy: not a git repository");
  process.exit(1);
}

console.log("Running build…");
run("npm run build");

console.log("Staging dist/…");
run("git add dist/");

const staged = runCapture("git diff --cached --name-only -- dist/");
if (!staged) {
  console.log("No changes in dist/ to commit.");
  process.exit(0);
}

console.log(`Committing (${staged.split("\n").length} file(s))…`);
run(`git commit -m ${JSON.stringify(commitMessage)}`);
console.log("Done.");
