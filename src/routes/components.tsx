import { createFileRoute } from "@tanstack/react-router";
import { CursorCarousel, type CursorCarouselCard } from "@/components/cursor-carousel";
import { PageShell } from "@/components/page-shell";

const cards: CursorCarouselCard[] = [
  { image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85", category: "Residential", title: "Private Residence", description: "A quiet material palette shaped around natural light." },
  { image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85", category: "Hospitality", title: "The Atrium", description: "Brushed surfaces and architectural detail in balance." },
  { image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85", category: "Architecture", title: "Material House", description: "A contemporary interior where surfaces become structure." },
  { image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=85", category: "Interiors", title: "Gallery Residence", description: "Warm stone, metal and shadow create a tactile atmosphere." },
  { image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85", category: "Retail", title: "The Collection", description: "Precision finishes presented as architectural objects." },
  { image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85", category: "Residential", title: "Monument House", description: "Quiet luxury expressed through proportion and material." },
  { image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85", category: "Architecture", title: "Courtyard Home", description: "A study in reflection, texture and restrained detail." },
];

export const Route = createFileRoute("/components")({
  head: () => ({
    meta: [
      { title: "Components — STEELX" },
      { name: "description", content: "Interactive component experiments and reusable spatial interfaces for STEELX." },
    ],
  }),
  component: ComponentsPage,
});

function ComponentsPage() {
  return (
    <PageShell>
      <main className="min-h-screen bg-[#0b0b0a] text-white">
        <CursorCarousel cards={cards} />
      </main>
    </PageShell>
  );
}
