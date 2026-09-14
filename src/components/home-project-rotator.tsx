import { useEffect, useMemo, useState } from "react";
import type { Project } from "@/data/projects";

type Slide = {
  project: Project;
  kind: "image" | "video";
  video?: string;
};

export function HomeProjectRotator({ projects }: { projects: Project[] }) {
  const slides = useMemo<Slide[]>(() => {
    const residential = projects.find((p) => p.slug === "nikhil-gupta-residence");
    const hotel = projects.find((p) => p.slug === "the-vira-hotel-lobby");
    const retail = projects.find((p) => p.slug === "aurum-flagship-store");
    const facade = projects.find((p) => p.slug === "qudrati-greens");
    return [residential, hotel, retail, facade].filter(Boolean).map((project, index) => ({
      project: project!,
      kind: index === 0 ? "video" : "image",
      video: index === 0 ? "https://videos.pexels.com/video-files/3139195/3139195-hd_1920_1080_30fps.mp4" : undefined,
    }));
  }, [projects]);

  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || slides.length < 2) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % slides.length), 5600);
    return () => window.clearInterval(timer);
  }, [paused, slides.length]);

  if (!slides.length) return null;

  const current = slides[active]!;

  return (
    <section
      className="steelx-project-rotator"
      aria-label="Featured luxury residence and architectural metal projects"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="steelx-rotator-top">
        <div>
          <p className="steelx-rotator-kicker">STEELX / SIGNATURE INSTALLATIONS</p>
          <h2>Luxury spaces, finished in steel.</h2>
        </div>
        <p className="steelx-rotator-note">Residential · Hospitality · Retail · Architectural surfaces</p>
      </div>

      <div className="steelx-rotator-scene">
        <div className="steelx-rotator-halo" />
        <div className="steelx-rotator-orbit steelx-rotator-orbit-a" />
        <div className="steelx-rotator-orbit steelx-rotator-orbit-b" />

        {slides.map((slide, index) => {
          const offset = (index - active + slides.length) % slides.length;
          const normalized = offset === slides.length - 1 ? -1 : offset;
          const state = normalized === 0 ? "active" : normalized === 1 ? "next" : normalized === -1 ? "prev" : "far";
          return (
            <article
              key={slide.project.slug}
              className={`steelx-rotator-card steelx-rotator-card-${state}`}
              aria-hidden={state !== "active"}
            >
              <div className="steelx-rotator-media">
                {slide.kind === "video" && slide.video ? (
                  <video
                    key={slide.video}
                    className="steelx-rotator-video"
                    src={slide.video}
                    poster={slide.project.coverImage}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />
                ) : (
                  <img src={slide.project.coverImage} alt={`${slide.project.title} — ${slide.project.finish}`} />
                )}
                <div className="steelx-rotator-image-pan" />
                <div className="steelx-rotator-shade" />
                <span className="steelx-rotator-material">{slide.project.finish}</span>
              </div>
              <div className="steelx-rotator-caption">
                <div>
                  <span>{slide.project.category} · {slide.project.location}</span>
                  <h3>{slide.project.title}</h3>
                </div>
                <span className="steelx-rotator-arrow">↗</span>
              </div>
            </article>
          );
        })}
      </div>

      <div className="steelx-rotator-controls">
        <button type="button" aria-label="Previous project" onClick={() => setActive((active - 1 + slides.length) % slides.length)}>←</button>
        <div className="steelx-rotator-progress" aria-label="Project slides">
          {slides.map((slide, index) => (
            <button
              type="button"
              key={slide.project.slug}
              aria-label={`Show ${slide.project.title}`}
              aria-current={active === index}
              onClick={() => setActive(index)}
            >
              <span />
            </button>
          ))}
        </div>
        <button type="button" aria-label="Next project" onClick={() => setActive((active + 1) % slides.length)}>→</button>
        <span className="steelx-rotator-counter">0{active + 1} / 0{slides.length}</span>
      </div>

      <style>{`
        .steelx-project-rotator{position:relative;overflow:hidden;background:#090a0b;color:#f4f1e9;padding:clamp(70px,9vw,140px) 0;border-top:1px solid rgba(255,255,255,.1);border-bottom:1px solid rgba(255,255,255,.1);isolation:isolate}
        .steelx-rotator-top{width:min(1500px,92vw);margin:0 auto;display:flex;justify-content:space-between;align-items:flex-end;gap:30px;position:relative;z-index:5}
        .steelx-rotator-kicker{font-size:10px;letter-spacing:.32em;text-transform:uppercase;color:#d6b56a;margin:0 0 14px;font-weight:600}
        .steelx-rotator-top h2{font-family:Georgia,'Times New Roman',serif;font-size:clamp(34px,5vw,78px);font-weight:400;line-height:.95;letter-spacing:-.045em;margin:0;max-width:760px}
        .steelx-rotator-note{max-width:280px;font-size:11px;line-height:1.6;letter-spacing:.12em;text-transform:uppercase;color:#858585;text-align:right;margin:0}
        .steelx-rotator-scene{height:clamp(500px,48vw,720px);width:100%;position:relative;margin:55px 0 35px;perspective:1800px;transform-style:preserve-3d}
        .steelx-rotator-halo{position:absolute;left:50%;top:50%;width:45vw;height:45vw;max-width:650px;max-height:650px;transform:translate(-50%,-50%);border-radius:50%;background:radial-gradient(circle,rgba(198,158,77,.13),rgba(198,158,77,0) 68%);filter:blur(10px);pointer-events:none}
        .steelx-rotator-orbit{position:absolute;left:50%;top:50%;width:min(92vw,1200px);height:72%;border:1px solid rgba(214,181,106,.16);border-radius:50%;transform:translate(-50%,-50%) rotate(-9deg);pointer-events:none}
        .steelx-rotator-orbit-a{animation:steelxOrbit 14s linear infinite}.steelx-rotator-orbit-b{width:min(72vw,900px);height:48%;transform:translate(-50%,-50%) rotate(18deg);border-color:rgba(255,255,255,.07);animation:steelxOrbitReverse 18s linear infinite}
        .steelx-rotator-card{position:absolute;left:50%;top:50%;width:min(62vw,780px);height:min(43vw,535px);border:1px solid rgba(255,255,255,.2);background:#111;box-shadow:0 35px 100px rgba(0,0,0,.55);transform-style:preserve-3d;transition:transform 1100ms cubic-bezier(.16,1,.3,1),opacity 800ms ease,filter 900ms ease;overflow:hidden;border-radius:2px}
        .steelx-rotator-card-active{transform:translate3d(-50%,-50%,100px) rotateY(0deg) rotateX(0deg) scale(1);z-index:4;opacity:1;filter:brightness(1)}
        .steelx-rotator-card-next{transform:translate3d(28%,-46%,-100px) rotateY(-23deg) rotateX(2deg) scale(.72);z-index:2;opacity:.42;filter:brightness(.42)}
        .steelx-rotator-card-prev{transform:translate3d(-128%,-46%,-100px) rotateY(23deg) rotateX(2deg) scale(.72);z-index:2;opacity:.42;filter:brightness(.42)}
        .steelx-rotator-card-far{transform:translate3d(-50%,-50%,-500px) rotateY(0deg) scale(.5);z-index:0;opacity:0;pointer-events:none}
        .steelx-rotator-media{height:100%;position:relative;overflow:hidden;background:#171717}
        .steelx-rotator-media img,.steelx-rotator-video{height:100%;width:100%;object-fit:cover;display:block;filter:saturate(.78) contrast(1.08);transition:filter 900ms ease,transform 9000ms cubic-bezier(.16,1,.3,1)}
        .steelx-rotator-card-active .steelx-rotator-media img,.steelx-rotator-card-active .steelx-rotator-video{filter:saturate(1.05) contrast(1.05);transform:scale(1.055)}
        .steelx-rotator-image-pan{position:absolute;inset:0;background:linear-gradient(100deg,rgba(214,181,106,.08),transparent 35%,rgba(255,255,255,.04) 65%,transparent);mix-blend-mode:screen;animation:steelxSweep 6s ease-in-out infinite}
        .steelx-rotator-shade{position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.08),transparent 40%,rgba(0,0,0,.78) 100%)}
        .steelx-rotator-material{position:absolute;right:22px;top:22px;border:1px solid rgba(255,255,255,.28);background:rgba(5,5,5,.28);backdrop-filter:blur(12px);padding:9px 12px;font-size:9px;text-transform:uppercase;letter-spacing:.18em;color:#eee}
        .steelx-rotator-caption{position:absolute;left:28px;right:28px;bottom:25px;display:flex;justify-content:space-between;align-items:flex-end;z-index:3}
        .steelx-rotator-caption span{font-size:9px;letter-spacing:.18em;text-transform:uppercase;color:#d5d1c7}
        .steelx-rotator-caption h3{font-family:Georgia,'Times New Roman',serif;font-size:clamp(25px,3vw,45px);font-weight:400;margin:8px 0 0;color:#fff}
        .steelx-rotator-arrow{width:48px;height:48px;border:1px solid rgba(255,255,255,.35);border-radius:50%;display:grid;place-items:center;font-size:20px!important;letter-spacing:0!important;transition:background .3s ease,transform .3s ease}.steelx-rotator-card-active:hover .steelx-rotator-arrow{background:#d6b56a;color:#111;transform:rotate(45deg)}
        .steelx-rotator-controls{width:min(1500px,92vw);margin:0 auto;display:flex;align-items:center;gap:18px;position:relative;z-index:5}.steelx-rotator-controls>button{width:42px;height:42px;border:1px solid rgba(255,255,255,.22);background:transparent;color:#fff;border-radius:50%;cursor:pointer;transition:.3s}.steelx-rotator-controls>button:hover{background:#d6b56a;color:#111;border-color:#d6b56a}.steelx-rotator-progress{display:flex;align-items:center;gap:7px;flex:1}.steelx-rotator-progress button{height:18px;flex:1;max-width:100px;background:transparent;border:0;padding:0;cursor:pointer}.steelx-rotator-progress button span{display:block;height:1px;background:rgba(255,255,255,.22);position:relative;overflow:hidden}.steelx-rotator-progress button[aria-current=true] span{background:#d6b56a;height:2px}.steelx-rotator-counter{font-size:9px;letter-spacing:.2em;color:#858585;white-space:nowrap}
        @keyframes steelxSweep{0%,100%{transform:translateX(-18%);opacity:.25}50%{transform:translateX(18%);opacity:.7}}@keyframes steelxOrbit{to{transform:translate(-50%,-50%) rotate(351deg)}}@keyframes steelxOrbitReverse{to{transform:translate(-50%,-50%) rotate(-342deg)}}
        @media(max-width:800px){.steelx-rotator-top{display:block}.steelx-rotator-note{text-align:left;margin-top:18px}.steelx-rotator-scene{height:470px;margin-top:38px}.steelx-rotator-card{width:78vw;height:58vw}.steelx-rotator-card-next{transform:translate3d(38%,-46%,-100px) rotateY(-19deg) scale(.72)}.steelx-rotator-card-prev{transform:translate3d(-138%,-46%,-100px) rotateY(19deg) scale(.72)}.steelx-rotator-caption{left:18px;right:18px;bottom:18px}.steelx-rotator-material{right:14px;top:14px}.steelx-rotator-counter{display:none}}
        @media(prefers-reduced-motion:reduce){.steelx-rotator-orbit,.steelx-rotator-image-pan{animation:none}.steelx-rotator-card,.steelx-rotator-media img,.steelx-rotator-video{transition-duration:1ms}}
      `}</style>
    </section>
  );
}
