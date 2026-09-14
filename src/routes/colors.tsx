import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, MoveUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const heroImage = "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=2200&q=88";
const colors = [
  { name: "Champagne", code: "CH-01", tone: "#c9a46b" },
  { name: "Antique Gold", code: "AG-02", tone: "#9d7a43" },
  { name: "Graphite", code: "GR-03", tone: "#393938" },
  { name: "Midnight", code: "MI-04", tone: "#161616" },
  { name: "Rose Gold", code: "RG-05", tone: "#a87568" },
  { name: "Bronze", code: "BR-06", tone: "#6d4f3b" },
];

export const Route = createFileRoute("/colors")({
  head: () => ({
    meta: [
      { title: "Colors — PVD Coated Stainless Steel | STEELX" },
      { name: "description", content: "Explore STEELX PVD coated stainless steel colors engineered for architecture, interiors, facades and luxury spaces." },
      { property: "og:title", content: "Colors — PVD Coated Stainless Steel | STEELX" },
      { property: "og:description", content: "A curated material language of PVD coated stainless steel, engineered for architecture and interiors." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ColorsPage,
});

function ColorsPage() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setRevealed(true), 120);
    const onMove = (event: MouseEvent) => setMouse({ x: (event.clientX / window.innerWidth - 0.5) * 2, y: (event.clientY / window.innerHeight - 0.5) * 2 });
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => { window.clearTimeout(timer); window.removeEventListener("mousemove", onMove); };
  }, []);

  return (
    <div className="colors-page min-h-screen bg-[#11100e] text-[#f1eee6]">
      <SiteHeader overlay />
      <main>
        <section className="colors-hero relative min-h-[92svh] overflow-hidden">
          <div className="colors-hero-grid" aria-hidden="true" />
          <div className="colors-hero-grain" aria-hidden="true" />
          <div className="colors-light-leak" aria-hidden="true" />
          <div className="colors-material-orbit" style={{ transform: `translate3d(${mouse.x * 14}px, ${mouse.y * 9}px, 0)` }}>
            <div className="colors-material-shadow" />
            <figure className="colors-material-card">
              <img src={heroImage} alt="Architectural metallic surface in warm directional light" />
              <div className="colors-metal-overlay" />
              <div className="colors-metal-highlight" />
              <figcaption><span>STEELX / MATERIAL 01</span><span>BRUSHED · PVD · ARCHITECTURAL</span></figcaption>
            </figure>
          </div>

          <div className="relative z-10 mx-auto flex min-h-[92svh] max-w-[1700px] flex-col justify-between px-5 pb-8 pt-28 sm:px-8 lg:px-12 lg:pt-36">
            <div className="flex items-start justify-between gap-8">
              <p className="colors-eyebrow">STEELX / COLOUR LIBRARY</p>
              <div className="hidden text-right sm:block"><p className="colors-micro">MATERIAL SYSTEM 01</p><p className="colors-micro mt-2 text-white/40">SS 304 / SS 316</p></div>
            </div>
            <div className="max-w-[1050px] pb-10 lg:pb-14">
              <p className={`colors-kicker ${revealed ? "is-visible" : ""}`}>THE ARCHITECTURAL PALETTE</p>
              <h1 className={`colors-title ${revealed ? "is-visible" : ""}`}>PVD Coated<br /><em>Stainless Steel</em><br />Surfaces</h1>
              <div className="mt-8 flex max-w-[700px] flex-col gap-7 sm:flex-row sm:items-end sm:justify-between lg:mt-10">
                <p className="max-w-xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">Color becomes architecture. A controlled palette of stainless steel surfaces, tuned through PVD for depth, permanence and a precise visual language.</p>
                <div className="flex shrink-0 gap-3"><Link to="/contact" className="colors-button-primary">Start a project <ArrowUpRight className="h-4 w-4" /></Link><a href="#library" className="colors-button-secondary">Explore colors <ArrowDown className="h-4 w-4" /></a></div>
              </div>
            </div>
            <div className="flex items-end justify-between border-t border-white/10 pt-4">
              <div className="flex gap-5 text-[9px] uppercase tracking-[0.28em] text-white/35"><span>SS 304</span><span>SS 316</span><span>PVD</span><span>0.8–3.0 MM</span></div>
              <a href="#library" className="hidden items-center gap-3 text-[9px] uppercase tracking-[0.28em] text-white/45 transition-colors hover:text-[#d7b77d] sm:flex">Scroll to material library <ArrowDown className="h-3.5 w-3.5" /></a>
            </div>
          </div>
        </section>

        <section id="library" className="relative overflow-hidden border-t border-white/10 bg-[#171512] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="mx-auto max-w-[1500px]"><div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div><p className="colors-eyebrow">02 / CHROMATIC SYSTEM</p><h2 className="mt-5 max-w-md font-display text-4xl leading-[0.98] text-[#eee9de] sm:text-6xl">Six tones.<br />Infinite spaces.</h2><p className="mt-7 max-w-md text-sm leading-7 text-white/45">A restrained spectrum designed to move between warm hospitality, quiet residential interiors and monumental architectural envelopes.</p></div>
            <div className="grid grid-cols-2 border-l border-t border-white/10 sm:grid-cols-3">{colors.map((color, index) => <article key={color.code} className="colors-swatch group border-b border-r border-white/10 p-4 sm:p-5"><div className="relative aspect-[1.15] overflow-hidden" style={{ background: color.tone }}><div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_28%,rgba(255,255,255,.32)_44%,transparent_57%)] opacity-20 transition-all duration-1000 group-hover:translate-x-full group-hover:opacity-60" /><span className="absolute left-3 top-3 text-[8px] uppercase tracking-[0.2em] text-white/60">0{index + 1}</span></div><div className="flex items-end justify-between gap-3 pt-4"><div><h3 className="font-display text-xl text-white/90">{color.name}</h3><p className="mt-1 text-[8px] uppercase tracking-[0.24em] text-white/35">{color.code}</p></div><MoveUpRight className="h-4 w-4 text-white/25 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#d7b77d]" /></div></article>)}</div>
          </div></div>
        </section>

        <section className="border-t border-white/10 bg-[#11100e] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"><div className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-[1fr_1fr] lg:items-end"><div><p className="colors-eyebrow">03 / MATERIAL INTELLIGENCE</p><h2 className="mt-5 max-w-2xl font-display text-4xl leading-[1.02] sm:text-6xl">Surface is not decoration.<br /><span className="text-[#c9a46b]">It is the finish of the architecture.</span></h2></div><div className="grid grid-cols-2 border-l border-t border-white/10 sm:grid-cols-4">{["SS 304", "SS 316", "PVD", "0.8–3.0 mm"].map((item, i) => <div key={item} className="border-b border-r border-white/10 p-5 sm:p-6"><p className="text-[8px] uppercase tracking-[0.25em] text-white/30">0{i + 1}</p><p className="mt-8 font-display text-lg text-white/85">{item}</p></div>)}</div></div></section>

        <section className="relative overflow-hidden border-t border-white/10 bg-[#d8c39a] px-5 py-24 text-[#151411] sm:px-8 lg:px-12 lg:py-32"><div className="absolute -right-20 -top-40 h-[500px] w-[500px] rounded-full bg-white/25 blur-3xl" /><div className="relative mx-auto flex max-w-[1500px] flex-col gap-10 lg:flex-row lg:items-end lg:justify-between"><div><p className="colors-eyebrow text-[#151411]/50">04 / THE NEXT SURFACE</p><h2 className="mt-5 max-w-4xl font-display text-5xl leading-[0.95] sm:text-7xl lg:text-8xl">Specify the color.<br />We engineer the surface.</h2></div><Link to="/contact" className="inline-flex w-fit items-center gap-3 rounded-full border border-[#151411]/40 bg-[#151411] px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#eee7d9] transition-transform duration-500 hover:-translate-y-1">Discuss your project <ArrowUpRight className="h-4 w-4" /></Link></div></section>
      </main><SiteFooter /><style>{styles}</style>
    </div>
  );
}

const styles = `
.colors-page{--champagne:#d7b77d;font-family:var(--font-body,Inter,sans-serif)}.colors-page::selection{background:rgba(215,183,125,.28);color:#fff}.colors-hero{isolation:isolate;background:radial-gradient(circle at 67% 42%,rgba(181,139,74,.13),transparent 27%),#11100e}.colors-hero-grid{position:absolute;inset:0;opacity:.22;background-image:linear-gradient(rgba(255,255,255,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.045) 1px,transparent 1px);background-size:clamp(70px,8vw,140px) clamp(70px,8vw,140px);mask-image:linear-gradient(90deg,transparent,black 32%,black 75%,transparent)}.colors-hero-grain{position:absolute;inset:-40%;opacity:.08;pointer-events:none;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.42'/%3E%3C/svg%3E");transform:rotate(7deg)}.colors-light-leak{position:absolute;width:55vw;height:55vw;right:-18vw;top:8vh;border-radius:50%;background:radial-gradient(circle,rgba(230,196,129,.12),transparent 64%);filter:blur(30px);pointer-events:none}.colors-material-orbit{position:absolute;z-index:2;right:-4vw;top:17vh;width:min(58vw,940px);transition:transform 1.4s cubic-bezier(.16,1,.3,1);will-change:transform}.colors-material-card{position:relative;aspect-ratio:1.22/1;overflow:hidden;transform:perspective(1400px) rotateY(-12deg) rotateX(4deg) rotateZ(-2deg);border:1px solid rgba(255,255,255,.15);box-shadow:-70px 90px 120px rgba(0,0,0,.58),0 0 90px rgba(207,163,86,.13)}.colors-material-card img{width:100%;height:100%;object-fit:cover;filter:saturate(.72) contrast(1.14) brightness(.84);transform:scale(1.08)}.colors-metal-overlay{position:absolute;inset:0;background:linear-gradient(110deg,rgba(11,10,9,.38),transparent 36%,rgba(223,190,123,.12) 66%,rgba(255,255,255,.1));mix-blend-mode:screen}.colors-metal-highlight{position:absolute;inset:-25% -70%;background:linear-gradient(100deg,transparent 42%,rgba(255,239,195,.35) 49%,transparent 56%);transform:translateX(-45%);animation:metalSweep 8s ease-in-out infinite;filter:blur(3px)}.colors-material-shadow{position:absolute;width:90%;height:30%;right:3%;bottom:-16%;background:#000;filter:blur(55px);opacity:.7}.colors-material-card figcaption{position:absolute;left:20px;right:20px;bottom:18px;display:flex;justify-content:space-between;gap:20px;font-size:7px;letter-spacing:.25em;text-transform:uppercase;color:rgba(255,255,255,.58)}.colors-eyebrow,.colors-micro{font-size:8px;letter-spacing:.32em;text-transform:uppercase;color:rgba(255,255,255,.48)}.colors-kicker{opacity:0;transform:translateY(18px);transition:opacity 1s ease .15s,transform 1.2s cubic-bezier(.16,1,.3,1) .15s;font-size:9px;letter-spacing:.32em;text-transform:uppercase;color:var(--champagne)}.colors-title{opacity:0;transform:translateY(30px);transition:opacity 1.3s ease .28s,transform 1.4s cubic-bezier(.16,1,.3,1) .28s;margin-top:18px;font-family:var(--font-display,Georgia,serif);font-size:clamp(3.3rem,7.8vw,8.8rem);line-height:.83;letter-spacing:-.045em;font-weight:400;max-width:1050px}.colors-title.is-visible,.colors-kicker.is-visible{opacity:1;transform:none}.colors-title em{font-style:normal;background:linear-gradient(105deg,#eee9dc 12%,#d7b77d 46%,#fff6dd 69%,#9d8050 100%);background-size:220% auto;-webkit-background-clip:text;background-clip:text;color:transparent;animation:champagneShift 8s ease-in-out infinite}.colors-button-primary,.colors-button-secondary{display:inline-flex;align-items:center;justify-content:center;gap:9px;min-height:45px;padding:0 18px;font-size:9px;font-weight:600;letter-spacing:.19em;text-transform:uppercase;transition:transform .5s cubic-bezier(.16,1,.3,1),box-shadow .5s,background .5s}.colors-button-primary{color:#15130f;border:1px solid rgba(255,231,183,.5);border-radius:999px;background:linear-gradient(105deg,#b99559,#ead09b,#b38d52);box-shadow:0 10px 30px rgba(0,0,0,.18)}.colors-button-primary:hover,.colors-button-secondary:hover{transform:translateY(-3px)}.colors-button-secondary{color:#eee8dc;border:1px solid rgba(215,183,125,.5);border-radius:999px;background:rgba(255,255,255,.035);backdrop-filter:blur(12px)}.colors-swatch{transition:background .5s}.colors-swatch:hover{background:rgba(255,255,255,.025)}@keyframes metalSweep{0%,45%{transform:translateX(-45%)}70%,100%{transform:translateX(45%)}}@keyframes champagneShift{0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}@media (max-width:900px){.colors-material-orbit{width:76vw;right:-14vw;top:19vh;opacity:.58}.colors-material-card{transform:perspective(900px) rotateY(-9deg) rotateX(3deg) rotateZ(-2deg)}.colors-title{font-size:clamp(3.2rem,12vw,6rem);max-width:780px}.colors-hero:after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(17,16,14,.3),rgba(17,16,14,.82) 65%,#11100e 96%);z-index:3;pointer-events:none}.colors-hero-grid,.colors-hero-grain,.colors-light-leak,.colors-material-orbit{position:absolute}.colors-hero .relative{position:relative!important;z-index:10}.colors-material-card figcaption{font-size:6px}.colors-material-card figcaption span:last-child{display:none}}@media (prefers-reduced-motion:reduce){.colors-material-orbit,.colors-title,.colors-kicker{transition:none!important}.colors-metal-highlight,.colors-title em{animation:none!important}}
`;
