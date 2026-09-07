import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/page-shell";
import { EnquiryModal } from "@/components/enquiry-modal";
import { Breadcrumbs, FaqList, ProductSection, QuoteCta, StickyProductBar } from "@/components/products/ui";
import {
  EdApplications,
  EdBeforeAfter,
  EdCare,
  EdColour,
  EdColourStory,
  EdContinuity,
  EdDetails,
  EdDirection,
  EdFabrication,
  EdFinishNav,
  EdFullSheet,
  EdGallery,
  EdGrain,
  EdHero,
  EdLight,
  EdNote,
  EdSampleCta,
  EdSignature,
  EdStatement,
  EdVsMirror,
  EdWhy,
} from "@/components/hairline/editorial";
import { hairlineColours, hairlineFaqs, SITE_URL } from "@/data/products/hairline";

const canonical = `${SITE_URL}/designer-sheets/hairline`;
const title = "Hairline Stainless Steel Sheet | Brushed Architectural Finish | STEELX";
const description =
  "Explore STEELX Hairline stainless steel sheets with refined directional grain, brushed surfaces and PVD colour options for elevators, feature walls, hospitality, retail and architectural interiors.";

export const Route = createFileRoute("/designer-sheets/hairline")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "hairline stainless steel sheet, hairline finish stainless steel, brushed stainless steel, no 4 stainless steel, PVD hairline stainless steel, gold hairline stainless steel, black hairline stainless steel, architectural stainless steel, decorative stainless steel sheet",
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
          name: "Hairline Stainless Steel Sheet",
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
            { "@type": "ListItem", position: 3, name: "Hairline", item: canonical },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: hairlineFaqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: { "@type": "Answer", text: faq.a },
          })),
        }),
      },
    ],
  }),
  component: HairlinePage,
});

function HairlinePage() {
  const [sample, setSample] = useState(false);
  const openSample = () => setSample(true);
  const openQuote = () => {
    document.getElementById("enquiry")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <PageShell overlayHeader>
      <div className="hl-ed">
        <EdHero onSample={openSample} />

        <Breadcrumbs
          items={[
            { label: "Home", to: "/" },
            { label: "Designer Sheets", to: "/designer-sheets" },
            { label: "Hairline" },
          ]}
        />

        <EdStatement />
        <EdSignature />
        <EdWhy />
        <EdGallery />
        <EdGrain />
        <EdDirection />
        <EdApplications />
        <EdLight />
        <EdColour />
        <EdColourStory />
        <EdBeforeAfter />
        <EdFullSheet />
        <EdDetails />
        <EdFabrication />
        <EdContinuity />
        <EdCare />
        <EdVsMirror />
        <EdFinishNav />
        <EdNote />
        <EdSampleCta onSample={openSample} onQuote={openQuote} />

        <ProductSection eyebrow="Questions" title="FREQUENTLY ASKED.">
          <FaqList items={hairlineFaqs} />
        </ProductSection>

        <div id="enquiry">
          <QuoteCta
            defaults={{ finish: "Hairline", colour: hairlineColours[0]!.name, pattern: "Horizontal grain" }}
            finishOptions={["Hairline", "Mirror", "Embossed", "Bead Blast", "Water Ripple", "Hammered"]}
            colourOptions={hairlineColours.map((colour) => colour.name)}
            patternOptions={["Horizontal grain", "Vertical grain", "Custom direction"]}
          />
        </div>

        <StickyProductBar label="Hairline · Brushed" onSample={openSample} />
      </div>

      <EnquiryModal
        open={sample}
        onClose={() => setSample(false)}
        productId="hairline-stainless-steel-sheet"
        productName="Hairline stainless steel sample"
      />
    </PageShell>
  );
}
