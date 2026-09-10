import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

type Section = {
  number: string;
  title: string;
  description: string[];
  techniques: [string, string][];
  image: string;
  imageAlt: string;
  imageLabel: string;
};

const sections: Section[] = [
  {
    number: "01",
    title: "Basic Punches",
    description: [
      "All basic punches are linear, requiring full extension of the arm. These punches have the longest range and tend to be the most powerful. Basic punches are easy to learn and simple to use. They are the most often used attack form in karate. In dojo practice, if a punch is to be used, 99% of the time it will be a basic one. Other punching techniques are most often found in kata.",
    ],
    techniques: [
      ["choku-zuki", "straight punch"],
      ["oi-zuki", "lunge punch"],
      ["gyaku-zuki", "reverse punch"],
      ["kisami-zuki", "jab punch"],
    ],
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Oizuki.svg",
    imageAlt: "Oi-zuki punch reference diagram",
    imageLabel: "Oi-zuki · basic punch",
  },
  {
    number: "02",
    title: "Advanced Punches",
    description: [
      "Advanced punches are usually, but not always, non-linear. Many of these punches have the elbow bent at various angles. Although generally not as strong as basic punches, they are more suitable for close range combat. Advanced punches can also be very useful in working around an opponent's guard. As their label implies, advanced punches are much harder to learn and many students find it difficult to harness power with them.",
    ],
    techniques: [
      ["ura-zuki", "inverted punch"],
      ["age-zuki (tsukiage)", "rising punch"],
      ["kage-zuki", "hook punch"],
      ["mawashi-zuki", "roundhouse punch"],
      ["tate-zuki", "vertical punch"],
      ["uke-zuki", "blocking punch"],
    ],
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Uraken.svg",
    imageAlt: "Advanced karate punch reference",
    imageLabel: "Advanced punching mechanics",
  },
  {
    number: "03",
    title: "Double-Hand Punches",
    description: [
      "Double-hand punches are performed with both hands at the same time. Contrary to what one might think, double-hand punches are not as strong as single-hand punches. It is more difficult to coordinate power in both hands at the same time. These movements also have a much smaller hip rotation.",
      "Their obvious benefit is that two targets can be hit at the same time, although double-hand punches are almost never used as an offensive attack. More often, they are used in response to an attack, usually with one of the punches acting in a defensive manner. Double-hand punches are frequently used to achieve sen no sen.",
    ],
    techniques: [
      ["morote-zuki", "double-hand punch"],
      ["yama-zuki", "mountain punch"],
      ["yumi-zuki", "bow punch"],
      ["awase-zuki", "combined punch (U-punch)"],
      ["heiko-zuki", "parallel punch"],
      ["hasami-zuki", "scissors punch"],
    ],
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Yama_zuki.svg",
    imageAlt: "Yama-zuki double-hand punch reference",
    imageLabel: "Yama-zuki · double-hand punch",
  },
  {
    number: "04",
    title: "Fore-knuckle Punches",
    description: [
      "Fore-knuckle punches are performed with the middle knuckles of the fingers. These techniques are sharper, having a much smaller contact point. Since the point of contact is smaller, these techniques can achieve greater penetration of force (the same amount of force is used on a smaller surface area, creating greater pound-force per square-inch {psi}).",
      "The danger in using these attacks occurs in the joints of the fingers. If the joints are not strong enough to absorb the impact with the target, they will break. For this reason, these techniques are most effective against small targets or soft vital areas, reducing the risk of injury to the hand. The fingers and knuckles should be properly conditioned before ever considering using them on solid targets.",
    ],
    techniques: [
      ["ippon-ken", "one-knuckle fist"],
      ["nakadaka-ippon-ken", "middle finger one-knuckle fist"],
      ["hiraken", "flat fist"],
    ],
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Ipponken.svg",
    imageAlt: "Ippon-ken fore-knuckle reference",
    imageLabel: "Fore-knuckle structure",
  },
  {
    number: "05",
    title: "Spear-Hand",
    description: [
      "Spear-hand techniques involve a thrusting motion with the tips of the fingers. Since the fingertips are very small or sharp, spear-hand techniques offer the greatest potential for penetration of force (psi). When delivered by a person with trained and conditioned hands, spear-hands can be quite deadly.",
      "Again, although the force behind these techniques can be quite devastating, the risk of breaking the hand is also high. Without proper hand training, it would be ridiculous to attempt a spear-hand in a real situation, even on soft targets. If you want to use these techniques in a real situation, you must train for it. Otherwise, leave it in kata.",
    ],
    techniques: [
      ["ippon-nukite", "one-finger spear-hand"],
      ["nihon-nukite", "two finger spear-hand"],
      ["tate-nukite (shihon-nukite)", "vertical spear-hand (four finger spear-hand)"],
      ["hira-nukite (shihon-nukite)", "flat spear-hand (four finger spear-hand)"],
    ],
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Nukite.svg",
    imageAlt: "Nukite spear-hand reference",
    imageLabel: "Nukite · spear-hand",
  },
];

