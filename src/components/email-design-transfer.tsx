import { useEffect, useRef, useState } from "react";
import { Clipboard, Download, FileDown, FileUp, Figma, Check, Layers3 } from "lucide-react";

const STORAGE_KEY = "steelx-email-design";

function getCanvas(): HTMLElement | null {
  return document.querySelector("[data-email-canvas]") || document.querySelector("main .email-canvas") || document.querySelector("main");
}

function inlineComputedStyles(source: HTMLElement, clone: HTMLElement) {
  const sourceNodes = [source, ...Array.from(source.querySelectorAll<HTMLElement>("*"))];
  const cloneNodes = [clone, ...Array.from(clone.querySelectorAll<HTMLElement>("*"))];
  sourceNodes.forEach((node, index) => {
    const target = cloneNodes[index];
    if (!target) return;
    const computed = window.getComputedStyle(node);
    for (const property of Array.from(computed)) {
      target.style.setProperty(property, computed.getPropertyValue(property), computed.getPropertyPriority(property));
    }
  });
}

function cleanClone(source: HTMLElement) {
  const clone = source.cloneNode(true) as HTMLElement;
  inlineComputedStyles(source, clone);
  clone.querySelectorAll("button, input, textarea, [data-email-editor-only], [data-email-drag-handle]").forEach((node) => node.remove());
  clone.querySelectorAll("[data-email-selected]").forEach((node) => {
    (node as HTMLElement).removeAttribute("data-email-selected");
    (node as HTMLElement).style.outline = "";
    (node as HTMLElement).style.boxShadow = "";
  });
  return clone;
}

async function copyDesign() {
  const canvas = getCanvas();
  if (!canvas) throw new Error("Email canvas not found");
  const clone = cleanClone(canvas);
  const html = `<!doctype html><html><head><meta charset="utf-8"></head><body style="margin:0;">${clone.innerHTML}</body></html>`;
  const text = clone.innerText;
  if (typeof ClipboardItem !== "undefined" && navigator.clipboard?.write) {
    await navigator.clipboard.write([new ClipboardItem({
      "text/html": new Blob([html], { type: "text/html" }),
      "text/plain": new Blob([text], { type: "text/plain" }),
    })]);
  } else {
    const range = document.createRange();
    range.selectNodeContents(clone);
    const selection = window.getSelection();
    selection?.removeAllRanges();
    selection?.addRange(range);
    document.execCommand("copy");
    selection?.removeAllRanges();
  }
}

function exportDesign() {
  const canvas = getCanvas();
  if (!canvas) throw new Error("Email canvas not found");
  const clone = cleanClone(canvas);
  const html = `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head><body style="margin:0;">${clone.innerHTML}</body></html>`;
  const url = URL.createObjectURL(new Blob([html], { type: "text/html" }));
  const a = document.createElement("a");
  a.href = url;
  a.download = "steelx-email-design.html";
  a.click();
  URL.revokeObjectURL(url);
}

function exportFigmaJson() {
  const canvas = getCanvas();
  const design = { format: "steelx-email-design", version: 2, exportedAt: new Date().toISOString(), html: canvas ? cleanClone(canvas).innerHTML : "" };
  const url = URL.createObjectURL(new Blob([JSON.stringify(design, null, 2)], { type: "application/json" }));
  const a = document.createElement("a");
  a.href = url;
  a.download = "steelx-email-design.figma.json";
  a.click();
  URL.revokeObjectURL(url);
}

function enableDragAndDrop() {
  const canvas = getCanvas();
  if (!canvas || canvas.dataset.emailDndReady === "true") return;
  canvas.dataset.emailDndReady = "true";
  canvas.classList.add("relative");
  const children = Array.from(canvas.children).filter((node) => node instanceof HTMLElement) as HTMLElement[];
  children.forEach((item) => {
    item.draggable = true;
    item.dataset.emailDraggable = "true";
    item.addEventListener("dragstart", () => { item.dataset.emailDragging = "true"; });
    item.addEventListener("dragend", () => { delete item.dataset.emailDragging; canvas.querySelectorAll("[data-email-drop-target]").forEach((node) => delete (node as HTMLElement).dataset.emailDropTarget); });
    item.addEventListener("dragover", (event) => {
      event.preventDefault();
      const dragging = canvas.querySelector<HTMLElement>("[data-email-dragging]");
      if (!dragging || dragging === item) return;
      item.dataset.emailDropTarget = "true";
    });
    item.addEventListener("drop", (event) => {
      event.preventDefault();
      const dragging = canvas.querySelector<HTMLElement>("[data-email-dragging]");
      if (!dragging || dragging === item) return;
      const rect = item.getBoundingClientRect();
      if (event.clientY < rect.top + rect.height / 2) canvas.insertBefore(dragging, item); else canvas.insertBefore(dragging, item.nextSibling);
      delete item.dataset.emailDropTarget;
    });
  });
}

