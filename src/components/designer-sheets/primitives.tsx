import { useEffect, useRef, useState, type ReactNode } from "react";

import { cn } from "@/lib/utils";

/** Page-local reveal. Clip-path + rise, observed once, honours reduced motion. */
export function DsReveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "figure" | "header";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      setShown(true);
      observer.disconnect();
      window.removeEventListener("scroll", check);
    };
    const check = () => {
      const rect = node.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) finish();
    };
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) finish();
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(node);
    // Anchor jumps can settle without a fresh observer callback.
    window.addEventListener("scroll", check, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", check);
    };
  }, []);

  // The observed element must stay unclipped — clip-path shrinks the
  // intersection rectangle, which would stop the observer from ever firing.
  return (
    <Tag ref={ref as never} className={className}>
      <div data-shown={shown ? "true" : "false"} style={{ transitionDelay: `${delay}ms` }} className="ds-reveal">
        {children}
      </div>
    </Tag>
  );
}

/** Tracks how far a section has travelled through the viewport (0 → 1). */
export function useSectionProgress<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = node.getBoundingClientRect();
      const total = rect.height + window.innerHeight;
      const value = (window.innerHeight - rect.top) / total;
      setProgress(Math.min(1, Math.max(0, value)));
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return { ref, progress };
}

export type SheetSurface = {
  image: string;
  alt: string;
  roughness: number;
  tint?: string;
  glow?: string;
};

/**
 * Page-local CSS-3D material sheet. A thin, slightly curved metallic plane
 * whose specular behaviour changes with the chosen surface. Image based —
 * no WebGL, so it stays cheap on mobile.
 */
export function DsSheet({ surface, className }: { surface: SheetSurface; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const node = ref.current;
    if (!node) return;
    const onMove = (event: PointerEvent) => {
      const rect = node.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width - 0.5;
      const py = (event.clientY - rect.top) / rect.height - 0.5;
      setTilt({ x: -py * 9, y: px * 13 });
    };
    const onLeave = () => setTilt({ x: 0, y: 0 });
    node.addEventListener("pointermove", onMove);
    node.addEventListener("pointerleave", onLeave);
    return () => {
      node.removeEventListener("pointermove", onMove);
      node.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  const specular = 0.55 - surface.roughness * 0.45;

  return (
    <div ref={ref} className={cn("[perspective:1600px]", className)}>
      <div
        className="relative h-full w-full overflow-hidden transition-transform duration-[1200ms]"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transformStyle: "preserve-3d",
          transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
          boxShadow: `0 40px 120px -40px rgba(0,0,0,${0.5 + specular * 0.4})`,
        }}
      >
        <img
          src={surface.image}
          alt={surface.alt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
          style={{ filter: `contrast(${1 + specular * 0.35}) saturate(${1 - surface.roughness * 0.35})` }}
        />
        {surface.tint ? (
          <span
            aria-hidden
            className="absolute inset-0 transition-[background] duration-[1400ms]"
            style={{ background: surface.tint, mixBlendMode: "multiply" }}
          />
        ) : null}
        <span
          aria-hidden
          className="absolute inset-0"
          style={{
            background: `linear-gradient(115deg, rgba(255,255,255,${specular * 0.5}) 0%, transparent 32%, transparent 66%, rgba(255,255,255,${specular * 0.28}) 100%)`,
          }}
        />
        <span
          aria-hidden
          className="absolute inset-0"
          style={{
            background: `radial-gradient(120% 90% at 50% 40%, transparent 45%, rgba(0,0,0,${0.25 + surface.roughness * 0.2}))`,
          }}
        />
        {surface.glow ? (
          <span
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-1/3 transition-[background] duration-[1400ms]"
            style={{ background: `linear-gradient(to top, ${surface.glow}, transparent)` }}
          />
        ) : null}
      </div>
    </div>
  );
}
