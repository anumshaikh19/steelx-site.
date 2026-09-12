import { ArrowLeft, ArrowRight } from "lucide-react";

const movements = [
  ["1", "ryo-zenwan-suihei-kamae", "horizontal forearms posture", "--", "--", "kosa-ashi · slow speed"],
  ["2", "zenwan-sokumen-uke / zenwan-suihei-mune-kamae", "forearm block to side / horizontal forearm posture", "kiba-dachi", "chudan / chudan", "fumikomi"],
  ["3", "zenwan-shomen-gedan-kensei", "forearm frontal low feint", "--", "gedan", "kosa-ashi"],
  ["4", "zenwan-sokumen-gedan-uke (oshi-uke)", "low forearm block to side (pushing block)", "kiba-dachi", "gedan", ""],
  ["5", "ryo-zenwan-suihei-kamae", "horizontal forearms posture", "heisoku-dachi", "--", "slow speed"],
  ["6", "zenwan-sokumen-uke / zenwan-suihei-mune-kamae", "forearm block to side / horizontal forearm posture", "kiba-dachi", "chudan / chudan", ""],
  ["7", "zenwan-shomen-gedan-kensei", "forearm frontal low feint", "--", "gedan", "kosa-ashi"],
  ["8", "zenwan-sokumen-gedan-uke (oshi-uke)", "low forearm block to side (pushing block)", "kiba-dachi", "gedan", ""],
  ["9", "kao muki / koshi-kamae", "face turning / hip posture", "kiba-dachi", "--", ""],
  ["10", "soete-uchi-uke", "added-hand inside block", "kiba-dachi", "chudan", ""],
  ["11", "koshi-kamae & fumikomi / mae-empi-uchi", "hip posture & foot stomp / front elbow strike", "ashi-dachi / kiba-dachi", "-- / chudan", ""],
  ["12", "tsukami-uke (koko-uke)", "grasping block (tiger-mouth)", "kiba-dachi", "chudan", "slow speed"],
  ["13", "kagi-zuki", "hook punch", "kiba-dachi", "chudan", ""],
  ["14", "jotai-sonomama", "upper body as is", "--", "--", "kosa-ashi · slow speed"],
  ["15", "fumikomi / uchi-uke", "stomp kick / inside block", "kiba-dachi", "gedan / chudan", ""],
  ["16*", "haiwan-uchi-nagashi-uke / gedan-uke & tate-uraken-uchi / zenwan-suihei-mune-kamae", "back-arm inside flowing block / down block & vertical backfist strike / horizontal forearm posture", "kiba-dachi", "jodan / gedan / jodan / chudan", "ura-zuki variation"],
  ["17", "kao muki / koshi-kamae", "face turning / hip posture", "kiba-dachi", "--", ""],
  ["18", "soete-uchi-uke", "added-hand inside block", "kiba-dachi", "chudan", ""],
  ["19", "koshi-kamae & fumikomi / mae-empi-uchi", "hip posture & foot stomp / front elbow strike", "ashi-dachi / kiba-dachi", "-- / chudan", ""],
  ["20", "tsukami-uke (koko-uke)", "grasping block (tiger-mouth)", "kiba-dachi", "chudan", "slow speed"],
  ["21", "kagi zuki", "hook punch", "kiba-dachi", "chudan", ""],
  ["22", "jotai-sonomama", "upper body as is", "--", "--", "kosa-ashi · slow speed"],
  ["23", "fumikomi / uchi-uke", "stomp kick / inside block", "kiba-dachi", "gedan / chudan", ""],
  ["24*", "haiwan-uchi-nagashi-uke / gedan-uke & tate-uraken-uchi / zenwan-suihei-mune-kamae", "back-arm inside flowing block / down block & vertical backfist strike / horizontal forearm posture", "kiba-dachi", "jodan / gedan / jodan / chudan", "ura-zuki variation"],
];

