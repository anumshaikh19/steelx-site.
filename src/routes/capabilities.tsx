import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/page-shell";
import { EnquiryModal } from "@/components/enquiry-modal";
import { ScrollProgress } from "@/components/motion";
import {
  ArchitecturalSurfaces,
  CapabilitiesHero,
  CapabilitiesIntro,
  CapabilityIndex,
  PvdCoating,
} from "@/components/capabilities/opening";
import {
  CustomFabrication,
  DecorativeMesh,
  InstallationSection,
  MetalJoinery,
  SculpturalMetal,
} from "@/components/capabilities/craft";
import {
  Applications,
  CapabilityInPractice,
  CapabilityStats,
  CapabilitiesCTA,
  MaterialLibrary,
  QualityControl,
  SheetToSurface,
  WhySteelx,
} from "@/components/capabilities/closing";

const title = "Capabilities — Surfaces engineered for space | STEELX PVD";
const description =
  "PVD coating, architectural surfaces, custom fabrication, decorative mesh, metal joinery, sculptural metal and installation — STEELX takes stainless steel from mill sheet to installed architectural surface.";

export const Route = createFileRoute("/capabilities")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CapabilitiesPage,
});

function CapabilitiesPage() {
  const [enquiry, setEnquiry] = useState(false);
  const open = () => setEnquiry(true);

  return (
    <PageShell overlayHeader>
      <ScrollProgress />
      <CapabilitiesHero onStart={open} />
      <CapabilityIndex />
      <CapabilitiesIntro />
      <PvdCoating />
      <ArchitecturalSurfaces />
      <CustomFabrication />
      <DecorativeMesh />
      <MetalJoinery />
      <SculpturalMetal />
      <InstallationSection />
      <SheetToSurface />
      <MaterialLibrary />
      <Applications />
      <CapabilityInPractice />
      <QualityControl />
      <CapabilityStats />
      <WhySteelx />
      <CapabilitiesCTA onStart={open} />
      <EnquiryModal
        open={enquiry}
        onClose={() => setEnquiry(false)}
        productId="capabilities"
        productName="STEELX Capabilities"
      />
    </PageShell>
  );
}
