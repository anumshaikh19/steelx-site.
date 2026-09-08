import { mkdir, rm, cp } from "node:fs/promises";
import { resolve } from "node:path";
import { execFileSync } from "node:child_process";

const root = process.cwd();
const vite = resolve(root, "node_modules", ".bin", process.platform === "win32" ? "vite.cmd" : "vite");
const karateSource = resolve(root, "karate");
const karateDist = resolve(root, ".karate-dist");
const karatePublic = resolve(root, "public", "karate");
const karateConfig = resolve(root, "karate", "vite.config.ts");

// Build Karate completely separately. Its output is staged outside public/
// and then copied to public/karate for Vercel to serve at /karate/.
await rm(karateDist, { recursive: true, force: true });
await rm(karatePublic, { recursive: true, force: true });

execFileSync(vite, ["build", "--config", karateConfig], { stdio: "inherit" });
await mkdir(resolve(root, "public"), { recursive: true });
await cp(karateDist, karatePublic, { recursive: true });
await rm(karateDist, { recursive: true, force: true });

// Do NOT rename karate outside the filesystem. Vercel's /tmp is a different
// filesystem and causes EXDEV. Instead, temporarily rename it inside the repo.
// The SteelX build therefore cannot discover karate/index.html as an entry.
const hiddenSource = resolve(root, ".karate-source-hidden");
await rm(hiddenSource, { recursive: true, force: true });
await cp(karateSource, hiddenSource, { recursive: true });
await rm(karateSource, { recursive: true, force: true });

// Force TanStack Router to regenerate the file-based route tree so newly
// added routes are included in the production build instead of relying on a
// stale committed routeTree.gen.ts.
const routeTree = resolve(root, "src", "routeTree.gen.ts");
await rm(routeTree, { force: true });

try {
  execFileSync(vite, ["build", ...process.argv.slice(2)], { stdio: "inherit" });
} finally {
  await rm(karateSource, { recursive: true, force: true });
  await cp(hiddenSource, karateSource, { recursive: true });
  await rm(hiddenSource, { recursive: true, force: true });
}

console.log("SteelX and lowercase Karate builds completed successfully");
