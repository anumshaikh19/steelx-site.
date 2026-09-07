import { useEffect, useRef, useState } from "react";

import heroMacro from "@/assets/ds-hero-macro.jpg";
import { colours, finishes, pvdFinish, type SheetFinish } from "@/data/designer-sheets";
import { cn } from "@/lib/utils";

import { DsReveal, DsSheet, useSectionProgress } from "./primitives";

const roughness: Record<string, number> = {
  mirror: 0.05,
  stamped: 0.4,
  hairline: 0.25,
  etched: 0.45,
  embossed: 0.5,
  "bead-blast": 0.85,
  "water-ripple": 0.2,
};

/* ------------------------------------------------------------------ HERO */

export function DsHero() {
  const [loaded, setLoaded] = useState(false);
  const { ref, progress } = useSectionProgress<HTMLElement>();

  useEffect(() => {
    const id = window.setTimeout(() => setLoaded(true), 60);
    return () => window.clearTimeout(id);
  }, []);

  const zoom = 1.08 + progress * 0.22;

  return (
    <section ref={ref} className="relative min-h-[100svh] overflow-hidden bg-[var(--ds-dark)]">
      <img
        src={heroMacro}
        alt="Extreme macro of a stainless steel designer sheet surface"
        width={1920}
        height={1200}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover transition-opacity duration-[2000ms]"
        style={{
          transform: `scale(${loaded ? zoom : 1.14})`,
          opacity: loaded ? 1 : 0,
          transition: "transform 2400ms cubic-bezier(0.16,1,0.3,1), opacity 1800ms cubic-bezier(0.16,1,0.3,1)",
        }}
      />
      <span
        aria-hidden
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, rgba(8,8,8,0.55), rgba(8,8,8,0.18) 40%, rgba(8,8,8,0.88))" }}
      />

      <div className="relative flex min-h-[100svh] flex-col justify-between px-5 pb-10 pt-28 text-[#f4f2ed] sm:px-10 lg:px-16 lg:pb-16">
        <p className="ds-label opacity-70">STEELX / DESIGNER SHEETS</p>

        <div className="max-w-[1500px]">
          <h1
            className="ds-display text-[13vw] leading-[0.86] sm:text-[10vw] lg:text-[7.4vw]"
            style={{
              clipPath: loaded ? "inset(0 0 0 0)" : "inset(0 0 100% 0)",
              transition: "clip-path 1800ms cubic-bezier(0.16,1,0.3,1) 200ms",
            }}
          >
            Stainless steel
            <br />
            designer sheets.
          </h1>
          <p
            className="mt-8 max-w-xl text-lg font-light leading-relaxed sm:text-xl"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "none" : "translateY(20px)",
              transition: "all 1600ms cubic-bezier(0.16,1,0.3,1) 700ms",
            }}
          >
            Surface becomes architecture.
          </p>
          <p
            className="mt-4 max-w-xl text-sm leading-relaxed opacity-70"
            style={{
              opacity: loaded ? 0.7 : 0,
              transition: "opacity 1600ms cubic-bezier(0.16,1,0.3,1) 900ms",
            }}
          >
            Explore a collection of decorative stainless steel sheets engineered through reflection,
            texture, pattern and colour.
          </p>

          <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-12">
            <a href="#collection" className="ds-arrow ds-label border-b border-current pb-2">
              Explore the collection <span aria-hidden>→</span>
            </a>
            <a href="#sample" className="ds-arrow ds-label pb-2 opacity-70">
              Request a sample <span aria-hidden>→</span>
            </a>
          </div>
        </div>

        <p className="ds-label mt-16 opacity-50">Scroll</p>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- MATERIAL INDEX */

