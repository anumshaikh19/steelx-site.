import { useState } from "react";

import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";
import { ON_REQUEST, mirrorColours, mirrorLevels } from "@/data/products/mirror";

type Option = { value: string; hint?: string };

const grades: Option[] = [
  { value: "SS304" },
  { value: "SS316" },
  { value: "Other grade", hint: ON_REQUEST },
];

const sizes: Option[] = [
  { value: "4 × 8 ft", hint: "Typical" },
  { value: "4 × 10 ft", hint: "Typical" },
  { value: "5 × 10 ft", hint: "Typical" },
  { value: "Custom", hint: ON_REQUEST },
];

const protection: Option[] = [
  { value: "Protective film", hint: "Standard" },
  { value: "Anti-fingerprint", hint: ON_REQUEST },
];

function Row({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: Option[];
  value: string;
  onChange: (next: string) => void;
}) {
  return (
    <div className="grid gap-4 border-b border-border py-7 sm:grid-cols-[minmax(0,12rem)_1fr] sm:gap-10">
      <p className="text-[0.62rem] uppercase tracking-[0.24em] text-muted-foreground">{label}</p>
      <ul className="flex flex-wrap gap-3">
        {options.map((option) => (
          <li key={option.value}>
            <button
              type="button"
              onClick={() => onChange(option.value)}
              aria-pressed={option.value === value}
              className={cn(
                "flex min-h-11 flex-col items-start gap-1 border px-5 py-2.5 text-left transition-colors",
                option.value === value
                  ? "border-champagne text-foreground"
                  : "border-border text-muted-foreground hover:border-champagne/50",
              )}
            >
              <span className="text-sm">{option.value}</span>
              {option.hint ? (
                <span className="text-[0.54rem] uppercase tracking-[0.2em] text-champagne">{option.hint}</span>
              ) : null}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function MirrorConfigurator() {
  const [grade, setGrade] = useState("SS304");
  const [level, setLevel] = useState(mirrorLevels[1]!.name);
  const [colour, setColour] = useState(mirrorColours[0]!.name);
  const [size, setSize] = useState(sizes[0]!.value);
  const [film, setFilm] = useState(protection[0]!.value);

  const levelOptions: Option[] = mirrorLevels.map((item) => ({
    value: item.name,
    ...(item.availability === ON_REQUEST ? { hint: ON_REQUEST } : {}),
  }));
  const colourOptions: Option[] = mirrorColours.map((item) => ({ value: item.name }));

  return (
    <section id="configurator" className="mx-auto max-w-[1500px] px-4 py-20 sm:px-8 lg:px-10 lg:py-32">
      <Reveal variant="text">
        <p className="text-[0.66rem] uppercase tracking-[0.34em] text-champagne">Configurator</p>
      </Reveal>
      <Reveal variant="up" delay={80}>
        <h2 className="mt-6 font-display text-4xl leading-[1.02] text-foreground sm:text-5xl lg:text-[4.2rem]">
          SPECIFY YOUR MIRROR.
        </h2>
      </Reveal>
      <Reveal variant="up" delay={140}>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Build the specification you need. Options marked as available on request are confirmed per project.
        </p>
      </Reveal>

      <div className="mt-12 border-t border-border">
        <Row label="Grade" options={grades} value={grade} onChange={setGrade} />
        <Row label="Mirror level" options={levelOptions} value={level} onChange={setLevel} />
        <Row label="Colour" options={colourOptions} value={colour} onChange={setColour} />
        <div className="grid gap-4 border-b border-border py-7 sm:grid-cols-[minmax(0,12rem)_1fr] sm:gap-10">
          <p className="text-[0.62rem] uppercase tracking-[0.24em] text-muted-foreground">Thickness</p>
          <p className="text-sm text-foreground">
            Available according to grade and application
            <span className="mt-1 block text-[0.54rem] uppercase tracking-[0.2em] text-champagne">
              Confirmed at quotation
            </span>
          </p>
        </div>
        <Row label="Sheet size" options={sizes} value={size} onChange={setSize} />
        <Row label="Surface protection" options={protection} value={film} onChange={setFilm} />
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-6 border border-champagne/40 px-6 py-6">
        <p className="text-[0.6rem] uppercase tracking-[0.24em] text-muted-foreground">Your specification</p>
        <p className="font-display text-xl text-foreground">
          Mirror · {level} · {colour} · {grade} · {size} · {film}
        </p>
        <a
          href="#quote"
          className="ml-auto inline-flex items-center border border-champagne/60 px-6 py-3 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-champagne transition-colors hover:bg-champagne hover:text-metal-black"
        >
          Request quote
        </a>
      </div>
    </section>
  );
}
