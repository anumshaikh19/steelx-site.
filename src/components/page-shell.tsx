import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

export function PageShell({
  children,
  overlayHeader = false,
}: {
  children: ReactNode;
  overlayHeader?: boolean;
}) {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader overlay={overlayHeader} />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  lead,
  meta,
  className,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  meta?: { label: string; value: string }[];
  className?: string | undefined;
}) {
  return (
    <section
      className={cn(
        "mx-auto max-w-[1600px] border-b border-border px-4 pb-16 pt-16 sm:px-8 lg:px-10 lg:pb-24 lg:pt-28",
        className,
      )}
    >
      <Reveal variant="text" as="p" className="text-xs uppercase tracking-[0.32em] text-gold">
        {eyebrow}
      </Reveal>
      <Reveal variant="up" delay={80}>
        <h1 className="mt-6 font-display text-[2.6rem] leading-[0.98] text-foreground sm:text-6xl lg:text-[6rem]">
          {title}
        </h1>
      </Reveal>
      {lead ? (
        <Reveal variant="up" delay={160}>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-lg">
            {lead}
          </p>
        </Reveal>
      ) : null}
      {meta?.length ? (
        <div className="mt-12 grid gap-px border-t border-border sm:grid-cols-2 lg:grid-cols-4">
          {meta.map((m, i) => (
            <Reveal key={m.label} variant="row" delay={i * 90} className="pt-5">
              <p className="text-[0.68rem] uppercase tracking-[0.22em] text-muted-foreground">
                {m.label}
              </p>
              <p className="mt-2 font-display text-xl text-foreground">{m.value}</p>
            </Reveal>
          ))}
        </div>
      ) : null}
    </section>
  );
}

export function Section({
  children,
  className,
}: {
  children: ReactNode;
  className?: string | undefined;
}) {
  return (
    <section className={cn("mx-auto max-w-[1600px] px-4 py-20 sm:px-8 lg:px-10 lg:py-28", className)}>
      {children}
    </section>
  );
}
