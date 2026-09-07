import * as React from "react";
import { motion } from "motion/react";

const source = "https://shotokankaratecsl.com/";

const kihon = [
  ["TACHI", "Stances", "Kihon%2001%20-%20Tachi.html"],
  ["UKE", "Blocks", "Kihon%2002%20-%20Uke.html"],
  ["TSUKI", "Punches", "Kihon%2003%20-%20Tsuki.html"],
  ["KERI", "Kicks", "Kihon%2004%20-%20Keri.html"],
  ["UCHI", "Strikes", "Kihon%2005%20-%20Uchi.html"],
] as const;

const kataGroups = [
  ["HEIAN", [
    ["Heian Shodan", "Kata%2001-%20Heian%20Shodan.html"],
    ["Heian Nidan", "Kata%2002%20-%20Heian%20Nidan.html"],
    ["Heian Sandan", "Kata%2003%20-%20Heian%20Sandan.html"],
    ["Heian Yondan", "Kata%2004%20-%20Heian%20Yondan.html"],
    ["Heian Godan", "Kata%2005%20-%20Heian%20Godan.html"],
  ]],
  ["TEKKI", [
    ["Tekki Shodan", "Kata%2006%20-%20Tekki%20Shodan.html"],
    ["Tekki Nidan", "Kata%2007%20-%20Tekki%20Nidan.html"],
    ["Tekki Sandan", "Kata%2008%20-%20Tekki%20Sandan.html"],
  ]],
  ["SENTEI", [
    ["Bassai Dai", "Kata%2009%20-%20Bassai%20Dai.html"],
    ["Kanku Dai", "Kata%2010%20-%20Kanku%20Dai.html"],
    ["Jion", "Kata%2011%20-%20Jion.html"],
    ["Empi", "Kata%2012%20-%20Empi.html"],
  ]],
  ["ADVANCED · FUNAKOSHI", [
    ["Jitte", "Kata%2013%20-%20Jitte.html"],
    ["Gankaku", "Kata%2014%20-%20Gankaku.html"],
    ["Hangetsu", "Kata%2015%20-%20Hangetsu.html"],
  ]],
  ["ADVANCED · NAKAYAMA", [
    ["Kanku Sho", "Kata%2016%20-%20Kanku%20Sho.html"],
    ["Bassai Sho", "Kata%2017%20-%20Bassai%20Sho.html"],
    ["Chinte", "Kata%2018%20-%20Chinte.html"],
    ["Nijushiho", "Kata%2019%20-%20Nijushiho.html"],
    ["Sochin", "Kata%2020%20-%20Sochin.html"],
    ["Unsu", "Kata%2021%20-%20Unsu.html"],
    ["Gojushiho Sho", "Kata%2022%20-%20Gojushiho%20Sho.html"],
    ["Gojushiho Dai", "Kata%2023%20-%20Gojushiho%20Dai.html"],
    ["Meikyo", "Kata%2024%20-%20Meikyo.html"],
  ]],
  ["ADVANCED · RARE", [
    ["Wankan", "Kata%2025%20-%20Wankan.html"],
    ["Jiin", "Kata%2026%20-%20Jiin.html"],
  ]],
  ["MODERN", [
    ["Taikyoku Shodan", "Kata%2027%20-%20Taikyoku%20Shodan.html"],
    ["Taikyoku Nidan", "Kata%2028%20-%20Taikyoku%20Nidan.html"],
    ["Taikyoku Sandan", "Kata%2029%20-%20Taikyoku%20Sandan.html"],
    ["Ten No Kata", "Kata%2030%20-%20Ten%20No%20Kata.html"],
  ]],
] as const;

const kumiteMethods = [
  "Kihon-Gohon-Kumite",
  "Kihon-Sanbon-Kumite",
  "Jiyu-Kumite",
  "Shiai-Kumite",
  "Oyo-Kumite",
  "Kihon-Ippon-Kumite",
  "Jiyu-Ippon-Kumite",
];

const kumiteLevels = [
  ["BEGINNER", "Kumite%2001%20-%20Beginner.html"],
  ["INTERMEDIATE", "Kumite%2002%20-%20%20Intermediate.html"],
  ["ADVANCED", "Kumite%2003%20-%20Advanced.html"],
] as const;

const Link = ({ href, children, number }: { href: string; children: React.ReactNode; number?: string }) => (
  <a href={href} target="_blank" rel="noreferrer" className="group flex items-center justify-between border-b border-line/70 py-4 text-ivory/75 transition-colors hover:border-gold hover:text-ivory">
    <span className="flex items-center gap-4"><span className="font-mono text-[10px] text-gold/70">{number}</span><span className="text-sm tracking-wide">{children}</span></span>
    <span className="text-gold opacity-50 transition-transform group-hover:translate-x-1 group-hover:opacity-100">↗</span>
  </a>
);