export function EmailDesignTransfer() {
  const [open, setOpen] = useState(false);
  const [notice, setNotice] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (window.location.pathname !== "/email-template-builder") return;
    localStorage.setItem(STORAGE_KEY, localStorage.getItem(STORAGE_KEY) || "ready");
    const timer = window.setInterval(enableDragAndDrop, 700);
    enableDragAndDrop();
    return () => window.clearInterval(timer);
  }, []);

  if (typeof window !== "undefined" && window.location.pathname !== "/email-template-builder") return null;

  async function run(action: () => Promise<void> | void, message: string) {
    try { await action(); setNotice(message); } catch { setNotice("Could not complete action"); }
    window.setTimeout(() => setNotice(""), 2000);
  }

  function importFigma(file: File) {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(String(reader.result));
        if (parsed.format !== "steelx-email-design") throw new Error("unsupported");
        localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
        setNotice("Design imported — reload builder to apply");
      } catch { setNotice("Use a SteelX Figma JSON export"); }
      window.setTimeout(() => setNotice(""), 2200);
    };
    reader.readAsText(file);
  }

  return (
    <div className="fixed bottom-5 right-5 z-[70]">
      <div className="flex items-center gap-2">
        {notice && <div className="rounded-full border border-[#d7b878]/30 bg-[#111]/95 px-3 py-2 text-[11px] text-[#d7b878] shadow-2xl">{notice}</div>}
        <button type="button" onClick={() => setOpen((value) => !value)} className="flex items-center gap-2 rounded-full border border-[#d7b878]/40 bg-[#111]/95 px-4 py-3 text-xs font-medium text-white shadow-2xl backdrop-blur hover:border-[#d7b878]"><Layers3 className="h-4 w-4 text-[#d7b878]" /> Design Transfer</button>
      </div>
      {open && <div className="absolute bottom-14 right-0 w-80 rounded-2xl border border-white/10 bg-[#111]/98 p-3 shadow-2xl backdrop-blur-xl">
        <p className="px-2 pb-2 text-[10px] uppercase tracking-[0.18em] text-white/35">Design transfer</p>
        <button type="button" onClick={() => run(copyDesign, "Rich design copied — paste into Outlook")} className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-xs text-white/80 hover:bg-white/5"><Clipboard className="h-4 w-4 text-[#d7b878]" /><span><b className="block text-white">Copy design to Outlook</b><span className="text-white/35">Preserves fonts, spacing, colors & layout</span></span></button>
        <button type="button" onClick={exportDesign} className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-xs text-white/80 hover:bg-white/5"><Download className="h-4 w-4 text-[#d7b878]" /><span><b className="block text-white">Export visual HTML</b><span className="text-white/35">Downloads the fully styled design</span></span></button>
        <button type="button" onClick={exportFigmaJson} className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-xs text-white/80 hover:bg-white/5"><FileDown className="h-4 w-4 text-[#d7b878]" /><span><b className="block text-white">Export design file</b><span className="text-white/35">Portable SteelX design JSON</span></span></button>
        <button type="button" onClick={() => inputRef.current?.click()} className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-xs text-white/80 hover:bg-white/5"><FileUp className="h-4 w-4 text-[#d7b878]" /><span><b className="block text-white">Import design file</b><span className="text-white/35">Restore a saved SteelX design</span></span></button>
        <input ref={inputRef} type="file" accept=".json,.figma.json" className="hidden" onChange={(event) => { const file = event.target.files?.[0]; if (file) importFigma(file); event.currentTarget.value = ""; }} />
        <div className="mt-2 flex items-center gap-2 border-t border-white/10 px-2 pt-3 text-[10px] text-white/30"><Check className="h-3.5 w-3.5 text-[#d7b878]" /> Drag any canvas section to reorder it.</div>
      </div>}
    </div>
  );
}
