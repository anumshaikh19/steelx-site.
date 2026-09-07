import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { GrainLight, HlSection, HlSlide } from "@/components/hairline/primitives";
import {
  colourAvailabilityNote,
  fabricationNote,
  fabricationServices,
  fabricationSteps,
  grainDirections,
  grainScales,
  hairlineApplications,
  hairlineBeforeAfter,
  hairlineColours,
  hairlineImages,
  hairlineVsMirror,
  macroGallery,
  ON_REQUEST,
  relatedFinishes,
} from "@/data/products/hairline";

/* ------------------------------------------------------------------ 01 hero */

export function HlHero({ onSample }: { onSample: () => void }) {
  return (
    <section className="relative isolate min-h-[86svh] w-full overflow-hidden border-b border-border/70 lg:min-h-screen">
      <img
        src={hairlineImages.hero}
        alt="Hairline brushed stainless steel surface with a horizontal band of light travelling along the grain"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <span
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,7,8,0.92),rgba(6,7,8,0.42)_58%,rgba(6,7,8,0.72))]"
      />
      <span aria-hidden className="hl-sweep pointer-events-none absolute inset-0" />

      <div className="relative mx-auto flex min-h-[86svh] max-w-[1600px] flex-col justify-end px-4 pb-14 pt-32 sm:px-8 lg:min-h-screen lg:px-14 lg:pb-20">
        <p className="text-[0.6rem] uppercase tracking-[0.4em] text-champagne">
          Designer Sheets — Hairline
        </p>
        <h1 className="mt-7 max-w-[18ch] font-display text-[2.9rem] leading-[0.92] tracking-tight text-foreground sm:text-7xl lg:text-[7.5rem]">
          Hairline Stainless&nbsp;Steel Sheet
        </h1>
        <div className="mt-9 flex flex-col gap-8 border-t border-border/60 pt-8 lg:flex-row lg:items-end lg:justify-between">
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground lg:text-lg">
            A brushed, directional surface. Light travels along the grain instead of bouncing back at
            you — a calm, architectural steel for interiors that need precision rather than drama.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={onSample}
              className="group inline-flex items-center gap-3 border border-champagne/70 px-7 py-4 text-[0.65rem] uppercase tracking-[0.28em] text-foreground transition-colors hover:bg-champagne hover:text-metal-black"
            >
              Request a sample
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href="#specifications"
              className="text-[0.65rem] uppercase tracking-[0.28em] text-muted-foreground underline-offset-8 transition-colors hover:text-foreground hover:underline"
            >
              Specifications
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------- 02 what hairline is */

export function HlDefinition() {
  return (
    <HlSection index="01" eyebrow="The finish" title="A SURFACE WITH A DIRECTION.">
      <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="space-y-6 text-base leading-relaxed text-muted-foreground lg:col-span-5">
          <p>
            Hairline is stainless steel finished with fine, continuous abrasive lines running in one
            direction. The lines are shallow and even, so the sheet keeps a smooth hand while gaining
            a legible texture.
          </p>
          <p>
            Because the grain is directional, reflection is stretched along it. A ceiling light does
            not appear as a point on the surface — it appears as a soft line that follows the brush.
          </p>
          <p>
            That behaviour is why hairline reads as controlled in architecture: it takes light from a
            room and organises it.
          </p>
        </div>
        <div className="lg:col-span-7">
          <GrainLight
            image={hairlineImages.macroGrain}
            alt="Extreme macro of hairline brushed stainless steel grain"
            angle={90}
            className="aspect-[16/9]"
          />
          <p className="mt-4 text-[0.62rem] uppercase tracking-[0.24em] text-muted-foreground">
            Macro — fine directional grain
            <span className="ml-3 text-champagne">Move across the surface</span>
          </p>
        </div>
      </div>
    </HlSection>
  );
}

/* ------------------------------------------------ 03 light behaviour (linear) */

export function HlLightBand() {
  return (
    <HlSection
      index="02"
      eyebrow="Light"
      title="LIGHT TRAVELS ALONG THE LINE."
      lead="Drag the light across the sheet. The highlight stretches with the grain rather than forming a hotspot."
      bleed
    >
      <div className="mt-12">
        <GrainLight
          image={hairlineImages.macro.light}
          alt="A band of light travelling along the grain of brushed stainless steel"
          angle={90}
          className="aspect-[24/9] w-full border-x-0"
        />
      </div>
    </HlSection>
  );
}

/* ------------------------------------------------------- 04 grain direction */

