import matHero from "@/assets/mat-hero.jpg";
import matChampagne from "@/assets/mat-champagne.jpg";
import matSamples from "@/assets/mat-samples.jpg";
import matCta from "@/assets/mat-cta.jpg";
import macroFinish from "@/assets/macro-finish.jpg";
import pvdSteel from "@/assets/pvd-steel.jpg";
import finishSwatches from "@/assets/finish-swatches.jpg";
import meshHero from "@/assets/mesh-hero.jpg";
import meshApplication from "@/assets/mesh-application.jpg";
import facadeNight from "@/assets/facade-night.jpg";
import lobby from "@/assets/install-lobby.jpg";
import interiors from "@/assets/proj-interiors.jpg";
import commercial from "@/assets/proj-commercial.jpg";
import bungalow from "@/assets/proj-bungalow.jpg";
import institutional from "@/assets/proj-institutional.jpg";
import polishing from "@/assets/polishing.jpg";
import inspection from "@/assets/inspection.jpg";
import pvdChamber from "@/assets/pvd-chamber.jpg";
import sheetPrep from "@/assets/sheet-prep.jpg";
import rawSteel from "@/assets/raw-steel.jpg";

export const images = {
  hero: matHero,
  champagne: matChampagne,
  samples: matSamples,
  cta: matCta,
};

export const categoryNav = [
  { id: "finishes", label: "Finishes" },
  { id: "colours", label: "Colours" },
  { id: "textures", label: "Textures" },
  { id: "applications", label: "Applications" },
  { id: "samples", label: "Samples" },
] as const;

export type MaterialColour = {
  id: string;
  name: string;
  image: string;
  alt: string;
  swatch: string;
  note: string;
  substrate: string;
  best: string[];
  textures: string[];
};

