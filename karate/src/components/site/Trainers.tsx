import { motion } from "motion/react";
import trainer from "@/assets/trainer.jpg";

export function Trainers() {
  return (
    <section className="relative bg-ink px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[104rem]">
        <div className="flex items-center gap-4">
          <span className="num-tag text-xs">09</span>
          <span className="h-px w-16 bg-line" />
          <span className="kicker">THE PEOPLE BEHIND THE TRAINING</span>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <img
              src={trainer}
              alt="Portrait of the chief instructor at Dhanurveda"
              loading="lazy"
              width={1024}
              height={1280}
              className="w-full object-cover grayscale-[0.25]"
            />
            <span className="mt-4 block kicker text-[0.55rem]">
              PLACEHOLDER PORTRAIT — REPLACE WITH REAL PHOTO
            </span>
          </motion.div>

          <div>
            <h2 className="display text-[11vw] leading-[0.84] text-ivory md:text-[4.6vw]">
              AAKASH SIR
            </h2>
            <p className="mt-4 text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-gold-dim">
              CHIEF INSTRUCTOR · KARATE & SELF DEFENCE
            </p>

            <div className="mt-12 space-y-8 border-t border-line pt-8">
              <div>
                <p className="kicker mb-3 text-[0.55rem]">MENTIONED BY STUDENTS</p>
                <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
                  Named repeatedly in Google reviews as a mentor as much as a coach — students
                  who joined at two and a half years old, and Karatekas training here since
                  2011, credit him with the values as much as the technique.
                </p>
              </div>
              <div>
                <p className="kicker mb-3 text-[0.55rem]">TEACHING PHILOSOPHY</p>
                <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
                  Values before trophies. Correct the stance before adding speed. Every student
                  leaves the floor a little more disciplined than they walked in.
                </p>
              </div>
              <div>
                <p className="kicker mb-3 text-[0.55rem]">ON THE FLOOR SINCE 2011</p>
                <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
                  Black belt karate instructor and the founder of Dhanurveda, teaching in
                  Nagpada for over fourteen years. He runs the kids syllabus, the adult karate
                  batches and the self defence programme himself, and grades students on the
                  floor rather than on a calendar. Senior students who began here as children
                  now assist with warm-ups under his eye.
                </p>
                <p className="mt-4 max-w-xl text-xs leading-relaxed text-muted-foreground/60">
                  Exact ranks, federation affiliations and competition record can be added here
                  once you send them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
