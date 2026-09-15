import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";

export type OrbitalCard = {
  id: string | number;
  title: string;
  description: string;
  icon?: React.ReactNode;
};

export type InteractiveOrbitalHeroProps = {
  eyebrow?: string;
  heading?: string;
  paragraph?: string;
  accent?: string;
  image: string;
  imageAlt?: string;
  cards: OrbitalCard[];
  className?: string;
};

export const CONFIG = {
  imageWidth: 600,
  imageHeight: 520,
  orbitRadiusX: 500,
  orbitRadiusY: 250,
  mouseStrength: 35,
  imageParallax: 10,
  cardScaleMin: 0.92,
  cardScaleMax: 1.02,
  rotationMax: 4,
  spring: { stiffness: 80, damping: 20, mass: 0.8 },
};

const DEFAULT_CARDS: OrbitalCard[] = [
  { id: 1, title: "Design", description: "From first line to final detail, every surface is considered." },
  { id: 2, title: "Manufacturing", description: "Precision fabrication with a disciplined architectural finish." },
  { id: 3, title: "Building", description: "Material becomes architecture through exact execution." },
  { id: 4, title: "Servicing", description: "A considered aftercare experience that protects the result." },
];

function Icon({ index }: { index: number }) {
  const paths = [
    <path key="a" d="M5 19 19 5M7 7h10v10" fill="none" stroke="currentColor" strokeWidth="1.2" />,
    <><circle key="a" cx="12" cy="12" r="7" fill="none" stroke="currentColor" strokeWidth="1.2" /><path key="b" d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.2" /></>,
    <><path key="a" d="M6 17 12 5l6 12" fill="none" stroke="currentColor" strokeWidth="1.2" /><path key="b" d="M8.5 13h7" stroke="currentColor" strokeWidth="1.2" /></>,
    <><path key="a" d="M5 8h14M5 16h14" stroke="currentColor" strokeWidth="1.2" /><path key="b" d="M8 5v14M16 5v14" stroke="currentColor" strokeWidth="1.2" /></>,
  ];
  return <svg viewBox="0 0 24 24" className="h-9 w-9" aria-hidden="true">{paths[index % paths.length]}</svg>;
}

export function InteractiveOrbitalHero({
  eyebrow = "STEELX / THE PROCESS",
  heading = "ENVISIONED, DESIGNED, REFINED",
  paragraph = "A considered approach to architectural surfaces, from the first idea through fabrication, installation and beyond.",
  accent = "delivered.",
  image,
  imageAlt = "Architectural interior",
  cards = DEFAULT_CARDS,
  className = "",
}: InteractiveOrbitalHeroProps) {
  const root = useRef<HTMLElement>(null);
  const [reduced, setReduced] = useState(false);
  const [mobileIndex, setMobileIndex] = useState(0);
  const mx = useMotionValue(0), my = useMotionValue(0);
  const sx = useSpring(mx, CONFIG.spring), sy = useSpring(my, CONFIG.spring);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update(); media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const handlePointer = (e: React.PointerEvent<HTMLElement>) => {
    if (reduced || e.pointerType === "touch") return;
    const r = root.current?.getBoundingClientRect();
    if (!r) return;
    mx.set(((e.clientX - r.left) / r.width * 2 - 1));
    my.set(((e.clientY - r.top) / r.height * 2 - 1));
  };

  const mobileCards = useMemo(() => cards.length ? cards : DEFAULT_CARDS, [cards]);
  const goMobile = (direction: number) => setMobileIndex((i) => (i + direction + mobileCards.length) % mobileCards.length);

  return (
    <section ref={root} onPointerMove={handlePointer} onPointerLeave={() => { mx.set(0); my.set(0); }} className={`relative min-h-[900px] overflow-hidden bg-[#090908] text-[#f1eee7] ${className}`} aria-label="Interactive STEELX process">
      <motion.div initial={reduced ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.8 }} className="relative z-20 mx-auto max-w-[1400px] px-6 pt-24 md:px-10 lg:pt-28">
        <p className="mb-5 text-[9px] uppercase tracking-[.32em] text-white/38">{eyebrow}</p>
        <h1 className="max-w-4xl font-serif text-[clamp(3.4rem,7.3vw,7.8rem)] leading-[.86] tracking-[-.055em]">{heading}</h1>
        <div className="mt-7 max-w-2xl md:flex md:items-end md:gap-10">
          <p className="max-w-sm text-sm leading-6 text-white/52">{paragraph}</p>
          <motion.p initial={reduced ? false : { opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.25, duration: 0.9 }} className="mt-4 font-serif text-5xl italic leading-none tracking-[-.045em] text-white md:mt-0 md:text-7xl">{accent}</motion.p>
        </div>
      </motion.div>

      <svg className="pointer-events-none absolute right-[14%] top-[23%] z-0 hidden h-[520px] w-[560px] opacity-35 lg:block" viewBox="0 0 560 520" fill="none" aria-hidden="true">
        <motion.path initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, ease: "easeInOut" }} d="M92 32C347 40 521 145 443 294C393 390 244 466 96 417C23 393 16 323 71 269C139 201 289 199 404 247" stroke="white" strokeWidth="1" strokeLinecap="round" strokeDasharray="2 5" />
      </svg>

      <div className="relative mx-auto mt-16 hidden h-[610px] max-w-[1400px] lg:block [perspective:1400px]">
        <OrbitalImage image={image} alt={imageAlt} x={sx} y={sy} reduced={reduced} />
        {cards.slice(0, 4).map((card, index) => <OrbitalCardView key={card.id} card={card} index={index} mx={sx} my={sy} reduced={reduced} />)}
      </div>

      <div className="mx-auto mt-14 block max-w-[720px] px-6 pb-20 lg:hidden">
        <OrbitalImage image={image} alt={imageAlt} x={sx} y={sy} reduced={reduced} />
        <div className="mt-7 overflow-hidden">
          <motion.div key={mobileCards[mobileIndex].id} initial={reduced ? false : { opacity: 0, x: 35 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.45 }} className="rounded-2xl border border-white/10 bg-[#151513] p-7">
            <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-[#242421] text-white/75"><Icon index={mobileIndex} /></div>
            <p className="mb-3 text-[9px] uppercase tracking-[.28em] text-white/35">0{mobileIndex + 1} / Process</p>
            <h2 className="font-serif text-4xl tracking-[-.035em]">{mobileCards[mobileIndex].title}</h2>
            <p className="mt-3 max-w-sm text-sm leading-6 text-white/48">{mobileCards[mobileIndex].description}</p>
          </motion.div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <button type="button" onClick={() => goMobile(-1)} className="rounded-full border border-white/15 px-5 py-3 text-[9px] uppercase tracking-[.2em] text-white/60" aria-label="Previous process">Previous</button>
          <span className="text-[9px] uppercase tracking-[.2em] text-white/30">{mobileIndex + 1} / {mobileCards.length}</span>
          <button type="button" onClick={() => goMobile(1)} className="rounded-full border border-white/15 px-5 py-3 text-[9px] uppercase tracking-[.2em] text-white/60" aria-label="Next process">Next</button>
        </div>
      </div>
    </section>
  );
}

