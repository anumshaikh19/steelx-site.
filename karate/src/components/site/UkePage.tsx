import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

const sections = [
  {
    number: "01",
    title: "Basic Closed-Hand Blocks",
    description: [
      "Basic blocks are the most common blocks. They are executed with a swinging motion of the arm (up, down, either side) with the fists closed. The point of contact is either the inner or outer forearm, usually closer to the wrist area. Since the entire length of the forearm can be used, they have a much greater safety margin. Therefore, they are the safest blocks to use, especially for a beginner.",
    ],
    techniques: [
      ["age-uke", "rising block"],
      ["soto-uke", "outside block"],
      ["gedan-barai", "down block (lower level sweep)"],
      ["uchi-uke", "inside block"],
    ],
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Ageuke.jpg",
    imageAlt: "Age uke karate block reference",
    imageLabel: "Age-uke",
  },
  {
    number: "02",
    title: "Open-Hand Blocks",
    description: [
      "Open-hand blocks are performed with the edge or back of the hand, not the arm. Since the hand is much smaller, these blocks have a very small safety margin and are not as common. Usually, open-hand blocks are followed by some form of grabbing with the blocking hand, pulling the opponent off balance, followed by a counter-attack. In many cases, they are delivered as attacks instead of blocks.",
    ],
    techniques: [
      ["shuto-uke", "knife-hand block (sword-hand block)"],
      ["tate-shuto-uke", "vertical knife-hand block"],
      ["hake-uke", "hooking block"],
      ["haishu-uke", "backhand block"],
      ["tsukami-uke (koko-uke)", "grasping block (tiger-mouth block)"],
    ],
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Shuto.png",
    imageAlt: "Shuto knife-hand reference",
    imageLabel: "Shuto-uke",
  },
  {
    number: "03",
    title: "Advanced Blocks",
    description: [
      "Often found in kata, advanced blocks usually have the option of being executed with the hand open or closed. These blocks tend to work best when remaining stationary or when moving forward to meet an opponent's attack, and afterwards, taking the opponent off their feet. These blocks require better timing skills, and are used effectively only by advanced practitioners.",
      "Advanced blocks come in all shapes and sizes; only the more common blocks that appear in more than one kata are listed below.",
    ],
    techniques: [
      ["haimi-uke", "back-arm block"],
      ["nagashi-uke", "flowing block"],
      ["osae-uke", "pressing block"],
      ["sukui-uke", "scooping block"],
      ["maki-otoshi-uke", "rolling dropping block"],
    ],
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/JodanChudanGedan.svg",
    imageAlt: "Karate blocking level reference diagram",
    imageLabel: "Advanced blocking levels",
  },
  {
    number: "04",
    title: "Double-Hand Blocks",
    description: [
      "Blocking with both hands are usually only practiced in kata. In many cases, double-hand blocks are nothing more than a single-hand block with the other hand touching or supporting it, for situations when more force is necessary.",
      "They can also consist of two different single-hand blocks performed at the same time, or to block two separate opponents or attacks. Thirdly, two of the same blocks can be delivered at the same time to achieve a synergistic effect, usually occurring in advanced bunkai.",
      "Very often, double-hand blocks have special applications that aren't apparent to a beginner or intermediate student. Again, only those double-hand blocks appearing in more than one kata are listed below.",
    ],
    techniques: [
      ["morote-uke", "double-hand block"],
      ["kosa-uke (juji-uke)", "cross block (X-block)"],
      ["kakiwake-uke", "wedge block (separating block)"],
      ["maji-uke", "maji symbol block (swirling block, vortex block)"],
      ["bo-uke", "staff block"],
      ["awase-uke", "combined block"],
      ["hasami-uke", "scissors block"],
      ["oshi-uke", "pushing block"],
      ["kosa-uke *", "crossing block (inside block & down block)"],
    ],
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Sotouke.jpg",
    imageAlt: "Karate uke reference diagram",
    imageLabel: "Uke application",
  },
];

