import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

import { cn } from "@/lib/utils";
import { BeforeAfter, ClipReveal, HorizontalRail } from "@/components/motion";
import { useScrollProgress, stageIndex } from "@/hooks/use-scroll-progress";
import { MaterialObject, StatementHeading, meta, wrap } from "@/components/pvd/panel";
import {
  comparison,
  finderFeels,
  finderLight,
  finderPlaces,
  precisionDetails,
  processSteps,
  proofProjects,
  pvdImages,
  recommend,
  scienceImage,
  scienceStages,
  specification,
  textures,
  tones,
  type CompareKey,
  type FinderFeel,
  type FinderLight,
  type FinderPlace,
} from "@/data/pvd";

/* ── 08 · PVD science ────────────────────────────────────────── */

export function PvdScience() {
  const { ref, progress, reduced } = useScrollProgress<HTMLDivElement>();
  const i = reduced ? 0 : stageIndex(progress, scienceStages.length);

  return (
    <section id="process" ref={ref} className="relative h-[420vh] bg-metal-black">
      <div className="sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden">
        <img
          src={scienceImage}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <span className="absolute inset-0 bg-metal-black/60" />
        <div className={cn(wrap, "relative grid gap-12 lg:grid-cols-12 lg:gap-20")}>
          <div className="lg:col-span-5">
            <p className={meta}>Chapter 04 — Science</p>
            <StatementHeading
              lines={["Bonded,", "not applied."]}
              size="clamp(40px, 6vw, 112px)"
              className="mt-5"
            />
          </div>

          <ol className="lg:col-span-7">
            {scienceStages.map((s, idx) => (
              <li
                key={s.index}
                className={cn(
                  "grid grid-cols-[3rem_1fr] gap-5 border-t border-border/60 py-5 transition-opacity duration-700",
                  idx === i ? "opacity-100" : "opacity-30",
                )}
              >
                <span
                  className={cn(
                    "text-[0.6rem] uppercase tracking-[0.24em]",
                    idx === i ? "text-champagne" : "text-muted-foreground",
                  )}
                >
                  {s.index}
                </span>
                <div>
                  <p className="font-display text-xl font-light text-foreground lg:text-2xl">
                    {s.name}
                  </p>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                    {s.body}
                  </p>
                  <span
                    aria-hidden="true"
                    className="mt-4 block h-px origin-left bg-champagne transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                    style={{ transform: `scaleX(${idx === i ? 1 : 0})` }}
                  />
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ── 09 · Sheet to surface (pinned) ──────────────────────────── */

export function SheetToSurface() {
  const { ref, progress, reduced } = useScrollProgress<HTMLDivElement>();
  const i = reduced ? 0 : stageIndex(progress, processSteps.length);
  const step = processSteps[i]!;

  return (
    <section ref={ref} className="relative h-[480vh] bg-metal-black">
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <div className={cn(wrap, "grid h-full items-center gap-10 lg:grid-cols-2 lg:gap-20")}>
          <figure className="relative aspect-[4/3] w-full overflow-hidden lg:aspect-[4/5]">
            {processSteps.map((s, idx) => (
              <img
                key={s.index}
                src={s.image}
                alt={s.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-opacity duration-[900ms]"
                style={{ opacity: idx === i ? 1 : 0 }}
              />
            ))}
          </figure>

          <div>
            <p className={meta}>From sheet to surface</p>
            <ol className="mt-8">
              {processSteps.map((s, idx) => (
                <li
                  key={s.index}
                  className={cn(
                    "border-t border-border/60 py-4 transition-opacity duration-700 lg:py-5",
                    idx === i ? "opacity-100" : "opacity-25",
                  )}
                >
                  <div className="flex items-baseline gap-5">
                    <span
                      className={cn(
                        "text-[0.6rem] tracking-[0.24em]",
                        idx === i ? "text-champagne" : "text-muted-foreground",
                      )}
                    >
                      {s.index}
                    </span>
                    <span className="font-display text-xl font-light uppercase tracking-tight text-foreground lg:text-3xl">
                      {s.name}
                    </span>
                  </div>
                  {idx === i ? (
                    <p className="mt-3 max-w-md pl-10 text-sm leading-relaxed text-muted-foreground">
                      {s.body}
                    </p>
                  ) : null}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── 10 · Engineered precision ───────────────────────────────── */

export function EngineeredPrecision() {
  return (
    <section className="border-t border-border/60 bg-metal-black py-24 lg:py-40">
      <div className={wrap}>
        <StatementHeading lines={["Precision", "is a surface."]} size="clamp(50px, 9vw, 168px)" />
        <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-12 lg:mt-28 lg:grid-cols-5 lg:gap-x-10">
          {precisionDetails.map((d, i) => (
            <ClipReveal key={d.index} delay={(i % 5) * 110}>
              <div className="group/img overflow-hidden">
                <img
                  src={d.image}
                  alt={d.alt}
                  loading="lazy"
                  decoding="async"
                  className={cn(
                    "w-full scale-[1.05] object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/img:scale-100",
                    i % 2 === 0 ? "aspect-[3/4]" : "aspect-[3/4] lg:mt-14",
                  )}
                />
              </div>
              <p className={cn(meta, "mt-4")}>
                {d.label} — {d.index}
              </p>
            </ClipReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── 11 · Material lineup ────────────────────────────────────── */

export function MaterialLineup() {
  return (
    <section id="collection" className="border-t border-border/60 bg-metal-black py-24 lg:py-36">
      <div className={wrap}>
        <p className={meta}>Chapter 05 — Collection</p>
        <StatementHeading lines={["The collection."]} size="clamp(50px, 9vw, 168px)" className="mt-5" />
      </div>
      <HorizontalRail className="mt-14" itemClassName="w-[76vw] sm:w-[46vw] lg:w-[28vw]">
        {tones.map((t) => (
          <article key={t.id} className="group" data-cursor="Explore">
            <div className="relative overflow-hidden transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-2">
              <img
                src={t.image}
                alt={`${t.name} PVD stainless steel`}
                loading="lazy"
                className="aspect-[3/4] w-full object-cover"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-[1200ms] group-hover:opacity-70"
                style={{
                  backgroundImage:
                    "linear-gradient(104deg, transparent 38%, rgba(255,255,255,0.35) 50%, transparent 62%)",
                }}
              />
            </div>
            <div className="mt-5 flex items-baseline justify-between gap-4">
              <h3 className="font-display text-2xl font-light text-foreground">{t.name}</h3>
              <span
                aria-hidden="true"
                className="h-3 w-12"
                style={{ backgroundImage: t.sheen }}
              />
            </div>
            <p className={cn(meta, "mt-2")}>PVD · {t.textures.join(" / ")}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t.note}</p>
            <p className={cn(meta, "mt-4")}>{t.applications.join(" · ")}</p>
            <Link to="/materials" className="pvd-link mt-6">
              Explore <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </article>
        ))}
      </HorizontalRail>
    </section>
  );
}

/* ── 12 · Finish comparison ──────────────────────────────────── */

export function FinishComparison() {
  const [selected, setSelected] = useState<CompareKey[]>(["champagne", "gunmetal", "black"]);
  const toggle = (k: CompareKey) =>
    setSelected((prev) =>
      prev.includes(k) ? prev.filter((x) => x !== k) : prev.length < 4 ? [...prev, k] : prev,
    );
  const shown = comparison.filter((c) => selected.includes(c.key));
  const rows = [
    ["Colour", "colour"],
    ["Reflectivity", "reflectivity"],
    ["Texture", "texture"],
    ["Character", "character"],
    ["Application", "application"],
  ] as const;

  return (
    <section className="border-t border-border/60 bg-metal-black py-24 lg:py-36">
      <div className={wrap}>
        <StatementHeading lines={["Choose", "your surface."]} size="clamp(44px, 7.4vw, 138px)" />

        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
          {comparison.map((c) => (
            <button
              key={c.key}
              type="button"
              onClick={() => toggle(c.key)}
              aria-pressed={selected.includes(c.key)}
              className={cn(
                "border-b pb-1 text-[0.62rem] uppercase tracking-[0.24em] transition-colors duration-500",
                selected.includes(c.key)
                  ? "border-champagne text-champagne"
                  : "border-transparent text-muted-foreground hover:text-foreground",
              )}
            >
              {c.name}
            </button>
          ))}
        </div>

        <div className="mt-14 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <caption className="sr-only">Comparison of STEELX PVD surfaces</caption>
            <thead>
              <tr>
                <th scope="col" className={cn(meta, "w-40 border-b border-border/60 pb-4 font-normal")}>
                  Surface
                </th>
                {shown.map((c) => (
                  <th
                    key={c.key}
                    scope="col"
                    className="border-b border-border/60 pb-4 font-display text-xl font-light text-foreground"
                  >
                    {c.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map(([labelText, key]) => (
                <tr key={key}>
                  <th scope="row" className={cn(meta, "border-b border-border/40 py-5 font-normal")}>
                    {labelText}
                  </th>
                  {shown.map((c) => (
                    <td key={c.key} className="border-b border-border/40 py-5 text-sm text-foreground/80">
                      {c[key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

/* ── 13 · Material finder ────────────────────────────────────── */

export function MaterialFinder() {
  const [place, setPlace] = useState<FinderPlace | null>(null);
  const [feel, setFeel] = useState<FinderFeel | null>(null);
  const [light, setLight] = useState<FinderLight | null>(null);
  const results = place && feel && light ? recommend(place, feel, light) : null;

  const chip = (on: boolean) =>
    cn(
      "border-b pb-1 text-[0.64rem] uppercase tracking-[0.2em] transition-colors duration-500",
      on ? "border-champagne text-champagne" : "border-transparent text-muted-foreground hover:text-foreground",
    );

  return (
    <section className="border-t border-border/60 bg-metal-black py-24 lg:py-36">
      <div className={cn(wrap, "grid gap-14 lg:grid-cols-12 lg:gap-20")}>
        <div className="lg:col-span-6">
          <StatementHeading
            lines={["Find", "your finish."]}
            size="clamp(44px, 6.4vw, 118px)"
          />

          <fieldset className="mt-14 border-t border-border/60 pt-6">
            <legend className={meta}>Question 01 — Where is it going?</legend>
            <div className="mt-5 flex flex-wrap gap-x-7 gap-y-3">
              {finderPlaces.map((p) => (
                <button key={p} type="button" onClick={() => setPlace(p)} className={chip(place === p)}>
                  {p}
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset className="mt-10 border-t border-border/60 pt-6">
            <legend className={meta}>Question 02 — What should it feel like?</legend>
            <div className="mt-5 flex flex-wrap gap-x-7 gap-y-3">
              {finderFeels.map((f) => (
                <button key={f} type="button" onClick={() => setFeel(f)} className={chip(feel === f)}>
                  {f}
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset className="mt-10 border-t border-border/60 pt-6">
            <legend className={meta}>Question 03 — How should light behave?</legend>
            <div className="mt-5 flex flex-wrap gap-x-7 gap-y-3">
              {finderLight.map((l) => (
                <button key={l} type="button" onClick={() => setLight(l)} className={chip(light === l)}>
                  {l}
                </button>
              ))}
            </div>
          </fieldset>
        </div>

        <div className="lg:col-span-6">
          <p className={meta}>Recommendation</p>
          <div aria-live="polite" className="mt-6 border-t border-border/60">
            {results ? (
              <ol>
                {results.map((r, i) => (
                  <li key={`${r.material}-${i}`} className="border-b border-border/40 py-6">
                    <div className="flex items-baseline justify-between gap-6">
                      <span className="font-display text-2xl font-light text-foreground">
                        {r.material}
                      </span>
                      <span className={meta}>{r.finish}</span>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {r.application} · Reference: {r.reference}
                    </p>
                  </li>
                ))}
              </ol>
            ) : (
              <p className="py-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Answer the three questions and we'll suggest three surfaces worth sampling.
              </p>
            )}
          </div>
          {results ? (
            <a href="#specify" className="pvd-cta mt-10">
              Request a sample <ArrowRight className="h-3.5 w-3.5" />
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}

/* ── 14 · Project proof ──────────────────────────────────────── */

export function ProjectProof() {
  return (
    <section className="border-t border-border/60 bg-metal-black">
      <div className={cn(wrap, "py-24 lg:py-36")}>
        <p className={meta}>Chapter 06 — Proof</p>
        <StatementHeading
          lines={["In the", "real world."]}
          size="clamp(50px, 9vw, 168px)"
          className="mt-6"
        />
      </div>

      {proofProjects.map((p, i) => (
        <article key={p.name} className="relative" data-cursor="View">
          <ClipReveal>
            <div className="group/img relative h-[78svh] w-full overflow-hidden lg:h-[100svh]">
              <img
                src={p.image}
                alt={p.alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full scale-[1.06] object-cover transition-transform duration-[2000ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/img:scale-100"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-metal-black via-metal-black/25 to-transparent"
              />
              <div
                className={cn(
                  wrap,
                  "absolute inset-x-0 bottom-0 flex flex-col gap-5 pb-12 lg:flex-row lg:items-end lg:justify-between lg:pb-20",
                )}
              >
                <div>
                  <p className={meta}>
                    0{i + 1} — {p.location}
                  </p>
                  <h3 className="mt-4 font-display text-4xl font-light uppercase tracking-[-0.03em] text-foreground sm:text-6xl lg:text-8xl">
                    {p.name}
                  </h3>
                </div>
                <div className="lg:pb-3 lg:text-right">
                  <p className={meta}>{p.material}</p>
                  <Link to="/projects" className="pvd-link mt-4">
                    View project <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </ClipReveal>
        </article>
      ))}
    </section>
  );
}

/* ── 15 · Deep material detail ───────────────────────────────── */

export function DeepDetail() {
  const hairline = textures[0]!;
  const mirror = textures[1]!;

  return (
    <section className="border-t border-border/60 bg-metal-black py-24 lg:py-36">
      <div className={wrap}>
        <StatementHeading lines={["See the", "difference."]} size="clamp(50px, 9vw, 168px)" />
        <p className="mt-8 max-w-md text-sm leading-relaxed text-muted-foreground">
          Hairline against mirror — the same colour, the same steel, two entirely different
          relationships with light. Drag to compare.
        </p>
        <div className="mt-14">
          <BeforeAfter
            before={{ src: hairline.image, alt: "Hairline finish stainless steel" }}
            after={{ src: mirror.image, alt: "Mirror finish stainless steel" }}
            beforeLabel="Hairline"
            afterLabel="Mirror"
          />
        </div>
      </div>
    </section>
  );
}

/* ── 16 · Longevity ──────────────────────────────────────────── */

export function Longevity() {
  return (
    <section className="relative isolate border-t border-border/60">
      <img
        src={pvdImages.studio}
        alt="Architectural stainless steel surface in a completed building"
        loading="lazy"
        className="h-[80svh] w-full object-cover"
      />
      <span className="absolute inset-0 bg-gradient-to-t from-metal-black via-metal-black/50 to-transparent" />
      <div className={cn(wrap, "absolute inset-x-0 bottom-0 pb-16")}>
        <StatementHeading lines={["Built", "to endure."]} size="clamp(46px, 8vw, 150px)" />
        <p className="mt-8 max-w-lg text-base leading-relaxed text-foreground/75">
          PVD colour is bonded to the steel rather than applied over it, so the finish behaves like
          the substrate it sits on. Stainless steel carries the structural performance; the coating
          carries the colour. Specified correctly, that combination reduces replacement cycles
          across the life of a building.
        </p>
      </div>
    </section>
  );
}

/* ── 17 · Specification ──────────────────────────────────────── */

export function Specification() {
  return (
    <section id="specify" className="border-t border-border/60 bg-metal-black py-24 lg:py-36">
      <div className={cn(wrap, "grid gap-14 lg:grid-cols-12 lg:gap-20")}>
        <div className="lg:col-span-5">
          <StatementHeading lines={["Specification."]} size="clamp(38px, 5.6vw, 104px)" />
          <button
            type="button"
            onClick={() => toast("Material guide — available on request from the studio.")}
            className="pvd-link mt-10"
          >
            Download material guide <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
        <dl className="lg:col-span-7">
          {specification.map((s) => (
            <div
              key={s.label}
              className="grid gap-2 border-t border-border/60 py-6 sm:grid-cols-[minmax(0,11rem)_1fr] sm:gap-10"
            >
              <dt className={meta}>{s.label}</dt>
              <dd className="text-sm leading-relaxed text-foreground/80">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ── 18 · Final product moment ───────────────────────────────── */

export function FinalMoment() {
  const { ref, progress, reduced } = useScrollProgress<HTMLDivElement>();
  const p = reduced ? 0.4 : progress;
  const tone = tones[1]!;

  return (
    <section ref={ref} className="relative h-[240vh] bg-metal-black">
      <div className="sticky top-0 grid h-[100svh] place-items-center overflow-hidden">
        <MaterialObject tone={tone} rotate={-24 + p * 48} highlight={(p * 3) % 1} scale={1.15} />
        <div className={cn(wrap, "pointer-events-none absolute inset-0 flex flex-col justify-between py-20")}>
          <StatementHeading lines={["The surface", "is the product."]} size="clamp(28px, 4vw, 72px)" />
          <StatementHeading
            lines={["The space", "is the result."]}
            size="clamp(28px, 4vw, 72px)"
            className="text-right"
          />
        </div>
      </div>
    </section>
  );
}

/* ── 19 · Final CTA ──────────────────────────────────────────── */

export function FinalCta() {
  return (
    <section className="relative isolate border-t border-border/60">
      <img
        src={pvdImages.cta}
        alt="Completed STEELX architectural project in coated stainless steel"
        loading="lazy"
        className="h-[100svh] w-full object-cover"
      />
      <span className="absolute inset-0 bg-gradient-to-t from-metal-black via-metal-black/55 to-metal-black/20" />
      <div className={cn(wrap, "absolute inset-x-0 bottom-0 pb-16 lg:pb-24")}>
        <StatementHeading lines={["Ready to", "specify the surface?"]} size="clamp(30px, 4.6vw, 84px)" />
        <p className="mt-8 max-w-lg text-base leading-relaxed text-foreground/75">
          Send us a drawing, reference image or finish you're considering. Our team will help
          develop the right material specification.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4">
          <Link to="/contact" className="pvd-cta">
            Start a project <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <Link to="/materials" className="pvd-link">
            Request samples <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
