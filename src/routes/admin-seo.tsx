import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { defaultHomepageContent, type HomepageContent, type SeoLink } from "@/data/homepage-content";

export const Route = createFileRoute("/admin-seo")({ component: AdminSeoPage });
const KEY = "steelx-homepage-content-v1";

function AdminSeoPage() {
  const [content, setContent] = useState<HomepageContent>(defaultHomepageContent);
  const [tab, setTab] = useState("SEO");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try { const raw = localStorage.getItem(KEY); if (raw) setContent(JSON.parse(raw)); } catch {}
  }, []);

  const save = () => { localStorage.setItem(KEY, JSON.stringify(content)); setSaved(true); setTimeout(() => setSaved(false), 1800); };
  const updateSeo = (key: keyof HomepageContent["seo"], value: string | string[]) => setContent(c => ({ ...c, seo: { ...c.seo, [key]: value } }));
  const updateHero = (key: keyof HomepageContent["hero"], value: string) => setContent(c => ({ ...c, hero: { ...c.hero, [key]: value } }));
  const addLink = () => setContent(c => ({ ...c, links: [...c.links, { label: "New link", url: "/", external: false }] }));
  const updateLink = (i: number, key: keyof SeoLink, value: string | boolean) => setContent(c => ({ ...c, links: c.links.map((l, n) => n === i ? { ...l, [key]: value } : l) }));

  return <div className="min-h-screen bg-[#f4f3ef] text-[#181817]">
    <header className="sticky top-0 z-20 flex items-center justify-between border-b border-black/10 bg-[#171715] px-6 py-4 text-white">
      <div><p className="text-[9px] uppercase tracking-[.3em] text-[#c9a96e]">SteelXDecor</p><h1 className="font-serif text-xl">Content & SEO Studio</h1></div>
      <div className="flex gap-2"><a href="/" className="rounded-full border border-white/20 px-4 py-2 text-xs">View site</a><button onClick={save} className="rounded-full bg-[#c9a96e] px-5 py-2 text-xs font-semibold text-black">{saved ? "Published" : "Save changes"}</button></div>
    </header>
    <main className="mx-auto max-w-7xl px-5 py-8 lg:px-10">
      <div className="mb-8 grid gap-3 sm:grid-cols-5">{["SEO","Hero","Products","Process","About / CTA"].map(t => <button key={t} onClick={() => setTab(t)} className={`rounded-xl border px-4 py-3 text-left text-xs uppercase tracking-[.15em] ${tab === t ? "border-[#c9a96e] bg-[#1b1b19] text-white" : "border-black/10 bg-white"}`}>{t}</button>)}</div>
      {tab === "SEO" && <section className="space-y-5 rounded-2xl bg-white p-6 shadow-sm"><h2 className="font-serif text-3xl">Search settings</h2><Field label="Meta title" value={content.seo.title} onChange={v => updateSeo("title", v)} /><Field label="Meta description" value={content.seo.description} onChange={v => updateSeo("description", v)} textarea /><Field label="Keywords / tags" value={content.seo.keywords} onChange={v => updateSeo("keywords", v)} /><Field label="Canonical URL" value={content.seo.canonical} onChange={v => updateSeo("canonical", v)} /><Field label="Robots" value={content.seo.robots} onChange={v => updateSeo("robots", v)} /><Field label="Schema JSON-LD" value={content.seo.schema} onChange={v => updateSeo("schema", v)} textarea rows={12} /><h3 className="pt-4 text-sm font-semibold">Page tags</h3><Field label="Comma-separated tags" value={content.seo.tags.join(", ")} onChange={v => updateSeo("tags", v.split(",").map(x => x.trim()).filter(Boolean))} /><h3 className="pt-4 text-sm font-semibold">Internal & external links</h3>{content.links.map((l,i)=><div key={i} className="grid gap-2 md:grid-cols-[1fr_1fr_auto_auto]"><input value={l.label} onChange={e=>updateLink(i,"label",e.target.value)} className="rounded-lg border p-3 text-sm" placeholder="Anchor text"/><input value={l.url} onChange={e=>updateLink(i,"url",e.target.value)} className="rounded-lg border p-3 text-sm" placeholder="/projects or https://..."/><label className="flex items-center gap-2 rounded-lg border px-3 text-xs"><input type="checkbox" checked={!!l.external} onChange={e=>updateLink(i,"external",e.target.checked)}/> External</label><button onClick={()=>setContent(c=>({...c,links:c.links.filter((_,n)=>n!==i)}))} className="rounded-lg border px-3 text-xs">Delete</button></div>)}<button onClick={addLink} className="rounded-lg border border-[#c9a96e] px-4 py-2 text-xs uppercase tracking-widest">+ Add link</button></section>}
      {tab === "Hero" && <section className="space-y-5 rounded-2xl bg-white p-6 shadow-sm"><h2 className="font-serif text-3xl">Hero content</h2>{Object.entries(content.hero).map(([k,v]) => typeof v === "string" ? <Field key={k} label={k} value={v} onChange={x=>updateHero(k as keyof HomepageContent["hero"],x)} textarea={k === "title" || k === "subtitle" || k === "supporting"} /> : null)}</section>}
      {tab === "Products" && <section className="rounded-2xl bg-white p-6 shadow-sm"><h2 className="font-serif text-3xl mb-6">Product content</h2><div className="grid gap-5 lg:grid-cols-2">{content.products.map((p,i)=><div key={i} className="rounded-xl border p-5"><Field label="Product name" value={p.name} onChange={v=>setContent(c=>({...c,products:c.products.map((x,n)=>n===i?{...x,name:v}:x)}))}/><Field label="Description" value={p.description} onChange={v=>setContent(c=>({...c,products:c.products.map((x,n)=>n===i?{...x,description:v}:x)}))} textarea/><Field label="Internal URL" value={p.url} onChange={v=>setContent(c=>({...c,products:c.products.map((x,n)=>n===i?{...x,url:v}:x)}))}/></div>)}</div></section>}
      {tab === "Process" && <section className="rounded-2xl bg-white p-6 shadow-sm"><h2 className="font-serif text-3xl mb-6">Process content</h2><div className="space-y-4">{content.process.map((p,i)=><div key={i} className="grid gap-3 rounded-xl border p-5 md:grid-cols-[70px_220px_1fr]"><input value={p[0]} onChange={e=>setContent(c=>({...c,process:c.process.map((x,n)=>n===i?[e.target.value,x[1],x[2]]:x)}))} className="rounded border p-2"/><input value={p[1]} onChange={e=>setContent(c=>({...c,process:c.process.map((x,n)=>n===i?[x[0],e.target.value,x[2]]:x)}))} className="rounded border p-2"/><textarea value={p[2]} onChange={e=>setContent(c=>({...c,process:c.process.map((x,n)=>n===i?[x[0],x[1],e.target.value]:x)}))} className="min-h-24 rounded border p-2"/></div>)}</div></section>}
      {tab === "About / CTA" && <section className="space-y-6 rounded-2xl bg-white p-6 shadow-sm"><h2 className="font-serif text-3xl">About & final CTA</h2><Field label="About story" value={content.about.story} onChange={v=>setContent(c=>({...c,about:{...c.about,story:v}}))} textarea rows={8}/><Field label="Final CTA title" value={content.finalCta.title} onChange={v=>setContent(c=>({...c,finalCta:{...c.finalCta,title:v}}))}/><Field label="Final CTA text" value={content.finalCta.text} onChange={v=>setContent(c=>({...c,finalCta:{...c.finalCta,text:v}}))} textarea rows={5}/></section>}
      <p className="mt-6 text-xs text-black/50">This editor saves changes in this browser. For multi-user / multi-device WordPress-style publishing, connect the editor to a protected CMS/Supabase backend.</p>
    </main>
  </div>;
}
function Field({label,value,onChange,textarea=false,rows=4}:{label:string;value:string;onChange:(v:string)=>void;textarea?:boolean;rows?:number}) { return <label className="block"><span className="mb-2 block text-[10px] font-semibold uppercase tracking-[.16em] text-black/50">{label}</span>{textarea?<textarea rows={rows} value={value} onChange={e=>onChange(e.target.value)} className="w-full rounded-lg border border-black/10 bg-[#fbfbfa] p-3 text-sm outline-none focus:border-[#c9a96e]"/>:<input value={value} onChange={e=>onChange(e.target.value)} className="w-full rounded-lg border border-black/10 bg-[#fbfbfa] p-3 text-sm outline-none focus:border-[#c9a96e]"/>}</label> }
