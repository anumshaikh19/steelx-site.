import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, MoveHorizontal } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";
import {
  applicationEntries,
  beforeAfterExamples,
  colourWorld,
  comparisonRows,
  designerSheetImages,
  finishNotes,
  heroMedia,
  referenceStrip,
  scaleMedia,
} from "@/data/products/designer-sheet-media";

/* ------------------------------------------------------------ utilities */

function useReducedMotion() {
  const [reduced, setReduced] = useState(true);
  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);
  return reduced;
}

function useFinePointer() {
  const [fine, setFine] = useState(false);
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setFine(!reduce && window.matchMedia("(pointer: fine)").matches);
  }, []);
  return fine;
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[0.66rem] uppercase tracking-[0.34em] text-champagne">{children}</p>
  );
}

/* ------------------------------------------------------------- 01 hero */

export function DslHero({ onSample }: { onSample: () => void }) {
  const fine = useFinePointer();
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!fine) return;
    let frame = 0;
    const onMove = (e: PointerEvent) => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        setPos({
          x: (e.clientX / window.innerWidth - 0.5) * 24,
          y: (e.clientY / window.innerHeight - 0.5) * 16,
        });
      });
    };
    window.addEventListener("pointermove", onMove);
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [fine]);

  return (
    <section className="relative flex min-h-[92svh] items-end overflow-hidden bg-metal-black">
      <img
        src={heroMedia.image}
        alt={heroMedia.alt}
        width={1920}
        height={1088}
        decoding="async"
        className="absolute inset-0 h-full w-full scale-[1.06] object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ transform: `scale(1.06) translate3d(${pos.x}px, ${pos.y}px, 0)` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-background/25" />

      <div className="relative mx-auto w-full max-w-[1500px] px-4 pb-16 pt-32 sm:px-8 lg:px-10 lg:pb-24">
        <Reveal variant="text" as="p" className="text-[0.66rem] uppercase tracking-[0.34em] text-champagne">
          Products / Designer Sheets
        </Reveal>
        <Reveal variant="up" delay={90}>
          <h1 className="mt-6 font-display text-[3.4rem] leading-[0.88] text-foreground sm:text-8xl lg:text-[9.5rem]">
            DESIGNER
            <br />
            SHEETS
          </h1>
        </Reveal>
        <Reveal variant="up" delay={180}>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            A collection of stainless steel surfaces shaped by reflection, texture, depth and colour.
          </p>
        </Reveal>
        <Reveal variant="up" delay={240}>
          <p className="mt-6 text-[0.6rem] uppercase tracking-[0.28em] text-muted-foreground">
            Mirror / Hairline / Embossed / Bead Blast / Water Ripple / Hammered
          </p>
        </Reveal>
        <Reveal variant="up" delay={320}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#collection"
              className="inline-flex items-center gap-3 bg-champagne px-8 py-4 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-metal-black transition-opacity hover:opacity-85"
            >
              Explore the collection
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={onSample}
              className="inline-flex items-center gap-3 border border-champagne/60 px-8 py-4 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-champagne transition-colors hover:bg-champagne hover:text-metal-black"
            >
              Request a sample
            </button>
          </div>
        </Reveal>
        <p className="mt-14 text-[0.58rem] uppercase tracking-[0.3em] text-muted-foreground">
          Explore surfaces ↓
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------ 02 introduction */

export function DslIntro() {
  return (
    <section className="mx-auto grid max-w-[1500px] gap-12 px-4 py-24 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-20 lg:px-10 lg:py-36">
      <div>
        <Reveal variant="text">
          <Eyebrow>The material</Eyebrow>
        </Reveal>
        <Reveal variant="up" delay={80}>
          <h2 className="mt-6 font-display text-4xl leading-[1.02] text-foreground sm:text-5xl lg:text-[4.4rem]">
            SIX SURFACES.
            <br />
            ENDLESS ARCHITECTURAL
            <br />
            POSSIBILITIES.
          </h2>
        </Reveal>
        <Reveal variant="up" delay={160}>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground lg:text-lg">
            STEELX Designer Sheets bring together reflective, brushed, textured and sculpted stainless
            steel surfaces for architecture and interiors.
          </p>
        </Reveal>
        <Reveal variant="up" delay={220}>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground lg:text-lg">
            From crisp mirror reflection to fluid water ripple and tactile hammered textures, each
            surface changes the way light moves through a space.
          </p>
        </Reveal>
      </div>
      <Reveal variant="up" delay={120}>
        <figure className="m-0 overflow-hidden border border-border/70">
          <img
            src={designerSheetImages['hairline']!.macro}
            alt={designerSheetImages['hairline']!.macroAlt}
            width={1536}
            height={1024}
            loading="lazy"
            decoding="async"
            className="aspect-[4/3] w-full object-cover"
          />
        </figure>
      </Reveal>
    </section>
  );
}

/* -------------------------------------------------------- 03 collection */

function FinishTile({ note, priority }: { note: (typeof finishNotes)[number]; priority: boolean }) {
  const media = designerSheetImages[note.slug]!;
  const aspect =
    note.scale === "tall" ? "aspect-[3/4]" : note.scale === "wide" ? "aspect-[16/10]" : "aspect-[4/3]";

  return (
    <Link
      to="/designer-sheets/$finish"
      params={{ finish: note.slug }}
      className={cn(
        "group relative block overflow-hidden bg-metal-black",
        note.scale === "wide" && "lg:col-span-2",
      )}
    >
      <img
        src={media.sheet}
        alt={media.sheetAlt}
        width={1536}
        height={1024}
        {...(priority ? {} : { loading: "lazy" as const })}
        decoding="async"
        className={cn(
          aspect,
          "w-full object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]",
        )}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.22) 48%, transparent 62%)",
          mixBlendMode: "screen",
        }}
      />
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/35 to-transparent" />
      <span className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
        <span className="block text-[0.6rem] uppercase tracking-[0.3em] text-champagne">
          {note.index}
        </span>
        <span className="mt-3 block font-display text-3xl uppercase text-foreground transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2 lg:text-5xl">
          {note.name}
        </span>
        <span className="mt-4 block max-w-md text-sm leading-relaxed text-muted-foreground opacity-80 transition-opacity duration-700 group-hover:opacity-100">
          {note.line}
        </span>
        <span className="mt-5 flex items-center gap-2 text-[0.6rem] uppercase tracking-[0.24em] text-champagne">
          Explore {note.name.toLowerCase()}
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </span>
      </span>
    </Link>
  );
}

