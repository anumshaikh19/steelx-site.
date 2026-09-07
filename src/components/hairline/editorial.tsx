import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { HlSlide } from "@/components/hairline/primitives";
import {
  colourAvailabilityNote,
  colourStory,
  editorialGallery,
  fabricationNote,
  fabricationServices,
  finishNav,
  grainDirections,
  hairlineBeforeAfter,
  hairlineColours,
  hairlineEditorialImages as img,
  hairlineImages,
  lightStates,
  materialDetails,
  whyHairline,
} from "@/data/products/hairline";

/* ---------------------------------------------------------------- shared */

const EASE = "cubic-bezier(0.16,1,0.3,1)";

function Wrap({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-14", className)}>{children}</div>;
}

function Label({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn("text-[0.6rem] uppercase tracking-[0.36em] text-muted-foreground", className)}>
      {children}
    </p>
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
    <As
      className={cn(
        "font-display font-light uppercase leading-[0.95] tracking-[-0.02em] text-foreground",
        className,
      )}
    >
      {children}
    </As>
  );
}

/* ---------------------------------------------------------------- 01 hero */

export function EdHero({ onSample }: { onSample: () => void }) {
  return (
    <section className="relative isolate min-h-[92svh] w-full overflow-hidden lg:min-h-screen">
      <img
        src={img.heroArchitecture}
        alt="Contemporary hotel lobby with hairline brushed stainless steel wall panelling"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <span
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_top,rgba(12,11,9,0.82),rgba(12,11,9,0.28)_46%,rgba(12,11,9,0.36))]"
      />
      <div className="relative mx-auto flex min-h-[92svh] w-full max-w-[1500px] flex-col justify-end px-5 pb-14 pt-32 sm:px-8 lg:min-h-screen lg:px-14 lg:pb-20">
        <p className="text-[0.6rem] uppercase tracking-[0.4em] text-white/70">
          Brushed stainless steel
        </p>
        <h1 className="mt-8 font-display text-[3.6rem] font-light uppercase leading-[0.86] tracking-[-0.03em] text-white sm:text-[7rem] lg:text-[11rem]">
          Hairline
          <span className="sr-only"> Stainless Steel Sheets</span>
        </h1>
        <p className="mt-6 text-[0.72rem] uppercase tracking-[0.42em] text-white/80 sm:text-sm">
          Quietly distinctive.
        </p>
        <div className="mt-12 flex flex-col gap-9 border-t border-white/25 pt-8 lg:flex-row lg:items-end lg:justify-between">
          <p className="max-w-xl text-sm leading-relaxed text-white/75 lg:text-base">
            A finely brushed stainless-steel surface with subtle directional grain and controlled
            reflection, designed for refined architectural interiors.
          </p>
          <div className="flex flex-wrap items-center gap-8">
            <a
              href="#material"
              className="group inline-flex items-center gap-3 border border-white/60 px-8 py-4 text-[0.62rem] uppercase tracking-[0.3em] text-white transition-colors duration-500 hover:bg-white hover:text-[#141311]"
            >
              Explore hairline
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

/* ------------------------------------------------------ 02 material statement */

export function EdStatement() {
  return (
    <section id="material" className="py-24 lg:py-40">
      <Wrap>
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-6">
            <HlSlide from="up">
              <Display className="text-[2.4rem] sm:text-[3.6rem] lg:text-[4.6rem]">
                A surface
                <br />
                that lets
                <br />
                the architecture
                <br />
                speak.
              </Display>
              <p className="mt-12 max-w-md text-sm leading-[1.9] text-muted-foreground">
                Hairline stainless steel introduces texture without overwhelming the space. Its fine
                directional grain catches light softly, creating a restrained metallic character
                across walls, panels, doors and interior details.
              </p>
            </HlSlide>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <HlSlide from="right">
              <img
                src={img.materialStatement}
                alt="Brushed hairline stainless steel wall panel beside a plaster wall and oak reveal"
                loading="lazy"
                decoding="async"
                className="block aspect-[4/5] w-full object-cover"
              />
              <Label className="mt-5">Panel detail — natural silver</Label>
            </HlSlide>
          </div>
        </div>
      </Wrap>
    </section>
  );
}

