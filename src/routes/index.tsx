import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { PageShell, Section } from "@/components/page-shell";
import { FeatureProjectCard, ProjectGridCard } from "@/components/project-grid-card";
import { Reveal, SectionHeading } from "@/components/reveal";
import { ClipReveal, Counter, HorizontalRail, Magnetic, Marquee, Parallax, StickyStory } from "@/components/motion";
import { finishes } from "@/data/finishes";
import { journalPosts, formatDate } from "@/data/journal";
import { projects } from "@/data/projects";

import metalHero from "@/assets/metal-hero.jpg";
import pvdChamber from "@/assets/pvd-chamber.jpg";
import polishing from "@/assets/polishing.jpg";
import sheetPrep from "@/assets/sheet-prep.jpg";
import inspection from "@/assets/inspection.jpg";
import installation from "@/assets/installation.jpg";
import lobby from "@/assets/install-lobby.jpg";
import meshHero from "@/assets/mesh-hero.jpg";
import rawSteel from "@/assets/raw-steel.jpg";

const title = "STEELX — PVD Coated Stainless Steel & Architectural Metal Surfaces";
const description = "STEELX designs, coats and installs PVD stainless steel surfaces, decorative mesh and architectural metal for hospitality, retail, facades and luxury interiors worldwide.";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title }, { name: "description", content: description }, { property: "og:title", content: title },
    { property: "og:description", content: description }, { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: HomePage,
});

const stats = [
  { value: 15, suffix: "+", label: "Years" }, { value: 480, suffix: "+", label: "Projects delivered" },
  { value: 11, suffix: "", label: "Markets" }, { value: 9, suffix: "+", label: "PVD colours" },
];
const capabilities = [
  { t: "PVD coating", d: "Colour bonded in vacuum — champagne, gold, rose, bronze, black, gunmetal.", img: pvdChamber },
  { t: "Architectural surfaces", d: "Facade panels, wall cladding, ceilings and column casings.", img: metalHero },
  { t: "Decorative mesh", d: "Woven stainless screens for partitions, ceilings and facades.", img: meshHero },
  { t: "Custom fabrication", d: "Joinery metal, reception desks, sculptural forms, bespoke assemblies.", img: polishing },
  { t: "Installation", d: "Our own crews, sequenced crating, film off after the last wet trade.", img: installation },
];
const story = [
  { id: "raw", index: "01", title: "Raw steel", text: "Mill sheet in 304 or 316, checked for flatness and surface before anything else happens.", image: rawSteel, alt: "Raw stainless steel" },
  { id: "prep", index: "02", title: "Preparation", text: "Hairline, vibration, bead-blast or mirror — the texture that decides the final result.", image: sheetPrep, alt: "Sheet preparation" },
  { id: "pvd", index: "03", title: "PVD", text: "Vaporised metal condenses onto the panel in vacuum, bonded atomically, measured in microns.", image: pvdChamber, alt: "PVD chamber" },
  { id: "qa", index: "04", title: "Inspection", text: "Colour, thickness and adhesion checked against one signed control sample.", image: inspection, alt: "Inspection" },
  { id: "install", index: "05", title: "Installation", text: "Crated in sequence and fitted by our own teams, anywhere we ship.", image: lobby, alt: "Installed surface" },
];

