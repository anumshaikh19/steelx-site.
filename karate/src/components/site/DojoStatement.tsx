import { motion } from "motion/react";

const LINES = ["WE TRAIN THE BODY.", "WE SHARPEN THE MIND.", "WE BUILD CHARACTER."];

const PILLARS = [
  {
    n: "I",
    title: "THE BODY",
    body: "Every session opens with joint prep, footwork and conditioning. Strength is built from bodyweight — squats, pulls, holds — so the technique you learn is technique you can actually carry.",
    points: ["Warm-up · mobility · conditioning", "Kihon basics drilled cold", "Progressive bodyweight strength"],
  },
  {
    n: "II",
    title: "THE MIND",
    body: "Kata teaches patience; kumite teaches composure. Students learn to read distance, stay calm under pressure, and choose the response instead of reacting to it.",
    points: ["Kata form and memory", "Controlled sparring", "Awareness and distance"],
  },
  {
    n: "III",
    title: "THE CHARACTER",
    body: "The floor is bowed onto, not walked onto. Seniors correct juniors. Belts are graded, never gifted — and the child who arrived at two and a half now leads the warm-up.",
    points: ["Etiquette and respect", "Seniors mentor juniors", "Graded, earned belts"],
  },
];

export function DojoStatement() {
  return (
    <section id="method" className="relative bg-ink px-5 py-24 md:py-32 md:px-10">
      <div className="mx-auto max-w-[104rem]">
        <div className="flex items-center gap-4">
          <span className="num-tag text-xs">02</span>
          <span className="h-px w-16 bg-line" />
          <span className="kicker">MORE THAN A WORKOUT.</span>
        </div>

        <div className="mt-14 space-y-1 md:ml-[12%]">
          {LINES.map((line, i) => (
            <div key={line} className="overflow-hidden">
              <motion.p
                initial={{ y: "110%", opacity: 0, filter: "blur(12px)" }}
                whileInView={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
                className="display text-[10.5vw] text-ivory md:text-[5.6vw]"
              >
                {i === 2 ? (
                  <>
                    WE BUILD <span className="text-gold">CHARACTER.</span>
                  </>
                ) : (
                  line
                )}
              </motion.p>
            </div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="mt-14 max-w-md text-sm leading-relaxed text-muted-foreground md:ml-[12%]"
        >
          Fourteen years in Nagpada. Children who arrived at two and a half now teach the
          warm-up. Nothing here is bought — every belt is earned on the floor.
        </motion.p>

        <div className="mt-20 grid gap-px border-t border-line md:grid-cols-3">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`px-0 py-10 md:px-8 ${i > 0 ? "border-t border-line md:border-l md:border-t-0" : "md:pl-0"}`}
            >
              <span className="num-tag text-xs">{p.n}</span>
              <h3 className="display mt-5 text-[8vw] leading-none text-ivory md:text-[2.4vw]">
                {p.title}
              </h3>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              <ul className="mt-7 space-y-0">
                {p.points.map((pt) => (
                  <li
                    key={pt}
                    className="hairline py-3 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-gold-dim"
                  >
                    {pt}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
