import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ScrollProgress, ClipReveal, Parallax, Magnetic, Counter } from "@/components/motion";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

import sheets from "@/assets/proj-sheets.jpg";
import profiles from "@/assets/proj-profiles.jpg";
import furniture from "@/assets/proj-furniture.jpg";
import divider from "@/assets/proj-divider.jpg";
import metalHero from "@/assets/metal-hero.jpg";
import macroFinish from "@/assets/macro-finish.jpg";
import swatches from "@/assets/finish-swatches.jpg";
import pvdChamber from "@/assets/pvd-chamber.jpg";
import inspection from "@/assets/inspection.jpg";

const title = "The STEELX Collection — Designer Steel for Interiors | STEELX";
const description =
  "Designer stainless steel sheets, decorative profiles, custom steel furniture and room dividers — engineered, PVD-coated and finished by STEELX.";

export const Route = createFileRoute("/steel-collection")({
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
  component: CollectionPage,
});

const lineup = [
  {
    id: "sheets",
    name: "Designer Sheets",
    line: "Mirror. Etched. Hairline. Embossed.",
    body:
      "Full-size stainless sheets with the pattern worked into the metal itself — etched, stamped or brushed, then PVD coated so colour and texture arrive as one surface.",
    image: sheets,
    stats: [
      { label: "Standard size", value: "1220 × 2440 mm" },
      { label: "Thickness", value: "0.8 – 2.0 mm" },
      { label: "Textures", value: "8 families" },
    ],
  },
  {
    id: "profiles",
    name: "Decorative Profiles",
    line: "The line between two surfaces.",
    body:
      "L, T, U and H sections in matched PVD colours, cut to length. Run in the same coating batch as your sheets so the trim never fights the wall it edges.",
    image: profiles,
    stats: [
      { label: "Face widths", value: "8 – 15 mm" },
      { label: "Lengths", value: "Up to 3.0 m" },
      { label: "Colours", value: "Gold, black, bronze, rose" },
    ],
  },
  {
    id: "furniture",
    name: "Custom Furniture",
    line: "Welded, dressed, disappeared.",
    body:
      "Consoles, tables, bed backs and shelving built from stainless section. Every joint is fully welded and ground flush before coating, so the piece reads as one solid form.",
    image: furniture,
    stats: [
      { label: "Sections", value: "20 / 25 / 40 mm" },
      { label: "Tops", value: "Stone, glass, veneer" },
      { label: "Lead time", value: "4 – 6 weeks" },
    ],
  },
  {
    id: "dividers",
    name: "Room Dividers",
    line: "Separation without closure.",
    body:
      "Laser-cut jali screens, fluted partitions and floor-to-ceiling frames. Patterns scale to your opening, so a whole apartment shares one geometry at different widths.",
    image: divider,
    stats: [
      { label: "Max height", value: "3.6 m" },
      { label: "Cutting", value: "Fibre laser" },
      { label: "Fixing", value: "Base plate or channel" },
    ],
  },
] as const;

const tones = [
  { name: "Gold", value: "linear-gradient(135deg,#f0d9a0,#a8842f 55%,#5c4413)" },
  { name: "Champagne", value: "linear-gradient(135deg,#efe3ce,#c3a882 55%,#6f5f45)" },
  { name: "Rose", value: "linear-gradient(135deg,#f0cdbd,#bb8168 55%,#5f3b2d)" },
  { name: "Bronze", value: "linear-gradient(135deg,#dcb491,#8a5a33 55%,#3f2716)" },
  { name: "Gunmetal", value: "linear-gradient(135deg,#c3c8cd,#6d757c 55%,#2b3035)" },
  { name: "Black", value: "linear-gradient(135deg,#8f949a,#3c4046 55%,#111315)" },
] as const;

