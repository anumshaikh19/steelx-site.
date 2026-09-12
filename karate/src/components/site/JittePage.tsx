import { ArrowLeft, ArrowRight } from "lucide-react";

const movements = [
  ["1", "tekubi-osae-uke", "(haishu-osae-uke)", "wrist pressing block (backhand pressing block)", "zenkutsu-dachi", "chudan", "slow speed"],
  ["2", "teisho-oshiage-uke / teisho-osae-uke", "palm-heel pushing-rising / palm-heel pressing block", "zenkutsu-dachi", "chudan", "chudan · slow speed"],
  ["3", "osae-uke", "", "pressing block", "zenkutsu-dachi", "chudan", ""],
  ["4", "(haishu)-tekubi-kake-uke", "(maki-otoshi-uke)", "wrist hooking block (rolling dropping block)", "kiba-dachi", "chudan", "yori-ashi"],
  ["5", "teisho-yoko-uke", "", "palm-heel sideways strike", "kiba-dachi", "chudan", ""],
  ["6", "teisho-yoko-uke", "", "palm-heel sideways strike", "kiba-dachi", "chudan", ""],
  ["7", "teisho-yoko-uke", "", "palm-heel sideways strike", "kiba-dachi", "chudan", ""],
  ["8", "ryoken-kosa-uke", "(ryoken-juji-uke)", "both fists cross block (both fists X-block)", "--", "jodan", "kosa-ashi"],
  ["9", "ryoken-ryogawa-gedan-barai", "(ryoken-kakiwake-uke)", "both fists both sides down block (both fists wedge block)", "kiba-dachi", "gedan", "yori-ashi"],
  ["10", "yama-gamae", "(kakiwake-uke)", "mountain posture (wedge block)", "kiba-dachi", "jodan", "yori-ashi"],
  ["11", "fumikomi / zenwan-uchi-harai", "", "foot stomp / forearm sweeping strike", "kiba-dachi", "jodan", ""],
  ["12", "fumikomi / zenwan-uchi-harai", "", "foot stomp / forearm sweeping strike", "kiba-dachi", "jodan", ""],
  ["13*", "fumikomi / zenwan-uchi-harai", "", "foot stomp / forearm sweeping strike", "kiba-dachi", "jodan", ""],
  ["14", "ryoken-kakiwake-uke", "", "both fists wedge block", "hachiji-dachi", "gedan", "slow speed"],
  ["15", "tsukami-uke", "(koko-uke)", "grasping block (tiger-mouth block)", "zenkutsu-dachi", "chudan", "jodan-shuto-uke variation"],
  ["16", "ryote--bo-tsukami-uke", "(tate-bo-uke)", "both hands stick grasping block (vertical stick block)", "zenkutsu-dachi", "--", ""],
  ["17", "bo-toriage & bo-oshimodoshi", "", "stick grab (rising) & stick repel", "ashi-dachi · zenkutsu-dachi", "--", "bo-dori · slow speed · yori-ashi"],
  ["18", "bo-toriage & bo-oshimodoshi", "", "stick grab (rising) & stick repel", "ashi-dachi · zenkutsu-dachi", "--", "bo-dori · slow speed · yori-ashi"],
  ["19", "uchi-uke / gedan-uke", "(manji-uke)", "inside block / down block (swirling block)", "kokutsu-dachi", "jodan / chudan", ""],
  ["20", "uchi-uke / gedan-uke", "(manji-uke)", "inside block / down block (swirling block)", "kokutsu-dachi", "jodan / chudan", ""],
  ["21", "age-uke", "", "rising block", "zenkutsu-dachi", "jodan", ""],
  ["22", "age-uke", "", "rising block", "zenkutsu-dachi", "jodan", ""],
  ["23", "age-uke", "", "rising block", "zenkutsu-dachi", "jodan", ""],
  ["24*", "age-uke", "", "rising block", "zenkutsu-dachi", "jodan", "yori-ashi"],
];

const kataLinks = ["heian-shodan","heian-nidan","heian-sandan","heian-yondan","heian-godan","tekki-shodan","tekki-nidan","tekki-sandan","bassai-dai","kanku-dai","jion","empi","jitte","gankaku","hangetsu","kanku-sho","bassai-sho","chinte","nijushiho","sochin","unsu","gojushiho-sho","gojushiho-dai","meikyo","wankan","jiin","taikyoku-shodan","taikyoku-nidan","taikyoku-sandan","ten-no-kata"];
const labels = ["Heian Shodan","Heian Nidan","Heian Sandan","Heian Yondan","Heian Godan","Tekki Shodan","Tekki Nidan","Tekki Sandan","Bassai Dai","Kanku Dai","Jion","Empi","Jitte","Gankaku","Hangetsu","Kanku Sho","Bassai Sho","Chinte","Nijushiho","Sochin","Unsu","Gojushiho Sho","Gojushiho Dai","Meikyo","Wankan","Jiin","Taikyoku Shodan","Taikyoku Nidan","Taikyoku Sandan","Ten No Kata"];

