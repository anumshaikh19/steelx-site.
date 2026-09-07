import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/page-shell";
import { EnquiryModal } from "@/components/enquiry-modal";
import { ScrollProgress } from "@/components/motion";
import { CaseHero, CaseIntro, ImageNarrative } from "@/components/case-study/opening";
import {
  ClosingStatement,
  ExploreMore,
  LightStatement,
  MaterialPanel3D,
  NextProject,
  ProjectFacts,
  ProjectStory,
  SheetToSpace,
  SurfaceStudy,
  Venue,
} from "@/components/case-study/detail";

const title = "Material / Light / Space — Exhibition | STEELX PVD Surfaces";
const description =
  "A STEELX exhibition case study in Mumbai, 2026: PVD-coated stainless steel explored as an architectural medium where surface, reflection, texture and light shape the space.";

export const Route = createFileRoute("/material-light-space")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CaseStudyPage,
});

function CaseStudyPage() {
  const [enquiry, setEnquiry] = useState(false);

  return (
    <PageShell overlayHeader>
      <ScrollProgress />
      <CaseHero />
      <CaseIntro />
      <ImageNarrative />
      <ProjectStory />
      <SurfaceStudy />
      <MaterialPanel3D />
      <LightStatement />
      <SheetToSpace />
      <ProjectFacts />
      <Venue />
      <ExploreMore />
      <NextProject />
      <ClosingStatement onEnquire={() => setEnquiry(true)} />
      <EnquiryModal
        open={enquiry}
        onClose={() => setEnquiry(false)}
        productId="material-light-space"
        productName="Material / Light / Space — Exhibition"
      />
    </PageShell>
  );
}
