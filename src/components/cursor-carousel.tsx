import { AnimatePresence, motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef, useState } from "react";

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

export const CURSOR_CAROUSEL_CONFIG = {
  CARD_WIDTH: 320,
  CARD_HEIGHT: 440,
  CURVE_WIDTH: 0.86,
  CURVE_HEIGHT: 0.18,
  ROTATION_AMOUNT: 10,
  SCALE_RANGE: 0.16,
  MOUSE_SENSITIVITY: 1,
  SPRING_STIFFNESS: 120,
  SPRING_DAMPING: 20,
  SPRING_MASS: 0.65,
};

export function CursorCarousel({
  cards,
  cardWidth = CURSOR_CAROUSEL_CONFIG.CARD_WIDTH,
  cardHeight = CURSOR_CAROUSEL_CONFIG.CARD_HEIGHT,
  curveWidth = CURSOR_CAROUSEL_CONFIG.CURVE_WIDTH,
  curveHeight = CURSOR_CAROUSEL_CONFIG.CURVE_HEIGHT,
  sensitivity = CURSOR_CAROUSEL_CONFIG.MOUSE_SENSITIVITY,
  spring = {
    stiffness: CURSOR_CAROUSEL_CONFIG.SPRING_STIFFNESS,
    damping: CURSOR_CAROUSEL_CONFIG.SPRING_DAMPING,
    mass: CURSOR_CAROUSEL_CONFIG.SPRING_MASS,
  },
  className = "",
}: CursorCarouselProps) {
  const [active, setActive] = useState(Math.floor(cards.length / 2));
  const [dragging, setDragging] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const dragStart = useRef({ x: 0, active: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cursorX = useSpring(mouseX, { stiffness: 420, damping: 32, mass: 0.3 });
  const cursorY = useSpring(mouseY, { stiffness: 420, damping: 32, mass: 0.3 });

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const visibleCards = cards.slice(0, 7);
  const setPointer = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!rootRef.current || reducedMotion || event.pointerType === "touch") return;
    const rect = rootRef.current.getBoundingClientRect();
    const nx = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const ny = ((event.clientY - rect.top) / rect.height) * 2 - 1;
    mouseX.set(event.clientX - rect.left);
    mouseY.set(event.clientY - rect.top);
    rootRef.current.style.setProperty("--mx", String(Math.max(-1, Math.min(1, nx)) * sensitivity));
    rootRef.current.style.setProperty("--my", String(Math.max(-1, Math.min(1, ny)) * sensitivity));
  };
  const step = (direction: number) => setActive((value) => Math.max(0, Math.min(visibleCards.length - 1, value + direction)));
  const down = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "touch" && event.button !== 0) return;
    dragStart.current = { x: event.clientX, active };
    setDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };
  const up = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging) return;
    const delta = event.clientX - dragStart.current.x;
    if (Math.abs(delta) > 45) setActive(Math.max(0, Math.min(visibleCards.length - 1, dragStart.current.active + (delta < 0 ? 1 : -1))));
    setDragging(false);
  };

  return (
    <section
      ref={rootRef}
      className={`relative h-[min(760px,82svh)] min-h-[620px] w-full overflow-hidden select-none touch-pan-y bg-[#0b0b0a] ${className}`}
      onPointerMove={setPointer}
      onPointerEnter={() => setCursorVisible(true)}
      onPointerLeave={() => { setCursorVisible(false); mouseX.set(0); mouseY.set(0); rootRef.current?.style.setProperty("--mx", "0"); rootRef.current?.style.setProperty("--my", "0"); }}
      onPointerDown={down}
      onPointerUp={up}
      onPointerCancel={() => setDragging(false)}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(255,255,255,.09),transparent_34%),linear-gradient(115deg,#080807,#1b1916_48%,#090908)]" />
      <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:80px_80px]" />
      <div className="pointer-events-none absolute inset-x-0 top-8 z-30 mx-auto max-w-6xl px-6 md:px-10">
        <p className="mb-4 text-[10px] uppercase tracking-[.28em] text-white/45">Interactive component / 01</p>
        <div className="flex items-end justify-between gap-8">
          <h1 className="font-serif text-5xl leading-[.9] tracking-[-.045em] text-white sm:text-6xl md:text-8xl">Move through<br />the work.</h1>
          <p className="hidden max-w-xs pb-1 text-right text-xs leading-5 text-white/45 md:block">Move your cursor across the field or drag the cards. The group follows an invisible spatial curve.</p>
        </div>
      </div>

      <div className="absolute inset-0 top-24 flex items-center justify-center [perspective:1400px]">
        {visibleCards.map((card, index) => (
          <CarouselCard key={`${card.title}-${index}`} card={card} index={index} active={active} cardWidth={cardWidth} cardHeight={cardHeight} curveWidth={curveWidth} curveHeight={curveHeight} reducedMotion={reducedMotion} spring={spring} />
        ))}
      </div>

      <div className="absolute inset-x-0 bottom-8 z-40 mx-auto flex max-w-6xl items-end justify-between px-6 md:px-10">
        <div className="flex gap-2">
          <button aria-label="Previous card" onClick={(e) => { e.stopPropagation(); step(-1); }} disabled={active === 0} className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white transition hover:border-white/50 disabled:opacity-25">←</button>
          <button aria-label="Next card" onClick={(e) => { e.stopPropagation(); step(1); }} disabled={active === visibleCards.length - 1} className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white transition hover:border-white/50 disabled:opacity-25">→</button>
        </div>
        <div className="flex items-center gap-2" aria-label="Carousel pagination">
          {visibleCards.map((_, index) => <button key={index} aria-label={`Go to card ${index + 1}`} onClick={(e) => { e.stopPropagation(); setActive(index); }} className={`h-1 transition-all ${index === active ? "w-8 bg-white" : "w-2 bg-white/25"}`} />)}
        </div>
        <span className="hidden text-[9px] uppercase tracking-[.24em] text-white/40 sm:block">{dragging ? "Release" : "Drag / Explore"}</span>
      </div>

      <AnimatePresence>
        {cursorVisible && !reducedMotion && <motion.div className="pointer-events-none absolute z-[100] hidden h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/35 bg-black/25 text-[8px] uppercase tracking-[.18em] text-white backdrop-blur-sm md:flex" style={{ left: cursorX, top: cursorY }} animate={{ scale: dragging ? 0.8 : 1 }}>{dragging ? "Move" : "Explore"}</motion.div>}
      </AnimatePresence>
    </section>
  );
}

