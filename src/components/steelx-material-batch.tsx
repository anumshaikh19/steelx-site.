import { motion, useMotionValue, useSpring } from "motion/react";
import { useRef, useState } from "react";

const IMAGES = [
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=90",
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=90",
  "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=90",
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=90",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=90",
];
const FINISHES = ["Champagne", "Bronze", "Graphite", "Black", "Titanium"];
const Frame = ({ children }: { children: React.ReactNode }) => <div className="relative mx-4 overflow-hidden border border-white/10 bg-[#11110f] md:mx-10">{children}</div>;
const Kicker = ({ children }: { children: React.ReactNode }) => <p className="text-[9px] uppercase tracking-[.3em] text-white/40">{children}</p>;

export function PVDFinishWheel() {
  const [active, setActive] = useState(0);
  return <Frame><div className="relative flex min-h-[620px] items-center justify-center bg-[#0d0d0c] p-8"><div className="absolute left-7 top-7"><Kicker>11 / PVD Finish Wheel</Kicker><h2 className="mt-4 font-serif text-5xl text-white">Five atmospheres. One material.</h2></div><motion.div key={active} initial={{ rotate: -8, scale: .8, opacity: 0 }} animate={{ rotate: 0, scale: 1, opacity: 1 }} className="h-72 w-72 rounded-full border border-white/20 p-5 shadow-2xl"><img src={IMAGES[active]} className="h-full w-full rounded-full object-cover" alt="PVD finish" /></motion.div><div className="absolute bottom-7 flex gap-2">{FINISHES.map((f,i)=><button key={f} onClick={()=>setActive(i)} className="rounded-full border border-white/15 px-4 py-2 text-[9px] uppercase tracking-[.18em] text-white/60 hover:bg-white hover:text-black">{f}</button>)}</div></div></Frame>;
}

export function FinishComparison() {
  const [p, setP] = useState(50); const ref = useRef<HTMLDivElement>(null);
  return <Frame><div ref={ref} className="relative h-[620px]" onPointerMove={e=>{const r=ref.current!.getBoundingClientRect();setP((e.clientX-r.left)/r.width*100)}}><img src={IMAGES[0]} className="absolute inset-0 h-full w-full object-cover" alt="Finish comparison base"/><div className="absolute inset-y-0 left-0 overflow-hidden" style={{width:`${p}%`}}><img src={IMAGES[3]} className="h-full w-full object-cover" alt="Alternate finish" /></div><div className="absolute inset-y-0 w-px bg-white" style={{left:`${p}%`}}/><div className="absolute left-7 top-7"><Kicker>12 / Finish Comparison</Kicker><h2 className="mt-4 font-serif text-5xl text-white">Drag between two surface languages.</h2></div></div></Frame>;
}

export function MaterialLens() {
  const ref=useRef<HTMLDivElement>(null); const x=useMotionValue(50); const y=useMotionValue(50); const sx=useSpring(x,{stiffness:100,damping:20}); const sy=useSpring(y,{stiffness:100,damping:20});
  return <Frame><div ref={ref} className="relative h-[620px]" onPointerMove={e=>{const r=ref.current!.getBoundingClientRect();x.set((e.clientX-r.left)/r.width*100);y.set((e.clientY-r.top)/r.height*100)}}><img src={IMAGES[1]} className="h-full w-full object-cover" alt="Architectural surface"/><motion.div className="absolute h-48 w-48 overflow-hidden rounded-full border border-white/70 shadow-2xl" style={{left:sx,top:sy,translateX:"-50%",translateY:"-50%"}}><img src={IMAGES[4]} className="absolute h-[250%] w-[250%] max-w-none object-cover" style={{left:"-75%",top:"-75%"}} alt="Material lens detail"/></motion.div><div className="absolute left-7 top-7"><Kicker>13 / Material Lens</Kicker><h2 className="mt-4 font-serif text-5xl text-white">Inspect the surface without leaving the room.</h2></div></div></Frame>;
}

