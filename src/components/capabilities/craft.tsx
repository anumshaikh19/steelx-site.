import { useRef, useState } from "react";
import { Link } from "@tanstack/react-router";

import { Reveal } from "@/components/reveal";
import { ClipReveal, HorizontalRail, Parallax } from "@/components/motion";
import { SectionHead } from "@/components/capabilities/opening";
import {
  capImages,
  fabricationSteps,
  installationSequence,
  joineryStrip,
  meshApplications,
} from "@/data/capabilities";
import { cn } from "@/lib/utils";

/* ── 06 Custom fabrication ───────────────────────────────────── */
export function CustomFabrication() {
  return (
    <section
      id="cap-fabrication"
      className="scroll-mt-24 border-t border-hairline py-20 lg:py-32"
      style={{ backgroundColor: "#090909" }}
    >
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-10">
        <SectionHead number="03" title="Custom Fabrication" />

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <Reveal variant="up">
              <p
                className="font-display uppercase leading-[0.9] tracking-[-0.015em] text-foreground"
                style={{ fontSize: "clamp(1.9rem, 4.6vw, 4.6rem)" }}
              >
                If it can be drawn,
                <br />
                it can be made.
              </p>
            </Reveal>
            <Reveal variant="up" delay={140}>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-metal">
                From reception desks and bespoke joinery to folded panels, trims, sculptural forms
                and complex assemblies, our fabrication team translates architectural intent into
                finished metal.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <div className="relative overflow-hidden border border-hairline tech-grid p-6 lg:p-10">
              <svg
                viewBox="0 0 400 200"
                className="h-auto w-full text-champagne/60"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.6"
              >
                <path d="M20 160 L20 60 L120 30 L220 60 L220 160" strokeDasharray="600" className="draw-line" />
                <path d="M120 30 L120 130 L20 160" strokeDasharray="400" className="draw-line" style={{ animationDelay: "300ms" }} />
                <path d="M120 130 L220 160" strokeDasharray="200" className="draw-line" style={{ animationDelay: "600ms" }} />
                <path d="M250 40 L380 40 M250 90 L380 90 M250 140 L380 140" strokeDasharray="400" className="draw-line" style={{ animationDelay: "900ms" }} />
                <circle cx="120" cy="30" r="3" />
                <circle cx="220" cy="60" r="3" />
                <circle cx="20" cy="160" r="3" />
              </svg>
              <div className="mt-8 grid grid-cols-2 gap-px border-t border-hairline sm:grid-cols-3">
                {fabricationSteps.map((s, i) => (
                  <Reveal key={s.id} variant="row" delay={70 * i}>
                    <div className="border-b border-r border-hairline p-4">
                      <p className="text-[0.58rem] uppercase tracking-[0.3em] text-champagne">
                        {String(i + 1).padStart(2, "0")}
                      </p>
                      <p className="mt-2 text-sm uppercase tracking-[0.14em] text-foreground">{s.label}</p>
                      <p className="mt-2 text-xs leading-relaxed text-metal">{s.note}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── 07 Decorative mesh ──────────────────────────────────────── */
export function DecorativeMesh() {
  const ref = useRef<HTMLDivElement | null>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
    el.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
  };

  return (
    <section
      id="cap-mesh"
      ref={ref}
      onMouseMove={onMove}
      className="relative scroll-mt-24 overflow-hidden border-t border-hairline bg-metal-black"
    >
      <div className="absolute inset-0">
        <img
          src={capImages.meshHero}
          alt="Woven stainless steel decorative mesh installation"
          loading="lazy"
          className="h-full w-full object-cover grade-steel"
        />
        <div className="absolute inset-0 bg-metal-black/70" />
        <div
          className="pointer-events-none absolute inset-0 opacity-70 mix-blend-screen"
          style={{
            background:
              "radial-gradient(420px circle at var(--mx,50%) var(--my,40%), rgba(199,179,140,0.22), transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div className="pointer-events-none absolute inset-0 vignette film-grain" />
      </div>

      <div className="relative mx-auto flex min-h-[92svh] max-w-[1600px] flex-col justify-end px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <SectionHead number="04" title="Decorative Mesh" />
        <Reveal variant="up" delay={120}>
          <p
            className="mt-8 font-display uppercase leading-[0.88] tracking-[-0.015em] text-foreground"
            style={{ fontSize: "clamp(2.1rem, 6vw, 6.4rem)" }}
          >
            Structure
            <br />
            with transparency.
          </p>
        </Reveal>
        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-hairline pt-8">
          {meshApplications.map((m, i) => (
            <Reveal key={m} variant="row" delay={60 * i} as="span">
              <span className="text-[0.65rem] uppercase tracking-[0.28em] text-metal">{m}</span>
            </Reveal>
          ))}
        </div>
        <Link
          to="/ss-decorative-mesh-pvd"
          className="mt-10 inline-block w-fit border border-champagne px-7 py-4 text-[0.62rem] uppercase tracking-[0.3em] text-champagne transition-colors duration-500 hover:bg-champagne hover:text-metal-black"
        >
          Explore mesh →
        </Link>
      </div>
    </section>
  );
}

/* ── 08 Metal joinery ────────────────────────────────────────── */
export function MetalJoinery() {
  return (
    <section id="cap-joinery" className="scroll-mt-24 border-t border-hairline bg-graphite py-20 lg:py-32">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHead number="05" title="Metal Joinery" />
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <Reveal variant="up" delay={120}>
              <p className="text-base leading-relaxed text-metal lg:pt-16">
                Precision metal details designed to disappear into the architecture — or become its
                strongest line.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-14 hidden lg:block">
          <HorizontalRail itemClassName="w-[38vw] max-w-[560px]">
            {joineryStrip.map((j) => (
              <figure key={j.id} data-cursor="VIEW" className="group">
                <div className="overflow-hidden border border-hairline">
                  <img
                    src={j.image}
                    alt={j.alt}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover grade-steel transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                  />
                </div>
                <figcaption className="mt-3 text-[0.6rem] uppercase tracking-[0.26em] text-metal">
                  {j.caption}
                </figcaption>
              </figure>
            ))}
          </HorizontalRail>
        </div>

        <div className="mt-12 grid gap-8 lg:hidden">
          {joineryStrip.map((j) => (
            <figure key={j.id}>
              <ClipReveal className="overflow-hidden border border-hairline">
                <img src={j.image} alt={j.alt} loading="lazy" className="aspect-[4/3] w-full object-cover grade-steel" />
              </ClipReveal>
              <figcaption className="mt-3 text-[0.58rem] uppercase tracking-[0.26em] text-metal">
                {j.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── 09 Sculptural metal ─────────────────────────────────────── */
export function SculpturalMetal() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  return (
    <section
      id="cap-sculptural"
      className="scroll-mt-24 border-t border-hairline bg-metal-black py-20 lg:py-32"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        setTilt({
          x: ((e.clientY - r.top) / r.height - 0.5) * -10,
          y: ((e.clientX - r.left) / r.width - 0.5) * 14,
        });
      }}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
    >
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-10">
        <SectionHead number="06" title="Sculptural Metal" />
        <div className="mt-12 grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal variant="up">
              <p
                className="font-display uppercase leading-[0.88] tracking-[-0.015em] text-foreground"
                style={{ fontSize: "clamp(2rem, 4.8vw, 5rem)" }}
              >
                When metal
                <br />
                becomes form.
              </p>
            </Reveal>
            <Reveal variant="up" delay={140}>
              <p className="mt-8 max-w-md text-base leading-relaxed text-metal">
                Faceted, folded and rolled assemblies developed with designers from sketch through
                to structural detail — coated as a single object so the form reads uninterrupted.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7" style={{ perspective: "1400px" }}>
            <div
              data-cursor="EXPLORE"
              className="relative overflow-hidden border border-hairline transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform motion-safe:animate-[float-y_9s_ease-in-out_infinite]"
              style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
            >
              <img
                src={capImages.capSculpture}
                alt="Faceted stainless steel sculptural form"
                loading="lazy"
                width={1600}
                height={1104}
                className="w-full object-cover grade-steel"
              />
              <div className="pointer-events-none absolute inset-0 sheen-sweep" />
              <div className="pointer-events-none absolute inset-0 vignette" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── 10 Installation ─────────────────────────────────────────── */
export function InstallationSection() {
  return (
    <section id="cap-installation" className="relative scroll-mt-24 overflow-hidden border-t border-hairline">
      <Parallax amount={45} className="absolute inset-0">
        <img
          src={capImages.installation}
          alt="Installation team fitting PVD stainless panels"
          loading="lazy"
          className="h-[112%] w-full object-cover grade-steel"
        />
      </Parallax>
      <div className="absolute inset-0 bg-metal-black/78" />
      <div className="pointer-events-none absolute inset-0 vignette film-grain" />

      <div className="relative mx-auto max-w-[1600px] px-5 py-20 sm:px-8 lg:px-10 lg:py-32">
        <SectionHead number="07" title="Installation" />
        <Reveal variant="up" delay={120}>
          <p
            className="mt-8 font-display uppercase leading-[0.88] tracking-[-0.015em] text-foreground"
            style={{ fontSize: "clamp(2rem, 5.4vw, 5.6rem)" }}
          >
            The last millimetre
            <br />
            matters.
          </p>
        </Reveal>
        <Reveal variant="up" delay={200}>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-metal">
            Our teams coordinate sequencing, crating, protection and installation so the finished
            surface arrives exactly as designed.
          </p>
        </Reveal>

        <ol className="mt-14 grid gap-px border-t border-hairline sm:grid-cols-2 lg:grid-cols-3">
          {installationSequence.map((s, i) => (
            <Reveal key={s.id} variant="up" delay={80 * i} as="li">
              <div className={cn("h-full border-b border-r border-hairline bg-metal-black/40 p-6 lg:p-8")}>
                <p className="text-[0.6rem] tabular-nums tracking-[0.32em] text-champagne">{s.number}</p>
                <p className="mt-4 font-display text-2xl uppercase text-foreground lg:text-3xl">{s.label}</p>
                <p className="mt-3 text-sm leading-relaxed text-metal">{s.note}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
