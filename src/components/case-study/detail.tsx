import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";

import { ClipReveal, Parallax } from "@/components/motion";
import { Reveal } from "@/components/reveal";
import {
  materialDetailImage,
  nextProject,
  processStages,
  projectFacts,
  relatedProjects,
  specification,
  venueImage,
} from "@/data/case-study";
import { cn } from "@/lib/utils";

/* ── 9. Project story + specification ────────────────────────── */
export function ProjectStory() {
  return (
    <section className="mx-auto max-w-[1600px] px-5 py-24 sm:px-8 lg:px-10 lg:py-40">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <Reveal variant="text" as="p" className="text-[0.65rem] uppercase tracking-[0.3em] text-champagne">
            The work
          </Reveal>
          <Reveal variant="up" delay={80}>
            <h2 className="mt-6 font-display text-4xl leading-[0.98] tracking-[-0.04em] text-foreground lg:text-6xl">
              Engineering the surface
            </h2>
          </Reveal>
          <div className="mt-10 space-y-6 text-base leading-[1.65] text-muted-foreground lg:text-lg">
            {[
              "Every surface begins with the same question: how should the material behave in the space?",
              "The answer changes with light, scale, distance and touch.",
              "For this installation, STEELX explored PVD-coated stainless steel across contrasting textures and tones — allowing reflective, brushed and matte surfaces to work together as one architectural language.",
            ].map((p, i) => (
              <Reveal key={p} variant="up" delay={140 + i * 80}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="lg:col-span-4 lg:col-start-9">
          <Reveal variant="row">
            <p className="text-[0.62rem] uppercase tracking-[0.28em] text-muted-foreground">
              Specification
            </p>
          </Reveal>
          <dl className="mt-6 border-t border-hairline">
            {specification.map((row, i) => (
              <Reveal key={row.label} variant="row" delay={i * 70}>
                <div className="grid grid-cols-[7rem_1fr] gap-4 border-b border-hairline py-4">
                  <dt className="text-[0.62rem] uppercase tracking-[0.18em] text-muted-foreground">
                    {row.label}
                  </dt>
                  <dd className="text-sm text-foreground">{row.value}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

/* ── 10. Material detail with pointer-lit surface ────────────── */
export function SurfaceStudy() {
  const ref = useRef<HTMLDivElement | null>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || !window.matchMedia("(pointer: fine)").matches) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--lx", `${(((e.clientX - r.left) / r.width) * 100).toFixed(1)}%`);
    el.style.setProperty("--ly", `${(((e.clientY - r.top) / r.height) * 100).toFixed(1)}%`);
  };

  return (
    <section
      ref={ref}
      onMouseMove={onMove}
      className="relative h-[70vh] min-h-[420px] w-full overflow-hidden lg:h-[92vh]"
    >
      <Parallax amount={60} className="absolute inset-0">
        <img
          src={materialDetailImage}
          alt="Macro view of PVD-coated stainless steel catching light"
          loading="lazy"
          className="h-full w-full object-cover grade-steel"
        />
      </Parallax>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 mix-blend-screen max-lg:hidden"
        style={{
          background:
            "radial-gradient(26% 34% at var(--lx, 50%) var(--ly, 45%), oklch(1 0 0 / 26%), transparent 72%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 mx-auto max-w-[1600px] px-5 pb-12 sm:px-8 lg:px-10 lg:pb-20">
        <Reveal variant="text" as="p" className="text-[0.62rem] uppercase tracking-[0.32em] text-champagne">
          Surface study
        </Reveal>
        <Reveal variant="up" delay={100}>
          <p className="mt-5 max-w-2xl font-display text-2xl leading-[1.15] tracking-[-0.03em] text-foreground lg:text-4xl">
            Colour is bonded to the metal.
            <br />
            Texture determines how light moves across it.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ── 11. Interactive 3D material panel (CSS 3D) ──────────────── */
export function MaterialPanel3D() {
  const [rot, setRot] = useState({ x: -6, y: 18 });
  const stage = useRef<HTMLDivElement | null>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = stage.current;
    if (!el || !window.matchMedia("(pointer: fine)").matches) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    setRot({ x: -y * 16 - 4, y: x * 34 });
  };

  return (
    <section className="bg-graphite py-24 lg:py-36">
      <div className="mx-auto grid max-w-[1600px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:px-10">
        <div
          ref={stage}
          onMouseMove={onMove}
          onMouseLeave={() => setRot({ x: -6, y: 18 })}
          className="lg:col-span-7"
          style={{ perspective: "1400px" }}
        >
          <div
            className="relative mx-auto aspect-[4/3] w-full max-w-2xl motion-safe:animate-[float-y_7s_ease-in-out_infinite_alternate]"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div
              className="absolute inset-[8%] rounded-[2px] shadow-[0_70px_120px_-60px_oklch(0_0_0/95%)] transition-transform duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                transform: `rotateX(${rot.x}deg) rotateY(${rot.y}deg)`,
                transformStyle: "preserve-3d",
                background:
                  "linear-gradient(115deg, oklch(0.42 0.012 250) 0%, oklch(0.82 0.05 85) 24%, oklch(0.52 0.02 250) 42%, oklch(0.9 0.045 85) 62%, oklch(0.36 0.01 250) 84%, oklch(0.66 0.03 85) 100%)",
              }}
            >
              <div className="absolute inset-0 metal-grain opacity-60" />
              <div className="absolute inset-x-0 top-0 h-px bg-white/40" />
              <div className="absolute inset-y-0 right-0 w-px bg-black/40" />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "repeating-linear-gradient(96deg, oklch(1 0 0 / 5%) 0 1px, transparent 1px 4px)",
                }}
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 lg:col-start-9">
          <ClipReveal>
            <h2 className="font-display uppercase leading-[0.88] tracking-[-0.05em] text-foreground text-[clamp(2.4rem,5vw,4.6rem)]">
              Engineered
              <br />
              to reflect.
            </h2>
          </ClipReveal>
          <Reveal variant="up" delay={160}>
            <p className="mt-8 text-[0.65rem] uppercase leading-relaxed tracking-[0.18em] text-muted-foreground">
              PVD stainless steel
              <br />
              Architectural surface study
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ── 12. Light statement ─────────────────────────────────────── */
export function LightStatement() {
  const lines = ["Light", "Writes", "The architecture."];
  return (
    <section className="relative overflow-hidden bg-[oklch(0.93_0.008_85)] py-28 text-[oklch(0.1_0.003_250)] lg:py-44">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-1/2 h-px w-full bg-[linear-gradient(90deg,transparent,oklch(0.72_0.07_85),transparent)] motion-safe:animate-[sheen_7s_linear_infinite]"
        style={{ backgroundSize: "220% 100%" }}
      />
      <div className="relative mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-10">
        {lines.map((line, i) => (
          <ClipReveal key={line} delay={i * 150}>
            <p className="font-display uppercase leading-[0.88] tracking-[-0.055em] text-[clamp(2.5rem,9vw,8.5rem)]">
              {line}
            </p>
          </ClipReveal>
        ))}
      </div>
    </section>
  );
}

/* ── 13. Process: from sheet to space ────────────────────────── */
export function SheetToSpace() {
  return (
    <section className="mx-auto max-w-[1600px] px-5 py-24 sm:px-8 lg:px-10 lg:py-36">
      <ClipReveal>
        <h2 className="font-display uppercase leading-[0.88] tracking-[-0.05em] text-foreground text-[clamp(2.4rem,7vw,6.5rem)]">
          From sheet
          <br />
          to space.
        </h2>
      </ClipReveal>

      <div className="mt-16 border-t border-hairline lg:mt-24">
        {processStages.map((stage, i) => (
          <Reveal key={stage.index} variant="up" delay={i * 90}>
            <article className="grid items-center gap-6 border-b border-hairline py-8 lg:grid-cols-12 lg:py-12">
              <p className="font-display leading-none text-outline text-[clamp(3rem,6vw,6rem)] lg:col-span-2">
                {stage.index}
              </p>
              <h3 className="font-display text-2xl uppercase tracking-[-0.03em] text-foreground lg:col-span-3 lg:text-3xl">
                {stage.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground lg:col-span-4">
                {stage.text}
              </p>
              <div className="lg:col-span-3">
                <div className="aspect-[16/10] w-full overflow-hidden metal-sheen vignette">
                  <img
                    src={stage.image}
                    alt={stage.alt}
                    loading="lazy"
                    className="h-full w-full object-cover grade-steel transition-transform duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.05]"
                  />
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ── 14. Project facts ───────────────────────────────────────── */
export function ProjectFacts() {
  return (
    <section className="mx-auto max-w-[1600px] px-5 pb-8 sm:px-8 lg:px-10">
      <dl className="grid gap-px border-t border-hairline sm:grid-cols-2 lg:grid-cols-4">
        {projectFacts.map((f, i) => (
          <Reveal key={f.label} variant="row" delay={i * 60} className="border-b border-hairline py-6 pr-6">
            <dt className="text-[0.6rem] uppercase tracking-[0.22em] text-muted-foreground">
              {f.label}
            </dt>
            <dd className="mt-2 font-display text-lg leading-snug text-foreground">{f.value}</dd>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}

/* ── 15. Venue ───────────────────────────────────────────────── */
export function Venue() {
  return (
    <section className="mx-auto max-w-[1600px] px-5 py-24 sm:px-8 lg:px-10 lg:py-36">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <ClipReveal>
          <h2 className="font-display uppercase leading-[0.9] tracking-[-0.05em] text-foreground text-[clamp(2.4rem,6vw,5.5rem)]">
            The space
          </h2>
        </ClipReveal>
        <Reveal variant="row" delay={120}>
          <p className="text-[0.65rem] uppercase tracking-[0.26em] text-champagne">Mumbai, India</p>
        </Reveal>
      </div>

      <ClipReveal delay={100} className="mt-12">
        <div className="aspect-[16/9] w-full overflow-hidden metal-sheen vignette">
          <Parallax amount={54} className="h-full w-full">
            <img
              src={venueImage}
              alt="Exterior of the exhibition venue at dusk"
              loading="lazy"
              className="h-full w-full object-cover grade-steel"
            />
          </Parallax>
        </div>
      </ClipReveal>
      <Reveal variant="up" delay={160}>
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
          An environment designed to make the material itself part of the exhibition.
        </p>
      </Reveal>
    </section>
  );
}

/* ── 16. Related projects — editorial list ───────────────────── */
export function ExploreMore() {
  const [active, setActive] = useState<number | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <section
      className="relative mx-auto max-w-[1600px] px-5 py-24 sm:px-8 lg:px-10 lg:py-36"
      onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}
    >
      <Reveal variant="text" as="p" className="text-[0.62rem] uppercase tracking-[0.3em] text-champagne">
        Explore more
      </Reveal>

      <ul className="mt-10 border-t border-hairline">
        {relatedProjects.map((p, i) => (
          <li key={p.slug}>
            <Link
              to="/projects/$slug"
              params={{ slug: p.slug }}
              data-cursor="OPEN"
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(i)}
              onBlur={() => setActive(null)}
              className="group grid grid-cols-[3rem_1fr_auto] items-center gap-4 border-b border-hairline py-5 transition-colors duration-500 hover:bg-foreground/[0.03] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-champagne lg:grid-cols-12 lg:py-7"
            >
              <span className="font-display text-sm text-gunmetal transition-colors duration-500 group-hover:text-champagne lg:col-span-1 lg:text-xl">
                {String(i + 1).padStart(2, "0")}
              </span>

              <span className="lg:col-span-4">
                <span className="block font-display text-xl leading-tight tracking-[-0.03em] text-foreground transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 lg:text-3xl">
                  {p.title}
                </span>
                <img
                  src={p.coverImage}
                  alt=""
                  loading="lazy"
                  className="mt-3 h-24 w-full object-cover grade-steel lg:hidden"
                />
              </span>

              <span className="hidden text-xs uppercase tracking-[0.16em] text-muted-foreground lg:col-span-3 lg:block">
                {p.category}
              </span>
              <span className="hidden text-xs uppercase tracking-[0.16em] text-muted-foreground lg:col-span-2 lg:block">
                {p.location}
              </span>
              <span className="hidden text-xs uppercase tracking-[0.16em] text-muted-foreground lg:col-span-1 lg:block">
                {p.year}
              </span>

              <span className="text-champagne transition-transform duration-500 group-hover:translate-x-2 lg:col-span-1 lg:text-right">
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {/* cursor-follow preview (desktop) */}
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none fixed z-40 hidden -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500 lg:block",
          active === null ? "opacity-0" : "opacity-100",
        )}
        style={{ left: pos.x, top: pos.y }}
      >
        <div
          className="h-52 w-80 overflow-hidden border border-hairline shadow-[0_40px_90px_-30px_oklch(0_0_0/85%)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ transform: active === null ? "scale(0.9) rotate(-3deg)" : "scale(1) rotate(-1.5deg)" }}
        >
          {active !== null ? (
            <img
              src={relatedProjects[active]!.coverImage}
              alt=""
              className="h-full w-full object-cover grade-steel"
            />
          ) : null}
        </div>
      </div>
    </section>
  );
}

/* ── 17. Next project ────────────────────────────────────────── */
export function NextProject() {
  return (
    <Link
      to="/projects/$slug"
      params={{ slug: nextProject.slug }}
      data-cursor="OPEN"
      className="group relative block h-[70vh] min-h-[380px] w-full overflow-hidden focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-champagne lg:h-[86vh]"
    >
      <img
        src={nextProject.coverImage}
        alt={`${nextProject.title} — next project`}
        loading="lazy"
        className="h-full w-full object-cover grade-steel transition-transform duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/35 to-background/20" />
      <div className="absolute inset-x-0 bottom-0 mx-auto max-w-[1600px] px-5 pb-12 sm:px-8 lg:px-10 lg:pb-20">
        <p className="text-[0.62rem] uppercase tracking-[0.32em] text-champagne">Next project</p>
        <h2 className="mt-4 font-display uppercase leading-[0.88] tracking-[-0.05em] text-foreground text-[clamp(2.25rem,7vw,6.5rem)] transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1">
          {nextProject.title}{" "}
          <span className="inline-block transition-transform duration-[900ms] group-hover:translate-x-3">
            →
          </span>
        </h2>
      </div>
    </Link>
  );
}

/* ── 18. Closing statement ───────────────────────────────────── */
export function ClosingStatement({ onEnquire }: { onEnquire: () => void }) {
  return (
    <section className="mx-auto max-w-[1600px] px-5 py-24 text-center sm:px-8 lg:px-10 lg:py-36">
      <ClipReveal>
        <p className="font-display uppercase leading-[0.86] tracking-[-0.055em] text-foreground text-[clamp(3rem,13vw,11rem)]">
          Steelx
        </p>
      </ClipReveal>
      <Reveal variant="up" delay={120}>
        <p className="mt-4 text-[0.62rem] uppercase tracking-[0.4em] text-muted-foreground">
          PVD Surfaces
        </p>
      </Reveal>
      <Reveal variant="up" delay={220}>
        <p className="mt-10 font-display text-2xl text-foreground lg:text-4xl">
          Let’s build a surface.
        </p>
      </Reveal>
      <Reveal variant="up" delay={300}>
        <button
          type="button"
          onClick={onEnquire}
          data-cursor="OPEN"
          className="mt-10 inline-flex items-center gap-3 border border-champagne/50 px-8 py-4 text-[0.65rem] uppercase tracking-[0.28em] text-champagne transition-colors duration-500 hover:bg-champagne hover:text-graphite focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-champagne"
        >
          Start a project <span aria-hidden="true">→</span>
        </button>
      </Reveal>
    </section>
  );
}
