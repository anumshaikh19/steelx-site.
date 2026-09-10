import { ArrowLeft, ArrowRight } from "lucide-react";

const movements = [
  ["1", "uchi-uke", "inside block", "kokutsu-dachi", "chudan", ""],
  ["2", "uchi-uke / gedan-uke", "inside block / down block", "heisoku-dachi", "chudan / gedan", ""],
  ["3", "uchi-uke / gedan-uke", "inside block / down block", "heisoku-dachi", "chudan / gedan", ""],
  ["4", "uchi-uke", "inside block", "kokutsu-dachi", "chudan", ""],
  ["5", "uchi-uke / gedan-uke", "inside block / down block", "heisoku-dachi", "chudan / gedan", ""],
  ["6", "uchi-uke / gedan-uke", "inside block / down block", "heisoku-dachi", "chudan / gedan", ""],
  ["7", "morote-uke", "double-hand block", "kokutsu-dachi", "chudan", ""],
  ["8", "shihon-tate-nukite / osae-uke", "4-finger vertical spear-hand / pressing block", "zenkutsu-dachi", "chudan / chudan", ""],
  ["9", "kentsui-uchi-mawashi-uchi (kentsui-yoko-mawashi-uchi)", "inside hammer-fist strike (sideways hammer-fist strike)", "kiba-dachi", "chudan", ""],
  ["10*", "oi-zuki", "lunge punch", "zenkutsu-dachi", "chudan", ""],
  ["11", "ryoken-ryokoshi-kamae", "both fists both hips posture", "heisoku-dachi", "--", "slow speed"],
  ["12", "fumikomi / furi-empi", "stomp kick (thrusting step) / swinging elbow", "kiba-dachi", "gedan / chudan", ""],
  ["13", "uraken-tate-mawashi-uchi", "vertical back-fist strike", "kiba-dachi", "jodan", ""],
  ["14", "fumikomi / furi-empi", "stomp kick (thrusting step) / swinging elbow", "kiba-dachi", "gedan / chudan", ""],
  ["15", "uraken-tate-mawashi-uchi", "vertical back-fist strike", "kiba-dachi", "jodan", ""],
  ["16", "fumikomi / furi-empi", "stomp kick (thrusting step) / swinging elbow", "kiba-dachi", "gedan / chudan", ""],
  ["17", "uraken-tate-mawashi-uchi", "vertical back-fist strike", "kiba-dachi", "jodan", ""],
  ["18", "tsukami-uke (koko-uke) & oi-zuki", "grasping block (tiger-mouth) & lunge punch", "zenkutsu-dachi", "chudan / chudan", "tate-shuto-uke variation"],
  ["19", "koho-tsukiage / ushiro-empi-uchi", "rising punch to rear / backwards elbow strike", "kiba-dachi", "jodan / chudan", ""],
  ["20*", "koho-tsukiage / ushiro-empi-uchi", "rising punch to rear / backwards elbow strike", "kiba-dachi", "jodan / chudan", "yori-ashi"],
];

const kataLinks = [
  ["Heian Shodan", "heian-shodan"], ["Heian Nidan", "heian-nidan"], ["Heian Sandan", "heian-sandan"], ["Heian Yondan", "heian-yondan"], ["Heian Godan", "heian-godan"],
  ["Tekki Shodan", "tekki-shodan"], ["Tekki Nidan", "tekki-nidan"], ["Tekki Sandan", "tekki-sandan"], ["Bassai Dai", "bassai-dai"], ["Kanku Dai", "kanku-dai"], ["Jion", "jion"], ["Empi", "empi"],
  ["Jitte", "jitte"], ["Gankaku", "gankaku"], ["Hangetsu", "hangetsu"], ["Kanku Sho", "kanku-sho"], ["Bassai Sho", "bassai-sho"], ["Chinte", "chinte"], ["Nijushiho", "nijushiho"], ["Sochin", "sochin"], ["Unsu", "unsu"], ["Gojushiho Sho", "gojushiho-sho"], ["Gojushiho Dai", "gojushiho-dai"], ["Meikyo", "meikyo"], ["Wankan", "wankan"], ["Jiin", "jiin"], ["Taikyoku Shodan", "taikyoku-shodan"], ["Taikyoku Nidan", "taikyoku-nidan"], ["Taikyoku Sandan", "taikyoku-sandan"], ["Ten No Kata", "ten-no-kata"],
];

