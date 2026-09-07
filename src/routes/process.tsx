import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { PageShell, Section } from "@/components/page-shell";
import { Reveal, SectionHeading } from "@/components/reveal";
import { BeforeAfter, HorizontalRail, Marquee, StickyStory } from "@/components/motion";
import { finishes } from "@/data/finishes";
import { cn } from "@/lib/utils";

import metalHero from "@/assets/metal-hero.jpg";
import pvdChamber from "@/assets/pvd-chamber.jpg";
import polishing from "@/assets/polishing.jpg";
import sheetPrep from "@/assets/sheet-prep.jpg";
import inspection from "@/assets/inspection.jpg";
import installation from "@/assets/installation.jpg";
import lobby from "@/assets/install-lobby.jpg";
import rawSteel from "@/assets/raw-steel.jpg";
import pvdSteel from "@/assets/pvd-steel.jpg";

const title = "Process — From idea to surface | STEELX PVD";
const description =
  "Brief, design, material, prototype, PVD coating, quality and installation — the seven stages that take a drawing to an installed architectural metal surface.";

export const Route = createFileRoute("/process")({
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
  component: ProcessPage,
});

const stages = [
  {
    id: "brief",
    index: "01",
    title: "Brief",
    text: "We take the architecture, the interior intent, the finish requirement, the scale and the performance expectation before anything is drawn.",
    image: sheetPrep,
    alt: "Sheet stock in the workshop",
    outputs: ["Scope note", "Budget band", "Programme outline"],
  },
  {
    id: "design",
    index: "02",
    title: "Design",
    text: "Modules, joints, returns and grain direction are resolved against the real panel and chamber limits, so nothing is redrawn after tender.",
    image: metalHero,
    alt: "Metal surface detail",
    outputs: ["Shop drawings", "Module strategy", "Joint detail"],
  },
  {
    id: "material",
    index: "03",
    title: "Material",
    text: "Grade, thickness, surface and backing are selected for the environment — 304 inland, 316 coastal, honeycomb-backed at large format.",
    image: rawSteel,
    alt: "Raw stainless steel surface",
    outputs: ["Grade selection", "Surface spec", "Backing system"],
  },
  {
    id: "prototype",
    index: "04",
    title: "Prototype",
    text: "A full-size coated sample is produced and viewed under the project lighting. Nothing goes to production before it is signed.",
    image: polishing,
    alt: "Prototype panel being finished",
    outputs: ["Coated sample", "Signed control sample"],
  },
  {
    id: "pvd",
    index: "05",
    title: "PVD",
    text: "Panels are cleaned and coated in vacuum, batched by elevation so any drift stays outside the visible field.",
    image: pvdChamber,
    alt: "PVD vacuum chamber",
    outputs: ["Batch record", "Colour verification"],
  },
  {
    id: "quality",
    index: "06",
    title: "Quality",
    text: "Adhesion, thickness and colour are checked against the control sample; rejected panels return to preparation, not to coating.",
    image: inspection,
    alt: "Quality inspection station",
    outputs: ["Adhesion test", "Thickness log", "Release note"],
  },
  {
    id: "installation",
    index: "07",
    title: "Installation",
    text: "Crated in installation sequence with film intact, fitted by our own crews, film removed after the last wet trade.",
    image: installation,
    alt: "Installation of coated panels",
    outputs: ["Sequenced crating", "Site survey", "Handover pack"],
  },
];

const machinery = [
  { t: "Preparation", d: "Grinding, brushing and blasting to the specified texture.", img: sheetPrep },
  { t: "Polishing", d: "Welded assemblies brought to one continuous surface.", img: polishing },
  { t: "Cleaning", d: "Ultrasonic and solvent cleaning before the chamber.", img: inspection },
  { t: "Vacuum", d: "Chamber evacuated to working vacuum with panels racked.", img: pvdChamber },
  { t: "Deposition", d: "Ionised metal condenses onto the panel with reactive gas.", img: pvdChamber },
  { t: "Inspection", d: "Colour, thickness and adhesion verified before release.", img: inspection },
  { t: "Installation", d: "Sequenced fitting by our own installation teams.", img: installation },
];