export function KarateLibrary() {
  const [tab, setTab] = React.useState<"kihon" | "kata" | "kumite">("kihon");
  const [openGroup, setOpenGroup] = React.useState(0);

  return (
    <section id="karate-library" className="relative overflow-hidden bg-ink px-5 py-28 text-ivory md:px-10 md:py-36">
      <div className="absolute inset-0 pointer-events-none opacity-[0.08]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)", backgroundSize: "72px 72px" }} />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 grid gap-8 md:grid-cols-[1fr_2fr] md:items-end">
          <div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-gold">13 / Karate library</p>
            <p className="mt-3 text-xs uppercase tracking-[0.22em] text-ivory/40">Shotokan reference · external source</p>
          </div>
          <div>
            <h2 className="font-display text-6xl leading-[0.82] tracking-tight md:text-9xl">THE KARATE<br/><span className="text-gold">LIBRARY.</span></h2>
            <p className="mt-7 max-w-2xl text-sm leading-7 text-ivory/55">Explore the complete Kihon, Kata and Kumite index used as a reference for this dojo. Every entry opens its corresponding Shotokan Karate CSL page.</p>
          </div>
        </div>

        <div className="mb-12 grid grid-cols-3 border-y border-line">
          {(["kihon", "kata", "kumite"] as const).map((item, i) => (
            <button key={item} onClick={() => setTab(item)} className={`relative px-3 py-5 text-left text-[10px] uppercase tracking-[0.28em] transition-colors md:px-6 ${tab === item ? "text-gold" : "text-ivory/45 hover:text-ivory"}`}>
              <span className="mr-3 font-mono text-[9px] opacity-50">0{i + 1}</span>{item}
              {tab === item && <motion.span layoutId="library-tab" className="absolute bottom-0 left-0 right-0 h-px bg-gold" />}
            </button>
          ))}
        </div>

        {tab === "kihon" && (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="grid gap-px bg-line md:grid-cols-5">
            {kihon.map(([code, title], i) => (
              <a key={code} href={`${source}${kihon[i][2]}`} target="_blank" rel="noreferrer" className="group min-h-64 bg-char p-6 transition-all hover:bg-char-2 md:min-h-80">
                <div className="flex h-full flex-col justify-between"><span className="font-mono text-[10px] text-gold">0{i + 1}</span><div><p className="font-display text-4xl text-ivory transition-transform group-hover:translate-x-1">{code}</p><p className="mt-2 text-xs uppercase tracking-[0.18em] text-ivory/45">{title}</p><p className="mt-8 text-xs uppercase tracking-[0.18em] text-gold opacity-0 transition-opacity group-hover:opacity-100">Open reference ↗</p></div></div>
              </a>
            ))}
          </motion.div>
        )}

        {tab === "kata" && (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="grid gap-3 md:grid-cols-2">
            {kataGroups.map(([group, items], gi) => {
              const open = openGroup === gi;
              return <div key={group} className="border border-line bg-char/60">
                <button onClick={() => setOpenGroup(open ? -1 : gi)} className="flex w-full items-center justify-between px-5 py-5 text-left hover:bg-char-2">
                  <span><span className="mr-3 font-mono text-[9px] text-gold">{String(gi + 1).padStart(2, "0")}</span><span className="text-[11px] uppercase tracking-[0.25em] text-ivory">{group}</span></span>
                  <span className={`text-gold transition-transform ${open ? "rotate-45" : ""}`}>＋</span>
                </button>
                {open && <div className="border-t border-line px-5 pb-4">{items.map(([name, path], i) => <Link key={name} href={`${source}${path}`} number={String(i + 1).padStart(2, "0")}>{name}</Link>)}</div>}
              </div>;
            })}
          </motion.div>
        )}

        {tab === "kumite" && (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="grid gap-10 md:grid-cols-[1.1fr_.9fr]">
            <div className="border border-line bg-char p-6 md:p-8">
              <p className="text-[10px] uppercase tracking-[0.3em] text-gold">Traditional methods</p>
              <div className="mt-5">{kumiteMethods.map((name, i) => <div key={name} className="flex items-center gap-4 border-b border-line/70 py-4 text-sm text-ivory/70"><span className="font-mono text-[10px] text-gold/60">{String(i + 1).padStart(2, "0")}</span>{name}</div>)}</div>
              <p className="mt-5 text-xs leading-6 text-ivory/35">These methods are listed on the source Kumite page; the source site provides the detailed level pages separately.</p>
            </div>
            <div className="border border-gold/30 bg-gold p-6 text-ink md:p-8">
              <p className="text-[10px] uppercase tracking-[0.3em] opacity-60">Training levels</p>
              <div className="mt-5">{kumiteLevels.map(([name, path], i) => <a key={name} href={`${source}${path}`} target="_blank" rel="noreferrer" className="group flex items-center justify-between border-b border-ink/15 py-5"><span className="flex items-center gap-4"><span className="font-mono text-[10px] opacity-50">0{i + 1}</span><span className="font-display text-3xl">{name}</span></span><span className="transition-transform group-hover:translate-x-1">↗</span></a>)}</div>
            </div>
          </motion.div>
        )}

        <div className="mt-14 flex flex-col justify-between gap-4 border-t border-line pt-5 text-[10px] uppercase tracking-[0.22em] text-ivory/35 md:flex-row"><span>30 kata · 5 kihon disciplines · 3 kumite levels</span><a href={source} target="_blank" rel="noreferrer" className="text-gold/70 hover:text-gold">Source: Shotokan Karate CSL ↗</a></div>
      </div>
    </section>
  );
}
