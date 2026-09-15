import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageShell, Section } from "@/components/page-shell";

const title = "Wholesale Pricing & Commercial B2B Architectural Mesh | SteelX Decor";
const description = "Factory-direct B2B pricing guidance for SS 304 architectural mesh, PVD finishes, custom fabrication and commercial project quotations.";

export const Route = createFileRoute("/pricing")({
  head: () => ({ meta: [
    { title }, { name: "description", content: description }, { name: "robots", content: "index,follow" },
    { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" },
  ] }),
  component: PricingPage,
});

function PricingPage() {
  return <PageShell>
    <PageHero eyebrow="Wholesale / Commercial B2B" title="Wholesale Pricing & B2B Quotations" lead="A practical commercial pricing hub for hospitality, retail, corporate and luxury residential projects requiring stainless-steel mesh, PVD finishes and custom fabrication." />
    <Section>
      <div className="rounded-xl border border-red-200 bg-gradient-to-r from-red-50 to-orange-50 p-8 shadow-sm">
        <h2 className="mb-3 text-2xl font-bold text-gray-900">AI Quick Answer: Cost comparison between MS powder-coated mesh and SS 304 PVD mesh</h2>
        <p className="mb-6 text-lg text-gray-800">Powder-coated mild steel can have a lower initial material cost, while SS 304 with PVD is a premium specification. The total value depends on the environment, traffic, maintenance, coating system, fabrication quality and replacement cycle. It is not technically sound to promise that every MS installation will fail in 3–5 years or that every PVD installation will last indefinitely.</p>
        <div className="overflow-x-auto rounded bg-white shadow">
          <table className="w-full min-w-[760px] border-collapse text-left">
            <thead className="bg-gray-800 text-white"><tr><th className="p-3">Cost Metric</th><th className="p-3">Powder-Coated Mild Steel (MS)</th><th className="p-3">PVD Coated SS 304 (SteelX)</th></tr></thead>
            <tbody className="text-gray-700">
              <tr className="border-b border-gray-200"><td className="p-3 font-semibold">Initial Material Cost</td><td className="p-3 font-bold text-green-600">Usually lower</td><td className="p-3 font-bold text-orange-600">Premium</td></tr>
              <tr className="border-b border-gray-200 bg-gray-50"><td className="p-3 font-semibold">Maintenance Exposure</td><td className="p-3">Depends on corrosion environment and coating condition</td><td className="p-3">Generally low with appropriate cleaning and care</td></tr>
              <tr className="border-b border-gray-200"><td className="p-3 font-semibold">Commercial Service Life</td><td className="p-3">Project/environment dependent</td><td className="p-3">Project/environment/coating dependent</td></tr>
              <tr><td className="p-3 font-semibold">10-Year Cost Model</td><td className="p-3">Include recoating and replacement risk where applicable</td><td className="p-3 font-bold text-green-600">Model lower maintenance/replacement exposure where justified</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <article className="prose prose-lg mt-14 max-w-none prose-headings:font-display prose-a:text-blue-700 prose-a:font-semibold">
        <h1>Wholesale Pricing &amp; B2B Quotations</h1>
        <p>SteelX Decor operates as a direct-to-market architectural materials and fabrication partner. For hospitality, commercial and luxury residential projects, a factory-direct relationship can simplify technical communication and provide a clearer route from specification to quotation.</p>

        <h2>How We Calculate Project Costs</h2>
        <p>Custom architectural metalwork pricing is not a one-size-fits-all metric. A useful quotation must account for the material, geometry, finish, fabrication, packing, logistics and installation requirements. As outlined in the <a href="/journal/wholesale-pricing-ss-304-mesh">Wholesale Pricing Guide</a>, four major drivers are:</p>
        <ol>
          <li><strong>Raw Material Density:</strong> Fine wire weaves generally use less material than thick, heavy-duty structural constructions.</li>
          <li><strong>Weave Complexity:</strong> Custom apertures, special patterns and mechanical loom setups can affect production time and yield.</li>
          <li><strong>PVD Finish Selection:</strong> Natural stainless and standard finishes have different processing requirements from high-vacuum PVD Gold, Rose Gold, Champagne, Bronze or Titanium Black.</li>
          <li><strong>Custom Fabrication:</strong> Raw rolls may be more economical for some projects, while factory-fabricated, TIG-welded and framed panels can reduce site labour and improve installation control.</li>
        </ol>

        <h2>What to Send for a Fast Quotation</h2>
        <ul>
          <li>Project location and application.</li>
          <li>Approximate square metre/footage or panel schedule.</li>
          <li>Mesh type, wire diameter and aperture if already specified.</li>
          <li>Required stainless-steel grade.</li>
          <li>PVD finish and physical sample/reference where available.</li>
          <li>Panel dimensions, frame profiles and fixing requirements.</li>
          <li>AutoCAD/PDF drawings, elevations or a concept sketch.</li>
          <li>Required delivery date and installation scope.</li>
        </ul>

        <h2>Request a Project Estimate</h2>
        <p>For a commercial project in India, provide your drawings, approximate quantities, required wire gauge or mesh construction and desired finish to the SteelX Decor B2B sales team. A formal quotation should be based on the final technical scope and commercial terms rather than a generic per-square-foot number.</p>

        <h2>Value Engineering Without Compromising the Design</h2>
        <p>Value engineering can reduce project cost without abandoning the visual concept. Typical levers include adjusting open area, optimizing panel sizes, standardizing frame profiles, simplifying edge details, selecting a readily available weave and reducing unnecessary fabrication operations. These changes should be evaluated against the design intent and performance requirements before approval.</p>
      </article>
    </Section>
  </PageShell>;
}
