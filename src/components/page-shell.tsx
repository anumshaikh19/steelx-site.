import { useEffect, useState, type ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";
import { getPageSeo, type PageSeo } from "@/lib/page-seo";

function usePageSettings() {
  const [settings, setSettings] = useState<PageSeo | null>(null);
  useEffect(() => {
    const apply = () => setSettings(getPageSeo(window.location.pathname));
    apply();
    window.addEventListener("steelx-seo-updated", apply);
    return () => window.removeEventListener("steelx-seo-updated", apply);
  }, []);
  return settings;
}

function designStyle(settings: PageSeo | null): React.CSSProperties {
  if (!settings) return {};
  const sizes = { small: "2.1rem", medium: "3.4rem", large: "6rem", xl: "8rem" };
  const body = { small: "0.92rem", medium: "1rem", large: "1.12rem" };
  const spacing = { compact: "5rem", comfortable: "7rem", luxury: "9rem" };
  return {
    "--steelx-accent": settings.design.accent,
    "--steelx-heading-color": settings.design.headingColor,
    "--steelx-body-color": settings.design.bodyColor,
    "--steelx-heading-size": sizes[settings.design.headingSize],
    "--steelx-body-size": body[settings.design.bodySize],
    "--steelx-section-space": spacing[settings.design.sectionSpacing],
  } as React.CSSProperties;
}

export function PageShell({ children, overlayHeader = false }: { children: ReactNode; overlayHeader?: boolean }) {
  const settings = usePageSettings();
  return (
    <div
      className="min-h-screen bg-background"
      style={designStyle(settings)}
      data-steelx-page={settings?.path || undefined}
    >
      <style>{`[data-steelx-page] .steelx-editable-heading{font-family:${settings?.design.headingFont === "sans" ? "inherit" : "var(--font-display, Georgia, serif)"};font-size:var(--steelx-heading-size);font-weight:${settings?.design.headingWeight === "bold" ? 700 : settings?.design.headingWeight === "medium" ? 500 : 400};color:var(--steelx-heading-color)}[data-steelx-page] .steelx-editable-body{font-size:var(--steelx-body-size);color:var(--steelx-body-color)}[data-steelx-page] .steelx-editable-accent{color:var(--steelx-accent)}[data-steelx-page] .steelx-editable-section{padding-block:var(--steelx-section-space)}`}</style>
      <SiteHeader overlay={overlayHeader} />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHero({ eyebrow, title, lead, meta, className }: { eyebrow: string; title: string; lead?: string; meta?: { label: string; value: string }[]; className?: string | undefined }) {
  const settings = usePageSettings();
  const content = settings?.content;
  const resolvedEyebrow = content?.eyebrow || eyebrow;
  const resolvedTitle = content?.heading || title;
  const resolvedLead = content?.intro || lead;
  return (
    <section className={cn("mx-auto max-w-[1600px] border-b border-border px-4 pb-16 pt-16 sm:px-8 lg:px-10 lg:pb-24 lg:pt-28 steelx-editable-section", className)}>
      <Reveal variant="text" as="p" className="text-xs uppercase tracking-[0.32em] steelx-editable-accent">
        {resolvedEyebrow}
      </Reveal>
      <Reveal variant="up" delay={80}>
        <h1 className="mt-6 font-display leading-[0.98] text-foreground steelx-editable-heading">
          {resolvedTitle}
        </h1>
      </Reveal>
      {resolvedLead ? <Reveal variant="up" delay={160}><p className="mt-8 max-w-2xl leading-relaxed text-muted-foreground steelx-editable-body">{resolvedLead}</p></Reveal> : null}
      {meta?.length ? <div className="mt-12 grid gap-px border-t border-border sm:grid-cols-2 lg:grid-cols-4">{meta.map((m, i) => <Reveal key={m.label} variant="row" delay={i * 90} className="pt-5"><p className="text-[0.68rem] uppercase tracking-[0.22em] text-muted-foreground">{m.label}</p><p className="mt-2 font-display text-xl text-foreground">{m.value}</p></Reveal>)}</div> : null}
    </section>
  );
}

export function Section({ children, className }: { children: ReactNode; className?: string | undefined }) {
  return <section className={cn("mx-auto max-w-[1600px] px-4 py-20 sm:px-8 lg:px-10 lg:py-28 steelx-editable-section", className)}>{children}</section>;
}
