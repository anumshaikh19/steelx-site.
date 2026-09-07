import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/page-shell";
import { Marquee } from "@/components/motion";
import { EnquiryModal } from "@/components/enquiry-modal";
import {
  StudioHero,
  WhoWeAre,
  StudioStats,
  StudioTimeline,
  MaterialBanner,
  WhatWeDo,
  BuiltWithDesigners,
  MaterialLibrary,
} from "@/components/studio/hero-sections";
import {
  PvdTechnology,
  Machinery,
  SteelXInMotion,
  SheetToSpace,
  QualitySection,
} from "@/components/studio/process-sections";
import {
  ProjectShowcase,
  DetailGallery,
  Principles,
  GlobalReach,
  StudioTeam,
  JournalPreview,
  FinalStatement,
  StudioCTA,
} from "@/components/studio/closing-sections";

const title = "About STEELX — Architectural metal & PVD surface company";
const description =
  "Inside STEELX: stainless steel expertise, PVD vacuum coating, precision fabrication and installation of architectural surfaces for architects, interior designers and developers.";

export const Route = createFileRoute("/studio")({
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
  component: StudioPage,
});

function StudioPage() {
  const [enquiry, setEnquiry] = useState(false);

  return (
    <PageShell overlayHeader>
      <StudioHero />
      <WhoWeAre />
      <StudioStats />
      <Marquee
        items={[
          "STAINLESS STEEL",
          "PVD COATING",
          "SURFACE PREPARATION",
          "PRECISION FABRICATION",
          "COLOUR CONTROL",
          "INSPECTION",
          "INSTALLATION",
        ]}
      />
      <StudioTimeline />
      <MaterialBanner />
      <WhatWeDo />
      <BuiltWithDesigners />
      <MaterialLibrary />
      <PvdTechnology />
      <Machinery />
      <SteelXInMotion />
      <SheetToSpace />
      <ProjectShowcase />
      <DetailGallery />
      <QualitySection />
      <Principles />
      <GlobalReach />
      <StudioTeam />
      <JournalPreview />
      <FinalStatement />
      <StudioCTA onEnquire={() => setEnquiry(true)} />

      <EnquiryModal
        open={enquiry}
        onClose={() => setEnquiry(false)}
        productId="studio"
        productName="Architectural metal & PVD surfaces"
      />
    </PageShell>
  );
}
