import { createFileRoute } from "@tanstack/react-router";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { CursorCarousel, type CursorCarouselCard } from "@/components/cursor-carousel";
import { PageShell } from "@/components/page-shell";

const images = [
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=88",
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=88",
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=88",
  "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=88",
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=88",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=88",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=88",
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=88",
];

const cards: CursorCarouselCard[] = images.slice(0, 7).map((image, i) => ({
  image,
  category: ["Residential", "Hospitality", "Architecture", "Interiors", "Retail", "Residential", "Architecture"][i],
  title: ["Private Residence", "The Atrium", "Material House", "Gallery Residence", "The Collection", "Monument House", "Courtyard Home"][i],
  description: "A study in proportion, reflection and tactile material detail.",
}));

export const Route = createFileRoute("/components")({
  head: () => ({ meta: [
    { title: "Components — STEELX" },
    { name: "description", content: "A laboratory of tactile, cursor-led and spatial interface components for STEELX." },
  ]}),
  component: ComponentsPage,
});

function Label({ n, title, text }: { n: string; title: string; text: string }) {
  return <div className="mx-auto mb-10 flex max-w-7xl items-end justify-between gap-8 px-6 md:px-10">
    <div><p className="mb-3 text-[9px] uppercase tracking-[.3em] text-white/35">{n} / Interactive component</p><h2 className="font-serif text-4xl tracking-[-.04em] text-white md:text-6xl">{title}</h2></div>
    <p className="hidden max-w-xs text-right text-xs leading-5 text-white/40 md:block">{text}</p>
  </div>;
}

function MagneticWall() {
  const ref = useRef<HTMLDivElement>(null);
  const [p, setP] = useState({ x: 0, y: 0 });
  const move = (e: React.PointerEvent) => { const r = ref.current?.getBoundingClientRect(); if (!r) return; setP({ x: ((e.clientX-r.left)/r.width-.5)*2, y: ((e.clientY-r.top)/r.height-.5)*2 }); };
  return <div ref={ref} onPointerMove={move} onPointerLeave={() => setP({x:0,y:0})} className="mx-6 grid min-h-[620px] grid-cols-2 gap-px bg-white/10 md:mx-10 md:grid-cols-4">
    {images.slice(0,8).map((src,i)=><motion.div key={src+i} className="group relative min-h-[300px] overflow-hidden bg-[#11110f]" animate={{ rotateX: -p.y*(i%2?2.5:1.5), rotateY: p.x*(i%3?3:5), x:p.x*(i%2?10:5), y:p.y*(i%3?7:3) }} transition={{ type:"spring", stiffness:150, damping:20 }} style={{ transformPerspective:900 }}>
      <img src={src} alt="Architectural material" className="absolute inset-0 h-full w-full object-cover opacity-70 transition duration-700 group-hover:scale-110 group-hover:opacity-100"/><div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"/><span className="absolute bottom-5 left-5 text-[9px] uppercase tracking-[.24em] text-white/60">PVD / {String(i+1).padStart(2,"0")}</span>
    </motion.div>)}
  </div>;
}

