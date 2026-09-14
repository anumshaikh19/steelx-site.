import { useEffect, useMemo, useRef, useState } from "react";
import { useLocation } from "@tanstack/react-router";
import type { CSSProperties, ReactNode } from "react";
import { getPageSeo, type PageSeo } from "@/lib/page-seo";

const TEXT_SELECTOR = "h1,h2,h3,h4,h5,h6,p,li,figcaption,blockquote,a,button";
const IMAGE_KEY_PREFIX = "steelx-cms-image-v1";

type ImageAsset = { src?: string; alt?: string; name?: string; deleted?: boolean };
type CmsOverride = string | ImageAsset;
type AddedImage = { id: string; src: string; alt: string; name: string };

function textKey(path: string, blockId: string, index: number) { return `${path}::${blockId}::text-${index}`; }
function assetKey(path: string, blockId: string, index: number) { return `${path}::${blockId}::asset-${index}`; }
function linkKey(path: string, blockId: string, index: number) { return `${path}::${blockId}::link-${index}`; }
function addedImagesKey(path: string, blockId: string) { return `${IMAGE_KEY_PREFIX}::${path}::${blockId}::added`; }
function readOverrides(): Record<string, CmsOverride> { try { return JSON.parse(localStorage.getItem("steelx-cms-element-v1") || "{}"); } catch { return {}; } }
function writeOverride(key: string, value: CmsOverride) { const all = readOverrides(); all[key] = value; localStorage.setItem("steelx-cms-element-v1", JSON.stringify(all)); }
function readAddedImages(path: string, blockId: string): AddedImage[] { try { return JSON.parse(localStorage.getItem(addedImagesKey(path, blockId)) || "[]"); } catch { return []; } }
function writeAddedImages(path: string, blockId: string, images: AddedImage[]) { localStorage.setItem(addedImagesKey(path, blockId), JSON.stringify(images)); }

