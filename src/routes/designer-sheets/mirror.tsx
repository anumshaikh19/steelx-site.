import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/page-shell";
import { EnquiryModal } from "@/components/enquiry-modal";
import { Breadcrumbs, FaqList, ProductSection, QuoteCta, SpecTable, StickyProductBar } from "@/components/products/ui";
import { MirrorConfigurator } from "@/components/mirror/configurator";
import {
  MirrorApplications,
  MirrorBeforeAfter,
  MirrorCare,
  MirrorColourStudio,
  MirrorDesignerNote,
  MirrorFabrication,
  MirrorGallery,
  MirrorHero,
  MirrorLevels,
  MirrorProtection,
  MirrorReflectionTest,
  MirrorSampleCta,
  MirrorSurface,
  MirrorVsFinishes,
} from "@/components/mirror/sections";
import { SITE_URL } from "@/data/products/designer-sheets";
import { mirrorColours, mirrorFaqs, mirrorLevels, mirrorSpecs } from "@/data/products/mirror";

const canonical = `${SITE_URL}/designer-sheets/mirror`;
const title = "Mirror Stainless Steel Sheet | 8K PVD Mirror Finish | STEELX";
const description =
  "Mirror finish stainless steel sheets in 8K / No. 8 and super mirror levels, with PVD colours including gold, rose gold, champagne, bronze, black and blue. SS304 and SS316, custom sizes and fabrication.";

export const Route = createFileRoute("/designer-sheets/mirror")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "mirror stainless steel sheet, 8K mirror stainless steel, no 8 mirror finish, super mirror stainless steel, PVD mirror stainless steel sheet, gold mirror stainless steel",
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
          name: "Mirror Stainless Steel Sheet",
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
            { "@type": "ListItem", position: 3, name: "Mirror", item: canonical },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: mirrorFaqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: { "@type": "Answer", text: faq.a },
          })),
        }),
      },
    ],
  }),
  component: MirrorPage,
});

function MirrorPage() {
  const [sample, setSample] = useState(false);
  const openSample = () => setSample(true);

  return (
    <PageShell overlayHeader>
      <MirrorHero onSample={openSample} />

      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Designer Sheets", to: "/designer-sheets" },
          { label: "Mirror" },
        ]}
      />

      <MirrorSurface />
      <MirrorLevels />
      <MirrorColourStudio />
      <MirrorGallery />
      <MirrorReflectionTest />
      <MirrorApplications />
      <MirrorBeforeAfter />
      <MirrorConfigurator />

      <ProductSection eyebrow="Technical" title="SPECIFICATIONS.">
        <SpecTable rows={mirrorSpecs} />
      </ProductSection>

      <MirrorFabrication />
      <MirrorProtection />
      <MirrorCare />
      <MirrorVsFinishes />
      <MirrorDesignerNote />
      <MirrorSampleCta onSample={openSample} />

      <QuoteCta
        defaults={{ finish: "Mirror", colour: mirrorColours[0]!.name, pattern: mirrorLevels[1]!.name }}
        finishOptions={["Mirror", "Hairline", "Embossed", "Bead Blast", "Water Ripple", "Hammered"]}
        colourOptions={mirrorColours.map((colour) => colour.name)}
        patternOptions={mirrorLevels.map((level) => level.name)}
      />

      <ProductSection eyebrow="Questions" title="FREQUENTLY ASKED.">
        <FaqList items={mirrorFaqs} />
      </ProductSection>

      <StickyProductBar label="Mirror · 8K / No. 8" onSample={openSample} />

      <EnquiryModal
        open={sample}
        onClose={() => setSample(false)}
        productId="mirror-stainless-steel-sheet"
        productName="Mirror stainless steel sample"
      />
    </PageShell>
  );
}
