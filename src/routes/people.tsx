import { createFileRoute } from "@tanstack/react-router";

import { PageShell, Section } from "@/components/page-shell";
import { Reveal, SectionHeading } from "@/components/reveal";
import { Counter, Marquee } from "@/components/motion";

import polishing from "@/assets/polishing.jpg";
import sheetPrep from "@/assets/sheet-prep.jpg";
import inspection from "@/assets/inspection.jpg";
import pvdChamber from "@/assets/pvd-chamber.jpg";
import installation from "@/assets/installation.jpg";
import metalHero from "@/assets/metal-hero.jpg";

const title = "People — The team behind STEELX metal surfaces";
const description =
  "Fabricators, coating technicians, finishers, engineers and installers — the people who take stainless steel from sheet to installed architectural surface.";

export const Route = createFileRoute("/people")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PeoplePage,
});

const team = [
  { name: "Aarav Mehta", role: "Founder & Managing Director", image: metalHero, bio: "Started the workshop with one polishing line. Still signs off every control sample." },
  { name: "Ishita Rao", role: "Design & Specification Lead", image: sheetPrep, bio: "Works with architects at drawing stage so modules, returns and grain resolve before tender." },
  { name: "Devansh Patel", role: "Head of PVD Coating", image: pvdChamber, bio: "Runs the chamber programme and the colour library. Owns batch consistency." },
  { name: "Meera Nair", role: "Quality & Metallurgy", image: inspection, bio: "Adhesion, thickness and grade selection. Nothing leaves the floor without her release note." },
  { name: "Rohan Shah", role: "Fabrication Manager", image: polishing, bio: "Forming, welding and finishing — the stages that decide whether a joint ever shows." },
  { name: "Kavya Iyer", role: "Installation Lead", image: installation, bio: "Sequenced crating, site surveys and the crews who fit the work." },
];

const values = [
  { t: "Craft", d: "Hands on metal. Every finisher on the floor can name the surface they are making." },
  { t: "Precision", d: "Shop tolerance held at ±0.5 mm and stated on every drawing we issue." },
  { t: "Innovation", d: "New tones developed against submitted samples, then documented and repeatable." },
  { t: "Longevity", d: "Coatings and grades chosen for the environment, not the photograph." },
];

const stats = [
  { value: 62, suffix: "", label: "People on the floor" },
  { value: 15, suffix: "+", label: "Years in metal" },
  { value: 11, suffix: "", label: "Markets served" },
];

function PeoplePage() {
  return (
    <PageShell overlayHeader>
      <section className="relative flex min-h-[78vh] items-end overflow-hidden border-b border-border">
        <img src={polishing} alt="A finisher working a stainless steel surface" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
        <div className="relative mx-auto w-full max-w-[1600px] px-4 pb-14 sm:px-8 lg:px-10 lg:pb-20">
          <Reveal variant="text" as="p" className="text-[0.62rem] uppercase tracking-[0.4em] text-champagne">
            People
          </Reveal>
          <Reveal variant="up" delay={80}>
            <h1 className="mt-6 font-display text-[3rem] leading-[0.9] text-foreground sm:text-8xl lg:text-[9rem]">
              THE HANDS
              <br />
              ON THE METAL.
            </h1>
          </Reveal>
        </div>
      </section>

      <Marquee items={["FABRICATION", "FINISHING", "COATING", "QUALITY", "ENGINEERING", "INSTALLATION"]} />

      <Section>
        <div className="grid gap-px border-t border-border sm:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.label} variant="row" delay={i * 90} className="border-b border-border py-8 pr-6">
              <p className="font-display text-5xl text-champagne lg:text-6xl">
                <Counter to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-3 text-[0.6rem] uppercase tracking-[0.28em] text-muted-foreground">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border">
        <SectionHeading eyebrow="Leadership" title="Who runs the floor" />
        <div className="mt-12 grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
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
                <p className="mt-1 text-[0.6rem] uppercase tracking-[0.26em] text-champagne">{m.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.bio}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border">
        <SectionHeading eyebrow="What we hold to" title="Four values" />
        <div className="mt-12 grid gap-px border-t border-border sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.t} variant="up" delay={i * 100} className="border-b border-border py-8 pr-8">
              <p className="text-[0.58rem] tabular-nums tracking-[0.3em] text-champagne">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 font-display text-2xl text-foreground">{v.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.d}</p>
            </Reveal>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
