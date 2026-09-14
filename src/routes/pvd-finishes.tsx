import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ScrollProgress } from "@/components/motion";
import { PvdHeroRebuilt } from "@/components/pvd-hero-rebuilt";
import { tones } from "@/data/pvd";
import "@/pvd-finishes.css";

const title = "PVD Finishes | SteelXDecor — Architectural Stainless Steel";
const description = "Explore SteelXDecor's architectural PVD finish collection in Champagne, Gold, Rose Gold, Bronze, Black, Gunmetal, Titanium and Silver on stainless steel.";

export const Route = createFileRoute("/pvd-finishes")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "keywords", content: "PVD finishes, PVD stainless steel finishes, Champagne PVD, Gold PVD stainless steel, Rose Gold PVD, Bronze PVD, Black PVD, Gunmetal PVD, Titanium PVD, architectural stainless steel" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "robots", content: "index,follow" },
    ],
    links: [{ rel: "canonical", href: "https://steelxdecor.com/pvd-finishes" }],
  }),
  component: PvdFinishesPage,
});

function PvdFinishesPage() {
  return (
    <div className="pvd-finishes-page min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <SiteHeader />
      <main>
        <PvdHeroRebuilt />

        <section className="pvd-finishes-collection" id="finishes" aria-labelledby="finishes-title">
          <div className="pvd-finishes-collection__intro">
            <div>
              <p className="pvd-finishes-kicker">02 · THE COLLECTION</p>
              <h2 id="finishes-title">Colour, captured in metal.</h2>
            </div>
            <p>
              Eight architectural tones. One material language. Every finish is deposited onto stainless steel through vacuum PVD, allowing colour and surface texture to work as part of the architecture rather than as decoration applied afterward.
            </p>
          </div>

          <div className="pvd-finishes-grid">
            {tones.map((tone, index) => (
              <article className="pvd-finish-specimen" key={tone.id}>
                <div className="pvd-finish-specimen__image-wrap">
                  <img src={tone.image} alt={`${tone.name} PVD stainless steel finish`} loading={index > 1 ? "lazy" : "eager"} />
                  <span className="pvd-finish-specimen__shine" aria-hidden="true" />
                  <span className="pvd-finish-specimen__grain" aria-hidden="true" />
                </div>
                <div className="pvd-finish-specimen__meta">
                  <span>0{index + 1}</span>
                  <h3>{tone.name}</h3>
                  <p>{tone.note}</p>
                  <small>{tone.textures.join(" · ")}</small>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="pvd-finishes-statement" aria-labelledby="statement-title">
          <div className="pvd-finishes-statement__line" aria-hidden="true" />
          <p className="pvd-finishes-kicker">03 · SPECIFY</p>
          <h2 id="statement-title">A finish should belong to the architecture.</h2>
          <p>Specify the colour, texture, substrate and fabrication intent. We develop the surface around the project.</p>
          <a href="/contact" className="pvd-finishes-link">START A PROJECT <ArrowUpRight size={15} /></a>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
