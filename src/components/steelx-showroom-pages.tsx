import { useEffect, useMemo, useState } from "react";
import { ArrowDownRight, ArrowUpRight, ChevronLeft, ChevronRight, Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import "@/styles/steelx-showroom.css";
import "@/styles/steelx-motion.css";
import "@/styles/steelx-final-polish.css";
import { SteelXShowroomRuntime } from "@/components/steelx-showroom-runtime";

import mirror from "@/assets/ds-mirror.jpg";
import hairline from "@/assets/ds-hairline.jpg";
import embossed from "@/assets/ds-embossed.jpg";
import beadblast from "@/assets/ds-beadblast.jpg";
import ripple from "@/assets/ds-ripple.jpg";
import appInterior from "@/assets/ds-app-interior.jpg";
import appCeiling from "@/assets/ds-app-ceiling.jpg";
import appExterior from "@/assets/ds-app-exterior.jpg";
import hmGold from "@/assets/hm-gold.jpg";
import hmRoseGold from "@/assets/hm-rose-gold.jpg";
import hmChampagne from "@/assets/hm-champagne.jpg";
import hmBronze from "@/assets/hm-bronze.jpg";
import hmBlack from "@/assets/hm-black.jpg";

const finishes = [
  { name: "Mirror", image: mirror, note: "Optical reflection", grade: "Project specification" },
  { name: "Hairline", image: hairline, note: "Directional grain", grade: "Project specification" },
  { name: "Embossed", image: embossed, note: "Physical relief", grade: "Project specification" },
  { name: "Bead Blast", image: beadblast, note: "Diffuse matte", grade: "Project specification" },
  { name: "Water Ripple", image: ripple, note: "Fluid texture", grade: "Project specification" },
  { name: "Hammered", image: hmChampagne, note: "Hammered texture", grade: "Project specification" },
];

const colourWorld = [
  { name: "Gold", image: hmGold },
  { name: "Champagne", image: hmChampagne },
  { name: "Rose Gold", image: hmRoseGold },
  { name: "Bronze", image: hmBronze },
  { name: "Black", image: hmBlack },
];

const applications = [
  { title: "Elevators", image: appInterior, text: "Cabins, doors and jambs where grain, reflection and joint discipline become part of the architecture." },
  { title: "Feature walls", image: appInterior, text: "Large-format surfaces that make light and material the focal point of the room." },
  { title: "Hospitality", image: appCeiling, text: "Reception, restaurant and lounge surfaces with a richer, more tactile metal language." },
  { title: "Retail", image: appExterior, text: "Display environments where colour, reflection and precision communicate value." },
  { title: "Ceilings", image: appCeiling, text: "Soffits and overhead planes designed to catch or diffuse light with intent." },
  { title: "Furniture & doors", image: appInterior, text: "Joinery faces, furniture skins and door leaves coordinated as one surface language." },
];

const profiles = [
  { name: "L-ANGLE", use: "External corners / edge protection", dimensions: "Project dependent", image: hairline },
  { name: "T-PROFILE", use: "Panel junctions / transitions", dimensions: "Project dependent", image: mirror },
  { name: "SHADOW GAP", use: "Recessed architectural reveals", dimensions: "Project dependent", image: beadblast },
  { name: "U-CHANNEL", use: "Glass / panel framing", dimensions: "Project dependent", image: hmBlack },
];

const profileApplications = [
  { title: "Architectural edges", image: appInterior, text: "Crisp termination at wall, ceiling and furniture interfaces." },
  { title: "Transitions", image: appCeiling, text: "Quiet junctions between different materials, planes and levels." },
  { title: "Reveal details", image: appExterior, text: "Shadow gaps and recessed lines that sharpen interior geometry." },
];

type PageKind = "sheets" | "profiles";

export function SteelXShowroomPage({ kind }: { kind: PageKind }) {
  const isSheets = kind === "sheets";
  return (
    <div className="sx-page">
      <SteelXShowroomRuntime />
      <SteelXNav kind={kind} />
      {isSheets ? <SheetsPage /> : <ProfilesPage />}
      <SteelXFooter />
    </div>
  );
}

function SteelXNav({ kind }: { kind: PageKind }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const finishHref = kind === "sheets" ? "#finishes" : "#finishes";
  return (
    <header className={`sx-nav ${scrolled ? "is-scrolled" : ""}`}>
      <Link to="/" className="sx-logo" aria-label="STEELX home">STEELX</Link>
      <nav className="sx-nav-links" aria-label="Primary navigation">
        <Link to="/stainless-steel-decorative-sheets">Products</Link>
        <Link to={kind === "sheets" ? "/stainless-steel-decorative-profiles" : "/stainless-steel-decorative-sheets"}>Profiles</Link>
        <a href="#applications">Applications</a>
        <a href={finishHref}>Finishes</a>
        <Link to="/studio">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/contact" className="sx-quote">Request a quote <ArrowUpRight size={14} /></Link>
      </nav>
      <button className="sx-menu" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      {open && (
        <div className="sx-mobile-menu">
          <Link to="/stainless-steel-decorative-sheets" onClick={() => setOpen(false)}>Decorative Sheets</Link>
          <Link to="/stainless-steel-decorative-profiles" onClick={() => setOpen(false)}>Decorative Profiles</Link>
          <a href="#applications" onClick={() => setOpen(false)}>Applications</a>
          <a href={finishHref} onClick={() => setOpen(false)}>Finishes</a>
          <Link to="/studio" onClick={() => setOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
          <Link to="/contact" className="sx-mobile-quote" onClick={() => setOpen(false)}>Request a quote <ArrowUpRight size={15} /></Link>
        </div>
      )}
    </header>
  );
}

function Hero({ kind }: { kind: PageKind }) {
  const isSheets = kind === "sheets";
  return (
    <section className="sx-hero">
      <div className="sx-hero-image" style={{ backgroundImage: `url(${isSheets ? mirror : hairline})` }} />
      <div className="sx-hero-shade" />
      <div className="sx-hero-grid" />
      <div className="sx-hero-copy">
        <div className="sx-kicker">STEELX / ARCHITECTURAL SURFACES</div>
        <h1>{isSheets ? <>STAINLESS<br />STEEL<br /><em>DECORATIVE</em><br />SHEETS</> : <>STAINLESS<br />STEEL<br /><em>DECORATIVE</em><br />PROFILES</>}</h1>
        <p>{isSheets ? "Premium stainless-steel surfaces for architectural interiors, selected for reflection, texture and atmosphere." : "Precision-finished stainless-steel profiles for architectural edges, transitions, reveals and interior detailing."}</p>
        <div className="sx-hero-actions">
          <a href={isSheets ? "#finishes" : "#profiles"} className="sx-button sx-button-solid">{isSheets ? "Explore finishes" : "Explore profiles"} <ArrowDownRight size={16} /></a>
          <Link to="/contact" className="sx-button">Request a quote <ArrowUpRight size={16} /></Link>
        </div>
      </div>
      <div className="sx-hero-meta"><span>01 / 02</span><span>{isSheets ? "SURFACES" : "DETAILING"}</span><span>SCROLL TO EXPLORE <ArrowDownRight size={14} /></span></div>
      <div className="sx-hero-index">{isSheets ? "SHEETS" : "PROFILES"}</div>
    </section>
  );
}

function SheetsPage() {
  const [active, setActive] = useState(0);
  const selected = finishes[active];
  return (
    <>
      <Hero kind="sheets" />
      <section className="sx-intro sx-container"><div className="sx-section-number">01</div><div className="sx-intro-title">SURFACE<br /><span>AS ARCHITECTURE.</span></div><div className="sx-intro-copy"><p className="sx-lead">Steel is not simply a finish. It is a surface system — one that changes with distance, light, touch and the geometry around it.</p><p>STEELX develops architectural stainless-steel sheets for designers who need engineered metal without sacrificing atmosphere. From quiet hairline grain to deep embossed relief, each finish is selected for its visual character.</p><Link to="/contact" className="sx-text-link">Discuss a material brief <ArrowUpRight size={15} /></Link></div></section>
      <section className="sx-material-showcase"><div className="sx-container sx-showcase-grid"><div className="sx-showcase-image"><img src={selected.image} alt={`${selected.name} stainless steel finish`} /></div><div className="sx-showcase-panel"><div className="sx-kicker">02 / MATERIAL SHOWCASE</div><div className="sx-showcase-title">{selected.name.toUpperCase()}</div><div className="sx-showcase-rule" /><p>{selected.note}. A surface selected for how it holds light across an architectural plane.</p><div className="sx-spec-line"><span>DATA</span><strong>Project specification</strong></div><div className="sx-spec-line"><span>CHARACTER</span><strong>{selected.note}</strong></div><div className="sx-spec-line"><span>APPLICATION</span><strong>Interior / architectural</strong></div><a href="#finishes" className="sx-text-link">View finish library <ArrowDownRight size={15} /></a></div></div></section>
      <section id="finishes" className="sx-finishes sx-container"><div className="sx-section-head"><div><div className="sx-kicker">03 / FINISH COLLECTION</div><h2>THE MATERIAL<br /><em>LIBRARY.</em></h2></div><p>Six documented surface families, each with a distinct relationship to reflection, grain, texture and shadow.</p></div><div className="sx-finish-editorial">{finishes.map((finish, index) => <button key={finish.name} className={`sx-finish-row ${active === index ? "is-active" : ""}`} onClick={() => setActive(index)} aria-pressed={active === index}><span className="sx-finish-no">0{index + 1}</span><span className="sx-finish-name">{finish.name}</span><span className="sx-finish-note">{finish.note}</span><span className="sx-finish-arrow">{active === index ? <ArrowUpRight size={19} /> : <ArrowDownRight size={19} />}</span></button>)}</div></section>
      <section className="sx-selector"><div className="sx-container sx-selector-grid"><div className="sx-selector-copy"><div className="sx-kicker">04 / INTERACTIVE FINISH SELECTOR</div><h2>CHANGE THE<br /><em>LIGHT.</em></h2><p>Move through the library and see how the same composition changes as the surface changes.</p><div className="sx-selector-controls"><button onClick={() => setActive((active - 1 + finishes.length) % finishes.length)} aria-label="Previous finish"><ChevronLeft size={19} /></button><span>{String(active + 1).padStart(2, "0")} / {String(finishes.length).padStart(2, "0")}</span><button onClick={() => setActive((active + 1) % finishes.length)} aria-label="Next finish"><ChevronRight size={19} /></button></div></div><div className="sx-selector-image"><img src={selected.image} alt={`${selected.name} selected material`} /><div className="sx-selector-caption"><span>{selected.name}</span><span>Project specification</span></div></div></div></section>
      <EditorialApplications /><SheetsProjects /><TechnicalSheets /><LuxuryCTA label="SPECIFY STEELX" sub="Samples, technical data and project pricing" />
    </>
  );
}

function EditorialApplications() { const [active, setActive] = useState(0); const item = applications[active]; return <section id="applications" className="sx-applications"><div className="sx-container"><div className="sx-section-head sx-section-head-light"><div><div className="sx-kicker">05 / APPLICATIONS</div><h2>MADE FOR<br /><em>THE SPACE.</em></h2></div><p>Architectural surfaces are strongest when material and detail are designed together.</p></div><div className="sx-app-stage"><img src={item.image} alt={item.title} /><div className="sx-app-overlay" /><div className="sx-app-content"><span>0{active + 1}</span><h3>{item.title}</h3><p>{item.text}</p></div><div className="sx-app-tabs">{applications.map((app, i) => <button key={app.title} onClick={() => setActive(i)} className={active === i ? "is-active" : ""} aria-pressed={active === i}>{app.title}</button>)}</div></div></div></section>; }
function SheetsProjects() { return <section className="sx-projects sx-container"><div className="sx-kicker">06 / PROJECT LANGUAGE</div><div className="sx-project-grid"><div className="sx-project-copy"><h2>METAL,<br /><em>WITH PRESENCE.</em></h2><p>From lift interiors to hospitality feature planes, decorative stainless steel becomes architecture when proportion, jointing and light are resolved as one.</p><Link to="/projects" className="sx-text-link">View the project archive <ArrowUpRight size={15} /></Link></div><div className="sx-project-image large"><img loading="lazy" src={appInterior} alt="Architectural interior with stainless steel surfaces" /></div><div className="sx-project-image small"><img loading="lazy" src={appCeiling} alt="Metal ceiling architectural detail" /></div></div></section>; }
function TechnicalSheets() { return <section className="sx-technical"><div className="sx-container sx-tech-grid"><div><div className="sx-kicker">07 / TECHNICAL INFORMATION</div><h2>SPECIFY<br /><em>WITH CONFIDENCE.</em></h2><p>Technical information is confirmed against the project brief, selected finish and fabrication requirement. Request the current material data for your specification.</p></div><div className="sx-tech-list"><div className="sx-production-note sx-tech-row"><span>DATA</span><strong>Current technical information available on request</strong></div><Link to="/contact" className="sx-tech-link">Request technical information <ArrowUpRight size={15} /></Link></div></div></section>; }

function ProfilesPage() { const [active, setActive] = useState(0); const profile = profiles[active]; const profileColour = useMemo(() => active === 3 ? "black" : active === 1 ? "silver" : active === 2 ? "matte" : "hairline", [active]); return <><Hero kind="profiles" /><section className="sx-intro sx-container"><div className="sx-section-number">01</div><div className="sx-intro-title">THE DETAIL<br /><span>IS THE EDGE.</span></div><div className="sx-intro-copy"><p className="sx-lead">Profiles turn the meeting of two materials into a deliberate architectural line.</p><p>STEELX decorative profiles are conceived as companions to stainless-steel sheets — trims, transitions, channels and shadow gaps with the same discipline of finish and colour.</p><Link to="/contact" className="sx-text-link">Discuss a profile detail <ArrowUpRight size={15} /></Link></div></section><section id="profiles" className="sx-profile-collection sx-container"><div className="sx-section-head"><div><div className="sx-kicker">02 / PROFILE COLLECTION</div><h2>LINES THAT<br /><em>FINISH SPACE.</em></h2></div><p>Choose the section by the architectural problem first. Finish, colour and fabrication are resolved against the project brief.</p></div><div className="sx-profile-layout"><div className="sx-profile-list">{profiles.map((p, i) => <button key={p.name} onClick={() => setActive(i)} className={`sx-profile-item ${active === i ? "is-active" : ""}`} aria-pressed={active === i}><span>0{i + 1}</span><strong>{p.name}</strong><small>{p.use}</small><ArrowUpRight size={16} /></button>)}</div><div className={`sx-profile-viewer sx-profile-${profileColour}`}><div className="sx-profile-metal" style={{ backgroundImage: `url(${profile.image})` }} /><div className="sx-profile-diagram" aria-hidden="true"><div className="profile-shape" /><span>A</span><span>B</span><span>C</span></div><div className="sx-profile-caption"><span>{profile.name}</span><span>Project dependent</span></div></div></div></section><section className="sx-drawings"><div className="sx-container"><div className="sx-kicker">03 / TECHNICAL DRAWINGS</div><div className="sx-drawing-grid">{["EDGE / L-ANGLE", "JUNCTION / T-PROFILE", "REVEAL / SHADOW GAP"].map((title, i) => <div className="sx-drawing" key={title}><div className={`drawing-geometry geometry-${i + 1}`}><span>01</span><span>02</span><span>03</span></div><div><strong>{title}</strong><small>Section geometry · dimensions confirmed per project</small></div></div>)}</div></div></section><section id="finishes" className="sx-profile-finishes sx-container"><div className="sx-section-head"><div><div className="sx-kicker">04 / FINISHES</div><h2>ONE DETAIL.<br /><em>MANY READINGS.</em></h2></div><p>Profiles can be coordinated with the surrounding sheet package so the detail disappears — or deliberately catches the eye.</p></div><div className="sx-colour-strip">{colourWorld.map((c) => <div className="sx-colour-card" key={c.name}><img loading="lazy" src={c.image} alt={`${c.name} PVD stainless steel`} /><div><span>{c.name}</span><small>PVD colour</small></div></div>)}</div></section><section id="applications" className="sx-applications sx-profile-applications"><div className="sx-container"><div className="sx-section-head sx-section-head-light"><div><div className="sx-kicker">05 / APPLICATIONS</div><h2>THE ARCHITECTURAL<br /><em>LINE.</em></h2></div><p>Profiles are small in section but large in effect: they control how a space meets itself.</p></div><div className="sx-profile-app-grid">{profileApplications.map((item, i) => <article key={item.title} className={i === 0 ? "is-wide" : ""}><img loading="lazy" src={item.image} alt={item.title} /><div className="sx-profile-app-copy"><span>0{i + 1}</span><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div></div></section><section className="sx-custom sx-container"><div className="sx-custom-mark">X</div><div><div className="sx-kicker">06 / CUSTOM PROFILES</div><h2>IF THE DRAWING<br /><em>NEEDS A NEW LINE.</em></h2><p>Share the section, finish requirement and project quantity. Custom dimensions, bends, holes and fabricated assemblies can be reviewed as part of the enquiry.</p><Link to="/contact" className="sx-button sx-button-solid">Start a custom enquiry <ArrowUpRight size={16} /></Link></div></section><LuxuryCTA label="BUILD THE DETAIL" sub="Coordinate profiles, sheets and finishes for the same project" /></>; }
function LuxuryCTA({ label, sub }: { label: string; sub: string }) { return <section className="sx-cta"><div className="sx-container sx-cta-inner"><div className="sx-kicker">STEELX STUDIO</div><h2>{label}<br /><em>WITH INTENT.</em></h2><p>{sub}</p><Link to="/contact" className="sx-button sx-button-light">Request a quote <ArrowUpRight size={16} /></Link></div><div className="sx-cta-line" /></section>; }
function SteelXFooter() { return <footer className="sx-footer"><div className="sx-container"><div className="sx-footer-top"><div><div className="sx-footer-logo">STEELX<span>®</span></div><p>Architectural stainless-steel surfaces and precision detailing for contemporary spaces.</p></div><div className="sx-footer-links"><Link to="/stainless-steel-decorative-sheets">Decorative sheets</Link><Link to="/stainless-steel-decorative-profiles">Decorative profiles</Link><Link to="/projects">Projects</Link><Link to="/journal">Journal</Link><Link to="/contact">Contact</Link></div><div className="sx-footer-contact"><span>PROJECT ENQUIRIES</span><Link to="/contact">Start a conversation <ArrowUpRight size={14} /></Link></div></div><div className="sx-footer-bottom"><span>© {new Date().getFullYear()} STEELX. All rights reserved.</span><span>STAINLESS / PVD / PRECISION</span></div></div></footer>; }
