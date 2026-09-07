import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export type MaterialLight = { highlight: string; mid: string; shadow: string };

/**
 * Cinematic product visualisation for a textured metal sheet.
 * Pointer position drives a moving specular highlight, a parallax shift of the
 * photograph and a subtle perspective tilt. Falls back to a static, lit frame
 * for touch devices and prefers-reduced-motion.
 */
export function MaterialViewer({
  image,
  alt,
  light,
  caption,
  className,
  priority = false,
}: {
  image: string;
  alt: string;
  light: MaterialLight;
  caption?: string;
  className?: string;
  priority?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0.5, y: 0.42 });
  const [active, setActive] = useState(false);
  const [interactive, setInteractive] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    setInteractive(!reduce && !coarse);
  }, []);

  useEffect(() => {
    if (!interactive) return;
    const node = ref.current;
    if (!node) return;
    let frame = 0;
    const onMove = (event: PointerEvent) => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const rect = node.getBoundingClientRect();
        setPos({
          x: Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width)),
          y: Math.min(1, Math.max(0, (event.clientY - rect.top) / rect.height)),
        });
      });
    };
    const onEnter = () => setActive(true);
    const onLeave = () => {
      setActive(false);
      setPos({ x: 0.5, y: 0.42 });
    };
    node.addEventListener("pointermove", onMove);
    node.addEventListener("pointerenter", onEnter);
    node.addEventListener("pointerleave", onLeave);
    return () => {
      node.removeEventListener("pointermove", onMove);
      node.removeEventListener("pointerenter", onEnter);
      node.removeEventListener("pointerleave", onLeave);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [interactive]);

  const tiltX = active ? (0.5 - pos.y) * 6 : 0;
  const tiltY = active ? (pos.x - 0.5) * 8 : 0;
  const shiftX = active ? (pos.x - 0.5) * -18 : 0;
  const shiftY = active ? (pos.y - 0.5) * -12 : 0;

  return (
    <figure className={cn("m-0", className)}>
      <div ref={ref} className="relative [perspective:1800px]">
        <div
          className="relative overflow-hidden border border-border/70 transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ transform: `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`, transformStyle: "preserve-3d" }}
        >
          <img
            src={image}
            alt={alt}
            width={1536}
            height={1024}
            {...(priority ? {} : { loading: "lazy" as const })}
            decoding="async"
            className="block aspect-[3/2] w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ transform: `scale(1.08) translate3d(${shiftX}px, ${shiftY}px, 0)` }}
          />
          {/* Moving specular highlight */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 transition-opacity duration-700"
            style={{
              opacity: active ? 1 : 0.55,
              background: `radial-gradient(38% 46% at ${pos.x * 100}% ${pos.y * 100}%, ${light.highlight}, transparent 70%)`,
              mixBlendMode: "screen",
            }}
          />
          {/* Colour body */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{ background: `linear-gradient(120deg, ${light.mid}, transparent 55%)`, mixBlendMode: "overlay" }}
          />
          {/* Falloff */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background: `radial-gradient(120% 100% at ${(1 - pos.x) * 100}% ${(1 - pos.y) * 100}%, transparent 30%, ${light.shadow})`,
            }}
          />
        </div>
      </div>
      {caption ? (
        <figcaption className="mt-4 text-[0.68rem] uppercase tracking-[0.24em] text-muted-foreground">
          {caption}
          {interactive ? <span className="ml-3 text-champagne">Move the cursor across the surface</span> : null}
        </figcaption>
      ) : null}
    </figure>
  );
}
