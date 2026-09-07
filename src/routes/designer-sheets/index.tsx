import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/page-shell";
import { Breadcrumbs } from "@/components/products/ui";
import { EnquiryModal } from "@/components/enquiry-modal";
import {
  DslApplications,
  DslBeforeAfter,
  DslCollection,
  DslColourWorld,
  DslComparison,
  DslFinalCta,
  DslGallery,
  DslHero,
  DslIntro,
  DslLightLab,
  DslMobileBar,
  DslReferenceStrip,
  DslSampleCta,
  DslScale,
  DslSupport,
} from "@/components/products/landing";
import { SITE_URL } from "@/data/products/designer-sheets";

const title = "Designer Sheets | Decorative Stainless Steel Surfaces | STEELX";
const description =
  "STEELX designer sheets — mirror, hairline, embossed, bead blast, water ripple and hammered stainless steel surfaces in SS304 and SS316 with PVD colour.";
const canonical = `${SITE_URL}/designer-sheets`;

export const Route = createFileRoute("/designer-sheets/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: canonical },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: canonical }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "Designer Sheets", item: canonical },
          ],
        }),
      },
    ],
  }),
  component: DesignerSheetsLanding,
});

function DesignerSheetsLanding() {
  const [sample, setSample] = useState(false);
  const openSample = () => setSample(true);

  return (
    <PageShell overlayHeader>
      <div className="pb-20 lg:pb-0">
        <DslHero onSample={openSample} />
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Designer Sheets" }]} />
        <DslIntro />
        <DslCollection />
        <DslGallery />
        <DslComparison />
        <DslColourWorld />
        <DslBeforeAfter />
        <DslApplications />
        <DslScale />
        <DslLightLab />
        <DslReferenceStrip />
        <DslSampleCta onSample={openSample} />
        <DslSupport />
        <DslFinalCta />
      </div>

      <DslMobileBar onSample={openSample} />

      <EnquiryModal
        open={sample}
        onClose={() => setSample(false)}
        productId="designer-sheets"
        productName="Designer Sheets sample set"
      />
    </PageShell>
  );
}

