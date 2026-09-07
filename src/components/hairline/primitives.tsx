import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Wide, rule-led section frame. Hairline pages are horizontal-dominant. */
export function HlSection({
  index,
  eyebrow,
  title,
  lead,
  children,
  bleed = false,
  className,
}: {
  index?: string;
  eyebrow?: string;
  title?: string;
  lead?: string;
  children?: ReactNode;
  bleed?: boolean;
  className?: string;
}) {
  return (
    <section className={cn("border-t border-border/70 py-16 lg:py-28", className)}>
      {(eyebrow || title || lead) && (
        <div className={cn("mx-auto max-w-[1600px]", bleed ? "px-4 sm:px-8" : "px-4 sm:px-8 lg:px-14")}>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              {(index || eyebrow) && (
                <p className="flex items-center gap-4 text-[0.6rem] uppercase tracking-[0.34em] text-champagne">
                  {index ? <span className="tabular-nums text-muted-foreground">{index}</span> : null}
                  {eyebrow ? <span>{eyebrow}</span> : null}
                </p>
              )}
              {title ? (
                <h2 className="mt-5 font-display text-[2rem] leading-[1.02] tracking-tight text-foreground sm:text-4xl lg:text-[3.4rem]">
                  {title}
                </h2>
              ) : null}
            </div>
            {lead ? (
              <p className="max-w-md text-sm leading-relaxed text-muted-foreground lg:text-right">{lead}</p>
            ) : null}
          </div>
        </div>
      )}
      {children ? (
        <div className={cn(bleed ? "" : "mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-14")}>{children}</div>
      ) : null}
    </section>
  );
}

/** Reveal that slides in from the side — the page's directional signature. */
export function HlSlide({
  children,
  from = "left",
  delay = 0,
  className,
}: {
  children: ReactNode;
  from?: "left" | "right" | "up";
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            obs.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  const hidden =
    from === "left"
      ? "opacity-0 -translate-x-10"
      : from === "right"
        ? "opacity-0 translate-x-10"
        : "opacity-0 translate-y-8";

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-all duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none",
        shown ? "translate-x-0 translate-y-0 opacity-100" : hidden,
        className,
      )}
    >
      {children}
    </div>
  );
}

/**
 * Image with a light band that travels along the grain as the pointer moves
 * horizontally. Vertical grain uses a vertical band instead.
 */
export function GrainLight({
  image,
  alt,
  angle = 90,
  className,
  imgClassName,
  priority = false,
}: {
  image: string;
  alt: string;
  /** 90 = grain runs horizontally, 0 = vertically. */
  angle?: number;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(0.5);
  const [active, setActive] = useState(false);
  const [interactive, setInteractive] = useState(false);

  useEffect(() => {
    setInteractive(
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
        !window.matchMedia("(pointer: coarse)").matches,
    );
  }, []);

  useEffect(() => {
    if (!interactive) return;
    const node = ref.current;
    if (!node) return;
    let frame = 0;
    const move = (event: PointerEvent) => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const rect = node.getBoundingClientRect();
        const value =
          angle === 0
            ? (event.clientY - rect.top) / rect.height
            : (event.clientX - rect.left) / rect.width;
        setPos(Math.min(1, Math.max(0, value)));
      });
    };
    const enter = () => setActive(true);
    const leave = () => {
      setActive(false);
      setPos(0.5);
    };
    node.addEventListener("pointermove", move);
    node.addEventListener("pointerenter", enter);
    node.addEventListener("pointerleave", leave);
    return () => {
      node.removeEventListener("pointermove", move);
      node.removeEventListener("pointerenter", enter);
      node.removeEventListener("pointerleave", leave);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [interactive, angle]);

  const stop = `${pos * 100}%`;
  const direction = angle === 0 ? "to bottom" : angle === 45 ? "135deg" : "to right";

  return (
    <div ref={ref} className={cn("relative overflow-hidden border border-border/70", className)}>
      <img
        src={image}
        alt={alt}
        {...(priority ? {} : { loading: "lazy" as const })}
        decoding="async"
        className={cn("block h-full w-full object-cover", imgClassName)}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 transition-opacity duration-700"
        style={{
          opacity: active ? 1 : 0.35,
          mixBlendMode: "screen",
          background: `linear-gradient(${direction}, transparent, transparent calc(${stop} - 16%), rgba(255,255,255,0.34) ${stop}, transparent calc(${stop} + 16%), transparent)`,
        }}
      />
    </div>
  );
}
