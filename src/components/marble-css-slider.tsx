const slides = [
  {
    number: "01",
    category: "Natural Marble",
    title: "Calacatta Oro",
    subtitle: "Quiet movement. Warm veining. Italian character.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=90",
    origin: "Carrara, Italy",
  },
  {
    number: "02",
    category: "Natural Marble",
    title: "Nero Marquina",
    subtitle: "Deep black ground with restrained white movement.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=90",
    origin: "Basque Country",
  },
  {
    number: "03",
    category: "Natural Marble",
    title: "Bianco Carrara",
    subtitle: "A timeless white surface for calm architectural spaces.",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1800&q=90",
    origin: "Tuscany, Italy",
  },
  {
    number: "04",
    category: "Quartzite",
    title: "Taj Mahal",
    subtitle: "Soft mineral depth with the practicality of quartzite.",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1800&q=90",
    origin: "Brazil",
  },
];

export function MarbleCssSlider() {
  return (
    <section className="marble-css-slider" aria-label="Featured marble collection">
      <style>{`
        .marble-css-slider{--m-bg:#fafafa;--m-surface:#f5f5f5;--m-text:#202020;--m-muted:#626262;--m-line:rgba(20,20,20,.12);--m-gold:#d4af37;--m-card:rgba(255,255,255,.76);--m-cursor:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Ccircle cx='12' cy='12' r='9' fill='none' stroke='%23d4af37' stroke-width='1.5'/%3E%3Ccircle cx='12' cy='12' r='2' fill='%23d4af37'/%3E%3C/svg%3E") 12 12,auto;color:var(--m-text);background:var(--m-bg);font-family:'Lato',sans-serif;border-bottom:1px solid var(--m-line);color-scheme:light dark;isolation:isolate}
        @media (prefers-color-scheme:dark){.marble-css-slider{--m-bg:#1b1b1b;--m-surface:#2c2c2c;--m-text:#f2f0eb;--m-muted:#b4b0a8;--m-line:rgba(255,255,255,.14);--m-card:rgba(44,44,44,.8)}}
        .marble-css-slider *{box-sizing:border-box}.marble-css-slider__inner{max-width:1600px;margin:auto;padding:clamp(72px,8vw,126px) clamp(20px,4vw,64px) 46px}.marble-css-slider__head{display:flex;align-items:end;justify-content:space-between;gap:28px;margin-bottom:28px}.marble-css-slider__eyebrow{font:600 10px/1 'Cinzel',serif;letter-spacing:.32em;text-transform:uppercase;color:var(--m-gold);margin:0 0 14px}.marble-css-slider h1{font:500 clamp(42px,5.6vw,84px)/.94 'Playfair Display',serif;letter-spacing:-.045em;margin:0}.marble-css-slider__intro{max-width:360px;color:var(--m-muted);font-size:13px;line-height:1.8;margin:0}.marble-css-slider__viewport{position:relative}.marble-css-slider__radios{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}.marble-css-slider__track{display:grid;grid-auto-flow:column;grid-auto-columns:100%;overflow-x:auto;scroll-snap-type:x mandatory;scroll-behavior:smooth;overscroll-behavior-x:contain;scrollbar-width:none;cursor:var(--m-cursor);border:1px solid var(--m-line);background:var(--m-surface)}.marble-css-slider__track::-webkit-scrollbar{display:none}.marble-css-slider__slide{position:relative;min-width:0;min-height:clamp(430px,58vw,690px);scroll-snap-align:start;overflow:hidden;background:var(--m-surface)}.marble-css-slider__slide::before{content:"";position:absolute;inset:0;background-image:var(--m-image);background-position:center;background-size:cover;opacity:.085;mix-blend-mode:multiply;filter:saturate(.7);transition:opacity .5s ease}.marble-css-slider__slide::after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,var(--m-surface) 0%,color-mix(in srgb,var(--m-surface) 94%,transparent) 44%,transparent 100%);opacity:.94}.marble-css-slider__copy{position:relative;z-index:2;display:flex;min-height:inherit;max-width:660px;flex-direction:column;justify-content:center;padding:clamp(30px,6vw,88px);gap:0}.marble-css-slider__meta{display:flex;align-items:center;gap:14px;color:var(--m-muted);font-size:10px;letter-spacing:.18em;text-transform:uppercase}.marble-css-slider__rule{width:42px;height:1px;background:var(--m-gold)}.marble-css-slider__title{margin:18px 0 12px;font:500 clamp(44px,6vw,88px)/.94 'Playfair Display',serif;letter-spacing:-.045em}.marble-css-slider__subtitle{max-width:480px;margin:0;color:var(--m-muted);font-size:14px;line-height:1.8}.marble-css-slider__origin{display:inline-flex;width:max-content;margin-top:28px;padding:10px 12px;border:1px solid var(--m-line);background:var(--m-card);font-size:9px;letter-spacing:.18em;text-transform:uppercase}.marble-css-slider__number{position:absolute;right:clamp(20px,4vw,58px);top:28px;z-index:3;font:500 12px/1 'Cinzel',serif;letter-spacing:.18em;color:var(--m-muted)}.marble-css-slider__controls{display:flex;align-items:center;justify-content:space-between;margin-top:16px;gap:18px}.marble-css-slider__arrows{display:flex;gap:8px}.marble-css-slider__arrows label,.marble-css-slider__dots label{display:grid;place-items:center;min-width:44px;min-height:44px;border:1px solid var(--m-line);background:transparent;color:var(--m-text);cursor:var(--m-cursor);transition:border-color .2s ease,color .2s ease,background-color .2s ease}.marble-css-slider__arrows label:hover,.marble-css-slider__dots label:hover{border-color:var(--m-gold);color:var(--m-gold)}.marble-css-slider__dots{display:flex;gap:7px}.marble-css-slider__dots label{min-width:34px;min-height:34px;border-radius:50%;font-size:9px}.marble-css-slider__status{display:flex;align-items:center;gap:13px;min-width:150px;color:var(--m-muted);font-size:9px;letter-spacing:.18em;text-transform:uppercase}.marble-css-slider__progress{height:1px;flex:1;background:var(--m-line);overflow:hidden}.marble-css-slider__progress span{display:block;height:100%;width:25%;background:var(--m-gold);transition:width .5s ease}.marble-css-slider__hint{margin:14px 0 0;color:var(--m-muted);font-size:10px;letter-spacing:.08em}.marble-css-slider__track:hover,.marble-css-slider__track:focus-within{animation-play-state:paused}.marble-css-slider__track:hover .marble-css-slider__slide::before{opacity:.12}.marble-css-slider__radios:nth-of-type(1):checked ~ .marble-css-slider__track{scroll-behavior:smooth}.marble-css-slider__radios:nth-of-type(1):checked ~ .marble-css-slider__controls .marble-css-slider__progress span{width:25%}.marble-css-slider__radios:nth-of-type(2):checked ~ .marble-css-slider__controls .marble-css-slider__progress span{width:50%}.marble-css-slider__radios:nth-of-type(3):checked ~ .marble-css-slider__controls .marble-css-slider__progress span{width:75%}.marble-css-slider__radios:nth-of-type(4):checked ~ .marble-css-slider__controls .marble-css-slider__progress span{width:100%}.marble-css-slider__radios:focus-visible ~ .marble-css-slider__track{outline:2px solid var(--m-gold);outline-offset:3px}.marble-css-slider__dots label:focus-visible,.marble-css-slider__arrows label:focus-visible{outline:2px solid var(--m-gold);outline-offset:3px}
        .marble-css-slider__track{scrollbar-width:none}.marble-css-slider__track .marble-css-slider__slide{animation:marbleFade 0.8s ease both}.marble-css-slider__track .marble-css-slider__slide:nth-child(2){animation-delay:.04s}.marble-css-slider__track .marble-css-slider__slide:nth-child(3){animation-delay:.08s}.marble-css-slider__track .marble-css-slider__slide:nth-child(4){animation-delay:.12s}@keyframes marbleFade{from{opacity:.55}to{opacity:1}}
        .marble-css-slider__dots label:nth-child(1)::after{content:'01'}.marble-css-slider__dots label:nth-child(2)::after{content:'02'}.marble-css-slider__dots label:nth-child(3)::after{content:'03'}.marble-css-slider__dots label:nth-child(4)::after{content:'04'}.marble-css-slider__arrows label:first-child::after{content:'←'}.marble-css-slider__arrows label:last-child::after{content:'→'}.marble-css-slider__dots label{font-size:0}
        .marble-css-slider__radios:nth-of-type(1):checked ~ .marble-css-slider__controls .marble-css-slider__dots label:nth-child(1),.marble-css-slider__radios:nth-of-type(2):checked ~ .marble-css-slider__controls .marble-css-slider__dots label:nth-child(2),.marble-css-slider__radios:nth-of-type(3):checked ~ .marble-css-slider__controls .marble-css-slider__dots label:nth-child(3),.marble-css-slider__radios:nth-of-type(4):checked ~ .marble-css-slider__controls .marble-css-slider__dots label:nth-child(4){border-color:var(--m-gold);color:var(--m-gold)}
        @media (min-width:768px){.marble-css-slider__track{grid-auto-columns:50%}.marble-css-slider__slide:nth-child(even){border-left:1px solid var(--m-line)}.marble-css-slider__slide::after{background:linear-gradient(90deg,var(--m-surface) 0%,color-mix(in srgb,var(--m-surface) 88%,transparent) 52%,transparent 100%)}.marble-css-slider__copy{max-width:560px}.marble-css-slider__controls{margin-top:18px}.marble-css-slider__dots{order:2}.marble-css-slider__status{order:3}.marble-css-slider__hint{display:none}}
        @media (min-width:1100px){.marble-css-slider__track{grid-auto-columns:33.333%}.marble-css-slider__slide{min-height:560px}.marble-css-slider__slide:nth-child(n+2){border-left:1px solid var(--m-line)}.marble-css-slider__copy{padding:58px 42px}.marble-css-slider__title{font-size:54px}.marble-css-slider__subtitle{font-size:12px}.marble-css-slider__head{margin-bottom:34px}}
        @media (prefers-color-scheme:dark){.marble-css-slider__slide::before{mix-blend-mode:screen;opacity:.1}.marble-css-slider__slide::after{background:linear-gradient(90deg,var(--m-surface) 0%,color-mix(in srgb,var(--m-surface) 92%,transparent) 52%,transparent 100%)}}
        @media (prefers-reduced-motion:reduce){.marble-css-slider__track{scroll-behavior:auto}.marble-css-slider__slide,.marble-css-slider__slide::before{animation:none!important;transition:none!important}.marble-css-slider__track:hover .marble-css-slider__slide::before{opacity:.085}.marble-css-slider__track{animation:none!important}}
      `}</style>
      <div className="marble-css-slider__inner">
        <header className="marble-css-slider__head">
          <div>
            <p className="marble-css-slider__eyebrow">Featured collection</p>
            <h1>Natural stone, <em>quietly composed.</em></h1>
          </div>
          <p className="marble-css-slider__intro">A restrained view of rare marble and quartzite, selected for architecture, interiors and spaces with permanence.</p>
        </header>

        {slides.map((slide, index) => (
          <input key={slide.number} className="marble-css-slider__radios" type="radio" name="marble-css-slider" id={`marble-slide-${index + 1}`} defaultChecked={index === 0} aria-label={`Go to ${slide.title}`} />
        ))}

        <div className="marble-css-slider__track" role="region" aria-label="Featured marble slides" tabIndex={0}>
          {slides.map((slide) => (
            <figure key={slide.number} id={`marble-panel-${slide.number}`} className="marble-css-slider__slide" style={{ "--m-image": `url(${slide.image})` } as React.CSSProperties}>
              <div className="marble-css-slider__number">{slide.number} / 04</div>
              <div className="marble-css-slider__copy">
                <div className="marble-css-slider__meta"><span className="marble-css-slider__rule" />{slide.category}</div>
                <figcaption>
                  <h2 className="marble-css-slider__title">{slide.title}</h2>
                  <p className="marble-css-slider__subtitle">{slide.subtitle}</p>
                  <span className="marble-css-slider__origin">{slide.origin}</span>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>

        <div className="marble-css-slider__controls" aria-label="Slider controls">
          <div className="marble-css-slider__arrows">
            <label htmlFor="marble-slide-1" aria-label="Previous slide" title="Previous">Previous</label>
            <label htmlFor="marble-slide-2" aria-label="Next slide" title="Next">Next</label>
          </div>
          <div className="marble-css-slider__dots" aria-label="Choose slide">
            {slides.map((slide, index) => <label key={slide.number} htmlFor={`marble-slide-${index + 1}`} aria-label={`Slide ${slide.number}`} title={`Slide ${slide.number}`} />)}
          </div>
          <div className="marble-css-slider__status"><span>Progress</span><span className="marble-css-slider__progress"><span /></span></div>
        </div>
        <p className="marble-css-slider__hint">Swipe or scroll horizontally to explore · 2D CSS presentation only</p>
      </div>
    </section>
  );
}
