import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import strike from "@/assets/strike-3.jpg";
import cali from "@/assets/calisthenics.jpg";
import selfd from "@/assets/gallery-selfdefence.jpg";
import kids from "@/assets/gallery-kids.jpg";

const ARTS = [
  {
    n: "01",
    title: "KARATE",
    tags: "TECHNIQUE / DISCIPLINE / CONTROL",
    img: strike,
    spec: ["Kihon · Kata · Kumite", "Grading to black belt", "Age 4 to adult"],
  },
  {
    n: "02",
    title: "CALISTHENICS",
    tags: "STRENGTH / MOBILITY / BALANCE",
    img: cali,
    spec: ["Bodyweight progressions", "Levers · holds · pulls", "No machines"],
  },
  {
    n: "03",
    title: "SELF DEFENCE",
    tags: "AWARENESS / TIMING / RESPONSE",
    img: selfd,
    spec: ["Close-range escapes", "Street-realistic drills", "Women's batches"],
  },
  {
    n: "04",
    title: "KIDS",
    tags: "FOCUS / RESPECT / CONFIDENCE",
    img: kids,
    spec: ["From 2.5 years", "Values before trophies", "Small groups"],
  },
];

export function Arts() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="arts" className="relative bg-ink py-24">
      <div className="mx-auto flex max-w-[104rem] items-end justify-between px-5 pb-10 md:px-10">
        <h2 className="display text-[13vw] text-ivory md:text-[7vw]">THE ARTS</h2>
        <span className="kicker hidden pb-3 md:block">FOUR DISCIPLINES · ONE FLOOR</span>
      </div>

      <div
        className="flex flex-col border-y border-line md:h-[82svh] md:flex-row"
        style={{ perspective: "1600px" }}
      >
        {ARTS.map((a, i) => {
          const isActive = active === i;
          const dim = active !== null && !isActive;
          return (
            <motion.article
              key={a.title}
              onPointerEnter={() => setActive(i)}
              onPointerLeave={() => setActive(null)}
              animate={{
                rotateY: isActive ? -3 : 0,
                opacity: dim ? 0.42 : 1,
              }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                "group relative flex min-h-[58svh] flex-1 flex-col justify-end overflow-hidden border-line px-5 py-8 transition-[flex-grow] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] md:min-h-0 md:px-7",
                i > 0 && "border-t md:border-l md:border-t-0",
              )}
              style={{ transformStyle: "preserve-3d", flexGrow: isActive ? 1.9 : 1 }}
            >

              <motion.img
                src={a.img}
                alt={a.title}
                loading="lazy"
                animate={{ scale: isActive ? 1.08 : 1.16, opacity: isActive ? 0.7 : 0.44 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 h-full w-full object-cover grayscale-[0.55] contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/10" />

              <span className="num-tag absolute left-5 top-6 text-xs md:left-7">{a.n}</span>

              <div className="relative">
                <motion.span
                  animate={{ scaleX: isActive ? 1 : 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="mb-5 block h-px w-full origin-left bg-gold"
                />
                <motion.h3
                  animate={{ x: isActive ? 10 : 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="display text-[11vw] leading-[0.82] text-ivory md:text-[3.1vw]"
                >
                  {a.title}
                </motion.h3>
                <p className="mt-3 text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-gold-dim">
                  {a.tags}
                </p>

                <motion.ul
                  animate={{
                    opacity: isActive ? 1 : 0,
                    height: isActive ? "auto" : 0,
                    y: isActive ? 0 : 8,
                  }}
                  transition={{ duration: 0.5 }}
                  className="overflow-hidden text-xs text-muted-foreground"
                >
                  <li className="h-4" />
                  {a.spec.map((s) => (
                    <li key={s} className="hairline py-2">
                      {s}
                    </li>
                  ))}
                </motion.ul>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
