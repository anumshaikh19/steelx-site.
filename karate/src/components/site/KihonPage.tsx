import { useEffect, useMemo, useState } from "react";
import { BRAND } from "./data";

type Group = { title: string; items: string[] };
type Family = { id: string; label: string; sub: string; groups: Group[] };

const families: Family[] = [
  { id: "tachi", label: "TACHI", sub: "STANCES", groups: [
    { title: "Outer Tension Stances", items: ["zenkutsu-dachi", "kokutsu-dachi", "kiba-dachi", "fudo-dachi (sochin)", "shiko-dachi"] },
    { title: "Inner Tension Stances", items: ["hangetsu-dachi", "sanchin-dachi", "nekoashi-dachi"] },
    { title: "Natural Stances", items: ["hachiji-dachi", "uchi-hachiji-dachi", "musubi-dachi", "heisoku-dachi", "renoji-dachi", "teinoji-dachi", "heiko-dachi"] },
    { title: "Unstable Stances", items: ["ashi-dachi", "tsuru-dachi (sagiashi)", "kosa-dachi", "hizakutsu-dachi", "hiza-dachi"] },
  ] },
  { id: "uke", label: "UKE", sub: "BLOCKS", groups: [
    { title: "Basic Closed-Hand Blocks", items: ["age-uke", "soto-uke", "gedan-barai", "uchi-uke"] },
    { title: "Open-Hand Blocks", items: ["shuto-uke", "tate shuto-uke", "kake-uke", "haishu-uke", "tsukami-uke"] },
    { title: "Advanced Blocks", items: ["haiwan-uke", "nagashi-uke", "osae-uke", "sukui-uke", "maki-otoshi-uke"] },
    { title: "Double-Hand Blocks", items: ["morote-uke", "kosa-uke", "kakewake-uke", "manji-uke", "bo-uke", "awase-uke", "hasami-uke", "oshi-uke"] },
  ] },
  { id: "tsuki", label: "TSUKI", sub: "PUNCHES", groups: [
    { title: "Basic Punches", items: ["choku-zuki", "oi-zuki", "gyaku-zuki", "kisami-zuki"] },
    { title: "Advanced Punches", items: ["ura-zuki", "age-zuki", "kagi-zuki", "mawashi-zuki", "tate-zuki", "uke-zuki"] },
    { title: "Double-Hand Punches", items: ["morote-zuki", "yama-zuki", "yumi-zuki", "awase-zuki", "heiko-zuki", "hasami-zuki"] },
    { title: "Fore-Knuckle Punches", items: ["ippon-ken", "nakadaka-ippon-ken", "hiraken"] },
    { title: "Spear-Hand", items: ["ippon-nukite", "nihon-nukite", "tate-nukite", "hira-nukite"] },
  ] },
  { id: "keri", label: "KERI", sub: "KICKS", groups: [
    { title: "Basic Kicks", items: ["mae-geri", "yoko-geri-keage", "yoko-geri-kekomi", "mawashi-geri"] },
    { title: "Advanced Kicks", items: ["ushiro-geri", "ura-mawashi-geri", "mikazuki-geri", "tobi-geri"] },
    { title: "Advanced Leg Attacks", items: ["fumikomi", "ashi-barai", "ashi-namigaeshi"] },
    { title: "Non-Traditional Kicks", items: ["ushiro-ura-mawashi-geri", "ura-mikazuki-geri", "kagi-geri", "otoshi-kakato-geri", "tsumasaki-geri", "sune-geri", "kin-geri", "naname-geri"] },
  ] },
  { id: "uchi", label: "UCHI", sub: "STRIKES", groups: [
    { title: "Roundhouse Strikes", items: ["kentsui-uchi", "uraken-uchi", "shuto-uchi", "haito-uchi", "teisho"] },
    { title: "Animal Strikes", items: ["keito", "seiryuto", "kakuto", "kumade", "washide"] },
    { title: "Smashing Techniques", items: ["empi-uchi (empi-ate)", "hiza-tsuchi (hiza-ate)"] },
  ] },
];

const intro: Record<string, string> = {
  tachi: "Stances form the foundation of kihon. They establish balance, stability, distance and the ability to deliver technique with control.",
  uke: "Uke means receive. Blocks are defensive techniques, but many can also become strikes, controls or the opening for a counter-attack.",
  tsuki: "Tsuki means thrust. In karate it describes the family of punching techniques, from direct basic punches to specialized hand formations.",
  keri: "Keri covers attacks performed with the legs and feet. Kicks offer range and power, while demanding timing, balance and control.",
  uchi: "Uchi covers striking techniques delivered with different parts of the hand, arm, elbow or knee, giving the karateka options from many angles.",
};