function HomePage() {
  const feature = projects[0]!; const selected = projects.slice(1, 4); const secondFeature = projects[4]; const more = projects.slice(5, 8); const posts = journalPosts.slice(0, 3);
  return (
    <PageShell overlayHeader>
      <section className="sx-video-hero" aria-label="SteelX cinematic introduction">
        <video className="sx-video-hero-media" autoPlay muted loop playsInline preload="metadata" poster={metalHero}>
          <source src="https://videos.pexels.com/video-files/3139195/3139195-hd_1920_1080_30fps.mp4" type="video/mp4" />
        </video>
        <div className="sx-video-hero-overlay" />
        <div className="sx-video-hero-grid" aria-hidden="true" />
        <div className="sx-video-hero-scan" aria-hidden="true" />
        <div className="sx-video-hero-content">
          <div className="sx-video-hero-kicker">STEELX / ARCHITECTURAL METAL SYSTEMS</div>
          <h1>Surfaces<br /><em>engineered</em><br />to last.</h1>
          <p>Stainless steel transformed into architectural surfaces for spaces that demand presence.</p>
          <Link to="/projects" className="sx-video-hero-cta">Explore the work <ArrowUpRight className="h-4 w-4" /></Link>
        </div>
        <div className="sx-video-hero-meta"><span>01 / FILM</span><span>PVD · FABRICATION · INSTALLATION</span></div>
        <div className="sx-video-hero-line" aria-hidden="true" />
        <div className="sx-video-hero-scroll">SCROLL TO EXPLORE <span /></div>
        <style>{`
          .sx-video-hero{position:relative;min-height:100svh;overflow:hidden;background:#070809;color:#f5f2eb;isolation:isolate}
          .sx-video-hero-media{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;filter:saturate(.72) contrast(1.08);transform:scale(1.04);animation:sxVideoDrift 18s ease-in-out infinite alternate}
          .sx-video-hero-overlay{position:absolute;inset:0;background:linear-gradient(90deg,rgba(4,5,6,.9) 0%,rgba(4,5,6,.55) 43%,rgba(4,5,6,.2) 100%),linear-gradient(0deg,rgba(3,4,5,.75),transparent 48%,rgba(3,4,5,.3));z-index:1}
          .sx-video-hero-grid{position:absolute;inset:0;z-index:2;opacity:.16;background-image:linear-gradient(rgba(255,255,255,.12) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.12) 1px,transparent 1px);background-size:80px 80px;mask-image:linear-gradient(90deg,#000,transparent 72%)}
          .sx-video-hero-scan{position:absolute;z-index:3;top:-20%;left:-20%;width:35%;height:140%;background:linear-gradient(90deg,transparent,rgba(215,183,105,.12),transparent);transform:rotate(12deg);animation:sxVideoScan 9s ease-in-out infinite}
          .sx-video-hero-content{position:relative;z-index:5;min-height:100svh;display:flex;flex-direction:column;justify-content:flex-end;width:min(1500px,92vw);margin:auto;padding:0 0 12vh}
          .sx-video-hero-kicker{font-size:10px;letter-spacing:.34em;color:#d2b26a;text-transform:uppercase;margin-bottom:28px}
          .sx-video-hero h1{font:400 clamp(68px,10vw,156px)/.8 Georgia,'Times New Roman',serif;letter-spacing:-.07em;margin:0;max-width:900px}
          .sx-video-hero h1 em{font-style:italic;color:#d2b26a}
          .sx-video-hero-content p{max-width:460px;color:rgba(235,232,224,.7);font-size:14px;line-height:1.75;margin:34px 0 26px}
          .sx-video-hero-cta{width:max-content;display:inline-flex;align-items:center;gap:18px;border:1px solid rgba(215,183,105,.55);padding:16px 21px;color:#f5f2eb;text-decoration:none;font-size:10px;letter-spacing:.17em;text-transform:uppercase;transition:.4s}
          .sx-video-hero-cta:hover{background:#d2b26a;color:#111;transform:translateY(-3px)}
          .sx-video-hero-meta{position:absolute;z-index:5;right:4vw;bottom:9vh;display:flex;flex-direction:column;align-items:flex-end;gap:9px;color:#898a86;font-size:8px;letter-spacing:.22em}
          .sx-video-hero-meta span:first-child{color:#d2b26a}.sx-video-hero-line{position:absolute;z-index:5;left:4vw;right:4vw;bottom:5.2vh;height:1px;background:linear-gradient(90deg,#d2b26a,rgba(255,255,255,.15),transparent)}
          .sx-video-hero-scroll{position:absolute;z-index:5;left:4vw;bottom:2.2vh;color:#737570;font-size:8px;letter-spacing:.22em;display:flex;align-items:center;gap:12px}.sx-video-hero-scroll span{width:42px;height:1px;background:#777}
          @keyframes sxVideoDrift{from{transform:scale(1.04) translate3d(-.5%,0,0)}to{transform:scale(1.1) translate3d(.8%,-.8%,0)}}@keyframes sxVideoScan{0%,100%{transform:translateX(-10%) rotate(12deg);opacity:0}25%{opacity:1}70%{opacity:.4}100%{transform:translateX(420%) rotate(12deg)}}
          @media(max-width:700px){.sx-video-hero-content{width:calc(100% - 36px);padding-bottom:14vh}.sx-video-hero h1{font-size:clamp(55px,17vw,92px)}.sx-video-hero-content p{font-size:12px;max-width:320px;margin:24px 0}.sx-video-hero-meta{right:18px;bottom:10vh}.sx-video-hero-meta span:last-child{display:none}.sx-video-hero-grid{background-size:50px 50px}.sx-video-hero-scroll{left:18px}.sx-video-hero-line{left:18px;right:18px}}
          @media(prefers-reduced-motion:reduce){.sx-video-hero-media,.sx-video-hero-scan{animation:none}.sx-video-hero-media{transform:scale(1.04)}}
        `}</style>
      </section>

      <Marquee items={["PVD COATED STAINLESS", "DECORATIVE MESH", "FACADE SYSTEMS", "HOSPITALITY METAL", "RETAIL FABRICATION", "INTERNATIONAL DELIVERY"]} />
      <Section className="lg:py-20"><div className="grid gap-px border-t border-border sm:grid-cols-2 lg:grid-cols-4">{stats.map((s,i)=><Reveal key={s.label} variant="row" delay={i*90} className="border-b border-border py-8 pr-6"><p className="font-display text-5xl text-champagne lg:text-7xl"><Counter to={s.value} suffix={s.suffix}/></p><p className="mt-3 text-[0.6rem] uppercase tracking-[0.28em] text-muted-foreground">{s.label}</p></Reveal>)}</div></Section>
      <Section className="border-t border-border"><SectionHeading eyebrow="Capabilities" title="What we make"/><HorizontalRail className="mt-12" itemClassName="w-[74vw] sm:w-[42vw] lg:w-[27vw]">{capabilities.map(c=><article key={c.t} className="group" data-cursor="Explore"><div className="aspect-[4/5] overflow-hidden border border-border metal-sheen"><img src={c.img} alt={c.t} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"/></div><h3 className="mt-4 font-display text-2xl text-foreground">{c.t}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.d}</p></article>)}</HorizontalRail></Section>
      <Section className="border-t border-border"><SectionHeading eyebrow="Selected work" title="Recent projects"/><Reveal variant="scale" className="mt-12"><FeatureProjectCard project={feature}/></Reveal><div className="mt-20 grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">{selected.map((p,i)=><Reveal key={p.slug} variant="up" delay={(i%3)*110}><ProjectGridCard project={p} index={i}/></Reveal>)}</div>{secondFeature?<Reveal variant="scale" className="mt-20"><FeatureProjectCard project={secondFeature}/></Reveal>:null}<div className="mt-20 grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">{more.map((p,i)=><Reveal key={p.slug} variant="up" delay={(i%3)*110}><ProjectGridCard project={p} index={i+4}/></Reveal>)}</div><Reveal variant="up" className="mt-16"><Link to="/projects" data-cursor="View all →" className="inline-flex items-center gap-2 border border-border px-8 py-4 text-[0.72rem] uppercase tracking-[0.2em] text-foreground transition-colors hover:border-champagne hover:text-champagne">All projects <ArrowUpRight className="h-4 w-4"/></Link></Reveal></Section>
      <Section className="border-t border-border"><SectionHeading eyebrow="From sheet to surface" title="How a panel is made"/><div className="mt-12"><StickyStory steps={story}/></div></Section>
      <Section className="border-t border-border"><div className="flex flex-wrap items-end justify-between gap-6"><SectionHeading eyebrow="Finishes" title="Nine tones, one control sample"/><Link to="/ss-decorative-mesh-pvd" data-cursor="Explore →" className="text-[0.66rem] uppercase tracking-[0.22em] text-champagne">See decorative mesh →</Link></div><div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">{finishes.map((f,i)=><Reveal key={f.id} variant="up" delay={(i%5)*80}><div className="aspect-square border border-border metal-grain transition-transform duration-700 hover:scale-[1.03]" style={{backgroundImage:f.swatch}} role="img" aria-label={`${f.name} finish`}/><p className="mt-3 text-[0.6rem] uppercase tracking-[0.24em] text-muted-foreground">{f.name}</p></Reveal>)}</div></Section>
      <ClipReveal><Parallax className="aspect-[21/9] w-full border-y border-border" amount={80}><img src={lobby} alt="Coated stainless surfaces in a completed hospitality lobby" loading="lazy" className="h-full w-full object-cover"/></Parallax></ClipReveal>
      <Section><div className="flex flex-wrap items-end justify-between gap-6"><SectionHeading eyebrow="Journal" title="Notes on metal"/><Link to="/journal" className="text-[0.66rem] uppercase tracking-[0.22em] text-champagne">All articles →</Link></div><div className="mt-12 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">{posts.map((p,i)=><Reveal key={p.slug} variant="up" delay={(i%3)*100}><Link to="/journal/$slug" params={{slug:p.slug}} data-cursor="Read →" className="group block"><div className="aspect-[4/3] overflow-hidden border border-border metal-sheen"><img src={p.hero} alt={p.heroAlt} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1300ms] group-hover:scale-105"/></div><p className="mt-4 text-[0.58rem] uppercase tracking-[0.26em] text-champagne">{p.category} · {formatDate(p.date)}</p><h3 className="mt-3 font-display text-xl leading-snug text-foreground transition-colors group-hover:text-champagne">{p.title}</h3></Link></Reveal>)}</div></Section>
      <Section className="border-t border-border text-center"><Reveal variant="up"><h2 className="font-display text-4xl leading-tight text-foreground sm:text-7xl">Let's build a surface.</h2></Reveal><Reveal variant="up" delay={100}><p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">Send drawings, a finish reference, or a photograph of a surface you like. We reply with samples and a specification.</p></Reveal><Reveal variant="up" delay={180}><Magnetic className="mt-10"><Link to="/contact" data-cursor="Start →" className="inline-flex items-center gap-2 bg-champagne-gradient px-9 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-metal-black">Start a project <ArrowUpRight className="h-4 w-4"/></Link></Magnetic></Reveal></Section>
    </PageShell>
  );
}
