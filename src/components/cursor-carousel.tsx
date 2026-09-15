import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";

export type CursorCarouselCard = {
  image: string;
  category: string;
  title: string;
  description?: string;
};

export type CursorCarouselProps = {
  cards: CursorCarouselCard[];
  cardWidth?: number;
  cardHeight?: number;
  curveWidth?: number;
  curveHeight?: number;
  sensitivity?: number;
  spring?: { stiffness: number; damping: number; mass?: number };
  className?: string;
};

const DEFAULTS = {
  CARD_WIDTH: 320,
  CARD_HEIGHT: 440,
  CURVE_WIDTH: 0.86,
  CURVE_HEIGHT: 0.18,
  DEPTH: 1,
  ROTATION_AMOUNT: 10,
  SCALE_RANGE: 0.16,
  MOUSE_SENSITIVITY: 1,
  SPRING_STIFFNESS: 120,
  SPRING_DAMPING: 20,
  SPRING_MASS: 0.65,
};

export function CursorCarousel({
  cards,
  cardWidth = DEFAULTS.CARD_WIDTH,
  cardHeight = DEFAULTS.CARD_HEIGHT,
  curveWidth = DEFAULTS.CURVE_WIDTH,
  curveHeight = DEFAULTS.CURVE_HEIGHT,
  sensitivity = DEFAULTS.MOUSE_SENSITIVITY,
  spring = {
    stiffness: DEFAULTS.SPRING_STIFFNESS,
    damping: DEFAULTS.SPRING_DAMPING,
    mass: DEFAULTS.SPRING_MASS,
  },
  className = "",
}: CursorCarouselProps) {
  const [active, setActive] = useState(Math.floor(cards.length / 2));
  const [dragging, setDragging] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const dragStart = useRef({ x: 0, active: 0 });

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, spring);
  const y = useSpring(rawY, spring);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const visibleCards = useMemo(() => cards.slice(0, 7), [cards]);

  const updatePointer = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!rootRef.current || reducedMotion || event.pointerType === "touch") return;
    const rect = rootRef.current.getBoundingClientRect();
    const nx = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const ny = ((event.clientY - rect.top) / rect.height) * 2 - 1;
    rawX.set(Math.max(-1, Math.min(1, nx)) * sensitivity);
    rawY.set(Math.max(-1, Math.min(1, ny)) * sensitivity);
  };

  const step = (direction: number) => {
    setActive((current) => {
      const next = current + direction;
      return Math.max(0, Math.min(visibleCards.length - 1, next));
    });
  };

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "touch" && event.button !== 0) return;
    dragStart.current = { x: event.clientX, active };
    setDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onPointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging) return;
    const distance = event.clientX - dragStart.current.x;
    if (Math.abs(distance) > 45) {
      const direction = distance < 0 ? 1 : -1;
      setActive(Math.max(0, Math.min(visibleCards.length - 1, dragStart.current.active + direction)));
    }
    setDragging(false);
  };

  return (
    <section
      ref={rootRef}
      className={`relative h-[min(760px,82svh)] min-h-[620px] w-full overflow-hidden select-none touch-pan-y ${className}`}
      onPointerMove={updatePointer}
      onPointerEnter={() => setCursorVisible(true)}
      onPointerLeave={() => {
        setCursorVisible(false);
        rawX.set(0);
        rawY.set(0);
      }}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerCancel={() => setDragging(false)}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,.08),transparent_35%),linear-gradient(115deg,#0b0b0a,#171513_48%,#0b0b0a)]" />
      <div className="absolute inset-x-0 top-8 z-30 mx-auto max-w-6xl px-6 md:px-10 pointer-events-none">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.28em] text-white/45">Interactive component / 01</p>
            <h1 className="max-w-2xl font-serif text-5xl leading-[.9] tracking-[-.045em] text-white sm:text-6xl md:text-8xl">Move through<br />the work.</h1>
          </div>
          <p className="hidden max-w-xs pb-1 text-right text-xs leading-5 text-white/45 md:block">Move your cursor across the field or drag the cards. Each image follows a different point on the same invisible spatial curve.</p>
        </div>
      </div>

      <div className="absolute inset-0 top-28 flex items-center justify-center [perspective:1400px]">
        {visibleCards.map((card, index) => {
          const offset = index - active;
          const normalized = Math.max(-3, Math.min(3, offset));
          const distance = Math.abs(normalized);
          const curveX = normalized * cardWidth * (0.82 + distance * 0.035);
          const curveY = (normalized * normalized - 2.8) * cardHeight * curveHeight;
          const pointerX = reducedMotion ? 0 : x.get();
          const pointerY = reducedMotion ? 0 : y.get();
          const dynamicX = curveX + pointerX * (38 + distance * 14) + Math.sin(normalized * 0.8) * pointerX * 22;
          const dynamicY = curveY + pointerY * (12 + distance * 8);
          const scale = 1 - Math.min(0.28, distance * DEFAULTS.SCALE_RANGE);
          const rotate = normalized * DEFAULTS.ROTATION_AMOUNT + pointerX * normalized * 2.2;
          const opacity = 1 - Math.min(0.48, distance * 0.14);
          const z = 50 - distance * 5;

          return (
            <motion.article
              key={`${card.title}-${index}`}
              className="absolute overflow-hidden rounded-[2px] border border-white/12 bg-black shadow-[0_35px_90px_rgba(0,0,0,.42)]"
              style={{
                width: `min(${cardWidth}px, 72vw)`,
                height: `min(${cardHeight}px, 62svh)`,
                x: dynamicX,
                y: dynamicY,
                scale,
                rotate,
                opacity,
                zIndex: z,
              }}
              animate={reducedMotion ? { x: curveX, y: curveY, scale, rotate, opacity } : undefined}
              transition={{ type: "spring", stiffness: spring.stiffness, damping: spring.damping, mass: spring.mass }}
              whileHover={{ scale: Math.min(1.035, scale + 0.035) }}
            >
              <img src={card.image} alt="" draggable={false} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/12 to-black/5" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                <p className="mb-3 text-[9px] uppercase tracking-[0.26em] text-white/55">{card.category}</p>
                <h2 className="font-serif text-3xl leading-none tracking-[-.025em] text-white md:text-4xl">{card.title}</h2>
                {card.description && <p className="mt-3 max-w-[250px] text-xs leading-5 text-white/65">{card.description}</p>}
              </div>
              <div className="absolute right-5 top-5 text-[9px] tracking-[.2em] text-white/50">{String(index + 1).padStart(2, "0")}</div>
            </motion.article>
          );
        })}
      </div>

      <div className="absolute inset-x-0 bottom-8 z-40 mx-auto flex max-w-6xl items-end justify-between px-6 md:px-10">
        <div className="flex items-center gap-2">
          <button aria-label="Previous card" onClick={(event) => { event.stopPropagation(); step(-1); }} disabled={active === 0} className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white transition hover:border-white/45 disabled:opacity-25">←</button>
          <button aria-label="Next card" onClick={(event) => { event.stopPropagation(); step(1); }} disabled={active === visibleCards.length - 1} className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white transition hover:border-white/45 disabled:opacity-25">→</button>
        </div>
        <div className="flex items-center gap-2" aria-label="Carousel pagination">
          {visibleCards.map((_, index) => <button key={index} aria-label={`Go to card ${index + 1}`} onClick={(event) => { event.stopPropagation(); setActive(index); }} className={`h-1 transition-all ${index === active ? "w-8 bg-white" : "w-2 bg-white/25"}`} />)}
        </div>
        <div className="hidden items-center gap-3 text-[9px] uppercase tracking-[.24em] text-white/40 sm:flex">
          <span className={`h-2 w-2 rounded-full border border-white/35 ${cursorVisible ? "bg-white" : "bg-transparent"}`} />
          {dragging ? "Release" : "Drag / Explore"}
        </div>
      </div>

      <AnimatePresence>
        {cursorVisible && !reducedMotion && (
          <motion.div
            className="pointer-events-none absolute z-[100] hidden h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/35 bg-black/20 text-[8px] uppercase tracking-[.18em] text-white backdrop-blur-sm md:flex"
            style={{ left: useTransform(x, (value) => `${50 + value * 0}%`), top: useTransform(y, (value) => `${50 + value * 0}%`) }}
            animate={{ scale: dragging ? 0.8 : 1 }}
          >
            {dragging ? "Move" : "Explore"}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
