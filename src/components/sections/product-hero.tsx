import { ArrowRight, MessageCircle, Share2 } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { ProductGallery } from "@/components/product-gallery";
import { Reveal } from "@/components/reveal";
import { whatsappLink } from "@/components/whatsapp";
import type { Product, Taxon } from "@/data/product";

function TaxonList({ label, items }: { label: string; items: Taxon[] }) {
  if (!items.length) return null;
  return (
    <div className="flex flex-wrap gap-x-2 gap-y-1">
      <dt className="font-semibold text-gold">{label}:</dt>
      <dd className="min-w-0">
        {items.map((item, i) => (
          <span key={item.href}>
            <Link
              to={item.href}
              className="underline-offset-4 transition-colors hover:text-gold hover:underline"
            >
              {item.label}
            </Link>
            {i < items.length - 1 ? <span aria-hidden="true">, </span> : null}
          </span>
        ))}
      </dd>
    </div>
  );
}

export function ProductHero({
  product,
  onEnquire,
}: {
  product: Product;
  onEnquire: () => void;
}) {
  return (
    <section className="mx-auto grid max-w-[1500px] gap-12 px-4 pb-20 sm:px-8 lg:grid-cols-[minmax(0,47%)_minmax(0,1fr)] lg:gap-16 lg:px-10 lg:pb-32">
      <Reveal variant="scale" className="min-w-0">
        <ProductGallery images={product.gallery} />
      </Reveal>

      <div className="min-w-0">
        <Reveal variant="up">
          <h1 className="font-display text-4xl leading-[1.05] text-gold-gradient sm:text-5xl xl:text-[3.4rem]">
            {product.name}
          </h1>
        </Reveal>

        <Reveal variant="up" delay={100}>
          <dl className="mt-7 space-y-2.5 text-sm">
            <div className="flex flex-wrap gap-x-2">
              <dt className="font-semibold text-gold">SKU:</dt>
              <dd>{product.sku}</dd>
            </div>
            <TaxonList label="Categories" items={product.categories} />
            <TaxonList label="Tags" items={product.tags} />
            <TaxonList label="Colours" items={product.colours} />
          </dl>
        </Reveal>

        <Reveal variant="text" delay={160}>
          <p className="mt-7 text-sm text-muted-foreground">{product.tagline}</p>
          <ul className="mt-5 space-y-2.5 text-[0.95rem]">
            {product.highlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal variant="up" delay={220}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={onEnquire}
              className="group inline-flex items-center gap-3 rounded-full border border-gold bg-background px-8 py-4 text-[0.95rem] font-medium text-gold shadow-gold-glow transition-all hover:scale-[1.03] hover:bg-gold-gradient hover:text-primary-foreground"
            >
              Enquire Now
              <span className="grid h-7 w-7 place-items-center rounded-full bg-gold-gradient text-primary-foreground transition-transform group-hover:translate-x-0.5">
                <ArrowRight className="h-4 w-4" />
              </span>
            </button>

            <a
              href={whatsappLink(product.whatsappNumber, product.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full border border-gold/45 px-6 py-4 text-[0.95rem] font-medium text-gold transition-all hover:scale-[1.03] hover:border-gold hover:shadow-gold-glow"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>

            <button
              type="button"
              onClick={() => {
                void navigator.clipboard?.writeText(
                  typeof window !== "undefined" ? window.location.href : "",
                );
                toast.success("Product link copied");
              }}
              aria-label="Share product"
              className="grid h-12 w-12 place-items-center rounded-full border border-border transition-all hover:scale-105 hover:border-gold hover:text-gold"
            >
              <Share2 className="h-4 w-4" />
            </button>
          </div>
        </Reveal>

        <Reveal variant="text" delay={280}>
          <p className="mt-6 text-xs text-muted-foreground">
            Made to order · Dispatched in 3–5 working days · Enquiry-based pricing for trade and
            residential projects
          </p>
          <div className="rule-gold mt-9 w-full" />
        </Reveal>
      </div>
    </section>
  );
}
