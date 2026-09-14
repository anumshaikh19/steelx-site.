import { useEffect, useMemo, useRef, useState } from "react";
import { useLocation } from "@tanstack/react-router";
import type { CSSProperties, ReactNode } from "react";
import { getPageSeo, type PageSeo } from "@/lib/page-seo";

const TEXT_SELECTOR = "h1,h2,h3,h4,h5,h6,p,li,figcaption,blockquote,a,button";
const IMAGE_KEY_PREFIX = "steelx-cms-image-v1";
type ImageAsset = { src?: string; alt?: string; name?: string; deleted?: boolean };
type CmsOverride = string | ImageAsset;
type AddedImage = { id: string; src: string; alt: string; name: string };
type EditorState = { img: HTMLImageElement | null; index: number; addedId?: string; name: string; alt: string; src: string };

const textKey = (p:string,b:string,i:number) => `${p}::${b}::text-${i}`;
const assetKey = (p:string,b:string,i:number) => `${p}::${b}::asset-${i}`;
const linkKey = (p:string,b:string,i:number) => `${p}::${b}::link-${i}`;
const addedKey = (p:string,b:string) => `${IMAGE_KEY_PREFIX}::${p}::${b}::added`;
function readOverrides():Record<string,CmsOverride>{ try{return JSON.parse(localStorage.getItem("steelx-cms-element-v1")||"{}")}catch{return {}} }
function writeOverride(k:string,v:CmsOverride){const x=readOverrides();x[k]=v;localStorage.setItem("steelx-cms-element-v1",JSON.stringify(x))}
function readAdded(p:string,b:string):AddedImage[]{try{return JSON.parse(localStorage.getItem(addedKey(p,b))||"[]")}catch{return []}}
function writeAdded(p:string,b:string,x:AddedImage[]){localStorage.setItem(addedKey(p,b),JSON.stringify(x))}

