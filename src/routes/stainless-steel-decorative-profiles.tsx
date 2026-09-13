import { createFileRoute } from "@tanstack/react-router";
import { SteelXShowroomPage } from "@/components/steelx-showroom-pages";
import "@/styles/steelx-motion.css";

export const Route = createFileRoute("/stainless-steel-decorative-profiles")({
  head: () => ({
    meta: [
      { title: "Stainless Steel Decorative Profiles | STEELX" },
      {
        name: "description",
        content:
          "Precision-finished stainless-steel decorative profiles for architectural edges, transitions, shadow gaps, panel junctions and interior detailing.",
      },
      { property: "og:title", content: "Stainless Steel Decorative Profiles | STEELX" },
      {
        property: "og:description",
        content: "Precision stainless-steel profiles for architectural edges, transitions and interior detailing.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: () => <SteelXShowroomPage kind="profiles" />,
});
