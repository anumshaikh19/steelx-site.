import { Reveal, SectionHeading } from "@/components/reveal";
import type { Product } from "@/data/product";

export function CareSection({ care }: { care: Product["care"] }) {
  if (!care.length) return null;

  return (
    <section id="care" className="border-y border-border bg-surface">
      <div className="mx-auto max-w-[1500px] px-4 py-24 sm:px-8 lg:px-10 lg:py-40">
        <SectionHeading eyebrow="Longevity" title="Care instructions" />
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-14">
          {care.map((item, i) => (
            <Reveal key={item.title} variant="up" delay={i * 120}>
              <div className="rule-gold w-full" />
              <h3 className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-[1.9] text-muted-foreground">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
