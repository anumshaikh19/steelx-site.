import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const slides = [
  {
    name: "Calacatta Gold Marble",
    eyebrow: "Featured Collection",
    description: "A masterpiece of nature, where golden veins meet timeless elegance.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=92",
    accent: "#d9b45b",
  },
  {
    name: "Nero Marquina",
    eyebrow: "Featured Collection",
    description: "Deep black stone traced with luminous white movement and quiet drama.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=92",
    accent: "#d7b768",
  },
  {
    name: "Verde Alpi Marble",
    eyebrow: "Featured Collection",
    description: "A rare green expression, layered with mineral depth and natural character.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=92",
    accent: "#bda55d",
  },
  {
    name: "Taj Mahal Quartzite",
    eyebrow: "Featured Collection",
    description: "Warm ivory quartzite with subtle movement, designed for enduring spaces.",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1800&q=92",
    accent: "#d4b26b",
  },
];

const collections = [
  ["White Marbles", "Pure elegance", slides[0].image],
  ["Black Marbles", "Bold sophistication", slides[1].image],
  ["Colored Marbles", "Vibrant expression", slides[2].image],
  ["Granites", "Enduring strength", "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1000&q=90"],
];

export function MarbleHomeSlider() {
  const [active, setActive] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [cursor, setCursor] = useState({ x: 50, y: 50 });
  const startX = useRef(0);
  const dragDelta = useRef(0);
  const timer = useRef<number | undefined>(undefined);

  const next = () => setActive((value) => (value + 1) % slides.length);
  const prev = () => setActive((value) => (value - 1 + slides.length) % slides.length);

  useEffect(() => {
    timer.current = window.setInterval(next, 6200);
    return () => window.clearInterval(timer.current);
  }, []);

  const restart = () => {
    window.clearInterval(timer.current);
    timer.current = window.setInterval(next, 6200);
  };

  const goTo = (index: number) => {
    setActive(index);
    restart();
  };

  const onPointerDown = (event: React.PointerEvent<HTMLElement>) => {
    startX.current = event.clientX;
    dragDelta.current = 0;
    setDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (!dragging) return;
    dragDelta.current = event.clientX - startX.current;
  };

  const onPointerUp = () => {
    if (!dragging) return;
    setDragging(false);
    if (Math.abs(dragDelta.current) > 55) {
      if (dragDelta.current < 0) next();
      else prev();
      restart();
    }
  };

  const onMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setCursor({
      x: ((event.clientX - rect.left) / rect.width) * 100,
      y: ((event.clientY - rect.top) / rect.height) * 100,
    });
  };

  const current = slides[active];

  return (
    <section
      id="top"
      className="marble-slider relative isolate min-h-[760px] overflow-hidden bg-[#05090b] text-white md:min-h-[850px] lg:h-[min(100vh,1024px)] lg:min-h-[820px]"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      onMouseMove={onMouseMove}
      style={{ "--mx": `${cursor.x}%`, "--my": `${cursor.y}%` } as React.CSSProperties}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mx)_var(--my),rgba(232,194,111,.14),transparent_25%),linear-gradient(110deg,#02070a_0%,#0a1115_42%,#3b3125_100%)]" />
      <div className="absolute inset-0 opacity-70" style={{ backgroundImage: `url(${current.image})`, backgroundSize: "cover", backgroundPosition: "center", filter: "blur(18px) saturate(.8)", transform: "scale(1.08)" }} />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(1,5,7,.96)_0%,rgba(1,6,8,.78)_29%,rgba(1,6,8,.22)_59%,rgba(3,5,5,.16)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(1,5,7,.98)_0%,transparent_28%,rgba(1,5,7,.3)_100%)]" />

      <header className="absolute left-0 right-0 top-0 z-40 border-b border-white/[.08] bg-black/10 backdrop-blur-[2px]">
        <div className="mx-auto flex h-[90px] max-w-[1500px] items-center justify-between px-6 md:px-10 lg:px-12">
          <a href="#top" className="group min-w-[190px]">
            <div className="font-serif text-[24px] font-light tracking-[.42em] text-white">MARBLES</div>
            <div className="mt-1 text-[8px] uppercase tracking-[.28em] text-white/55">Natural stone. Timeless beauty.</div>
          </a>

          <nav className="hidden items-center gap-9 lg:flex">
            {["Home", "Collections", "Spaces", "Process", "Journal", "About"].map((item, index) => (
              <a
                key={item}
                href={index === 0 ? "#top" : `#${["", "collections", "spaces", "craft", "journal", "consult"][index]}`}
                className={`relative py-8 text-[13px] font-light tracking-wide transition ${index === 0 ? "text-white" : "text-white/65 hover:text-white"}`}
              >
                {item}
                {index === 0 && <span className="absolute bottom-[-1px] left-0 right-0 h-px bg-[#d8b466]" />}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button aria-label="Search" className="hidden h-10 w-10 place-items-center rounded-full border border-white/10 md:grid">
              <span className="h-4 w-4 rounded-full border border-white/75 after:absolute after:ml-[11px] after:mt-[11px] after:h-2 after:w-px after:rotate-[-42deg] after:bg-white/75" />
            </button>
            <button aria-label="Light mode" className="hidden h-10 w-10 place-items-center rounded-full md:grid">
              <span className="text-lg text-white/80">☼</span>
            </button>
            <a href="#consult" className="rounded-full border border-[#d7b36d]/70 px-6 py-3 text-[12px] tracking-wide text-white transition hover:bg-[#d7b36d] hover:text-[#111]">Get Quote</a>
          </div>
        </div>
      </header>

      <div className="absolute right-[8%] top-[18%] h-32 w-32 rounded-full bg-[#f2c873]/20 blur-3xl" />
      <div className="absolute left-[37%] top-[46%] h-3 w-3 rounded-full bg-[#f5cf7d] shadow-[0_0_35px_12px_rgba(242,190,92,.45)]" />

      <div className="relative z-20 mx-auto flex h-full min-h-[760px] max-w-[1500px] items-center px-6 pb-44 pt-40 md:px-12 lg:min-h-0 lg:px-16 lg:pb-40 lg:pt-36">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="relative z-30 max-w-[570px]"
          >
            <div className="mb-7 flex items-center gap-3 text-[10px] uppercase tracking-[.27em] text-white/70">
              <span className="h-px w-12 bg-[#d8b466]" />
              {current.eyebrow}
            </div>
            <h1 className="font-serif text-[58px] font-normal leading-[.94] tracking-[-.045em] text-white sm:text-[72px] lg:text-[78px]">
              {current.name.replace(" Marble", "")}
              {current.name.includes(" Marble") && <><br /><span className="text-white">Marble</span></>}
              {current.name.includes("Quartzite") && <><br /><span className="text-white">Quartzite</span></>}
            </h1>
            <p className="mt-7 max-w-[400px] text-[15px] leading-7 text-white/70">{current.description}</p>
            <a href="#collections" className="group mt-8 inline-flex items-center gap-8 bg-[#b98b42] px-6 py-4 text-[12px] font-medium text-white shadow-[0_12px_45px_rgba(0,0,0,.22)] transition hover:bg-[#d2a85d]">
              Explore Collection
              <span className="text-xl transition-transform group-hover:translate-x-1">→</span>
            </a>
          </motion.div>
        </AnimatePresence>

        <div className="pointer-events-none absolute inset-y-0 right-[-3%] left-[36%] hidden md:block">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: .93, x: 45, rotate: 3 }}
              animate={{ opacity: 1, scale: 1, x: 0, rotate: 0 }}
              exit={{ opacity: 0, scale: 1.02, x: -25 }}
              transition={{ duration: .9, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <div className="absolute left-[31%] top-[33%] h-[43%] w-[29%] overflow-hidden shadow-[25px_35px_70px_rgba(0,0,0,.55)] [clip-path:polygon(10%_0,94%_6%,100%_94%,4%_100%,0_12%)]" style={{ backgroundImage: `url(${slides[(active + 1) % 4].image})`, backgroundSize: "cover", backgroundPosition: "center" }} />
              <div className="absolute left-[49%] top-[19%] h-[63%] w-[36%] overflow-hidden shadow-[30px_45px_100px_rgba(0,0,0,.55)] [clip-path:polygon(8%_0,100%_8%,92%_94%,0_100%,0_13%)]" style={{ backgroundImage: `url(${current.image})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,.28),transparent_28%,transparent_65%,rgba(0,0,0,.24))]" />
              </div>
              <div className="absolute left-[80%] top-[37%] h-[39%] w-[13%] overflow-hidden shadow-[15px_30px_60px_rgba(0,0,0,.6)] [clip-path:polygon(12%_0,100%_6%,86%_100%,0_90%,4%_20%)]" style={{ backgroundImage: `url(${slides[(active + 2) % 4].image})`, backgroundSize: "cover", backgroundPosition: "center" }} />

              <div className="absolute left-[43%] top-[35%] h-[35%] w-[52%] rounded-[50%] border border-[#d9ae59]/75 [transform:rotate(-10deg)] shadow-[0_0_30px_rgba(219,176,88,.2)]" />
              <div className="absolute left-[43%] top-[58%] h-[18%] w-[52%] rounded-[50%] border border-[#f2c36e]/55 [transform:rotate(-7deg)]" />
              <div className="absolute left-[78%] top-[56%] h-5 w-5 rounded-full bg-[#f2cb7b] shadow-[0_0_24px_9px_rgba(242,203,123,.45)]" />

              {[0, 1, 2, 3, 4].map((n) => (
                <div key={n} className="absolute h-10 w-7 overflow-hidden rounded-[35%] opacity-70 shadow-lg" style={{ left: `${[9, 25, 67, 76, 19][n]}%`, top: `${[27, 63, 25, 12, 78][n]}%`, transform: `rotate(${[-22, 16, 22, -34, 30][n]}deg)`, backgroundImage: `url(${slides[(active + n + 1) % 4].image})`, backgroundSize: "cover" }} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="absolute bottom-24 left-6 right-6 z-30 md:bottom-20 md:left-12 md:right-12 lg:left-16 lg:right-16">
          <div className="flex items-end justify-between gap-8">
            <div className="flex min-w-[230px] flex-1 items-end gap-5">
              <div className="text-[13px] font-light"><span className="text-white">0{active + 1}</span><span className="text-white/40"> / 0{slides.length}</span></div>
              <div className="h-px max-w-[230px] flex-1 bg-white/25">
                <motion.div key={active} initial={{ width: 0 }} animate={{ width: `${((active + 1) / slides.length) * 100}%` }} transition={{ duration: .5 }} className="h-px bg-[#d8b466]" />
              </div>
            </div>
            <div className="hidden items-center gap-4 md:flex">
              <span className="text-[11px] text-white/55">Drag to rotate</span>
              <span className="grid h-8 w-8 place-items-center rounded-full border border-white/40 text-xs">⌁</span>
            </div>
          </div>
          <div className="mt-5 flex justify-center gap-3">
            {slides.map((_, index) => <button key={index} onClick={() => goTo(index)} aria-label={`Go to slide ${index + 1}`} className={`h-1.5 rounded-full transition-all ${index === active ? "w-7 bg-[#e1bf77]" : "w-1.5 bg-white/35"}`} />)}
          </div>
        </div>

        <button onClick={() => { prev(); restart(); }} aria-label="Previous slide" className="absolute left-5 top-[48%] z-40 grid h-14 w-14 -translate-y-1/2 place-items-center rounded-full border border-white/35 text-2xl font-light transition hover:border-white hover:bg-white/10 md:left-10">←</button>
        <button onClick={() => { next(); restart(); }} aria-label="Next slide" className="absolute right-5 top-[48%] z-40 grid h-14 w-14 -translate-y-1/2 place-items-center rounded-full border border-white/35 text-2xl font-light transition hover:border-white hover:bg-white/10 md:right-10">→</button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-40 border-t border-white/[.08] bg-[#03080a]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1500px] items-stretch px-6 md:px-12 lg:px-16">
          <div className="hidden w-[170px] shrink-0 items-center gap-5 border-r border-[#d8b466]/60 py-7 lg:flex">
            <div><p className="text-[9px] uppercase leading-5 tracking-[.22em] text-white/70">Our<br />Collections</p><span className="mt-3 block h-px w-9 bg-[#d8b466]" /></div>
          </div>
          <div className="hide-scroll flex min-w-0 flex-1 snap-x overflow-x-auto">
            {collections.map(([name, subtitle, image], index) => (
              <button key={name} onClick={() => goTo(index)} className={`group relative min-w-[240px] flex-1 snap-start overflow-hidden border-r border-white/[.08] text-left md:min-w-[260px] ${active === index ? "opacity-100" : "opacity-80"}`}>
                <div className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${image})` }} />
                <div className="absolute inset-0 bg-black/35 transition group-hover:bg-black/20" />
                <div className="relative z-10 flex min-h-[108px] flex-col justify-end p-5">
                  <div className="text-[15px] font-medium text-white">{name}</div>
                  <div className="mt-1 text-[12px] text-white/65">{subtitle}</div>
                </div>
              </button>
            ))}
          </div>
          <button onClick={() => { next(); restart(); }} aria-label="Next collection" className="hidden w-16 shrink-0 place-items-center border-l border-white/[.08] text-2xl text-[#d8b466] transition hover:bg-white/5 lg:grid">→</button>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-[145px] left-5 z-30 hidden md:block">
        <div className="relative h-14 w-14 rounded-full border border-white/25 bg-white/10 p-1 shadow-[0_0_35px_rgba(232,191,100,.22)] backdrop-blur-md">
          <div className="h-full w-full rounded-full bg-cover bg-center" style={{ backgroundImage: `url(${current.image})` }} />
        </div>
      </div>
    </section>
  );
}
