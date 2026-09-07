import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { ClipReveal } from "@/components/motion";
import { useScrollProgress, stageBlend, stageIndex } from "@/hooks/use-scroll-progress";
import { MaterialObject, StatementHeading, meta, wrap } from "@/components/pvd/panel";
import {
  architectureLabels,
  applications,
  chapters,
  pvdImages,
  textures,
  tones,
} from "@/data/pvd";

/* ── 01 · Cinematic hero ─────────────────────────────────────── */

export function PvdHero() {
  const { ref, progress, reduced } = useScrollProgress<HTMLDivElement>();
  const tone = tones[1]!;
  const p = reduced ? 0 : progress;
  const zoom = 1 + p * 5.2;
  const macroOpacity = Math.max(0, (p - 0.55) / 0.35);

  return (
    <div ref={ref} className="relative h-[260vh]">
      <div className="sticky top-0 h-[100svh] overflow-hidden bg-metal-black">
        <span
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(70% 50% at 50% 8%, rgba(255,255,255,0.10), transparent 70%)",
          }}
        />
        <div className="absolute inset-0 flex items-start justify-center pt-[2vh] lg:items-center lg:justify-end lg:pt-0 lg:pr-[7vw]">
          <MaterialObject
            tone={tone}
            rotate={-18 + p * 34}
            tilt={-6 + p * 6}
            scale={zoom}
            highlight={0.2 + p}
            className="-translate-y-20 opacity-95 sm:translate-y-0 lg:-translate-y-10"
          />
        </div>

        {/* macro dissolve at the end of the hero */}
        <div
          className="absolute inset-0"
          style={{ opacity: macroOpacity }}
          aria-hidden={macroOpacity < 0.5}
        >
          <img
            src={pvdImages.macro}
            alt="Macro of champagne PVD stainless steel"
            className="h-full w-full object-cover"
            style={{ transform: `scale(${1.1 + p * 0.15})` }}
          />
        </div>

        <span
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-metal-black via-metal-black/75 to-transparent lg:bg-gradient-to-r lg:via-metal-black/70"
        />
        <div
          className={cn(wrap, "absolute inset-x-0 bottom-0 pb-12 lg:pb-16")}
          style={{ opacity: Math.max(0, 1 - p * 2.2) }}
        >
          <p className="mask-line text-[0.62rem] uppercase tracking-[0.42em] text-champagne">
            STEELX · PVD Surfaces
          </p>
          <h1
            className="mask-line relative mt-6 max-w-[15ch] font-display font-light uppercase leading-[0.84] tracking-[-0.025em] text-foreground"
            style={{ fontSize: "clamp(44px, 11vw, 210px)", animationDelay: "120ms" }}
          >
            Light,
            <span className="block text-steel-gradient">engineered.</span>
          </h1>
          <div className="mt-10 grid gap-8 border-t border-border/60 pt-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground lg:text-lg">
              Architectural stainless steel with colour, texture and performance engineered into
              every surface.
            </p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              <a href="#colour" className="pvd-cta">
                Explore PVD <ArrowRight className="h-3.5 w-3.5" />
              </a>
              <a href="#specify" className="pvd-link">
                Request samples <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Floating chapter indicator ──────────────────────────────── */

