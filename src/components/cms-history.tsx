import { useEffect, useState } from "react";

type Snapshot = { id: string; createdAt: string; label: string; values: Record<string, string> };

const HISTORY_KEY = "steelx-cms-history-v2";
const ELEMENT_KEY = "steelx-cms-element-v1";
const IMAGE_PREFIX = "steelx-cms-image-v1::";
const SEO_KEY = "steelx-page-seo-v1";
const HOME_KEY = "steelx-homepage-content-v1";
const MAX_REVISIONS = 20;

function relevantKey(key: string | null) { return Boolean(key && (key === ELEMENT_KEY || key.startsWith(IMAGE_PREFIX) || key === SEO_KEY || key === HOME_KEY)); }
function readHistory(): Snapshot[] { if (typeof window === "undefined") return []; try { return JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]"); } catch { return []; } }
function writeHistory(items: Snapshot[]) { try { localStorage.setItem(HISTORY_KEY, JSON.stringify(items.slice(-MAX_REVISIONS))); } catch {} }
function captureValues(): Record<string, string> { const values: Record<string, string> = {}; for (let i=0;i<localStorage.length;i++){const key=localStorage.key(i);if(relevantKey(key)){const value=localStorage.getItem(key);if(value!==null)values[key!]=value;}} return values; }
function makeSnapshot(label="Saved revision"): Snapshot { return {id:`${Date.now()}-${Math.random().toString(36).slice(2)}`,createdAt:new Date().toISOString(),label,values:captureValues()}; }
function sameValues(a:Record<string,string>,b:Record<string,string>){const ak=Object.keys(a),bk=Object.keys(b);return ak.length===bk.length&&ak.every(k=>a[k]===b[k]);}
function currentSnapshot(){return makeSnapshot("Current");}

export function CmsHistoryBar(){
 const [history,setHistory]=useState<Snapshot[]>(()=>readHistory());
 const [cursor,setCursor]=useState(()=>{const h=readHistory();return h.length? h.length-1:0;});
 const [open,setOpen]=useState(false);
 const [saved,setSaved]=useState(false);
 const [dirty,setDirty]=useState(false);

 useEffect(()=>{
   const onStorage=()=>{setDirty(true);};
   window.addEventListener("steelx-cms-dirty",onStorage);
   return()=>window.removeEventListener("steelx-cms-dirty",onStorage);
 },[]);

 const save=()=>{
   const next=currentSnapshot();
   const h=readHistory();
   if(h.length && sameValues(h[h.length-1].values,next.values)){setDirty(false);setSaved(true);window.setTimeout(()=>setSaved(false),1400);return;}
   const trimmed=h.slice(0,Math.max(0,cursor+1));
   const final=[...trimmed,{...next,label:`Saved version ${trimmed.length+1}`}].slice(-MAX_REVISIONS);
   writeHistory(final);setHistory(final);setCursor(final.length-1);setDirty(false);setSaved(true);window.setTimeout(()=>setSaved(false),1400);
 };
 const restore=(snapshot:Snapshot)=>{localStorage.removeItem(ELEMENT_KEY);Object.keys(localStorage).filter(k=>relevantKey(k)).forEach(k=>localStorage.removeItem(k));Object.entries(snapshot.values).forEach(([k,v])=>localStorage.setItem(k,v));window.dispatchEvent(new CustomEvent("steelx-cms-history-applied"));setDirty(false);setSaved(false);window.location.reload();};
 const undo=()=>{if(cursor<=0)return;restore(history[cursor-1]);};
 const redo=()=>{if(cursor>=history.length-1)return;restore(history[cursor+1]);};
 const jump=(i:number)=>{if(!history[i])return;restore(history[i]);setOpen(false);};

 useEffect(()=>{
   const key=(e:KeyboardEvent)=>{if(!(e.metaKey||e.ctrlKey)||e.altKey)return;if(e.key.toLowerCase()==="s"){e.preventDefault();save();}if(e.key.toLowerCase()==="z"){e.preventDefault();e.shiftKey?redo():undo();}if(e.key.toLowerCase()==="y"){e.preventDefault();redo();}};
   window.addEventListener("keydown",key);return()=>window.removeEventListener("keydown",key);
 });

 return <>
  <div className="fixed left-1/2 top-4 z-[10050] flex -translate-x-1/2 items-center gap-1 rounded-full border border-white/10 bg-[#151513]/95 p-1.5 text-white shadow-2xl backdrop-blur-xl">
   <span className="px-2 text-[9px] font-semibold uppercase tracking-[.18em] text-[#c9a96e]">Visual Editor</span>
   <button type="button" onClick={undo} disabled={cursor<=0} title="Undo" className="rounded-full border border-white/10 px-3 py-2 text-xs disabled:opacity-25">↶</button>
   <button type="button" onClick={redo} disabled={cursor>=history.length-1} title="Redo" className="rounded-full border border-white/10 px-3 py-2 text-xs disabled:opacity-25">↷</button>
   <button type="button" onClick={()=>setOpen(v=>!v)} className="rounded-full border border-white/10 px-3 py-2 text-[9px] font-semibold uppercase tracking-widest">Revisions {history.length}</button>
   <button type="button" onClick={save} className="rounded-full bg-[#c9a96e] px-4 py-2 text-[9px] font-semibold uppercase tracking-widest text-black">{saved?"Saved ✓":"Save changes"}</button>
  </div>
  {dirty?<div className="fixed left-1/2 top-[4.5rem] z-[10049] -translate-x-1/2 rounded-full border border-amber-300/20 bg-[#151513]/95 px-4 py-2 text-[9px] uppercase tracking-widest text-amber-100 shadow-xl">Unsaved changes · click Save changes</div>:null}
  {open?<div className="fixed left-1/2 top-16 z-[10049] w-[min(460px,calc(100vw-2rem))] -translate-x-1/2 rounded-3xl border border-white/10 bg-[#151513]/98 p-4 text-white shadow-2xl backdrop-blur-xl">
   <div className="flex items-center justify-between"><div><p className="text-[9px] uppercase tracking-[.2em] text-[#c9a96e]">Revision history</p><h3 className="mt-1 font-serif text-xl">Restore a saved version</h3></div><button type="button" onClick={()=>setOpen(false)} className="text-white/45">✕</button></div>
   <p className="mt-2 text-[10px] leading-4 text-white/45">Only versions you explicitly save are added here. This makes Undo, Redo and restoring a version predictable.</p>
   <div className="mt-4 max-h-[55vh] space-y-2 overflow-auto">{!history.length?<p className="py-8 text-center text-xs text-white/35">No saved revisions yet.</p>:null}{history.slice().reverse().map((item,ri)=>{const i=history.length-1-ri;return <button key={item.id} type="button" onClick={()=>jump(i)} className={`block w-full rounded-2xl border p-3 text-left ${i===cursor?"border-[#c9a96e]/60 bg-[#c9a96e]/10":"border-white/5 bg-white/5 hover:bg-white/10"}`}><div className="flex items-center justify-between gap-3"><span className="text-xs font-medium">{item.label}</span><span className="text-[9px] text-white/35">{new Date(item.createdAt).toLocaleString()}</span></div><p className="mt-1 text-[9px] text-white/35">Version {i+1}{i===cursor?" · current":""}</p></button>})}</div>
  </div>:null}
 </>;
}
