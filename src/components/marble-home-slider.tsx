import { useEffect, useRef, useState, type CSSProperties, type KeyboardEvent } from "react";

const slides = [
  { title: "Calacatta Gold Marble", copy: "A masterpiece of nature, where golden veins meet timeless elegance.", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=92", alt: "Luxury interior featuring warm white marble with golden veining" },
  { title: "Nero Marquina", copy: "Deep black stone traced with luminous white movement and quiet drama.", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=92", alt: "Dark luxury interior with dramatic black stone surfaces" },
  { title: "Verde Alpi Marble", copy: "A rare green expression layered with mineral depth and natural character.", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=92", alt: "Green natural stone interior with rich mineral veining" },
  { title: "Taj Mahal Quartzite", copy: "Warm ivory quartzite with subtle movement, designed for enduring spaces.", image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2200&q=92", alt: "Bright contemporary interior with ivory stone surfaces" },
];

const collections = [
  ["White Marbles", "Pure elegance", slides[0].image],
  ["Black Marbles", "Bold sophistication", slides[1].image],
  ["Colored Marbles", "Vibrant expression", slides[2].image],
  ["Granites", "Enduring strength", "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=90"],
];

const css = String.raw`
@property --marble-glow { syntax:'<number>'; inherits:false; initial-value:.35; }
@property --vein-position { syntax:'<percentage>'; inherits:false; initial-value:0%; }
.marble-slider{--bg:#080a0b;--panel:rgba(14,15,15,.9);--text:#f5f5f2;--muted:rgba(245,245,242,.68);--line:rgba(255,255,255,.18);--gold:#d4af37;--gold-soft:#e7c978;color-scheme:dark;background:var(--bg);--marble-glow:.35}
.marble-slider[data-theme='light']{--bg:#f5f5f0;--panel:rgba(248,247,242,.92);--text:#202020;--muted:rgba(32,32,32,.68);--line:rgba(32,32,32,.18);color-scheme:light}
@media(prefers-color-scheme:light){.marble-slider:not([data-theme='dark']){--bg:#f5f5f0;--panel:rgba(248,247,242,.92);--text:#202020;--muted:rgba(32,32,32,.68);--line:rgba(32,32,32,.18);color-scheme:light}}
.marble-slider *{box-sizing:border-box}.marble-slider button,.marble-slider a{-webkit-tap-highlight-color:transparent}.marble-slider :is(button,a):focus-visible{outline:2px solid var(--gold);outline-offset:4px}
.marble-slider:has(.marble-control:hover){--marble-glow:.62}.marble-slider:has(.marble-control:focus-visible){--marble-glow:.72}
.marble-slider .marble-control,.marble-slider .marble-theme,.marble-slider .marble-card{cursor:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Ccircle cx='16' cy='16' r='11' fill='%23111111' fill-opacity='.9' stroke='%23d4af37' stroke-width='1.5'/%3E%3Cpath d='M9 19c5-8 9-8 14-4M10 23c4-3 7-4 12-3' fill='none' stroke='%23e7c978' stroke-width='1'/%3E%3C/svg%3E") 16 16,pointer}
.marble-slider .marble-viewport{scrollbar-width:none;overscroll-behavior-x:contain;scroll-snap-type:x mandatory;scroll-behavior:smooth}.marble-slider .marble-viewport::-webkit-scrollbar,.marble-slider .marble-collections::-webkit-scrollbar{display:none}.marble-slider .marble-slide{scroll-snap-align:start;scroll-snap-stop:always;contain:layout paint;isolation:isolate}
.marble-slider .marble-collections{scrollbar-width:none;scroll-snap-type:x mandatory;overscroll-behavior-x:contain}.marble-slider .marble-card{scroll-snap-align:center;scroll-snap-stop:always}
.marble-slider .marble-image{will-change:transform,opacity;transform:translateZ(0) scale(1.035);transition:transform 1.1s cubic-bezier(.22,1,.36,1),filter 1.1s ease}.marble-slider .marble-slide:hover .marble-image{transform:translateZ(0) scale(1.07);filter:saturate(1.08) contrast(1.03)}
.marble-slider .marble-vein{background:linear-gradient(112deg,transparent 0%,rgba(212,175,55,0) 36%,rgba(255,246,216,.42) 48%,rgba(212,175,55,0) 59%,transparent 72%);background-size:190% 100%;animation:marble-polish 9s ease-in-out infinite;mix-blend-mode:screen}.marble-slider .marble-grain{background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.22'/%3E%3C/svg%3E");opacity:.16;mix-blend-mode:soft-light}
.marble-slider .marble-autoplay{animation:marble-progress 7s linear forwards;transform-origin:left center}.marble-slider:hover .marble-autoplay{animation-play-state:paused}.marble-slider .marble-control{min-width:44px;min-height:44px}.marble-slider .marble-ripple{position:relative;overflow:hidden}.marble-slider .marble-ripple::after{content:'';position:absolute;left:50%;top:50%;width:0;height:0;border-radius:50%;background:rgba(255,255,255,.22);transform:translate(-50%,-50%);transition:width .45s ease,height .45s ease}.marble-slider .marble-ripple:active::after{width:150px;height:150px}
.marble-slider .marble-dot{width:6px;transition:width .35s ease,background-color .35s ease,opacity .35s ease}.marble-slider .marble-dot[data-active='true']{width:30px;background:var(--gold);opacity:1}.marble-slider .marble-theme-icon{transition:transform .5s ease}.marble-slider .marble-theme:hover .marble-theme-icon{transform:rotate(35deg) scale(1.08)}
.marble-slider .marble-card::before{content:'';position:absolute;inset:0;z-index:2;background:linear-gradient(180deg,transparent 28%,rgba(0,0,0,.78));pointer-events:none}.marble-slider .marble-card img{transition:transform .8s cubic-bezier(.22,1,.36,1);will-change:transform}.marble-slider .marble-card:hover img{transform:scale(1.07)}
.marble-slider .marble-hero-content{background:linear-gradient(135deg,rgba(12,13,13,.72),rgba(12,13,13,.18));backdrop-filter:blur(7px)}.marble-slider[data-theme='light'] .marble-hero-content{background:linear-gradient(135deg,rgba(255,255,255,.78),rgba(255,255,255,.3))}.marble-slider .marble-viewport:focus-visible{outline:2px solid var(--gold);outline-offset:-2px}
@keyframes marble-polish{0%,100%{background-position:190% 0;opacity:.15}45%{background-position:50% 0;opacity:.5}70%{background-position:-10% 0;opacity:.2}}@keyframes marble-progress{from{transform:scaleX(0)}to{transform:scaleX(1)}}
@media(prefers-reduced-motion:reduce){.marble-slider *,.marble-slider *::before,.marble-slider *::after{animation-duration:.001ms!important;animation-iteration-count:1!important;scroll-behavior:auto!important;transition-duration:.001ms!important}.marble-slider .marble-image{transform:none}}
@supports not(selector(:has(*))){.marble-slider .marble-control:hover{cursor:pointer}}
@media(min-width:768px){.marble-slider .marble-card{flex-basis:calc((100% - 24px)/2)}}@media(min-width:1100px){.marble-slider .marble-card{flex-basis:calc((100% - 48px)/3)}}
`;

export function MarbleHomeSlider() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [theme, setTheme] = useState<"light" | "dark" | undefined>(undefined);
  const current = slides[active];

  const scrollToSlide = (index: number) => {
    const viewport = viewportRef.current;
    const slide = viewport?.querySelector<HTMLElement>(`[data-slide-index='${index}']`);
    slide?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
    setActive(index);
  };
  const next = () => scrollToSlide((active + 1) % slides.length);
  const prev = () => scrollToSlide((active - 1 + slides.length) % slides.length);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    let frame = 0;
    const update = () => { setActive(Math.min(Math.max(Math.round(viewport.scrollLeft / Math.max(viewport.clientWidth, 1)), 0), slides.length - 1)); frame = 0; };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    viewport.addEventListener("scroll", onScroll, { passive: true });
    return () => { viewport.removeEventListener("scroll", onScroll); if (frame) cancelAnimationFrame(frame); };
  }, []);

  useEffect(() => {
    const onKey = (event: globalThis.KeyboardEvent) => { if (event.key === "ArrowRight") next(); if (event.key === "ArrowLeft") prev(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const onHeroKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "ArrowRight") { event.preventDefault(); next(); }
    if (event.key === "ArrowLeft") { event.preventDefault(); prev(); }
  };

  return (
    <section id="top" className="marble-slider relative isolate overflow-hidden text-[var(--text)]" data-theme={theme} style={{ "--hero-image": `url(${current.image})` } as CSSProperties} onKeyDown={onHeroKeyDown}>
      <style>{css}</style>
      <div className="absolute inset-0 z-0 bg-[var(--bg)]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 z-0 opacity-45 blur-2xl transition-all duration-1000" style={{ backgroundImage: "var(--hero-image)", backgroundSize: "cover", backgroundPosition: "center", transform: "scale(1.08)" }} aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(3,6,7,.92)_0%,rgba(3,6,7,.68)_34%,rgba(3,6,7,.2)_68%,rgba(3,6,7,.42)_100%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(0deg,rgba(3,6,7,.98)_0%,transparent_35%,rgba(3,6,7,.35)_100%)]" aria-hidden="true" />
      <div className="marble-grain pointer-events-none absolute inset-0 z-30" aria-hidden="true" />

      <header className="absolute inset-x-0 top-0 z-50 border-b border-white/10 bg-black/15 backdrop-blur-md">
        <div className="mx-auto flex h-[86px] max-w-[1540px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <a href="#top" className="shrink-0" aria-label="Marbles home"><div className="font-serif text-[23px] font-light tracking-[.42em]">MARBLES</div><div className="mt-1 text-[8px] uppercase tracking-[.25em] opacity-60">Natural stone. Timeless beauty.</div></a>
          <nav className="hidden items-center gap-8 xl:flex" aria-label="Primary navigation">
            {[["Home", "top"], ["Collections", "collections"], ["Spaces", "spaces"], ["Process", "craft"], ["Journal", "journal"], ["About", "consult"]].map(([label, href], index) => <a key={label} href={`#${href}`} className={`relative py-7 text-[13px] tracking-wide transition hover:text-[var(--gold-soft)] ${index === 0 ? "text-white" : "text-white/70"}`}>{label}{index === 0 && <span className="absolute bottom-0 left-0 right-0 h-px bg-[var(--gold)]" />}</a>)}
          </nav>
          <div className="flex items-center gap-2 sm:gap-3"><button className="marble-theme marble-control grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white/80" type="button" onClick={() => setTheme(theme === "light" ? "dark" : "light")} aria-label="Toggle light and dark mode"><span className="marble-theme-icon text-xl">☼</span></button><a href="#consult" className="marble-control rounded-full border border-[#d4af37]/70 px-5 py-3 text-[12px] tracking-wide text-white transition hover:bg-[#d4af37] hover:text-[#111] sm:px-6">Get Quote</a></div>
        </div>
      </header>

      <div className="relative z-20 pt-[86px]">
        <div ref={viewportRef} className="marble-viewport flex min-h-[700px] w-full overflow-x-auto md:min-h-[calc(100vh-150px)]" tabIndex={0} aria-label="Featured marble collections" role="region">
          {slides.map((slide, index) => <figure key={slide.title} data-slide-index={index} className="marble-slide relative min-h-[700px] min-w-full md:min-h-[calc(100vh-150px)]"><img className="marble-image absolute inset-0 h-full w-full object-cover" src={slide.image} alt={slide.alt} loading={index === 0 ? "eager" : "lazy"}/><div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_45%,rgba(212,175,55,.2),transparent_23%)]" aria-hidden="true"/><div className="marble-vein pointer-events-none absolute inset-0 z-10" aria-hidden="true"/><figcaption className="absolute inset-0 z-20 mx-auto flex max-w-[1540px] items-center px-6 pb-28 pt-24 sm:px-10 lg:px-16"><div className="marble-hero-content max-w-[650px] rounded-[2px] border border-white/10 p-6 shadow-2xl backdrop-blur-sm sm:p-9 lg:p-11"><div className="mb-6 flex items-center gap-3 text-[10px] uppercase tracking-[.3em] text-white/75"><span className="h-px w-12 bg-[var(--gold)]"/> Featured Collection</div><h1 className="max-w-[610px] font-serif text-[52px] font-normal leading-[.92] tracking-[-.045em] text-white sm:text-[66px] lg:text-[82px]">{slide.title}</h1><p className="mt-6 max-w-[440px] text-[15px] leading-7 text-white/75 sm:text-[16px]">{slide.copy}</p><a href="#collections" className="marble-ripple marble-control mt-8 inline-flex min-h-12 items-center gap-8 bg-[#b8893d] px-6 py-4 text-[12px] font-medium text-white transition hover:bg-[var(--gold)]">Explore Collection <span className="text-xl">→</span></a></div></figcaption></figure>)}
        </div>

        <button type="button" aria-label="Previous marble slide" onClick={prev} className="marble-control marble-ripple absolute left-5 top-[50%] z-40 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/45 bg-black/10 text-2xl text-white backdrop-blur-sm transition hover:border-[var(--gold)] hover:bg-black/25 sm:left-8 sm:h-14 sm:w-14">←</button>
        <button type="button" aria-label="Next marble slide" onClick={next} className="marble-control marble-ripple absolute right-5 top-[50%] z-40 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/45 bg-black/10 text-2xl text-white backdrop-blur-sm transition hover:border-[var(--gold)] hover:bg-black/25 sm:right-8 sm:h-14 sm:w-14">→</button>

        <div className="absolute bottom-28 left-6 right-6 z-40 mx-auto flex max-w-[1200px] items-end justify-between gap-6 sm:left-10 sm:right-10 lg:left-16 lg:right-16"><div className="flex flex-1 items-center gap-4"><span className="min-w-[62px] text-[12px] text-white"><strong>{String(active + 1).padStart(2, "0")}</strong><span className="text-white/45"> / 0{slides.length}</span></span><div className="h-px w-full max-w-[265px] bg-white/25"><div className="h-full origin-left bg-[var(--gold)] transition-[width] duration-500" style={{ width: `${((active + 1) / slides.length) * 100}%` }}/></div></div><div className="hidden items-center gap-3 text-[11px] text-white/60 md:flex"><span className="grid h-8 w-8 place-items-center rounded-full border border-white/35">⌁</span> Drag to explore</div></div>
        <div className="absolute bottom-20 left-1/2 z-40 flex -translate-x-1/2 items-center gap-2" role="tablist" aria-label="Featured marble slides">{slides.map((slide,index)=><button key={slide.title} type="button" role="tab" aria-selected={active===index} aria-label={`Show ${slide.title}`} onClick={()=>scrollToSlide(index)} className="marble-control marble-dot h-1.5 rounded-full bg-white/45" data-active={active===index}/>)}</div>
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-50 h-1 bg-white/10"><div className="marble-autoplay h-full w-full bg-[var(--gold)]" aria-hidden="true"/></div>
      </div>

      <section id="collections" className="relative z-40 border-t border-white/10 bg-[var(--panel)] py-5 backdrop-blur-xl sm:py-7" aria-label="Our marble collections"><div className="mx-auto flex max-w-[1540px] items-stretch px-5 sm:px-8 lg:px-12"><div className="hidden w-[180px] shrink-0 items-center border-r border-[var(--gold)]/60 pr-8 lg:flex"><div><div className="text-[9px] uppercase leading-5 tracking-[.24em] opacity-70">Our<br/>Collections</div><div className="mt-3 h-px w-9 bg-[var(--gold)]"/></div></div><div className="marble-collections flex min-w-0 flex-1 gap-3 overflow-x-auto px-0 lg:px-6">{collections.map(([name,subtitle,image],index)=><button key={name} type="button" onClick={()=>scrollToSlide(index)} className="marble-card marble-control relative min-h-[120px] min-w-[82vw] overflow-hidden border border-white/10 text-left sm:min-w-[48%] lg:min-w-0"><img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy"/><div className="relative z-10 flex min-h-[120px] flex-col justify-end p-5 text-white"><span className="text-[15px] font-medium">{name}</span><span className="mt-1 text-[12px] text-white/65">{subtitle}</span></div></button>)}</div><button type="button" aria-label="Next collection" onClick={next} className="marble-control hidden w-14 shrink-0 place-items-center border-l border-white/10 text-2xl text-[var(--gold)] lg:grid">→</button></div></section>
    </section>
  );
}
