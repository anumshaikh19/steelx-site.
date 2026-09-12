import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDownRight, ArrowUpRight, Lightbulb, Menu, MousePointer2, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { PageShell } from "@/components/page-shell";
import { Magnetic } from "@/components/motion";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1782834294783-dff56aa2a540?auto=format&fit=crop&fm=jpg&q=88&w=2400";
const DETAIL_IMAGE =
  "https://images.unsplash.com/photo-1779055660990-53475b256aac?auto=format&fit=crop&fm=jpg&q=88&w=2200";
const SECONDARY_IMAGE =
  "https://images.unsplash.com/photo-1779055660990-53475b256aac?auto=format&fit=crop&fm=jpg&q=82&w=1600";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "STEELX — Light Changes the Space" },
      {
        name: "description",
        content:
          "A cinematic digital flagship for architectural lighting, sculptural chandeliers and bespoke illumination.",
      },
      { property: "og:title", content: "STEELX — Light Changes the Space" },
      {
        property: "og:description",
        content: "Architectural lighting as atmosphere, material and space.",
      },
    ],
  }),
  component: HomePage,
});

function CinematicCursor({ lightsOn }: { lightsOn: boolean }) {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const raf = useRef<number | null>(null);
  const pointer = useRef({ x: -200, y: -200 });
  const ringPosition = useRef({ x: -200, y: -200 });

  useEffect(() => {
    const move = (event: PointerEvent) => {
      pointer.current = { x: event.clientX, y: event.clientY };
      if (dot.current) {
        dot.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      }
    };

    const frame = () => {
      ringPosition.current.x += (pointer.current.x - ringPosition.current.x) * 0.12;
      ringPosition.current.y += (pointer.current.y - ringPosition.current.y) * 0.12;
      if (ring.current) {
        ring.current.style.transform = `translate3d(${ringPosition.current.x}px, ${ringPosition.current.y}px, 0)`;
      }
      raf.current = requestAnimationFrame(frame);
    };

    window.addEventListener("pointermove", move, { passive: true });
    raf.current = requestAnimationFrame(frame);
    return () => {
      window.removeEventListener("pointermove", move);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      <div
        ref={ring}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[90] hidden h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/35 mix-blend-difference transition-[width,height,border-color] duration-300 lg:block"
      >
        <span className="absolute inset-2 rounded-full border border-white/10" />
      </div>
      <div
        ref={dot}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[91] hidden h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFE2A8] shadow-[0_0_18px_8px_rgba(255,226,168,.35)] lg:block"
      />
      <div
        className={`pointer-events-none fixed inset-0 z-[80] hidden lg:block ${lightsOn ? "opacity-100" : "opacity-0"} transition-opacity duration-700`}
        style={{
          background:
            "radial-gradient(280px 280px at var(--mx,50%) var(--my,50%), rgba(255,226,168,.075), transparent 70%)",
        }}
        aria-hidden="true"
      />
    </>
  );
}

function LightField({ lightsOn }: { lightsOn: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    let frame = 0;
    let raf = 0;
    const dots = Array.from({ length: 55 }, (_, index) => ({
      x: (index * 73) % 1000,
      y: (index * 131) % 700,
      r: 0.5 + ((index * 17) % 10) / 10,
      speed: 0.08 + ((index * 7) % 10) / 100,
      phase: index * 0.7,
    }));

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.75);
      canvas.width = Math.floor(canvas.clientWidth * dpr);
      canvas.height = Math.floor(canvas.clientHeight * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      context.clearRect(0, 0, width, height);
      const opacity = lightsOn ? 0.72 : 0.18;
      dots.forEach((dot) => {
        const x = (dot.x + frame * dot.speed) % width;
        const y = (dot.y + Math.sin(frame * 0.003 + dot.phase) * 16) % height;
        const pulse = 0.4 + Math.sin(frame * 0.01 + dot.phase) * 0.3;
        context.beginPath();
        context.fillStyle = `rgba(255,226,168,${Math.max(0.04, opacity * pulse)})`;
        context.arc(x, y, dot.r, 0, Math.PI * 2);
        context.fill();
      });
      frame += 1;
      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    raf = requestAnimationFrame(draw);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, [lightsOn]);

  return <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 h-full w-full opacity-70" aria-hidden="true" />;
}

function LightToggle({ lightsOn, onToggle }: { lightsOn: boolean; onToggle: () => void }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={lightsOn}
      className="group inline-flex items-center gap-3 border border-white/20 bg-black/20 px-4 py-2.5 text-[0.58rem] uppercase tracking-[0.24em] text-white/75 backdrop-blur-md transition-all hover:border-[#FFE2A8]/60 hover:text-white"
    >
      <span className={`relative h-2.5 w-2.5 rounded-full border ${lightsOn ? "border-[#FFE2A8] bg-[#FFE2A8] shadow-[0_0_16px_6px_rgba(255,226,168,.55)]" : "border-white/50"}`} />
      {lightsOn ? "Lights on" : "Lights off"}
      <Lightbulb className="h-3.5 w-3.5 transition-transform duration-500 group-hover:rotate-12" />
    </button>
  );
}

