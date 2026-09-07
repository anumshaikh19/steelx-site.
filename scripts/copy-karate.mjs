import { cp, mkdir, rm } from "node:fs/promises";
import { resolve } from "node:path";
import { execFileSync } from "node:child_process";

const root = process.cwd();
const source = resolve(root, "KARATE");
const destination = resolve(root, "public", "KARATE");

await rm(destination, { recursive: true, force: true });
await mkdir(destination, { recursive: true });
await cp(source, destination, { recursive: true, force: true });

const vite = resolve(root, "node_modules", ".bin", process.platform === "win32" ? "vite.cmd" : "vite");
execFileSync(vite, ["build", "--config", resolve(root, "KARATE", "vite.config.ts")], { stdio: "inherit" });

console.log("KARATE app built to public/KARATE");
