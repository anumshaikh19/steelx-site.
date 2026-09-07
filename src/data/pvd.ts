import macroFinish from "@/assets/macro-finish.jpg";
import matHero from "@/assets/mat-hero.jpg";
import matChampagne from "@/assets/mat-champagne.jpg";
import matSamples from "@/assets/mat-samples.jpg";
import metalHero from "@/assets/metal-hero.jpg";
import pvdSteel from "@/assets/pvd-steel.jpg";
import pvdChamber from "@/assets/pvd-chamber.jpg";
import plasmaChamber from "@/assets/plasma-chamber.jpg";
import rawSteel from "@/assets/raw-steel.jpg";
import sheetPrep from "@/assets/sheet-prep.jpg";
import polishing from "@/assets/polishing.jpg";
import inspection from "@/assets/inspection.jpg";
import installation from "@/assets/installation.jpg";
import lobby from "@/assets/install-lobby.jpg";
import facadeNight from "@/assets/facade-night.jpg";
import meshHero from "@/assets/mesh-hero.jpg";
import meshApplication from "@/assets/mesh-application.jpg";
import interiors from "@/assets/proj-interiors.jpg";
import commercial from "@/assets/proj-commercial.jpg";
import bungalow from "@/assets/proj-bungalow.jpg";
import mixeduse from "@/assets/proj-mixeduse.jpg";
import detailA from "@/assets/proj-detail-a.jpg";
import detailB from "@/assets/proj-detail-b.jpg";
import capJoinery from "@/assets/cap-joinery.jpg";
import capSculpture from "@/assets/cap-sculpture.jpg";
import studioHero from "@/assets/studio-hero.jpg";

export const pvdImages = {
  macro: macroFinish,
  hero: matHero,
  champagne: matChampagne,
  samples: matSamples,
  steel: pvdSteel,
  metal: metalHero,
  architecture: lobby,
  facade: facadeNight,
  cta: mixeduse,
  studio: studioHero,
};

/** Section index used by the floating scroll indicator. */
export const chapters = [
  { id: "surface", label: "Surface" },
  { id: "colour", label: "Colour" },
  { id: "texture", label: "Texture" },
  { id: "architecture", label: "Architecture" },
  { id: "applications", label: "Applications" },
  { id: "process", label: "Process" },
  { id: "collection", label: "Collection" },
  { id: "specify", label: "Specify" },
] as const;

export type Tone = {
  id: string;
  name: string;
  /** Reflective gradient used by the CSS material object. */
  sheen: string;
  metal: string;
  note: string;
  textures: string[];
  applications: string[];
  image: string;
};

export const tones: Tone[] = [
  {
    id: "silver",
    name: "Silver",
    sheen: "linear-gradient(118deg,#6c7175,#e6ebee 30%,#9aa2a7 52%,#f4f7f9 72%,#5f6468)",
    metal: "#A7A39B",
    note: "Uncoated stainless in its natural state — neutral, cool, endlessly adaptable.",
    textures: ["Hairline", "Mirror", "Vibration", "Bead blast"],
    applications: ["Facades", "Ceilings", "Screens"],
    image: pvdSteel,
  },
  {
    id: "champagne",
    name: "Champagne",
    sheen: "linear-gradient(118deg,#8a7048,#f0dcb4 30%,#c7a877 52%,#f6ecd6 72%,#8a7048)",
    metal: "#C7B58F",
    note: "Warm without reading as gold. The most specified tone across hospitality work.",
    textures: ["Hairline", "Vibration", "Satin"],
    applications: ["Hospitality", "Luxury interiors", "Joinery"],
    image: matChampagne,
  },
  {
    id: "gold",
    name: "Gold",
    sheen: "linear-gradient(118deg,#8a6a1c,#f5cd5f 30%,#c79a29 52%,#ffe9a3 72%,#8a6a1c)",
    metal: "#C79A29",
    note: "A saturated yellow tone that holds its warmth under low interior light.",
    textures: ["Mirror", "Hairline"],
    applications: ["Retail", "Feature walls"],
    image: matHero,
  },
  {
    id: "rose",
    name: "Rose Gold",
    sheen: "linear-gradient(118deg,#8c4f42,#f0b4a0 30%,#c98873 52%,#fbd8c9 72%,#8c4f42)",
    metal: "#C98873",
    note: "Pink-shifted copper. Quiet at distance, precise in close detail.",
    textures: ["Hairline", "Satin"],
    applications: ["Retail", "Residential"],
    image: matSamples,
  },
  {
    id: "bronze",
    name: "Bronze",
    sheen: "linear-gradient(118deg,#3a2718,#a97f4f 30%,#6d4c2c 52%,#c99d68 72%,#3a2718)",
    metal: "#765A43",
    note: "Deep and architectural; keeps its reading at facade distance.",
    textures: ["Bead blast", "Vibration", "Hairline"],
    applications: ["Facades", "Commercial"],
    image: facadeNight,
  },
  {
    id: "gunmetal",
    name: "Gunmetal",
    sheen: "linear-gradient(118deg,#33383a,#8e979b 30%,#4c5356 52%,#a8b1b5 72%,#2c3133)",
    metal: "#555A5C",
    note: "A cool graphite tone that reads as structure rather than ornament.",
    textures: ["Bead blast", "Hairline"],
    applications: ["Commercial", "Screens", "Facades"],
    image: commercial,
  },
  {
    id: "black",
    name: "Black",
    sheen: "linear-gradient(118deg,#0b0b0b,#4b4b4b 30%,#161616 52%,#5d5d5d 72%,#090909)",
    metal: "#202020",
    note: "Near-absolute darkness with a controlled specular edge.",
    textures: ["Mirror", "Bead blast", "Satin"],
    applications: ["Luxury interiors", "Joinery", "Screens"],
    image: bungalow,
  },
  {
    id: "titanium",
    name: "Titanium",
    sheen: "linear-gradient(118deg,#4f5559,#c3c8cb 30%,#7d8489 52%,#d7dcdf 72%,#484d51)",
    metal: "#8d9296",
    note: "A muted metallic grey — technical, restrained, quietly reflective.",
    textures: ["Satin", "Bead blast", "Hairline"],
    applications: ["Facades", "Institutional", "Ceilings"],
    image: metalHero,
  },
];

