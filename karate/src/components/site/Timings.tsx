import { motion } from "motion/react";
import { BRAND } from "./data";

const BATCHES = [
  {
    group: "TINY TIGERS · AGE 2.5–5",
    days: "MON · WED · FRI",
    time: "4:30 – 5:15 PM",
    note: "Games, focus drills, etiquette",
  },
  {
    group: "KIDS KARATE · AGE 6–12",
    days: "MON · WED · FRI",
    time: "5:30 – 6:45 PM",
    note: "Kihon, kata, light controlled sparring",
  },
  {
    group: "TEENS & ADULTS KARATE",
    days: "TUE · THU · SAT",
    time: "7:15 – 8:45 PM",
    note: "Full syllabus, kumite, grading track",
  },
  {
    group: "CALISTHENICS",
    days: "MON – SAT",
    time: "7:00 – 8:30 AM",
    note: "Bodyweight strength, mobility, holds",
  },
  {
    group: "WOMEN'S SELF DEFENCE",
    days: "SUN",
    time: "9:00 – 10:30 AM",
    note: "Close-range escapes, awareness drills",
  },
  {
    group: "PRIVATE / ONE-TO-ONE",
    days: "BY APPOINTMENT",
    time: "FLEXIBLE",
    note: "Grading prep, competition, catch-up",
  },
];

const FEES = [
  { label: "ADMISSION", value: "₹500", note: "One time, includes belt and record card" },
  { label: "KIDS · MONTHLY", value: "₹1,200", note: "Three sessions a week" },
  { label: "ADULTS · MONTHLY", value: "₹1,500", note: "Karate or calisthenics" },
  { label: "BOTH DISCIPLINES", value: "₹2,200", note: "Karate + calisthenics, same month" },
  { label: "QUARTERLY", value: "10% OFF", note: "Paid three months at a time" },
  { label: "TRIAL CLASS", value: "FREE", note: "Watch, or train once with the batch" },
];

export function Timings() {
  return (
    <section id="timings" className="relative bg-ink px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[104rem]">
        <div className="flex items-center gap-4">
          <span className="num-tag text-xs">06</span>
          <span className="h-px w-16 bg-line" />
          <span className="kicker">TIMINGS & FEES</span>
        </div>

        <h2 className="display mt-10 max-w-4xl text-[12vw] leading-[0.84] text-ivory md:text-[5.4vw]">
          WHEN WE ARE <span className="text-gold">ON THE FLOOR.</span>
        </h2>

        <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
          The dojo is open 7:00 AM to 9:30 PM. Batches below are the regular weekly slots —
          confirm your exact batch on a call, because groups are balanced by age and level.
        </p>

        <div className="mt-16 border-t border-line">
          {BATCHES.map((b, i) => (
            <motion.div
              key={b.group}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="grid gap-2 border-b border-line py-6 md:grid-cols-[1.1fr_0.7fr_0.7fr_1.2fr] md:items-baseline md:gap-8"
            >
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-ivory">
                {b.group}
              </p>
              <p className="text-[0.62rem] uppercase tracking-[0.24em] text-gold-dim">{b.days}</p>
              <p className="display text-xl text-ivory">{b.time}</p>
              <p className="text-sm leading-relaxed text-muted-foreground">{b.note}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 grid gap-px border-t border-line sm:grid-cols-2 md:grid-cols-3">
          {FEES.map((f) => (
            <div key={f.label} className="border-b border-line px-0 py-7 md:px-7">
              <p className="kicker text-[0.5rem]">{f.label}</p>
              <p className="display mt-3 text-3xl text-ivory">{f.value}</p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{f.note}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-6">
          <a
            href={BRAND.phoneHref}
            className="border border-gold/40 px-6 py-3 text-[0.62rem] font-semibold uppercase tracking-[0.26em] text-gold transition-colors hover:bg-gold hover:text-ink"
          >
            CALL {BRAND.phone} TO CONFIRM
          </a>
          <p className="max-w-md text-[0.6rem] uppercase leading-relaxed tracking-[0.2em] text-muted-foreground/70">
            Timings and fees shown are indicative and are confirmed on a call — sibling and
            annual discounts are handled at the dojo.
          </p>
        </div>
      </div>
    </section>
  );
}
