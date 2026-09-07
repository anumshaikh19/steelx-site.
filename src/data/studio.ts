import studioHero from "@/assets/studio-hero.jpg";
import macroFinish from "@/assets/macro-finish.jpg";
import plasmaChamber from "@/assets/plasma-chamber.jpg";
import facadeNight from "@/assets/facade-night.jpg";
import metalHero from "@/assets/metal-hero.jpg";
import pvdChamber from "@/assets/pvd-chamber.jpg";
import polishing from "@/assets/polishing.jpg";
import sheetPrep from "@/assets/sheet-prep.jpg";
import inspection from "@/assets/inspection.jpg";
import installation from "@/assets/installation.jpg";
import lobby from "@/assets/install-lobby.jpg";
import meshHero from "@/assets/mesh-hero.jpg";
import meshApplication from "@/assets/mesh-application.jpg";
import rawSteel from "@/assets/raw-steel.jpg";
import pvdSteel from "@/assets/pvd-steel.jpg";
import swatches from "@/assets/finish-swatches.jpg";
import detailA from "@/assets/proj-detail-a.jpg";
import detailB from "@/assets/proj-detail-b.jpg";

export const studioImages = {
  studioHero,
  macroFinish,
  plasmaChamber,
  facadeNight,
  metalHero,
  pvdChamber,
  polishing,
  sheetPrep,
  inspection,
  installation,
  lobby,
  meshHero,
  meshApplication,
  rawSteel,
  pvdSteel,
  swatches,
  detailA,
  detailB,
};

/** Hero technical labels shown around the edge of the cinematic opener. */
export const heroLabels = [
  "PVD",
  "STAINLESS STEEL",
  "ARCHITECTURAL SURFACES",
  "SS304 / SS316",
  "RAJKOT, INDIA",
];

/**
 * Company statistics. Values are editable data fields — update these with
 * verified company numbers rather than editing the component.
 */
export const studioStats = [
  { value: 15, suffix: "+", label: "Years in metal" },
  { value: 500, suffix: "+", label: "Projects delivered" },
  { value: 100, suffix: "+", label: "Cities reached" },
  { value: 9, suffix: "+", label: "PVD finishes" },
  { value: 62, suffix: "", label: "People on the floor" },
];

export const timeline = [
  {
    id: "foundation",
    stage: "Foundation",
    title: "A single polishing line",
    text: "STEELX begins as a stainless steel finishing workshop serving local fabricators and joinery contractors.",
    image: rawSteel,
    alt: "Raw stainless steel sheet stock",
  },
  {
    id: "material",
    stage: "Material expertise",
    title: "Grades, tempers, textures",
    text: "The workshop specialises: 304 and 316 sheet, hairline, vibration, bead-blast and mirror surfaces built to repeatable targets.",
    image: sheetPrep,
    alt: "Sheet preparation line",
  },
  {
    id: "fabrication",
    stage: "Fabrication",
    title: "From sheet to assembly",
    text: "Forming, welding and precision polishing are brought in-house so joints stop showing in the finished surface.",
    image: polishing,
    alt: "Precision polishing",
  },
  {
    id: "pvd",
    stage: "PVD technology",
    title: "Colour in a vacuum",
    text: "Vacuum deposition arrives on the floor. Colour becomes a specification with a signed control sample behind it.",
    image: plasmaChamber,
    alt: "PVD deposition plasma inside the chamber",
  },
  {
    id: "architecture",
    stage: "Architectural applications",
    title: "Facades, ceilings, screens",
    text: "Work shifts from product to architecture — cladding, mesh, balustrades and elevator interiors at building scale.",
    image: facadeNight,
    alt: "Bronze PVD facade at night",
  },
  {
    id: "international",
    stage: "International projects",
    title: "Specified beyond one market",
    text: "Hospitality and retail groups begin specifying STEELX surfaces across multiple cities and markets.",
    image: lobby,
    alt: "Installed lobby cladding",
  },
  {
    id: "today",
    stage: "Today",
    title: "One team, sheet to site",
    text: "Preparation, coating, fabrication and installation answer to the same team — which is what keeps colour consistent.",
    image: metalHero,
    alt: "Champagne coated architectural surface",
  },
];

export const practices = [
  {
    n: "01",
    title: "Architectural metal",
    text: "Stainless steel surfaces and architectural metal solutions — cladding, ceilings, screens, balustrades and joinery metal.",
    image: facadeNight,
    alt: "Architectural metal facade",
  },
  {
    n: "02",
    title: "PVD finishing",
    text: "Vacuum-deposited finishes for premium architectural applications, matched to a signed project control sample.",
    image: plasmaChamber,
    alt: "PVD coating chamber",
  },
  {
    n: "03",
    title: "Custom fabrication",
    text: "Precision fabrication developed around project-specific requirements, resolved at shop-drawing stage.",
    image: polishing,
    alt: "Fabrication and polishing",
  },
  {
    n: "04",
    title: "Design collaboration",
    text: "Working directly with architects, interior designers and project teams from concept through installation.",
    image: sheetPrep,
    alt: "Material samples and preparation",
  },
];

