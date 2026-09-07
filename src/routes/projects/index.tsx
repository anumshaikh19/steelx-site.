import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";

import { PageShell, Section } from "@/components/page-shell";
import { FeatureProjectCard, ProjectGridCard } from "@/components/project-grid-card";
import { Reveal } from "@/components/reveal";
import { Marquee } from "@/components/motion";
import { categories, projects, type CategoryFilter } from "@/data/projects";
import { cn } from "@/lib/utils";

const title = "Projects — PVD Metal & Stainless Steel Surfaces | STEELX";
const description =
  "Facades, hospitality interiors, retail metal and decorative mesh in PVD-coated stainless steel. Filter by category or search by project, client, location or year.";

export const Route = createFileRoute("/projects/")({
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
  component: ProjectsPage,
});

function ProjectsPage() {
  const [category, setCategory] = useState<CategoryFilter>("All");
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      if (category !== "All" && p.category !== category) return false;
      if (!q) return true;
      return [p.title, p.client, p.location, p.category, p.year, p.finish, p.scope].some((v) =>
        v.toLowerCase().includes(q),
      );
    });
  }, [category, query]);

  /** 3 standard cards, then one full-width feature — repeated. */
  const blocks = useMemo(() => {
    const out: { rows: typeof results; feature: (typeof results)[number] | undefined }[] = [];
    for (let i = 0; i < results.length; i += 4) {
      out.push({ rows: results.slice(i, i + 3), feature: results[i + 3] });
    }
    return out;
  }, [results]);

  return (
    <PageShell>
      <section className="relative mx-auto max-w-[1600px] px-4 pb-14 pt-28 sm:px-8 lg:px-10 lg:pb-20 lg:pt-40">
        <div className="pointer-events-none absolute inset-0 tech-grid opacity-40" aria-hidden="true" />
        <div className="relative">
          <Reveal variant="text" as="p" className="text-[0.62rem] uppercase tracking-[0.4em] text-champagne">
            Selected work — {projects.length} projects
          </Reveal>
          <Reveal variant="up" delay={80}>
            <h1 className="mt-6 font-display text-[3.4rem] leading-[0.9] text-foreground sm:text-8xl lg:text-[10rem]">
              PROJECTS
            </h1>
          </Reveal>
          <Reveal variant="up" delay={160}>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-lg">
              Facades, lobbies, flagship stores, mesh screens and sculptural metal — every surface
              engineered, coated and installed by one team. Filter the archive below or search by
              project, client, location or year.
            </p>
          </Reveal>
        </div>
      </section>

      <Marquee
        items={[
          "PVD COATED STAINLESS",
          "FACADE SYSTEMS",
          "DECORATIVE MESH",
          "HOSPITALITY METAL",
          "RETAIL FABRICATION",
          "SPECIAL PROJECTS",
          "INTERNATIONAL DELIVERY",
        ]}
      />

      <Section className="lg:py-16">
        <div className="flex flex-col gap-8">
          <div className="-mx-4 overflow-x-auto px-4 no-scrollbar sm:mx-0 sm:px-0">
            <ul className="flex min-w-max items-center gap-2" role="tablist" aria-label="Project categories">
              {categories.map((c) => (
                <li key={c}>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={category === c}
                    onClick={() => setCategory(c)}
                    className={cn(
                      "border px-5 py-2.5 text-[0.66rem] uppercase tracking-[0.2em] transition-all duration-300",
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

          <div className="flex flex-col gap-3 border-t border-border pt-8 lg:flex-row lg:items-center lg:justify-between">
            <p className="text-[0.62rem] uppercase tracking-[0.34em] text-champagne">
              Search projects
            </p>
            <label className="relative block w-full lg:w-[28rem]">
              <span className="sr-only">Search by project, client, location, category or year</span>
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                type="search"
                placeholder="Search by project, client, location..."
                className="w-full border border-border bg-surface/50 py-3.5 pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-champagne focus:outline-none"
              />
            </label>
            <p className="text-xs tabular-nums uppercase tracking-[0.22em] text-muted-foreground">
              {String(results.length).padStart(2, "0")}{" "}
              {results.length === 1 ? "result" : "results"}
            </p>
          </div>
        </div>

        {results.length === 0 ? (
          <div className="mt-16 border-t border-border py-24 text-center">
            <h2 className="font-display text-3xl text-foreground">No projects found.</h2>
            <p className="mt-4 text-sm text-muted-foreground">Try another search or category.</p>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setCategory("All");
              }}
              className="mt-8 border border-champagne px-6 py-3 text-xs uppercase tracking-[0.2em] text-champagne transition-colors hover:bg-champagne hover:text-metal-black"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="mt-16 space-y-20 lg:space-y-28">
            {blocks.map((block, bi) => (
              <div key={bi} className="space-y-20 lg:space-y-28">
                {block.rows.length ? (
                  <div className="grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
                    {block.rows.map((p, i) => (
                      <Reveal key={p.slug} variant="up" delay={(i % 3) * 110}>
                        <ProjectGridCard project={p} eager={bi === 0 && i === 0} index={bi * 4 + i} />
                      </Reveal>
                    ))}
                  </div>
                ) : null}
                {block.feature ? (
                  <Reveal variant="scale">
                    <FeatureProjectCard project={block.feature} />
                  </Reveal>
                ) : null}
              </div>
            ))}
          </div>
        )}
      </Section>
    </PageShell>
  );
}
