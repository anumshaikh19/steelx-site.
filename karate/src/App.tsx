import { useEffect } from "react";
import { Cursor } from "@/components/site/Cursor";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { TitleTransition } from "@/components/site/TitleTransition";
import { DojoStatement } from "@/components/site/DojoStatement";
import { Arts } from "@/components/site/Arts";
import { OneStrike } from "@/components/site/OneStrike";
import { Calisthenics } from "@/components/site/Calisthenics";
import { KarateLibrary } from "@/components/site/KarateLibrary";
import { Belts } from "@/components/site/Belts";
import { Philosophy } from "@/components/site/Philosophy";
import { Timings } from "@/components/site/Timings";
import { Gallery } from "@/components/site/Gallery";
import { FirstClass } from "@/components/site/FirstClass";
import { Reviews } from "@/components/site/Reviews";
import { Trainers } from "@/components/site/Trainers";
import { Location } from "@/components/site/Location";
import { FinalCta } from "@/components/site/FinalCta";
import { ReferencePage } from "@/components/site/ReferencePage";

const slugify = (value: string) => decodeURIComponent(value).replace(/\.html$/i, "").replace(/^Kihon\s+0\d+\s*-\s*/i, "").replace(/^Kata\s+\d+\s*-\s*/i, "").replace(/^Kumite\s+0\d+\s*-\s*/i, "").trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

function ReferenceRoute() {
  const parts = window.location.pathname.replace(/^\/karate\/?/, "").split("/").filter(Boolean);
  if (parts.length >= 2 && ["kihon", "kata", "kumite"].includes(parts[0])) return <ReferencePage kind={parts[0]} slug={parts[1]} />;
  return null;
}

function ExternalReferenceBridge() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest("a") as HTMLAnchorElement | null;
      if (!anchor || !anchor.href.includes("shotokankaratecsl.com/")) return;
      const raw = decodeURIComponent(anchor.href.split("shotokankaratecsl.com/")[1] || "");
      if (!/\.(html?)$/i.test(raw)) return;
      event.preventDefault();
      const file = raw.split("/").pop() || raw;
      const kind = /^Kihon/i.test(file) ? "kihon" : /^Kata/i.test(file) ? "kata" : /^Kumite/i.test(file) ? "kumite" : null;
      if (!kind) return;
      window.history.pushState({}, "", `/karate/${kind}/${slugify(file)}`);
      window.dispatchEvent(new PopStateEvent("popstate"));
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}

export function App() {
  const reference = typeof window !== "undefined" ? ReferenceRoute() : null;
  if (reference) return reference;
  return (
    <>
      <ExternalReferenceBridge />
      <Cursor />
      <div aria-hidden className="grain-overlay" />
      <Nav />
      <main>
        <h1 className="sr-only">Dhanurveda — Martial Arts &amp; Calisthenics academy in Nagpada, Mumbai</h1>
        <Hero /><TitleTransition /><DojoStatement /><Arts /><OneStrike /><Calisthenics /><KarateLibrary /><Belts /><Philosophy /><Timings /><Gallery /><Reviews /><FirstClass /><Trainers /><Location /><FinalCta />
      </main>
    </>
  );
}
