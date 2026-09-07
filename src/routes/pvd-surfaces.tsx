import { createFileRoute } from "@tanstack/react-router";
import type { ReactElement } from "react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ScrollProgress } from "@/components/motion";
import {
  EditableSection,
  SiteEditorProvider,
  type EditorSection,
  type PageDocument,
} from "@/components/site-editor";
import {
  ApplicationChapters,
  ArchitectureReveal,
  ChapterIndicator,
  ColourChapter,
  MacroToArchitecture,
  PvdHero,
  TextureChapter,
  ToneTransformation,
} from "@/components/pvd/act-one";
import {
  DeepDetail,
  EngineeredPrecision,
  FinalCta,
  FinalMoment,
  FinishComparison,
  Longevity,
  MaterialFinder,
  MaterialLineup,
  ProjectProof,
  PvdScience,
  SheetToSurface,
  Specification,
} from "@/components/pvd/act-two";

const title = "PVD Surfaces — Architectural Stainless Steel | STEELX";
const description =
  "STEELX PVD surfaces: colour, texture and performance engineered into architectural stainless steel. Explore finishes, applications, the PVD process and request samples.";

export const Route = createFileRoute("/pvd-surfaces")({
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
  component: PvdSurfacesPage,
});

function PvdSurfacesPage() {
  const defaultSections: EditorSection[] = [
    { id: "hero", type: "hero", visible: true },
    { id: "tone-transformation", type: "tone-transformation", visible: true },
    { id: "colour", type: "colour", visible: true },
    { id: "texture", type: "texture", visible: true },
    { id: "macro-architecture", type: "macro-architecture", visible: true },
    { id: "architecture", type: "architecture", visible: true },
    { id: "applications", type: "applications", visible: true },
    { id: "science", type: "science", visible: true },
    { id: "sheet-to-surface", type: "sheet-to-surface", visible: true },
    { id: "precision", type: "precision", visible: true },
    { id: "lineup", type: "lineup", visible: true },
    { id: "comparison", type: "comparison", visible: true },
    { id: "finder", type: "finder", visible: true },
    { id: "proof", type: "proof", visible: true },
    { id: "detail", type: "detail", visible: true },
    { id: "longevity", type: "longevity", visible: true },
    { id: "specification", type: "specification", visible: true },
    { id: "final-moment", type: "final-moment", visible: true },
    { id: "final-cta", type: "final-cta", visible: true },
  ];
  const defaults: PageDocument = { sections: defaultSections, overrides: {} };

  return (
    <SiteEditorProvider slug="pvd-surfaces" defaults={defaults}>
      {(page) => (
        <div className="pvd-film min-h-screen bg-metal-black">
          <span aria-hidden="true" className="pvd-grain" />
          <span aria-hidden="true" className="pvd-vignette" />
          <ScrollProgress />
          <SiteHeader overlay />
          <ChapterIndicator />
          <main>
            {page.sections.filter((section) => section.visible).map((section) => {
              const Section = sectionRegistry[section.type];
              return Section ? <EditableSection key={section.id} id={section.id}><Section /></EditableSection> : null;
            })}
          </main>
          <SiteFooter />
        </div>
      )}
    </SiteEditorProvider>
  );
}

const sectionRegistry: Record<string, () => ReactElement> = {
  hero: PvdHero,
  "tone-transformation": ToneTransformation,
  colour: ColourChapter,
  texture: TextureChapter,
  "macro-architecture": MacroToArchitecture,
  architecture: ArchitectureReveal,
  applications: ApplicationChapters,
  science: PvdScience,
  "sheet-to-surface": SheetToSurface,
  precision: EngineeredPrecision,
  lineup: MaterialLineup,
  comparison: FinishComparison,
  finder: MaterialFinder,
  proof: ProjectProof,
  detail: DeepDetail,
  longevity: Longevity,
  specification: Specification,
  "final-moment": FinalMoment,
  "final-cta": FinalCta,
};
