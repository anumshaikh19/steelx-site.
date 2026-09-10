import { ArrowLeft, ArrowRight } from "lucide-react";

const movements = [
  ["1", "gedan-barai", "down block", "zenkutsu-dachi", "gedan", ""],
  ["2", "oi-zuki", "lunge punch", "zenkutsu-dachi", "chudan", ""],
  ["3", "gedan-barai", "down block", "zenkutsu-dachi", "gedan", ""],
  ["4", "kentsui-tate-mawashi-uchi", "vertical hammer-fist strike", "zenkutsu-dachi", "--", "target collarbone"],
  ["5", "oi-zuki", "lunge punch", "zenkutsu-dachi", "chudan", ""],
  ["6", "gedan-barai", "down block", "zenkutsu-dachi", "gedan", ""],
  ["7", "age-uke", "rising block", "zenkutsu-dachi", "jodan", ""],
  ["8", "age-uke", "rising block", "zenkutsu-dachi", "jodan", ""],
  ["9*", "age-uke", "rising block", "zenkutsu-dachi", "jodan", ""],
  ["10", "gedan-barai", "down block", "zenkutsu-dachi", "gedan", ""],
  ["11", "oi-zuki", "lunge punch", "zenkutsu-dachi", "chudan", ""],
  ["12", "gedan-barai", "down block", "zenkutsu-dachi", "gedan", ""],
  ["13", "oi-zuki", "lunge punch", "zenkutsu-dachi", "chudan", ""],
  ["14", "gedan-barai", "down block", "zenkutsu-dachi", "gedan", ""],
  ["15", "oi-zuki", "lunge punch", "zenkutsu-dachi", "chudan", ""],
  ["16", "oi-zuki", "lunge punch", "zenkutsu-dachi", "chudan", ""],
  ["17*", "oi-zuki", "lunge punch", "zenkutsu-dachi", "chudan", ""],
  ["18", "shuto-uke", "knife-hand block", "kokutsu-dachi", "chudan", ""],
  ["19", "shuto-uke", "knife-hand block", "kokutsu-dachi", "chudan", ""],
  ["20", "shuto-uke", "knife-hand block", "kokutsu-dachi", "chudan", ""],
  ["21", "shuto-uke", "knife-hand block", "kokutsu-dachi", "chudan", ""],
];

const kataLinks = [
  ["Heian Shodan", "heian-shodan"], ["Heian Nidan", "heian-nidan"], ["Heian Sandan", "heian-sandan"], ["Heian Yondan", "heian-yondan"], ["Heian Godan", "heian-godan"],
  ["Tekki Shodan", "tekki-shodan"], ["Tekki Nidan", "tekki-nidan"], ["Tekki Sandan", "tekki-sandan"], ["Bassai Dai", "bassai-dai"], ["Kanku Dai", "kanku-dai"], ["Jion", "jion"], ["Empi", "empi"],
  ["Jitte", "jitte"], ["Gankaku", "gankaku"], ["Hangetsu", "hangetsu"], ["Kanku Sho", "kanku-sho"], ["Bassai Sho", "bassai-sho"], ["Chinte", "chinte"], ["Nijushiho", "nijushiho"], ["Sochin", "sochin"], ["Unsu", "unsu"], ["Gojushiho Sho", "gojushiho-sho"], ["Gojushiho Dai", "gojushiho-dai"], ["Meikyo", "meikyo"], ["Wankan", "wankan"], ["Jiin", "jiin"], ["Taikyoku Shodan", "taikyoku-shodan"], ["Taikyoku Nidan", "taikyoku-nidan"], ["Taikyoku Sandan", "taikyoku-sandan"], ["Ten No Kata", "ten-no-kata"],
];

export function HeianShodanPage() {
  return (
    <div className="min-h-screen bg-[#e9e2d3] text-[#111111]">
      <header className="sticky top-0 z-30 border-b border-[#bdb4a4] bg-[#e9e2d3]/95 px-5 py-4 backdrop-blur md:px-10">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-5">
          <a href="/karate/" className="inline-flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.2em] hover:text-[#9b3d18]"><ArrowLeft size={14} /> Dhanurveda</a>
          <a href="/karate/#kata" className="text-[0.65rem] font-bold uppercase tracking-[0.2em] hover:text-[#9b3d18]">Kata Library</a>
        </div>
      </header>

      <main className="mx-auto max-w-[1180px] px-5 pb-24 pt-10 md:px-10 md:pt-16">
        <div className="border-b border-[#bdb4a4] pb-8">
          <p className="mb-3 text-[0.65rem] font-bold uppercase tracking-[0.3em] text-[#9b3d18]">Kata 01 · Heian Series</p>
          <h1 className="font-[var(--font-display)] text-5xl font-bold uppercase leading-[0.85] tracking-[-0.04em] md:text-8xl">Heian Shodan</h1>
        </div>
        <section className="mx-auto max-w-[1080px] pt-8">
          <p className="font-serif text-[1rem] leading-[1.55] text-justify"><em>Heian Shodan</em> is the first kata in the Heian series and is usually the first kata that a beginner must learn. It has 21 movements and its <em>embusen</em> is roughly I-shaped. Essential points to learn in H1 include the <em>oi-zuki</em> (lunge punch) and <em>gedan-barai</em> (down block) which comprise over half of the kata. Also of great importance is developing the <em>zenkutsu-dachi</em> (front stance), the main stance of H1.</p>
          <p className="mt-4 font-serif text-[1rem] leading-[1.55] text-justify">The student must try to master the arc-like moves of the feet and reversing direction, skills which appear time and time again in all kata. One must also develop power from the hips in both the <em>hanmi</em> (for blocks) and <em>shomen</em> (for punches) positions.</p>
        </section>
        <section className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse border border-[#777064] bg-[#d9ceb8] font-serif text-[0.78rem]">
            <thead><tr className="bg-[#cfc2aa] text-center font-bold">{['#', 'Technique', 'Translation', 'Stance', 'Target', 'Notes'].map(h => <th key={h} className="border border-[#777064] px-3 py-2">{h}</th>)}</tr></thead>
            <tbody>{movements.map(row => <tr key={row[0]} className="hover:bg-[#e4dac7]">{row.map((cell, i) => <td key={i} className={`border border-[#777064] px-3 py-2 ${i === 0 ? 'text-center' : ''}`}>{cell}</td>)}</tr>)}</tbody>
          </table>
        </section>
        <section className="mt-12 border-t border-[#bdb4a4] pt-8"><div className="grid grid-cols-2 gap-2 md:grid-cols-5 lg:grid-cols-10">{kataLinks.map(([label, slug]) => <a key={slug} href={`/karate/kata/${slug}`} className={`text-[0.6rem] uppercase tracking-[0.08em] underline underline-offset-2 hover:text-[#9b3d18] ${slug === 'heian-shodan' ? 'font-bold text-[#9b3d18]' : ''}`}>{label}</a>)}</div></section>
        <nav className="mt-10 flex items-center justify-between border-t border-[#bdb4a4] pt-7 text-[0.65rem] font-bold uppercase tracking-[0.18em]"><span className="text-[#8b8376]">← First Kata</span><a href="/karate/kata/heian-nidan" className="inline-flex items-center gap-2 hover:text-[#9b3d18]">Heian Nidan <ArrowRight size={14} /></a></nav>
      </main>
    </div>
  );
}
