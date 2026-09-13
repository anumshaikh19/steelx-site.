import { useEffect, useRef, useState } from "react";

type Work = { name: string; image: string; tags: string[] };
type Stat = { value: number; suffix?: string; label: string };

const rowOne: Work[] = [
  { name: "DALEZZ", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1600&q=90", tags: ["Branding", "Packaging Design", "Solutions"] },
  { name: "MEIKO TAILOR", image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1600&q=90", tags: ["Branding", "Business Design", "Communication Design"] },
  { name: "PLAYTOPIA", image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1600&q=90", tags: ["Branding", "Business Design", "Communication Design", "Experience Design"] },
  { name: "DESIGN WAH!", image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1600&q=90", tags: ["Communication Design", "Experience Design", "Packaging Design"] },
  { name: "FYNXT", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=90", tags: ["Branding", "Communication Design", "UI/UX Design"] },
  { name: "R VOLANTIS", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=90", tags: ["Branding", "Communication Design"] },
];
const rowTwo: Work[] = [
  { name: "TESA", image: "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?auto=format&fit=crop&w=1600&q=90", tags: ["Communication Design"] },
  { name: "RITTER SPORT", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1600&q=90", tags: ["Communication Design", "Packaging Design"] },
  { name: "MiCha", image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1600&q=90", tags: ["Branding", "Communication Design", "Packaging Design"] },
  { name: "SEAWALK", image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1600&q=90", tags: ["Branding", "Communication Design", "Experience Design", "UI/UX Design"] },
  { name: "AERIS DYNAMICS", image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=90", tags: ["Branding", "Packaging Design", "UI/UX Design"] },
  { name: "HOOW FOODS", image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1600&q=90", tags: ["Branding", "Communication Design", "UI/UX Design"] },
];
const stats: Stat[] = [
  { value: 15, suffix: "+", label: "YEARS OF EXPERIENCE" },
  { value: 300, suffix: "+", label: "PROJECTS" },
  { value: 9, label: "ACCREDITATIONS TO DATE" },
  { value: 60, suffix: "+", label: "AWARDS & RECOGNITIONS" },
];

function WonderlandCard({ work, className }: { work: Work; className: string }) {
  return (
    <div className={`vx-wonder-card ${className}`}>
      <div className="vx-wonder-card-inner">
        <div className="vx-wonder-face vx-wonder-front">
          <span>{work.name}</span>
          <img src={work.image} alt={`${work.name} creative preview`} />
        </div>
        <div className="vx-wonder-face vx-wonder-back">
          <span>VINTEX WEB</span>
          <strong>{work.name}</strong>
          <small>{work.tags.slice(0, 2).join(" · ")}</small>
          <b>EXPLORE ↗</b>
        </div>
      </div>
    </div>
  );
}

function WonderlandHero() {
  const ref = useRef<HTMLElement | null>(null);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const move = (event: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      setPointer({ x: ((event.clientX - rect.left) / rect.width - 0.5) * 2, y: ((event.clientY - rect.top) / rect.height - 0.5) * 2 });
    };
    el.addEventListener("pointermove", move);
    return () => el.removeEventListener("pointermove", move);
  }, []);

  return (
    <section ref={ref} className="vx-wonderland" aria-label="Creative brand experience">
      <div className="vx-wonder-noise" />
      <div className="vx-wonder-glow vx-wonder-glow-a" />
      <div className="vx-wonder-glow vx-wonder-glow-b" />
      <div className="vx-wonder-copy">
        <p className="vx-wonder-eyebrow">CREATIVE BRAND EXPERIENCE</p>
        <h1><span>Step Into</span><span>VINTEX</span><span>Wonderland</span></h1>
        <p className="vx-wonder-sub">Explore the ideas, objects, and stories behind our work</p>
        <a className="vx-wonder-cta" href="#work">Start Exploring <span>↗</span></a>
      </div>

      <div className="vx-wonder-stage" style={{ transform: `translate3d(${pointer.x * 5}px,${pointer.y * 4}px,0)` }}>
        <WonderlandCard work={rowTwo[4]} className="vx-wonder-one" />
        <WonderlandCard work={rowOne[2]} className="vx-wonder-two" />
        <WonderlandCard work={rowTwo[2]} className="vx-wonder-three" />
        <WonderlandCard work={rowOne[5]} className="vx-wonder-four" />
        <div className="vx-wonder-fish vx-fish-one">◈</div>
        <div className="vx-wonder-fish vx-fish-two">◈</div>
      </div>

      <div className="vx-wonder-bottom">
        <a href="#top" className="vx-wonder-home" aria-label="Back to top">↑</a>
        <nav aria-label="Wonderland navigation">
          <a href="#work">Works</a><a href="#services">Solutions</a><a href="#about">About</a><a href="#contact">BrandsBuilder.ai</a><a href="#contact">☰ MORE</a>
        </nav>
        <a className="vx-wonder-dot" href="#contact" aria-label="Contact VINTEX">↗</a>
      </div>
    </section>
  );
}

function WorkCard({ work }: { work: Work }) {
  return <article className="vx-work-card"><img src={work.image} alt={work.name} loading="lazy" /><div className="vx-work-gradient" /><div className="vx-work-info"><h3>{work.name}<span>↗</span></h3><div className="vx-tags">{work.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div></article>;
}
function MarqueeRow({ works, reverse = false }: { works: Work[]; reverse?: boolean }) {
  const repeated = [...works, ...works];
  return <div className={`vx-marquee ${reverse ? "reverse" : ""}`}><div className="vx-marquee-track">{repeated.map((work, i) => <WorkCard key={`${work.name}-${i}`} work={work} />)}</div></div>;
}
function CountUp({ target, suffix = "", start }: { target: number; suffix?: string; start: boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    const duration = 1500;
    const startedAt = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const p = Math.min((now - startedAt) / duration, 1);
      setCount(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, target]);
  return <span>{count}{suffix}</span>;
}
function StatsSection() {
  const ref = useRef<HTMLElement | null>(null);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } }, { threshold: 0.28 });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return <section ref={ref} className="vx-stats" aria-label="Company statistics"><div className="vx-stats-glow vx-stats-glow-one" /><div className="vx-stats-glow vx-stats-glow-two" /><div className="vx-stats-content"><p className="vx-stats-lead">VINTEX WEB is an award-winning design and branding company. We build brands that matter.</p><h2>Business leaders trust us to solve their strategic and creative challenges: from branding, business design, UI/UX design, packaging design, communication design to sustainability design across industries and regions. We are unique in that we are invested in the success of the companies we work with, and launch and grow new ventures of our own.</h2><div className="vx-stat-grid">{stats.map(stat => <div className="vx-stat" key={stat.label}><div className="vx-stat-number"><CountUp target={stat.value} suffix={stat.suffix} start={started} /></div><div className="vx-stat-label">{stat.label}</div></div>)}</div></div></section>;
}

export function VintexWebPage() {
  return <div className="vx-page">
    <header className="vx-header"><a className="vx-logo" href="#top">VINTEX<span>®</span></a><nav><a href="#work">Work</a><a href="#services">Services</a><a href="#about">About</a><a href="#contact">Contact</a></nav><a className="vx-build" href="#contact">Let's Talk <span>↗</span></a></header>
    <main id="top">
      <WonderlandHero />
      <section className="vx-intro"><div><p className="vx-kicker">SELECTED PROJECTS</p><h2>Featured<br /><em>Work</em></h2></div><div className="vx-intro-right"><p>Ideas, identities and experiences built to make ambitious brands impossible to ignore.</p></div></section>
      <section className="vx-work" id="work" aria-label="Featured Work"><MarqueeRow works={rowOne} /><MarqueeRow works={rowTwo} reverse /><div className="vx-work-note"><span>02 / 12</span><span>HOVER A PROJECT TO EXPLORE</span><span>● ● ● ● ●</span></div></section>
      <StatsSection />
      <section className="vx-services" id="services"><p className="vx-kicker">WHAT WE DO</p><h2>Strategy, identity &amp; experience — built as one.</h2><div className="vx-service-grid"><span>Brand Strategy</span><span>Brand Identity</span><span>Business Design</span><span>Digital Experience</span><span>Communication Design</span><span>Packaging Design</span></div></section>
      <section className="vx-about" id="about"><p className="vx-kicker">VINTEX WEB</p><h2>We turn culture, clarity and creativity into brands that <em>move.</em></h2><p>From strategy through launch, we create distinctive systems that people remember and businesses can grow with.</p></section>
      <section className="vx-contact" id="contact"><p className="vx-kicker">LET'S BUILD SOMETHING MEMORABLE</p><h2>Have a brand worth<br /><em>talking about?</em></h2><a href="mailto:hello@vintexweb.com">Start a conversation ↗</a></section>
    </main>
    <footer className="vx-footer"><span>VINTEX WEB</span><span>© 2026</span><span>Singapore · Milan · Jakarta</span></footer>
    <style>{styles}</style>
  </div>;
}

const styles = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;1,500;1,600&display=swap');
:root{--bg:#0b0b0d;--panel:#121216;--text:#f5f3ee;--muted:#a5a4a0;--line:rgba(255,255,255,.14);--accent:#d9b65a}
*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:var(--bg)}.vx-page{min-height:100vh;background:var(--bg);color:var(--text);font-family:'DM Sans',Arial,sans-serif;overflow:hidden}.vx-page a{color:inherit;text-decoration:none}.vx-header{height:82px;padding:0 5vw;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--line);position:sticky;top:0;z-index:50;background:rgba(11,11,13,.84);backdrop-filter:blur(16px)}.vx-logo{font-size:22px;letter-spacing:.26em;font-weight:600}.vx-logo span{font-size:8px;vertical-align:top;margin-left:3px}.vx-header nav{display:flex;gap:40px}.vx-header nav a{font-size:13px;color:#c5c3bd;transition:color .25s}.vx-header nav a:hover{color:#fff}.vx-build{border:1px solid rgba(217,182,90,.75);border-radius:999px;padding:11px 17px;font-size:12px}.vx-build span{margin-left:8px}
.vx-wonderland{height:min(920px,calc(100vh - 82px));min-height:720px;position:relative;overflow:hidden;background:#111112;display:grid;place-items:center;isolation:isolate}.vx-wonder-noise{position:absolute;inset:0;opacity:.08;pointer-events:none;background-image:radial-gradient(rgba(255,255,255,.7) .6px,transparent .7px);background-size:5px 5px;mix-blend-mode:soft-light}.vx-wonder-glow{position:absolute;width:520px;height:520px;border-radius:50%;filter:blur(95px);opacity:.3;pointer-events:none}.vx-wonder-glow-a{background:#51476d;top:-180px;left:27%}.vx-wonder-glow-b{background:#6b3b55;bottom:-220px;right:25%}.vx-wonder-copy{position:relative;z-index:8;text-align:center;max-width:950px;padding:0 20px}.vx-wonder-eyebrow{font-size:11px;letter-spacing:.32em;font-weight:700;color:#a8a6a3;margin:0 0 26px;animation:vxReveal .9s .15s both}.vx-wonder-copy h1{font-family:'Playfair Display',serif;font-weight:500;font-size:clamp(62px,8.2vw,132px);line-height:.84;letter-spacing:-.055em;margin:0;color:#f3f1ec}.vx-wonder-copy h1 span{display:block;animation:vxHeroWord 1s cubic-bezier(.2,.8,.2,1) both}.vx-wonder-copy h1 span:nth-child(1){animation-delay:.2s}.vx-wonder-copy h1 span:nth-child(2){animation-delay:.3s}.vx-wonder-copy h1 span:nth-child(3){animation-delay:.4s}.vx-wonder-sub{font-size:16px;color:#b7b5b1;margin:38px 0 28px;animation:vxReveal .9s .65s both}.vx-wonder-cta{display:inline-flex;align-items:center;gap:12px;border:1px solid rgba(255,255,255,.72);border-radius:999px;padding:12px 18px;font-size:14px;background:rgba(0,0,0,.15);transition:background .3s,transform .3s;animation:vxReveal .9s .78s both}.vx-wonder-cta:hover{background:#fff;color:#111;transform:translateY(-3px)}.vx-wonder-cta span{font-size:18px}.vx-wonder-stage{position:absolute;inset:0;transition:transform .2s ease-out;z-index:4}.vx-wonder-card{position:absolute;width:clamp(150px,13vw,210px);height:clamp(212px,18.5vw,297px);perspective:1200px;animation:vxCardFloat 6s ease-in-out infinite}.vx-wonder-card-inner{width:100%;height:100%;position:relative;transform-style:preserve-3d;transition:transform .85s cubic-bezier(.2,.75,.2,1),filter .5s,box-shadow .5s}.vx-wonder-card:hover .vx-wonder-card-inner{transform:rotateY(180deg) rotateZ(0deg) scale(1.045);filter:brightness(1.18);box-shadow:0 30px 90px rgba(130,80,255,.28)}.vx-wonder-face{position:absolute;inset:0;backface-visibility:hidden;border-radius:18px;overflow:hidden;background:#050505;border:1px solid rgba(255,255,255,.07);box-shadow:0 24px 60px rgba(0,0,0,.45)}.vx-wonder-front img{width:100%;height:100%;object-fit:cover;opacity:.62;transition:opacity .5s,filter .5s}.vx-wonder-card:hover .vx-wonder-front img{opacity:.9;filter:saturate(1.25) contrast(1.08)}.vx-wonder-front span{position:absolute;z-index:2;top:13px;left:14px;border-radius:999px;padding:7px 14px;background:rgba(100,40,140,.82);color:#f8eaff;font-weight:600;font-size:13px}.vx-wonder-back{transform:rotateY(180deg);display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:22px;background:radial-gradient(circle at 50% 35%,#5e267c,#15111b 60%,#060606)}.vx-wonder-back span{font-size:9px;letter-spacing:.25em;color:#d7a7ff}.vx-wonder-back strong{font-family:'Playfair Display',serif;font-size:28px;margin:9px 0}.vx-wonder-back small{color:#bbb;font-size:11px}.vx-wonder-back b{font-size:10px;letter-spacing:.18em;margin-top:28px}.vx-wonder-one{left:2%;top:2%;transform:rotate(-10deg);animation-delay:-1s}.vx-wonder-two{right:5%;top:6%;transform:rotate(8deg);animation-delay:-3s}.vx-wonder-three{left:10%;bottom:2%;transform:rotate(-5deg);animation-delay:-4s}.vx-wonder-four{right:4%;bottom:3%;transform:rotate(7deg);animation-delay:-2s}.vx-wonder-fish{position:absolute;font-size:55px;color:#c9e8ff;text-shadow:0 18px 35px rgba(0,0,0,.55);filter:drop-shadow(0 0 16px rgba(90,180,255,.35));animation:vxFish 5s ease-in-out infinite;opacity:.9}.vx-fish-one{left:17%;top:37%;transform:rotate(-16deg)}.vx-fish-two{right:17%;bottom:31%;font-size:43px;color:#ffb25b;animation-delay:-2s}.vx-wonder-bottom{position:absolute;z-index:20;bottom:18px;left:50%;transform:translateX(-50%);display:flex;align-items:center;gap:14px;width:min(790px,90vw);animation:vxReveal .9s 1s both}.vx-wonder-bottom nav{flex:1;display:flex;justify-content:space-evenly;align-items:center;border:2px solid #2ecdf5;border-right-color:#5150ff;border-radius:999px;padding:13px 20px;background:rgba(8,18,28,.74);backdrop-filter:blur(15px)}.vx-wonder-bottom nav a{font-size:13px;font-weight:600;color:#dedde0;white-space:nowrap}.vx-wonder-home,.vx-wonder-dot{width:51px;height:51px;border-radius:50%;display:grid;place-items:center;border:2px solid #3b7cff;background:#0d1018;font-size:22px}.vx-wonder-dot{border-color:#25d89a;color:#25d89a;font-size:18px}
.vx-intro{padding:100px 5vw 62px;display:flex;justify-content:space-between;align-items:flex-end;gap:40px}.vx-kicker{font-size:10px;letter-spacing:.28em;color:var(--accent);margin:0 0 22px;font-weight:600}.vx-intro h2{font-family:'Playfair Display',serif;font-weight:500;font-size:clamp(60px,8vw,132px);line-height:.86;letter-spacing:-.055em;margin:0}.vx-intro h2 em{font-style:italic}.vx-intro-right{max-width:430px}.vx-intro-right p{font-size:15px;line-height:1.65;color:var(--muted);margin:0}.vx-work{position:relative;padding-bottom:60px}.vx-marquee{width:100%;overflow:hidden;padding:0 0 22px}.vx-marquee-track{display:flex;width:max-content;gap:22px;animation:vxScroll 42s linear infinite}.vx-marquee.reverse .vx-marquee-track{animation-name:vxScrollReverse;animation-duration:48s}.vx-marquee:hover .vx-marquee-track{animation-play-state:paused}.vx-work-card{position:relative;flex:0 0 clamp(270px,27vw,480px);height:clamp(290px,31vw,510px);overflow:hidden;border-radius:30px;background:#17171b;cursor:pointer;isolation:isolate;transform-style:preserve-3d;transition:transform .7s cubic-bezier(.2,.8,.2,1),box-shadow .45s,filter .45s}.vx-work-card:hover{transform:perspective(1100px) rotateY(7deg) rotateX(-2deg) scale(1.025);box-shadow:0 28px 70px rgba(88,65,170,.28),0 0 35px rgba(255,255,255,.08);filter:brightness(1.08)}.vx-work-card img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .8s,filter .8s}.vx-work-card:hover img{transform:scale(1.065);filter:saturate(1.12)}.vx-work-gradient{position:absolute;inset:0;background:linear-gradient(180deg,rgba(100,60,160,.06),transparent 30%,rgba(0,0,0,.9));opacity:0;transition:opacity .45s}.vx-work-card:hover .vx-work-gradient{opacity:1}.vx-work-info{position:absolute;left:28px;right:28px;bottom:27px;transform:translateY(18px);opacity:0;transition:opacity .4s,transform .5s}.vx-work-card:hover .vx-work-info{opacity:1;transform:none}.vx-work-info h3{font-family:'Playfair Display',serif;font-size:28px;font-weight:500;margin:0 0 18px}.vx-work-info h3 span{font-family:'DM Sans',sans-serif;font-size:19px;margin-left:7px}.vx-tags{display:flex;flex-wrap:wrap;gap:9px}.vx-tags span{font-size:11px;padding:11px 15px;border:1px solid rgba(255,255,255,.78);border-radius:999px;background:rgba(20,20,20,.28);backdrop-filter:blur(7px)}.vx-work-note{display:flex;justify-content:space-between;padding:20px 5vw 0;font-size:9px;letter-spacing:.2em;color:#737278}
.vx-stats{position:relative;isolation:isolate;overflow:hidden;background:#0c0c0f;border-top:1px solid var(--line);border-bottom:1px solid var(--line);min-height:640px}.vx-stats-content{position:relative;z-index:2;padding:92px 5vw 86px}.vx-stats-lead{font-size:clamp(16px,1.35vw,23px);font-weight:500;line-height:1.45;max-width:1500px;margin:0 0 40px;color:#ecebe7}.vx-stats h2{font-size:clamp(30px,3.25vw,58px);font-weight:500;line-height:1.16;letter-spacing:-.038em;max-width:1550px;margin:0}.vx-stats-glow{position:absolute;width:430px;height:430px;border-radius:50%;filter:blur(85px);opacity:.42;pointer-events:none}.vx-stats-glow-one{top:-120px;left:33%;background:radial-gradient(circle,#6878a7,#69416f 36%,#b27a3b 58%,transparent 74%)}.vx-stats-glow-two{bottom:-190px;left:47%;background:radial-gradient(circle,#6b7f86,#7e5a84 34%,#b07a45 55%,transparent 74%)}.vx-stat-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:28px;margin-top:108px}.vx-stat{text-align:center}.vx-stat-number{font-family:'Playfair Display',Georgia,serif;font-size:clamp(68px,6.2vw,112px);line-height:.9;letter-spacing:-.045em;min-height:1em}.vx-stat-label{margin-top:25px;font-size:clamp(11px,1vw,15px);font-weight:700;color:#e4e2dd}
.vx-services{padding:150px 5vw;background:#111116;border-top:1px solid var(--line)}.vx-services h2,.vx-about h2,.vx-contact h2{font-family:'Playfair Display',serif;font-weight:500;font-size:clamp(42px,6vw,84px);line-height:1;letter-spacing:-.045em;max-width:1000px;margin:0}.vx-service-grid{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid var(--line);margin-top:80px}.vx-service-grid span{padding:24px 0;border-bottom:1px solid var(--line);font-size:15px}.vx-about{padding:150px 5vw;display:grid;grid-template-columns:1.4fr .6fr;gap:80px}.vx-about h2{font-size:clamp(42px,5vw,76px)}.vx-about h2 em,.vx-contact h2 em{color:var(--accent);font-style:italic}.vx-about>p:last-child{align-self:end;color:var(--muted);font-size:15px;line-height:1.7}.vx-contact{padding:160px 5vw 180px;background:#151519}.vx-contact h2{font-size:clamp(58px,8vw,120px);margin-bottom:70px}.vx-contact>a{font-size:16px;border-bottom:1px solid var(--accent);padding-bottom:8px}.vx-footer{display:flex;justify-content:space-between;padding:26px 5vw;color:#77767b;font-size:10px;letter-spacing:.13em;border-top:1px solid var(--line)}
@keyframes vxReveal{from{opacity:0;transform:translateY(25px)}to{opacity:1;transform:none}}@keyframes vxHeroWord{from{opacity:0;transform:translateY(70px) scale(.96);filter:blur(8px)}to{opacity:1;transform:none;filter:none}}@keyframes vxCardFloat{0%,100%{translate:0 0}50%{translate:0 -13px}}@keyframes vxFish{0%,100%{translate:0 0 rotate(0)}50%{translate:18px -12px rotate(5deg)}}@keyframes vxScroll{from{transform:translateX(0)}to{transform:translateX(calc(-50% - 11px))}}@keyframes vxScrollReverse{from{transform:translateX(calc(-50% - 11px))}to{transform:translateX(0)}}
@media(max-width:800px){.vx-header{height:68px;padding:0 5vw}.vx-header nav{display:none}.vx-wonderland{height:calc(100vh - 68px);min-height:650px}.vx-wonder-copy h1{font-size:clamp(54px,16vw,92px)}.vx-wonder-sub{font-size:14px}.vx-wonder-card{width:112px;height:158px}.vx-wonder-one{left:-2%;top:8%}.vx-wonder-two{right:-2%;top:9%}.vx-wonder-three{left:2%;bottom:11%}.vx-wonder-four{right:0;bottom:12%}.vx-wonder-fish{font-size:32px}.vx-fish-one{left:20%;top:29%}.vx-fish-two{right:19%;bottom:31%;font-size:27px}.vx-wonder-bottom{bottom:12px;width:94vw;gap:7px}.vx-wonder-bottom nav{padding:11px 8px}.vx-wonder-bottom nav a{font-size:9px}.vx-wonder-bottom nav a:nth-child(4){display:none}.vx-wonder-home,.vx-wonder-dot{width:43px;height:43px}.vx-intro{padding:75px 5vw 42px;display:block}.vx-intro h2{font-size:clamp(60px,18vw,100px)}.vx-intro-right{margin-top:30px}.vx-work-card{flex-basis:72vw;height:76vw;border-radius:23px}.vx-stat-grid{grid-template-columns:repeat(2,1fr);gap:54px 18px;margin-top:72px}.vx-stats-content{padding:78px 5vw 70px}.vx-stats h2{font-size:clamp(27px,7.5vw,40px)}.vx-stat-number{font-size:clamp(52px,15vw,76px)}.vx-stat-label{font-size:9px;margin-top:16px}.vx-services,.vx-about,.vx-contact{padding:100px 5vw}.vx-service-grid{grid-template-columns:1fr;margin-top:50px}.vx-about{display:block}.vx-about>p:last-child{margin-top:40px}.vx-footer{gap:14px;flex-wrap:wrap}.vx-footer span:last-child{width:100%}}
@media(prefers-reduced-motion:reduce){.vx-wonder-card,.vx-wonder-copy h1 span,.vx-wonder-eyebrow,.vx-wonder-sub,.vx-wonder-cta,.vx-wonder-bottom,.vx-wonder-fish{animation:none}.vx-marquee-track{animation:none}.vx-work-card,.vx-work-card img,.vx-work-gradient,.vx-work-info{transition:none}}
`;
