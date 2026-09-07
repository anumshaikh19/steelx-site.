import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";

import { PageShell } from "@/components/page-shell";
import { Reveal } from "@/components/reveal";
import { MediaFrame } from "@/components/media-frame";
import { services, servicesHero, filmSection, proof } from "@/data/services";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — PVD Coating, Laser Cutting & Finishing | STEELX" },
      {
        name: "description",
        content:
          "STEELX in-house stainless steel services: PVD coating, laser cutting, V-grooving and forming, etching, mirror and hairline finishing, fabrication and installation.",
      },
      { property: "og:title", content: "STEELX Services — Sheet to Surface" },
      {
        property: "og:description",
        content:
          "PVD coating, laser cutting, grooving, etching, polishing and installation — six stainless steel surface stages under one roof.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const [activeId, setActiveId] = useState(services[0]!.id);
  const active = services.find((s) => s.id === activeId) ?? services[0]!;

  return (
    <PageShell overlayHeader>
      {/* Hero — the material is the page */}
      <section className="relative h-[86vh] min-h-[520px] w-full overflow-hidden">
        <MediaFrame
          media={{
            poster: servicesHero.poster,
            videoSrc: servicesHero.videoSrc,
            alt: servicesHero.alt,
          }}
          eager
          className="absolute inset-0 h-full w-full border-0 grade-steel"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/25 to-background/60" />
        <div className="absolute inset-x-0 bottom-0 mx-auto w-full max-w-[1600px] px-4 pb-16 sm:px-8 lg:px-10 lg:pb-24">
          <Reveal variant="text" as="p" className="text-[0.6rem] uppercase tracking-[0.42em] text-champagne">
            {servicesHero.eyebrow}
          </Reveal>
          <Reveal variant="up" delay={120}>
            <h1 className="mt-8 max-w-[16ch] font-display text-[3rem] leading-[0.92] tracking-[-0.01em] text-foreground sm:text-7xl lg:text-[8.5rem]">
              {servicesHero.title}
            </h1>
          </Reveal>
        </div>
      </section>

      <Reveal variant="up" delay={80}>
        <p className="mx-auto max-w-[1600px] px-4 pb-24 pt-20 text-lg font-light leading-[1.75] text-muted-foreground sm:px-8 sm:text-xl lg:max-w-[68ch] lg:px-10 lg:pb-40 lg:pt-32 lg:text-[1.45rem] lg:leading-[1.7]">
          {servicesHero.lead}
        </p>
      </Reveal>

      {/* Index — typographic, no cards */}
      <section className="mx-auto max-w-[1600px] px-4 pb-24 sm:px-8 lg:px-10 lg:pb-40">
        <Reveal variant="text" as="p" className="text-[0.6rem] uppercase tracking-[0.42em] text-champagne">
          Index
        </Reveal>
        <ul className="mt-14">
          {services.map((s, i) => (
            <Reveal key={s.id} variant="row" delay={i * 70}>
              <li>
                <a
                  href={`#${s.id}`}
                  onMouseEnter={() => setActiveId(s.id)}
                  onFocus={() => setActiveId(s.id)}
                  data-cursor="Read"
                  className="group grid gap-2 border-t border-border/50 py-8 transition-colors duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-champagne/60 lg:grid-cols-[6rem_minmax(0,22rem)_1fr] lg:items-baseline lg:gap-10 lg:py-10"
                >
                  <span className="text-[0.6rem] uppercase tracking-[0.34em] text-muted-foreground">{s.index}</span>
                  <span className="font-display text-2xl leading-tight text-foreground transition-colors duration-[900ms] group-hover:text-champagne sm:text-3xl lg:text-[2.4rem]">
                    {s.name}
                  </span>
                  <span className="max-w-[52ch] text-sm font-light leading-relaxed text-muted-foreground lg:text-base">
                    {s.summary}
                  </span>
                </a>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* Sample-handling selector */}
      <section className="mx-auto max-w-[1600px] px-4 pb-24 sm:px-8 lg:px-10 lg:pb-40">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,30rem)] lg:gap-24">
          <div className="relative order-2 aspect-[4/5] w-full overflow-hidden sheen-sweep lg:order-1 lg:aspect-[4/3]">
            {services.map((s) => (
              <img
                key={s.id}
                src={s.image}
                alt={s.alt}
                loading="lazy"
                className={cn(
                  "absolute inset-0 h-full w-full object-cover transition-all duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
                  s.id === activeId ? "scale-100 opacity-100" : "scale-[1.04] opacity-0",
                )}
              />
            ))}
          </div>

          <div className="order-1 lg:order-2 lg:pt-6">
            <p className="text-[0.6rem] uppercase tracking-[0.42em] text-champagne">
              {active.index} — {active.name}
            </p>
            <p className="mt-8 text-lg font-light leading-[1.75] text-foreground/90 lg:text-xl">{active.detail}</p>
            <dl className="mt-12 space-y-6">
              {active.specs.map((sp) => (
                <div key={sp.label} className="flex items-baseline justify-between gap-8">
                  <dt className="text-[0.6rem] uppercase tracking-[0.3em] text-muted-foreground">{sp.label}</dt>
                  <dd className="font-display text-lg text-foreground">{sp.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-12 flex flex-wrap gap-3">
              {services.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setActiveId(s.id)}
                  aria-pressed={s.id === activeId}
                  data-cursor="Handle"
                  className={cn(
                    "text-[0.6rem] uppercase tracking-[0.3em] transition-colors duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
                    s.id === activeId ? "text-champagne" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {s.index}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detail plates */}
      {services.map((s, i) => (
        <section key={s.id} id={s.id} className="mx-auto max-w-[1600px] scroll-mt-24 px-4 pb-24 sm:px-8 lg:px-10 lg:pb-40">
          <div
            className={cn(
              "grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-24",
              i % 2 === 1 && "lg:[&>figure]:order-2",
            )}
          >
            <figure className="relative aspect-[5/4] w-full overflow-hidden">
              <img
                src={s.image}
                alt={s.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[2000ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.04]"
              />
            </figure>
            <div>
              <Reveal variant="text" as="p" className="text-[0.6rem] uppercase tracking-[0.42em] text-champagne">
                {s.index}
              </Reveal>
              <Reveal variant="up" delay={80}>
                <h2 className="mt-6 font-display text-3xl leading-[1.05] text-foreground sm:text-4xl lg:text-[3.4rem]">
                  {s.name}
                </h2>
              </Reveal>
              <Reveal variant="up" delay={140}>
                <p className="mt-8 max-w-[54ch] text-base font-light leading-[1.8] text-muted-foreground lg:text-lg">
                  {s.detail}
                </p>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      {/* Film */}
      <section className="mx-auto max-w-[1600px] px-4 pb-24 sm:px-8 lg:px-10 lg:pb-40">
        <MediaFrame
          media={{ poster: filmSection.poster, videoSrc: filmSection.videoSrc, alt: filmSection.alt }}
          className="aspect-[16/9] w-full border-0"
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,26rem)_1fr] lg:gap-24">
          <h2 className="font-display text-2xl leading-tight text-foreground lg:text-[2.2rem]">{filmSection.title}</h2>
          <p className="max-w-[56ch] text-base font-light leading-[1.8] text-muted-foreground lg:text-lg">
            {filmSection.body}
          </p>
        </div>
      </section>

      {/* Editorial proof */}
      <section className="mx-auto max-w-[1600px] px-4 pb-24 sm:px-8 lg:px-10 lg:pb-40">
        <div className="grid gap-6 lg:grid-cols-[1.35fr_1fr] lg:gap-10">
          {proof.images.map((im, i) => (
            <Reveal key={im.src} variant="up" delay={i * 120}>
              <img
                src={im.src}
                alt={im.alt}
                loading="lazy"
                className={cn(
                  "w-full object-cover",
                  i === 0 ? "aspect-[4/3]" : "aspect-[3/4] lg:aspect-[4/5]",
                )}
              />
            </Reveal>
          ))}
        </div>
        <dl className="mt-16 grid gap-10 sm:grid-cols-3">
          {proof.facts.map((f) => (
            <div key={f.label}>
              <dt className="text-[0.6rem] uppercase tracking-[0.32em] text-muted-foreground">{f.label}</dt>
              <dd className="mt-4 font-display text-3xl text-foreground lg:text-4xl">{f.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Close */}
      <section className="mx-auto max-w-[1600px] px-4 pb-32 sm:px-8 lg:px-10 lg:pb-48">
        <p className="max-w-[20ch] font-display text-3xl leading-[1.08] text-foreground sm:text-5xl lg:text-[4.5rem]">
          Send us a drawing, or a sheet.
        </p>
        <Link
          to="/contact"
          data-cursor="Enquire"
          className="mt-12 inline-block border-b border-champagne/50 pb-2 text-[0.66rem] uppercase tracking-[0.34em] text-champagne transition-colors duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-champagne"
        >
          Request a sample or quote
        </Link>
      </section>
    </PageShell>
  );
}
