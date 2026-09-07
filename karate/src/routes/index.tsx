import { createFileRoute } from "@tanstack/react-router";
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

const TITLE = "Dhanurveda — Martial Arts & Calisthenics in Nagpada, Mumbai";
const DESC =
  "Karate, calisthenics, self defence and kids martial arts in Nagpada, Mumbai. Rated 4.9 by 65+ students. Training discipline, control and character since 2011.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Cursor />
      <div aria-hidden className="grain-overlay" />
      <Nav />
      <main>
        <h1 className="sr-only">
          Dhanurveda — Martial Arts &amp; Calisthenics academy in Nagpada, Mumbai
        </h1>
        <Hero />
        <TitleTransition />
        <DojoStatement />
        <Arts />
        <OneStrike />
        <Calisthenics />
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
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SportsActivityLocation",
            name: "Dhanurveda — Martial Arts & Calisthenics",
            url: "http://www.thedhanurveda.com/",
            telephone: "+91 98337 89020",
            foundingDate: "2011",
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "PT Mane Garden, Police Station, opposite Sagar Hotel, Police Colony, New Nagpada",
              addressLocality: "Nagpada, Mumbai",
              addressRegion: "Maharashtra",
              postalCode: "400008",
              addressCountry: "IN",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "65",
            },
          }),
        }}
      />
    </>
  );
}
