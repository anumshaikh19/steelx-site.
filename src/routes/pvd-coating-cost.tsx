import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Boxes, Palette, Grid3X3 } from "lucide-react";

import { PageShell, Section } from "@/components/page-shell";
import { Reveal, SectionHeading } from "@/components/reveal";
import { img } from "@/data/mesh";

const title = "PVD Coating Cost for SS 304 Mesh | Price Guide & Estimator";
const description =
  "Discover the exact PVD coating cost for SS 304 decorative mesh in India. Learn how colors, surface area, and batch sizes affect your architectural pricing.";

const costRows = [
  ["Natural Silver / Hairline", "₹350 - ₹550", "₹0 (No PVD)", "₹350 - ₹550"],
  ["PVD Bright Gold", "₹350 - ₹550", "+ ₹250 - ₹400", "₹600 - ₹950"],
  ["PVD Rose Gold / Copper", "₹350 - ₹550", "+ ₹300 - ₹500", "₹650 - ₹1,050"],
  ["PVD Titanium Black", "₹350 - ₹550", "+ ₹350 - ₹600", "₹700 - ₹1,150"],
];

export const Route = createFileRoute("/pvd-coating-cost")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index,follow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PvdCoatingCostPage,
});

function PvdCoatingCostPage() {
  return (
    <PageShell>
      <section className="relative isolate min-h-[680px] overflow-hidden border-b border-white/10 bg-gray-950 text-white">
        <img
          src={img.pvdSteel}
          alt="PVD coated stainless steel mesh surface in a luxury metallic finish"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(5,7,10,.97)_0%,rgba(5,7,10,.86)_42%,rgba(5,7,10,.48)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_45%,rgba(201,169,110,.24),transparent_34%)]" />
        <div className="mx-auto flex min-h-[680px] max-w-[1600px] items-end px-4 pb-20 pt-32 sm:px-8 lg:px-10 lg:pb-28">
          <div className="max-w-4xl">
            <Reveal variant="text" as="p" className="text-xs uppercase tracking-[0.34em] text-[#e5c98f]">
              Commercial Pricing / PVD / SS 304 Mesh
            </Reveal>
            <Reveal variant="up" delay={100}>
              <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[.94] tracking-tight sm:text-7xl lg:text-[6.5rem]">
                PVD Coating Cost for SS 304 Mesh
              </h1>
            </Reveal>
            <Reveal variant="up" delay={180}>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
                A transparent commercial price guide for architects, interior designers, fabricators and procurement teams specifying PVD-finished stainless steel architectural mesh in India.
              </p>
            </Reveal>
            <Reveal variant="up" delay={260} className="mt-10 flex flex-wrap gap-3">
              <a href="#pricing" className="inline-flex items-center gap-2 rounded-full bg-[#c9a96e] px-6 py-3 text-sm font-semibold text-gray-950 transition-transform hover:-translate-y-0.5">
                View pricing matrix <ArrowUpRight className="h-4 w-4" />
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/10">
                Request a project quote <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <Section>
        <div className="rounded-xl border border-yellow-500 bg-gradient-to-r from-amber-50 to-orange-100 p-8 shadow-md lg:p-10">
          <h2 className="mb-3 text-2xl font-bold text-gray-900">AI Quick Answer: What is the PVD coating cost for SS 304 mesh?</h2>
          <p className="text-lg leading-relaxed text-gray-800">
            In India, applying a premium Physical Vapor Deposition (PVD) coating to SS 304 decorative mesh typically adds a surcharge of <strong>₹250 to ₹600+ per square foot</strong> on top of the base raw material cost. The exact price variance depends on the selected color, the density and surface area of the specific weave, and total batch volume. These figures are indicative commercial ranges; the final quotation depends on the actual mesh construction, finish, quantity, fabrication and project scope.
          </p>
        </div>

        <article className="prose prose-lg mt-16 max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-yellow-700 prose-a:font-semibold">
          <h1>Understanding PVD Coating Costs for Architectural Mesh</h1>
          <p>When budgeting for luxury interiors—whether a grand hotel lobby in Mumbai or a bespoke residential wardrobe—architects need a pricing model that separates the stainless-steel substrate from the decorative finish. At SteelX Decor, we believe in radical transparency: PVD is a controlled vacuum-coating process, not a conventional spray paint.</p>
          <p>Physical Vapor Deposition applies a thin decorative coating to a prepared metal substrate. The process requires specialized vacuum equipment, surface preparation, process control and batch planning. It can deliver a premium metallic appearance with strong wear performance when the substrate, coating system, environment and maintenance regime are correctly specified.</p>
          <p>Here is how the <strong>PVD coating cost for SS 304 mesh</strong> is commonly evaluated.</p>

          <h2 id="pricing">Estimated Cost Breakdown Matrix</h2>
          <p><em>Note: The following table provides indicative commercial pricing for standard architectural weaves. Exact quotes require a review of your specific CAD drawings, mesh geometry, open-area requirement, quantity and finish sample.</em></p>
        </article>

        <Reveal variant="up" className="my-8 overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-lg">
          <table className="w-full min-w-[850px] border-collapse text-left">
            <thead className="bg-gray-900 text-white">
              <tr>
                <th className="p-4 font-semibold">Finish Type</th>
                <th className="p-4 font-semibold">Base SS 304 Mesh Cost (Est. / sq.ft)</th>
                <th className="p-4 font-semibold">PVD Coating Surcharge (Est. / sq.ft)</th>
                <th className="p-4 font-bold text-yellow-400">Total Finished Cost (Est. / sq.ft)</th>
              </tr>
            </thead>
            <tbody className="text-gray-800">
              {costRows.map(([finish, base, surcharge, total], index) => (
                <tr key={finish} className={`border-b border-gray-200 ${index % 2 === 1 ? "bg-amber-50" : "bg-white"}`}>
                  <td className="p-4 font-semibold">{finish}</td>
                  <td className="p-4 whitespace-nowrap">{base}</td>
                  <td className="p-4 whitespace-nowrap text-orange-600">{surcharge}</td>
                  <td className="p-4 whitespace-nowrap bg-[#fff8e8] text-lg font-bold text-[#9a741e]">{total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>

        <article className="prose prose-lg max-w-none prose-headings:font-display prose-headings:tracking-tight">
          <h2>The 3 Key Drivers of PVD Pricing</h2>
          <p>Unlike a flat stainless-steel sheet, decorative metal mesh is a three-dimensional product. The commercial cost of coating it is influenced by the amount of material surface presented to the coating process, the efficiency of the batch, and the finish chemistry required.</p>
        </article>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            { icon: Grid3X3, number: "01", title: "Mesh Density", body: "PVD coating exposure is influenced by the actual mesh construction and effective surface area. A densely woven fine-aperture mesh can present substantially more wire surface than an open lattice of the same nominal square footage." },
            { icon: Boxes, number: "02", title: "Chamber Volume & Batch Size", body: "Vacuum coating cycles have fixed process overheads. Larger production batches can use chamber capacity more efficiently, which can reduce the coating cost allocated to each square foot." },
            { icon: Palette, number: "03", title: "Color Chemistry", body: "The requested visual finish changes the coating process and process controls. Standard Gold, Rose Gold and deeper Titanium Black finishes can therefore carry different commercial premiums." },
          ].map(({ icon: Icon, number, title: cardTitle, body }, index) => (
            <Reveal key={cardTitle} variant="up" delay={index * 90} className="group rounded-xl border border-border bg-card p-7 transition-transform duration-500 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs tracking-[.2em] text-muted-foreground">{number}</span>
                <Icon className="h-6 w-6 text-gold transition-transform duration-500 group-hover:scale-110" />
              </div>
              <h3 className="mt-8 font-display text-2xl text-foreground">{cardTitle}</h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{body}</p>
            </Reveal>
          ))}
        </div>

        <article className="prose prose-lg mt-16 max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-yellow-700 prose-a:font-semibold">
          <h3>1. Mesh Density (Surface Area)</h3>
          <p>PVD coating economics are not determined only by the visible flat area of the finished panel. Mesh geometry creates additional exposed wire surface, curves and intersections that the coating system must process. A heavy, densely woven cabinet mesh can therefore require more coating exposure than a wide-open 25mm lattice screen occupying the same nominal square footage.</p>

          <h3>2. Chamber Volume &amp; Batch Size</h3>
          <p>PVD is executed inside sealed vacuum chambers. Each cycle carries setup, preparation, energy and process overhead. A small 10 sq. ft. partition may still consume a meaningful portion of a chamber cycle, whereas larger production quantities can make better use of available chamber capacity. The actual commercial break-even point depends on the coating facility, chamber dimensions, loading geometry and production schedule.</p>

          <h3>3. Color Chemistry</h3>
          <p>The requested PVD color influences the process recipe and control requirements. Standard Gold can follow a well-established production route, while deeper black or precisely matched rose-gold tones may require different process parameters and tighter colour control. For specification-grade projects, approve a physical finish sample rather than relying on a screen-rendered colour.</p>

          <h2>The Long-Term ROI</h2>
          <p>Is the PVD coating cost worth it? For many premium interiors, the decision should be evaluated as a lifecycle specification rather than simply a first-cost comparison. Mild steel with a powder coating can have a lower initial purchase price, while SS 304 with PVD offers a corrosion-resistant stainless substrate and a durable decorative finish when correctly specified.</p>
          <p>In humid or coastal environments such as Mumbai or Chennai, the underlying material, edge treatment, cleaning regime and exposure all matter. It is not technically accurate to guarantee that every powder-coated mild-steel partition will fail within three years or that every PVD finish will last forever. A project-specific lifecycle model should include initial material, fabrication, maintenance, potential recoating and replacement exposure.</p>

          <h2>What Should Be Included in a PVD Mesh Quote?</h2>
          <ol>
            <li><strong>Mesh construction:</strong> woven, crimped, spiral, cable/rod or other specified geometry.</li>
            <li><strong>Stainless grade:</strong> SS 304 or an alternative grade selected for the project environment.</li>
            <li><strong>Wire diameter and aperture:</strong> the physical parameters that define density, appearance and performance.</li>
            <li><strong>Finish:</strong> PVD Gold, Rose Gold, Champagne, Bronze, Titanium Black or an approved custom reference.</li>
            <li><strong>Quantity and panel schedule:</strong> total area, individual panel dimensions and production batches.</li>
            <li><strong>Fabrication:</strong> raw rolls versus cut, edged, framed or fully assembled panels.</li>
            <li><strong>Logistics and installation:</strong> packing, delivery location, site access and installation scope where applicable.</li>
          </ol>

          <h2>Get a Custom Quotation</h2>
          <p>Because every architectural mesh specification is different, a standard price range only tells half the story. Send your dimensions, wire gauge, mesh construction, quantity and chosen PVD finish to the SteelX Decor B2B estimation team. For the most accurate review, include AutoCAD/PDF drawings and any approved finish reference or physical sample requirement.</p>
        </article>

        <section className="relative mt-20 overflow-hidden rounded-2xl bg-gray-950 px-7 py-14 text-white sm:px-10 lg:px-14 lg:py-16">
          <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_center,rgba(201,169,110,.22),transparent_65%)]" />
          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[.28em] text-[#d9b978]">B2B Estimation Desk</p>
              <h2 className="mt-4 max-w-3xl font-display text-3xl leading-tight sm:text-5xl">Upload Drawings for a Custom Quote</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">Share your project dimensions, mesh construction, wire gauge and PVD finish requirement. Our team can then price the actual specification instead of applying a generic per-square-foot assumption.</p>
            </div>
            <Link to="/contact" className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-[#c9a96e] px-7 py-4 text-sm font-semibold text-gray-950 transition-all hover:-translate-y-1 hover:bg-[#e0c48d]">
              Upload Drawings for a Custom Quote
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </section>
      </Section>
    </PageShell>
  );
}