export function DsMaterialIndex() {
  const [active, setActive] = useState("mirror");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.9);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const items = [...finishes.map((f) => ({ id: f.id, index: f.index, name: f.name })), { id: "pvd", index: "08", name: "PVD" }];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    for (const item of items) {
      const node = document.getElementById(item.id);
      if (node) observer.observe(node);
    }
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <nav
        aria-label="Finish index"
        className={cn(
          "pointer-events-none fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 transition-opacity duration-1000 lg:block",
          visible ? "opacity-100" : "opacity-0",
        )}
      >
        <ul className="pointer-events-auto space-y-3 mix-blend-difference">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={cn(
                  "ds-label block text-[#f4f2ed] transition-opacity duration-700",
                  active === item.id ? "opacity-100" : "opacity-35 hover:opacity-70",
                )}
              >
                <span className="mr-3">{item.index}</span>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <nav
        aria-label="Finish index"
        className="ds-noscroll sticky top-0 z-40 flex gap-7 overflow-x-auto border-b border-black/10 bg-[var(--ds-bg)]/90 px-5 py-3 backdrop-blur lg:hidden"
      >
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={cn(
              "ds-label shrink-0 whitespace-nowrap transition-opacity duration-500",
              active === item.id ? "opacity-100" : "opacity-40",
            )}
          >
            {item.index} {item.name}
          </a>
        ))}
      </nav>
    </>
  );
}

/* -------------------------------------------------------------- INTRO */

export function DsIntro() {
  return (
    <section className="px-5 py-28 sm:px-10 lg:px-16 lg:py-52">
      <DsReveal>
        <p className="ds-label opacity-50">STEELX / Designer Sheets</p>
      </DsReveal>
      <DsReveal delay={120}>
        <h2 className="ds-display mt-14 max-w-[16ch] text-[13vw] sm:text-[9vw] lg:text-[6.6vw]">
          The surface changes everything.
        </h2>
      </DsReveal>
      <div className="mt-20 grid gap-10 lg:mt-32 lg:grid-cols-[1fr_auto_1fr] lg:gap-20">
        <DsReveal delay={200}>
          <p className="max-w-md text-lg font-light leading-relaxed lg:ml-auto">
            Stainless steel is more than a substrate. Through finish, pattern, texture and colour, it
            becomes an architectural language.
          </p>
        </DsReveal>
        <div className="hidden w-px bg-black/10 lg:block" />
        <DsReveal delay={300}>
          <p className="max-w-md text-lg font-light leading-relaxed opacity-60">
            Explore surfaces created for spaces where material, light and detail matter.
          </p>
        </DsReveal>
      </div>
    </section>
  );
}

/* --------------------------------------------------------- COLLECTION OPEN */

export function DsCollectionOpening() {
  return (
    <section id="collection" className="border-y border-black/10 px-5 py-24 sm:px-10 lg:px-16 lg:py-36">
      <DsReveal>
        <p className="ds-label opacity-50">The collection</p>
      </DsReveal>
      <DsReveal delay={120}>
        <p className="ds-display mt-10 max-w-[14ch] text-[10vw] sm:text-[6.5vw] lg:text-[4.6vw]">
          Seven surface languages. One material.
        </p>
      </DsReveal>
    </section>
  );
}

/* ------------------------------------------------------- FINISH COMPOSITIONS */

function FinishFrame({ finish, className }: { finish: SheetFinish; className: string }) {
  return (
    <DsSheet
      surface={{
        image: finish.image,
        alt: finish.alt,
        roughness: roughness[finish.id] ?? 0.4,
      }}
      className={className}
    />
  );
}

function MetaRow({ meta, tone = "dark" }: { meta: readonly string[]; tone?: "dark" | "light" }) {
  return (
    <dl className={cn("grid gap-6 sm:grid-cols-3", tone === "light" && "text-[#f4f2ed]")}>
      {meta.map((entry, i) => (
        <div key={entry} className="border-t border-current/20 pt-4">
          <dt className="ds-label opacity-45">{["Character", "Visual", "Material"][i] ?? "Detail"}</dt>
          <dd className="mt-3 text-sm uppercase tracking-[0.12em]">{entry}</dd>
        </div>
      ))}
    </dl>
  );
}

