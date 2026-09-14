import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { PageShell, Section } from "@/components/page-shell";
import { Reveal, SectionHeading } from "@/components/reveal";
import { ClipReveal, HorizontalRail, Parallax } from "@/components/motion";
import { Lightbox } from "@/components/lightbox";
import { ProjectGridCard } from "@/components/project-grid-card";
import { getProject, relatedProjects } from "@/data/projects";

export const Route = createFileRoute("/projects/nikhil-gupta-residence")({
  head: () => ({
    meta: [
      { title: "Nikhil Gupta Residence | PVD-Coated Stainless Steel Architectural Surfaces | STEELX" },
      { name: "description", content: "Nikhil Gupta Residence in Rajkot, Gujarat — bespoke PVD-coated stainless steel architectural metalwork, designer sheets and precision-finished residential elements by STEELX." },
      { name: "keywords", content: "PVD coated stainless steel, ss-pvd-304, architectural metalwork Rajkot, bespoke residential metal, designer sheet, STEELX" },
      { property: "og:title", content: "Nikhil Gupta Residence — STEELX" },
      { property: "og:description", content: "Bespoke residential metalwork, PVD finishes and precision fabrication by STEELX." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: NikhilGuptaResidence,
});

function NikhilGuptaResidence() {
  const project = getProject("nikhil-gupta-residence");
  const related = relatedProjects("nikhil-gupta-residence");
  const [lightbox, setLightbox] = useState<number | null>(null);
  if (!project) return null;

  const gallery = [
    { src: project.coverImage, alt: "Nikhil Gupta Residence entrance with architectural PVD coated stainless steel metalwork in Rajkot" },
    { src: project.gallery[1]?.src ?? project.coverImage, alt: "Nikhil Gupta Residence stair balustrade in black PVD stainless steel" },
    { src: project.gallery[2]?.src ?? project.coverImage, alt: "Nikhil Gupta Residence kitchen metalwork with black PVD stainless steel" },
    { src: project.gallery[3]?.src ?? project.coverImage, alt: "Black hairline PVD stainless steel surface detail for a residential interior" },
    { src: project.detailGallery[0]?.src ?? project.coverImage, alt: "Residential stainless steel fabrication detail prepared for PVD coating" },
    { src: project.detailGallery[1]?.src ?? project.coverImage, alt: "PVD finish inspection on architectural stainless steel metalwork" },
  ];

  return (
    <PageShell>
      <section className="mx-auto max-w-[1600px] px-4 pb-10 pt-28 sm:px-8 lg:px-10 lg:pt-36">
        <Reveal variant="text" as="p" className="text-[0.62rem] uppercase tracking-[0.4em] text-champagne">Residential · Rajkot, Gujarat · 2025 · Completed</Reveal>
        <Reveal variant="up" delay={80}><h1 className="mt-6 max-w-6xl font-display text-[2.8rem] leading-[0.92] text-foreground sm:text-7xl lg:text-[7.5rem]">Nikhil Gupta Residence</h1></Reveal>
        <Reveal variant="row" delay={160}><p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground lg:text-base">A private residence where stainless steel is treated as architecture rather than an accessory — precise, quiet and built around the way light moves through the home.</p></Reveal>
      </section>

      <ClipReveal className="mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-10"><Parallax className="aspect-[16/10] w-full border border-border lg:aspect-[21/9]" amount={70}><img src={gallery[0].src} alt={gallery[0].alt} className="h-full w-full object-cover" /></Parallax></ClipReveal>

      <Section className="lg:py-20">
        <p className="text-[0.62rem] uppercase tracking-[0.34em] text-champagne">Project facts</p>
        <dl className="mt-8 grid gap-px border-t border-border sm:grid-cols-2 lg:grid-cols-4">
          {[["Client", "Nikhil Gupta"], ["Location", "Rajkot, Gujarat"], ["Area", "9,400 sq ft"], ["Year", "2025"], ["Status", "Completed"], ["Scope", "Entrance door, stair balustrade, kitchen metal"], ["Finish", "Black PVD, hairline"], ["Services", "Bespoke metal, joinery integration, installation"]].map(([label, value], i) => <Reveal key={label} variant="row" delay={i * 60} className="border-b border-border py-6 pr-6"><dt className="text-[0.6rem] uppercase tracking-[0.24em] text-muted-foreground">{label}</dt><dd className="mt-2 font-display text-lg leading-snug text-foreground">{value}</dd></Reveal>)}
        </dl>
      </Section>

      <Section className="border-t border-border">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.4fr] lg:gap-20"><SectionHeading eyebrow="Introduction" title="The brief" /><div className="space-y-6"><Reveal variant="up"><p className="font-display text-2xl leading-snug text-foreground lg:text-3xl">A residence needing metal that feels hand-crafted, not industrial — quiet enough to sit beside warm stone and timber, but precise enough to become one of the strongest lines in the room.</p></Reveal><Reveal variant="up" delay={100}><p className="text-sm leading-relaxed text-muted-foreground lg:text-base">The project uses architectural PVD coated stainless steel across a 3.2 metre pivot entrance, a folded stair balustrade and a continuous kitchen edge. The objective was simple: make every joint disappear and let the black hairline surface carry the architecture.</p></Reveal></div></div>
      </Section>

      <ClipReveal className="mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-10"><Parallax className="aspect-[16/9] w-full border border-border" amount={60}><img src={gallery[1].src} alt={gallery[1].alt} loading="lazy" className="h-full w-full object-cover" /></Parallax></ClipReveal>

      <Section><div className="grid gap-12 lg:grid-cols-2 lg:gap-20"><div><SectionHeading eyebrow="Approach" title="How it was built" /><Reveal variant="up" delay={100}><p className="mt-8 text-sm leading-relaxed text-muted-foreground lg:text-base">Each element was drawn as a single folded piece wherever possible, reducing visible joints and defining the sheet sizes before fabrication. Welds were ground flush, edges were finished carefully, and the assemblies were prepared so the PVD coating could read as one continuous surface rather than a collection of parts.</p></Reveal></div><Reveal variant="right" delay={120}><div className="aspect-[4/3] overflow-hidden border border-border metal-sheen"><img src={gallery[4].src} alt={gallery[4].alt} loading="lazy" className="h-full w-full object-cover" /></div></Reveal></div></Section>

      <Section className="border-t border-border"><div className="grid gap-12 lg:grid-cols-2 lg:gap-20"><Reveal variant="left"><div className="aspect-[4/3] overflow-hidden border border-border metal-sheen"><img src={gallery[2].src} alt={gallery[2].alt} loading="lazy" className="h-full w-full object-cover" /></div></Reveal><div><SectionHeading eyebrow="Material & surface" title="The finish story" /><Reveal variant="up" delay={100}><p className="mt-8 text-sm leading-relaxed text-muted-foreground lg:text-base">Hairline SS 304 with black PVD was selected for a low-sheen architectural reading. The surface keeps the metal present without competing with travertine and oak, while the precision-finished substrate allows the PVD colour to remain consistent across the entrance, balustrade and kitchen elements.</p></Reveal></div></div></Section>

      <ClipReveal><Parallax className="aspect-[21/9] w-full border-y border-border" amount={80}><img src={gallery[3].src} alt={gallery[3].alt} loading="lazy" className="h-full w-full object-cover" /></Parallax></ClipReveal>

      <Section><SectionHeading eyebrow="Gallery" title="Project gallery" /><p className="mt-4 text-xs uppercase tracking-[0.24em] text-muted-foreground">06 images — click to enlarge</p><HorizontalRail className="mt-10" itemClassName="w-[80vw] sm:w-[46vw] lg:w-[32vw]">{gallery.map((image, i) => <button key={image.src + i} type="button" onClick={() => setLightbox(i)} data-cursor="Explore" className="group block w-full text-left"><div className="aspect-[4/3] overflow-hidden border border-border metal-sheen"><img src={image.src} alt={image.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105" /></div><p className="mt-3 flex items-center justify-between text-[0.6rem] uppercase tracking-[0.24em] text-muted-foreground"><span className="truncate pr-4">{image.alt}</span><span className="tabular-nums text-champagne">{String(i + 1).padStart(2, "0")} / 06</span></p></button>)}</HorizontalRail></Section>

      <Section className="border-t border-border"><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{project.detailGallery.map((image, i) => <Reveal key={image.src + i} variant="up" delay={(i % 3) * 110}><button type="button" onClick={() => setLightbox(6 + i)} className="block w-full" data-cursor="Explore"><div className="aspect-square overflow-hidden border border-border metal-sheen"><img src={image.src} alt={image.alt} loading="lazy" className="h-full w-full object-cover" /></div></button></Reveal>)}</div></Section>

      <Section className="border-t border-border"><div className="grid gap-12 lg:grid-cols-2 lg:gap-20"><div><SectionHeading eyebrow="Outcome" title="What was delivered" /><Reveal variant="up" delay={100}><p className="mt-8 text-sm leading-relaxed text-muted-foreground lg:text-base">Three sculptural residential elements: a 3.2 metre pivot door, an 18 metre balustrade run and a continuous kitchen metal edge. The work keeps the hardware and fixing language quiet so the black PVD hairline becomes the visual line of the architecture.</p></Reveal><div className="mt-10 grid grid-cols-2 gap-px border-t border-border">{[["Door","3.2 m pivot"],["Balustrade","18 m run"],["Finish","Black hairline"],["Completion","2025"]].map(([label,value],i)=><Reveal key={label} variant="row" delay={i*70} className="border-b border-border py-5 pr-4"><p className="text-[0.58rem] uppercase tracking-[0.24em] text-muted-foreground">{label}</p><p className="mt-1.5 font-display text-xl text-champagne">{value}</p></Reveal>)}</div></div><div><SectionHeading eyebrow="Technical" title="Specification" /><dl className="mt-8 border-t border-border">{[["Substrate","SS 304, 1.5 mm"],["Surface prep","Hairline No.4"],["PVD coating","Black PVD"],["Forming","Press-brake, single fold"],["Core","Aluminium honeycomb"]].map(([label,value],i)=><Reveal key={label} variant="row" delay={i*70} className="flex items-baseline justify-between gap-6 border-b border-border py-5"><dt className="text-[0.62rem] uppercase tracking-[0.24em] text-muted-foreground">{label}</dt><dd className="text-right text-sm text-foreground">{value}</dd></Reveal>)}</dl></div></div></Section>

      <Section className="border-t border-border"><SectionHeading eyebrow="More work" title="Related projects" /><div className="mt-12 grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">{related.map((p, i) => <Reveal key={p.slug} variant="up" delay={(i % 3) * 110}><ProjectGridCard project={p} /></Reveal>)}</div></Section>

      <Section className="border-t border-border text-center"><Reveal variant="up"><h2 className="font-display text-4xl leading-tight text-foreground sm:text-6xl">Start a project</h2></Reveal><Reveal variant="up" delay={100}><p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">Send us the drawings, the finish you have in mind, or just a photograph of a surface you like. We will come back with samples.</p></Reveal><Reveal variant="up" delay={180}><Link to="/contact" data-cursor="Start →" className="mt-10 inline-flex items-center gap-2 bg-champagne-gradient px-8 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-metal-black transition-opacity hover:opacity-90">Start a project <ArrowUpRight className="h-4 w-4" /></Link></Reveal></Section>

      <Lightbox images={gallery.concat(project.detailGallery)} index={lightbox} onClose={() => setLightbox(null)} onIndex={setLightbox} />
    </PageShell>
  );
}
