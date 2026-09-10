import { useEffect, useMemo, useState } from "react";

type Group = { title: string; items: string[] };
type Family = { id: string; label: string; sub: string; groups: Group[] };

const families: Family[] = [
  {
    id: "tachi",
    label: "TACHI",
    sub: "STANCES",
    groups: [
      { title: "Outer Tension Stances", items: ["zenkutsu-dachi", "kokutsu-dachi", "kiba-dachi", "fudo-dachi (sochin)", "shiko-dachi"] },
      { title: "Inner Tension Stances", items: ["hangetsu-dachi", "sanchin-dachi", "nekoashi-dachi"] },
      { title: "Natural Stances", items: ["hachiji-dachi", "uchi-hachiji-dachi", "musubi-dachi", "heisoku-dachi", "renoji-dachi", "teinoji-dachi", "heiko-dachi"] },
      { title: "Unstable Stances", items: ["ashi-dachi", "tsuru-dachi (sagiashi)", "kosa-dachi", "hizakutsu-dachi", "hiza-dachi"] },
    ],
  },
  {
    id: "uke",
    label: "UKE",
    sub: "BLOCKS",
    groups: [
      { title: "Basic Closed-Hand Blocks", items: ["age-uke", "soto-uke", "gedan-barai", "uchi-uke"] },
      { title: "Open-Hand Blocks", items: ["shuto-uke", "tate shuto-uke", "kake-uke", "haishu-uke", "tsukami-uke (koko-uke)"] },
      { title: "Advanced Blocks", items: ["haiwan-uke", "nagashi-uke", "osae-uke", "sukui-uke", "maki-otoshi-uke"] },
      { title: "Double-Hand Blocks", items: ["morote-uke", "kosa-uke (juji-uke)", "kakewake-uke", "manji-uke", "bo-uke", "awase-uke", "hasami-uke", "oshi-uke"] },
    ],
  },
  {
    id: "tsuki",
    label: "TSUKI",
    sub: "PUNCHES",
    groups: [
      { title: "Basic Punches", items: ["choku-zuki", "oi-zuki", "gyaku-zuki", "kisami-zuki"] },
      { title: "Advanced Punches", items: ["ura-zuki", "age-zuki", "kagi-zuki", "mawashi-zuki", "tate-zuki", "uke-zuki"] },
      { title: "Double-Hand Punches", items: ["morote-zuki", "yama-zuki", "yumi-zuki", "awase-zuki", "heiko-zuki", "hasami-zuki"] },
      { title: "Fore-Knuckle Punches", items: ["ippon-ken", "nakadaka-ippon-ken", "hiraken"] },
      { title: "Spear-Hand", items: ["ippon-nukite", "nihon-nukite", "tate-nukite (shihon-nukite)", "hira-nukite (hon-nukite)"] },
    ],
  },
  {
    id: "keri",
    label: "KERI",
    sub: "KICKS",
    groups: [
      { title: "Basic Kicks", items: ["mae-geri", "yoko-geri-keage", "yoko-geri-kekomi", "mawashi-geri"] },
      { title: "Advanced Kicks", items: ["ushiro-geri", "ura-mawashi-geri", "mikazuki-geri", "tobi-geri"] },
      { title: "Advanced Leg Attacks", items: ["fumikomi", "ashi-barai", "ashi-namigaeshi"] },
      { title: "Non-Traditional Kicks", items: ["ushiro-ura-mawashi-geri", "ura-mikazuki-geri", "kagi-geri", "otoshi-kakato-geri", "tsumasaki-geri", "sune-geri", "kin-geri", "naname-geri"] },
    ],
  },
  {
    id: "uchi",
    label: "UCHI",
    sub: "STRIKES",
    groups: [
      { title: "Roundhouse Strikes", items: ["kentsui-uchi", "uraken-uchi", "shuto-uchi", "haito-uchi", "teisho"] },
      { title: "Animal Strikes", items: ["keito", "seiryuto", "kakuto", "kumade", "washide"] },
      { title: "Smashing Techniques", items: ["empi-uchi (empi-ate)", "hiza-tsuchi (hiza-ate)"] },
    ],
  },
];

