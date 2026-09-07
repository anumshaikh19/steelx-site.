import { useState } from "react";
import { Link } from "@tanstack/react-router";

import { Reveal } from "@/components/reveal";
import { ClipReveal, Magnetic, Parallax } from "@/components/motion";
import { finishes } from "@/data/finishes";
import { architecturalScope, capImages, capabilityIndex } from "@/data/capabilities";
import { cn } from "@/lib/utils";

const EASE = "cubic-bezier(0.16,1,0.3,1)";

/* ── 01 Hero ─────────────────────────────────────────────────── */
export function CapabilitiesHero({ onStart }: { onStart: () => void }) {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-metal-black">
      <Parallax amount={40} className="absolute inset-0">
        <img
          src={capImages.capHero}
          alt="Champagne PVD stainless steel clad hotel lobby"
          width={1920}
          height={1088}
          className="h-[112%] w-full object-cover grade-steel"
        />
      </Parallax>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-metal-black via-metal-black/45 to-metal-black/70" />
      <div className="pointer-events-none absolute inset-0 vignette film-grain" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-[1600px] flex-col justify-between px-5 py-24 sm:px-8 lg:px-10 lg:py-12">
        <div className="flex items-start justify-between gap-6 pt-6 text-[0.6rem] uppercase tracking-[0.34em] text-metal lg:pt-10">
          <span className="text-champagne">Capabilities</span>
          <span className="text-right">PVD / Fabrication / Installation</span>
        </div>

        <div className="max-w-[1200px]">
          <Reveal variant="text" as="p" className="text-[0.62rem] uppercase tracking-[0.4em] text-champagne">
            STEELX / Capabilities
          </Reveal>
          <h1
            className="mt-6 font-display uppercase leading-[0.84] tracking-[-0.02em] text-foreground"
            style={{ fontSize: "clamp(3.4rem, 11vw, 11.8rem)" }}
          >
            {["Surfaces", "Engineered", "For Space."].map((line, i) => (
              <ClipReveal key={line} delay={140 * i} className="block overflow-hidden">
                <span className="block">{line}</span>
              </ClipReveal>
            ))}
          </h1>
          <Reveal variant="up" delay={420} className="mt-9 max-w-2xl">
            <p className="text-sm leading-relaxed text-metal lg:text-base">
              From raw stainless steel to installed architectural surface, we engineer, finish,
              fabricate and deliver metal systems for architecture, interiors, hospitality, retail
              and commercial environments.
            </p>
          </Reveal>
          <Reveal variant="up" delay={540} className="mt-10 flex flex-wrap items-center gap-4">
            <Magnetic>
              <button
                type="button"
                onClick={onStart}
                data-cursor="OPEN"
                className="border border-champagne px-8 py-4 text-[0.65rem] uppercase tracking-[0.3em] text-champagne transition-colors duration-500 hover:bg-champagne hover:text-metal-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne"
              >
                Start a project →
              </button>
            </Magnetic>
            <Link
              to="/projects"
              className="border border-hairline px-8 py-4 text-[0.65rem] uppercase tracking-[0.3em] text-foreground/80 transition-colors duration-500 hover:border-foreground hover:text-foreground"
            >
              View projects →
            </Link>
          </Reveal>
        </div>

        <div className="flex items-end justify-between gap-6 text-[0.6rem] uppercase tracking-[0.32em] text-metal">
          <span>From sheet to installed surface.</span>
          <span className="animate-[float-y_3.2s_ease-in-out_infinite]">Scroll ↓</span>
        </div>
      </div>
    </section>
  );
}

