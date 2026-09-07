import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  base: "/karate/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) },
  },
  build: {
    // karate/ -> project root -> .karate-dist
    outDir: fileURLToPath(new URL("../.karate-dist", import.meta.url)),
    emptyOutDir: true,
  },
});
