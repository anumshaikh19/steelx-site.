import { useState, type FormEvent } from "react";
import { toast } from "sonner";

import appCeiling from "@/assets/ds-app-ceiling.jpg";
import appExterior from "@/assets/ds-app-exterior.jpg";
import appInterior from "@/assets/ds-app-interior.jpg";
import heroMacro from "@/assets/ds-hero-macro.jpg";
import polishing from "@/assets/polishing.jpg";
import projFurniture from "@/assets/proj-furniture.jpg";
import {
  applicationOptions,
  colours,
  fabricationSteps,
  finishes,
  grades,
  projects,
} from "@/data/designer-sheets";
import { cn } from "@/lib/utils";

import { DsReveal } from "./primitives";

/* ------------------------------------------------------------ CONFIGURATOR */

export function DsConfigurator() {
  const [finish, setFinish] = useState(finishes[0]!);
  const [colour, setColour] = useState(colours[0]!);
  const [application, setApplication] = useState<string>(applicationOptions[0]);

  const step = (n: string, label: string) => (
    <p className="ds-label opacity-50">
      <span className="mr-4">{n}</span>
      {label}
    </p>
  );

  return (
    <section id="configurator" className="border-t border-black/10 px-5 py-24 sm:px-10 lg:px-16 lg:py-40">
      <DsReveal>
        <h2 className="ds-display max-w-[12ch] text-[12vw] sm:text-[7.5vw] lg:text-[5vw]">Build your surface.</h2>
      </DsReveal>

      <div className="mt-20 grid gap-16 lg:grid-cols-[1fr_1fr_0.9fr] lg:gap-14">
        <div>
          {step("01", "Choose your finish")}
          <ul className="mt-8">
            {finishes.map((entry) => (
              <li key={entry.id}>
                <button
                  type="button"
                  onClick={() => setFinish(entry)}
                  aria-pressed={finish.id === entry.id}
                  className={cn(
                    "flex w-full items-center gap-5 border-t border-black/12 py-4 text-left transition-opacity duration-700",
                    finish.id === entry.id ? "opacity-100" : "opacity-40 hover:opacity-75",
                  )}
                >
                  <span aria-hidden className="h-7 w-12 shrink-0" style={{ background: entry.swatch }} />
                  <span className="text-sm uppercase tracking-[0.14em]">{entry.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          {step("02", "Choose your colour")}
          <ul className="mt-8">
            {colours.map((entry) => (
              <li key={entry.id}>
                <button
                  type="button"
                  onClick={() => setColour(entry)}
                  aria-pressed={colour.id === entry.id}
                  className={cn(
                    "flex w-full items-center gap-5 border-t border-black/12 py-4 text-left transition-opacity duration-700",
                    colour.id === entry.id ? "opacity-100" : "opacity-40 hover:opacity-75",
                  )}
                >
                  <span aria-hidden className="h-7 w-12 shrink-0" style={{ background: entry.swatch }} />
                  <span className="text-sm uppercase tracking-[0.14em]">{entry.name}</span>
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-14">
            {step("03", "Choose your application")}
            <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
              {applicationOptions.map((entry) => (
                <li key={entry}>
                  <button
                    type="button"
                    onClick={() => setApplication(entry)}
                    aria-pressed={application === entry}
                    className={cn(
                      "ds-label border-b pb-1 transition-opacity duration-700",
                      application === entry ? "border-current opacity-100" : "border-transparent opacity-40 hover:opacity-75",
                    )}
                  >
                    {entry}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-[var(--ds-dark)] p-8 text-[#f4f2ed] lg:p-10">
          <p className="ds-label opacity-50">Your selection</p>
          <div className="relative mt-8 h-44 overflow-hidden">
            <img src={finish.image} alt={finish.alt} loading="lazy" className="h-full w-full object-cover" />
            <span aria-hidden className="absolute inset-0" style={{ background: colour.tint, mixBlendMode: "multiply" }} />
          </div>
          <dl className="mt-10 space-y-5">
            {[
              ["Finish", finish.name],
              ["Colour", colour.name],
              ["Material", "Stainless steel"],
              ["Application", application],
            ].map(([label, value]) => (
              <div key={label} className="flex items-baseline justify-between gap-6 border-t border-white/15 pt-4">
                <dt className="ds-label opacity-50">{label}</dt>
                <dd className="text-sm uppercase tracking-[0.14em]">{value}</dd>
              </div>
            ))}
          </dl>
          <a href="#sample" className="ds-arrow ds-label mt-12 inline-flex border-b border-current pb-2">
            Request this sample <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- COMPARISON */

export function DsComparison() {
  const [selected, setSelected] = useState<string[]>(["mirror", "hairline"]);

  const toggle = (id: string) => {
    setSelected((current) => {
      if (current.includes(id)) return current.length > 1 ? current.filter((entry) => entry !== id) : current;
      return current.length >= 3 ? [...current.slice(1), id] : [...current, id];
    });
  };

  const chosen = finishes.filter((entry) => selected.includes(entry.id));

  return (
    <section id="compare" className="border-t border-black/10 px-5 py-24 sm:px-10 lg:px-16 lg:py-40">
      <DsReveal>
        <h2 className="ds-display max-w-[12ch] text-[12vw] sm:text-[7.5vw] lg:text-[5vw]">Find your finish.</h2>
      </DsReveal>
      <p className="mt-8 max-w-md text-sm leading-relaxed opacity-60">
        Select up to three surfaces and read them side by side, the way samples sit on a design table.
      </p>

      <ul className="mt-14 flex flex-wrap gap-x-8 gap-y-4">
        {finishes.map((entry) => (
          <li key={entry.id}>
            <button
              type="button"
              onClick={() => toggle(entry.id)}
              aria-pressed={selected.includes(entry.id)}
              className={cn(
                "ds-label border-b pb-1 transition-opacity duration-700",
                selected.includes(entry.id) ? "border-current opacity-100" : "border-transparent opacity-40 hover:opacity-75",
              )}
            >
              {entry.index} {entry.name}
            </button>
          </li>
        ))}
      </ul>

      <div className="ds-noscroll mt-16 flex snap-x snap-mandatory gap-8 overflow-x-auto pb-4 lg:grid lg:snap-none lg:grid-cols-3 lg:overflow-visible">
        {chosen.map((entry) => (
          <article key={entry.id} className="w-[82vw] shrink-0 snap-start sm:w-[60vw] lg:w-auto">
            <div className="h-[38svh] overflow-hidden lg:h-[46svh]">
              <img src={entry.image} alt={entry.alt} loading="lazy" className="h-full w-full object-cover" />
            </div>
            <h3 className="mt-7 text-2xl font-light uppercase tracking-[-0.02em]">{entry.name}</h3>
            <dl className="mt-6">
              {[
                ["Reflection", entry.reflection],
                ["Texture", entry.texture],
                ["Pattern", entry.pattern],
                ["Character", entry.character],
                ["Best suited to", entry.bestFor],
              ].map(([label, value]) => (
                <div key={label} className="border-t border-black/12 py-3">
                  <dt className="ds-label opacity-45">{label}</dt>
                  <dd className="mt-2 text-sm leading-relaxed">{value}</dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ SAMPLE TABLE */

export function DsSampleTable() {
  const [hovered, setHovered] = useState<string | null>(null);
  const tiles = [...finishes, { id: "pvd", name: "PVD", swatch: colours[3]!.swatch }];

  return (
    <section className="bg-[var(--ds-dark)] px-5 py-24 text-[#f4f2ed] sm:px-10 lg:px-16 lg:py-40">
      <DsReveal>
        <h2 className="ds-display max-w-[12ch] text-[12vw] sm:text-[7.5vw] lg:text-[4.6vw]">
          See the difference in the light.
        </h2>
      </DsReveal>

      <ul
        className="mt-20 grid grid-cols-2 gap-5 sm:grid-cols-4 lg:gap-8 [perspective:1400px]"
        onMouseLeave={() => setHovered(null)}
      >
        {tiles.map((tile, index) => (
          <li key={tile.id}>
            <button
              type="button"
              onMouseEnter={() => setHovered(tile.id)}
              onFocus={() => setHovered(tile.id)}
              onBlur={() => setHovered(null)}
              className="block w-full text-left"
              aria-label={`${tile.name} sample`}
            >
              <span
                aria-hidden
                className="block h-28 w-full transition-transform duration-[1100ms] lg:h-40"
                style={{
                  background: tile.swatch,
                  transform:
                    hovered === tile.id
                      ? "translateY(-14px) rotateX(6deg) scale(1.03)"
                      : `rotateX(${18 - index}deg)`,
                  transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
                  boxShadow: hovered === tile.id ? "0 40px 60px -30px rgba(0,0,0,0.9)" : "0 20px 40px -30px rgba(0,0,0,0.8)",
                }}
              />
              <span
                className={cn(
                  "ds-label mt-5 block transition-opacity duration-700",
                  hovered === tile.id ? "opacity-100" : "opacity-40",
                )}
              >
                {tile.name}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ------------------------------------------------------------- APPLICATIONS */

const applicationScenes = [
  {
    title: "Interior decoration",
    image: appInterior,
    alt: "Stainless steel cladding in a luxury lobby interior",
    finishes: "Hairline · Mirror · PVD",
    copy: "Wall decoration, lift interiors and reception surfaces where the material is read at close range.",
  },
  {
    title: "Exterior decoration",
    image: appExterior,
    alt: "Stainless steel clad building facade in daylight",
    finishes: "Bead Blast · Stamped · Hairline",
    copy: "Facade and entrance surfaces where the finish has to hold in direct daylight.",
  },
  {
    title: "Ceilings",
    image: appCeiling,
    alt: "Reflective stainless steel ceiling panels",
    finishes: "Mirror · Water Ripple",
    copy: "Ceiling decoration where reflection carries light deeper into the plan.",
  },
  {
    title: "Furniture & feature surfaces",
    image: projFurniture,
    alt: "Custom stainless steel furniture piece",
    finishes: "Etched · Embossed · PVD",
    copy: "Fabricated details, furniture faces and feature surfaces cut and formed to drawing.",
  },
] as const;

export function DsApplications() {
  return (
    <section id="applications" className="px-5 py-24 sm:px-10 lg:px-16 lg:py-40">
      <DsReveal>
        <h2 className="ds-display max-w-[10ch] text-[12vw] sm:text-[7.5vw] lg:text-[5vw]">From sheet to space.</h2>
      </DsReveal>

      <div className="mt-20 space-y-24 lg:mt-32 lg:space-y-40">
        {applicationScenes.map((scene, index) => (
          <DsReveal key={scene.title}>
            <article
              className={cn(
                "grid gap-8 lg:grid-cols-[1.5fr_0.8fr] lg:gap-16",
                index % 2 === 1 && "lg:grid-cols-[0.8fr_1.5fr]",
              )}
            >
              <div className={cn("h-[45svh] overflow-hidden lg:h-[78svh]", index % 2 === 1 && "lg:order-2")}>
                <img src={scene.image} alt={scene.alt} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-col justify-end">
                <h3 className="text-3xl font-light uppercase tracking-[-0.02em] lg:text-[2.6vw]">{scene.title}</h3>
                <p className="mt-6 max-w-sm text-sm leading-relaxed opacity-60">{scene.copy}</p>
                <p className="ds-label mt-8 border-t border-black/12 pt-4 opacity-70">{scene.finishes}</p>
              </div>
            </article>
          </DsReveal>
        ))}
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------- PROJECTS */

export function DsProjects() {
  return (
    <section className="border-t border-black/10 py-24 lg:py-40">
      <div className="px-5 sm:px-10 lg:px-16">
        <DsReveal>
          <h2 className="ds-display max-w-[12ch] text-[12vw] sm:text-[7.5vw] lg:text-[4.6vw]">
            Designer sheets in real spaces.
          </h2>
        </DsReveal>
      </div>
      <ul className="ds-noscroll mt-16 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-6 sm:px-10 lg:mt-24 lg:gap-10 lg:px-16">
        {projects.map((project) => (
          <li key={project.name} className="w-[80vw] shrink-0 snap-start sm:w-[46vw] lg:w-[32vw]">
            <div className="h-[48svh] overflow-hidden bg-[var(--ds-graphite)] lg:h-[60svh]">
              <img
                src={appInterior}
                alt={`${project.name} — stainless steel surfaces`}
                loading="lazy"
                className="h-full w-full object-cover opacity-90"
              />
            </div>
            <h3 className="mt-6 text-xl font-light uppercase tracking-[-0.01em]">{project.name}</h3>
            <p className="ds-label mt-3 opacity-50">{project.location}</p>
            <a href="#sample" className="ds-arrow ds-label mt-6 inline-flex border-b border-current pb-1">
              View project <span aria-hidden>→</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ------------------------------------------------------------ SPECIFICATION */

export function DsSpecification() {
  const blocks = [
    { label: "Grades", items: [...grades] },
    { label: "Customization", items: ["Custom colours", "Custom sizes"] },
    { label: "Services", items: ["Cut-to-size", "Fabrication"] },
    { label: "Certification", items: ["Test certificates available on request"] },
  ];
  return (
    <section id="specification" className="border-t border-black/10 px-5 py-24 sm:px-10 lg:px-16 lg:py-36">
      <DsReveal>
        <h2 className="ds-display max-w-[12ch] text-[10vw] sm:text-[6.5vw] lg:text-[4vw]">Specify the material.</h2>
      </DsReveal>
      <dl className="mt-16 grid gap-10 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
        {blocks.map((block) => (
          <div key={block.label} className="border-t border-black/15 pt-5">
            <dt className="ds-label opacity-45">{block.label}</dt>
            <dd className="mt-5 space-y-2">
              {block.items.map((item) => (
                <p key={item} className="text-sm uppercase tracking-[0.1em]">
                  {item}
                </p>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

/* -------------------------------------------------------------- FABRICATION */

export function DsFabrication() {
  return (
    <section className="bg-[var(--ds-graphite)] px-5 py-24 text-[#f4f2ed] sm:px-10 lg:px-16 lg:py-40">
      <DsReveal>
        <h2 className="ds-display max-w-[12ch] text-[11vw] sm:text-[7vw] lg:text-[4.4vw]">
          From flat sheet to finished detail.
        </h2>
      </DsReveal>
      <div className="mt-16 grid gap-14 lg:mt-24 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <ol>
          {fabricationSteps.map((step, index) => (
            <DsReveal as="li" key={step.index} delay={index * 60}>
              <div className="flex items-baseline gap-8 border-t border-white/15 py-6">
                <span className="ds-label opacity-45">{step.index}</span>
                <span className="text-xl font-light uppercase tracking-[-0.01em] lg:text-2xl">{step.name}</span>
              </div>
            </DsReveal>
          ))}
        </ol>
        <DsReveal delay={120}>
          <div className="h-[50svh] overflow-hidden lg:h-full lg:min-h-[70svh]">
            <img
              src={polishing}
              alt="Stainless steel sheet being finished in the STEELX workshop"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </DsReveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- CUSTOM DESIGN */

export function DsCustom() {
  return (
    <section className="bg-[var(--ds-dark)] px-5 py-28 text-[#f4f2ed] sm:px-10 lg:px-16 lg:py-44">
      <DsReveal>
        <h2 className="ds-display max-w-[11ch] text-[12vw] sm:text-[7.5vw] lg:text-[5vw]">
          Your design. Your surface.
        </h2>
      </DsReveal>
      <p className="mt-10 max-w-xl text-lg font-light leading-relaxed opacity-70">
        Custom designs and colours are part of the STEELX approach. Bring a pattern, reference,
        drawing or idea and explore what the material can become.
      </p>
      <a href="#sample" className="ds-arrow ds-label mt-14 inline-flex border-b border-current pb-2">
        Discuss a custom requirement <span aria-hidden>→</span>
      </a>
    </section>
  );
}

/* ----------------------------------------------------------- SAMPLE ENQUIRY */

const fields = [
  { name: "name", label: "Name", type: "text", required: true },
  { name: "company", label: "Company", type: "text", required: false },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "phone", label: "Phone", type: "tel", required: false },
  { name: "projectType", label: "Project type", type: "text", required: false },
  { name: "projectLocation", label: "Project location", type: "text", required: false },
  { name: "quantity", label: "Required quantity", type: "text", required: false },
] as const;

export function DsSampleRequest() {
  const [sent, setSent] = useState(false);

  const submit = (event: FormEvent<HTMLFormElement>, intent: string) => {
    event.preventDefault();
    setSent(true);
    toast.success(intent === "quote" ? "Quote request noted" : "Sample request noted", {
      description: "The studio will come back to you with the next step.",
    });
  };

  return (
    <section id="sample" className="border-t border-black/10 px-5 py-24 sm:px-10 lg:px-16 lg:py-40">
      <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <div>
          <DsReveal>
            <h2 className="ds-display max-w-[10ch] text-[12vw] sm:text-[7.5vw] lg:text-[4.6vw]">Touch the material.</h2>
          </DsReveal>
          <p className="mt-10 max-w-sm text-sm leading-relaxed opacity-60">
            Digital images can show a finish. A physical sample shows how it behaves with light.
          </p>
        </div>

        <form className="space-y-10" onSubmit={(event) => submit(event, "sample")}>
          <div className="grid gap-10 sm:grid-cols-2">
            {fields.map((field) => (
              <label key={field.name} className="block">
                <span className="ds-label opacity-45">{field.label}</span>
                <input
                  className="ds-field mt-3 text-base"
                  name={field.name}
                  type={field.type}
                  required={field.required}
                  autoComplete="off"
                />
              </label>
            ))}
            <label className="block">
              <span className="ds-label opacity-45">Select finish</span>
              <select className="ds-field mt-3 text-base" name="finish" defaultValue={finishes[0]!.name}>
                {finishes.map((entry) => (
                  <option key={entry.id}>{entry.name}</option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="ds-label opacity-45">Select colour</span>
              <select className="ds-field mt-3 text-base" name="colour" defaultValue={colours[0]!.name}>
                {colours.map((entry) => (
                  <option key={entry.id}>{entry.name}</option>
                ))}
              </select>
            </label>
          </div>

          <label className="block">
            <span className="ds-label opacity-45">Message</span>
            <textarea className="ds-field mt-3 text-base" name="message" rows={3} />
          </label>

          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-12">
            <button type="submit" className="ds-arrow ds-label border-b border-current pb-2">
              Request sample <span aria-hidden>→</span>
            </button>
            <button
              type="button"
              onClick={(event) => submit(event as unknown as FormEvent<HTMLFormElement>, "quote")}
              className="ds-arrow ds-label pb-2 opacity-60"
            >
              Request quote <span aria-hidden>→</span>
            </button>
          </div>
          {sent ? <p className="ds-label opacity-60">Thank you — your request has been noted.</p> : null}
        </form>
      </div>
    </section>
  );
}

/* --------------------------------------------------------- FINAL STATEMENT */

export function DsFinalStatement() {
  return (
    <section className="relative isolate overflow-hidden bg-[var(--ds-dark)] text-[#f4f2ed]">
      <img
        src={heroMacro}
        alt="Macro of a stainless steel surface"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-55"
      />
      <span aria-hidden className="absolute inset-0 bg-black/45" />
      <div className="relative flex min-h-[92svh] flex-col justify-end px-5 py-20 sm:px-10 lg:px-16 lg:py-28">
        <DsReveal>
          <p className="ds-display max-w-[9ch] text-[16vw] sm:text-[11vw] lg:text-[7.4vw]">
            The surface is the statement.
          </p>
        </DsReveal>
        <p className="mt-10 max-w-xl text-sm leading-relaxed opacity-70">
          Explore stainless steel designer sheets created for architecture, interiors and spaces that
          demand precision in every detail.
        </p>
        <a href="#collection" className="ds-arrow ds-label mt-12 inline-flex w-fit border-b border-current pb-2">
          Explore the collection <span aria-hidden>→</span>
        </a>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ FOOTER */

export function DsFooter() {
  return (
    <footer className="bg-[var(--ds-graphite)] px-5 pb-14 pt-20 text-[#f4f2ed] sm:px-10 lg:px-16">
      <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="text-2xl font-light tracking-[0.28em]">STEELX</p>
          <p className="ds-label mt-4 opacity-55">Stainless steel designer sheets</p>
        </div>
        <nav aria-label="Collection">
          <p className="ds-label opacity-45">Collection</p>
          <ul className="mt-6 space-y-3">
            {finishes.map((entry) => (
              <li key={entry.id}>
                <a href={`#${entry.id}`} className="ds-label opacity-70 transition-opacity duration-700 hover:opacity-100">
                  {entry.name}
                </a>
              </li>
            ))}
            <li>
              <a href="#pvd" className="ds-label opacity-70 transition-opacity duration-700 hover:opacity-100">
                PVD
              </a>
            </li>
          </ul>
        </nav>
        <div className="space-y-8">
          <div>
            <p className="ds-label opacity-45">Services</p>
            <p className="mt-5 text-sm leading-relaxed opacity-70">
              Cut-to-size, bending, v-grooving, laser cutting, welding, polishing, laser marking.
            </p>
          </div>
          <div>
            <p className="ds-label opacity-45">Contact</p>
            <a href="mailto:studio@steelxdecor.com" className="mt-5 block text-sm opacity-70 hover:opacity-100">
              studio@steelxdecor.com
            </a>
          </div>
          <a href="#sample" className="ds-arrow ds-label inline-flex border-b border-current pb-2">
            Request sample <span aria-hidden>→</span>
          </a>
        </div>
      </div>
      <p className="ds-label mt-16 border-t border-white/12 pt-8 opacity-40">
        &copy; {new Date().getFullYear()} STEELX
      </p>
    </footer>
  );
}

/* -------------------------------------------------------- MOBILE STICKY CTA */

export function DsMobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-white/15 bg-[var(--ds-dark)] text-[#f4f2ed] lg:hidden">
      <a href="#sample" className="ds-label border-r border-white/15 py-4 text-center">
        Request sample
      </a>
      <a href="#sample" className="ds-label py-4 text-center opacity-70">
        Get quote
      </a>
    </div>
  );
}
