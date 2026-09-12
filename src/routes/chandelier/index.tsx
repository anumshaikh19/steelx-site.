import { createFileRoute } from "@tanstack/react-router";
import { LuxuryHome } from "@/components/chandelier/luxury-home";

export const Route = createFileRoute("/chandelier/")({
  head: () => ({
    meta: [
      { title: "SteelX — Contemporary Lighting Design House" },
      { name: "description", content: "A photographic editorial world of architectural, decorative and bespoke lighting." },
      { property: "og:title", content: "SteelX — Light, Sculpted." },
      { property: "og:description", content: "Lighting designed to transform space." },
    ],
  }),
  component: LuxuryHome,
});
