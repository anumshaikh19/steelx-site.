import { createFileRoute } from "@tanstack/react-router";
import { SteelXShowroomPage } from "@/components/steelx-showroom-pages";

export const Route = createFileRoute("/stainless-steel-decorative-sheets")({
  head: () => ({
    meta: [
      { title: "Stainless Steel Decorative Sheets | STEELX" },
      {
        name: "description",
        content:
          "Premium stainless-steel decorative sheets for architectural interiors — mirror, hairline, embossed, bead blast, water ripple and hammered surfaces.",
      },
      { property: "og:title", content: "Stainless Steel Decorative Sheets | STEELX" },
      {
        property: "og:description",
        content: "Architectural stainless-steel decorative sheets engineered for light, depth and character.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: () => <SteelXShowroomPage kind="sheets" />,
});
