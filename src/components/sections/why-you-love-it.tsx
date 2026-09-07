import { Carousel } from "@/components/carousel";
import { Reveal, SectionHeading } from "@/components/reveal";
import type { Product } from "@/data/product";

export function WhyYouLoveItCarousel({ data }: { data: Product["whyYouLoveIt"] }) {
  return (
    <section id="why-you-love-it" className="border-y border-border bg-surface">
      <div className="mx-auto max-w-[1500px] px-4 py-24 sm:px-8 lg:px-10 lg:py-40">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,34%)_minmax(0,1fr)] lg:gap-20">
          <div>
            <SectionHeading eyebrow="The reasons" title="Why you love it" />
            <ul className="mt-10 space-y-4">
              {data.points.map((point, i) => (
                <Reveal key={point} variant="up" delay={i * 80} as="li" className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                  {point}
                </Reveal>
              ))}
            </ul>
            <Reveal variant="text" delay={200}>
              <p className="mt-8 max-w-md text-sm leading-[1.9] text-muted-foreground">{data.note}</p>
            </Reveal>
          </div>

          <Reveal variant="right" className="min-w-0">
            <Carousel
              label="Bess pillow gallery"
              count={data.images.length}
              itemClass="w-[80%] sm:w-[58%] lg:w-[48%]"
            >
              {data.images.map((img) => (
                <figure key={img.src} className="overflow-hidden rounded-sm bg-white">
                  <img
                    src={img.src}
                    alt={img.alt}
                    width={1024}
                    height={1024}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover"
                  />
                </figure>
              ))}
            </Carousel>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