export const colours: MaterialColour[] = [
  {
    id: "champagne",
    name: "Champagne",
    image: matChampagne,
    alt: "Champagne PVD coated stainless steel with hairline grain",
    swatch: "linear-gradient(135deg,#8a7048,#f0dcb4 35%,#c7a877 60%,#f6ecd6 78%,#8a7048)",
    note: "A warm architectural tone designed to sit between brass and natural stone.",
    substrate: "304 / 316 stainless steel",
    best: ["Hospitality", "Retail", "Luxury interiors"],
    textures: ["Hairline", "Mirror", "Vibration", "Bead Blast"],
  },
  {
    id: "gold",
    name: "Gold",
    image: matHero,
    alt: "Gold PVD stainless steel panel in raking daylight",
    swatch: "linear-gradient(135deg,#8a6a1c,#f5cd5f 35%,#c79a29 60%,#ffe9a3 78%,#8a6a1c)",
    note: "A saturated yellow tone that holds its warmth under artificial light.",
    substrate: "304 stainless steel",
    best: ["Hospitality", "Feature walls", "Joinery metal"],
    textures: ["Hairline", "Mirror", "Vibration"],
  },
  {
    id: "rose-gold",
    name: "Rose Gold",
    image: macroFinish,
    alt: "Rose gold PVD stainless steel macro surface",
    swatch: "linear-gradient(135deg,#8c4f42,#f0b4a0 35%,#c98873 60%,#fbd8c9 78%,#8c4f42)",
    note: "A pink-shifted copper tone most often specified in retail and jewellery work.",
    substrate: "304 stainless steel",
    best: ["Retail", "Boutique interiors", "Display metal"],
    textures: ["Mirror", "Vibration", "Satin"],
  },
  {
    id: "bronze",
    name: "Bronze",
    image: pvdSteel,
    alt: "Bronze PVD stainless steel surface",
    swatch: "linear-gradient(135deg,#4a3220,#a97f4f 35%,#6d4c2c 60%,#c99d68 78%,#4a3220)",
    note: "Deep and architectural; it holds its reading at facade distance.",
    substrate: "316 stainless steel",
    best: ["Facades", "Lobbies", "Commercial interiors"],
    textures: ["Hairline", "Vibration", "Bead Blast", "Satin"],
  },
  {
    id: "black",
    name: "Black",
    image: facadeNight,
    alt: "Black PVD stainless steel facade at dusk",
    swatch: "linear-gradient(135deg,#0b0b0b,#3a3a3a 35%,#151515 60%,#4a4a4a 78%,#0b0b0b)",
    note: "Available matt through mirror; the hardest tone to keep even at scale.",
    substrate: "304 / 316 stainless steel",
    best: ["Residential", "Screens", "Ceilings"],
    textures: ["Hairline", "Mirror", "Bead Blast"],
  },
  {
    id: "gunmetal",
    name: "Gunmetal",
    image: meshHero,
    alt: "Gunmetal PVD woven stainless mesh",
    swatch: "linear-gradient(135deg,#2a2d31,#71777e 35%,#3a3f45 60%,#8e959c 78%,#2a2d31)",
    note: "Grey with warmth in it — a quieter alternative to black.",
    substrate: "316 stainless steel",
    best: ["Facades", "Commercial", "Screens"],
    textures: ["Bead Blast", "Hairline", "Satin"],
  },
  {
    id: "titanium",
    name: "Titanium",
    image: institutional,
    alt: "Titanium toned stainless steel cladding",
    swatch: "linear-gradient(135deg,#3d444b,#9aa3ab 35%,#545c64 60%,#b8c0c7 78%,#3d444b)",
    note: "Cool grey, fingerprint tolerant, widely specified in institutional work.",
    substrate: "316 stainless steel",
    best: ["Institutional", "Transport", "Facades"],
    textures: ["Satin", "Bead Blast", "Hairline"],
  },
  {
    id: "silver",
    name: "Silver",
    image: polishing,
    alt: "Polished silver stainless steel being finished",
    swatch: "linear-gradient(135deg,#5c6268,#d6dade 35%,#828a91 60%,#eef1f3 78%,#5c6268)",
    note: "A clear PVD layer over polished stainless — protection without colour shift.",
    substrate: "304 stainless steel",
    best: ["Interiors", "Ceilings", "Furniture"],
    textures: ["Mirror", "Hairline", "Vibration"],
  },
  {
    id: "custom",
    name: "Custom",
    image: inspection,
    alt: "Colour inspection against an approved control sample",
    swatch: "linear-gradient(135deg,#2a2a2a,#c7a877 30%,#71777e 55%,#f0b4a0 80%,#2a2a2a)",
    note: "Matched to a submitted sample and locked as a project-specific target.",
    substrate: "304 / 316 stainless steel",
    best: ["Bespoke projects", "Brand programmes"],
    textures: ["Developed to sample"],
  },
];

export type MaterialFinish = {
  id: string;
  name: string;
  description: string;
  image: string;
  texture: string;
  gloss: string;
};

export const finishLibrary: MaterialFinish[] = [
  {
    id: "hairline",
    name: "Hairline",
    description: "Directional grain creates a controlled movement across the surface.",
    image: matChampagne,
    texture: "repeating-linear-gradient(90deg, rgba(255,255,255,0.18) 0 1px, rgba(0,0,0,0.08) 1px 3px)",
    gloss: "Semi-reflective",
  },
  {
    id: "mirror",
    name: "Mirror",
    description: "Maximum reflectivity for spaces designed around light.",
    image: polishing,
    texture: "linear-gradient(115deg, rgba(255,255,255,0.5), rgba(0,0,0,0.18) 40%, rgba(255,255,255,0.4) 65%, rgba(0,0,0,0.2))",
    gloss: "Full reflection",
  },
  {
    id: "vibration",
    name: "Vibration",
    description: "Organic linear texture with a softer reflective character.",
    image: macroFinish,
    texture: "repeating-radial-gradient(circle at 30% 40%, rgba(255,255,255,0.16) 0 2px, rgba(0,0,0,0.08) 2px 5px)",
    gloss: "Diffused reflection",
  },
  {
    id: "bead-blast",
    name: "Bead Blast",
    description: "Diffuse, low-glare surface for a restrained architectural expression.",
    image: sheetPrep,
    texture: "radial-gradient(rgba(255,255,255,0.22) 0.6px, rgba(0,0,0,0.07) 0.7px)",
    gloss: "Matt",
  },
  {
    id: "satin",
    name: "Satin",
    description: "A quiet sheen between hairline and matt, even across large panels.",
    image: pvdSteel,
    texture: "linear-gradient(100deg, rgba(255,255,255,0.22), rgba(0,0,0,0.06) 50%, rgba(255,255,255,0.18))",
    gloss: "Low sheen",
  },
  {
    id: "custom",
    name: "Custom",
    description: "Etched, embossed or patterned surfaces developed against a control sample.",
    image: finishSwatches,
    texture: "repeating-linear-gradient(45deg, rgba(255,255,255,0.14) 0 3px, rgba(0,0,0,0.08) 3px 7px)",
    gloss: "Developed to sample",
  },
];

