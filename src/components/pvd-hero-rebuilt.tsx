import { ArrowUpRight, MoveRight } from "lucide-react";
import { pvdImages } from "@/data/pvd";

export function PvdHeroRebuilt() {
  return (
    <section className="pvd-hero-rebuilt" aria-labelledby="pvd-hero-title">
      <div className="pvd-hero-rebuilt__grid">
        <div className="pvd-hero-rebuilt__copy">
          <div className="pvd-hero-rebuilt__eyebrow">STEELXDECOR · PVD SURFACES</div>
          <div className="pvd-hero-rebuilt__index">01 / MATERIAL STUDY</div>
          <h1 id="pvd-hero-title">PVD Coated<br /><em>Stainless Steel</em><br />Surfaces</h1>
          <p>Architectural stainless steel with colour, texture and performance engineered into every surface. Vacuum-deposited PVD finishes on SS 304 and 316 Grade substrate — for facades, interiors, screens, ceilings and bespoke metalwork worldwide.</p>
          <div className="pvd-hero-rebuilt__actions">
            <a href="#colours" className="pvd-hero-rebuilt__cta pvd-hero-rebuilt__cta--primary">Explore the Collection <MoveRight size={15} /></a>
            <a href="#specification" className="pvd-hero-rebuilt__cta pvd-hero-rebuilt__cta--secondary">Request Samples <ArrowUpRight size={15} /></a>
          </div>
          <div className="pvd-hero-rebuilt__spec">SS 304 / SS 316 <i>·</i> PVD <i>·</i> 0.8—3.0 MM</div>
        </div>
        <div className="pvd-hero-rebuilt__visual">
          <div className="pvd-hero-rebuilt__gridline" />
          <div className="pvd-hero-rebuilt__material">
            <img src={pvdImages.hero} alt="PVD coated stainless steel architectural surface" />
            <span className="pvd-hero-rebuilt__edge">PVD / SURFACE 01</span>
            <div className="pvd-hero-rebuilt__chip"><strong>SS PVD Coated 304 Grade</strong><span>Vacuum deposition · architectural finish</span></div>
          </div>
          <div className="pvd-hero-rebuilt__annotation">CHAMPAGNE / HAIRLINE<br />LIGHT RESPONSE · MICROTEXTURE</div>
          <div className="pvd-hero-rebuilt__scroll"><span>SCROLL TO EXPLORE</span><b /></div>
        </div>
      </div>
      <div className="pvd-hero-rebuilt__grain" aria-hidden="true" />
    </section>
  );
}
