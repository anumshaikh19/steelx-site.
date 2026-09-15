import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef, useState } from "react";

const IMG = [
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=90",
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=90",
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=90",
  "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=90",
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=90",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=90",
];

const finishes = ["Champagne", "Bronze", "Graphite", "Black", "Titanium"];

function Frame({ children }: { children: React.ReactNode }) { return <div className="relative mx-4 overflow-hidden border border-white/10 bg-[#11110f] md:mx-10">{children}</div>; }
function Kicker({ children }: { children: React.ReactNode }) { return <p className="text-[9px] uppercase tracking-[.3em] text-white/40">{children}</p>; }

export function OrbitalProcess() {
  const [p, setP] = useState({ x: 0, y: 0 });
  const items = ["DESIGN", "FABRICATE", "BUILD", "SERVE"];
  return <Frame><div className="relative h-[680px]" onPointerMove={e => setP({ x: (e.clientX / innerWidth - .5) * 2, y: (e.clientY / innerHeight - .5) * 2 })}>
    <div className="absolute inset-0 flex items-center justify-center"><div className="h-[360px] w-[520px] rounded-[48%] bg-white/[.035] blur-2xl" /></div>
    {items.map((label, i) => { const a = [-2.55, -1.0, 2.55, 1.0][i]; const r = 255; return <motion.div key={label} className="absolute left-1/2 top-1/2 w-[220px] rounded-2xl border border-white/10 bg-[#171714] p-6" animate={{ x: Math.cos(a) * r + p.x * (25 + i * 8) - 110, y: Math.sin(a) * 190 + p.y * (18 + i * 6) - 85, rotate: (i - 1.5) * 2.2, scale: i === 0 ? 1 : .97 }} transition={{ type: "spring", stiffness: 70, damping: 18 }}><Kicker>0{i + 1} / STEELX</Kicker><h3 className="mt-3 font-serif text-3xl text-white">{label}</h3><p className="mt-3 text-xs leading-5 text-white/45">A considered step in turning architectural intent into a finished surface.</p></motion.div> })}
    <div className="absolute left-1/2 top-1/2 h-[310px] w-[400px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[46%_54%_42%_58%/55%_43%_57%_45%] border border-white/10"><img src={IMG[1]} className="h-full w-full object-cover" alt="STEELX architectural process"/><div className="absolute inset-0 bg-black/10" /></div>
    <div className="absolute left-7 top-7"><Kicker>01 / Process</Kicker><h2 className="mt-4 max-w-xl font-serif text-5xl leading-[.95] text-white md:text-7xl">Material, from intent to installation.</h2></div>
  </div></Frame>;
}

export function MaterialUniverse() {
  const [active, setActive] = useState(0);
  return <Frame><div className="relative min-h-[680px] bg-[#0d0d0c] p-7 md:p-12"><div className="absolute left-7 top-7 md:left-12 md:top-12"><Kicker>02 / Material Universe</Kicker><h2 className="mt-4 max-w-md font-serif text-5xl leading-[.95] text-white">One base material. A universe of finishes.</h2></div><div className="flex min-h-[600px] items-center justify-center"><motion.div key={active} initial={{ opacity: .2, scale: .9 }} animate={{ opacity: 1, scale: 1 }} className="relative h-[330px] w-[260px] overflow-hidden rounded-[44%_56%_50%_50%/46%_42%_58%_54%] border border-white/20 shadow-2xl"><img src={IMG[active % IMG.length]} className="h-full w-full object-cover grayscale-[.15]" alt="PVD architectural finish"/><div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-black/45" /></motion.div></div><div className="absolute bottom-7 left-7 right-7 flex flex-wrap gap-2 md:bottom-10 md:left-12 md:right-12">{finishes.map((f, i) => <button key={f} onClick={() => setActive(i)} className={`rounded-full border px-4 py-2 text-[9px] uppercase tracking-[.2em] transition ${active === i ? "border-white/50 bg-white text-black" : "border-white/15 text-white/50 hover:border-white/35"}`}>{f}</button>)}</div></div></Frame>;
}

