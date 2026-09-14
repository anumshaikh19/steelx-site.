import { useEffect, useMemo, useState } from "react";
import type { Project } from "@/data/projects";

const picks = [
  "nikhil-gupta-residence",
  "the-vira-hotel-lobby",
  "aurum-flagship-store",
  "qudrati-greens",
];

export function LuxuryProjectHero({ projects }: { projects: Project[] }) {
  const slides = useMemo(() => picks.map((slug) => projects.find((p) => p.slug === slug)).filter(Boolean) as Project[], [projects]);
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (hovered || slides.length < 2) return;
    const timer = window.setInterval(() => setActive((v) => (v + 1) % slides.length), 6500);
    return () => window.clearInterval(timer);
  }, [hovered, slides.length]);

  if (!slides.length) return null;

  const current = slides[active]!;

  return (
    <section className="sx-luxury-hero" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} aria-label="SteelX signature projects">
      <div className="sx-luxury-bg" aria-hidden="true" />
      <div className="sx-luxury-grain" aria-hidden="true" />
      <div className="sx-luxury-topline"><span>STEELX / SIGNATURE SPACES</span><span>01—04</span></div>

      <div className="sx-luxury-content">
        <div className="sx-luxury-copy">
          <p className="sx-luxury-eyebrow">Architectural metal · PVD · Bespoke fabrication</p>
          <div className="sx-luxury-title-wrap">
            <span className="sx-luxury-ghost">SURFACES</span>
            <h1>Made to<br /><em>command</em><br />the room.</h1>
          </div>
          <p className="sx-luxury-intro">Steel, treated as architecture. Discover signature residences, hospitality spaces and retail interiors finished by SteelX.</p>
          <div className="sx-luxury-actions">
            <a href="#signature-project" className="sx-luxury-primary">Discover the work <span>↗</span></a>
            <span className="sx-luxury-scroll">Scroll to explore <i /></span>
          </div>
        </div>

        <div className="sx-luxury-stage" id="signature-project">
          <div className="sx-luxury-ring sx-ring-one" />
          <div className="sx-luxury-ring sx-ring-two" />
          <div className="sx-luxury-project-index"><strong>0{active + 1}</strong><span>/ 0{slides.length}</span></div>
          {slides.map((project, index) => {
            const offset = (index - active + slides.length) % slides.length;
            const state = offset === 0 ? "current" : offset === 1 ? "next" : offset === slides.length - 1 ? "prev" : "hidden";
            return (
              <article key={project.slug} className={`sx-project-card sx-project-${state}`}>
                <div className="sx-project-image">
                  <img src={project.coverImage} alt={`${project.title} — ${project.finish}`} />
                  <div className="sx-project-light" />
                  <div className="sx-project-shade" />
                  <span className="sx-project-finish">{project.finish}</span>
                </div>
                <div className="sx-project-meta">
                  <div><span>{project.category} · {project.location}</span><h2>{project.title}</h2></div>
                  <span className="sx-project-arrow">↗</span>
                </div>
              </article>
            );
          })}
          <div className="sx-luxury-vertical">PVD COATED · PRECISION FABRICATED · INSTALLED</div>
        </div>
      </div>

      <div className="sx-luxury-controls">
        <button type="button" onClick={() => setActive((active - 1 + slides.length) % slides.length)} aria-label="Previous project">←</button>
        <div className="sx-luxury-progress">
          {slides.map((project, index) => <button type="button" key={project.slug} onClick={() => setActive(index)} aria-label={`Show ${project.title}`} aria-current={active === index}><span /></button>)}
        </div>
        <button type="button" onClick={() => setActive((active + 1) % slides.length)} aria-label="Next project">→</button>
      </div>

      <style>{`
        .sx-luxury-hero{position:relative;min-height:100svh;overflow:hidden;background:#08090a;color:#f4f0e8;isolation:isolate;padding:110px 4vw 28px}
        .sx-luxury-bg{position:absolute;inset:0;background:radial-gradient(circle at 73% 48%,rgba(183,145,63,.15),transparent 31%),radial-gradient(circle at 30% 70%,rgba(255,255,255,.035),transparent 28%),linear-gradient(112deg,#08090a 0%,#101113 49%,#070809 100%);z-index:-3}
        .sx-luxury-grain{position:absolute;inset:0;opacity:.08;z-index:-1;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.55'/%3E%3C/svg%3E")}
        .sx-luxury-topline{position:absolute;top:92px;left:4vw;right:4vw;display:flex;justify-content:space-between;color:#777873;font-size:9px;letter-spacing:.28em;text-transform:uppercase}.sx-luxury-topline span:first-child{color:#c8a85c}
        .sx-luxury-content{width:min(1540px,100%);min-height:calc(100svh - 160px);margin:auto;display:grid;grid-template-columns:39% 61%;align-items:center;gap:0}
        .sx-luxury-copy{position:relative;z-index:8;padding:4vh 0 4vh 2vw}.sx-luxury-eyebrow{font-size:9px;letter-spacing:.3em;text-transform:uppercase;color:#b89a58;margin:0 0 42px}.sx-luxury-title-wrap{position:relative}.sx-luxury-ghost{position:absolute;left:-3px;top:-44px;font:700 clamp(54px,8vw,135px)/.8 Arial,sans-serif;letter-spacing:-.08em;color:rgba(255,255,255,.025);white-space:nowrap;pointer-events:none}.sx-luxury-copy h1{font:400 clamp(58px,7vw,112px)/.84 Georgia,'Times New Roman',serif;letter-spacing:-.065em;margin:0;position:relative}.sx-luxury-copy h1 em{font-style:italic;color:#d2b26a}.sx-luxury-intro{max-width:400px;color:#92938e;font-size:13px;line-height:1.8;margin:38px 0}.sx-luxury-actions{display:flex;align-items:center;gap:28px}.sx-luxury-primary{display:inline-flex;align-items:center;gap:25px;padding:16px 20px;border:1px solid rgba(208,177,103,.45);color:#eeeae0;font-size:10px;letter-spacing:.16em;text-transform:uppercase;text-decoration:none;transition:.4s}.sx-luxury-primary span{font-size:17px;color:#d2b26a}.sx-luxury-primary:hover{background:#d2b26a;color:#111;transform:translateY(-3px)}.sx-luxury-scroll{font-size:8px;letter-spacing:.2em;text-transform:uppercase;color:#777873;display:flex;align-items:center;gap:10px}.sx-luxury-scroll i{display:block;width:32px;height:1px;background:#777873}
        .sx-luxury-stage{height:min(72vh,760px);position:relative;perspective:1800px;transform-style:preserve-3d}.sx-luxury-ring{position:absolute;left:50%;top:50%;border:1px solid rgba(204,171,95,.18);border-radius:50%;transform:translate(-50%,-50%) rotate(-15deg);pointer-events:none}.sx-ring-one{width:96%;height:70%;animation:sxOrbit 18s linear infinite}.sx-ring-two{width:70%;height:50%;border-color:rgba(255,255,255,.08);transform:translate(-50%,-50%) rotate(21deg);animation:sxOrbit2 24s linear infinite}.sx-project-card{position:absolute;left:50%;top:50%;width:min(49vw,700px);height:min(64vh,610px);overflow:hidden;background:#111;box-shadow:0 35px 100px rgba(0,0,0,.62);transition:transform 1200ms cubic-bezier(.16,1,.3,1),opacity 800ms ease,filter 900ms ease;transform-style:preserve-3d;border:1px solid rgba(255,255,255,.16)}.sx-project-current{transform:translate(-50%,-50%) translateZ(110px) rotateY(0) scale(1);z-index:5;opacity:1;filter:brightness(1)}.sx-project-next{transform:translate(4%,-51%) translateZ(-140px) rotateY(-25deg) scale(.73);z-index:2;opacity:.4;filter:brightness(.38)}.sx-project-prev{transform:translate(-104%,-51%) translateZ(-140px) rotateY(25deg) scale(.73);z-index:2;opacity:.4;filter:brightness(.38)}.sx-project-hidden{transform:translate(-50%,-50%) translateZ(-500px) scale(.45);opacity:0;z-index:0;pointer-events:none}.sx-project-image{height:100%;position:relative;overflow:hidden}.sx-project-image img{height:100%;width:100%;object-fit:cover;display:block;filter:saturate(.72) contrast(1.1);transform:scale(1.01);transition:transform 7s cubic-bezier(.16,1,.3,1),filter 1s}.sx-project-current .sx-project-image img{transform:scale(1.08);filter:saturate(1) contrast(1.06)}.sx-project-light{position:absolute;inset:-30%;background:linear-gradient(105deg,transparent 35%,rgba(224,193,120,.2) 50%,transparent 64%);transform:translateX(-35%);animation:sxLight 6s ease-in-out infinite;mix-blend-mode:screen}.sx-project-shade{position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.04) 30%,rgba(0,0,0,.86) 100%)}.sx-project-finish{position:absolute;top:20px;right:20px;padding:9px 12px;border:1px solid rgba(255,255,255,.28);background:rgba(0,0,0,.2);backdrop-filter:blur(10px);font-size:8px;letter-spacing:.2em;text-transform:uppercase}.sx-project-meta{position:absolute;left:25px;right:25px;bottom:24px;display:flex;justify-content:space-between;align-items:flex-end}.sx-project-meta span:first-child{font-size:8px;letter-spacing:.18em;text-transform:uppercase;color:#c7c6bf}.sx-project-meta h2{font:400 clamp(27px,3vw,46px)/.95 Georgia,serif;letter-spacing:-.035em;margin:9px 0 0}.sx-project-arrow{width:46px;height:46px;border:1px solid rgba(255,255,255,.35);border-radius:50%;display:grid;place-items:center;font-size:18px!important;letter-spacing:0!important;transition:.35s}.sx-project-current:hover .sx-project-arrow{background:#d2b26a;color:#111;transform:rotate(45deg)}.sx-luxury-project-index{position:absolute;right:1%;top:6%;z-index:7;display:flex;align-items:baseline;gap:7px}.sx-luxury-project-index strong{font:400 34px Georgia,serif;color:#d2b26a}.sx-luxury-project-index span{font-size:9px;color:#666;letter-spacing:.15em}.sx-luxury-vertical{position:absolute;right:-1%;bottom:18%;writing-mode:vertical-rl;font-size:7px;letter-spacing:.3em;color:#5e605d;z-index:7}
        .sx-luxury-controls{position:absolute;left:4vw;right:4vw;bottom:28px;display:flex;align-items:center;gap:16px;z-index:10}.sx-luxury-controls>button{width:40px;height:40px;border:1px solid rgba(255,255,255,.2);background:rgba(0,0,0,.2);color:#fff;border-radius:50%;cursor:pointer;transition:.3s}.sx-luxury-controls>button:hover{background:#d2b26a;color:#111;border-color:#d2b26a}.sx-luxury-progress{display:flex;gap:7px;flex:1}.sx-luxury-progress button{height:20px;flex:1;max-width:130px;background:transparent;border:0;padding:0;cursor:pointer}.sx-luxury-progress span{display:block;height:1px;background:rgba(255,255,255,.2);transition:.4s}.sx-luxury-progress button[aria-current=true] span{height:2px;background:#d2b26a}
        @keyframes sxOrbit{to{transform:translate(-50%,-50%) rotate(345deg)}}@keyframes sxOrbit2{to{transform:translate(-50%,-50%) rotate(-339deg)}}@keyframes sxLight{0%,100%{transform:translateX(-38%);opacity:.15}50%{transform:translateX(38%);opacity:.65}}
        @media(max-width:900px){.sx-luxury-hero{padding:92px 18px 20px;min-height:100svh}.sx-luxury-topline{top:72px;left:18px;right:18px}.sx-luxury-content{display:flex;flex-direction:column;min-height:calc(100svh - 120px);justify-content:center}.sx-luxury-copy{padding:35px 0 10px;width:100%}.sx-luxury-eyebrow{margin-bottom:25px}.sx-luxury-copy h1{font-size:clamp(49px,15vw,78px)}.sx-luxury-ghost{font-size:21vw;top:-25px}.sx-luxury-intro{margin:25px 0;font-size:12px;max-width:360px}.sx-luxury-actions{gap:16px}.sx-luxury-scroll{display:none}.sx-luxury-stage{width:100%;height:49vh;min-height:330px;max-height:490px}.sx-project-card{width:76vw;height:45vh;max-height:430px}.sx-project-next{transform:translate(16%,-51%) translateZ(-100px) rotateY(-18deg) scale(.72)}.sx-project-prev{transform:translate(-116%,-51%) translateZ(-100px) rotateY(18deg) scale(.72)}.sx-project-meta{left:17px;right:17px;bottom:17px}.sx-project-finish{top:13px;right:13px}.sx-luxury-project-index{right:3%;top:3%}.sx-luxury-vertical{display:none}.sx-luxury-controls{left:18px;right:18px;bottom:18px}}
        @media(prefers-reduced-motion:reduce){.sx-luxury-ring,.sx-project-light{animation:none}.sx-project-card{transition-duration:1ms}.sx-project-image img{transition-duration:1ms}}
      `}</style>
    </section>
  );
}
