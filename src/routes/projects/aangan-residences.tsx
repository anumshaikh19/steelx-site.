import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

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
      {
        name: "description",
        content:
          "Aangan Residences, Bandra West — water ripple PVD, mirror PVD and bronze PVD on ss-pvd-304 architectural stainless steel for a Mumbai residential project.",
      },
      {
        name: "keywords",
        content:
          "Aangan Residences Bandra West, ss-pvd-304, water ripple PVD, designer sheet, mirror PVD, architectural PVD coated, Mumbai PVD metalwork",
      },
      { property: "og:title", content: "Aangan Residences, Bandra West — STEELX" },
      {
        property: "og:description",
        content: "Water ripple, mirror and bronze PVD stainless steel across a Bandra West residential project.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AanganResidences,
});

function AanganResidences() {
  // The supplied Aangan content is fictionalized SEO demonstration content, so the existing
  // project imagery is used only as visual placeholders until dedicated Aangan photography is supplied.
  const base = getProject("nikhil-gupta-residence");
  const related = relatedProjects("nikhil-gupta-residence");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const gallery = [
    {
      src: base?.coverImage,
      alt: "Water ripple PVD finish on ss-304 facade fins at Aangan Residences, Bandra West",
    },
    {
      src: base?.gallery[1]?.src,
      alt: "Close-up of water ripple PVD on ss-pvd-304 facade fin showing structural texture",
    },
    {
      src: base?.gallery[2]?.src,
      alt: "Water ripple designer sheet wall in Aangan Residences lobby",
    },
    {
      src: base?.gallery[3]?.src,
      alt: "Mirror PVD on ss-304 elevator lobby creating spatial depth at Aangan Residences",
    },
    {
      src: base?.detailGallery[0]?.src,
      alt: "Water ripple PVD material comparison and fabrication detail for Aangan Residences",
    },
    {
      src: base?.detailGallery[1]?.src,
      alt: "Architectural PVD coated stainless steel finish inspection for Aangan Residences",
    },
  ].filter((image): image is { src: string; alt: string } => Boolean(image.src));

  return (
    <PageShell>
      <section className="mx-auto max-w-[1600px] px-4 pb-10 pt-28 sm:px-8 lg:px-10 lg:pt-36">
        <Reveal variant="text" as="p" className="text-[0.62rem] uppercase tracking-[0.4em] text-champagne">
          Residential · Bandra West, Mumbai · 2025 · Completed
        </Reveal>
        <Reveal variant="up" delay={80}>
          <h1 className="mt-6 max-w-6xl font-display text-[2.8rem] leading-[0.92] text-foreground sm:text-7xl lg:text-[7.5rem]">
            Aangan Residences, Bandra West
          </h1>
        </Reveal>
        <Reveal variant="row" delay={160}>
          <p className="mt-6 max-w-4xl text-sm leading-relaxed text-muted-foreground lg:text-base">
            A mid-rise residential tower in Bandra needing a facade that feels handcrafted, not industrial —
            something that ages gracefully in Mumbai’s salty air while giving residents a sense of quiet luxury.
          </p>
        </Reveal>
      </section>

      <ClipReveal className="mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-10">
        <Parallax className="aspect-[16/10] w-full border border-border lg:aspect-[21/9]" amount={70}>
          <img
            src={gallery[0]?.src}
            alt={gallery[0]?.alt ?? "Aangan Residences hero"}
            className="h-full w-full object-cover"
          />
        </Parallax>
      </ClipReveal>

      <Section className="lg:py-20">
        <p className="text-[0.62rem] uppercase tracking-[0.34em] text-champagne">Project facts</p>
        <dl className="mt-8 grid gap-px border-t border-border sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Client", "Kumar Realty"],
            ["Location", "Bandra West, Mumbai"],
            ["Area", "28,500 sq ft"],
            ["Year", "2025"],
            ["Status", "Completed"],
            ["Scope", "Facade metalwork, entrance canopy, lobby designer sheets, elevator lobbies"],
            ["Finish", "Water ripple PVD (ss-304), mirror PVD, bronze PVD"],
            ["Services", "Facade metal, custom fabrication, installation, PVD coating"],
          ].map(([label, value], i) => (
            <Reveal key={label} variant="row" delay={i * 60} className="border-b border-border py-6 pr-6">
              <dt className="text-[0.6rem] uppercase tracking-[0.24em] text-muted-foreground">{label}</dt>
              <dd className="mt-2 font-display text-lg leading-snug text-foreground">{value}</dd>
            </Reveal>
          ))}
        </dl>
      </Section>

      <Section className="border-t border-border">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.4fr] lg:gap-20">
          <SectionHeading eyebrow="Introduction" title="The brief" />
          <div className="space-y-6">
            <Reveal variant="up">
              <p className="font-display text-2xl leading-snug text-foreground lg:text-3xl">
                A mid-rise residential tower in Bandra needing a facade that feels <strong>hand-crafted, not industrial</strong> —
                something that ages gracefully in Mumbai’s salty air while giving residents a sense of quiet luxury.
              </p>
            </Reveal>
            <Reveal variant="up" delay={100}>
              <p className="text-sm leading-relaxed text-muted-foreground lg:text-base">
                The client wanted metal that breathes: reflective enough to catch the sea breeze but textured enough to hide
                monsoon grime. We proposed <strong>ss-pvd-304 with water ripple texture</strong> for the facade — liquid metal
                frozen in motion — and <strong>mirror PVD</strong> for the entrance canopy to double the sky.
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      <ClipReveal className="mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-10">
        <Parallax className="aspect-[16/9] w-full border border-border" amount={60}>
          <img
            src={gallery[1]?.src}
            alt={gallery[1]?.alt ?? "Water ripple PVD facade detail"}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </Parallax>
      </ClipReveal>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading eyebrow="Approach" title="How it was built" />
            <Reveal variant="up" delay={100}>
              <p className="mt-8 text-sm leading-relaxed text-muted-foreground lg:text-base">
                We started with full-scale mockups tested on our Rajkot roof for 6 months (monsoon to summer) to confirm the
                water ripple PVD wouldn’t trap dirt or fade. For the facade, we used <strong>ss-pvd-304 sheets</strong>
                laser-cut into overlapping fins — each panel uniquely bent to create that ripple effect before coating, so
                the texture is structural, not just surface. The lobby <strong>designer sheets</strong> use the same
                ss-pvd-304 with a water ripple PVD finish applied in a single batch. For the elevator lobbies, we used
                <strong> mirror PVD on ss-304</strong> to reflect the lobby’s teak wood and cane furniture.
              </p>
            </Reveal>
          </div>
          <Reveal variant="right" delay={120}>
            <div className="aspect-[4/3] overflow-hidden border border-border metal-sheen">
              <img
                src={gallery[2]?.src}
                alt={gallery[2]?.alt ?? "Aangan Residences lobby designer sheet"}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="border-t border-border">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal variant="left">
            <div className="aspect-[4/3] overflow-hidden border border-border metal-sheen">
              <img
                src={gallery[3]?.src}
                alt={gallery[3]?.alt ?? "Mirror PVD elevator lobby"}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading eyebrow="Material & surface" title="The finish story" />
            <Reveal variant="up" delay={100}>
              <p className="mt-8 text-sm leading-relaxed text-muted-foreground lg:text-base">
                Grade <strong>ss-pvd-304</strong> (we never use 201 or 430 for coastal Mumbai — it’s non-negotiable for longevity),
                hairline-prepped to Ra 0.8μm, then PVD coated. The <strong>water ripple</strong> isn’t a film — it’s the actual
                metal formed into waves before coating, so the finish wears with the metal, not on top of it. For the
                <strong> mirror PVD</strong> in elevators, the supplied specification calls for polishing to Ra 0.05μm first.
                The bronze PVD accents are described as a single-chamber batch so the lift lobbies and facade fins read as one family.
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      <ClipReveal>
        <Parallax className="aspect-[21/9] w-full border-y border-border" amount={80}>
          <img
            src={gallery[4]?.src}
            alt={gallery[4]?.alt ?? "Aangan Residences material detail"}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </Parallax>
      </ClipReveal>

      <Section>
        <SectionHeading eyebrow="Gallery" title="Project gallery" />
        <p className="mt-4 text-xs uppercase tracking-[0.24em] text-muted-foreground">
          06 images — click to enlarge
        </p>
        <HorizontalRail className="mt-10" itemClassName="w-[80vw] sm:w-[46vw] lg:w-[32vw]">
          {gallery.map((image, i) => (
            <button
              key={`${image.src}-${i}`}
              type="button"
              onClick={() => setLightbox(i)}
              data-cursor="Explore"
              className="group block w-full text-left"
            >
              <div className="aspect-[4/3] overflow-hidden border border-border metal-sheen">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
              </div>
              <p className="mt-3 flex items-center justify-between text-[0.6rem] uppercase tracking-[0.24em] text-muted-foreground">
                <span className="truncate pr-4">{image.alt}</span>
                <span className="tabular-nums text-champagne">
                  {String(i + 1).padStart(2, "0")} / 06
                </span>
              </p>
            </button>
          ))}
        </HorizontalRail>
      </Section>

      <Section className="border-t border-border lg:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.slice(0, 3).map((image, i) => (
            <Reveal key={`${image.src}-detail-${i}`} variant="up" delay={(i % 3) * 110}>
              <button
                type="button"
                onClick={() => setLightbox(i)}
                data-cursor="Explore"
                className="block w-full"
              >
                <div className="aspect-square overflow-hidden border border-border metal-sheen">
                  <img src={image.src} alt={image.alt} loading="lazy" className="h-full w-full object-cover" />
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading eyebrow="Outcome" title="What was delivered" />
            <Reveal variant="up" delay={100}>
              <p className="mt-8 text-sm leading-relaxed text-muted-foreground lg:text-base">
                A facade that looks richer after two monsoons — the supplied content describes the water ripple PVD as
                improving with light surface patina, while the mirror PVD lobby ceilings still reflect perfectly. Maintenance
                is specified as water and microfiber cloth, with no chemicals or polishing. The supplied project narrative also
                specifies 1,200 hours of ASTM B117 salt fog testing, ASTM D4587 UV testing with ΔE under 1.5, and zero visible
                wear on the lobby designer sheets after 18 months.
              </p>
            </Reveal>
            <div className="mt-10 grid grid-cols-2 gap-px border-t border-border">
              {[
                ["Floors", "Stilt + 6"],
                ["Envelope", "Water ripple PVD fins"],
                ["Designer sheets", "Lobby walls, reception desk"],
                ["Special finishes", "Mirror PVD + bronze PVD"],
                ["Completion", "2025"],
              ].map(([label, value], i) => (
                <Reveal key={label} variant="row" delay={i * 70} className="border-b border-border py-5 pr-4">
                  <p className="text-[0.58rem] uppercase tracking-[0.24em] text-muted-foreground">{label}</p>
                  <p className="mt-1.5 font-display text-xl text-champagne">{value}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <SectionHeading eyebrow="Technical" title="Specification" />
            <dl className="mt-8 border-t border-border">
              {[
                ["Substrate", "SS 304, 1.2 mm facade / 1.5 mm lobby"],
                ["Surface prep", "Hairline No.4 — Ra 0.8μm facade / Ra 0.3μm mirror zones"],
                ["PVD coating", "Water ripple PVD / mirror PVD / bronze PVD"],
                ["Climate proofing", "ASTM B117 1,200h / ASTM D4587 1,500h / 95% RH"],
                ["Cleanability", "ISO 11998 Class 1 — water-only cleaning"],
              ].map(([label, value], i) => (
                <Reveal
                  key={label}
                  variant="row"
                  delay={i * 70}
                  className="flex items-baseline justify-between gap-6 border-b border-border py-5"
                >
                  <dt className="text-[0.62rem] uppercase tracking-[0.24em] text-muted-foreground">{label}</dt>
                  <dd className="max-w-[65%] text-right text-sm text-foreground">{value}</dd>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </Section>

      <Section className="border-t border-border">
        <SectionHeading eyebrow="More work" title="Related projects" />
        <div className="mt-12 grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((p, i) => (
            <Reveal key={p.slug} variant="up" delay={(i % 3) * 110}>
              <ProjectGridCard project={p} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border text-center">
        <Reveal variant="up">
          <h2 className="font-display text-4xl leading-tight text-foreground sm:text-6xl">Start a project</h2>
        </Reveal>
        <Reveal variant="up" delay={100}>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Send us the drawings, the finish you have in mind, or just a photograph of a surface you like — even a
            monsoon-stained wall. We will come back with samples cut from actual ss-pvd-304.
          </p>
        </Reveal>
        <Reveal variant="up" delay={180}>
          <Link
            to="/contact"
            data-cursor="Start →"
            className="mt-10 inline-flex items-center gap-2 bg-champagne-gradient px-8 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-metal-black transition-opacity hover:opacity-90"
          >
            Start a project <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </Section>

      <Lightbox images={gallery} index={lightbox} onClose={() => setLightbox(null)} onIndex={setLightbox} />
    </PageShell>
  );
}
