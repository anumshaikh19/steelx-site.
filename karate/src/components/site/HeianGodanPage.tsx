import { ArrowLeft, ArrowRight } from "lucide-react";

const movements = [
  ["1", "uchi-uke", "inside block", "kokutsu-dachi", "chudan", ""],
  ["2", "gyaku-zuki", "reverse punch", "kokutsu-dachi", "chudan", ""],
  ["3", "mizu-nagare-no-kamae", "water flowing posture", "heisoku-dachi", "--", "slow speed"],
  ["4", "uchi-uke", "inside block", "kokutsu-dachi", "chudan", ""],
  ["5", "gyaku-zuki", "reverse punch", "kokutsu-dachi", "chudan", ""],
  ["6", "mizu-nagare-no-kamae", "water flowing posture", "heisoku-dachi", "--", "slow speed"],
  ["7", "morote-uke", "double-hand block", "kokutsu-dachi", "chudan", ""],
  ["8", "ryoken-kosa-uke (ryoken-juji-uke)", "both fists cross block (X-block)", "zenkutsu-dachi", "gedan", ""],
  ["9", "kaisho-kosa-uke (ryosho-juji-uke)", "both palms cross block (X-block)", "zenkutsu-dachi", "jodan", ""],
  ["10", "ryosho-juji-osae-uke", "both palms pressing X-block", "zenkutsu-dachi", "chudan", ""],
  ["11", "tsuki (uke-zuki)", "punch (block-punch)", "zenkutsu-dachi", "chudan", ""],
  ["12*", "oi-zuki", "lunge punch", "zenkutsu-dachi", "chudan", ""],
  ["13", "gedan-barai", "down block", "kiba-dachi", "gedan", "fumikomi variation"],
  ["14", "kake-uke", "hooking block", "kiba-dachi", "chudan", "slow speed"],
  ["15", "mikazuki-geri", "crescent kick", "ashi-dachi", "chudan", ""],
  ["16", "mae empi-uchi", "front elbow strike", "kiba-dachi", "chudan", ""],
  ["17", "morote-uke", "double-hand block", "kosa-dachi", "chudan", ""],
  ["18", "uho-tsukiage", "rising punch to right rear", "renoji-dachi", "jodan", ""],
  ["19*", "ryoken-kosa-uke (ryoken-juji-uke)", "both fists cross block (X-block)", "kosa-dachi", "gedan", "tobikomi (tobi)"],
  ["20", "morote-uke", "double-hand block", "zenkutsu-dachi", "chudan", ""],
  ["21", "soto-nagashi-uke / shuto-uchikomi & uchi-uke / gedan-uke (manji-uke)", "flowing block / sword-hand cutting strike & inside block / down block (swirling block)", "ashi-zenkutsu / kokutsu-dachi", "jodan / gedan / jodan / gedan", ""],
  ["22", "jotai-sonomama (manji-kamae)", "upper body as is (swirling posture)", "heisoku-dachi", "--", "slow speed"],
  ["23", "soto-nagashi-uke / shuto-uchikomi & uchi-uke / gedan-uke (manji-uke)", "flowing block / sword-hand cutting strike & inside block / down block (swirling block)", "ashi-zenkutsu / kokutsu-dachi", "jodan / gedan / jodan / gedan", ""],
];

const kataLinks = [
  ["Heian Shodan", "heian-shodan"], ["Heian Nidan", "heian-nidan"], ["Heian Sandan", "heian-sandan"], ["Heian Yondan", "heian-yondan"], ["Heian Godan", "heian-godan"],
  ["Tekki Shodan", "tekki-shodan"], ["Tekki Nidan", "tekki-nidan"], ["Tekki Sandan", "tekki-sandan"], ["Bassai Dai", "bassai-dai"], ["Kanku Dai", "kanku-dai"], ["Jion", "jion"], ["Empi", "empi"],
  ["Jitte", "jitte"], ["Gankaku", "gankaku"], ["Hangetsu", "hangetsu"], ["Kanku Sho", "kanku-sho"], ["Bassai Sho", "bassai-sho"], ["Chinte", "chinte"], ["Nijushiho", "nijushiho"], ["Sochin", "sochin"], ["Unsu", "unsu"], ["Gojushiho Sho", "gojushiho-sho"], ["Gojushiho Dai", "gojushiho-dai"], ["Meikyo", "meikyo"], ["Wankan", "wankan"], ["Jiin", "jiin"], ["Taikyoku Shodan", "taikyoku-shodan"], ["Taikyoku Nidan", "taikyoku-nidan"], ["Taikyoku Sandan", "taikyoku-sandan"], ["Ten No Kata", "ten-no-kata"],
];