export function FinishExplorer() {
  const ref = useRef<HTMLDivElement>(null); const x = useMotionValue(50); const sx = useSpring(x, { stiffness: 90, damping: 22 });
  return <Frame><div ref={ref} className="relative h-[620px]" onPointerMove={e => { const r = ref.current!.getBoundingClientRect(); x.set((e.clientX - r.left) / r.width * 100); }}><img src={IMG[4]} className="absolute inset-0 h-full w-full object-cover" alt="Architectural metal finish"/><motion.div className="absolute inset-y-0 w-[36%] overflow-hidden border-x border-white/40" style={{ left: useTransform(sx, v => `${v - 18}%`) }}><img src={IMG[4]} className="absolute inset-y-0 h-full w-[278%] max-w-none object-cover" style={{ left: useTransform(sx, v => `${50 - v}%`) }} alt="Detailed finish"/></motion.div><div className="absolute left-7 top-7"><Kicker>03 / Finish Explorer</Kicker><h2 className="mt-4 max-w-lg font-serif text-5xl text-white">Sweep across the surface.</h2></div><p className="absolute bottom-7 right-7 text-right text-[9px] uppercase tracking-[.2em] text-white/45">Brushed / PVD<br/>Reflection + texture</p></div></Frame>;
}

export function MaterialMorph() {
  const ref = useRef<HTMLDivElement>(null); const [p, setP] = useState(0);
  return <Frame><div ref={ref} className="relative h-[620px]" onPointerMove={e => { const r = ref.current!.getBoundingClientRect(); setP((e.clientX-r.left)/r.width); }}><img src={IMG[0]} className="absolute inset-0 h-full w-full object-cover" alt="Architectural interior"/><motion.div className="absolute inset-0 mix-blend-color" animate={{ opacity: p }} style={{ backgroundImage: `url(${IMG[3]})`, backgroundSize: "cover", backgroundPosition: "center" }} /><div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/15"/><div className="absolute bottom-7 left-7"><Kicker>04 / Material Morph</Kicker><h2 className="mt-3 font-serif text-5xl text-white">Same architecture. Different surface language.</h2></div></div></Frame>;
}

