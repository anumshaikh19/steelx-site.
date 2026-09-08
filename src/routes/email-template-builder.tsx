import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowUp,
  Check,
  Code2,
  Copy,
  Download,
  Eye,
  Image as ImageIcon,
  Mail,
  Monitor,
  MousePointerClick,
  Plus,
  Quote,
  Redo2,
  Send,
  Smartphone,
  Sparkles,
  Trash2,
  Type,
  Undo2,
} from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/email-template-builder")({
  component: EmailTemplateBuilderPage,
});

type BlockType = "hero" | "text" | "image" | "button" | "divider" | "columns" | "quote";
type Align = "left" | "center" | "right";
type EmailBlock = {
  id: string;
  type: BlockType;
  eyebrow?: string;
  heading?: string;
  body?: string;
  buttonText?: string;
  buttonUrl?: string;
  imageUrl?: string;
  quote?: string;
  author?: string;
  align?: Align;
};

type Palette = { name: string; accent: string; background: string; text: string };

const palettes: Palette[] = [
  { name: "Steel", accent: "#c9a96b", background: "#f5f3ee", text: "#161616" },
  { name: "Obsidian", accent: "#d7b878", background: "#0b0b0b", text: "#f5f3ee" },
  { name: "Ivory", accent: "#8d7651", background: "#fffdf8", text: "#25231f" },
];

const starterBlocks: EmailBlock[] = [
  {
    id: "hero-1",
    type: "hero",
    eyebrow: "STEELX / FIELD NOTES",
    heading: "The latest from the world of architectural metal.",
    body: "New finishes, completed spaces and ideas worth specifying — delivered to your inbox.",
    buttonText: "Explore the collection",
    buttonUrl: "https://steelxdecor.com",
    align: "left",
  },
  {
    id: "text-1",
    type: "text",
    heading: "Designed for the details",
    body: "This month we are looking at the surfaces that change how a room catches light. From PVD stainless steel to decorative mesh, discover materials made to become part of the architecture.",
    align: "left",
  },
  {
    id: "image-1",
    type: "image",
    imageUrl: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80",
    heading: "Material / Light / Space",
    body: "A closer look at our latest installation.",
    align: "left",
  },
  {
    id: "quote-1",
    type: "quote",
    quote: "The strongest spaces are often defined by the surface you notice last.",
    author: "STEELX STUDIO",
    align: "center",
  },
  {
    id: "button-1",
    type: "button",
    buttonText: "View recent projects",
    buttonUrl: "https://steelxdecor.com/projects",
    align: "center",
  },
];

const blockMeta: Record<BlockType, { label: string; icon: typeof Type }> = {
  hero: { label: "Hero", icon: Sparkles },
  text: { label: "Text", icon: Type },
  image: { label: "Image", icon: ImageIcon },
  button: { label: "Button", icon: MousePointerClick },
  divider: { label: "Divider", icon: MinusIcon },
  columns: { label: "Columns", icon: ColumnsIcon },
  quote: { label: "Quote", icon: Quote },
};

function MinusIcon({ className }: { className?: string }) {
  return <span className={cn("block h-px w-4 bg-current", className)} />;
}

function ColumnsIcon({ className }: { className?: string }) {
  return <span className={cn("grid h-4 w-4 grid-cols-2 gap-0.5", className)}><span className="rounded-sm bg-current" /><span className="rounded-sm bg-current" /></span>;
}

