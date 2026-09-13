import { useEffect, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/vintex-web")({ component: VintexWebPage });

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

function WorkCard({ work }: { work: Work }) {
  return (
    <article className="vx-work-card">
      <img src={work.image} alt={work.name} loading="lazy" />
      <div className="vx-work-gradient" />
      <div className="vx-work-info">
        <h3>{work.name}<span>↗</span></h3>
        <div className="vx-tags">
          {work.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
      </div>
    </article>
  );
}

function MarqueeRow({ works, reverse = false }: { works: Work[]; reverse?: boolean }) {
  const repeated = [...works, ...works];
  return (
    <div className={`vx-marquee ${reverse ? "reverse" : ""}`}>
      <div className="vx-marquee-track">
        {repeated.map((work, index) => <WorkCard key={`${work.name}-${index}`} work={work} />)}
      </div>
    </div>
  );
}

function CountUp({ target, suffix = "+", start }: { target: number; suffix?: string; start: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let frame = 0;
    const duration = 1500;
    const startedAt = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, target]);

  return <span>{count}{suffix}</span>;
}

function StatsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element || started) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.28 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [started]);

  return (
    <section ref={sectionRef} className="vx-stats" aria-label="Creativeans-inspired company statistics">
      <div className="vx-stats-glow vx-stats-glow-one" />
      <div className="vx-stats-glow vx-stats-glow-two" />
      <div className="vx-stats-content">
        <p className="vx-stats-lead">VINTEX WEB is an award-winning design and branding company. We build brands that matter.</p>
        <h2>Business leaders trust us to solve their strategic and creative challenges: from branding, business design, UI/UX design, packaging design, communication design to sustainability design across industries and regions. We are unique in that we are invested in the success of the companies we work with, and launch and grow new ventures of our own.</h2>

        <div className="vx-stat-grid">
          {stats.map((stat) => (
            <div className="vx-stat" key={stat.label}>
              <div className="vx-stat-number" aria-label={`${stat.value}${stat.suffix ?? ""} ${stat.label}`}>
                <CountUp target={stat.value} suffix={stat.suffix ?? ""} start={started} />
              </div>
              <div className="vx-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VintexWebPage() {
  return (
    <div className="vx-page">
      <header className="vx-header">
        <a className="vx-logo" href="#top">VINTEX<span>®</span></a>
        <nav><a href="#work">Work</a><a href="#services">Services</a><a href="#about">About</a><a href="#contact">Contact</a></nav>
        <a className="vx-build" href="#contact">Let's Talk <span>↗</span></a>
      </header>

      <main id="top">
        <section className="vx-intro">
          <div>
            <p className="vx-kicker">SELECTED PROJECTS</p>
            <h1>Featured<br /><em>Work</em></h1>
          </div>
          <div className="vx-intro-right">
            <p>Ideas, identities and experiences built to make ambitious brands impossible to ignore.</p>
            <div className="vx-arrows"><span>←</span><span>→</span></div>
          </div>
        </section>

        <section className="vx-work" id="work" aria-label="Featured Work">
          <MarqueeRow works={rowOne} />
          <MarqueeRow works={rowTwo} reverse />
          <div className="vx-work-note"><span>02 / 12</span><span>HOVER A PROJECT TO EXPLORE</span><span>● ● ● ● ●</span></div>
        </section>

        <StatsSection />

        <section className="vx-services" id="services">
          <p className="vx-kicker">WHAT WE DO</p>
          <h2>Strategy, identity &amp; experience — built as one.</h2>
          <div className="vx-service-grid"><span>Brand Strategy</span><span>Brand Identity</span><span>Business Design</span><span>Digital Experience</span><span>Communication Design</span><span>Packaging Design</span></div>
        </section>

        <section className="vx-about" id="about">
          <p className="vx-kicker">VINTEX WEB</p>
          <h2>We turn culture, clarity and creativity into brands that <em>move.</em></h2>
          <p>From strategy through launch, we create distinctive systems that people remember and businesses can grow with.</p>
        </section>

        <section className="vx-contact" id="contact">
          <p className="vx-kicker">LET'S BUILD SOMETHING MEMORABLE</p>
          <h2>Have a brand worth<br /><em>talking about?</em></h2>
          <a href="mailto:hello@vintexweb.com">Start a conversation ↗</a>
        </section>
      </main>

      <footer className="vx-footer"><span>VINTEX WEB</span><span>© 2026</span><span>Singapore · Milan · Jakarta</span></footer>

      <style>{styles}</style>
    </div>
  );
}

const styles = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;1,500;1,600&display=swap');
:root{--bg:#0b0b0d;--panel:#121216;--text:#f5f3ee;--muted:#a5a4a0;--line:rgba(255,255,255,.14);--accent:#d9b65a}
*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:var(--bg)}.vx-page{min-height:100vh;background:var(--bg);color:var(--text);font-family:'DM Sans',Arial,sans-serif;overflow:hidden}.vx-page a{color:inherit;text-decoration:none}.vx-header{height:82px;padding:0 5vw;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--line);position:sticky;top:0;z-index:30;background:rgba(11,11,13,.84);backdrop-filter:blur(16px)}.vx-logo{font-size:22px;letter-spacing:.26em;font-weight:600}.vx-logo span{font-size:8px;vertical-align:top;margin-left:3px}.vx-header nav{display:flex;gap:40px}.vx-header nav a{font-size:13px;color:#c5c3bd;transition:color .25s}.vx-header nav a:hover{color:#fff}.vx-build{border:1px solid rgba(217,182,90,.75);border-radius:999px;padding:11px 17px;font-size:12px}.vx-build span{margin-left:8px}.vx-intro{padding:100px 5vw 62px;display:flex;justify-content:space-between;align-items:flex-end;gap:40px}.vx-kicker{font-size:10px;letter-spacing:.28em;color:var(--accent);margin:0 0 22px;font-weight:600}.vx-intro h1{font-family:'Playfair Display',serif;font-weight:500;font-size:clamp(60px,8vw,132px);line-height:.86;letter-spacing:-.055em;margin:0}.vx-intro h1 em{color:#fff;font-style:italic}.vx-intro-right{max-width:430px;display:flex;flex-direction:column;gap:30px;padding-bottom:6px}.vx-intro-right p{font-size:15px;line-height:1.65;color:var(--muted);margin:0}.vx-arrows{display:flex;gap:10px}.vx-arrows span{width:44px;height:44px;border:1px solid var(--line);border-radius:50%;display:grid;place-items:center;font-size:17px}.vx-work{position:relative;padding-bottom:60px}.vx-marquee{width:100%;overflow:hidden;padding:0 0 22px}.vx-marquee-track{display:flex;width:max-content;gap:22px;animation:vxScroll 42s linear infinite;will-change:transform}.vx-marquee.reverse .vx-marquee-track{animation-name:vxScrollReverse;animation-duration:48s}.vx-marquee:hover .vx-marquee-track{animation-play-state:paused}.vx-work-card{position:relative;flex:0 0 clamp(270px,27vw,480px);height:clamp(290px,31vw,510px);overflow:hidden;border-radius:30px;background:#17171b;isolation:isolate;cursor:pointer}.vx-work-card img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .8s cubic-bezier(.2,.7,.2,1),filter .8s}.vx-work-card:hover img{transform:scale(1.065);filter:saturate(.8)}.vx-work-gradient{position:absolute;inset:0;background:linear-gradient(180deg,transparent 25%,rgba(0,0,0,.03) 40%,rgba(0,0,0,.86) 100%);opacity:0;transition:opacity .45s}.vx-work-card:hover .vx-work-gradient{opacity:1}.vx-work-info{position:absolute;left:28px;right:28px;bottom:27px;transform:translateY(18px);opacity:0;transition:opacity .4s,transform .5s cubic-bezier(.2,.7,.2,1)}.vx-work-card:hover .vx-work-info{opacity:1;transform:none}.vx-work-info h3{font-family:'Playfair Display',serif;font-size:28px;font-weight:500;margin:0 0 18px}.vx-work-info h3 span{font-family:'DM Sans',sans-serif;font-size:19px;margin-left:7px}.vx-tags{display:flex;flex-wrap:wrap;gap:9px}.vx-tags span{font-size:11px;line-height:1;padding:11px 15px;border:1px solid rgba(255,255,255,.78);border-radius:999px;background:rgba(20,20,20,.28);backdrop-filter:blur(7px)}.vx-work-note{display:flex;justify-content:space-between;padding:20px 5vw 0;font-size:9px;letter-spacing:.2em;color:#737278}
.vx-stats{position:relative;isolation:isolate;overflow:hidden;background:#0c0c0f;border-top:1px solid var(--line);border-bottom:1px solid var(--line);min-height:640px}.vx-stats-content{position:relative;z-index:2;padding:92px 5vw 86px}.vx-stats-lead{font-size:clamp(16px,1.35vw,23px);font-weight:500;line-height:1.45;max-width:1500px;margin:0 0 40px;color:#ecebe7}.vx-stats h2{font-size:clamp(30px,3.25vw,58px);font-weight:500;line-height:1.16;letter-spacing:-.038em;max-width:1550px;margin:0;color:#f2f1ed}.vx-stats-glow{position:absolute;z-index:0;width:430px;height:430px;border-radius:50%;filter:blur(85px);opacity:.42;pointer-events:none}.vx-stats-glow-one{top:-120px;left:33%;background:radial-gradient(circle,#6878a7 0%,#69416f 36%,#b27a3b 58%,transparent 74%)}.vx-stats-glow-two{bottom:-190px;left:47%;background:radial-gradient(circle,#6b7f86 0%,#7e5a84 34%,#b07a45 55%,transparent 74%)}.vx-stat-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:28px;margin-top:108px}.vx-stat{text-align:center}.vx-stat-number{font-family:'Playfair Display',Georgia,serif;font-size:clamp(68px,6.2vw,112px);font-weight:500;line-height:.9;letter-spacing:-.045em;min-height:1em;color:#f5f3ee;font-variant-numeric:tabular-nums}.vx-stat-label{margin-top:25px;font-size:clamp(11px,1vw,15px);font-weight:700;letter-spacing:.035em;color:#e4e2dd}
.vx-services{padding:150px 5vw;background:#111116;border-top:1px solid var(--line)}.vx-services h2{font-family:'Playfair Display',serif;font-size:clamp(42px,6vw,84px);font-weight:500;line-height:1;letter-spacing:-.045em;max-width:1000px;margin:0}.vx-service-grid{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid var(--line);margin-top:80px}.vx-service-grid span{padding:24px 0;border-bottom:1px solid var(--line);font-size:15px}.vx-about{padding:150px 5vw;display:grid;grid-template-columns:1.4fr .6fr;gap:80px}.vx-about h2{font-family:'Playfair Display',serif;font-weight:500;font-size:clamp(42px,5vw,76px);line-height:1.03;letter-spacing:-.04em;margin:0}.vx-about h2 em,.vx-contact h2 em{color:var(--accent);font-style:italic}.vx-about>p:last-child{align-self:end;color:var(--muted);font-size:15px;line-height:1.7;max-width:400px}.vx-contact{padding:160px 5vw 180px;background:#151519}.vx-contact h2{font-family:'Playfair Display',serif;font-weight:500;font-size:clamp(58px,8vw,120px);line-height:.94;letter-spacing:-.055em;margin:0 0 70px}.vx-contact>a{font-size:16px;border-bottom:1px solid var(--accent);padding-bottom:8px}.vx-footer{display:flex;justify-content:space-between;padding:26px 5vw;color:#77767b;font-size:10px;letter-spacing:.13em;border-top:1px solid var(--line)}@keyframes vxScroll{from{transform:translateX(0)}to{transform:translateX(calc(-50% - 11px))}}@keyframes vxScrollReverse{from{transform:translateX(calc(-50% - 11px))}to{transform:translateX(0)}}
@media(max-width:800px){.vx-header{height:68px;padding:0 5vw}.vx-header nav{display:none}.vx-build{padding:9px 13px}.vx-intro{padding:72px 5vw 45px;display:block}.vx-intro h1{font-size:clamp(64px,18vw,100px)}.vx-intro-right{margin-top:40px}.vx-marquee{padding-bottom:14px}.vx-marquee-track{gap:14px;animation-duration:34s}.vx-marquee.reverse .vx-marquee-track{animation-duration:39s}.vx-work-card{flex-basis:72vw;height:76vw;border-radius:23px}.vx-work-info{left:20px;right:20px;bottom:20px}.vx-work-info h3{font-size:23px;margin-bottom:13px}.vx-tags{gap:6px}.vx-tags span{font-size:9px;padding:9px 11px}.vx-work-note{padding:15px 5vw 0;font-size:8px}.vx-work-note span:nth-child(2){display:none}.vx-stats{min-height:auto}.vx-stats-content{padding:78px 5vw 70px}.vx-stats-lead{font-size:15px;margin-bottom:28px}.vx-stats h2{font-size:clamp(27px,7.5vw,40px);line-height:1.17}.vx-stats-glow{width:260px;height:260px;filter:blur(60px);opacity:.34}.vx-stats-glow-one{top:5%;left:40%}.vx-stats-glow-two{bottom:5%;left:45%}.vx-stat-grid{grid-template-columns:repeat(2,1fr);gap:54px 18px;margin-top:72px}.vx-stat-number{font-size:clamp(52px,15vw,76px)}.vx-stat-label{font-size:9px;line-height:1.35;margin-top:16px}.vx-services,.vx-about,.vx-contact{padding:100px 5vw}.vx-service-grid{grid-template-columns:1fr;margin-top:50px}.vx-about{display:block}.vx-about>p:last-child{margin-top:40px}.vx-contact h2{margin-bottom:50px}.vx-footer{gap:14px;flex-wrap:wrap}.vx-footer span:last-child{width:100%}}
@media(prefers-reduced-motion:reduce){.vx-marquee-track{animation:none}.vx-work-card img,.vx-work-gradient,.vx-work-info{transition:none}}
`;
