import { Reveal, SectionHeading } from "@/components/reveal";
import type { Product } from "@/data/product";

export function ProductStory({ description }: { description: Product["description"] }) {
  return (
    <section id="description" className="mx-auto max-w-[1500px] px-4 py-24 sm:px-8 lg:px-10 lg:py-40">
      <SectionHeading eyebrow="Product description" title={description.heading} className="max-w-3xl" />

      <div className="mt-16 grid gap-16 lg:grid-cols-[minmax(0,38%)_minmax(0,1fr)] lg:gap-20">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="space-y-10">
            {description.blocks.map((block, i) => (
              <Reveal key={block.text} variant="text" delay={i * 90}>
                <p className="text-sm leading-[1.9] text-muted-foreground">{block.text}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="space-y-10 lg:space-y-24">
          {description.blocks.map((block, i) => (
            <Reveal
              key={block.image.src}
              variant={i % 2 === 0 ? "right" : "scale"}
              className={i % 2 === 1 ? "lg:translate-x-8" : undefined}
            >
              <img
                src={block.image.src}
                alt={block.image.alt}
                width={1400}
                height={1000}
                loading="lazy"
                className="aspect-[5/4] w-full rounded-sm object-cover"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
