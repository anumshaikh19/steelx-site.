import { Reveal, SectionHeading } from "@/components/reveal";
import type { Product } from "@/data/product";

export function TechnicalSpecs({ specs }: { specs: Product["specs"] }) {
  const rows = specs.filter((s) => Boolean(s.value));
  if (!rows.length) return null;

  return (
    <section id="specifications" className="mx-auto max-w-[1500px] px-4 py-24 sm:px-8 lg:px-10 lg:py-40">
      <SectionHeading eyebrow="The detail" title="Technical specifications" />

      <div className="mt-14 overflow-hidden rounded-sm border border-gold/35">
        <dl>
          {rows.map((row, i) => (
            <Reveal
              key={row.label}
              variant="row"
              delay={i * 70}
              className="grid gap-1 border-b border-gold/20 px-5 py-5 transition-colors last:border-b-0 hover:bg-accent/50 sm:grid-cols-[minmax(0,16rem)_1fr] sm:gap-8 sm:px-9 sm:py-6"
            >
              <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {row.label}
              </dt>
              <dd className="text-sm leading-relaxed text-foreground">{row.value}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