export const collaborators = [
  "Architects",
  "Interior designers",
  "Hospitality designers",
  "Retail designers",
  "Developers",
  "Contractors",
  "Design studios",
];

export const collaborationGallery = [
  { src: swatches, alt: "PVD finish sample swatches", label: "Finish samples" },
  { src: sheetPrep, alt: "Sheet preparation", label: "Material prep" },
  { src: detailA, alt: "Metal detail junction", label: "Detailing" },
  { src: meshApplication, alt: "Mesh screen application", label: "Screens" },
  { src: inspection, alt: "Inspection of a coated panel", label: "Approvals" },
  { src: lobby, alt: "Installed lobby surface", label: "Installed" },
  { src: detailB, alt: "Shadow gap detail", label: "Shadow gaps" },
  { src: installation, alt: "Panels being installed", label: "Site" },
];

export const pvdSteps = [
  { id: "prep", n: "01", title: "Surface preparation", text: "Grinding, brushing, blasting or polishing to the specified texture across the whole batch.", image: sheetPrep, alt: "Surface preparation" },
  { id: "clean", n: "02", title: "Cleaning", text: "Ultrasonic and solvent cleaning. No bare-handed contact with the surface from here on.", image: inspection, alt: "Cleaning and handling" },
  { id: "chamber", n: "03", title: "Vacuum chamber", text: "Panels are racked and the chamber is evacuated to working vacuum before any power is applied.", image: pvdChamber, alt: "Vacuum chamber" },
  { id: "ion", n: "04", title: "Ionisation", text: "The target metal is bombarded until it releases ions into the chamber atmosphere.", image: plasmaChamber, alt: "Plasma inside the chamber" },
  { id: "dep", n: "05", title: "PVD deposition", text: "Ions condense onto the panel; reactive gas sets the colour as the layer builds in microns.", image: pvdSteel, alt: "Coated stainless steel" },
  { id: "colour", n: "06", title: "Colour / finish", text: "Tone is verified against the signed project control sample under controlled lighting.", image: macroFinish, alt: "Macro of the finished surface" },
  { id: "qc", n: "07", title: "Quality inspection", text: "Adhesion, thickness and colour are checked before the batch is released for crating.", image: inspection, alt: "Quality inspection" },
];

export const machines = [
  { name: "PVD vacuum chamber", purpose: "Coating", text: "Deposits the colour layer in vacuum against the project control sample.", image: pvdChamber, alt: "PVD vacuum chamber" },
  { name: "Surface preparation line", purpose: "Texture", text: "Establishes hairline, vibration, bead-blast or mirror before coating.", image: sheetPrep, alt: "Preparation line" },
  { name: "Precision polishing", purpose: "Finishing", text: "Brings welded and formed assemblies to a single continuous surface.", image: polishing, alt: "Polishing station" },
  { name: "Cleaning system", purpose: "Preparation", text: "Removes oils and particles so the coating bonds to bare metal.", image: rawSteel, alt: "Cleaning and degreasing" },
  { name: "Inspection station", purpose: "Verification", text: "Colour, thickness and adhesion verified under standard lighting.", image: inspection, alt: "Inspection station" },
  { name: "Fabrication bay", purpose: "Assembly", text: "Forming, welding and panel build-up ahead of finishing and coating.", image: installation, alt: "Fabrication and assembly" },
];

/**
 * Reels. `videoSrc` is intentionally undefined until real footage is supplied —
 * drop an mp4/webm path in and the component plays it. No placeholder URLs.
 */
export const reels: { id: string; label: string; poster: string; alt: string; videoSrc?: string }[] = [
  { id: "chamber", label: "PVD chamber", poster: plasmaChamber, alt: "PVD chamber during deposition" },
  { id: "prep", label: "Sheet preparation", poster: sheetPrep, alt: "Stainless steel sheet preparation" },
  { id: "polish", label: "Polishing", poster: polishing, alt: "Precision polishing" },
  { id: "colour", label: "Colour finishing", poster: macroFinish, alt: "Macro of PVD colour" },
  { id: "install", label: "Installation", poster: installation, alt: "Installation on site" },
  { id: "surface", label: "Finished surface", poster: lobby, alt: "Finished architectural surface" },
];

