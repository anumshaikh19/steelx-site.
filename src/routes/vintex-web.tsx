import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";

export const Route = createFileRoute("/vintex-web")({ component: VintexWebPage });

function VintexWebPage() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const move = (event: MouseEvent) => {
      cursor.style.transform = `translate3d(${event.clientX - 17}px, ${event.clientY - 17}px, 0)`;
    };
    window.addEventListener("mousemove", move);

    const links = Array.from(document.querySelectorAll<HTMLAnchorElement>("[data-vintex-link]"));
    const enter = () => cursor.classList.add("is-hovering");
    const leave = () => cursor.classList.remove("is-hovering");
    links.forEach((link) => {
      link.addEventListener("mouseenter", enter);
      link.addEventListener("mouseleave", leave);
    });

    const revealObserver = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".vintex-reveal").forEach((element) => revealObserver.observe(element));

    return () => {
      window.removeEventListener("mousemove", move);
      links.forEach((link) => {
        link.removeEventListener("mouseenter", enter);
        link.removeEventListener("mouseleave", leave);
      });
      revealObserver.disconnect();
    };
  }, []);

  return (
    <div className="vintex-page">
      <div ref={cursorRef} className="vintex-cursor"><span /></div>
      <div className="vintex-noise" />

      <header className="vintex-nav">
        <a href="#top" data-vintex-link className="vintex-logo">VINTEX<span>®</span></a>
        <nav>
          <a href="#work" data-vintex-link>Work</a>
          <a href="#services" data-vintex-link>Services</a>
          <a href="#about" data-vintex-link>About</a>
        </nav>
        <a href="#contact" data-vintex-link className="vintex-nav-cta">Start a project ↗</a>
      </header>

      <main id="top">
        <section className="vintex-hero">
          <div className="vintex-orbit vintex-orbit-a" />
          <div className="vintex-orbit vintex-orbit-b" />
          <div className="vintex-hero-copy">
            <p className="vintex-eyebrow vintex-reveal">INDEPENDENT DIGITAL STUDIO · INDIA / WORLDWIDE</p>
            <h1 className="vintex-reveal">We build brands<br /><em>people remember.</em></h1>
            <p className="vintex-hero-text vintex-reveal">Strategy, identity, websites and growth systems — designed as one sharp experience for brands that refuse to look ordinary.</p>
            <div className="vintex-actions vintex-reveal">
              <a href="#contact" data-vintex-link className="vintex-button">Build something great <span>↗</span></a>
              <a href="#work" data-vintex-link className="vintex-text-link">See selected work ↓</a>
            </div>
          </div>
          <div className="vintex-hero-visual vintex-reveal">
            <div className="vintex-ring" />
            <div className="vintex-card vintex-card-one"><span>01</span><strong>STRATEGY</strong><small>Signal over noise.</small></div>
            <div className="vintex-card vintex-card-two"><span>02</span><strong>DESIGN</strong><small>Distinct by default.</small></div>
            <div className="vintex-card vintex-card-three"><span>03</span><strong>GROWTH</strong><small>Built to compound.</small></div>
          </div>
          <div className="vintex-scroll">SCROLL TO EXPLORE ↓</div>
        </section>

        <div className="vintex-ticker"><div>BRAND STRATEGY　✦　DIGITAL EXPERIENCES　✦　PERFORMANCE　✦　CREATIVE SYSTEMS　✦　WEB DEVELOPMENT　✦　BRAND STRATEGY　✦　DIGITAL EXPERIENCES　✦</div></div>

        <section className="vintex-section vintex-stats" id="about">
          <p className="vintex-label">/ THE NUMBERS</p>
          <div className="vintex-stats-grid">
            <div><strong>40+</strong><span>Brands launched</span></div>
            <div><strong>72+</strong><span>Digital projects</span></div>
            <div><strong>12+</strong><span>Markets reached</span></div>
            <div><strong>98%</strong><span>Repeat & referral</span></div>
          </div>
        </section>

        <section className="vintex-section vintex-work" id="work">
          <div className="vintex-section-head vintex-reveal"><div><p className="vintex-label">/ SELECTED WORK</p><h2>Work that<br /><em>does the talking.</em></h2></div><p>We don't make portfolio pieces. We make digital systems that give ambitious businesses an unfair advantage.</p></div>
          <div className="vintex-project-grid">
            {[
              ["NOVA", "FORM / 01", "Nova Form", "Fashion · E-commerce · Brand", "vintex-project-a"],
              ["ARC", "CAPITAL", "Arc Capital", "Finance · Digital Product", "vintex-project-b"],
              ["MISO", "HOUSE", "Miso House", "Food · Identity · Experience", "vintex-project-c"],
              ["01 —", "THE FUTURE IS BUILT.", "Orbit Labs", "Technology · Brand platform · WebGL", "vintex-project-d"],
            ].map(([title, sub, name, meta, className]) => (
              <article className={`vintex-project ${name === "Nova Form" ? "vintex-project-large" : name === "Orbit Labs" ? "vintex-project-wide" : ""}`} key={name}>
                <div className={`vintex-project-image ${className}`}><div>{title}<small>{sub}</small></div></div>
                <div className="vintex-project-meta"><div><h3>{name}</h3><p>{meta}</p></div><span>↗</span></div>
              </article>
            ))}
          </div>
        </section>

        <section className="vintex-section vintex-manifesto">
          <div className="vintex-manifesto-word">NOT ANOTHER<br /><em>AGENCY.</em></div>
          <div className="vintex-manifesto-copy"><p className="vintex-label">/ OUR BELIEF</p><p>Good design gets attention. Great digital experiences earn trust, create desire and make action feel inevitable.</p><p className="vintex-muted">That's the standard we build to.</p><a href="#services" data-vintex-link className="vintex-text-link">What we actually do →</a></div>
        </section>

        <section className="vintex-section vintex-services" id="services">
          <div className="vintex-section-head vintex-reveal"><div><p className="vintex-label">/ CAPABILITIES</p><h2>One team.<br /><em>Four engines.</em></h2></div><p>From first idea to first sale, we connect the pieces most agencies keep separate.</p></div>
          <div className="vintex-service-list">
            {[["01", "Brand & Strategy", "Positioning, naming, identity and the strategic idea that makes everything else sharper."],["02", "Web & Digital", "High-conviction websites, e-commerce and digital products engineered for speed and conversion."],["03", "Creative & Content", "Campaign concepts, art direction, motion and content systems that keep the brand impossible to ignore."],["04", "Growth & Performance", "Paid media, CRO, analytics and experiments designed to turn attention into measurable growth."]].map(([num, title, text]) => <article key={num}><span>{num}</span><div><h3>{title}</h3><p>{text}</p></div><b>↗</b></article>)}
          </div>
        </section>

        <section className="vintex-section vintex-process">
          <div className="vintex-section-head"><div><p className="vintex-label">/ HOW WE WORK</p><h2>Simple process.<br /><em>Serious output.</em></h2></div></div>
          <div className="vintex-process-grid">{[["01","Discover","We find the real problem hiding underneath the brief."],["02","Define","We turn insight into a clear strategy, concept and direction."],["03","Build","Design, development and content move together — fast."],["04","Compound","Launch is the start. We learn, optimise and keep improving."]].map(([num,title,text]) => <div key={num}><span>{num}</span><h3>{title}</h3><p>{text}</p></div>)}</div>
        </section>

        <section className="vintex-section vintex-faq">
          <div className="vintex-section-head"><div><p className="vintex-label">/ FAQ</p><h2>Before we<br /><em>start.</em></h2></div></div>
          <div className="vintex-faq-list">{["What kind of brands do you work with?","Can you handle strategy through development?","How long does a typical project take?","Do you work outside India?"].map((q) => <details key={q}><summary>{q}<span>+</span></summary><p>Ambitious founders, challenger brands and established businesses that care about how they show up and where they are going.</p></details>)}</div>
        </section>

        <section className="vintex-contact" id="contact">
          <div className="vintex-contact-glow" />
          <p className="vintex-label">/ LET'S MAKE SOMETHING MATTER</p>
          <h2>Have a good<br /><em>problem?</em></h2>
          <p>Tell us what you're building, fixing or dreaming about. We'll tell you what we'd do next.</p>
          <a href="mailto:hello@vintexweb.com" data-vintex-link className="vintex-button vintex-button-light">Start a conversation <span>↗</span></a>
          <div className="vintex-contact-bottom"><span>hello@vintexweb.com</span><span>India · Worldwide</span><span>© 2026 VINTEX WEB</span></div>
        </section>
      </main>

      <style>{vintexStyles}</style>
    </div>
  );
}

