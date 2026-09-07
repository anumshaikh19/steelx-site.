import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/page-shell";
import { EnquiryModal } from "@/components/enquiry-modal";
import { Breadcrumbs, FaqList, ProductSection, QuoteCta, StickyProductBar } from "@/components/products/ui";
import {
  EmApplications,
  EmCare,
  EmColour,
  EmDetails,
  EmFabrication,
  EmFinishNav,
  EmFullSheet,
  EmHero,
  EmLight,
  EmMacro,
  EmNote,
  EmPatterns,
  EmSampleCta,
  EmSignature,
  EmStatement,
  EmVsFlat,
  EmWhy,
} from "@/components/embossed/editorial";
import { embossedColours, embossedFaqs, SITE_URL } from "@/data/products/embossed";

const canonical = `${SITE_URL}/designer-sheets/embossed`;
const title = "Embossed Stainless Steel Sheet | Textured Relief Panels | STEELX";
const description =
  "Explore STEELX embossed stainless steel sheets — repeating three-dimensional relief patterns in SS304 and SS316 with PVD colour, for lift cabins, bars, dividers, ceilings and feature walls.";

export const Route = createFileRoute("/designer-sheets/embossed")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "embossed stainless steel sheet, textured stainless steel, 3d stainless steel panel, relief pattern stainless steel, PVD embossed stainless steel, decorative stainless steel sheet, architectural metal panel",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "product" },
      { property: "og:url", content: canonical },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: canonical }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Embossed Stainless Steel Sheet",
          description,
          material: "Stainless Steel",
          brand: { "@type": "Brand", name: "STEELX" },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "Designer Sheets", item: `${SITE_URL}/designer-sheets` },
            { "@type": "ListItem", position: 3, name: "Embossed", item: canonical },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: embossedFaqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: { "@type": "Answer", text: faq.a },
          })),
        }),
      },
    ],
  }),
  component: EmbossedPage,
});

function EmbossedPage() {
  const [sample, setSample] = useState(false);
  const openSample = () => setSample(true);
  const openQuote = () => {
    document.getElementById("enquiry")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <PageShell overlayHeader>
      <div className="hl-ed">
        <EmHero onSample={openSample} />

        <Breadcrumbs
          items={[
            { label: "Home", to: "/" },
            { label: "Designer Sheets", to: "/designer-sheets" },
            { label: "Embossed" },
          ]}
        />

        <EmStatement />
        <EmSignature />
        <EmWhy />
        <EmMacro />
        <EmPatterns />
        <EmLight />
        <EmApplications />
        <EmColour />
        <EmFullSheet />
        <EmDetails />
        <EmFabrication />
        <EmVsFlat />
        <EmCare />
        <EmFinishNav />
        <EmNote />
        <EmSampleCta onSample={openSample} onQuote={openQuote} />

        <ProductSection eyebrow="Questions" title="FREQUENTLY ASKED.">
          <FaqList items={embossedFaqs} />
        </ProductSection>

        <div id="enquiry">
          <QuoteCta
            defaults={{ finish: "Embossed", colour: embossedColours[0]!.name, pattern: "Diamond" }}
            finishOptions={["Embossed", "Mirror", "Hairline", "Bead Blast", "Water Ripple", "Hammered"]}
            colourOptions={embossedColours.map((colour) => colour.name)}
            patternOptions={["Diamond", "Linear rib", "Square grid", "Wave", "Custom"]}
          />
        </div>

        <StickyProductBar label="Embossed · Relief" onSample={openSample} />
      </div>

      <EnquiryModal
        open={sample}
        onClose={() => setSample(false)}
        productId="embossed-stainless-steel-sheet"
        productName="Embossed stainless steel sample"
      />
    </PageShell>
  );
}