function Ribbon() {
  const x = useMotionValue(0); const sx = useSpring(x,{stiffness:90,damping:20});
  return <div className="relative overflow-hidden border-y border-white/10 py-16" onPointerMove={e=>x.set(((e.clientX/window.innerWidth)-.5)*-180)}>
    <motion.div style={{x:sx}} className="flex w-max gap-4 px-6">{[...Array(9)].map((_,i)=><motion.div key={i} whileHover={{scale:1.03}} className="relative h-[42vw] max-h-[520px] w-[70vw] max-w-[760px] shrink-0 overflow-hidden bg-white/5 md:w-[42vw]"><img src={images[i%images.length]} alt="Steelx project" className="h-full w-full object-cover"/><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 p-7 pt-24"><p className="text-[9px] uppercase tracking-[.25em] text-white/50">Project {String(i+1).padStart(2,"0")}</p><p className="mt-2 font-serif text-3xl text-white">Surface / Space</p></div></motion.div>)}</motion.div>
  </div>;
}

function MaterialCylinder() {
  const [angle,setAngle]=useState(0); const down=useRef(false); const last=useRef(0);
  return <div className="relative mx-6 h-[650px] overflow-hidden bg-[#121210] md:mx-10" onPointerMove={e=>{if(!down.current)return;setAngle(a=>a+(e.clientX-last.current)*.45);last.current=e.clientX}} onPointerDown={e=>{down.current=true;last.current=e.clientX}} onPointerUp={()=>down.current=false} onPointerLeave={()=>down.current=false}>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(255,255,255,.12),transparent_24%),linear-gradient(90deg,#080807,#24221e,#080807)]"/>
    <motion.div animate={{rotateY:angle}} transition={{type:"spring",stiffness:70,damping:18}} className="absolute left-1/2 top-1/2 h-[480px] w-[300px] -translate-x-1/2 -translate-y-1/2 [transform-style:preserve-3d] [perspective:1200px]">
      {[...Array(9)].map((_,i)=><div key={i} className="absolute inset-y-0 left-1/2 w-[220px] -translate-x-1/2 overflow-hidden border-x border-white/10" style={{transform:`rotateY(${i*40}deg) translateZ(315px)`}}><img src={images[i%images.length]} alt="Material finish" className="h-full w-full object-cover"/><div className="absolute inset-0 bg-black/20"/></div>)}
    </motion.div><p className="absolute bottom-7 left-7 text-[9px] uppercase tracking-[.3em] text-white/40">Drag material cylinder / finish library</p>
  </div>;
}

function ImageBend() {
  const ref=useRef<HTMLDivElement>(null); const [p,setP]=useState({x:50,y:50});
  return <div ref={ref} onPointerMove={e=>{const r=ref.current!.getBoundingClientRect();setP({x:(e.clientX-r.left)/r.width*100,y:(e.clientY-r.top)/r.height*100})}} className="group relative mx-6 h-[600px] overflow-hidden md:mx-10">
    <motion.img src={images[2]} alt="Architecture" className="absolute inset-[-4%] h-[108%] w-[108%] object-cover" animate={{x:(p.x-50)*-.08,y:(p.y-50)*-.08,scale:1.02}} transition={{type:"spring",stiffness:80,damping:22}}/><motion.div className="absolute inset-0" style={{background:`radial-gradient(circle at ${p.x}% ${p.y}%, transparent 0, rgba(0,0,0,.05) 18%, rgba(0,0,0,.58) 70%)`}}/><div className="absolute bottom-7 left-7"><p className="text-[9px] uppercase tracking-[.25em] text-white/50">Cursor distortion</p><p className="mt-2 font-serif text-4xl text-white">Architecture, slightly displaced.</p></div>
  </div>;
}

function DepthStack() {
  const [hover,setHover]=useState(false);
  return <div onPointerEnter={()=>setHover(true)} onPointerLeave={()=>setHover(false)} className="relative mx-6 flex h-[650px] items-center justify-center overflow-hidden bg-[#11110f] md:mx-10">
    {[0,1,2,3,4].map(i=><motion.img key={i} src={images[(i+3)%images.length]} alt="Project layer" className="absolute h-[440px] w-[310px] object-cover shadow-2xl" animate={{x:hover?(i-2)*230:(i-2)*24,y:hover?Math.abs(i-2)*-18:Math.abs(i-2)*-4,rotate:hover?(i-2)*6:(i-2)*1.5,scale:hover?1:1-Math.abs(i-2)*.035}} transition={{type:"spring",stiffness:120,damping:20}} style={{zIndex:10-i}}/>)}
    <p className="absolute bottom-7 left-7 z-20 text-[9px] uppercase tracking-[.25em] text-white/45">Hover / separate the archive</p>
  </div>;
}

function Scanner() {
  const ref=useRef<HTMLDivElement>(null); const [x,setX]=useState(50);
  return <div ref={ref} onPointerMove={e=>{const r=ref.current!.getBoundingClientRect();setX((e.clientX-r.left)/r.width*100)}} className="relative mx-6 h-[620px] overflow-hidden bg-[#0e0e0d] md:mx-10">
    <img src={images[4]} alt="Material texture" className="absolute inset-0 h-full w-full object-cover grayscale opacity-45"/><motion.div className="absolute inset-y-0 w-[42%] overflow-hidden border-x border-white/30 shadow-[0_0_70px_rgba(255,255,255,.12)]" animate={{left:`calc(${x}% - 21%)`}} transition={{type:"spring",stiffness:180,damping:26}}><img src={images[4]} alt="Scanned material" className="absolute inset-0 h-full w-[238%] max-w-none object-cover grayscale-0" style={{left:`${50-x}%`}}/></motion.div><div className="absolute left-7 top-7"><p className="text-[9px] uppercase tracking-[.3em] text-white/45">Material scanner</p><p className="mt-3 max-w-sm font-serif text-4xl text-white">Move light across the finish.</p></div><div className="absolute bottom-7 right-7 text-right text-[9px] uppercase tracking-[.2em] text-white/35">Brushed steel / 04<br/>Reflection index 0.78</div>
  </div>;
}

function Constellation() {
  const [p,setP]=useState({x:0,y:0});
  return <div onPointerMove={e=>setP({x:(e.clientX/window.innerWidth-.5)*2,y:(e.clientY/window.innerHeight-.5)*2})} className="relative mx-6 h-[620px] overflow-hidden bg-[#0b0b0a] md:mx-10">
    {[...Array(18)].map((_,i)=>{const a=i*1.91; const r=90+(i%5)*55; return <motion.div key={i} className="absolute left-1/2 top-1/2 h-2 w-2 rounded-full bg-white/70" animate={{x:Math.cos(a)*r+p.x*(60+(i%4)*35),y:Math.sin(a)*r+p.y*(50+(i%5)*28),scale:1+Math.max(0,(1-Math.abs(p.x))*0.5)}} transition={{type:"spring",stiffness:60,damping:18}}/>})}
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center"><p className="text-[9px] uppercase tracking-[.3em] text-white/35">Project constellation</p><p className="mt-3 font-serif text-5xl text-white">20 spaces.<br/>One material language.</p></div>
  </div>;
}

function LiquidMetal() {
  const ref=useRef<HTMLDivElement>(null); const [p,setP]=useState({x:50,y:50});
  return <div ref={ref} onPointerMove={e=>{const r=ref.current!.getBoundingClientRect();setP({x:(e.clientX-r.left)/r.width*100,y:(e.clientY-r.top)/r.height*100})}} className="relative mx-6 h-[620px] overflow-hidden bg-[#171613] md:mx-10">
    <motion.div className="absolute inset-[-20%]" animate={{x:(p.x-50)*.15,y:(p.y-50)*.15,scale:1.06}} transition={{type:"spring",stiffness:70,damping:25}} style={{background:`radial-gradient(circle at ${p.x}% ${p.y}%,#e7e2d7 0%,#8b877e 8%,#302f2b 20%,#9b978e 32%,#161614 55%,#c3beb3 74%,#34322e 100%)`,filter:"blur(18px) contrast(1.18)"}}/>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0,rgba(0,0,0,.3)_45%,rgba(0,0,0,.75)_100%)]"/><div className="absolute bottom-7 left-7"><p className="text-[9px] uppercase tracking-[.25em] text-white/45">Liquid metal navigation</p><p className="mt-2 font-serif text-4xl text-white">A surface that remembers you.</p></div>
  </div>;
}

