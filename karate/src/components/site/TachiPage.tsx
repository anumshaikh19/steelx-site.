import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

const sections = [
  {
    number: "01",
    title: "Outer Tension Stances",
    description: [
      "Outer tension stances involve a slight outward pressure of the knees and thighs. They require deep bending of the knees and therefore have the lowest center of gravity.",
      "Since these stances are very low, practice of them is very exhaustive on the leg muscles, thus making it an ideal training for these muscles. Outer tension stances are usually used in conjunction with large movements or long and medium range combat techniques.",
      "Hard styles of karate (like Shotokan) tend to practice these stances a great deal more than the other stances.",
    ],
    techniques: [
      ["zenkutsu-dachi", "front stance"],
      ["kokutsu-dachi", "back stance"],
      ["kiba-dachi", "horse stance (horse-riding stance)"],
      ["fudo-dachi (sochin-dachi)", "immoveable stance (strength & calm stance)"],
      ["shiko-dachi", "square stance"],
    ],
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/ZenkutsuDachi.svg",
    imageAlt: "Zenkutsu-dachi forward stance diagram",
    imageLabel: "Zenkutsu-dachi",
  },
  {
    number: "02",
    title: "Inner Tension Stances",
    description: [
      "Inner tension stances require an inward pressure of the knees and thighs, and have a higher center of gravity. Although easier on the legs, the positions of the feet and knees can be quite awkward, hence these stances are usually more difficult to master.",
      "Since the focus of these stances is inward, they are ideal for developing ki, one's inner energy. Soft style practitioners tend to train these stances more often.",
      "Inner tension stances are considered as more advanced stances and are usually practiced in combination with smaller techniques that can be used in short range or close combat.",
    ],
    techniques: [
      ["hangetsu-dachi", "half-moon stance"],
      ["sanchin-dachi", "hourglass stance (3 wars stance)"],
      ["nekoashi-dachi", "cat stance (cat-leg stance)"],
    ],
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Hangetsudachi.svg",
    imageAlt: "Hangetsu-dachi half-moon stance diagram",
    imageLabel: "Hangetsu-dachi",
  },
  {
    number: "03",
    title: "Natural Stances",
    description: [
      "Natural stances, or shizen tai (natural body), include all of the stances performed from fairly natural positions. These stances maintain the body's center of gravity at its normal level, requiring little or no tension in the legs or bending of the knees. As such, they are very quickly and easily learned.",
      "Natural stances are used when bowing, resting, retreating, and joint locking. They are also often used when awaiting an attack since an individual is most likely going to be in some form of a natural position if ever attacked for real.",
    ],
    techniques: [
      ["hachiji-dachi", "stance (shape of 8 stance)"],
      ["uchi-hachiji-dachi", "inward natural stance"],
      ["musubi-dachi", "attention stance (united stance)"],
      ["heisoku-dachi", "feet together stance (closed feet stance)"],
      ["renoji-dachi", "L-stance (shape of re stance)"],
      ["teinoji-dachi", "T-stance (shape of tei stance)"],
      ["heiko-dachi", "parallel stance"],
    ],
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Heisoku-dachi.svg",
    imageAlt: "Heisoku-dachi closed-feet stance diagram",
    imageLabel: "Natural stance",
  },
  {
    number: "04",
    title: "Unstable Stances",
    description: [
      "Unstable stances include stances that leave the individual in a precarious position, actually worsening balance. They are usually performed either on one leg or with both feet very close together.",
      "They have very specific functions related to bunkai (applications training) and are not designed to be maintained for long periods of time. However, since these stances are unstable, they require a great deal of balance and are often practiced to help individuals to improve overall stability and coordination.",
    ],
    techniques: [
      ["ashi dachi", "leg stance"],
      ["tsuru-dachi (sagiashi-dachi)", "crane stance (crane-leg stance)"],
      ["kosa-dachi", "cross stance"],
      ["hizakutsu-dachi", "knee bending stance"],
      ["hiza-dachi", "one knee stance"],
    ],
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Tsuruashidachi.svg",
    imageAlt: "Tsuru-ashi-dachi crane stance diagram",
    imageLabel: "Tsuru-ashi-dachi",
  },
];

