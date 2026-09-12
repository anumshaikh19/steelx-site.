import { ArrowLeft, ArrowRight } from "lucide-react";

type Section = {
  title: string;
  body: string[];
  images?: string[];
};

type LevelData = {
  title: string;
  eyebrow: string;
  intro: string;
  heroImage: string;
  sidebarImage: string;
  sections: Section[];
  prev?: [string, string];
  next?: [string, string];
};

const levels: Record<string, LevelData> = {
  beginner: {
    title: "Beginner Kumite",
    eyebrow: "Kumite 01 · Beginner",
    intro: "Basic kumite training develops proper punching and blocking technique while teaching the karateka how to maintain proper distance while moving forwards and backwards.",
    heroImage: "https://shotokankaratecsl.com/images/Tan%20ellipse%20bg%20900.jpg",
    sidebarImage: "https://shotokankaratecsl.com/images/Sidebar%20950.jpg",
    sections: [
      { title: "Kihon-Gohon-Kumite", body: ["Basic five-step sparring is typically practiced by beginners. The attacker steps forward with jodan-oi-zuki five times in succession. The defender must step backwards five times using the appropriate block, usually jodan-age-uke, followed by a counter-attack, usually chudan-gyaku-zuki. The defender then takes on the role of attacker, stepping forward five times with jodan-oi-zuki. The sequence is then repeated with chudan-oi-zuki as the attack and chudan-soto-uke as the defense.", "All stances, attacks, and blocks are performed in basic style, i.e. no free-style techniques are allowed. Five-step sparring is very useful in developing proper punching and blocking technique. However, its main purpose is to teach the karateka how to maintain proper distance from the opponent, while moving forwards and backwards."], images: ["https://shotokankaratecsl.com/images/CSL%20Kumite%20-%20Sanbon%20chudan.jpg", "https://shotokankaratecsl.com/images/CSL%20Kumite%20-%20Sanbon%20jodan.jpg"] },
      { title: "Kihon-Sanbon-Kumite", body: ["Basic three-step sparring is almost exactly the same as five-step sparring except that the number of steps has been reduced to three. Three-step sparring takes up less time and space than five-step and is generally considered as more efficient. It still teaches basic punching and blocking technique, and it trains the student to maintain proper distance while moving."], images: ["https://shotokankaratecsl.com/images/CSL%20Kumite%20-%20Sanbon%20gyaku%20zuki.jpg"] },
    ],
    next: ["Intermediate Kumite", "/karate/kumite/intermediate"],
  },
  intermediate: {
    title: "Intermediate Kumite",
    eyebrow: "Kumite 02 · Intermediate",
    intro: "Intermediate kumite bridges basic yakusoku-kumite and free sparring, developing timing, tai sabaki, counter-attacking and controlled movement from jiyu-kamae.",
    heroImage: "https://shotokankaratecsl.com/images/Tan%20ellipse%20bg%201000.jpg",
    sidebarImage: "https://shotokankaratecsl.com/images/Sidebar%201050.jpg",
    sections: [
      { title: "Kihon-Ippon-Kumite", body: ["Basic one-step sparring is normally taught at the beginner and intermediate levels. In this form of kumite, the attacker may use only one attack with one step. Many different attack forms can be used, such as various strikes and kicks, but only one at a time. After each single attack, both opponents must restart.", "One-step sparring is very useful in teaching the student how to counter-attack quickly, preventing the opponent from launching a second attack. It is at this stage of kumite where the defender learns tai sabaki, or body shifting. This occurs when the karateka shifts off the axis of attack (i.e. moves out of the way), making the block almost superfluous, and then delivers a counter-attack.", "As in all kihon-kumite sets, the defender starts in a natural stance and basic technique is maintained throughout by both participants. Ippon-kumite has many variations, such as gaeshi-ippon-kumite (returning one-step sparring), whereby the attacker receiving the counter-attack must block it and counter as well. In okuri-ippon-kumite (sliding sparring), the attacker throws two attacks instead of only one and both must be defended against. Kihon-ippon-kumite training provides the tools necessary for jiyu-ippon-kumite."], images: ["https://shotokankaratecsl.com/images/CSL%20Kumite%20-%20Ippon%20mawashi%20geri.jpg", "https://shotokankaratecsl.com/images/CSL%20Kumite%20-%20Ippon%20mae%20geri.jpg"] },
      { title: "Jiyu-Ippon-Kumite", body: ["Freestyle one-step sparring (also known as semi-free sparring) is very similar to basic one-step sparring, except that in jiyu-ippon, both participants start in jiyu-kamae (freestyle position). After each attack and counter-attack is made, the participants return to jiyu-kamae position. Sometimes, more than one counter-attack is executed.", "Jiyu-ippon is usually taught to intermediate and advanced karateka. Although moving a little closer to actual free-sparring, this is still a form of yakusoku-kumite (announcement sparring). Jiyu-ippon is taught to students in an effort to bridge the gap between basic yakusoku-kumite and jiyu-kumite (free-sparring), facilitating the transition from one to the other. Of course, one must always keep in mind that the rules for jiyu-ippon performance can vary greatly from one dojo to the next."], images: ["https://shotokankaratecsl.com/images/CSL%20Kumite%20-%20Jiyu%20Ippon%20kamae.jpg", "https://shotokankaratecsl.com/images/CSL%20Kumite%20-%20Jiyu%20Ippon%20haito.jpg"] },
    ],
    prev: ["Beginner Kumite", "/karate/kumite/beginner"],
    next: ["Advanced Kumite", "/karate/kumite/advanced"],
  },
  advanced: {
    title: "Advanced Kumite",
    eyebrow: "Kumite 03 · Advanced",
    intro: "Advanced kumite moves into free sparring, tournament fighting and kata application, demanding control, timing, distance, precision and a deep understanding of technique.",
    heroImage: "https://shotokankaratecsl.com/images/Tan%20ellipse%20bg%201970.jpg",
    sidebarImage: "https://shotokankaratecsl.com/images/Sidebar%202020.jpg",
    sections: [
      { title: "Jiyu-Kumite", body: ["Free-sparring is not part of the yakusoku set of kumite. Simply put, free sparring is practice fighting. Participants begin in freestyle position and fight each other using full speed attacks and defenses. Only the lightest contact is permitted, therefore a high level of skill is necessary. That being said, free-sparring is generally reserved for advanced belts only.", "Free-sparring provides an excellent opportunity to test one's skills against another individual with complete freedom of movement. Through jiyu-kumite practice, one prepares for shiai-kumite."], images: ["https://shotokankaratecsl.com/images/CSL%20Kumite%20-%20Jiyu%20mawashi%20ukete.jpg", "https://shotokankaratecsl.com/images/CSL%20Kumite%20-%20Jiyu%20mawashi%20maai.jpg"] },
      { title: "Shiai-Kumite", body: ["Competition sparring is the kumite performed at tournaments. It is like a sport, having rules and regulations, and of course, a winner and a loser. Technically, all of the kumite sets, even those of beginners, can be performed at a tournament. However, shiai-kumite is a term usually reserved for the fighting matches.", "In JKA Shotokan karate, shiai-kumite is either shobu-ippon-kumite or sanbon-shobu-kumite. Shobu-ippon-kumite is the same as jiyu-kumite with one small difference; the fighting is done for points whereby one competitor will be declared the victor. Shobu-ippon means one-point match. The winner is the person who scores an ippon (one point) with a perfect technique. Any technique deemed less than perfect will score a waza-ari, or half-point. Two waza-ari equals ippon and the match is won.", "Ippon techniques are indeed rare and are usually only awarded when: 1) knocking the opponent off balance and then executing an effective attack or counter-attack; 2) launching a consecutive series of attacks that all reach their target; 3) the opponent makes no attempt at a defense; or 4) evading an opponent's attack while delivering an effective counter-attack.", "Sanbon-shobu-kumite is exactly the same as shobu-ippon except that it refers to a three point match. Sanbon-shobu refers to best 2 out of 3 or simply the majority of points. The competitor who scores two full points first is declared the winner. Sanbon-shobu is usually reserved for the final match of JKA-style competitions. Every two or three years, some of the greatest JKA karate experts in the world gather at the Gichin Funakoshi Cup, also known as the World Shoto Cup, to compete in kata, kumite, and team events."], images: ["https://shotokankaratecsl.com/images/CSL%20Kumite%20-%20Shobu%20gyaku%20zuki.jpg"] },
      { title: "Oyo-Kumite", body: ["Applications sparring can be practiced yakusoku style or freestyle. It consists of using movements of the kata to defend and counter-attack. Each movement in a kata has a self-defense meaning or application, called bunkai or oyo.", "More specifically, bunkai means to analyze the movements to find combat ideas. Oyo means to apply those ideas using different variations. Applications range from simple punching and striking counter-attacks to more complex joint locks, throws, and even chokes. Each movement of a kata may have several different meanings or applications.", "Oyo-kumite is very difficult and can only be practiced by fairly advanced students possessing a more profound understanding of kata."], images: ["https://shotokankaratecsl.com/images/CSL%20Kumite%20-%20Oyo%20T1.jpg", "https://shotokankaratecsl.com/images/CSL%20Kumite%20-%20Oyo%20Chinte.jpg", "https://shotokankaratecsl.com/images/CSL%20Kumite%20-%20Oyo%20Gankaku.jpg"] },
    ],
    prev: ["Intermediate Kumite", "/karate/kumite/intermediate"],
  },
};

