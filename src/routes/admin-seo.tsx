import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { defaultPageSeo, getPageSeo, routePathCatalog, savePageSeo, type PageSeo } from "@/lib/page-seo";

export const Route = createFileRoute("/admin-seo")({ component: AdminSeoPage });

function AdminSeoPage() {
  const [path, setPath] = useState("/");
  const [seo, setSeo] = useState<PageSeo>(() => defaultPageSeo("/"));
  const [custom, setCustom] = useState<string[]>([]);
  const [saved, setSaved] = useState(false);
  const [newPath, setNewPath] = useState("");
  const pages = useMemo(() => Array.from(new Set([...routePathCatalog, ...custom])).sort(), [custom]);

  useEffect(() => {
    try { const data = JSON.parse(localStorage.getItem("steelx-page-seo-v1") || "{}"); setCustom(Object.keys(data).filter(p => !routePathCatalog.includes(p))); } catch {}
  }, []);
  useEffect(() => setSeo(getPageSeo(path)), [path]);

  const change = (key: keyof PageSeo, value: string | string[]) => setSeo(s => ({ ...s, [key]: value }));
  const publish = () => { savePageSeo(seo); setSaved(true); setTimeout(() => setSaved(false), 1600); };
  const addPage = () => { const p = newPath.trim().startsWith("/") ? newPath.trim() : `/${newPath.trim()}`; if (!p || p === "/") return; savePageSeo(defaultPageSeo(p)); setCustom(x => x.includes(p) ? x : [...x, p]); setPath(p); setNewPath(""); };

  return <div className="min-h-screen bg-[#f4f3ef] text-[#181817]">
    <header className="sticky top-0 z-20 flex items-center justify-between border-b border-black/10 bg-[#171715] px-6 py-4 text-white"><div><p className="text-[9px] uppercase tracking-[.3em] text-[#c9a96e]">SteelXDecor</p><h1 className="font-serif text-xl">Content & SEO Studio</h1><p className="text-[10px] text-white/40">Every page. One SEO control center.</p></div><div className="flex gap-2"><a href="/" className="rounded-full border border-white/20 px-4 py-2 text-xs">View site</a><button onClick={publish} className="rounded-full bg-[#c9a96e] px-5 py-2 text-xs font-semibold text-black">{saved ? "Published" : "Save SEO"}</button></div></header>
    <main className="mx-auto max-w-7xl px-5 py-8 lg:px-10">
      <section className="mb-6 rounded-2xl bg-[#1b1b19] p-6 text-white"><p className="text-[10px] uppercase tracking-[.2em] text-[#c9a96e]">Future-proof</p><h2 className="mt-2 font-serif text-3xl">SEO for existing & future pages</h2><p className="mt-2 max-w-2xl text-sm text-white/55">Every route gets editable metadata automatically. Dynamic routes can use their template, and you can add a future URL before the page is even built.</p><div className="mt-5 flex gap-2"><input value={newPath} onChange={e=>setNewPath(e.target.value)} onKeyDown={e=>e.key === "Enter" && addPage()} placeholder="/new-page" className="w-72 rounded-lg bg-white/10 px-3 py-3 text-sm outline-none placeholder:text-white/30"/><button onClick={addPage} className="rounded-lg bg-[#c9a96e] px-4 py-3 text-xs font-semibold text-black">+ Add page</button></div></section>
      <section className="grid gap-6 lg:grid-cols-[250px_1fr]"><aside className="rounded-2xl bg-white p-3 shadow-sm"><p className="px-3 pb-3 pt-2 text-[10px] font-semibold uppercase tracking-[.18em] text-black/40">All routes</p>{pages.map(p=><button key={p} onClick={()=>setPath(p)} className={`mb-1 w-full rounded-lg px-3 py-2 text-left text-xs ${path===p?"bg-[#1b1b19] text-white":"hover:bg-black/5"}`}>{p}</button>)}</aside><section className="space-y-5 rounded-2xl bg-white p-6 shadow-sm"><div className="flex items-center justify-between"><div><p className="text-[10px] uppercase tracking-[.18em] text-[#c9a96e]">Editing SEO</p><h2 className="font-serif text-3xl">{path}</h2></div><a href={path} target="_blank" rel="noreferrer" className="rounded-full border border-black/10 px-4 py-2 text-xs">Preview ↗</a></div><div className="grid gap-5 md:grid-cols-2"><Field label="Meta title" value={seo.title} onChange={v=>change("title",v)}/><Field label="Canonical URL" value={seo.canonical} onChange={v=>change("canonical",v)}/></div><Field label="Meta description" value={seo.description} onChange={v=>change("description",v)} textarea/><Field label="Keywords" value={seo.keywords} onChange={v=>change("keywords",v)}/><div className="grid gap-5 md:grid-cols-2"><Field label="Robots" value={seo.robots} onChange={v=>change("robots",v)}/><Field label="OG image URL" value={seo.ogImage} onChange={v=>change("ogImage",v)}/></div><div className="grid gap-5 md:grid-cols-2"><Field label="OG title" value={seo.ogTitle} onChange={v=>change("ogTitle",v)}/><Field label="OG description" value={seo.ogDescription} onChange={v=>change("ogDescription",v)}/></div><Field label="Page tags — comma separated" value={seo.tags.join(", ")} onChange={v=>change("tags",v.split(",").map(x=>x.trim()).filter(Boolean))}/><Field label="Schema JSON-LD" value={seo.schema} onChange={v=>change("schema",v)} textarea rows={12}/><button onClick={publish} className="rounded-lg bg-[#1b1b19] px-5 py-3 text-xs font-semibold uppercase tracking-widest text-white">{saved ? "Published" : "Publish page SEO"}</button></section></section>
      <p className="mt-6 text-xs text-black/50">The editor currently stores SEO overrides in this browser. The page layer reads them site-wide. For shared multi-device publishing, move this same registry to Supabase/CMS.</p>
    </main>
  </div>;
}
function Field({label,value,onChange,textarea=false,rows=4}:{label:string;value:string;onChange:(v:string)=>void;textarea?:boolean;rows?:number}) { return <label className="block"><span className="mb-2 block text-[10px] font-semibold uppercase tracking-[.16em] text-black/50">{label}</span>{textarea?<textarea rows={rows} value={value} onChange={e=>onChange(e.target.value)} className="w-full rounded-lg border border-black/10 bg-[#fbfbfa] p-3 text-sm outline-none focus:border-[#c9a96e]"/>:<input value={value} onChange={e=>onChange(e.target.value)} className="w-full rounded-lg border border-black/10 bg-[#fbfbfa] p-3 text-sm outline-none focus:border-[#c9a96e]"/>}</label> }
