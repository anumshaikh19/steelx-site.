import { useEffect, useState } from "react";

const slides = [
  {
    eyebrow: "01 / CALACATTA ORO",
    title: "Light, carved into luxury.",
    copy: "Calacatta Oro brings warm gold movement across a luminous white field—made for kitchens, foyers and spaces designed to be remembered.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=92",
  },
  {
    eyebrow: "02 / NERO MARQUINA",
    title: "Darkness with a signature.",
    copy: "Deep black marble and dramatic white veining create an architectural statement with a quietly cinematic presence.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=92",
  },
  {
    eyebrow: "03 / TAJ MAHAL",
    title: "Nature, refined.",
    copy: "A soft quartzite palette with delicate movement—subtle enough for calm interiors, powerful enough to define the room.",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2200&q=92",
  },
  {
    eyebrow: "04 / VERDE ALPI",
    title: "A room with a pulse.",
    copy: "Emerald depth, mineral character and an unmistakable sense of rarity for projects that refuse the ordinary.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=92",
  },
];

export function MarbleHomeSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0, visible: false });

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => setActive((value) => (value + 1) % slides.length), 5000);
    return () => window.clearInterval(timer);
  }, [paused]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") setActive((value) => (value + 1) % slides.length);
      if (event.key === "ArrowLeft") setActive((value) => (value - 1 + slides.length) % slides.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const move = (direction: 1 | -1) => setActive((value) => (value + direction + slides.length) % slides.length);

  return (
    <section
      id="top"
      className="marble-slider relative min-h-[100svh] overflow-hidden bg-[#171716] text-white"
      tabIndex={0}
      aria-label="Featured marble collections"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        setCursor({ x: event.clientX - rect.left, y: event.clientY - rect.top, visible: true });
      }}
      onMouseOut={() => setCursor((value) => ({ ...value, visible: false }))}
    >
      <style>{`
        .marble-slider{--gold:#d4af37;--ink:#171716;--cream:#f5f5f2;isolation:isolate}
        .marble-slider-track{display:flex;height:100%;transition:transform 800ms cubic-bezier(.77,0,.175,1)}
        .marble-slider-slide{min-width:100%;position:relative;height:100svh;overflow:hidden}
        .marble-slider-slide img{transition:transform 1600ms cubic-bezier(.2,.7,.2,1),filter 900ms ease}
        .marble-slider-slide.active img{transform:scale(1.06);filter:saturate(.92) contrast(1.04)}
        .marble-slider-noise{background-image:radial-gradient(rgba(255,255,255,.12) .65px,transparent .65px);background-size:5px 5px;mix-blend-mode:soft-light}
        .marble-slider-dot{transition:width 500ms cubic-bezier(.77,0,.175,1),background .3s ease,border-radius .3s ease}
        .marble-slider-dot.active{width:46px!important;border-radius:999px;background:var(--gold)}
        @media (prefers-reduced-motion:reduce){.marble-slider-track,.marble-slider-slide img,.marble-slider-dot{transition:none!important}.marble-slider-cursor{display:none!important}}
      `}</style>

      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="marble-slider-track" style={{ transform: `translateX(-${active * 100}%)` }}>
          {slides.map((slide, index) => (
            <article key={slide.eyebrow} className={`marble-slider-slide ${index === active ? "active" : ""}`} aria-hidden={index !== active}>
              <img src={slide.image} alt={`${slide.eyebrow.replace(/^\d+ \/ /, "")} marble interior`} className="absolute inset-0 h-full w-full object-cover opacity-65" />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,9,.88)_0%,rgba(10,10,9,.62)_38%,rgba(10,10,9,.16)_72%,rgba(10,10,9,.45)_100%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_40%,rgba(212,175,55,.22),transparent_25%)]" />
            </article>
          ))}
        </div>
        <div className="marble-slider-noise pointer-events-none absolute inset-0 opacity-[.14]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.35),transparent_25%,transparent_70%,rgba(0,0,0,.65))]" />
      </div>

      {cursor.visible && <div className="marble-slider-cursor pointer-events-none absolute z-30 hidden h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-white/10 text-[8px] uppercase tracking-[.25em] backdrop-blur-md lg:flex" style={{ left: cursor.x, top: cursor.y }}><span>Drag / Explore</span></div>}

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1600px] flex-col justify-between px-5 pb-8 pt-[110px] md:px-10 md:pb-10 lg:px-16">
        <div className="flex items-center justify-between text-[9px] uppercase tracking-[.32em] text-white/45"><span>Aurelia Stone House · Since 1985</span><span>{String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span></div>
        <div className="max-w-4xl pb-2 md:pb-8">
          <p key={`eyebrow-${active}`} className="mb-6 animate-[fadeUp_.7s_ease_both] text-[10px] uppercase tracking-[.42em] text-[#d4af37]">{slides[active].eyebrow}</p>
          <h1 key={`title-${active}`} className="stone-serif animate-[fadeUp_.8s_.05s_ease_both] text-[clamp(3.7rem,9vw,9.2rem)] leading-[.84] tracking-[-.065em]">{slides[active].title}</h1>
          <p key={`copy-${active}`} className="mt-8 max-w-xl animate-[fadeUp_.8s_.15s_ease_both] text-sm leading-7 text-white/60 md:text-base">{slides[active].copy}</p>
          <div className="mt-9 flex flex-wrap items-center gap-3 animate-[fadeUp_.8s_.22s_ease_both]"><a href="#collections" className="bg-white px-7 py-4 text-[10px] font-bold uppercase tracking-[.2em] text-black transition duration-300 hover:-translate-y-1 hover:bg-[#d4af37]">Explore Collection</a><a href="#consult" className="border border-white/30 px-7 py-4 text-[10px] uppercase tracking-[.2em] text-white transition duration-300 hover:border-[#d4af37] hover:text-[#d4af37]">Book a Consultation</a></div>
        </div>

        <div className="flex items-end justify-between gap-6">
          <div className="flex items-center gap-2" role="tablist" aria-label="Choose marble slide">
            {slides.map((slide, index) => <button key={slide.eyebrow} role="tab" aria-selected={index === active} aria-label={`Show ${slide.eyebrow}`} onClick={() => setActive(index)} className={`marble-slider-dot h-[3px] w-5 bg-white/30 ${index === active ? "active" : ""}`} />)}
          </div>
          <div className="flex items-center gap-2">
            <button aria-label="Previous slide" onClick={() => move(-1)} className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-lg transition hover:border-[#d4af37] hover:text-[#d4af37]">←</button>
            <button aria-label="Next slide" onClick={() => move(1)} className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-lg transition hover:border-[#d4af37] hover:text-[#d4af37]">→</button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 z-20 hidden -translate-x-1/2 text-center md:block"><div className="text-[8px] uppercase tracking-[.35em] text-white/35">Scroll to discover</div><div className="mx-auto mt-3 h-10 w-px bg-gradient-to-b from-[#d4af37] to-transparent" /></div>
      <style>{`@keyframes fadeUp{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:translateY(0)}}`}</style>
    </section>
  );
}
