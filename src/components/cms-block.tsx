import { useEffect, useMemo, useRef } from "react";
import { useLocation } from "@tanstack/react-router";
import type { CSSProperties, ReactNode } from "react";
import { getPageSeo, type PageSeo } from "@/lib/page-seo";

const TEXT_SELECTOR = "h1,h2,h3,h4,h5,h6,p,li,figcaption,blockquote,a,button";
function textKey(path: string, blockId: string, index: number) { return `${path}::${blockId}::text-${index}`; }
function assetKey(path: string, blockId: string, index: number) { return `${path}::${blockId}::asset-${index}`; }
function linkKey(path: string, blockId: string, index: number) { return `${path}::${blockId}::link-${index}`; }
function readOverrides(): Record<string, string | { src?: string; alt?: string }> { try { return JSON.parse(localStorage.getItem("steelx-cms-element-v1") || "{}"); } catch { return {}; } }
function writeOverride(key: string, value: string | { src?: string; alt?: string }) { const all = readOverrides(); all[key] = value; localStorage.setItem("steelx-cms-element-v1", JSON.stringify(all)); }

export function CmsBlock({ blockId, label, children, className = "" }: { blockId: string; label?: string; children: ReactNode; className?: string }) {
  const location = useLocation({ select: (l) => l.pathname });
  const ref = useRef<HTMLDivElement>(null);
  const seo = useMemo(() => getPageSeo(location), [location]);
  const block = seo.blocks?.[blockId];
  const hasDesign = Boolean(block?.design && Object.keys(block.design).length);
  const design: PageSeo["design"] = { ...seo.design, ...(block?.design || {}) };
  const cssVars = { "--cms-accent": design.accent, "--cms-bg": design.background, "--cms-heading": design.headingColor, "--cms-body": design.bodyColor, "--cms-heading-size": ({ small: "2.1rem", medium: "3.4rem", large: "6rem", xl: "8rem" } as const)[design.headingSize], "--cms-body-size": ({ small: ".92rem", medium: "1rem", large: "1.12rem" } as const)[design.bodySize], "--cms-section-gap": ({ compact: "3rem", comfortable: "5rem", luxury: "8rem" } as const)[design.sectionSpacing] } as CSSProperties;

  useEffect(() => {
    const root = ref.current; if (!root) return;
    const editMode = new URLSearchParams(window.location.search).get("cms-edit") === "1";
    const overrides = readOverrides();
    const textTargets = Array.from(root.querySelectorAll<HTMLElement>(TEXT_SELECTOR)).filter(el => !el.parentElement?.closest(TEXT_SELECTOR));
    const imageTargets = Array.from(root.querySelectorAll<HTMLImageElement>("img"));
    const linkTargets = Array.from(root.querySelectorAll<HTMLAnchorElement>("a"));
    const cleanups: (() => void)[] = [];

    textTargets.forEach((el, index) => {
      const key = textKey(location, blockId, index); const value = overrides[key];
      if (typeof value === "string") el.innerHTML = value;
      if (!editMode) return;
      el.contentEditable = "true"; el.spellcheck = true; el.style.outline = "1px dashed rgba(201,169,110,.7)"; el.style.outlineOffset = "4px";
      const handler = () => writeOverride(key, el.innerHTML); el.addEventListener("blur", handler); cleanups.push(() => el.removeEventListener("blur", handler));
    });

    imageTargets.forEach((img, index) => {
      const key = assetKey(location, blockId, index); const value = overrides[key];
      if (value && typeof value === "object") { if (value.src) img.src = value.src; if (value.alt !== undefined) img.alt = value.alt; }
      if (!editMode) return;
      img.style.outline = "1px dashed rgba(201,169,110,.7)"; img.style.outlineOffset = "4px"; img.title = "CMS: click to edit image URL / alt text";
      const handler = (event: MouseEvent) => { event.preventDefault(); event.stopPropagation(); const src = window.prompt("Image URL", img.currentSrc || img.src || ""); if (src === null) return; const alt = window.prompt("Image alt text", img.alt || ""); writeOverride(key, { src, alt: alt ?? img.alt }); img.src = src; if (alt !== null) img.alt = alt; };
      img.addEventListener("click", handler); cleanups.push(() => img.removeEventListener("click", handler));
    });

    linkTargets.forEach((link, index) => {
      const key = linkKey(location, blockId, index); const value = overrides[key];
      if (typeof value === "string") link.setAttribute("href", value);
      if (!editMode) return;
      const handler = (event: MouseEvent) => { if (event.shiftKey) { event.preventDefault(); event.stopPropagation(); const href = window.prompt("Link URL", link.getAttribute("href") || ""); if (href !== null) { link.setAttribute("href", href); writeOverride(key, href); } } else event.preventDefault(); };
      link.addEventListener("click", handler); cleanups.push(() => link.removeEventListener("click", handler));
    });
    return () => { cleanups.forEach(fn => fn()); textTargets.forEach(el => { el.contentEditable = "false"; el.style.outline = ""; el.style.outlineOffset = ""; }); imageTargets.forEach(img => { img.style.outline = ""; img.style.outlineOffset = ""; img.title = ""; }); };
  }, [location, blockId, children]);

  const scoped = `[data-cms-block="${blockId}"]`;
  return <div ref={ref} data-cms-block={blockId} data-cms-label={label || blockId} className={`relative cms-block ${className}`} style={hasDesign ? { ...cssVars, background: design.background } : undefined}>
    {hasDesign ? <style>{`${scoped} h1,${scoped} h2,${scoped} h3,${scoped} h4,${scoped} h5,${scoped} h6{font-family:${design.headingFont === "sans" ? "inherit" : "var(--font-display, Georgia, serif)"};font-size:var(--cms-heading-size);font-weight:${design.headingWeight === "bold" ? 700 : design.headingWeight === "medium" ? 500 : 400};color:var(--cms-heading)}${scoped} p,${scoped} li,${scoped} blockquote{font-size:var(--cms-body-size);color:var(--cms-body)}${scoped} .text-champagne,${scoped} .text-gold{color:var(--cms-accent)}${scoped} .steelx-editable-section{padding-block:var(--cms-section-gap)}`}</style> : null}
    {block?.design?.css ? <style>{`${scoped}{${block.design.css}}`}</style> : null}
    {children}
  </div>;
}

export function CmsVisualEditorHint() {
  const location = useLocation({ select: (l) => l.pathname });
  if (typeof window === "undefined" || new URLSearchParams(window.location.search).get("cms-edit") !== "1") return null;
  return <div className="fixed right-5 top-24 z-[9999] rounded-2xl border border-[#c9a96e]/40 bg-[#171715] p-4 text-white shadow-2xl" style={{ maxWidth: 300 }}><p className="text-[9px] uppercase tracking-[.2em] text-[#c9a96e]">Visual CMS · {location}</p><p className="mt-2 text-xs leading-5 text-white/65">Click text to edit. Click an image to change its URL and alt text. Shift-click a link to change its destination. Each section remains independently styled.</p><a href={`/admin-seo?path=${encodeURIComponent(location)}`} className="mt-3 inline-flex rounded-full bg-[#c9a96e] px-4 py-2 text-[10px] font-semibold uppercase tracking-widest text-black">Back to Studio</a></div>;
}
