import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Lightbulb, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { PageShell } from "@/components/page-shell";
import { WebGLChandelier } from "@/components/chandelier/webgl-chandelier";

const INTERIOR_IMAGE = "https://images.unsplash.com/photo-1782834294783-dff56aa2a540?auto=format&fit=crop&fm=jpg&q=90&w=2400";
const DETAIL_IMAGE = "https://images.unsplash.com/photo-1779055660990-53475b256aac?auto=format&fit=crop&fm=jpg&q=90&w=2200";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "STEELX — Light Changes the Space" },
      { name: "description", content: "Sculptural architectural lighting, chandeliers and bespoke illumination." },
    ],
  }),
  component: HomePage,
});

function CursorLight({ enabled }: { enabled: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const move = (event: PointerEvent) => {
      el.style.setProperty("--x", `${event.clientX}px`);
      el.style.setProperty("--y", `${event.clientY}px`);
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, []);
  return (
    <div
      ref={ref}
      className={`pointer-events-none fixed inset-0 z-[70] hidden lg:block transition-opacity duration-700 ${enabled ? "opacity-100" : "opacity-0"}`}
      style={{ background: "radial-gradient(180px 180px at var(--x,50%) var(--y,50%), rgba(255,226,168,.10), transparent 72%)" }}
      aria-hidden="true"
    />
  );
}

function Toggle({ on, setOn }: { on: boolean; setOn: (value: boolean) => void }) {
  return (
    <button
      type="button"
      onClick={() => setOn(!on)}
      aria-pressed={on}
      className="group flex items-center gap-3 border border-white/20 bg-black/35 px-4 py-3 text-[0.58rem] uppercase tracking-[0.24em] text-white/80 backdrop-blur-xl transition-all hover:border-[#FFE2A8]/70"
    >
      <span className={`h-2.5 w-2.5 rounded-full border transition-all duration-500 ${on ? "border-[#FFE2A8] bg-[#FFE2A8] shadow-[0_0_18px_7px_rgba(255,226,168,.5)]" : "border-white/40"}`} />
      <span>{on ? "Lights on" : "Lights off"}</span>
      <Lightbulb className="h-4 w-4 transition-transform duration-500 group-hover:rotate-12" />
    </button>
  );
}

function HomePage() {
  const [lightsOn, setLightsOn] = useState(true);

  return (
    <PageShell overlayHeader>
      <CursorLight enabled={lightsOn} />

      <section className="relative min-h-[100svh] overflow-hidden bg-[#070706] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(255,226,168,.08),transparent_35%),linear-gradient(180deg,#050504_0%,#0b0a08_100%)]" />
        <div className={`absolute inset-0 transition-opacity duration-[1400ms] ${lightsOn ? "opacity-100" : "opacity-0"}`} style={{ background: "radial-gradient(circle at 50% 48%, rgba(255,190,75,.16), transparent 32%)" }} />
        <WebGLChandelier lightsOn={lightsOn} />

        <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_22%,rgba(0,0,0,.38)_72%,rgba(0,0,0,.8)_100%)]" />
        <div className="relative z-20 flex min-h-[100svh] flex-col justify-between px-5 pb-7 pt-32 sm:px-8 lg:px-12 lg:pb-10">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="text-[0.58rem] uppercase tracking-[0.38em] text-[#FFE2A8]">STEELX / LIGHT STUDIO</p>
              <p className="mt-3 max-w-xs text-[0.68rem] leading-relaxed text-white/40">Architectural illumination as object, atmosphere and spatial experience.</p>
            </div>
            <Toggle on={lightsOn} setOn={setLightsOn} />
          </div>

          <div className="pointer-events-none mx-auto w-full max-w-[1500px] text-center">
            <p className="text-[0.58rem] uppercase tracking-[0.42em] text-white/45">A new dimension of light</p>
            <h1 className="mt-5 font-display text-[3.8rem] leading-[.78] sm:text-7xl lg:text-[9rem]">
              LIGHT
              <span className="block text-white/70">CHANGES</span>
              <span className="block italic text-[#FFE2A8]">THE SPACE.</span>
            </h1>
          </div>

          <div className="flex items-end justify-between gap-6 border-t border-white/15 pt-5">
            <div className="flex items-center gap-3 text-[0.56rem] uppercase tracking-[0.25em] text-white/40">
              <Sparkles className="h-3.5 w-3.5 text-[#FFE2A8]" />
              Move your cursor — the chandelier follows
            </div>
            <Link to="/chandelier/" className="hidden items-center gap-2 text-[0.6rem] uppercase tracking-[0.25em] text-white/75 transition-colors hover:text-[#FFE2A8] sm:flex">
              Enter the world of light <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F2EEE6] px-5 py-20 text-[#191817] sm:px-8 lg:px-12 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
          <div>
            <p className="text-[0.58rem] uppercase tracking-[0.3em] text-black/45">The philosophy</p>
            <h2 className="mt-6 max-w-xl font-display text-4xl leading-[.92] sm:text-6xl">MORE THAN LIGHT.<br />A FORM OF SPACE.</h2>
            <p className="mt-7 max-w-md text-sm leading-relaxed text-black/55">We design light as architecture — balancing reflection, shadow, material and warmth until a room becomes an experience.</p>
          </div>
          <div className="relative aspect-[16/9] overflow-hidden bg-[#d7cec1]">
            <img src={INTERIOR_IMAGE} alt="Luxury architectural interior illuminated by a chandelier" className="h-full w-full object-cover transition-transform duration-[1600ms] hover:scale-105" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-[#FFE2A8]/10" />
            <span className="absolute bottom-5 left-5 text-[0.55rem] uppercase tracking-[0.25em] text-white/80">Material / Light / Space</span>
          </div>
        </div>
      </section>

      <section className="bg-[#0B0B0A] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-[0.58rem] uppercase tracking-[0.3em] text-[#FFE2A8]">The collection</p>
            <h2 className="mt-5 font-display text-4xl leading-[.9] sm:text-6xl">Objects of illumination.</h2>
          </div>
          <Link to="/chandelier/" className="hidden items-center gap-2 text-[0.6rem] uppercase tracking-[0.22em] text-white/60 hover:text-[#FFE2A8] sm:flex">Explore collection <ArrowUpRight className="h-4 w-4" /></Link>
        </div>
        <div className="mt-12 grid grid-cols-2 border-l border-white/10 md:grid-cols-4 lg:grid-cols-8">
          {["Chandeliers", "Pendants", "Table lights", "Floor lights", "Wall lights", "Ceiling lights", "Outdoor", "Bespoke"].map((name, index) => (
            <Link key={name} to="/chandelier/" className="group relative min-h-48 border-b border-r border-t border-white/10 p-5 transition-colors hover:bg-white/[.035] lg:min-h-64">
              <span className="text-[0.52rem] tracking-[0.22em] text-white/30">0{index + 1}</span>
              <div className="absolute inset-x-5 bottom-5">
                <div className="mb-5 aspect-[4/3] overflow-hidden bg-[#171614]">
                  <img src={index % 2 ? DETAIL_IMAGE : INTERIOR_IMAGE} alt={name} loading="lazy" className="h-full w-full object-cover opacity-65 transition duration-700 group-hover:scale-110 group-hover:opacity-100" />
                </div>
                <span className="text-[0.53rem] uppercase tracking-[0.18em] text-white/70">{name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="relative min-h-[78svh] overflow-hidden bg-[#191817] text-white">
        <img src={DETAIL_IMAGE} alt="Sculptural chandelier in a luxury interior" className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ${lightsOn ? "brightness-90" : "brightness-[.18]"}`} loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0A] via-[#0B0B0A]/25 to-[#0B0B0A]/60" />
        <div className="relative z-10 flex min-h-[78svh] flex-col justify-end px-5 pb-10 sm:px-8 lg:px-12 lg:pb-14">
          <p className="text-[0.58rem] uppercase tracking-[0.3em] text-[#FFE2A8]">Bespoke lighting</p>
          <h2 className="mt-5 max-w-5xl font-display text-5xl leading-[.84] sm:text-7xl lg:text-[8rem]">SOME SPACES<br /><span className="italic text-[#FFE2A8]">REQUIRE MORE.</span></h2>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-[#FFE2A8] px-6 py-4 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-[#191817]">Start a project <ArrowUpRight className="h-4 w-4" /></Link>
            <Toggle on={lightsOn} setOn={setLightsOn} />
          </div>
        </div>
      </section>

      <section className="bg-[#F2EEE6] px-5 py-24 text-[#191817] sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-[0.58rem] uppercase tracking-[0.35em] text-black/45">The experience</p>
          <h2 className="mt-6 font-display text-5xl leading-[.86] sm:text-7xl lg:text-8xl">LET THERE<br /><span className="italic">BE ATMOSPHERE.</span></h2>
          <p className="mx-auto mt-8 max-w-lg text-sm leading-relaxed text-black/50">Turn the light off. Watch the object disappear. Turn it on. Let the room come alive.</p>
          <Link to="/chandelier/" className="mt-10 inline-flex items-center gap-2 border border-black/20 px-7 py-4 text-[0.6rem] uppercase tracking-[0.22em] hover:border-black/60">Explore the world of light <ArrowUpRight className="h-4 w-4" /></Link>
        </div>
        <div className="mx-auto mt-16 flex items-center justify-center gap-3 text-[0.55rem] uppercase tracking-[0.25em] text-black/35"><ArrowDown className="h-4 w-4" /> Scroll / move / interact</div>
      </section>
    </PageShell>
  );
}
