import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { PageShell, Section } from "@/components/page-shell";
import { Reveal, SectionHeading } from "@/components/reveal";
import { Counter, Magnetic, Marquee, StickyStory } from "@/components/motion";
import { journalPosts, formatDate } from "@/data/journal";
import { projects } from "@/data/projects";
import { defaultHomepageContent } from "@/data/homepage-content";
import metalHero from "@/assets/metal-hero.jpg";
import pvdChamber from "@/assets/pvd-chamber.jpg";
import polishing from "@/assets/polishing.jpg";
import sheetPrep from "@/assets/sheet-prep.jpg";
import inspection from "@/assets/inspection.jpg";
import lobby from "@/assets/install-lobby.jpg";
import meshHero from "@/assets/mesh-hero.jpg";
import rawSteel from "@/assets/raw-steel.jpg";

const CMS_KEY = "steelx-homepage-content-v1";
const title = defaultHomepageContent.seo.title;
const description = defaultHomepageContent.seo.description;
const stats = [{ value: 15, suffix: "+", label: "Years" }, { value: 480, suffix: "+", label: "Projects delivered" }, { value: 11, suffix: "", label: "Markets" }, { value: 9, suffix: "+", label: "PVD colours" }];
const productImages = [metalHero, meshHero, pvdChamber, meshHero, polishing, sheetPrep, lobby, metalHero];
const processImages = [rawSteel, sheetPrep, pvdChamber, inspection, lobby];
const capabilities = [
  ["PVD coating", "Colour bonded in vacuum — champagne, gold, rose, bronze, black, gunmetal.", pvdChamber],
  ["Architectural surfaces", "Facade panels, wall cladding, ceilings and column casings.", metalHero],
  ["Decorative mesh", "Woven stainless screens for partitions, ceilings and facades.", meshHero],
  ["Custom fabrication", "Joinery metal, reception desks, sculptural forms, bespoke assemblies.", polishing],
  ["Installation", "Our own crews, sequenced crating, film off after the last wet trade.", lobby],
] as const;
const finishColors = ["#f7e7ce", "#cfb53b", "#b76e79", "#b87333", "#1a1a1a", "#2c3539", "#8f8f8f", "#c0c0c0", "linear-gradient(135deg,#d8b46a,#5f4b2b,#ddd)"];
const projectMeta = [
  ["Qudrati Greens, Indore", "Commercial · 40,000 sq ft · Bronze PVD, hairline stainless fins"], ["The Vira Hotel Lobby, Dubai", "Hospitality · 8,600 sq ft · Champagne family: mirror, hairline, woven mesh"],
  ["Aurum Flagship Store, Mumbai", "Retail · 3,200 sq ft · Rose gold mitred frames, invisible fixings"], ["Meridian Tower Facade, Singapore", "Commercial · 64,000 sq ft · Bead-blasted gunmetal, non-reflective"],
  ["Nikhil Gupta Residence, Rajkot", "Residential · 9,400 sq ft · Black PVD, hairline"], ["Agrasen Institute Atrium, Ahmedabad", "Institutional · 120,000 sq ft · Titanium tone: screens, rails, signage"],
  ["Atelier Nine Interiors, London", "Interiors · 5,100 sq ft · Vibration-finished champagne surface"],
];

export const Route = createFileRoute("/")({ head: () => ({ meta: [
  { title }, { name: "description", content: description }, { name: "keywords", content: defaultHomepageContent.seo.keywords }, { name: "robots", content: defaultHomepageContent.seo.robots },
  { link: { rel: "canonical", href: defaultHomepageContent.seo.canonical } }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" },
] }), component: HomePage });

