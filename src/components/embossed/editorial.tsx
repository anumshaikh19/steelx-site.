import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { HlSlide } from "@/components/hairline/primitives";
import {
  careRules,
  colourNote,
  embossedApplications,
  embossedColours,
  embossedFabrication,
  embossedImages as img,
  embossedLight,
  embossedPatterns,
  embossedSpecs,
  embossedVsFlat,
  fabricationNote,
  fabricationServices,
  patternNote,
  relatedFinishes,
  whyEmbossed,
} from "@/data/products/embossed";

const EASE = "cubic-bezier(0.16,1,0.3,1)";

function Wrap({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-14", className)}>{children}</div>;
}

function Label({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn("text-[0.6rem] uppercase tracking-[0.36em] text-muted-foreground", className)}>{children}</p>
  );
}

function Display({
  children,
  className,
  as: As = "h2",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "p";
}) {
  return (
    <As className={cn("font-display font-light uppercase leading-[0.95] tracking-[-0.02em] text-foreground", className)}>
      {children}
    </As>
  );
}

/* ------------------------------------------------------------------ 01 hero */

export function EmHero({ onSample }: { onSample: () => void }) {
  return (
    <section className="relative isolate min-h-[92svh] w-full overflow-hidden lg:min-h-screen">
      <img
        src={img.hero}
        alt="Contemporary hotel lobby with a feature wall of embossed stainless steel panels in raking daylight"
        fetchPriority="high"
        decoding="async"
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <span
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_top,rgba(12,11,9,0.84),rgba(12,11,9,0.24)_48%,rgba(12,11,9,0.34))]"
      />
      <div className="relative mx-auto flex min-h-[92svh] w-full max-w-[1500px] flex-col justify-end px-5 pb-14 pt-32 sm:px-8 lg:min-h-screen lg:px-14 lg:pb-20">
        <p className="text-[0.6rem] uppercase tracking-[0.4em] text-white/70">Textured stainless steel</p>
        <h1 className="mt-8 font-display text-[3.2rem] font-light uppercase leading-[0.86] tracking-[-0.03em] text-white sm:text-[6.2rem] lg:text-[10rem]">
          Embossed
          <span className="sr-only"> Stainless Steel Sheets</span>
        </h1>
        <p className="mt-6 text-[0.72rem] uppercase tracking-[0.42em] text-white/80 sm:text-sm">
          Depth you can read.
        </p>
        <div className="mt-12 flex flex-col gap-9 border-t border-white/25 pt-8 lg:flex-row lg:items-end lg:justify-between">
          <p className="max-w-xl text-sm leading-relaxed text-white/75 lg:text-base">
            A stainless-steel surface rolled into a repeating three-dimensional relief, so the pattern
            is formed in the metal itself and shadow becomes part of the architecture.
          </p>
          <div className="flex flex-wrap items-center gap-8">
            <a
              href="#material"
              className="group inline-flex items-center gap-3 border border-white/60 px-8 py-4 text-[0.62rem] uppercase tracking-[0.3em] text-white transition-colors duration-500 hover:bg-white hover:text-[#141311]"
            >
              Explore embossed
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1" />
            </a>
            <button
              type="button"
              onClick={onSample}
              className="text-[0.62rem] uppercase tracking-[0.3em] text-white/75 underline-offset-8 transition-colors hover:text-white hover:underline"
            >
              Request a sample
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- 02 statement */

export function EmStatement() {
  return (
    <section id="material" className="py-24 lg:py-40">
      <Wrap>
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="order-2 lg:order-1 lg:col-span-5">
            <HlSlide from="left">
              <img
                src={img.statement}
                alt="Embossed stainless steel panel beside a plaster wall and oak reveal, grazing light showing the relief"
                loading="lazy"
                decoding="async"
                width={1200}
                height={1504}
                className="block aspect-[4/5] w-full object-cover"
              />
              <Label className="mt-5">Panel detail — natural silver</Label>
            </HlSlide>
          </div>
          <div className="order-1 lg:order-2 lg:col-span-6 lg:col-start-7">
            <HlSlide from="up">
              <Display className="text-[2.4rem] sm:text-[3.6rem] lg:text-[4.6rem]">
                Pattern
                <br />
                pressed into
                <br />
                the metal.
              </Display>
              <p className="mt-12 max-w-md text-sm leading-[1.9] text-muted-foreground">
                Embossed sheets are formed between patterned rollers, lifting the surface into a
                repeating relief. Unlike printed or etched pattern, the geometry is physical — it
                casts real shadow and changes with the position of the light.
              </p>
            </HlSlide>
          </div>
        </div>
      </Wrap>
    </section>
  );
}

