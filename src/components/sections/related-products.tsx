import { Carousel } from "@/components/carousel";
import { ProductCard } from "@/components/product-card";
import { Reveal, SectionHeading } from "@/components/reveal";
import type { Product } from "@/data/product";

export function RelatedProducts({ items }: { items: Product["related"] }) {
  if (!items.length) return null;

  return (
    <section id="related" className="mx-auto max-w-[1500px] px-4 py-24 sm:px-8 lg:px-10 lg:py-40">
      <SectionHeading eyebrow="Collection" title="Related products" />
      <Reveal variant="up" delay={100} className="mt-12 min-w-0">
        <Carousel label="Related products" count={items.length} itemClass="w-[72%] sm:w-[44%] lg:w-[28%]">
          {items.map((item) => (
            <ProductCard key={item.sku} product={item} />
          ))}
        </Carousel>
      </Reveal>
    </section>
  );
}
