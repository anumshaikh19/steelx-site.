import { ArrowLeft, ArrowRight } from "lucide-react";

const movements = [
  ["1", "uchi-uke", "inside block", "kiba-dachi", "chudan", ""],
  ["2", "uchi-uke / gedan-uke", "inside block / down block", "kiba-dachi", "chudan / gedan", ""],
  ["3", "zenwan-uchiotoshi / zenwan-osae-uke", "forearm falling strike / forearm pressing block", "kiba-dachi", "chudan / chudan", ""],
  ["4", "haiwan-uchi-nagashi-uke", "back-arm inside flowing block", "kiba-dachi", "jodan", ""],
  ["5", "tate-uraken-uchi", "vertical back-fist strike", "kiba-dachi", "jodan", ""],
  ["6", "koshi-kamae", "(hands on) hip posture", "kiba-dachi", "--", ""],
  ["7", "tsuki (choku-zuki)", "punch (straight punch)", "kiba-dachi", "chudan", ""],
  ["8", "zenwan-hineri", "forearm twist", "kiba-dachi", "chudan", ""],
  ["9", "jotai-sonomama", "upper body as is", "--", "--", "kosa-ashi · slow speed"],
  ["10", "zenwan-sokumen-gedan-uke (oshi-uke)", "low forearm block to side (pushing block)", "kiba-dachi", "gedan", ""],
  ["11", "zenwan-gedan-furisute", "low forearm swing", "kiba-dachi", "gedan", "nakadaka variation"],
  ["12", "koshi-kamae", "(hands on) hip posture", "kiba-dachi", "--", ""],
  ["13", "tsuki (choku-zuki)", "punch (straight punch)", "kiba-dachi", "chudan", ""],
  ["14", "uchi-uke / gedan-uke", "inside block / down block", "kiba-dachi", "chudan / gedan", ""],
  ["15", "uchi-uke / gedan-uke", "inside block / down block", "kiba-dachi", "chudan / gedan", ""],
  ["16*", "haiwan-nagashi-uke & tate-uraken-uchi / zenwan-suihei-mune-kamae", "back-arm flowing block & vertical back-fist strike / horizontal forearm posture", "kiba-dachi", "jodan / jodan / chudan", "ura-zuki variation"],
  ["17", "kao-muki", "head turn", "kiba-dachi", "--", ""],
  ["18", "jotai-sonomama", "upper body as is", "--", "--", "kosa-ashi · slow speed"],
  ["19", "fumikomi", "foot stomp", "kiba-dachi", "gedan", ""],
  ["20", "zenwan-uchiotoshi (zenwan-barai)", "forearm falling strike (forearm sweep)", "kiba-dachi", "chudan", ""],
  ["21", "haiwan-uchi-nagashi-uke", "back-arm inside flowing block", "kiba-dachi", "jodan", ""],
  ["22", "tate-uraken-uchi", "vertical back-fist strike", "kiba-dachi", "jodan", ""],
  ["23", "koshi-kamae", "(hands on) hip posture", "kiba-dachi", "--", ""],
  ["24", "tsuki (choku-zuki)", "punch (straight punch)", "kiba-dachi", "chudan", ""],
  ["25", "zenwan-hineri", "forearm twist", "kiba-dachi", "chudan", ""],
  ["26", "jotai-sonomama", "upper body as is", "--", "--", "kosa-ashi · slow speed"],
  ["27", "zenwan-sokumen-gedan-uke (oshi-uke)", "low forearm block to side (pushing block)", "kiba-dachi", "gedan", ""],
  ["28", "zenwan-gedan-furisute", "low forearm swing", "kiba-dachi", "gedan", ""],
  ["29", "koshi-kamae", "(hands on) hip posture", "kiba-dachi", "--", ""],
  ["30", "tsuki (choku-zuki)", "punch (straight punch)", "kiba-dachi", "chudan", ""],
  ["31", "tsukami-uke (koko-uke)", "grasping block (tiger-mouth)", "kiba-dachi", "chudan", "slow speed"],
  ["32", "kagi-zuki", "hook punch", "kiba-dachi", "chudan", ""],
  ["33", "jotai-sonomama", "upper body as is", "--", "--", "kosa-ashi · slow speed"],
  ["34", "uchi-uke / fumikomi", "inside block / stomp kick", "kiba-dachi", "chudan / gedan", ""],
  ["35", "uchi-uke / gedan-uke", "inside block / down block", "kiba-dachi", "chudan / gedan", ""],
  ["36*", "haiwan-nagashi-uke & tate-uraken-uchi / zenwan-suihei-mune-kamae", "back-arm flowing block & vertical back-fist strike / horizontal forearm posture", "kiba-dachi", "jodan / jodan / chudan", "ura-zuki variation"],
];

