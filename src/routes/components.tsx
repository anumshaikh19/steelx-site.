import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import {
  ArchitecturalSection,
  FinishExplorer,
  FinishSelector,
  MaterialDetailZoom,
  MaterialMorph,
  MaterialUniverse,
  OrbitalProcess,
  ProjectDepthStack,
  ProjectMaterialMap,
  SurfaceRibbon,
} from "@/components/steelx-interaction-lab";

const sections = [
  ["01", "Orbital Process", "Design → fabrication → building → servicing. A spatial process story."],
  ["02", "Material Universe", "PVD finishes become the navigation rather than a conventional product grid."],
  ["03", "Finish Explorer", "Sweep across real architectural photography to inspect surface character."],
  ["04", "Material Morph", "A cursor-led transition between architectural surface languages."],
  ["05", "Project Material Map", "Connect finishes to the exact moments where they live inside a project."],
  ["06", "Architectural Cross-section", "Reveal the construction logic beneath the finished surface."],
  ["07", "Finish Selector", "Select a finish through atmosphere and application, not SKU cards."],
  ["08", "Project Depth Stack", "Separate the project archive into layers of spatial depth."],
  ["09", "Material Detail Zoom", "Move from architectural view into tactile material detail."],
  ["10", "Surface Ribbon", "Move through projects and finishes as one continuous material archive."],
] as const;

const demos = [
  OrbitalProcess,
  MaterialUniverse,
  FinishExplorer,
  MaterialMorph,
  ProjectMaterialMap,
  ArchitecturalSection,
  FinishSelector,
  ProjectDepthStack,
  MaterialDetailZoom,
  SurfaceRibbon,
];

export const Route = createFileRoute("/components")({
  head: () => ({ meta: [
    { title: "STEELX — Interaction Lab" },
    { name: "description", content: "Product-specific interactive components for STEELX architectural surfaces." },
  ]}),
  component: ComponentsPage,
});

function ComponentsPage() {
  return <PageShell>
    <main className="min-h-screen overflow-hidden bg-[#090908] text-white">
      <header className="px-6 pb-20 pt-24 md:px-10 md:pb-28 md:pt-32">
        <p className="text-[9px] uppercase tracking-[.35em] text-white/35">STEELX / Interaction Lab</p>
        <h1 className="mt-5 max-w-5xl font-serif text-6xl leading-[.88] tracking-[-.055em] md:text-[9vw]">Material is the interface.</h1>
        <p className="mt-8 max-w-xl text-sm leading-6 text-white/45">Ten components built around the actual STEELX story: stainless steel, PVD finishes, architectural applications, projects and material detail. No generic UI carousel demos.</p>
        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-[9px] uppercase tracking-[.2em] text-white/30">{sections.map(([n,t]) => <span key={n}>{n} / {t}</span>)}</div>
      </header>

      {sections.map(([n, title, description], i) => {
        const Demo = demos[i];
        return <section key={n} className="pb-28 md:pb-40">
          <div className="mx-auto mb-8 flex max-w-[1400px] items-end justify-between gap-8 px-6 md:px-10">
            <div><p className="text-[9px] uppercase tracking-[.3em] text-white/30">{n} / STEELX component</p><h2 className="mt-3 font-serif text-4xl tracking-[-.035em] md:text-6xl">{title}</h2></div>
            <p className="hidden max-w-sm text-right text-xs leading-5 text-white/35 md:block">{description}</p>
          </div>
          <Demo />
        </section>;
      })}

      <footer className="border-t border-white/10 px-6 py-20 md:px-10">
        <p className="text-[9px] uppercase tracking-[.3em] text-white/30">STEELX / Next direction</p>
        <p className="mt-5 max-w-3xl font-serif text-4xl leading-tight text-white/85 md:text-6xl">These are the interaction primitives. The next step is replacing the placeholder architecture photography with your actual STEELX product, finish and project imagery.</p>
      </footer>
    </main>
  </PageShell>;
}
