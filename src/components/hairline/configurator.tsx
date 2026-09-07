import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { GrainLight, HlSection } from "@/components/hairline/primitives";
import {
  grainDirections,
  grainScales,
  hairlineColours,
  ON_REQUEST,
} from "@/data/products/hairline";

const grades = [
  { id: "ss304", name: "SS304", confirmed: true },
  { id: "ss316", name: "SS316", confirmed: true },
  { id: "other", name: "Other grade", confirmed: false },
];

const sizes = [
  { id: "4x8", name: "4 × 8 ft", confirmed: true },
  { id: "4x10", name: "4 × 10 ft", confirmed: true },
  { id: "5x10", name: "5 × 10 ft", confirmed: true },
  { id: "custom", name: "Custom size", confirmed: false },
];

function Row({
  label,
  options,
  active,
  onSelect,
}: {
  label: string;
  options: { id: string; name: string; confirmed: boolean }[];
  active: string;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="grid gap-4 border-t border-border/70 py-6 lg:grid-cols-12 lg:items-center">
      <p className="text-[0.58rem] uppercase tracking-[0.28em] text-muted-foreground lg:col-span-3">
        {label}
      </p>
      <div className="flex flex-wrap gap-2 lg:col-span-9">
        {options.map((option) => (
          <button
            key={option.id}
            type="button"
            onClick={() => onSelect(option.id)}
            aria-pressed={option.id === active}
            className={cn(
              "border px-5 py-3 text-[0.62rem] uppercase tracking-[0.2em] transition-colors",
              option.id === active
                ? "border-champagne bg-champagne text-metal-black"
                : "border-border text-muted-foreground hover:border-champagne/70 hover:text-foreground",
            )}
          >
            {option.name}
            {!option.confirmed ? <span className="ml-2 opacity-70">·</span> : null}
          </button>
        ))}
      </div>
    </div>
  );
}

export function HairlineConfigurator({ onEnquire }: { onEnquire: () => void }) {
  const [colour, setColour] = useState(hairlineColours[0]!.id);
  const [direction, setDirection] = useState(grainDirections[0]!.id);
  const [scale, setScale] = useState(grainScales[0]!.id);
  const [grade, setGrade] = useState(grades[0]!.id);
  const [size, setSize] = useState(sizes[0]!.id);

  const selection = useMemo(() => {
    const c = hairlineColours.find((item) => item.id === colour)!;
    const d = grainDirections.find((item) => item.id === direction)!;
    const s = grainScales.find((item) => item.id === scale)!;
    const g = grades.find((item) => item.id === grade)!;
    const z = sizes.find((item) => item.id === size)!;
    return { c, d, s, g, z };
  }, [colour, direction, scale, grade, size]);

  const onRequest = [selection.d, selection.s, selection.g, selection.z].some((item) => !item.confirmed);

  return (
    <HlSection
      index="15"
      eyebrow="Configurator"
      title="BUILD THE SPECIFICATION."
      lead="Set colour, grain direction, grain scale, grade and size. Unconfirmed combinations are marked as available on request."
    >
      <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-7">
          <GrainLight
            key={`${selection.c.id}-${selection.d.id}`}
            image={selection.c.image}
            alt={selection.c.alt}
            angle={selection.d.angle}
            className="aspect-[16/9]"
            imgClassName={cn(
              "transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
              selection.d.id === "vertical" ? "rotate-90 scale-[1.9]" : selection.d.id === "custom" ? "rotate-45 scale-[1.6]" : "",
            )}
          />
          <p className="mt-4 text-[0.6rem] uppercase tracking-[0.24em] text-muted-foreground">
            Visualisation only — request a physical sample before specification
          </p>
        </div>

        <div className="lg:col-span-5">
          <Row
            label="Colour"
            options={hairlineColours.map((item) => ({ id: item.id, name: item.name, confirmed: true }))}
            active={colour}
            onSelect={setColour}
          />
          <Row
            label="Grain direction"
            options={grainDirections.map((item) => ({ id: item.id, name: item.name, confirmed: item.confirmed }))}
            active={direction}
            onSelect={(id) => setDirection(id as typeof direction)}
          />
          <Row
            label="Grain scale"
            options={grainScales.map((item) => ({ id: item.id, name: item.name, confirmed: item.confirmed }))}
            active={scale}
            onSelect={setScale}
          />
          <Row label="Grade" options={grades} active={grade} onSelect={setGrade} />
          <Row label="Size" options={sizes} active={size} onSelect={setSize} />

          <div className="border-t border-border/70 pt-7">
            <p className="text-sm text-foreground">
              {selection.c.name} hairline · {selection.d.name} grain · {selection.s.name} ·{" "}
              {selection.g.name} · {selection.z.name}
            </p>
            <p className="mt-3 text-[0.6rem] uppercase tracking-[0.24em] text-champagne">
              {onRequest ? ON_REQUEST : "Standard specification"}
            </p>
            <button
              type="button"
              onClick={onEnquire}
              className="mt-7 inline-flex w-full items-center justify-center border border-champagne/70 px-7 py-4 text-[0.62rem] uppercase tracking-[0.26em] text-foreground transition-colors hover:bg-champagne hover:text-metal-black sm:w-auto"
            >
              Enquire about this specification
            </button>
          </div>
        </div>
      </div>
    </HlSection>
  );
}
