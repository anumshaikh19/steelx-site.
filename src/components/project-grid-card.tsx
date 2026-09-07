import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

/** Standard editorial project card used in the 3-up rows. */
export function ProjectGridCard({
  project,
  eager = false,
  index,
}: {
  project: Project;
  eager?: boolean;
  index?: number;
}) {
  return (
    <Link
      to="/projects/$slug"
      params={{ slug: project.slug }}
      data-cursor="View Project →"
      className="group block"
    >
      <div className="relative aspect-[4/5] overflow-hidden border border-border metal-sheen">
        <img
          src={project.coverImage}
          alt={`${project.title} — ${project.category}`}
          loading={eager ? "eager" : "lazy"}
          className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.07]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent opacity-80" />
        {typeof index === "number" ? (
          <span className="absolute left-4 top-4 text-[0.6rem] tabular-nums tracking-[0.3em] text-champagne">
            {String(index + 1).padStart(2, "0")}
          </span>
        ) : null}
        <span className="absolute right-4 top-4 border border-border bg-background/60 px-3 py-1 text-[0.55rem] uppercase tracking-[0.24em] text-muted-foreground backdrop-blur">
          {project.category}
        </span>
      </div>

      <div className="mt-5">
        <h3 className="font-display text-2xl text-foreground transition-transform duration-500 group-hover:translate-x-1">
          {project.title}
        </h3>
        <dl className="mt-3 grid grid-cols-2 gap-y-2 border-t border-border pt-3 text-[0.68rem] uppercase tracking-[0.14em] text-muted-foreground">
          <div>
            <dt className="sr-only">Client</dt>
            <dd>{project.client}</dd>
          </div>
          <div className="text-right">
            <dt className="sr-only">Year</dt>
            <dd>{project.year}</dd>
          </div>
          <div>
            <dt className="sr-only">Location</dt>
            <dd>{project.location}</dd>
          </div>
          <div className="text-right">
            <dt className="sr-only">Area</dt>
            <dd>{project.area}</dd>
          </div>
        </dl>
        <p className="mt-4 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {project.intro}
        </p>
        <span className="mt-4 inline-flex items-center gap-2 text-[0.66rem] uppercase tracking-[0.22em] text-champagne opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          View project <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </Link>
  );
}

/** Full-bleed feature project used to break the grid rhythm. */
export function FeatureProjectCard({
  project,
  className,
}: {
  project: Project;
  className?: string | undefined;
}) {
  return (
    <Link
      to="/projects/$slug"
      params={{ slug: project.slug }}
      data-cursor="View Project →"
      className={cn("group relative block overflow-hidden border border-border", className)}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden lg:aspect-[21/9]">
        <img
          src={project.coverImage}
          alt={`${project.title} — feature project`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div
          className="pointer-events-none absolute inset-0 -translate-x-full opacity-0 transition-all duration-[1400ms] ease-out group-hover:translate-x-full group-hover:opacity-100"
          style={{
            backgroundImage:
              "linear-gradient(90deg, transparent, oklch(1 0 0 / 14%) 45%, transparent)",
          }}
        />
      </div>

      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 lg:p-14">
        <p className="text-[0.6rem] uppercase tracking-[0.34em] text-champagne">
          Feature project — {project.category}
        </p>
        <h3 className="mt-4 font-display text-4xl leading-[0.98] text-foreground sm:text-6xl lg:text-7xl">
          {project.title}
        </h3>
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground lg:text-base">
          {project.intro}
        </p>
        <div className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-border pt-5 text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
          <span>{project.client}</span>
          <span>{project.location}</span>
          <span>{project.year}</span>
          <span>{project.area}</span>
          <span className="text-champagne">{project.finish}</span>
          <span className="ml-auto inline-flex items-center gap-2 text-champagne">
            View project <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