export type Texture = {
  id: string;
  name: string;
  behaviour: string;
  /** Overlay pattern representing the physical grain. */
  grain: string;
  grainSize: string;
  /** Highlight geometry — how light lands on this texture. */
  highlight: string;
  image: string;
};

export const textures: Texture[] = [
  {
    id: "hairline",
    name: "Hairline",
    behaviour: "Directional reflection. Light stretches along the grain.",
    grain: "repeating-linear-gradient(90deg, rgba(255,255,255,0.16) 0 1px, rgba(0,0,0,0.16) 1px 3px)",
    grainSize: "auto",
    highlight: "linear-gradient(90deg, transparent 20%, rgba(255,255,255,0.5) 46%, transparent 72%)",
    image: macroFinish,
  },
  {
    id: "mirror",
    name: "Mirror",
    behaviour: "Sharp specular highlight. The surface returns the room.",
    grain: "linear-gradient(120deg, rgba(255,255,255,0.05), rgba(0,0,0,0.05))",
    grainSize: "auto",
    highlight: "linear-gradient(104deg, transparent 40%, rgba(255,255,255,0.95) 48%, transparent 55%)",
    image: pvdSteel,
  },
  {
    id: "vibration",
    name: "Vibration",
    behaviour: "Soft broken highlight. Reflection scatters in small arcs.",
    grain:
      "repeating-radial-gradient(circle at 30% 30%, rgba(255,255,255,0.14) 0 1px, rgba(0,0,0,0.14) 1px 4px)",
    grainSize: "18px 18px",
    highlight: "radial-gradient(60% 90% at 42% 40%, rgba(255,255,255,0.42), transparent 70%)",
    image: polishing,
  },
  {
    id: "bead-blast",
    name: "Bead Blast",
    behaviour: "Diffuse reflection. Light is absorbed into an even matte field.",
    grain:
      "repeating-conic-gradient(from 0deg at 50% 50%, rgba(255,255,255,0.1) 0deg 6deg, rgba(0,0,0,0.12) 6deg 12deg)",
    grainSize: "5px 5px",
    highlight: "radial-gradient(90% 120% at 50% 30%, rgba(255,255,255,0.2), transparent 75%)",
    image: sheetPrep,
  },
  {
    id: "satin",
    name: "Satin",
    behaviour: "A low, even sheen between hairline and bead blast.",
    grain: "repeating-linear-gradient(90deg, rgba(255,255,255,0.08) 0 2px, rgba(0,0,0,0.08) 2px 5px)",
    grainSize: "auto",
    highlight: "linear-gradient(100deg, transparent 25%, rgba(255,255,255,0.34) 50%, transparent 76%)",
    image: matSamples,
  },
];

