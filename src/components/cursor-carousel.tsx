import { AnimatePresence, motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useMemo, useState } from "react";

export type CursorCarouselCard = { image: string; category: string; title: string; description?: string };
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

export function CursorCarousel({ cards, cardWidth = 320, cardHeight = 440, curveWidth = 0.86, curveHeight = 0.18, sensitivity = 1, spring = { stiffness: 120, damping: 20, mass: 0.65 }, className = "" }: CursorCarouselProps) {
  const visibleCards = useMemo(() => cards.slice(0, 7), [cards]);
  const [cursorVisible, setCursorVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cursorX = useSpring(mouseX, { stiffness: 420, damping: 32, mass: 0.3 });
  const cursorY = useSpring(mouseY, { stiffness: 420, damping: 32, mass: 0.3 });

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update(); media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const onPointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (reducedMotion || event.pointerType === "touch") return;
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set(Math.max(-1, Math.min(1, ((event.clientX - rect.left) / rect.width) * 2 - 1)) * sensitivity);
    mouseY.set(Math.max(-1, Math.min(1, ((event.clientY - rect.top) / rect.height) * 2 - 1)) * sensitivity);
  };

  return <section className={`relative h-[min(760px,82svh)] min-h-[620px] w-full overflow-hidden select-none touch-none bg-[#0b0b0a] ${className}`} onPointerMove={onPointerMove} onPointerEnter={() => setCursorVisible(true)} onPointerLeave={() => { setCursorVisible(false); mouseX.set(0); mouseY.set(0); }} aria-label="Cursor controlled project carousel">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(255,255,255,.09),transparent_34%),linear-gradient(115deg,#080807,#1b1916_48%,#090908)]" />
    <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:80px_80px]" />
    <div className="pointer-events-none absolute inset-x-0 top-8 z-30 mx-auto max-w-6xl px-6 md:px-10">
      <p className="mb-4 text-[10px] uppercase tracking-[.28em] text-white/45">Interactive component / 01</p>
      <div className="flex items-end justify-between gap-8"><h1 className="font-serif text-5xl leading-[.9] tracking-[-.045em] text-white sm:text-6xl md:text-8xl">Move through<br />the work.</h1><p className="hidden max-w-xs pb-1 text-right text-xs leading-5 text-white/45 md:block">Move your cursor across the field. Every pixel of movement reshapes the composition.</p></div>
    </div>
    <div className="absolute inset-0 top-24 flex items-center justify-center [perspective:1400px]">
      {visibleCards.map((card, index) => <CarouselCard key={`${card.title}-${index}`} card={card} index={index} count={visibleCards.length} cardWidth={cardWidth} cardHeight={cardHeight} curveWidth={curveWidth} curveHeight={curveHeight} mouseX={mouseX} mouseY={mouseY} reducedMotion={reducedMotion} spring={spring} />)}
    </div>
    <div className="pointer-events-none absolute inset-x-0 bottom-8 z-40 mx-auto flex max-w-6xl justify-between px-6 md:px-10"><span className="text-[9px] uppercase tracking-[.24em] text-white/40">Cursor position controls depth</span><span className="hidden text-[9px] uppercase tracking-[.24em] text-white/40 sm:block">Move ← →</span></div>
    <AnimatePresence>{cursorVisible && !reducedMotion && <motion.div className="pointer-events-none absolute z-[100] hidden h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/35 bg-black/25 text-[8px] uppercase tracking-[.18em] text-white backdrop-blur-sm md:flex" style={{ left: cursorX, top: cursorY }} initial={{ opacity: 0, scale: .7 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .7 }}>Explore</motion.div>}</AnimatePresence>
  </section>;
}

type CardProps = { card: CursorCarouselCard; index: number; count: number; cardWidth: number; cardHeight: number; curveWidth: number; curveHeight: number; mouseX: ReturnType<typeof useMotionValue<number>>; mouseY: ReturnType<typeof useMotionValue<number>>; reducedMotion: boolean; spring: { stiffness: number; damping: number; mass?: number } };

function CarouselCard({ card, index, count, cardWidth, cardHeight, curveWidth, curveHeight, mouseX, mouseY, reducedMotion, spring }: CardProps) {
  const x = useMotionValue(0), y = useMotionValue(0), rotation = useMotionValue(0), scale = useMotionValue(.8), opacity = useMotionValue(.5);
  const sx = useSpring(x, spring), sy = useSpring(y, spring), sr = useSpring(rotation, spring), ss = useSpring(scale, spring), so = useSpring(opacity, spring);

  useEffect(() => {
    if (reducedMotion) return;
    let frame = 0;
    const tick = () => {
      const mx = mouseX.get(), my = mouseY.get();
      // Cursor X continuously becomes the focal card position. No active index,
      // click state, drag threshold, pagination, or snap is involved.
      const focal = (count - 1) / 2 + mx * ((count - 1) / 2);
      const offset = index - focal;
      const distance = Math.abs(offset);
      const normalized = Math.max(-1, Math.min(1, offset / Math.max(1, (count - 1) / 2)));
      x.set(offset * cardWidth * curveWidth + mx * (16 + Math.min(distance, 3) * 8));
      y.set((offset * offset - 2.8) * cardHeight * curveHeight + my * (10 + Math.min(distance, 3) * 6));
      rotation.set(normalized * CURSOR_CAROUSEL_CONFIG.ROTATION_AMOUNT);
      scale.set(1 - Math.min(.3, distance * CURSOR_CAROUSEL_CONFIG.SCALE_RANGE));
      opacity.set(1 - Math.min(.55, distance * .15));
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick); return () => cancelAnimationFrame(frame);
  }, [cardHeight, cardWidth, curveHeight, curveWidth, count, index, mouseX, mouseY, reducedMotion, rotation, scale, opacity, x, y]);

  useEffect(() => { if (!reducedMotion) return; const offset = index - (count - 1) / 2; x.set(offset * cardWidth * curveWidth); y.set((offset * offset - 2.8) * cardHeight * curveHeight); rotation.set(offset * CURSOR_CAROUSEL_CONFIG.ROTATION_AMOUNT); scale.set(1 - Math.min(.3, Math.abs(offset) * .16)); opacity.set(1 - Math.min(.55, Math.abs(offset) * .15)); }, [cardHeight, cardWidth, curveHeight, curveWidth, count, index, reducedMotion, rotation, scale, opacity, x, y]);

  return <motion.article className="absolute overflow-hidden rounded-[2px] border border-white/12 bg-black shadow-[0_35px_90px_rgba(0,0,0,.48)]" style={{ width: `min(${cardWidth}px,72vw)`, height: `min(${cardHeight}px,62svh)`, x: sx, y: sy, scale: ss, rotate: sr, opacity: so, zIndex: Math.round(100 - Math.abs(index - (count - 1) / 2) * 8) }}>
    <img src={card.image} alt={card.title} draggable={false} className="absolute inset-0 h-full w-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-black/5" />
    <div className="absolute inset-x-0 bottom-0 p-6 md:p-7"><p className="mb-3 text-[9px] uppercase tracking-[.26em] text-white/55">{card.category}</p><h2 className="font-serif text-3xl leading-none tracking-[-.025em] text-white md:text-4xl">{card.title}</h2>{card.description && <p className="mt-3 max-w-[250px] text-xs leading-5 text-white/65">{card.description}</p>}</div>
    <div className="absolute right-5 top-5 text-[9px] tracking-[.2em] text-white/50">{String(index + 1).padStart(2, "0")}</div>
  </motion.article>;
}
