import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import cali from "@/assets/calisthenics.jpg";

const METRICS = [
  { label: "STRENGTH", value: 92 },
  { label: "MOBILITY", value: 78 },
  { label: "BALANCE", value: 85 },
  { label: "CONTROL", value: 96 },
];

export function Calisthenics() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const traceLength = useTransform(scrollYProgress, [0.2, 0.7], [0, 1]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-paper text-ink">
      <div className="mx-auto grid max-w-[104rem] gap-12 px-5 py-24 md:grid-cols-[1.05fr_0.95fr] md:px-10 md:py-32">
        <div className="relative">
          <div className="flex items-center gap-4">
            <span className="num-tag text-xs text-ink/50">03</span>
            <span className="h-px w-16 bg-ink/20" />
            <span className="kicker text-ink/50">CALISTHENICS</span>
          </div>

          <h2 className="display mt-10 text-[13vw] leading-[0.82] text-ink md:text-[6.4vw]">
            CONTROL
            <br />
            YOUR <span className="text-blood/80">BODY.</span>
          </h2>

          <p className="mt-8 max-w-sm text-sm leading-relaxed text-ink/65">
            No machines. No mirrors to hide behind. Only gravity, a bar, and the honest
            arithmetic of what you can hold.
          </p>

          <ul className="mt-14 space-y-6">
            {METRICS.map((m, i) => (
              <li key={m.label}>
                <div className="flex items-baseline justify-between">
                  <span className="text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-ink/70">
                    {m.label}
                  </span>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.5 + i * 0.12 }}
                    className="display text-lg text-ink/80"
                  >
                    {m.value}
                  </motion.span>
                </div>
                <div className="mt-2 h-[2px] w-full bg-ink/10">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={inView ? { scaleX: m.value / 100 } : {}}
                    transition={{ duration: 1.2, delay: 0.25 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full origin-left bg-ink"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative overflow-hidden">
          <motion.img
            src={cali}
            alt="Athlete holding a front lever during calisthenics training"
            loading="lazy"
            width={1280}
            height={1600}
            style={{ y: imgY }}
            className="h-[70svh] w-full scale-110 object-cover md:h-full"
          />
          {/* movement trace */}
          <svg
            aria-hidden
            viewBox="0 0 100 140"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 h-full w-full"
          >
            <motion.path
              d="M8 96 C 30 92, 44 74, 58 70 C 72 66, 86 68, 96 62"
              fill="none"
              stroke="var(--gold)"
              strokeWidth="0.5"
              style={{ pathLength: traceLength }}
            />
            <motion.path
              d="M20 118 C 34 104, 40 88, 52 78"
              fill="none"
              stroke="var(--gold)"
              strokeWidth="0.35"
              strokeDasharray="2 2"
              style={{ pathLength: traceLength }}
            />
          </svg>
          <span className="absolute bottom-4 left-4 text-[0.55rem] uppercase tracking-[0.3em] text-paper/80">
            FRONT LEVER · HOLD 12S
          </span>
        </div>
      </div>
    </section>
  );
}
