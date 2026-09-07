import { Reveal, SectionHeading } from "@/components/reveal";
import { Link } from "@tanstack/react-router";
import type { Product } from "@/data/product";

export function KeywordsSection({ keywords }: { keywords: Product["keywords"] }) {
  if (!keywords.length) return null;

  return (
    <section id="keywords" className="border-t border-border">
      <div className="mx-auto max-w-[1500px] px-4 py-20 sm:px-8 lg:px-10 lg:py-28">
        <SectionHeading eyebrow="Discover" title="Keywords" />
        <ul className="mt-10 flex flex-wrap gap-3">
          {keywords.map((kw, i) => (
            <Reveal key={kw.href + kw.label} variant="row" delay={i * 60} as="li">
              <Link
                to={kw.href}
                className="inline-flex rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-all hover:scale-[1.03] hover:border-gold hover:text-gold"
              >
                {kw.label}
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
