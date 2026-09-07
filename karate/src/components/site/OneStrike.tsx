import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import s1 from "@/assets/strike-1.jpg";
import s2 from "@/assets/strike-2.jpg";
import s3 from "@/assets/strike-3.jpg";
import { Dust } from "./Dust";

const POSES = [s1, s2, s3];
const WORDS = ["ONE STRIKE.", "ONE BREATH.", "TOTAL CONTROL."];

/** Signature moment: scroll drives a three-pose strike, synced to the words. */
export function OneStrike() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.02, 1.14, 1.06]);
  const x = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [1.5, -2]);
  const flash = useTransform(scrollYProgress, [0.58, 0.66, 0.74], [0, 0.5, 0]);
  const shock = useTransform(scrollYProgress, [0.6, 0.85], [0.2, 2.6]);
  const shockOpacity = useTransform(scrollYProgress, [0.6, 0.72, 0.9], [0, 0.5, 0]);

  return (
    <div ref={ref} className="relative h-[200svh] bg-ink">
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ scale, x, rotate }}>
          {POSES.map((src, i) => {
            const start = i / POSES.length;
            const opacity = useTransform(
              scrollYProgress,
              [Math.max(0, start - 0.1), start + 0.05, start + 0.24, Math.min(1, start + 0.34)],
              i === 0 ? [1, 1, 1, 0] : i === POSES.length - 1 ? [0, 1, 1, 1] : [0, 1, 1, 0],
            );
            const blurAmt = useTransform(
              scrollYProgress,
              [start, start + 0.12, start + 0.28],
              ["blur(4px)", "blur(0px)", "blur(3px)"],
            );
            return (
              <motion.img
                key={i}
                src={src}
                alt=""
                loading="lazy"
                aria-hidden
                style={{ opacity, filter: blurAmt }}
                className="absolute inset-0 h-full w-full object-contain object-center opacity-0 md:object-[65%_center]"
              />
            );
          })}
        </motion.div>

        <motion.div
          aria-hidden
          className="absolute left-[62%] top-[38%] aspect-square w-[26vw] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/40"
          style={{ scale: shock, opacity: shockOpacity }}
        />
        <motion.div
          aria-hidden
          className="absolute inset-0 bg-gold mix-blend-overlay"
          style={{ opacity: flash }}
        />

        <Dust count={22} />
        <div className="vignette" />

        <div className="relative z-10 flex h-full flex-col justify-center px-5 md:px-14">
          {WORDS.map((w, i) => {
            const seg = 0.3;
            const start = 0.08 + i * seg;
            const opacity = useTransform(
              scrollYProgress,
              [start, start + 0.04, start + seg - 0.02, start + seg],
              [0, 1, 1, 0],
            );
            const y = useTransform(scrollYProgress, [start, start + seg], ["4vh", "-4vh"]);
            return (
              <motion.h3
                key={w}
                style={{ opacity, y }}
                className="display absolute max-w-[70vw] text-[14vw] leading-[0.82] text-ivory md:text-[7.5vw]"
              >
                <span className="num-tag mb-4 block text-[0.6rem] tracking-[0.4em]">
                  0{i + 1} —
                </span>
                {i === 2 ? (
                  <>
                    TOTAL <span className="text-gold">CONTROL.</span>
                  </>
                ) : (
                  w
                )}
              </motion.h3>
            );
          })}
        </div>
      </div>
    </div>
  );
}
