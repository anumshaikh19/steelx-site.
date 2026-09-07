import { motion } from "motion/react";
import { BRAND } from "./data";
import { Dust } from "./Dust";
import { MagneticButton } from "./MagneticButton";

export function FinalCta() {
  return (
    <section id="book" className="relative flex flex-col gap-16 overflow-hidden bg-ink px-5 py-24 md:gap-24 md:px-10">
      <Dust count={34} />
      <div className="absolute inset-0 dojo-grid opacity-20" />
      <div className="vignette" />

      <div className="relative flex items-center gap-4">
        <span className="num-tag text-xs">11</span>
        <span className="h-px w-16 bg-line" />
        <span className="kicker">BEGIN</span>
      </div>

      <div className="relative">
        {["YOUR FIRST STEP", "STARTS HERE."].map((line, i) => (
          <div key={line} className="overflow-hidden">
            <motion.p
              initial={{ y: "110%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
              className={`display text-[16vw] leading-[0.82] md:text-[9vw] ${
                i === 1 ? "text-gold" : "text-ivory"
              }`}
            >
              {line}
            </motion.p>
          </div>
        ))}

        <div className="mt-12 flex flex-wrap items-center gap-4">
          <MagneticButton href={BRAND.phoneHref}>BOOK A TRIAL</MagneticButton>
          <MagneticButton href={BRAND.phoneHref} variant="ghost">
            CALL {BRAND.phone}
          </MagneticButton>
        </div>
      </div>

      <footer className="relative flex flex-wrap items-end justify-between gap-6 border-t border-line pt-8">
        <div>
          <p className="display text-xl text-ivory" style={{ letterSpacing: "0.14em" }}>
            {BRAND.name}
          </p>
          <p className="kicker mt-2 text-[0.5rem]">{BRAND.subtitle}</p>
        </div>
        <p className="max-w-xs text-[0.6rem] uppercase leading-relaxed tracking-[0.22em] text-muted-foreground">
          {BRAND.address}
        </p>
        <p className="text-[0.55rem] uppercase tracking-[0.3em] text-muted-foreground/70">
          © {new Date().getFullYear()} DHANURVEDA · EST. {BRAND.established}
        </p>
      </footer>
    </section>
  );
}
