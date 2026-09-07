import { useState } from "react";

import { cn } from "@/lib/utils";
import { MaterialViewer } from "@/components/products/material-viewer";
import { ON_REQUEST, type ColourProduct, type PatternOption } from "@/data/products/designer-sheets";

const grades = ["SS304", "SS316"];
const sizes = ["4 × 8 ft", "4 × 10 ft", "Custom"];

function Row({
  label,
  options,
  value,
  onChange,
  note,
}: {
  label: string;
  options: { value: string; label: string; hint?: string; swatch?: string }[];
  value: string;
  onChange: (next: string) => void;
  note?: string;
}) {
  return (
    <div className="border-b border-border py-6">
      <p className="text-[0.62rem] uppercase tracking-[0.24em] text-muted-foreground">{label}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {options.map((option) => {
          const active = option.value === value;
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onChange(option.value)}
              aria-pressed={active}
              className={cn(
                "flex items-center gap-2.5 border px-4 py-2.5 text-[0.68rem] uppercase tracking-[0.14em] transition-colors duration-500",
                active
                  ? "border-champagne text-champagne"
                  : "border-border text-muted-foreground hover:border-champagne/50 hover:text-foreground",
              )}
            >
              {option.swatch ? (
                <span aria-hidden className="h-4 w-4 border border-border/60" style={{ backgroundImage: option.swatch }} />
              ) : null}
              {option.label}
              {option.hint ? <span className="text-[0.58rem] text-champagne/70">{option.hint}</span> : null}
            </button>
          );
        })}
      </div>
      {note ? <p className="mt-3 text-xs text-muted-foreground">{note}</p> : null}
    </div>
  );
}

/**
 * Reusable material configurator. Options come from product data so new
 * colours or patterns require no component changes.
 */
export function MaterialConfigurator({
  finishName,
  colours,
  patterns,
  initialColourSlug,
}: {
  finishName: string;
  colours: ColourProduct[];
  patterns: PatternOption[];
  initialColourSlug?: string;
}) {
  const first = colours.find((c) => c.slug === initialColourSlug) ?? colours[0];
  const [colourSlug, setColourSlug] = useState(first?.slug ?? "");
  const [pattern, setPattern] = useState(patterns[0]?.name ?? "");
  const [grade, setGrade] = useState(grades[0] as string);
  const [size, setSize] = useState(sizes[0] as string);

  const colour = colours.find((c) => c.slug === colourSlug) ?? first;
  if (!colour) return null;

  const patternOption = patterns.find((p) => p.name === pattern);

  return (
    <div className="mt-12 grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
      <MaterialViewer
        image={colour.image}
        alt={colour.alt}
        light={colour.light}
        caption={`${finishName} · ${colour.colour}`}
      />

      <div>
        <Row
          label="Finish"
          value={finishName}
          onChange={() => undefined}
          options={[{ value: finishName, label: finishName }]}
        />
        <Row
          label="Colour"
          value={colourSlug}
          onChange={setColourSlug}
          options={colours.map((c) => ({ value: c.slug, label: c.colour, swatch: c.swatch }))}
        />
        <Row
          label="Pattern"
          value={pattern}
          onChange={setPattern}
          options={patterns.map((p) => ({
            value: p.name,
            label: p.name,
            ...(p.confirmed ? {} : { hint: "on request" }),
          }))}
          {...(patternOption
            ? {
                note: patternOption.confirmed
                  ? patternOption.description
                  : `${patternOption.description} — ${ON_REQUEST}.`,
              }
            : {})}
        />
        <Row label="Grade" value={grade} onChange={setGrade} options={grades.map((g) => ({ value: g, label: g }))} />
        <Row
          label="Thickness"
          value={ON_REQUEST}
          onChange={() => undefined}
          options={[{ value: ON_REQUEST, label: ON_REQUEST }]}
          note="Thickness is confirmed per project."
        />
        <Row label="Size" value={size} onChange={setSize} options={sizes.map((s) => ({ value: s, label: s }))} />

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <p className="text-sm text-muted-foreground">
            <span className="text-foreground">{colour.name}</span> · {pattern} · {grade} · {size}
          </p>
          <a
            href="#quote"
            className="border border-champagne/60 px-6 py-3 text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-champagne transition-colors hover:bg-champagne hover:text-metal-black"
          >
            Quote this specification
          </a>
        </div>
      </div>
    </div>
  );
}
