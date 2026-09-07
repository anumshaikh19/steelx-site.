import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { BRAND, REVIEWS } from "./data";

export function Reviews() {
  const [i, setI] = useState(0);
  const [dir, setDir] = useState(1);

  const go = (n: number) => {
    setDir(n);
    setI((v) => (v + n + REVIEWS.length) % REVIEWS.length);
  };

  return (
    <section id="reviews" className="relative overflow-hidden bg-ivory text-ink">
      <div className="mx-auto max-w-[104rem] px-5 py-24 md:px-10 md:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="num-tag text-xs text-ink/50">07</span>
            <span className="h-px w-16 bg-ink/20" />
            <span className="kicker text-ink/50">WHAT THE FLOOR SAYS</span>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="display text-6xl text-ink md:text-7xl">{BRAND.rating}</span>
            <div>
              <p className="text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-ink/60">
                OUT OF 5
              </p>
              <p className="mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-ink/60">
                {BRAND.reviews} GOOGLE REVIEWS
              </p>
            </div>
          </div>
        </div>

        <div className="relative mt-16 min-h-[46svh]">
          <span
            aria-hidden
            className="absolute -left-2 -top-16 select-none text-[26vw] leading-none text-ink/[0.07] md:-top-24 md:text-[16vw]"
            style={{ fontFamily: "serif" }}
          >
            “
          </span>
          <AnimatePresence mode="wait" initial={false}>
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, x: dir * 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -80 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-4xl"
            >
              <p className="display text-[6.4vw] leading-[1.02] text-ink md:text-[2.9vw]">
                {REVIEWS[i]!.quote}
              </p>
              <footer className="mt-10 flex items-center gap-4">
                <span className="h-px w-10 bg-ink/40" />
                <cite className="not-italic text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-ink/60">
                  {REVIEWS[i]!.name}
                </cite>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center gap-4">
          <button
            type="button"
            aria-label="Previous review"
            onClick={() => go(-1)}
            className="flex h-11 w-11 items-center justify-center border border-ink/20 transition-colors hover:bg-ink hover:text-ivory"
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Next review"
            onClick={() => go(1)}
            className="flex h-11 w-11 items-center justify-center border border-ink/20 transition-colors hover:bg-ink hover:text-ivory"
          >
            →
          </button>
          <span className="ml-3 text-[0.6rem] uppercase tracking-[0.3em] text-ink/45">
            0{i + 1} / 0{REVIEWS.length}
          </span>
        </div>
      </div>
    </section>
  );
}
