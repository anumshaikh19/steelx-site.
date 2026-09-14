import { useEffect, useRef, useState } from "react";
import { MoveRight } from "lucide-react";
import { pvdImages } from "@/data/pvd";
import "@/pvd-hero-rebuilt.css";
import "@/pvd-gallery-hero.css";

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
      root.style.setProperty("--mx", `${x * 18}px`);
      root.style.setProperty("--my", `${y * 14}px`);
      root.style.setProperty("--lx", `${50 + x * 42}%`);
      root.style.setProperty("--ly", `${48 + y * 36}%`);
    };
    const onScroll = () => {
      if (reduce.matches) return;
      const rect = root.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, -rect.top / Math.max(1, rect.height)));
      root.style.setProperty("--scroll", `${progress}`);
    };
    const observer = new IntersectionObserver(([entry]) => setActive(entry.isIntersecting), { threshold: 0.12 });
    observer.observe(root);
    root.addEventListener("pointermove", onPointer, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => { observer.disconnect(); root.removeEventListener("pointermove", onPointer); window.removeEventListener("scroll", onScroll); };
  }, []);

  return (
    <section ref={rootRef} className={`pvd-architecture-hero pvd-gallery-hero${active ? " is-active" : ""}`} aria-labelledby="pvd-gallery-title">
      <div className="pvd-gallery-hero__ambient" aria-hidden="true" />
      <div className="pvd-gallery-hero__room" aria-hidden="true" />
      <div className="pvd-gallery-hero__sculpture" aria-hidden="true">
        <div className="pvd-gallery-hero__sheet">
          <img src={pvdImages.hero} alt="" />
          <span className="pvd-gallery-hero__sheet-edge" />
          <span className="pvd-gallery-hero__spotlight" />
          <span className="pvd-gallery-hero__reflection" />
          <span className="pvd-gallery-hero__grain" />
        </div>
      </div>

      <div className="pvd-gallery-hero__wordmark" aria-hidden="true">
        <span>PVD</span><span>SURFACES</span>
      </div>
      <h1 id="pvd-gallery-title" className="sr-only">PVD Coated Stainless Steel Surfaces — Architectural Finishes Engineered by Vacuum Deposition</h1>

      <div className="pvd-gallery-hero__gallery-label">THE GALLERY <i>01</i></div>
      <div className="pvd-gallery-hero__annotation pvd-gallery-hero__annotation--a"><b>SS 304</b><span>SUBSTRATE</span></div>
      <div className="pvd-gallery-hero__annotation pvd-gallery-hero__annotation--b"><b>SS 316</b><span>SUBSTRATE / REQUEST</span></div>
      <div className="pvd-gallery-hero__annotation pvd-gallery-hero__annotation--c"><b>PVD / VACUUM DEPOSITION</b><span>COLOUR BONDED TO METAL</span></div>
      <div className="pvd-gallery-hero__annotation pvd-gallery-hero__annotation--d"><b>ARCHITECTURAL FINISHES</b><span>CHAMPAGNE · GOLD · ROSE · GUNMETAL</span></div>

      <a className="pvd-gallery-hero__explore" href="#colours" aria-label="Explore PVD finishes"><span>EXPLORE FINISHES</span><MoveRight size={15} /></a>
      <div className="pvd-gallery-hero__index">STEELXDECOR / MATERIAL 01</div>
      <div className="pvd-gallery-hero__scroll">SCROLL TO ENTER <span /></div>
      <div className="pvd-gallery-hero__veil" aria-hidden="true" />
    </section>
  );
}
