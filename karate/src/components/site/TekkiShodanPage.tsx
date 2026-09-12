import { ArrowLeft, ArrowRight } from "lucide-react";

const movements = [
  ["1", "kao-muki", "face turning", "--", "--", "kosa-ashi · natural speed"],
  ["2", "fumikomi / kake-uke", "stomp kick / hooking block", "kiba-dachi", "chudan", "haishu variation"],
  ["3", "sokumen-mae-empi-uchi", "front elbow strike to side", "kiba-dachi", "--", ""],
  ["4", "kao-muki / ryoken-koshi-kamae", "face turning / both fists hip posture", "kiba-dachi", "--", ""],
  ["5", "gedan-barai", "down block", "kiba-dachi", "gedan", ""],
  ["6", "kagi-zuki", "hook punch", "kiba-dachi", "chudan", ""],
  ["7", "jotai-sonomama", "upper body as is", "--", "--", "kosa-ashi · slow speed"],
  ["8", "fumikomi / uchi-uke", "stomp kick / inside block", "kiba-dachi", "gedan / chudan", ""],
  ["9", "haiwan-uchi-nagashi-uke / gedan-uke & tate-uraken-uchi / zenwan-suihei-mune-kamae", "back-arm inside flowing block / down block & vertical backfist strike / horizontal forearm posture", "kiba-dachi", "jodan / gedan / jodan / chudan", "ura-zuki variation"],
  ["10", "kao-muki", "face turning", "kiba-dachi", "--", ""],
  ["11", "ashi-namigaeshi & zenwan-sokumen-uke", "returning wave-leg & forearm block to side", "kiba-dachi", "gedan / chudan", ""],
  ["12", "kao-muki", "face turning", "kiba-dachi", "--", ""],
  ["13", "ashi-namigaeshi & zenwan-sokumen-uke", "returning wave-leg & forearm block to side", "kiba-dachi", "gedan / chudan", ""],
  ["14", "kao-muki / ryoken-koshi-kamae", "face turning / both fists hip posture", "kiba-dachi", "--", ""],
  ["15*", "sokumen-zuki / kagi-zuki (morote-zuki)", "punch to side / hook punch (double punch)", "kiba-dachi", "chudan / chudan", ""],
  ["16", "kake-uke", "hooking block", "kiba-dachi", "chudan", "slow speed · haishu variation"],
  ["17", "sokumen-mae-empi-uchi", "front elbow strike to side", "kiba-dachi", "--", ""],
  ["18", "kao-muki / ryoken-koshi-kamae", "face turning / both fists hip posture", "kiba-dachi", "--", ""],
  ["19", "gedan-barai", "down block", "kiba-dachi", "gedan", ""],
  ["20", "kagi-zuki", "hook punch", "kiba-dachi", "chudan", ""],
  ["21", "jotai-sonomama", "upper body as is", "--", "--", "kosa-ashi · slow speed"],
  ["22", "fumikomi / uchi-uke", "stomp kick / inside block", "kiba-dachi", "gedan / chudan", ""],
  ["23", "haiwan-uchi-nagashi-uke / gedan-uke & tate-uraken-uchi / zenwan-suihei-mune-kamae", "back-arm inside flowing block / down block & vertical backfist strike / horizontal forearm posture", "kiba-dachi", "jodan / gedan / jodan / chudan", "ura-zuki variation"],
  ["24", "kao-muki", "face turning", "kiba-dachi", "--", ""],
  ["25", "ashi-namigaeshi & zenwan-sokumen-uke", "returning wave-leg & forearm block to side", "kiba-dachi", "gedan / chudan", ""],
  ["26", "kao-muki", "face turning", "kiba-dachi", "--", ""],
  ["27", "ashi-namigaeshi & zenwan-sokumen-uke", "returning wave-leg & forearm block to side", "kiba-dachi", "gedan / chudan", ""],
  ["28", "kao-muki / ryoken-koshi-kamae", "face turning / both fists hip posture", "kiba-dachi", "--", ""],
  ["29*", "sokumen-zuki / kagi-zuki (morote-zuki)", "punch to side / hook punch (double punch)", "kiba-dachi", "chudan / chudan", ""],
];

const kataLinks = [
  ["Heian Shodan", "heian-shodan"], ["Heian Nidan", "heian-nidan"], ["Heian Sandan", "heian-sandan"], ["Heian Yondan", "heian-yondan"], ["Heian Godan", "heian-godan"],
  ["Tekki Shodan", "tekki-shodan"], ["Tekki Nidan", "tekki-nidan"], ["Tekki Sandan", "tekki-sandan"], ["Bassai Dai", "bassai-dai"], ["Kanku Dai", "kanku-dai"], ["Jion", "jion"], ["Empi", "empi"],
  ["Jitte", "jitte"], ["Gankaku", "gankaku"], ["Hangetsu", "hangetsu"], ["Kanku Sho", "kanku-sho"], ["Bassai Sho", "bassai-sho"], ["Chinte", "chinte"], ["Nijushiho", "nijushiho"], ["Sochin", "sochin"], ["Unsu", "unsu"], ["Gojushiho Sho", "gojushiho-sho"], ["Gojushiho Dai", "gojushiho-dai"], ["Meikyo", "meikyo"], ["Wankan", "wankan"], ["Jiin", "jiin"], ["Taikyoku Shodan", "taikyoku-shodan"], ["Taikyoku Nidan", "taikyoku-nidan"], ["Taikyoku Sandan", "taikyoku-sandan"], ["Ten No Kata", "ten-no-kata"],
];

