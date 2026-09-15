import { createFileRoute } from "@tanstack/react-router";
import { InteractiveOrbitalHero, type OrbitalCard } from "@/components/InteractiveOrbitalHero";
import { PageShell } from "@/components/page-shell";

const cards: OrbitalCard[] = [
  { id: "design", title: "Design", description: "From architectural intent to a surface language with precision and restraint." },
  { id: "manufacturing", title: "Manufacturing", description: "Exact fabrication, controlled finishing and obsessive attention to detail." },
  { id: "building", title: "Building", description: "Turning considered materials into architectural elements that belong in the space." },
  { id: "servicing", title: "Servicing", description: "Long-term care that keeps the material performing and looking exceptional." },
];

export const Route = createFileRoute("/orbital-hero")({
  head: () => ({ meta: [{ title: "Orbital Hero — STEELX" }, { name: "description", content: "Cursor-driven orbital hero component for STEELX." }] }),
  component: OrbitalHeroPage,
});

function OrbitalHeroPage() {
  return <PageShell><main className="bg-[#090908]"><InteractiveOrbitalHero image="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=90" imageAlt="Refined architectural interior" cards={cards} /></main></PageShell>;
}
