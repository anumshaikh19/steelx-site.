import { ArrowLeft, ArrowRight } from "lucide-react";

const movements = [
  ["1", "haiwan-uke / zenwan-hitae-kamae", "back of forearm block / forearm forehead posture", "kokutsu-dachi", "jodan jodan", "slow speed"],
  ["2", "haiwan-uke / zenwan-hitae-kamae", "back of forearm block / forearm forehead posture", "kokutsu-dachi", "jodan jodan", "slow speed"],
  ["3", "ryoken-kosa-uke (ryoken-juji-uke)", "both fists cross block (X-block)", "zenkutsu-dachi", "gedan", ""],
  ["4", "morote-uke", "double-hand block", "kokutsu-dachi", "chudan", ""],
  ["5", "ryoken-koshi-kamae", "both fists hip posture", "ashi-dachi", "--", ""],
  ["6", "uraken-yoko-mawashi-uchi / yoko-geri-keage", "sideways back-fist strike / side snap kick", "ashi-dachi", "jodan chudan", ""],
  ["7", "mae-empi-uchi", "front elbow strike", "zenkutsu-dachi", "--", ""],
  ["8", "ryoken-koshi-kamae", "both fists hip posture", "ashi-dachi", "--", "tsugi-ashi"],
  ["9", "uraken-yoko-mawashi-uchi / yoko-geri-keage", "sideways back-fist strike / side snap kick", "ashi-dachi", "jodan chudan", ""],
  ["10", "mae-empi-uchi", "front elbow strike", "zenkutsu-dachi", "--", ""],
  ["11", "shuto-gedan-barai & jodan-uke / shuto-soto-mawashi-uchi", "low knife-hand sweep & face block / outside sword-hand strike", "hizakutsu", "gedan jodan jodan", ""],
  ["12", "mae-geri", "front kick", "ashi-dachi", "jodan", ""],
  ["13*", "uraken-tate-mawashi-uchi", "vertical back-fist strike", "kosa-dachi", "jodan", ""],
  ["14", "ryoken-kakiwake-uke", "both fists wedge block", "kokutsu-dachi", "chudan", "slow speed"],
  ["15", "mae-geri", "front kick", "ashi-dachi", "jodan", ""],
  ["16", "oi-zuki", "lunge punch", "zenkutsu-dachi", "chudan", ""],
  ["17", "gyaku-zuki", "reverse punch", "zenkutsu-dachi", "chudan", ""],
  ["18", "ryoken-kakiwake-uke", "both fists wedge block", "kokutsu-dachi", "chudan", "slow speed"],
  ["19", "mae-geri", "front kick", "ashi-dachi", "jodan", ""],
  ["20", "oi-zuki", "lunge punch", "zenkutsu-dachi", "chudan", ""],
  ["21", "gyaku-zuki", "reverse punch", "zenkutsu-dachi", "chudan", ""],
  ["22", "morote-uke", "double-hand block", "kokutsu-dachi", "chudan", ""],
  ["23", "morote-uke", "double-hand block", "kokutsu-dachi", "chudan", ""],
  ["24", "morote-uke", "double-hand block", "kokutsu-dachi", "chudan", ""],
  ["25*", "hiza-tsuchi", "knee strike", "ashi-dachi", "--", ""],
  ["26", "shuto-uke", "knife-hand block", "kokutsu-dachi", "chudan", ""],
  ["27", "shuto-uke", "knife-hand block", "kokutsu-dachi", "chudan", ""],
];

const kataLinks = [
  ["Heian Shodan", "heian-shodan"], ["Heian Nidan", "heian-nidan"], ["Heian Sandan", "heian-sandan"], ["Heian Yondan", "heian-yondan"], ["Heian Godan", "heian-godan"],
  ["Tekki Shodan", "tekki-shodan"], ["Tekki Nidan", "tekki-nidan"], ["Tekki Sandan", "tekki-sandan"], ["Bassai Dai", "bassai-dai"], ["Kanku Dai", "kanku-dai"], ["Jion", "jion"], ["Empi", "empi"],
  ["Jitte", "jitte"], ["Gankaku", "gankaku"], ["Hangetsu", "hangetsu"], ["Kanku Sho", "kanku-sho"], ["Bassai Sho", "bassai-sho"], ["Chinte", "chinte"], ["Nijushiho", "nijushiho"], ["Sochin", "sochin"], ["Unsu", "unsu"], ["Gojushiho Sho", "gojushiho-sho"], ["Gojushiho Dai", "gojushiho-dai"], ["Meikyo", "meikyo"], ["Wankan", "wankan"], ["Jiin", "jiin"], ["Taikyoku Shodan", "taikyoku-shodan"], ["Taikyoku Nidan", "taikyoku-nidan"], ["Taikyoku Sandan", "taikyoku-sandan"], ["Ten No Kata", "ten-no-kata"],
];

