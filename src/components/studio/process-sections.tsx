import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";

import { Section } from "@/components/page-shell";
import { Reveal, SectionHeading } from "@/components/reveal";
import { HorizontalRail, StickyStory, Parallax } from "@/components/motion";
import { MediaFrame } from "@/components/media-frame";
import { studioImages, pvdSteps, machines, reels, sheetToSpace } from "@/data/studio";
import { cn } from "@/lib/utils";

/* 09 — PVD TECHNOLOGY ───────────────────────────────────── */
export function PvdTechnology() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const i = refs.current.indexOf(e.target as HTMLLIElement);
            if (i >= 0) setActive(i);
          }
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    refs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <Section className="border-t border-border">
      <SectionHeading eyebrow="06 — PVD technology" title="PRECISION IN A VACUUM." />

      <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <ol className="border-t border-border">
          {pvdSteps.map((s, i) => (
            <li
              key={s.id}
              ref={(el) => {
                refs.current[i] = el;
              }}
              className={cn(
                "border-b border-l py-8 pl-6 transition-all duration-700",
                active === i ? "border-l-champagne opacity-100" : "border-l-border opacity-45",
              )}
            >
              <p className="text-[0.58rem] tabular-nums tracking-[0.34em] text-champagne">{s.n}</p>
              <h3 className="mt-3 font-display text-2xl text-foreground lg:text-3xl">{s.title}</h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              <div className="mt-6 aspect-[16/10] overflow-hidden border border-border lg:hidden">
                <img src={s.image} alt={s.alt} loading="lazy" className="h-full w-full object-cover" />
              </div>
            </li>
          ))}
        </ol>

        <div className="hidden lg:block">
          <div className="sticky top-28 overflow-hidden border border-border metal-grain">
            <div className="relative aspect-[4/5]">
              {pvdSteps.map((s, i) => (
                <img
                  key={s.id}
                  src={s.image}
                  alt={s.alt}
                  loading="lazy"
                  className={cn(
                    "absolute inset-0 h-full w-full object-cover transition-all duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
                    active === i ? "scale-100 opacity-100" : "scale-[1.05] opacity-0",
                  )}
                />
              ))}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-background to-transparent p-6">
                <div className="mb-4 h-px w-full bg-border">
                  <div
                    className="h-full bg-champagne-gradient transition-[width] duration-700"
                    style={{ width: `${((active + 1) / pvdSteps.length) * 100}%` }}
                  />
                </div>
                <span className="text-[0.58rem] uppercase tracking-[0.3em] text-champagne">
                  {pvdSteps[active]?.n} — {pvdSteps[active]?.title}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* 10 — MACHINERY ────────────────────────────────────────── */
export function Machinery() {
  return (
    <Section className="border-t border-border">
      <SectionHeading eyebrow="07 — Technology" title="THE MACHINES BEHIND THE FINISH." />
      <HorizontalRail className="mt-14" itemClassName="w-[84vw] sm:w-[54vw] lg:w-[40vw]">
        {machines.map((m) => (
          <article key={m.name} className="group" data-cursor="Drag">
            <div className="aspect-[16/11] overflow-hidden border border-border metal-sheen">
              <img
                src={m.image}
                alt={m.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
              />
            </div>
            <p className="mt-5 text-[0.56rem] uppercase tracking-[0.3em] text-champagne">{m.purpose}</p>
            <h3 className="mt-2 font-display text-2xl text-foreground">{m.name}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.text}</p>
          </article>
        ))}
      </HorizontalRail>
    </Section>
  );
}

/* 11 — REELS ────────────────────────────────────────────── */
export function SteelXInMotion() {
  return (
    <Section className="border-t border-border">
      <SectionHeading eyebrow="08 — Visual feed" title="STEELX IN MOTION" />
      <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
        Workshop and installation footage. Each frame below accepts a real video file — stills are
        shown until footage is supplied, never an empty player.
      </p>
      <HorizontalRail className="mt-12" itemClassName="w-[66vw] sm:w-[36vw] lg:w-[22vw]">
        {reels.map((r) => (
          <div key={r.id} className="group relative">
            <MediaFrame
              className="aspect-[9/14]"
              media={{
                poster: r.poster,
                alt: r.alt,
                label: r.label,
                ...(r.videoSrc ? { videoSrc: r.videoSrc } : {}),
              }}
            />
            {!r.videoSrc ? (
              <span className="pointer-events-none absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-champagne/50 text-champagne opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                <Play className="h-4 w-4" />
              </span>
            ) : null}
          </div>
        ))}
      </HorizontalRail>
    </Section>
  );
}

/* 12 — FROM SHEET TO SPACE ──────────────────────────────── */
export function SheetToSpace() {
  return (
    <Section className="border-t border-border">
      <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal variant="text" as="p" className="text-[0.58rem] uppercase tracking-[0.34em] text-champagne">
            09 — Sequence
          </Reveal>
          <Reveal variant="up" delay={80}>
            <h2 className="mt-6 font-display text-4xl leading-[0.95] text-foreground lg:text-[4.2rem]">
              FROM SHEET
              <br />
              TO SPACE.
            </h2>
          </Reveal>
        </div>
        <StickyStory steps={sheetToSpace} />
      </div>
    </Section>
  );
}

/* 15 — QUALITY / PRECISION ──────────────────────────────── */
export function QualitySection() {
  const measures = [
    { label: "Shop tolerance", value: "±0.5 mm" },
    { label: "Colour reference", value: "Signed control sample" },
    { label: "Batching", value: "By elevation" },
    { label: "Checks", value: "Adhesion · thickness · tone" },
  ];

  return (
    <section className="relative border-t border-border">
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading eyebrow="10 — Quality" title="EVERY SURFACE IS INSPECTED." />
            <Reveal variant="up" delay={120}>
              <p className="mt-8 max-w-md text-sm leading-relaxed text-muted-foreground">
                Colour, adhesion and coating thickness are verified against the signed project sample
                under controlled lighting before a batch is released. Panels are then crated in
                installation sequence with the protective film intact.
              </p>
            </Reveal>
            <div className="mt-12 grid gap-px border-t border-border sm:grid-cols-2">
              {measures.map((m, i) => (
                <Reveal key={m.label} variant="row" delay={i * 90} className="border-b border-border py-6 pr-6">
                  <p className="text-[0.56rem] uppercase tracking-[0.28em] text-muted-foreground">
                    {m.label}
                  </p>
                  <p className="mt-2 font-display text-xl text-champagne">{m.value}</p>
                </Reveal>
              ))}
            </div>
          </div>
          <div className="relative">
            <Parallax className="aspect-[4/5] border border-border metal-grain" amount={50}>
              <img
                src={studioImages.inspection}
                alt="A coated panel being inspected under controlled lighting"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </Parallax>
            <div className="pointer-events-none absolute inset-0 tech-grid opacity-30" />
          </div>
        </div>
      </Section>
    </section>
  );
}