function ProcessPage() {
  const [finishId, setFinishId] = useState(finishes[0]!.id);
  const active = finishes.find((f) => f.id === finishId) ?? finishes[0]!;

  return (
    <PageShell overlayHeader>
      {/* Hero */}
      <section className="relative flex min-h-[88vh] items-end overflow-hidden border-b border-border">
        <img
          src={pvdChamber}
          alt="PVD vacuum chamber during a coating run"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
        <div className="relative mx-auto w-full max-w-[1600px] px-4 pb-16 sm:px-8 lg:px-10 lg:pb-24">
          <Reveal variant="text" as="p" className="text-[0.62rem] uppercase tracking-[0.4em] text-champagne">
            Process
          </Reveal>
          <Reveal variant="up" delay={80}>
            <h1 className="mt-6 font-display text-[3rem] leading-[0.9] text-foreground sm:text-8xl lg:text-[9rem]">
              FROM IDEA
              <br />
              TO SURFACE.
            </h1>
          </Reveal>
        </div>
      </section>

      <Marquee items={["BRIEF", "DESIGN", "MATERIAL", "PROTOTYPE", "PVD", "QUALITY", "INSTALLATION"]} />

      {/* Sticky interactive timeline */}
      <Section>
        <SectionHeading eyebrow="Interactive process" title="Seven stages" />
        <div className="mt-12">
          <StickyStory
            steps={stages.map((s) => ({
              id: s.id,
              index: s.index,
              title: s.title,
              text: s.text,
              image: s.image,
              alt: s.alt,
            }))}
          />
        </div>
      </Section>

      {/* Stage detail */}
      <Section className="border-t border-border">
        <SectionHeading eyebrow="Stage detail" title="What each stage produces" />
        <div className="mt-12 grid gap-px border-t border-border md:grid-cols-2">
          {stages.map((s, i) => (
            <Reveal key={s.id} variant="up" delay={(i % 2) * 100} className="group border-b border-border">
              <div className="grid gap-6 py-8 sm:grid-cols-[1fr_1.2fr] sm:pr-8">
                <div className="aspect-[4/3] overflow-hidden border border-border metal-sheen">
                  <img
                    src={s.image}
                    alt={s.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  />
                </div>
                <div>
                  <p className="font-display text-3xl text-champagne">{s.index}</p>
                  <h3 className="mt-2 font-display text-2xl text-foreground">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {s.outputs.map((o) => (
                      <li
                        key={o}
                        className="border border-border px-3 py-1.5 text-[0.58rem] uppercase tracking-[0.2em] text-muted-foreground"
                      >
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Material selector */}
      <Section className="border-t border-border">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div>
            <SectionHeading eyebrow="Material test" title="Choose a finish" />
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              Select a tone to preview it. Swatches are rendered material references — signed
              physical samples are always produced before a project colour is locked.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {finishes.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setFinishId(f.id)}
                  aria-pressed={f.id === finishId}
                  className={cn(
                    "border px-4 py-2.5 text-[0.62rem] uppercase tracking-[0.2em] transition-colors",
                    f.id === finishId
                      ? "border-champagne text-champagne"
                      : "border-border text-muted-foreground hover:border-champagne hover:text-champagne",
                  )}
                >
                  {f.name}
                </button>
              ))}
            </div>
            <div className="mt-8 border-t border-border pt-6">
              <p className="font-display text-3xl text-foreground">{active.name}</p>
              <p className="mt-2 text-[0.6rem] uppercase tracking-[0.28em] text-champagne">
                {active.family}
              </p>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                {active.note}
              </p>
            </div>
          </div>
          <div
            key={active.id}
            className="aspect-[4/3] border border-border metal-grain motion-safe:animate-fade-in"
            style={{ backgroundImage: active.swatch }}
            aria-label={`${active.name} finish preview`}
            role="img"
          />
        </div>
      </Section>

      {/* Before / after */}
      <Section className="border-t border-border">
        <SectionHeading eyebrow="Before / after" title="What PVD actually does" />
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Drag the divider: the same brushed stainless surface, before and after a champagne PVD
          layer measured in microns.
        </p>
        <div className="mt-10">
          <BeforeAfter
            before={{ src: rawSteel, alt: "Raw brushed stainless steel" }}
            after={{ src: pvdSteel, alt: "Champagne PVD coated stainless steel" }}
            beforeLabel="Raw stainless"
            afterLabel="PVD finished"
          />
        </div>
      </Section>

      {/* Machinery reels */}
      <Section className="border-t border-border">
        <SectionHeading eyebrow="Machinery" title="The line, stage by stage" />
        <HorizontalRail className="mt-12" itemClassName="w-[70vw] sm:w-[40vw] lg:w-[26vw]">
          {machinery.map((m) => (
            <article key={m.t} className="group" data-cursor="Explore">
              <div className="aspect-[4/5] overflow-hidden border border-border metal-sheen">
                <img
                  src={m.img}
                  alt={m.t}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1300ms] group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 font-display text-xl text-foreground">{m.t}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{m.d}</p>
            </article>
          ))}
        </HorizontalRail>
      </Section>

      <div className="relative aspect-[21/9] w-full border-y border-border">
        <img src={lobby} alt="Installed coated metal surfaces in a completed lobby" loading="lazy" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      </div>
    </PageShell>
  );
}