export function CmsBlock({ blockId, label, children, className = "" }: { blockId: string; label?: string; children: ReactNode; className?: string }) {
  const location = useLocation({ select: (l) => l.pathname });
  const ref = useRef<HTMLDivElement>(null);
  const seo = useMemo(() => getPageSeo(location), [location]);
  const block = seo.blocks?.[blockId];
  const hasDesign = Boolean(block?.design && Object.keys(block.design).length);
  const design: PageSeo["design"] = { ...seo.design, ...(block?.design || {}) };
  const cssVars = { "--cms-accent": design.accent, "--cms-bg": design.background, "--cms-heading": design.headingColor, "--cms-body": design.bodyColor, "--cms-heading-size": ({ small: "2.1rem", medium: "3.4rem", large: "6rem", xl: "8rem" } as const)[design.headingSize], "--cms-body-size": ({ small: ".92rem", medium: "1rem", large: "1.12rem" } as const)[design.bodySize], "--cms-section-gap": ({ compact: "3rem", comfortable: "5rem", luxury: "8rem" } as const)[design.sectionSpacing] } as CSSProperties;

  const [imageEditor, setImageEditor] = useState<{ img: HTMLImageElement | null; index: number; addedId?: string; name: string; alt: string; src: string } | null>(null);

  useEffect(() => {
    const root = ref.current; if (!root) return;
    const editMode = new URLSearchParams(window.location.search).get("cms-edit") === "1";
    const overrides = readOverrides();
    const textTargets = Array.from(root.querySelectorAll<HTMLElement>(TEXT_SELECTOR)).filter(el => !el.parentElement?.closest(TEXT_SELECTOR));
    const imageTargets = Array.from(root.querySelectorAll<HTMLImageElement>("img")).filter(img => !img.closest("[data-cms-added-image]"));
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
      if (value && typeof value === "object") {
        if (value.deleted) img.style.display = "none";
        if (value.src) img.src = value.src;
        if (value.alt !== undefined) img.alt = value.alt;
        if (value.name) img.dataset.cmsImageName = value.name;
      }
      if (!editMode) return;
      img.style.outline = "1px dashed rgba(201,169,110,.7)"; img.style.outlineOffset = "4px"; img.title = "CMS: click to manage image";
      const handler = (event: MouseEvent) => {
        event.preventDefault(); event.stopPropagation();
        const asset = (overrides[key] && typeof overrides[key] === "object" ? overrides[key] : {}) as ImageAsset;
        setImageEditor({ img, index, name: asset.name || img.dataset.cmsImageName || img.alt || `image-${index + 1}`, alt: asset.alt ?? img.alt ?? "", src: asset.src || img.currentSrc || img.src || "" });
      };
      img.addEventListener("click", handler); cleanups.push(() => img.removeEventListener("click", handler));
    });

    linkTargets.forEach((link, index) => {
      const key = linkKey(location, blockId, index); const value = overrides[key];
      if (typeof value === "string") link.setAttribute("href", value);
      if (!editMode) return;
      const handler = (event: MouseEvent) => { if (event.shiftKey) { event.preventDefault(); event.stopPropagation(); const href = window.prompt("Link URL", link.getAttribute("href") || ""); if (href !== null) { link.setAttribute("href", href); writeOverride(key, href); } } else event.preventDefault(); };
      link.addEventListener("click", handler); cleanups.push(() => link.removeEventListener("click", handler));
    });

    const addedHost = document.createElement("div");
    addedHost.dataset.cmsAddedImagesHost = "true";
    addedHost.style.display = "grid";
    addedHost.style.gap = "1rem";
    addedHost.style.marginTop = "1.5rem";
    const addedImages = readAddedImages(location, blockId);
    addedImages.forEach(asset => {
      const img = document.createElement("img");
      img.src = asset.src; img.alt = asset.alt; img.dataset.cmsImageName = asset.name; img.dataset.cmsAddedImage = asset.id;
      img.style.maxWidth = "100%"; img.style.height = "auto"; img.style.display = "block";
      if (editMode) {
        img.style.outline = "1px dashed rgba(201,169,110,.7)"; img.style.outlineOffset = "4px"; img.title = "CMS: click to manage image";
        const handler = (event: MouseEvent) => { event.preventDefault(); event.stopPropagation(); setImageEditor({ img, index: -1, addedId: asset.id, name: asset.name, alt: asset.alt, src: asset.src }); };
        img.addEventListener("click", handler); cleanups.push(() => img.removeEventListener("click", handler));
      }
      addedHost.appendChild(img);
    });
    if (addedImages.length) root.appendChild(addedHost); else addedHost.remove();
    cleanups.push(() => addedHost.remove());

    return () => { cleanups.forEach(fn => fn()); textTargets.forEach(el => { el.contentEditable = "false"; el.style.outline = ""; el.style.outlineOffset = ""; }); imageTargets.forEach(img => { img.style.outline = ""; img.style.outlineOffset = ""; img.title = ""; }); setImageEditor(null); };
  }, [location, blockId, children]);

  const saveImage = (editor: NonNullable<typeof imageEditor>) => {
    if (editor.addedId) {
      const images = readAddedImages(location, blockId).map(item => item.id === editor.addedId ? { ...item, src: editor.src, alt: editor.alt, name: editor.name } : item);
      writeAddedImages(location, blockId, images);
    } else {
      writeOverride(assetKey(location, blockId, editor.index), { src: editor.src, alt: editor.alt, name: editor.name });
    }
    if (editor.img) { editor.img.src = editor.src; editor.img.alt = editor.alt; editor.img.dataset.cmsImageName = editor.name; editor.img.style.display = "block"; }
    setImageEditor(null);
  };

  const deleteImage = (editor: NonNullable<typeof imageEditor>) => {
    if (editor.addedId) writeAddedImages(location, blockId, readAddedImages(location, blockId).filter(item => item.id !== editor.addedId));
    else writeOverride(assetKey(location, blockId, editor.index), { deleted: true, name: editor.name, alt: editor.alt });
    if (editor.img) editor.img.style.display = "none";
    setImageEditor(null);
  };

  const addImage = async (file: File) => {
    if (!file.type.startsWith("image/")) return;
    const src = await new Promise<string>((resolve, reject) => { const reader = new FileReader(); reader.onload = () => resolve(String(reader.result)); reader.onerror = reject; reader.readAsDataURL(file); });
    const id = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    const asset: AddedImage = { id, src, alt: "", name: file.name };
    writeAddedImages(location, blockId, [...readAddedImages(location, blockId), asset]);
    window.location.reload();
  };

  const scoped = `[data-cms-block="${blockId}"]`;
  const editMode = typeof window !== "undefined" && new URLSearchParams(window.location.search).get("cms-edit") === "1";
  return <>
    <div ref={ref} data-cms-block={blockId} data-cms-label={label || blockId} className={`relative cms-block ${className}`} style={hasDesign ? { ...cssVars, background: design.background } : undefined}>
      {hasDesign ? <style>{`${scoped} h1,${scoped} h2,${scoped} h3,${scoped} h4,${scoped} h5,${scoped} h6{font-family:${design.headingFont === "sans" ? "inherit" : "var(--font-display, Georgia, serif)"};font-size:var(--cms-heading-size);font-weight:${design.headingWeight === "bold" ? 700 : design.headingWeight === "medium" ? 500 : 400};color:var(--cms-heading)}${scoped} p,${scoped} li,${scoped} blockquote{font-size:var(--cms-body-size);color:var(--cms-body)}${scoped} .text-champagne,${scoped} .text-gold{color:var(--cms-accent)}${scoped} .steelx-editable-section{padding-block:var(--cms-section-gap)}`}</style> : null}
      {block?.design?.css ? <style>{`${scoped}{${block.design.css}}`}</style> : null}
      {children}
      {editMode ? <label className="absolute right-5 top-5 z-[999] flex cursor-pointer items-center gap-2 rounded-full bg-[#c9a96e] px-4 py-2.5 text-[9px] font-semibold uppercase tracking-widest text-black shadow-xl"><span>+ Add image</span><input type="file" accept="image/*" className="hidden" onChange={e => { const file = e.target.files?.[0]; if (file) void addImage(file); e.currentTarget.value = ""; }} /></label> : null}
    </div>
    {imageEditor ? <ImageEditor editor={imageEditor} onChange={setImageEditor} onSave={saveImage} onDelete={deleteImage} /> : null}
  </>;
}