export function DslCollection() {
  return (
    <section id="collection" className="mx-auto max-w-[1500px] px-4 py-20 sm:px-8 lg:px-10 lg:py-28">
      <Reveal variant="text">
        <Eyebrow>The collection</Eyebrow>
      </Reveal>
      <Reveal variant="up" delay={80}>
        <h2 className="mt-6 font-display text-4xl leading-[1.02] text-foreground sm:text-5xl lg:text-[5rem]">
          SIX DISTINCT RELATIONSHIPS WITH LIGHT.
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-4 lg:grid-cols-2">
        {finishNotes.map((note, i) => (
          <Reveal key={note.slug} variant="up" delay={i * 70} className={note.scale === "wide" ? "lg:col-span-2" : ""}>
            <FinishTile note={note} priority={i === 0} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------------------------------------------- 04 detail gallery */

export function DslGallery() {
  return (
    <section className="overflow-hidden border-y border-border bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-[1500px] px-4 sm:px-8 lg:px-10">
        <Reveal variant="text">
          <Eyebrow>Surfaces in detail</Eyebrow>
        </Reveal>
        <Reveal variant="up" delay={80}>
          <h2 className="mt-6 font-display text-4xl leading-[1.02] text-foreground sm:text-5xl lg:text-[4.4rem]">
            LOOK CLOSER.
          </h2>
        </Reveal>
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Macro photography of each surface. Drag or scroll sideways.
        </p>
      </div>

      <div className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-6 sm:px-8 lg:px-10">
        {finishNotes.map((note) => {
          const media = designerSheetImages[note.slug]!;
          return (
            <figure
              key={note.slug}
              className="relative m-0 w-[84vw] shrink-0 snap-center overflow-hidden border border-border/70 sm:w-[62vw] lg:w-[46vw]"
            >
              <img
                src={media.macro}
                alt={media.macroAlt}
                width={1536}
                height={1024}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full object-cover"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-metal-black to-transparent p-6">
                <p className="font-display text-2xl uppercase text-foreground lg:text-3xl">{note.name}</p>
                <p className="mt-2 text-[0.62rem] uppercase tracking-[0.24em] text-champagne">
                  {note.poster}
                </p>
              </figcaption>
            </figure>
          );
        })}
      </div>
    </section>
  );
}

/* ------------------------------------------------------- 05 comparison */

function Level({ level }: { level: number }) {
  return (
    <span className="flex gap-1" aria-hidden>
      {[1, 2, 3].map((n) => (
        <span
          key={n}
          className={cn("h-1.5 w-6", n <= level ? "bg-champagne" : "bg-border")}
        />
      ))}
    </span>
  );
}

export function DslComparison() {
  return (
    <section className="mx-auto max-w-[1500px] px-4 py-20 sm:px-8 lg:px-10 lg:py-28">
      <Reveal variant="text">
        <Eyebrow>Compare</Eyebrow>
      </Reveal>
      <Reveal variant="up" delay={80}>
        <h2 className="mt-6 font-display text-4xl leading-[1.02] text-foreground sm:text-5xl lg:text-[4.4rem]">
          COMPARE THE SURFACES.
        </h2>
      </Reveal>

      <div className="mt-14 space-y-4">
        {comparisonRows.map((row, i) => {
          const media = designerSheetImages[row.slug]!;
          return (
            <Reveal key={row.slug} variant="row" delay={i * 60}>
              <Link
                to="/designer-sheets/$finish"
                params={{ finish: row.slug }}
                className="group grid items-center gap-6 border border-border p-4 transition-colors hover:border-champagne/60 lg:grid-cols-[220px_1fr_1fr_1fr_1.2fr] lg:gap-8 lg:p-5"
              >
                <span className="flex items-center gap-4">
                  <img
                    src={media.macro}
                    alt={media.macroAlt}
                    width={1536}
                    height={1024}
                    loading="lazy"
                    decoding="async"
                    className="h-16 w-24 object-cover"
                  />
                  <span className="font-display text-xl uppercase text-foreground">{row.name}</span>
                </span>
                <span className="block">
                  <span className="block text-[0.58rem] uppercase tracking-[0.24em] text-muted-foreground">
                    Reflection — {row.reflection.label}
                  </span>
                  <span className="mt-2 block">
                    <Level level={row.reflection.level} />
                  </span>
                </span>
                <span className="block">
                  <span className="block text-[0.58rem] uppercase tracking-[0.24em] text-muted-foreground">
                    Texture — {row.texture.label}
                  </span>
                  <span className="mt-2 block">
                    <Level level={row.texture.level} />
                  </span>
                </span>
                <span className="block">
                  <span className="block text-[0.58rem] uppercase tracking-[0.24em] text-muted-foreground">
                    Depth — {row.depth.label}
                  </span>
                  <span className="mt-2 block">
                    <Level level={row.depth.level} />
                  </span>
                </span>
                <span className="block text-sm leading-relaxed text-muted-foreground">
                  {row.character}
                  <span className="mt-1 block text-[0.6rem] uppercase tracking-[0.22em] text-champagne">
                    Best for {row.bestFor}
                  </span>
                </span>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

/* ------------------------------------------------------ 06 colour world */

export function DslColourWorld() {
  const [active, setActive] = useState(0);

  return (
    <section className="border-y border-border bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-[1500px] px-4 sm:px-8 lg:px-10">
        <Reveal variant="text">
          <Eyebrow>Colour</Eyebrow>
        </Reveal>
        <Reveal variant="up" delay={80}>
          <h2 className="mt-6 font-display text-4xl leading-[1.02] text-foreground sm:text-5xl lg:text-[4.4rem]">
            COLOUR CHANGES EVERYTHING.
          </h2>
        </Reveal>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
          The same surface can become completely different architecture through colour.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
          <div className="relative overflow-hidden border border-border/70">
            {colourWorld.map((c, i) => (
              <img
                key={c.id}
                src={c.image}
                alt={c.alt}
                width={1536}
                height={1024}
                loading="lazy"
                decoding="async"
                className={cn(
                  "aspect-[4/3] w-full object-cover transition-opacity duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
                  i === 0 ? "" : "absolute inset-0 h-full",
                  i === active ? "opacity-100" : "opacity-0",
                )}
              />
            ))}
            <p className="absolute bottom-0 left-0 bg-metal-black/70 px-5 py-3 font-display text-2xl uppercase text-foreground backdrop-blur-sm">
              {colourWorld[active]!.name}
            </p>
          </div>

          <div>
            <div className="grid grid-cols-4 gap-3 sm:grid-cols-7 lg:grid-cols-4">
              {colourWorld.map((c, i) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={i === active}
                  className={cn(
                    "group flex flex-col items-start gap-2 text-left",
                    i === active ? "opacity-100" : "opacity-70 hover:opacity-100",
                  )}
                >
                  <span
                    className={cn(
                      "block aspect-square w-full border transition-colors",
                      i === active ? "border-champagne" : "border-border",
                    )}
                    style={{ backgroundImage: c.swatch }}
                  />
                  <span className="text-[0.56rem] uppercase tracking-[0.18em] text-muted-foreground">
                    {c.name}
                  </span>
                </button>
              ))}
            </div>
            <p className="mt-8 text-base leading-relaxed text-muted-foreground">
              {colourWorld[active]!.note}
            </p>
            <p className="mt-6 text-[0.6rem] uppercase tracking-[0.24em] text-champagne">
              Available across selected surfaces
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------- 08 before / after */

function BeforeAfter({ entry }: { entry: (typeof beforeAfterExamples)[number] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(50);

  const setFromClientX = useCallback((clientX: number) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    setValue(Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100)));
  }, []);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let dragging = false;
    const down = (e: PointerEvent) => {
      dragging = true;
      setFromClientX(e.clientX);
    };
    const move = (e: PointerEvent) => dragging && setFromClientX(e.clientX);
    const up = () => (dragging = false);
    node.addEventListener("pointerdown", down);
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    return () => {
      node.removeEventListener("pointerdown", down);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
  }, [setFromClientX]);

  return (
    <figure className="m-0">
      <div ref={ref} className="relative select-none overflow-hidden border border-border/70 touch-pan-y">
        <img
          src={entry.after}
          alt={entry.afterAlt}
          width={1536}
          height={1024}
          loading="lazy"
          decoding="async"
          className="block aspect-[3/2] w-full object-cover"
        />
        <img
          src={entry.before}
          alt={entry.beforeAlt}
          width={1536}
          height={1024}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 block h-full w-full object-cover"
          style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}
        />
        <span
          aria-hidden
          className="pointer-events-none absolute inset-y-0 w-px bg-champagne"
          style={{ left: `${value}%` }}
        />
        <span
          aria-hidden
          className="pointer-events-none absolute top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-champagne bg-metal-black/80 text-champagne backdrop-blur-sm"
          style={{ left: `${value}%` }}
        >
          <MoveHorizontal className="h-4 w-4" />
        </span>
        <span className="pointer-events-none absolute left-4 top-4 bg-metal-black/70 px-3 py-1 text-[0.55rem] uppercase tracking-[0.24em] text-muted-foreground">
          Before
        </span>
        <span className="pointer-events-none absolute right-4 top-4 bg-metal-black/70 px-3 py-1 text-[0.55rem] uppercase tracking-[0.24em] text-champagne">
          After
        </span>
      </div>
      <label className="mt-4 block">
        <span className="sr-only">{entry.title} before and after slider</span>
        <input
          type="range"
          min={0}
          max={100}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="w-full accent-[var(--champagne)]"
        />
      </label>
      <figcaption className="mt-2">
        <p className="font-display text-xl uppercase text-foreground">{entry.title}</p>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{entry.caption}</p>
      </figcaption>
    </figure>
  );
}

export function DslBeforeAfter() {
  return (
    <section className="mx-auto max-w-[1500px] px-4 py-20 sm:px-8 lg:px-10 lg:py-28">
      <Reveal variant="text">
        <Eyebrow>Transformation</Eyebrow>
      </Reveal>
      <Reveal variant="up" delay={80}>
        <h2 className="mt-6 font-display text-4xl leading-[1.02] text-foreground sm:text-5xl lg:text-[4.4rem]">
          FROM SURFACE TO SPACE.
        </h2>
      </Reveal>
      <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        Drag each slider to see the same space before and after decorative stainless steel. Application
        reference imagery — not STEELX project photography.
      </p>

      <div className="mt-12 grid gap-10 lg:grid-cols-3">
        {beforeAfterExamples.map((entry, i) => (
          <Reveal key={entry.id} variant="up" delay={i * 90}>
            <BeforeAfter entry={entry} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------ 09 applications */

export function DslApplications() {
  return (
    <section className="border-y border-border bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-[1500px] px-4 sm:px-8 lg:px-10">
        <Reveal variant="text">
          <Eyebrow>Applications</Eyebrow>
        </Reveal>
        <Reveal variant="up" delay={80}>
          <h2 className="mt-6 font-display text-4xl leading-[1.02] text-foreground sm:text-5xl lg:text-[4.4rem]">
            DESIGNED FOR ARCHITECTURE.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {applicationEntries.map((app, i) => (
            <Reveal
              key={app.name}
              variant="up"
              delay={i * 60}
              className={app.span === "wide" ? "sm:col-span-2" : ""}
            >
              <article className="group relative h-full overflow-hidden bg-metal-black">
                <img
                  src={app.image}
                  alt={app.alt}
                  width={1536}
                  height={1024}
                  loading="lazy"
                  decoding="async"
                  className={cn(
                    "w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105",
                    app.span === "wide" ? "aspect-[16/9]" : "aspect-[4/5]",
                  )}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="font-display text-2xl uppercase text-foreground">{app.name}</p>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                    {app.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- 10 scale */

export function DslScale() {
  return (
    <section className="mx-auto grid max-w-[1500px] gap-12 px-4 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20 lg:px-10 lg:py-28">
      <Reveal variant="up">
        <figure className="relative m-0 overflow-hidden border border-border/70">
          <img
            src={scaleMedia.image}
            alt={scaleMedia.alt}
            width={1024}
            height={1280}
            loading="lazy"
            decoding="async"
            className="block aspect-[4/5] w-full object-cover"
          />
          <span className="pointer-events-none absolute left-6 top-1/2 -translate-y-1/2 rotate-180 text-[0.55rem] uppercase tracking-[0.3em] text-champagne [writing-mode:vertical-rl]">
            Height
          </span>
          <span className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-[0.55rem] uppercase tracking-[0.3em] text-champagne">
            Width
          </span>
          <span className="pointer-events-none absolute right-6 top-8 text-[0.55rem] uppercase tracking-[0.3em] text-champagne">
            Thickness
          </span>
        </figure>
      </Reveal>

      <div>
        <Reveal variant="text">
          <Eyebrow>Scale</Eyebrow>
        </Reveal>
        <Reveal variant="up" delay={80}>
          <h2 className="mt-6 font-display text-4xl leading-[1.02] text-foreground sm:text-5xl lg:text-[4.4rem]">
            BUILT TO SCALE.
          </h2>
        </Reveal>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
          Sheets are supplied as full panels, cut panels or fabricated elements. Dimensions depend on
          finish, grade and project requirements.
        </p>
        <dl className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-3">
          {[
            { t: "Full sheet", d: "Standard architectural format for large surfaces." },
            { t: "Half sheet", d: "Cut format for panels, doors and joinery faces." },
            { t: "Custom panel", d: "Cut to size, folded or fabricated to drawing." },
          ].map((item) => (
            <div key={item.t} className="bg-background p-6">
              <dt className="font-display text-xl text-foreground">{item.t}</dt>
              <dd className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.d}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-8 text-[0.6rem] uppercase tracking-[0.24em] text-champagne">
          Custom sizes available — confirmed on request
        </p>
      </div>
    </section>
  );
}

/* --------------------------------------------------------- 11 light lab */

export function DslLightLab() {
  const [slug, setSlug] = useState(finishNotes[0]!.slug);
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const [pos, setPos] = useState({ x: 0.5, y: 0.4 });
  const [active, setActive] = useState(false);

  const media = designerSheetImages[slug]!;
  const note = useMemo(() => finishNotes.find((f) => f.slug === slug)!, [slug]);

  useEffect(() => {
    if (reduced) return;
    const node = ref.current;
    if (!node) return;
    let frame = 0;
    const onMove = (e: PointerEvent) => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const rect = node.getBoundingClientRect();
        setPos({
          x: Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width)),
          y: Math.min(1, Math.max(0, (e.clientY - rect.top) / rect.height)),
        });
      });
    };
    const enter = () => setActive(true);
    const leave = () => {
      setActive(false);
      setPos({ x: 0.5, y: 0.4 });
    };
    node.addEventListener("pointermove", onMove);
    node.addEventListener("pointerenter", enter);
    node.addEventListener("pointerleave", leave);
    return () => {
      node.removeEventListener("pointermove", onMove);
      node.removeEventListener("pointerenter", enter);
      node.removeEventListener("pointerleave", leave);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [reduced]);

  const spread = slug === "mirror" ? "26% 30%" : slug === "bead-blast" ? "70% 80%" : "44% 52%";

  return (
    <section className="border-y border-border bg-metal-black py-20 lg:py-28">
      <div className="mx-auto max-w-[1500px] px-4 sm:px-8 lg:px-10">
        <Reveal variant="text">
          <Eyebrow>Light lab</Eyebrow>
        </Reveal>
        <Reveal variant="up" delay={80}>
          <h2 className="mt-6 font-display text-4xl leading-[1.02] text-foreground sm:text-5xl lg:text-[4.4rem]">
            WATCH THE LIGHT MOVE.
          </h2>
        </Reveal>
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Move the cursor across the surface. Each finish reacts to light differently.
        </p>

        <div className="mt-10 flex flex-wrap gap-2">
          {finishNotes.map((f) => (
            <button
              key={f.slug}
              type="button"
              onClick={() => setSlug(f.slug)}
              aria-pressed={f.slug === slug}
              className={cn(
                "border px-5 py-2.5 text-[0.6rem] uppercase tracking-[0.22em] transition-colors",
                f.slug === slug
                  ? "border-champagne bg-champagne text-metal-black"
                  : "border-border text-muted-foreground hover:border-champagne/60 hover:text-champagne",
              )}
            >
              {f.name}
            </button>
          ))}
        </div>

        <div
          ref={ref}
          className="relative mt-8 overflow-hidden border border-border/70"
          style={{ perspective: "1600px" }}
        >
          <img
            src={media.macro}
            alt={media.macroAlt}
            width={1536}
            height={1024}
            loading="lazy"
            decoding="async"
            className="block aspect-[16/9] w-full scale-105 object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              transform: `scale(1.06) translate3d(${(pos.x - 0.5) * -16}px, ${(pos.y - 0.5) * -10}px, 0)`,
            }}
          />
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 transition-opacity duration-500"
            style={{
              opacity: active ? 1 : 0.45,
              background: `radial-gradient(${spread} at ${pos.x * 100}% ${pos.y * 100}%, rgba(255,246,225,0.85), transparent 72%)`,
              mixBlendMode: "screen",
            }}
          />
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background: `radial-gradient(120% 100% at ${(1 - pos.x) * 100}% ${(1 - pos.y) * 100}%, transparent 25%, rgba(0,0,0,0.72))`,
            }}
          />
          <p className="pointer-events-none absolute bottom-5 left-5 text-[0.6rem] uppercase tracking-[0.26em] text-champagne">
            {note.name} — {note.poster}
          </p>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------- 12 reference strip */

export function DslReferenceStrip() {
  return (
    <section className="overflow-hidden py-20 lg:py-28">
      <div className="mx-auto max-w-[1500px] px-4 sm:px-8 lg:px-10">
        <Reveal variant="text">
          <Eyebrow>Application reference</Eyebrow>
        </Reveal>
        <Reveal variant="up" delay={80}>
          <h2 className="mt-6 font-display text-4xl leading-[1.02] text-foreground sm:text-5xl lg:text-[4.4rem]">
            WHERE SURFACE BECOMES ARCHITECTURE.
          </h2>
        </Reveal>
      </div>

      <div className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-6 sm:px-8 lg:px-10">
        {referenceStrip.map((ref_) => (
          <article
            key={ref_.name}
            className="w-[80vw] shrink-0 snap-center sm:w-[52vw] lg:w-[36vw]"
          >
            <img
              src={ref_.image}
              alt={ref_.alt}
              width={1536}
              height={1024}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full border border-border/70 object-cover"
            />
            <p className="mt-4 font-display text-xl uppercase text-foreground">{ref_.name}</p>
            <p className="mt-2 text-[0.6rem] uppercase tracking-[0.22em] text-champagne">
              {ref_.finish} — {ref_.application}
            </p>
            <p className="mt-1 text-[0.55rem] uppercase tracking-[0.2em] text-muted-foreground">
              Application reference
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- 13 sample cta */

export function DslSampleCta({ onSample }: { onSample: () => void }) {
  return (
    <section className="relative overflow-hidden border-y border-border bg-metal-black">
      <img
        src={designerSheetImages['hammered']!.macro}
        alt=""
        aria-hidden
        width={1536}
        height={1024}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover opacity-35"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/25" />
      <div className="relative mx-auto max-w-[1500px] px-4 py-24 sm:px-8 lg:px-10 lg:py-36">
        <Reveal variant="up">
          <h2 className="max-w-3xl font-display text-4xl leading-[1.02] text-foreground sm:text-6xl lg:text-[6rem]">
            TOUCH THE MATERIAL.
          </h2>
        </Reveal>
        <p className="mt-8 max-w-lg text-base leading-relaxed text-muted-foreground lg:text-lg">
          Reflection, colour and texture behave differently in person. Request physical samples for your
          project.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <button
            type="button"
            onClick={onSample}
            className="inline-flex items-center gap-3 bg-champagne px-9 py-4 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-metal-black transition-opacity hover:opacity-85"
          >
            Request a sample
            <ArrowUpRight className="h-4 w-4" />
          </button>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 border border-champagne/60 px-9 py-4 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-champagne transition-colors hover:bg-champagne hover:text-metal-black"
          >
            Talk to the studio
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ 14 support */

export function DslSupport() {
  const steps = [
    { i: "01", t: "Select", d: "Choose the surface, colour and pattern direction." },
    { i: "02", t: "Sample", d: "See and feel the material under your own lighting." },
    { i: "03", t: "Specify", d: "Move the selected surface into your project drawings." },
  ];

  return (
    <section className="mx-auto max-w-[1500px] px-4 py-20 sm:px-8 lg:px-10 lg:py-28">
      <Reveal variant="text">
        <Eyebrow>Designer support</Eyebrow>
      </Reveal>
      <Reveal variant="up" delay={80}>
        <h2 className="mt-6 font-display text-4xl leading-[1.02] text-foreground sm:text-5xl lg:text-[4.4rem]">
          SPECIFY WITH CONFIDENCE.
        </h2>
      </Reveal>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
        Share your drawings, moodboards or project requirements and the STEELX studio can help you select
        the appropriate surface, colour and material direction.
      </p>

      <ol className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-3">
        {steps.map((s, i) => (
          <Reveal key={s.i} variant="up" delay={i * 80} className="bg-background p-8">
            <li className="list-none">
              <p className="text-[0.6rem] uppercase tracking-[0.3em] text-champagne">{s.i}</p>
              <p className="mt-4 font-display text-2xl uppercase text-foreground">{s.t}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </li>
          </Reveal>
        ))}
      </ol>

      <Link
        to="/contact"
        className="mt-12 inline-flex items-center gap-3 border border-champagne/60 px-8 py-4 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-champagne transition-colors hover:bg-champagne hover:text-metal-black"
      >
        Start a project
        <ArrowUpRight className="h-4 w-4" />
      </Link>
    </section>
  );
}

/* ---------------------------------------------------------- 15 final cta */

export function DslFinalCta() {
  return (
    <section className="border-t border-border bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-[1500px] px-4 sm:px-8 lg:px-10">
        <Reveal variant="up">
          <h2 className="font-display text-4xl leading-[1.02] text-foreground sm:text-5xl lg:text-[5rem]">
            FIND YOUR SURFACE.
          </h2>
        </Reveal>
        <p className="mt-6 text-base text-muted-foreground">
          Explore the six Designer Sheet collections.
        </p>
        <div className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {finishNotes.map((f) => (
            <Link
              key={f.slug}
              to="/designer-sheets/$finish"
              params={{ finish: f.slug }}
              className="group flex items-center justify-between bg-background px-6 py-6 transition-colors hover:bg-surface-raised"
            >
              <span className="font-display text-xl uppercase text-foreground">
                Explore {f.name}
              </span>
              <ArrowUpRight className="h-4 w-4 text-champagne transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- mobile bar */

export function DslMobileBar({ onSample }: { onSample: () => void }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-metal-black/95 p-3 backdrop-blur-md lg:hidden">
      <div className="flex gap-3">
        <a
          href="#collection"
          className="flex-1 border border-champagne/50 px-4 py-3 text-center text-[0.6rem] uppercase tracking-[0.22em] text-champagne"
        >
          Collection
        </a>
        <button
          type="button"
          onClick={onSample}
          className="flex-1 bg-champagne px-4 py-3 text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-metal-black"
        >
          Request sample
        </button>
      </div>
    </div>
  );
}
