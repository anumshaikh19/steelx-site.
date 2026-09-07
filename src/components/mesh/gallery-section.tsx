import { useMemo, useState } from "react";

import { Section } from "@/components/page-shell";
import { Reveal, SectionHeading } from "@/components/reveal";
import { Lightbox } from "@/components/lightbox";
import { inspirationCategories, inspirations } from "@/data/mesh";
import { cn } from "@/lib/utils";

/* ── 19–21 Inspiration gallery ───────────────────────────────── */
export function InspirationGallery() {
  const [category, setCategory] = useState("All spaces");
  const [index, setIndex] = useState<number | null>(null);

  const list = useMemo(
    () =>
      category === "All spaces"
        ? inspirations
        : inspirations.filter((i) => i.category === category),
    [category],
  );

  const images = list.map((i) => ({ src: i.image, alt: i.title }));

  return (
    <Section className="border-t border-border">
      <div className="flex flex-wrap items-end justify-between gap-8">
        <SectionHeading eyebrow="Architectural reference" title="Inspiration galleries" />
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
          Reference installations by space type. Click any frame to open the full-screen viewer.
        </p>
      </div>

      <div className="no-scrollbar -mx-4 mt-10 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:px-0">
        {inspirationCategories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCategory(c)}
            aria-pressed={category === c}
            className={cn(
              "shrink-0 border px-5 py-2.5 text-[0.6rem] uppercase tracking-[0.24em] transition-colors",
              category === c
                ? "border-champagne text-champagne"
                : "border-border text-muted-foreground hover:border-champagne hover:text-champagne",
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((item, i) => (
          <button
            key={item.title}
            type="button"
            onClick={() => setIndex(i)}
            data-cursor="Explore"
            className="group block text-left"
          >
            <div className="aspect-[4/3] overflow-hidden border border-border metal-sheen">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1300ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
              />
            </div>
            <p className="mt-3 text-[0.56rem] uppercase tracking-[0.3em] text-champagne">{item.category}</p>
            <h3 className="mt-2 font-display text-lg leading-snug text-foreground group-hover:text-champagne">
              {item.title}
            </h3>
            <p className="mt-1 text-[0.58rem] uppercase tracking-[0.22em] text-muted-foreground">{item.spec}</p>
          </button>
        ))}
      </div>

      <Reveal variant="row" className="mt-8 text-[0.6rem] tabular-nums uppercase tracking-[0.3em] text-muted-foreground">
        {String(list.length).padStart(2, "0")} / {String(inspirations.length).padStart(2, "0")} references
      </Reveal>

      <Lightbox images={images} index={index} onClose={() => setIndex(null)} onIndex={setIndex} />
    </Section>
  );
}