export function CmsBlock({blockId,label,children,className=""}:{blockId:string;label?:string;children:ReactNode;className?:string}){
  const location=useLocation({select:l=>l.pathname});
  const ref=useRef<HTMLDivElement>(null);
  const seo=useMemo(()=>getPageSeo(location),[location]);
  const block=seo.blocks?.[blockId];
  const hasDesign=Boolean(block?.design&&Object.keys(block.design).length);
  const design:PageSeo["design"]={...seo.design,...(block?.design||{})};
  const cssVars={"--cms-accent":design.accent,"--cms-bg":design.background,"--cms-heading":design.headingColor,"--cms-body":design.bodyColor,"--cms-heading-size":({small:"2.1rem",medium:"3.4rem",large:"6rem",xl:"8rem"} as const)[design.headingSize],"--cms-body-size":({small:".92rem",medium:"1rem",large:"1.12rem"} as const)[design.bodySize],"--cms-section-gap":({compact:"3rem",comfortable:"5rem",luxury:"8rem"} as const)[design.sectionSpacing]} as CSSProperties;
  const editMode=typeof window!=="undefined"&&new URLSearchParams(window.location.search).get("cms-edit")==="1";
  const [editor,setEditor]=useState<EditorState|null>(null);
  const [mediaOpen,setMediaOpen]=useState(false);
  const [mediaVersion,setMediaVersion]=useState(0);
  const [imageCount,setImageCount]=useState(0);

  useEffect(()=>{
    const root=ref.current;if(!root)return;
    const overrides=readOverrides();
    const textTargets=Array.from(root.querySelectorAll<HTMLElement>(TEXT_SELECTOR)).filter(el=>!el.parentElement?.closest(TEXT_SELECTOR));
    const images=Array.from(root.querySelectorAll<HTMLImageElement>("img")).filter(img=>!img.closest("[data-cms-added-image]"));
    setImageCount(images.length+readAdded(location,blockId).length);
    const links=Array.from(root.querySelectorAll<HTMLAnchorElement>("a"));
    const cleanups:(()=>void)[]=[];

    textTargets.forEach((el,i)=>{const k=textKey(location,blockId,i);const v=overrides[k];if(typeof v==="string")el.innerHTML=v;if(!editMode)return;el.contentEditable="true";el.spellcheck=true;el.style.outline="1px dashed rgba(201,169,110,.7)";el.style.outlineOffset="4px";const h=()=>writeOverride(k,el.innerHTML);el.addEventListener("blur",h);cleanups.push(()=>el.removeEventListener("blur",h))});
    images.forEach((img,i)=>{const k=assetKey(location,blockId,i);const v=overrides[k];if(v&&typeof v==="object"){if(v.deleted)img.style.display="none";if(v.src)img.src=v.src;if(v.alt!==undefined)img.alt=v.alt;if(v.name)img.dataset.cmsImageName=v.name}if(!editMode)return;img.style.outline="1px dashed rgba(201,169,110,.7)";img.style.outlineOffset="4px";img.style.cursor="pointer";img.title="CMS: click or use Manage images"});
    const capture=(e:MouseEvent)=>{if(!editMode)return;const target=e.target as HTMLElement|null;const img=target?.closest("img") as HTMLImageElement|null;if(!img||!root.contains(img)||img.closest("[data-cms-added-image]"))return;e.preventDefault();e.stopPropagation();const i=images.indexOf(img);if(i<0)return;const k=assetKey(location,blockId,i);const v=overrides[k];const a=v&&typeof v==="object"?v:{};setEditor({img,index:i,name:a.name||img.dataset.cmsImageName||img.alt||`image-${i+1}`,alt:a.alt??img.alt??"",src:a.src||img.currentSrc||img.src||""})};
    root.addEventListener("click",capture,true);cleanups.push(()=>root.removeEventListener("click",capture,true));
    links.forEach((link,i)=>{const k=linkKey(location,blockId,i);const v=overrides[k];if(typeof v==="string")link.setAttribute("href",v);if(!editMode)return;const h=(e:MouseEvent)=>{if(e.shiftKey){e.preventDefault();e.stopPropagation();const href=window.prompt("Link URL",link.getAttribute("href")||"");if(href!==null){link.setAttribute("href",href);writeOverride(k,href)}}else e.preventDefault()};link.addEventListener("click",h);cleanups.push(()=>link.removeEventListener("click",h))});

    const host=document.createElement("div");host.dataset.cmsAddedImagesHost="true";host.style.display="grid";host.style.gap="1rem";host.style.marginTop="1.5rem";
    readAdded(location,blockId).forEach(asset=>{const img=document.createElement("img");img.src=asset.src;img.alt=asset.alt;img.dataset.cmsImageName=asset.name;img.dataset.cmsAddedImage=asset.id;img.style.maxWidth="100%";img.style.height="auto";img.style.display="block";img.style.cursor="pointer";host.appendChild(img)});
    if(host.children.length)root.appendChild(host);cleanups.push(()=>host.remove());
    return()=>{cleanups.forEach(f=>f());textTargets.forEach(el=>{el.contentEditable="false";el.style.outline="";el.style.outlineOffset=""});images.forEach(img=>{img.style.outline="";img.style.outlineOffset="";img.style.cursor="";img.title=""})};
  },[location,blockId,children,mediaVersion,editMode]);

  const openAdded=(id:string)=>{const a=readAdded(location,blockId).find(x=>x.id===id);if(a)setEditor({img:null,index:-1,addedId:id,name:a.name,alt:a.alt,src:a.src})};
  const openExisting=(index:number)=>{const root=ref.current;if(!root)return;const imgs=Array.from(root.querySelectorAll<HTMLImageElement>("img")).filter(x=>!x.closest("[data-cms-added-image]"));const img=imgs[index];if(!img)return;const o=readOverrides()[assetKey(location,blockId,index)];const a=o&&typeof o==="object"?o:{};setEditor({img,index,name:a.name||img.dataset.cmsImageName||img.alt||`image-${index+1}`,alt:a.alt??img.alt??"",src:a.src||img.currentSrc||img.src||""})};
  const saveImage=(x:EditorState)=>{if(x.addedId){writeAdded(location,blockId,readAdded(location,blockId).map(a=>a.id===x.addedId?{...a,src:x.src,alt:x.alt,name:x.name}:a))}else writeOverride(assetKey(location,blockId,x.index),{src:x.src,alt:x.alt,name:x.name});if(x.img){x.img.src=x.src;x.img.alt=x.alt;x.img.dataset.cmsImageName=x.name;x.img.style.display="block"}setEditor(null);setMediaVersion(v=>v+1)};
  const deleteImage=(x:EditorState)=>{if(x.addedId)writeAdded(location,blockId,readAdded(location,blockId).filter(a=>a.id!==x.addedId));else writeOverride(assetKey(location,blockId,x.index),{deleted:true,name:x.name,alt:x.alt});if(x.img)x.img.style.display="none";setEditor(null);setMediaVersion(v=>v+1)};
  const restoreImage=(index:number)=>{const k=assetKey(location,blockId,index);const o=readOverrides()[k];if(o&&typeof o==="object"&&o.deleted){const n={...o};delete n.deleted;writeOverride(k,n);setMediaVersion(v=>v+1)}};
  const addImage=async(file:File)=>{if(!file.type.startsWith("image/"))return;const src=await new Promise<string>((res,rej)=>{const r=new FileReader();r.onload=()=>res(String(r.result));r.onerror=rej;r.readAsDataURL(file)});const id=`${Date.now()}-${Math.random().toString(36).slice(2)}`;writeAdded(location,blockId,[...readAdded(location,blockId),{id,src,alt:"",name:file.name}]);setMediaOpen(true);setMediaVersion(v=>v+1)};

  const scoped=`[data-cms-block="${blockId}"]`;
  return <>
    <div ref={ref} data-cms-block={blockId} data-cms-label={label||blockId} className={`relative cms-block ${className}`} style={hasDesign?{...cssVars,background:design.background}:undefined}>
      {hasDesign?<style>{`${scoped} h1,${scoped} h2,${scoped} h3,${scoped} h4,${scoped} h5,${scoped} h6{font-family:${design.headingFont==="sans"?"inherit":"var(--font-display, Georgia, serif)"};font-size:var(--cms-heading-size);font-weight:${design.headingWeight==="bold"?700:design.headingWeight==="medium"?500:400};color:var(--cms-heading)}${scoped} p,${scoped} li,${scoped} blockquote{font-size:var(--cms-body-size);color:var(--cms-body)}${scoped} .text-champagne,${scoped} .text-gold{color:var(--cms-accent)}${scoped} .steelx-editable-section{padding-block:var(--cms-section-gap)}`}</style>:null}
      {block?.design?.css?<style>{`${scoped}{${block.design.css}}`}</style>:null}
      {children}
      {editMode?<div className="absolute right-5 top-5 z-[9999] flex gap-2 rounded-full bg-[#171715]/95 p-1.5 shadow-2xl backdrop-blur"><button type="button" onClick={()=>setMediaOpen(v=>!v)} className="rounded-full border border-white/15 px-3 py-2 text-[9px] font-semibold uppercase tracking-widest text-white">Images {imageCount}</button><label className="flex cursor-pointer items-center rounded-full bg-[#c9a96e] px-4 py-2 text-[9px] font-semibold uppercase tracking-widest text-black"><span>+ Add</span><input type="file" accept="image/*" className="hidden" onChange={e=>{const f=e.target.files?.[0];if(f)void addImage(f);e.currentTarget.value=""}}/></label></div>:null}
      {editMode&&mediaOpen?<MediaPanel root={ref.current} count={imageCount} onClose={()=>setMediaOpen(false)} onExisting={openExisting} onAdded={openAdded} onRestore={restoreImage}/>:null}
    </div>
    {editor?<ImageEditor editor={editor} onChange={setEditor} onSave={saveImage} onDelete={deleteImage}/>:null}
  </>;
}

