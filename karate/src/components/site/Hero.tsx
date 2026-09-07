import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "motion/react";
import fighter from "@/assets/hero-fighter.jpg";
import { BRAND } from "./data";
import { Dust } from "./Dust";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const still = useReducedMotion();
  const [p, setP] = useState({ x: 0, y: 0, near: 0 });

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const figureY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const figureX = useTransform(scrollYProgress, [0, 1], ["0%", "26%"]);
  const figureOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const leftWordX = useTransform(scrollYProgress, [0, 1], ["0%", "-38%"]);
  const rightWordX = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const masterY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const masterOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.14]);

  // pointer parallax
  const mx = useSpring(0, { stiffness: 55, damping: 22, mass: 0.6 });
  const my = useSpring(0, { stiffness: 55, damping: 22, mass: 0.6 });
  const zoom = useSpring(1, { stiffness: 45, damping: 20 });

  useEffect(() => {
    if (still) return;
    const el = ref.current;
    if (!el) return;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const nx = (e.clientX - r.left) / r.width - 0.5;
      const ny = (e.clientY - r.top) / r.height - 0.5;
      const dist = Math.min(1, Math.hypot(nx - 0.12, ny) * 2);
      mx.set(nx);
      my.set(ny);
      zoom.set(1.04 - dist * 0.05);
      setP({ x: nx, y: ny, near: 1 - dist });
    };
    const onLeave = () => {
      mx.set(0);
      my.set(0);
      zoom.set(1);
    };
    el.addEventListener("pointermove", onMove, { passive: true });
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [mx, my, zoom, still]);

  const fighterX = useTransform(mx, (v) => `${v * -34}px`);
  const fighterY = useTransform(my, (v) => `${v * -18}px`);
  const typeX = useTransform(mx, (v) => `${v * 16}px`);
  const glowX = useTransform(mx, (v) => `${v * 60}px`);

  return (
    <section
      id="top"
      ref={ref}
      data-cursor="hero"
      className="relative h-[100svh] w-full overflow-hidden bg-ink"
    >
      {/* backdrop */}
      <motion.div className="absolute inset-0" style={{ scale: bgScale }}>
        <div className="absolute inset-0 dojo-grid opacity-[0.35]" />
      </motion.div>

      {/* light shaft */}
      <motion.div
        aria-hidden
        className="absolute -top-1/4 right-[8%] h-[150%] w-[46%] opacity-40 blur-3xl"
        style={{
          x: glowX,
          background:
            "linear-gradient(160deg, color-mix(in oklab, var(--gold) 55%, transparent), transparent 62%)",
        }}
      />

      {/* fighter */}
      <motion.div
        className="absolute inset-y-0 right-[-8%] w-[92%] sm:right-[-2%] sm:w-[68%] lg:right-[2%] lg:w-[52%]"
        style={{ x: figureX, y: figureY, opacity: figureOpacity }}
      >
        <motion.div className="relative h-full w-full" style={{ x: fighterX, y: fighterY, scale: zoom }}>
          <img
            src={fighter}
            alt="Karate practitioner delivering a strike inside the Dhanurveda dojo"
            width={1280}
            height={1600}
            fetchPriority="high"
            className="h-full w-full object-cover object-[60%_center] opacity-90 contrast-125"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 26%, black 84%, transparent), linear-gradient(to bottom, black 78%, transparent)",
              maskComposite: "intersect",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 26%, black 84%, transparent), linear-gradient(to bottom, black 78%, transparent)",
            }}
          />
        </motion.div>
      </motion.div>

      <Dust count={30} />
      <div className="vignette" />

      {/* typography */}
      <div className="relative z-10 flex h-full flex-col justify-between px-5 pb-8 pt-24 md:px-10 md:pb-12">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex items-center gap-4"
        >
          <span className="h-px w-10 bg-gold/70" />
          <span className="kicker">{BRAND.subtitle}</span>
        </motion.div>

        <div className="relative">
          <motion.h1
            className="display whitespace-nowrap text-[15.5vw] text-ivory md:-ml-[3vw] md:text-[16.5vw]"
            style={{ x: typeX, letterSpacing: "-0.02em" }}
          >
            <motion.span style={{ x: leftWordX }} className="inline-block">
              DHANUR
            </motion.span>
            <motion.span style={{ x: rightWordX }} className="inline-block text-gold/85">
              VEDA
            </motion.span>
          </motion.h1>

          <motion.div style={{ y: masterY, opacity: masterOpacity }} className="mt-2 max-w-3xl md:mt-6">
            <p className="display text-[8.5vw] leading-[0.85] text-ivory/95 md:text-[4.4vw]">
              MASTER YOUR
              <br />
              <span className="text-gold">MOTION.</span>
            </p>
          </motion.div>
        </div>

        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="flex items-center gap-6">
            <div>
              <p className="display text-2xl text-ivory">{BRAND.rating}</p>
              <p className="kicker mt-1 text-[0.55rem]">{BRAND.reviews} GOOGLE REVIEWS</p>
            </div>
            <span className="h-10 w-px bg-line" />
            <div>
              <p className="display text-2xl text-ivory">SINCE {BRAND.established}</p>
              <p className="kicker mt-1 text-[0.55rem]">NAGPADA · MUMBAI</p>
            </div>
          </div>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center gap-3"
          >
            <span className="kicker text-[0.55rem]">SCROLL</span>
            <span className="h-8 w-px bg-gradient-to-b from-gold to-transparent" />
          </motion.div>
        </div>
      </div>

      {/* subtle pointer readout — brand detail, not decoration overload */}
      <span className="pointer-events-none absolute bottom-4 right-5 hidden text-[0.5rem] uppercase tracking-[0.3em] text-muted-foreground/50 lg:block">
        FOCUS {Math.round(p.near * 100)}
      </span>
    </section>
  );
}