export function HeianSandanPage() {
  return (
    <div className="min-h-screen bg-[#e9e2d3] text-[#111111]">
      <header className="sticky top-0 z-30 border-b border-[#bdb4a4] bg-[#e9e2d3]/95 px-5 py-4 backdrop-blur md:px-10">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-5">
          <a href="/karate/" className="inline-flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.2em] hover:text-[#9b3d18]"><ArrowLeft size={14} /> Dhanurveda</a>
          <a href="/karate/#kata" className="text-[0.65rem] font-bold uppercase tracking-[0.2em] hover:text-[#9b3d18]">Kata Library</a>
        </div>
      </header>
      <main className="mx-auto max-w-[1180px] px-5 pb-24 pt-10 md:px-10 md:pt-16">
        <div className="border-b border-[#bdb4a4] pb-8"><p className="mb-3 text-[0.65rem] font-bold uppercase tracking-[0.3em] text-[#9b3d18]">Kata 03 · Heian Series</p><h1 className="font-[var(--font-display)] text-5xl font-bold uppercase leading-[0.85] tracking-[-0.04em] md:text-8xl">Heian Sandan</h1></div>
        <section className="mx-auto max-w-[1080px] pt-8"><p className="font-serif text-[1rem] leading-[1.55] text-justify">The shortest kata in the <em>Heian</em> series, <em>Heian Sandan</em> has 20 counts, with almost half of the movements performed in <em>kiba-dachi</em> (horse stance). <em>Tai sabaki</em>, or "body shifting," is of utmost importance in H3. The student must learn how to rotate the entire body to gain momentum, as well as how to slide the feet, <em>yori-ashi</em>. <em>Empi</em> (elbow) techniques are also first learned in this kata. Timing skills become prominent as H3 is the first kata that contains a slow movement (#11).</p></section>
        <section className="mt-12 overflow-x-auto"><table className="w-full min-w-[820px] border-collapse border border-[#777064] bg-[#d9ceb8] font-serif text-[0.78rem]"><thead><tr className="bg-[#cfc2aa] text-center font-bold">{['#','Technique','Translation','Stance','Target','Notes'].map(h=><th key={h} className="border border-[#777064] px-3 py-2">{h}</th>)}</tr></thead><tbody>{movements.map(row=><tr key={row[0]} className="hover:bg-[#e4dac7]">{row.map((cell,i)=><td key={i} className={`border border-[#777064] px-3 py-2 align-middle ${i===0?'text-center':''}`}>{cell}</td>)}</tr>)}</tbody></table></section>
        <section className="mt-12 border-t border-[#bdb4a4] pt-8"><div className="grid grid-cols-2 gap-2 md:grid-cols-5 lg:grid-cols-10">{kataLinks.map(([label,slug])=><a key={slug} href={`/karate/kata/${slug}`} className={`text-[0.6rem] uppercase tracking-[0.08em] underline underline-offset-2 hover:text-[#9b3d18] ${slug==='heian-sandan'?'font-bold text-[#9b3d18]':''}`}>{label}</a>)}</div></section>
        <nav className="mt-10 flex items-center justify-between border-t border-[#bdb4a4] pt-7 text-[0.65rem] font-bold uppercase tracking-[0.18em]"><a href="/karate/kata/heian-nidan" className="inline-flex items-center gap-2 hover:text-[#9b3d18]"><ArrowLeft size={14}/> Heian Nidan</a><a href="/karate/kata/heian-yondan" className="inline-flex items-center gap-2 hover:text-[#9b3d18]">Heian Yondan <ArrowRight size={14}/></a></nav>
      </main>
    </div>
  );
}