export type Combination = {
  id: string;
  colour: string;
  finish: string;
  character: string;
  application: string;
  image: string;
  alt: string;
};

export const combinations: Combination[] = [
  { id: "c1", colour: "Champagne", finish: "Hairline", character: "Warm, controlled, quiet at distance", application: "Hotel lobbies and lift cores", image: matChampagne, alt: "Champagne hairline stainless steel" },
  { id: "c2", colour: "Rose Gold", finish: "Mirror", character: "Reflective and luminous", application: "Retail display and boutique interiors", image: macroFinish, alt: "Rose gold mirror stainless steel" },
  { id: "c3", colour: "Gunmetal", finish: "Bead Blast", character: "Matt, low glare, technical", application: "Facades and street-level cladding", image: meshHero, alt: "Gunmetal bead blast surface" },
  { id: "c4", colour: "Black", finish: "Hairline", character: "Dark with directional depth", application: "Residential joinery and screens", image: facadeNight, alt: "Black hairline stainless steel" },
  { id: "c5", colour: "Bronze", finish: "Vibration", character: "Soft scatter, no hotspots", application: "Feature walls and ceilings", image: pvdSteel, alt: "Bronze vibration finish" },
  { id: "c6", colour: "Titanium", finish: "Satin", character: "Cool, even, fingerprint tolerant", application: "Institutional and commercial interiors", image: institutional, alt: "Titanium satin stainless steel" },
];

export const applications = [
  { id: "facades", label: "Facades", image: facadeNight, alt: "Metal facade at dusk" },
  { id: "interiors", label: "Interiors", image: interiors, alt: "Interior with metal surfaces" },
  { id: "hospitality", label: "Hospitality", image: lobby, alt: "Hotel lobby with coated stainless steel" },
  { id: "retail", label: "Retail", image: commercial, alt: "Retail interior metalwork" },
  { id: "residential", label: "Residential", image: bungalow, alt: "Residential metal detailing" },
  { id: "commercial", label: "Commercial", image: matCta, alt: "Commercial lobby cladding" },
  { id: "screens", label: "Screens", image: meshApplication, alt: "Woven stainless screen" },
  { id: "ceilings", label: "Ceilings", image: institutional, alt: "Metal ceiling system" },
];

export const stories = [
  {
    index: "01",
    title: "Why PVD?",
    body: "Understanding colour, durability and architectural performance.",
    image: pvdChamber,
    alt: "PVD coating chamber",
    href: "/journal",
  },
  {
    index: "02",
    title: "The Art of the Finish",
    body: "How texture changes the way stainless steel behaves with light.",
    image: macroFinish,
    alt: "Macro of a finished metal surface",
    href: "/journal",
  },
  {
    index: "03",
    title: "From Sample to Space",
    body: "Why the control sample matters before fabrication begins.",
    image: inspection,
    alt: "Sample inspection under controlled light",
    href: "/journal",
  },
];