export const architectureLabels = [
  { label: "Wall", x: 16, y: 62 },
  { label: "Ceiling", x: 52, y: 16 },
  { label: "Screen", x: 78, y: 48 },
  { label: "Column", x: 34, y: 40 },
  { label: "Joinery", x: 64, y: 76 },
];

export const applications = [
  { index: "01", name: "Facades", line: "Surface becomes architecture.", image: facadeNight, alt: "PVD stainless facade at night" },
  { index: "02", name: "Hospitality", line: "Material becomes atmosphere.", image: lobby, alt: "Hotel lobby clad in champagne PVD stainless" },
  { index: "03", name: "Retail", line: "Light becomes attention.", image: interiors, alt: "Retail interior with warm PVD metalwork" },
  { index: "04", name: "Luxury interiors", line: "Detail becomes the room.", image: capJoinery, alt: "Interior joinery in coated stainless steel" },
  { index: "05", name: "Residential", line: "Restraint becomes character.", image: bungalow, alt: "Residence with black PVD metal detailing" },
  { index: "06", name: "Commercial", line: "Precision becomes identity.", image: commercial, alt: "Commercial lobby in gunmetal stainless steel" },
  { index: "07", name: "Screens", line: "Metal becomes light.", image: meshHero, alt: "Decorative stainless mesh screen" },
  { index: "08", name: "Ceilings", line: "Overhead becomes horizon.", image: meshApplication, alt: "Stainless mesh ceiling installation" },
];

export const scienceStages = [
  { index: "01", name: "Stainless steel", body: "304 or 316 sheet, cleaned and prepared to the specified texture." },
  { index: "02", name: "Vacuum", body: "The chamber is evacuated so nothing sits between source and surface." },
  { index: "03", name: "Vapour", body: "Solid metal is vaporised inside the chamber." },
  { index: "04", name: "Ionisation", body: "The vapour is ionised and directed toward the panel." },
  { index: "05", name: "Deposition", body: "Colour condenses onto the steel and bonds to it, measured in microns." },
  { index: "06", name: "Finished surface", body: "A coloured architectural surface — not a paint, not a film." },
];

export const processSteps = [
  { index: "01", name: "Raw steel", body: "Mill sheet checked for flatness and surface before anything else happens.", image: rawSteel, alt: "Raw stainless steel sheet" },
  { index: "02", name: "Preparation", body: "Hairline, vibration, bead blast or mirror — the texture that decides the result.", image: sheetPrep, alt: "Sheet preparation" },
  { index: "03", name: "Fabrication", body: "Cutting, folding, welding and assembly to project drawings.", image: polishing, alt: "Fabrication and polishing" },
  { index: "04", name: "PVD", body: "Vaporised metal condenses onto the panel in vacuum, bonded atomically.", image: pvdChamber, alt: "PVD coating chamber" },
  { index: "05", name: "Inspection", body: "Colour, thickness and adhesion checked against one signed control sample.", image: inspection, alt: "Surface inspection" },
  { index: "06", name: "Installation", body: "Crated in sequence and fitted by our own teams.", image: installation, alt: "Installation on site" },
];

export const precisionDetails = [
  { index: "01", label: "Edge", image: detailA, alt: "Folded panel edge in coated stainless steel" },
  { index: "02", label: "Joint", image: detailB, alt: "Panel joint detail" },
  { index: "03", label: "Texture", image: macroFinish, alt: "Macro of hairline texture" },
  { index: "04", label: "Colour", image: matChampagne, alt: "Champagne PVD colour macro" },
  { index: "05", label: "Alignment", image: capSculpture, alt: "Sculptural metal assembly" },
];

export type CompareKey = "champagne" | "rose" | "gunmetal" | "black" | "bronze";

export const comparison: {
  key: CompareKey;
  name: string;
  colour: string;
  reflectivity: string;
  texture: string;
  character: string;
  application: string;
}[] = [
  { key: "champagne", name: "Champagne", colour: "Warm neutral", reflectivity: "Medium", texture: "Hairline / Vibration", character: "Quiet, luminous", application: "Hospitality" },
  { key: "rose", name: "Rose Gold", colour: "Warm pink", reflectivity: "Medium", texture: "Hairline / Satin", character: "Soft, precise", application: "Retail" },
  { key: "gunmetal", name: "Gunmetal", colour: "Cool graphite", reflectivity: "Low", texture: "Bead blast", character: "Structural", application: "Commercial" },
  { key: "black", name: "Black", colour: "Near-black", reflectivity: "High or low", texture: "Mirror / Bead blast", character: "Absolute", application: "Interiors" },
  { key: "bronze", name: "Bronze", colour: "Deep warm", reflectivity: "Low", texture: "Bead blast / Vibration", character: "Weighted", application: "Facades" },
];