function Hero({ lightsOn, onToggle }: { lightsOn: boolean; onToggle: () => void }) {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const image = imageRef.current;
    if (!hero || !image) return;

    const onMove = (event: PointerEvent) => {
      const rect = hero.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      image.style.transform = `perspective(1400px) rotateX(${y * -2.2}deg) rotateY(${x * 3.2}deg) scale(1.045) translate3d(${x * 12}px, ${y * 10}px, 0)`;
      hero.style.setProperty("--mx", `${(x + 0.5) * 100}%`);
      hero.style.setProperty("--my", `${(y + 0.5) * 100}%`);
    };
    const onLeave = () => {
      image.style.transform = "perspective(1400px) rotateX(0deg) rotateY(0deg) scale(1.03)";
    };

    hero.addEventListener("pointermove", onMove);
    hero.addEventListener("pointerleave", onLeave);
    return () => {
      hero.removeEventListener("pointermove", onMove);
      hero.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-[100svh] overflow-hidden bg-[#0B0B0A] [--mx:50%] [--my:50%]">
      <div
        ref={imageRef}
        className={`absolute -inset-6 bg-cover bg-center transition-[filter,transform] duration-700 ease-out ${lightsOn ? "brightness-100 saturate-[.9]" : "brightness-[.24] saturate-[.55]"}`}
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,transparent_10%,rgba(7,7,6,.18)_48%,rgba(7,7,6,.88)_100%)]" />
      <div className={`absolute inset-0 transition-opacity duration-1000 ${lightsOn ? "opacity-100" : "opacity-0"}`} style={{ background: "radial-gradient(520px 420px at 52% 42%, rgba(255,226,168,.26), transparent 70%)" }} />
      <LightField lightsOn={lightsOn} />

      <div className="relative z-10 flex min-h-[100svh] flex-col justify-end px-5 pb-8 pt-28 sm:px-8 lg:px-12 lg:pb-12">
        <div className="flex items-center justify-between gap-4">
          <div className="max-w-xl">
            <p className="text-[0.6rem] uppercase tracking-[0.38em] text-[#FFE2A8]">Architectural lighting</p>
            <h1 className="mt-6 max-w-3xl font-display text-[3.5rem] leading-[.84] text-white sm:text-7xl lg:text-[8.6rem]">
              LIGHT
              <span className="block text-white/80">CHANGES</span>
              <span className="block italic text-[#FFE2A8]">THE SPACE.</span>
            </h1>
            <p className="mt-8 max-w-md text-sm leading-relaxed text-white/65 sm:text-base">
              Sculptural chandeliers and architectural light designed to change the atmosphere, rhythm and character of a room.
            </p>
          </div>

          <div className="hidden items-end gap-3 lg:flex">
            <LightToggle lightsOn={lightsOn} onToggle={onToggle} />
            <div className="flex h-12 w-12 items-center justify-center border border-white/15 bg-black/20 text-white/60 backdrop-blur-md">
              <MousePointer2 className="h-4 w-4" />
            </div>
          </div>
        </div>

        <div className="mt-12 flex items-end justify-between border-t border-white/15 pt-5">
          <div className="flex items-center gap-3 text-[0.58rem] uppercase tracking-[0.25em] text-white/50">
            <span className="h-px w-8 bg-[#FFE2A8]" />
            Move your cursor through the light
          </div>
          <Link to="/chandelier/" className="hidden items-center gap-2 text-[0.62rem] uppercase tracking-[0.24em] text-white/80 transition-colors hover:text-[#FFE2A8] sm:flex">
            Enter the collection <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

const categories = [
  ["01", "Chandeliers"],
  ["02", "Pendants"],
  ["03", "Table lights"],
  ["04", "Floor lights"],
  ["05", "Wall lights"],
  ["06", "Ceiling lights"],
  ["07", "Outdoor"],
  ["08", "Bespoke"],
];

function HomePage() {
  const [lightsOn, setLightsOn] = useState(true);

  return (
    <PageShell overlayHeader>
      <CinematicCursor lightsOn={lightsOn} />
      <Hero lightsOn={lightsOn} onToggle={() => setLightsOn((value) => !value)} />

      <section className="relative overflow-hidden bg-[#F2EEE6] px-5 py-20 text-[#191817] sm:px-8 lg:px-12 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
          <div>
            <p className="text-[0.58rem] uppercase tracking-[0.3em] text-black/45">Our philosophy</p>
            <h2 className="mt-6 max-w-xl font-display text-4xl leading-[.95] sm:text-6xl">MORE THAN LIGHT. A FORM OF SPACE.</h2>
            <p className="mt-7 max-w-md text-sm leading-relaxed text-black/60">Every piece is conceived as an architectural gesture — a controlled meeting of material, shadow and warm illumination.</p>
          </div>
          <div className="relative min-h-[42vw] overflow-hidden bg-[#D7CEC1] lg:min-h-[30vw]">
            <img src={DETAIL_IMAGE} alt="Luxury chandelier detail" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1600ms] hover:scale-105" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#191817]/30 via-transparent to-[#FFE2A8]/10" />
            <span className="absolute bottom-5 left-5 text-[0.58rem] uppercase tracking-[0.26em] text-white/80">Material · Light · Space</span>
          </div>
        </div>
      </section>

      <section className="bg-[#0B0B0A] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-[0.58rem] uppercase tracking-[0.3em] text-[#FFE2A8]">The collection</p>
            <h2 className="mt-5 font-display text-4xl sm:text-6xl">Timeless forms.<br />Infinite possibilities.</h2>
          </div>
          <Link to="/chandelier/" className="hidden items-center gap-2 text-[0.6rem] uppercase tracking-[0.25em] text-white/65 hover:text-[#FFE2A8] sm:flex">Explore all <ArrowUpRight className="h-4 w-4" /></Link>
        </div>
        <div className="mt-12 grid grid-cols-2 border-l border-white/10 md:grid-cols-4 lg:grid-cols-8">
          {categories.map(([number, name], index) => (
            <Link key={name} to="/chandelier/" className="group relative border-b border-r border-t border-white/10 p-5 transition-colors hover:bg-white/[.035] lg:min-h-64">
              <span className="text-[0.55rem] tracking-[0.22em] text-white/35">{number}</span>
              <div className="absolute inset-x-5 bottom-5">
                <div className={`mb-5 aspect-[3/4] overflow-hidden bg-[#191817] ${index % 2 ? "rotate-1" : "-rotate-1"}`}>
                  <img src={index % 2 ? DETAIL_IMAGE : HERO_IMAGE} alt={name} loading="lazy" className="h-full w-full object-cover opacity-75 transition duration-700 group-hover:scale-110 group-hover:opacity-100" />
                </div>
                <span className="block text-[0.55rem] uppercase tracking-[0.18em] text-white/75">{name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#191817] px-5 py-0 text-white sm:px-8 lg:px-12">
        <div className="grid min-h-[75svh] lg:grid-cols-[1.15fr_.85fr]">
          <div className="relative min-h-[55svh] overflow-hidden">
            <img src={DETAIL_IMAGE} alt="Sculptural chandelier close-up" className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ${lightsOn ? "brightness-100" : "brightness-[.25]"}`} />
            <div className={`absolute inset-0 transition-opacity duration-1000 ${lightsOn ? "opacity-100" : "opacity-0"}`} style={{ background: "radial-gradient(circle at 45% 48%, rgba(255,226,168,.3), transparent 38%)" }} />
            <div className="absolute left-5 top-5 flex items-center gap-2 text-[0.55rem] uppercase tracking-[0.24em] text-white/60">
              <Sparkles className="h-3.5 w-3.5 text-[#FFE2A8]" /> The object
            </div>
          </div>
          <div className="flex flex-col justify-center px-0 py-16 lg:px-16 lg:py-24">
            <p className="text-[0.58rem] uppercase tracking-[0.3em] text-[#FFE2A8]">Featured object</p>
            <h2 className="mt-5 max-w-lg font-display text-5xl leading-[.9] sm:text-7xl">The Celeste Chandelier</h2>
            <p className="mt-7 max-w-md text-sm leading-relaxed text-white/55">A sculptural interplay of hand-finished metal and luminous glass, designed to float between architecture and atmosphere.</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <LightToggle lightsOn={lightsOn} onToggle={() => setLightsOn((value) => !value)} />
              <Magnetic>
                <Link to="/chandelier/" className="inline-flex items-center gap-2 border border-white/15 px-5 py-3 text-[0.58rem] uppercase tracking-[0.2em] text-white/70 hover:border-[#FFE2A8]/50 hover:text-white">View object <ArrowUpRight className="h-4 w-4" /></Link>
              </Magnetic>
            </div>
            <div className="mt-16 grid grid-cols-3 border-t border-white/10 pt-5 text-[0.55rem] uppercase tracking-[0.18em] text-white/40">
              <span>Hand-finished brass</span><span>Warm 2700K</span><span>Custom scale</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F2EEE6] px-5 py-20 text-[#191817] sm:px-8 lg:px-12 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[.65fr_1.35fr]">
          <div>
            <p className="text-[0.58rem] uppercase tracking-[0.3em] text-black/45">Light in space</p>
            <h2 className="mt-5 font-display text-4xl leading-[.95] sm:text-6xl">Four environments.<br />Endless atmospheres.</h2>
            <p className="mt-7 max-w-sm text-sm leading-relaxed text-black/55">Residential, hospitality, retail and architectural spaces — each composed around the way light is felt, not simply measured.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {["Residential", "Hospitality", "Retail", "Architectural"].map((label, index) => (
              <article key={label} className="group relative aspect-[4/3] overflow-hidden bg-[#D7CEC1]">
                <img src={index % 2 ? SECONDARY_IMAGE : HERO_IMAGE} alt={`${label} lighting interior`} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1300ms] group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
                <div className="absolute inset-x-5 bottom-5 flex items-end justify-between text-white">
                  <div>
                    <p className="text-[0.52rem] uppercase tracking-[0.24em] text-white/55">0{index + 1}</p>
                    <h3 className="mt-2 font-display text-2xl">{label}</h3>
                  </div>
                  <ArrowUpRight className="h-5 w-5 opacity-60 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0B0B0A] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-36">
        <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 70% 50%, rgba(255,226,168,.18), transparent 35%)" }} />
        <div className="relative z-10 mx-auto max-w-6xl text-center">
          <p className="text-[0.58rem] uppercase tracking-[0.35em] text-[#FFE2A8]">The lighting transformation</p>
          <h2 className="mx-auto mt-6 max-w-4xl font-display text-5xl leading-[.9] sm:text-7xl lg:text-8xl">SAME SPACE.<br /><span className="italic text-white/55">DIFFERENT FEEL.</span></h2>
          <div className="mx-auto mt-14 max-w-3xl overflow-hidden border border-white/10">
            <div className="relative aspect-[16/7]">
              <img src={SECONDARY_IMAGE} alt="Warmly illuminated luxury interior" className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ${lightsOn ? "brightness-100" : "brightness-[.18] grayscale-[.35]"}`} />
              <div className={`absolute inset-0 transition-opacity duration-1000 ${lightsOn ? "opacity-100" : "opacity-0"}`} style={{ background: "linear-gradient(90deg, transparent, rgba(255,226,168,.24), transparent)" }} />
              <button type="button" onClick={() => setLightsOn((value) => !value)} className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-3 border border-white/20 bg-black/45 px-5 py-3 text-[0.58rem] uppercase tracking-[0.24em] backdrop-blur-md hover:border-[#FFE2A8]/60">
                <span>{lightsOn ? "Atmosphere" : "Dark"}</span>
                <span className="h-px w-10 bg-white/30" />
                <span>{lightsOn ? "Light" : "Switch on"}</span>
              </button>
            </div>
          </div>
          <p className="mx-auto mt-8 max-w-lg text-sm leading-relaxed text-white/45">Turn the light off. Turn it back on. The room stays the same. The experience doesn't.</p>
        </div>
      </section>

      <section className="bg-[#F2EEE6] px-5 py-24 text-[#191817] sm:px-8 lg:px-12 lg:py-32">
        <div className="flex flex-col items-start justify-between gap-10 border-b border-black/15 pb-12 md:flex-row md:items-end">
          <div>
            <p className="text-[0.58rem] uppercase tracking-[0.3em] text-black/45">Bespoke</p>
            <h2 className="mt-5 max-w-3xl font-display text-5xl leading-[.9] sm:text-7xl">Some spaces require something extraordinary.</h2>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 border border-black/20 px-6 py-3 text-[0.6rem] uppercase tracking-[0.22em] hover:border-black/60">Work with our design team <ArrowUpRight className="h-4 w-4" /></Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            ["01", "Concept", "Scale, rhythm and light mapped to the architecture."],
            ["02", "Craft", "Materials, glass, brass and finishes refined by hand."],
            ["03", "Installation", "A complete lighting object delivered and commissioned."],
          ].map(([number, title, text]) => (
            <div key={number} className="border-t border-black/15 pt-5">
              <span className="text-[0.55rem] tracking-[0.2em] text-black/40">{number}</span>
              <h3 className="mt-10 font-display text-3xl">{title}</h3>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-black/55">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative min-h-[70svh] overflow-hidden bg-[#0B0B0A] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32">
        <img src={HERO_IMAGE} alt="Chandelier glowing in a dark architectural interior" className="absolute inset-0 h-full w-full object-cover opacity-35" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0A] via-[#0B0B0A]/35 to-[#0B0B0A]/60" />
        <div className="relative z-10 flex min-h-[45svh] flex-col justify-end">
          <p className="text-[0.58rem] uppercase tracking-[0.35em] text-[#FFE2A8]">The next room</p>
          <h2 className="mt-5 max-w-5xl font-display text-6xl leading-[.82] sm:text-8xl lg:text-[9rem]">LET THERE<br /><span className="italic text-[#FFE2A8]">BE ATMOSPHERE.</span></h2>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Magnetic>
              <Link to="/chandelier/" className="inline-flex items-center gap-2 bg-[#FFE2A8] px-7 py-4 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#191817]">Explore lighting <ArrowUpRight className="h-4 w-4" /></Link>
            </Magnetic>
            <Link to="/contact" className="inline-flex items-center gap-2 border border-white/20 px-7 py-4 text-[0.62rem] uppercase tracking-[0.2em] text-white/75 hover:border-[#FFE2A8]/60 hover:text-white">Start a bespoke project <ArrowUpRight className="h-4 w-4" /></Link>
          </div>
          <div className="mt-16 flex items-center gap-3 text-[0.55rem] uppercase tracking-[0.22em] text-white/35"><ArrowDownRight className="h-4 w-4 text-[#FFE2A8]" /> Scroll to enter the world of light</div>
        </div>
      </section>
    </PageShell>
  );
}
