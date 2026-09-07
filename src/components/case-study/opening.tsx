import { useEffect, useRef, useState } from "react";

import { ClipReveal, Parallax } from "@/components/motion";
import { Reveal } from "@/components/reveal";
import { caseStudy, sequence } from "@/data/case-study";
import { cn } from "@/lib/utils";

/* ── 1. Cinematic hero ───────────────────────────────────────── */
export function CaseHero() {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setLoaded(true), 80);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = imgRef.current;
      if (!el) return;
      const y = Math.min(window.scrollY, window.innerHeight);
      el.style.transform = `translate3d(0, ${(y * 0.12).toFixed(2)}px, 0)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden lg:min-h-screen">
      <div className="absolute inset-0">
        <div
          ref={imgRef}
          className="h-full w-full will-change-transform"
          style={{ transform: "translate3d(0,0,0)" }}
        >
          <img
            src={sequence[0]!.src}
            alt={sequence[0]!.alt}
            width={1920}
            height={1088}
            className={cn(
              "h-[112%] w-full object-cover grade-steel",
              "motion-safe:transition-transform motion-safe:duration-[2200ms] motion-safe:ease-[cubic-bezier(0.16,1,0.3,1)]",
              loaded ? "scale-100" : "scale-[1.08]",
            )}
          />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/70 via-background/10 to-background/85" />
        <div className="pointer-events-none absolute inset-0 film-grain" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-[1600px] flex-col justify-between px-5 pb-10 pt-28 sm:px-8 lg:min-h-screen lg:px-10 lg:pb-14 lg:pt-36">
        <Reveal variant="text" as="p" className="text-[0.68rem] uppercase tracking-[0.34em] text-champagne">
          {caseStudy.category}
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <ClipReveal delay={120}>
              <h1 className="font-display uppercase leading-[0.82] tracking-[-0.055em] text-foreground text-[clamp(3.25rem,10vw,11.25rem)]">
                Material <span className="text-champagne/70">/</span> Light{" "}
                <span className="text-champagne/70">/</span> Space
              </h1>
            </ClipReveal>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <Reveal variant="up" delay={520}>
              <p className="text-[0.68rem] uppercase tracking-[0.24em] text-muted-foreground">
                {caseStudy.location}
              </p>
              <p className="mt-1 font-display text-2xl text-foreground">{caseStudy.year}</p>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground lg:ml-auto">
                {caseStudy.short}
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal variant="row" delay={720} className="mt-10 flex items-center gap-4">
          <span className="text-[0.6rem] uppercase tracking-[0.3em] text-muted-foreground">
            Scroll
          </span>
          <span className="relative h-px w-16 overflow-hidden bg-hairline">
            <span className="absolute inset-y-0 left-0 w-6 bg-champagne motion-safe:animate-[rail_2.4s_ease-in-out_infinite]" />
          </span>
        </Reveal>
      </div>
    </section>
  );
}

/* ── 3. Sticky image index + 5/6/7. Cinematic sequence ───────── */
export function ImageNarrative() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const i = refs.current.indexOf(e.target as HTMLElement);
            if (i >= 0) setActive(i);
          }
        }
      },
      { threshold: 0.4 },
    );
    for (const el of refs.current) if (el) obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const goTo = (i: number) => {
    refs.current[i]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="relative bg-background">
      {/* index */}
      <nav
        aria-label="Image index"
        className="sticky top-16 z-30 border-y border-hairline bg-background/78 backdrop-blur-[14px] lg:top-20"
      >
        <ul className="mx-auto flex max-w-[1600px] gap-6 overflow-x-auto px-5 py-3 sm:px-8 lg:px-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {sequence.map((item, i) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => goTo(i)}
                aria-current={active === i ? "true" : undefined}
                className={cn(
                  "font-display text-sm tracking-[0.18em] transition-all duration-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-champagne",
                  active === i ? "text-champagne" : "text-foreground/40 hover:text-foreground/70",
                )}
              >
                {item.index}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {sequence.map((item, i) => (
        <div key={item.id}>
          <SequenceFigure
            item={item}
            ref={(el) => {
              refs.current[i] = el;
            }}
          />
          {i === 2 ? <MetalStatement /> : null}
        </div>
      ))}
    </div>
  );
}

const widthFor: Record<string, string> = {
  full: "w-full",
  right: "w-full lg:ml-auto lg:w-[70%]",
  viewport: "w-full",
  left: "w-full lg:mr-auto lg:w-[55%]",
  portrait: "mx-auto w-full sm:w-[78%] lg:w-[46%]",
  closing: "w-full",
};

const aspectFor: Record<string, string> = {
  full: "aspect-[16/9]",
  right: "aspect-[4/3]",
  viewport: "aspect-[4/5] sm:aspect-[16/9] lg:h-[92vh] lg:aspect-auto",
  left: "aspect-[4/3]",
  portrait: "aspect-[2/3]",
  closing: "aspect-[16/9]",
};

function SequenceFigure({
  item,
  ref,
}: {
  item: (typeof sequence)[number];
  ref: (el: HTMLElement | null) => void;
}) {
  const bleed = item.layout === "viewport" || item.layout === "full" || item.layout === "closing";

  return (
    <figure
      ref={ref}
      id={item.id}
      className={cn(
        "mx-auto max-w-[1600px] scroll-mt-28 px-5 py-14 sm:px-8 lg:px-10 lg:py-24",
        bleed && "lg:max-w-none lg:px-0",
      )}
    >
      <div className={widthFor[item.layout]}>
        <ClipReveal>
          <div
            className={cn(
              "group relative w-full overflow-hidden metal-sheen vignette",
              aspectFor[item.layout],
            )}
          >
            <Parallax amount={44} className="h-full w-full">
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                data-cursor="VIEW"
                className="h-full w-full object-cover grade-steel transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
              />
            </Parallax>
          </div>
        </ClipReveal>
        <figcaption
          className={cn(
            "mt-4 flex flex-wrap gap-x-6 gap-y-1 text-[0.65rem] uppercase tracking-[0.12em] text-muted-foreground",
            bleed && "lg:mx-auto lg:max-w-[1600px] lg:px-10",
          )}
        >
          <span className="text-foreground/70">
            {item.index} / {item.caption}
          </span>
          <span>{item.finish}</span>
        </figcaption>
      </div>
    </figure>
  );
}

/* ── 4. Editorial intro ──────────────────────────────────────── */
export function CaseIntro() {
  return (
    <section className="bg-[oklch(0.95_0.006_85)] py-24 text-[oklch(0.16_0.004_250)] lg:py-40">
      <div className="mx-auto grid max-w-[1600px] gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:px-10">
        <div className="lg:col-span-7">
          <Reveal variant="up">
            <h2 className="font-display uppercase leading-[0.92] tracking-[-0.045em] text-[clamp(2rem,4.6vw,4.4rem)]">
              The surface is not the finish.
              <br />
              It is the experience.
            </h2>
          </Reveal>
        </div>
        <div className="lg:col-span-4 lg:col-start-9">
          <Reveal variant="up" delay={140}>
            <p className="text-base leading-[1.65] text-[oklch(0.16_0.004_250/78%)] lg:text-lg">
              Material / Light / Space explores how PVD-coated stainless steel can move beyond
              cladding and become an active part of architectural atmosphere.
            </p>
          </Reveal>
          <Reveal variant="row" delay={240}>
            <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-[oklch(0.16_0.004_250/16%)] pt-6 text-xs uppercase tracking-[0.16em]">
              <div>
                <dt className="opacity-50">Client</dt>
                <dd className="mt-1">{caseStudy.client}</dd>
              </div>
              <div>
                <dt className="opacity-50">Discipline</dt>
                <dd className="mt-1 normal-case tracking-normal">{caseStudy.discipline}</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ── 8. Dark editorial statement ─────────────────────────────── */
function MetalStatement() {
  const lines = ["Metal", "Becomes", "Atmosphere."];
  return (
    <section className="relative overflow-hidden bg-graphite py-28 lg:py-48">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-45 motion-safe:animate-[sheen_9s_linear_infinite]"
        style={{
          background:
            "linear-gradient(115deg, transparent 30%, oklch(0.86 0.055 85 / 16%) 48%, transparent 66%)",
          backgroundSize: "260% 100%",
        }}
      />
      <div className="relative mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-10">
        {lines.map((line, i) => (
          <ClipReveal key={line} delay={i * 160}>
            <p className="font-display uppercase leading-[0.86] tracking-[-0.055em] text-foreground text-[clamp(2.75rem,10vw,9rem)]">
              {line}
            </p>
          </ClipReveal>
        ))}
      </div>
    </section>
  );
}