export function HeianGodanPage() {
  return (
    <div className="min-h-screen bg-[#e9e2d3] text-[#111111]">
      <header className="sticky top-0 z-30 border-b border-[#bdb4a4] bg-[#e9e2d3]/95 px-5 py-4 backdrop-blur md:px-10">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-5">
          <a href="/karate/" className="inline-flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.2em] hover:text-[#9b3d18]"><ArrowLeft size={14} /> Dhanurveda</a>
          <a href="/karate/#kata" className="text-[0.65rem] font-bold uppercase tracking-[0.2em] hover:text-[#9b3d18]">Kata Library</a>
        </div>
      </header>
      <main className="mx-auto max-w-[1180px] px-5 pb-24 pt-10 md:px-10 md:pt-16">
        <div className="border-b border-[#bdb4a4] pb-8"><p className="mb-3 text-[0.65rem] font-bold uppercase tracking-[0.3em] text-[#9b3d18]">Kata 05 · Heian Series</p><h1 className="font-[var(--font-display)] text-5xl font-bold uppercase leading-[0.85] tracking-[-0.04em] md:text-8xl">Heian Godan</h1></div>
        <section className="mx-auto max-w-[1080px] pt-8"><p className="font-serif text-[1rem] leading-[1.55] text-justify"><em>Heian Godan</em> is the last kata in the <em>Heian</em> series and has 23 counts. A combination of quick and slow movements, timing skill and fluidity of motion are essential for this kata. It is the first Shotokan kata containing a jump (<em>tobi-komi</em>), a very exciting technique for beginner and intermediate karateka. <em>Mikazuki-geri</em> is also first seen in H5. The <em>mizu-nagare-kamae</em> at the beginning of the kata and the <em>shuto-uchikomi/manji-uke</em> combo at the end are extremely vital for proper kata performance. <em>Bunkai</em> for H5 involve many throws, locks, and takedowns.</p></section>
        <section className="mt-12 overflow-x-auto"><table className="w-full min-w-[820px] border-collapse border border-[#777064] bg-[#d9ceb8] font-serif text-[0.78rem]"><thead><tr className="bg-[#cfc2aa] text-center font-bold">{['#','Technique','Translation','Stance','Target','Notes'].map(h=><th key={h} className="border border-[#777064] px-3 py-2">{h}</th>)}</tr></thead><tbody>{movements.map(row=><tr key={row[0]} className="hover:bg-[#e4dac7]">{row.map((cell,i)=><td key={i} className={`border border-[#777064] px-3 py-2 align-middle ${i===0?'text-center':''}`}>{cell}</td>)}</tr>)}</tbody></table></section>
        <section className="mt-12 border-t border-[#bdb4a4] pt-8"><div className="grid grid-cols-2 gap-2 md:grid-cols-5 lg:grid-cols-10">{kataLinks.map(([label,slug])=><a key={slug} href={`/karate/kata/${slug}`} className={`text-[0.6rem] uppercase tracking-[0.08em] underline underline-offset-2 hover:text-[#9b3d18] ${slug==='heian-godan'?'font-bold text-[#9b3d18]':''}`}>{label}</a>)}</div></section>
        <nav className="mt-10 flex items-center justify-between border-t border-[#bdb4a4] pt-7 text-[0.65rem] font-bold uppercase tracking-[0.18em]"><a href="/karate/kata/heian-yondan" className="inline-flex items-center gap-2 hover:text-[#9b3d18]"><ArrowLeft size={14}/> Heian Yondan</a><a href="/karate/kata/tekki-shodan" className="inline-flex items-center gap-2 hover:text-[#9b3d18]">Tekki Shodan <ArrowRight size={14}/></a></nav>
      </main>
    </div>
  );
}
