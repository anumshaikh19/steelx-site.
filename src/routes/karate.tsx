import { createFileRoute } from "@tanstack/react-router";

import { App as DhanurvedaApp } from "../../karate/src/App";
import "../../karate/src/styles.css";

export const Route = createFileRoute("/karate")({
  head: () => ({
    meta: [
      { title: "Dhanurveda — Martial Arts & Calisthenics" },
      {
        name: "description",
        content: "Dhanurveda — Martial Arts & Calisthenics in Nagpada, Mumbai.",
      },
    ],
  }),
  component: DhanurvedaKaratePage,
});

function DhanurvedaKaratePage() {
  return <DhanurvedaApp />;
}
