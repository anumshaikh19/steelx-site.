import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";

export type OrbitalCard = { id: string | number; title: string; description: string; icon?: ReactNode };
export type InteractiveOrbitalHeroProps = { eyebrow?: string; heading?: string; paragraph?: string; accent?: string; image: string; imageAlt?: string; cards: OrbitalCard[]; className?: string };

export const CONFIG = {
  imageWidth: 600, imageHeight: 520, orbitRadiusX: 500, orbitRadiusY: 250, mouseStrength: 35, imageParallax: 10,
  cardScaleMin: 0.92, cardScaleMax: 1.02, rotationMax: 4, spring: { stiffness: 80, damping: 20, mass: 0.8 },
};

function Icon({ index }: { index: number }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.2 };
  return <svg viewBox="0 0 24 24" className="h-9 w-9" aria-hidden="true">
    {index % 4 === 0 ? <><path d="M5 19 19 5M7 7h10v10" {...common} /></> : index % 4 === 1 ? <><circle cx="12" cy="12" r="7" {...common} /><path d="M12 5v14M5 12h14" {...common} /></> : index % 4 === 2 ? <><path d="M6 17 12 5l6 12M8.5 13h7" {...common} /></> : <><path d="M5 8h14M5 16h14M8 5v14M16 5v14" {...common} /></>}
  </svg>;
}

export function InteractiveOrbitalHero({
  eyebrow = "STEELX / THE PROCESS", heading = "ENVISIONED, DESIGNED, REFINED",
  paragraph = "A considered approach to architectural surfaces, from the first idea through fabrication, installation and beyond.", accent = "delivered.", image, imageAlt = "Architectural interior", cards, className = "",
}: InteractiveOrbitalHeroProps) {
  const root = useRef<HTMLElement>(null);
  const [reduced, setReduced] = useState(false);
  const [mobileIndex, setMobileIndex] = useState(0);
  const mx = useMotionValue(0), my = useMotionValue(0), sx = useSpring(mx, CONFIG.spring), sy = useSpring(my, CONFIG.spring);
  useEffect(() => { const m = window.matchMedia("(prefers-reduced-motion: reduce)"); const u = () => setReduced(m.matches); u(); m.addEventListener("change", u); return () => m.removeEventListener("change", u); }, []);
  const pointer = (e: React.PointerEvent<HTMLElement>) => { if (reduced || e.pointerType === "touch") return; const r = root.current?.getBoundingClientRect(); if (!r) return; mx.set(Math.max(-1, Math.min(1, ((e.clientX-r.left)/r.width)*2-1))); my.set(Math.max(-1, Math.min(1, ((e.clientY-r.top)/r.height)*2-1))); };
  const go = (d: number) => setMobileIndex(i => (i + d + cards.length) % cards.length);
  return <section ref={root} onPointerMove={pointer} onPointerLeave={() => { mx.set(0); my.set(0); }} className={`relative min-h-[900px] overflow-hidden bg-[#090908] text-[#f1eee7] ${className}`} aria-label="Interactive process">
    <motion.div initial={reduced ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .85 }} className="relative z-20 mx-auto max-w-[1400px] px-6 pt-24 md:px-10 lg:pt-28">
      <p className="mb-5 text-[9px] uppercase tracking-[.32em] text-white/38">{eyebrow}</p><h1 className="max-w-5xl font-serif text-[clamp(3.5rem,7.2vw,7.7rem)] leading-[.86] tracking-[-.055em]">{heading}</h1>
      <div className="mt-7 max-w-2xl md:flex md:items-end md:gap-10"><p className="max-w-sm text-sm leading-6 text-white/50">{paragraph}</p><motion.p initial={reduced ? false : { opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: .25, duration: .9 }} className="mt-4 font-serif text-5xl italic leading-none tracking-[-.045em] md:mt-0 md:text-7xl">{accent}</motion.p></div>
    </motion.div>
    <svg className="pointer-events-none absolute right-[12%] top-[22%] z-0 hidden h-[520px] w-[560px] opacity-35 lg:block" viewBox="0 0 560 520" fill="none" aria-hidden="true"><motion.path initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, ease: "easeInOut" }} d="M92 32C347 40 521 145 443 294C393 390 244 466 96 417C23 393 16 323 71 269C139 201 289 199 404 247" stroke="white" strokeWidth="1" strokeLinecap="round" strokeDasharray="2 5" /></svg>
    <div className="relative mx-auto mt-16 hidden h-[610px] max-w-[1400px] lg:block [perspective:1400px]"><OrbitalImage image={image} alt={imageAlt} x={sx} y={sy} reduced={reduced} />{cards.slice(0,4).map((card,i)=><OrbitalCardView key={card.id} card={card} index={i} mx={sx} my={sy} reduced={reduced} />)}</div>
    <div className="mx-auto mt-14 block max-w-[720px] px-6 pb-20 lg:hidden"><OrbitalImage image={image} alt={imageAlt} x={sx} y={sy} reduced={reduced} /><motion.div key={cards[mobileIndex]?.id} initial={reduced ? false : { opacity: 0, x: 35 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .45 }} className="mt-7 rounded-2xl border border-white/10 bg-[#151513] p-7"><div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-[#242421] text-white/75"><Icon index={mobileIndex} /></div><p className="mb-3 text-[9px] uppercase tracking-[.28em] text-white/35">0{mobileIndex+1} / Process</p><h2 className="font-serif text-4xl">{cards[mobileIndex].title}</h2><p className="mt-3 text-sm leading-6 text-white/48">{cards[mobileIndex].description}</p></motion.div><div className="mt-4 flex items-center justify-between"><button type="button" onClick={()=>go(-1)} className="rounded-full border border-white/15 px-5 py-3 text-[9px] uppercase tracking-[.2em] text-white/60">Previous</button><span className="text-[9px] uppercase tracking-[.2em] text-white/30">{mobileIndex+1} / {cards.length}</span><button type="button" onClick={()=>go(1)} className="rounded-full border border-white/15 px-5 py-3 text-[9px] uppercase tracking-[.2em] text-white/60">Next</button></div></div>
  </section>;
}

