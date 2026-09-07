import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/page-shell";
import { EnquiryModal } from "@/components/enquiry-modal";
import { ScrollProgress } from "@/components/motion";
import {
  ExhibitionCTA,
  ExhibitionHero,
  Experimentation,
  FeaturedInstallation,
  Manifesto,
  SheetToSpaceStatement,
} from "@/components/exhibitions/opening-sections";
import {
  ExhibitionArchive,
  MakingTimeline,
  StorySequence,
  SurfaceStudies,
} from "@/components/exhibitions/index-sections";

const title = "Exhibitions — Material in dialogue | STEELX PVD";
const description =
  "STEELX installations and material studies: PVD stainless steel as an architectural medium, where surface, light, structure and movement become part of the space.";

export const Route = createFileRoute("/exhibitions")({
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
  component: ExhibitionsPage,
});

function ExhibitionsPage() {
  const [enquiry, setEnquiry] = useState(false);

  return (
    <PageShell overlayHeader>
      <ScrollProgress />
      <ExhibitionHero />
      <Manifesto />
      <FeaturedInstallation />
      <Experimentation />
      <ExhibitionArchive />
      <StorySequence />
      <SurfaceStudies />
      <MakingTimeline />
      <SheetToSpaceStatement />
      <ExhibitionCTA onEnquire={() => setEnquiry(true)} />
      <EnquiryModal
        open={enquiry}
        onClose={() => setEnquiry(false)}
        productId="exhibitions"
        productName="STEELX Exhibitions & Installations"
      />
    </PageShell>
  );
}
