// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isVercel = !!process.env.VERCEL;

export default defineConfig({
  // Lovable's wrapper defaults Nitro to its non-Vercel target. On Vercel,
  // explicitly emit the Vercel Build Output so the app is actually served
  // instead of falling back to the static Vite HTML shell.
  nitro: isVercel ? { preset: "vercel" } : true,

  vite: {
    build: {
      // The Karate app has its own index.html and is built separately by copy-karate.mjs.
      // Restrict the main Vite build to the SteelX entry so it does not auto-discover
      // karate/index.html as another HTML entry.
      rollupOptions: {
        input: "./index.html",
      },
    },
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