function OrbitalImage({ image, alt, x, y, reduced }: { image: string; alt: string; x: ReturnType<typeof useMotionValue<number>>; y: ReturnType<typeof useMotionValue<number>>; reduced: boolean }) {
  return <motion.div className="absolute left-1/2 top-[53%] z-10 h-[520px] w-[600px] -translate-x-1/2 -translate-y-1/2 overflow-hidden shadow-[0_35px_90px_rgba(0,0,0,.42)]" style={{ x, y }} animate={reduced ? { scale: 1, rotate: 0 } : undefined} transition={CONFIG.spring}>
    <motion.img src={image} alt={alt} className="h-full w-full object-cover" style={{ borderRadius: "48% 52% 43% 57% / 44% 42% 58% 56%" }} />
  </motion.div>;
}

function OrbitalCardView({ card, index, mx, my, reduced }: { card: OrbitalCard; index: number; mx: ReturnType<typeof useMotionValue<number>>; my: ReturnType<typeof useMotionValue<number>>; reduced: boolean }) {
  const targetX = useMotionValue(0), targetY = useMotionValue(0), targetScale = useMotionValue(0.96), targetRotate = useMotionValue(0), targetOpacity = useMotionValue(0.9);
  const x = useSpring(targetX, CONFIG.spring), y = useSpring(targetY, CONFIG.spring), scale = useSpring(targetScale, CONFIG.spring), rotate = useSpring(targetRotate, CONFIG.spring), opacity = useSpring(targetOpacity, CONFIG.spring);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(function tick() {
      const px = mx.get(), py = my.get();
      const angles = [-2.58, -1.03, 2.58, 1.03];
      const a = angles[index];
      const depth = [0.88, 1.08, 1.15, 0.96][index];
      const rx = CONFIG.orbitRadiusX * 0.54 * depth;
      const ry = CONFIG.orbitRadiusY * 0.78 * depth;
      const orbitalX = Math.cos(a) * rx + px * CONFIG.mouseStrength * [0.8, 1.1, 1.3, 0.9][index];
      const orbitalY = Math.sin(a) * ry + py * CONFIG.mouseStrength * [0.4, 0.6, 0.7, 0.5][index];
      targetX.set(orbitalX);
      targetY.set(orbitalY);
      targetScale.set(hover ? CONFIG.cardScaleMax : CONFIG.cardScaleMin + (1 - Math.min(1, Math.abs(index - 1.5) / 2)) * 0.045);
      targetRotate.set(Math.sin(a) * CONFIG.rotationMax + px * 0.9);
      targetOpacity.set(hover ? 1 : 0.82 + (1 - Math.min(1, Math.abs(index - 1.5) / 2)) * 0.18);
    });
    return () => cancelAnimationFrame(frame);
  }, [index, mx, my, reduced, hover, targetX, targetY, targetScale, targetRotate, targetOpacity]);

  return <motion.article onPointerEnter={() => setHover(true)} onPointerLeave={() => setHover(false)} className="absolute left-1/2 top-[53%] z-20 h-[370px] w-[290px] -translate-x-1/2 -translate-y-1/2 rounded-[17px] border border-white/10 bg-[#151513] p-7 shadow-[0_28px_70px_rgba(0,0,0,.24)]" style={{ x, y, scale, rotate, opacity, zIndex: hover ? 60 : 30 - index }} tabIndex={0} aria-label={`${card.title}: ${card.description}`}>
    <div className="flex h-full flex-col">
      <div className="flex h-28 w-28 items-center justify-center rounded-full bg-[#242421] text-white/65"><span className="scale-125"><Icon index={index} /></span></div>
      <div className="mt-auto"><p className="mb-3 text-[9px] uppercase tracking-[.26em] text-white/32">0{index + 1} / STEELX</p><h2 className="font-serif text-4xl leading-none tracking-[-.035em]">{card.title}</h2><p className="mt-4 text-xs leading-5 text-white/45">{card.description}</p></div>
    </div>
  </motion.article>;
}
