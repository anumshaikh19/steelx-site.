import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/page-shell";
import { Marquee } from "@/components/motion";
import { EnquiryModal } from "@/components/enquiry-modal";
import { studio } from "@/config/nav";

import {
  EngineeringValue,
  MeshIntro,
  ProjectQuoteCTA,
  SSMeshHero,
  ValueProposition,
} from "@/components/mesh/intro-sections";
import { ProductDirectory, SpecificationDirectory } from "@/components/mesh/directory-sections";
import { WeaveLibrary } from "@/components/mesh/weave-library";
import { Applications, ProcessSection } from "@/components/mesh/application-sections";
import { InspirationGallery } from "@/components/mesh/gallery-section";
import {
  MaintenanceSection,
  MaterialComparison,
  MaterialGradeComparison,
  TechnicalMatrix,
  TechnicalSpecifications,
} from "@/components/mesh/technical-sections";
import { CaseStudies, PVDFinishes, SteelXInMotion } from "@/components/mesh/finish-sections";
import {
  CareMaintenance,
  FinalCTA,
  GlobalReach,
  HowToOrder,
  KeywordSection,
  ResourceHub,
  TechnicalFAQ,
  Testimonials,
} from "@/components/mesh/resource-sections";

const title = "SS Decorative Mesh with PVD Coating | STEELX";
const description =
  "Architectural stainless steel mesh in SS304 / SS316 with titanium PVD coating — 18 weave patterns, facades, ceilings, partitions and balustrades, engineered and finished in-house.";

export const Route = createFileRoute("/ss-decorative-mesh-pvd")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MeshPage,
});

function MeshPage() {
  const [enquiry, setEnquiry] = useState(false);
  const open = () => setEnquiry(true);

  const whatsapp = `https://wa.me/${studio.whatsapp}?text=${encodeURIComponent(
    "Hello STEELX — I'd like details on SS Decorative Mesh with PVD coating.",
  )}`;

  const share = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    try {
      if (typeof navigator !== "undefined" && navigator.share) {
        await navigator.share({ title, text: description, url });
      } else if (typeof navigator !== "undefined" && navigator.clipboard) {
        await navigator.clipboard.writeText(url);
      }
    } catch {
      /* dismissed */
    }
  };

  return (
    <PageShell overlayHeader>
      <SSMeshHero onEnquire={open} onShare={share} whatsapp={whatsapp} />

      <Marquee
        items={[
          "SS304 / SS316",
          "TITANIUM PVD",
          "18 WEAVE PATTERNS",
          "ISO 9001:2015",
          "PANELS TO 3000 × 6000 MM",
          "EXPORTED WORLDWIDE",
        ]}
      />

      <EngineeringValue onEnquire={open} />
      <MeshIntro onEnquire={open} />
      <ValueProposition />
      <ProjectQuoteCTA onEnquire={open} />

      <ProductDirectory />
      <SpecificationDirectory />
      <WeaveLibrary />

      <Applications />
      <ProcessSection />
      <InspirationGallery />

      <MaintenanceSection />
      <MaterialComparison />
      <PVDFinishes />
      <CaseStudies />
      <SteelXInMotion />

      <TechnicalSpecifications />
      <MaterialGradeComparison />
      <TechnicalMatrix />

      <ResourceHub />
      <CareMaintenance />
      <HowToOrder />
      <Testimonials />
      <TechnicalFAQ />
      <GlobalReach />
      <KeywordSection />
      <FinalCTA onEnquire={open} whatsapp={whatsapp} />

      <EnquiryModal
        open={enquiry}
        onClose={() => setEnquiry(false)}
        productId="ss-decorative-mesh-pvd"
        productName="SS Decorative Mesh with PVD Coating"
      />
    </PageShell>
  );
}