/* -------------------------------------------------------- 03 signature image */

export function EdSignature() {
  return (
    <section className="relative isolate w-full overflow-hidden">
      <img
        src={img.signature}
        alt="Full-width sheet of brushed hairline stainless steel under soft directional light"
        loading="lazy"
        decoding="async"
        className="block h-[52svh] w-full object-cover lg:h-[78svh]"
      />
      <span aria-hidden className="absolute inset-0 bg-[rgba(10,10,9,0.22)]" />
      <div className="absolute inset-0 flex items-end">
        <Wrap className="pb-12 lg:pb-20">
          <Display className="text-[1.7rem] text-white sm:text-[2.6rem] lg:text-[3.4rem]">
            Fine grain.
            <br />
            Controlled light.
          </Display>
        </Wrap>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- 04 why hairline */

export function EdWhy() {
  return (
    <section className="py-24 lg:py-36">
      <Wrap>
        <div className="grid gap-14 border-t border-border pt-14 md:grid-cols-3 lg:gap-20">
          {whyHairline.map((item, index) => (
            <HlSlide key={item.index} from="up" delay={index * 110}>
              <p className="text-[0.6rem] tracking-[0.3em] text-muted-foreground">{item.index}</p>
              <p className="mt-8 text-[0.78rem] uppercase tracking-[0.28em] text-foreground">
                {item.title}
              </p>
              <p className="mt-5 max-w-xs text-sm leading-[1.9] text-muted-foreground">{item.copy}</p>
            </HlSlide>
          ))}
        </div>
      </Wrap>
    </section>
  );
}

/* --------------------------------------------------------------- 05 gallery */

export function EdGallery() {
  return (
    <section className="py-16 lg:py-28">
      <Wrap>
        <Label>Material gallery</Label>
        <div className="mt-14 grid gap-y-16 lg:grid-cols-12 lg:gap-x-10">
          {editorialGallery.map((item, index) => (
            <figure key={item.id} className={cn("group m-0", item.span)}>
              <HlSlide from={index % 2 === 0 ? "left" : "right"}>
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                    className={cn(
                      "block w-full object-cover transition-transform duration-[1400ms]",
                      item.ratio,
                    )}
                    style={{ transitionTimingFunction: EASE }}
                  />
                </div>
                <figcaption className="mt-4 flex items-baseline gap-4 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                  <span className="text-[0.6rem] uppercase tracking-[0.28em] text-foreground">
                    {item.caption}
                  </span>
                  <span className="text-[0.6rem] uppercase tracking-[0.24em] text-muted-foreground">
                    {item.sub}
                  </span>
                </figcaption>
              </HlSlide>
            </figure>
          ))}
        </div>
      </Wrap>
      <style>{`.group:hover img { transform: scale(1.03); }`}</style>
    </section>
  );
}

/* ------------------------------------------------------------- 06 the grain */

export function EdGrain() {
  return (
    <section className="py-24 lg:py-36">
      <Wrap>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-4">
            <Display className="text-[2rem] sm:text-[2.8rem]">See the grain.</Display>
            <p className="mt-8 max-w-sm text-sm leading-[1.9] text-muted-foreground">
              Fine directional brushing creates a surface that changes subtly with the movement of
              light.
            </p>
          </div>
          <div className="lg:col-span-8">
            <div className="hl-ed-travel relative overflow-hidden">
              <img
                src={hairlineImages.macroGrain}
                alt="High-resolution close-up of the fine directional grain of hairline stainless steel"
                loading="lazy"
                decoding="async"
                className="block aspect-[16/9] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </Wrap>
    </section>
  );
}

/* --------------------------------------------------------- 07 grain direction */

export function EdDirection() {
  const [active, setActive] = useState(0);
  const options = grainDirections.slice(0, 2);
  const current = options[active]!;

  return (
    <section className="py-24 lg:py-36">
      <Wrap>
        <Display className="text-[2rem] sm:text-[2.8rem]">Direction matters.</Display>

        <div className="mt-12 flex items-center gap-10">
          {options.map((option, index) => (
            <button
              key={option.id}
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
              {option.name} grain
            </button>
          ))}
        </div>

        <div className="relative mt-10 overflow-hidden">
          {options.map((option, index) => (
            <img
              key={option.id}
              src={option.image}
              alt={option.alt}
              loading="lazy"
              decoding="async"
              className={cn(
                "block aspect-[16/9] w-full object-cover transition-opacity duration-[1200ms]",
                index === active ? "opacity-100" : "absolute inset-0 opacity-0",
              )}
              style={{ transitionTimingFunction: EASE }}
            />
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <p className="max-w-xl text-sm leading-[1.9] text-muted-foreground">
            The orientation of the grain can influence how a surface reads across walls, doors,
            elevators and architectural panels. {current.note}
          </p>
          <Label className="lg:text-right">
            Direction subject to production and project requirements.
          </Label>
        </div>
      </Wrap>
    </section>
  );
}

/* ----------------------------------------------------------- 08 applications */

const applications = [
  {
    id: "elevators",
    index: "Application 01",
    name: "Elevators",
    image: hairlineImages.elevator,
    alt: "Lift cabin clad in hairline stainless steel",
    copy: "A refined alternative to highly reflective surfaces for elevator cabins, doors and interior panels.",
    full: true,
  },
  {
    id: "feature-walls",
    index: "Application 02",
    name: "Feature walls",
    image: hairlineImages.wall,
    alt: "Hairline stainless steel wall cladding in a lobby",
    copy: "Large-format brushed panels give a wall a continuous, controlled metallic character.",
    full: false,
  },
  {
    id: "hospitality",
    index: "Application 03",
    name: "Hospitality",
    image: hairlineImages.hospitality,
    alt: "Hotel lobby with hairline stainless steel detailing",
    copy: "Lobbies, restaurants and lounges where the material should feel quiet at close range.",
    full: false,
  },
  {
    id: "retail",
    index: "Application 04",
    name: "Retail",
    image: hairlineImages.retail,
    alt: "Luxury retail interior with hairline stainless steel display walls",
    copy: "Display walls, fixtures and premium fitted details.",
    full: true,
  },
  {
    id: "furniture",
    index: "Application 05",
    name: "Furniture",
    image: hairlineImages.furniture,
    alt: "Designer furniture faced in hairline stainless steel",
    copy: "Cabinetry, counters and architectural furniture details.",
    full: false,
  },
  {
    id: "doors",
    index: "Application 06",
    name: "Doors & panels",
    image: hairlineImages.doors,
    alt: "Architectural doors faced in hairline stainless steel",
    copy: "Architectural doors and decorative panels.",
    full: false,
  },
];

export function EdApplications() {
  return (
    <section className="py-20 lg:py-32">
      <Wrap>
        <Display className="text-[2rem] sm:text-[2.8rem]">Hairline in architecture.</Display>
      </Wrap>

      <div className="mt-14 space-y-20 lg:space-y-32">
        {applications.map((application) =>
          application.full ? (
            <div key={application.id}>
              <HlSlide from="up">
                <img
                  src={application.image}
                  alt={application.alt}
                  loading="lazy"
                  decoding="async"
                  className="block h-[54svh] w-full object-cover lg:h-[86svh]"
                />
              </HlSlide>
              <Wrap className="mt-6">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-baseline lg:justify-between">
                  <div>
                    <Label>{application.index}</Label>
                    <p className="mt-3 font-display text-2xl font-light uppercase tracking-[-0.01em] text-foreground lg:text-3xl">
                      {application.name}
                    </p>
                  </div>
                  <p className="max-w-md text-sm leading-[1.9] text-muted-foreground">
                    {application.copy}
                  </p>
                </div>
              </Wrap>
            </div>
          ) : (
            <Wrap key={application.id}>
              <HlSlide from="left">
                <img
                  src={application.image}
                  alt={application.alt}
                  loading="lazy"
                  decoding="async"
                  className="block aspect-[16/9] w-full object-cover"
                />
                <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-baseline lg:justify-between">
                  <div>
                    <Label>{application.index}</Label>
                    <p className="mt-3 font-display text-2xl font-light uppercase tracking-[-0.01em] text-foreground lg:text-3xl">
                      {application.name}
                    </p>
                  </div>
                  <p className="max-w-md text-sm leading-[1.9] text-muted-foreground">
                    {application.copy}
                  </p>
                </div>
              </HlSlide>
            </Wrap>
          ),
        )}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- 09 light */

export function EdLight() {
  const [active, setActive] = useState(0);

  return (
    <section className="hl-ed-dark py-24 lg:py-36">
      <Wrap>
        <Display className="text-[2rem] text-foreground sm:text-[2.8rem]">
          The beauty is in the light.
        </Display>

        <div className="relative mt-12 overflow-hidden">
          {lightStates.map((state, index) => (
            <img
              key={state.id}
              src={state.image}
              alt={state.alt}
              loading="lazy"
              decoding="async"
              className={cn(
                "block aspect-[16/9] w-full object-cover transition-opacity duration-[1400ms]",
                index === active ? "opacity-100" : "absolute inset-0 opacity-0",
              )}
              style={{ transitionTimingFunction: EASE }}
            />
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-8">
          {lightStates.map((state, index) => (
            <button
              key={state.id}
              type="button"
              onClick={() => setActive(index)}
              aria-pressed={index === active}
              className={cn(
                "border-b pb-2 text-[0.6rem] uppercase tracking-[0.3em] transition-colors duration-500",
                index === active
                  ? "border-champagne text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground",
              )}
            >
              {state.name}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <p className="max-w-xl text-sm leading-[1.9] text-muted-foreground">
            {lightStates[active]!.line}
          </p>
          <p className="max-w-xl text-sm leading-[1.9] text-muted-foreground lg:text-right">
            Hairline retains a subtle metallic response while its fine grain controls the way light
            travels across the surface.
          </p>
        </div>
      </Wrap>
    </section>
  );
}

/* -------------------------------------------------------------- 10 colour */

export function EdColour() {
  const [active, setActive] = useState(0);
  const current = hairlineColours[active]!;
  const interior = img.interiors[current.id] ?? img.interiors["silver"]!;

  return (
    <section className="py-24 lg:py-36">
      <Wrap>
        <Display className="text-[2rem] sm:text-[2.8rem]">Colour, with restraint.</Display>

        <div className="relative mt-12 overflow-hidden">
          <img
            key={current.id}
            src={interior}
            alt={`${current.name} hairline stainless steel in a contemporary interior`}
            loading="lazy"
            decoding="async"
            className="block aspect-[16/10] w-full object-cover motion-safe:animate-in motion-safe:fade-in motion-safe:duration-1000"
          />
        </div>

        <div className="mt-10 space-y-3">
          {hairlineColours.map((colour, index) => (
            <button
              key={colour.id}
              type="button"
              onClick={() => setActive(index)}
              aria-pressed={index === active}
              className="group relative block w-full overflow-hidden text-left"
            >
              <img
                src={colour.image}
                alt={colour.alt}
                loading="lazy"
                decoding="async"
                className={cn(
                  "block w-full object-cover transition-all duration-[1000ms]",
                  index === active ? "h-20 sm:h-24" : "h-12 opacity-75 group-hover:opacity-100 sm:h-14",
                )}
                style={{ transitionTimingFunction: EASE }}
              />
              <span className="pointer-events-none absolute inset-0 flex items-center justify-between px-5 sm:px-8">
                <span className="text-[0.62rem] uppercase tracking-[0.32em] text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.75)]">
                  {colour.name}
                </span>
                <span className="text-[0.55rem] uppercase tracking-[0.26em] text-white/80 drop-shadow-[0_1px_8px_rgba(0,0,0,0.75)]">
                  {colour.coating}
                </span>
              </span>
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <p className="text-sm leading-[1.9] text-foreground">{current.note}</p>
          <p className="text-xs leading-[1.9] text-muted-foreground">{colourAvailabilityNote}</p>
        </div>
      </Wrap>
    </section>
  );
}

/* --------------------------------------------------------- 11 colour story */

export function EdColourStory() {
  return (
    <section className="pb-24 lg:pb-36">
      <Wrap>
        <div className="grid gap-10 lg:grid-cols-3 lg:gap-8">
          {colourStory.map((panel, index) => (
            <HlSlide key={panel.id} from="up" delay={index * 120}>
              <img
                src={panel.image}
                alt={panel.alt}
                loading="lazy"
                decoding="async"
                className="block aspect-[4/5] w-full object-cover"
              />
              <p className="mt-6 text-[0.62rem] uppercase tracking-[0.34em] text-foreground">
                {panel.name}
              </p>
              <p className="mt-4 text-sm leading-[2] text-muted-foreground">
                {panel.words.map((word) => (
                  <span key={word} className="block">
                    {word}
                  </span>
                ))}
              </p>
            </HlSlide>
          ))}
        </div>
      </Wrap>
    </section>
  );
}

/* -------------------------------------------------------- 12 before / after */

function BeforeAfter({
  before,
  after,
  beforeAlt,
  afterAlt,
  title,
  note,
}: {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
  title: string;
  note: string;
}) {
  const [value, setValue] = useState(50);

  return (
    <figure className="m-0">
      <div className="relative overflow-hidden">
        <img
          src={before}
          alt={beforeAlt}
          loading="lazy"
          decoding="async"
          className="block aspect-[16/10] w-full object-cover"
        />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}>
          <img
            src={after}
            alt={afterAlt}
            loading="lazy"
            decoding="async"
            className="block aspect-[16/10] w-full object-cover"
          />
        </div>
        <span
          aria-hidden
          className="pointer-events-none absolute inset-y-0 w-px bg-white/80"
          style={{ left: `${value}%` }}
        />
        <input
          type="range"
          min={0}
          max={100}
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
          aria-label={`${title} before and after`}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
      <figcaption className="mt-4 flex items-baseline justify-between">
        <span className="text-[0.6rem] uppercase tracking-[0.28em] text-foreground">{title}</span>
        <span className="text-[0.58rem] uppercase tracking-[0.24em] text-muted-foreground">{note}</span>
      </figcaption>
    </figure>
  );
}

export function EdBeforeAfter() {
  return (
    <section className="py-24 lg:py-36">
      <Wrap>
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <Display className="text-[2rem] sm:text-[2.8rem]">
            A quieter kind
            <br />
            of transformation.
          </Display>
          <Label>Application reference</Label>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-3 lg:gap-8">
          {hairlineBeforeAfter.map((item) => (
            <BeforeAfter key={item.id} {...item} />
          ))}
        </div>
        <p className="mt-8 max-w-2xl text-xs leading-[1.9] text-muted-foreground">
          Imagery is shown as application reference to illustrate the finish in context.
        </p>
      </Wrap>
    </section>
  );
}

/* ------------------------------------------------------------ 13 full sheet */

export function EdFullSheet() {
  return (
    <section className="py-24 lg:py-36">
      <Wrap>
        <Display className="text-[2rem] sm:text-[2.8rem]">The material, at full scale.</Display>

        <div className="mt-16 grid gap-14 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5 lg:col-start-2">
            <div className="relative">
              <img
                src={img.fullSheet}
                alt="A full stainless steel sheet with hairline finish standing vertically"
                loading="lazy"
                decoding="async"
                className="block aspect-[3/4] w-full object-contain"
              />
              <span
                aria-hidden
                className="absolute -left-6 inset-y-[14%] w-px bg-foreground/25 sm:-left-10"
              />
              <span
                aria-hidden
                className="absolute -bottom-6 inset-x-[14%] h-px bg-foreground/25 sm:-bottom-8"
              />
              <span className="absolute -left-6 top-1/2 -translate-y-1/2 -rotate-90 text-[0.55rem] uppercase tracking-[0.3em] text-muted-foreground sm:-left-10">
                Height
              </span>
              <span className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-[0.55rem] uppercase tracking-[0.3em] text-muted-foreground">
                Width
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 lg:col-start-8">
            <Label>Custom formats available subject to project requirements.</Label>
            <ol className="mt-12 space-y-8">
              {["Sheet", "Cut panel", "Installed surface"].map((step, index) => (
                <li key={step} className="flex items-baseline gap-6 border-t border-border pt-5">
                  <span className="text-[0.55rem] tracking-[0.3em] text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-xl font-light uppercase text-foreground">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Wrap>
    </section>
  );
}

/* ------------------------------------------------------- 14 material details */

export function EdDetails() {
  return (
    <section id="specifications" className="py-24 lg:py-36">
      <Wrap>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-6">
            <img
              src={hairlineImages.macro.edge}
              alt="Close-up of the edge and surface of a hairline stainless steel sheet"
              loading="lazy"
              decoding="async"
              className="block aspect-[4/3] w-full object-cover"
            />
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <Label>Material details</Label>
            <dl className="mt-10">
              {materialDetails.map((row) => (
                <div key={row.label} className="border-t border-border py-6">
                  <dt className="text-[0.58rem] uppercase tracking-[0.3em] text-muted-foreground">
                    {row.label}
                  </dt>
                  <dd className="mt-3 text-sm leading-relaxed text-foreground">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Wrap>
    </section>
  );
}

/* ----------------------------------------------------------- 15 fabrication */

export function EdFabrication() {
  return (
    <section className="py-24 lg:py-36">
      <Wrap>
        <Display className="text-[2rem] sm:text-[2.8rem]">Made for the detail.</Display>

        <div className="mt-14 grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <img
              src={img.fabrication}
              alt="Finished brushed stainless steel metalwork with a folded edge and clean corner"
              loading="lazy"
              decoding="async"
              className="block aspect-[16/10] w-full object-cover"
            />
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <ul className="flex flex-wrap gap-x-8 gap-y-4 text-[0.6rem] uppercase tracking-[0.3em] text-foreground">
              {["Cut", "Bend", "Form", "Join", "Install"].map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
            <ul className="mt-12 space-y-4 text-sm text-muted-foreground">
              {fabricationServices
                .filter((service) => service !== "Waterjet" && service !== "Welding")
                .map((service) => (
                  <li key={service} className="border-t border-border pt-4">
                    {service}
                  </li>
                ))}
            </ul>
            <p className="mt-10 text-xs leading-[1.9] text-muted-foreground">{fabricationNote}</p>
          </div>
        </div>
      </Wrap>
    </section>
  );
}

/* ------------------------------------------------------ 16 grain continuity */

export function EdContinuity() {
  const ref = useRef<HTMLDivElement>(null);
  const [aligned, setAligned] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            window.setTimeout(() => setAligned(true), 900);
            obs.disconnect();
          }
        }
      },
      { threshold: 0.4 },
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="py-24 lg:py-36">
      <Wrap>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-4">
            <Display className="text-[2rem] sm:text-[2.6rem]">Continuity creates calm.</Display>
            <p className="mt-8 max-w-sm text-sm leading-[1.9] text-muted-foreground">
              When multiple panels meet, grain direction and panel orientation can influence the
              visual continuity of the finished installation.
            </p>
            <button
              type="button"
              onClick={() => setAligned((value) => !value)}
              aria-pressed={aligned}
              className="mt-10 border-b border-foreground pb-2 text-[0.6rem] uppercase tracking-[0.3em] text-foreground"
            >
              {aligned ? "Show misaligned" : "Show aligned"}
            </button>
          </div>
          <div ref={ref} className="relative overflow-hidden lg:col-span-8">
            <img
              src={hairlineImages.panelAlignment.random}
              alt="Adjacent hairline stainless steel panels with mismatched grain"
              loading="lazy"
              decoding="async"
              className="block aspect-[3/2] w-full object-cover"
            />
            <img
              src={hairlineImages.panelAlignment.aligned}
              alt="Adjacent hairline stainless steel panels with continuous aligned grain"
              loading="lazy"
              decoding="async"
              className={cn(
                "absolute inset-0 block h-full w-full object-cover transition-opacity duration-[1600ms]",
                aligned ? "opacity-100" : "opacity-0",
              )}
              style={{ transitionTimingFunction: EASE }}
            />
          </div>
        </div>
      </Wrap>
    </section>
  );
}

/* ---------------------------------------------------------------- 17 care */

export function EdCare() {
  return (
    <section className="py-24 lg:py-36">
      <Wrap>
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Display className="text-[2rem] sm:text-[2.6rem]">Keep it refined.</Display>
            <svg
              viewBox="0 0 220 90"
              aria-hidden
              className="mt-12 h-auto w-56 text-muted-foreground"
              fill="none"
            >
              {[0, 1, 2, 3, 4, 5].map((line) => (
                <line
                  key={line}
                  x1="6"
                  x2="214"
                  y1={16 + line * 12}
                  y2={16 + line * 12}
                  stroke="currentColor"
                  strokeWidth="0.6"
                  opacity="0.5"
                />
              ))}
              <rect x="70" y="30" width="64" height="20" stroke="currentColor" strokeWidth="0.8" />
              <path d="M138 40 h48" stroke="currentColor" strokeWidth="0.8" />
              <path d="M180 34 l6 6 -6 6" stroke="currentColor" strokeWidth="0.8" />
            </svg>
            <Label className="mt-4">Clean along the grain</Label>
          </div>

          <div className="grid gap-12 lg:col-span-7 lg:col-start-6 lg:grid-cols-2">
            <div>
              <Label>Recommended</Label>
              <ul className="mt-8 space-y-4 text-sm leading-relaxed text-muted-foreground">
                <li className="border-t border-border pt-4">Soft microfiber cloth</li>
                <li className="border-t border-border pt-4">
                  Suitable non-abrasive stainless-steel cleaner
                </li>
                <li className="border-t border-border pt-4">
                  Clean along the grain where appropriate
                </li>
              </ul>
            </div>
            <div>
              <Label>Avoid</Label>
              <ul className="mt-8 space-y-4 text-sm leading-relaxed text-muted-foreground">
                <li className="border-t border-border pt-4">Abrasive pads</li>
                <li className="border-t border-border pt-4">Steel wool</li>
                <li className="border-t border-border pt-4">Harsh abrasive cleaners</li>
                <li className="border-t border-border pt-4">Unsuitable chemicals</li>
              </ul>
            </div>
          </div>
        </div>
      </Wrap>
    </section>
  );
}

/* ----------------------------------------------------- 18 hairline vs mirror */

export function EdVsMirror() {
  return (
    <section className="py-24 lg:py-36">
      <Wrap>
        <Display className="text-[2rem] sm:text-[2.8rem]">Subtle or dramatic?</Display>
        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-8">
          {[
            {
              name: "Hairline",
              image: hairlineImages.macroGrain,
              alt: "Macro of hairline brushed stainless steel",
              points: ["Directional", "Subtle reflection", "Fine grain", "Quiet luxury"],
            },
            {
              name: "Mirror",
              image: hairlineImages.macro.gold,
              alt: "Macro of highly reflective stainless steel",
              points: ["High reflection", "Smooth appearance", "Dramatic", "Highly reflective"],
            },
          ].map((item, index) => (
            <HlSlide key={item.name} from={index === 0 ? "left" : "right"}>
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                className="block aspect-[4/3] w-full object-cover"
              />
              <p className="mt-6 font-display text-2xl font-light uppercase text-foreground">
                {item.name}
              </p>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </HlSlide>
          ))}
        </div>
        <Link
          to="/designer-sheets/mirror"
          className="group mt-14 inline-flex items-center gap-3 border-b border-foreground pb-2 text-[0.62rem] uppercase tracking-[0.3em] text-foreground"
        >
          Explore mirror
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1" />
        </Link>
      </Wrap>
    </section>
  );
}

/* ------------------------------------------------------------ 19 finish nav */

export function EdFinishNav() {
  const [active, setActive] = useState(1);
  const current = finishNav[active]!;

  return (
    <section className="py-24 lg:py-36">
      <Wrap>
        <Label>Other finishes</Label>
        <ul className="mt-10 flex gap-px overflow-x-auto pb-2">
          {finishNav.map((finish, index) => (
            <li key={finish.id} className="min-w-[38%] flex-1 sm:min-w-0">
              <button
                type="button"
                onClick={() => setActive(index)}
                aria-pressed={index === active}
                className="block w-full text-left"
              >
                <img
                  src={finish.image}
                  alt={finish.alt}
                  loading="lazy"
                  decoding="async"
                  className={cn(
                    "block aspect-[4/3] w-full object-cover transition-opacity duration-700",
                    index === active ? "opacity-100" : "opacity-45 hover:opacity-80",
                  )}
                />
                <span
                  className={cn(
                    "mt-3 block text-[0.55rem] uppercase tracking-[0.26em]",
                    index === active ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  {finish.name}
                </span>
              </button>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-baseline sm:justify-between">
          <p className="max-w-xl text-sm leading-[1.9] text-muted-foreground">{current.line}</p>
          {current.slug === "hairline" ? null : (
            <Link
              to="/designer-sheets/$finish"
              params={{ finish: current.slug }}
              className="text-[0.6rem] uppercase tracking-[0.3em] text-foreground underline-offset-8 hover:underline"
            >
              View {current.name}
            </Link>
          )}
        </div>
      </Wrap>
    </section>
  );
}

/* -------------------------------------------------------- 20 designer note */

export function EdNote() {
  return (
    <section className="py-28 lg:py-44">
      <Wrap>
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Display className="text-[2.2rem] sm:text-[3.4rem] lg:text-[4.4rem]">
              The best metal
              <br />
              doesn&apos;t always
              <br />
              demand attention.
            </Display>
          </div>
          <p className="max-w-sm text-sm leading-[2] text-muted-foreground lg:col-span-3 lg:col-start-10 lg:self-end">
            Hairline is designed for spaces where material quality is felt through proportion, light
            and detail rather than high reflectivity.
          </p>
        </div>
      </Wrap>
    </section>
  );
}

/* --------------------------------------------------------------- 21 sample */

export function EdSampleCta({ onSample, onQuote }: { onSample: () => void; onQuote: () => void }) {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={img.sample}
        alt="Hairline stainless steel sample panel in natural light"
        loading="lazy"
        decoding="async"
        className="block h-[70svh] w-full object-cover lg:h-[86svh]"
      />
      <span aria-hidden className="absolute inset-0 bg-[rgba(14,12,10,0.42)]" />
      <div className="absolute inset-0 flex items-end">
        <Wrap className="pb-14 lg:pb-20">
          <Display className="text-[2.2rem] text-white sm:text-[3.4rem] lg:text-[4.4rem]">
            Feel the difference.
          </Display>
          <p className="mt-6 max-w-md text-sm leading-[1.9] text-white/75">
            The grain, colour and surface response are best experienced in real light.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-8">
            <button
              type="button"
              onClick={onSample}
              className="group inline-flex items-center gap-3 bg-white px-8 py-4 text-[0.62rem] uppercase tracking-[0.3em] text-[#141311] transition-transform duration-500 hover:-translate-y-0.5"
            >
              Request a hairline sample
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1" />
            </button>
            <button
              type="button"
              onClick={onQuote}
              className="text-[0.62rem] uppercase tracking-[0.3em] text-white/80 underline-offset-8 transition-colors hover:text-white hover:underline"
            >
              Request project quote
            </button>
          </div>
        </Wrap>
      </div>
    </section>
  );
}
