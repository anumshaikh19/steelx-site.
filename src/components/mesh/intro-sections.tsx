import { ArrowUpRight, MessageCircle, Phone, Share2 } from "lucide-react";

import { Section } from "@/components/page-shell";
import { Reveal, SectionHeading } from "@/components/reveal";
import { ClipReveal, Counter, Magnetic, Parallax } from "@/components/motion";
import { heroBadges, heroStats, img, valuePoints } from "@/data/mesh";
import { studio } from "@/config/nav";

/* ── 01 Product hero ─────────────────────────────────────────── */
export function SSMeshHero({
  onEnquire,
  onShare,
  whatsapp,
}: {
  onEnquire: () => void;
  onShare: () => void;
  whatsapp: string;
}) {
  return (
    <section className="relative flex min-h-[94vh] items-end overflow-hidden border-b border-border">
      <Parallax className="absolute inset-0" amount={90}>
        <img
          src={img.meshHero}
          alt="Woven stainless steel decorative mesh in champagne PVD"
          className="h-full w-full object-cover"
        />
      </Parallax>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/25" />
      <div className="absolute inset-0 tech-grid opacity-40" />

      <div className="relative mx-auto w-full max-w-[1600px] px-4 pb-14 sm:px-8 lg:px-10 lg:pb-20">
        <Reveal variant="text" as="div" className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {heroBadges.map((b) => (
            <span key={b} className="text-[0.58rem] uppercase tracking-[0.34em] text-muted-foreground">
              {b}
            </span>
          ))}
        </Reveal>
        <Reveal variant="text" as="p" delay={60} className="mt-8 text-[0.62rem] uppercase tracking-[0.4em] text-champagne">
          Material — Decorative metal
        </Reveal>
        <Reveal variant="up" delay={120}>
          <h1 className="mt-5 max-w-5xl font-display text-[2.6rem] leading-[0.92] text-foreground sm:text-7xl lg:text-[7rem]">
            SS DECORATIVE MESH
            <span className="block text-steel-gradient">WITH PVD COATING</span>
          </h1>
        </Reveal>
        <Reveal variant="up" delay={200}>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-lg">
            Woven stainless steel, coated in vacuum to a colour you sign off. Architectural mesh in
            SS304 and SS316, engineered, woven and PVD-finished in one ISO 9001:2015 facility.
          </p>
        </Reveal>

        <Reveal variant="up" delay={280}>
          <div className="mt-10 flex flex-wrap gap-3">
            <Magnetic>
              <button
                type="button"
                onClick={onEnquire}
                data-cursor="Start"
                className="inline-flex items-center gap-2 bg-champagne-gradient px-8 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-metal-black transition-opacity hover:opacity-90"
              >
                Request samples <ArrowUpRight className="h-4 w-4" />
              </button>
            </Magnetic>
            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-border px-8 py-4 text-[0.72rem] uppercase tracking-[0.2em] text-foreground transition-colors hover:border-champagne hover:text-champagne"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <button
              type="button"
              onClick={onEnquire}
              className="inline-flex items-center gap-2 border border-border px-8 py-4 text-[0.72rem] uppercase tracking-[0.2em] text-foreground transition-colors hover:border-champagne hover:text-champagne"
            >
              Enquire
            </button>
            <button
              type="button"
              onClick={onShare}
              className="inline-flex items-center gap-2 border border-border px-8 py-4 text-[0.72rem] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:border-champagne hover:text-champagne"
            >
              <Share2 className="h-4 w-4" /> Share
            </button>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-px border-t border-border sm:grid-cols-3">
          {heroStats.map((s, i) => (
            <Reveal key={s.label} variant="row" delay={i * 110} className="pt-6">
              <p className="font-display text-4xl text-champagne lg:text-6xl">
                <Counter to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-[0.6rem] uppercase tracking-[0.3em] text-muted-foreground">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── 02 Engineering / value introduction ─────────────────────── */
export function EngineeringValue({ onEnquire }: { onEnquire: () => void }) {
  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <ClipReveal>
          <Parallax className="aspect-[4/3] w-full border border-border" amount={50}>
            <img src={img.pvdSteel} alt="PVD coated stainless steel surface" loading="lazy" className="h-full w-full object-cover" />
          </Parallax>
        </ClipReveal>
        <div className="flex flex-col justify-center">
          <SectionHeading eyebrow="Luxury interiors" title="Engineered excellence" />
          <Reveal variant="up" delay={120}>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground lg:text-base">
              SS 304 grade • PVD coated. Our architectural mesh systems define the boundaries between
              light and shadow, strength and grace. Sourced from high-grade SS304, each weave is a
              testament to Indian engineering precision.
            </p>
          </Reveal>
          <Reveal variant="up" delay={180}>
            <button
              type="button"
              onClick={onEnquire}
              data-cursor="Start"
              className="mt-8 inline-flex w-fit items-center gap-2 border border-champagne px-7 py-3.5 text-[0.68rem] uppercase tracking-[0.24em] text-champagne transition-colors hover:bg-champagne hover:text-metal-black"
            >
              Enquire now <ArrowUpRight className="h-4 w-4" />
            </button>
          </Reveal>
          <Reveal variant="up" delay={240}>
            <div className="mt-10 space-y-1 border-t border-border pt-6 text-[0.6rem] uppercase tracking-[0.28em] text-muted-foreground">
              <p>10-year PVD warranty • ASTM B117 certified</p>
              <p>Made in India • ISO 9001:2015 • Since 2010</p>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

/* ── 03 Architectural metal mesh introduction ────────────────── */
export function MeshIntro({ onEnquire }: { onEnquire: () => void }) {
  return (
    <Section className="border-t border-border">
      <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
        <div>
          <Reveal variant="up">
            <h2 className="max-w-3xl font-display text-4xl leading-[1.02] text-foreground sm:text-5xl lg:text-[4.2rem]">
              Architectural metal mesh,
              <span className="block text-steel-gradient">engineered in India</span>
            </h2>
          </Reveal>
          <Reveal variant="up" delay={120}>
            <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground lg:text-base">
              SteelXDecor is India's premier manufacturer and supplier of architectural stainless
              steel mesh. We engineer, manufacture and finish every product in-house across 18
              specialised product categories — serving architects, interior designers, facade
              consultants, builders and contractors nationwide.
            </p>
          </Reveal>
          <Reveal variant="up" delay={180}>
            <button
              type="button"
              onClick={onEnquire}
              data-cursor="Start"
              className="mt-9 inline-flex items-center gap-2 bg-champagne-gradient px-8 py-4 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-metal-black"
            >
              Get a project quote <ArrowUpRight className="h-4 w-4" />
            </button>
          </Reveal>
        </div>
        <ClipReveal delay={120}>
          <div className="aspect-[3/4] w-full overflow-hidden border border-border metal-sheen">
            <img src={img.meshApplication} alt="Architectural mesh screen in an interior" loading="lazy" className="h-full w-full object-cover" />
          </div>
        </ClipReveal>
      </div>
    </Section>
  );
}

/* ── 04 Value proposition ────────────────────────────────────── */
export function ValueProposition() {
  return (
    <Section className="border-t border-border">
      <SectionHeading eyebrow="Value proposition" title="Engineering without compromise" />
      <Reveal variant="up" delay={100}>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          At SteelXDecor we satisfy the dual requirements of architectural beauty and industrial
          performance. Our systems are specified globally because we control every step of the
          manufacturing chain.
        </p>
      </Reveal>
      <div className="mt-14 grid gap-px border-t border-border lg:grid-cols-3">
        {valuePoints.map((p, i) => (
          <Reveal key={p.title} variant="up" delay={i * 120} className="border-b border-border py-8 lg:pr-10">
            <p className="text-[0.58rem] tabular-nums tracking-[0.3em] text-champagne">
              {String(i + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-4 font-display text-2xl text-foreground">{p.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ── 05 Project quote / technical CTA ────────────────────────── */
export function ProjectQuoteCTA({ onEnquire }: { onEnquire: () => void }) {
  return (
    <section className="relative overflow-hidden border-y border-border">
      <img src={img.pvdChamber} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-25" />
      <div className="absolute inset-0 bg-background/70" />
      <div className="relative mx-auto max-w-[1600px] px-4 py-24 text-center sm:px-8 lg:px-10 lg:py-32">
        <Reveal variant="up">
          <h2 className="mx-auto max-w-4xl font-display text-3xl leading-tight text-foreground sm:text-5xl">
            Ready to specify SteelXDecor for your next project?
          </h2>
        </Reveal>
        <Reveal variant="up" delay={100}>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Our technical sales team provides free project consultation, material samples, shop
            drawings and detailed quotations within 48 hours.
          </p>
        </Reveal>
        <Reveal variant="up" delay={170}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={onEnquire}
              data-cursor="Start"
              className="inline-flex items-center gap-2 bg-champagne-gradient px-8 py-4 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-metal-black"
            >
              Request a project quote <ArrowUpRight className="h-4 w-4" />
            </button>
            <a
              href={`tel:${studio.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 border border-border px-8 py-4 text-[0.7rem] uppercase tracking-[0.2em] text-foreground transition-colors hover:border-champagne hover:text-champagne"
            >
              <Phone className="h-4 w-4" /> Call our technical team
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
