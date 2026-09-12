import { ArrowLeft, ArrowRight } from "lucide-react";

const movements = [
  ["1", "uchi-uke", "inside block", "kokutsu-dachi", "chudan", ""],
  ["2", "oi-zuki", "lunge punch", "zenkutsu-dachi", "chudan", ""],
  ["3", "uchi-uke", "inside block", "kokutsu-dachi", "chudan", ""],
  ["4", "oi-zuki", "lunge punch", "zenkutsu-dachi", "chudan", ""],
  ["5", "gedan-barai", "down block", "zenkutsu-dachi", "gedan", ""],
  ["6", "oi-zuki", "lunge punch", "zenkutsu-dachi", "jodan", ""],
  ["7", "oi-zuki", "lunge punch", "zenkutsu-dachi", "jodan", ""],
  ["8*", "oi-zuki", "lunge punch", "zenkutsu-dachi", "jodan", ""],
  ["9", "uchi-uke", "inside block", "kokutsu-dachi", "chudan", ""],
  ["10", "oi-zuki", "lunge punch", "zenkutsu-dachi", "chudan", ""],
  ["11", "uchi-uke", "inside block", "kokutsu-dachi", "chudan", ""],
  ["12", "oi-zuki", "lunge punch", "zenkutsu-dachi", "chudan", ""],
  ["13", "gedan-barai", "down block", "zenkutsu-dachi", "gedan", ""],
  ["14", "oi-zuki", "lunge punch", "zenkutsu-dachi", "jodan", ""],
  ["15", "oi-zuki", "lunge punch", "zenkutsu-dachi", "jodan", ""],
  ["16*", "oi-zuki", "lunge punch", "zenkutsu-dachi", "jodan", ""],
  ["17", "uchi-uke", "inside block", "kokutsu-dachi", "chudan", ""],
  ["18", "oi-zuki", "lunge punch", "zenkutsu-dachi", "chudan", ""],
  ["19", "uchi-uke", "inside block", "kokutsu-dachi", "chudan", ""],
  ["20", "oi-zuki", "lunge punch", "zenkutsu-dachi", "chudan", ""],
];

const kataLinks = [
  ["Heian Shodan", "heian-shodan"], ["Heian Nidan", "heian-nidan"], ["Heian Sandan", "heian-sandan"], ["Heian Yondan", "heian-yondan"], ["Heian Godan", "heian-godan"],
  ["Tekki Shodan", "tekki-shodan"], ["Tekki Nidan", "tekki-nidan"], ["Tekki Sandan", "tekki-sandan"], ["Bassai Dai", "bassai-dai"], ["Kanku Dai", "kanku-dai"], ["Jion", "jion"], ["Empi", "empi"],
  ["Jitte", "jitte"], ["Gankaku", "gankaku"], ["Hangetsu", "hangetsu"], ["Kanku Sho", "kanku-sho"], ["Bassai Sho", "bassai-sho"], ["Chinte", "chinte"], ["Nijushiho", "nijushiho"], ["Sochin", "sochin"], ["Unsu", "unsu"], ["Gojushiho Sho", "gojushiho-sho"], ["Gojushiho Dai", "gojushiho-dai"], ["Meikyo", "meikyo"], ["Wankan", "wankan"], ["Jiin", "jiin"], ["Taikyoku Shodan", "taikyoku-shodan"], ["Taikyoku Nidan", "taikyoku-nidan"], ["Taikyoku Sandan", "taikyoku-sandan"], ["Ten No Kata", "ten-no-kata"],
];

export function TaikyokuSandanPage() {
  return (
    <div className="min-h-screen bg-[#e9e2d3] text-[#111111]">
      <header className="sticky top-0 z-30 border-b border-[#bdb4a4] bg-[#e9e2d3]/95 px-5 py-4 backdrop-blur md:px-10"><div className="mx-auto flex max-w-[1180px] items-center justify-between gap-5"><a href="/karate/" className="inline-flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.2em] hover:text-[#9b3d18]"><ArrowLeft size={14} /> Dhanurveda</a><a href="/karate/#kata" className="text-[0.65rem] font-bold uppercase tracking-[0.2em] hover:text-[#9b3d18]">Kata Library</a></div></header>
      <main className="mx-auto max-w-[1180px] px-5 pb-24 pt-10 md:px-10 md:pt-16">
        <div className="border-b border-[#bdb4a4] pb-8"><p className="mb-3 text-[0.65rem] font-bold uppercase tracking-[0.3em] text-[#9b3d18]">Kata 29 · Taikyoku Series</p><h1 className="font-[var(--font-display)] text-5xl font-bold uppercase leading-[0.85] tracking-[-0.04em] md:text-8xl">Taikyoku Sandan</h1></div>
        <section className="mx-auto max-w-[1080px] pt-8"><p className="font-serif text-[1rem] leading-[1.55] text-justify">There are several different variations on how <em>Taikyoku Sandan</em> should be performed. One may also find descriptions of six <em>Taikyoku</em> kata. The <em>Taikyoku</em> kata described on this website refer to Gichin Funakoshi's book, <em>Karate-Do Kyohan</em>, in which he describes only three <em>Taikyoku</em> kata. Again, <em>Taikyoku Sandan</em> is almost identical to <em>Taikyoku Shodan</em> except that six (of the eight) down blocks (on top and bottom of embusen) are replaced with inside blocks (in back stance), and both sets of three <em>chudan</em> punches are exchanged for <em>jodan</em> punches. Obviously, the purpose of this kata was to introduce the student to back stance and inside block. Otherwise, it is the same as its two predecessors.</p></section>
        <section className="mt-12 overflow-x-auto"><table className="w-full min-w-[760px] border-collapse border border-[#777064] bg-[#d9ceb8] font-serif text-[0.78rem]"><thead><tr className="bg-[#cfc2aa] text-center font-bold">{['#','Technique','Translation','Stance','Target','Notes'].map(h=><th key={h} className="border border-[#777064] px-3 py-2">{h}</th>)}</tr></thead><tbody>{movements.map(row=><tr key={row[0]} className="hover:bg-[#e4dac7]">{row.map((cell,i)=><td key={i} className={`border border-[#777064] px-3 py-2 ${i===0?'text-center':''}`}>{cell}</td>)}</tr>)}</tbody></table></section>
        <section className="mt-12 border-t border-[#bdb4a4] pt-8"><div className="grid grid-cols-2 gap-2 md:grid-cols-5 lg:grid-cols-10">{kataLinks.map(([label,slug])=><a key={slug} href={`/karate/kata/${slug}`} className={`text-[0.6rem] uppercase tracking-[0.08em] underline underline-offset-2 hover:text-[#9b3d18] ${slug==='taikyoku-sandan'?'font-bold text-[#9b3d18]':''}`}>{label}</a>)}</div></section>
        <nav className="mt-10 flex items-center justify-between border-t border-[#bdb4a4] pt-7 text-[0.65rem] font-bold uppercase tracking-[0.18em]"><a href="/karate/kata/taikyoku-nidan" className="inline-flex items-center gap-2 hover:text-[#9b3d18]"><ArrowLeft size={14}/> Taikyoku Nidan</a><a href="/karate/kata/ten-no-kata" className="inline-flex items-center gap-2 hover:text-[#9b3d18]">Ten No Kata <ArrowRight size={14}/></a></nav>
      </main>
    </div>
  );
}
