import { useEffect, useRef, useState, type MouseEvent as ReactMouseEvent } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { Parallax } from "@/components/motion";
import { cn } from "@/lib/utils";
import { categoryNav, colours, finishLibrary, images } from "@/data/materials";

export const wrap = "mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-16";
export const label = "text-[0.65rem] uppercase tracking-[0.28em] text-muted-foreground";

export function MaterialsHero() {
  return (
    <section className="pt-28 lg:pt-36">
      <div className={wrap}>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <Reveal variant="up" className="lg:col-span-7">
            <h1
              className="font-display font-light leading-[0.86] tracking-[-0.02em] text-foreground"
              style={{ fontSize: "clamp(64px, 11vw, 190px)" }}
            >
              Materials
            </h1>
          </Reveal>
          <Reveal variant="up" delay={120} className="lg:col-span-5 lg:pb-6">
            <p className="max-w-md text-lg leading-relaxed text-foreground/80 lg:text-xl">
              Colour, texture and light — engineered into stainless steel.
            </p>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Explore the STEELX surface collection.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a href="#samples" className="quiet-link">
                Request a sample <ArrowRight className="h-3.5 w-3.5" />
              </a>
              <Link to="/contact" className="quiet-link">
                Start a project <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="mt-16 lg:mt-24">
        <div className={wrap}>
          <div className="material-in overflow-hidden">
            <img
              src={images.hero}
              alt="Champagne PVD coated stainless steel panel in raking daylight"
              width={1920}
              height={1280}
              className="h-[58vh] w-full object-cover lg:h-[68vh]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function CategoryNav() {
  const [active, setActive] = useState<string>(categoryNav[0]!.id);

  useEffect(() => {
    const sections = categoryNav
      .map((c) => document.getElementById(c.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-25% 0px -65% 0px", threshold: 0 },
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <nav
      aria-label="Material sections"
      className="sticky top-[64px] z-30 border-y border-border bg-background/85 backdrop-blur-md"
    >
      <div className={cn(wrap, "no-scrollbar flex gap-8 overflow-x-auto py-4")}>
        {categoryNav.map((c) => (
          <a
            key={c.id}
            href={`#${c.id}`}
            aria-current={active === c.id ? "true" : undefined}
            className={cn(
              "shrink-0 border-b pb-1 text-[0.66rem] uppercase tracking-[0.26em] transition-colors",
              active === c.id
                ? "border-foreground text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground",
            )}
          >
            {c.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

export function MaterialsIntro() {
  return (
    <section id="finishes" className={cn(wrap, "py-28 lg:py-44")}>
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-24">
        <Reveal variant="up" className="lg:col-span-7">
          <h2
            className="font-display font-light leading-[0.94] tracking-[-0.015em] text-foreground"
            style={{ fontSize: "clamp(38px, 5.4vw, 92px)" }}
          >
            The character of metal
            <br />
            is in the surface.
          </h2>
        </Reveal>
        <div className="lg:col-span-5 lg:pt-6">
          <Reveal variant="up" delay={100}>
            <p className="text-lg leading-relaxed text-foreground/80">
              Stainless steel provides the structure. PVD determines how that structure behaves with
              light, colour and distance.
            </p>
          </Reveal>
          <Reveal variant="up" delay={180}>
            <p className="mt-8 text-base leading-relaxed text-muted-foreground">
              From mirror reflections to tactile hairlines and soft bead-blasted finishes, STEELX
              develops surfaces that allow architects and designers to control the atmosphere of a
              space.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function ColourCollection() {
  return (
    <section id="colours" className="border-t border-border py-24 lg:py-36">
      <div className={wrap}>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal variant="up" className="lg:col-span-7">
            <h2
              className="font-display font-light leading-[0.95] tracking-[-0.015em] text-foreground"
              style={{ fontSize: "clamp(34px, 4.6vw, 78px)" }}
            >
              The PVD collection
            </h2>
          </Reveal>
          <Reveal variant="up" delay={100} className="lg:col-span-5 lg:pb-3">
            <p className="text-base leading-relaxed text-muted-foreground">
              Colour bonded to stainless steel in vacuum.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-16 lg:mt-24 lg:grid-cols-3 lg:gap-x-14 lg:gap-y-28">
          {colours.map((c, i) => (
            <Reveal key={c.id} variant="up" delay={(i % 3) * 90}>
              <article className="group" data-cursor="Explore">
                <div className="metal-sheen overflow-hidden bg-surface">
                  <img
                    src={c.image}
                    alt={c.alt}
                    loading="lazy"
                    width={1200}
                    height={1500}
                    className="aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.045]"
                  />
                </div>
                <div className="mt-6 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-xl font-light tracking-tight text-foreground lg:text-2xl">
                      {c.name}
                    </h3>
                    <span
                      aria-hidden="true"
                      className="h-4 w-8 border border-border"
                      style={{ backgroundImage: c.swatch }}
                    />
                  </div>
                  <p className={cn(label, "mt-2")}>PVD / {c.substrate}</p>
                  <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
                    {c.note}
                  </p>
                  <dl className="mt-6 space-y-3 border-t border-border pt-5 text-sm">
                    <div className="flex gap-4">
                      <dt className={cn(label, "w-24 shrink-0")}>Best for</dt>
                      <dd className="text-foreground/75">{c.best.join(", ")}</dd>
                    </div>
                    <div className="flex gap-4">
                      <dt className={cn(label, "w-24 shrink-0")}>Textures</dt>
                      <dd className="text-foreground/75">{c.textures.join(", ")}</dd>
                    </div>
                  </dl>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeaturedMaterial() {
  return (
    <section className="border-t border-border py-24 lg:py-36">
      <div className={wrap}>
        <Reveal variant="up">
          <h2
            className="font-display font-light leading-none tracking-[-0.015em] text-foreground"
            style={{ fontSize: "clamp(40px, 7vw, 110px)" }}
          >
            Champagne
          </h2>
        </Reveal>
      </div>
      <div className="mt-12 lg:mt-16">
        <Parallax className="h-[52vh] w-full overflow-hidden lg:h-[78vh]" amount={60}>
          <img
            src={images.champagne}
            alt="Macro of champagne PVD stainless steel with hairline grain"
            loading="lazy"
            width={1920}
            height={1088}
            className="h-full w-full object-cover"
          />
        </Parallax>
      </div>
      <div className={cn(wrap, "mt-10")}>
        <div className="grid gap-8 border-t border-border pt-8 sm:grid-cols-4">
          {[
            { k: "Process", v: "PVD" },
            { k: "Colour", v: "Champagne" },
            { k: "Texture", v: "Hairline" },
            { k: "Material", v: "Architectural stainless steel" },
          ].map((m) => (
            <div key={m.k}>
              <p className={label}>{m.k}</p>
              <p className="mt-2 text-sm text-foreground">{m.v}</p>
            </div>
          ))}
        </div>
        <a href="#specification" className="quiet-link mt-10 inline-flex">
          View specification <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </section>
  );
}

export function FinishSelector() {
  const [active, setActive] = useState(0);
  const finish = finishLibrary[active]!;

  return (
    <section id="textures" className="border-t border-border py-24 lg:py-36">
      <div className={wrap}>
        <Reveal variant="up">
          <h2
            className="font-display font-light leading-[0.95] tracking-[-0.015em] text-foreground"
            style={{ fontSize: "clamp(34px, 4.8vw, 84px)" }}
          >
            Texture changes
            <br />
            the light.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-4">
            <ul className="border-t border-border">
              {finishLibrary.map((f, i) => (
                <li key={f.id}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-pressed={i === active}
                    className={cn(
                      "flex w-full items-center justify-between border-b border-border py-5 text-left transition-colors",
                      i === active ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    <span className="text-[0.72rem] uppercase tracking-[0.26em]">{f.name}</span>
                    <span className={cn("text-[0.62rem]", i === active ? "opacity-100" : "opacity-0")}>
                      —
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-8">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface">
              <img
                key={finish.id}
                src={finish.image}
                alt={`${finish.name} finish sample`}
                loading="lazy"
                className="material-in h-full w-full object-cover"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-60 mix-blend-overlay"
                style={{ backgroundImage: finish.texture, backgroundSize: "4px 4px" }}
              />
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-[minmax(0,14rem)_1fr]">
              <div>
                <h3 className="font-display text-2xl font-light text-foreground">{finish.name}</h3>
                <p className={cn(label, "mt-2")}>{finish.gloss}</p>
              </div>
              <p className="text-base leading-relaxed text-muted-foreground">{finish.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function MaterialSample() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [tilt, setTilt] = useState({ x: -14, y: 18 });

  const onMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ x: -14 - py * 12, y: 18 + px * 22 });
  };

  return (
    <section className="border-t border-border bg-surface py-24 lg:py-36">
      <div className={cn(wrap, "grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-20")}>
        <div className="lg:col-span-5">
          <p className={label}>Material sample</p>
          <h2
            className="mt-6 font-display font-light leading-[0.98] tracking-[-0.015em] text-foreground"
            style={{ fontSize: "clamp(30px, 3.6vw, 60px)" }}
          >
            See how light behaves
            <br />
            across the surface.
          </h2>
          <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
            A physical sample is the only honest reference. Move across the slab to see how a
            hairline surface redistributes reflection.
          </p>
        </div>

        <div
          ref={ref}
          onMouseMove={onMove}
          onMouseLeave={() => setTilt({ x: -14, y: 18 })}
          className="hidden lg:col-span-7 lg:block"
          style={{ perspective: "1400px" }}
          aria-hidden="true"
        >
          <div
            className="mx-auto h-[360px] w-full max-w-[620px] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              transformStyle: "preserve-3d",
            }}

          >
            <div
              className="h-full w-full shadow-[0_60px_90px_-60px_rgba(0,0,0,0.55)]"
              style={{
                backgroundImage:
                  "linear-gradient(115deg,#8a7048,#f0dcb4 32%,#c7a877 55%,#f6ecd6 74%,#8a7048)",
              }}
            >
              <span
                className="block h-full w-full"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(90deg, rgba(255,255,255,0.22) 0 1px, rgba(0,0,0,0.07) 1px 3px)",
                }}
              />
            </div>
          </div>
        </div>

        <div className="lg:hidden">
          <img
            src={images.samples}
            alt="Physical stainless steel material samples in five PVD tones"
            loading="lazy"
            width={1600}
            height={1008}
            className="w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
