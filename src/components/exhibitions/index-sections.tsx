import { useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { ClipReveal, HorizontalRail, Parallax } from "@/components/motion";
import { finishes } from "@/data/finishes";
import {
  exhibitionIndex,
  exhibitionImages,
  makingStages,
  materialCopy,
  storyBlocks,
  surfaceDetails,
} from "@/data/exhibitions";
import { cn } from "@/lib/utils";

/* ── 06 — Selected exhibitions index ─────────────────────────── */
export function ExhibitionArchive() {
  const [active, setActive] = useState<number | null>(null);
  const follow = useRef<HTMLDivElement | null>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = follow.current;
    if (!el) return;
    el.style.transform = `translate3d(${e.clientX + 24}px, ${e.clientY - 120}px, 0)`;
  };

  return (
    <section
      className="relative mx-auto max-w-[1600px] px-4 py-24 sm:px-8 lg:px-10 lg:py-36"
      onMouseMove={onMove}
    >
      <div className="grid gap-6 border-t border-hairline pt-6 lg:grid-cols-12">
        <Reveal variant="text" as="p" className="text-[0.62rem] uppercase tracking-[0.4em] text-champagne lg:col-span-3">
          02 / Selected exhibitions
        </Reveal>
        <Reveal variant="up" delay={100} className="lg:col-span-5 lg:col-start-8">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Installations, spatial experiments and material studies.
          </p>
        </Reveal>
      </div>

      <ul className="mt-12 border-t border-border">
        {exhibitionIndex.map((item, i) => {
          const inner = (
            <>
              <span className="font-display text-lg text-gunmetal transition-colors duration-500 group-hover:text-champagne lg:col-span-1 lg:text-2xl">
                {item.index}
              </span>
              <span className="font-display leading-[1.02] tracking-[-0.03em] text-foreground text-[clamp(1.4rem,3.4vw,2.6rem)] transition-all duration-500 group-hover:text-champagne lg:col-span-7 lg:group-hover:translate-x-2">
                {item.title}
              </span>
              <span className="text-[0.66rem] uppercase tracking-[0.24em] text-muted-foreground lg:col-span-3">
                {item.location} — {item.year}
              </span>
              <ArrowUpRight className="hidden h-5 w-5 text-muted-foreground transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-champagne lg:col-span-1 lg:block lg:justify-self-end" />
            </>
          );

          return (
            <li key={item.index} className="border-b border-border">
              <div
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive((v) => (v === i ? null : v))}
                className="group relative overflow-hidden"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 -translate-x-full bg-steel-gradient opacity-[0.07] transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0"
                />
                {item.slug ? (
                  <Link
                    to="/projects/$slug"
                    params={{ slug: item.slug }}
                    data-cursor="View"
                    className="relative grid min-h-[120px] items-center gap-3 py-7 lg:min-h-[150px] lg:grid-cols-12 lg:gap-6"
                  >
                    {inner}
                  </Link>
                ) : (
                  <div className="relative grid min-h-[120px] items-center gap-3 py-7 lg:min-h-[150px] lg:grid-cols-12 lg:gap-6">
                    {inner}
                  </div>
                )}
                <div className="relative pb-7 lg:hidden">
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover saturate-[0.45]"
                  />
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <div
        ref={follow}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-40 hidden lg:block"
        style={{ opacity: active === null ? 0 : 1, transition: "opacity 400ms ease" }}
      >
        <div
          className="h-56 w-80 overflow-hidden border border-hairline shadow-[0_40px_90px_-30px_oklch(0_0_0/85%)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ transform: active === null ? "scale(0.92) rotate(-3deg)" : "scale(1) rotate(-1.5deg)" }}
        >
          {active !== null ? (
            <img
              src={exhibitionIndex[active]!.image}
              alt=""
              className="h-full w-full object-cover grade-steel motion-safe:animate-[fade-in_600ms_cubic-bezier(0.16,1,0.3,1)]"
            />
          ) : null}
        </div>
      </div>
    </section>
  );
}

/* ── 07 — Large image storytelling ───────────────────────────── */
export function StorySequence() {
  return (
    <section className="space-y-28 py-8 lg:space-y-44 lg:py-16">
      {storyBlocks.map((block) => (
        <div
          key={block.id}
          className="mx-auto grid max-w-[1600px] items-center gap-10 px-4 sm:px-8 lg:grid-cols-12 lg:gap-14 lg:px-10"
        >
          <ClipReveal
            className={cn(
              "lg:col-span-7",
              block.layout === "text-left" && "lg:order-2 lg:col-start-6",
            )}
          >
            <div className="group relative aspect-[4/3] w-full overflow-hidden metal-sheen vignette film-grain lg:aspect-[3/2]">
              <Parallax amount={50} className="h-full w-full">
                <img
                  src={block.image}
                  alt={block.alt}
                  loading="lazy"
                  className="h-full w-full scale-[1.03] object-cover grade-steel transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.07]"
                />
              </Parallax>
            </div>
          </ClipReveal>
          <div className={cn("lg:col-span-4", block.layout === "text-left" && "lg:order-1 lg:col-start-1")}>
            <Reveal variant="up">
              <h3 className="font-display uppercase leading-[0.95] tracking-[-0.04em] text-foreground text-[clamp(1.8rem,4vw,3.4rem)]">
                {block.statement}
              </h3>
            </Reveal>
            <Reveal variant="up" delay={140}>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{block.text}</p>
            </Reveal>
          </div>
        </div>
      ))}

      <div className="mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-10">
        <ClipReveal>
          <Parallax amount={60} className="aspect-[16/9] w-full lg:aspect-[21/9]">
            <img
              src={exhibitionImages.detailA}
              alt="Detail junction between metal panels"
              loading="lazy"
              className="h-full w-full object-cover saturate-[0.4]"
            />
          </Parallax>
        </ClipReveal>
        <Reveal variant="up" delay={120}>
          <h3 className="mt-8 font-display uppercase leading-[0.9] tracking-[-0.05em] text-foreground text-[clamp(2rem,7vw,6rem)]">
            Detail is architecture.
          </h3>
        </Reveal>
      </div>
    </section>
  );
}

/* ── 08 + 09 — Surface studies and the material object ───────── */
export function SurfaceStudies() {
  const [active, setActive] = useState(finishes[0]!.id);
  const panel = useRef<HTMLDivElement | null>(null);
  const finish = finishes.find((f) => f.id === active) ?? finishes[0]!;
  const copy = materialCopy[finish.id];

  const onMove = (e: React.MouseEvent) => {
    const el = panel.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) / r.width;
    const y = (e.clientY - (r.top + r.height / 2)) / r.height;
    el.style.transform = `rotateY(${(x * 7).toFixed(2)}deg) rotateX(${(-y * 6).toFixed(2)}deg)`;
    el.style.setProperty("--spec-x", `${(((e.clientX - r.left) / r.width) * 100).toFixed(1)}%`);
    el.style.setProperty("--spec-y", `${(((e.clientY - r.top) / r.height) * 100).toFixed(1)}%`);
  };
  const onLeave = () => {
    if (panel.current) panel.current.style.transform = "rotateY(0deg) rotateX(0deg)";
  };

  return (
    <section className="relative overflow-hidden bg-metal-black py-24 lg:py-40">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-10">
        <div className="grid gap-6 border-t border-hairline pt-6 lg:grid-cols-12">
          <Reveal variant="text" as="p" className="text-[0.62rem] uppercase tracking-[0.4em] text-champagne lg:col-span-4">
            03 / Surface studies
          </Reveal>
          <Reveal variant="up" delay={120} className="lg:col-span-5 lg:col-start-8">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Engineered surface, designed for space. Select a tone to see how the finish behaves in
              a built environment.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7" style={{ perspective: "1200px" }}>
            <div
              ref={panel}
              onMouseMove={onMove}
              onMouseLeave={onLeave}
              className="relative aspect-[4/3] overflow-hidden metal-sheen vignette film-grain transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform"
            >
              {copy ? (
                <img
                  key={copy.image}
                  src={copy.image}
                  alt={copy.alt}
                  loading="lazy"
                  className="h-full w-full object-cover grade-steel motion-safe:animate-[fade-in_700ms_cubic-bezier(0.16,1,0.3,1)]"
                />
              ) : (
                <div className="h-full w-full" style={{ backgroundImage: finish.swatch }} />
              )}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-45"
                style={{ backgroundImage: finish.swatch }}
              />
              <div className="pointer-events-none absolute inset-0 metal-grain" />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-70 mix-blend-screen"
                style={{
                  background:
                    "radial-gradient(38% 46% at var(--spec-x, 50%) var(--spec-y, 40%), oklch(1 0 0 / 22%), transparent 70%)",
                }}
              />
            </div>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <p className="font-display uppercase leading-[0.95] tracking-[-0.04em] text-foreground text-[clamp(2rem,4.5vw,3.4rem)]">
              {finish.name}
            </p>
            <p className="mt-3 text-[0.66rem] uppercase tracking-[0.28em] text-champagne">
              {copy?.finish ?? finish.family}
            </p>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              {copy?.text ?? finish.note}
            </p>

            <div className="mt-8 grid grid-cols-4 gap-3">
              {finishes.slice(0, 8).map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setActive(f.id)}
                  aria-pressed={f.id === active}
                  aria-label={`Show ${f.name} finish`}
                  className={cn(
                    "group flex flex-col items-start gap-2 text-left",
                    f.id === active ? "opacity-100" : "opacity-60 hover:opacity-100",
                  )}
                >
                  <span
                    className={cn(
                      "h-12 w-full border transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1",
                      f.id === active
                        ? "border-champagne shadow-[0_10px_28px_-14px_oklch(0.86_0.055_85/70%)]"
                        : "border-hairline",
                    )}
                    style={{ backgroundImage: f.swatch }}
                  />
                  <span className="text-[0.58rem] uppercase tracking-[0.16em] text-muted-foreground">
                    {f.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24 grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <Reveal variant="up">
              <h3 className="font-display uppercase leading-[0.9] tracking-[-0.045em] text-foreground text-[clamp(1.8rem,4.5vw,3.6rem)]">
                Engineered surface
                <span className="block text-steel-gradient">designed for space.</span>
              </h3>
            </Reveal>
            <Reveal variant="up" delay={140}>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
                A folded PVD stainless panel, rendered in CSS rather than a heavy 3D engine — the
                same geometry we use to test how a fold catches light on site.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <MetalSlab swatch={finish.swatch} />
          </div>
        </div>
      </div>
    </section>
  );
}

function MetalSlab({ swatch }: { swatch: string }) {
  const wrap = useRef<HTMLDivElement | null>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = wrap.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) / r.width;
    const y = (e.clientY - (r.top + r.height / 2)) / r.height;
    el.style.transform = `rotateY(${(x * 16).toFixed(2)}deg) rotateX(${(-y * 12).toFixed(2)}deg)`;
  };

  return (
    <div className="hidden lg:block" style={{ perspective: "1200px" }} aria-hidden="true">
      <div
        ref={wrap}
        onMouseMove={onMove}
        onMouseLeave={() => {
          if (wrap.current) wrap.current.style.transform = "rotateY(0deg) rotateX(0deg)";
        }}
        className="relative mx-auto flex h-[360px] w-full max-w-lg items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform"
        style={{ transformStyle: "preserve-3d" }}
      >
        {[-1, 0, 1].map((i) => (
          <div
            key={i}
            className="h-[280px] w-28 metal-grain"
            style={{
              backgroundImage: swatch,
              transform: `rotateY(${i * 26}deg) translateZ(${Math.abs(i) * -18}px)`,
              boxShadow: "0 40px 80px -40px oklch(0 0 0 / 85%)",
            }}
          />
        ))}
      </div>
      <div className="mt-6 lg:hidden" />
    </div>
  );
}

/* ── 10 — Process / making timeline ──────────────────────────── */
export function MakingTimeline() {
  return (
    <section className="mx-auto max-w-[1600px] px-4 py-24 sm:px-8 lg:px-10 lg:py-36">
      <div className="grid gap-6 border-t border-hairline pt-6 lg:grid-cols-12">
        <Reveal variant="text" as="p" className="text-[0.62rem] uppercase tracking-[0.4em] text-champagne lg:col-span-4">
          04 / Making
        </Reveal>
        <Reveal variant="up" delay={120} className="lg:col-span-5 lg:col-start-8">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Five stages take a coil of stainless steel to an installed architectural surface.
          </p>
        </Reveal>
      </div>

      <div className="mt-14">
        <HorizontalRail itemClassName="w-[80vw] sm:w-[46vw] lg:w-[28vw]">
          {makingStages.map((stage) => (
            <article key={stage.index} className="group">
              <div className="relative aspect-[3/4] overflow-hidden metal-sheen vignette film-grain lift">
                <img
                  src={stage.image}
                  alt={stage.alt}
                  loading="lazy"
                  className="h-full w-full object-cover grade-steel transition-transform duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.07]"
                />
                <span className="absolute left-4 top-2 z-10 font-display leading-none text-outline-gold text-7xl transition-all duration-700 group-hover:text-champagne/80 lg:text-8xl">
                  {stage.index}
                </span>
              </div>
              <h3 className="mt-5 font-display text-2xl uppercase tracking-[-0.02em] text-foreground">
                {stage.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{stage.text}</p>
            </article>
          ))}
        </HorizontalRail>
      </div>

      <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {surfaceDetails.map((d, i) => (
          <ClipReveal key={d.src} delay={i * 90}>
            <img
              src={d.src}
              alt={d.alt}
              loading="lazy"
              className="aspect-square w-full object-cover grade-steel transition-[transform,filter] duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.05] hover:brightness-110"
            />
          </ClipReveal>
        ))}
      </div>
    </section>
  );
}
