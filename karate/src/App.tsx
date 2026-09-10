import { useEffect, useState } from "react";
import { Cursor } from "@/components/site/Cursor";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { TitleTransition } from "@/components/site/TitleTransition";
import { DojoStatement } from "@/components/site/DojoStatement";
import { Arts } from "@/components/site/Arts";
import { OneStrike } from "@/components/site/OneStrike";
import { Calisthenics } from "@/components/site/Calisthenics";
import { Belts } from "@/components/site/Belts";
import { Philosophy } from "@/components/site/Philosophy";
import { Timings } from "@/components/site/Timings";
import { Gallery } from "@/components/site/Gallery";
import { FirstClass } from "@/components/site/FirstClass";
import { Reviews } from "@/components/site/Reviews";
import { Trainers } from "@/components/site/Trainers";
import { Location } from "@/components/site/Location";
import { FinalCta } from "@/components/site/FinalCta";
import { KihonSection } from "@/components/site/KihonSection";
import { ReferencePage } from "@/components/site/ReferencePage";
import { TachiPage } from "@/components/site/TachiPage";
import { UkePage } from "@/components/site/UkePage";

const slugify = (value: string) => decodeURIComponent(value).replace(/\.html$/i, "").replace(/^Kihon\s+0\d+\s*-\s*/i, "").replace(/^Kata\s+\d+\s*-\s*/i, "").replace(/^Kumite\s+0\d+\s*-\s*/i, "").trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

function referenceParts(pathname: string) {
  const parts = pathname.replace(/^\/karate\/?/, "").split("/").filter(Boolean);
  return parts.length >= 2 && ["kihon", "kata", "kumite"].includes(parts[0]) ? { kind: parts[0], slug: parts[1] } : null;
}

export function App() {
  const [pathname, setPathname] = useState(() => typeof window === "undefined" ? "/karate/" : window.location.pathname);
  const reference = referenceParts(pathname);

  useEffect(() => {
    const onPop = () => setPathname(window.location.pathname);
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest("a") as HTMLAnchorElement | null;
      if (!anchor || !anchor.href.includes("shotokankaratecsl.com/")) return;
      const raw = decodeURIComponent(anchor.href.split("shotokankaratecsl.com/")[1] || "");
      if (!/\.html?$/i.test(raw)) return;
      const file = raw.split("/").pop() || raw;
      const kind = /^Kihon/i.test(file) ? "kihon" : /^Kata/i.test(file) ? "kata" : /^Kumite/i.test(file) ? "kumite" : null;
      if (!kind) return;
      event.preventDefault();
      const next = `/karate/${kind}/${slugify(file)}`;
      window.history.pushState({}, "", next);
      setPathname(next);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    window.addEventListener("popstate", onPop);
    document.addEventListener("click", onClick);
    return () => { window.removeEventListener("popstate", onPop); document.removeEventListener("click", onClick); };
  }, []);

  if (pathname === "/karate/kihon/tachi" || pathname === "/karate/kihon/tachi/") return <TachiPage />;
  if (pathname === "/karate/kihon/uke" || pathname === "/karate/kihon/uke/") return <UkePage />;
  if (reference) return <ReferencePage kind={reference.kind} slug={reference.slug} />;

  return (
    <>
      <Cursor /><div aria-hidden className="grain-overlay" /><Nav />
      <main>
        <h1 className="sr-only">Dhanurveda — Martial Arts &amp; Calisthenics academy in Nagpada, Mumbai</h1>
        <Hero /><TitleTransition /><DojoStatement /><Arts /><KihonSection /><OneStrike /><Calisthenics /><Belts /><Philosophy /><Timings /><Gallery /><Reviews /><FirstClass /><Trainers /><Location /><FinalCta />
      </main>
    </>
  );
}