export function ChapterIndicator() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const els = chapters
      .map((c) => document.getElementById(c.id))
      .filter((e): e is HTMLElement => Boolean(e));
    if (!els.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const i = chapters.findIndex((c) => c.id === e.target.id);
            if (i >= 0) setActive(i);
          }
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((e) => obs.observe(e));
    return () => obs.disconnect();
  }, []);

  return (
    <nav
      aria-label="Chapters"
      className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
    >
      <ul className="space-y-4">
        {chapters.map((c, i) => (
          <li key={c.id}>
            <a
              href={`#${c.id}`}
              className="group flex items-center justify-end gap-3"
              aria-current={i === active ? "true" : undefined}
            >
              <span
                className={cn(
                  "text-[0.58rem] uppercase tracking-[0.24em] opacity-0 transition-opacity duration-500 group-hover:opacity-100",
                  i === active ? "text-champagne opacity-100" : "text-muted-foreground",
                )}
              >
                {c.label}
              </span>
              <span
                className={cn(
                  "block h-px transition-all duration-700",
                  i === active ? "w-8 bg-champagne" : "w-4 bg-border group-hover:w-6",
                )}
              />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/* ── 02 · One material, endless character ────────────────────── */

export function ToneTransformation() {
  const { ref, progress, reduced } = useScrollProgress<HTMLDivElement>();
  const { index, next, mix } = reduced
    ? { index: 1, next: 1, mix: 0 }
    : stageBlend(progress, tones.length);
  const tone = tones[index]!;
  const nextTone = tones[next]!;
  const shown = mix > 0.5 ? nextTone : tone;

  return (
    <section id="surface" ref={ref} className="relative h-[620vh] bg-metal-black">
      <div className="sticky top-0 grid h-[100svh] grid-rows-[auto_1fr_auto] overflow-hidden pb-10 pt-24 lg:pb-14 lg:pt-28">
        {/* the finish tints the room the object sits in */}
        <span
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(70% 55% at 50% 42%, ${shown.metal}22, transparent 72%)`,
            transition: "background-image 900ms linear",
          }}
        />

        <div className={cn(wrap, "relative")}>
          <StatementHeading
            lines={["One material."]}
            size="clamp(34px, 5vw, 86px)"
            className="text-center"
          />
        </div>

        <div className="relative grid place-items-center overflow-hidden">
          <MaterialObject
            tone={tone}
            nextTone={nextTone}
            mix={mix}
            rotate={-16 + progress * 32}
            highlight={(progress * 4) % 1}
            scale={0.92}
          />
        </div>

        <div className={cn(wrap, "relative")}>
          <p
            key={shown.id}
            className="text-center font-display text-3xl font-light uppercase tracking-[-0.02em] text-champagne lg:text-5xl"
            style={{ animation: "fade-in 700ms ease-out both" }}
          >
            {shown.name}
          </p>
          <p className="mx-auto mt-5 max-w-sm text-center text-sm leading-relaxed text-muted-foreground">
            {shown.note}
          </p>
          <ol className="mt-8 hidden justify-center gap-8 lg:flex">
            {tones.map((t, idx) => (
              <li
                key={t.id}
                className={cn(
                  "text-[0.58rem] uppercase tracking-[0.26em] transition-colors duration-700",
                  idx === (mix > 0.5 ? next : index)
                    ? "text-foreground"
                    : "text-muted-foreground/35",
                )}
              >
                {t.name}
              </li>
            ))}
          </ol>
          {/* mobile: a single travelling progress rule instead of a wrapped list */}
          <div className="mx-auto mt-8 h-px w-40 bg-border lg:hidden">
            <span
              className="block h-px bg-champagne"
              style={{ width: `${Math.round(progress * 100)}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── 03 · Colour chapter ─────────────────────────────────────── */

export function ColourChapter() {
  const { ref, progress, reduced } = useScrollProgress<HTMLDivElement>();
  const p = reduced ? 0.3 : progress;

  return (
    <section id="colour" ref={ref} className="relative h-[220vh] bg-metal-black">
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <img
          src={pvdImages.champagne}
          alt="Macro of champagne PVD coated stainless steel"
          loading="lazy"
          className="h-full w-full object-cover"
          style={{ transform: `scale(${1.05 + p * 0.22})` }}
        />
        <span className="absolute inset-0 bg-gradient-to-t from-metal-black via-metal-black/40 to-metal-black/70" />
        <div className={cn(wrap, "absolute inset-0 flex flex-col justify-center")}>
          <p className={meta} style={{ transform: `translateY(${(0.5 - p) * 60}px)` }}>
            Chapter 01 — Colour
          </p>
          <div style={{ transform: `translateY(${(0.5 - p) * 140}px)` }}>
            <StatementHeading
              lines={["Colour", "that belongs."]}
              size="clamp(50px, 9vw, 168px)"
              className="mt-6"
            />
          </div>
          <p
            className="mt-10 max-w-md text-base leading-relaxed text-foreground/75"
            style={{ transform: `translateY(${(0.5 - p) * 220}px)` }}
          >
            PVD bonds colour to the stainless-steel surface in a vacuum environment, creating a
            durable architectural finish.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ── 04 · Texture chapter ────────────────────────────────────── */

export function TextureChapter() {
  const { ref, progress, reduced } = useScrollProgress<HTMLDivElement>();
  const i = reduced ? 0 : stageIndex(progress, textures.length);
  const texture = textures[i]!;
  const tone = tones[1]!;

  return (
    <section id="texture" ref={ref} className="relative h-[420vh] bg-metal-black">
      <div className="sticky top-0 grid h-[100svh] grid-rows-[auto_1fr_auto] overflow-hidden py-16 lg:py-20">
        <div className={wrap}>
          <p className={meta}>Chapter 02 — Texture</p>
          <StatementHeading
            lines={["Four ways", "to hold light."]}
            size="clamp(36px, 5.6vw, 104px)"
            className="mt-5"
          />
        </div>

        <div className="grid place-items-center">
          <MaterialObject
            tone={tone}
            texture={texture}
            rotate={-12 + progress * 20}
            highlight={(progress * 5) % 1}
            scale={1.02}
          />
        </div>

        <div className={cn(wrap, "grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end")}>
          <div>
            <p
              key={texture.id}
              className="font-display text-4xl font-light uppercase tracking-[-0.02em] text-foreground lg:text-6xl"
              style={{ animation: "fade-in 700ms ease-out both" }}
            >
              {texture.name}
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {texture.behaviour}
            </p>
          </div>
          <ol className="flex flex-wrap gap-x-6 gap-y-2">
            {textures.map((t, idx) => (
              <li
                key={t.id}
                className={cn(
                  "text-[0.6rem] uppercase tracking-[0.24em] transition-colors duration-700",
                  idx === i ? "text-champagne" : "text-muted-foreground/45",
                )}
              >
                {t.name}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ── 05 · Macro → architecture ───────────────────────────────── */

export function MacroToArchitecture() {
  const { ref, progress, reduced } = useScrollProgress<HTMLDivElement>();
  const p = reduced ? 1 : progress;
  const scale = 3.2 - p * 2.2;

  return (
    <section ref={ref} className="relative h-[240vh] bg-metal-black">
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <img
          src={pvdImages.architecture}
          alt="Coated stainless steel surfaces in a completed interior"
          loading="lazy"
          className="h-full w-full object-cover"
          style={{ transform: `scale(${scale})` }}
        />
        <span className="absolute inset-0 bg-metal-black/35" />
        <div className={cn(wrap, "absolute inset-x-0 bottom-0 pb-16")}>
          <StatementHeading
            lines={["It starts", "at the surface."]}
            size="clamp(42px, 7vw, 132px)"
          />
        </div>
      </div>
    </section>
  );
}

/* ── 06 · Architecture reveal ────────────────────────────────── */

export function ArchitectureReveal() {
  return (
    <section id="architecture" className="relative isolate bg-metal-black">
      <div className="relative h-[100svh] w-full overflow-hidden">
        <img
          src={pvdImages.facade}
          alt="Architectural facade clad in bronze PVD stainless steel at dusk"
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <span className="absolute inset-0 bg-gradient-to-t from-metal-black via-transparent to-metal-black/60" />
        {architectureLabels.map((l, i) => (
          <div
            key={l.label}
            className="absolute"
            style={{
              left: `${l.x}%`,
              top: `${l.y}%`,
              animation: `fade-in 900ms cubic-bezier(0.16,1,0.3,1) ${i * 140}ms both`,
            }}
          >
            <span className="flex items-center gap-2">
              <span className="h-px w-6 bg-champagne" />
              <span className="text-[0.58rem] uppercase tracking-[0.26em] text-foreground/85">
                {l.label}
              </span>
            </span>
          </div>
        ))}
        <div className={cn(wrap, "absolute inset-x-0 bottom-0 pb-16")}>
          <StatementHeading lines={["And then", "it becomes space."]} />
        </div>
      </div>
    </section>
  );
}

/* ── 07 · Application chapters ───────────────────────────────── */

export function ApplicationChapters() {
  return (
    <section id="applications" className="bg-metal-black">
      <div className={cn(wrap, "py-24 lg:py-36")}>
        <p className={meta}>Chapter 03 — Applications</p>
        <StatementHeading lines={["Where it", "goes to work."]} size="clamp(50px, 9vw, 168px)" className="mt-6" />
      </div>

      {applications.map((a, i) => (
        <article
          key={a.index}
          className={cn(
            "grid items-center gap-10 border-t border-border/60 py-16 lg:min-h-[86svh] lg:grid-cols-2 lg:gap-20 lg:py-24",
            i % 2 === 1 && "lg:[&>figure]:order-last",
          )}
        >
          <figure className="lg:pl-14">
            <ClipReveal>
              <div className="group/img overflow-hidden">
                <img
                  src={a.image}
                  alt={a.alt}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[5/6] w-full scale-[1.04] object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/img:scale-100 lg:aspect-[4/5]"
                />
              </div>
            </ClipReveal>
          </figure>
          <div className="px-5 sm:px-8 lg:pr-14">
            <p className={meta}>{a.index} / {a.name}</p>
            <StatementHeading lines={[a.line]} size="clamp(34px, 5vw, 92px)" className="mt-6" />
            <Link to="/projects" className="pvd-link mt-10">
              See projects <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </article>
      ))}
    </section>
  );
}
