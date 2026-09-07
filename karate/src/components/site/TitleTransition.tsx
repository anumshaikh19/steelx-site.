import { motion } from "motion/react";

const FACTS = [
  { k: "EST.", v: "2011" },
  { k: "RATED", v: "4.9 / 5" },
  { k: "FROM AGE", v: "2.5 YRS" },
  { k: "DISCIPLINES", v: "FOUR" },
];

/** Chapter opening between the hero and the first content beat. */
export function TitleTransition() {
  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden bg-ink px-5 py-24 md:py-32">
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-x-0 top-0 gold-rule origin-left"
      />

      <motion.h2
        initial={{ opacity: 0, y: 22, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="display flex flex-wrap justify-center gap-x-[0.28em] text-center text-[11vw] text-ivory md:text-[6vw]"
      >
        <span>THE DISCIPLINE</span>
        <span className="text-gold">BEGINS.</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, delay: 0.15 }}
        className="mt-8 max-w-xl text-center text-sm leading-relaxed text-muted-foreground"
      >
        A traditional karate dojo in the middle of Nagpada, now training four disciplines under
        one roof — karate, calisthenics, self defence and a dedicated kids programme. Beginners
        start on the same floor as black belts, and nobody is rushed.
      </motion.p>

      <motion.dl
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, delay: 0.25 }}
        className="mt-14 grid w-full max-w-3xl grid-cols-2 gap-px md:grid-cols-4"
      >
        {FACTS.map((f) => (
          <div key={f.k} className="border-t border-line px-2 py-5 text-center">
            <dt className="kicker text-[0.5rem]">{f.k}</dt>
            <dd className="display mt-2 text-xl text-ivory md:text-2xl">{f.v}</dd>
          </div>
        ))}
      </motion.dl>

      <span className="mt-14 kicker text-[0.55rem]">CHAPTER 01</span>
    </div>
  );
}