export function HeianYondanPage() {
  return (
    <div className="min-h-screen bg-[#e9e2d3] text-[#111111]">
      <header className="sticky top-0 z-30 border-b border-[#bdb4a4] bg-[#e9e2d3]/95 px-5 py-4 backdrop-blur md:px-10">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-5">
          <a href="/karate/" className="inline-flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.2em] hover:text-[#9b3d18]"><ArrowLeft size={14} /> Dhanurveda</a>
          <a href="/karate/#kata" className="text-[0.65rem] font-bold uppercase tracking-[0.2em] hover:text-[#9b3d18]">Kata Library</a>
        </div>
      </header>
      <main className="mx-auto max-w-[1180px] px-5 pb-24 pt-10 md:px-10 md:pt-16">
        <div className="border-b border-[#bdb4a4] pb-8"><p className="mb-3 text-[0.65rem] font-bold uppercase tracking-[0.3em] text-[#9b3d18]">Kata 04 · Heian Series</p><h1 className="font-[var(--font-display)] text-5xl font-bold uppercase leading-[0.85] tracking-[-0.04em] md:text-8xl">Heian Yondan</h1></div>
        <section className="mx-auto max-w-[1080px] pt-8"><p className="font-serif text-[1rem] leading-[1.55] text-justify">The fourth level <em>Heian</em> has 27 counts and has many similarities to H2. The kata's primary stance is <em>kokutsu-dachi</em> (back stance), but students first learning this kata must also contend with the new <em>kosa-dachi</em>, a cross stance that is quite awkward for most karateka. H4 introduces the student to many new techniques such as <em>kosa-uke</em>, <em>shuto-uchi</em>, <em>kakiwake-uke</em>, <em>mae-empi</em>, and <em>hiza-tsuchi</em>. To perform H4 properly, a certain amount of flexibility is required as all of the <em>mae-geri</em> (front kicks) are <em>jodan</em> (upper level). <em>Heian Yondan</em> also has more kicks (5) than the other Heian kata. Slow moves must also be mastered in this kata; there are four of them. Much of H4 involves double-hand techniques, with <em>morote-uke</em> (double-hand block {x4}) occurring more than any other technique. Obviously, <em>morote-uke</em> was held in high regard during this kata's creation.</p></section>
        <section className="mt-12 overflow-x-auto"><table className="w-full min-w-[820px] border-collapse border border-[#777064] bg-[#d9ceb8] font-serif text-[0.78rem]"><thead><tr className="bg-[#cfc2aa] text-center font-bold">{['#','Technique','Translation','Stance','Target','Notes'].map(h=><th key={h} className="border border-[#777064] px-3 py-2">{h}</th>)}</tr></thead><tbody>{movements.map(row=><tr key={row[0]} className="hover:bg-[#e4dac7]">{row.map((cell,i)=><td key={i} className={`border border-[#777064] px-3 py-2 align-middle ${i===0?'text-center':''}`}>{cell}</td>)}</tr>)}</tbody></table></section>
        <section className="mt-12 border-t border-[#bdb4a4] pt-8"><div className="grid grid-cols-2 gap-2 md:grid-cols-5 lg:grid-cols-10">{kataLinks.map(([label,slug])=><a key={slug} href={`/karate/kata/${slug}`} className={`text-[0.6rem] uppercase tracking-[0.08em] underline underline-offset-2 hover:text-[#9b3d18] ${slug==='heian-yondan'?'font-bold text-[#9b3d18]':''}`}>{label}</a>)}</div></section>
        <nav className="mt-10 flex items-center justify-between border-t border-[#bdb4a4] pt-7 text-[0.65rem] font-bold uppercase tracking-[0.18em]"><a href="/karate/kata/heian-sandan" className="inline-flex items-center gap-2 hover:text-[#9b3d18]"><ArrowLeft size={14}/> Heian Sandan</a><a href="/karate/kata/heian-godan" className="inline-flex items-center gap-2 hover:text-[#9b3d18]">Heian Godan <ArrowRight size={14}/></a></nav>
      </main>
    </div>
  );
}
