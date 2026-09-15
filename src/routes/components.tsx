import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { ArchitecturalSection, FinishExplorer, FinishSelector, MaterialDetailZoom, MaterialMorph, MaterialUniverse, OrbitalProcess, ProjectDepthStack, ProjectMaterialMap, SurfaceRibbon } from "@/components/steelx-interaction-lab";
import { PVDFinishWheel, FinishComparison, MaterialLens, ReflectionScanner, BrushedMetalReveal, SurfaceScrub, FinishSwatchOrbit, MaterialDistortion } from "@/components/steelx-material-batch";
import { ArchitecturalProjectCarousel, AppleProjectCards, HorizontalProjectRail, ProjectImageReveal, ProjectBeforeAfter, ProjectSpotlight, ProjectTimeline, FullscreenProjectTransition, ProjectMap } from "@/components/steelx-project-batch";
import { StickyArchitecturalStory, ParallaxBuilding, LayeredFacade, InteriorExteriorSplit, MaterialCrossSection, FacadeReveal, ScrollThroughArchitecture, PerspectiveGrid, ArchitecturalImageLens } from "@/components/steelx-architecture-batch";
import { MagneticNavigation, MaterialCursor, FloatingProjectNavigator, SplitHero, ImageDistortionHero, HorizontalScrollHero, EditorialTextReveal, MaskedHeadline, KineticProjectTitles, MagneticButton, DirectionAwareProjectCard, ImageHoverPreview, SmoothImageDisplacement, DragPhysics, ScrollVelocityEffect, PageTransitionPanel } from "@/components/steelx-premium-batch";
import { ScrollTypography, VariableWeightTypography, ImageFilledTypography, TextLoop, MagneticMenu, FocusCards, StickySectionNav, ImageSlider, AnimatedTabs, AnimatedModal, InfiniteMaterialMarquee, MovingBorderCTA, GlareProjectCard } from "@/components/steelx-editorial-batch";

const sections = [
  ["01", "Orbital Process", "Design → fabrication → building → servicing."],
  ["02", "Material Universe", "PVD finishes become the navigation."],
  ["03", "Finish Explorer", "Sweep across architectural photography."],
  ["04", "Material Morph", "Transition between surface languages."],
  ["05", "Project Material Map", "Connect finishes to project moments."],
  ["06", "Architectural Cross-section", "Reveal construction logic beneath the skin."],
  ["07", "Finish Selector", "Choose a finish through atmosphere."],
  ["08", "Project Depth Stack", "Separate the archive into layers."],
  ["09", "Material Detail Zoom", "Move from architecture into material detail."],
  ["10", "Surface Ribbon", "Move through the material archive."],
  ["11", "PVD Finish Wheel", "Circular finish selection with spatial motion."],
  ["12", "Finish Comparison", "Compare two surface languages."],
  ["13", "Material Lens", "Inspect a surface through a moving lens."],
  ["14", "Reflection Scanner", "Scan reflective architecture."],
  ["15", "Brushed Metal Reveal", "Let light reveal texture."],
  ["16", "Surface Scrub", "Scrub from neutral to finished."],
  ["17", "Finish Swatch Orbit", "Orbit finish choices around architecture."],
  ["18", "Material Distortion", "Subtle displacement for depth."],
  ["19", "Project Carousel", "Projects move like architecture."],
  ["20", "Project Spotlight Cards", "One project takes the frame."],
  ["21", "Horizontal Project Rail", "A continuous project archive."],
  ["22", "Project Image Reveal", "Reveal the project after the material study."],
  ["23", "Before + After", "Show the intervention, not only the result."],
  ["24", "Project Spotlight", "Material decisions, project by project."],
  ["25", "Project Timeline", "From drawing to installation."],
  ["26", "Fullscreen Project Transition", "Projects enter like spaces."],
  ["27", "Project Map", "A project network, not a grid."],
  ["28", "Sticky Architectural Story", "A scroll narrative for material intelligence."],
  ["29", "Parallax Building", "Depth without spectacle."],
  ["30", "Layered Facade", "Peel the facade back."],
  ["31", "Interior + Exterior", "One material language, two worlds."],
  ["32", "Material Cross-section", "See the assembly, not only the skin."],
  ["33", "Facade Reveal", "Reveal the building beneath the study."],
  ["34", "Scroll Through Architecture", "Scroll into the building."],
  ["35", "Perspective Grid", "A technical layer for material intelligence."],
  ["36", "Architectural Image Lens", "Whole building to defining detail."],
  ["37", "Magnetic Navigation", "Navigation responds to attention."],
  ["38", "Material Cursor", "The cursor becomes part of the material system."],
  ["39", "Floating Project Navigator", "Keep the archive within reach."],
  ["40", "Split Hero", "Surface is architecture."],
  ["41", "Image Distortion Hero", "Quiet motion, heavy material."],
  ["42", "Horizontal Scroll Hero", "A cinematic horizontal entry."],
  ["43", "Editorial Text Reveal", "Material-led statement reveal."],
  ["44", "Masked Headline", "Large editorial typography over material."],
  ["45", "Kinetic Project Titles", "Project names become navigation."],
  ["46", "Magnetic Button", "A restrained spring interaction."],
  ["47", "Direction-aware Project Card", "Hover direction controls the response."],
  ["48", "Image Hover Preview", "Preview projects without leaving the list."],
  ["49", "Smooth Image Displacement", "Material follows attention."],
  ["50", "Drag Physics", "Drag a project through space."],
  ["51", "Scroll Velocity", "A slow-moving typographic atmosphere."],
  ["52", "Page Transition Panel", "Pages enter like spaces."],
  ["53", "Scroll Typography", "Editorial type responds to scroll."],
  ["54", "Variable Weight Typography", "Typography changes its density."],
  ["55", "Image-filled Typography", "Material imagery fills type."],
  ["56", "Text Loop", "Cycle material language without a carousel."],
  ["57", "Magnetic Menu", "A spatial navigation reveal."],
  ["58", "Focus Cards", "Focus one project and quiet the rest."],
  ["59", "Sticky Section Navigation", "Keep the story index visible."],
  ["60", "Image Slider", "A clean editorial image sequence."],
  ["61", "Animated Tabs", "Material / fabrication / installation."],
  ["62", "Animated Project Modal", "Open project detail as a spatial layer."],
  ["63", "Infinite Material Marquee", "Finish names become atmosphere."],
  ["64", "Moving Border CTA", "A premium restrained CTA motion."],
  ["65", "Glare Project Card", "Controlled reflection on hover."],
] as const;

