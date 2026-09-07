import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import {
  CategoryNav,
  ColourCollection,
  FeaturedMaterial,
  FinishSelector,
  MaterialSample,
  MaterialsHero,
  MaterialsIntro,
} from "@/components/materials/opening";
import {
  Applications,
  Combinations,
  EditorialStatement,
  FinalCta,
  MaterialFinder,
  MaterialStories,
  ProjectApplications,
  QualityControl,
  SampleRequest,
  Specification,
} from "@/components/materials/closing";

const title = "Materials — PVD Coated Stainless Steel Surfaces | STEELX";
const description =
  "Browse the STEELX material library: PVD colours, finishes and textures in 304/316 stainless steel for facades, interiors, hospitality and retail. Request physical samples.";

export const Route = createFileRoute("/materials")({
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
  component: MaterialsPage,
});

function MaterialsPage() {
  return (
    <div className="theme-material min-h-screen">
      <SiteHeader />
      <main>
        <MaterialsHero />
        <CategoryNav />
        <MaterialsIntro />
        <ColourCollection />
        <FeaturedMaterial />
        <FinishSelector />
        <MaterialSample />
        <Combinations />
        <Applications />
        <MaterialStories />
        <ProjectApplications />
        <MaterialFinder />
        <SampleRequest />
        <Specification />
        <QualityControl />
        <EditorialStatement />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}
