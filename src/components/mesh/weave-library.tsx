import { useMemo, useState } from "react";

import { Section } from "@/components/page-shell";
import { Reveal, SectionHeading } from "@/components/reveal";
import { HorizontalRail } from "@/components/motion";
import { WeaveVisual } from "@/components/mesh/weave-visual";
import { weaveGroups, weaves } from "@/data/mesh";
import { cn } from "@/lib/utils";

/* ── 12–14 Weave patterns ────────────────────────────────────── */
export function WeaveLibrary() {
  const [group, setGroup] = useState<(typeof weaveGroups)[number]>("all");

  const list = useMemo(
    () => (group === "all" ? weaves : weaves.filter((w) => w.group === group)),
    [group],
  );

  return (
    <Section className="border-t border-border">
      <div className="flex flex-wrap items-end justify-between gap-8">
        <SectionHeading eyebrow="Weave library" title="Weave patterns" />
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
          Isolate the perfect architectural weave based on transparency ratios and structural
          requirements. {weaves.length} patterns in the current collection.
        </p>
      </div>

      <div className="no-scrollbar -mx-4 mt-10 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:px-0">
        {weaveGroups.map((g) => (
          <button
            key={g}
            type="button"
            onClick={() => setGroup(g)}
            aria-pressed={group === g}
            className={cn(
              "shrink-0 border px-5 py-2.5 text-[0.6rem] uppercase tracking-[0.24em] transition-colors",
              group === g
                ? "border-champagne text-champagne"
                : "border-border text-muted-foreground hover:border-champagne hover:text-champagne",
            )}
          >
            {g}
          </button>
        ))}
      </div>

      <HorizontalRail className="mt-10" itemClassName="w-[78vw] sm:w-[44vw] lg:w-[27vw]">
        {list.map((w) => (
          <article
            key={w.id}
            id={`weave-${w.id}`}
            data-cursor="View spec"
            className="group flex h-full scroll-mt-28 flex-col border border-border transition-colors hover:border-champagne"
          >
            <div className="relative">
              <WeaveVisual group={w.group} className="aspect-[4/3] w-full" />
              <span className="absolute left-4 top-4 bg-background/80 px-3 py-1.5 text-[0.56rem] uppercase tracking-[0.26em] text-champagne backdrop-blur">
                {w.open}
              </span>
              <span className="absolute inset-0 flex items-center justify-center bg-metal-black/55 text-[0.62rem] uppercase tracking-[0.32em] text-champagne opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                Explore
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-display text-2xl text-foreground">{w.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {w.applications.map((a) => (
                  <span key={a} className="border border-border px-3 py-1.5 text-[0.56rem] uppercase tracking-[0.2em] text-muted-foreground">
                    {a}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex items-baseline justify-between gap-4 border-t border-border pt-5">
                <span className="text-[0.56rem] uppercase tracking-[0.24em] text-muted-foreground">Material standard</span>
                <span className="text-right text-[0.6rem] uppercase tracking-[0.18em] text-champagne">{w.material}</span>
              </div>
            </div>
          </article>
        ))}
      </HorizontalRail>

      <Reveal variant="row" className="mt-6 text-[0.6rem] uppercase tracking-[0.3em] text-muted-foreground">
        {String(list.length).padStart(2, "0")} / {String(weaves.length).padStart(2, "0")} patterns shown
      </Reveal>
    </Section>
  );
}
