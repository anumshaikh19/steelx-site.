import capHero from "@/assets/cap-hero.jpg";
import capJoinery from "@/assets/cap-joinery.jpg";
import capSculpture from "@/assets/cap-sculpture.jpg";
import macroFinish from "@/assets/macro-finish.jpg";
import facadeNight from "@/assets/facade-night.jpg";
import meshHero from "@/assets/mesh-hero.jpg";
import meshApplication from "@/assets/mesh-application.jpg";
import installation from "@/assets/installation.jpg";
import inspection from "@/assets/inspection.jpg";
import sheetPrep from "@/assets/sheet-prep.jpg";
import rawSteel from "@/assets/raw-steel.jpg";
import pvdChamber from "@/assets/pvd-chamber.jpg";
import pvdSteel from "@/assets/pvd-steel.jpg";
import polishing from "@/assets/polishing.jpg";
import swatches from "@/assets/finish-swatches.jpg";
import lobby from "@/assets/install-lobby.jpg";
import interiors from "@/assets/proj-interiors.jpg";
import commercial from "@/assets/proj-commercial.jpg";
import bungalow from "@/assets/proj-bungalow.jpg";
import mixeduse from "@/assets/proj-mixeduse.jpg";
import detailA from "@/assets/proj-detail-a.jpg";
import detailB from "@/assets/proj-detail-b.jpg";

export const capImages = {
  capHero,
  capJoinery,
  capSculpture,
  macroFinish,
  facadeNight,
  meshHero,
  meshApplication,
  installation,
  inspection,
  sheetPrep,
  rawSteel,
  pvdChamber,
  pvdSteel,
  polishing,
  swatches,
  lobby,
  interiors,
  commercial,
  bungalow,
  mixeduse,
  detailA,
  detailB,
};

/** Editorial index rows — section 02. */
export const capabilityIndex = [
  {
    id: "pvd",
    number: "01",
    title: "PVD Coating",
    text: "Colour bonded in vacuum.",
    image: macroFinish,
    alt: "Macro detail of a champagne PVD coated stainless steel surface",
  },
  {
    id: "surfaces",
    number: "02",
    title: "Architectural Surfaces",
    text: "Facades, cladding, ceilings and wall systems.",
    image: facadeNight,
    alt: "PVD stainless steel facade lit at night",
  },
  {
    id: "fabrication",
    number: "03",
    title: "Custom Fabrication",
    text: "Bespoke metalwork and architectural components.",
    image: polishing,
    alt: "Fabricator finishing a stainless steel component",
  },
  {
    id: "mesh",
    number: "04",
    title: "Decorative Mesh",
    text: "Woven stainless systems for interiors and facades.",
    image: meshHero,
    alt: "Woven stainless steel decorative mesh",
  },
  {
    id: "joinery",
    number: "05",
    title: "Metal Joinery",
    text: "Reception desks, trims, frames and integrated details.",
    image: capJoinery,
    alt: "Stainless steel reception desk with bronze PVD trims",
  },
  {
    id: "sculptural",
    number: "06",
    title: "Sculptural Metal",
    text: "Complex forms and bespoke architectural elements.",
    image: capSculpture,
    alt: "Faceted stainless steel sculptural form in a dark gallery",
  },
  {
    id: "installation",
    number: "07",
    title: "Installation",
    text: "Sequenced delivery and specialist site installation.",
    image: installation,
    alt: "Installation team fitting metal panels on site",
  },
];

export const architecturalScope = [
  "Facades",
  "Wall cladding",
  "Ceilings",
  "Column casings",
  "Lift panels",
  "Feature walls",
  "Architectural screens",
];

export const fabricationSteps = [
  { id: "measure", label: "Measure", note: "Survey and setting-out against site reality." },
  { id: "cut", label: "Cut", note: "Laser and shear cutting to fabrication drawing." },
  { id: "form", label: "Form", note: "Press-brake folding with grain direction held." },
  { id: "weld", label: "Weld", note: "Seam welded, dressed and blended back to surface." },
  { id: "finish", label: "Finish", note: "Grain re-established, then coated." },
  { id: "assemble", label: "Assemble", note: "Dry-assembled and checked before crating." },
];

export const meshApplications = [
  "Partitions",
  "Facades",
  "Ceilings",
  "Balustrades",
  "Screens",
  "Feature installations",
];

export const joineryStrip = [
  { id: "j1", image: capJoinery, caption: "Reception desk / bronze PVD trim", alt: "Bespoke stainless reception desk detail" },
  { id: "j2", image: detailA, caption: "Shadow-gap frame / hairline", alt: "Hairline stainless frame detail" },
  { id: "j3", image: detailB, caption: "Door pull / gunmetal", alt: "Gunmetal PVD door pull detail" },
  { id: "j4", image: interiors, caption: "Counter front / champagne", alt: "Champagne PVD counter front" },
  { id: "j5", image: lobby, caption: "Lift portal / mirror", alt: "Mirror finish lift portal" },
  { id: "j6", image: polishing, caption: "Handrail / vibration", alt: "Vibration finish handrail being polished" },
];

