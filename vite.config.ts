// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isVercel = !!process.env.VERCEL;

export default defineConfig({
  // TanStack Start owns the root HTML/server entry. On Vercel, emit the
  // Vercel Build Output so requests are handled by the Nitro server function.
  nitro: isVercel ? { preset: "vercel" } : true,

  tanstackStart: {
    // Use our SSR error wrapper as the server entry.
    server: { entry: "server" },
  },
});
