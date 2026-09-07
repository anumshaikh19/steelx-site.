import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

import { Section } from "@/components/page-shell";
import { Reveal, SectionHeading } from "@/components/reveal";
import { Counter, Parallax, ClipReveal, HorizontalRail } from "@/components/motion";
import { MediaFrame } from "@/components/media-frame";
import {
  heroLabels,
  studioStats,
  studioImages,
  timeline,
  practices,
  collaborators,
  collaborationGallery,
} from "@/data/studio";
import { finishes, surfaces } from "@/data/finishes";
import { cn } from "@/lib/utils";

/* 01 — HERO ─────────────────────────────────────────────── */
export function StudioHero({ videoSrc }: { videoSrc?: string }) {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden border-b border-border">
      <div className="absolute inset-0">
        {videoSrc ? (
          <video
            src={videoSrc}
            poster={studioImages.studioHero}
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover motion-safe:animate-[hero-drift_28s_ease-in-out_infinite_alternate]"
          />
        ) : (
          <img
            src={studioImages.studioHero}
            alt="Inside the STEELX workshop at night"
            width={1920}
            height={1080}
            className="h-full w-full object-cover motion-safe:animate-[hero-drift_28s_ease-in-out_infinite_alternate]"
          />
        )}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
      <div className="pointer-events-none absolute inset-0 tech-grid opacity-[0.25]" />

      {/* Technical labels around the edge */}
      <div className="pointer-events-none absolute inset-x-0 top-24 hidden justify-between px-10 lg:flex">
        {heroLabels.map((l, i) => (
          <Reveal
            key={l}
            variant="text"
            as="span"
            delay={400 + i * 120}
            className="text-[0.55rem] uppercase tracking-[0.4em] text-muted-foreground"
          >
            {l}
          </Reveal>
        ))}
      </div>

      <div className="relative mx-auto w-full max-w-[1600px] px-4 pb-20 sm:px-8 lg:px-10 lg:pb-28">
        <Reveal variant="text" as="p" className="text-[0.6rem] uppercase tracking-[0.45em] text-champagne">
          About STEELX
        </Reveal>
        <h1 className="mt-7 font-display text-[2.7rem] leading-[0.9] text-foreground sm:text-7xl lg:text-[8.5rem]">
          <Reveal variant="up" delay={100} as="span" className="block overflow-hidden">
            ENGINEERING SURFACES
          </Reveal>
          <Reveal variant="up" delay={240} as="span" className="block overflow-hidden text-steel-gradient">
            FOR ARCHITECTURE.
          </Reveal>
        </h1>
        <Reveal variant="up" delay={420}>
          <p className="mt-8 max-w-xl text-sm leading-relaxed text-muted-foreground lg:text-base">
            A premium architectural metal and PVD surface company working at the intersection of
            material, technology, fabrication and design.
          </p>
        </Reveal>
        <div className="mt-14 flex items-center gap-3 text-[0.58rem] uppercase tracking-[0.32em] text-muted-foreground">
          <ChevronDown className="h-4 w-4 text-champagne motion-safe:animate-bounce" />
          Scroll
        </div>
      </div>
    </section>
  );
}

/* 02 — WHO WE ARE ───────────────────────────────────────── */
export function WhoWeAre() {
  return (
    <>
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
          <div>
            <Reveal variant="text" as="p" className="text-[0.6rem] uppercase tracking-[0.34em] text-champagne">
              01 — Who we are
            </Reveal>
            <h2 className="mt-6 font-display text-[2.2rem] leading-[0.95] text-foreground sm:text-5xl lg:text-[4.4rem]">
              <Reveal variant="up" as="span" className="block">
                WE TURN METAL
              </Reveal>
              <Reveal variant="up" delay={120} as="span" className="block">
                INTO ARCHITECTURAL
              </Reveal>
              <Reveal variant="up" delay={240} as="span" className="block text-steel-gradient">
                SURFACES.
              </Reveal>
            </h2>
          </div>
          <div className="space-y-6 lg:pt-24">
            <Reveal variant="up">
              <p className="font-display text-xl leading-snug text-foreground lg:text-2xl">
                STEELX takes stainless steel from mill sheet to installed architectural surface —
                preparing, fabricating, coating and fitting under one roof.
              </p>
            </Reveal>
            <Reveal variant="up" delay={100}>
              <p className="text-sm leading-relaxed text-muted-foreground">
                We work in 304 and 316 stainless steel, in hairline, vibration, bead-blast, mirror,
                etched and woven surfaces, finished with PVD colour deposited in vacuum. The result is
                cladding, ceilings, screens, balustrades, elevator interiors and joinery metal built to
                a specification rather than to a catalogue.
              </p>
            </Reveal>
            <Reveal variant="up" delay={180}>
              <p className="text-sm leading-relaxed text-muted-foreground">
                That vertical integration is the point. When preparation, coating, fabrication and
                installation answer to the same team, colour holds across a facade, joints land where
                they were drawn, and a specifier has one number to call.
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      <ClipReveal className="mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-10">
        <Parallax className="aspect-[16/9] w-full border border-border metal-grain" amount={70}>
          <img
            src={studioImages.metalHero}
            alt="Champagne PVD stainless steel under raking light"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </Parallax>
      </ClipReveal>
    </>
  );
}