export const installationSequence = [
  { id: "s1", number: "01", label: "Site measure", note: "Openings and tolerances recorded before fabrication closes." },
  { id: "s2", number: "02", label: "Crating", note: "Protected, edge-guarded and marked to installation order." },
  { id: "s3", number: "03", label: "Delivery", note: "Sequenced to the site programme, not to the factory's." },
  { id: "s4", number: "04", label: "Installation", note: "Specialist teams set line, level and shadow gap." },
  { id: "s5", number: "05", label: "Protection removal", note: "Film lifted only once wet trades have left the area." },
  { id: "s6", number: "06", label: "Final inspection", note: "Signed off against the approved control sample." },
];

export const sheetToSurface = [
  {
    id: "raw",
    index: "01",
    title: "Raw steel",
    text: "SS304 and SS316 mill sheet received, batch recorded and checked for coil direction and flatness.",
    image: rawSteel,
    alt: "Stacked stainless steel mill sheet",
  },
  {
    id: "prep",
    index: "02",
    title: "Preparation",
    text: "Surface is established first — hairline, mirror, vibration or bead blast. Colour cannot correct a poor substrate.",
    image: sheetPrep,
    alt: "Stainless steel sheet being prepared",
  },
  {
    id: "pvd",
    index: "03",
    title: "PVD",
    text: "Sheet is loaded into vacuum and the colour layer is deposited atom by atom, bonded rather than applied.",
    image: pvdChamber,
    alt: "PVD vacuum coating chamber",
  },
  {
    id: "inspection",
    index: "04",
    title: "Inspection",
    text: "Colour, thickness, adhesion and dimension are checked against the agreed control sample.",
    image: inspection,
    alt: "Quality inspection of a coated panel",
  },
  {
    id: "install",
    index: "05",
    title: "Installation",
    text: "Crated in sequence and installed by teams who understand how the surface reads on site.",
    image: installation,
    alt: "Panels being installed on site",
  },
];

export const controlPoints = [
  { id: "material", label: "Material", note: "Grade, batch and coil direction recorded on receipt." },
  { id: "surface", label: "Surface", note: "Grain depth and consistency checked before coating." },
  { id: "colour", label: "Colour", note: "Read against the approved sample under fixed lighting." },
  { id: "thickness", label: "Thickness", note: "Coating layer verified across the load, not one corner." },
  { id: "adhesion", label: "Adhesion", note: "Cross-hatch tested per batch." },
  { id: "dimension", label: "Dimension", note: "Panels checked to fabrication drawing tolerance." },
  { id: "installation", label: "Installation", note: "Line, level and shadow gap signed off on site." },
];

export const applications = [
  { id: "hospitality", label: "Hospitality", project: "The Vira Hotel Lobby", place: "Dubai, UAE", slug: "the-vira-hotel-lobby", image: lobby },
  { id: "retail", label: "Retail", project: "Aurum Flagship Store", place: "Mumbai, India", slug: "aurum-flagship-store", image: interiors },
  { id: "facades", label: "Facades", project: "Meridian Tower Facade", place: "Singapore", slug: "meridian-tower-facade", image: mixeduse },
  { id: "luxury", label: "Luxury interiors", project: "Harbour House Penthouse", place: "Mumbai, India", slug: "harbour-house-penthouse", image: capJoinery },
  { id: "commercial", label: "Commercial", project: "Qudrati Greens", place: "Indore, India", slug: "qudrati-greens", image: commercial },
  { id: "residential", label: "Residential", project: "Nikhil Gupta Residence", place: "Rajkot, India", slug: "nikhil-gupta-residence", image: bungalow },
];

export const selectedProjects = [
  { number: "01", slug: "the-vira-hotel-lobby", title: "The Vira Hotel Lobby", place: "Dubai, UAE", spec: "Champagne PVD / Hairline / Mesh", image: lobby },
  { number: "02", slug: "aurum-flagship-store", title: "Aurum Flagship Store", place: "Mumbai, India", spec: "Rose Gold PVD", image: interiors },
  { number: "03", slug: "meridian-tower-facade", title: "Meridian Tower", place: "Singapore", spec: "Gunmetal / Bead Blast", image: mixeduse },
  { number: "04", slug: "nikhil-gupta-residence", title: "Nikhil Gupta Residence", place: "Rajkot, India", spec: "Black PVD", image: bungalow },
  { number: "05", slug: "atelier-nine-interiors", title: "Atelier Nine", place: "London, UK", spec: "Champagne / Vibration", image: detailA },
];

export const principles = [
  {
    number: "01",
    title: "Material intelligence",
    text: "We specify grade, surface and colour together, because on stainless steel they are one decision, not three.",
  },
  {
    number: "02",
    title: "Fabrication precision",
    text: "Folds, welds and joints are planned around grain direction so the finished assembly reads as one surface.",
  },
  {
    number: "03",
    title: "Colour consistency",
    text: "Every load is coated against an approved control sample and rejected if it drifts, however small the shift.",
  },
  {
    number: "04",
    title: "Site responsibility",
    text: "We crate, sequence and install our own work — the surface is our responsibility until sign-off.",
  },
];