const vintexStyles = `
.vintex-page{background:#f4f0e8;color:#171714;font-family:Manrope,Arial,sans-serif;overflow:hidden}.vintex-page *{box-sizing:border-box}.vintex-page a{color:inherit}.vintex-noise{position:fixed;inset:0;pointer-events:none;z-index:50;opacity:.035;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")}.vintex-cursor{position:fixed;width:34px;height:34px;border:1px solid #171714;border-radius:50%;pointer-events:none;z-index:100;transition:width .25s,height .25s;background:transparent}.vintex-cursor span{position:absolute;width:4px;height:4px;background:#171714;border-radius:50%;left:50%;top:50%;transform:translate(-50%,-50%)}.vintex-cursor.is-hovering{width:52px;height:52px}.vintex-nav{height:82px;padding:0 7vw;display:flex;align-items:center;justify-content:space-between;position:absolute;top:0;left:0;right:0;z-index:10}.vintex-logo{font:700 1.15rem 'Space Grotesk';letter-spacing:-.06em;text-decoration:none}.vintex-logo span{font-size:.45em;vertical-align:top}.vintex-nav nav{display:flex;gap:34px;margin-left:auto;margin-right:38px}.vintex-nav nav a,.vintex-nav-cta{font:500 .68rem 'DM Mono';text-transform:uppercase;letter-spacing:.13em;text-decoration:none}.vintex-nav-cta{border-bottom:1px solid;padding-bottom:6px}.vintex-hero{min-height:100svh;position:relative;padding:150px 7vw 70px;display:grid;grid-template-columns:1.05fr .95fr;align-items:center;background:#d9d3c6;overflow:hidden}.vintex-hero-copy{position:relative;z-index:2}.vintex-eyebrow,.vintex-label{font:500 .61rem 'DM Mono';letter-spacing:.17em}.vintex-hero h1{font:600 clamp(4rem,8.5vw,9.4rem);line-height:.83;letter-spacing:-.075em;margin:30px 0 35px}.vintex-hero h1 em,.vintex-section-head h2 em,.vintex-manifesto-word em,.vintex-contact h2 em{font-family:Georgia,serif;font-weight:400}.vintex-hero-text{max-width:530px;font-size:1rem;line-height:1.7;color:#4c4a43}.vintex-actions{display:flex;align-items:center;gap:30px;margin-top:38px}.vintex-button{display:inline-flex;align-items:center;gap:30px;padding:18px 21px;background:#171714;color:#f4f0e8!important;text-decoration:none;font:500 .65rem 'DM Mono';text-transform:uppercase;letter-spacing:.12em;transition:transform .3s}.vintex-button:hover{transform:translateY(-4px)}.vintex-text-link{font:500 .64rem 'DM Mono';text-transform:uppercase;letter-spacing:.12em;text-decoration:none;border-bottom:1px solid;padding-bottom:5px}.vintex-hero-visual{height:600px;position:relative;display:flex;align-items:center;justify-content:center}.vintex-ring{width:410px;height:410px;border:1px solid #171714;border-radius:50%;position:absolute;box-shadow:0 0 0 70px rgba(23,23,20,.025),0 0 0 140px rgba(23,23,20,.018);animation:vintexSpin 25s linear infinite}.vintex-ring:before,.vintex-ring:after{content:"";position:absolute;inset:50%;width:1px;height:130%;background:#171714;transform:translate(-50%,-50%);opacity:.15}.vintex-ring:after{transform:translate(-50%,-50%) rotate(90deg)}.vintex-card{position:absolute;width:210px;height:140px;padding:18px;background:rgba(244,240,232,.78);backdrop-filter:blur(10px);border:1px solid rgba(23,23,20,.3);display:flex;flex-direction:column;justify-content:space-between;box-shadow:10px 18px 40px rgba(23,23,20,.12)}.vintex-card span,.vintex-card small{font:500 .55rem 'DM Mono'}.vintex-card strong{font:600 1.35rem 'Space Grotesk';letter-spacing:-.05em}.vintex-card small{font-family:Manrope;color:#68665e}.vintex-card-one{transform:rotate(-10deg) translate(-60px,-120px);animation:vintexFloat1 6s ease-in-out infinite}.vintex-card-two{transform:rotate(6deg) translate(100px,10px);animation:vintexFloat2 7s ease-in-out infinite}.vintex-card-three{transform:rotate(-4deg) translate(-100px,150px);animation:vintexFloat3 8s ease-in-out infinite}.vintex-scroll{position:absolute;bottom:25px;left:7vw;font:500 .56rem 'DM Mono';letter-spacing:.16em}.vintex-ticker{overflow:hidden;background:#171714;color:#f4f0e8;padding:18px 0}.vintex-ticker div{width:max-content;animation:vintexTicker 30s linear infinite;font:500 .68rem 'DM Mono';letter-spacing:.12em}.vintex-section{padding:130px 7vw}.vintex-stats{background:#f4f0e8}.vintex-stats-grid{display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid #aaa59b;margin-top:42px}.vintex-stats-grid>div{padding:35px 20px 10px 0;border-right:1px solid #aaa59b}.vintex-stats-grid>div:not(:first-child){padding-left:30px}.vintex-stats-grid>div:last-child{border:0}.vintex-stats strong{display:block;font:600 clamp(3.5rem,7vw,7rem) 'Space Grotesk';letter-spacing:-.08em}.vintex-stats span{display:block;margin-top:5px;font:500 .62rem 'DM Mono';text-transform:uppercase;letter-spacing:.13em;color:#68665e}.vintex-work,.vintex-process{background:#ebe6dc}.vintex-section-head{display:flex;justify-content:space-between;gap:50px;align-items:end;margin-bottom:65px}.vintex-section-head h2{font:600 clamp(3rem,6.2vw,7rem) 'Space Grotesk';letter-spacing:-.07em;line-height:.86;margin:20px 0 0}.vintex-section-head>p{max-width:390px;color:#656159;line-height:1.7;font-size:.92rem}.vintex-project-grid{display:grid;grid-template-columns:1.35fr .65fr;gap:70px 24px}.vintex-project-wide{grid-column:1/-1;max-width:76%;margin:auto;width:100%}.vintex-project-image{aspect-ratio:1.2;overflow:hidden;position:relative;display:grid;place-items:center;transition:transform .5s}.vintex-project-large .vintex-project-image{aspect-ratio:1.45}.vintex-project:hover .vintex-project-image{transform:scale(.985)}.vintex-project-image>div{position:relative;z-index:1;color:#f4f0e8;font:600 clamp(2.5rem,7vw,7rem) 'Space Grotesk';line-height:.8;letter-spacing:-.08em}.vintex-project-image small{display:block;font:500 .55em 'DM Mono';letter-spacing:.08em}.vintex-project-a{background:linear-gradient(130deg,#8d8a80,#d8c9b2 40%,#5d5a54)}.vintex-project-a:before{content:"";position:absolute;width:46%;height:125%;background:#111;transform:rotate(17deg);box-shadow:30px 0 60px rgba(0,0,0,.25)}.vintex-project-b{background:radial-gradient(circle at 65% 35%,#e8d8bb,#8e795c 30%,#2a2b29 72%)}.vintex-project-c{background:linear-gradient(145deg,#cfb99c,#5c3524 45%,#1d1714)}.vintex-project-d{background:radial-gradient(circle at 50% 50%,#dbd8cf 0,#87877e 18%,#22231f 60%,#090a09)}.vintex-project-meta{display:flex;justify-content:space-between;padding-top:17px;border-top:1px solid #969187;margin-top:15px}.vintex-project-meta h3{font:600 1.4rem 'Space Grotesk';margin:0}.vintex-project-meta p{font-size:.66rem;color:#6d6a61;margin:5px 0}.vintex-manifesto{background:#171714;color:#f4f0e8;display:grid;grid-template-columns:1.3fr .7fr;gap:7vw;align-items:end}.vintex-manifesto-word{font:600 clamp(4rem,10vw,11rem) 'Space Grotesk';letter-spacing:-.09em;line-height:.78}.vintex-manifesto-copy{max-width:420px}.vintex-manifesto-copy p:not(.vintex-label){font-size:1.3rem;line-height:1.45;margin:35px 0 0}.vintex-manifesto-copy .vintex-muted{font:500 .82rem 'DM Mono';color:#aaa79e;margin-top:22px}.vintex-manifesto-copy .vintex-text-link{display:inline-block;margin-top:38px}.vintex-services{background:#f4f0e8}.vintex-service-list{border-top:1px solid #aaa59b}.vintex-service-list article{display:grid;grid-template-columns:80px 1fr 50px;gap:20px;padding:35px 0;border-bottom:1px solid #aaa59b;align-items:start;transition:padding .3s}.vintex-service-list article:hover{padding-left:18px;padding-right:18px;background:#e9e4da}.vintex-service-list article>span{font:500 .62rem 'DM Mono';color:#77736a}.vintex-service-list h3{font:600 clamp(1.8rem,3vw,3rem) 'Space Grotesk';margin:0}.vintex-service-list p{max-width:650px;color:#68655d;line-height:1.6;margin:9px 0 0;font-size:.85rem}.vintex-service-list b{font-weight:400;text-align:right}.vintex-process{background:#ebe6dc}.vintex-process-grid{display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid #aaa59b}.vintex-process-grid>div{padding:28px 22px 20px 0;border-right:1px solid #aaa59b}.vintex-process-grid>div:not(:first-child){padding-left:22px}.vintex-process-grid>div:last-child{border:0}.vintex-process-grid span{font:500 .6rem 'DM Mono'}.vintex-process-grid h3{font:600 1.7rem 'Space Grotesk';margin:45px 0 10px}.vintex-process-grid p{color:#68655d;font-size:.8rem;line-height:1.6;max-width:220px}.vintex-faq{background:#f4f0e8}.vintex-faq-list{max-width:900px;margin-left:auto;border-top:1px solid #aaa59b}.vintex-faq details{border-bottom:1px solid #aaa59b;padding:25px 0}.vintex-faq summary{list-style:none;cursor:pointer;display:flex;justify-content:space-between;font:500 1.15rem 'Space Grotesk'}.vintex-faq summary::-webkit-details-marker{display:none}.vintex-faq summary span{font-family:'DM Mono'}.vintex-faq details p{max-width:680px;color:#68655d;line-height:1.65;font-size:.84rem;margin:20px 0 5px}.vintex-contact{position:relative;overflow:hidden;background:#171714;color:#f4f0e8;padding:150px 7vw 35px;min-height:88vh;display:flex;flex-direction:column;justify-content:center}.vintex-contact .vintex-label{color:#aaa79e}.vintex-contact h2{font:600 clamp(5rem,13vw,14rem) 'Space Grotesk';letter-spacing:-.1em;line-height:.76;margin:55px 0 35px;position:relative;z-index:1}.vintex-contact>p:not(.vintex-label){max-width:440px;color:#aaa79e;line-height:1.65;font-size:.9rem;position:relative;z-index:1}.vintex-button-light{width:max-content;margin-top:35px;background:#f4f0e8;color:#171714!important}.vintex-contact-glow{position:absolute;width:650px;height:650px;border-radius:50%;right:-150px;top:80px;background:radial-gradient(circle,#d6c6a6 0,rgba(214,198,166,.18) 20%,transparent 68%);filter:blur(5px);opacity:.6}.vintex-contact-bottom{display:flex;justify-content:space-between;gap:20px;border-top:1px solid #45443f;padding-top:18px;margin-top:100px;font:500 .57rem 'DM Mono';text-transform:uppercase;letter-spacing:.12em;color:#85827a}.vintex-reveal{opacity:0;transform:translateY(24px);transition:opacity .8s ease,transform .8s cubic-bezier(.16,1,.3,1)}.vintex-reveal.is-visible{opacity:1;transform:none}@keyframes vintexTicker{to{transform:translateX(-50%)}}@keyframes vintexSpin{to{transform:rotate(360deg)}}@keyframes vintexFloat1{50%{transform:rotate(-7deg) translate(-55px,-130px)}}@keyframes vintexFloat2{50%{transform:rotate(10deg) translate(95px,0)}}@keyframes vintexFloat3{50%{transform:rotate(-1deg) translate(-92px,140px)}}@media(max-width:850px){.vintex-nav nav,.vintex-nav-cta{display:none}.vintex-hero{grid-template-columns:1fr;padding-top:120px}.vintex-hero-visual{height:430px;order:-1}.vintex-ring{width:280px;height:280px}.vintex-card{width:150px;height:105px;padding:12px}.vintex-card strong{font-size:1rem}.vintex-project-grid{grid-template-columns:1fr}.vintex-project-wide{grid-column:auto;max-width:none}.vintex-section-head{display:block}.vintex-section-head>p{margin-top:25px}.vintex-stats-grid{grid-template-columns:1fr 1fr}.vintex-stats-grid>div{border-bottom:1px solid #aaa59b}.vintex-stats-grid>div:nth-child(2){border-right:0}.vintex-manifesto{grid-template-columns:1fr}.vintex-manifesto-copy{margin-top:55px}.vintex-process-grid{grid-template-columns:1fr 1fr}.vintex-process-grid>div{border-bottom:1px solid #aaa59b}.vintex-contact-bottom{flex-direction:column}.vintex-cursor{display:none}}@media(max-width:560px){.vintex-hero{padding-left:5vw;padding-right:5vw}.vintex-section{padding:90px 5vw}.vintex-hero h1{font-size:17vw}.vintex-hero-text{font-size:.9rem}.vintex-actions{align-items:flex-start;flex-direction:column}.vintex-section-head h2{font-size:16vw}.vintex-stats strong{font-size:17vw}.vintex-manifesto-word{font-size:17vw}.vintex-contact h2{font-size:18vw}.vintex-service-list article{grid-template-columns:40px 1fr 25px}}
`;