/* ------------------------------------------------------------- 03 signature */

export function EmSignature() {
  return (
    <section className="relative isolate w-full overflow-hidden">
      <img
        src={img.signature}
        alt="Full-width embossed stainless steel sheet under strong directional light"
        loading="lazy"
        decoding="async"
        width={1920}
        height={912}
        className="block h-[52svh] w-full object-cover lg:h-[78svh]"
      />
      <span aria-hidden className="absolute inset-0 bg-[rgba(10,10,9,0.3)]" />
      <div className="absolute inset-0 flex items-end">
        <Wrap className="pb-12 lg:pb-20">
          <Display className="text-[1.7rem] text-white sm:text-[2.6rem] lg:text-[3.4rem]">
            Real depth.
            <br />
            Real shadow.
          </Display>
        </Wrap>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------- 04 why */

export function EmWhy() {
  return (
    <section className="py-24 lg:py-36">
      <Wrap>
        <div className="grid gap-14 border-t border-border pt-14 md:grid-cols-3 lg:gap-20">
          {whyEmbossed.map((item, index) => (
            <HlSlide key={item.index} from="up" delay={index * 110}>
              <p className="text-[0.6rem] tracking-[0.3em] text-muted-foreground">{item.index}</p>
              <p className="mt-8 text-[0.78rem] uppercase tracking-[0.28em] text-foreground">{item.title}</p>
              <p className="mt-5 max-w-xs text-sm leading-[1.9] text-muted-foreground">{item.copy}</p>
            </HlSlide>
          ))}
        </div>
      </Wrap>
    </section>
  );
}

/* ----------------------------------------------------------------- 05 macro */

export function EmMacro() {
  return (
    <section className="py-24 lg:py-36">
      <Wrap>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-4">
            <Display className="text-[2rem] sm:text-[2.8rem]">Up close.</Display>
            <p className="mt-8 max-w-sm text-sm leading-[1.9] text-muted-foreground">
              At macro scale the relief reads as facets — bright faces, dark recesses, and a clean
              line where the two meet.
            </p>
          </div>
          <div className="lg:col-span-8">
            <img
              src={img.macro}
              alt="Extreme close-up of embossed stainless steel relief with bright faces and deep shadow"
              loading="lazy"
              decoding="async"
              width={1920}
              height={1024}
              className="block aspect-[16/9] w-full object-cover"
            />
          </div>
        </div>
      </Wrap>
    </section>
  );
}

/* -------------------------------------------------------------- 06 patterns */

export function EmPatterns() {
  const [active, setActive] = useState(0);
  const current = embossedPatterns[active]!;

  return (
    <section className="py-24 lg:py-36">
      <Wrap>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Display className="text-[2rem] sm:text-[2.8rem]">Choose the repeat.</Display>
          <p className="max-w-sm text-sm leading-[1.9] text-muted-foreground lg:text-right">
            Pattern sets the scale of the surface. The same colour reads very differently across a
            tight grid and a flowing wave.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-8">
          {embossedPatterns.map((pattern, index) => (
            <button
              key={pattern.id}
              type="button"
              onClick={() => setActive(index)}
              aria-pressed={index === active}
              className={cn(
                "border-b pb-2 text-[0.62rem] uppercase tracking-[0.3em] transition-colors duration-500",
                index === active
                  ? "border-foreground text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground",
              )}
            >
              {pattern.name}
            </button>
          ))}
        </div>

        <div className="relative mt-10 overflow-hidden">
          {embossedPatterns.map((pattern, index) => (
            <img
              key={pattern.id}
              src={pattern.image}
              alt={pattern.alt}
              loading="lazy"
              decoding="async"
              width={1536}
              height={1024}
              className={cn(
                "block aspect-[3/2] w-full object-cover transition-opacity duration-[1200ms]",
                index === active ? "opacity-100" : "absolute inset-0 opacity-0",
              )}
              style={{ transitionTimingFunction: EASE }}
            />
          ))}
        </div>

        <div className="mt-8 grid gap-6 border-t border-border pt-8 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <Label>{current.depth}</Label>
            {!current.confirmed ? (
              <p className="mt-3 text-[0.6rem] uppercase tracking-[0.24em] text-muted-foreground">
                Subject to production
              </p>
            ) : null}
          </div>
          <p className="max-w-2xl text-sm leading-[1.9] text-muted-foreground lg:col-span-9">{current.note}</p>
        </div>

        <p className="mt-10 max-w-2xl text-[0.7rem] leading-relaxed text-muted-foreground">{patternNote}</p>
      </Wrap>
    </section>
  );
}

/* ----------------------------------------------------------------- 07 light */

export function EmLight() {
  const [active, setActive] = useState(0);
  const current = embossedLight[active]!;

  return (
    <section className="hl-ed-dark py-24 lg:py-36">
      <Wrap>
        <Label className="text-champagne">The same panel, three lights</Label>
        <Display className="mt-8 text-[2rem] text-foreground sm:text-[3rem]">
          Light writes the pattern.
        </Display>

        <div className="mt-14 grid gap-10 lg:grid-cols-12">
          <div className="flex flex-row gap-8 lg:col-span-3 lg:flex-col lg:gap-6">
            {embossedLight.map((state, index) => (
              <button
                key={state.id}
                type="button"
                onClick={() => setActive(index)}
                aria-pressed={index === active}
                className={cn(
                  "border-b pb-2 text-left text-[0.62rem] uppercase tracking-[0.28em] transition-colors duration-500",
                  index === active
                    ? "border-champagne text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground",
                )}
              >
                {state.name}
              </button>
            ))}
          </div>

          <div className="lg:col-span-9">
            <div className="relative overflow-hidden">
              {embossedLight.map((state, index) => (
                <img
                  key={state.id}
                  src={state.image}
                  alt={state.alt}
                  loading="lazy"
                  decoding="async"
                  width={1536}
                  height={864}
                  className={cn(
                    "block aspect-[16/9] w-full object-cover transition-opacity duration-[1400ms]",
                    index === active ? "opacity-100" : "absolute inset-0 opacity-0",
                  )}
                  style={{ transitionTimingFunction: EASE }}
                />
              ))}
            </div>
            <p className="mt-6 max-w-xl text-sm leading-[1.9] text-muted-foreground">{current.copy}</p>
          </div>
        </div>
      </Wrap>
    </section>
  );
}

/* ---------------------------------------------------------- 08 applications */

export function EmApplications() {
  return (
    <section className="py-24 lg:py-36">
      <Wrap>
        <Label>Where it is used</Label>
        <Display className="mt-8 text-[2rem] sm:text-[3rem]">Surfaces people stand next to.</Display>
      </Wrap>

      <Wrap className="mt-16">
        <div className="grid gap-y-16 lg:grid-cols-12 lg:gap-x-10">
          {embossedApplications.map((app, index) => (
            <figure key={app.id} className={cn("m-0", app.full ? "lg:col-span-12" : "lg:col-span-6")}>
              <HlSlide from={index % 2 === 0 ? "left" : "right"}>
                <img
                  src={app.image}
                  alt={app.alt}
                  loading="lazy"
                  decoding="async"
                  width={1536}
                  height={1024}
                  className={cn("block w-full object-cover", app.full ? "aspect-[21/9]" : "aspect-[3/2]")}
                />
                <figcaption className="mt-5 flex flex-col gap-3 border-t border-border pt-5 sm:flex-row sm:items-start sm:justify-between">
                  <span className="text-[0.62rem] uppercase tracking-[0.3em] text-foreground">{app.name}</span>
                  <span className="max-w-md text-sm leading-[1.9] text-muted-foreground sm:text-right">
                    {app.copy}
                  </span>
                </figcaption>
              </HlSlide>
            </figure>
          ))}
        </div>
      </Wrap>
    </section>
  );
}

/* ---------------------------------------------------------------- 09 colour */

export function EmColour() {
  return (
    <section className="py-24 lg:py-36">
      <Wrap>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Display className="text-[2rem] sm:text-[3rem]">Colour over relief.</Display>
          <p className="max-w-sm text-sm leading-[1.9] text-muted-foreground lg:text-right">
            PVD colour is applied after forming, so the pattern stays visible through the tone.
          </p>
        </div>
      </Wrap>

      <div className="mt-14 space-y-10">
        {embossedColours.map((colour, index) => (
          <HlSlide key={colour.id} from={index % 2 === 0 ? "left" : "right"}>
            <Wrap>
              <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-8">
                  <img
                    src={colour.image}
                    alt={colour.alt}
                    loading="lazy"
                    decoding="async"
                    width={1920}
                    height={640}
                    className="block aspect-[3/1] w-full object-cover"
                  />
                </div>
                <div className="lg:col-span-4">
                  <p className="text-[0.7rem] uppercase tracking-[0.3em] text-foreground">{colour.name}</p>
                  <Label className="mt-3">{colour.coating}</Label>
                  <p className="mt-4 max-w-xs text-sm leading-[1.9] text-muted-foreground">{colour.note}</p>
                </div>
              </div>
            </Wrap>
          </HlSlide>
        ))}
      </div>

      <Wrap className="mt-14">
        <p className="max-w-2xl text-[0.7rem] leading-relaxed text-muted-foreground">{colourNote}</p>
      </Wrap>
    </section>
  );
}

/* ------------------------------------------------------------ 10 full sheet */

export function EmFullSheet() {
  return (
    <section className="py-24 lg:py-36">
      <Wrap>
        <Display className="text-[2rem] sm:text-[3rem]">The material, at full scale.</Display>
        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-5">
            <img
              src={img.fullSheet}
              alt="Full embossed stainless steel sheet standing upright in a white studio"
              loading="lazy"
              decoding="async"
              width={1024}
              height={1408}
              className="block aspect-[3/4] w-full object-cover"
            />
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="max-w-md text-sm leading-[1.9] text-muted-foreground">
              Panels are set out sheet by sheet so the repeat lands where it should on the elevation.
              Sizes, thickness and pattern depth are confirmed together for each project.
            </p>
          </div>
        </div>
      </Wrap>
    </section>
  );
}

/* --------------------------------------------------------------- 11 details */

export function EmDetails() {
  return (
    <section className="py-24 lg:py-36">
      <Wrap>
        <Label>Specification</Label>
        <div className="mt-12 grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <img
              src={img.fabrication}
              alt="Folded edge and welded corner of an embossed stainless steel panel"
              loading="lazy"
              decoding="async"
              width={1600}
              height={1008}
              className="block aspect-[4/3] w-full object-cover"
            />
          </div>
          <dl className="lg:col-span-7">
            {embossedSpecs.map((spec) => (
              <div
                key={spec.label}
                className="grid gap-2 border-b border-border py-5 sm:grid-cols-[10rem_1fr] sm:gap-8"
              >
                <dt className="text-[0.6rem] uppercase tracking-[0.28em] text-muted-foreground">{spec.label}</dt>
                <dd className="text-sm leading-relaxed text-foreground">{spec.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Wrap>
    </section>
  );
}

/* ----------------------------------------------------------- 12 fabrication */

export function EmFabrication() {
  return (
    <section className="py-24 lg:py-36">
      <Wrap>
        <Display className="text-[2rem] sm:text-[3rem]">From roller to wall.</Display>
        <ol className="mt-14 grid gap-10 md:grid-cols-5">
          {embossedFabrication.map((item, index) => (
            <HlSlide key={item.step} from="up" delay={index * 90}>
              <li className="list-none border-t border-border pt-6">
                <p className="text-[0.6rem] tracking-[0.3em] text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-6 text-[0.72rem] uppercase tracking-[0.28em] text-foreground">{item.step}</p>
                <p className="mt-4 text-sm leading-[1.9] text-muted-foreground">{item.copy}</p>
              </li>
            </HlSlide>
          ))}
        </ol>
        <div className="mt-14 flex flex-wrap gap-x-8 gap-y-4">
          {fabricationServices.map((service) => (
            <span key={service} className="text-[0.62rem] uppercase tracking-[0.28em] text-muted-foreground">
              {service}
            </span>
          ))}
        </div>
        <p className="mt-8 max-w-2xl text-[0.7rem] leading-relaxed text-muted-foreground">{fabricationNote}</p>
      </Wrap>
    </section>
  );
}

/* --------------------------------------------------------------- 13 vs flat */

export function EmVsFlat() {
  const pair = [embossedVsFlat.flat, embossedVsFlat.embossed];

  return (
    <section className="py-24 lg:py-36">
      <Wrap>
        <Display className="text-[2rem] sm:text-[3rem]">Two ways to hold light.</Display>
        <div className="mt-14 grid gap-12 md:grid-cols-2 lg:gap-20">
          {pair.map((item) => (
            <div key={item.name}>
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                className="block aspect-[4/3] w-full object-cover"
              />
              <p className="mt-6 text-[0.72rem] uppercase tracking-[0.3em] text-foreground">{item.name}</p>
              <ul className="mt-5 space-y-3">
                {item.points.map((point) => (
                  <li key={point} className="text-sm leading-relaxed text-muted-foreground">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Wrap>
    </section>
  );
}

/* ------------------------------------------------------------------ 14 care */

export function EmCare() {
  return (
    <section className="py-24 lg:py-36">
      <Wrap>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Display className="text-[2rem] sm:text-[2.6rem]">Keep the depth clean.</Display>
          </div>
          <ul className="lg:col-span-7 lg:col-start-6">
            {careRules.map((rule) => (
              <li key={rule} className="border-b border-border py-5 text-sm leading-[1.9] text-muted-foreground">
                {rule}
              </li>
            ))}
          </ul>
        </div>
      </Wrap>
    </section>
  );
}

/* ------------------------------------------------------------ 15 finish nav */

export function EmFinishNav() {
  return (
    <section className="py-24 lg:py-36">
      <Wrap>
        <Label>Other finishes</Label>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {relatedFinishes.map((finish) => (
            <Link
              key={finish.slug}
              to="/designer-sheets/$finish"
              params={{ finish: finish.slug }}
              className="group block"
            >
              <img
                src={finish.image}
                alt={finish.alt}
                loading="lazy"
                decoding="async"
                className="block aspect-square w-full object-cover"
              />
              <span className="mt-4 block text-[0.62rem] uppercase tracking-[0.3em] text-muted-foreground transition-colors group-hover:text-foreground">
                {finish.name}
              </span>
            </Link>
          ))}
        </div>
      </Wrap>
    </section>
  );
}

/* ------------------------------------------------------------ 16 sample cta */

export function EmSampleCta({ onSample, onQuote }: { onSample: () => void; onQuote: () => void }) {
  return (
    <section className="relative isolate w-full overflow-hidden">
      <img
        src={img.sample}
        alt="Embossed stainless steel sample panels on a concrete desk in natural light"
        loading="lazy"
        decoding="async"
        width={1920}
        height={1008}
        className="block h-[58svh] w-full object-cover lg:h-[74svh]"
      />
      <span aria-hidden className="absolute inset-0 bg-[rgba(10,10,9,0.5)]" />
      <div className="absolute inset-0 flex items-center">
        <Wrap>
          <p className="text-[0.6rem] uppercase tracking-[0.4em] text-white/70">Specify with confidence</p>
          <p className="mt-8 max-w-2xl font-display text-[2rem] font-light uppercase leading-[0.95] text-white sm:text-[3.2rem]">
            See the depth in your own light.
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-8">
            <button
              type="button"
              onClick={onSample}
              className="group inline-flex items-center gap-3 border border-white/70 px-9 py-4 text-[0.62rem] uppercase tracking-[0.3em] text-white transition-colors duration-500 hover:bg-white hover:text-[#141311]"
            >
              Request a sample
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1" />
            </button>
            <button
              type="button"
              onClick={onQuote}
              className="text-[0.62rem] uppercase tracking-[0.3em] text-white/75 underline-offset-8 transition-colors hover:text-white hover:underline"
            >
              Request a quote
            </button>
          </div>
        </Wrap>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ 17 note */

export function EmNote() {
  return (
    <section className="pb-8 pt-4">
      <Wrap>
        <p className="max-w-3xl text-[0.66rem] leading-relaxed text-muted-foreground">
          Imagery is shown as application reference to illustrate the finish in context. Pattern,
          colour, grade, thickness and format are confirmed against a physical sample before order.
        </p>
      </Wrap>
    </section>
  );
}