const kataLinks = [
  ["Heian Shodan", "heian-shodan"], ["Heian Nidan", "heian-nidan"], ["Heian Sandan", "heian-sandan"], ["Heian Yondan", "heian-yondan"], ["Heian Godan", "heian-godan"],
  ["Tekki Shodan", "tekki-shodan"], ["Tekki Nidan", "tekki-nidan"], ["Tekki Sandan", "tekki-sandan"], ["Bassai Dai", "bassai-dai"], ["Kanku Dai", "kanku-dai"], ["Jion", "jion"], ["Empi", "empi"],
  ["Jitte", "jitte"], ["Gankaku", "gankaku"], ["Hangetsu", "hangetsu"], ["Kanku Sho", "kanku-sho"], ["Bassai Sho", "bassai-sho"], ["Chinte", "chinte"], ["Nijushiho", "nijushiho"], ["Sochin", "sochin"], ["Unsu", "unsu"], ["Gojushiho Sho", "gojushiho-sho"], ["Gojushiho Dai", "gojushiho-dai"], ["Meikyo", "meikyo"], ["Wankan", "wankan"], ["Jiin", "jiin"], ["Taikyoku Shodan", "taikyoku-shodan"], ["Taikyoku Nidan", "taikyoku-nidan"], ["Taikyoku Sandan", "taikyoku-sandan"], ["Ten No Kata", "ten-no-kata"],
];

export function TekkiNidanPage() {
  return (
    <div className="min-h-screen bg-[#e9e2d3] text-[#111111]">
      <header className="sticky top-0 z-30 border-b border-[#bdb4a4] bg-[#e9e2d3]/95 px-5 py-4 backdrop-blur md:px-10">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-5">
          <a href="/karate/" className="inline-flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.2em] hover:text-[#9b3d18]"><ArrowLeft size={14} /> Dhanurveda</a>
          <a href="/karate/#kata" className="text-[0.65rem] font-bold uppercase tracking-[0.2em] hover:text-[#9b3d18]">Kata Library</a>
        </div>
      </header>
      <main className="mx-auto max-w-[1180px] px-5 pb-24 pt-10 md:px-10 md:pt-16">
        <div className="border-b border-[#bdb4a4] pb-8"><p className="mb-3 text-[0.65rem] font-bold uppercase tracking-[0.3em] text-[#9b3d18]">Kata 07 · Tekki Series</p><h1 className="font-[var(--font-display)] text-5xl font-bold uppercase leading-[0.85] tracking-[-0.04em] md:text-8xl">Tekki Nidan</h1></div>
        <section className="mx-auto max-w-[1080px] pt-8"><p className="font-serif text-[1rem] leading-[1.55] text-justify"><em>Tekki Nidan</em> is the shortest <em>Tekki</em> kata, consisting of 24 movements. Similar to <em>Tekki Shodan</em> in many ways, this kata is also performed almost entirely in horse stance, with the exception of a few crossing steps and one <em>heisoku-dachi</em>. The objective in this kata is to develop grabbing, throwing, and locking applications while maintaining a strong <em>kiba-dachi</em>. To accomplish this, the student is introduced to many new techniques such as <em>ryo-zenwan-suihei-kamae</em>, <em>zenwan-shomen-gedan-kensei</em>, and <em>oshi-uke</em>. The use of <em>tsukami-uke</em> in this kata teaches how to draw an opponent in for counter-attack.</p></section>
        <section className="mt-12 overflow-x-auto"><table className="w-full min-w-[980px] border-collapse border border-[#777064] bg-[#d9ceb8] font-serif text-[0.72rem]"><thead><tr className="bg-[#cfc2aa] text-center font-bold">{['#','Technique','Translation','Stance','Target','Notes'].map(h=><th key={h} className="border border-[#777064] px-3 py-2">{h}</th>)}</tr></thead><tbody>{movements.map(row=><tr key={row[0]} className="hover:bg-[#e4dac7]">{row.map((cell,i)=><td key={i} className={`border border-[#777064] px-3 py-2 align-middle ${i===0?'text-center':''}`}>{cell}</td>)}</tr>)}</tbody></table></section>
        <section className="mt-12 border-t border-[#bdb4a4] pt-8"><div className="grid grid-cols-2 gap-2 md:grid-cols-5 lg:grid-cols-10">{kataLinks.map(([label,slug])=><a key={slug} href={`/karate/kata/${slug}`} className={`text-[0.6rem] uppercase tracking-[0.08em] underline underline-offset-2 hover:text-[#9b3d18] ${slug==='tekki-nidan'?'font-bold text-[#9b3d18]':''}`}>{label}</a>)}</div></section>
        <nav className="mt-10 flex items-center justify-between border-t border-[#bdb4a4] pt-7 text-[0.65rem] font-bold uppercase tracking-[0.18em]"><a href="/karate/kata/tekki-shodan" className="inline-flex items-center gap-2 hover:text-[#9b3d18]"><ArrowLeft size={14}/> Tekki Shodan</a><a href="/karate/kata/tekki-sandan" className="inline-flex items-center gap-2 hover:text-[#9b3d18]">Tekki Sandan <ArrowRight size={14}/></a></nav>
      </main>
    </div>
  );
}
