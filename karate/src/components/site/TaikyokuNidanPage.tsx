import { ArrowLeft, ArrowRight } from "lucide-react";

const movements = [
  ["1", "gedan-barai", "down block", "zenkutsu-dachi", "gedan", ""],
  ["2", "oi-zuki", "lunge punch", "zenkutsu-dachi", "jodan", ""],
  ["3", "gedan-barai", "down block", "zenkutsu-dachi", "gedan", ""],
  ["4", "oi-zuki", "lunge punch", "zenkutsu-dachi", "jodan", ""],
  ["5", "gedan-barai", "down block", "zenkutsu-dachi", "gedan", ""],
  ["6", "oi-zuki", "lunge punch", "zenkutsu-dachi", "jodan", ""],
  ["7", "oi-zuki", "lunge punch", "zenkutsu-dachi", "jodan", ""],
  ["8*", "oi-zuki", "lunge punch", "zenkutsu-dachi", "jodan", ""],
  ["9", "gedan-barai", "down block", "zenkutsu-dachi", "gedan", ""],
  ["10", "oi-zuki", "lunge punch", "zenkutsu-dachi", "jodan", ""],
  ["11", "gedan-barai", "down block", "zenkutsu-dachi", "gedan", ""],
  ["12", "oi-zuki", "lunge punch", "zenkutsu-dachi", "jodan", ""],
  ["13", "gedan-barai", "down block", "zenkutsu-dachi", "gedan", ""],
  ["14", "oi-zuki", "lunge punch", "zenkutsu-dachi", "jodan", ""],
  ["15", "oi-zuki", "lunge punch", "zenkutsu-dachi", "jodan", ""],
  ["16*", "oi-zuki", "lunge punch", "zenkutsu-dachi", "jodan", ""],
  ["17", "gedan-barai", "down block", "zenkutsu-dachi", "gedan", ""],
  ["18", "oi-zuki", "lunge punch", "zenkutsu-dachi", "jodan", ""],
  ["19", "gedan-barai", "down block", "zenkutsu-dachi", "gedan", ""],
  ["20", "oi-zuki", "lunge punch", "zenkutsu-dachi", "jodan", ""],
];

const kataLinks = [
  ["Heian Shodan", "heian-shodan"], ["Heian Nidan", "heian-nidan"], ["Heian Sandan", "heian-sandan"], ["Heian Yondan", "heian-yondan"], ["Heian Godan", "heian-godan"],
  ["Tekki Shodan", "tekki-shodan"], ["Tekki Nidan", "tekki-nidan"], ["Tekki Sandan", "tekki-sandan"], ["Bassai Dai", "bassai-dai"], ["Kanku Dai", "kanku-dai"], ["Jion", "jion"], ["Empi", "empi"],
  ["Jitte", "jitte"], ["Gankaku", "gankaku"], ["Hangetsu", "hangetsu"], ["Kanku Sho", "kanku-sho"], ["Bassai Sho", "bassai-sho"], ["Chinte", "chinte"], ["Nijushiho", "nijushiho"], ["Sochin", "sochin"], ["Unsu", "unsu"], ["Gojushiho Sho", "gojushiho-sho"], ["Gojushiho Dai", "gojushiho-dai"], ["Meikyo", "meikyo"], ["Wankan", "wankan"], ["Jiin", "jiin"], ["Taikyoku Shodan", "taikyoku-shodan"], ["Taikyoku Nidan", "taikyoku-nidan"], ["Taikyoku Sandan", "taikyoku-sandan"], ["Ten No Kata", "ten-no-kata"],
];

export function TaikyokuNidanPage() {
  return (
    <div className="min-h-screen bg-[#e9e2d3] text-[#111111]">
      <header className="sticky top-0 z-30 border-b border-[#bdb4a4] bg-[#e9e2d3]/95 px-5 py-4 backdrop-blur md:px-10"><div className="mx-auto flex max-w-[1180px] items-center justify-between gap-5"><a href="/karate/" className="inline-flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.2em] hover:text-[#9b3d18]"><ArrowLeft size={14} /> Dhanurveda</a><a href="/karate/#kata" className="text-[0.65rem] font-bold uppercase tracking-[0.2em] hover:text-[#9b3d18]">Kata Library</a></div></header>
      <main className="mx-auto max-w-[1180px] px-5 pb-24 pt-10 md:px-10 md:pt-16">
        <div className="border-b border-[#bdb4a4] pb-8"><p className="mb-3 text-[0.65rem] font-bold uppercase tracking-[0.3em] text-[#9b3d18]">Kata 28 · Taikyoku Series</p><h1 className="font-[var(--font-display)] text-5xl font-bold uppercase leading-[0.85] tracking-[-0.04em] md:text-8xl">Taikyoku Nidan</h1></div>
        <section className="mx-auto max-w-[1080px] pt-8"><p className="font-serif text-[1rem] leading-[1.55] text-justify"><em>Taikyoku Nidan</em> is performed exactly as <em>Taikyoku Shodan</em> except that all of the punches are directed to the upper level (<em>jodan</em>) instead of the middle level (<em>chudan</em>). Otherwise, these two kata are identical. It is difficult for some to understand why a simple difference in target level would warrant a separate kata; it almost seems redundant. For this reason, many instructors do not teach <em>Taikyoku Nidan</em>. Nevertheless, a karateka should understand that this is a matter of <strong>detail</strong>. Many students may feel that such a detail is insignificant while others may believe that even the smallest detail can be vital. The Japanese are a very meticulous people (a look at Japanese tea ceremony will confirm this); it is not unreasonable that <em>Taikyoku Nidan</em> was created simply to emphasize the difference between <em>jodan</em> and <em>chudan</em> target areas.</p></section>
        <section className="mt-12 overflow-x-auto"><table className="w-full min-w-[760px] border-collapse border border-[#777064] bg-[#d9ceb8] font-serif text-[0.78rem]"><thead><tr className="bg-[#cfc2aa] text-center font-bold">{['#','Technique','Translation','Stance','Target','Notes'].map(h=><th key={h} className="border border-[#777064] px-3 py-2">{h}</th>)}</tr></thead><tbody>{movements.map(row=><tr key={row[0]} className="hover:bg-[#e4dac7]">{row.map((cell,i)=><td key={i} className={`border border-[#777064] px-3 py-2 ${i===0?'text-center':''}`}>{cell}</td>)}</tr>)}</tbody></table></section>
        <section className="mt-12 border-t border-[#bdb4a4] pt-8"><div className="grid grid-cols-2 gap-2 md:grid-cols-5 lg:grid-cols-10">{kataLinks.map(([label,slug])=><a key={slug} href={`/karate/kata/${slug}`} className={`text-[0.6rem] uppercase tracking-[0.08em] underline underline-offset-2 hover:text-[#9b3d18] ${slug==='taikyoku-nidan'?'font-bold text-[#9b3d18]':''}`}>{label}</a>)}</div></section>
        <nav className="mt-10 flex items-center justify-between border-t border-[#bdb4a4] pt-7 text-[0.65rem] font-bold uppercase tracking-[0.18em]"><a href="/karate/kata/taikyoku-shodan" className="inline-flex items-center gap-2 hover:text-[#9b3d18]"><ArrowLeft size={14}/> Taikyoku Shodan</a><a href="/karate/kata/taikyoku-sandan" className="inline-flex items-center gap-2 hover:text-[#9b3d18]">Taikyoku Sandan <ArrowRight size={14}/></a></nav>
      </main>
    </div>
  );
}
