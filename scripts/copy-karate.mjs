import { cp, mkdir, rm } from "node:fs/promises";
import { resolve } from "node:path";
import { execFileSync } from "node:child_process";

const root = process.cwd();
const source = resolve(root, "karate");
const destination = resolve(root, "public", "karate");

await rm(destination, { recursive: true, force: true });
await mkdir(destination, { recursive: true });
await cp(source, destination, { recursive: true, force: true });

const vite = resolve(root, "node_modules", ".bin", process.platform === "win32" ? "vite.cmd" : "vite");
execFileSync(vite, ["build", "--config", resolve(root, "karate", "vite.config.ts")], { stdio: "inherit" });

console.log("karate app built to public/karate");