function HomePage() {
  const [editable, setEditable] = useState(defaultHomepageContent);
  useEffect(() => {
    try { const saved = localStorage.getItem(CMS_KEY); if (saved) setEditable(JSON.parse(saved)); } catch { /* use defaults */ }
  }, []);
  useEffect(() => {
    document.title = editable.seo.title;
    const setMeta = (name: string, value: string) => { let el = document.querySelector(`meta[name="${name}"]`); if (!el) { el = document.createElement("meta"); el.setAttribute("name", name); document.head.appendChild(el); } el.setAttribute("content", value); };
    setMeta("description", editable.seo.description); setMeta("keywords", editable.seo.keywords); setMeta("robots", editable.seo.robots);
    let schema = document.getElementById("steelx-homepage-schema"); if (!schema) { schema = document.createElement("script"); schema.id = "steelx-homepage-schema"; schema.type = "application/ld+json"; document.head.appendChild(schema); } schema.textContent = editable.seo.schema;
  }, [editable]);
  const content = editable;
  const posts = journalPosts.slice(0, 3);
  const story = content.process.map((p, i) => ({ id: p[0], index: p[0], title: p[1], text: p[2], image: processImages[i], alt: p[1] }));
  return <PageShell overlayHeader>
    <section className="relative min-h-[100svh] overflow-hidden bg-[#090a09] text-white">
      <video className="absolute inset-0 h-full w-full object-cover opacity-70" autoPlay muted loop playsInline preload="metadata" poster={metalHero}><source src={content.hero.videoUrl} type="video/mp4" /></video>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,5,5,.94),rgba(4,5,5,.58),rgba(4,5,5,.2)),linear-gradient(0deg,rgba(4,5,5,.84),transparent_55%)]" />
      <div className="absolute inset-0 opacity-15 [background-image:linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:80px_80px]" />
      <div className="relative z-10 mx-auto flex min-h-[100svh] w-[92vw] max-w-[1500px] items-end pb-[13vh]"><div className="max-w-[1000px]">
        <p className="mb-7 text-[10px] uppercase tracking-[.34em] text-champagne">{content.hero.eyebrow}</p><h1 className="font-display text-[clamp(3.3rem,7.8vw,8.5rem)] leading-[.86] tracking-[-.05em]">{content.hero.title}</h1>
        <p className="mt-8 max-w-2xl text-sm leading-7 text-white/70">{content.hero.subtitle}</p><p className="mt-4 max-w-2xl text-xs leading-6 text-white/50">{content.hero.supporting}</p>
        <div className="mt-8 flex flex-wrap gap-3"><Link to={content.hero.primaryUrl as any} className="inline-flex items-center gap-3 border border-champagne/60 px-6 py-4 text-[10px] uppercase tracking-[.2em] hover:bg-champagne hover:text-black">{content.hero.primaryCta}<ArrowUpRight className="h-4 w-4" /></Link><Link to={content.hero.secondaryUrl as any} className="inline-flex items-center gap-3 bg-champagne px-6 py-4 text-[10px] font-semibold uppercase tracking-[.2em] text-black hover:bg-white">{content.hero.secondaryCta}<ArrowUpRight className="h-4 w-4" /></Link></div>
      </div></div><div className="absolute bottom-7 left-[4vw] right-[4vw] z-10 h-px bg-gradient-to-r from-champagne via-white/20 to-transparent" />
    </section>

    <Section><SectionHeading eyebrow="Collections" title="Explore Our Product Range" /><p className="mt-6 max-w-3xl text-sm leading-7 text-muted-foreground">SteelXDecor supplies a curated range of PVD-coated stainless-steel surfaces and decorative metal products. Each category is engineered for specific architectural applications — from interior cladding and room dividers to exterior facades and lift jamb panels.</p><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{content.products.map((p,i)=><Reveal key={p.name} variant="up" delay={(i%4)*70}><article className="group overflow-hidden border border-border bg-card"><Link to={p.url as any}><div className="aspect-[4/3] overflow-hidden"><img src={productImages[i]} alt={p.name} loading="lazy" className="h-full w-full object-cover transition duration-1000 group-hover:scale-105" /></div><div className="p-5"><h3 className="font-display text-2xl">{p.name}</h3><p className="mt-3 text-xs leading-6 text-muted-foreground">{p.description}</p><span className="mt-5 inline-flex items-center gap-2 text-[9px] uppercase tracking-[.2em] text-champagne">View Collection <ArrowUpRight className="h-3 w-3" /></span></div></Link></article></Reveal>)}</div></Section>

    <Section className="border-t border-border"><div className="grid gap-0 border border-border lg:grid-cols-2"><article className="p-8 lg:p-12"><p className="text-[9px] uppercase tracking-[.3em] text-champagne">Why PVD Over Alternatives?</p><h2 className="mt-4 font-display text-4xl">Colour bonded for architectural performance.</h2><p className="mt-6 text-sm leading-7 text-muted-foreground">PVD (Physical Vapour Deposition) bonds colour at an atomic level in a vacuum environment. Unlike electroplating, PVD coating is measured in microns, bonded to the substrate rather than sitting on top, and resists scratching, fading, and peeling under regular architectural use. The result is a consistent, durable finish that maintains colour integrity across large surface areas and long project timelines.</p></article><article className="border-t border-border bg-card p-8 lg:border-l lg:border-t-0 lg:p-12"><p className="text-[9px] uppercase tracking-[.3em] text-champagne">SS 304 Grade at a Glance</p><h2 className="mt-4 font-display text-4xl">A proven architectural substrate.</h2><p className="mt-6 text-sm leading-7 text-muted-foreground">SteelXDecor's primary material specification is SS 304 Grade stainless steel — an austenitic chromium-nickel alloy widely specified for architectural interiors. 304 Grade offers excellent formability, weldability, and corrosion resistance for indoor and sheltered applications. For exterior or high-corrosion environments, 316 Grade is available on request.</p></article></div></Section>

    <Section className="border-t border-border"><SectionHeading eyebrow="Capabilities" title="What we make" /><div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">{capabilities.map(([name,desc,img])=><article key={name} className="group"><div className="aspect-[4/5] overflow-hidden border border-border"><img src={img} alt={name} loading="lazy" className="h-full w-full object-cover transition duration-1000 group-hover:scale-105" /></div><h3 className="mt-4 font-display text-2xl">{name}</h3><p className="mt-2 text-xs leading-6 text-muted-foreground">{desc}</p></article>)}</div></Section>

    <Section className="border-t border-border"><SectionHeading eyebrow="Process" title="From Mill Sheet to Installed Surface" /><p className="mt-6 max-w-3xl text-sm leading-7 text-muted-foreground">Every SteelXDecor project follows a five-step process — from raw material selection through to on-site installation. This workflow ensures colour consistency, dimensional accuracy, and finish quality at every stage.</p><div className="mt-12 grid gap-px border border-border md:grid-cols-5">{content.process.map((p,i)=><article key={p[0]} className="group bg-card p-6"><div className="mb-6 aspect-[4/3] overflow-hidden"><img src={processImages[i]} alt={p[1]} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" /></div><span className="font-display text-3xl text-champagne">{p[0]}</span><h3 className="mt-3 font-display text-xl">{p[1]}</h3><p className="mt-3 text-xs leading-6 text-muted-foreground">{p[2]}</p></article>)}</div></Section>

    <Section className="border-t border-border"><SectionHeading eyebrow="Worldwide installations" title="Projects Completed Worldwide" /><p className="mt-6 max-w-3xl text-sm leading-7 text-muted-foreground">SteelXDecor has delivered PVD-coated stainless-steel surfaces for commercial, hospitality, retail, residential, and institutional projects across India, UAE, UK, and Singapore. Each project below demonstrates a specific application of PVD finish, mesh construction, or metal fabrication.</p><div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">{projectMeta.map(([name,meta],i)=>{const p=projects[i%projects.length]!;return <Reveal key={name} variant="up"><Link to={`/projects/${p.slug}` as any} className="group block"><div className="aspect-[4/3] overflow-hidden border border-border"><img src={p.hero} alt={name} loading="lazy" className="h-full w-full object-cover transition duration-1000 group-hover:scale-105" /></div><h3 className="mt-4 font-display text-2xl group-hover:text-champagne">{name}</h3><p className="mt-2 text-xs leading-5 text-muted-foreground">{meta}</p></Link></Reveal>})}</div><div className="mt-14"><Link to="/projects" className="inline-flex items-center gap-2 border border-border px-7 py-4 text-[9px] uppercase tracking-[.22em] hover:border-champagne hover:text-champagne">View Full Portfolio <ArrowUpRight className="h-4 w-4" /></Link></div></Section>

    <Section className="border-y border-border bg-card"><SectionHeading eyebrow="About SteelXDecor" title="Architectural metal, from specification to site." /><div className="mt-12 grid gap-12 lg:grid-cols-2"><p className="text-sm leading-8 text-muted-foreground">{content.about.story}</p><div><h3 className="font-display text-3xl">What Sets Us Apart</h3><ul className="mt-6 space-y-4">{content.about.differentiators.map(x=><li key={x} className="relative border-b border-border pb-4 pl-5 text-sm leading-6 text-muted-foreground before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-champagne before:content-['']">{x}</li>)}</ul></div></div></Section>

    <Section className="border-t border-border"><SectionHeading eyebrow="Finish library" title="PVD Finish Colours" /><p className="mt-6 max-w-3xl text-sm leading-7 text-muted-foreground">SteelXDecor applies PVD colour across nine standard tones — Champagne, Gold, Rose Gold, Bronze, Black, Gunmetal, Titanium, Silver — plus custom colour matching on request. Each finish is bonded via vacuum PVD at microns-thickness and controlled against a signed sample per batch.</p><div className="mt-12 grid grid-cols-3 gap-5 sm:grid-cols-5 lg:grid-cols-9">{content.finishes.map((name,i)=><div key={name} className="group text-center"><div className="aspect-square w-full rounded-sm border border-border shadow-inner transition duration-500 group-hover:-translate-y-2 group-hover:shadow-xl" style={{background:finishColors[i]}} role="img" aria-label={`${name} PVD finish`} /><p className="mt-3 text-[9px] uppercase tracking-[.16em] text-muted-foreground">{name}</p></div>)}</div></Section>

    <Section className="border-t border-border"><SectionHeading eyebrow="Technical story" title="From sheet to surface" /><div className="mt-10"><StickyStory steps={story} /></div></Section>
    <Section className="border-t border-border"><div className="grid gap-8 border border-border p-8 lg:grid-cols-4">{stats.map((s,i)=><Reveal key={s.label} variant="row" delay={i*90}><p className="font-display text-5xl text-champagne lg:text-6xl"><Counter to={s.value} suffix={s.suffix} /></p><p className="mt-2 text-[9px] uppercase tracking-[.25em] text-muted-foreground">{s.label}</p></Reveal>)}</div></Section>
    <Section><div className="flex flex-wrap items-end justify-between gap-6"><SectionHeading eyebrow="Journal" title="Notes on metal" /><Link to="/journal" className="text-[9px] uppercase tracking-[.22em] text-champagne">All articles →</Link></div><div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">{posts.map((p,i)=><Reveal key={p.slug} variant="up" delay={i*90}><Link to="/journal/$slug" params={{slug:p.slug}} className="group block"><div className="aspect-[4/3] overflow-hidden border border-border"><img src={p.hero} alt={p.heroAlt} loading="lazy" className="h-full w-full object-cover transition duration-1000 group-hover:scale-105" /></div><p className="mt-4 text-[9px] uppercase tracking-[.22em] text-champagne">{p.category} · {formatDate(p.date)}</p><h3 className="mt-3 font-display text-xl leading-snug group-hover:text-champagne">{p.title}</h3></Link></Reveal>)}</div></Section>

    <Section className="border-t border-border bg-[#171715] text-white"><div className="mx-auto max-w-4xl text-center"><Reveal variant="up"><h2 className="font-display text-5xl leading-tight sm:text-7xl">{content.finalCta.title}</h2><p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-white/60">{content.finalCta.text}</p></Reveal><div className="mt-10 flex flex-wrap justify-center gap-3"><Magnetic><Link to="/contact" className="inline-flex items-center gap-2 bg-champagne px-7 py-4 text-[9px] font-semibold uppercase tracking-[.2em] text-black">Start a Project Consultation <ArrowUpRight className="h-4 w-4" /></Link></Magnetic><Link to="/steel-collection" className="inline-flex items-center gap-2 border border-champagne/60 px-7 py-4 text-[9px] uppercase tracking-[.2em] text-white hover:bg-champagne hover:text-black">Explore the Full Collection <ArrowUpRight className="h-4 w-4" /></Link></div></div></Section>
  </PageShell>;
}