export function HlDirection() {
  const [active, setActive] = useState(0);
  const current = grainDirections[active]!;

  return (
    <HlSection
      index="03"
      eyebrow="Grain direction"
      title="HORIZONTAL, VERTICAL, OR SPECIFIED."
      lead="Grain direction is part of the specification. It changes how a panel reads and how adjacent panels sit together."
    >
      <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-14">
        <ul className="flex gap-px overflow-x-auto border border-border bg-border lg:col-span-4 lg:flex-col lg:overflow-visible">
          {grainDirections.map((direction, index) => (
            <li key={direction.id} className="min-w-[62%] flex-1 bg-background sm:min-w-[40%] lg:min-w-0">
              <button
                type="button"
                onClick={() => setActive(index)}
                aria-pressed={index === active}
                className={cn(
                  "flex h-full w-full flex-col items-start gap-3 px-6 py-7 text-left transition-colors",
                  index === active ? "bg-surface-raised text-foreground" : "hover:bg-surface",
                )}
              >
                <span className="flex w-full items-center justify-between">
                  <span className="font-display text-xl">{direction.name}</span>
                  <span
                    aria-hidden
                    className="h-px w-10 bg-champagne transition-transform duration-700"
                    style={{ transform: `rotate(${direction.angle === 0 ? 90 : direction.angle === 45 ? 45 : 0}deg)` }}
                  />
                </span>
                <span className="text-[0.6rem] uppercase tracking-[0.22em] text-champagne">
                  {direction.confirmed ? "Standard" : ON_REQUEST}
                </span>
              </button>
            </li>
          ))}
        </ul>

        <div className="lg:col-span-8">
          <GrainLight
            key={current.id}
            image={current.image}
            alt={current.alt}
            angle={current.angle}
            className="aspect-[16/9] motion-safe:animate-in motion-safe:fade-in motion-safe:duration-700"
          />
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">{current.note}</p>
        </div>
      </div>
    </HlSection>
  );
}

/* ----------------------------------------------------- 05 align the grain */

export function HlAlignment() {
  const [aligned, setAligned] = useState(false);

  return (
    <HlSection
      index="04"
      eyebrow="Installation"
      title="ALIGN THE GRAIN."
      lead="On a run of panels, grain alignment is the difference between a surface and a set of separate sheets."
    >
      <div className="mt-12">
        <div className="relative overflow-hidden border border-border/70">
          <img
            src={hairlineImages.panelAlignment.random}
            alt="Adjacent stainless steel panels with mismatched grain directions"
            loading="lazy"
            decoding="async"
            className="block aspect-[3/2] w-full object-cover"
          />
          <img
            src={hairlineImages.panelAlignment.aligned}
            alt="Adjacent stainless steel panels with continuous aligned grain"
            loading="lazy"
            decoding="async"
            className={cn(
              "absolute inset-0 block h-full w-full object-cover transition-opacity duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
              aligned ? "opacity-100" : "opacity-0",
            )}
          />
          <span
            aria-hidden
            className={cn(
              "pointer-events-none absolute inset-x-0 top-1/2 h-px origin-left bg-champagne transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
              aligned ? "scale-x-100 opacity-90" : "scale-x-0 opacity-0",
            )}
          />
        </div>

        <div className="mt-7 flex flex-col gap-6 border-t border-border/70 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
            {aligned
              ? "Aligned. The grain runs continuously across the joints and the wall reads as one surface."
              : "Unaligned. Each panel catches light differently and the joints become the loudest thing in the room."}
          </p>
          <button
            type="button"
            onClick={() => setAligned((value) => !value)}
            aria-pressed={aligned}
            className="inline-flex w-fit items-center gap-3 border border-champagne/70 px-6 py-3.5 text-[0.62rem] uppercase tracking-[0.26em] text-foreground transition-colors hover:bg-champagne hover:text-metal-black"
          >
            {aligned ? "Show unaligned" : "Align the grain"}
          </button>
        </div>
      </div>
    </HlSection>
  );
}

/* --------------------------------------------------------- 06 grain scale */

