import { cp, mkdir } from "node:fs/promises";
import { resolve } from "node:path";

const root = process.cwd();
const source = resolve(root, "KARATE");
const destination = resolve(root, "dist", "KARATE");

await mkdir(destination, { recursive: true });
await cp(source, destination, { recursive: true, force: true });

console.log("KARATE static site copied to dist/KARATE");
