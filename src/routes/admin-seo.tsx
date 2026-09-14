import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { defaultPageSeo, getPageSeo, routePathCatalog, savePageSeo, type PageSeo } from "@/lib/page-seo";
import { defaultHomepageContent, type HomepageContent } from "@/data/homepage-content";

export const Route = createFileRoute("/admin-seo")({ component: AdminSeoPage });
const HOME_KEY = "steelx-homepage-content-v1";

function AdminSeoPage() {
  const [path, setPath] = useState("/");
  const [page, setPage] = useState<PageSeo>(() => defaultPageSeo("/"));
  const [custom, setCustom] = useState<string[]>([]);
  const [homepage, setHomepage] = useState<HomepageContent>(defaultHomepageContent);
  const [tab, setTab] = useState("Content");
  const [saved, setSaved] = useState(false);
  const [newPath, setNewPath] = useState("");
  const pages = useMemo(() => Array.from(new Set([...routePathCatalog, ...custom])).sort((a,b) => a === "/" ? -1 : b === "/" ? 1 : a.localeCompare(b)), [custom]);

  useEffect(() => {
    try {
      const data = JSON.parse(localStorage.getItem("steelx-page-seo-v1") || "{}");
      setCustom(Object.keys(data).filter(p => !routePathCatalog.includes(p)));
      const home = localStorage.getItem(HOME_KEY);
      if (home) setHomepage(JSON.parse(home));
    } catch {}
  }, []);
  useEffect(() => setPage(getPageSeo(path)), [path]);

  const update = <K extends keyof PageSeo>(key: K, value: PageSeo[K]) => setPage(p => ({ ...p, [key]: value }));
  const updateContent = <K extends keyof PageSeo["content"]>(key: K, value: PageSeo["content"][K]) => setPage(p => ({ ...p, content: { ...p.content, [key]: value } }));
  const updateDesign = <K extends keyof PageSeo["design"]>(key: K, value: PageSeo["design"][K]) => setPage(p => ({ ...p, design: { ...p.design, [key]: value } }));
  const publish = () => {
    savePageSeo(page);
    if (path === "/") localStorage.setItem(HOME_KEY, JSON.stringify(homepage));
    setSaved(true); setTimeout(() => setSaved(false), 1800);
  };
  const addPage = () => {
    const raw = newPath.trim();
    if (!raw) return;
    const p = raw.startsWith("/") ? raw : `/${raw}`;
    savePageSeo(defaultPageSeo(p));
    setCustom(x => x.includes(p) ? x : [...x, p]);
    setPath(p); setNewPath(""); setTab("Content");
  };

  return <div className="min-h-screen bg-[#f4f3ef] text-[#181817]">
    <header className="sticky top-0 z-30 flex items-center justify-between border-b border-white/10 bg-[#171715] px-5 py-3 text-white lg:px-8"><div><p className="text-[9px] uppercase tracking-[.3em] text-[#c9a96e]">SteelXDecor</p><h1 className="font-serif text-lg">Content & SEO Studio</h1><p className="text-[10px] text-white/40">Edit the page, not just its search metadata.</p></div><div className="flex gap-2"><a href={path} target="_blank" rel="noreferrer" className="rounded-full border border-white/20 px-4 py-2 text-xs">Preview ↗</a><button onClick={publish} className="rounded-full bg-[#c9a96e] px-5 py-2 text-xs font-semibold text-black">{saved ? "Published" : "Publish page"}</button></div></header>
    <main className="mx-auto max-w-[1500px] px-4 py-6 lg:px-8">
      <section className="mb-5 rounded-3xl bg-[#1b1b19] p-6 text-white lg:p-8"><div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"><div><p className="text-[10px] uppercase tracking-[.25em] text-[#c9a96e]">Visual CMS</p><h2 className="mt-2 font-serif text-3xl lg:text-5xl">Edit content + typography + style</h2><p className="mt-3 max-w-2xl text-sm leading-6 text-white/55">You can now change the page messaging, H1, intro, typography, colors and spacing — not only SEO. Dynamic routes inherit the same system.</p></div><div className="flex gap-2"><input value={newPath} onChange={e=>setNewPath(e.target.value)} onKeyDown={e=>e.key === "Enter" && addPage()} placeholder="/future-page" className="w-56 rounded-xl bg-white/10 px-3 py-3 text-sm outline-none placeholder:text-white/30"/><button onClick={addPage} className="rounded-xl bg-[#c9a96e] px-5 py-3 text-xs font-semibold text-black">+ Add page</button></div></div></section>
      <div className="grid gap-5 lg:grid-cols-[260px_1fr]">
        <aside className="rounded-2xl bg-white p-3 shadow-sm"><p className="px-3 pb-3 pt-2 text-[10px] font-semibold uppercase tracking-[.2em] text-black/40">All pages</p><div className="max-h-[72vh] space-y-1 overflow-auto">{pages.map(p=><button key={p} onClick={()=>setPath(p)} className={`block w-full rounded-lg px-3 py-2 text-left text-xs ${path===p?"bg-[#191917] text-white":"hover:bg-black/5"}`}>{p}</button>)}</div></aside>
        <section className="rounded-2xl bg-white p-5 shadow-sm lg:p-7">
          <div className="mb-6 flex flex-col gap-4 border-b border-black/10 pb-6 lg:flex-row lg:items-start lg:justify-between"><div><p className="text-[10px] uppercase tracking-[.22em] text-[#9b8050]">Editing page</p><h3 className="mt-1 font-serif text-4xl">{path}</h3><p className="mt-2 text-sm text-black/45">H1 preview: <span className="text-black">{page.content.heading}</span></p></div><div className="flex flex-wrap gap-2">{["Content","Design","SEO"].map(t=><button key={t} onClick={()=>setTab(t)} className={`rounded-full border px-4 py-2 text-[11px] ${tab===t?"border-[#c9a96e] bg-[#191917] text-white":"border-black/10"}`}>{t}</button>)}</div></div>
          {tab === "Content" && <div className="space-y-5"><Info text="These are real page content controls. Shared PageHero pages render them directly. The homepage keeps its richer homepage content model below."/><Field label="Eyebrow / overline" value={page.content.eyebrow} onChange={v=>updateContent("eyebrow",v)}/><Field label="Main page heading / H1" value={page.content.heading} onChange={v=>updateContent("heading",v)} textarea rows={3}/><Field label="Intro / lead paragraph" value={page.content.intro} onChange={v=>updateContent("intro",v)} textarea rows={5}/><div className="grid gap-5 md:grid-cols-2"><Field label="Primary CTA label" value={page.content.primaryCta} onChange={v=>updateContent("primaryCta",v)}/><Field label="Secondary CTA label" value={page.content.secondaryCta} onChange={v=>updateContent("secondaryCta",v)}/></div>{path === "/" && <HomepageFields value={homepage} onChange={setHomepage}/>}</div>}
          {tab === "Design" && <div className="space-y-7"><Info text="These controls change the actual visual presentation of pages using the shared page shell: heading font, size, weight, body scale, accent, colors and vertical rhythm."/><div className="grid gap-5 md:grid-cols-3"><SelectField label="Heading font" value={page.design.headingFont} options={[["display","Display / editorial"],["sans","Sans / modern"]]} onChange={v=>updateDesign("headingFont",v as PageSeo["design"]["headingFont"])}/><SelectField label="Heading size" value={page.design.headingSize} options={[["small","Small"],["medium","Medium"],["large","Large"],["xl","Extra large"]]} onChange={v=>updateDesign("headingSize",v as PageSeo["design"]["headingSize"])}/><SelectField label="Heading weight" value={page.design.headingWeight} options={[["normal","Normal"],["medium","Medium"],["bold","Bold"]]} onChange={v=>updateDesign("headingWeight",v as PageSeo["design"]["headingWeight"])}/><SelectField label="Body size" value={page.design.bodySize} options={[["small","Small"],["medium","Medium"],["large","Large"]]} onChange={v=>updateDesign("bodySize",v as PageSeo["design"]["bodySize"])}/><SelectField label="Section spacing" value={page.design.sectionSpacing} options={[["compact","Compact"],["comfortable","Comfortable"],["luxury","Luxury"]]} onChange={v=>updateDesign("sectionSpacing",v as PageSeo["design"]["sectionSpacing"])}/><ColorField label="Accent color" value={page.design.accent} onChange={v=>updateDesign("accent",v)}/><ColorField label="Heading color" value={page.design.headingColor} onChange={v=>updateDesign("headingColor",v)}/><ColorField label="Body color" value={page.design.bodyColor} onChange={v=>updateDesign("bodyColor",v)}/><ColorField label="Background" value={page.design.background} onChange={v=>updateDesign("background",v)}/></div><div className="rounded-2xl border border-black/10 p-7" style={{background:page.design.background}}><p style={{color:page.design.accent}} className="text-[10px] uppercase tracking-[.25em]">{page.content.eyebrow}</p><h4 className="mt-3" style={{color:page.design.headingColor,fontFamily:page.design.headingFont==="sans"?"inherit":"Georgia, serif",fontSize:{small:"2.1rem",medium:"3.4rem",large:"6rem",xl:"8rem"}[page.design.headingSize],fontWeight:page.design.headingWeight==="bold"?700:page.design.headingWeight==="medium"?500:400}}>{page.content.heading}</h4><p className="mt-4 max-w-2xl" style={{color:page.design.bodyColor,fontSize:{small:".92rem",medium:"1rem",large:"1.12rem"}[page.design.bodySize]}}>{page.content.intro}</p></div></div>}
          {tab === "SEO" && <div className="space-y-5"><Field label="Meta title" value={page.title} onChange={v=>update("title",v)}/><Field label="Meta description" value={page.description} onChange={v=>update("description",v)} textarea/><Field label="Keywords" value={page.keywords} onChange={v=>update("keywords",v)}/><div className="grid gap-5 md:grid-cols-2"><Field label="Canonical URL" value={page.canonical} onChange={v=>update("canonical",v)}/><Field label="Robots" value={page.robots} onChange={v=>update("robots",v)}/></div><div className="grid gap-5 md:grid-cols-2"><Field label="OG title" value={page.ogTitle} onChange={v=>update("ogTitle",v)}/><Field label="OG image URL" value={page.ogImage} onChange={v=>update("ogImage",v)}/></div><Field label="OG description" value={page.ogDescription} onChange={v=>update("ogDescription",v)}/><Field label="Schema JSON-LD" value={page.schema} onChange={v=>update("schema",v)} textarea rows={12}/><Field label="Page tags — comma separated" value={page.tags.join(", ")} onChange={v=>update("tags",v.split(",").map(x=>x.trim()).filter(Boolean))}/></div>}
        </section>
      </div>
      <p className="mt-5 text-xs text-black/40">Current publishing remains browser-local. The content/design model is shared across the site and future routes; moving storage to Supabase later will make it multi-device and authenticated.</p>
    </main>
  </div>;
}
function HomepageFields({value,onChange}:{value:HomepageContent;onChange:(v:HomepageContent)=>void}){return <div className="rounded-2xl border border-[#c9a96e]/40 bg-[#faf8f2] p-5"><h4 className="font-serif text-2xl">Homepage content blocks</h4><p className="mt-1 text-xs text-black/45">Additional homepage copy that already has dedicated rendering.</p><div className="mt-5 space-y-4"><Field label="About story" value={value.about.story} onChange={v=>onChange({...value,about:{...value.about,story:v}})} textarea rows={6}/><Field label="Final CTA title" value={value.finalCta.title} onChange={v=>onChange({...value,finalCta:{...value.finalCta,title:v}})}/><Field label="Final CTA text" value={value.finalCta.text} onChange={v=>onChange({...value,finalCta:{...value.finalCta,text:v}})} textarea rows={4}/></div></div>}
function Info({text}:{text:string}){return <div className="rounded-xl bg-[#f7f4ec] px-4 py-3 text-xs leading-5 text-black/55">{text}</div>}
function Field({label,value,onChange,textarea=false,rows=4}:{label:string;value:string;onChange:(v:string)=>void;textarea?:boolean;rows?:number}){return <label className="block"><span className="mb-2 block text-[10px] font-semibold uppercase tracking-[.16em] text-black/50">{label}</span>{textarea?<textarea rows={rows} value={value} onChange={e=>onChange(e.target.value)} className="w-full rounded-lg border border-black/10 bg-[#fbfbfa] p-3 text-sm outline-none focus:border-[#c9a96e]"/>:<input value={value} onChange={e=>onChange(e.target.value)} className="w-full rounded-lg border border-black/10 bg-[#fbfbfa] p-3 text-sm outline-none focus:border-[#c9a96e]"/>}</label>}
function SelectField({label,value,options,onChange}:{label:string;value:string;options:[string,string][];onChange:(v:string)=>void}){return <label className="block"><span className="mb-2 block text-[10px] font-semibold uppercase tracking-[.16em] text-black/50">{label}</span><select value={value} onChange={e=>onChange(e.target.value)} className="w-full rounded-lg border border-black/10 bg-[#fbfbfa] p-3 text-sm">{options.map(([v,l])=><option key={v} value={v}>{l}</option>)}</select></label>}
function ColorField({label,value,onChange}:{label:string;value:string;onChange:(v:string)=>void}){return <label className="block"><span className="mb-2 block text-[10px] font-semibold uppercase tracking-[.16em] text-black/50">{label}</span><div className="flex gap-2"><input type="color" value={value.startsWith("#")?value:"#c9a96e"} onChange={e=>onChange(e.target.value)} className="h-11 w-14 rounded border border-black/10 bg-white p-1"/><input value={value} onChange={e=>onChange(e.target.value)} className="min-w-0 flex-1 rounded-lg border border-black/10 bg-[#fbfbfa] p-3 text-sm"/></div></label>}
