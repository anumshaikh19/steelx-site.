import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { PageShell, Section } from "@/components/page-shell";
import { FeatureProjectCard, ProjectGridCard } from "@/components/project-grid-card";
import { Reveal, SectionHeading } from "@/components/reveal";
import { ClipReveal, Counter, HorizontalRail, Magnetic, Marquee, Parallax, StickyStory } from "@/components/motion";
import { HomeProjectRotator } from "@/components/home-project-rotator";
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
const description =
  "STEELX designs, coats and installs PVD stainless steel surfaces, decorative mesh and architectural metal for hospitality, retail, facades and luxury interiors worldwide.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const stats = [
  { value: 15, suffix: "+", label: "Years" },
  { value: 480, suffix: "+", label: "Projects delivered" },
  { value: 11, suffix: "", label: "Markets" },
  { value: 9, suffix: "+", label: "PVD colours" },
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
  const feature = projects[0]!;
  const selected = projects.slice(1, 4);
  const secondFeature = projects[4];
  const more = projects.slice(5, 8);
  const posts = journalPosts.slice(0, 3);

  return (
    <PageShell overlayHeader>
      {/* Cinematic hero */}
      <section className="relative flex min-h-[100svh] items-end overflow-hidden">
        <img
          src={metalHero}
          alt="Champagne PVD coated stainless steel surface under raking light"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/40" />
        <div className="pointer-events-none absolute inset-0 tech-grid opacity-30" aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-[1600px] px-4 pb-14 sm:px-8 lg:px-10 lg:pb-20">
          <Reveal variant="text" as="p" className="text-[0.62rem] uppercase tracking-[0.42em] text-champagne">
            Stainless steel · PVD · Architectural surfaces
          </Reveal>
          <Reveal variant="up" delay={80}>
            <h1 className="mt-8 max-w-5xl font-display text-[3rem] leading-[0.88] text-foreground sm:text-8xl lg:text-[9.5rem]">
              SURFACES
              <span className="block text-steel-gradient">ENGINEERED</span>
              TO LAST.
            </h1>
          </Reveal>
          <div className="mt-12 grid gap-8 border-t border-border pt-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <Reveal variant="up" delay={160}>
              <p className="max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-lg">
                We take stainless steel from mill sheet to installed architectural surface — cut,
                formed, finished, PVD coated and fitted by one team, for hospitality, retail,
                facades and luxury interiors across eleven markets.
              </p>
            </Reveal>
            <Reveal variant="up" delay={220}>
              <Magnetic>
                <Link
                  to="/projects"
                  data-cursor="Explore →"
                  className="inline-flex items-center gap-2 bg-champagne-gradient px-8 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-metal-black"
                >
                  Explore projects <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Magnetic>
            </Reveal>
          </div>
        </div>
      </section>

      <HomeProjectRotator projects={projects} />

      <Marquee items={["PVD COATED STAINLESS", "DECORATIVE MESH", "FACADE SYSTEMS", "HOSPITALITY METAL", "RETAIL FABRICATION", "INTERNATIONAL DELIVERY"]} />

      {/* Stats */}
      <Section className="lg:py-20">
        <div className="grid gap-px border-t border-border sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} variant="row" delay={i * 90} className="border-b border-border py-8 pr-6">
              <p className="font-display text-5xl text-champagne lg:text-7xl">
                <Counter to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-3 text-[0.6rem] uppercase tracking-[0.28em] text-muted-foreground">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Capabilities rail */}
      <Section className="border-t border-border">
        <SectionHeading eyebrow="Capabilities" title="What we make" />
        <HorizontalRail className="mt-12" itemClassName="w-[74vw] sm:w-[42vw] lg:w-[27vw]">
          {capabilities.map((c) => (
            <article key={c.t} className="group" data-cursor="Explore">
              <div className="aspect-[4/5] overflow-hidden border border-border metal-sheen">
                <img
                  src={c.img}
                  alt={c.t}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 font-display text-2xl text-foreground">{c.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
            </article>
          ))}
        </HorizontalRail>
      </Section>

      {/* Feature project */}
      <Section className="border-t border-border">
        <SectionHeading eyebrow="Selected work" title="Recent projects" />
        <Reveal variant="scale" className="mt-12">
          <FeatureProjectCard project={feature} />
        </Reveal>
        <div className="mt-20 grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {selected.map((p, i) => (
            <Reveal key={p.slug} variant="up" delay={(i % 3) * 110}>
              <ProjectGridCard project={p} index={i} />
            </Reveal>
          ))}
        </div>
        {secondFeature ? (
          <Reveal variant="scale" className="mt-20">
            <FeatureProjectCard project={secondFeature} />
          </Reveal>
        ) : null}
        <div className="mt-20 grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {more.map((p, i) => (
            <Reveal key={p.slug} variant="up" delay={(i % 3) * 110}>
              <ProjectGridCard project={p} index={i + 4} />
            </Reveal>
          ))}
        </div>
        <Reveal variant="up" className="mt-16">
          <Link
            to="/projects"
            data-cursor="View all →"
            className="inline-flex items-center gap-2 border border-border px-8 py-4 text-[0.72rem] uppercase tracking-[0.2em] text-foreground transition-colors hover:border-champagne hover:text-champagne"
          >
            All projects <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </Section>

      {/* Sticky material story */}
      <Section className="border-t border-border">
        <SectionHeading eyebrow="From sheet to surface" title="How a panel is made" />
        <div className="mt-12">
          <StickyStory steps={story} />
        </div>
      </Section>

      {/* Finishes */}
      <Section className="border-t border-border">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Finishes" title="Nine tones, one control sample" />
          <Link
            to="/ss-decorative-mesh-pvd"
            data-cursor="Explore →"
            className="text-[0.66rem] uppercase tracking-[0.22em] text-champagne"
          >
            See decorative mesh →
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {finishes.map((f, i) => (
            <Reveal key={f.id} variant="up" delay={(i % 5) * 80}>
              <div
                className="aspect-square border border-border metal-grain transition-transform duration-700 hover:scale-[1.03]"
                style={{ backgroundImage: f.swatch }}
                role="img"
                aria-label={`${f.name} finish`}
              />
              <p className="mt-3 text-[0.6rem] uppercase tracking-[0.24em] text-muted-foreground">{f.name}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Full-bleed */}
      <ClipReveal>
        <Parallax className="aspect-[21/9] w-full border-y border-border" amount={80}>
          <img src={lobby} alt="Coated stainless surfaces in a completed hospitality lobby" loading="lazy" className="h-full w-full object-cover" />
        </Parallax>
      </ClipReveal>

      {/* Journal */}
      <Section>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Journal" title="Notes on metal" />
          <Link to="/journal" className="text-[0.66rem] uppercase tracking-[0.22em] text-champagne">
            All articles →
          </Link>
        </div>
        <div className="mt-12 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.slug} variant="up" delay={(i % 3) * 100}>
              <Link to="/journal/$slug" params={{ slug: p.slug }} data-cursor="Read →" className="group block">
                <div className="aspect-[4/3] overflow-hidden border border-border metal-sheen">
                  <img
                    src={p.hero}
                    alt={p.heroAlt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1300ms] group-hover:scale-105"
                  />
                </div>
                <p className="mt-4 text-[0.58rem] uppercase tracking-[0.26em] text-champagne">
                  {p.category} · {formatDate(p.date)}
                </p>
                <h3 className="mt-3 font-display text-xl leading-snug text-foreground transition-colors group-hover:text-champagne">
                  {p.title}
                </h3>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="border-t border-border text-center">
        <Reveal variant="up">
          <h2 className="font-display text-4xl leading-tight text-foreground sm:text-7xl">
            Let's build a surface.
          </h2>
        </Reveal>
        <Reveal variant="up" delay={100}>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Send drawings, a finish reference, or a photograph of a surface you like. We reply with
            samples and a specification.
          </p>
        </Reveal>
        <Reveal variant="up" delay={180}>
          <Magnetic className="mt-10">
            <Link
              to="/contact"
              data-cursor="Start →"
              className="inline-flex items-center gap-2 bg-champagne-gradient px-9 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-metal-black"
            >
              Start a project <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Magnetic>
        </Reveal>
      </Section>
    </PageShell>
  );
}