const kataLinks = [
  ["Heian Shodan", "heian-shodan"], ["Heian Nidan", "heian-nidan"], ["Heian Sandan", "heian-sandan"], ["Heian Yondan", "heian-yondan"], ["Heian Godan", "heian-godan"],
  ["Tekki Shodan", "tekki-shodan"], ["Tekki Nidan", "tekki-nidan"], ["Tekki Sandan", "tekki-sandan"], ["Bassai Dai", "bassai-dai"], ["Kanku Dai", "kanku-dai"], ["Jion", "jion"], ["Empi", "empi"],
  ["Jitte", "jitte"], ["Gankaku", "gankaku"], ["Hangetsu", "hangetsu"], ["Kanku Sho", "kanku-sho"], ["Bassai Sho", "bassai-sho"], ["Chinte", "chinte"], ["Nijushiho", "nijushiho"], ["Sochin", "sochin"], ["Unsu", "unsu"], ["Gojushiho Sho", "gojushiho-sho"], ["Gojushiho Dai", "gojushiho-dai"], ["Meikyo", "meikyo"], ["Wankan", "wankan"], ["Jiin", "jiin"], ["Taikyoku Shodan", "taikyoku-shodan"], ["Taikyoku Nidan", "taikyoku-nidan"], ["Taikyoku Sandan", "taikyoku-sandan"], ["Ten No Kata", "ten-no-kata"],
];

export function TekkiSandanPage() {
  return (
    <div className="min-h-screen bg-[#e9e2d3] text-[#111111]">
      <header className="sticky top-0 z-30 border-b border-[#bdb4a4] bg-[#e9e2d3]/95 px-5 py-4 backdrop-blur md:px-10">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-5">
          <a href="/karate/" className="inline-flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.2em] hover:text-[#9b3d18]"><ArrowLeft size={14} /> Dhanurveda</a>
          <a href="/karate/#kata" className="text-[0.65rem] font-bold uppercase tracking-[0.2em] hover:text-[#9b3d18]">Kata Library</a>
        </div>
      </header>
      <main className="mx-auto max-w-[1180px] px-5 pb-24 pt-10 md:px-10 md:pt-16">
        <div className="border-b border-[#bdb4a4] pb-8"><p className="mb-3 text-[0.65rem] font-bold uppercase tracking-[0.3em] text-[#9b3d18]">Kata 08 · Tekki Series</p><h1 className="font-[var(--font-display)] text-5xl font-bold uppercase leading-[0.85] tracking-[-0.04em] md:text-8xl">Tekki Sandan</h1></div>
        <section className="mx-auto max-w-[1080px] pt-8"><p className="font-serif text-[1rem] leading-[1.55] text-justify">The last <em>Tekki</em> kata, <em>Tekki Sandan</em>, has 36 movements. It is a very quick kata, having a rapid timing with many consecutive techniques performed without pause. T3 offers some new techniques such as <em>zenwan-uchiotoshi</em>, <em>zenwan-hineri</em>, and <em>zenwan-gedan-furisute</em>. Many of the techniques in T3 are executed with the "added hand" (<em>soete</em>) for additional support. T3 teaches the student that the added hand may also be used for grabbing or trapping an opponent's techniques. Much of the <em>bunkai</em> of this kata revolve around this idea of "trapping," meaning to immobilize the adversary's attacking limbs so that they cannot make further attacks.</p></section>
        <section className="mt-12 overflow-x-auto"><table className="w-full min-w-[980px] border-collapse border border-[#777064] bg-[#d9ceb8] font-serif text-[0.72rem]"><thead><tr className="bg-[#cfc2aa] text-center font-bold">{['#','Technique','Translation','Stance','Target','Notes'].map(h=><th key={h} className="border border-[#777064] px-3 py-2">{h}</th>)}</tr></thead><tbody>{movements.map(row=><tr key={row[0]} className="hover:bg-[#e4dac7]">{row.map((cell,i)=><td key={i} className={`border border-[#777064] px-3 py-2 align-middle ${i===0?'text-center':''}`}>{cell}</td>)}</tr>)}</tbody></table></section>
        <section className="mt-12 border-t border-[#bdb4a4] pt-8"><div className="grid grid-cols-2 gap-2 md:grid-cols-5 lg:grid-cols-10">{kataLinks.map(([label,slug])=><a key={slug} href={`/karate/kata/${slug}`} className={`text-[0.6rem] uppercase tracking-[0.08em] underline underline-offset-2 hover:text-[#9b3d18] ${slug==='tekki-sandan'?'font-bold text-[#9b3d18]':''}`}>{label}</a>)}</div></section>
        <nav className="mt-10 flex items-center justify-between border-t border-[#bdb4a4] pt-7 text-[0.65rem] font-bold uppercase tracking-[0.18em]"><a href="/karate/kata/tekki-nidan" className="inline-flex items-center gap-2 hover:text-[#9b3d18]"><ArrowLeft size={14}/> Tekki Nidan</a><a href="/karate/kata/bassai-dai" className="inline-flex items-center gap-2 hover:text-[#9b3d18]">Bassai Dai <ArrowRight size={14}/></a></nav>
      </main>
    </div>
  );
}
