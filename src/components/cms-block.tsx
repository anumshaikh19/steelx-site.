import { useEffect, useMemo, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { useLocation } from "@tanstack/react-router";
import { getPageSeo, type PageSeo } from "@/lib/page-seo";

const TEXT_SELECTOR = "h1,h2,h3,h4,h5,h6,p,li,figcaption,blockquote,button";
function textKey(path: string, blockId: string, index: number) { return `${path}::${blockId}::${index}`; }
function readTextOverrides(): Record<string, string> { try { return JSON.parse(localStorage.getItem("steelx-cms-text-v1") || "{}"); } catch { return {}; } }
function writeTextOverride(key: string, value: string) { const all = readTextOverrides(); all[key] = value; localStorage.setItem("steelx-cms-text-v1", JSON.stringify(all)); }

export function CmsBlock({ blockId, label, children, className = "" }: { blockId: string; label?: string; children: ReactNode; className?: string }) {
  const location = useLocation({ select: (l) => l.pathname });
  const ref = useRef<HTMLDivElement>(null);
  const [editing, setEditing] = useState(false);
  const seo = useMemo(() => getPageSeo(location), [location]);
  const block = seo.blocks?.[blockId] || {};
  const design: PageSeo["design"] = { ...seo.design, ...(block.design || {}) };
  const cssVars = {
    "--cms-accent": design.accent, "--cms-bg": design.background, "--cms-heading": design.headingColor, "--cms-body": design.bodyColor,
    "--cms-heading-size": ({ small: "2.1rem", medium: "3.4rem", large: "6rem", xl: "8rem" } as const)[design.headingSize],
    "--cms-body-size": ({ small: ".92rem", medium: "1rem", large: "1.12rem" } as const)[design.bodySize],
    "--cms-section-gap": ({ compact: "3rem", comfortable: "5rem", luxury: "8rem" } as const)[design.sectionSpacing],
  } as CSSProperties;

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const editMode = new URLSearchParams(window.location.search).get("cms-edit") === "1";
    setEditing(editMode);
    const targets = Array.from(root.querySelectorAll<HTMLElement>(TEXT_SELECTOR)).filter(el => !el.closest("[data-cms-toolbar]") && Array.from(el.children).length === 0);
    const overrides = readTextOverrides();
    targets.forEach((el, index) => {
      const key = textKey(location, blockId, index);
      el.dataset.cmsText = String(index);
      if (overrides[key] !== undefined) el.textContent = overrides[key];
      if (editMode) {
        el.contentEditable = "true";
        el.spellcheck = true;
        el.style.outline = "1px dashed rgba(201,169,110,.7)";
        el.style.outlineOffset = "4px";
        el.addEventListener("blur", () => writeTextOverride(key, el.innerText));
      }
    });
    return () => targets.forEach(el => { el.contentEditable = "false"; el.style.outline = ""; el.style.outlineOffset = ""; });
  }, [location, blockId, children, editing]);

  const scoped = `[data-cms-block="${blockId}"]`;
  return <div ref={ref} data-cms-block={blockId} data-cms-label={label || blockId} className={`relative cms-block ${className}`} style={{ ...cssVars, background: design.background }}>
    <style>{`${scoped} h1,${scoped} h2,${scoped} h3,${scoped} h4,${scoped} h5,${scoped} h6{font-family:${design.headingFont === "sans" ? "inherit" : "var(--font-display, Georgia, serif)"};font-size:var(--cms-heading-size);font-weight:${design.headingWeight === "bold" ? 700 : design.headingWeight === "medium" ? 500 : 400};color:var(--cms-heading)}${scoped} p,${scoped} li,${scoped} blockquote{font-size:var(--cms-body-size);color:var(--cms-body)}${scoped} .text-champagne,${scoped} .text-gold{color:var(--cms-accent)}${scoped} .steelx-editable-section{padding-block:var(--cms-section-gap)}`}</style>
    {block.design?.css ? <style>{`${scoped}{${block.design.css}}`}</style> : null}
    {editing ? <div data-cms-toolbar className="fixed bottom-5 left-1/2 z-[9999] -translate-x-1/2 rounded-full border border-white/10 bg-[#171715] px-4 py-2 text-[10px] uppercase tracking-[.16em] text-white shadow-2xl">Editing: {label || blockId} · click any text to edit</div> : null}
    {children}
  </div>;
}

export function CmsVisualEditorHint() {
  const location = useLocation({ select: (l) => l.pathname });
  if (typeof window === "undefined") return null;
  if (new URLSearchParams(window.location.search).get("cms-edit") !== "1") return null;
  return <div className="fixed right-5 top-24 z-[9999] rounded-2xl border border-[#c9a96e]/40 bg-[#171715] p-4 text-white shadow-2xl" style={{ maxWidth: 280 }}>
    <p className="text-[9px] uppercase tracking-[.2em] text-[#c9a96e]">Visual CMS</p>
    <p className="mt-2 text-xs leading-5 text-white/65">Every visible text element in every block is editable. Text is stored against its page and block.</p>
    <a href={`/admin-seo?path=${encodeURIComponent(location)}`} className="mt-3 inline-flex rounded-full bg-[#c9a96e] px-4 py-2 text-[10px] font-semibold uppercase tracking-widest text-black">Back to Studio</a>
  </div>;
}
