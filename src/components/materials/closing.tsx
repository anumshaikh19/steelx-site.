import { useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";
import { label, wrap } from "@/components/materials/opening";
import {
  applications,
  combinations,
  controlBoard,
  finderCharacters,
  finderSpaces,
  images,
  projectApplications,
  recommendFinishes,
  specification,
  stories,
  type FinderCharacter,
  type FinderSpace,
} from "@/data/materials";

export function Combinations() {
  const [active, setActive] = useState(0);
  const combo = combinations[active]!;

  return (
    <section className="border-t border-border py-24 lg:py-36">
      <div className={wrap}>
        <Reveal variant="up">
          <h2
            className="font-display font-light leading-[0.95] tracking-[-0.015em] text-foreground"
            style={{ fontSize: "clamp(34px, 4.6vw, 78px)" }}
          >
            Designed in combinations.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="aspect-[16/11] w-full overflow-hidden bg-surface">
              <img
                key={combo.id}
                src={combo.image}
                alt={combo.alt}
                loading="lazy"
                className="material-in h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-5">
            <ul className="border-t border-border">
              {combinations.map((c, i) => (
                <li key={c.id}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    aria-pressed={i === active}
                    className={cn(
                      "w-full border-b border-border py-5 text-left text-[0.72rem] uppercase tracking-[0.24em] transition-colors",
                      i === active ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {c.colour} + {c.finish}
                  </button>
                </li>
              ))}
            </ul>
            <dl className="mt-8 space-y-4 text-sm">
              <div className="flex gap-6">
                <dt className={cn(label, "w-24 shrink-0")}>Colour</dt>
                <dd className="text-foreground">{combo.colour}</dd>
              </div>
              <div className="flex gap-6">
                <dt className={cn(label, "w-24 shrink-0")}>Finish</dt>
                <dd className="text-foreground">{combo.finish}</dd>
              </div>
              <div className="flex gap-6">
                <dt className={cn(label, "w-24 shrink-0")}>Character</dt>
                <dd className="text-muted-foreground">{combo.character}</dd>
              </div>
              <div className="flex gap-6">
                <dt className={cn(label, "w-24 shrink-0")}>Application</dt>
                <dd className="text-muted-foreground">{combo.application}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Applications() {
  const [active, setActive] = useState(0);
  const app = applications[active]!;

  return (
    <section id="applications" className="border-t border-border py-24 lg:py-36">
      <div className={wrap}>
        <Reveal variant="up">
          <h2
            className="font-display font-light leading-[0.95] tracking-[-0.015em] text-foreground"
            style={{ fontSize: "clamp(34px, 4.8vw, 84px)" }}
          >
            Where surface
            <br />
            becomes architecture.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-12 lg:gap-16">
          <ul className="border-t border-border lg:col-span-6">
            {applications.map((a, i) => (
              <li key={a.id}>
                <button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={cn(
                    "group flex w-full items-center justify-between gap-6 border-b border-border py-6 text-left transition-colors lg:py-8",
                    i === active ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  <span
                    className="font-display font-light tracking-tight transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2"
                    style={{ fontSize: "clamp(22px, 2.6vw, 40px)" }}
                  >
                    {a.label}
                  </span>
                  <ArrowRight className="h-4 w-4 shrink-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </button>
                <div className="overflow-hidden lg:hidden">
                  {i === active ? (
                    <img
                      src={a.image}
                      alt={a.alt}
                      loading="lazy"
                      className="material-in mb-6 aspect-[4/3] w-full object-cover"
                    />
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
          <div className="hidden lg:col-span-6 lg:block">
            <div className="sticky top-32 aspect-[4/5] w-full overflow-hidden bg-surface">
              <img
                key={app.id}
                src={app.image}
                alt={app.alt}
                loading="lazy"
                className="material-in h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function MaterialStories() {
  return (
    <section className="border-t border-border py-24 lg:py-36">
      <div className={wrap}>
        <Reveal variant="up">
          <h2
            className="font-display font-light leading-none tracking-[-0.015em] text-foreground"
            style={{ fontSize: "clamp(32px, 4.2vw, 70px)" }}
          >
            Material stories
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-14 lg:mt-20 lg:grid-cols-3 lg:gap-12">
          {stories.map((s, i) => (
            <Reveal key={s.index} variant="up" delay={i * 100}>
              <Link to={s.href} className="group block" data-cursor="Read">
                <div className="metal-sheen overflow-hidden bg-surface">
                  <img
                    src={s.image}
                    alt={s.alt}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                  />
                </div>
                <p className={cn(label, "mt-6")}>{s.index}</p>
                <h3 className="mt-3 font-display text-2xl font-light tracking-tight text-foreground">
                  {s.title}
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                <span className="quiet-link mt-6 inline-flex">
                  Read story <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProjectApplications() {
  const [active, setActive] = useState(0);
  const p = projectApplications[active]!;

  return (
    <section className="border-t border-border py-24 lg:py-36">
      <div className={wrap}>
        <Reveal variant="up">
          <h2
            className="font-display font-light leading-[0.95] tracking-[-0.015em] text-foreground"
            style={{ fontSize: "clamp(32px, 4.4vw, 76px)" }}
          >
            See the material in space.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-12 lg:gap-16">
          <div className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-32 aspect-[4/5] w-full overflow-hidden bg-surface">
              <img
                key={p.index}
                src={p.image}
                alt={p.alt}
                loading="lazy"
                className="material-in h-full w-full object-cover"
              />
            </div>
          </div>
          <ul className="border-t border-border lg:col-span-7">
            {projectApplications.map((row, i) => (
              <li key={row.index}>
                <Link
                  to="/projects"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className="group grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-4 border-b border-border py-6 text-left sm:grid-cols-[3rem_1fr_1fr_1fr_auto] sm:gap-6"
                >
                  <span className={label}>{row.index}</span>
                  <span className="font-display text-lg font-light text-foreground transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5 sm:text-xl">
                    {row.name}
                  </span>
                  <span className="col-start-2 text-sm text-muted-foreground sm:col-start-auto">
                    {row.location}
                  </span>
                  <span className="col-start-2 text-sm text-muted-foreground sm:col-start-auto">
                    {row.material}
                  </span>
                  <ArrowRight className="h-4 w-4 self-center opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </Link>
                <div className="lg:hidden">
                  {i === active ? (
                    <img
                      src={row.image}
                      alt={row.alt}
                      loading="lazy"
                      className="material-in mb-6 aspect-[4/3] w-full object-cover"
                    />
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function MaterialFinder() {
  const [space, setSpace] = useState<FinderSpace | null>(null);
  const [character, setCharacter] = useState<FinderCharacter | null>(null);
  const results = space && character ? recommendFinishes(space, character) : null;

  const chip = (selected: boolean) =>
    cn(
      "border-b py-2 text-[0.68rem] uppercase tracking-[0.22em] transition-colors",
      selected
        ? "border-foreground text-foreground"
        : "border-transparent text-muted-foreground hover:text-foreground",
    );

  return (
    <section className="border-t border-border bg-surface py-24 lg:py-36">
      <div className={wrap}>
        <Reveal variant="up">
          <h2
            className="font-display font-light leading-none tracking-[-0.015em] text-foreground"
            style={{ fontSize: "clamp(32px, 4.4vw, 76px)" }}
          >
            Find your surface.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            <fieldset className="border-t border-border pt-8">
              <legend className="sr-only">What are you designing?</legend>
              <p className="text-base text-foreground/80">What are you designing?</p>
              <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
                {finderSpaces.map((s) => (
                  <button key={s} type="button" onClick={() => setSpace(s)} className={chip(space === s)}>
                    {s}
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset className="mt-14 border-t border-border pt-8">
              <legend className="sr-only">What character are you looking for?</legend>
              <p className="text-base text-foreground/80">What character are you looking for?</p>
              <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
                {finderCharacters.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setCharacter(c)}
                    className={chip(character === c)}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </fieldset>
          </div>

          <div className="lg:col-span-5">
            <p className={label}>Recommendation</p>
            <div aria-live="polite" className="mt-6 border-t border-border">
              {results ? (
                <ol className="divide-y divide-border">
                  {results.map((r, i) => (
                    <li key={r} className="flex items-baseline gap-6 py-5">
                      <span className={label}>0{i + 1}</span>
                      <span className="font-display text-xl font-light text-foreground">{r}</span>
                    </li>
                  ))}
                </ol>
              ) : (
                <p className="py-6 text-sm leading-relaxed text-muted-foreground">
                  Select a space and a character. We will suggest three surfaces to sample.
                </p>
              )}
            </div>
            {results ? (
              <a href="#samples" className="quiet-link mt-8 inline-flex">
                Request these samples <ArrowRight className="h-3.5 w-3.5" />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

const inputCls =
  "mt-2 w-full border-0 border-b border-border bg-transparent pb-2 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-foreground focus:outline-none";

export function SampleRequest() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    toast.success("Sample request received — we will be in touch");
  };

  return (
    <section id="samples" className="border-t border-border py-24 lg:py-36">
      <div className={cn(wrap, "grid gap-14 lg:grid-cols-12 lg:gap-20")}>
        <div className="lg:col-span-5">
          <Reveal variant="up">
            <h2
              className="font-display font-light leading-[0.95] tracking-[-0.015em] text-foreground"
              style={{ fontSize: "clamp(34px, 4.6vw, 80px)" }}
            >
              Touch the
              <br />
              material.
            </h2>
          </Reveal>
          <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
            Colour on a screen is only a suggestion. Request physical samples to experience the
            texture, reflectivity and tone before specification.
          </p>
          <img
            src={images.samples}
            alt="Five stainless steel PVD sample plates on a warm paper surface"
            loading="lazy"
            width={1600}
            height={1008}
            className="mt-12 w-full object-cover"
          />
        </div>

        <div className="lg:col-span-7">
          {sent ? (
            <div className="border-t border-border pt-10">
              <p className={label}>Request received</p>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-foreground/80">
                Thank you. A member of the STEELX studio will confirm your sample selection and
                delivery address within one working day.
              </p>
              <button type="button" onClick={() => setSent(false)} className="quiet-link mt-8">
                Request more samples <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-10 sm:grid-cols-2">
              {[
                { id: "name", label: "Name", type: "text", required: true },
                { id: "company", label: "Company", type: "text", required: false },
                { id: "email", label: "Email", type: "email", required: true },
                { id: "phone", label: "Phone", type: "tel", required: false },
                { id: "project-type", label: "Project type", type: "text", required: false },
                { id: "project-location", label: "Project location", type: "text", required: false },
              ].map((f) => (
                <div key={f.id}>
                  <label htmlFor={f.id} className={label}>
                    {f.label}
                    {f.required ? " *" : ""}
                  </label>
                  <input
                    id={f.id}
                    name={f.id}
                    type={f.type}
                    required={f.required}
                    className={inputCls}
                  />
                </div>
              ))}
              <div className="sm:col-span-2">
                <label htmlFor="finishes" className={label}>
                  Select finishes
                </label>
                <input
                  id="finishes"
                  name="finishes"
                  className={inputCls}
                  placeholder="Champagne hairline, gunmetal bead blast…"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className={label}>
                  Message
                </label>
                <textarea id="message" name="message" rows={3} className={cn(inputCls, "resize-y")} />
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 border border-foreground px-8 py-4 text-[0.68rem] uppercase tracking-[0.24em] text-foreground transition-colors hover:bg-foreground hover:text-background"
                >
                  Request samples <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export function Specification() {
  return (
    <section id="specification" className="border-t border-border py-24 lg:py-36">
      <div className={cn(wrap, "grid gap-14 lg:grid-cols-12 lg:gap-20")}>
        <div className="lg:col-span-5">
          <Reveal variant="up">
            <h2
              className="font-display font-light leading-[0.95] tracking-[-0.015em] text-foreground"
              style={{ fontSize: "clamp(32px, 4.2vw, 70px)" }}
            >
              Specify with confidence.
            </h2>
          </Reveal>
          <button
            type="button"
            onClick={() => toast("Material guide — available on request from the studio.")}
            className="quiet-link mt-10"
          >
            Download material guide <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
        <dl className="divide-y divide-border border-y border-border lg:col-span-7">
          {specification.map((s) => (
            <div key={s.label} className="grid gap-3 py-7 sm:grid-cols-[minmax(0,11rem)_1fr] sm:gap-10">
              <dt className={label}>{s.label}</dt>
              <dd className="text-sm leading-relaxed text-foreground/80">{s.values.join(" · ")}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function QualityControl() {
  return (
    <section className="border-t border-border bg-surface py-24 lg:py-36">
      <div className={wrap}>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <Reveal variant="up" className="lg:col-span-6">
            <h2
              className="font-display font-light leading-[0.95] tracking-[-0.015em] text-foreground"
              style={{ fontSize: "clamp(32px, 4.2vw, 70px)" }}
            >
              Every surface
              <br />
              is controlled.
            </h2>
          </Reveal>
          <p className="text-base leading-relaxed text-muted-foreground lg:col-span-6 lg:pt-4">
            Each project is checked against an approved physical sample so colour, texture,
            reflectivity and fabrication remain consistent from first panel to final installation.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:mt-24 lg:grid-cols-5 lg:gap-8">
          {controlBoard.map((s) => (
            <div key={s.name}>
              <div
                className="aspect-[4/5] w-full border border-border"
                style={{ backgroundImage: s.swatch }}
                role="img"
                aria-label={`${s.name} ${s.finish} control sample`}
              />
              <p className="mt-4 text-sm text-foreground">{s.name}</p>
              <p className={cn(label, "mt-1")}>{s.finish}</p>
              <p className="mt-2 text-[0.62rem] tracking-[0.2em] text-muted-foreground">{s.code}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EditorialStatement() {
  const words = ["Material", "changes", "space."];
  return (
    <section className="border-t border-border py-32 lg:py-56">
      <div className={wrap}>
        <h2
          className="font-display font-light leading-[0.86] tracking-[-0.02em] text-foreground"
          style={{ fontSize: "clamp(48px, 9vw, 150px)" }}
        >
          {words.map((w, i) => (
            <Reveal key={w} variant="up" delay={i * 160} className="block">
              {w}
            </Reveal>
          ))}
        </h2>
        <Reveal variant="up" delay={520}>
          <p className="mt-16 max-w-md text-base leading-relaxed text-muted-foreground">
            Choose the surface carefully.
            <br />
            The architecture will remember it.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="relative isolate">
      <img
        src={images.cta}
        alt="Lobby clad in bronze and champagne PVD stainless steel"
        loading="lazy"
        width={1920}
        height={1088}
        className="h-[70vh] w-full object-cover lg:h-[86vh]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/45 to-transparent" />
      <div className={cn(wrap, "absolute inset-x-0 bottom-0 pb-14 lg:pb-24")}>
        <h2
          className="font-display font-light leading-[0.92] tracking-[-0.015em] text-foreground"
          style={{ fontSize: "clamp(34px, 5.4vw, 92px)" }}
        >
          Have a surface
          <br />
          in mind?
        </h2>
        <p className="mt-8 max-w-md text-base leading-relaxed text-foreground/75">
          Tell us what you're designing. We'll help you find the right colour, texture and finish.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 border border-foreground px-8 py-4 text-[0.68rem] uppercase tracking-[0.24em] text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            Start a project <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <a href="#samples" className="quiet-link">
            Request a sample <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
