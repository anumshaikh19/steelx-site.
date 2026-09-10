import { ArrowLeft, ArrowRight } from "lucide-react";

const movements = [
  ["1", "haiwan-uke / zenwan-hitae-kamae", "back of forearm block / forearm forehead posture", "kokutsu-dachi", "jodan / jodan", ""],
  ["2", "soto-nagashi-uke / kentsui-soto-mawashi-uchi", "outside flowing block / outside hammer-fist strike", "kokutsu-dachi", "jodan", "target opponent's elbow"],
  ["3", "sokumen-zuki (uke-zuki)", "punch to side (block-punch)", "kokutsu-dachi", "chudan", ""],
  ["4", "haiwan-uke / zenwan-hitae-kamae", "back of forearm block / forearm forehead posture", "kokutsu-dachi", "jodan / jodan", ""],
  ["5", "soto-nagashi-uke / kentsui-soto-mawashi-uchi", "outside flowing block / outside hammer-fist strike", "kokutsu-dachi", "jodan", "target opponent's elbow"],
  ["6", "sokumen-zuki (uke-zuki)", "punch to side (block-punch)", "kokutsu-dachi", "chudan", ""],
  ["7", "ryoken-koshi-kamae & uraken-yoko-mawashi-uchi / yoko-geri-keage", "both fists hip posture & sideways back-fist strike / side snap kick", "ashi-dachi", "-- / jodan / chudan", ""],
  ["8", "shuto-uke", "knife-hand block", "kokutsu-dachi", "chudan", ""],
  ["9", "shuto-uke", "knife-hand block", "kokutsu-dachi", "chudan", ""],
  ["10", "shuto-uke", "knife-hand block", "kokutsu-dachi", "chudan", ""],
  ["11*", "shihon-tate-nukite / osae-uke", "4-finger vertical spear-hand / pressing block", "zenkutsu-dachi", "chudan / chudan", ""],
  ["12", "shuto-uke", "knife-hand block", "kokutsu-dachi", "chudan", ""],
  ["13", "shuto-uke", "knife-hand block", "kokutsu-dachi", "chudan", ""],
  ["14", "shuto-uke", "knife-hand block", "kokutsu-dachi", "chudan", ""],
  ["15", "shuto-uke", "knife-hand block", "kokutsu-dachi", "chudan", ""],
  ["16", "uchi-uke", "inside block", "ashi-zenkutsu", "chudan", "gyaku-hanmi"],
  ["17", "mae-geri", "front kick", "ashi-dachi", "chudan", ""],
  ["18", "gyaku-zuki", "reverse punch", "zenkutsu-dachi", "chudan", ""],
  ["19", "uchi-uke", "inside block", "ashi-zenkutsu", "chudan", "gyaku-hanmi"],
  ["20", "mae-geri", "front kick", "ashi-dachi", "chudan", ""],
  ["21", "gyaku-zuki", "reverse punch", "zenkutsu-dachi", "chudan", ""],
  ["22", "morote-uke", "double-hand block", "zenkutsu-dachi", "chudan", ""],
  ["23", "gedan-barai", "down block", "zenkutsu-dachi", "gedan", ""],
  ["24", "age-uke", "rising block", "zenkutsu-dachi", "jodan", ""],
  ["25", "gedan-barai", "down block", "zenkutsu-dachi", "gedan", ""],
  ["26*", "age-uke", "rising block", "zenkutsu-dachi", "jodan", ""],
];