export const sheetToSpace = [
  { id: "raw", index: "01", title: "Raw material", text: "Mill sheet arrives in 304 or 316 and is checked for flatness and surface condition.", image: rawSteel, alt: "Raw stainless steel" },
  { id: "prep", index: "02", title: "Preparation", text: "The specified texture is established across the batch — the stage that decides the result.", image: sheetPrep, alt: "Preparation" },
  { id: "fab", index: "03", title: "Fabrication", text: "Formed and welded assemblies are ground flush so no joint survives into the finish.", image: polishing, alt: "Fabrication" },
  { id: "pvd", index: "04", title: "PVD", text: "In vacuum, vaporised metal condenses onto the panel and bonds atomically.", image: plasmaChamber, alt: "PVD" },
  { id: "qc", index: "05", title: "Quality", text: "Every batch is compared to the signed control sample under standard lighting.", image: inspection, alt: "Quality control" },
  { id: "install", index: "06", title: "Installation", text: "Crated in installation sequence, film intact, fitted by our own teams.", image: installation, alt: "Installation" },
  { id: "space", index: "07", title: "Architectural space", text: "The surface stops being material and becomes part of the building.", image: lobby, alt: "Finished space" },
];

export const detailGallery = [
  { src: macroFinish, alt: "Macro of brushed PVD surface" },
  { src: pvdSteel, alt: "PVD coated stainless steel" },
  { src: swatches, alt: "Finish sample swatches" },
  { src: meshHero, alt: "Woven stainless steel mesh" },
  { src: detailA, alt: "Metal junction detail" },
  { src: plasmaChamber, alt: "Deposition plasma" },
  { src: polishing, alt: "Polishing detail" },
  { src: rawSteel, alt: "Raw steel surface" },
  { src: detailB, alt: "Shadow gap detail" },
  { src: meshApplication, alt: "Mesh screen in an interior" },
  { src: facadeNight, alt: "Facade fins at night" },
  { src: lobby, alt: "Installed lobby cladding" },
];

export const principles = [
  { n: "01", title: "Precision", text: "Shop tolerance held at ±0.5 mm and stated on every drawing we issue." },
  { n: "02", title: "Consistency", text: "Batched by elevation against one signed control sample, so colour holds across a facade." },
  { n: "03", title: "Customisation", text: "Tones developed against a submitted sample and locked as a project-specific target." },
  { n: "04", title: "Material expertise", text: "Grade, temper and texture chosen for the environment rather than the photograph." },
  { n: "05", title: "Design collaboration", text: "Modules, returns and grain direction resolved with the design team before tender." },
  { n: "06", title: "Project support", text: "Shop drawings, samples, sequenced crating and our own installation crews." },
];

export const sectors = [
  "Architects",
  "Interior designers",
  "Hospitality",
  "Retail",
  "Commercial",
  "Residential",
];

/** Location markers positioned on a stylised India silhouette (percentage coords). */
export const locations = [
  { city: "Rajkot", note: "Workshop & PVD facility", x: 22, y: 44 },
  { city: "Ahmedabad", note: "Hospitality & retail projects", x: 26, y: 40 },
  { city: "Mumbai", note: "Commercial & residential", x: 27, y: 55 },
  { city: "Pune", note: "Interiors & joinery metal", x: 30, y: 58 },
  { city: "Bengaluru", note: "Retail & workplace", x: 37, y: 71 },
  { city: "Hyderabad", note: "Facades & lobbies", x: 41, y: 62 },
  { city: "Chennai", note: "Hospitality interiors", x: 44, y: 76 },
  { city: "Kochi", note: "Coastal grade projects", x: 34, y: 82 },
  { city: "Delhi NCR", note: "Commercial & institutional", x: 38, y: 24 },
  { city: "Jaipur", note: "Hospitality", x: 32, y: 30 },
  { city: "Kolkata", note: "Commercial interiors", x: 62, y: 45 },
  { city: "Goa", note: "Resort & coastal", x: 26, y: 66 },
];

export const team = [
  { name: "Aarav Mehta", role: "Founder & Managing Director", speciality: "Material strategy", image: metalHero },
  { name: "Ishita Rao", role: "Design & Specification Lead", speciality: "Architect collaboration", image: sheetPrep },
  { name: "Devansh Patel", role: "Head of PVD Coating", speciality: "Colour library & batch control", image: pvdChamber },
  { name: "Meera Nair", role: "Quality & Metallurgy", speciality: "Adhesion, thickness, grade", image: inspection },
  { name: "Rohan Shah", role: "Fabrication Manager", speciality: "Forming, welding, finishing", image: polishing },
  { name: "Kavya Iyer", role: "Installation Lead", speciality: "Sequencing & site fit", image: installation },
];