export function JittePage() {
  return <div className="min-h-screen bg-[#e9e2d3] text-[#111111]"><Header /><main className="mx-auto max-w-[1180px] px-5 pb-24 pt-10 md:px-10 md:pt-16"><Title /><section className="mx-auto max-w-[1080px] pt-8 space-y-6 font-serif text-[1rem] leading-[1.55] text-justify"><p><em>Jitte</em> (or <em>Jutte</em>) means "Ten Hands." Mastery of the kata is supposed to imply that the karateka is able to perform the actions of ten men, further inferring that one has the ability to fight off ten armed opponents. Even within the Shotokan style, this kata has many variations. The JKA version consists of 24 moves. <em>Jitte</em> is a very robust and "heavy" kata, having many powerful techniques. Even the slow movements are executed with a certain vigor and tension. Although <em>Jitte</em> does not have any really complex movements, some of the hip motions require a lot of practice to develop proper <em>kime</em>. It is essential that the karateka demonstrate true <em>budo</em> spirit in each attack and defense, and every movement should be completed with absolute confidence and destructive power.</p><p>Many of the applications for <em>Jitte</em> focus on defenses against stick (<em>bo</em>) attacks; <em>Jitte</em> offers some new and unique techniques to that end such as <em>bo-tsukami-uke</em>, followed by <em>bo-toriage</em>, followed by <em>bo-oshimodoshi</em>. The <em>zenwan-uchi-barai</em> is likewise only found in this kata. <em>Tekubi-osae-uke/tekubi-kake-uke</em> occur in several other advanced kata, but are usually learned first in <em>Jitte</em>. The "stick defense" applications of <em>Jitte</em> usually work equally well against an opponent's arm, providing many arm-breaking techniques.</p></section><KataTable /><KataLibrary /><nav className="mt-10 flex items-center justify-between border-t border-[#bdb4a4] pt-7 text-[0.65rem] font-bold uppercase tracking-[0.18em]"><a href="/karate/kata/empi" className="inline-flex items-center gap-2 hover:text-[#9b3d18]"><ArrowLeft size={14}/> Empi</a><a href="/karate/kata/gankaku" className="inline-flex items-center gap-2 hover:text-[#9b3d18]">Gankaku <ArrowRight size={14}/></a></nav></main></div>;
}
function Header(){return <header className="sticky top-0 z-30 border-b border-[#bdb4a4] bg-[#e9e2d3]/95 px-5 py-4 backdrop-blur md:px-10"><div className="mx-auto flex max-w-[1180px] items-center justify-between gap-5"><a href="/karate/" className="inline-flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.2em] hover:text-[#9b3d18]"><ArrowLeft size={14}/> Dhanurveda</a><a href="/karate/#kata" className="text-[0.65rem] font-bold uppercase tracking-[0.2em] hover:text-[#9b3d18]">Kata Library</a></div></header>}
function Title(){return <div className="border-b border-[#bdb4a4] pb-8"><p className="mb-3 text-[0.65rem] font-bold uppercase tracking-[0.3em] text-[#9b3d18]">Kata 13 · Advanced Series</p><h1 className="font-[var(--font-display)] text-5xl font-bold uppercase leading-[0.85] tracking-[-0.04em] md:text-8xl">Jitte</h1></div>}
function KataTable(){return <section className="mt-12 overflow-x-auto"><table className="w-full min-w-[980px] border-collapse border border-[#777064] bg-[#d9ceb8] font-serif text-[0.72rem]"><thead><tr className="bg-[#cfc2aa] text-center font-bold">{['#','Technique','Translation','Stance','Target','Notes'].map(h=><th key={h} className="border border-[#777064] px-3 py-2">{h}</th>)}</tr></thead><tbody>{movements.map(row=><tr key={row[0]} className="hover:bg-[#e4dac7]">{row.map((cell,i)=><td key={i} className={`border border-[#777064] px-3 py-2 align-middle ${i===0?'text-center':''}`}>{cell}</td>)}</tr>)}</tbody></table></section>}
function KataLibrary(){return <section className="mt-12 border-t border-[#bdb4a4] pt-8"><div className="grid grid-cols-2 gap-2 md:grid-cols-5 lg:grid-cols-10">{kataLinks.map((slug,i)=><a key={slug} href={`/karate/kata/${slug}`} className={`text-[0.6rem] uppercase tracking-[0.08em] underline underline-offset-2 hover:text-[#9b3d18] ${slug==='jitte'?'font-bold text-[#9b3d18]':''}`}>{labels[i]}</a>)}</div></section>}
