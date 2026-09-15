import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Boxes, Check, Grid3X3, Palette, Sparkles } from "lucide-react";

import { PageShell, Section } from "@/components/page-shell";
import { Reveal } from "@/components/reveal";
import { img } from "@/data/mesh";

const title = "PVD Coating Cost for SS 304 Mesh | Price Guide & Estimator";
const description =
  "Discover the exact PVD coating cost for SS 304 decorative mesh in India. Learn how colors, surface area, and batch sizes affect your architectural pricing.";

const costRows = [
  ["Natural Silver / Hairline", "₹350 – ₹550", "₹0", "₹350 – ₹550", "Standard stainless finish"],
  ["PVD Bright Gold", "₹350 – ₹550", "+ ₹250 – ₹400", "₹600 – ₹950", "Most requested"],
  ["PVD Rose Gold / Copper", "₹350 – ₹550", "+ ₹300 – ₹500", "₹650 – ₹1,050", "Warm architectural tone"],
  ["PVD Titanium Black", "₹350 – ₹550", "+ ₹350 – ₹600", "₹700 – ₹1,150", "Deep statement finish"],
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
      <section className="group relative isolate min-h-[760px] overflow-hidden border-b border-white/10 bg-[#080807] text-white">
        <img
          src={img.pvdSteel}
          alt="PVD coated stainless steel mesh surface in a luxury metallic finish"
          className="absolute inset-0 -z-30 h-full w-full object-cover object-center opacity-80 transition-transform duration-[1800ms] ease-out group-hover:scale-[1.025]"
        />
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(100deg,rgba(5,6,7,.98)_0%,rgba(5,6,7,.9)_34%,rgba(5,6,7,.54)_68%,rgba(5,6,7,.35)_100%)]" />
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_76%_42%,rgba(218,181,108,.3),transparent_24%),radial-gradient(circle_at_82%_80%,rgba(255,255,255,.08),transparent_28%)]" />
        <div className="absolute right-[7%] top-[24%] -z-10 hidden h-64 w-64 rounded-full border border-[#d8b775]/20 lg:block" />
        <div className="absolute right-[10%] top-[28%] -z-10 hidden h-48 w-48 rounded-full border border-[#d8b775]/15 lg:block" />

        <div className="mx-auto flex min-h-[760px] max-w-[1600px] items-end px-4 pb-16 pt-32 sm:px-8 lg:px-10 lg:pb-24">
          <div className="w-full">
            <div className="mb-12 flex items-center gap-4 text-[10px] uppercase tracking-[0.32em] text-white/45">
              <span>SteelX Decor</span><span className="h-px w-10 bg-[#c9a96e]/60" /><span>Commercial Pricing</span><span className="hidden sm:inline">/</span><span className="hidden sm:inline">SS 304 Mesh</span>
            </div>
            <div className="grid items-end gap-12 lg:grid-cols-[1fr_360px]">
              <div>
                <Reveal variant="text" as="p" className="flex items-center gap-3 text-xs uppercase tracking-[0.34em] text-[#e5c98f]">
                  <span className="h-px w-8 bg-[#e5c98f]" /> PVD Finish Intelligence
                </Reveal>
                <Reveal variant="up" delay={100}>
                  <h1 className="mt-6 max-w-5xl font-display text-5xl leading-[.9] tracking-[-.035em] sm:text-7xl lg:text-[6.7rem]">
                    PVD Coating Cost<br /><span className="text-white/45">for SS 304 Mesh</span>
                  </h1>
                </Reveal>
                <Reveal variant="up" delay={180}>
                  <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/68 sm:text-lg">
                    A transparent commercial guide for architects, interior designers, fabricators and procurement teams specifying PVD-finished stainless steel architectural mesh in India.
                  </p>
                </Reveal>
                <Reveal variant="up" delay={260} className="mt-9 flex flex-wrap gap-3">
                  <a href="#pricing" className="group/cta inline-flex items-center gap-2 rounded-full bg-[#c9a96e] px-6 py-3.5 text-sm font-semibold text-[#11100d] transition-all duration-300 hover:-translate-y-1 hover:bg-[#e3c98f] hover:shadow-[0_14px_40px_rgba(201,169,110,.2)]">
                    Explore pricing <ArrowDown className="h-4 w-4 transition-transform group-hover/cta:translate-y-1" />
                  </a>
                  <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[.06] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/10">
                    Request a project quote <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Reveal>
              </div>

              <Reveal variant="up" delay={320} className="hidden lg:block">
                <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-black/30 p-6 backdrop-blur-xl">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d8b775] to-transparent" />
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-[.25em] text-white/45"><span>Indicative premium</span><Sparkles className="h-4 w-4 text-[#d8b775]" /></div>
                  <p className="mt-6 font-display text-5xl tracking-tight">₹250–₹600<span className="ml-2 text-base text-white/45">+/sq.ft</span></p>
                  <p className="mt-3 text-xs leading-5 text-white/50">Typical PVD surcharge before fabrication, logistics and project-specific requirements.</p>
                  <div className="mt-6 grid grid-cols-2 gap-2 border-t border-white/10 pt-5 text-xs"><div><span className="block text-white/35">Substrate</span><span className="mt-1 block">SS 304</span></div><div><span className="block text-white/35">Finish</span><span className="mt-1 block">PVD</span></div></div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <Section className="!pb-10">
        <Reveal variant="up">
          <div className="relative overflow-hidden rounded-2xl border border-[#e5c98f]/50 bg-gradient-to-br from-[#fffaf0] via-[#fff4dc] to-[#f5dfb2] p-7 shadow-[0_20px_70px_rgba(107,80,29,.09)] lg:p-10">
            <div className="absolute right-0 top-0 h-full w-1/3 bg-[radial-gradient(circle_at_center,rgba(201,169,110,.25),transparent_65%)]" />
            <div className="relative flex gap-5">
              <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#b48b3e]/30 bg-white/50 text-[#9a741e] sm:flex"><Sparkles className="h-4 w-4" /></div>
              <div>
                <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.28em] text-[#9a741e]"><span>AI Quick Answer</span><span className="h-px w-8 bg-[#c9a96e]" /></div>
                <h2 className="mt-3 font-display text-2xl tracking-tight text-[#171511] sm:text-3xl">What is the PVD coating cost for SS 304 mesh?</h2>
                <p className="mt-4 max-w-5xl text-base leading-7 text-[#4a4030]">In India, applying a premium Physical Vapor Deposition (PVD) coating to SS 304 decorative mesh typically adds a surcharge of <strong className="text-[#7e5c16]">₹250 to ₹600+ per square foot</strong> on top of the base raw material cost. The exact price depends on the selected color, mesh construction, effective surface area, batch volume, fabrication and project scope.</p>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section id="pricing" className="!pt-16">
        <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal variant="text" as="p" className="text-xs uppercase tracking-[.3em] text-gold">01 / Price architecture</Reveal>
            <Reveal variant="up" delay={80}><h2 className="mt-5 font-display text-4xl leading-[.98] tracking-tight text-foreground sm:text-5xl">A clearer way to price the finish.</h2></Reveal>
            <Reveal variant="up" delay={150}><p className="mt-6 max-w-md text-base leading-7 text-muted-foreground">Separate the stainless substrate from the PVD finish, then understand what changes the final number. This keeps early design budgets realistic without hiding the variables.</p></Reveal>
            <div className="mt-8 space-y-3">
              {["Base SS 304 mesh", "PVD color surcharge", "Fabrication & framing", "Quantity / batch efficiency"].map((item, i) => (
                <Reveal key={item} variant="row" delay={i * 55} className="flex items-center gap-3 border-t border-border pt-3 text-sm text-muted-foreground"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-[10px] font-bold text-foreground">0{i + 1}</span>{item}</Reveal>
              ))}
            </div>
          </div>

          <div>
            <Reveal variant="up" className="mb-5 flex items-end justify-between gap-4"><div><p className="text-xs uppercase tracking-[.2em] text-muted-foreground">Indicative India market guide</p><p className="mt-1 text-sm text-muted-foreground">Per square foot · standard architectural applications</p></div><span className="hidden text-[10px] uppercase tracking-[.2em] text-muted-foreground sm:block">2026 guide</span></Reveal>
            <Reveal variant="up" className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0_18px_60px_rgba(0,0,0,.07)]">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[850px] border-collapse text-left">
                  <thead className="bg-[#11110f] text-white">
                    <tr>
                      <th className="p-5 text-[10px] font-medium uppercase tracking-[.18em]">Finish</th>
                      <th className="p-5 text-[10px] font-medium uppercase tracking-[.18em]">Base SS 304</th>
                      <th className="p-5 text-[10px] font-medium uppercase tracking-[.18em]">PVD surcharge</th>
                      <th className="bg-[#9d7931] p-5 text-[10px] font-semibold uppercase tracking-[.18em] text-white">Finished / sq.ft</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm text-gray-800">
                    {costRows.map(([finish, base, surcharge, total, note], index) => (
                      <tr key={finish} className={`group border-b border-gray-200 transition-colors hover:bg-[#f8f0df] ${index % 2 === 1 ? "bg-[#faf8f3]" : "bg-white"}`}>
                        <td className="p-5"><span className="block font-semibold text-gray-950">{finish}</span><span className="mt-1 block text-xs text-gray-500">{note}</span></td>
                        <td className="whitespace-nowrap p-5 text-gray-600">{base}</td>
                        <td className="whitespace-nowrap p-5 text-[#9a741e]">{surcharge}</td>
                        <td className="whitespace-nowrap bg-[#fff7e6] p-5 font-display text-xl font-semibold text-[#8c691f] transition-colors group-hover:bg-[#f8edcf]">{total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border bg-secondary/40 px-5 py-4 text-[11px] leading-5 text-muted-foreground"><span>Indicative only — final quotation follows specification review.</span><Link to="/contact" className="font-semibold text-foreground hover:text-gold">Get project pricing <ArrowUpRight className="ml-1 inline h-3 w-3" /></Link></div>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section className="border-t border-border">
        <div className="mb-12 max-w-3xl"><Reveal variant="text" as="p" className="text-xs uppercase tracking-[.3em] text-gold">02 / What moves the number</Reveal><Reveal variant="up" delay={80}><h2 className="mt-5 font-display text-4xl leading-tight tracking-tight text-foreground sm:text-6xl">Three variables. One final finish.</h2></Reveal></div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { icon: Grid3X3, number: "01", title: "Mesh density", body: "A dense fine-aperture weave can present significantly more exposed wire surface than an open lattice occupying the same nominal area." },
            { icon: Boxes, number: "02", title: "Batch volume", body: "Vacuum coating cycles carry setup and process overhead. Larger production batches can use chamber capacity more efficiently." },
            { icon: Palette, number: "03", title: "Color chemistry", body: "Gold, Rose Gold, Champagne and deeper Titanium Black finishes can require different process recipes and colour controls." },
          ].map(({ icon: Icon, number, title: cardTitle, body }, index) => (
            <Reveal key={cardTitle} variant="up" delay={index * 90} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#c9a96e]/50 hover:shadow-[0_22px_70px_rgba(0,0,0,.09)] lg:p-8">
              <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-[#c9a96e]/[.08] blur-2xl transition-transform duration-700 group-hover:scale-150" />
              <div className="relative flex items-center justify-between"><span className="font-mono text-xs tracking-[.2em] text-muted-foreground">{number}</span><Icon className="h-6 w-6 text-gold transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110" /></div>
              <h3 className="relative mt-16 font-display text-3xl tracking-tight text-foreground">{cardTitle}</h3>
              <p className="relative mt-4 text-sm leading-7 text-muted-foreground">{body}</p>
              <div className="mt-8 h-px w-8 bg-[#c9a96e] transition-all duration-500 group-hover:w-16" />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="!pt-8">
        <div className="grid gap-14 lg:grid-cols-[.7fr_1.3fr]">
          <Reveal variant="up" className="lg:sticky lg:top-28 lg:self-start"><div className="flex items-center gap-3 text-xs uppercase tracking-[.28em] text-gold"><span className="h-px w-8 bg-gold" /> Specification notes</div><h2 className="mt-5 font-display text-4xl leading-tight tracking-tight sm:text-5xl">Price is only useful when the specification is clear.</h2></Reveal>
          <article className="prose prose-lg max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-yellow-700 prose-a:font-semibold">
            <h2>Understanding PVD coating costs for architectural mesh</h2>
            <p>When budgeting for luxury interiors—from a grand hotel lobby in Mumbai to a bespoke residential wardrobe—architects need a pricing model that separates the stainless-steel substrate from the decorative finish. PVD is a controlled vacuum-coating process requiring specialized equipment, surface preparation, process control and batch planning.</p>
            <p>It can deliver a premium metallic appearance with strong wear performance when the substrate, coating system, environment and maintenance regime are correctly specified. The actual commercial cost should therefore be treated as a project-specific estimate, not a universal rate.</p>
            <h3>1. Mesh density / effective surface area</h3>
            <p>Decorative mesh is a three-dimensional product. Geometry creates additional exposed wire surface, curves and intersections that the coating system must process. A heavy, densely woven cabinet mesh can therefore require more coating exposure than a wide-open lattice screen occupying the same nominal square footage.</p>
            <h3>2. Chamber volume &amp; batch size</h3>
            <p>PVD is executed inside sealed vacuum chambers. Each cycle carries setup, preparation, energy and process overhead. Larger production quantities can make better use of available chamber capacity, although the actual economics depend on chamber dimensions, loading geometry and production schedule.</p>
            <h3>3. Color chemistry</h3>
            <p>The requested PVD color influences the process recipe and control requirements. For specification-grade projects, approve a physical finish sample rather than relying only on a screen-rendered colour.</p>
            <h2>The long-term ROI</h2>
            <p>For many premium interiors, the decision should be evaluated as a lifecycle specification rather than simply a first-cost comparison. Mild steel with a powder coating can have a lower initial purchase price, while SS 304 with PVD offers a corrosion-resistant stainless substrate and a durable decorative finish when correctly specified.</p>
            <p>In humid or coastal environments such as Mumbai or Chennai, the underlying material, edge treatment, cleaning regime and exposure all matter. A project-specific lifecycle model should include initial material, fabrication, maintenance, potential recoating and replacement exposure.</p>
            <h2>What should be included in a PVD mesh quote?</h2>
            <ol>
              <li><strong>Mesh construction:</strong> woven, crimped, spiral, cable/rod or another specified geometry.</li>
              <li><strong>Stainless grade:</strong> SS 304 or an alternative grade selected for the project environment.</li>
              <li><strong>Wire diameter and aperture:</strong> the physical parameters that define density, appearance and performance.</li>
              <li><strong>Finish:</strong> PVD Gold, Rose Gold, Champagne, Bronze, Titanium Black or an approved custom reference.</li>
              <li><strong>Quantity and panel schedule:</strong> total area, individual panel dimensions and production batches.</li>
              <li><strong>Fabrication:</strong> raw rolls versus cut, edged, framed or fully assembled panels.</li>
              <li><strong>Logistics and installation:</strong> packing, delivery location, site access and installation scope where applicable.</li>
            </ol>
          </article>
        </div>
      </Section>

      <Section className="!pt-10">
        <Reveal variant="up">
          <section className="relative overflow-hidden rounded-[1.5rem] bg-[#0b0b09] px-7 py-14 text-white shadow-[0_25px_90px_rgba(0,0,0,.16)] sm:px-10 lg:px-14 lg:py-16">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(201,169,110,.25),transparent_30%),linear-gradient(120deg,transparent,rgba(255,255,255,.025))]" />
            <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#d8b775] to-transparent" />
            <div className="relative flex flex-col items-start justify-between gap-9 lg:flex-row lg:items-center">
              <div><p className="flex items-center gap-3 text-xs uppercase tracking-[.28em] text-[#d9b978]"><span className="h-px w-8 bg-[#d9b978]" /> B2B Estimation Desk</p><h2 className="mt-5 max-w-3xl font-display text-4xl leading-[.98] tracking-tight sm:text-6xl">Turn drawings into a real number.</h2><p className="mt-5 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">Share your dimensions, mesh construction, wire gauge and PVD finish requirement. Price the actual specification instead of applying a generic per-square-foot assumption.</p></div>
              <Link to="/contact" className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-[#c9a96e] px-7 py-4 text-sm font-semibold text-[#11100d] transition-all duration-300 hover:-translate-y-1 hover:bg-[#e1c48a] hover:shadow-[0_15px_45px_rgba(201,169,110,.22)]">Upload Drawings for a Custom Quote <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></Link>
            </div>
          </section>
        </Reveal>
      </Section>

      <Section className="!py-10">
        <div className="flex flex-col justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row"><span>SteelX Decor · Architectural stainless steel &amp; PVD finishes</span><span className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-gold" /> Indicative pricing · Final quote on specification</span></div>
      </Section>
    </PageShell>
  );
}
