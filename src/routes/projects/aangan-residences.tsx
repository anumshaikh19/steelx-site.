import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import bungalow from "@/assets/proj-bungalow.jpg";
import interiors from "@/assets/proj-interiors.jpg";
import detailA from "@/assets/proj-detail-a.jpg";
import detailB from "@/assets/proj-detail-b.jpg";
import metalHero from "@/assets/metal-hero.jpg";
import polishing from "@/assets/polishing.jpg";
import inspection from "@/assets/inspection.jpg";
import installation from "@/assets/installation.jpg";
import pvdChamber from "@/assets/pvd-chamber.jpg";
import { PageShell, Section } from "@/components/page-shell";
import { Reveal, SectionHeading } from "@/components/reveal";
import { ClipReveal, HorizontalRail, Parallax } from "@/components/motion";
import { Lightbox } from "@/components/lightbox";
import { ProjectGridCard } from "@/components/project-grid-card";
import { getProject, relatedProjects } from "@/data/projects";

export const Route = createFileRoute("/projects/aangan-residences")({
  head: () => ({
    meta: [
      { title: "Aangan Residences, Bandra West | Architectural PVD Coated Stainless Steel | STEELX" },
      { name: "description", content: "Aangan Residences, Bandra West — water ripple PVD, mirror PVD and bronze PVD on ss-pvd-304 architectural stainless steel for a Mumbai residential project." },
      { name: "keywords", content: "Aangan Residences, Bandra West, ss-pvd-304, water ripple PVD, designer sheet, mirror PVD, bronze PVD, architectural PVD coated stainless steel, Mumbai" },
      { property: "og:title", content: "Aangan Residences, Bandra West — STEELX" },
      { property: "og:description", content: "Water ripple, mirror and bronze PVD on ss-pvd-304 across facade metalwork and luxury residential interiors in Bandra West, Mumbai." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AanganResidences,
});

const gallery = [
  { src: bungalow, alt: "Aangan Residences facade at noon — water ripple PVD on ss-304 minimizing glare while showing depth in Bandra West’s intense sunlight.", label: "Facade at midday sun" },
  { src: interiors, alt: "Water ripple designer sheet (ss-pvd-304) wrapping Aangan Residences lobby — note how texture hides fingerprints in daily use by Maharashtra residents.", label: "Lobby designer sheet wall" },
  { src: detailA, alt: "Mirror PVD on ss-304 in elevator lobby — creating infinity reflection that makes compact Mumbai elevator feel spacious.", label: "Elevator lobby mirror PVD" },
  { src: detailB, alt: "Structural water ripple bend in ss-304 facade fin — texture formed before PVD coating, proven by uniform coating thickness in peaks and valleys.", label: "Facade fin detail" },
  { src: inspection, alt: "SS-pvd-304 water ripple PVD panel after 6 months Rajkot monsoon test — zero staining, zero texture loss, validating for Bandra West coastal exposure.", label: "Monsoon test panel" },
  { src: metalHero, alt: "Aangan Residences entrance at night — mirror PVD canopy reflecting street lights to create soft welcome glow without harsh glare.", label: "Night view with canopy glow" },
];

const detailImages = [
  { src: polishing, alt: "Close-up of water ripple PVD on ss-304 facade fin — proving texture is structural (bent metal, not surface coating) for monsoon grime resistance in Bandra West." },
  { src: interiors, alt: "Seamless water ripple designer sheet (ss-pvd-304) in Aangan Residences lobby — ISO 11998 Class 1 cleanability (water-only wipe) for high-traffic Maharashtra residential lobbies." },
  { src: detailA, alt: "Mirror PVD on ss-304 elevator lobby ceiling creating spatial depth in compact Bandra West space — reflecting teak wood and cane furniture to double perceived height." },
  { src: pvdChamber, alt: "Material comparison: water ripple PVD (textured, structural), mirror PVD (reflective), bronze PVD (warm tone) on ss-304 substrate — showing how PVD coating adapts to different finishes for architectural needs in Mumbai." },
];

function AanganResidences() {
  const project = getProject("nikhil-gupta-residence");
  const related = relatedProjects("nikhil-gupta-residence").slice(0, 3);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const allImages = [...gallery, ...detailImages];

  return (
    <PageShell>
      <section className="mx-auto max-w-[1600px] px-4 pb-10 pt-28 sm:px-8 lg:px-10 lg:pt-36">
        <Reveal variant="text" as="p" className="text-[0.62rem] uppercase tracking-[0.4em] text-champagne">Residential · Bandra West, Mumbai · 2025 · Completed</Reveal>
        <Reveal variant="up" delay={80}>
          <h1 className="mt-6 max-w-6xl font-display text-[2.8rem] leading-[0.92] text-foreground sm:text-7xl lg:text-[7.5rem]">Aangan Residences</h1>
        </Reveal>
        <Reveal variant="row" delay={160}>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground">Mumbai, Maharashtra · 2025 · Completed</p>
        </Reveal>
      </section>

      <ClipReveal className="mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-10">
        <Parallax className="aspect-[16/10] w-full border border-border lg:aspect-[21/9]" amount={70}>
          <img src={bungalow} alt="Water ripple PVD on ss-304 facade fins creating soft, shifting light patterns on Aangan Residences, Bandra West — demonstrating how structural texture controls glare in Mumbai’s harsh afternoon sun." className="h-full w-full object-cover" />
        </Parallax>
      </ClipReveal>

      <Section className="lg:py-20">
        <p className="text-[0.62rem] uppercase tracking-[0.34em] text-champagne">Project facts</p>
        <dl className="mt-8 grid gap-px border-t border-border sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Client", "Kumar Realty"], ["Location", "Bandra West, Mumbai, Maharashtra"], ["Area", "28,500 sq ft"], ["Year", "2025"],
            ["Status", "Completed"], ["Scope", "Facade metalwork, entrance canopy, lobby designer sheets, elevator lobbies"],
            ["Finish", "Water ripple PVD (ss-304), mirror PVD (ss-304), bronze PVD (ss-304)"], ["Services", "Facade metal, Custom fabrication, Installation, PVD coating"],
          ].map(([label, value], i) => <Reveal key={label} variant="row" delay={i * 50} className="border-b border-border py-6 pr-6"><dt className="text-[0.6rem] uppercase tracking-[0.24em] text-muted-foreground">{label}</dt><dd className="mt-2 font-display text-lg leading-snug text-foreground">{value}</dd></Reveal>)}
        </dl>
      </Section>

      <Section className="border-t border-border">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.4fr] lg:gap-20">
          <SectionHeading eyebrow="Introduction" title="The brief" />
          <div className="space-y-6">
            <Reveal variant="up"><p className="font-display text-2xl leading-snug text-foreground lg:text-3xl">Kumar Realty needed a Bandra West residential tower facade that feels <strong>hand-made, not machine-made</strong> — something that ages gracefully in Mumbai’s salty air while giving residents quiet luxury.</p></Reveal>
            <Reveal variant="up" delay={100}><p className="text-sm leading-relaxed text-muted-foreground lg:text-base">The brief asked for metal that <em>breathes</em>: reflective enough to catch the sea breeze but textured enough to hide monsoon grime. We proposed <strong>ss-pvd-304 with water ripple texture</strong> for the facade (it traps light like wet sand) and <strong>mirror PVD</strong> for the entrance canopy to double the sky without glare.</p></Reveal>
          </div>
        </div>
      </Section>

      <ClipReveal className="mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-10"><Parallax className="aspect-[16/9] w-full border border-border" amount={60}><img src={detailImages[0].src} alt={detailImages[0].alt} loading="lazy" className="h-full w-full object-cover" /></Parallax></ClipReveal>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div><SectionHeading eyebrow="Approach" title="How it was built" /><Reveal variant="up" delay={100}><p className="mt-8 text-sm leading-relaxed text-muted-foreground lg:text-base">We tested full-scale mockups on our Rajkot roof for 8 months (covering two Bandra monsoons) to confirm the water ripple PVD wouldn’t trap dirt or fade. For the facade, we laser-cut <strong>ss-pvd-304 sheets</strong> into fins, then <em>bent each fin into a 3D water ripple shape before PVD coating</em> — so the texture is part of the metal, not a surface film. This means it wears with the steel, no peeling during monsoons.</p><p className="mt-6 text-sm leading-relaxed text-muted-foreground lg:text-base">The lobby <strong>designer sheets</strong> use the same <strong>ss-pvd-304 water ripple PVD</strong> — applied in a single batch so the wall reads as one continuous texture from floor to ceiling. For elevator lobbies, we specified <strong>mirror PVD on ss-304</strong> (polished to Ra 0.05μm first) not for shine, but to make tight Mumbai spaces feel open by reflecting the lobby’s teak wood and cane furniture. Bronze PVD accents tie it all together — single-chamber batch for color consistency between facade and interiors.</p></Reveal></div>
          <Reveal variant="right" delay={120}><div className="aspect-[4/3] overflow-hidden border border-border metal-sheen"><img src={detailImages[1].src} alt={detailImages[1].alt} loading="lazy" className="h-full w-full object-cover" /></div></Reveal>
        </div>
      </Section>

      <Section className="border-t border-border">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal variant="left"><div className="aspect-[4/3] overflow-hidden border border-border metal-sheen"><img src={detailImages[2].src} alt={detailImages[2].alt} loading="lazy" className="h-full w-full object-cover" /></div></Reveal>
          <div><SectionHeading eyebrow="Material & surface" title="The finish story" /><Reveal variant="up" delay={100}><p className="mt-8 text-sm leading-relaxed text-muted-foreground lg:text-base">Grade <strong>ss-pvd-304</strong> (we <strong>never</strong> use 201 or 430 for coastal Mumbai — it’s non-negotiable for longevity). Hairline-prepped to Ra 0.8μm for facade, Ra 0.3μm for mirror zones. The <strong>water ripple</strong> isn’t a coating — it’s the <strong>actual ss-304 formed into waves before PVD</strong>, so the finish wears with the metal. That’s why it survives Mumbai’s monsoons: zero delamination risk.</p><p className="mt-6 text-sm leading-relaxed text-muted-foreground lg:text-base">For <strong>mirror PVD</strong> in elevators, we polished to Ra 0.05μm first — any less and you get funhouse distortion; any more and it’s wasteful. The <strong>bronze PVD</strong> accents? A single PVD chamber batch so the lift lobbies (6th floor) and facade fins (ground to 6th) read as one bronze family, even though they’re 20m apart vertically.</p></Reveal></div>
        </div>
      </Section>

      <ClipReveal><Parallax className="aspect-[21/9] w-full border-y border-border" amount={80}><img src={detailImages[3].src} alt={detailImages[3].alt} loading="lazy" className="h-full w-full object-cover" /></Parallax></ClipReveal>

      <Section>
        <SectionHeading eyebrow="Gallery" title="Project gallery" />
        <p className="mt-4 text-xs uppercase tracking-[0.24em] text-muted-foreground">06 images — click to enlarge</p>
        <HorizontalRail className="mt-10" itemClassName="w-[80vw] sm:w-[46vw] lg:w-[32vw]">
          {gallery.map((image, i) => <button key={image.src + i} type="button" onClick={() => setLightbox(i)} data-cursor="Explore" className="group block w-full text-left"><div className="aspect-[4/3] overflow-hidden border border-border metal-sheen"><img src={image.src} alt={image.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" /></div><p className="mt-3 flex items-center justify-between gap-4 text-[0.6rem] uppercase tracking-[0.18em] text-muted-foreground"><span className="truncate">{image.label}</span><span className="shrink-0 tabular-nums text-champagne">{String(i + 1).padStart(2, "0")} / 06</span></p></button>)}
        </HorizontalRail>
      </Section>

      <Section className="border-t border-border lg:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {detailImages.map((image, i) => <Reveal key={image.src + i} variant="up" delay={(i % 3) * 100}><button type="button" onClick={() => setLightbox(gallery.length + i)} data-cursor="Explore" className="block w-full"><div className="aspect-square overflow-hidden border border-border metal-sheen"><img src={image.src} alt={image.alt} loading="lazy" className="h-full w-full object-cover" /></div></button></Reveal>)}
        </div>
      </Section>

      <Section className="border-t border-border">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading eyebrow="Outcome" title="What was delivered" />
            <Reveal variant="up" delay={100}><p className="mt-8 text-sm leading-relaxed text-muted-foreground lg:text-base">After two Bandra monsoons: the water ripple facade shows <strong>zero staining</strong> — the texture actually helps dust wash away in rain. Mirror PVD lobby ceilings still reflect perfectly with a <strong>water-and-microfiber wipe</strong> (no chemicals, no polishing). We ran <strong>ss-pvd-304 water ripple PVD through 1,200 hours ASTM B117 salt fog</strong> (simulating 3+ years Bandra West exposure) and <strong>ASTM D4587 UV</strong> — ΔE stayed under 1.2. The <strong>designer sheets</strong> in the lobby? Zero visible wear after 18 months of residents brushing past.</p></Reveal>
            <div className="mt-10 grid grid-cols-2 gap-px border-t border-border">{[["Floors", "Stilt + 6"], ["Envelope", "Water ripple PVD fins (ss-pvd-304)"], ["Designer sheets", "Lobby walls, reception desk"], ["Special finishes", "Mirror PVD (elevator lobbies), bronze PVD (accent strips)"], ["Completion", "2025"]].map(([label, value], i) => <Reveal key={label} variant="row" delay={i * 60} className="border-b border-border py-5 pr-4"><p className="text-[0.58rem] uppercase tracking-[0.24em] text-muted-foreground">{label}</p><p className="mt-1.5 font-display text-xl text-champagne">{value}</p></Reveal>)}</div>
          </div>
          <div><SectionHeading eyebrow="Technical" title="Specification" /><dl className="mt-8 border-t border-border">{[["Substrate", "SS 304, 1.2 mm (facade), 1.5 mm (lobby sheets)"], ["Surface prep", "Hairline No.4 (Ra 0.8μm facade / Ra 0.3μm mirror zones)"], ["PVD Coating", "Facade: Water ripple PVD (ss-pvd-304, structural texture — bent before coating)"], ["Lobby", "Water ripple designer sheet (ss-pvd-304, single batch for color flow)"], ["Elevators", "Mirror PVD (ss-pvd-304, Ra 0.05μm pre-polish)"], ["Accents", "Bronze PVD (ss-pvd-304, single-chamber batch)"], ["Salt fog resistance", "ASTM B117, 1,200 hours (no red rust — simulating 3+ years Bandra West monsoon exposure)"], ["UV stability", "ASTM D4587, 1,500 hours (ΔE < 1.2 — Mumbai averages 11+ UV index 200 days/year)"], ["Humidity", "95% RH tested (no blistering or delamination)"], ["Cleanability", "ISO 11998 Class 1 (water-only cleaning — no chemicals needed)"]].map(([label, value], i) => <Reveal key={label} variant="row" delay={i * 45} className="flex items-baseline justify-between gap-6 border-b border-border py-5"><dt className="text-[0.62rem] uppercase tracking-[0.18em] text-muted-foreground">{label}</dt><dd className="max-w-[65%] text-right text-sm leading-relaxed text-foreground">{value}</dd></Reveal>)}</dl></div>
        </div>
      </Section>

      <Section className="border-t border-border">
        <SectionHeading eyebrow="More work" title="Related projects" />
        <div className="mt-12 grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((p, i) => <Reveal key={p.slug} variant="up" delay={(i % 3) * 100}><ProjectGridCard project={p} /></Reveal>)}
        </div>
      </Section>

      <Section className="border-t border-border text-center">
        <Reveal variant="up"><h2 className="font-display text-4xl leading-tight text-foreground sm:text-6xl">Start a project</h2></Reveal>
        <Reveal variant="up" delay={100}><p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">Send us the drawings, the finish you have in mind, or just a photograph of a surface you like (even a monsoon-stained wall — we love those). We will come back with samples cut from actual ss-pvd-304.</p></Reveal>
        <Reveal variant="up" delay={180}><Link to="/contact" data-cursor="Start →" className="mt-10 inline-flex items-center gap-2 bg-champagne-gradient px-8 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-metal-black transition-opacity hover:opacity-90">Start a project <ArrowUpRight className="h-4 w-4" /></Link></Reveal>
      </Section>

      <Lightbox images={allImages} index={lightbox} onClose={() => setLightbox(null)} onIndex={setLightbox} />
    </PageShell>
  );
}
