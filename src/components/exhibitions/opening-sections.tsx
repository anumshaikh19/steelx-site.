import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { ClipReveal, Magnetic, Parallax } from "@/components/motion";
import { exhibitionImages, experiments } from "@/data/exhibitions";
import { cn } from "@/lib/utils";

/* ── 02 — Cinematic hero ─────────────────────────────────────── */
export function ExhibitionHero() {
  const word = "Exhibitions".split("");

  return (
    <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden film-grain">
      <div className="absolute inset-0">
        <Parallax amount={90} className="absolute inset-0">
          <img
            src={exhibitionImages.hero}
            alt="PVD stainless steel installation catching architectural light"
            className="h-full w-full scale-110 object-cover opacity-60 grade-steel motion-safe:animate-[hero-drift_26s_ease-in-out_infinite_alternate]"
          />
        </Parallax>
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/40 to-background" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(115% 80% at 50% 30%, transparent 38%, oklch(0.05 0 0 / 70%) 100%)",
          }}
          aria-hidden="true"
        />
        <div className="pointer-events-none absolute inset-0 metal-grain" />
        <div className="pointer-events-none absolute inset-0 sheen-sweep" aria-hidden="true" />
      </div>

      {/* Layered ghost typography */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[22%] -translate-x-1/2 select-none whitespace-nowrap font-display uppercase leading-none tracking-[-0.06em] text-outline text-[clamp(6rem,26vw,26rem)] opacity-60 motion-safe:animate-[float-y_14s_ease-in-out_infinite_alternate]"
      >
        Surface
      </span>

      <div className="relative mx-auto w-full max-w-[1600px] px-4 pb-14 pt-32 sm:px-8 lg:px-10 lg:pb-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal variant="text" as="p" className="text-[0.62rem] uppercase tracking-[0.42em] text-champagne">
            Exhibitions / 01
          </Reveal>
          <Reveal
            variant="text"
            as="p"
            delay={120}
            className="text-[0.62rem] uppercase tracking-[0.42em] text-muted-foreground"
          >
            STEELX PVD Surfaces
          </Reveal>
        </div>

        <h1 className="mt-8 flex flex-wrap font-display uppercase leading-[0.82] tracking-[-0.055em] text-foreground text-[clamp(3.6rem,12vw,13.5rem)]">
          {word.map((letter, i) => (
            <ClipReveal key={`${letter}-${i}`} delay={i * 55}>
              <span className="block">{letter}</span>
            </ClipReveal>
          ))}
        </h1>

        <div className="mt-10 grid gap-10 border-t border-hairline pt-8 lg:grid-cols-12">
          <Reveal variant="up" delay={80} className="lg:col-span-5">
            <p className="font-display text-2xl leading-[1.1] text-steel-gradient sm:text-3xl">
              Material in dialogue.
            </p>
          </Reveal>
          <Reveal variant="up" delay={180} className="lg:col-span-5 lg:col-start-7">
            <p className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Spaces where metal becomes atmosphere — shaped by light, scale, movement and detail.
              Our installations transform stainless steel into immersive environments where surface,
              light, structure and movement become part of the architecture.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 flex items-center gap-4">
          <span className="text-[0.6rem] uppercase tracking-[0.4em] text-muted-foreground">
            Scroll to explore
          </span>
          <span className="relative h-px w-24 overflow-hidden bg-hairline sm:w-40" aria-hidden="true">
            <span className="absolute inset-y-0 left-0 w-1/3 bg-champagne motion-safe:animate-[scroll-line_2.6s_cubic-bezier(0.16,1,0.3,1)_infinite]" />
          </span>
        </div>
      </div>
    </section>
  );
}


