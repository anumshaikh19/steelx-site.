import { useEffect, useRef, useState } from "react";

/**
 * Desktop-only reflective cursor.
 * Any element with data-cursor="LABEL" swaps the dot for a metal disc + label.
 */
export function MetalCursor() {
  const dot = useRef<HTMLDivElement | null>(null);
  const [label, setLabel] = useState<string | null>(null);
  const [down, setDown] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    document.documentElement.classList.add("has-metal-cursor");
    let raf = 0;
    let tx = 0;
    let ty = 0;
    let x = 0;
    let y = 0;

    const loop = () => {
      x += (tx - x) * 0.2;
      y += (ty - y) * 0.2;
      if (dot.current) dot.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      setVisible(true);
      const el = (e.target as HTMLElement | null)?.closest?.("[data-cursor]");
      setLabel(el ? el.getAttribute("data-cursor") : null);
    };
    const onDown = () => setDown(true);
    const onUp = () => setDown(false);
    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.documentElement.classList.remove("has-metal-cursor");
    };
  }, []);

  return (
    <div
      ref={dot}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden lg:block"
      style={{ opacity: visible ? 1 : 0 }}
    >
      <div
        className="flex items-center justify-center rounded-full bg-steel-gradient text-[0.55rem] font-semibold uppercase tracking-[0.2em] text-metal-black shadow-[0_0_24px_-6px_oklch(0.9_0_0_/_50%)] transition-all duration-300 ease-out"
        style={{
          width: label ? 108 : down ? 10 : 14,
          height: label ? 108 : down ? 10 : 14,
        }}
      >
        {label ? <span className="px-2 text-center leading-tight">{label}</span> : null}
      </div>
    </div>
  );
}