function Aperture() {
  const ref=useRef<HTMLDivElement>(null); const [p,setP]=useState({x:50,y:50});
  return <div ref={ref} onPointerMove={e=>{const r=ref.current!.getBoundingClientRect();setP({x:(e.clientX-r.left)/r.width*100,y:(e.clientY-r.top)/r.height*100})}} className="relative mx-6 h-[650px] overflow-hidden bg-black md:mx-10">
    <img src={images[6]} alt="Architecture revealed" className="absolute inset-0 h-full w-full object-cover grayscale"/><div className="absolute inset-0 bg-[#0b0b0a]" style={{clipPath:`circle(125px at ${p.x}% ${p.y}%)`}}/><div className="absolute inset-0 pointer-events-none" style={{background:`radial-gradient(circle 155px at ${p.x}% ${p.y}%, transparent 0, rgba(255,255,255,.08) 52%, rgba(0,0,0,.65) 100%)`}}/><div className="absolute left-7 top-7 z-10"><p className="text-[9px] uppercase tracking-[.3em] text-white/45">Cursor-revealed architecture</p><p className="mt-3 max-w-lg font-serif text-5xl leading-[.92] text-white">The image exists<br/>where you look.</p></div><p className="absolute bottom-7 right-7 text-[9px] uppercase tracking-[.2em] text-white/40">Move cursor to reveal</p>
  </div>;
}

