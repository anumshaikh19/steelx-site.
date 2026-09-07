import { useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, Download, MessageCircle } from "lucide-react";

import { Section } from "@/components/page-shell";
import { Reveal, SectionHeading } from "@/components/reveal";
import { HorizontalRail, Magnetic } from "@/components/motion";
import {
  careCards,
  cities,
  faqs,
  keywordClusters,
  neverUse,
  orderSteps,
  resources,
  testimonials,
} from "@/data/mesh";

/* ── 42–46 Resource hub ──────────────────────────────────────── */
export function ResourceHub() {
  return (
    <Section className="border-t border-border">
      <SectionHeading eyebrow="Resource hub" title="Specification assets" />
      <Reveal variant="up" delay={100}>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Engineered documentation for architectural precision. Files are issued on request while the
          2026 asset library is finalised — ask the technical team and we will send them directly.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-px border-t border-border lg:grid-cols-2">
        {resources.map((r, i) => (
          <Reveal key={r.title} variant="row" delay={(i % 2) * 100} className="border-b border-border py-8 lg:pr-10">
            <div className="flex items-start justify-between gap-6">
              <div>
                <h3 className="font-display text-2xl text-foreground">{r.title}</h3>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">{r.body}</p>
              </div>
              <span className="shrink-0 border border-border px-3 py-1.5 text-[0.56rem] uppercase tracking-[0.2em] text-champagne">
                {r.type} · {r.size}
              </span>
            </div>
            <button
              type="button"
              disabled
              title="Issued on request — contact the technical team"
              className="mt-6 inline-flex cursor-not-allowed items-center gap-2 border border-border px-6 py-3 text-[0.62rem] uppercase tracking-[0.24em] text-muted-foreground opacity-60"
            >
              <Download className="h-4 w-4" /> Available on request
            </button>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ── 47–51 Care & maintenance ────────────────────────────────── */
export function CareMaintenance() {
  return (
    <Section className="border-t border-border">
      <SectionHeading eyebrow="Sustainability" title="Care & maintenance" />
      <div className="mt-14 grid gap-6 lg:grid-cols-4">
        {careCards.map((c, i) => (
          <Reveal key={c.title} variant="up" delay={i * 110}>
            <article className="h-full border border-border p-7 transition-colors hover:border-champagne">
              <p className="text-[0.56rem] uppercase tracking-[0.3em] text-champagne">{c.tag}</p>
              <h3 className="mt-4 font-display text-xl uppercase text-foreground">{c.title}</h3>
              <ul className="mt-5 space-y-2.5">
                {c.items.map((it) => (
                  <li key={it} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span aria-hidden="true" className="mt-2 h-px w-4 shrink-0 bg-champagne" />
                    {it}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
        <Reveal variant="up" delay={330}>
          <article className="h-full border border-destructive/50 p-7">
            <p className="text-[0.56rem] uppercase tracking-[0.3em] text-destructive">Never use</p>
            <ul className="mt-5 space-y-2.5">
              {neverUse.map((n) => (
                <li key={n} className="text-sm uppercase tracking-[0.12em] text-foreground">{n}</li>
              ))}
            </ul>
            <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
              These strip or stain the titanium PVD layer and void the finish warranty.
            </p>
          </article>
        </Reveal>
      </div>
    </Section>
  );
}

/* ── 52–53 How to order ──────────────────────────────────────── */
export function HowToOrder() {
  return (
    <Section className="border-t border-border">
      <SectionHeading eyebrow="Seamless procurement" title="How to order" />
      <HorizontalRail className="mt-12" itemClassName="w-[68vw] sm:w-[38vw] lg:w-[21vw]">
        {orderSteps.map((s) => (
          <article key={s.n} className="group h-full border border-border p-7 transition-colors hover:border-champagne">
            <p className="font-display text-5xl text-champagne/40 transition-colors group-hover:text-champagne">{s.n}</p>
            <h3 className="mt-6 font-display text-xl text-foreground">{s.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
          </article>
        ))}
      </HorizontalRail>
    </Section>
  );
}

/* ── 54 Testimonials ─────────────────────────────────────────── */
export function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i]!;
  const step = (d: number) => setI((p) => (p + d + testimonials.length) % testimonials.length);

  return (
    <Section className="border-t border-border">
      <SectionHeading eyebrow="Client testimonials" title="Expert feedback on our architectural metal mesh" />
      <p className="mt-6 text-[0.6rem] uppercase tracking-[0.3em] text-champagne">
        4.9 / 5 average rating across 200+ global projects
      </p>

      <div className="mt-12 border border-border p-8 lg:p-14">
        <blockquote key={i} className="motion-safe:animate-fade-in">
          <p className="max-w-4xl font-display text-2xl leading-snug text-foreground lg:text-4xl">
            “{t.quote}”
          </p>
          <footer className="mt-8">
            <p className="text-sm uppercase tracking-[0.18em] text-champagne">{t.name}</p>
            <p className="mt-2 text-[0.6rem] uppercase tracking-[0.26em] text-muted-foreground">
              {t.role} · {t.location}
            </p>
          </footer>
        </blockquote>

        <div className="mt-10 flex items-center gap-3 border-t border-border pt-6">
          <button
            type="button"
            onClick={() => step(-1)}
            aria-label="Previous testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-champagne hover:text-champagne"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => step(1)}
            aria-label="Next testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-champagne hover:text-champagne"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
          <span className="ml-2 text-[0.6rem] tabular-nums tracking-[0.3em] text-muted-foreground">
            {String(i + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </Section>
  );
}

/* ── 55 Technical FAQ ────────────────────────────────────────── */
export function TechnicalFAQ() {
  return (
    <Section className="border-t border-border">
      <SectionHeading eyebrow="Resources" title="Technical FAQ" />
      <div className="mt-12 border-t border-border">
        {faqs.map((f, i) => (
          <Reveal key={f.q} variant="row" delay={i * 55}>
            <details className="group border-b border-border py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-xl text-foreground transition-colors group-open:text-champagne">
                {f.q}
                <span className="text-champagne transition-transform duration-500 group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ── 56 Global reach ─────────────────────────────────────────── */
export function GlobalReach() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <Section className="border-t border-border">
      <SectionHeading eyebrow="Global reach" title="Our presence across India" />
      <Reveal variant="up" delay={100}>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Supplying premium architectural metal mesh to major infrastructure and luxury projects in
          20+ cities across India, with exports to the UAE, Singapore, the USA and the UK.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div className="relative aspect-square border border-border tech-grid">
          {cities.map((c, i) => {
            const angle = (i / cities.length) * Math.PI * 2;
            const radius = 26 + (i % 3) * 7;
            const left = (50 + Math.cos(angle) * radius).toFixed(3);
            const top = (50 + Math.sin(angle) * radius).toFixed(3);
            return (
              <button
                key={c}
                type="button"
                onMouseEnter={() => setActive(c)}
                onFocus={() => setActive(c)}
                onMouseLeave={() => setActive(null)}
                onBlur={() => setActive(null)}
                aria-label={c}
                style={{ left: `${left}%`, top: `${top}%`, animationDelay: `${i * 90}ms` }}
                className="absolute h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-champagne transition-transform duration-500 hover:scale-[2.2] motion-safe:animate-fade-in"
              />
            );
          })}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 p-6 text-center">
            <p className="font-display text-2xl text-foreground">{active ?? "20+ cities"}</p>
            <p className="mt-2 text-[0.56rem] uppercase tracking-[0.3em] text-champagne">
              {active ? "Supply & installation support" : "Hover a point to read the location"}
            </p>
          </div>
        </div>

        <ul className="grid grid-cols-2 gap-px self-start border-t border-border sm:grid-cols-3">
          {cities.map((c, i) => (
            <Reveal key={c} variant="row" delay={(i % 6) * 50} as="li" className="border-b border-border py-4 pr-4">
              <button
                type="button"
                onMouseEnter={() => setActive(c)}
                onMouseLeave={() => setActive(null)}
                className="text-[0.66rem] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-champagne"
              >
                {c}
              </button>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}

/* ── 57 Keywords ─────────────────────────────────────────────── */
export function KeywordSection() {
  return (
    <Section className="border-t border-border">
      <SectionHeading eyebrow="SEO" title="Architectural mesh technical keywords" />
      <div className="mt-12 grid gap-px border-t border-border sm:grid-cols-2 lg:grid-cols-4">
        {keywordClusters.map((c, i) => (
          <Reveal key={c.title} variant="row" delay={i * 90} className="border-b border-border py-7 pr-8">
            <h3 className="text-[0.58rem] uppercase tracking-[0.3em] text-champagne">{c.title}</h3>
            <ul className="mt-4 space-y-2">
              {c.items.map((k) => (
                <li key={k} className="text-xs leading-relaxed text-muted-foreground">{k}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ── 58 Final CTA ────────────────────────────────────────────── */
export function FinalCTA({ onEnquire, whatsapp }: { onEnquire: () => void; whatsapp: string }) {
  return (
    <Section className="border-t border-border text-center">
      <Reveal variant="up">
        <h2 className="mx-auto max-w-4xl font-display text-4xl leading-[0.98] text-foreground sm:text-6xl lg:text-[5.5rem]">
          START A PROJECT
        </h2>
      </Reveal>
      <Reveal variant="up" delay={100}>
        <p className="mx-auto mt-7 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Send opening sizes, weave preference and the tone you are chasing. Samples ship with a
          written specification and shop drawings follow within 48 hours.
        </p>
      </Reveal>
      <Reveal variant="up" delay={180}>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Magnetic>
            <button
              type="button"
              onClick={onEnquire}
              data-cursor="Start"
              className="inline-flex items-center gap-2 bg-champagne-gradient px-8 py-4 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-metal-black"
            >
              Request samples <ArrowUpRight className="h-4 w-4" />
            </button>
          </Magnetic>
          <button
            type="button"
            onClick={onEnquire}
            className="inline-flex items-center gap-2 border border-border px-8 py-4 text-[0.7rem] uppercase tracking-[0.2em] text-foreground transition-colors hover:border-champagne hover:text-champagne"
          >
            Start a project
          </button>
          <a
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-border px-8 py-4 text-[0.7rem] uppercase tracking-[0.2em] text-foreground transition-colors hover:border-champagne hover:text-champagne"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
