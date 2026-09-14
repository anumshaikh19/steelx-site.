import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { pvdImages, tones } from "@/data/pvd";
import "@/pvd-monolith-hero.css";

export function PvdMonolithHero() {
  const rootRef = useRef<HTMLElement>(null);
  const [finishIndex, setFinishIndex] = useState(1);

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
      root.style.setProperty("--my", `${y * 15}px`);
      root.style.setProperty("--beam-x", `${50 + x * 25}%`);
      root.style.setProperty("--beam-y", `${45 + y * 18}%`);
      const next = Math.max(0, Math.min(tones.length - 1, Math.round((x + 0.5) * (tones.length - 1))));
      setFinishIndex(next);
    };
    const onScroll = () => {
      if (reduce.matches) return;
      const progress = Math.max(0, Math.min(1, window.scrollY / Math.max(1, root.offsetHeight)));
      root.style.setProperty("--scroll", `${progress}`);
    };
    root.addEventListener("pointermove", onPointer, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      root.removeEventListener("pointermove", onPointer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const finish = tones[finishIndex];

  return (
    <section ref={rootRef} className="pvd-monolith-hero" aria-labelledby="pvd-monolith-title">
      <div className="pvd-monolith-hero__void" aria-hidden="true" />
      <div className="pvd-monolith-hero__dust" aria-hidden="true" />
      <div className="pvd-monolith-hero__beam" aria-hidden="true" />
      <div className="pvd-monolith-hero__floor" aria-hidden="true" />

      <div className="pvd-monolith-hero__architecture" aria-hidden="true">
        <div className="pvd-monolith-hero__face pvd-monolith-hero__face--front">
          <img src={finish.image} alt="" />
          <span className="pvd-monolith-hero__brushed" />
          <span className="pvd-monolith-hero__specular" />
        </div>
        <div className="pvd-monolith-hero__face pvd-monolith-hero__face--side" />
        <div className="pvd-monolith-hero__face pvd-monolith-hero__face--top" />
      </div>

      <div className="pvd-monolith-hero__word word--one">SURFACES</div>
      <div className="pvd-monolith-hero__word word--two">THAT DEFINE</div>
      <div className="pvd-monolith-hero__word word--three">SPACE.</div>
      <h1 id="pvd-monolith-title" className="pvd-monolith-hero__sr">PVD Finishes — Surfaces That Define Space</h1>

      <div className="pvd-monolith-hero__brand">STEEL × DECOR / PVD SURFACES</div>
      <div className="pvd-monolith-hero__technical">
        <span>SS 304 / SS 316</span>
        <span>PVD COATING</span>
        <span>ARCHITECTURAL FINISHES</span>
      </div>
      <div className="pvd-monolith-hero__finish"><i /> {finish.name.toUpperCase()} / {String(finishIndex + 1).padStart(2, "0")}</div>
      <a className="pvd-monolith-hero__cta" href="#finishes">DISCOVER THE COLLECTION <ArrowUpRight size={14} /></a>
      <div className="pvd-monolith-hero__measure measure--left">04.800 M <span /></div>
      <div className="pvd-monolith-hero__measure measure--right">PVD / 01 <span /></div>
    </section>
  );
}