function ComponentsPage() {
  return <PageShell><main className="min-h-screen overflow-hidden bg-[#0b0b0a] text-white">
    <header className="mx-auto flex max-w-7xl items-end justify-between px-6 pb-16 pt-24 md:px-10 md:pt-32"><div><p className="mb-5 text-[9px] uppercase tracking-[.35em] text-white/35">STEELX / Components Lab</p><h1 className="max-w-4xl font-serif text-6xl leading-[.86] tracking-[-.055em] md:text-9xl">Material,<br/><em className="font-normal text-white/45">in motion.</em></h1></div><p className="hidden max-w-[220px] pb-1 text-right text-xs leading-5 text-white/40 md:block">Ten reusable interaction studies for an architectural material brand. Move first. Click less.</p></header>
    <section className="pb-24"><CursorCarousel cards={cards}/></section>
    <section className="pb-28"><Label n="02" title="Magnetic material wall" text="Eight architectural surfaces respond as if they were physical plates suspended in space."/><MagneticWall/></section>
    <section className="pb-28"><Label n="03" title="Infinite project ribbon" text="The cursor controls the velocity and direction of a continuous project archive."/><Ribbon/></section>
    <section className="pb-28"><Label n="04" title="Material cylinder" text="A tactile finish library arranged as a spatial object rather than a grid."/><MaterialCylinder/></section>
    <section className="pb-28"><Label n="05" title="Architectural distortion" text="A single photograph bends subtly around your position without becoming a gimmick."/><ImageBend/></section>
    <section className="pb-28"><Label n="06" title="Project depth stack" text="An editorial archive separates into layers when you enter the composition."/><DepthStack/></section>
    <section className="pb-28"><Label n="07" title="Material scanner" text="A moving aperture exposes the unprocessed finish beneath the editorial image."/><Scanner/></section>
    <section className="pb-28"><Label n="08" title="Project constellation" text="Projects become points in a spatial field and drift around the cursor."/><Constellation/></section>
    <section className="pb-28"><Label n="09" title="Liquid metal" text="A restrained metallic field behaves like a reflective surface around your movement."/><LiquidMetal/></section>
    <section className="pb-28"><Label n="10" title="Cursor aperture" text="The cursor becomes the only opening into the architecture."/><Aperture/></section>
    <footer className="border-t border-white/10 px-6 py-16 md:px-10"><div className="mx-auto flex max-w-7xl items-center justify-between"><p className="text-[9px] uppercase tracking-[.3em] text-white/30">STEELX / Interaction system</p><p className="text-[9px] uppercase tracking-[.3em] text-white/30">10 studies / 2026</p></div></footer>
  </main></PageShell>;
}
