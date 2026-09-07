import { motion } from "motion/react";

const TIMELINE = [
  {
    year: "2011",
    title: "THE FIRST FLOOR",
    body: "Dhanurveda opens in Nagpada with a handful of students and one rule — technique before trophies. Some of those first Karatekas still train here.",
  },
  {
    year: "THEN",
    title: "THE KIDS PROGRAMME",
    body: "Parents began bringing children as young as two and a half. The syllabus was slowed down, broken into games, and built around focus, respect and confidence.",
  },
  {
    year: "LATER",
    title: "STRENGTH ADDED",
    body: "Calisthenics joined the timetable — bodyweight pulls, levers and holds — so students could carry the technique they were learning instead of outgrowing it.",
  },
  {
    year: "TODAY",
    title: "FOUR DISCIPLINES",
    body: "Karate, calisthenics, self defence and kids classes share one floor, one instructor line, and 65+ reviews averaging 4.9 from the families who train here.",
  },
];

const VALUES = [
  ["BOW IN, BOW OUT", "The floor is treated as a dojo, not a gym."],
  ["CORRECT, THEN SPEED", "Stance is fixed before power is added."],
  ["NOBODY IS RUSHED", "Grading happens when the technique is ready."],
  ["SENIORS TEACH", "Advanced students lead warm-ups and correct juniors."],
];

export function Philosophy() {
  return (
    <section id="story" className="relative overflow-hidden bg-ink px-5 py-24 md:py-32 md:px-10">
      <span
        aria-hidden
        className="pointer-events-none absolute -right-[6vw] top-[10%] select-none text-[42vw] leading-none text-ivory/[0.035] md:text-[26vw]"
        style={{ fontFamily: "serif" }}
      >
        道
      </span>

      <div className="mx-auto max-w-[104rem]">
        <div className="flex items-center gap-4">
          <span className="num-tag text-xs">05</span>
          <span className="h-px w-16 bg-line" />
          <span className="kicker">THE DOJO STORY</span>
        </div>

        <blockquote className="mt-14 max-w-5xl">
          {[
            "THE REAL RESULT",
            "IS NOT THE BELT.",
            "IT IS WHO YOU BECOME",
            "WHILE EARNING IT.",
          ].map((line, i) => (
            <div key={line} className="overflow-hidden">
              <motion.p
                initial={{ y: "108%", opacity: 0 }}
                whileInView={{ y: "0%", opacity: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: i * 0.07 }}
                className={`display text-[9.5vw] leading-[0.9] md:text-[4.6vw] ${
                  i >= 2 ? "text-gold" : "text-ivory"
                }`}
              >
                {line}
              </motion.p>
            </div>
          ))}
        </blockquote>

        <div className="mt-20 grid gap-16 md:grid-cols-[1.1fr_0.9fr]">
          <ol className="relative border-l border-line pl-8">
            {TIMELINE.map((t, i) => (
              <motion.li
                key={t.year}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="relative pb-12 last:pb-0"
              >
                <span className="absolute -left-[2.15rem] top-2 h-2 w-2 rounded-[1px] bg-gold" />
                <span className="num-tag text-xs">{t.year}</span>
                <h3 className="display mt-3 text-2xl text-ivory md:text-3xl">{t.title}</h3>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
                  {t.body}
                </p>
              </motion.li>
            ))}
          </ol>

          <div>
            <p className="kicker mb-6 text-[0.55rem]">HOW WE TEACH</p>
            <ul>
              {VALUES.map(([k, v]) => (
                <li key={k} className="hairline py-5">
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-gold-dim">
                    {k}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-8">
          <span className="h-px w-24 bg-gold/60" />
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            DHANURVEDA · NAGPADA · EST. 2011
          </p>
        </div>
      </div>
    </section>
  );
}