export function TekkiShodanPage() {
  return (
    <div className="min-h-screen bg-[#e9e2d3] text-[#111111]">
      <header className="sticky top-0 z-30 border-b border-[#bdb4a4] bg-[#e9e2d3]/95 px-5 py-4 backdrop-blur md:px-10">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-5">
          <a href="/karate/" className="inline-flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.2em] hover:text-[#9b3d18]"><ArrowLeft size={14} /> Dhanurveda</a>
          <a href="/karate/#kata" className="text-[0.65rem] font-bold uppercase tracking-[0.2em] hover:text-[#9b3d18]">Kata Library</a>
        </div>
      </header>
      <main className="mx-auto max-w-[1180px] px-5 pb-24 pt-10 md:px-10 md:pt-16">
        <div className="border-b border-[#bdb4a4] pb-8"><p className="mb-3 text-[0.65rem] font-bold uppercase tracking-[0.3em] text-[#9b3d18]">Kata 06 · Tekki Series</p><h1 className="font-[var(--font-display)] text-5xl font-bold uppercase leading-[0.85] tracking-[-0.04em] md:text-8xl">Tekki Shodan</h1></div>
        <section className="mx-auto max-w-[1080px] pt-8"><p className="font-serif text-[1rem] leading-[1.55] text-justify"><em>Tekki Shodan</em> is the first kata in the <em>Tekki</em> series and is also the first kata that does not start in the traditional <em>yoi</em> position. Having 29 counts, it is performed almost entirely in a horse stance. The <em>embusen</em> is simply a straight line. Since there is no forward or backward movement, all footwork is accomplished in a sideways manner using the crossing step, or <em>kosa-ashi</em>. The crossing step, also known as "stealth step" (<em>sashi-ashi</em>), is characteristic of all <em>Tekki</em> kata. Another important trademark of the three <em>Tekki</em> kata is the <em>haiwan-nagashi-uke/tate-uraken</em> combo. New techniques learned in T1 include <em>kagi-zuki</em>, <em>morote-zuki</em>, and the unique <em>ashi-namigaeshi</em>, a very effective technique that only occurs in this kata. For proper kata performance, obviously a strong horse stance is essential, but the student must also understand the difference between hip rotation and hip vibration, similar but slightly distinct concepts. Often neglected but of great importance, head turns must be stressed in this kata. Head turns are regarded as a single count of the kata and must be performed sharply.</p></section>
        <section className="mt-12 overflow-x-auto"><table className="w-full min-w-[980px] border-collapse border border-[#777064] bg-[#d9ceb8] font-serif text-[0.72rem]"><thead><tr className="bg-[#cfc2aa] text-center font-bold">{['#','Technique','Translation','Stance','Target','Notes'].map(h=><th key={h} className="border border-[#777064] px-3 py-2">{h}</th>)}</tr></thead><tbody>{movements.map(row=><tr key={row[0]} className="hover:bg-[#e4dac7]">{row.map((cell,i)=><td key={i} className={`border border-[#777064] px-3 py-2 align-middle ${i===0?'text-center':''}`}>{cell}</td>)}</tr>)}</tbody></table></section>
        <section className="mt-12 border-t border-[#bdb4a4] pt-8"><div className="grid grid-cols-2 gap-2 md:grid-cols-5 lg:grid-cols-10">{kataLinks.map(([label,slug])=><a key={slug} href={`/karate/kata/${slug}`} className={`text-[0.6rem] uppercase tracking-[0.08em] underline underline-offset-2 hover:text-[#9b3d18] ${slug==='tekki-shodan'?'font-bold text-[#9b3d18]':''}`}>{label}</a>)}</div></section>
        <nav className="mt-10 flex items-center justify-between border-t border-[#bdb4a4] pt-7 text-[0.65rem] font-bold uppercase tracking-[0.18em]"><a href="/karate/kata/heian-godan" className="inline-flex items-center gap-2 hover:text-[#9b3d18]"><ArrowLeft size={14}/> Heian Godan</a><a href="/karate/kata/tekki-nidan" className="inline-flex items-center gap-2 hover:text-[#9b3d18]">Tekki Nidan <ArrowRight size={14}/></a></nav>
      </main>
    </div>
  );
}
