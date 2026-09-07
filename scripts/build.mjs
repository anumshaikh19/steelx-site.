import { mkdir, rename, rm, cp } from "node:fs/promises";
import { resolve } from "node:path";
import { tmpdir } from "node:os";
import { execFileSync } from "node:child_process";

const root = process.cwd();
const vite = resolve(root, "node_modules", ".bin", process.platform === "win32" ? "vite.cmd" : "vite");
const karateSource = resolve(root, "karate");
const karateDist = resolve(root, ".karate-dist");
const karatePublic = resolve(root, "public", "karate");
const hiddenSource = resolve(tmpdir(), `steelx-karate-${process.pid}`);
const karateConfig = resolve(root, "karate", "vite.config.ts");

// Build Karate completely separately from the SteelX/TanStack app.
// Its Vite output is written to a temporary directory, then copied into
// public/karate so Vercel serves it at /karate/.
await rm(karateDist, { recursive: true, force: true });
await rm(karatePublic, { recursive: true, force: true });

execFileSync(vite, ["build", "--config", karateConfig], { stdio: "inherit" });
await mkdir(resolve(root, "public"), { recursive: true });
await cp(karateDist, karatePublic, { recursive: true });
await rm(karateDist, { recursive: true, force: true });

// The TanStack build discovers HTML files under the project tree. Move the
// entire Karate source tree outside the project while SteelX is being built,
// so it cannot become a second application entry point.
await rename(karateSource, hiddenSource);

try {
  execFileSync(vite, ["build", ...process.argv.slice(2)], { stdio: "inherit" });
} finally {
  await rename(hiddenSource, karateSource);
}

console.log("SteelX and lowercase Karate builds completed successfully");
