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

function ReferenceRoute() {
  const parts = window.location.pathname.replace(/^\/karate\/?/, "").split("/").filter(Boolean);
  if (parts.length >= 2 && ["kihon", "kata", "kumite"].includes(parts[0])) {
    return <ReferencePage kind={parts[0]} slug={parts[1]} />;
  }
  return null;
}

export function App() {
  const reference = typeof window !== "undefined" ? ReferenceRoute() : null;
  if (reference) return reference;

  return (
    <>
      <Cursor />
      <div aria-hidden className="grain-overlay" />
      <Nav />
      <main>
        <h1 className="sr-only">Dhanurveda — Martial Arts &amp; Calisthenics academy in Nagpada, Mumbai</h1>
        <Hero />
        <TitleTransition />
        <DojoStatement />
        <Arts />
        <OneStrike />
        <Calisthenics />
        <KarateLibrary />
        <Belts />
        <Philosophy />
        <Timings />
        <Gallery />
        <Reviews />
        <FirstClass />
        <Trainers />
        <Location />
        <FinalCta />
      </main>
    </>
  );
}