function ImageEditor({ editor, onChange, onSave, onDelete }: { editor: { img: HTMLImageElement | null; index: number; addedId?: string; name: string; alt: string; src: string }; onChange: (value: typeof editor | null) => void; onSave: (value: typeof editor) => void; onDelete: (value: typeof editor) => void }) {
  const update = (patch: Partial<typeof editor>) => onChange({ ...editor, ...patch });
  const replaceFile = (file?: File) => { if (!file || !file.type.startsWith("image/")) return; const reader = new FileReader(); reader.onload = () => update({ src: String(reader.result), name: file.name }); reader.readAsDataURL(file); };
  return <div className="fixed inset-0 z-[10001] flex items-center justify-center bg-black/70 p-4" onClick={() => onChange(null)}>
    <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-[#171715] p-6 text-white shadow-2xl" onClick={e => e.stopPropagation()}>
      <div className="flex items-start justify-between gap-4"><div><p className="text-[9px] uppercase tracking-[.25em] text-[#c9a96e]">Image manager</p><h3 className="mt-2 font-serif text-2xl">Edit image</h3></div><button onClick={() => onChange(null)} className="text-white/50">✕</button></div>
      <div className="mt-5 overflow-hidden rounded-2xl border border-white/10 bg-black/20"><img src={editor.src} alt={editor.alt} className="max-h-64 w-full object-contain" /></div>
      <div className="mt-5 grid gap-4">
        <label><span className="mb-2 block text-[9px] uppercase tracking-[.18em] text-white/45">Image name</span><input value={editor.name} onChange={e => update({ name: e.target.value })} className="w-full rounded-xl bg-white/10 px-3 py-3 text-sm outline-none" placeholder="luxury-lobby.jpg" /></label>
        <label><span className="mb-2 block text-[9px] uppercase tracking-[.18em] text-white/45">Alt text</span><input value={editor.alt} onChange={e => update({ alt: e.target.value })} className="w-full rounded-xl bg-white/10 px-3 py-3 text-sm outline-none" placeholder="Describe the image for accessibility and SEO" /></label>
        <label><span className="mb-2 block text-[9px] uppercase tracking-[.18em] text-white/45">Image URL</span><input value={editor.src} onChange={e => update({ src: e.target.value })} className="w-full rounded-xl bg-white/10 px-3 py-3 text-sm outline-none" placeholder="https://..." /></label>
        <label className="flex cursor-pointer items-center justify-center rounded-xl border border-dashed border-white/20 px-4 py-3 text-[10px] uppercase tracking-widest text-white/65 hover:bg-white/5"><span>Upload replacement image</span><input type="file" accept="image/*" className="hidden" onChange={e => replaceFile(e.target.files?.[0])} /></label>
      </div>
      <div className="mt-6 flex flex-wrap justify-between gap-3"><button onClick={() => onDelete(editor)} className="rounded-full border border-red-400/30 px-5 py-3 text-[10px] font-semibold uppercase tracking-widest text-red-300">Delete image</button><div className="flex gap-2"><button onClick={() => onChange(null)} className="rounded-full border border-white/15 px-5 py-3 text-[10px] uppercase tracking-widest text-white/60">Cancel</button><button onClick={() => onSave(editor)} className="rounded-full bg-[#c9a96e] px-6 py-3 text-[10px] font-semibold uppercase tracking-widest text-black">Save image</button></div></div>
    </div>
  </div>;
}

export function CmsVisualEditorHint() {
  const location = useLocation({ select: (l) => l.pathname });
  if (typeof window === "undefined" || new URLSearchParams(window.location.search).get("cms-edit") !== "1") return null;
  return <div className="fixed right-5 top-24 z-[9999] rounded-2xl border border-[#c9a96e]/40 bg-[#171715] p-4 text-white shadow-2xl" style={{ maxWidth: 320 }}><p className="text-[9px] uppercase tracking-[.2em] text-[#c9a96e]">Visual CMS · {location}</p><p className="mt-2 text-xs leading-5 text-white/65">Click text to edit. Click any image to replace it, rename it, change alt text or delete it. Use “Add image” inside a block to upload a new image into that specific block. Shift-click a link to change its destination. Each section remains independently styled.</p><a href={`/admin-seo?path=${encodeURIComponent(location)}`} className="mt-3 inline-flex rounded-full bg-[#c9a96e] px-4 py-2 text-[10px] font-semibold uppercase tracking-widest text-black">Back to Studio</a></div>;
}