const demos = [
  OrbitalProcess, MaterialUniverse, FinishExplorer, MaterialMorph, ProjectMaterialMap, ArchitecturalSection, FinishSelector, ProjectDepthStack, MaterialDetailZoom, SurfaceRibbon,
  PVDFinishWheel, FinishComparison, MaterialLens, ReflectionScanner, BrushedMetalReveal, SurfaceScrub, FinishSwatchOrbit, MaterialDistortion,
  ArchitecturalProjectCarousel, AppleProjectCards, HorizontalProjectRail, ProjectImageReveal, ProjectBeforeAfter, ProjectSpotlight, ProjectTimeline, FullscreenProjectTransition, ProjectMap,
  StickyArchitecturalStory, ParallaxBuilding, LayeredFacade, InteriorExteriorSplit, MaterialCrossSection, FacadeReveal, ScrollThroughArchitecture, PerspectiveGrid, ArchitecturalImageLens,
  MagneticNavigation, MaterialCursor, FloatingProjectNavigator, SplitHero, ImageDistortionHero, HorizontalScrollHero, EditorialTextReveal, MaskedHeadline, KineticProjectTitles, MagneticButton, DirectionAwareProjectCard, ImageHoverPreview, SmoothImageDisplacement, DragPhysics, ScrollVelocityEffect, PageTransitionPanel,
  ScrollTypography, VariableWeightTypography, ImageFilledTypography, TextLoop, MagneticMenu, FocusCards, StickySectionNav, ImageSlider, AnimatedTabs, AnimatedModal, InfiniteMaterialMarquee, MovingBorderCTA, GlareProjectCard,
];

export const Route = createFileRoute("/components")({
  head: () => ({ meta: [
    { title: "STEELX — Interaction Lab" },
    { name: "description", content: "65 product-specific interactive components for STEELX architectural surfaces." },
  ]}),
  component: ComponentsPage,
});

function ComponentsPage() {
  return <PageShell>
    <main className="min-h-screen overflow-hidden bg-[#090908] text-white">
      <header className="px-6 pb-20 pt-24 md:px-10 md:pb-28 md:pt-32">
        <p className="text-[9px] uppercase tracking-[.35em] text-white/35">STEELX / Interaction Lab</p>
        <h1 className="mt-5 max-w-5xl font-serif text-6xl leading-[.88] tracking-[-.055em] md:text-[9vw]">Material is the interface.</h1>
        <p className="mt-8 max-w-2xl text-sm leading-6 text-white/45">65 live interaction primitives adapted from current animated React component patterns — rebuilt around STEELX materials, architectural photography, projects and editorial storytelling. These are references and building blocks, not generic SaaS demos.</p>
        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-[9px] uppercase tracking-[.2em] text-white/30"><span>10 original STEELX</span><span>8 material</span><span>9 projects</span><span>9 architecture</span><span>16 premium / hero</span><span>13 editorial</span></div>
      </header>

      {sections.map(([n, title, description], i) => {
        const Demo = demos[i];
        return <section key={n} className="pb-24 md:pb-32">
          <div className="mx-auto mb-8 flex max-w-[1400px] items-end justify-between gap-8 px-6 md:px-10">
            <div><p className="text-[9px] uppercase tracking-[.3em] text-white/30">{n} / STEELX component</p><h2 className="mt-3 font-serif text-4xl tracking-[-.035em] md:text-6xl">{title}</h2></div>
            <p className="hidden max-w-sm text-right text-xs leading-5 text-white/35 md:block">{description}</p>
          </div>
          <Demo />
        </section>;
      })}

      <footer className="border-t border-white/10 px-6 py-20 md:px-10">
        <p className="text-[9px] uppercase tracking-[.3em] text-white/30">STEELX / Interaction Lab / 65</p>
        <p className="mt-5 max-w-4xl font-serif text-4xl leading-tight text-white/85 md:text-6xl">The library is now large enough to choose the final language for the real STEELX pages. The next production pass should promote the strongest interactions into the actual homepage, materials, projects and case-study routes using the final STEELX photography.</p>
      </footer>
    </main>
  </PageShell>;
}