function TechniqueList({ items }: { items: string[][] }) {
  return (
    <div className="mt-8 border-t border-[#cfc6b5] pt-5">
      <p className="mb-4 text-[0.58rem] font-bold uppercase tracking-[0.25em] text-[#9b3d18]">Stance vocabulary</p>
      <div className="space-y-0">
        {items.map(([name, meaning]) => (
          <div key={name} className="grid grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] gap-5 border-b border-[#ded6c7] py-2 text-[0.78rem] md:text-[0.84rem]">
            <span className="font-serif italic text-[#111111]">{name}</span>
            <span className="text-[#555048]">{meaning}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function TachiPage() {
  return (
    <div className="min-h-screen bg-[#e9e2d3] text-[#111111]">
      <header className="sticky top-0 z-30 border-b border-[#cfc6b5] bg-[#e9e2d3]/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-[1180px] items-center justify-between px-5 md:px-8">
          <a href="/karate/" className="group flex items-center gap-3 text-[0.62rem] font-bold uppercase tracking-[0.22em]">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Dhanurveda
          </a>
          <div className="hidden items-center gap-6 text-[0.58rem] font-bold uppercase tracking-[0.2em] text-[#69635a] md:flex">
            <a href="/karate/kihon/tachi" className="text-[#9b3d18]">Tachi</a>
            <a href="/karate/kihon/uke" className="hover:text-[#9b3d18]">Uke</a>
            <a href="/karate/kihon/tsuki" className="hover:text-[#9b3d18]">Tsuki</a>
            <a href="/karate/kihon/keri" className="hover:text-[#9b3d18]">Keri</a>
            <a href="/karate/kihon/uchi" className="hover:text-[#9b3d18]">Uchi</a>
          </div>
          <span className="text-[0.58rem] font-bold uppercase tracking-[0.2em] text-[#9b3d18]">Kihon 01</span>
        </div>
      </header>

      <main>
        <section className="border-b border-[#cfc6b5] px-5 pb-14 pt-16 md:px-8 md:pb-20 md:pt-24">
          <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <p className="mb-5 text-[0.62rem] font-bold uppercase tracking-[0.32em] text-[#9b3d18]">Kihon 01 · Stances</p>
              <h1 className="font-[var(--font-display)] text-[clamp(4.5rem,13vw,10rem)] font-bold uppercase leading-[0.78] tracking-[-0.055em]">Tachi</h1>
              <p className="mt-7 max-w-2xl font-serif text-[1rem] leading-[1.65] text-[#36322d] md:text-[1.08rem]">
                Highest level instructors consider stances as the most important element of kihon. A stance is very much like the foundation of a house, quick to crumble if it is weak. Stances were designed to lower one's center of gravity and thus improve stability. Without a solid stance, an individual cannot deliver a technique with maximum power, and one can easily be taken off balance. Shotokan stances usually tend to be longer and deeper than other styles of karate.
              </p>
            </div>
            <div className="relative overflow-hidden border border-[#bfb5a4] bg-[#f0eadf] p-5">
              <div className="absolute left-0 top-0 h-1 w-20 bg-[#9b3d18]" />
              <div className="flex min-h-[280px] items-center justify-center">
                <img src="https://commons.wikimedia.org/wiki/Special:Redirect/file/ZenkutsuDachi.svg" alt="Zenkutsu-dachi stance diagram" className="h-[270px] w-auto object-contain mix-blend-multiply" loading="eager" />
              </div>
              <div className="flex items-end justify-between border-t border-[#cfc6b5] pt-4">
                <div>
                  <p className="font-serif text-lg italic">Zenkutsu-dachi</p>
                  <p className="text-[0.56rem] font-bold uppercase tracking-[0.2em] text-[#777067]">Front stance</p>
                </div>
                <a href="https://commons.wikimedia.org/wiki/File:ZenkutsuDachi.svg" target="_blank" rel="noreferrer" className="text-[#9b3d18]" aria-label="View image source"><ArrowUpRight className="h-4 w-4" /></a>
              </div>
            </div>
          </div>
        </section>

        <nav className="border-b border-[#cfc6b5] px-5 py-4 md:px-8">
          <div className="mx-auto flex max-w-[1180px] gap-2 overflow-x-auto pb-1">
            {sections.map((section) => (
              <a key={section.number} href={`#tachi-${section.number}`} className="shrink-0 border border-[#cfc6b5] px-4 py-2 text-[0.56rem] font-bold uppercase tracking-[0.18em] transition-colors hover:border-[#9b3d18] hover:text-[#9b3d18]">
                {section.number} · {section.title}
              </a>
            ))}
          </div>
        </nav>

        <section className="px-5 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-[1180px]">
            <div className="mb-12 flex items-end justify-between border-b border-[#cfc6b5] pb-5">
              <div><p className="text-[0.58rem] font-bold uppercase tracking-[0.25em] text-[#9b3d18]">The four families</p><h2 className="mt-2 font-[var(--font-display)] text-3xl font-bold uppercase tracking-[-0.02em] md:text-5xl">Learn the foundation</h2></div>
              <span className="hidden text-[0.55rem] font-bold uppercase tracking-[0.2em] text-[#7b746b] md:block">Balance · structure · control</span>
            </div>

            <div className="space-y-16 md:space-y-24">
              {sections.map((section, index) => (
                <article key={section.number} id={`tachi-${section.number}`} className="scroll-mt-24 border-t-2 border-[#111111] pt-7">
                  <div className="grid gap-8 lg:grid-cols-[90px_1fr_300px] lg:gap-10">
                    <div><span className="font-[var(--font-display)] text-4xl font-bold text-[#9b3d18]">{section.number}</span></div>
                    <div>
                      <h3 className="font-[var(--font-display)] text-3xl font-bold uppercase leading-none tracking-[-0.02em] md:text-4xl">{section.title}</h3>
                      <div className="mt-6 space-y-4 font-serif text-[0.94rem] leading-[1.72] text-[#3f3a34]">
                        {section.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                      </div>
                      <TechniqueList items={section.techniques} />
                    </div>
                    <div className="border border-[#cfc6b5] bg-[#f0eadf] p-4 lg:mt-1">
                      <div className="flex h-[240px] items-center justify-center overflow-hidden">
                        <img src={section.image} alt={section.imageAlt} className="max-h-full max-w-full object-contain mix-blend-multiply" loading="lazy" />
                      </div>
                      <div className="border-t border-[#cfc6b5] pt-3 text-[0.56rem] font-bold uppercase tracking-[0.16em] text-[#716a61]">{section.imageLabel} · reference diagram</div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-[#cfc6b5] px-5 py-12 md:px-8">
          <div className="mx-auto flex max-w-[1180px] flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <a href="/karate/" className="group inline-flex items-center gap-3 text-[0.62rem] font-bold uppercase tracking-[0.2em]"><ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />Back to Dhanurveda</a>
            <a href="/karate/kihon/uke" className="group inline-flex items-center gap-3 text-[0.62rem] font-bold uppercase tracking-[0.2em] text-[#9b3d18]">Next · Uke <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></a>
          </div>
        </section>
      </main>
    </div>
  );
}