function TechniqueList({ items }: { items: [string, string][] }) {
  return (
    <div className="mt-8 border-t border-[#cfc6b5] pt-5">
      <p className="mb-4 text-[0.58rem] font-bold uppercase tracking-[0.25em] text-[#9b3d18]">Punch vocabulary</p>
      <div>{items.map(([name, meaning]) => <div key={name} className="grid grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] gap-5 border-b border-[#ded6c7] py-2 text-[0.78rem] md:text-[0.84rem]"><span className="font-serif italic">{name}</span><span className="text-[#555048]">{meaning}</span></div>)}</div>
    </div>
  );
}

export function TsukiPage() {
  return (
    <div className="min-h-screen bg-[#e9e2d3] text-[#111111]">
      <header className="sticky top-0 z-30 border-b border-[#cfc6b5] bg-[#e9e2d3]/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-[1180px] items-center justify-between px-5 md:px-8">
          <a href="/karate/" className="group flex items-center gap-3 text-[0.62rem] font-bold uppercase tracking-[0.22em]"><ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />Dhanurveda</a>
          <nav className="hidden items-center gap-6 text-[0.58rem] font-bold uppercase tracking-[0.2em] text-[#69635a] md:flex">
            <a href="/karate/kihon/tachi" className="hover:text-[#9b3d18]">Tachi</a><a href="/karate/kihon/uke" className="hover:text-[#9b3d18]">Uke</a><a href="/karate/kihon/tsuki" className="text-[#9b3d18]">Tsuki</a><a href="/karate/kihon/keri" className="hover:text-[#9b3d18]">Keri</a><a href="/karate/kihon/uchi" className="hover:text-[#9b3d18]">Uchi</a>
          </nav>
          <span className="text-[0.58rem] font-bold uppercase tracking-[0.2em] text-[#9b3d18]">Kihon 03</span>
        </div>
      </header>

      <main>
        <section className="border-b border-[#cfc6b5] px-5 pb-14 pt-16 md:px-8 md:pb-20 md:pt-24">
          <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div><p className="mb-5 text-[0.62rem] font-bold uppercase tracking-[0.32em] text-[#9b3d18]">Kihon 03 · Punches</p><h1 className="font-[var(--font-display)] text-[clamp(4.5rem,13vw,10rem)] font-bold uppercase leading-[0.78] tracking-[-0.055em]">Tsuki</h1><p className="mt-7 max-w-2xl font-serif text-[1rem] leading-[1.65] text-[#36322d] md:text-[1.08rem]">The actual translation of the word <em>tsuki</em> is “thrust.” Technically, any thrusting technique can be labelled as tsuki. In karate, tsuki is the term used for punches. These attacks are traditionally delivered with the front two knuckles of the fist, called <em>seiken</em> (fore-fist).</p></div>
            <div className="relative overflow-hidden border border-[#bfb5a4] bg-[#f0eadf] p-5"><div className="absolute left-0 top-0 h-1 w-20 bg-[#9b3d18]" /><div className="flex min-h-[280px] items-center justify-center"><div className="relative h-[260px] w-full overflow-hidden"><div className="absolute left-[12%] top-1/2 h-px w-[72%] -rotate-6 bg-[#9b3d18]/50" /><div className="absolute left-[35%] top-[37%] h-16 w-[190px] -rotate-6 rounded-full border-2 border-[#111111]/70" /><div className="absolute left-[55%] top-[31%] h-20 w-20 rounded-full border border-[#111111]/20" /><div className="absolute right-[8%] top-[20%] font-[var(--font-display)] text-[7rem] font-bold leading-none text-[#9b3d18]/20">突</div><div className="absolute bottom-5 left-0 right-0 text-center font-serif text-lg italic">Thrust · Align · Impact</div></div></div><div className="flex items-end justify-between border-t border-[#cfc6b5] pt-4"><div><p className="font-serif text-lg italic">Tsuki</p><p className="text-[0.56rem] font-bold uppercase tracking-[0.2em] text-[#777067]">Punching techniques</p></div><a href="https://commons.wikimedia.org/wiki/File:Oizuki.svg" target="_blank" rel="noreferrer" className="text-[#9b3d18]"><ArrowUpRight className="h-4 w-4" /></a></div></div>
          </div>
        </section>

        <section className="px-5 py-14 md:px-8 md:py-20"><div className="mx-auto grid max-w-[1180px] gap-10 border-b border-[#cfc6b5] pb-14 lg:grid-cols-[1fr_0.45fr]"><div className="space-y-5 font-serif text-[0.94rem] leading-[1.72] text-[#3f3a34] md:text-[1rem]"><p>In this section, tsuki will also refer to spear-hand attacks and techniques performed with the fore-knuckles of the fist. Punching techniques (using the seiken) are the most popular attack form in karate. Punching techniques are often used because they are quick, powerful, and versatile.</p><p>More importantly, punches keep the hands in a very solid and stable position that is capable of withstanding impact. Theoretically, many other attacks can be more effective than punching, yet some of these other attacks (especially spear-hand techniques) can result in damage to your own hand. Tsuki can be divided into 5 categories:</p></div><aside className="border-l-2 border-[#9b3d18] pl-6 font-serif text-xl italic leading-[1.45] text-[#4b453e]">Speed. Stability. Versatility. The fist is built to meet impact.</aside></div></section>

        <nav className="border-y border-[#cfc6b5] px-5 py-4 md:px-8"><div className="mx-auto flex max-w-[1180px] gap-2 overflow-x-auto pb-1">{sections.map(s => <a key={s.number} href={`#tsuki-${s.number}`} className="shrink-0 border border-[#cfc6b5] px-4 py-2 text-[0.56rem] font-bold uppercase tracking-[0.18em] hover:border-[#9b3d18] hover:text-[#9b3d18]">{s.number} · {s.title}</a>)}</div></nav>

        <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1180px]"><div className="mb-12 flex items-end justify-between border-b border-[#cfc6b5] pb-5"><div><p className="text-[0.58rem] font-bold uppercase tracking-[0.25em] text-[#9b3d18]">The five families</p><h2 className="mt-2 font-[var(--font-display)] text-3xl font-bold uppercase tracking-[-0.02em] md:text-5xl">The art of the thrust</h2></div><span className="hidden text-[0.55rem] font-bold uppercase tracking-[0.2em] text-[#777067] md:block">Distance · timing · penetration</span></div><div className="space-y-16 md:space-y-24">{sections.map(s => <article key={s.number} id={`tsuki-${s.number}`} className="scroll-mt-24 border-t-2 border-[#111111] pt-7"><div className="grid gap-8 lg:grid-cols-[90px_1fr_300px] lg:gap-10"><div><span className="font-[var(--font-display)] text-4xl font-bold text-[#9b3d18]">{s.number}</span></div><div><h3 className="font-[var(--font-display)] text-3xl font-bold uppercase leading-none tracking-[-0.02em] md:text-4xl">{s.title}</h3><div className="mt-6 space-y-4 font-serif text-[0.94rem] leading-[1.72] text-[#3f3a34]">{s.description.map(p => <p key={p}>{p}</p>)}</div><TechniqueList items={s.techniques} /></div><div className="border border-[#cfc6b5] bg-[#f0eadf] p-4"><div className="flex h-[240px] items-center justify-center overflow-hidden"><img src={s.image} alt={s.imageAlt} className="max-h-full max-w-full object-contain mix-blend-multiply" loading="lazy" /></div><div className="border-t border-[#cfc6b5] pt-3 text-[0.56rem] font-bold uppercase tracking-[0.16em] text-[#716a61]">{s.imageLabel} · reference diagram</div></div></div></article>)}</div></div></section>

        <section className="border-t border-[#cfc6b5] px-5 py-12 md:px-8"><div className="mx-auto flex max-w-[1180px] flex-col gap-5 md:flex-row md:items-center md:justify-between"><a href="/karate/kihon/uke" className="group inline-flex items-center gap-3 text-[0.62rem] font-bold uppercase tracking-[0.2em]"><ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />Previous · Uke</a><div className="text-[0.55rem] font-bold uppercase tracking-[0.2em] text-[#777067]">Discipline builds freedom</div><a href="/karate/kihon/keri" className="group inline-flex items-center gap-3 text-[0.62rem] font-bold uppercase tracking-[0.2em] text-[#9b3d18]">Next · Keri <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></a></div></section>
      </main>
    </div>
  );
}
