import { useState, type FormEvent, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Check, ChevronDown } from "lucide-react";
import { toast } from "sonner";

import { cn } from "@/lib/utils";
import { ON_REQUEST, type ColourProduct, type Faq, type SheetFinishEntry } from "@/data/products/designer-sheets";

/* ---------------------------------------------------------------- layout */

export function ProductSection({
  id,
  eyebrow,
  title,
  lead,
  children,
  className,
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  lead?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section
      {...(id ? { id } : {})}
      className={cn("mx-auto max-w-[1500px] px-4 py-20 sm:px-8 lg:px-10 lg:py-32", className)}
    >
      {eyebrow ? (
        <p className="text-[0.66rem] uppercase tracking-[0.32em] text-champagne">{eyebrow}</p>
      ) : null}
      {title ? (
        <h2 className="mt-5 max-w-4xl font-display text-3xl leading-[1.02] text-foreground sm:text-4xl lg:text-6xl">
          {title}
        </h2>
      ) : null}
      {lead ? <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">{lead}</p> : null}
      {children}
    </section>
  );
}

/* ----------------------------------------------------------- breadcrumbs */

export type Crumb = { label: string; to?: string; params?: Record<string, string> };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-[1500px] px-4 pt-6 sm:px-8 lg:px-10">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.66rem] uppercase tracking-[0.22em] text-muted-foreground">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-2">
            {item.to ? (
              <Link
                to={item.to}
                {...(item.params ? { params: item.params } : {})}
                className="transition-colors hover:text-champagne"
              >
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-foreground">
                {item.label}
              </span>
            )}
            {i < items.length - 1 ? <span aria-hidden>/</span> : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/* ------------------------------------------------------------ spec table */

export function SpecTable({ rows }: { rows: { label: string; value: string }[] }) {
  return (
    <div className="mt-10 border-t border-border">
      <dl>
        {rows.map((row) => (
          <div
            key={row.label}
            className="grid gap-1 border-b border-border px-1 py-5 sm:grid-cols-[minmax(0,18rem)_1fr] sm:gap-8 sm:py-6"
          >
            <dt className="text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">{row.label}</dt>
            <dd
              className={cn(
                "text-sm leading-relaxed",
                row.value === ON_REQUEST ? "text-champagne" : "text-foreground",
              )}
            >
              {row.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

/* -------------------------------------------------------------- faq list */

export function FaqList({ items }: { items: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mt-10 border-t border-border">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="border-b border-border">
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-6 py-5 text-left text-base text-foreground transition-colors hover:text-champagne"
              >
                <span>{item.q}</span>
                <ChevronDown
                  className={cn("h-4 w-4 shrink-0 transition-transform duration-500", isOpen && "rotate-180")}
                />
              </button>
            </h3>
            <div
              className={cn(
                "grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <p className="overflow-hidden pr-8 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* -------------------------------------------------------- colour selector */

export function ColourSelector({
  products,
  activeSlug,
  heading = "Available colours",
}: {
  products: ColourProduct[];
  activeSlug?: string;
  heading?: string;
}) {
  if (!products.length) return null;
  return (
    <div>
      <p className="text-[0.66rem] uppercase tracking-[0.32em] text-champagne">{heading}</p>
      <ul className="mt-8 grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <li key={product.slug}>
            <Link
              to="/designer-sheets/$finish/$product"
              params={{ finish: product.finishSlug, product: product.slug }}
              aria-current={product.slug === activeSlug ? "page" : undefined}
              className={cn(
                "group flex h-full flex-col gap-4 bg-background p-4 transition-colors hover:bg-accent/40 sm:p-5",
                product.slug === activeSlug && "bg-accent/60",
              )}
            >
              <span
                aria-hidden
                className="block h-20 w-full border border-border/70 transition-transform duration-700 group-hover:scale-[1.02] sm:h-24"
                style={{
                  backgroundImage: `url(${product.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <span className="text-sm text-foreground">{product.colour}</span>
              <span className="mt-auto flex items-center gap-1.5 text-[0.62rem] uppercase tracking-[0.2em] text-muted-foreground transition-colors group-hover:text-champagne">
                {product.coating.startsWith("None") ? "Uncoated" : "PVD"}
                <ArrowUpRight className="h-3 w-3" />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ------------------------------------------------------------ finish grid */

export function FinishLinks({
  finishes,
  activeSlug,
  heading = "Explore other surfaces",
}: {
  finishes: SheetFinishEntry[];
  activeSlug?: string;
  heading?: string;
}) {
  const list = finishes.filter((f) => f.slug !== activeSlug);
  return (
    <div>
      <p className="text-[0.66rem] uppercase tracking-[0.32em] text-champagne">{heading}</p>
      <ul className="mt-8 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {list.map((finish) => (
          <li key={finish.slug}>
            <Link
              to="/designer-sheets/$finish"
              params={{ finish: finish.slug }}
              className="group flex h-full flex-col gap-3 bg-background p-6 transition-colors hover:bg-accent/40"
            >
              <span
                aria-hidden
                className="h-1 w-16 transition-all duration-700 group-hover:w-24"
                style={{ backgroundImage: finish.swatch }}
              />
              <span className="mt-2 font-display text-2xl text-foreground">{finish.name}</span>
              <span className="text-sm leading-relaxed text-muted-foreground">{finish.shortDescription}</span>
              <span className="mt-auto pt-4 text-[0.62rem] uppercase tracking-[0.2em] text-champagne">
                {finish.name} stainless steel sheets →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ------------------------------------------------------------------- CTAs */

export function SampleCta({ onRequest }: { onRequest: () => void }) {
  return (
    <section id="sample" className="border-y border-border bg-accent/20">
      <div className="mx-auto max-w-[1500px] px-4 py-20 sm:px-8 lg:px-10 lg:py-28">
        <h2 className="max-w-3xl font-display text-3xl leading-[1.02] text-foreground sm:text-5xl lg:text-6xl">
          SEE THE SURFACE IN PERSON.
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
          Material is experienced differently in light, scale and texture. Request a physical STEELX sample for your
          project.
        </p>
        <button
          type="button"
          onClick={onRequest}
          className="mt-10 inline-flex items-center gap-3 border border-champagne/60 px-8 py-4 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-champagne transition-colors hover:bg-champagne hover:text-metal-black"
        >
          Request a sample
          <ArrowUpRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ quote form */

const fieldCls =
  "mt-2 w-full border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-champagne focus:outline-none";
const labelCls = "text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground";

export function QuoteCta({
  defaults,
  finishOptions,
  colourOptions,
  patternOptions,
}: {
  defaults: { finish: string; colour: string; pattern: string };
  finishOptions: string[];
  colourOptions: string[];
  patternOptions: string[];
}) {
  const [sent, setSent] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
    toast.success("Quote request sent — our team will be in touch");
  };

  return (
    <section id="quote" className="mx-auto max-w-[1500px] px-4 py-20 sm:px-8 lg:px-10 lg:py-32">
      <h2 className="max-w-3xl font-display text-3xl leading-[1.02] text-foreground sm:text-5xl lg:text-6xl">
        SPECIFY YOUR SURFACE.
      </h2>
      <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
        Send us the finish, colour and quantity you are working towards — drawings welcome — and we will come back with
        a project quote.
      </p>

      {sent ? (
        <div className="mt-12 border border-champagne/40 px-6 py-14 text-center">
          <span className="mx-auto grid h-12 w-12 place-items-center rounded-full border border-champagne text-champagne">
            <Check className="h-5 w-5" />
          </span>
          <h3 className="mt-5 font-display text-2xl text-foreground">Quote request received</h3>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
            Thank you. Our team will review your requirement and reply within one working day.
          </p>
          <button
            type="button"
            onClick={() => setSent(false)}
            className="mt-6 text-[0.66rem] uppercase tracking-[0.2em] text-champagne underline-offset-4 hover:underline"
          >
            Send another request
          </button>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="mt-12 grid gap-6 border-t border-border pt-10 lg:grid-cols-2">
          <label className="block">
            <span className={labelCls}>Name</span>
            <input required name="name" className={fieldCls} placeholder="Your name" />
          </label>
          <label className="block">
            <span className={labelCls}>Company</span>
            <input name="company" className={fieldCls} placeholder="Practice or company" />
          </label>
          <label className="block">
            <span className={labelCls}>Email</span>
            <input required type="email" name="email" className={fieldCls} placeholder="you@studio.com" />
          </label>
          <label className="block">
            <span className={labelCls}>Phone</span>
            <input name="phone" className={fieldCls} placeholder="+91" />
          </label>
          <label className="block lg:col-span-2">
            <span className={labelCls}>Project</span>
            <input name="project" className={fieldCls} placeholder="Project name and location" />
          </label>
          <label className="block">
            <span className={labelCls}>Finish</span>
            <select name="finish" defaultValue={defaults.finish} className={fieldCls}>
              {finishOptions.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className={labelCls}>Colour</span>
            <select name="colour" defaultValue={defaults.colour} className={fieldCls}>
              {colourOptions.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className={labelCls}>Pattern</span>
            <select name="pattern" defaultValue={defaults.pattern} className={fieldCls}>
              {patternOptions.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className={labelCls}>Grade</span>
            <select name="grade" className={fieldCls}>
              <option>SS304</option>
              <option>SS316</option>
              <option>{ON_REQUEST}</option>
            </select>
          </label>
          <label className="block">
            <span className={labelCls}>Thickness</span>
            <input name="thickness" className={fieldCls} placeholder="Available on request" />
          </label>
          <label className="block">
            <span className={labelCls}>Size</span>
            <select name="size" className={fieldCls}>
              <option>4 × 8 ft</option>
              <option>4 × 10 ft</option>
              <option>Custom dimensions</option>
            </select>
          </label>
          <label className="block">
            <span className={labelCls}>Quantity</span>
            <input name="quantity" className={fieldCls} placeholder="Number of sheets or sq ft" />
          </label>
          <label className="block">
            <span className={labelCls}>Application</span>
            <input name="application" className={fieldCls} placeholder="Wall cladding, lift interior, furniture…" />
          </label>
          <label className="block lg:col-span-2">
            <span className={labelCls}>Message</span>
            <textarea name="message" rows={4} className={fieldCls} placeholder="Anything else we should know" />
          </label>
          <label className="block lg:col-span-2">
            <span className={labelCls}>Drawing upload</span>
            <input
              type="file"
              name="drawing"
              accept=".pdf,.dwg,.dxf,.jpg,.png"
              className={cn(fieldCls, "file:mr-4 file:border-0 file:bg-transparent file:text-champagne")}
            />
          </label>
          <div className="lg:col-span-2">
            <button
              type="submit"
              className="inline-flex items-center gap-3 border border-champagne/60 px-8 py-4 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-champagne transition-colors hover:bg-champagne hover:text-metal-black"
            >
              Request project quote
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </form>
      )}
    </section>
  );
}

/* ----------------------------------------------------------- sticky bar */

export function StickyProductBar({ label, onSample }: { label: string; onSample: () => void }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex items-center gap-3 border-t border-border bg-background/95 px-4 py-3 backdrop-blur lg:hidden">
      <span className="min-w-0 flex-1 truncate text-[0.62rem] uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </span>
      <button
        type="button"
        onClick={onSample}
        className="border border-border px-4 py-2.5 text-[0.62rem] uppercase tracking-[0.18em] text-foreground"
      >
        Sample
      </button>
      <a
        href="#quote"
        className="bg-champagne-gradient px-4 py-2.5 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-metal-black"
      >
        Quote
      </a>
    </div>
  );
}
