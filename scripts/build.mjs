import { rename } from "node:fs/promises";
import { resolve } from "node:path";
import { execFileSync } from "node:child_process";

const root = process.cwd();
const vite = resolve(root, "node_modules", ".bin", process.platform === "win32" ? "vite.cmd" : "vite");
const karateIndex = resolve(root, "karate", "index.html");
const hiddenKarateIndex = resolve(root, "karate", ".karate-index.html");
const karateConfig = resolve(root, "karate", "vite.config.ts");

// Build the standalone Karate app first. Its compiled output goes into public/karate.
execFileSync(vite, ["build", "--config", karateConfig], { stdio: "inherit" });

// Vite treats nested index.html files as additional HTML entry points. Hide the
// Karate source entry while the TanStack/SteelX build runs so the two apps stay isolated.
await rename(karateIndex, hiddenKarateIndex);

try {
  execFileSync(vite, ["build", ...process.argv.slice(2)], { stdio: "inherit" });
} finally {
  await rename(hiddenKarateIndex, karateIndex);
}

console.log("SteelX and lowercase Karate builds completed successfully");