type CardProps = { card: CursorCarouselCard; index: number; active: number; cardWidth: number; cardHeight: number; curveWidth: number; curveHeight: number; reducedMotion: boolean; spring: { stiffness: number; damping: number; mass?: number } };

function CarouselCard({ card, index, active, cardWidth, cardHeight, curveWidth, curveHeight, reducedMotion, spring }: CardProps) {
  const offset = Math.max(-3, Math.min(3, index - active));
  const distance = Math.abs(offset);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, spring);
  const sy = useSpring(y, spring);
  const curveX = offset * cardWidth * curveWidth;
  const curveY = (offset * offset - 2.8) * cardHeight * curveHeight;
  const scale = 1 - Math.min(0.28, distance * CURSOR_CAROUSEL_CONFIG.SCALE_RANGE);
  const opacity = 1 - Math.min(0.48, distance * 0.14);
  const rotation = offset * CURSOR_CAROUSEL_CONFIG.ROTATION_AMOUNT;

  useEffect(() => {
    const host = document.querySelector("[style*='--mx']") as HTMLElement | null;
    if (reducedMotion) { x.set(curveX); y.set(curveY); return; }
    let frame = 0;
    const tick = () => {
      const mx = Number(host?.style.getPropertyValue("--mx") || 0);
      const my = Number(host?.style.getPropertyValue("--my") || 0);
      x.set(curveX + mx * (34 + distance * 13) + Math.sin(offset * 0.8) * mx * 20);
      y.set(curveY + my * (12 + distance * 8));
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [curveX, curveY, distance, offset, reducedMotion, x, y]);

  return (
    <motion.article
      className="absolute overflow-hidden rounded-[2px] border border-white/12 bg-black shadow-[0_35px_90px_rgba(0,0,0,.48)]"
      style={{ width: `min(${cardWidth}px,72vw)`, height: `min(${cardHeight}px,62svh)`, x: sx, y: sy, scale, rotate: rotation, opacity, zIndex: 50 - distance * 5 }}
      whileHover={{ scale: Math.min(1.035, scale + 0.035) }}
      transition={{ type: "spring", ...spring }}
    >
      <img src={card.image} alt={card.title} draggable={false} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-black/5" />
      <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
        <p className="mb-3 text-[9px] uppercase tracking-[.26em] text-white/55">{card.category}</p>
        <h2 className="font-serif text-3xl leading-none tracking-[-.025em] text-white md:text-4xl">{card.title}</h2>
        {card.description && <p className="mt-3 max-w-[250px] text-xs leading-5 text-white/65">{card.description}</p>}
      </div>
      <div className="absolute right-5 top-5 text-[9px] tracking-[.2em] text-white/50">{String(index + 1).padStart(2, "0")}</div>
    </motion.article>
  );
}
