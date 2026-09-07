import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";
import { useInView } from "@/components/reveal";

const reduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ── Animated number counter ─────────────────────────────────── */
export function Counter({
  to,
  suffix = "",
  prefix = "",
  duration = 1600,
  className,
}: {
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string | undefined;
}) {
  const { ref, inView } = useInView<HTMLSpanElement>(0.4);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduced()) {
      setValue(to);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}

/* ── Magnetic button wrapper ─────────────────────────────────── */
export function Magnetic({
  children,
  strength = 0.28,
  className,
}: {
  children: ReactNode;
  strength?: number;
  className?: string | undefined;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);

  const onMove = useCallback(
    (e: React.MouseEvent) => {
      const el = ref.current;
      if (!el || reduced()) return;
      const r = el.getBoundingClientRect();
      const x = (e.clientX - (r.left + r.width / 2)) * strength;
      const y = (e.clientY - (r.top + r.height / 2)) * strength;
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    },
    [strength],
  );

  const reset = useCallback(() => {
    if (ref.current) ref.current.style.transform = "translate3d(0,0,0)";
  }, []);

  return (
    <span
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className={cn("inline-block transition-transform duration-500 ease-out will-change-transform", className)}
    >
      {children}
    </span>
  );
}

/* ── Parallax image container ────────────────────────────────── */
export function Parallax({
  children,
  amount = 60,
  className,
}: {
  children: ReactNode;
  amount?: number;
  className?: string | undefined;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (reduced()) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = ref.current;
      const inner = innerRef.current;
      if (!el || !inner) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      if (r.bottom < -200 || r.top > vh + 200) return;
      const progress = (r.top + r.height / 2 - vh / 2) / vh;
      inner.style.transform = `translate3d(0, ${(-progress * amount).toFixed(2)}px, 0) scale(1.14)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [amount]);

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <div ref={innerRef} className="h-full w-full will-change-transform">
        {children}
      </div>
    </div>
  );
}

/* ── Clip-path image reveal ──────────────────────────────────── */
export function ClipReveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string | undefined;
}) {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);
  const style: CSSProperties = {
    transitionDelay: `${delay}ms`,
    clipPath: inView ? "inset(0% 0 0 0)" : "inset(100% 0 0 0)",
  };
  // The clip-path lives on an inner element: a fully clipped target reports a
  // zero intersection ratio, so the observer must watch an unclipped wrapper.
  return (
    <div ref={ref} className={className}>
      <div
        style={style}
        className="h-full w-full motion-safe:transition-[clip-path] motion-safe:duration-[1200ms] motion-safe:ease-[cubic-bezier(0.16,1,0.3,1)]"
      >
        {children}
      </div>
    </div>
  );
}


/* ── Horizontal drag / scroll rail ───────────────────────────── */
export function HorizontalRail({
  children,
  className,
  itemClassName,
}: {
  children: ReactNode[];
  className?: string | undefined;
  itemClassName?: string | undefined;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const drag = useRef({ active: false, x: 0, left: 0 });

  const onDown = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    drag.current = { active: true, x: e.clientX, left: el.scrollLeft };
  };
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el || !drag.current.active) return;
    el.scrollLeft = drag.current.left - (e.clientX - drag.current.x);
  };
  const end = () => {
    drag.current.active = false;
  };

  const nudge = (dir: number) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.8, 720), behavior: "smooth" });
  };

  return (
    <div className={cn("relative", className)}>
      <div
        ref={ref}
        onMouseDown={onDown}
        onMouseMove={onMove}
        onMouseUp={end}
        onMouseLeave={end}
        className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 select-none"
      >
        {children.map((child, i) => (
          <div key={i} className={cn("shrink-0 snap-start", itemClassName)}>
            {child}
          </div>
        ))}
      </div>
      <div className="mt-6 flex items-center gap-3">
        <button
          type="button"
          onClick={() => nudge(-1)}
          aria-label="Scroll left"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-champagne hover:text-champagne"
        >
          ←
        </button>
        <button
          type="button"
          onClick={() => nudge(1)}
          aria-label="Scroll right"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-champagne hover:text-champagne"
        >
          →
        </button>
        <span className="ml-2 text-[0.62rem] uppercase tracking-[0.28em] text-muted-foreground">
          Drag / scroll
        </span>
      </div>
    </div>
  );
}

/* ── Before / after drag slider ──────────────────────────────── */
export function BeforeAfter({
  before,
  after,
  beforeLabel,
  afterLabel,
  className,
}: {
  before: { src: string; alt: string };
  after: { src: string; alt: string };
  beforeLabel: string;
  afterLabel: string;
  className?: string | undefined;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);

  const set = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)));
  };

  return (
    <div
      ref={ref}
      className={cn("relative aspect-[16/10] w-full overflow-hidden border border-border select-none", className)}
      onMouseDown={(e) => {
        dragging.current = true;
        set(e.clientX);
      }}
      onMouseMove={(e) => dragging.current && set(e.clientX)}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onTouchMove={(e) => e.touches[0] && set(e.touches[0].clientX)}
    >
      <img src={before.src} alt={before.alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <img
          src={after.src}
          alt={after.alt}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ width: ref.current ? `${ref.current.clientWidth}px` : "100%", maxWidth: "none" }}
        />
        <span className="absolute bottom-4 left-4 bg-background/70 px-3 py-1.5 text-[0.6rem] uppercase tracking-[0.28em] text-champagne backdrop-blur">
          {afterLabel}
        </span>
      </div>
      <span className="absolute bottom-4 right-4 bg-background/70 px-3 py-1.5 text-[0.6rem] uppercase tracking-[0.28em] text-muted-foreground backdrop-blur">
        {beforeLabel}
      </span>
      <div
        className="absolute inset-y-0 w-px bg-champagne"
        style={{ left: `${pos}%` }}
        aria-hidden="true"
      >
        <span className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-champagne bg-background/80 text-xs text-champagne backdrop-blur">
          ⇄
        </span>
      </div>
      <label className="sr-only" htmlFor="ba-range">
        Reveal PVD finish
      </label>
      <input
        id="ba-range"
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        style={{ accentColor: "transparent" }}
        className="absolute bottom-0 left-0 h-1 w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}

/* ── Scroll progress bar ─────────────────────────────────────── */
export function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setP(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-px bg-transparent">
      <div className="h-full bg-champagne-gradient transition-[width] duration-150" style={{ width: `${p}%` }} />
    </div>
  );
}

/* ── Sticky scroll storytelling ──────────────────────────────── */
export function StickyStory({
  steps,
}: {
  steps: { id: string; index: string; title: string; text: string; image: string; alt: string }[];
}) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const i = refs.current.indexOf(e.target as HTMLDivElement);
            if (i >= 0) setActive(i);
          }
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    refs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, [steps.length]);

  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
      <div>
        {steps.map((s, i) => (
          <div
            key={s.id}
            ref={(el) => {
              refs.current[i] = el;
            }}
            className={cn(
              "border-l py-16 pl-6 transition-all duration-700 lg:py-24 lg:pl-10",
              active === i ? "border-champagne opacity-100" : "border-border opacity-40",
            )}
          >
            <p className="text-[0.62rem] uppercase tracking-[0.32em] text-champagne">{s.index}</p>
            <h3 className="mt-4 font-display text-3xl text-foreground lg:text-5xl">{s.title}</h3>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">{s.text}</p>
          </div>
        ))}
      </div>
      <div className="hidden lg:block">
        <div className="sticky top-24 h-[70vh] overflow-hidden border border-border metal-grain">
          {steps.map((s, i) => (
            <img
              key={s.id}
              src={s.image}
              alt={s.alt}
              loading="lazy"
              className={cn(
                "absolute inset-0 h-full w-full object-cover transition-all duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
                active === i ? "scale-100 opacity-100" : "scale-105 opacity-0",
              )}
            />
          ))}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-background to-transparent p-6">
            <span className="text-[0.62rem] uppercase tracking-[0.3em] text-champagne">
              {steps[active]?.index} — {steps[active]?.title}
            </span>
            <span className="text-[0.62rem] tabular-nums text-muted-foreground">
              {String(active + 1).padStart(2, "0")} / {String(steps.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Marquee ─────────────────────────────────────────────────── */
export function Marquee({ items, className }: { items: string[]; className?: string | undefined }) {
  return (
    <div className={cn("relative overflow-hidden border-y border-border py-5", className)}>
      <div
        className="flex w-max gap-12 motion-safe:animate-[marquee-x_38s_linear_infinite]"
        aria-hidden="true"
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="whitespace-nowrap text-[0.68rem] uppercase tracking-[0.34em] text-muted-foreground"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