function MediaPanel({root,count,onClose,onExisting,onAdded,onRestore}:{root:HTMLDivElement|null;count:number;onClose:()=>void;onExisting:(i:number)=>void;onAdded:(id:string)=>void;onRestore:(i:number)=>void}){
  const existing=root?Array.from(root.querySelectorAll<HTMLImageElement>("img")).filter(x=>!x.closest("[data-cms-added-image]")):[];
  const added=root?Array.from(root.querySelectorAll<HTMLImageElement>("[data-cms-added-image]")):[];
  return <div className="absolute right-5 top-16 z-[9998] w-[min(420px,calc(100vw-2rem))] rounded-3xl border border-white/10 bg-[#171715]/98 p-4 text-white shadow-2xl backdrop-blur-xl" onClick={e=>e.stopPropagation()}><div className="flex items-center justify-between"><div><p className="text-[9px] uppercase tracking-[.2em] text-[#c9a96e]">Block media manager</p><h3 className="mt-1 font-serif text-xl">{count} image{count===1?"":"s"}</h3></div><button type="button" onClick={onClose} className="text-white/45">✕</button></div><p className="mt-2 text-[10px] leading-4 text-white/45">Select any existing image to replace, rename, update alt text or delete it. Deleted images can be restored.</p><div className="mt-4 max-h-[55vh] space-y-2 overflow-auto">{existing.map((img,i)=><div key={`e-${i}`} className="flex items-center gap-3 rounded-2xl bg-white/5 p-2"><img src={img.src} alt={img.alt} className="h-14 w-16 rounded-xl object-cover"/><div className="min-w-0 flex-1"><p className="truncate text-xs">{img.dataset.cmsImageName||img.alt||`Existing image ${i+1}`}</p><p className="truncate text-[9px] text-white/35">{img.alt||"No alt text"}</p></div><button type="button" onClick={()=>onExisting(i)} className="rounded-full bg-[#c9a96e] px-3 py-2 text-[9px] font-semibold uppercase tracking-widest text-black">Edit</button></div>)}{added.map((img)=><div key={img.dataset.cmsAddedImage} className="flex items-center gap-3 rounded-2xl bg-white/5 p-2"><img src={img.src} alt={img.alt} className="h-14 w-16 rounded-xl object-cover"/><div className="min-w-0 flex-1"><p className="truncate text-xs">{img.dataset.cmsImageName||"Added image"}</p><p className="truncate text-[9px] text-white/35">New image</p></div><button type="button" onClick={()=>onAdded(img.dataset.cmsAddedImage||"")} className="rounded-full bg-[#c9a96e] px-3 py-2 text-[9px] font-semibold uppercase tracking-widest text-black">Edit</button></div>)}{!existing.length&&!added.length?<p className="py-8 text-center text-xs text-white/35">No images detected in this block.</p>:null}</div></div>;
}