/* ── 02 Capability index ─────────────────────────────────────── */
export function CapabilityIndex() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="index" className="border-t border-hairline bg-metal-black py-20 lg:py-32">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-4 border-b border-hairline pb-10 lg:flex-row lg:items-end lg:justify-between">
          <Reveal variant="up">
            <h2
              className="font-display uppercase leading-[0.9] tracking-[-0.01em] text-foreground"
              style={{ fontSize: "clamp(2.6rem, 7vw, 7rem)" }}
            >
              What we make
            </h2>
          </Reveal>
          <Reveal variant="up" delay={120}>
            <p className="max-w-sm text-sm text-metal">One material. Multiple architectural possibilities.</p>
          </Reveal>
        </div>

        <ul className="mt-2">
          {capabilityIndex.map((row, i) => (
            <li key={row.id}>
              <a
                href={`#cap-${row.id}`}
                data-cursor="VIEW"
                onMouseEnter={() => setActive(row.id)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(row.id)}
                onBlur={() => setActive(null)}
                className={cn(
                  "group relative grid grid-cols-1 items-center gap-3 overflow-hidden border-b border-hairline px-2 py-8 transition-[padding,background-color] duration-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne lg:grid-cols-[6rem_1fr_1fr_3rem] lg:gap-8 lg:py-10 lg:hover:bg-graphite/60 lg:hover:py-14",
                )}
                style={{ transitionTimingFunction: EASE }}
              >
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(105deg,transparent,rgba(255,255,255,0.09),transparent)] transition-transform duration-[1400ms] ease-out group-hover:translate-x-full" />
                <span className="relative text-[0.62rem] tabular-nums tracking-[0.34em] text-champagne">
                  {row.number}
                </span>
                <span
                  className="relative font-display uppercase leading-none text-foreground transition-[font-size,color] duration-700"
                  style={{
                    fontSize: active === row.id ? "clamp(2.2rem,4.6vw,4.4rem)" : "clamp(1.9rem,3.6vw,3.4rem)",
                    transitionTimingFunction: EASE,
                  }}
                >
                  {row.title}
                </span>
                <span className="relative text-sm text-metal">{row.text}</span>
                <span className="relative hidden justify-self-end text-metal transition-transform duration-700 group-hover:translate-x-2 group-hover:text-champagne lg:block">
                  →
                </span>

                <span
                  className={cn(
                    "pointer-events-none absolute right-24 top-1/2 hidden h-40 w-64 -translate-y-1/2 overflow-hidden border border-hairline transition-all duration-700 xl:block",
                    active === row.id ? "opacity-100 scale-100" : "opacity-0 scale-95",
                  )}
                  style={{ transitionTimingFunction: EASE }}
                  aria-hidden="true"
                >
                  <img
                    src={row.image}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover grade-steel"
                  />
                </span>
              </a>
              <span className="sr-only">{i + 1}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ── 03 Introduction ─────────────────────────────────────────── */
export function CapabilitiesIntro() {
  return (
    <section className="bg-[#F3F1EC] py-24 text-metal-black lg:py-40">
      <div className="mx-auto grid max-w-[1600px] gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:px-10">
        <div className="lg:col-span-7">
          <Reveal variant="up">
            <h2
              className="font-display uppercase leading-[0.88] tracking-[-0.015em]"
              style={{ fontSize: "clamp(2.6rem, 7vw, 7.2rem)" }}
            >
              We don&apos;t just
              <br />
              coat metal.
            </h2>
          </Reveal>
          <Reveal variant="up" delay={140}>
            <h3
              className="mt-8 font-display uppercase leading-[0.9] tracking-[-0.015em] text-[#765A43]"
              style={{ fontSize: "clamp(1.9rem, 4.4vw, 4.4rem)" }}
            >
              We engineer
              <br />
              the finished surface.
            </h3>
          </Reveal>
        </div>
        <div className="lg:col-span-4 lg:col-start-9">
          <Reveal variant="up" delay={220}>
            <p className="border-t border-metal-black/20 pt-8 text-base leading-relaxed text-metal-black/70">
              Every project is treated as a complete architectural system — from substrate and
              preparation to colour, fabrication, inspection and installation.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ── 04 PVD coating ──────────────────────────────────────────── */
export function PvdCoating() {
  const [active, setActive] = useState(finishes[0]!);

  return (
    <section
      id="cap-pvd"
      className="scroll-mt-24 border-t border-hairline bg-metal-black py-20 transition-colors duration-1000 lg:py-32"
    >
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-10">
        <SectionHead number="01" title="PVD Coating" />
        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <ClipReveal className="relative overflow-hidden border border-hairline">
              <div className="relative aspect-[16/11]">
                <img
                  src={capImages.macroFinish}
                  alt="Macro detail of PVD coated stainless steel"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover grade-steel"
                />
                <div
                  key={active.id}
                  className="absolute inset-0 opacity-70 mix-blend-overlay animate-[fade-in_900ms_ease-out]"
                  style={{ background: active.swatch }}
                  aria-hidden="true"
                />
                <div className="pointer-events-none absolute inset-0 vignette" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                  <span
                    key={`${active.id}-name`}
                    className="font-display text-3xl uppercase text-foreground animate-[fade-in_700ms_ease-out] lg:text-5xl"
                  >
                    {active.name}
                  </span>
                  <span className="text-[0.6rem] uppercase tracking-[0.3em] text-metal">
                    {active.family}
                  </span>
                </div>
              </div>
            </ClipReveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal variant="up">
              <p className="text-base leading-relaxed text-metal">
                Colour is bonded to the surface in vacuum, creating a durable architectural finish
                without hiding the character of the stainless steel beneath.
              </p>
            </Reveal>
            <p className="mt-10 text-[0.6rem] uppercase tracking-[0.32em] text-champagne">
              Finish library
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {finishes.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onMouseEnter={() => setActive(f)}
                  onFocus={() => setActive(f)}
                  onClick={() => setActive(f)}
                  aria-pressed={active.id === f.id}
                  data-cursor="EXPLORE"
                  className={cn(
                    "group flex items-center gap-3 border px-4 py-3 text-[0.6rem] uppercase tracking-[0.24em] transition-all duration-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne",
                    active.id === f.id
                      ? "border-champagne text-champagne"
                      : "border-hairline text-metal hover:border-metal hover:text-foreground",
                  )}
                >
                  <span className="h-4 w-4 rounded-full" style={{ background: f.swatch }} />
                  {f.name}
                </button>
              ))}
            </div>
            <p key={active.id} className="mt-8 max-w-md text-sm leading-relaxed text-metal animate-[fade-in_600ms_ease-out]">
              {active.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── 05 Architectural surfaces ───────────────────────────────── */
export function ArchitecturalSurfaces() {
  return (
    <section id="cap-surfaces" className="scroll-mt-24 border-t border-hairline bg-graphite">
      <div className="grid lg:grid-cols-2">
        <div className="relative h-[60vh] overflow-hidden lg:h-auto lg:min-h-[86vh]">
          <Parallax amount={50} className="absolute inset-0">
            <img
              src={capImages.facadeNight}
              alt="PVD stainless steel facade lit at night"
              loading="lazy"
              className="h-[114%] w-full object-cover grade-steel"
            />
          </Parallax>
          <div className="pointer-events-none absolute inset-0 vignette" />
        </div>
        <div className="flex items-center px-5 py-20 sm:px-8 lg:px-16 lg:py-32">
          <div className="max-w-xl">
            <SectionHead number="02" title={"Architectural\nSurfaces"} />
            <Reveal variant="up" delay={120}>
              <p className="mt-8 text-base leading-relaxed text-metal">
                Panels, wall cladding, ceilings, column casings and facade elements engineered to
                become part of the architecture.
              </p>
            </Reveal>
            <ul className="mt-10 border-t border-hairline">
              {architecturalScope.map((item, i) => (
                <Reveal key={item} variant="row" delay={60 * i} as="li">
                  <span className="flex items-center justify-between border-b border-hairline py-4 text-sm uppercase tracking-[0.16em] text-foreground/85">
                    {item}
                    <span className="text-[0.6rem] tabular-nums text-champagne">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </span>
                </Reveal>
              ))}
            </ul>
            <Link
              to="/projects"
              className="mt-10 inline-block border border-hairline px-7 py-4 text-[0.62rem] uppercase tracking-[0.3em] text-foreground/85 transition-colors duration-500 hover:border-champagne hover:text-champagne"
            >
              Explore projects →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── shared heading ──────────────────────────────────────────── */
export function SectionHead({ number, title }: { number: string; title: string }) {
  return (
    <div>
      <Reveal variant="text" as="p" className="text-[0.62rem] tracking-[0.38em] text-champagne">
        {number}
      </Reveal>
      <Reveal variant="up" delay={80}>
        <h2
          className="mt-4 whitespace-pre-line font-display uppercase leading-[0.9] tracking-[-0.015em] text-foreground"
          style={{ fontSize: "clamp(2.2rem, 5.6vw, 5.6rem)" }}
        >
          {title}
        </h2>
      </Reveal>
    </div>
  );
}
