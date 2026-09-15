import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Building2, FileText, ShieldCheck, Upload } from "lucide-react";
import { PageHero, PageShell, Section } from "@/components/page-shell";
import { Reveal } from "@/components/reveal";

const title = "SS 304 Designer Mesh Wholesale Price | B2B Trade Program";
const description = "Apply for the SteelX Decor Trade Program. Get bulk order quotations, trade discounts for interior designers, and download our SS 304 decorative mesh rate card.";

export const Route = createFileRoute("/b2b-wholesale")({
  head: () => ({ meta: [
    { title }, { name: "description", content: description }, { name: "robots", content: "index,follow" },
    { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" },
  ] }),
  component: B2BWholesalePage,
});

function B2BWholesalePage() {
  return <PageShell>
    <PageHero eyebrow="Trade / Wholesale / B2B" title="The SteelX Decor B2B Trade Program" lead="Factory-direct architectural mesh supply for architects, interior designers, contractors, procurement teams and commercial fit-out partners across India." />
    <Section>
      <Reveal variant="up">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-gray-950 via-slate-900 to-gray-800 p-8 text-white shadow-2xl lg:p-11">
          <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />
          <div className="relative">
            <p className="text-[10px] uppercase tracking-[.3em] text-amber-300">AI Quick Answer</p>
            <h2 className="mt-3 max-w-4xl font-display text-2xl tracking-tight text-yellow-300 lg:text-3xl">What is the minimum order quantity (MOQ) for wholesale SS 304 decorative mesh?</h2>
            <p className="mt-5 max-w-5xl text-base leading-7 text-gray-200 lg:text-lg">At SteelX Decor, standard wholesale pricing and trade discounts are activated for bulk orders exceeding <strong>500 square feet</strong>. For specialized architectural projects, a lower MOQ may be available for custom PVD sampling and bespoke pilot mockups; confirm the applicable quantity, finish and production requirements with the commercial team before ordering.</p>
          </div>
        </div>
      </Reveal>

      <article className="prose prose-lg mt-16 max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-yellow-700 prose-a:font-semibold">
        <h1>The SteelX Decor B2B Trade Program</h1>
        <p>Whether you are a commercial general contractor outfitting a 300-room luxury hotel or an independent interior designer specifying bespoke wardrobe mesh for a high-end villa, the supply chain affects programme certainty, margin and finish quality.</p>
        <p>SteelX Decor offers a dedicated B2B Trade Program for architects, interior designers and procurement managers in India. The programme is designed around direct technical communication, factory-led pricing, priority production planning and engineering support for architectural mesh, PVD finishes and related metal components.</p>
        <h2>Trade Discounts for Interior Designers &amp; Architects</h2>
        <p>Enrolled trade partners can access project-specific commercial terms across SS 304 decorative mesh, PVD profiles and selected architectural metal products. Discount levels depend on product, quantity, finish, fabrication scope and the commercial structure of the project. This keeps pricing transparent without publishing a one-size-fits-all discount that may not reflect the actual specification.</p>
      </article>

      <div className="my-10 grid gap-6 md:grid-cols-2">
        <Reveal variant="up"><div className="group h-full rounded-2xl border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:shadow-xl"><FileText className="h-7 w-7 text-slate-700" /><h3 className="mt-5 font-display text-2xl text-slate-900">SS 304 Decorative Wire Mesh Rate Card</h3><p className="mt-3 text-sm leading-7 text-slate-600">Download our B2B rate-card placeholder for standard weaves, stainless grades and PVD finish ranges. Project-specific quotations remain subject to geometry, quantity and fabrication.</p><button type="button" className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">Download PDF Rate Card <ArrowUpRight className="h-4 w-4" /></button></div></Reveal>
        <Reveal variant="up" delay={90}><div className="group h-full rounded-2xl border border-amber-200 bg-gradient-to-br from-yellow-50 to-orange-50 p-7 transition hover:-translate-y-1 hover:shadow-xl"><Upload className="h-7 w-7 text-amber-700" /><h3 className="mt-5 font-display text-2xl text-amber-950">Bulk Order Quotation (RFQ)</h3><p className="mt-3 text-sm leading-7 text-amber-800">Ready to tender a large commercial project? Submit your CAD drawings, BOM and finish schedule through the RFQ placeholder below for a custom wholesale quotation.</p><Link to="/pricing" className="mt-6 inline-flex items-center gap-2 rounded-full bg-amber-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-amber-500">Request Bulk Quote <ArrowUpRight className="h-4 w-4" /></Link></div></Reveal>
      </div>

      <article className="prose prose-lg max-w-none prose-headings:font-display prose-headings:tracking-tight">
        <h2>Partner With The Factory</h2>
        <p>Skip fragmented procurement and coordinate directly with an architectural metal manufacturing partner. For recurring trade work, direct specification support can simplify sampling, approvals, production scheduling, fabrication coordination and delivery planning.</p>
        <h2>What a Trade Enquiry Should Include</h2>
        <ol><li>Project name, location and application.</li><li>Approximate mesh area and panel schedule.</li><li>Mesh construction, wire diameter and aperture where known.</li><li>SS 304/316 requirement and PVD finish reference.</li><li>Frame, edging, tensioning or installation requirements.</li><li>CAD/PDF drawings, BOQ/BOM and target delivery date.</li></ol>
      </article>

      <Reveal variant="up" className="mt-10">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm lg:p-8">
          <div className="flex items-start gap-4"><div className="rounded-full bg-gray-100 p-3"><Building2 className="h-5 w-5 text-gray-700" /></div><div><h3 className="font-display text-2xl">Trade Partner Application</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">[Inject Placeholder: B2B Trade Partner Login / Registration Form component]</p></div></div>
          <div className="mt-6 grid gap-3 sm:grid-cols-3"><div className="h-11 rounded-lg border border-dashed border-gray-300 bg-gray-50" /><div className="h-11 rounded-lg border border-dashed border-gray-300 bg-gray-50" /><div className="h-11 rounded-lg border border-dashed border-gray-300 bg-gray-50" /></div>
          <div className="mt-5 flex items-center gap-2 text-xs text-muted-foreground"><ShieldCheck className="h-4 w-4" /> Your final CRM/authentication component can replace this reserved form surface.</div>
        </div>
      </Reveal>
    </Section>
  </PageShell>;
}