export const projectApplications = [
  { index: "01", name: "The Vira Hotel Lobby", location: "Dubai, UAE", material: "Champagne PVD", image: lobby, alt: "Hotel lobby in champagne PVD stainless steel" },
  { index: "02", name: "Aurum Flagship Store", location: "Mumbai, India", material: "Rose Gold PVD", image: commercial, alt: "Flagship retail interior" },
  { index: "03", name: "Meridian Tower Facade", location: "Singapore", material: "Gunmetal", image: facadeNight, alt: "Tower facade in gunmetal metal" },
  { index: "04", name: "Nikhil Gupta Residence", location: "Rajkot, India", material: "Black PVD", image: bungalow, alt: "Residence with black PVD metalwork" },
  { index: "05", name: "Atelier Nine Interiors", location: "London", material: "Champagne / Vibration", image: interiors, alt: "Interior with vibration finish metal" },
  { index: "06", name: "SS Decorative Mesh Programme", location: "India / GCC", material: "Woven stainless", image: meshApplication, alt: "Decorative woven stainless mesh" },
];

export const finderSpaces = [
  "Façade",
  "Lobby",
  "Retail",
  "Residence",
  "Hotel",
  "Screen",
  "Ceiling",
  "Furniture",
  "Feature wall",
] as const;

export const finderCharacters = [
  "Warm",
  "Reflective",
  "Dark",
  "Tactile",
  "Subtle",
  "Statement",
] as const;

export type FinderSpace = (typeof finderSpaces)[number];
export type FinderCharacter = (typeof finderCharacters)[number];

const characterBase: Record<FinderCharacter, string[]> = {
  Warm: ["Champagne Hairline", "Rose Gold Vibration", "Bronze Satin"],
  Reflective: ["Silver Mirror", "Champagne Mirror", "Rose Gold Mirror"],
  Dark: ["Gunmetal Bead Blast", "Black Hairline", "Titanium Satin"],
  Tactile: ["Bead Blast Bronze", "Vibration Champagne", "Etched Custom"],
  Subtle: ["Titanium Satin", "Silver Hairline", "Champagne Bead Blast"],
  Statement: ["Gold Mirror", "Rose Gold Mirror", "Black Mirror"],
};

const spaceOverrides: Partial<Record<`${FinderCharacter}|${FinderSpace}`, string[]>> = {
  "Warm|Lobby": ["Champagne Hairline", "Rose Gold Vibration", "Bronze Satin"],
  "Warm|Retail": ["Rose Gold Mirror", "Champagne Hairline", "Gold Satin"],
  "Dark|Façade": ["Gunmetal Bead Blast", "Black Hairline", "Titanium Satin"],
  "Reflective|Ceiling": ["Silver Mirror", "Champagne Mirror", "Gold Mirror"],
  "Tactile|Screen": ["Woven Gunmetal Mesh", "Bead Blast Bronze", "Etched Custom"],
  "Subtle|Residence": ["Titanium Satin", "Champagne Bead Blast", "Silver Hairline"],
  "Statement|Feature wall": ["Gold Mirror", "Bronze Vibration", "Black Mirror"],
};

export function recommendFinishes(space: FinderSpace, character: FinderCharacter): string[] {
  return spaceOverrides[`${character}|${space}`] ?? characterBase[character];
}

export const specification = [
  { label: "Substrate", values: ["304 / 316 stainless steel"] },
  { label: "PVD", values: ["Physical Vapour Deposition"] },
  { label: "Finish options", values: ["Hairline", "Mirror", "Vibration", "Bead Blast", "Satin"] },
  { label: "Applications", values: ["Interior", "Exterior", "Facade", "Ceiling", "Wall", "Screen", "Joinery"] },
  { label: "Custom", values: ["Available upon consultation"] },
];

export const controlBoard = [
  { name: "Champagne", finish: "Hairline", code: "STX-CH-HL-—", swatch: colours[0]!.swatch },
  { name: "Rose", finish: "Vibration", code: "STX-RS-VB-—", swatch: colours[2]!.swatch },
  { name: "Gunmetal", finish: "Bead Blast", code: "STX-GM-BB-—", swatch: colours[5]!.swatch },
  { name: "Black", finish: "Mirror", code: "STX-BK-MR-—", swatch: colours[4]!.swatch },
  { name: "Bronze", finish: "Satin", code: "STX-BZ-ST-—", swatch: colours[3]!.swatch },
];

export const processStrip = [
  { label: "Mill sheet", image: rawSteel },
  { label: "Preparation", image: sheetPrep },
  { label: "PVD", image: pvdChamber },
];