function CollectionPage() {
  const [tone, setTone] = useState(0);
  const active = tones[tone] ?? tones[0];

  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="relative flex min-h-[92svh] items-end overflow-hidden">
          <img
            src={metalHero}
            alt="PVD-coated stainless steel surface catching low light"
            width={1600}
            height={1100}
            className="absolute inset-0 h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/20" />
          <div className="relative mx-auto w-full max-w-[1600px] px-4 pb-16 sm:px-8 lg:px-10 lg:pb-24">
            <Reveal variant="text" as="p" className="text-[0.62rem] uppercase tracking-[0.4em] text-champagne">
              The STEELX Collection
            </Reveal>
            <Reveal variant="text" as="h1" className="mt-6 max-w-[16ch] font-display text-[clamp(2.8rem,9vw,7.5rem)] font-light leading-[0.92] tracking-[-0.03em]">
              Steel, made
              <span className="block text-gold-gradient">to be seen.</span>
            </Reveal>
            <Reveal variant="up" as="p" className="mt-8 max-w-[52ch] text-base leading-relaxed text-muted-foreground sm:text-lg">
              Four product lines. One material discipline. Designer sheets, decorative profiles,
              custom furniture and room dividers — engineered and PVD-coated in our own plant.
            </Reveal>
            <div className="mt-10 flex flex-wrap gap-3">
              <Magnetic>
                <a
                  href="#lineup"
                  className="inline-flex items-center border border-foreground/20 px-7 py-3 text-xs uppercase tracking-[0.28em] transition-colors duration-500 hover:border-champagne hover:text-champagne"
                >
                  Explore the collection
                </a>
              </Magnetic>
              <Link
                to="/contact"
                className="inline-flex items-center border border-transparent px-7 py-3 text-xs uppercase tracking-[0.28em] text-muted-foreground transition-colors duration-500 hover:text-foreground"
              >
                Request samples
              </Link>
            </div>
          </div>
        </section>

        {/* Statement */}
        <section className="mx-auto max-w-[1200px] px-4 py-24 sm:px-8 lg:py-40">
          <Reveal variant="text" as="p" className="font-display text-[clamp(1.6rem,3.6vw,3.1rem)] font-light leading-[1.25] tracking-[-0.02em]">
            We do not print colour onto steel. We grow it into the surface — a few microns of
            metal, bonded in vacuum, harder than the sheet beneath it.
          </Reveal>
          <div className="mt-16 grid gap-10 border-t border-foreground/10 pt-10 sm:grid-cols-3">
            {[
              { n: 4, suffix: "", label: "Product lines" },
              { n: 8, suffix: "", label: "Surface textures" },
              { n: 12, suffix: "+", label: "PVD colours" },
            ].map((s) => (
              <Reveal key={s.label} variant="up">
                <p className="font-display text-4xl font-light text-champagne sm:text-5xl">
                  <Counter to={s.n} suffix={s.suffix} />
                </p>
                <p className="mt-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Lineup chapters */}
        <section id="lineup" className="scroll-mt-24">
          {lineup.map((item, index) => (
            <article key={item.id} className="border-t border-foreground/10 py-20 lg:py-32">
              <div className="mx-auto grid max-w-[1600px] items-center gap-12 px-4 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-10">
                <div className={cn(index % 2 === 1 && "lg:order-2")}>
                  <ClipReveal>
                    <Parallax amount={18}>
                      <img
                        src={item.image}
                        alt={item.name}
                        loading="lazy"
                        width={1600}
                        height={1100}
                        className="h-full w-full object-cover"
                      />
                    </Parallax>
                  </ClipReveal>
                </div>
                <div>
                  <Reveal variant="text" as="p" className="text-[0.62rem] uppercase tracking-[0.4em] text-champagne">
                    {String(index + 1).padStart(2, "0")} — {item.name}
                  </Reveal>
                  <Reveal variant="text" as="h2" className="mt-6 font-display text-[clamp(2rem,5vw,4rem)] font-light leading-[1.02] tracking-[-0.025em]">
                    {item.line}
                  </Reveal>
                  <Reveal variant="up" as="p" className="mt-7 max-w-[46ch] leading-relaxed text-muted-foreground">
                    {item.body}
                  </Reveal>
                  <dl className="mt-10 grid gap-px border-t border-foreground/10 sm:grid-cols-3">
                    {item.stats.map((stat) => (
                      <div key={stat.label} className="py-5">
                        <dt className="text-[0.6rem] uppercase tracking-[0.28em] text-muted-foreground">{stat.label}</dt>
                        <dd className="mt-2 text-sm">{stat.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* Tone selector */}
        <section className="border-t border-foreground/10 py-24 lg:py-36">
          <div className="mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-10">
            <Reveal variant="text" as="h2" className="max-w-[18ch] font-display text-[clamp(2rem,5vw,4rem)] font-light leading-[1.02] tracking-[-0.025em]">
              One steel. Every colour you specify.
            </Reveal>
            <div className="mt-14 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div
                className="aspect-[16/10] w-full transition-[background] duration-[1200ms] ease-out"
                style={{ backgroundImage: active?.value }}
                role="img"
                aria-label={`${active?.name} PVD finish sample`}
              />
              <div>
                <ul className="grid grid-cols-2 gap-px sm:grid-cols-3">
                  {tones.map((t, i) => (
                    <li key={t.name}>
                      <button
                        type="button"
                        onClick={() => setTone(i)}
                        aria-pressed={i === tone}
                        className={cn(
                          "flex w-full items-center gap-3 border border-foreground/10 px-4 py-4 text-left text-xs uppercase tracking-[0.18em] transition-colors duration-500",
                          i === tone ? "border-champagne text-champagne" : "text-muted-foreground hover:text-foreground",
                        )}
                      >
                        <span className="h-5 w-5 shrink-0" style={{ backgroundImage: t.value }} aria-hidden="true" />
                        {t.name}
                      </button>
                    </li>
                  ))}
                </ul>
                <p className="mt-8 max-w-[44ch] text-sm leading-relaxed text-muted-foreground">
                  Colours are coated to a batch reference, so a repeat order two years later still
                  matches the wall it joins. Custom tones are developed against a physical sample.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Making */}
        <section className="border-t border-foreground/10 py-24 lg:py-36">
          <div className="mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-10">
            <Reveal variant="text" as="p" className="text-[0.62rem] uppercase tracking-[0.4em] text-champagne">
              How it is made
            </Reveal>
            <div className="mt-12 grid gap-10 md:grid-cols-3">
              {[
                { img: macroFinish, t: "Surface first", b: "The sheet is ground, brushed, etched or embossed before any colour exists. Texture decides how the finish will read." },
                { img: pvdChamber, t: "Coated in vacuum", b: "Metal is vaporised and bonded to the steel in a plasma chamber — a few microns, chemically locked, not a paint film." },
                { img: inspection, t: "Checked as a batch", b: "Colour, gloss and flatness are verified against the batch reference before anything leaves the plant." },
              ].map((step) => (
                <Reveal key={step.t} variant="up">
                  <img src={step.img} alt={step.t} loading="lazy" width={1600} height={1100} className="aspect-[4/3] w-full object-cover" />
                  <h3 className="mt-6 font-display text-2xl font-light">{step.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.b}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden border-t border-foreground/10">
          <img src={swatches} alt="" aria-hidden="true" loading="lazy" width={1600} height={1100} className="absolute inset-0 h-full w-full object-cover opacity-25" />
          <div className="relative mx-auto max-w-[1200px] px-4 py-28 text-center sm:px-8 lg:py-40">
            <Reveal variant="text" as="h2" className="font-display text-[clamp(2rem,5.5vw,4.4rem)] font-light leading-[1.02] tracking-[-0.025em]">
              Start with a sample in your hand.
            </Reveal>
            <Reveal variant="up" as="p" className="mx-auto mt-7 max-w-[46ch] text-muted-foreground">
              Send us the drawing, the area or just the idea. We will send finishes to hold, and a
              quote against your actual quantities.
            </Reveal>
            <div className="mt-11 flex flex-wrap justify-center gap-3">
              <Magnetic>
                <Link
                  to="/contact"
                  className="inline-flex items-center border border-foreground/20 px-8 py-3.5 text-xs uppercase tracking-[0.28em] transition-colors duration-500 hover:border-champagne hover:text-champagne"
                >
                  Request samples
                </Link>
              </Magnetic>
              <Link
                to="/projects"
                className="inline-flex items-center px-8 py-3.5 text-xs uppercase tracking-[0.28em] text-muted-foreground transition-colors duration-500 hover:text-foreground"
              >
                See the work
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
