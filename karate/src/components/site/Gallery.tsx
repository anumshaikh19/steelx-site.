import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import kids from "@/assets/gallery-kids.jpg";
import belt from "@/assets/gallery-belt.jpg";
import selfd from "@/assets/gallery-selfdefence.jpg";
import dojo from "@/assets/gallery-dojo.jpg";
import strike from "@/assets/strike-2.jpg";
import cali from "@/assets/calisthenics.jpg";

const SHOTS = [
  { src: kids, label: "COMMUNITY", cls: "col-span-8 md:col-span-5 aspect-[4/3]", drift: -60 },
  { src: belt, label: "THE BELT", cls: "col-span-4 md:col-span-3 aspect-[3/4] md:mt-24", drift: 40 },
  { src: dojo, label: "THE DOJO", cls: "col-span-12 md:col-span-8 md:col-start-4 aspect-[16/9] md:-mt-16", drift: -30 },
  { src: strike, label: "KARATE", cls: "col-span-7 md:col-span-4 aspect-[3/4]", drift: 70 },
  { src: selfd, label: "SELF DEFENCE", cls: "col-span-5 md:col-span-5 aspect-[4/3] md:mt-32", drift: -50 },
  { src: cali, label: "TRAINING", cls: "col-span-12 md:col-span-3 aspect-[3/4] md:-mt-10", drift: 30 },
];

export function Gallery() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="gallery" ref={ref} className="relative bg-ink px-5 py-24 md:px-10">
      <div className="mx-auto max-w-[104rem]">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="display text-[13vw] leading-[0.82] text-ivory md:text-[6.4vw]">
            INSIDE THE
            <br />
            <span className="text-gold">FRAME.</span>
          </h2>
          <span className="kicker pb-3">07 — GALLERY</span>
        </div>

        <div className="mt-16 grid grid-cols-12 gap-3 md:gap-6">
          {SHOTS.map((s, i) => {
            const y = useTransform(scrollYProgress, [0, 1], [s.drift, -s.drift]);
            return (
              <motion.button
                key={i}
                type="button"
                onClick={() => setOpen(i)}
                style={{ y }}
                className={`group relative overflow-hidden ${s.cls}`}
              >
                <motion.img
                  src={s.src}
                  alt={s.label}
                  loading="lazy"
                  className="h-full w-full object-cover grayscale-[0.4] transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06] group-hover:grayscale-0"
                />
                <span className="absolute inset-0 bg-ink/35 transition-opacity duration-500 group-hover:opacity-0" />
                <span className="absolute inset-x-0 bottom-0 flex translate-y-3 items-center gap-3 p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="h-px w-6 bg-gold" />
                  <span className="text-[0.58rem] font-semibold uppercase tracking-[0.3em] text-ivory">
                    {s.label}
                  </span>
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>

      {open !== null && SHOTS[open] ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-[95] flex items-center justify-center bg-ink/95 p-5 backdrop-blur-sm"
        >
          <motion.img
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            src={SHOTS[open]!.src}
            alt={SHOTS[open]!.label}
            className="max-h-[86svh] max-w-full object-contain"
          />
          <span className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[0.6rem] uppercase tracking-[0.3em] text-gold">
            {SHOTS[open]!.label} — CLICK TO CLOSE
          </span>
        </motion.div>
      ) : null}
    </section>
  );
}
