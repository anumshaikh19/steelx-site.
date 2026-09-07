import { useState } from "react";
import { Link } from "@tanstack/react-router";

import { Reveal } from "@/components/reveal";
import { ClipReveal, Counter, Magnetic, Parallax, StickyStory } from "@/components/motion";
import { finishes, surfaces } from "@/data/finishes";
import { studioStats } from "@/data/studio";
import {
  applications,
  capImages,
  controlPoints,
  principles,
  selectedProjects,
  sheetToSurface,
} from "@/data/capabilities";
import { cn } from "@/lib/utils";

/* ── 11 From sheet to surface ────────────────────────────────── */
export function SheetToSurface() {
  return (
    <section className="border-t border-hairline bg-metal-black py-20 lg:py-32">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-10">
        <Reveal variant="up">
          <h2
            className="font-display uppercase leading-[0.88] tracking-[-0.015em] text-foreground"
            style={{ fontSize: "clamp(2.6rem, 7vw, 7rem)" }}
          >
            From sheet
            <br />
            to surface.
          </h2>
        </Reveal>
        <div className="mt-12">
          <StickyStory steps={sheetToSurface} />
        </div>
        <div className="mt-10 grid gap-6 lg:hidden">
          {sheetToSurface.map((s) => (
            <ClipReveal key={s.id} className="overflow-hidden border border-hairline">
              <img src={s.image} alt={s.alt} loading="lazy" className="aspect-[4/3] w-full object-cover grade-steel" />
            </ClipReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── 12 Material library ─────────────────────────────────────── */
export function MaterialLibrary() {
  const [finish, setFinish] = useState(finishes[0]!);
  const [surface, setSurface] = useState(surfaces[0]!);

  return (
    <section className="border-t border-hairline bg-graphite py-20 lg:py-32">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-10">
        <Reveal variant="up">
          <h2
            className="font-display uppercase leading-[0.9] tracking-[-0.015em] text-foreground"
            style={{ fontSize: "clamp(2.2rem, 6vw, 6rem)" }}
          >
            Nine tones.
            <br />
            One control sample.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <div
              data-cursor="EXPLORE"
              className="relative aspect-[16/10] overflow-hidden border border-hairline metal-grain"
            >
              <img
                src={capImages.swatches}
                alt="Stainless steel sample panel in multiple PVD finishes"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover grade-steel"
              />
              <div
                key={finish.id}
                className="absolute inset-0 opacity-75 mix-blend-overlay animate-[fade-in_900ms_ease-out]"
                style={{ background: finish.swatch }}
                aria-hidden="true"
              />
              <div className="pointer-events-none absolute inset-0 sheen-sweep" />
              <div className="pointer-events-none absolute inset-0 vignette" />
            </div>

            <dl className="mt-6 grid gap-px border-t border-hairline sm:grid-cols-3">
              <Spec label="Finish" value={`${finish.name} PVD`} />
              <Spec label="Surface" value={surface.name} />
              <Spec label="Application" value="Architectural" />
            </dl>
          </div>

          <div className="lg:col-span-5">
            <p className="text-[0.6rem] uppercase tracking-[0.32em] text-champagne">Tone</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {finishes.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onMouseEnter={() => setFinish(f)}
                  onFocus={() => setFinish(f)}
                  onClick={() => setFinish(f)}
                  aria-pressed={finish.id === f.id}
                  className={cn(
                    "flex items-center gap-3 border px-4 py-3 text-[0.58rem] uppercase tracking-[0.24em] transition-all duration-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne",
                    finish.id === f.id ? "border-champagne text-champagne" : "border-hairline text-metal hover:text-foreground",
                  )}
                >
                  <span className="h-4 w-4 rounded-full" style={{ background: f.swatch }} />
                  {f.name}
                </button>
              ))}
            </div>

            <p className="mt-10 text-[0.6rem] uppercase tracking-[0.32em] text-champagne">Surface</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {surfaces.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onMouseEnter={() => setSurface(s)}
                  onFocus={() => setSurface(s)}
                  onClick={() => setSurface(s)}
                  aria-pressed={surface.id === s.id}
                  className={cn(
                    "border px-4 py-3 text-[0.58rem] uppercase tracking-[0.24em] transition-all duration-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne",
                    surface.id === s.id ? "border-champagne text-champagne" : "border-hairline text-metal hover:text-foreground",
                  )}
                >
                  {s.name}
                </button>
              ))}
            </div>

            <p className="mt-8 text-sm leading-relaxed text-metal">{finish.note}</p>
            <p className="mt-3 text-sm leading-relaxed text-metal">{surface.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b border-r border-hairline p-5">
      <dt className="text-[0.56rem] uppercase tracking-[0.3em] text-metal">{label}</dt>
      <dd className="mt-2 text-sm uppercase tracking-[0.14em] text-foreground">{value}</dd>
    </div>
  );
}

/* ── 13 Applications ─────────────────────────────────────────── */
export function Applications() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="relative border-t border-hairline bg-metal-black py-20 lg:py-32">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-10">
        <Reveal variant="up">
          <h2
            className="font-display uppercase leading-[0.9] tracking-[-0.015em] text-foreground"
            style={{ fontSize: "clamp(2.2rem, 6vw, 6rem)" }}
          >
            Where we work
          </h2>
        </Reveal>

        <ul className="mt-12 border-t border-hairline">
          {applications.map((a) => (
            <li key={a.id}>
              <Link
                to="/projects/$slug"
                params={{ slug: a.slug }}
                data-cursor="VIEW"
                onMouseEnter={() => setActive(a.id)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(a.id)}
                onBlur={() => setActive(null)}
                className="group relative flex flex-col gap-2 overflow-hidden border-b border-hairline py-7 transition-[padding,background-color] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne lg:flex-row lg:items-baseline lg:justify-between lg:py-9 lg:hover:bg-graphite/60 lg:hover:pl-6"
              >
                <span
                  className="font-display uppercase leading-none text-foreground transition-[font-size] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{ fontSize: active === a.id ? "clamp(2rem,4.6vw,4.6rem)" : "clamp(1.8rem,3.8vw,3.6rem)" }}
                >
                  {a.label}
                </span>
                <span className="text-[0.62rem] uppercase tracking-[0.28em] text-metal transition-colors group-hover:text-champagne">
                  {a.project} / {a.place} →
                </span>
                <span
                  className={cn(
                    "pointer-events-none absolute right-[26%] top-1/2 hidden h-44 w-72 -translate-y-1/2 overflow-hidden border border-hairline transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] xl:block",
                    active === a.id ? "opacity-100 scale-100" : "opacity-0 scale-95",
                  )}
                  aria-hidden="true"
                >
                  <img src={a.image} alt="" loading="lazy" className="h-full w-full object-cover grade-steel" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ── 14 Selected projects ────────────────────────────────────── */
export function CapabilityInPractice() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="border-t border-hairline bg-graphite py-20 lg:py-32">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-10">
        <Reveal variant="up">
          <h2
            className="font-display uppercase leading-[0.9] tracking-[-0.015em] text-foreground"
            style={{ fontSize: "clamp(2.2rem, 6vw, 6rem)" }}
          >
            Capability in practice.
          </h2>
        </Reveal>

        <ul className="mt-12 border-t border-hairline">
          {selectedProjects.map((p) => (
            <li key={p.slug}>
              <Link
                to="/projects/$slug"
                params={{ slug: p.slug }}
                data-cursor="VIEW"
                onMouseEnter={() => setActive(p.slug)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(p.slug)}
                onBlur={() => setActive(null)}
                className="group relative grid grid-cols-1 gap-2 overflow-hidden border-b border-hairline py-7 transition-[padding] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne lg:grid-cols-[5rem_1fr_1fr_auto] lg:items-center lg:gap-8 lg:py-10 lg:hover:pl-5"
              >
                <span className="text-[0.6rem] tabular-nums tracking-[0.32em] text-champagne">{p.number}</span>
                <span className="font-display text-2xl uppercase leading-none text-foreground lg:text-4xl">
                  {p.title}
                </span>
                <span className="text-[0.62rem] uppercase tracking-[0.26em] text-metal">{p.place}</span>
                <span className="text-[0.62rem] uppercase tracking-[0.26em] text-metal group-hover:text-champagne">
                  {p.spec} →
                </span>
                <span
                  className={cn(
                    "pointer-events-none absolute right-8 top-1/2 hidden h-48 w-72 -translate-y-1/2 overflow-hidden border border-hairline transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] xl:block",
                    active === p.slug ? "opacity-100 scale-100" : "opacity-0 scale-95",
                  )}
                  aria-hidden="true"
                >
                  <img src={p.image} alt="" loading="lazy" className="h-full w-full object-cover grade-steel" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ── 15 Quality control ──────────────────────────────────────── */
export function QualityControl() {
  return (
    <section className="border-t border-hairline bg-metal-black py-20 lg:py-32">
      <div className="mx-auto grid max-w-[1600px] gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-5">
          <Reveal variant="up">
            <h2
              className="font-display uppercase leading-[0.9] tracking-[-0.015em] text-foreground"
              style={{ fontSize: "clamp(2.2rem, 5.4vw, 5.4rem)" }}
            >
              Controlled
              <br />
              at every stage.
            </h2>
          </Reveal>
          <Reveal variant="up" delay={140}>
            <p className="mt-8 max-w-md text-base leading-relaxed text-metal">
              Every project is controlled against an agreed sample — from colour and texture to
              fabrication and final installation.
            </p>
          </Reveal>
          <ClipReveal delay={200} className="mt-10 overflow-hidden border border-hairline">
            <div className="relative">
              <img
                src={capImages.inspection}
                alt="Control sample board of PVD finishes under inspection"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover grade-steel"
              />
              <div className="absolute inset-x-0 bottom-0 flex gap-1 p-4">
                {finishes.slice(0, 6).map((f) => (
                  <span key={f.id} className="h-8 flex-1 border border-hairline" style={{ background: f.swatch }} />
                ))}
              </div>
            </div>
          </ClipReveal>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <ul className="border-t border-hairline">
            {controlPoints.map((c, i) => (
              <Reveal key={c.id} variant="row" delay={60 * i} as="li">
                <div className="flex items-start justify-between gap-8 border-b border-hairline py-6">
                  <span className="font-display text-xl uppercase text-foreground lg:text-3xl">{c.label}</span>
                  <span className="max-w-xs text-right text-sm leading-relaxed text-metal">{c.note}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ── 16 Stats ────────────────────────────────────────────────── */
export function CapabilityStats() {
  return (
    <section className="border-t border-hairline bg-[#080808] py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1600px] gap-px px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-10">
        {studioStats.slice(0, 4).map((s, i) => (
          <Reveal key={s.label} variant="up" delay={80 * i}>
            <div className="border-b border-r border-hairline py-10 pr-6">
              <p
                className="font-display leading-none text-foreground"
                style={{ fontSize: "clamp(3rem, 6vw, 6.4rem)" }}
              >
                <Counter to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-4 text-[0.6rem] uppercase tracking-[0.3em] text-metal">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ── 17 Why STEELX ───────────────────────────────────────────── */
export function WhySteelx() {
  return (
    <section className="border-t border-hairline bg-graphite py-20 lg:py-32">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-10">
        <Reveal variant="up">
          <h2
            className="font-display uppercase leading-[0.9] tracking-[-0.015em] text-foreground"
            style={{ fontSize: "clamp(2.2rem, 6vw, 6rem)" }}
          >
            One team.
            <br />
            One controlled surface.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-px border-t border-hairline sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p, i) => (
            <Reveal key={p.number} variant="up" delay={80 * i}>
              <div className="h-full border-b border-r border-hairline p-6 lg:p-8">
                <p className="text-[0.6rem] tabular-nums tracking-[0.32em] text-champagne">{p.number}</p>
                <p className="mt-5 font-display text-2xl uppercase leading-tight text-foreground">{p.title}</p>
                <p className="mt-4 text-sm leading-relaxed text-metal">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── 18 Final CTA ────────────────────────────────────────────── */
export function CapabilitiesCTA({ onStart }: { onStart: () => void }) {
  return (
    <section className="relative overflow-hidden border-t border-hairline">
      <Parallax amount={40} className="absolute inset-0">
        <img
          src={capImages.lobby}
          alt="Completed STEELX PVD stainless steel installation"
          loading="lazy"
          className="h-[112%] w-full object-cover grade-steel"
        />
      </Parallax>
      <div className="absolute inset-0 bg-metal-black/76" />
      <div className="pointer-events-none absolute inset-0 vignette film-grain" />

      <div className="relative mx-auto flex min-h-[92svh] max-w-[1600px] flex-col justify-center px-5 py-24 sm:px-8 lg:px-10">
        <Reveal variant="up">
          <h2
            className="font-display uppercase leading-[0.86] tracking-[-0.02em] text-foreground"
            style={{ fontSize: "clamp(2.8rem, 8vw, 8.4rem)" }}
          >
            Have a surface
            <br />
            in mind?
          </h2>
        </Reveal>
        <Reveal variant="up" delay={140}>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-metal">
            Send us a drawing, finish reference or photograph. We&apos;ll help translate the idea
            into a material specification.
          </p>
        </Reveal>
        <Reveal variant="up" delay={240} className="mt-12 flex flex-wrap items-center gap-4">
          <Magnetic>
            <button
              type="button"
              onClick={onStart}
              data-cursor="OPEN"
              className="border border-champagne px-9 py-5 text-[0.65rem] uppercase tracking-[0.3em] text-champagne transition-colors duration-500 hover:bg-champagne hover:text-metal-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne"
            >
              Start a project →
            </button>
          </Magnetic>
          <Link
            to="/projects"
            className="border border-hairline px-9 py-5 text-[0.65rem] uppercase tracking-[0.3em] text-foreground/85 transition-colors duration-500 hover:border-foreground"
          >
            View projects →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
