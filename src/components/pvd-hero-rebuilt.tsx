import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, MoveRight } from "lucide-react";
import { pvdImages } from "@/data/pvd";
import "@/pvd-hero-rebuilt.css";

export function PvdHeroRebuilt() {
  const rootRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onPointer = (event: PointerEvent) => {
      if (reduce.matches) return;
      const rect = root.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      root.style.setProperty("--mx", `${x * 22}px`);
      root.style.setProperty("--my", `${y * 16}px`);
      root.style.setProperty("--lx", `${50 + x * 34}%`);
      root.style.setProperty("--ly", `${45 + y * 28}%`);
    };
    const onScroll = () => {
      if (reduce.matches) return;
      const rect = root.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, -rect.top / Math.max(1, rect.height)));
      root.style.setProperty("--scroll", `${progress}`);
    };
    const observer = new IntersectionObserver(([entry]) => setActive(entry.isIntersecting), { threshold: 0.18 });
    observer.observe(root);
    root.addEventListener("pointermove", onPointer, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      observer.disconnect();
      root.removeEventListener("pointermove", onPointer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section ref={rootRef} className={`pvd-architecture-hero${active ? " is-active" : ""}`} aria-labelledby="pvd-architecture-title">
      <div className="pvd-architecture-hero__atmosphere" aria-hidden="true" />
      <div className="pvd-architecture-hero__field" aria-hidden="true"><span /><span /><span /><span /><span /><span /></div>
      <div className="pvd-architecture-hero__steel" aria-hidden="true">
        <div className="pvd-architecture-hero__steel-image">
          <img src={pvdImages.hero} alt="" />
          <div className="pvd-architecture-hero__sunbeam" />
          <div className="pvd-architecture-hero__reflection" />
          <div className="pvd-architecture-hero__edge" />
        </div>
      </div>
      <div className="pvd-architecture-hero__title-wrap">
        <p className="pvd-architecture-hero__micro">STEELXDECOR / MATERIAL STUDY / 01</p>
        <h1 id="pvd-architecture-title"><span>PVD</span><span>SURFACES</span></h1>
      </div>
      <div className="pvd-architecture-hero__descriptor"><span>ARCHITECTURAL STAINLESS STEEL</span><span>304 · 316 / PVD FINISHES</span></div>
      <div className="pvd-architecture-hero__annotation pvd-architecture-hero__annotation--one"><b>01</b><span>BRUSHED MICROTEXTURE</span><i /></div>
      <div className="pvd-architecture-hero__annotation pvd-architecture-hero__annotation--two"><b>02</b><span>CHAMPAGNE PVD / LIGHT RESPONSE</span><i /></div>
      <div className="pvd-architecture-hero__annotation pvd-architecture-hero__annotation--three"><span>VACUUM DEPOSITION</span><i /></div>
      <div className="pvd-architecture-hero__control"><a href="#introduction" aria-label="Explore PVD surfaces"><span>ENTER THE MATERIAL</span><MoveRight size={16} /></a></div>
      <div className="pvd-architecture-hero__footer" aria-hidden="true"><span>PRECISION</span><span>MATERIAL</span><span>ARCHITECTURE</span><span>CRAFT</span><span className="pvd-architecture-hero__scroll">SCROLL <b /></span></div>
      <div className="pvd-architecture-hero__grain" aria-hidden="true" />
      <div className="pvd-architecture-hero__veil" aria-hidden="true" />
      <a className="pvd-architecture-hero__corner" href="#specification" aria-label="Request PVD material guide"><ArrowUpRight size={17} /><span>SPECIFY<br />PVD</span></a>
    </section>
  );
}