export function HlGrainScale() {
  return (
    <HlSection
      index="05"
      eyebrow="Grain scale"
      title="HOW FINE THE LINE IS."
      lead="Grain fineness changes the character of the surface at arm's length, even when the colour is identical."
      bleed
    >
      <div className="mt-12 overflow-x-auto pb-4">
        <ul className="flex min-w-max gap-px bg-border px-4 sm:px-8 lg:px-14">
          {grainScales.map((scale) => (
            <li key={scale.id} className="w-[78vw] max-w-[460px] bg-background sm:w-[46vw] lg:w-[30vw]">
              <img
                src={scale.image}
                alt={scale.alt}
                loading="lazy"
                decoding="async"
                className="block aspect-[3/2] w-full object-cover"
              />
              <div className="px-6 py-6">
                <p className="font-display text-2xl text-foreground">{scale.name}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{scale.line}</p>
                <p className="mt-4 text-[0.6rem] uppercase tracking-[0.22em] text-champagne">
                  {scale.confirmed ? "Standard" : ON_REQUEST}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </HlSection>
  );
}

/* ------------------------------------------------------ 07 colour (strips) */

export function HlColourRail() {
  const [active, setActive] = useState(0);
  const current = hairlineColours[active]!;

  return (
    <HlSection
      index="06"
      eyebrow="Colour"
      title="PVD OVER THE GRAIN."
      lead="Colour is deposited onto the brushed surface, so the grain stays visible through the tone."
    >
      <div className="mt-12 space-y-px bg-border">
        {hairlineColours.map((colour, index) => (
          <button
            key={colour.id}
            type="button"
            onClick={() => setActive(index)}
            aria-pressed={index === active}
            className="group relative block w-full overflow-hidden bg-background text-left"
          >
            <img
              src={colour.image}
              alt={colour.alt}
              loading="lazy"
              decoding="async"
              className={cn(
                "block w-full object-cover transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
                index === active ? "h-28 opacity-100 sm:h-36" : "h-16 opacity-70 group-hover:opacity-100 sm:h-20",
              )}
            />
            <span className="pointer-events-none absolute inset-0 flex items-center justify-between px-5 sm:px-8">
              <span className="font-display text-xl text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] sm:text-2xl">
                {colour.name}
              </span>
              <span className="text-[0.58rem] uppercase tracking-[0.24em] text-white/80 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                {colour.coating}
              </span>
            </span>
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-6 border-t border-border/70 pt-7 lg:grid-cols-2">
        <p className="text-sm leading-relaxed text-foreground">{current.note}</p>
        <p className="text-xs leading-relaxed text-muted-foreground">{colourAvailabilityNote}</p>
      </div>
    </HlSection>
  );
}

/* ----------------------------------------------------- 08 macro gallery rail */

export function HlMacroGallery() {
  return (
    <HlSection index="07" eyebrow="Detail" title="AT CLOSE RANGE." bleed>
      <div className="mt-12 overflow-x-auto pb-4">
        <ul className="flex min-w-max gap-px bg-border px-4 sm:px-8 lg:px-14">
          {macroGallery.map((item) => (
            <li key={item.id} className="w-[84vw] max-w-[620px] bg-background sm:w-[52vw] lg:w-[34vw]">
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                className="block aspect-[5/2] w-full object-cover"
              />
              <p className="px-6 py-5 text-[0.6rem] uppercase tracking-[0.24em] text-muted-foreground">
                {item.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </HlSection>
  );
}

/* ---------------------------------------- 09 two ways to handle light */

export function HlTwoWays() {
  const { mirror, hairline } = hairlineVsMirror;
  return (
    <HlSection
      index="08"
      eyebrow="Comparison"
      title="TWO WAYS TO HANDLE LIGHT."
      lead="Mirror returns the room. Hairline organises it. Both are stainless steel; they behave nothing alike."
    >
      <div className="mt-12 grid gap-px border border-border bg-border lg:grid-cols-2">
        {[mirror, hairline].map((item, index) => (
          <HlSlide key={item.name} from={index === 0 ? "left" : "right"}>
            <article className="h-full bg-background">
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                className="block aspect-[16/10] w-full object-cover"
              />
              <div className="px-7 py-8 sm:px-10 sm:py-10">
                <p className="font-display text-3xl text-foreground">{item.name}</p>
                <ul className="mt-6 space-y-3">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="border-t border-border/70 pt-3 text-sm text-muted-foreground first:border-0 first:pt-0"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </HlSlide>
        ))}
      </div>
    </HlSection>
  );
}

/* --------------------------------------------- 10 architecture orientation */

export function HlArchitecture() {
  const [vertical, setVertical] = useState(true);
  return (
    <HlSection
      index="09"
      eyebrow="In architecture"
      title="ORIENTATION CHANGES THE ROOM."
      lead="The same finish, the same cabin. Only the grain direction changes."
    >
      <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2">
        {(["vertical", "horizontal"] as const).map((key) => (
          <button
            key={key}
            type="button"
            onClick={() => setVertical(key === "vertical")}
            aria-pressed={vertical === (key === "vertical")}
            className="group relative block bg-background text-left"
          >
            <img
              src={hairlineImages.architecture[key]}
              alt={`Lift cabin clad in hairline stainless steel with ${key} grain`}
              loading="lazy"
              decoding="async"
              className={cn(
                "block aspect-[3/2] w-full object-cover transition-opacity duration-700",
                vertical === (key === "vertical") ? "opacity-100" : "opacity-45 group-hover:opacity-80",
              )}
            />
            <span className="flex items-center justify-between px-6 py-5 text-[0.6rem] uppercase tracking-[0.24em]">
              <span className="text-foreground">{key} grain</span>
              <span className="text-champagne">
                {key === "vertical" ? "Emphasises height" : "Emphasises width"}
              </span>
            </span>
          </button>
        ))}
      </div>
    </HlSection>
  );
}

/* ------------------------------------------------------- 11 applications */

export function HlApplications() {
  return (
    <HlSection index="10" eyebrow="Applications" title="WHERE IT IS USED.">
      <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {hairlineApplications.map((application, index) => (
          <HlSlide key={application.id} from={index % 2 === 0 ? "left" : "right"} delay={(index % 4) * 70}>
            <article className="h-full bg-background">
              <img
                src={application.image}
                alt={application.alt}
                loading="lazy"
                decoding="async"
                className={cn("block w-full object-cover", application.tall ? "aspect-[4/5]" : "aspect-[4/3]")}
              />
              <div className="px-6 py-6">
                <p className="font-display text-xl text-foreground">{application.name}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{application.copy}</p>
              </div>
            </article>
          </HlSlide>
        ))}
      </div>
      <p className="mt-7 max-w-2xl text-xs leading-relaxed text-muted-foreground">
        Suitability depends on grade, thickness and location. We confirm the right specification per
        project.
      </p>
    </HlSection>
  );
}

/* ------------------------------------------------------ 12 before / after */

function HlBeforeAfterItem({
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
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(50);

  return (
    <figure className="m-0 bg-background">
      <div ref={ref} className="relative overflow-hidden border-b border-border/70">
        <img
          src={before}
          alt={beforeAlt}
          loading="lazy"
          decoding="async"
          className="block aspect-[3/2] w-full object-cover"
        />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}>
          <img
            src={after}
            alt={afterAlt}
            loading="lazy"
            decoding="async"
            className="block aspect-[3/2] w-full object-cover"
          />
        </div>
        <span
          aria-hidden
          className="pointer-events-none absolute inset-y-0 w-px bg-champagne"
          style={{ left: `${value}%` }}
        />
        <input
          type="range"
          min={0}
          max={100}
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
          aria-label={`${title} before and after`}
          className="absolute inset-x-0 bottom-0 h-12 w-full cursor-ew-resize opacity-0"
        />
      </div>
      <figcaption className="flex items-center justify-between px-6 py-5 text-[0.6rem] uppercase tracking-[0.24em]">
        <span className="text-foreground">{title}</span>
        <span className="text-champagne">{note}</span>
      </figcaption>
    </figure>
  );
}

export function HlBeforeAfter() {
  return (
    <HlSection
      index="11"
      eyebrow="Transformation"
      title="BEFORE AND AFTER."
      lead="Drag each slider to see the surface applied."
    >
      <div className="mt-12 grid gap-px border border-border bg-border lg:grid-cols-3">
        {hairlineBeforeAfter.map((item) => (
          <HlBeforeAfterItem key={item.id} {...item} />
        ))}
      </div>
    </HlSection>
  );
}

/* -------------------------------------------------------- 13 fabrication */

export function HlFabrication() {
  const [progress, setProgress] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setProgress(1);
      return;
    }
    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = node.getBoundingClientRect();
      const value = 1 - rect.top / (window.innerHeight * 0.9);
      setProgress(Math.min(1, Math.max(0, value)));
    };
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <HlSection index="12" eyebrow="Fabrication" title="CUT, GROOVE, BEND, INSTALL.">
      <div ref={ref} className="mt-12">
        <div className="relative h-px w-full bg-border">
          <span
            aria-hidden
            className="absolute inset-y-0 left-0 bg-champagne transition-[width] duration-300"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
        <ol className="mt-8 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-5">
          {fabricationSteps.map((item, index) => (
            <li key={item.step} className="bg-background px-6 py-8">
              <p className="text-[0.58rem] uppercase tracking-[0.28em] text-muted-foreground">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-4 font-display text-2xl text-foreground">{item.step}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.copy}</p>
            </li>
          ))}
        </ol>
        <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-[0.6rem] uppercase tracking-[0.24em] text-champagne">
          {fabricationServices.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul>
        <p className="mt-6 max-w-2xl text-xs leading-relaxed text-muted-foreground">{fabricationNote}</p>
      </div>
    </HlSection>
  );
}

/* --------------------------------------------------------------- 14 care */

export function HlCare() {
  return (
    <HlSection
      index="13"
      eyebrow="Care"
      title="PRESERVE THE GRAIN."
      lead="Everything about maintaining hairline comes back to one rule: work along the line, never across it."
    >
      <div className="mt-12 grid gap-px border border-border bg-border lg:grid-cols-3">
        <div className="bg-background px-7 py-9">
          <p className="text-[0.58rem] uppercase tracking-[0.28em] text-champagne">Do</p>
          <ul className="mt-6 space-y-3 text-sm leading-relaxed text-muted-foreground">
            <li>Wipe along the direction of the grain.</li>
            <li>Use a soft microfiber cloth.</li>
            <li>Use a suitable non-abrasive stainless steel cleaner.</li>
            <li>Dry the surface after cleaning.</li>
          </ul>
        </div>
        <div className="bg-background px-7 py-9">
          <p className="text-[0.58rem] uppercase tracking-[0.28em] text-champagne">Avoid</p>
          <ul className="mt-6 space-y-3 text-sm leading-relaxed text-muted-foreground">
            <li>Scrubbing across the grain.</li>
            <li>Steel wool and abrasive pads.</li>
            <li>Harsh abrasive or chlorine-based cleaners.</li>
            <li>Leaving protective film on beyond installation.</li>
          </ul>
        </div>
        <div className="bg-background px-7 py-9">
          <p className="text-[0.58rem] uppercase tracking-[0.28em] text-champagne">Protection</p>
          <ul className="mt-6 space-y-3 text-sm leading-relaxed text-muted-foreground">
            <li>Supplied with protective film.</li>
            <li>Anti-fingerprint treatment on request.</li>
            <li>Marks are generally less visible than on mirror.</li>
            <li>Dark PVD colours show handling more readily.</li>
          </ul>
        </div>
      </div>
    </HlSection>
  );
}

/* ------------------------------------------------------------ 15 related */

export function HlRelated() {
  return (
    <HlSection index="14" eyebrow="Related" title="OTHER FINISHES." bleed>
      <div className="mt-12 overflow-x-auto pb-4">
        <ul className="flex min-w-max gap-px bg-border px-4 sm:px-8 lg:px-14">
          {relatedFinishes.map((finish) => (
            <li key={finish.slug} className="w-[62vw] max-w-[380px] bg-background sm:w-[34vw] lg:w-[22vw]">
              <Link
                to="/designer-sheets/$finish"
                params={{ finish: finish.slug }}
                className="group block"
              >
                <img
                  src={finish.image}
                  alt={finish.alt}
                  loading="lazy"
                  decoding="async"
                  className="block aspect-[4/3] w-full object-cover transition-opacity duration-500 group-hover:opacity-80"
                />
                <span className="flex items-center justify-between px-6 py-5 text-[0.62rem] uppercase tracking-[0.24em] text-foreground">
                  {finish.name}
                  <ArrowRight className="h-3.5 w-3.5 text-champagne transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </HlSection>
  );
}

/* -------------------------------------------------------- 16 sample CTA */

export function HlSampleCta({ onSample }: { onSample: () => void }) {
  return (
    <section className="relative isolate overflow-hidden border-t border-border/70">
      <img
        src={hairlineImages.macro.edge}
        alt=""
        aria-hidden
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <span aria-hidden className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,7,8,0.94),rgba(6,7,8,0.55))]" />
      <div className="relative mx-auto flex max-w-[1600px] flex-col gap-9 px-4 py-20 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-14 lg:py-28">
        <div className="max-w-2xl">
          <p className="text-[0.6rem] uppercase tracking-[0.34em] text-champagne">Sample</p>
          <h2 className="mt-6 font-display text-[2.2rem] leading-[1.02] text-foreground sm:text-5xl lg:text-[4rem]">
            SEE THE GRAIN IN YOUR OWN LIGHT.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Grain reads differently under daylight, warm downlights and grazing light. Hold a physical
            sample against the wall before the specification is fixed.
          </p>
        </div>
        <button
          type="button"
          onClick={onSample}
          className="group inline-flex w-fit items-center gap-3 bg-champagne px-9 py-5 text-[0.65rem] uppercase tracking-[0.28em] text-metal-black transition-transform hover:-translate-y-0.5"
        >
          Request a sample
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  );
}
