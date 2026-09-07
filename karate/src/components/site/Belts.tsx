import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { BELTS } from "./data";

/** Horizontal belt progression driven by vertical scroll. */
export function Belts() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const trackX = useTransform(scrollYProgress, [0.05, 0.95], ["2vw", "-118vw"]);
  const progress = useTransform(scrollYProgress, [0.05, 0.95], ["0%", "100%"]);

  return (
    <div ref={ref} className="relative h-[220svh] bg-ink">
      <div className="sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden">
        <div className="px-5 md:px-10">
          <div className="flex items-center gap-4">
            <span className="num-tag text-xs">04</span>
            <span className="h-px w-16 bg-line" />
            <span className="kicker">PROGRESSION</span>
          </div>
          <h2 className="display mt-6 text-[13vw] leading-[0.82] text-ivory md:text-[6.4vw]">
            EARN EVERY <span className="text-gold">BELT.</span>
          </h2>
        </div>

        <motion.div style={{ x: trackX }} className="mt-14 flex gap-6 md:gap-10">
          {BELTS.map((b, i) => {
            const start = i / BELTS.length;
            const glow = useTransform(
              scrollYProgress,
              [Math.max(0, start - 0.08), start + 0.06, Math.min(1, start + 0.2)],
              [0.28, 1, 0.35],
            );
            const lift = useTransform(
              scrollYProgress,
              [Math.max(0, start - 0.08), start + 0.06, Math.min(1, start + 0.2)],
              [16, 0, 12],
            );
            return (
              <motion.article
                key={b.name}
                style={{ opacity: glow, y: lift }}
                className="w-[74vw] shrink-0 sm:w-[42vw] md:w-[27vw]"
              >
                <span className="num-tag text-[0.6rem]">0{i + 1}</span>
                {/* physical belt strip */}
                <div className="relative mt-4 h-16 w-full overflow-hidden">
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(180deg, color-mix(in srgb, ${b.color} 78%, #000) 0%, ${b.color} 42%, color-mix(in srgb, ${b.color} 62%, #000) 100%)`,
                      boxShadow: "inset 0 0 26px rgba(0,0,0,0.55)",
                    }}
                  />
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(90deg, rgba(0,0,0,0.5) 0 1px, transparent 1px 4px)",
                    }}
                  />
                  <div className="absolute left-6 top-0 h-full w-10 bg-black/25 blur-[6px]" />
                </div>
                <h3 className="display mt-5 text-3xl text-ivory md:text-4xl">{b.name}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{b.note}</p>
              </motion.article>
            );
          })}
        </motion.div>

        <div className="mt-14 px-5 md:px-10">
          <div className="h-px w-full bg-line">
            <motion.div style={{ width: progress }} className="h-px bg-gold" />
          </div>
          <p className="mt-4 text-[0.55rem] uppercase tracking-[0.3em] text-muted-foreground">
            DISCIPLINE IS EARNED, NOT PURCHASED
          </p>
        </div>
      </div>
    </div>
  );
}
