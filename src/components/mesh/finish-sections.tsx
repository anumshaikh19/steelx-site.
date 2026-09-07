import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Play } from "lucide-react";

import { Section } from "@/components/page-shell";
import { Reveal, SectionHeading } from "@/components/reveal";
import { BeforeAfter, HorizontalRail } from "@/components/motion";
import { caseStudies, pvdFinishes, reels } from "@/data/mesh";
import { cn } from "@/lib/utils";

/* ── 26–28 Premium PVD finishes ──────────────────────────────── */
export function PVDFinishes() {
  const [activeId, setActiveId] = useState(pvdFinishes[0]!.id);
  const active = pvdFinishes.find((f) => f.id === activeId) ?? pvdFinishes[0]!;

  return (
    <Section className="border-t border-border">
      <div className="flex flex-wrap items-end justify-between gap-8">
        <SectionHeading eyebrow="Finishes" title="Premium PVD finishes" />
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
          SteelX Decor applies Physical Vapour Deposition (PVD) nano-coating for durable,
          tarnish-resistant decorative finishes. PVD is an environmentally clean vacuum process — no
          toxic effluent, REACH & RoHS compliant.
        </p>
      </div>

      <div className="mt-14 grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {pvdFinishes.map((f, i) => (
            <Reveal key={f.id} variant="scale" delay={(i % 4) * 80}>
              <button
                type="button"
                onMouseEnter={() => setActiveId(f.id)}
                onFocus={() => setActiveId(f.id)}
                onClick={() => setActiveId(f.id)}
                aria-pressed={f.id === activeId}
                data-cursor="Explore"
                className={cn(
                  "group block w-full border text-left transition-all duration-500",
                  f.id === activeId ? "border-champagne" : "border-border hover:border-champagne",
                )}
              >
                <span
                  className={cn(
                    "block aspect-square w-full metal-grain transition-transform duration-700",
                    f.id === activeId ? "scale-100" : "scale-[0.97] group-hover:scale-100",
                  )}
                  style={{ backgroundImage: f.swatch }}
                />
                <span className="block p-3">
                  <span className="block text-[0.58rem] uppercase tracking-[0.2em] text-foreground">{f.name}</span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        <div className="flex flex-col justify-between border border-border p-8">
          <div>
            <p className="text-[0.58rem] uppercase tracking-[0.32em] text-champagne">
              Collection {String(pvdFinishes.findIndex((f) => f.id === activeId) + 1).padStart(2, "0")} / {String(pvdFinishes.length).padStart(2, "0")}
            </p>
            <p className="mt-5 font-display text-4xl text-foreground">{active.name}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{active.note}</p>
            <div className="mt-8 h-32 w-full border border-border metal-grain" style={{ backgroundImage: active.swatch }} aria-hidden="true" />
          </div>
          <p className="mt-8 border-t border-border pt-6 text-[0.58rem] uppercase tracking-[0.26em] text-champagne">
            10-year PVD finish warranty • ASTM B117 certified
          </p>
        </div>
      </div>

      <Reveal variant="up" delay={120}>
        <Link
          to="/category/$slug"
          params={{ slug: "pvd-colored-sheets" }}
          className="mt-10 inline-flex items-center gap-2 border border-champagne px-7 py-3.5 text-[0.66rem] uppercase tracking-[0.24em] text-champagne transition-colors hover:bg-champagne hover:text-metal-black"
        >
          Explore all PVD mesh products <ArrowUpRight className="h-4 w-4" />
        </Link>
      </Reveal>
    </Section>
  );
}

/* ── 29–30 Case studies ──────────────────────────────────────── */
export function CaseStudies() {
  const [feature, ...rest] = caseStudies;
  if (!feature) return null;

  return (
    <Section className="border-t border-border">
      <SectionHeading eyebrow="Case studies" title="Structural transformations" />
      <Reveal variant="up" delay={100}>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Direct evidence of architectural transformation. From raw structural framework to global
          signature landmark. Drag the divider to compare.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
        <BeforeAfter before={feature.before} after={feature.after} beforeLabel="Before" afterLabel="After" />
        <div className="flex flex-col justify-center">
          <p className="text-[0.58rem] uppercase tracking-[0.3em] text-champagne">
            {feature.scope} · {feature.material}
          </p>
          <h3 className="mt-4 font-display text-3xl leading-tight text-foreground lg:text-4xl">{feature.title}</h3>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{feature.body}</p>
          <dl className="mt-8 grid grid-cols-2 gap-px border-t border-border">
            <div className="border-b border-border py-5 pr-6">
              <dt className="text-[0.56rem] uppercase tracking-[0.26em] text-muted-foreground">Location</dt>
              <dd className="mt-2 text-sm text-foreground">{feature.location}</dd>
            </div>
            <div className="border-b border-border py-5">
              <dt className="text-[0.56rem] uppercase tracking-[0.26em] text-muted-foreground">Area</dt>
              <dd className="mt-2 text-sm text-foreground">{feature.area}</dd>
            </div>
          </dl>
          <Link
            to="/projects"
            data-cursor="View"
            className="mt-8 inline-flex w-fit items-center gap-2 text-[0.66rem] uppercase tracking-[0.24em] text-champagne"
          >
            All case studies <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {rest.map((c, i) => (
          <Reveal key={c.id} variant="up" delay={i * 120}>
            <article className="group h-full border border-border transition-colors hover:border-champagne" data-cursor="View">
              <div className="grid grid-cols-2">
                {[c.before, c.after].map((m, k) => (
                  <div key={k} className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={m.src}
                      alt={m.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1300ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                    />
                    <span className="absolute bottom-3 left-3 bg-background/75 px-2.5 py-1 text-[0.52rem] uppercase tracking-[0.26em] text-champagne backdrop-blur">
                      {k === 0 ? "Before" : "After"}
                    </span>
                  </div>
                ))}
              </div>
              <div className="p-6">
                <p className="text-[0.56rem] uppercase tracking-[0.28em] text-champagne">{c.scope} · {c.material}</p>
                <h3 className="mt-3 font-display text-2xl text-foreground">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
                <p className="mt-5 text-[0.58rem] uppercase tracking-[0.24em] text-muted-foreground">
                  {c.location} · {c.area}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ── 31–32 SteelX in motion ──────────────────────────────────── */
export function SteelXInMotion() {
  return (
    <Section className="border-t border-border">
      <div className="flex flex-wrap items-end justify-between gap-8">
        <SectionHeading eyebrow="Visual feed" title="SteelX in motion" />
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
          Factory floor, coating chamber and installation footage. Reels are published as they are
          filmed — each frame below is a still from the studio archive.
        </p>
      </div>

      <HorizontalRail className="mt-12" itemClassName="w-[72vw] sm:w-[40vw] lg:w-[24vw]">
        {reels.map((r) => (
          <figure key={r.title} className="group relative overflow-hidden border border-border" data-cursor="Play">
            <div className="aspect-[9/13] overflow-hidden">
              <img
                src={r.poster}
                alt={r.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-metal-black via-transparent to-transparent" />
            <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-champagne bg-background/60 text-champagne backdrop-blur">
                <Play className="h-5 w-5" />
              </span>
            </span>
            <figcaption className="absolute inset-x-0 bottom-0 p-5">
              <p className="text-[0.54rem] uppercase tracking-[0.28em] text-champagne">{r.meta}</p>
              <p className="mt-2 font-display text-lg leading-snug text-foreground">{r.title}</p>
            </figcaption>
          </figure>
        ))}
      </HorizontalRail>
    </Section>
  );
}
