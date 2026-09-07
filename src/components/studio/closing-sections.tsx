import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, MessageCircle, Sparkles } from "lucide-react";

import { Section } from "@/components/page-shell";
import { Reveal, SectionHeading } from "@/components/reveal";
import { HorizontalRail, Magnetic, Parallax } from "@/components/motion";
import { Lightbox } from "@/components/lightbox";
import { detailGallery, principles, sectors, locations, team, studioImages } from "@/data/studio";
import { projects } from "@/data/projects";
import { journalPosts, formatDate } from "@/data/journal";
import { studio } from "@/config/nav";
import { whatsappLink } from "@/components/whatsapp";
import { cn } from "@/lib/utils";

/* 13 — PROJECT SHOWCASE ─────────────────────────────────── */
export function ProjectShowcase() {
  const picks = projects.slice(0, 6);
  const [a, b, feature, c, d, second] = picks;

  const Card = ({
    project,
    tall = false,
  }: {
    project: (typeof projects)[number];
    tall?: boolean;
  }) => (
    <Link
      to="/projects/$slug"
      params={{ slug: project.slug }}
      data-cursor="View"
      className="group block"
    >
      <div className={cn("overflow-hidden border border-border metal-sheen", tall ? "aspect-[4/5]" : "aspect-[16/10]")}>
        <img
          src={project.coverImage}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
        />
      </div>
      <div className="mt-5 flex items-start justify-between gap-6">
        <div>
          <h3 className="font-display text-2xl text-foreground">{project.title}</h3>
          <p className="mt-2 text-[0.58rem] uppercase tracking-[0.26em] text-muted-foreground">
            {project.location} — {project.category}
          </p>
          <p className="mt-1 text-[0.58rem] uppercase tracking-[0.26em] text-champagne">
            {project.finish}
          </p>
        </div>
        <ArrowUpRight className="h-5 w-5 shrink-0 text-champagne transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
      </div>
    </Link>
  );

  return (
    <Section className="border-t border-border">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading eyebrow="11 — Projects" title="WHERE THE MATERIAL LIVES." />
        <Link
          to="/projects"
          className="text-[0.58rem] uppercase tracking-[0.3em] text-champagne underline-offset-8 hover:underline"
        >
          All projects
        </Link>
      </div>

      <div className="mt-14 space-y-16">
        <div className="grid gap-10 md:grid-cols-2">
          {a ? <Reveal variant="up"><Card project={a} /></Reveal> : null}
          {b ? <Reveal variant="up" delay={120}><Card project={b} /></Reveal> : null}
        </div>

        {feature ? (
          <Reveal variant="scale">
            <Link
              to="/projects/$slug"
              params={{ slug: feature.slug }}
              data-cursor="View"
              className="group block"
            >
              <Parallax className="aspect-[16/9] border border-border metal-grain" amount={60}>
                <img
                  src={feature.coverImage}
                  alt={feature.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </Parallax>
              <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
                <h3 className="font-display text-3xl text-foreground lg:text-5xl">{feature.title}</h3>
                <p className="text-[0.58rem] uppercase tracking-[0.26em] text-muted-foreground">
                  {feature.location} — {feature.scope}
                </p>
              </div>
            </Link>
          </Reveal>
        ) : null}

        <div className="grid gap-10 md:grid-cols-2">
          {c ? <Reveal variant="left"><Card project={c} tall /></Reveal> : null}
          {d ? <Reveal variant="right"><Card project={d} tall /></Reveal> : null}
        </div>

        {second ? (
          <Reveal variant="scale">
            <Link
              to="/projects/$slug"
              params={{ slug: second.slug }}
              data-cursor="View"
              className="group block"
            >
              <div className="aspect-[21/9] overflow-hidden border border-border metal-sheen">
                <img
                  src={second.coverImage}
                  alt={second.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1600ms] group-hover:scale-105"
                />
              </div>
              <h3 className="mt-6 font-display text-3xl text-foreground lg:text-4xl">{second.title}</h3>
            </Link>
          </Reveal>
        ) : null}
      </div>
    </Section>
  );
}

/* 14 — DETAIL GALLERY ───────────────────────────────────── */
export function DetailGallery() {
  const [index, setIndex] = useState<number | null>(null);

  return (
    <Section className="border-t border-border">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading eyebrow="12 — Gallery" title="Material, detail, process" />
        <span className="text-[0.58rem] uppercase tracking-[0.3em] text-muted-foreground">
          01 / {String(detailGallery.length).padStart(2, "0")}
        </span>
      </div>
      <HorizontalRail className="mt-12" itemClassName="w-[76vw] sm:w-[40vw] lg:w-[24vw]">
        {detailGallery.map((g, i) => (
          <button
            key={g.src + i}
            type="button"
            data-cursor="Explore"
            onClick={() => setIndex(i)}
            className="group block w-full text-left"
          >
            <div className="aspect-[4/5] overflow-hidden border border-border metal-sheen">
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
              />
            </div>
            <span className="mt-3 block text-[0.56rem] tabular-nums tracking-[0.3em] text-muted-foreground">
              {String(i + 1).padStart(2, "0")} / {String(detailGallery.length).padStart(2, "0")}
            </span>
          </button>
        ))}
      </HorizontalRail>
      <Lightbox images={detailGallery} index={index} onClose={() => setIndex(null)} onIndex={setIndex} />
    </Section>
  );
}

/* 16 — PRINCIPLES ───────────────────────────────────────── */
export function Principles() {
  return (
    <Section className="border-t border-border">
      <SectionHeading eyebrow="13 — Why designers choose us" title="Six things we hold to" />
      <div className="mt-14 grid gap-px border-t border-border md:grid-cols-2 lg:grid-cols-3">
        {principles.map((p, i) => (
          <Reveal
            key={p.n}
            variant="up"
            delay={(i % 3) * 110}
            className="group border-b border-border py-10 pr-8 transition-colors hover:bg-foreground/[0.02]"
          >
            <p className="font-display text-5xl text-champagne/60 transition-colors group-hover:text-champagne">
              {p.n}
            </p>
            <h3 className="mt-5 font-display text-2xl uppercase tracking-[0.04em] text-foreground">
              {p.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* 17 — GLOBAL / MAP ─────────────────────────────────────── */
export function GlobalReach() {
  const [hover, setHover] = useState<string | null>(null);
  const active = locations.find((l) => l.city === hover);

  return (
    <Section className="border-t border-border">
      <SectionHeading eyebrow="14 — Reach" title="MADE FOR GLOBAL DESIGN." />
      <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <div>
          <div className="flex flex-wrap gap-2">
            {sectors.map((s, i) => (
              <Reveal key={s} variant="row" delay={i * 70} as="span">
                <span className="inline-block border border-border px-4 py-2 text-[0.56rem] uppercase tracking-[0.26em] text-muted-foreground">
                  {s}
                </span>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 grid gap-px border-t border-border sm:grid-cols-2">
            {locations.map((l, i) => (
              <Reveal
                key={l.city}
                variant="row"
                delay={i * 50}
                className="border-b border-border py-4 pr-4"
              >
                <button
                  type="button"
                  onMouseEnter={() => setHover(l.city)}
                  onMouseLeave={() => setHover(null)}
                  onFocus={() => setHover(l.city)}
                  className="text-left"
                >
                  <span className="block text-sm text-foreground">{l.city}</span>
                  <span className="mt-1 block text-[0.56rem] uppercase tracking-[0.24em] text-muted-foreground">
                    {l.note}
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="relative aspect-[3/4] border border-border tech-grid">
          {locations.map((l, i) => (
            <button
              key={l.city}
              type="button"
              onMouseEnter={() => setHover(l.city)}
              onMouseLeave={() => setHover(null)}
              aria-label={`${l.city} — ${l.note}`}
              style={{ left: `${l.x}%`, top: `${l.y}%`, animationDelay: `${i * 220}ms` }}
              className="absolute -translate-x-1/2 -translate-y-1/2"
            >
              <span
                className={cn(
                  "block h-2 w-2 rounded-full bg-champagne transition-transform duration-500",
                  hover === l.city ? "scale-[2.2]" : "motion-safe:animate-pulse",
                )}
              />
            </button>
          ))}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 border-t border-border bg-background/70 p-5 backdrop-blur">
            <p className="text-[0.56rem] uppercase tracking-[0.3em] text-champagne">
              {active ? active.city : `${locations.length} cities`}
            </p>
            <p className="mt-2 text-xs text-muted-foreground">
              {active ? active.note : "Hover a marker to see where the material is working."}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* 18 — PEOPLE ───────────────────────────────────────────── */
export function StudioTeam() {
  return (
    <Section className="border-t border-border">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading eyebrow="15 — People" title="THE PEOPLE BEHIND THE SURFACE." />
        <Link
          to="/people"
          className="text-[0.58rem] uppercase tracking-[0.3em] text-champagne underline-offset-8 hover:underline"
        >
          Meet the team
        </Link>
      </div>
      <div className="mt-14 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((m, i) => (
          <Reveal key={m.name} variant="up" delay={(i % 3) * 110}>
            <article className="group" data-cursor="Meet">
              <div className="aspect-[4/5] overflow-hidden border border-border metal-sheen">
                <img
                  src={m.image}
                  alt={`${m.name} — ${m.role}`}
                  loading="lazy"
                  className="h-full w-full object-cover grayscale transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:grayscale-0"
                />
              </div>
              <h3 className="mt-5 font-display text-2xl text-foreground">{m.name}</h3>
              <p className="mt-1 text-[0.56rem] uppercase tracking-[0.26em] text-champagne">{m.role}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {m.speciality}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* 19 — JOURNAL ──────────────────────────────────────────── */
export function JournalPreview() {
  const posts = journalPosts.slice(0, 3);
  return (
    <Section className="border-t border-border">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading eyebrow="16 — Journal" title="MATERIAL / DESIGN / KNOWLEDGE" />
        <Link
          to="/journal"
          className="text-[0.58rem] uppercase tracking-[0.3em] text-champagne underline-offset-8 hover:underline"
        >
          All articles
        </Link>
      </div>
      <div className="mt-12 grid gap-10 md:grid-cols-3">
        {posts.map((p, i) => (
          <Reveal key={p.slug} variant="up" delay={i * 120}>
            <Link
              to="/journal/$slug"
              params={{ slug: p.slug }}
              data-cursor="Read"
              className="group block"
            >
              <div className="aspect-[4/3] overflow-hidden border border-border metal-sheen">
                <img
                  src={p.hero}
                  alt={p.heroAlt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                />
              </div>
              <p className="mt-5 text-[0.56rem] uppercase tracking-[0.28em] text-champagne">
                {p.category} — {formatDate(p.date)}
              </p>
              <h3 className="mt-3 font-display text-2xl leading-tight text-foreground">{p.title}</h3>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* 20 — FINAL STATEMENT ──────────────────────────────────── */
export function FinalStatement() {
  return (
    <section className="relative flex h-[80vh] items-center overflow-hidden border-y border-border lg:h-screen">
      <Parallax className="absolute inset-0 h-full w-full" amount={80}>
        <img
          src={studioImages.macroFinish}
          alt="Macro of a brushed PVD surface"
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </Parallax>
      <div className="absolute inset-0 bg-background/70" />
      <div className="relative mx-auto w-full max-w-[1600px] px-4 sm:px-8 lg:px-10">
        <Reveal variant="up">
          <h2 className="font-display text-[2.3rem] leading-[0.94] text-foreground sm:text-6xl lg:text-[7.5rem]">
            GOOD DESIGN STARTS
            <br />
            <span className="text-steel-gradient">WITH THE RIGHT SURFACE.</span>
          </h2>
        </Reveal>
      </div>
    </section>
  );
}

/* 21 + 22 — CTA & CONTACT ───────────────────────────────── */
export function StudioCTA({ onEnquire }: { onEnquire: () => void }) {
  const wa = whatsappLink(studio.whatsapp, "an architectural metal project");

  return (
    <Section>
      <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
        <div>
          <Reveal variant="up">
            <h2 className="font-display text-[2.1rem] leading-[0.96] text-foreground sm:text-5xl lg:text-[4.6rem]">
              LET'S BUILD SOMETHING
              <br />
              WORTH SPECIFYING.
            </h2>
          </Reveal>
          <div className="mt-10 flex flex-wrap gap-4">
            <Magnetic>
              <button
                type="button"
                onClick={onEnquire}
                data-cursor="Start"
                className="inline-flex items-center gap-2 bg-champagne-gradient px-8 py-4 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-background"
              >
                <Sparkles className="h-4 w-4" />
                Start a project
              </button>
            </Magnetic>
            <Magnetic>
              <button
                type="button"
                onClick={onEnquire}
                data-cursor="Start"
                className="inline-flex items-center gap-2 border border-border px-8 py-4 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-foreground transition-colors hover:border-champagne hover:text-champagne"
              >
                Request samples
              </button>
            </Magnetic>
            <Magnetic>
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-champagne/50 px-8 py-4 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-champagne"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </Magnetic>
          </div>
        </div>

        <div className="grid gap-px border-t border-border">
          {[
            { label: "Studio & factory", value: studio.address },
            { label: "Email", value: studio.email, href: `mailto:${studio.email}` },
            { label: "Phone", value: studio.phone, href: `tel:${studio.phone.replace(/\s/g, "")}` },
            { label: "WhatsApp", value: studio.phone, href: wa },
          ].map((row, i) => (
            <Reveal key={row.label} variant="row" delay={i * 90} className="border-b border-border py-5">
              <p className="text-[0.56rem] uppercase tracking-[0.28em] text-muted-foreground">
                {row.label}
              </p>
              {row.href ? (
                <a
                  href={row.href}
                  className="mt-2 block text-sm text-foreground transition-colors hover:text-champagne"
                >
                  {row.value}
                </a>
              ) : (
                <p className="mt-2 text-sm text-foreground">{row.value}</p>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