function TechniqueList({ items }: { items: string[][] }) {
  return (
    <div className="mt-8 border-t border-[#cfc6b5] pt-5">
      <p className="mb-4 text-[0.58rem] font-bold uppercase tracking-[0.25em] text-[#9b3d18]">Block vocabulary</p>
      <div>
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

export function UkePage() {
  return (
    <div className="min-h-screen bg-[#e9e2d3] text-[#111111]">
      <header className="sticky top-0 z-30 border-b border-[#cfc6b5] bg-[#e9e2d3]/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-[1180px] items-center justify-between px-5 md:px-8">
          <a href="/karate/" className="group flex items-center gap-3 text-[0.62rem] font-bold uppercase tracking-[0.22em]">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Dhanurveda
          </a>
          <div className="hidden items-center gap-6 text-[0.58rem] font-bold uppercase tracking-[0.2em] text-[#69635a] md:flex">
            <a href="/karate/kihon/tachi" className="hover:text-[#9b3d18]">Tachi</a>
            <a href="/karate/kihon/uke" className="text-[#9b3d18]">Uke</a>
            <a href="/karate/kihon/tsuki" className="hover:text-[#9b3d18]">Tsuki</a>
            <a href="/karate/kihon/keri" className="hover:text-[#9b3d18]">Keri</a>
            <a href="/karate/kihon/uchi" className="hover:text-[#9b3d18]">Uchi</a>
          </div>
          <span className="text-[0.58rem] font-bold uppercase tracking-[0.2em] text-[#9b3d18]">Kihon 02</span>
        </div>
      </header>

      <main>
        <section className="border-b border-[#cfc6b5] px-5 pb-14 pt-16 md:px-8 md:pb-20 md:pt-24">
          <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <p className="mb-5 text-[0.62rem] font-bold uppercase tracking-[0.32em] text-[#9b3d18]">Kihon 02 · Blocks</p>
              <h1 className="font-[var(--font-display)] text-[clamp(4.5rem,13vw,10rem)] font-bold uppercase leading-[0.78] tracking-[-0.055em]">Uke</h1>
              <p className="mt-7 max-w-2xl font-serif text-[1rem] leading-[1.65] text-[#36322d] md:text-[1.08rem]">
                Uke means “receive.” In karate, uke refers to blocking techniques. Blocks are traditionally used to defend against attack and avoid being hit. They are most commonly performed with the arms or hands, and usually precede a counter-attack.
              </p>
            </div>
            <div className="relative overflow-hidden border border-[#bfb5a4] bg-[#f0eadf] p-5">
              <div className="absolute left-0 top-0 h-1 w-20 bg-[#9b3d18]" />
              <div className="flex min-h-[280px] items-center justify-center">
                <div className="relative h-[260px] w-full overflow-hidden">
                  <div className="absolute left-[12%] top-1/2 h-px w-[72%] -rotate-12 bg-[#9b3d18]/50" />
                  <div className="absolute left-1/2 top-[20%] h-[160px] w-px bg-[#111111]/20" />
                  <div className="absolute left-[28%] top-[34%] h-[100px] w-[100px] rounded-full border border-[#111111]/20" />
                  <div className="absolute left-[38%] top-[47%] h-20 w-[150px] -rotate-12 rounded-full border-2 border-[#111111]/70" />
                  <div className="absolute right-[12%] top-[27%] font-[var(--font-display)] text-[5rem] font-bold leading-none text-[#9b3d18]/25">受</div>
                  <div className="absolute bottom-5 left-0 right-0 text-center font-serif text-lg italic">Receive · Redirect · Counter</div>
                </div>
              </div>
              <div className="flex items-end justify-between border-t border-[#cfc6b5] pt-4">
                <div>
                  <p className="font-serif text-lg italic">Uke</p>
                  <p className="text-[0.56rem] font-bold uppercase tracking-[0.2em] text-[#777067]">Blocking techniques</p>
                </div>
                <a href="https://commons.wikimedia.org/wiki/File:Ageuke.jpg" target="_blank" rel="noreferrer" className="text-[#9b3d18]" aria-label="View reference source"><ArrowUpRight className="h-4 w-4" /></a>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-14 md:px-8 md:py-20">
          <div className="mx-auto grid max-w-[1180px] gap-10 border-b border-[#cfc6b5] pb-14 lg:grid-cols-[1fr_0.45fr]">
            <div className="space-y-5 font-serif text-[0.94rem] leading-[1.72] text-[#3f3a34] md:text-[1rem]">
              <p>Another important aspect of blocking is that, when applied forcefully enough, they should discourage the assailant from making further attacks, either by causing pain to the attacking limb or utterly destroying it. This is very difficult to actually implement in training since control is of utmost importance and no one wants to go home with broken bones after an evening of practice.</p>
              <p>Many consider blocks to be of greater importance than attacks simply because karate is a defensive martial art. It should be noted that, although not listed in the blocking section, many of the strikes used in karate can also be used as blocks and vice versa, many blocks can be used as strikes.</p>
            </div>
            <aside className="border-l-2 border-[#9b3d18] pl-6 font-serif text-xl italic leading-[1.45] text-[#4b453e]">A good block is not just about stopping an attack, but about creating the opportunity to respond.</aside>
          </div>
        </section>

        <nav className="border-y border-[#cfc6b5] px-5 py-4 md:px-8">
          <div className="mx-auto flex max-w-[1180px] gap-2 overflow-x-auto pb-1">
            {sections.map((section) => (
              <a key={section.number} href={`#uke-${section.number}`} className="shrink-0 border border-[#cfc6b5] px-4 py-2 text-[0.56rem] font-bold uppercase tracking-[0.18em] transition-colors hover:border-[#9b3d18] hover:text-[#9b3d18]">
                {section.number} · {section.title}
              </a>
            ))}
          </div>
        </nav>

        <section className="px-5 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-[1180px]">
            <div className="mb-12 flex items-end justify-between border-b border-[#cfc6b5] pb-5">
              <div><p className="text-[0.58rem] font-bold uppercase tracking-[0.25em] text-[#9b3d18]">The four families</p><h2 className="mt-2 font-[var(--font-display)] text-3xl font-bold uppercase tracking-[-0.02em] md:text-5xl">Learn to receive</h2></div>
              <span className="hidden text-[0.55rem] font-bold uppercase tracking-[0.2em] text-[#7b746b] md:block">Timing · distance · control</span>
            </div>

            <div className="space-y-16 md:space-y-24">
              {sections.map((section) => (
                <article key={section.number} id={`uke-${section.number}`} className="scroll-mt-24 border-t-2 border-[#111111] pt-7">
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
            <div className="text-[0.55rem] font-bold uppercase tracking-[0.2em] text-[#777067]">Discipline builds freedom</div>
            <a href="/karate/kihon/tsuki" className="group inline-flex items-center gap-3 text-[0.62rem] font-bold uppercase tracking-[0.2em] text-[#9b3d18]">Next · Tsuki <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></a>
          </div>
        </section>
      </main>
    </div>
  );
}

// Source structure follows the supplied Uke (Blocks) reference: four categories,
// their explanations, vocabulary, and the closing footnote. Reference diagrams are
// linked to Wikimedia Commons rather than generated artwork.
