import { cn } from "@/lib/utils";

const PATTERNS: Record<string, string> = {
  open: `repeating-linear-gradient(0deg, oklch(0.86 0.055 85 / 34%) 0 1px, transparent 1px 14px),
         repeating-linear-gradient(90deg, oklch(0.86 0.055 85 / 34%) 0 1px, transparent 1px 14px)`,
  textured: `repeating-linear-gradient(0deg, oklch(0.86 0.055 85 / 40%) 0 2px, transparent 2px 9px),
             repeating-linear-gradient(90deg, oklch(0.72 0.012 250 / 45%) 0 2px, transparent 2px 7px)`,
  directional: `repeating-linear-gradient(45deg, oklch(0.86 0.055 85 / 34%) 0 1px, transparent 1px 10px),
                repeating-linear-gradient(-45deg, oklch(0.72 0.012 250 / 30%) 0 1px, transparent 1px 10px)`,
  dense: `repeating-linear-gradient(0deg, oklch(0.72 0.012 250 / 55%) 0 1px, transparent 1px 4px),
          repeating-linear-gradient(90deg, oklch(0.86 0.055 85 / 30%) 0 1px, transparent 1px 6px)`,
};

/** Deterministic CSS weave rendering — a schematic, not a photo. */
export function WeaveVisual({
  group,
  className,
}: {
  group: string;
  className?: string | undefined;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn("relative overflow-hidden bg-graphite", className)}
      style={{ backgroundImage: PATTERNS[group] ?? PATTERNS["open"] }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-foreground/5 to-metal-black/60" />
    </div>
  );
}