function OrbitalImage({ image, alt, x, y, reduced }: { image: string; alt: string; x: ReturnType<typeof useMotionValue<number>>; y: ReturnType<typeof useMotionValue<number>>; reduced: boolean }) {
  const ix = useSpring(useMotionValue(0), CONFIG.spring); const iy = useSpring(useMotionValue(0), CONFIG.spring);
  useEffect(() => { if (reduced) return; ix.set(x.get()*CONFIG.imageParallax/35); iy.set(y.get()*CONFIG.imageParallax/35); const id = requestAnimationFrame(function loop(){ix.set(x.get()*CONFIG.imageParallax/35);iy.set(y.get()*CONFIG.imageParallax/35);requestAnimationFrame(loop)}); return()=>cancelAnimationFrame(id); }, [x,y,reduced,ix,iy]);
  return <motion.div className="absolute left-1/2 top-[53%] z-10 h-[520px] w-[min(600px,48vw)] -translate-x-1/2 -translate-y-1/2 overflow-hidden shadow-[0_35px_90px_rgba(0,0,0,.42)]" style={{ x: ix, y: iy }}><img src={image} alt={alt} className="h-full w-full object-cover" style={{ borderRadius: "48% 52% 43% 57% / 44% 42% 58% 56%" }} /></motion.div>;
}

function OrbitalCardView({ card, index, mx, my, reduced }: { card: OrbitalCard; index: number; mx: ReturnType<typeof useMotionValue<number>>; my: ReturnType<typeof useMotionValue<number>>; reduced: boolean }) {
  const tx=useMotionValue(0),ty=useMotionValue(0),ts=useMotionValue(.96),tr=useMotionValue(0),to=useMotionValue(.9);
  const x=useSpring(tx,CONFIG.spring),y=useSpring(ty,CONFIG.spring),scale=useSpring(ts,CONFIG.spring),rotate=useSpring(tr,CONFIG.spring),opacity=useSpring(to,CONFIG.spring); const [hover,setHover]=useState(false);
  useEffect(() => { let raf=0; const loop=()=>{ const px=mx.get(),py=my.get(), angles=[-2.58,-1.03,2.58,1.03], a=angles[index], depth=[.88,1.08,1.15,.96][index], rx=CONFIG.orbitRadiusX*.54*depth, ry=CONFIG.orbitRadiusY*.78*depth; tx.set(Math.cos(a)*rx+px*CONFIG.mouseStrength*[.8,1.1,1.3,.9][index]); ty.set(Math.sin(a)*ry+py*CONFIG.mouseStrength*[.4,.6,.7,.5][index]); ts.set(hover?CONFIG.cardScaleMax:CONFIG.cardScaleMin+(1-Math.min(1,Math.abs(index-1.5)/2))*.045); tr.set(Math.sin(a)*CONFIG.rotationMax+px*.9); to.set(hover?1:.82+(1-Math.min(1,Math.abs(index-1.5)/2))*.18); raf=requestAnimationFrame(loop); }; loop(); return()=>cancelAnimationFrame(raf); }, [index,mx,my,hover,reduced,tx,ty,ts,tr,to]);
  return <motion.article onPointerEnter={()=>setHover(true)} onPointerLeave={()=>setHover(false)} className="absolute left-1/2 top-[53%] h-[370px] w-[290px] -translate-x-1/2 -translate-y-1/2 rounded-[17px] border border-white/10 bg-[#151513] p-7 shadow-[0_28px_70px_rgba(0,0,0,.24)]" style={{x,y,scale,rotate,opacity,zIndex:hover?60:30-index}} tabIndex={0} aria-label={`${card.title}: ${card.description}`}><div className="flex h-full flex-col"><div className="flex h-28 w-28 items-center justify-center rounded-full bg-[#242421] text-white/65"><Icon index={index}/></div><div className="mt-auto"><p className="mb-3 text-[9px] uppercase tracking-[.26em] text-white/32">0{index+1} / STEELX</p><h2 className="font-serif text-4xl leading-none tracking-[-.035em]">{card.title}</h2><p className="mt-4 text-xs leading-5 text-white/45">{card.description}</p></div></div></motion.article>;
}