/* 03 — STATISTICS ───────────────────────────────────────── */
export function StudioStats() {
  return (
    <Section>
      <div className="grid gap-px border-t border-border sm:grid-cols-3 lg:grid-cols-5">
        {studioStats.map((s, i) => (
          <Reveal key={s.label} variant="row" delay={i * 90} className="border-b border-border py-10 pr-6">
            <p className="font-display text-5xl text-champagne lg:text-[4rem]">
              <Counter to={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-4 text-[0.58rem] uppercase tracking-[0.3em] text-muted-foreground">
              {s.label}
            </p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* 04 — TIMELINE (sticky horizontal) ─────────────────────── */
export function StudioTimeline() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const i = refs.current.indexOf(e.target as HTMLDivElement);
            if (i >= 0) setActive(i);
          }
        }
      },
      { rootMargin: "-50% 0px -45% 0px" },
    );
    refs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const progress = ((active + 1) / timeline.length) * 100;

  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-[1600px] px-4 pt-20 sm:px-8 lg:px-10 lg:pt-28">
        <SectionHeading eyebrow="02 — Our story" title="How the workshop became a surface company" />
      </div>

      <div className="relative">
        {/* Sticky visual */}
        <div className="pointer-events-none sticky top-0 hidden h-screen w-full lg:block">
          {timeline.map((t, i) => (
            <img
              key={t.id}
              src={t.image}
              alt={t.alt}
              loading="lazy"
              className={cn(
                "absolute inset-0 h-full w-full object-cover transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
                active === i ? "scale-100 opacity-100" : "scale-[1.06] opacity-0",
              )}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/20" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-border">
            <div
              className="h-full bg-champagne-gradient transition-[width] duration-700"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="lg:-mt-[100vh]">
          {timeline.map((t, i) => (
            <div
              key={t.id}
              ref={(el) => {
                refs.current[i] = el;
              }}
              className="mx-auto flex max-w-[1600px] items-center px-4 py-16 sm:px-8 lg:min-h-screen lg:px-10 lg:py-0"
            >
              <div
                className={cn(
                  "max-w-xl transition-all duration-700 lg:max-w-lg",
                  active === i ? "opacity-100" : "lg:opacity-35",
                )}
              >
                <p className="text-[0.58rem] uppercase tracking-[0.34em] text-champagne">
                  {String(i + 1).padStart(2, "0")} — {t.stage}
                </p>
                <h3 className="mt-5 font-display text-3xl leading-tight text-foreground lg:text-[3.2rem]">
                  {t.title}
                </h3>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
                <div className="mt-8 aspect-[16/10] overflow-hidden border border-border lg:hidden">
                  <img src={t.image} alt={t.alt} loading="lazy" className="h-full w-full object-cover" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 05 — FULL-WIDTH BANNER ────────────────────────────────── */
export function MaterialBanner() {
  return (
    <section className="relative h-[70vh] overflow-hidden border-y border-border lg:h-[92vh]">
      <Parallax className="h-full w-full" amount={90}>
        <img
          src={studioImages.facadeNight}
          alt="Bronze PVD stainless steel facade at night"
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </Parallax>
      <div className="absolute inset-0 bg-background/45" />
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <Reveal variant="scale">
          <h2 className="text-center font-display text-[2.2rem] leading-[0.95] text-foreground sm:text-6xl lg:text-[7rem]">
            MATERIALS THAT
            <br />
            HOLD THEIR OWN.
          </h2>
        </Reveal>
      </div>
    </section>
  );
}

/* 06 — WHAT WE DO ───────────────────────────────────────── */
export function WhatWeDo() {
  return (
    <Section>
      <SectionHeading eyebrow="03 — What we do" title="Four disciplines, one floor" />
      <div className="mt-16 space-y-px border-t border-border">
        {practices.map((p, i) => (
          <Reveal key={p.n} variant="up" delay={(i % 2) * 90}>
            <article
              data-cursor="Explore"
              className={cn(
                "group grid items-center gap-8 border-b border-border py-10 lg:grid-cols-2 lg:gap-16",
                i % 2 === 1 && "lg:[&>figure]:order-2",
              )}
            >
              <figure className="aspect-[16/10] overflow-hidden border border-border metal-sheen">
                <img
                  src={p.image}
                  alt={p.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                />
              </figure>
              <div>
                <p className="font-display text-6xl text-champagne/70 transition-colors group-hover:text-champagne lg:text-8xl">
                  {p.n}
                </p>
                <h3 className="mt-5 font-display text-2xl uppercase tracking-[0.04em] text-foreground lg:text-4xl">
                  {p.title}
                </h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* 07 — DESIGNER COLLABORATION ───────────────────────────── */
export function BuiltWithDesigners() {
  return (
    <Section className="border-t border-border">
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <SectionHeading eyebrow="04 — Collaboration" title="BUILT WITH DESIGNERS." />
        <div className="space-y-6">
          <Reveal variant="up">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Most of our work starts on someone else's drawing. We join at concept or detailing stage,
              develop finish samples against the intent, then resolve modules, returns, grain direction
              and fixing before the package goes out to tender.
            </p>
          </Reveal>
          <div className="flex flex-wrap gap-2">
            {collaborators.map((c, i) => (
              <Reveal key={c} variant="row" delay={i * 70} as="span">
                <span className="inline-block border border-border px-4 py-2 text-[0.58rem] uppercase tracking-[0.26em] text-muted-foreground transition-colors hover:border-champagne hover:text-champagne">
                  {c}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <HorizontalRail className="mt-16" itemClassName="w-[74vw] sm:w-[42vw] lg:w-[26vw]">
        {collaborationGallery.map((g) => (
          <figure key={g.label} className="group" data-cursor="Drag">
            <div className="aspect-[4/5] overflow-hidden border border-border metal-sheen">
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
              />
            </div>
            <figcaption className="mt-4 text-[0.58rem] uppercase tracking-[0.3em] text-champagne">
              {g.label}
            </figcaption>
          </figure>
        ))}
      </HorizontalRail>
    </Section>
  );
}

/* 08 — MATERIAL LIBRARY ─────────────────────────────────── */
export function MaterialLibrary() {
  const [active, setActive] = useState(finishes[0]?.id ?? "");
  const current = finishes.find((f) => f.id === active) ?? finishes[0];

  return (
    <Section className="border-t border-border">
      <SectionHeading eyebrow="05 — Material library" title="THE MATERIAL LIBRARY" />

      <div className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <div className="grid grid-cols-3 gap-px border-t border-l border-border sm:grid-cols-4 lg:grid-cols-3">
          {finishes.map((f, i) => (
            <Reveal key={f.id} variant="scale" delay={i * 60}>
              <button
                type="button"
                data-cursor="Explore"
                onMouseEnter={() => setActive(f.id)}
                onFocus={() => setActive(f.id)}
                onClick={() => setActive(f.id)}
                aria-pressed={active === f.id}
                className={cn(
                  "group block w-full border-b border-r border-border p-3 text-left transition-colors",
                  active === f.id ? "bg-foreground/[0.04]" : "hover:bg-foreground/[0.02]",
                )}
              >
                <span
                  className="block aspect-square w-full transition-transform duration-700 group-hover:scale-[1.04]"
                  style={{ backgroundImage: f.swatch }}
                />
                <span className="mt-3 block text-[0.56rem] uppercase tracking-[0.24em] text-muted-foreground group-hover:text-champagne">
                  {f.name}
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        <div className="lg:sticky lg:top-28 lg:self-start">
          {current ? (
            <div key={current.id} className="motion-safe:animate-[fade-in_600ms_ease-out]">
              <div
                className="aspect-[4/3] w-full border border-border metal-grain"
                style={{ backgroundImage: current.swatch }}
              />
              <p className="mt-6 text-[0.58rem] uppercase tracking-[0.3em] text-champagne">
                {current.family}
              </p>
              <h3 className="mt-3 font-display text-3xl text-foreground lg:text-4xl">{current.name}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{current.note}</p>
            </div>
          ) : null}
        </div>
      </div>

      <div className="mt-16 grid gap-px border-t border-border sm:grid-cols-2 lg:grid-cols-3">
        {surfaces.map((s, i) => (
          <Reveal key={s.id} variant="row" delay={i * 70} className="border-b border-border py-6 pr-6">
            <h4 className="text-sm uppercase tracking-[0.2em] text-foreground">{s.name}</h4>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.note}</p>
          </Reveal>
        ))}
      </div>

      <ClipReveal className="mt-16">
        <MediaFrame
          className="aspect-[21/9]"
          media={{
            poster: studioImages.macroFinish,
            alt: "Macro detail of a brushed PVD coated surface",
            label: "Macro — brushed PVD surface",
          }}
        />
      </ClipReveal>
    </Section>
  );
}