/* ── 03 — Manifesto ──────────────────────────────────────────── */
export function Manifesto() {
  const lines = [
    "Architecture is not only",
    "what surrounds us. It is what",
    "we feel when light meets material.",
  ];

  return (
    <section className="mx-auto max-w-[1600px] px-4 py-28 sm:px-8 lg:px-10 lg:py-44">
      <Reveal variant="text" as="p" className="text-[0.62rem] uppercase tracking-[0.4em] text-champagne">
        01 / Material as experience
      </Reveal>
      <div className="mt-14 grid gap-12 lg:grid-cols-12">
        <h2 className="font-display leading-[0.95] tracking-[-0.04em] text-foreground text-[clamp(2rem,5.2vw,4.6rem)] lg:col-span-7">
          {lines.map((line, i) => (
            <Reveal key={line} variant="up" delay={i * 140} as="span" className="block">
              {line}
            </Reveal>
          ))}
        </h2>
        <div className="space-y-6 lg:col-span-4 lg:col-start-9">
          <Reveal variant="up" delay={200}>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              STEELX exhibitions are where the material is tested before it becomes a specification.
              Each installation is built to answer one question about surface — how it reflects, how
              it holds a tone across a long run, how it behaves when the lighting design changes.
            </p>
          </Reveal>
          <Reveal variant="up" delay={300}>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              What we learn in an installation returns to the workshop as a coating target, a joint
              detail or a panel module — and eventually to a facade, a lobby or a screen.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ── 04 — Featured installation ──────────────────────────────── */
export function FeaturedInstallation() {
  return (
    <section className="mx-auto max-w-[1600px] px-4 pb-24 sm:px-8 lg:px-10 lg:pb-36">
      <div className="flex flex-wrap items-baseline justify-between gap-4 border-t border-hairline pt-6">
        <Reveal variant="text" as="p" className="text-[0.62rem] uppercase tracking-[0.4em] text-champagne">
          Featured installation
        </Reveal>
        <p className="text-[0.62rem] uppercase tracking-[0.3em] text-muted-foreground">2026 — Mumbai, India</p>
      </div>

      <Link
        to="/projects/$slug"
        params={{ slug: "harbour-house-penthouse" }}
        data-cursor="View"
        className="group mt-8 block focus-visible:outline-none"
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden metal-sheen corner-ticks vignette film-grain lg:aspect-[21/10]">
          <Parallax amount={70} className="h-full w-full">
            <img
              src={exhibitionImages.featured}
              alt="Metal, light and space — a PVD stainless steel installation"
              loading="lazy"
              className="h-full w-full scale-[1.02] object-cover grade-steel transition-[transform,filter] duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.07] group-hover:brightness-110"
            />
          </Parallax>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
            <h3 className="font-display uppercase leading-[0.86] tracking-[-0.05em] text-foreground text-[clamp(2rem,6.5vw,5.5rem)]">
              <span className="block transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1">
                Metal <span className="text-outline-gold">/</span> Light{" "}
                <span className="text-outline-gold">/</span> Space
              </span>
            </h3>

            <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
              <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                An exploration of reflection, texture and architectural rhythm.
              </p>
              <span className="inline-flex items-center gap-2 text-[0.66rem] uppercase tracking-[0.28em] text-champagne">
                View installation
                <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}

/* ── 05 — Imagination + experimentation ──────────────────────── */
export function Experimentation() {
  return (
    <section className="relative overflow-hidden bg-metal-black py-24 lg:py-40">
      <div className="pointer-events-none absolute inset-0 tech-grid opacity-40" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal variant="up" className="lg:col-span-7">
            <h2 className="font-display uppercase leading-[0.9] tracking-[-0.045em] text-foreground text-[clamp(2.2rem,6vw,5rem)]">
              Imagination
              <span className="block text-steel-gradient">+ Experimentation</span>
            </h2>
          </Reveal>
          <Reveal variant="up" delay={160} className="lg:col-span-4 lg:col-start-9">
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Every installation is an opportunity to test how surface behaves in space — before it
              is committed to a building.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 space-y-24 lg:mt-28 lg:space-y-40">
          {experiments.map((item, i) => (
            <article
              key={item.index}
              className={cn(
                "relative grid items-center gap-8 lg:grid-cols-12",
                i % 2 === 1 && "lg:[direction:rtl] lg:*:[direction:ltr]",
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  "pointer-events-none absolute -top-14 z-10 select-none font-display leading-none text-outline text-[clamp(5rem,16vw,15rem)] lg:-top-24",
                  i % 2 === 1 ? "right-0" : "left-0",
                )}
              >
                {item.index}
              </span>
              <ClipReveal className="relative lg:col-span-7">
                <div className="group relative aspect-[4/3] overflow-hidden metal-sheen vignette film-grain">
                  <Parallax amount={36} className="h-full w-full">
                    <img
                      src={item.image}
                      alt={item.alt}
                      loading="lazy"
                      className="h-full w-full scale-[1.03] object-cover grade-steel transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.08]"
                    />
                  </Parallax>
                </div>
              </ClipReveal>
              <div className="relative z-20 lg:col-span-4 lg:col-start-9">
                <Reveal variant="up" delay={160}>
                  <h3 className="font-display text-3xl uppercase leading-[0.95] tracking-[-0.035em] text-foreground lg:text-5xl">
                    {item.title}
                  </h3>
                </Reveal>
                <Reveal variant="row" delay={220}>
                  <span className="mt-6 block h-px w-16 bg-champagne/70" />
                </Reveal>
                <Reveal variant="up" delay={280}>
                  <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </Reveal>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

/* ── 11 — Typographic statement ──────────────────────────────── */
export function SheetToSpaceStatement() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-44">
      <div className="pointer-events-none absolute inset-0 opacity-30 bg-steel-gradient motion-safe:animate-[sheen-drift_16s_ease-in-out_infinite_alternate]" />
      <div className="relative mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-10">
        <h2 className="font-display uppercase leading-[0.82] tracking-[-0.055em] text-foreground text-[clamp(3rem,11vw,11rem)]">
          <Reveal variant="up" as="span" className="block">
            From sheet
          </Reveal>
          <Reveal variant="up" delay={180} as="span" className="block text-steel-gradient">
            to space.
          </Reveal>
        </h2>
        <Reveal variant="up" delay={320}>
          <p className="mt-10 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            We don't simply finish metal. We engineer how it belongs in architecture.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ── 12 — Closing CTA ────────────────────────────────────────── */
export function ExhibitionCTA({ onEnquire }: { onEnquire: () => void }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={exhibitionImages.metalHero}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="h-full w-full object-cover opacity-30 saturate-[0.3]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
      </div>
      <div className="relative mx-auto max-w-[1600px] px-4 py-28 sm:px-8 lg:px-10 lg:py-40">
        <Reveal variant="up">
          <h2 className="font-display uppercase leading-[0.88] tracking-[-0.05em] text-foreground text-[clamp(2.4rem,8vw,7rem)]">
            Let's build a surface.
          </h2>
        </Reveal>
        <Reveal variant="up" delay={140}>
          <p className="mt-8 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Send us a drawing, finish reference or photograph of a surface you like. We'll help
            translate it into a specification.
          </p>
        </Reveal>
        <div className="mt-12 flex flex-wrap items-center gap-4">
          <Magnetic>
            <button
              type="button"
              onClick={onEnquire}
              data-cursor="Start →"
              className="inline-flex items-center gap-2 rounded-full border border-champagne/50 bg-champagne-gradient px-7 py-3.5 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-metal-black transition-opacity hover:opacity-90"
            >
              Start a project
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </Magnetic>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-foreground transition-colors hover:border-champagne hover:text-champagne"
          >
            Explore projects
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