const links = families.map((f) => ({ id: f.id, label: f.label, sub: f.sub }));

function TechniqueCategory({ group, query }: { group: Group; query: string }) {
  const items = group.items.filter((item) => item.toLowerCase().includes(query.trim().toLowerCase()));
  if (query && !items.length) return null;
  return (
    <section className="border-t border-[#d8d4cc] py-7 md:py-9">
      <div className="grid gap-5 md:grid-cols-[220px_1fr] md:gap-10">
        <h3 className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#5b5a56]">{group.title}</h3>
        <ul className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <li key={item} className="group border-b border-[#e6e2db] py-2.5 text-[0.9rem] leading-6 text-[#242321] transition-colors hover:text-[#8f211b] focus-within:text-[#8f211b]">
              <a href={`#${item.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} className="inline-flex w-full items-center gap-2 rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-[#8f211b]">
                <span className="h-px w-0 bg-[#8f211b] transition-all duration-200 group-hover:w-3" />
                <span>{item}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function TechniqueSection({ family, query }: { family: Family; query: string }) {
  const visible = family.groups.some((group) => group.items.some((item) => item.toLowerCase().includes(query.trim().toLowerCase())));
  if (query && !visible) return null;
  return (
    <section id={family.id} className="scroll-mt-32 border-t-[3px] border-[#171717] pt-8 md:pt-10">
      <div className="mb-3 flex items-end justify-between gap-4">
        <div>
          <p className="mb-2 text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-[#8f211b]">Kihon reference</p>
          <h2 className="font-[var(--font-display)] text-5xl font-bold uppercase leading-none tracking-[-0.02em] text-[#111111] md:text-7xl">{family.label}</h2>
        </div>
        <span className="hidden text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-[#77736c] sm:block">{family.sub}</span>
      </div>
      <p className="mb-8 max-w-2xl text-[0.92rem] leading-7 text-[#5a5853]">{intro[family.id]}</p>
      <div>{family.groups.map((group) => <TechniqueCategory key={group.title} group={group} query={query} />)}</div>
    </section>
  );
}

export function KihonPage() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("tachi");
  const [showTop, setShowTop] = useState(false);

  const results = useMemo(() => families.reduce((total, family) => total + family.groups.reduce((n, group) => n + group.items.filter((item) => item.toLowerCase().includes(query.trim().toLowerCase())).length, 0), 0), [query]);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id);
    }, { rootMargin: "-28% 0px -60% 0px", threshold: [0.05, 0.25, 0.6] });
    families.forEach((family) => { const node = document.getElementById(family.id); if (node) observer.observe(node); });
    return () => observer.disconnect();
  }, []);

  return (
    <div id="top" className="min-h-screen bg-[#f7f5f0] text-[#111111]">
      <header className="sticky top-0 z-50 border-b border-[#d8d4cc] bg-[#f7f5f0]/95 backdrop-blur supports-[backdrop-filter]:bg-[#f7f5f0]/90">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-6 px-5 py-4 md:px-8">
          <a href="/karate/" className="shrink-0" aria-label="Dhanurveda Karate home">
            <span className="block font-[var(--font-display)] text-lg font-bold uppercase tracking-[0.12em]">{BRAND.name}</span>
            <span className="hidden text-[0.52rem] font-semibold uppercase tracking-[0.25em] text-[#77736c] sm:block">Shotokan · Martial Arts · Mumbai</span>
          </a>
          <nav aria-label="Kihon categories" className="min-w-0">
            <div className="flex max-w-[720px] gap-5 overflow-x-auto whitespace-nowrap pb-1 [scrollbar-width:none] md:gap-7">
              {links.map((link) => (
                <a key={link.id} href={`#${link.id}`} aria-current={active === link.id ? "page" : undefined} className={`relative py-1 text-[0.64rem] font-bold uppercase tracking-[0.2em] transition-colors ${active === link.id ? "text-[#8f211b]" : "text-[#55534e] hover:text-[#111111]"}`}>
                  {link.label}<span className={`absolute -bottom-1 left-0 h-px bg-[#8f211b] transition-all ${active === link.id ? "w-full" : "w-0"}`} />
                </a>
              ))}
            </div>
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-[1180px] px-5 pb-16 pt-16 md:px-8 md:pb-20 md:pt-24">
          <div className="grid gap-10 md:grid-cols-[1fr_260px] md:items-end">
            <div>
              <p className="mb-5 text-[0.66rem] font-bold uppercase tracking-[0.32em] text-[#8f211b]">Dhanurveda · Karate fundamentals</p>
              <h1 className="font-[var(--font-display)] text-[18vw] font-bold uppercase leading-[0.78] tracking-[-0.035em] text-[#111111] md:text-[9rem]">Kihon</h1>
              <p className="mt-8 max-w-3xl text-base leading-7 text-[#4f4d48] md:text-[1.05rem] md:leading-8">Kihon means the basics or fundamentals: the repeated practice of karate's essential techniques. It is the alphabet from which kata are organized and the technical foundation carried into kumite.</p>
            </div>
            <aside className="border-l border-[#d0ccc4] pl-5 text-[0.68rem] uppercase tracking-[0.2em] text-[#6e6b65] md:pb-2">
              <p className="font-bold text-[#111111]">05 families</p>
              <p className="mt-2">Stances · Blocks</p>
              <p>Punches · Kicks</p>
              <p>Strikes</p>
            </aside>
          </div>
        </section>

        <div className="border-y border-[#d8d4cc] bg-[#eeece6]">
          <div className="mx-auto flex max-w-[1180px] items-center gap-4 px-5 py-3 md:px-8">
            <span className="shrink-0 text-[0.6rem] font-bold uppercase tracking-[0.24em] text-[#6f6c65]">Jump to</span>
            <div className="flex min-w-0 gap-4 overflow-x-auto whitespace-nowrap [scrollbar-width:none]">
              {links.map((link, index) => <a key={link.id} href={`#${link.id}`} className="shrink-0 text-[0.66rem] font-bold uppercase tracking-[0.18em] text-[#292824] hover:text-[#8f211b]"><span className="mr-2 text-[#9b968d]">0{index + 1}</span>{link.label} <span className="text-[#8a867e]">— {link.sub}</span></a>)}
            </div>
          </div>
        </div>

        <section className="mx-auto max-w-[1180px] px-5 py-10 md:px-8 md:py-12">
          <div className="flex flex-col gap-4 border-b border-[#d8d4cc] pb-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[0.63rem] font-bold uppercase tracking-[0.25em] text-[#8f211b]">Explore the reference</p>
              <h2 className="mt-2 font-[var(--font-display)] text-3xl font-bold uppercase tracking-[-0.02em]">Technique index</h2>
            </div>
            <div className="w-full md:w-[360px]">
              <label htmlFor="technique-search" className="sr-only">Search techniques</label>
              <div className="flex items-center border-b-2 border-[#171717]">
                <input id="technique-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search techniques..." className="w-full bg-transparent px-0 py-3 text-sm text-[#111111] outline-none placeholder:text-[#96928b]" />
                <span aria-live="polite" className="shrink-0 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-[#77736c]">{query ? `${results} match${results === 1 ? "" : "es"}` : "Search"}</span>
              </div>
            </div>
          </div>
          <div className="mt-2 divide-y divide-[#e1ddd5]">
            {families.map((family) => <TechniqueSection key={family.id} family={family} query={query} />)}
            {query && results === 0 && <div className="py-16 text-center text-sm text-[#6e6b65]">No techniques match “{query}”. Try another term.</div>}
          </div>
        </section>
      </main>

      <footer className="border-t border-[#d8d4cc] bg-[#111111] text-[#f7f5f0]">
        <div className="mx-auto flex max-w-[1180px] flex-col gap-4 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-8">
          <div><p className="font-[var(--font-display)] text-2xl font-bold uppercase tracking-[0.08em]">{BRAND.name}</p><p className="mt-1 text-[0.6rem] uppercase tracking-[0.22em] text-[#a5a29b]">Martial Arts &amp; Calisthenics · Nagpada, Mumbai</p></div>
          <a href="/karate/" className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-[#c9a85c] hover:text-white">Back to dojo ↗</a>
        </div>
      </footer>

      {showTop && <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="fixed bottom-5 right-5 z-40 border border-[#111111] bg-[#f7f5f0] px-4 py-3 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[#111111] shadow-sm hover:bg-[#111111] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#8f211b]">Top ↑</button>}
    </div>
  );
}
