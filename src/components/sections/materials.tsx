import { Reveal, SectionHeading } from "@/components/reveal";
import type { Product } from "@/data/product";

export function MaterialsSection({ materials }: { materials: Product["materials"] }) {
  return (
    <section id="materials" className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-[1500px] gap-14 px-4 py-24 sm:px-8 lg:grid-cols-[minmax(0,40%)_minmax(0,1fr)] lg:gap-20 lg:px-10 lg:py-40">
        <div>
          <SectionHeading eyebrow="Composition" title="Materials" />
          <Reveal variant="left" delay={120}>
            <img
              src={materials.image.src}
              alt={materials.image.alt}
              width={1200}
              height={900}
              loading="lazy"
              className="mt-10 aspect-[4/3] w-full rounded-sm object-cover"
            />
          </Reveal>
        </div>

        <div className="lg:pt-6">
          <Reveal variant="text">
            <p className="max-w-2xl text-lg leading-relaxed text-foreground/90">{materials.intro}</p>
          </Reveal>
          <dl className="mt-12 divide-y divide-border border-y border-border">
            {materials.points.map((point, i) => (
              <Reveal key={point.label} variant="right" delay={i * 100} className="grid gap-2 py-7 sm:grid-cols-[minmax(0,9rem)_1fr] sm:gap-8">
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  {point.label}
                </dt>
                <dd className="text-sm leading-relaxed text-muted-foreground">{point.body}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
