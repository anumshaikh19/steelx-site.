import { useMemo, useState } from "react";
import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, Search } from "lucide-react";

import { PageShell, Section } from "@/components/page-shell";
import { Reveal } from "@/components/reveal";
import { Marquee } from "@/components/motion";
import {
  formatDate,
  journalCategories,
  journalPosts,
  type JournalCategoryFilter,
} from "@/data/journal";
import { cn } from "@/lib/utils";

const title = "Journal — Metal, PVD & surface knowledge | STEELX";
const description =
  "Long-form notes on PVD coating, stainless grades, decorative mesh, colour consistency, detailing and care — written for architects and interior designers.";

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: JournalLayout,
});

function JournalLayout() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  if (pathname !== "/journal" && pathname !== "/journal/") return <Outlet />;
  return <JournalIndex />;
}

function JournalIndex() {
  const [category, setCategory] = useState<JournalCategoryFilter>("All");
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return journalPosts.filter((p) => {
      if (category !== "All" && p.category !== category) return false;
      if (!q) return true;
      return [p.title, p.excerpt, p.category].some((v) => v.toLowerCase().includes(q));
    });
  }, [category, query]);

  const [lead, ...rest] = results;

  return (
    <PageShell>
      <section className="relative mx-auto max-w-[1600px] px-4 pb-12 pt-28 sm:px-8 lg:px-10 lg:pt-40">
        <div className="pointer-events-none absolute inset-0 tech-grid opacity-40" aria-hidden="true" />
        <div className="relative">
          <Reveal variant="text" as="p" className="text-[0.62rem] uppercase tracking-[0.4em] text-champagne">
            {journalPosts.length} articles
          </Reveal>
          <Reveal variant="up" delay={80}>
            <h1 className="mt-6 font-display text-[3.4rem] leading-[0.9] text-foreground sm:text-8xl lg:text-[10rem]">
              JOURNAL
            </h1>
          </Reveal>
          <Reveal variant="up" delay={160}>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-lg">
              What we have learned coating, fabricating and installing metal — written for the
              people who specify it.
            </p>
          </Reveal>
        </div>
      </section>

      <Marquee items={["PVD TECHNOLOGY", "MATERIALS", "INTERIORS", "ARCHITECTURE", "SPECIFICATION", "CARE"]} />

      <Section className="lg:py-16">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="-mx-4 overflow-x-auto px-4 no-scrollbar sm:mx-0 sm:px-0">
            <ul className="flex min-w-max items-center gap-2">
              {journalCategories.map((c) => (
                <li key={c}>
                  <button
                    type="button"
                    aria-pressed={category === c}
                    onClick={() => setCategory(c)}
                    className={cn(
                      "border px-5 py-2.5 text-[0.66rem] uppercase tracking-[0.2em] transition-colors",
                      category === c
                        ? "border-champagne bg-champagne-gradient text-metal-black"
                        : "border-border text-muted-foreground hover:border-champagne hover:text-champagne",
                    )}
                  >
                    {c}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <label className="relative block w-full lg:w-80">
            <span className="sr-only">Search articles</span>
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="search"
              placeholder="Search articles"
              className="w-full border border-border bg-surface/50 py-3.5 pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-champagne focus:outline-none"
            />
          </label>
        </div>

        {results.length === 0 ? (
          <p className="mt-20 border-t border-border pt-20 text-center font-display text-3xl text-foreground">
            No articles found.
          </p>
        ) : (
          <>
            {lead ? (
              <Reveal variant="scale" className="mt-14">
                <Link
                  to="/journal/$slug"
                  params={{ slug: lead.slug }}
                  data-cursor="Read →"
                  className="group grid gap-8 border border-border lg:grid-cols-2"
                >
                  <div className="aspect-[16/10] overflow-hidden lg:aspect-auto lg:h-full">
                    <img
                      src={lead.hero}
                      alt={lead.heroAlt}
                      className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-8 lg:p-14">
                    <p className="text-[0.6rem] uppercase tracking-[0.3em] text-champagne">
                      {lead.category} · {lead.readingTime}
                    </p>
                    <h2 className="mt-5 font-display text-3xl leading-tight text-foreground lg:text-5xl">
                      {lead.title}
                    </h2>
                    <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground">
                      {lead.excerpt}
                    </p>
                    <p className="mt-8 inline-flex items-center gap-2 text-[0.66rem] uppercase tracking-[0.22em] text-champagne">
                      Read article <ArrowUpRight className="h-4 w-4" />
                    </p>
                  </div>
                </Link>
              </Reveal>
            ) : null}

            <div className="mt-16 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((p, i) => (
                <Reveal key={p.slug} variant="up" delay={(i % 3) * 100}>
                  <Link
                    to="/journal/$slug"
                    params={{ slug: p.slug }}
                    data-cursor="Read →"
                    className="group block"
                  >
                    <div className="aspect-[4/3] overflow-hidden border border-border metal-sheen">
                      <img
                        src={p.hero}
                        alt={p.heroAlt}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-[1300ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                      />
                    </div>
                    <p className="mt-5 text-[0.58rem] uppercase tracking-[0.28em] text-champagne">
                      {p.category} · {formatDate(p.date)}
                    </p>
                    <h3 className="mt-3 font-display text-2xl leading-snug text-foreground transition-colors group-hover:text-champagne">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
                    <p className="mt-4 text-[0.58rem] uppercase tracking-[0.24em] text-muted-foreground">
                      {p.readingTime} read
                    </p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </>
        )}
      </Section>
    </PageShell>
  );
}
