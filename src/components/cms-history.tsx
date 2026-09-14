import { useEffect, useState } from "react";

type Snapshot = { id: string; createdAt: string; label: string; values: Record<string, string> };

const HISTORY_KEY = "steelx-cms-history-v1";
const ELEMENT_KEY = "steelx-cms-element-v1";
const IMAGE_PREFIX = "steelx-cms-image-v1::";
const SEO_KEY = "steelx-page-seo-v1";
const HOME_KEY = "steelx-homepage-content-v1";
const MAX_REVISIONS = 12;

let installed = false;
let applying = false;
let beforeMutation: Snapshot | null = null;
const listeners = new Set<() => void>();

function relevantKey(key: string | null) {
  return Boolean(key && (key === ELEMENT_KEY || key.startsWith(IMAGE_PREFIX) || key === SEO_KEY || key === HOME_KEY));
}

function readHistory(): Snapshot[] {
  if (typeof window === "undefined") return [];
  try { return JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]"); } catch { return []; }
}

function writeHistory(items: Snapshot[]) {
  try { localStorage.setItem(HISTORY_KEY, JSON.stringify(items.slice(-MAX_REVISIONS))); } catch { /* quota-safe: keep editing */ }
  listeners.forEach((fn) => fn());
}

function captureValues(): Record<string, string> {
  const values: Record<string, string> = {};
  for (let i = 0; i < localStorage.length; i += 1) {
    const key = localStorage.key(i);
    if (!relevantKey(key)) continue;
    const value = localStorage.getItem(key);
    if (value !== null) values[key!] = value;
  }
  return values;
}

function makeSnapshot(label = "Revision"): Snapshot {
  return { id: `${Date.now()}-${Math.random().toString(36).slice(2)}`, createdAt: new Date().toISOString(), label, values: captureValues() };
}

function sameValues(a: Record<string, string>, b: Record<string, string>) {
  const ak = Object.keys(a), bk = Object.keys(b);
  if (ak.length !== bk.length) return false;
  return ak.every((key) => a[key] === b[key]);
}

function recordRevision(label = "Revision") {
  if (typeof window === "undefined" || applying || !beforeMutation) return;
  const after = makeSnapshot(label);
  if (sameValues(beforeMutation.values, after.values)) { beforeMutation = null; return; }
  const history = readHistory();
  const currentIndex = history.findIndex((item) => sameValues(item.values, beforeMutation!.values));
  const next = currentIndex >= 0 ? history.slice(0, currentIndex + 1) : [...history, beforeMutation];
  next.push(after);
  writeHistory(next);
  beforeMutation = null;
}

function install() {
  if (installed || typeof window === "undefined") return;
  installed = true;
  const originalSet = Storage.prototype.setItem;
  const originalRemove = Storage.prototype.removeItem;
  Storage.prototype.setItem = function(key: string, value: string) {
    if (this === localStorage && relevantKey(key) && !applying && !beforeMutation) beforeMutation = makeSnapshot();
    originalSet.call(this, key, value);
    if (this === localStorage && relevantKey(key) && !applying) window.setTimeout(() => recordRevision(), 0);
  };
  Storage.prototype.removeItem = function(key: string) {
    if (this === localStorage && relevantKey(key) && !applying && !beforeMutation) beforeMutation = makeSnapshot();
    originalRemove.call(this, key);
    if (this === localStorage && relevantKey(key) && !applying) window.setTimeout(() => recordRevision(), 0);
  };
}

function restore(snapshot: Snapshot) {
  if (typeof window === "undefined") return;
  applying = true;
  try {
    const currentKeys: string[] = [];
    for (let i = 0; i < localStorage.length; i += 1) {
      const key = localStorage.key(i);
      if (relevantKey(key)) currentKeys.push(key!);
    }
    currentKeys.forEach((key) => localStorage.removeItem(key));
    Object.entries(snapshot.values).forEach(([key, value]) => localStorage.setItem(key, value));
  } finally {
    applying = false;
  }
  window.dispatchEvent(new CustomEvent("steelx-cms-history-applied"));
  listeners.forEach((fn) => fn());
}