export function KumiteLevelPage({ level }: { level: "beginner" | "intermediate" | "advanced" }) {
  const data = levels[level];
  return (
    <div className="min-h-screen bg-[#e9e2d3] text-[#111111]">
      <header className="sticky top-0 z-30 border-b border-[#bdb4a4] bg-[#e9e2d3]/95 px-5 py-4 backdrop-blur md:px-10">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-5">
          <a href="/karate/" className="inline-flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.2em] hover:text-[#9b3d18]"><ArrowLeft size={14} /> Dhanurveda</a>
          <a href="/karate/#kumite" className="text-[0.65rem] font-bold uppercase tracking-[0.2em] hover:text-[#9b3d18]">Kumite Library</a>
        </div>
      </header>
      <main className="mx-auto max-w-[1180px] px-5 pb-24 pt-10 md:px-10 md:pt-16">
        <div className="relative overflow-hidden border-b border-[#bdb4a4] pb-8">
          <div className="absolute inset-y-0 right-0 hidden w-[42%] opacity-25 md:block" style={{ backgroundImage: `url("${data.heroImage}")`, backgroundSize: "cover", backgroundPosition: "center" }} />
          <div className="relative z-10 max-w-[800px]"><p className="mb-3 text-[0.65rem] font-bold uppercase tracking-[0.3em] text-[#9b3d18]">{data.eyebrow}</p><h1 className="font-[var(--font-display)] text-5xl font-bold uppercase leading-[0.85] tracking-[-0.04em] md:text-8xl">{data.title}</h1><p className="mt-6 max-w-[720px] font-serif text-[1.05rem] leading-[1.55] text-justify">{data.intro}</p></div>
        </div>
        <section className="grid gap-10 pt-10 lg:grid-cols-[1fr_280px]">
          <div className="space-y-12">
            {data.sections.map((section) => (
              <article key={section.title} className="border-t border-[#bdb4a4] pt-7">
                <h2 className="font-[var(--font-display)] text-3xl font-bold uppercase tracking-[-0.025em] md:text-5xl">{section.title}</h2>
                <div className="mt-5 space-y-4 font-serif text-[1rem] leading-[1.6] text-justify">{section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
                {section.images && <div className="mt-7 grid gap-3 sm:grid-cols-2"><>{section.images.map((src) => <img key={src} src={src} alt={`${section.title} reference`} loading="lazy" className="h-56 w-full object-cover border border-[#bdb4a4] bg-[#d9ceb8]" />)}</></div>}
              </article>
            ))}
          </div>
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="overflow-hidden border border-[#777064] bg-[#d9ceb8]"><img src={data.sidebarImage} alt="Shotokan kumite reference" className="w-full object-cover" /><div className="p-4"><p className="text-[0.6rem] font-bold uppercase tracking-[0.22em] text-[#9b3d18]">Kumite · {level}</p><p className="mt-2 font-serif text-sm leading-[1.5]">Training progresses from agreed drills to increasingly free movement, while distance, timing and control remain central.</p></div></div>
            <div className="mt-5 border-t border-[#bdb4a4] pt-5"><p className="text-[0.6rem] font-bold uppercase tracking-[0.2em]">Levels</p><div className="mt-3 space-y-2">{([["Beginner Kumite", "beginner"], ["Intermediate Kumite", "intermediate"], ["Advanced Kumite", "advanced"]] as const).map(([label, slug]) => <a key={slug} href={`/karate/kumite/${slug}`} className={`block text-sm underline underline-offset-2 hover:text-[#9b3d18] ${slug === level ? "font-bold text-[#9b3d18]" : ""}`}>{label}</a>)}</div></div>
          </aside>
        </section>
        <nav className="mt-14 flex items-center justify-between gap-5 border-t border-[#bdb4a4] pt-7 text-[0.65rem] font-bold uppercase tracking-[0.16em]">{data.prev ? <a href={data.prev[1]} className="inline-flex items-center gap-2 hover:text-[#9b3d18]"><ArrowLeft size={14}/> {data.prev[0]}</a> : <span />}{data.next ? <a href={data.next[1]} className="inline-flex items-center gap-2 hover:text-[#9b3d18]">{data.next[0]} <ArrowRight size={14}/></a> : <a href="/karate/#kumite" className="hover:text-[#9b3d18]">Back to Kumite</a>}</nav>
      </main>
    </div>
  );
}
