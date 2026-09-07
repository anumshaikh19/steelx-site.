import { motion } from "motion/react";
import { BRAND, DIRECTIONS_URL, MAP_EMBED } from "./data";
import { MagneticButton } from "./MagneticButton";

export function Location() {
  return (
    <section id="dojo" className="relative bg-ink px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[104rem]">
        <div className="flex items-center gap-4">
          <span className="num-tag text-xs">10</span>
          <span className="h-px w-16 bg-line" />
          <span className="kicker">NAGPADA · MUMBAI</span>
        </div>

        <h2 className="display mt-8 text-[15vw] leading-[0.8] text-ivory md:text-[8vw]">
          FIND THE <span className="text-gold">DOJO.</span>
        </h2>

        <div className="mt-16 grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <div>
            <p className="max-w-sm text-lg leading-relaxed text-ivory/85">{BRAND.address}</p>
            <div className="mt-10 space-y-3 border-t border-line pt-8 text-xs uppercase tracking-[0.24em] text-muted-foreground">
              <p>OPEN DAILY · 7:00 AM — 9:30 PM</p>
              <p>PHONE · {BRAND.phone}</p>
              <p>
                WEB ·{" "}
                <a href={BRAND.site} className="text-gold hover:text-ivory">
                  thedhanurveda.com
                </a>
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <MagneticButton href={DIRECTIONS_URL}>GET DIRECTIONS</MagneticButton>
              <MagneticButton href={BRAND.phoneHref} variant="ghost">
                CALL THE DOJO
              </MagneticButton>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="relative border border-line"
          >
            <div className="relative h-[52svh] overflow-hidden md:h-full md:min-h-[26rem]">
              <iframe
                title="Map to Dhanurveda Martial Arts & Calisthenics, Nagpada, Mumbai"
                src={MAP_EMBED}
                loading="lazy"
                className="h-full w-full grayscale invert-[0.92] contrast-[1.1]"
                style={{ border: 0, filter: "grayscale(1) invert(0.9) contrast(1.15) sepia(0.15)" }}
              />
              <span className="pointer-events-none absolute inset-0 bg-ink/25" />
              {/* animated route hairlines */}
              <svg aria-hidden className="pointer-events-none absolute inset-0 h-full w-full">
                <motion.line
                  x1="0" y1="30%" x2="100%" y2="30%"
                  stroke="var(--gold)" strokeWidth="1" strokeDasharray="6 10"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.45 }}
                  transition={{ duration: 2 }}
                />
                <motion.line
                  x1="62%" y1="0" x2="62%" y2="100%"
                  stroke="var(--gold)" strokeWidth="1" strokeDasharray="6 10"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.3 }}
                  transition={{ duration: 2, delay: 0.4 }}
                />
              </svg>
            </div>
            <span className="absolute right-3 top-3 bg-ink/80 px-3 py-1.5 text-[0.5rem] uppercase tracking-[0.3em] text-gold">
              PT MANE GARDEN
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