export function CmsHistoryBar() {
  const [, refresh] = useState(0);
  const [open, setOpen] = useState(false);
  const [cursor, setCursor] = useState(() => readHistory().length);

  useEffect(() => {
    install();
    const update = () => { refresh((v) => v + 1); };
    const keyboard = (event: KeyboardEvent) => {
      if (!(event.metaKey || event.ctrlKey) || event.altKey) return;
      if (event.key.toLowerCase() === "z") {
        event.preventDefault();
        if (event.shiftKey) {
          const history = readHistory();
          const index = Math.min(cursor, history.length);
          if (index < history.length) { restore(history[index]); setCursor(index + 1); }
        } else {
          const history = readHistory();
          const index = Math.min(cursor, history.length);
          if (index > 1) { restore(history[index - 2]); setCursor(index - 1); }
        }
      }
      if (event.key.toLowerCase() === "y") {
        event.preventDefault();
        const history = readHistory();
        const index = Math.min(cursor, history.length);
        if (index < history.length) { restore(history[index]); setCursor(index + 1); }
      }
    };
    listeners.add(update);
    window.addEventListener("keydown", keyboard);
    return () => { listeners.delete(update); window.removeEventListener("keydown", keyboard); };
  }, [cursor]);

  const history = readHistory();
  const undo = () => {
    const index = Math.min(cursor, history.length);
    if (index <= 1) return;
    restore(history[index - 2]);
    setCursor(index - 1);
  };
  const redo = () => {
    const index = Math.min(cursor, history.length);
    if (index >= history.length) return;
    restore(history[index]);
    setCursor(index + 1);
  };
  const jump = (index: number) => {
    if (index < 0 || index >= history.length) return;
    restore(history[index]);
    setCursor(index + 1);
    setOpen(false);
  };

  return <>
    <div className="fixed left-1/2 top-4 z-[10050] flex -translate-x-1/2 items-center gap-1 rounded-full border border-white/10 bg-[#151513]/95 p-1.5 text-white shadow-2xl backdrop-blur-xl">
      <span className="px-2 text-[9px] font-semibold uppercase tracking-[.18em] text-[#c9a96e]">History</span>
      <button type="button" onClick={undo} disabled={cursor <= 1} title="Undo" className="rounded-full border border-white/10 px-3 py-2 text-xs disabled:cursor-not-allowed disabled:opacity-25">↶</button>
      <button type="button" onClick={redo} disabled={cursor >= history.length} title="Redo" className="rounded-full border border-white/10 px-3 py-2 text-xs disabled:cursor-not-allowed disabled:opacity-25">↷</button>
      <button type="button" onClick={() => setOpen((v) => !v)} className="rounded-full bg-[#c9a96e] px-3 py-2 text-[9px] font-semibold uppercase tracking-widest text-black">Revisions {history.length}</button>
    </div>
    {open ? <div className="fixed left-1/2 top-16 z-[10049] w-[min(430px,calc(100vw-2rem))] -translate-x-1/2 rounded-3xl border border-white/10 bg-[#151513]/98 p-4 text-white shadow-2xl backdrop-blur-xl">
      <div className="flex items-center justify-between"><div><p className="text-[9px] uppercase tracking-[.2em] text-[#c9a96e]">Revision history</p><h3 className="mt-1 font-serif text-xl">Restore a version</h3></div><button type="button" onClick={() => setOpen(false)} className="text-white/45">✕</button></div>
      <div className="mt-4 max-h-[55vh] space-y-2 overflow-auto">
        {!history.length ? <p className="py-8 text-center text-xs text-white/35">Your first edit will create a revision.</p> : null}
        {history.slice().reverse().map((item, reverseIndex) => { const index = history.length - 1 - reverseIndex; const active = index + 1 === cursor; return <button key={item.id} type="button" onClick={() => jump(index)} className={`block w-full rounded-2xl border p-3 text-left ${active ? "border-[#c9a96e]/60 bg-[#c9a96e]/10" : "border-white/5 bg-white/5 hover:bg-white/10"}`}><div className="flex items-center justify-between gap-3"><span className="text-xs font-medium">{item.label}</span><span className="text-[9px] text-white/35">{new Date(item.createdAt).toLocaleString()}</span></div><p className="mt-1 text-[9px] text-white/35">Version {index + 1}{active ? " · current" : ""}</p></button>; })}
      </div>
    </div> : null}
  </>;
}
