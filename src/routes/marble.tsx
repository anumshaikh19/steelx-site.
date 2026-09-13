import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/marble")({ component: MarblePage });

const projects = [
  { name: "Noir Residence", type: "Private residence", detail: "Calacatta + Nero Marquina" },
  { name: "The Monolith", type: "Hospitality", detail: "Bookmatched stone walls" },
  { name: "Linea Gallery", type: "Retail interior", detail: "Veined marble + brushed metal" },
];

function MarblePage() {
  return (
    <main className="min-h-screen bg-[#f4f1eb] text-[#151515] selection:bg-[#151515] selection:text-white">
      <section className="relative min-h-[88vh] overflow-hidden bg-[#181716] text-[#f4f1eb]">
        <div className="absolute inset-0 opacity-70 [background:radial-gradient(circle_at_75%_35%,rgba(255,255,255,.18),transparent_25%),linear-gradient(120deg,#111_0%,#292723_48%,#111_100%)]" />
        <div className="absolute -right-32 top-[-10%] h-[120%] w-[55%] rotate-[18deg] bg-white/5 blur-3xl" />
        <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-between px-6 py-8 md:px-10 lg:px-14">
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.28em] text-white/60">
            <span>STEELX / MARBLE</span><span>Architecture · Interiors · Stone</span>
          </div>
          <div className="max-w-6xl pb-12">
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-7 text-xs uppercase tracking-[0.35em] text-white/55">Natural stone, engineered as a statement</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1 }} className="max-w-5xl font-serif text-[clamp(4rem,11vw,10rem)] leading-[.82] tracking-[-.065em]">
              MARBLE<br /><span className="text-white/35">WITHOUT</span><br />LIMITS.
            </motion.h1>
            <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <p className="max-w-md text-sm leading-7 text-white/60">Rare stone, precise fabrication and obsessive installation for spaces that need to feel permanent.</p>
              <a href="/contact" className="inline-flex w-fit border border-white/30 px-7 py-4 text-xs uppercase tracking-[.22em] transition hover:bg-white hover:text-black">Start a project ↗</a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-14">
        <div className="grid gap-12 md:grid-cols-[1.1fr_.9fr] md:items-end">
          <h2 className="font-serif text-5xl leading-none tracking-[-.045em] md:text-7xl">Stone is not a finish.<br /><i>It is architecture.</i></h2>
          <p className="max-w-lg text-sm leading-7 text-black/55">We source, cut, bookmatch, edge, finish and install premium marble and natural stone for residential, hospitality and commercial interiors.</p>
        </div>
        <div className="mt-20 grid grid-cols-2 gap-px bg-black/10 md:grid-cols-4">
          {[['25+','stone families'],['100%','custom fabrication'],['360°','project handling'],['01','design language']].map(([n,l]) => <div key={l} className="bg-[#f4f1eb] p-7 md:p-10"><div className="font-serif text-4xl">{n}</div><div className="mt-2 text-[10px] uppercase tracking-[.22em] text-black/45">{l}</div></div>)}
        </div>
      </section>

      <section className="bg-[#171615] px-6 py-24 text-[#f4f1eb] md:px-10 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between gap-6"><div><p className="text-xs uppercase tracking-[.3em] text-white/40">Capabilities</p><h2 className="mt-4 font-serif text-5xl md:text-7xl">From quarry<br /><i>to quiet luxury.</i></h2></div></div>
          <div className="mt-16 grid gap-px bg-white/10 md:grid-cols-3">
            {[['01','Sourcing','Curated marble, quartzite and natural stone selected for tone, movement and scale.'],['02','Fabrication','CNC precision, bookmatching, mitred edges, custom profiles and controlled finishing.'],['03','Installation','Site coordination and meticulous installation where every vein has a place.']].map(([n,t,d]) => <div key={n} className="min-h-72 bg-[#171615] p-8 transition hover:bg-[#242220]"><span className="text-xs text-white/35">{n}</span><h3 className="mt-20 font-serif text-3xl">{t}</h3><p className="mt-4 max-w-xs text-sm leading-6 text-white/45">{d}</p></div>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-14">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="text-xs uppercase tracking-[.3em] text-black/40">Selected work</p><h2 className="mt-4 font-serif text-5xl md:text-7xl">Material,<br /><i>made monumental.</i></h2></div><a href="/projects" className="text-xs uppercase tracking-[.2em] underline underline-offset-8">View projects ↗</a></div>
        <div className="mt-16 grid gap-5 md:grid-cols-3">{projects.map((p, i) => <article key={p.name} className="group min-h-[430px] overflow-hidden bg-[#d9d3ca] p-7 flex flex-col justify-end relative"><div className={`absolute inset-0 opacity-70 ${i===0?'[background:linear-gradient(135deg,#eee8df,#9d948a_48%,#e8e1d8)]':i===1?'[background:linear-gradient(125deg,#252525,#777_40%,#151515)]':'[background:linear-gradient(145deg,#d5cec3,#eee9e1_50%,#8d857c)]'}`} /><div className="absolute inset-0 opacity-20 [background:repeating-linear-gradient(125deg,transparent_0,transparent_12px,rgba(255,255,255,.5)_13px,transparent_14px)]" /><div className="relative"><p className="text-[10px] uppercase tracking-[.25em] text-black/50">{p.type}</p><h3 className="mt-2 font-serif text-4xl">{p.name}</h3><p className="mt-2 text-xs text-black/55">{p.detail}</p></div></article>)}</div>
      </section>

      <section className="border-t border-black/10 px-6 py-24 md:px-10 lg:px-14"><div className="mx-auto max-w-7xl"><p className="text-xs uppercase tracking-[.3em] text-black/40">The approach</p><div className="mt-8 grid gap-10 md:grid-cols-2"><h2 className="font-serif text-5xl leading-[.95] md:text-7xl">Less decoration.<br /><i>More presence.</i></h2><div className="space-y-7 text-sm leading-7 text-black/55"><p>We treat every slab as a composition. Vein direction, junctions, edge details and reflected light are resolved before fabrication begins.</p><p>The result is not simply a stone surface. It is a continuous architectural gesture—quiet from a distance, extraordinary up close.</p><a href="/contact" className="inline-block border-b border-black pb-2 text-xs uppercase tracking-[.22em] text-black">Discuss your space ↗</a></div></div></div></section>

      <section className="bg-[#ded8cf] px-6 py-28 md:px-10 lg:px-14"><div className="mx-auto max-w-7xl text-center"><p className="text-xs uppercase tracking-[.3em] text-black/40">Build something lasting</p><h2 className="mx-auto mt-7 max-w-4xl font-serif text-6xl leading-[.9] tracking-[-.05em] md:text-8xl">Your space.<br /><i>Your stone.</i></h2><a href="/contact" className="mt-10 inline-flex bg-black px-8 py-4 text-xs uppercase tracking-[.22em] text-white transition hover:translate-y-[-2px]">Start a conversation ↗</a></div></section>
    </main>
  );
}