/** 01 — Mirror. Full-bleed, luminous, light travelling across the sheet. */
export function DsMirror() {
  const finish = finishes[0]!;
  return (
    <section id={finish.id} className="relative isolate overflow-hidden bg-[var(--ds-dark)] text-[#f4f2ed]">
      <div className="ds-sweep relative h-[75svh] overflow-hidden lg:h-[92svh]">
        <img src={finish.image} alt={finish.alt} loading="lazy" className="h-full w-full object-cover" />
        <span aria-hidden className="absolute inset-0 bg-black/25" />
      </div>
      <div className="grid gap-12 px-5 py-20 sm:px-10 lg:grid-cols-[1.2fr_1fr] lg:gap-24 lg:px-16 lg:py-28">
        <div>
          <p className="ds-label opacity-55">{finish.index} / {finish.name}</p>
          <DsReveal>
            <h3 className="ds-display mt-8 text-[11vw] sm:text-[7vw] lg:text-[4.4vw]">
              {finish.headline[0]}
              <br />
              {finish.headline[1]}
            </h3>
          </DsReveal>
        </div>
        <div className="flex flex-col justify-end gap-10">
          <p className="max-w-sm text-sm leading-relaxed opacity-65">{finish.note}</p>
          <MetaRow meta={finish.meta} tone="light" />
          <a href="#configurator" className="ds-arrow ds-label w-fit border-b border-current pb-2">
            Explore mirror <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

/** 02 — Stamped. Off-set macro against pale ground. */
export function DsStamped() {
  const finish = finishes[1]!;
  return (
    <section id={finish.id} className="px-5 py-24 sm:px-10 lg:px-16 lg:py-40">
      <div className="grid items-end gap-12 lg:grid-cols-[0.9fr_1.4fr] lg:gap-20">
        <div>
          <p className="ds-label opacity-50">{finish.index} / {finish.name}</p>
          <DsReveal>
            <h3 className="ds-display mt-8 text-[11vw] sm:text-[7vw] lg:text-[4vw]">
              {finish.headline[0]}
              <br />
              {finish.headline[1]}
            </h3>
          </DsReveal>
          <p className="mt-10 max-w-sm text-sm leading-relaxed opacity-60">{finish.note}</p>
          <div className="mt-10">
            <MetaRow meta={finish.meta} />
          </div>
        </div>
        <DsReveal delay={150}>
          <FinishFrame finish={finish} className="h-[52svh] lg:h-[80svh]" />
        </DsReveal>
      </div>
    </section>
  );
}

/** 03 — Hairline. Ultra-wide band, grain travelling horizontally. */
export function DsHairline() {
  const finish = finishes[2]!;
  const { ref, progress } = useSectionProgress<HTMLElement>();
  return (
    <section id={finish.id} ref={ref} className="overflow-hidden bg-[var(--ds-graphite)] py-20 text-[#f4f2ed] lg:py-32">
      <div className="px-5 sm:px-10 lg:px-16">
        <p className="ds-label opacity-55">{finish.index} / {finish.name}</p>
        <DsReveal>
          <h3 className="ds-display mt-8 text-[11vw] sm:text-[7vw] lg:text-[4vw]">
            {finish.headline[0]} {finish.headline[1]}
          </h3>
        </DsReveal>
      </div>
      <div className="ds-sweep relative mt-14 h-[38svh] overflow-hidden lg:h-[52svh]">
        <img
          src={finish.image}
          alt={finish.alt}
          loading="lazy"
          className="h-full w-[125%] max-w-none object-cover"
          style={{ transform: `translateX(${-progress * 18}%)`, transition: "transform 200ms linear" }}
        />
      </div>
      <div className="mt-14 grid gap-10 px-5 sm:px-10 lg:grid-cols-[1fr_1fr] lg:px-16">
        <p className="max-w-sm text-sm leading-relaxed opacity-65">{finish.note}</p>
        <MetaRow meta={finish.meta} tone="light" />
      </div>
    </section>
  );
}

/** 04 — Etched. Dark, high contrast, parallax macro. */
export function DsEtched() {
  const finish = finishes[3]!;
  const { ref, progress } = useSectionProgress<HTMLElement>();
  return (
    <section id={finish.id} ref={ref} className="relative overflow-hidden bg-[var(--ds-dark)] text-[#f4f2ed]">
      <div className="relative h-[85svh] overflow-hidden lg:h-[100svh]">
        <img
          src={finish.image}
          alt={finish.alt}
          loading="lazy"
          className="absolute inset-0 h-[128%] w-full object-cover"
          style={{ transform: `translateY(${-progress * 16}%)` }}
        />
        <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/55" />
        <div className="relative flex h-full flex-col justify-between px-5 py-16 sm:px-10 lg:px-16">
          <p className="ds-label opacity-60">{finish.index} / {finish.name}</p>
          <div>
            <DsReveal>
              <h3 className="ds-display max-w-[12ch] text-[12vw] sm:text-[7.5vw] lg:text-[5vw]">
                {finish.headline[0]}
                <br />
                {finish.headline[1]}
              </h3>
            </DsReveal>
            <p className="mt-8 max-w-sm text-sm leading-relaxed opacity-65">{finish.note}</p>
            <div className="mt-10 max-w-2xl">
              <MetaRow meta={finish.meta} tone="light" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** 05 — Embossed. Light travelling across the raised surface with scroll. */
export function DsEmbossed() {
  const finish = finishes[4]!;
  const { ref, progress } = useSectionProgress<HTMLElement>();
  return (
    <section id={finish.id} ref={ref} className="px-5 py-24 sm:px-10 lg:px-16 lg:py-40">
      <div className="grid gap-14 lg:grid-cols-[1.4fr_0.8fr] lg:gap-20">
        <DsReveal>
          <div className="relative h-[55svh] overflow-hidden lg:h-[85svh]">
            <img src={finish.image} alt={finish.alt} loading="lazy" className="h-full w-full object-cover" />
            <span
              aria-hidden
              className="absolute inset-0"
              style={{
                background: `linear-gradient(${70 + progress * 60}deg, rgba(0,0,0,0.42) 0%, transparent ${20 + progress * 45}%, rgba(255,255,255,0.28) ${34 + progress * 45}%, transparent ${58 + progress * 40}%)`,
              }}
            />
          </div>
        </DsReveal>
        <div className="flex flex-col justify-between gap-12">
          <div>
            <p className="ds-label opacity-50">{finish.index} / {finish.name}</p>
            <h3 className="ds-display mt-8 text-[11vw] sm:text-[7vw] lg:text-[3.6vw]">
              {finish.headline[0]}
              <br />
              {finish.headline[1]}
            </h3>
          </div>
          <div>
            <p className="max-w-sm text-sm leading-relaxed opacity-60">{finish.note}</p>
            <ul className="mt-10 space-y-4">
              {finish.meta.map((entry) => (
                <li key={entry} className="ds-label border-t border-black/15 pt-4">
                  {entry}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/** 06 — Bead blast. Quiet, gallery-like, centred. */
export function DsBeadBlast() {
  const finish = finishes[5]!;
  return (
    <section id={finish.id} className="bg-[#eceae4] px-5 py-28 sm:px-10 lg:px-16 lg:py-48">
      <div className="mx-auto max-w-4xl text-center">
        <p className="ds-label opacity-50">{finish.index} / {finish.name}</p>
        <DsReveal>
          <h3 className="ds-display mx-auto mt-10 max-w-[10ch] text-[13vw] sm:text-[8vw] lg:text-[5vw]">
            {finish.headline[0]}
            <br />
            {finish.headline[1]}
          </h3>
        </DsReveal>
      </div>
      <DsReveal delay={150}>
        <div className="mx-auto mt-20 h-[45svh] max-w-5xl overflow-hidden lg:h-[62svh]">
          <img src={finish.image} alt={finish.alt} loading="lazy" className="h-full w-full object-cover" />
        </div>
      </DsReveal>
      <div className="mx-auto mt-16 max-w-3xl text-center">
        <p className="text-sm leading-relaxed opacity-60">{finish.note}</p>
        <ul className="mt-10 flex flex-wrap justify-center gap-x-10 gap-y-4">
          {finish.meta.map((entry) => (
            <li key={entry} className="ds-label opacity-70">
              {entry}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** 07 — Water ripple. The most cinematic composition. */
export function DsWaterRipple() {
  const finish = finishes[6]!;
  const { ref, progress } = useSectionProgress<HTMLElement>();
  return (
    <section id={finish.id} ref={ref} className="relative overflow-hidden bg-[var(--ds-dark)] text-[#f4f2ed]">
      <div className="relative h-[92svh] overflow-hidden lg:h-[112svh]">
        <img
          src={finish.image}
          alt={finish.alt}
          loading="lazy"
          className="absolute inset-0 h-[120%] w-full object-cover"
          style={{ transform: `translateY(${-progress * 14}%) scale(${1 + progress * 0.06})` }}
        />
        <span
          aria-hidden
          className="absolute inset-0"
          style={{
            background: `linear-gradient(${100 + progress * 80}deg, transparent 30%, rgba(255,255,255,0.22) ${44 + progress * 20}%, transparent 62%)`,
          }}
        />
        <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="relative flex h-full items-end px-5 pb-16 sm:px-10 lg:px-16 lg:pb-24">
          <div>
            <p className="ds-label opacity-60">{finish.index} / {finish.name}</p>
            <DsReveal>
              <h3 className="ds-display mt-8 text-[15vw] sm:text-[9vw] lg:text-[6vw]">
                {finish.headline[0]}
                <br />
                {finish.headline[1]}
              </h3>
            </DsReveal>
            <p className="mt-8 max-w-sm text-sm leading-relaxed opacity-65">{finish.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ 08 PVD */

export function DsPvd() {
  const [colour, setColour] = useState(colours[3]!);
  return (
    <section id="pvd" className="bg-[var(--ds-dark)] px-5 py-24 text-[#f4f2ed] sm:px-10 lg:px-16 lg:py-40">
      <p className="ds-label opacity-55">{pvdFinish.index} / PVD</p>
      <DsReveal>
        <h3 className="ds-display mt-8 max-w-[12ch] text-[12vw] sm:text-[7.5vw] lg:text-[5vw]">
          Colour becomes material.
        </h3>
      </DsReveal>

      <div className="mt-16 grid gap-14 lg:grid-cols-[1.3fr_0.7fr] lg:gap-20">
        <DsSheet
          surface={{
            image: pvdFinish.image,
            alt: `${pvdFinish.alt} — ${colour.name}`,
            roughness: 0.12,
            tint: colour.tint,
            glow: colour.glow,
          }}
          className="h-[55svh] lg:h-[80svh]"
        />
        <div className="flex flex-col justify-end gap-10">
          <p className="max-w-sm text-sm leading-relaxed opacity-65">{pvdFinish.note}</p>
          <fieldset>
            <legend className="ds-label opacity-50">Select a colour</legend>
            <ul className="mt-6 space-y-2">
              {colours.map((entry) => (
                <li key={entry.id}>
                  <button
                    type="button"
                    onClick={() => setColour(entry)}
                    aria-pressed={colour.id === entry.id}
                    className={cn(
                      "flex w-full items-center gap-5 border-t border-white/15 py-4 text-left transition-opacity duration-700",
                      colour.id === entry.id ? "opacity-100" : "opacity-45 hover:opacity-80",
                    )}
                  >
                    <span aria-hidden className="h-6 w-10 shrink-0" style={{ background: entry.swatch }} />
                    <span className="ds-label">{entry.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </fieldset>
        </div>
      </div>
    </section>
  );
}
