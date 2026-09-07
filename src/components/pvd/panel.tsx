import { cn } from "@/lib/utils";
import type { Texture, Tone } from "@/data/pvd";

export const wrap = "mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-14";
export const meta = "text-[0.62rem] uppercase tracking-[0.3em] text-muted-foreground";

/** How each texture returns light: sharpness, strength and stretch of the specular. */
const specular: Record<string, { blur: number; opacity: number; stretch: number }> = {
  hairline: { blur: 7, opacity: 0.85, stretch: 1.6 },
  mirror: { blur: 0, opacity: 1, stretch: 1 },
  vibration: { blur: 13, opacity: 0.6, stretch: 1.1 },
  "bead-blast": { blur: 26, opacity: 0.34, stretch: 1 },
  satin: { blur: 16, opacity: 0.55, stretch: 1.3 },
};

/**
 * CSS-3D architectural panel — one physical object whose finish changes.
 * Geometry never changes: only colour, grain, specular behaviour and the
 * environment it reflects.
 */
export function MaterialObject({
  tone,
  nextTone,
  mix = 0,
  texture,
  rotate = 0,
  tilt = -8,
  scale = 1,
  highlight = 0.5,
  className,
}: {
  tone: Tone;
  /** Tone being cross-faded into — lets the finish change as one object. */
  nextTone?: Tone | undefined;
  /** 0 → 1 blend between tone and nextTone. */
  mix?: number;
  texture?: Texture | undefined;
  rotate?: number;
  tilt?: number;
  scale?: number;
  /** 0 → 1 position of the travelling specular band. */
  highlight?: number;
  className?: string | undefined;
}) {
  const s = specular[texture?.id ?? "hairline"] ?? specular["hairline"]!;

  return (
    <div
      className={cn("pointer-events-none select-none", className)}
      style={{ perspective: "2200px" }}
      aria-hidden="true"
    >
      <div
        className="relative mx-auto aspect-[3/4.2] w-[74vw] max-w-[440px] sm:w-[40vw] lg:w-[25vw]"
        style={{
          transform: `rotateX(${tilt}deg) rotateY(${rotate}deg) scale(${scale})`,
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        {/* body — two tone layers cross-fading so the finish shifts continuously */}
        <div className="absolute inset-0" style={{ backgroundImage: tone.sheen }}>
          {nextTone ? (
            <span
              className="absolute inset-0"
              style={{ backgroundImage: nextTone.sheen, opacity: mix }}
            />
          ) : null}

          {/* environment the surface reflects — studio ceiling, floor, side light */}
          <span
            className="absolute inset-0 mix-blend-screen"
            style={{
              backgroundImage:
                "linear-gradient(178deg, rgba(255,255,255,0.30) 0 8%, transparent 26%), linear-gradient(0deg, rgba(255,255,255,0.13) 0 6%, transparent 24%), radial-gradient(45% 60% at 108% 42%, rgba(255,255,255,0.22), transparent 70%)",
              opacity: 0.6 + (1 - s.blur / 26) * 0.4,
            }}
          />

          {/* physical grain */}
          <span
            className="absolute inset-0 mix-blend-overlay"
            style={{
              backgroundImage:
                texture?.grain ??
                "repeating-linear-gradient(90deg, rgba(255,255,255,0.14) 0 1px, rgba(0,0,0,0.14) 1px 3px)",
              backgroundSize: texture?.grainSize ?? "auto",
              opacity: texture?.id === "mirror" ? 0.25 : 0.72,
            }}
          />

          {/* travelling specular — sharp on mirror, stretched on hairline, diffuse on blast */}
          <span
            className="absolute inset-0"
            style={{
              backgroundImage:
                texture?.highlight ??
                "linear-gradient(104deg, transparent 34%, rgba(255,255,255,0.55) 48%, transparent 62%)",
              transform: `translateX(${(highlight - 0.5) * 62}%) scaleY(${s.stretch})`,
              filter: s.blur ? `blur(${s.blur}px)` : undefined,
              mixBlendMode: "screen",
              opacity: s.opacity,
              willChange: "transform",
            }}
          />

          {/* studio falloff + horizon line */}
          <span
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(130% 80% at 26% -6%, rgba(255,255,255,0.22), transparent 58%), linear-gradient(180deg, transparent 48%, rgba(0,0,0,0.62))",
            }}
          />

          {/* machined edge */}
          <span className="absolute inset-0 border border-white/12" />
          <span className="absolute inset-x-0 top-0 h-px bg-white/45" />
        </div>

        {/* material thickness */}
        <div
          className="absolute inset-y-0 -right-[7px] w-[7px]"
          style={{
            backgroundImage: "linear-gradient(180deg,#26262a,#9a9a9e 38%,#17171a)",
            transform: "rotateY(74deg)",
            transformOrigin: "left center",
          }}
        />

        {/* contact shadow + floor reflection */}
        <div
          className="absolute inset-x-[10%] top-full h-[22%] opacity-20"
          style={{
            backgroundImage: tone.sheen,
            transform: "scaleY(-1) perspective(600px) rotateX(52deg)",
            transformOrigin: "top center",
            maskImage: "linear-gradient(180deg, rgba(0,0,0,0.45), transparent 58%)",
            WebkitMaskImage: "linear-gradient(180deg, rgba(0,0,0,0.45), transparent 58%)",
            filter: "blur(10px)",
          }}
        />
        <div
          className="absolute inset-x-[-6%] top-full h-[10%]"
          style={{
            backgroundImage:
              "radial-gradient(50% 100% at 50% 0%, rgba(0,0,0,0.85), transparent 70%)",
          }}
        />
      </div>
    </div>
  );
}

export function StatementHeading({
  lines,
  className,
  size = "clamp(44px, 8vw, 152px)",
}: {
  lines: string[];
  className?: string | undefined;
  size?: string;
}) {
  return (
    <h2
      className={cn(
        "font-display font-light uppercase leading-[0.84] tracking-[-0.03em] text-foreground",
        className,
      )}
      style={{ fontSize: size }}
    >
      {lines.map((l) => (
        <span key={l} className="block">
          {l}
        </span>
      ))}
    </h2>
  );
}
