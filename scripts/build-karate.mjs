import { execFileSync } from "node:child_process";
import { resolve } from "node:path";

execFileSync(
  process.execPath,
  [resolve("node_modules/vite/bin/vite.js"), "build", "--config", resolve("KARATE/vite.config.ts")],
  { stdio: "inherit" },
);