export const finderPlaces = [
  "Façade",
  "Hotel",
  "Retail",
  "Residence",
  "Office",
  "Screen",
  "Ceiling",
  "Feature wall",
] as const;
export const finderFeels = ["Warm", "Reflective", "Dark", "Tactile", "Quiet", "Statement"] as const;
export const finderLight = ["Soft", "Directional", "Reflective", "Diffused"] as const;

export type FinderPlace = (typeof finderPlaces)[number];
export type FinderFeel = (typeof finderFeels)[number];
export type FinderLight = (typeof finderLight)[number];

export type Recommendation = {
  material: string;
  finish: string;
  application: string;
  reference: string;
};

export function recommend(
  place: FinderPlace,
  feel: FinderFeel,
  light: FinderLight,
): Recommendation[] {
  const warm = feel === "Warm" || feel === "Quiet";
  const dark = feel === "Dark";
  const bold = feel === "Statement" || feel === "Reflective";
  const tactile = feel === "Tactile" || light === "Diffused";
  const exterior = place === "Façade" || place === "Office";

  const base: Recommendation[] = [];
  if (dark) {
    base.push({ material: "Black", finish: light === "Reflective" ? "Mirror" : "Bead blast", application: place, reference: "Nikhil Gupta Residence" });
    base.push({ material: "Gunmetal", finish: "Bead blast", application: place, reference: "Meridian Tower" });
  } else if (warm) {
    base.push({ material: "Champagne", finish: light === "Directional" ? "Hairline" : "Vibration", application: place, reference: "The Vira Hotel" });
    base.push({ material: "Bronze", finish: "Bead blast", application: place, reference: "Meridian Tower" });
  } else if (bold) {
    base.push({ material: "Gold", finish: "Mirror", application: place, reference: "Aurum Flagship" });
    base.push({ material: "Rose Gold", finish: "Hairline", application: place, reference: "Aurum Flagship" });
  } else {
    base.push({ material: "Titanium", finish: "Satin", application: place, reference: "Atelier Nine" });
    base.push({ material: "Silver", finish: "Hairline", application: place, reference: "Atelier Nine" });
  }

  base.push(
    tactile
      ? { material: "Bronze", finish: "Vibration", application: place, reference: "SS Decorative Mesh" }
      : exterior
        ? { material: "Titanium", finish: "Bead blast", application: place, reference: "Meridian Tower" }
        : { material: "Champagne", finish: "Satin", application: place, reference: "The Vira Hotel" },
  );

  return base.slice(0, 3);
}

export const proofProjects = [
  { name: "The Vira Hotel", location: "Mumbai, India", material: "Champagne PVD", image: lobby, alt: "Hotel lobby in champagne PVD stainless" },
  { name: "Aurum Flagship", location: "Dubai, UAE", material: "Rose Gold PVD", image: interiors, alt: "Flagship retail interior in rose gold PVD" },
  { name: "Meridian Tower", location: "Singapore", material: "Gunmetal", image: commercial, alt: "Tower lobby in gunmetal stainless" },
  { name: "Nikhil Gupta Residence", location: "Delhi, India", material: "Black PVD", image: bungalow, alt: "Residence with black PVD metalwork" },
  { name: "Atelier Nine", location: "Mumbai, India", material: "Champagne / Vibration", image: capJoinery, alt: "Atelier joinery in champagne vibration finish" },
  { name: "SS Decorative Mesh", location: "International", material: "Architectural Mesh", image: meshHero, alt: "Architectural stainless mesh" },
];

export const specification = [
  { label: "Substrate", value: "304 / 316 stainless steel" },
  { label: "Process", value: "Physical vapour deposition" },
  { label: "Colours", value: "Custom PVD palette" },
  { label: "Finishes", value: "Hairline · Mirror · Vibration · Bead blast · Satin" },
  { label: "Application", value: "Interior · Exterior · Facade · Ceiling · Wall · Screen · Joinery" },
  { label: "Fabrication", value: "Custom" },
  { label: "Installation", value: "Available" },
];

export const scienceImage = plasmaChamber;
