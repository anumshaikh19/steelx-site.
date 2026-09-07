import { rename, rm } from "node:fs/promises";
import { resolve } from "node:path";
import { execFileSync } from "node:child_process";

const root = process.cwd();
const destination = resolve(root, "public", "karate");
const karateIndex = resolve(root, "karate", "index.html");
const hiddenIndex = resolve(root, "karate", ".karate-index.html");

await rm(destination, { recursive: true, force: true });

const vite = resolve(root, "node_modules", ".bin", process.platform === "win32" ? "vite.cmd" : "vite");
execFileSync(vite, ["build", "--config", resolve(root, "karate", "vite.config.ts")], { stdio: "inherit" });

// The main TanStack/Vite build recursively discovers HTML files under the repo.
// Karate has its own standalone Vite entry, so hide that source HTML after the
// Karate build has produced public/karate/index.html. This prevents the main
// build from trying to compile Karate components with the SteelX config.
await rename(karateIndex, hiddenIndex);

console.log("lowercase karate app built to public/karate");