export function ProjectMaterialMap() {
  const [active, setActive] = useState(0); const points = [{ x: 28, y: 34, label: "Bronze PVD" }, { x: 68, y: 28, label: "Champagne" }, { x: 55, y: 66, label: "Graphite" }];
  return <Frame><div className="relative h-[650px]"><img src={IMG[2]} className="h-full w-full object-cover" alt="STEELX project"/><div className="absolute inset-0 bg-black/15"/>{points.map((pt,i)=><button key={pt.label} onClick={()=>setActive(i)} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${pt.x}%`, top: `${pt.y}%` }}><motion.span animate={{ scale: active===i ? 1.4 : 1 }} className="block h-4 w-4 rounded-full border border-white bg-black/50"/><span className={`mt-3 block whitespace-nowrap rounded-full border border-white/15 bg-black/70 px-3 py-2 text-[9px] uppercase tracking-[.18em] text-white transition ${active===i ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>{pt.label}</span></button>)}<div className="absolute left-7 top-7"><Kicker>05 / Project Material Map</Kicker><h2 className="mt-4 max-w-xl font-serif text-5xl text-white">Trace the material through the space.</h2></div></div></Frame>;
}

export function ArchitecturalSection() {
  const [open, setOpen] = useState(false);
  return <Frame><div className="relative h-[650px] overflow-hidden"><img src={IMG[5]} className="h-full w-full object-cover" alt="Architectural detail"/><motion.div animate={{ x: open ? 0 : "-64%" }} transition={{ type: "spring", stiffness: 60, damping: 20 }} className="absolute inset-y-0 left-0 w-[72%] border-r border-white/20 bg-[#151512]/95 p-7 md:p-12"><Kicker>06 / Architectural Cross-section</Kicker><h2 className="mt-5 max-w-lg font-serif text-5xl leading-[.95] text-white">What sits beneath the finished surface.</h2><div className="mt-12 space-y-5 text-xs leading-6 text-white/45"><p>Substrate</p><p>Fabrication + forming</p><p>PVD finish</p><p>Installation tolerance</p></div></motion.div><button onClick={()=>setOpen(v=>!v)} className="absolute bottom-7 right-7 rounded-full border border-white/20 bg-black/60 px-5 py-3 text-[9px] uppercase tracking-[.2em] text-white">{open ? "Close section" : "Reveal section"}</button></div></Frame>;
}

export function FinishSelector() {
  const [active, setActive] = useState(0); const ref=useRef<HTMLDivElement>(null); const [x,setX]=useState(.5);
  return <Frame><div ref={ref} className="relative h-[650px]" onPointerMove={e=>{const r=ref.current!.getBoundingClientRect();setX((e.clientX-r.left)/r.width)}}><motion.img animate={{ scale: 1.04 + active*.01, x: (x-.5)*-20 }} src={IMG[active%IMG.length]} className="absolute inset-0 h-full w-full object-cover" alt="STEELX finish application"/><div className="absolute inset-0 bg-black/25"/><div className="absolute left-7 top-7"><Kicker>07 / Finish Selector</Kicker><h2 className="mt-4 font-serif text-5xl text-white">Choose by atmosphere, not SKU.</h2></div><div className="absolute bottom-7 left-7 flex flex-wrap gap-2">{finishes.map((f,i)=><button key={f} onClick={()=>setActive(i)} className={`border px-4 py-3 text-[9px] uppercase tracking-[.2em] ${active===i?"border-white bg-white text-black":"border-white/20 bg-black/40 text-white"}`}>{f}</button>)}</div></div></Frame>;
}

export function ProjectDepthStack() {
  const [hover,setHover]=useState(false);
  return <Frame><div className="relative h-[650px] bg-[#0d0d0c]" onPointerEnter={()=>setHover(true)} onPointerLeave={()=>setHover(false)}>{[0,1,2,3,4].map(i=><motion.img key={i} src={IMG[i%IMG.length]} alt="STEELX project archive" className="absolute left-1/2 top-1/2 h-[390px] w-[275px] -translate-x-1/2 -translate-y-1/2 object-cover" animate={{ x: hover ? (i-2)*180 : (i-2)*18, y: hover ? Math.abs(i-2)*-15 : Math.abs(i-2)*-4, rotate: hover ? (i-2)*5 : (i-2)*1.5, scale: hover ? 1 : 1-Math.abs(i-2)*.035 }} transition={{ type:"spring", stiffness:90, damping:20 }} style={{ zIndex: 10-i }} />)}<div className="absolute left-7 top-7 z-20"><Kicker>08 / Project Depth Stack</Kicker><h2 className="mt-4 max-w-lg font-serif text-5xl text-white">An archive with depth.</h2></div></div></Frame>;
}

export function MaterialDetailZoom() {
  const ref=useRef<HTMLDivElement>(null); const [p,setP]=useState({x:50,y:50});
  return <Frame><div ref={ref} className="relative h-[650px] overflow-hidden" onPointerMove={e=>{const r=ref.current!.getBoundingClientRect();setP({x:(e.clientX-r.left)/r.width*100,y:(e.clientY-r.top)/r.height*100})}}><img src={IMG[3]} alt="Material close-up" className="absolute inset-0 h-full w-full object-cover" style={{ transformOrigin: `${p.x}% ${p.y}%` }}/><motion.div className="absolute h-[180px] w-[180px] overflow-hidden rounded-full border border-white/60 shadow-2xl" animate={{ left:`calc(${p.x}% - 90px)`, top:`calc(${p.y}% - 90px)` }} transition={{type:"spring",stiffness:100,damping:22}}><img src={IMG[3]} alt="Magnified architectural material" className="absolute h-[240%] w-[240%] max-w-none object-cover" style={{ left:`${50-p.x}%`, top:`${50-p.y}%` }}/></motion.div><div className="absolute left-7 top-7"><Kicker>09 / Material Detail Zoom</Kicker><h2 className="mt-4 max-w-xl font-serif text-5xl text-white">The detail is the architecture.</h2></div></div></Frame>;
}

export function SurfaceRibbon() {
  const x=useMotionValue(0); const sx=useSpring(x,{stiffness:80,damping:20});
  return <Frame><div className="relative h-[610px] overflow-hidden py-12" onPointerMove={e=>x.set((e.clientX/innerWidth-.5)*-260)}><motion.div style={{x:sx}} className="flex h-full w-max items-center gap-5 px-12">{IMG.map((src,i)=><motion.div key={src} whileHover={{ y:-16, scale:1.025 }} className="relative h-[430px] w-[310px] shrink-0 overflow-hidden"><img src={src} alt="STEELX project surface" className="h-full w-full object-cover"/><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-28"><Kicker>Surface {String(i+1).padStart(2,"0")}</Kicker><p className="mt-2 font-serif text-3xl text-white">Material / Space</p></div></motion.div>)}</motion.div><div className="absolute left-7 top-7 z-10"><Kicker>10 / Surface Ribbon</Kicker><h2 className="mt-4 font-serif text-5xl text-white">Let the cursor move through the archive.</h2></div></div></Frame>;
}
