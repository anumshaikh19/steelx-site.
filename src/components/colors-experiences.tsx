import { useEffect, useState } from "react";

const finishImages = [
  "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1800&q=90",
  "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1800&q=90",
  "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=90",
];

export function ColorsExperiences() {
  return <div className="colors-experiences"><Factory /></div>;
}

function Factory() {
  const [x, setX] = useState(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const move = (e: MouseEvent) => setX((e.clientX / innerWidth - 0.5) * 2);
    addEventListener("mousemove", move, { passive: true });
    return () => removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setActive((v) => (v + 1) % 3), 5200);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="cx-factory">
      <img
        className="cx-factory-surface"
        src={finishImages[active]}
        alt="Macro architectural metal surface"
        style={{
          transform: `scale(1.14) translate3d(${x * 1.5}%,0,0)`,
          filter: `saturate(.45) contrast(1.35) hue-rotate(${active * 10}deg)`,
        }}
      />
      <div className="cx-factory-vignette" />
      <div className="cx-factory-scan" />
      <div className="cx-factory-title">
        <span>PRECISION.</span>
        <span>SURFACE.</span>
        <span>ARCHITECTURE.</span>
      </div>
      <div className="cx-tech cx-tech-1">PVD COATING<br /><b>01.842 / 0.8 MM</b></div>
      <div className="cx-tech cx-tech-2">VACUUM DEPOSITION<br /><b>±0.02 / PROCESS</b></div>
      <div className="cx-tech cx-tech-3">ARCHITECTURAL GRADE<br /><b>SS 304 / SS 316</b></div>
      <div className="cx-measure cx-m1"><i /> 316L / 0.8</div>
      <div className="cx-measure cx-m2"><i /> 304 / 1.5</div>
      <div className="cx-measure cx-m3"><i /> PVD / 3.0</div>
      <div className="cx-factory-bottom">
        <span>01 / THE METAL FACTORY</span>
        <span>FINISH {String(active + 1).padStart(2, "0")} / CHAMPAGNE → GUNMETAL → BRONZE</span>
      </div>
    </section>
  );
}

const css = `
.colors-experiences{background:#090908;color:#eee9df}
.cx-factory{position:relative;min-height:100svh;overflow:hidden;border-top:1px solid rgba(255,255,255,.08);isolation:isolate;background:#070707}
.cx-factory-surface{position:absolute;inset:-10%;width:120%;height:120%;object-fit:cover;opacity:.62;transition:transform 1.5s cubic-bezier(.16,1,.3,1),filter 2s;will-change:transform,filter}
.cx-factory-vignette{position:absolute;inset:0;background:radial-gradient(circle at 50% 45%,transparent 15%,rgba(0,0,0,.82) 82%),linear-gradient(90deg,rgba(0,0,0,.5),transparent 40%,rgba(0,0,0,.4))}
.cx-factory-scan{position:absolute;z-index:2;left:0;right:0;top:46%;height:1px;background:linear-gradient(90deg,transparent,#d6b878,transparent);box-shadow:0 0 25px rgba(215,183,120,.7);animation:cxScan 6s ease-in-out infinite}
.cx-factory-title{position:absolute;z-index:3;left:7%;top:50%;transform:translateY(-50%);display:flex;flex-direction:column;font:400 clamp(4rem,11vw,12rem)/.78 Georgia,serif;letter-spacing:-.065em;white-space:nowrap}
.cx-factory-title span:nth-child(2){margin-left:8vw;font-style:italic;color:#d5b477}.cx-factory-title span:nth-child(3){margin-left:3vw}
.cx-tech,.cx-measure,.cx-factory-bottom{position:absolute;z-index:4;font:8px/1.6 Inter,sans-serif;letter-spacing:.22em;text-transform:uppercase;color:rgba(241,234,219,.48)}
.cx-tech b{font-weight:400;color:#d4b77d}.cx-tech-1{right:7%;top:25%}.cx-tech-2{right:11%;top:52%}.cx-tech-3{left:7%;bottom:18%}
.cx-measure{color:rgba(222,196,143,.65);display:flex;gap:8px;align-items:center}.cx-measure i{display:block;width:55px;height:1px;background:#c9a96e}.cx-m1{left:9%;top:34%}.cx-m2{left:13%;top:62%}.cx-m3{right:9%;bottom:28%}
.cx-factory-bottom{left:5%;right:5%;bottom:5%;display:flex;justify-content:space-between;gap:20px}
@keyframes cxScan{0%,100%{transform:translateY(-30vh);opacity:0}20%,75%{opacity:1}50%{transform:translateY(30vh);opacity:.9}}
@media (max-width:800px){.cx-factory{min-height:92svh}.cx-factory-title{left:6%;top:47%;font-size:clamp(3rem,14vw,6rem)}.cx-tech-1{right:6%;top:20%}.cx-tech-2{right:6%;top:66%}.cx-tech-3{left:6%;bottom:18%}.cx-m1{left:6%;top:31%}.cx-m2{left:6%;top:60%}.cx-m3{right:6%;bottom:28%}.cx-factory-bottom{left:6%;right:6%;font-size:7px;letter-spacing:.14em}.cx-factory-bottom span:last-child{display:none}}
@media (prefers-reduced-motion:reduce){.cx-factory-scan{animation:none}.cx-factory-surface{transition:none}}
`;

if (typeof document !== "undefined" && !document.getElementById("colors-experiences-css")) {
  const style = document.createElement("style");
  style.id = "colors-experiences-css";
  style.textContent = css;
  document.head.appendChild(style);
}
