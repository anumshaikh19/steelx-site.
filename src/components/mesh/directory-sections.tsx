import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Search } from "lucide-react";

import { Section } from "@/components/page-shell";
import { Reveal, SectionHeading } from "@/components/reveal";
import { productDirectory, weaves } from "@/data/mesh";
import { WeaveVisual } from "@/components/mesh/weave-visual";
import { cn } from "@/lib/utils";

/* ── 06–07 Complete product directory ────────────────────────── */
export function ProductDirectory() {
  return (
    <Section className="border-t border-border">
      <SectionHeading eyebrow="Product directory" title="Complete product directory" />
      <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        Architectural stainless steel, decorative mesh and PVD solutions — grouped by the way they
        are specified on a drawing set.
      </p>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {productDirectory.map((entry, i) => (
          <Reveal key={entry.code} variant="up" delay={i * 120}>
            <article className="group flex h-full flex-col border border-border transition-colors hover:border-champagne">
              <div className="aspect-[4/3] overflow-hidden metal-sheen" data-cursor="Explore">
                <img
                  src={entry.image}
                  alt={`${entry.name} — architectural stainless steel`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1300ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-2xl text-foreground">{entry.name}</h3>
                  <span className="text-[0.58rem] tracking-[0.3em] text-champagne">{entry.code}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{entry.body}</p>
                <ul className="mt-5 space-y-1.5">
                  {entry.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        to="/category/$slug"
                        params={{ slug: l.href.split("/").pop() ?? "" }}
                        className="text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-champagne"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/category/$slug"
                  params={{ slug: entry.links[0]?.href.split("/").pop() ?? "" }}
                  className="mt-auto inline-flex items-center gap-2 pt-8 text-[0.66rem] uppercase tracking-[0.24em] text-champagne"
                >
                  Explore {entry.name}
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ── 08–11 Specification directory + search + filters ────────── */
const CATEGORY_FILTERS = ["all", "open", "textured", "directional", "dense"] as const;

export function SpecificationDirectory() {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState<(typeof CATEGORY_FILTERS)[number]>("all");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return weaves.filter((w) => {
      const inGroup = group === "all" || w.group === group;
      if (!inGroup) return false;
      if (!q) return true;
      return [w.name, w.group, w.open, w.material, w.body, ...w.applications]
        .join(" ")
        .toLowerCase()
        .includes(q);
    });
  }, [query, group]);

  return (
    <Section className="border-t border-border">
      <div className="flex flex-wrap items-end justify-between gap-8">
        <SectionHeading eyebrow="Our collections" title="Architectural metal mesh categories" />
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
          Search the full specification directory by weave, material, application or category.
          Results filter instantly.
        </p>
      </div>

      <div className="mt-12 flex flex-col gap-5 border-y border-border py-6 lg:flex-row lg:items-center lg:justify-between">
        <label className="flex w-full items-center gap-3 border border-border px-4 py-3 transition-colors focus-within:border-champagne lg:max-w-md">
          <Search className="h-4 w-4 text-champagne" />
          <span className="sr-only">Search specifications</span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search specifications — weave, material, application"
            className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
          />
        </label>
        <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 lg:mx-0 lg:px-0">
          {CATEGORY_FILTERS.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setGroup(c)}
              aria-pressed={group === c}
              className={cn(
                "shrink-0 border px-4 py-2.5 text-[0.6rem] uppercase tracking-[0.22em] transition-colors",
                group === c
                  ? "border-champagne text-champagne"
                  : "border-border text-muted-foreground hover:border-champagne hover:text-champagne",
              )}
            >
              {c === "all" ? "All collections" : c}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-5 text-[0.6rem] uppercase tracking-[0.3em] text-muted-foreground">
        {results.length} specification{results.length === 1 ? "" : "s"}
      </p>

      {results.length === 0 ? (
        <div className="mt-10 border border-border p-12 text-center">
          <p className="font-display text-2xl text-foreground">No specification matches that search.</p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setGroup("all");
            }}
            className="mt-6 border border-champagne px-6 py-3 text-[0.64rem] uppercase tracking-[0.24em] text-champagne transition-colors hover:bg-champagne hover:text-metal-black"
          >
            Reset filters
          </button>
        </div>
      ) : (
        <div className="mt-8 grid gap-px border-t border-border sm:grid-cols-2 lg:grid-cols-3">
          {results.map((w, i) => (
            <Reveal key={w.id} variant="row" delay={(i % 3) * 80}>
              <a
                href={`#weave-${w.id}`}
                data-cursor="View spec"
                className="group flex h-full items-center gap-5 border-b border-border py-5 pr-5 transition-colors hover:bg-surface"
              >
                <WeaveVisual group={w.group} className="h-16 w-16 shrink-0 border border-border" />
                <span className="min-w-0">
                  <span className="block truncate font-display text-lg text-foreground group-hover:text-champagne">
                    {w.name}
                  </span>
                  <span className="mt-1 block text-[0.58rem] uppercase tracking-[0.24em] text-muted-foreground">
                    {w.material}
                  </span>
                  <span className="mt-1 block text-[0.58rem] uppercase tracking-[0.24em] text-champagne">
                    View specification · {w.open}
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      )}
    </Section>
  );
}
