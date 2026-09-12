import { createFileRoute } from "@tanstack/react-router";
import { ChandelierPage } from "@/components/chandelier/chandelier-page";

export const Route = createFileRoute("/chandelier/")({
  head: () => ({
    meta: [
      { title: "Chandelier — The World of Light | SteelX" },
      {
        name: "description",
        content:
          "An immersive digital showroom for sculptural architectural lighting — chandeliers, pendants, bespoke objects and light in space.",
      },
      { property: "og:title", content: "The World of Light — SteelX" },
      { property: "og:description", content: "Light is not placed. It transforms." },
    ],
  }),
  component: ChandelierPage,
});