function createBlock(type: BlockType): EmailBlock {
  const id = `${type}-${Date.now()}`;
  if (type === "hero") return { id, type, eyebrow: "YOUR BRAND / NEWSLETTER", heading: "Your newsletter headline goes here.", body: "Introduce this edition with a short, confident message.", buttonText: "Read more", buttonUrl: "#", align: "left" };
  if (type === "text") return { id, type, heading: "A new section", body: "Add your newsletter story, product update, announcement or editorial note here.", align: "left" };
  if (type === "image") return { id, type, imageUrl: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80", heading: "Featured story", body: "Add a caption or supporting copy.", align: "left" };
  if (type === "button") return { id, type, buttonText: "Call to action", buttonUrl: "#", align: "center" };
  if (type === "columns") return { id, type, heading: "Two ideas. One newsletter.", body: "Use columns for products, links or short editorial cards.", align: "left" };
  if (type === "quote") return { id, type, quote: "Add a memorable quote or customer statement here.", author: "AUTHOR / BRAND", align: "center" };
  return { id, type };
}

function EmailTemplateBuilderPage() {
  const [blocks, setBlocks] = useState<EmailBlock[]>(starterBlocks);
  const [selectedId, setSelectedId] = useState(starterBlocks[0]?.id ?? "");
  const [palette, setPalette] = useState<Palette>(palettes[0]);
  const [subject, setSubject] = useState("STEELX — Field Notes / September");
  const [sender, setSender] = useState("STEELX Studio <studio@steelxdecor.com>");
  const [device, setDevice] = useState<"desktop" | "mobile">("desktop");
  const [mode, setMode] = useState<"editor" | "preview" | "code">("editor");
  const [history, setHistory] = useState<EmailBlock[][]>([]);
  const [future, setFuture] = useState<EmailBlock[][]>([]);
  const [notice, setNotice] = useState("");

  const selected = blocks.find((block) => block.id === selectedId) ?? null;
  const html = useMemo(() => buildEmailHtml(blocks, palette, subject), [blocks, palette, subject]);

  function commit(next: EmailBlock[]) {
    setHistory((items) => [...items.slice(-19), blocks]);
    setFuture([]);
    setBlocks(next);
  }

  function updateSelected(patch: Partial<EmailBlock>) {
    if (!selected) return;
    commit(blocks.map((block) => block.id === selected.id ? { ...block, ...patch } : block));
  }

  function addBlock(type: BlockType) {
    const block = createBlock(type);
    commit([...blocks, block]);
    setSelectedId(block.id);
  }

  function removeBlock() {
    if (!selected) return;
    const index = blocks.findIndex((block) => block.id === selected.id);
    const next = blocks.filter((block) => block.id !== selected.id);
    commit(next);
    setSelectedId(next[index - 1]?.id ?? next[0]?.id ?? "");
  }

  function moveBlock(direction: -1 | 1) {
    if (!selected) return;
    const index = blocks.findIndex((block) => block.id === selected.id);
    const target = index + direction;
    if (target < 0 || target >= blocks.length) return;
    const next = [...blocks];
    const item = next[index];
    const targetItem = next[target];
    if (!item || !targetItem) return;
    next[index] = targetItem;
    next[target] = item;
    commit(next);
  }

  function duplicateBlock() {
    if (!selected) return;
    const copy = { ...selected, id: `${selected.type}-${Date.now()}` };
    const index = blocks.findIndex((block) => block.id === selected.id);
    const next = [...blocks];
    next.splice(index + 1, 0, copy);
    commit(next);
    setSelectedId(copy.id);
  }

  function undo() {
    const previous = history.at(-1);
    if (!previous) return;
    setFuture((items) => [...items, blocks]);
    setHistory((items) => items.slice(0, -1));
    setBlocks(previous);
    setSelectedId(previous[0]?.id ?? "");
  }

  function redo() {
    const next = future.at(-1);
    if (!next) return;
    setHistory((items) => [...items, blocks]);
    setFuture((items) => items.slice(0, -1));
    setBlocks(next);
    setSelectedId(next[0]?.id ?? "");
  }

  async function copyHtml() {
    await navigator.clipboard?.writeText(html);
    setNotice("HTML copied");
    window.setTimeout(() => setNotice(""), 1600);
  }

  function exportHtml() {
    const blob = new Blob([html], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "steelx-newsletter.html";
    anchor.click();
    URL.revokeObjectURL(url);
  }

  return (
    <PageShell>
      <div className="min-h-[calc(100vh-80px)] bg-[#090909] text-[#f3f0e9]">
        <header className="border-b border-white/10 bg-[#0d0d0d] px-4 py-4 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-[1800px] items-center justify-between gap-4">
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-[#d7b878]"><Mail className="h-5 w-5" /></div>
              <div className="min-w-0"><h1 className="truncate font-display text-xl">Email Template Builder</h1><p className="text-[11px] text-white/40">Build polished, responsive newsletters without touching code.</p></div>
            </div>
            <div className="flex items-center gap-2">
              <button type="button" onClick={undo} disabled={!history.length} className="icon-button"><Undo2 className="h-4 w-4" /></button>
              <button type="button" onClick={redo} disabled={!future.length} className="icon-button"><Redo2 className="h-4 w-4" /></button>
              <button type="button" onClick={() => setMode(mode === "preview" ? "editor" : "preview")} className="toolbar-button"><Eye className="h-4 w-4" /><span className="hidden sm:inline">Preview</span></button>
              <button type="button" onClick={copyHtml} className="toolbar-button"><Copy className="h-4 w-4" /><span className="hidden sm:inline">Copy HTML</span></button>
              <button type="button" onClick={exportHtml} className="gold-button"><Download className="h-4 w-4" /><span className="hidden sm:inline">Export</span></button>
            </div>
          </div>
        </header>

        <div className="mx-auto flex max-w-[1800px] items-center justify-between gap-4 border-b border-white/10 px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-3"><span className="hidden text-[9px] uppercase tracking-[0.22em] text-white/35 sm:inline">Subject</span><input value={subject} onChange={(event) => setSubject(event.target.value)} className="min-w-0 bg-transparent text-sm text-white/80 outline-none" /></div>
          <div className="flex items-center gap-2"><span className="hidden text-[10px] text-[#d7b878] sm:inline">{notice}</span><button type="button" onClick={() => setNotice("Draft ready")} className="toolbar-button"><Check className="h-4 w-4" /> Save draft</button><button type="button" className="gold-button"><Send className="h-4 w-4" /> Send test</button></div>
        </div>

        {mode === "code" ? <CodeView html={html} onClose={() => setMode("editor")} /> : mode === "preview" ? <Preview blocks={blocks} palette={palette} device={device} setDevice={setDevice} onCode={() => setMode("code")} /> : (
          <div className="grid min-h-[calc(100vh-150px)] lg:grid-cols-[230px_minmax(0,1fr)_310px]">
            <aside className="border-b border-white/10 bg-[#0c0c0c] lg:border-b-0 lg:border-r"><div className="p-4 sm:p-5"><p className="section-label">Content blocks</p><div className="mt-3 grid grid-cols-2 gap-2 lg:grid-cols-1">{(Object.keys(blockMeta) as BlockType[]).map((type) => { const Icon = blockMeta[type].icon; return <button key={type} type="button" onClick={() => addBlock(type)} className="block-picker"><Icon className="h-4 w-4 text-[#d7b878]" /><span>{blockMeta[type].label}</span><Plus className="ml-auto h-3.5 w-3.5 text-white/25" /></button>; })}</div><div className="my-6 h-px bg-white/10" /><p className="section-label">Design</p><div className="mt-3 space-y-2">{palettes.map((item) => <button key={item.name} type="button" onClick={() => setPalette(item)} className={cn("flex w-full items-center gap-3 rounded-xl border p-2.5 text-left", palette.name === item.name ? "border-[#d7b878]/50 bg-white/[0.05]" : "border-white/10")}><span className="h-7 w-7 rounded-lg border border-white/10" style={{ background: `linear-gradient(135deg, ${item.background} 50%, ${item.accent} 50%)` }} /><span className="text-xs text-white/70">{item.name}</span></button>)}</div><div className="mt-6 rounded-xl border border-[#d7b878]/15 bg-[#d7b878]/[0.04] p-3.5"><div className="flex items-center gap-2 text-[#d7b878]"><Sparkles className="h-3.5 w-3.5" /><span className="text-[10px] uppercase tracking-[0.18em]">Pro tip</span></div><p className="mt-2 text-[11px] leading-relaxed text-white/40">Keep one primary CTA per newsletter. Short sections perform better on mobile.</p></div></div></aside>

            <main className="min-w-0 bg-[#151515] p-4 sm:p-6 lg:p-8"><div className="mx-auto max-w-[920px]"><div className="mb-5 flex items-center justify-between"><div><p className="section-label">Canvas</p><p className="mt-1 text-[11px] text-white/35">Click a block to edit it.</p></div><div className="flex rounded-lg border border-white/10 bg-[#0d0d0d] p-1"><button type="button" onClick={() => setDevice("desktop")} className={cn("rounded-md p-1.5", device === "desktop" ? "bg-white/10 text-white" : "text-white/30")}><Monitor className="h-3.5 w-3.5" /></button><button type="button" onClick={() => setDevice("mobile")} className={cn("rounded-md p-1.5", device === "mobile" ? "bg-white/10 text-white" : "text-white/30")}><Smartphone className="h-3.5 w-3.5" /></button></div></div><div className={cn("mx-auto overflow-hidden rounded-xl bg-white shadow-2xl", device === "mobile" ? "max-w-[390px]" : "max-w-[680px]")}><div className="border-b border-[#ddd] bg-[#f7f7f7] px-4 py-2.5 text-[9px] text-[#888]">TO: subscribers · FROM: {sender}</div>{blocks.map((block, index) => <EditableBlock key={block.id} block={block} selected={block.id === selectedId} onSelect={() => setSelectedId(block.id)} palette={palette} onMove={moveBlock} onDuplicate={duplicateBlock} onRemove={removeBlock} first={index === 0} last={index === blocks.length - 1} />)}{blocks.length === 0 ? <button type="button" onClick={() => addBlock("hero")} className="flex min-h-[340px] w-full items-center justify-center gap-3 text-[#777]"><Plus className="h-8 w-8" />Add your first block</button> : null}<div className="border-t border-[#ddd] bg-[#f4f4f4] px-8 py-7 text-center text-[#999]"><p className="text-[9px] uppercase tracking-[0.2em]">STEELX STUDIO</p><p className="mt-2 text-[10px]">You are receiving this because you subscribed to our newsletter.</p><p className="mt-3 text-[9px] underline">Unsubscribe · Preferences</p></div></div></div></main>

            <aside className="border-t border-white/10 bg-[#0c0c0c] lg:border-l lg:border-t-0"><div className="sticky top-0 max-h-[calc(100vh-150px)] overflow-y-auto p-4 sm:p-5"><p className="section-label">Inspector</p>{selected ? <Inspector block={selected} update={updateSelected} /> : <p className="mt-6 text-sm text-white/30">Select a block to edit it.</p>}</div></aside>
          </div>
        )}
      </div>
    </PageShell>
  );
}

function EditableBlock({ block, selected, onSelect, palette, onMove, onDuplicate, onRemove, first, last }: { block: EmailBlock; selected: boolean; onSelect: () => void; palette: Palette; onMove: (direction: -1 | 1) => void; onDuplicate: () => void; onRemove: () => void; first: boolean; last: boolean }) {
  return <div onClick={onSelect} className={cn("group relative cursor-pointer", selected ? "ring-2 ring-inset ring-[#c9a96b]" : "hover:ring-1 hover:ring-inset hover:ring-[#c9a96b]/50")}>{selected ? <div className="absolute right-2 top-2 z-10 flex gap-1 rounded-lg bg-[#171717] p-1" onClick={(event) => event.stopPropagation()}><button type="button" disabled={first} onClick={() => onMove(-1)} className="mini-action"><ArrowUp className="h-3 w-3" /></button><button type="button" disabled={last} onClick={() => onMove(1)} className="mini-action"><ArrowDown className="h-3 w-3" /></button><button type="button" onClick={onDuplicate} className="mini-action"><Copy className="h-3 w-3" /></button><button type="button" onClick={onRemove} className="mini-action"><Trash2 className="h-3 w-3" /></button></div> : null}<RenderedBlock block={block} palette={palette} /></div>;
}

function RenderedBlock({ block, palette }: { block: EmailBlock; palette: Palette }) {
  const align = block.align ?? "left";
  if (block.type === "divider") return <div className="px-10 py-7"><div className="h-px w-full bg-black/10" /></div>;
  if (block.type === "columns") return <div className="grid grid-cols-2 gap-4 px-8 py-9" style={{ color: palette.text }}><div className="rounded-lg border border-black/10 p-5"><div className="mb-4 h-20 rounded-md bg-black/10" /><p className="text-xs font-bold">Column one</p><p className="mt-2 text-[10px] opacity-60">Short supporting copy.</p></div><div className="rounded-lg border border-black/10 p-5"><div className="mb-4 h-20 rounded-md bg-black/10" /><p className="text-xs font-bold">Column two</p><p className="mt-2 text-[10px] opacity-60">Another short story.</p></div></div>;
  if (block.type === "hero") return <div className="px-8 py-12 sm:px-10" style={{ background: palette.background, color: palette.text, textAlign: align }}><p className="text-[8px] font-bold tracking-[0.3em]" style={{ color: palette.accent }}>{block.eyebrow}</p><h2 className="mt-5 font-serif text-3xl font-semibold leading-[1.05] sm:text-4xl">{block.heading}</h2><p className="mt-5 text-sm leading-relaxed opacity-60">{block.body}</p>{block.buttonText ? <div className="mt-7"><span className="inline-flex rounded-sm px-5 py-3 text-[9px] font-bold uppercase tracking-[0.16em]" style={{ background: palette.accent, color: "#111" }}>{block.buttonText}</span></div> : null}</div>;
  if (block.type === "text") return <div className="px-8 py-9 sm:px-10" style={{ color: palette.text, textAlign: align }}><h3 className="font-serif text-2xl font-semibold">{block.heading}</h3><p className="mt-4 text-sm leading-7 opacity-65">{block.body}</p></div>;
  if (block.type === "image") return <div style={{ color: palette.text, textAlign: align }}><img src={block.imageUrl} alt="Newsletter feature" className="block aspect-[16/9] w-full object-cover" /><div className="px-8 py-5"><h3 className="font-serif text-xl font-semibold">{block.heading}</h3><p className="mt-2 text-xs opacity-55">{block.body}</p></div></div>;
  if (block.type === "quote") return <div className="px-8 py-12" style={{ background: palette.background, color: palette.text, textAlign: align }}><Quote className="mx-auto h-5 w-5" style={{ color: palette.accent }} /><p className="mt-4 font-serif text-2xl italic">“{block.quote}”</p><p className="mt-5 text-[8px] font-bold uppercase tracking-[0.25em] opacity-50">{block.author}</p></div>;
  return <div className="flex justify-center px-8 py-9" style={{ textAlign: align }}><span className="rounded-sm px-6 py-3 text-[9px] font-bold uppercase tracking-[0.16em]" style={{ background: palette.accent, color: "#111" }}>{block.buttonText}</span></div>;
}

function Inspector({ block, update }: { block: EmailBlock; update: (patch: Partial<EmailBlock>) => void }) {
  return <div className="mt-4 space-y-4">{block.type === "hero" ? <><Field label="Eyebrow" value={block.eyebrow} onChange={(value) => update({ eyebrow: value })} /><Field label="Headline" value={block.heading} onChange={(value) => update({ heading: value })} area /><Field label="Body" value={block.body} onChange={(value) => update({ body: value })} area /><Field label="Button" value={block.buttonText} onChange={(value) => update({ buttonText: value })} /><Field label="URL" value={block.buttonUrl} onChange={(value) => update({ buttonUrl: value })} /></> : null}{block.type === "text" ? <><Field label="Heading" value={block.heading} onChange={(value) => update({ heading: value })} /><Field label="Copy" value={block.body} onChange={(value) => update({ body: value })} area /></> : null}{block.type === "image" ? <><Field label="Image URL" value={block.imageUrl} onChange={(value) => update({ imageUrl: value })} /><Field label="Heading" value={block.heading} onChange={(value) => update({ heading: value })} /><Field label="Caption" value={block.body} onChange={(value) => update({ body: value })} /></> : null}{block.type === "button" ? <><Field label="Button label" value={block.buttonText} onChange={(value) => update({ buttonText: value })} /><Field label="Destination URL" value={block.buttonUrl} onChange={(value) => update({ buttonUrl: value })} /></> : null}{block.type === "quote" ? <><Field label="Quote" value={block.quote} onChange={(value) => update({ quote: value })} area /><Field label="Attribution" value={block.author} onChange={(value) => update({ author: value })} /></> : null}{block.type === "columns" ? <Field label="Section heading" value={block.heading} onChange={(value) => update({ heading: value })} /> : null}</div>;
}

function Field({ label, value, onChange, area = false }: { label: string; value?: string; onChange: (value: string) => void; area?: boolean }) {
  return <label className="block"><span className="field-label">{label}</span>{area ? <textarea rows={4} value={value ?? ""} onChange={(event) => onChange(event.target.value)} className="field resize-none" /> : <input value={value ?? ""} onChange={(event) => onChange(event.target.value)} className="field" />}</label>;
}

function Preview({ blocks, palette, device, setDevice, onCode }: { blocks: EmailBlock[]; palette: Palette; device: "desktop" | "mobile"; setDevice: (value: "desktop" | "mobile") => void; onCode: () => void }) {
  return <div className="min-h-[calc(100vh-150px)] bg-[#151515] p-4 sm:p-8"><div className="mx-auto max-w-[1000px]"><div className="mb-5 flex items-center justify-between"><div><p className="section-label">Live preview</p><p className="mt-1 text-[11px] text-white/35">What subscribers will see.</p></div><div className="flex gap-2"><button type="button" onClick={() => setDevice(device === "desktop" ? "mobile" : "desktop")} className="toolbar-button">{device === "desktop" ? <Monitor className="h-4 w-4" /> : <Smartphone className="h-4 w-4" />} Device</button><button type="button" onClick={onCode} className="toolbar-button"><Code2 className="h-4 w-4" /> HTML</button></div></div><div className={cn("mx-auto overflow-hidden rounded-xl bg-white shadow-2xl", device === "mobile" ? "max-w-[390px]" : "max-w-[680px]")}>{blocks.map((block) => <RenderedBlock key={block.id} block={block} palette={palette} />)}</div></div></div>;
}

function CodeView({ html, onClose }: { html: string; onClose: () => void }) {
  return <div className="min-h-[calc(100vh-150px)] bg-[#111] p-4 sm:p-8"><div className="mx-auto max-w-[1100px]"><div className="mb-4 flex items-center justify-between"><div><p className="section-label">Export HTML</p><p className="mt-1 text-[11px] text-white/35">Ready to paste into your email platform.</p></div><button type="button" onClick={onClose} className="toolbar-button">Close</button></div><pre className="overflow-auto rounded-xl border border-white/10 bg-[#080808] p-5 text-xs leading-relaxed text-white/65">{html}</pre></div></div>;
}

function buildEmailHtml(blocks: EmailBlock[], palette: Palette, subject: string) {
  const body = blocks.map((block) => {
    const align = block.align ?? "left";
    const button = block.buttonText ? `<a href="${escapeHtml(block.buttonUrl || "#")}" style="display:inline-block;background:${palette.accent};color:#111;text-decoration:none;padding:13px 22px;font:700 11px Arial,sans-serif;letter-spacing:1.5px;text-transform:uppercase;">${escapeHtml(block.buttonText)}</a>` : "";
    if (block.type === "divider") return `<tr><td style="padding:28px 40px;"><div style="height:1px;background:${palette.text}22;"></div></td></tr>`;
    if (block.type === "hero") return `<tr><td style="background:${palette.background};color:${palette.text};padding:48px 40px;text-align:${align};"><div style="font:700 9px Arial,sans-serif;letter-spacing:3px;color:${palette.accent};">${escapeHtml(block.eyebrow || "")}</div><h1 style="font:600 42px Georgia,serif;line-height:1.05;margin:20px 0 0;">${escapeHtml(block.heading || "")}</h1><p style="font:14px Arial,sans-serif;line-height:1.7;opacity:.65;">${escapeHtml(block.body || "")}</p><div style="margin-top:26px;">${button}</div></td></tr>`;
    if (block.type === "text") return `<tr><td style="padding:36px 40px;color:${palette.text};text-align:${align};"><h2 style="font:600 27px Georgia,serif;margin:0;">${escapeHtml(block.heading || "")}</h2><p style="font:14px Arial,sans-serif;line-height:1.8;opacity:.65;margin:16px 0 0;">${escapeHtml(block.body || "")}</p></td></tr>`;
    if (block.type === "image") return `<tr><td style="color:${palette.text};text-align:${align};"><img src="${escapeHtml(block.imageUrl || "")}" alt="" width="680" style="display:block;width:100%;height:auto;"><div style="padding:20px 40px;"><h2 style="font:600 23px Georgia,serif;margin:0;">${escapeHtml(block.heading || "")}</h2><p style="font:12px Arial,sans-serif;opacity:.55;margin:8px 0 0;">${escapeHtml(block.body || "")}</p></div></td></tr>`;
    if (block.type === "quote") return `<tr><td style="background:${palette.background};color:${palette.text};padding:42px;text-align:center;"><div style="font:italic 26px Georgia,serif;line-height:1.4;">“${escapeHtml(block.quote || "") }”</div><div style="font:700 9px Arial,sans-serif;letter-spacing:2px;margin-top:18px;opacity:.5;">${escapeHtml(block.author || "")}</div></td></tr>`;
    if (block.type === "columns") return `<tr><td style="padding:32px 28px;color:${palette.text};"><table role="presentation" width="100%"><tr><td width="50%" style="padding:12px;"><div style="height:90px;background:#00000010;"></div><h3 style="font:700 13px Arial,sans-serif;">Column one</h3></td><td width="50%" style="padding:12px;"><div style="height:90px;background:#00000010;"></div><h3 style="font:700 13px Arial,sans-serif;">Column two</h3></td></tr></table></td></tr>`;
    return `<tr><td style="padding:30px;text-align:${align};">${button}</td></tr>`;
  }).join("");
  return `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>${escapeHtml(subject)}</title></head><body style="margin:0;background:#ececec;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td align="center" style="padding:28px 10px;"><table role="presentation" width="680" cellpadding="0" cellspacing="0" style="max-width:680px;width:100%;background:#fff;">${body}<tr><td style="background:#f4f4f4;padding:30px;text-align:center;font:10px Arial;color:#999;">STEELX STUDIO · You are receiving this because you subscribed to our newsletter.<br><br><u>Unsubscribe</u> · <u>Preferences</u></td></tr></table></td></tr></table></body></html>`;
}

function escapeHtml(value: string) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}