const kataLinks = [
  ["Heian Shodan", "heian-shodan"], ["Heian Nidan", "heian-nidan"], ["Heian Sandan", "heian-sandan"], ["Heian Yondan", "heian-yondan"], ["Heian Godan", "heian-godan"],
  ["Tekki Shodan", "tekki-shodan"], ["Tekki Nidan", "tekki-nidan"], ["Tekki Sandan", "tekki-sandan"], ["Bassai Dai", "bassai-dai"], ["Kanku Dai", "kanku-dai"], ["Jion", "jion"], ["Empi", "empi"],
  ["Jitte", "jitte"], ["Gankaku", "gankaku"], ["Hangetsu", "hangetsu"], ["Kanku Sho", "kanku-sho"], ["Bassai Sho", "bassai-sho"], ["Chinte", "chinte"], ["Nijushiho", "nijushiho"], ["Sochin", "sochin"], ["Unsu", "unsu"], ["Gojushiho Sho", "gojushiho-sho"], ["Gojushiho Dai", "gojushiho-dai"], ["Meikyo", "meikyo"], ["Wankan", "wankan"], ["Jiin", "jiin"], ["Taikyoku Shodan", "taikyoku-shodan"], ["Taikyoku Nidan", "taikyoku-nidan"], ["Taikyoku Sandan", "taikyoku-sandan"], ["Ten No Kata", "ten-no-kata"],
];

export function HeianNidanPage() {
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
          <p className="mb-3 text-[0.65rem] font-bold uppercase tracking-[0.3em] text-[#9b3d18]">Kata 02 · Heian Series</p>
          <h1 className="font-[var(--font-display)] text-5xl font-bold uppercase leading-[0.85] tracking-[-0.04em] md:text-8xl">Heian Nidan</h1>
        </div>

        <section className="mx-auto max-w-[1080px] pt-8">
          <p className="font-serif text-[1rem] leading-[1.55] text-justify"><em>Heian Nidan</em>, the second Heian kata, has 26 movements and the <em>embusen</em> is almost I-shaped. Half of the kata is performed in <em>kokutsu-dachi</em> (back stance). <em>Shuto-uke</em> (knife-hand block) appears seven times, making it a very important technique for this kata. H2 is the first kata that teaches kicks and double-hand movements. Also, <em>gyaku hanmi</em>, reversing the torso's position, is first learned in H2. Pay special attention to the <em>keage/uraken</em> (side snap kick/back-fist) combination, as it appears in several other kata.</p>
        </section>

        <section className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[820px] border-collapse border border-[#777064] bg-[#d9ceb8] font-serif text-[0.78rem]">
            <thead><tr className="bg-[#cfc2aa] text-center font-bold">{['#', 'Technique', 'Translation', 'Stance', 'Target', 'Notes'].map(h => <th key={h} className="border border-[#777064] px-3 py-2">{h}</th>)}</tr></thead>
            <tbody>{movements.map(row => <tr key={row[0]} className="hover:bg-[#e4dac7]">{row.map((cell, i) => <td key={i} className={`border border-[#777064] px-3 py-2 align-middle ${i === 0 ? 'text-center' : ''}`}>{cell}</td>)}</tr>)}</tbody>
          </table>
        </section>

        <section className="mt-12 border-t border-[#bdb4a4] pt-8"><div className="grid grid-cols-2 gap-2 md:grid-cols-5 lg:grid-cols-10">{kataLinks.map(([label, slug]) => <a key={slug} href={`/karate/kata/${slug}`} className={`text-[0.6rem] uppercase tracking-[0.08em] underline underline-offset-2 hover:text-[#9b3d18] ${slug === 'heian-nidan' ? 'font-bold text-[#9b3d18]' : ''}`}>{label}</a>)}</div></section>

        <nav className="mt-10 flex items-center justify-between border-t border-[#bdb4a4] pt-7 text-[0.65rem] font-bold uppercase tracking-[0.18em]"><a href="/karate/kata/heian-shodan" className="inline-flex items-center gap-2 hover:text-[#9b3d18]"><ArrowLeft size={14} /> Heian Shodan</a><a href="/karate/kata/heian-sandan" className="inline-flex items-center gap-2 hover:text-[#9b3d18]">Heian Sandan <ArrowRight size={14} /></a></nav>
      </main>
    </div>
  );
}
