import { useEffect, useMemo, useState } from "react";
import type { CSSProperties } from "react";
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
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (paused || slides.length < 2) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % slides.length), 5600);
    return () => window.clearInterval(timer);
  }, [paused, slides.length]);

  if (!slides.length) return null;

  const current = slides[active]!;
  const rootStyle = {
    "--px": `${pointer.x}px`,
    "--py": `${pointer.y}px`,
  } as CSSProperties;

  return (
    <section
      className="steelx-project-rotator"
      style={rootStyle}
      aria-label="SteelX signature installations"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => {
        setPaused(false);
        setPointer({ x: 0, y: 0 });
      }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
        const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
        setPointer({ x: x * 12, y: y * 10 });
      }}
    >
      <div className="steelx-rotator-noise" aria-hidden="true" />
      <div className="steelx-rotator-glow steelx-rotator-glow-one" aria-hidden="true" />
      <div className="steelx-rotator-glow steelx-rotator-glow-two" aria-hidden="true" />
      <div className="steelx-rotator-grid" aria-hidden="true" />

      <div className="steelx-opening-copy">
        <div className="steelx-opening-topline">
          <span>STEELX</span>
          <span>ARCHITECTURAL METAL / 01—04</span>
        </div>
        <div className="steelx-opening-main">
          <div className="steelx-opening-eyebrow">PVD · STAINLESS · SIGNATURE INSTALLATIONS</div>
          <h1>
            SURFACES
            <span>ENGINEERED</span>
            TO LAST.
          </h1>
          <p>
            Material intelligence for extraordinary spaces — precision coated, fabricated and installed for the world of luxury.
          </p>
          <div className="steelx-opening-actions">
            <a href="#signature-installations">Explore installations <span>↗</span></a>
            <span className="steelx-opening-scroll">SCROLL TO EXPLORE <i /></span>
          </div>
        </div>
      </div>

      <div className="steelx-rotator-stage" id="signature-installations">
        <div className="steelx-rotator-halo" />
        <div className="steelx-rotator-orbit steelx-rotator-orbit-a" />
        <div className="steelx-rotator-orbit steelx-rotator-orbit-b" />

        <div className="steelx-stage-index">
          <span>FEATURED INSTALLATION</span>
          <strong>0{active + 1}</strong>
        </div>

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
                <div className="steelx-rotator-vignette" />
                <div className="steelx-rotator-light" />
                <span className="steelx-rotator-material">{slide.project.finish}</span>
              </div>
              <div className="steelx-rotator-caption">
                <div>
                  <span>{slide.project.category} · {slide.project.location}</span>
                  <h2>{slide.project.title}</h2>
                </div>
                <span className="steelx-rotator-arrow">↗</span>
              </div>
            </article>
          );
        })}

        <div className="steelx-floating-label steelx-floating-label-a">CRAFTED / CONTROLLED / COATED</div>
        <div className="steelx-floating-label steelx-floating-label-b">MATERIAL No. 001</div>
      </div>

      <div className="steelx-opening-bottom">
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
        </div>
        <div className="steelx-opening-current">
          <span>NOW SHOWING</span>
          <strong>{current.project.title}</strong>
        </div>
        <span className="steelx-opening-counter">0{active + 1} / 0{slides.length}</span>
      </div>

      <style>{`
        .steelx-project-rotator{position:relative;overflow:hidden;min-height:100svh;margin-top:-100svh;background:#070809;color:#f5f1e8;border-bottom:1px solid rgba(255,255,255,.12);isolation:isolate;--gold:#d6b56a;--cream:#f5f1e8;--muted:#898989}
        .steelx-rotator-noise{position:absolute;inset:0;opacity:.055;pointer-events:none;z-index:1;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.55'/%3E%3C/svg%3E")}
        .steelx-rotator-grid{position:absolute;inset:0;z-index:0;opacity:.11;background-image:linear-gradient(rgba(255,255,255,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.07) 1px,transparent 1px);background-size:80px 80px;mask-image:linear-gradient(to bottom,black,transparent 78%)}
        .steelx-rotator-glow{position:absolute;border-radius:50%;pointer-events:none;filter:blur(2px);z-index:0}.steelx-rotator-glow-one{width:52vw;height:52vw;left:50%;top:44%;transform:translate(-50%,-50%);background:radial-gradient(circle,rgba(214,181,106,.14),transparent 66%);animation:steelxGlow 7s ease-in-out infinite}.steelx-rotator-glow-two{width:35vw;height:35vw;left:83%;top:8%;background:radial-gradient(circle,rgba(255,255,255,.055),transparent 68%);animation:steelxGlowTwo 10s ease-in-out infinite}
        .steelx-opening-copy{position:relative;z-index:8;width:min(1500px,92vw);height:100svh;margin:0 auto;padding:28px 0 30px;display:flex;flex-direction:column;justify-content:space-between;pointer-events:none}
        .steelx-opening-topline{display:flex;justify-content:space-between;align-items:center;font-size:9px;letter-spacing:.28em;text-transform:uppercase;color:rgba(245,241,232,.62)}.steelx-opening-topline span:first-child{font-size:13px;color:#fff;letter-spacing:.18em;font-weight:700}.steelx-opening-topline span:last-child{color:var(--gold)}
        .steelx-opening-main{max-width:690px;transform:translate3d(calc(var(--px) * -.25),calc(var(--py) * -.2),0);transition:transform .8s cubic-bezier(.16,1,.3,1)}
        .steelx-opening-eyebrow{font-size:9px;letter-spacing:.32em;color:var(--gold);text-transform:uppercase;margin-bottom:22px}.steelx-opening-main h1{font-family:Georgia,'Times New Roman',serif;font-weight:400;font-size:clamp(55px,8vw,124px);line-height:.82;letter-spacing:-.06em;margin:0;text-wrap:balance}.steelx-opening-main h1 span{display:block;background:linear-gradient(100deg,#f4f0e5 15%,#d6b56a 48%,#fff 75%);background-size:200% auto;color:transparent;background-clip:text;-webkit-background-clip:text;animation:steelxMetalText 8s linear infinite}.steelx-opening-main p{max-width:500px;margin:28px 0 0;font-size:14px;line-height:1.75;color:rgba(245,241,232,.62)}
        .steelx-opening-actions{display:flex;align-items:center;gap:26px;margin-top:32px;pointer-events:auto}.steelx-opening-actions a{display:inline-flex;align-items:center;gap:20px;padding:14px 0;border-bottom:1px solid rgba(214,181,106,.7);font-size:10px;font-weight:600;letter-spacing:.2em;text-transform:uppercase;color:#fff}.steelx-opening-actions a span{font-size:18px;transition:transform .3s ease}.steelx-opening-actions a:hover span{transform:translate(4px,-4px)}.steelx-opening-scroll{display:flex;align-items:center;gap:10px;font-size:8px;letter-spacing:.22em;color:#666;text-transform:uppercase}.steelx-opening-scroll i{display:block;width:32px;height:1px;background:#555}
        .steelx-rotator-stage{position:absolute;z-index:3;inset:18% 0 12%;perspective:1800px;transform-style:preserve-3d;pointer-events:none}.steelx-rotator-halo{position:absolute;left:50%;top:51%;width:min(50vw,760px);height:min(50vw,760px);transform:translate(-50%,-50%);border-radius:50%;background:radial-gradient(circle,rgba(214,181,106,.13),rgba(214,181,106,0) 68%);filter:blur(8px)}.steelx-rotator-orbit{position:absolute;left:50%;top:52%;width:min(91vw,1400px);height:70%;border:1px solid rgba(214,181,106,.13);border-radius:50%;transform:translate(-50%,-50%) rotate(-9deg);animation:steelxOrbit 18s linear infinite}.steelx-rotator-orbit-b{width:min(68vw,1040px);height:48%;transform:translate(-50%,-50%) rotate(18deg);border-color:rgba(255,255,255,.055);animation:steelxOrbitReverse 24s linear infinite}
        .steelx-rotator-card{position:absolute;left:50%;top:52%;width:min(57vw,820px);height:min(37vw,535px);overflow:hidden;border:1px solid rgba(255,255,255,.22);border-radius:2px;background:#111;box-shadow:0 50px 130px rgba(0,0,0,.72);transform-style:preserve-3d;transition:transform 1150ms cubic-bezier(.16,1,.3,1),opacity 850ms ease,filter 900ms ease;pointer-events:auto}.steelx-rotator-card-active{transform:translate3d(calc(-50% + var(--px)),calc(-50% + var(--py)),120px) rotateY(calc(var(--px) * .25deg)) rotateX(calc(var(--py) * -.2deg)) scale(1);z-index:4;opacity:1;filter:brightness(1)}.steelx-rotator-card-next{transform:translate3d(25%,-47%,-130px) rotateY(-24deg) rotateX(2deg) scale(.7);z-index:2;opacity:.34;filter:brightness(.38)}.steelx-rotator-card-prev{transform:translate3d(-125%,-47%,-130px) rotateY(24deg) rotateX(2deg) scale(.7);z-index:2;opacity:.34;filter:brightness(.38)}.steelx-rotator-card-far{transform:translate3d(-50%,-50%,-550px) scale(.48);z-index:0;opacity:0}
        .steelx-rotator-media{height:100%;position:relative;background:#161616;overflow:hidden}.steelx-rotator-media img,.steelx-rotator-video{display:block;width:100%;height:100%;object-fit:cover;filter:saturate(.76) contrast(1.12);transition:transform 9s cubic-bezier(.16,1,.3,1),filter 1s ease}.steelx-rotator-card-active .steelx-rotator-media img,.steelx-rotator-card-active .steelx-rotator-video{transform:scale(1.065);filter:saturate(1.05) contrast(1.06)}.steelx-rotator-vignette{position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.02) 25%,rgba(0,0,0,.72) 100%),linear-gradient(90deg,rgba(0,0,0,.2),transparent 30%,rgba(214,181,106,.08) 70%,rgba(0,0,0,.28))}.steelx-rotator-light{position:absolute;inset:-40% -20%;background:linear-gradient(105deg,transparent 38%,rgba(255,244,205,.16) 49%,transparent 60%);mix-blend-mode:screen;animation:steelxLightSweep 7s ease-in-out infinite}.steelx-rotator-material{position:absolute;right:20px;top:20px;padding:9px 12px;border:1px solid rgba(255,255,255,.3);background:rgba(5,5,5,.25);backdrop-filter:blur(12px);font-size:8px;letter-spacing:.18em;text-transform:uppercase;color:#eee}
        .steelx-rotator-caption{position:absolute;left:27px;right:27px;bottom:25px;display:flex;align-items:flex-end;justify-content:space-between}.steelx-rotator-caption>div>span{font-size:8px;letter-spacing:.2em;text-transform:uppercase;color:#d4d0c7}.steelx-rotator-caption h2{font-family:Georgia,'Times New Roman',serif;font-size:clamp(25px,3.2vw,48px);font-weight:400;line-height:1;margin:8px 0 0;color:#fff}.steelx-rotator-arrow{width:50px;height:50px;border:1px solid rgba(255,255,255,.4);border-radius:50%;display:grid;place-items:center;font-size:19px;transition:background .3s ease,color .3s ease,transform .4s ease}.steelx-rotator-card:hover .steelx-rotator-arrow{background:var(--gold);color:#111;transform:rotate(45deg)}
        .steelx-stage-index{position:absolute;left:4vw;top:50%;transform:translateY(-50%);display:flex;flex-direction:column;gap:8px;z-index:5}.steelx-stage-index span{font-size:7px;letter-spacing:.22em;text-transform:uppercase;color:#666;writing-mode:vertical-rl;transform:rotate(180deg)}.steelx-stage-index strong{font-family:Georgia,serif;font-size:30px;font-weight:400;color:var(--gold)}
        .steelx-floating-label{position:absolute;z-index:5;font-size:7px;letter-spacing:.25em;text-transform:uppercase;color:rgba(255,255,255,.38);white-space:nowrap}.steelx-floating-label-a{right:7vw;top:25%;transform:rotate(90deg)}.steelx-floating-label-b{right:8vw;bottom:18%;color:rgba(214,181,106,.5)}
        .steelx-opening-bottom{position:absolute;z-index:10;left:50%;bottom:27px;transform:translateX(-50%);width:min(1500px,92vw);display:grid;grid-template-columns:1fr 1fr auto;align-items:end;gap:30px}.steelx-rotator-controls{display:flex;align-items:center;gap:14px}.steelx-rotator-controls>button{width:38px;height:38px;border:1px solid rgba(255,255,255,.2);background:rgba(0,0,0,.2);color:#fff;border-radius:50%;cursor:pointer;transition:.3s}.steelx-rotator-controls>button:hover{background:var(--gold);color:#111;border-color:var(--gold)}.steelx-rotator-progress{display:flex;gap:6px;align-items:center;flex:1;max-width:220px}.steelx-rotator-progress button{height:18px;flex:1;border:0;background:transparent;padding:0;cursor:pointer}.steelx-rotator-progress button span{display:block;height:1px;background:rgba(255,255,255,.22);transition:background .3s,height .3s}.steelx-rotator-progress button[aria-current=true] span{height:2px;background:var(--gold)}.steelx-opening-current{display:flex;flex-direction:column;gap:5px}.steelx-opening-current span,.steelx-opening-counter{font-size:7px;letter-spacing:.22em;text-transform:uppercase;color:#666}.steelx-opening-current strong{font-family:Georgia,serif;font-size:13px;font-weight:400;color:#ddd}.steelx-opening-counter{color:var(--gold);white-space:nowrap}
        @keyframes steelxMetalText{to{background-position:200% center}}@keyframes steelxLightSweep{0%,100%{transform:translateX(-18%);opacity:.1}50%{transform:translateX(18%);opacity:.65}}@keyframes steelxOrbit{to{transform:translate(-50%,-50%) rotate(351deg)}}@keyframes steelxOrbitReverse{to{transform:translate(-50%,-50%) rotate(-342deg)}}@keyframes steelxGlow{0%,100%{opacity:.65;transform:translate(-50%,-50%) scale(.96)}50%{opacity:1;transform:translate(-50%,-50%) scale(1.05)}}@keyframes steelxGlowTwo{0%,100%{opacity:.3;transform:scale(.9)}50%{opacity:.7;transform:scale(1.1)}}
        @media(max-width:900px){.steelx-opening-copy{padding-top:22px}.steelx-opening-topline span:last-child{display:none}.steelx-opening-main{max-width:82vw;margin-top:8vh}.steelx-opening-main h1{font-size:clamp(54px,14vw,100px)}.steelx-opening-main p{font-size:12px;max-width:390px}.steelx-opening-scroll{display:none}.steelx-rotator-stage{inset:29% 0 18%}.steelx-rotator-card{width:78vw;height:54vw;top:50%}.steelx-rotator-card-next{transform:translate3d(35%,-47%,-110px) rotateY(-19deg) scale(.72)}.steelx-rotator-card-prev{transform:translate3d(-135%,-47%,-110px) rotateY(19deg) scale(.72)}.steelx-stage-index,.steelx-floating-label{display:none}.steelx-opening-bottom{grid-template-columns:1fr auto;bottom:22px}.steelx-opening-current{display:none}.steelx-rotator-progress{max-width:none}.steelx-opening-actions{margin-top:22px}.steelx-rotator-caption{left:18px;right:18px;bottom:18px}.steelx-rotator-material{right:14px;top:14px}.steelx-rotator-arrow{width:40px;height:40px}}
        @media(max-width:560px){.steelx-project-rotator{min-height:100svh}.steelx-opening-copy{height:100svh}.steelx-opening-main{margin-top:7vh}.steelx-opening-eyebrow{font-size:7px;letter-spacing:.24em}.steelx-opening-main h1{font-size:clamp(47px,14vw,78px)}.steelx-opening-main p{margin-top:20px;font-size:11px;line-height:1.6}.steelx-opening-actions a{font-size:8px}.steelx-rotator-stage{inset:34% 0 16%}.steelx-rotator-card{width:86vw;height:57vw}.steelx-rotator-card-next{transform:translate3d(45%,-48%,-100px) rotateY(-15deg) scale(.72)}.steelx-rotator-card-prev{transform:translate3d(-145%,-48%,-100px) rotateY(15deg) scale(.72)}.steelx-opening-bottom{width:88vw}.steelx-rotator-controls>button{width:34px;height:34px}.steelx-rotator-caption h2{font-size:25px}.steelx-rotator-caption>div>span{font-size:7px}.steelx-rotator-material{font-size:7px}}
        @media(prefers-reduced-motion:reduce){.steelx-rotator-orbit,.steelx-rotator-glow,.steelx-rotator-light,.steelx-opening-main h1 span{animation:none}.steelx-rotator-card,.steelx-rotator-media img,.steelx-rotator-video,.steelx-opening-main{transition-duration:1ms}}
      `}</style>
    </section>
  );
}