const intro = `Kihon means \"basics,\" or \"fundamentals.\" It is the term used to describe the practice and repetition of the basic techniques of karate. Kihon can be performed with footwork or from a stationary position. It can be performed individually or in large groups. Kihon can be considered as the alphabet of karate. By organizing various kihon techniques into sequences, kata are created*. When learning how to apply kihon techniques to another person, kumite is born. Since kihon is vital to the development of proper karate technique, Shotokan students spend a great deal of time trying to perfect it. Improve your kihon skills, and all other aspects of karate improve automatically. Kihon can be divided into 5 categories:`;

function slug(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function TechniqueGroup({ group, query }: { group: Group; query: string }) {
  const items = group.items.filter((item) => item.toLowerCase().includes(query.trim().toLowerCase()));
  if (query && !items.length) return null;

  return (
    <div className="mb-7">
      <h3 className="mb-1 text-[0.88rem] font-medium text-[#151515] underline decoration-[#151515] underline-offset-2">
        {group.title}
      </h3>
      <ul className="space-y-0 text-[0.73rem] leading-[1.28] text-[#111111]">
        {items.map((item) => (
          <li key={item} id={slug(item)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function FamilyColumn({ family, query }: { family: Family; query: string }) {
  return (
    <section id={family.id} className="scroll-mt-24 min-w-0">
      <a
        href={`#${family.id}`}
        className="mb-0 inline-block text-[1.05rem] font-normal uppercase text-[#9b3d18] underline decoration-[#9b3d18] underline-offset-2"
      >
        {family.label}
      </a>
      <div className="mb-4 text-[0.7rem] uppercase leading-none text-[#111111]">({family.sub})</div>
      {family.groups.map((group) => (
        <TechniqueGroup key={group.title} group={group} query={query} />
      ))}
    </section>
  );
}

export function KihonPage() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("tachi");
  const results = useMemo(
    () => families.reduce((total, family) => total + family.groups.reduce((n, group) => n + group.items.filter((item) => item.toLowerCase().includes(query.trim().toLowerCase())).length, 0), 0),
    [query],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0.05, 0.2, 0.5] },
    );
    families.forEach((family) => {
      const node = document.getElementById(family.id);
      if (node) observer.observe(node);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#e9e2d3] text-[#111111]" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
      <header className="sticky top-0 z-40 border-b border-[#cfc6b5] bg-[#e9e2d3]/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-5 px-5 py-3 md:px-8">
          <a href="/karate/" className="text-[0.72rem] font-bold uppercase tracking-[0.16em]">Dhanurveda</a>
          <nav aria-label="Kihon categories" className="flex min-w-0 gap-5 overflow-x-auto text-[0.68rem] uppercase">
            {families.map((family) => (
              <a
                key={family.id}
                href={`#${family.id}`}
                className={active === family.id ? "text-[#9b3d18] underline underline-offset-4" : "text-[#111111]"}
              >
                {family.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-[1180px] px-5 pb-10 pt-5 md:px-8">
        <article className="mx-auto max-w-[1120px]">
          <h1 className="mb-5 text-center text-[2rem] font-normal leading-none md:text-[2.15rem]">KIHON</h1>

          <p className="mx-auto max-w-[1080px] text-justify text-[1rem] leading-[1.12] md:text-[1.05rem]">
            {intro}
          </p>

          <div className="mt-10 grid grid-cols-2 gap-x-7 gap-y-2 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-10">
            {families.map((family) => (
              <FamilyColumn key={family.id} family={family} query={query} />
            ))}
          </div>

          <div className="mt-4 border-t border-transparent pt-2">
            <p className="text-[0.76rem] leading-[1.15]">
              *In actuality, kata preceded kihon. Kihon was developed as a means to facilitate the learning of movements of the kata, especially when teaching large groups of people.
            </p>
          </div>

          <div className="mt-5 flex flex-col gap-2 border-t border-[#cfc6b5] pt-4 sm:flex-row sm:items-center sm:justify-between">
            <label htmlFor="technique-search" className="text-[0.65rem] uppercase tracking-[0.15em]">Search Kihon</label>
            <div className="flex w-full items-center gap-3 sm:max-w-[360px]">
              <input
                id="technique-search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search techniques"
                className="w-full border-b border-[#8f8778] bg-transparent px-0 py-2 text-[0.8rem] outline-none placeholder:text-[#7d7568] focus:border-[#9b3d18]"
              />
              {query && <span className="shrink-0 text-[0.65rem]">{results}</span>}
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
