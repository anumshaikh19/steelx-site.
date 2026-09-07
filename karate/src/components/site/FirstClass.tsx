import { motion } from "motion/react";
import { BRAND } from "./data";

const STEPS = [
  {
    n: "01",
    title: "CALL AND VISIT",
    body: "Ring the dojo and tell us the student's age and what you want from training. We will tell you which batch fits and when to come and watch.",
  },
  {
    n: "02",
    title: "WATCH A SESSION",
    body: "Stand at the edge of the floor for a full class. You will see the warm-up, the basics, and how juniors are corrected — no pressure to sign anything.",
  },
  {
    n: "03",
    title: "FIRST TRAINING",
    body: "Loose clothes and water are enough for day one. A gi comes later. You start with stance, breathing and footwork — the same three things black belts still drill.",
  },
  {
    n: "04",
    title: "SETTLE INTO A BATCH",
    body: "Once you have a regular slot, progress is tracked on the floor. Grading is offered when the technique is ready, not on a fixed calendar.",
  },
];

const FAQ = [
  {
    q: "WHAT AGE CAN CHILDREN START?",
    a: "From around two and a half years. The youngest students train in small groups where the syllabus is taught through games, focus drills and etiquette.",
  },
  {
    q: "I HAVE NEVER TRAINED BEFORE.",
    a: "Most people who walk in haven't. Beginners are taught the basics separately within the class, and nobody spars until stance and control are in place.",
  },
  {
    q: "DO I NEED A UNIFORM OR GEAR?",
    a: "Not for your first sessions. Comfortable clothes and water are enough. A gi and sparring gear are recommended once you commit to a batch.",
  },
  {
    q: "IS THERE A WOMEN'S SELF DEFENCE OPTION?",
    a: "Yes — self defence is taught as close-range escapes and street-realistic drills, and women's batches are run separately.",
  },
  {
    q: "CAN ADULTS TRAIN TOO?",
    a: "Karate, calisthenics and self defence all run for adults. Many adults train purely for strength, mobility and stress relief.",
  },
  {
    q: "WHAT ARE THE TIMINGS AND FEES?",
    a: "The dojo is open 7:00 AM to 9:30 PM, with kids batches in the late afternoon, adult karate in the evening and calisthenics in the morning. Monthly fees start around ₹1,200 for kids and ₹1,500 for adults, plus a one-time ₹500 admission. Call " + BRAND.phone + " to confirm your batch and exact fee.",
  },
  {
    q: "IS THE FIRST CLASS FREE?",
    a: "Yes — your first session is free, whether you watch from the edge of the floor or train with the batch. Bring loose clothes and water; a gi is only needed once you commit.",
  },
];

export function FirstClass() {
  return (
    <section id="start" className="relative bg-paper px-5 py-24 text-ink md:px-10 md:py-32">
      <div className="mx-auto max-w-[104rem]">
        <div className="flex items-center gap-4">
          <span className="num-tag text-xs text-ink/50">08</span>
          <span className="h-px w-16 bg-ink/20" />
          <span className="kicker text-ink/50">YOUR FIRST WEEK</span>
        </div>

        <h2 className="display mt-10 max-w-3xl text-[12vw] leading-[0.84] text-ink md:text-[5.4vw]">
          HOW TRAINING <span className="text-blood/80">STARTS.</span>
        </h2>

        <div className="mt-16 grid gap-px border-t border-ink/15 md:grid-cols-4">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`py-9 md:px-7 ${
                i > 0 ? "border-t border-ink/15 md:border-l md:border-t-0" : "md:pl-0"
              }`}
            >
              <span className="num-tag text-xs text-ink/45">{s.n}</span>
              <h3 className="display mt-4 text-2xl text-ink">{s.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-ink/65">{s.body}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 grid gap-10 md:grid-cols-[0.4fr_1fr] md:gap-20">
          <div>
            <p className="kicker text-ink/50">QUESTIONS</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink/60">
              The answers parents and beginners ask us most often before their first visit.
            </p>
            <a
              href={BRAND.phoneHref}
              className="mt-8 inline-block border-b border-ink/40 pb-1 text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-ink hover:border-ink"
            >
              CALL {BRAND.phone}
            </a>
          </div>

          <dl className="border-t border-ink/15">
            {FAQ.map((f) => (
              <div key={f.q} className="border-b border-ink/15 py-7">
                <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-ink">
                  {f.q}
                </dt>
                <dd className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/65">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
