import { Reveal, SectionHeading } from "@/components/reveal";
import type { Product } from "@/data/product";

export function HowToUseSection({ steps }: { steps: Product["howToUse"] }) {
  if (!steps.length) return null;

  return (
    <section id="how-to-use" className="mx-auto max-w-[1500px] px-4 py-24 sm:px-8 lg:px-10 lg:py-40">
      <SectionHeading eyebrow="Styling" title="How to use" />

      <div className="mt-16 space-y-16 lg:space-y-24">
        {steps.map((step, i) => (
          <div
            key={step.index}
            className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-20"
          >
            <Reveal
              variant={i % 2 === 0 ? "left" : "right"}
              className={i % 2 === 0 ? "" : "lg:order-2"}
            >
              {step.image ? (
                <img
                  src={step.image.src}
                  alt={step.image.alt}
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="aspect-[4/3] w-full rounded-sm bg-white object-cover"
                />
              ) : null}
            </Reveal>

            <Reveal variant="up" delay={140} className={i % 2 === 0 ? "" : "lg:order-1"}>
              <p className="font-display text-5xl text-gold-gradient sm:text-6xl">{step.index}</p>
              <h3 className="mt-5 font-display text-2xl sm:text-3xl">{step.title}</h3>
              <p className="mt-4 max-w-xl text-sm leading-[1.9] text-muted-foreground">{step.body}</p>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}