function ImageEditor({editor,onChange,onSave,onDelete}:{editor:EditorState;onChange:(v:EditorState|null)=>void;onSave:(v:EditorState)=>void;onDelete:(v:EditorState)=>void}){
  const update=(p:Partial<EditorState>)=>onChange({...editor,...p});
  const replace=(file?:File)=>{if(!file||!file.type.startsWith("image/"))return;const r=new FileReader();r.onload=()=>update({src:String(r.result),name:file.name});r.readAsDataURL(file)};
  return <div className="fixed inset-0 z-[10001] flex items-center justify-center bg-black/75 p-4" onClick={()=>onChange(null)}><div className="w-full max-w-xl rounded-3xl border border-white/10 bg-[#171715] p-6 text-white shadow-2xl" onClick={e=>e.stopPropagation()}><div className="flex items-start justify-between"><div><p className="text-[9px] uppercase tracking-[.25em] text-[#c9a96e]">Image manager</p><h3 className="mt-2 font-serif text-2xl">Update image</h3></div><button type="button" onClick={()=>onChange(null)} className="text-white/45">✕</button></div><div className="mt-5 overflow-hidden rounded-2xl border border-white/10 bg-black/20"><img src={editor.src} alt={editor.alt} className="max-h-64 w-full object-contain"/></div><div className="mt-5 grid gap-4"><label><span className="mb-2 block text-[9px] uppercase tracking-[.18em] text-white/45">Image name</span><input value={editor.name} onChange={e=>update({name:e.target.value})} className="w-full rounded-xl bg-white/10 px-3 py-3 text-sm outline-none"/></label><label><span className="mb-2 block text-[9px] uppercase tracking-[.18em] text-white/45">Alt text</span><input value={editor.alt} onChange={e=>update({alt:e.target.value})} className="w-full rounded-xl bg-white/10 px-3 py-3 text-sm outline-none" placeholder="Describe the image for accessibility and SEO"/></label><label><span className="mb-2 block text-[9px] uppercase tracking-[.18em] text-white/45">Image URL</span><input value={editor.src} onChange={e=>update({src:e.target.value})} className="w-full rounded-xl bg-white/10 px-3 py-3 text-sm outline-none"/></label><label className="flex cursor-pointer items-center justify-center rounded-xl border border-dashed border-white/20 px-4 py-3 text-[10px] uppercase tracking-widest text-white/65"><span>Upload replacement image</span><input type="file" accept="image/*" className="hidden" onChange={e=>replace(e.target.files?.[0])}/></label></div><div className="mt-6 flex justify-between gap-3"><button type="button" onClick={()=>onDelete(editor)} className="rounded-full border border-red-400/30 px-5 py-3 text-[10px] font-semibold uppercase tracking-widest text-red-300">Delete image</button><div className="flex gap-2"><button type="button" onClick={()=>onChange(null)} className="rounded-full border border-white/15 px-5 py-3 text-[10px] uppercase tracking-widest text-white/60">Cancel</button><button type="button" onClick={()=>onSave(editor)} className="rounded-full bg-[#c9a96e] px-6 py-3 text-[10px] font-semibold uppercase tracking-widest text-black">Save changes</button></div></div></div></div>;
}

export function CmsVisualEditorHint(){const location=useLocation({select:l=>l.pathname});if(typeof window==="undefined"||new URLSearchParams(window.location.search).get("cms-edit")!=="1")return null;return <div className="fixed left-5 top-24 z-[9999] rounded-2xl border border-[#c9a96e]/40 bg-[#171715] p-4 text-white shadow-2xl" style={{maxWidth:340}}><p className="text-[9px] uppercase tracking-[.2em] text-[#c9a96e]">Visual CMS · {location}</p><p className="mt-2 text-xs leading-5 text-white/65">Edit text directly. Every block now has an Images manager: select existing images to update, replace, rename, change alt text or delete them. New uploads stay inside the selected block.</p><a href={`/admin-seo?path=${encodeURIComponent(location)}`} className="mt-3 inline-flex rounded-full bg-[#c9a96e] px-4 py-2 text-[10px] font-semibold uppercase tracking-widest text-black">Back to Studio</a></div>}