export function ReflectionScanner() {
  const [scan,setScan]=useState(false);
  return <Frame><div className="relative h-[620px] overflow-hidden"><img src={IMAGES[2]} className="h-full w-full object-cover" alt="Reflective architectural surface"/><motion.div animate={{x:scan?"110%":"-20%"}} transition={{duration:2.8,ease:"easeInOut"}} className="absolute inset-y-0 -left-[30%] w-[35%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/25 to-transparent"/><div className="absolute left-7 top-7"><Kicker>14 / Reflection Scanner</Kicker><h2 className="mt-4 font-serif text-5xl text-white">Read the reflection like a drawing.</h2></div><button onClick={()=>setScan(v=>!v)} className="absolute bottom-7 right-7 border border-white/20 bg-black/50 px-5 py-3 text-[9px] uppercase tracking-[.2em] text-white">Scan surface</button></div></Frame>;
}

export function BrushedMetalReveal() {
  const [hover,setHover]=useState(false);
  return <Frame><div className="relative h-[620px]" onPointerEnter={()=>setHover(true)} onPointerLeave={()=>setHover(false)}><img src={IMAGES[4]} className="h-full w-full object-cover" alt="Brushed metal application"/><motion.div animate={{scale:hover?1.12:1,opacity:hover?1:.65}} className="absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,.05)_0,rgba(255,255,255,.05)_1px,transparent_1px,transparent_5px)]"/><div className="absolute bottom-7 left-7"><Kicker>15 / Brushed Metal Reveal</Kicker><h2 className="mt-3 font-serif text-5xl text-white">Texture appears when light moves.</h2></div></div></Frame>;
}

export function SurfaceScrub() {
  const [progress,setProgress]=useState(0); const ref=useRef<HTMLDivElement>(null);
  return <Frame><div ref={ref} className="relative h-[620px]" onPointerMove={e=>{const r=ref.current!.getBoundingClientRect();setProgress(Math.max(0,Math.min(1,(e.clientX-r.left)/r.width)))}}><img src={IMAGES[3]} className="absolute inset-0 h-full w-full object-cover grayscale" alt="Surface scrub"/><motion.img src={IMAGES[3]} className="absolute inset-0 h-full w-full object-cover" style={{clipPath:`inset(0 ${100-progress*100}% 0 0)`}} alt="Surface scrub color"/><div className="absolute left-7 top-7"><Kicker>16 / Surface Scrub</Kicker><h2 className="mt-4 font-serif text-5xl text-white">Scrub across the image to reveal finish depth.</h2></div></div></Frame>;
}

export function FinishSwatchOrbit() {
  const [active,setActive]=useState(0);
  return <Frame><div className="relative h-[620px] overflow-hidden bg-[#0d0d0c]"><div className="absolute left-7 top-7"><Kicker>17 / Finish Swatch Orbit</Kicker><h2 className="mt-4 font-serif text-5xl text-white">Finishes orbit the architecture.</h2></div><div className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10">{FINISHES.map((f,i)=><motion.button key={f} onClick={()=>setActive(i)} animate={{scale:active===i?1.3:1,x:Math.cos(i*Math.PI*2/5)*150-30,y:Math.sin(i*Math.PI*2/5)*150-30}} className="absolute left-1/2 top-1/2 h-16 w-16 rounded-full border border-white/20 bg-[#20201c] text-[8px] uppercase tracking-wider text-white/70">{f}</motion.button>)}</div></div></Frame>;
}

export function MaterialDistortion() {
  const ref=useRef<HTMLDivElement>(null); const [p,setP]=useState({x:0,y:0});
  return <Frame><div ref={ref} className="relative h-[620px] overflow-hidden" onPointerMove={e=>{const r=ref.current!.getBoundingClientRect();setP({x:(e.clientX-r.left)/r.width-.5,y:(e.clientY-r.top)/r.height-.5})}}><motion.img animate={{x:p.x*35,y:p.y*25,scale:1.06}} src={IMAGES[0]} className="h-full w-full object-cover" alt="Material distortion"/><div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/30"/><div className="absolute bottom-7 left-7"><Kicker>18 / Material Distortion</Kicker><h2 className="mt-3 font-serif text-5xl text-white">A restrained displacement layer for depth.</h2></div></div></Frame>;
}
