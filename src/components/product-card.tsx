import { Eye, Heart, Repeat2, Star } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { toast } from "sonner";

import type { RelatedProduct } from "@/data/product";

export type { RelatedProduct };

const money = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2 });

export function ProductCard({ product }: { product: RelatedProduct }) {
  const discount = product.compareAt
    ? Math.round(((product.compareAt - product.price) / product.compareAt) * 100)
    : 0;

  return (
    <article className="group flex h-full flex-col">
      <div className="relative overflow-hidden rounded-sm bg-white">
        <Link to={product.href} aria-label={product.name}>
          <img
            src={product.image}
            alt={product.name}
            width={1024}
            height={1024}
            loading="lazy"
            className="aspect-square w-full object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        <div className="absolute left-3 top-3 flex flex-col gap-2">
          {discount > 0 ? (
            <span className="rounded-sm bg-sale px-2 py-1 text-[0.7rem] font-semibold text-foreground">
              -{discount}%
            </span>
          ) : null}
          {product.badge ? (
            <span className="rounded-sm bg-gold-gradient px-2 py-1 text-[0.7rem] font-semibold text-primary-foreground">
              {product.badge}
            </span>
          ) : null}
        </div>

        <div className="absolute right-3 top-3 flex translate-x-3 flex-col gap-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 focus-within:translate-x-0 focus-within:opacity-100">
          {[
            { Icon: Heart, label: "Add to wishlist", msg: "Added to wishlist" },
            { Icon: Eye, label: "Quick view", msg: "Quick view" },
            { Icon: Repeat2, label: "Compare", msg: "Added to compare" },
          ].map(({ Icon, label, msg }) => (
            <button
              key={label}
              type="button"
              aria-label={`${label}: ${product.name}`}
              onClick={() => toast.success(`${msg}: ${product.name}`)}
              className="grid h-9 w-9 place-items-center rounded-full bg-background/85 text-foreground transition-colors hover:bg-gold hover:text-primary-foreground"
            >
              <Icon className="h-4 w-4" />
            </button>
          ))}
        </div>

      </div>

      <div className="mt-4 min-w-0">
        <p className="text-[0.7rem] tracking-[0.14em] text-muted-foreground">{product.sku}</p>
        <p className="mt-1 text-xs text-gold">{product.brand}</p>
        <p className="mt-1 line-clamp-1 text-xs text-muted-foreground">
          {product.categories.join(", ")}
        </p>
        <h3 className="mt-2 text-base font-medium leading-snug">
          <Link to={product.href} className="transition-colors hover:text-gold">
            {product.name}
          </Link>
        </h3>
        <p className="mt-2 flex flex-wrap items-baseline gap-2">
          {product.compareAt ? (
            <span className="text-sm text-muted-foreground line-through">
              {money(product.compareAt)}
            </span>
          ) : null}
          <span className="text-base font-semibold text-gold">{money(product.price)}</span>
        </p>
        <p className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
          <span className="flex" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 text-muted-foreground" />
            ))}
          </span>
          <span>0 Reviews</span>
        </p>
      </div>
    </article>
  );
}
