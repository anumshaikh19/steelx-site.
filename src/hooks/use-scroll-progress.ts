import { useEffect, useRef, useState, type RefObject } from "react";

/**
 * Progress (0 → 1) of an element travelling through the viewport.
 * 0 = element top hits viewport top, 1 = element bottom hits viewport bottom.
 * Returns 0 permanently when the user prefers reduced motion.
 */
export function useScrollProgress<T extends HTMLElement>(): {
  ref: RefObject<T | null>;
  progress: number;
  reduced: boolean;
} {
  const ref = useRef<T | null>(null);
  const [progress, setProgress] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    if (mq.matches) return;

    let frame = 0;
    const measure = () => {
      frame = 0;
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const span = Math.max(1, r.height - window.innerHeight);
      const p = Math.min(1, Math.max(0, -r.top / span));
      setProgress(p);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return { ref, progress, reduced };
}

/** Maps a 0-1 progress value onto a stepped index of `count` stages. */
export function stageIndex(progress: number, count: number) {
  return Math.min(count - 1, Math.max(0, Math.floor(progress * count * 0.999)));
}

/**
 * Continuous version of `stageIndex`: returns the current stage plus a 0-1
 * eased blend into the next one, so a value can morph rather than switch.
 */
export function stageBlend(progress: number, count: number) {
  const f = Math.min(count - 1.0001, Math.max(0, progress * (count - 1)));
  const index = Math.floor(f);
  const raw = f - index;
  // ease-in-out so each finish holds before it changes
  const mix = raw < 0.5 ? 2 * raw * raw : 1 - (-2 * raw + 2) ** 2 / 2;
  return { index, next: Math.min(count - 1, index + 1), mix };
}
