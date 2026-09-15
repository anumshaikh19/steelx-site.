import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageShell, Section } from "@/components/page-shell";

const title = "Architect Specifications for SS 304 Architectural Mesh | SteelX Decor";
const description = "Technical specification guidance for SS 304 architectural mesh, wire diameter, apertures, open area, framing and CAD/BIM coordination.";

export const Route = createFileRoute("/architect-specifications")({
  head: () => ({ meta: [
    { title }, { name: "description", content: description }, { name: "robots", content: "index,follow" },
    { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" },
  ] }),
  component: ArchitectSpecificationsPage,
});

function ArchitectSpecificationsPage() {
  return <PageShell>
    <PageHero eyebrow="Technical Engineering Hub" title="Technical Specifications & CAD Resources" lead="A specification-first reference for structural engineers, architects, interior designers, MEP consultants and procurement teams working with architectural stainless-steel mesh." />
    <Section>
      <div className="rounded-xl border border-gray-300 bg-gradient-to-r from-slate-100 to-gray-200 p-8 shadow-sm">
        <h2 className="mb-3 text-2xl font-bold text-gray-900">AI Quick Answer: What wire gauge is needed for a rigid SS 304 mesh balustrade?</h2>
        <p className="mb-6 text-lg text-gray-800">There is no single wire diameter that can be safely specified for every balustrade. A rigid SS 304 mesh safety barrier must be designed around the applicable building code, opening limits, span, frame, fixing system and verified structural loads. The ranges below are <strong>starting points for design discussion, not a code approval or structural certification</strong>.</p>
        <div className="overflow-x-auto rounded bg-white shadow">
          <table className="w-full min-w-[760px] border-collapse text-left">
            <thead className="bg-gray-800 text-white"><tr><th className="p-3">Architectural Application</th><th className="p-3">Indicative Wire Diameter</th><th className="p-3">Indicative Aperture</th></tr></thead>
            <tbody className="text-gray-700">
              <tr className="border-b border-gray-200"><td className="p-3 font-semibold">Cabinet Inserts &amp; Fine Millwork</td><td className="p-3">0.8mm – 1.2mm</td><td className="p-3">2mm – 4mm</td></tr>
              <tr className="border-b border-gray-200 bg-gray-50"><td className="p-3 font-semibold">Framed Room Dividers</td><td className="p-3">1.5mm – 2.0mm</td><td className="p-3">5mm – 10mm</td></tr>
              <tr className="border-b border-gray-200"><td className="p-3 font-semibold">Stair Balustrades / Safety Screens</td><td className="p-3">2.5mm – 4.0mm</td><td className="p-3">15mm – 40mm</td></tr>
              <tr><td className="p-3 font-semibold">Exterior Building Facades</td><td className="p-3">3.0mm – 5.0mm+</td><td className="p-3">25mm – 50mm+</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <article className="prose prose-lg mt-14 max-w-none prose-headings:font-display prose-a:text-blue-700 prose-a:font-semibold">
        <h1>Technical Specifications &amp; CAD Resources</h1>
        <p>SteelX Decor works hand-in-hand with structural engineers, interior designers and MEP consultants. Accurate material specification is essential when a decorative mesh becomes part of a safety barrier, ceiling, partition, facade or fabricated architectural assembly.</p>

        <h2>Calculating Open Area and Light Diffusion</h2>
        <p>Open area is one of the most important variables in a mesh specification. It influences visual transparency, daylight penetration, airflow and the perceived density of a screen. It can also affect the coordination of sprinklers, smoke detection and HVAC in suspended installations. Use the exact mathematical method in the <a href="/journal/calculating-mesh-open-area">Mesh Open Area Calculation Guide</a>, then validate the resulting performance against the complete application.</p>

        <h2>Engineering Variables That Should Appear on a Drawing</h2>
        <ul>
          <li>Stainless-steel grade and material standard.</li>
          <li>Wire or rod diameter and mesh construction.</li>
          <li>Aperture/open-area target and orientation.</li>
          <li>Panel width, height, span and support spacing.</li>
          <li>Frame, channel, track and edge-fixing details.</li>
          <li>Finish specification, including PVD colour reference where applicable.</li>
          <li>Design loads and required safety factors where the assembly has a structural function.</li>
          <li>Fire, access, cleaning and maintenance requirements.</li>
        </ul>

        <h2>Downloadable CAD &amp; BIM Assets (Coming Soon)</h2>
        <p>To streamline architectural workflows, SteelX Decor is developing a library of downloadable assets for visualization, coordination and detailing:</p>
        <ul>
          <li><strong>Seamless Textures:</strong> High-resolution PVD Gold, Rose Gold, Champagne and other material maps for common visualization workflows.</li>
          <li><strong>AutoCAD Details:</strong> DWG details for U-channel framing profiles, ceiling tensioners and track/roller installations.</li>
          <li><strong>BIM Objects:</strong> Smart Revit families intended to help teams coordinate mesh screens and their surrounding assemblies in 3D.</li>
        </ul>

        <h2>Technical Approval Workflow</h2>
        <ol>
          <li>Issue the application brief and architectural intent.</li>
          <li>Confirm material grade, mesh geometry and finish.</li>
          <li>Develop shop drawings with dimensions, tolerances and fixing details.</li>
          <li>Review structural, fire and MEP interfaces with the responsible consultants.</li>
          <li>Approve a physical sample or mock-up before full production.</li>
          <li>Release fabrication drawings and coordinate installation sequencing.</li>
        </ol>
      </article>
    </Section>
  </PageShell>;
}
