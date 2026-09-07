import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, MoveHorizontal } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { MaterialViewer } from "@/components/products/material-viewer";
import { cn } from "@/lib/utils";
import {
  ON_REQUEST,
  mirrorApplications,
  mirrorBeforeAfter,
  mirrorCare,
  mirrorColours,
  mirrorComparison,
  mirrorFabrication,
  mirrorFabricationServices,
  mirrorGallery,
  mirrorImages,
  mirrorLevels,
  type MirrorColour,
} from "@/data/products/mirror";

/* --------------------------------------------------------------- helpers */

function useFinePointer() {
  const [fine, setFine] = useState(false);
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setFine(!reduce && window.matchMedia("(pointer: fine)").matches);
  }, []);
  return fine;
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="text-[0.66rem] uppercase tracking-[0.34em] text-champagne">{children}</p>;
}

function Section({
  id,
  children,
  className,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      {...(id ? { id } : {})}
      className={cn("mx-auto max-w-[1500px] px-4 py-20 sm:px-8 lg:px-10 lg:py-32", className)}
    >
      {children}
    </section>
  );
}

/* ------------------------------------------------------------- 01 hero */

export function MirrorHero({ onSample }: { onSample: () => void }) {
  const fine = useFinePointer();
  const [shift, setShift] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!fine) return;
    let frame = 0;
    const onMove = (e: PointerEvent) => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        setShift({
          x: (e.clientX / window.innerWidth - 0.5) * 26,
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
    <section className="relative isolate flex min-h-[92svh] items-end overflow-hidden bg-metal-black">
      <img
        src={mirrorImages.hero}
        alt="Mirror finish stainless steel wall panels reflecting a luxury hotel lobby"
        width={1920}
        height={1088}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full scale-[1.06] object-cover"
        style={{ transform: `scale(1.06) translate3d(${shift.x}px, ${shift.y}px, 0)`, transition: "transform 900ms cubic-bezier(0.16,1,0.3,1)" }}
      />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-metal-black via-metal-black/55 to-metal-black/20" />

      <div className="relative mx-auto w-full max-w-[1500px] px-4 pb-16 pt-32 sm:px-8 lg:px-10 lg:pb-24">
        <Reveal variant="text">
          <Eyebrow>No. 8 / 8K Mirror</Eyebrow>
        </Reveal>
        <Reveal variant="up" delay={90}>
          <h1 className="mt-6 font-display text-[22vw] leading-[0.82] text-foreground sm:text-[16vw] lg:text-[13rem]">
            MIRROR<span className="sr-only"> Stainless Steel Sheets</span>

          </h1>
        </Reveal>
        <Reveal variant="up" delay={180}>
          <p className="mt-4 font-display text-2xl uppercase tracking-[0.06em] text-champagne sm:text-4xl">
            Light, reflected.
          </p>
        </Reveal>
        <Reveal variant="up" delay={260}>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
            Mirror-finished stainless steel engineered for clarity, reflection and architectural impact.
          </p>
        </Reveal>
        <Reveal variant="up" delay={340}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#surface"
              className="inline-flex items-center gap-3 bg-champagne-gradient px-8 py-4 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-metal-black"
            >
              Explore the surface
            </a>
            <button
              type="button"
              onClick={onSample}
              className="inline-flex items-center gap-3 border border-champagne/60 px-8 py-4 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-champagne transition-colors hover:bg-champagne hover:text-metal-black"
            >
              Request a sample
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- 02 surface */

export function MirrorSurface() {
  return (
    <Section id="surface">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-20">
        <div>
          <Reveal variant="text">
            <Eyebrow>The material</Eyebrow>
          </Reveal>
          <Reveal variant="up" delay={80}>
            <h2 className="mt-6 font-display text-4xl leading-[1.02] text-foreground sm:text-5xl lg:text-[4.2rem]">
              THE MIRROR SURFACE.
            </h2>
          </Reveal>
          <Reveal variant="up" delay={160}>
            <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground">
              <p>
                Mirror finish stainless steel is a highly polished, non-directional stainless-steel surface created
                through progressively finer polishing and buffing.
              </p>
              <p>
                The result is a bright, reflective surface with a glass-like visual character, while the material
                underneath remains stainless steel — with the strength, detailing and fabrication behaviour that
                comes with it.
              </p>
              <p className="border-l border-champagne/50 pl-6 text-sm text-foreground">
                Exact appearance depends on grade, polishing quality, sheet flatness, lighting and the production
                process. Reflectivity is not identical across producers, so a physical sample is the reliable
                reference.
              </p>
            </div>
          </Reveal>
        </div>
        <Reveal variant="up" delay={120}>
          <figure className="m-0">
            <img
              src={mirrorImages.macro}
              alt="Macro photograph of a mirror polished stainless steel surface"
              width={1536}
              height={1024}
              loading="lazy"
              decoding="async"
              className="block aspect-[3/2] w-full object-cover"
            />
            <figcaption className="mt-4 text-[0.62rem] uppercase tracking-[0.22em] text-muted-foreground">
              Non-directional polish — macro
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </Section>
  );
}

/* ----------------------------------------------------------- 03 levels */

export function MirrorLevels() {
  const [active, setActive] = useState(mirrorLevels[1]!.id);
  const level = mirrorLevels.find((l) => l.id === active) ?? mirrorLevels[1]!;
  const blur = (100 - level.clarity) / 12;

  return (
    <section className="border-y border-border bg-accent/15">
      <div className="mx-auto max-w-[1500px] px-4 py-20 sm:px-8 lg:px-10 lg:py-32">
        <Reveal variant="text">
          <Eyebrow>Finish levels</Eyebrow>
        </Reveal>
        <Reveal variant="up" delay={80}>
          <h2 className="mt-6 font-display text-4xl leading-[1.02] text-foreground sm:text-5xl lg:text-[4.2rem]">
            6K · 8K · 10K · SUPER MIRROR.
          </h2>
        </Reveal>
        <Reveal variant="up" delay={140}>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            These describe polishing levels, not a universal measured reflectivity standard. The comparison below is
            visual: how sharply the reflected image resolves as polishing is refined.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-16">
          <Reveal variant="up">
            <div className="relative overflow-hidden border border-border/70">
              <img
                src={mirrorImages.reflection}
                alt={`Mirror stainless steel reflection at ${level.name} clarity`}
                width={1536}
                height={1024}
                loading="lazy"
                decoding="async"
                className="block aspect-[3/2] w-full object-cover transition-[filter] duration-700"
                style={{ filter: `blur(${blur}px) contrast(${0.9 + level.clarity / 400})` }}
              />
              <span className="absolute bottom-4 left-4 bg-metal-black/70 px-3 py-1 text-[0.58rem] uppercase tracking-[0.24em] text-champagne">
                {level.name} — visual simulation
              </span>
            </div>
          </Reveal>

          <div>
            <ul className="grid gap-px border border-border bg-border">
              {mirrorLevels.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => setActive(item.id)}
                    aria-pressed={item.id === active}
                    className={cn(
                      "flex w-full flex-col gap-2 bg-background px-6 py-5 text-left transition-colors hover:bg-accent/40",
                      item.id === active && "bg-accent/60",
                    )}
                  >
                    <span className="flex items-baseline justify-between gap-4">
                      <span className="font-display text-2xl text-foreground">{item.name}</span>
                      <span
                        className={cn(
                          "text-[0.58rem] uppercase tracking-[0.2em]",
                          item.availability === ON_REQUEST ? "text-champagne" : "text-muted-foreground",
                        )}
                      >
                        {item.availability}
                      </span>
                    </span>
                    <span className="text-sm text-muted-foreground">{item.summary}</span>
                    <span aria-hidden className="mt-2 h-px w-full bg-border">
                      <span
                        className="block h-px bg-champagne transition-all duration-700"
                        style={{ width: `${item.clarity}%` }}
                      />
                    </span>
                  </button>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{level.detail}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------- 04 viewer + colour studio */

export function MirrorColourStudio() {
  const [active, setActive] = useState<MirrorColour>(mirrorColours[0]!);

  return (
    <Section id="colour">
      <Reveal variant="text">
        <Eyebrow>Colour studio</Eyebrow>
      </Reveal>
      <Reveal variant="up" delay={80}>
        <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[1.02] text-foreground sm:text-5xl lg:text-[4.2rem]">
          COLOUR, WITHOUT LOSING THE REFLECTION.
        </h2>
      </Reveal>
      <Reveal variant="up" delay={140}>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Coloured versions combine a mirror-polished stainless base with a PVD colour treatment, where applicable.
          Not every colour is available in every grade, size or thickness — availability is confirmed per project.
        </p>
      </Reveal>

      <div className="mt-12">
        <MaterialViewer
          image={active.image}
          alt={active.alt}
          light={active.light}
          caption={`${active.coating} · ${active.base}`}
        />
      </div>

      <div className="mt-8 grid gap-6 border-t border-border pt-8 sm:grid-cols-2 lg:grid-cols-[repeat(3,minmax(0,1fr))]">
        <div>
          <p className="text-[0.6rem] uppercase tracking-[0.22em] text-muted-foreground">PVD colour</p>
          <p className="mt-2 font-display text-2xl text-foreground">{active.coating}</p>
        </div>
        <div>
          <p className="text-[0.6rem] uppercase tracking-[0.22em] text-muted-foreground">Mirror base</p>
          <p className="mt-2 font-display text-2xl text-foreground">{active.base}</p>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">{active.note}</p>
      </div>

      <ul className="mt-12 grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-4 lg:grid-cols-7">
        {mirrorColours.map((colour) => (
          <li key={colour.id}>
            <button
              type="button"
              onClick={() => setActive(colour)}
              aria-pressed={colour.id === active.id}
              className={cn(
                "group flex h-full w-full flex-col gap-3 bg-background p-3 text-left transition-colors hover:bg-accent/40",
                colour.id === active.id && "bg-accent/60",
              )}
              data-product-path={colour.path}
            >
              <img
                src={colour.image}
                alt={colour.alt}
                width={1536}
                height={1024}
                loading="lazy"
                decoding="async"
                className={cn(
                  "block aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]",
                  colour.id === active.id ? "opacity-100" : "opacity-80",
                )}
              />
              <span className="text-sm text-foreground">{colour.name}</span>
              <span className="text-[0.56rem] uppercase tracking-[0.2em] text-muted-foreground">
                {colour.coating === "Uncoated" ? "Mirror base" : "PVD + mirror"}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </Section>
  );
}

/* ---------------------------------------------------------- 05 gallery */

export function MirrorGallery() {
  return (
    <section className="border-y border-border bg-accent/10">
      <div className="mx-auto max-w-[1500px] px-4 py-20 sm:px-8 lg:px-10 lg:py-32">
        <Reveal variant="text">
          <Eyebrow>Material gallery</Eyebrow>
        </Reveal>
        <Reveal variant="up" delay={80}>
          <h2 className="mt-6 font-display text-4xl leading-[1.02] text-foreground sm:text-5xl lg:text-[4.2rem]">
            LOOK CLOSER.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          {mirrorGallery.map((item, i) => (
            <Reveal key={item.id} variant="up" delay={i * 70} className={cn("lg:col-span-6", item.span)}>
              <figure className="group m-0 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  width={1536}
                  height={1024}
                  loading="lazy"
                  decoding="async"
                  className="block aspect-[3/2] w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                />
                <figcaption className="mt-3 text-[0.6rem] uppercase tracking-[0.22em] text-muted-foreground">
                  {item.label}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------- 06 reflection test */

export function MirrorReflectionTest() {
  const ref = useRef<HTMLDivElement>(null);
  const fine = useFinePointer();
  const [pos, setPos] = useState({ x: 50, y: 45 });

  const onMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!fine) return;
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;
      setPos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    },
    [fine],
  );

  return (
    <Section id="reflection">
      <Reveal variant="text">
        <Eyebrow>Interactive</Eyebrow>
      </Reveal>
      <Reveal variant="up" delay={80}>
        <h2 className="mt-6 font-display text-4xl leading-[1.02] text-foreground sm:text-5xl lg:text-[4.2rem]">
          THE REFLECTION TEST.
        </h2>
      </Reveal>
      <Reveal variant="up" delay={140}>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Mirror stainless steel does not just cover a wall — it returns the room. Move across the surface to see how
          light travels over architecture, furniture, planting and passing figures.
        </p>
      </Reveal>

      <Reveal variant="up" delay={200}>
        <div
          ref={ref}
          onPointerMove={onMove}
          className="relative mt-12 select-none overflow-hidden border border-border/70"
        >
          <img
            src={mirrorImages.hero}
            alt="Mirror stainless steel panels reflecting a lobby, light, planting and a passing figure"
            width={1920}
            height={1088}
            loading="lazy"
            decoding="async"
            className="block aspect-[16/9] w-full object-cover"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 mix-blend-screen transition-[background] duration-200"
            style={{
              background: `radial-gradient(55% 60% at ${pos.x}% ${pos.y}%, rgba(255,246,224,0.34), rgba(255,246,224,0.08) 42%, transparent 70%)`,
            }}
          />
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background: `radial-gradient(90% 90% at ${100 - pos.x}% ${100 - pos.y}%, transparent 30%, rgba(4,4,6,0.55))`,
            }}
          />
          <span className="pointer-events-none absolute bottom-4 left-4 bg-metal-black/70 px-3 py-1 text-[0.56rem] uppercase tracking-[0.24em] text-muted-foreground">
            Move the cursor across the surface
          </span>
        </div>
      </Reveal>
    </Section>
  );
}

/* ----------------------------------------------------- 07 applications */

export function MirrorApplications() {
  return (
    <Section id="applications">
      <Reveal variant="text">
        <Eyebrow>Applications</Eyebrow>
      </Reveal>
      <Reveal variant="up" delay={80}>
        <h2 className="mt-6 max-w-3xl font-display text-4xl leading-[1.02] text-foreground sm:text-5xl lg:text-[4.2rem]">
          BUILT FOR HIGH-IMPACT INTERIORS.
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {mirrorApplications.map((item, i) => (
          <Reveal
            key={item.id}
            variant="up"
            delay={i * 60}
            className={cn(item.tall && "sm:row-span-2")}
          >
            <figure className="group m-0 h-full overflow-hidden">
              <img
                src={item.image}
                alt={item.alt}
                width={item.tall ? 1024 : 1536}
                height={item.tall ? 1280 : 1024}
                loading="lazy"
                decoding="async"
                className={cn(
                  "block w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]",
                  item.tall ? "aspect-[4/5] sm:aspect-[3/5]" : "aspect-[3/2]",
                )}
              />
              <figcaption className="mt-4">
                <p className="font-display text-xl uppercase text-foreground">{item.name}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
      <p className="mt-10 max-w-2xl text-xs leading-relaxed text-muted-foreground">
        Suitability varies by environment. Grade, thickness, detailing and installation should be confirmed for each
        application — not every grade or finish is appropriate everywhere.
      </p>
    </Section>
  );
}

/* ----------------------------------------------------- 08 before/after */

function BeforeAfter({ entry }: { entry: (typeof mirrorBeforeAfter)[number] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(50);

  const setFromClientX = useCallback((clientX: number) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
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
    const move = (e: PointerEvent) => {
      if (dragging) setFromClientX(e.clientX);
    };
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
      <div ref={ref} className="relative touch-pan-y select-none overflow-hidden border border-border/70">
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
        <span aria-hidden className="pointer-events-none absolute inset-y-0 w-px bg-champagne" style={{ left: `${value}%` }} />
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

export function MirrorBeforeAfter() {
  return (
    <Section>
      <Reveal variant="text">
        <Eyebrow>Application reference</Eyebrow>
      </Reveal>
      <Reveal variant="up" delay={80}>
        <h2 className="mt-6 font-display text-4xl leading-[1.02] text-foreground sm:text-5xl lg:text-[4.2rem]">
          PLAIN ARCHITECTURE → MIRROR ARCHITECTURE.
        </h2>
      </Reveal>
      <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        Drag each slider. These are application reference images used to show the effect of the material — they are
        not STEELX project photography.
      </p>
      <div className="mt-12 grid gap-10 lg:grid-cols-3">
        {mirrorBeforeAfter.map((entry, i) => (
          <Reveal key={entry.id} variant="up" delay={i * 90}>
            <BeforeAfter entry={entry} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* --------------------------------------------------- 09 fabrication etc */

export function MirrorFabrication() {
  return (
    <section className="border-y border-border bg-accent/15">
      <div className="mx-auto max-w-[1500px] px-4 py-20 sm:px-8 lg:px-10 lg:py-32">
        <Reveal variant="text">
          <Eyebrow>Fabrication</Eyebrow>
        </Reveal>
        <Reveal variant="up" delay={80}>
          <h2 className="mt-6 font-display text-4xl leading-[1.02] text-foreground sm:text-5xl lg:text-[4.2rem]">
            FROM SHEET TO DETAIL.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {mirrorFabrication.map((item, i) => (
            <Reveal key={item.step} variant="up" delay={i * 80} className="bg-background p-7">
              <p className="text-[0.6rem] uppercase tracking-[0.24em] text-champagne">0{i + 1}</p>
              <p className="mt-4 font-display text-3xl uppercase text-foreground">{item.step}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </Reveal>
          ))}
        </div>

        <ul className="mt-10 flex flex-wrap gap-3">
          {mirrorFabricationServices.map((service) => (
            <li key={service} className="border border-border px-4 py-2 text-[0.62rem] uppercase tracking-[0.2em] text-muted-foreground">
              {service}
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-2xl text-xs leading-relaxed text-muted-foreground">
          Processing availability depends on grade, thickness, finish and project requirements.
        </p>
      </div>
    </section>
  );
}

export function MirrorProtection() {
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-20">
        <Reveal variant="up">
          <img
            src={mirrorImages.edge}
            alt="Protective film being peeled from the edge of a mirror stainless steel sheet"
            width={1536}
            height={1024}
            loading="lazy"
            decoding="async"
            className="block aspect-[3/2] w-full object-cover"
          />
        </Reveal>
        <div>
          <Reveal variant="text">
            <Eyebrow>Handling</Eyebrow>
          </Reveal>
          <Reveal variant="up" delay={80}>
            <h2 className="mt-6 font-display text-4xl leading-[1.02] text-foreground sm:text-5xl">
              PROTECTED UNTIL INSTALLATION.
            </h2>
          </Reveal>
          <Reveal variant="up" delay={140}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              Protective film may be applied during handling, transport and installation to reduce surface damage and
              handling marks. Film type and coverage are confirmed with your order.
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

export function MirrorCare() {
  return (
    <section className="border-y border-border">
      <div className="mx-auto max-w-[1500px] px-4 py-20 sm:px-8 lg:px-10 lg:py-28">
        <Reveal variant="text">
          <Eyebrow>Maintenance</Eyebrow>
        </Reveal>
        <Reveal variant="up" delay={80}>
          <h2 className="mt-6 font-display text-4xl leading-[1.02] text-foreground sm:text-5xl">
            KEEP THE REFLECTION CLEAN.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-[0.62rem] uppercase tracking-[0.24em] text-champagne">Recommended</p>
            <ul className="mt-5 space-y-3 border-t border-border pt-5 text-sm text-foreground">
              {mirrorCare.recommended.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[0.62rem] uppercase tracking-[0.24em] text-muted-foreground">Avoid</p>
            <ul className="mt-5 space-y-3 border-t border-border pt-5 text-sm text-muted-foreground">
              {mirrorCare.avoid.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------- 10 comparison */

export function MirrorVsFinishes() {
  return (
    <Section>
      <Reveal variant="text">
        <Eyebrow>Compare</Eyebrow>
      </Reveal>
      <Reveal variant="up" delay={80}>
        <h2 className="mt-6 font-display text-4xl leading-[1.02] text-foreground sm:text-5xl lg:text-[4.2rem]">
          MIRROR VS OTHER FINISHES.
        </h2>
      </Reveal>
      <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {mirrorComparison.map((item) => (
          <div key={item.slug} className="flex flex-col bg-background p-7">
            <p className="font-display text-2xl uppercase text-foreground">{item.name}</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            {item.slug === "mirror" ? (
              <span className="mt-auto pt-6 text-[0.62rem] uppercase tracking-[0.2em] text-champagne">
                You are here
              </span>
            ) : (
              <Link
                to="/designer-sheets/$finish"
                params={{ finish: item.slug }}
                className="mt-auto inline-flex items-center gap-2 pt-6 text-[0.62rem] uppercase tracking-[0.2em] text-champagne transition-opacity hover:opacity-70"
              >
                View finish
                <ArrowUpRight className="h-3 w-3" />
              </Link>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ----------------------------------------------------- 11 designer note */

export function MirrorDesignerNote() {
  return (
    <section className="border-y border-border bg-accent/20">
      <div className="mx-auto max-w-[1500px] px-4 py-20 sm:px-8 lg:px-10 lg:py-28">
        <Reveal variant="up">
          <h2 className="max-w-4xl font-display text-4xl leading-[1.02] text-foreground sm:text-5xl lg:text-[4.4rem]">
            MIRROR IS ABOUT LIGHT.
          </h2>
        </Reveal>
        <Reveal variant="up" delay={120}>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground">
            The appearance of a mirror stainless-steel surface changes with the architecture around it. Daylight,
            artificial lighting, viewing angle, surrounding materials and panel flatness all influence the final
            visual result. We recommend reviewing a physical sample in the actual space before final specification.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------- 12 sample CTA */

export function MirrorSampleCta({ onSample }: { onSample: () => void }) {
  return (
    <section id="sample" className="relative isolate overflow-hidden">
      <img
        src={mirrorImages.fullSheet}
        alt="Mirror stainless steel sheet in a dark studio"
        width={1536}
        height={1024}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div aria-hidden className="absolute inset-0 bg-metal-black/78" />
      <div className="relative mx-auto max-w-[1500px] px-4 py-24 sm:px-8 lg:px-10 lg:py-36">
        <Reveal variant="up">
          <h2 className="max-w-3xl font-display text-5xl leading-[0.98] text-foreground sm:text-6xl lg:text-[6rem]">
            SEE IT IN PERSON.
          </h2>
        </Reveal>
        <Reveal variant="up" delay={120}>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
            Reflection, colour and surface quality are best judged under real light. Request a physical STEELX sample
            for your project.
          </p>
        </Reveal>
        <Reveal variant="up" delay={200}>
          <div className="mt-10 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={onSample}
              className="inline-flex items-center gap-3 bg-champagne-gradient px-8 py-4 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-metal-black"
            >
              Request a mirror sample
              <ArrowUpRight className="h-4 w-4" />
            </button>
            <a
              href="#quote"
              className="inline-flex items-center gap-3 border border-champagne/60 px-8 py-4 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-champagne transition-colors hover:bg-champagne hover:text-metal-black"
            >
              Request project quote
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
