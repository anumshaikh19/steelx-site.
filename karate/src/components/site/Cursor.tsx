import { useEffect, useRef, useState } from "react";

type Mode = "default" | "link" | "hero";

/** Brand cursor: gold dot, stance glyph on links, "ENTER DOJO" ring on the hero. */
export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<Mode>("default");
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine) return;
    setEnabled(true);
    document.documentElement.classList.add("no-native-cursor");

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const soft = { ...target };
    let raf = 0;

    const move = (e: PointerEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      const el = e.target as HTMLElement | null;
      if (el?.closest("[data-cursor='hero']")) setMode("hero");
      else if (el?.closest("a,button,[data-cursor='link']")) setMode("link");
      else setMode("default");
    };

    const tick = () => {
      const ease = still ? 1 : 0.18;
      soft.x += (target.x - soft.x) * ease;
      soft.y += (target.y - soft.y) * ease;
      if (dotRef.current)
        dotRef.current.style.transform = `translate3d(${target.x}px,${target.y}px,0) translate(-50%,-50%)`;
      if (ringRef.current)
        ringRef.current.style.transform = `translate3d(${soft.x}px,${soft.y}px,0) translate(-50%,-50%)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const click = (e: PointerEvent) => {
      const id = Date.now() + Math.random();
      setRipples((r) => [...r, { id, x: e.clientX, y: e.clientY }]);
      window.setTimeout(() => setRipples((r) => r.filter((p) => p.id !== id)), 620);
    };

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerdown", click);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", click);
      document.documentElement.classList.remove("no-native-cursor");
    };
  }, []);

  if (!enabled) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[100] hidden md:block">
      <div
        ref={dotRef}
        className="absolute left-0 top-0 h-1.5 w-1.5 rounded-full bg-gold transition-[width,height] duration-200"
        style={mode === "hero" ? { width: 4, height: 4 } : undefined}
      />
      <div
        ref={ringRef}
        className="absolute left-0 top-0 flex items-center justify-center rounded-full border border-gold/60 backdrop-blur-[1px] transition-all duration-300 ease-out"
        style={{
          width: mode === "hero" ? 104 : mode === "link" ? 46 : 26,
          height: mode === "hero" ? 104 : mode === "link" ? 46 : 26,
          backgroundColor: mode === "hero" ? "rgba(10,10,9,0.42)" : "transparent",
          borderColor: mode === "default" ? "rgba(200,160,70,0.35)" : "rgba(217,178,84,0.85)",
        }}
      >
        {mode === "hero" && (
          <span className="kicker text-[8px] text-gold" style={{ letterSpacing: "0.22em" }}>
            ENTER DOJO
          </span>
        )}
        {mode === "link" && <StanceGlyph />}
      </div>

      {ripples.map((r) => (
        <span
          key={r.id}
          className="absolute rounded-full border border-gold/70"
          style={{
            left: r.x,
            top: r.y,
            width: 10,
            height: 10,
            transform: "translate(-50%,-50%)",
            animation: "tw-ping 0.6s cubic-bezier(0,0,0.2,1) forwards",
          }}
        />
      ))}
      <style>{`@keyframes tw-ping{from{opacity:.9;transform:translate(-50%,-50%) scale(.4)}to{opacity:0;transform:translate(-50%,-50%) scale(7)}}`}</style>
    </div>
  );
}

function StanceGlyph() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gold">
      <circle cx="12" cy="4.2" r="2" strokeWidth="1.2" />
      <path d="M12 6.4v6M12 8.6l7 1.6M12 9.6l-4 1.4M12 12.4l-4 7M12 12.4l4.5 7" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}
