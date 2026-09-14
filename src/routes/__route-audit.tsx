import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/__route-audit")({
  component: () => <main style={{ padding: 40 }}>ROUTE AUDIT OK</main>,
});
