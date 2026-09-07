import mirror from "@/assets/ds-mirror.jpg";
import stamped from "@/assets/ds-stamped.jpg";
import hairline from "@/assets/ds-hairline.jpg";
import etched from "@/assets/ds-etched.jpg";
import embossed from "@/assets/ds-embossed.jpg";
import beadblast from "@/assets/ds-beadblast.jpg";
import ripple from "@/assets/ds-ripple.jpg";
import pvd from "@/assets/ds-pvd.jpg";

export type SheetFinish = {
  id: string;
  index: string;
  name: string;
  headline: [string, string];
  image: string;
  alt: string;
  meta: [string, string, string];
  reflection: string;
  texture: string;
  pattern: string;
  character: string;
  bestFor: string;
  note: string;
  /** CSS surface used for swatches and the sample table. */
  swatch: string;
};

export const finishes: SheetFinish[] = [
  {
    id: "mirror",
    index: "01",
    name: "Mirror",
    headline: ["REFLECTION", "AS ARCHITECTURE."],
    image: mirror,
    alt: "Mirror finish stainless steel wall panels reflecting a minimal interior",
    meta: ["HIGH REFLECTIVITY", "CLEAN / LUMINOUS", "STAINLESS STEEL"],
    reflection: "Full",
    texture: "None",
    pattern: "None",
    character: "Bright, luminous, optically deep",
    bestFor: "Feature walls, lobbies, ceilings",
    note: "A bright, highly reflective surface — mirror and super mirror grades.",
    swatch: "linear-gradient(135deg,#6f767c,#eef2f5 30%,#8d959b 55%,#ffffff 72%,#6f767c)",
  },
  {
    id: "stamped",
    index: "02",
    name: "Stamped",
    headline: ["PATTERN", "PRESSED INTO METAL."],
    image: stamped,
    alt: "Macro of stamped stainless steel sheet with repeating pressed relief pattern",
    meta: ["PATTERN", "TEXTURE", "DEPTH"],
    reflection: "Broken",
    texture: "Pressed relief",
    pattern: "Repeating",
    character: "Graphic, rhythmic, hard-wearing",
    bestFor: "Interior and exterior decoration",
    note: "Pattern pressed into the sheet — decorative interior and exterior use.",
    swatch: "linear-gradient(135deg,#3a3f44,#9aa2a8 25%,#4b5157 50%,#c2c9ce 70%,#3a3f44)",
  },
  {
    id: "hairline",
    index: "03",
    name: "Hairline",
    headline: ["DIRECTION", "BECOMES TEXTURE."],
    image: hairline,
    alt: "Hairline brushed stainless steel panel with fine directional grain",
    meta: ["DIRECTIONAL", "REFINED", "ARCHITECTURAL"],
    reflection: "Soft directional",
    texture: "Fine linear grain",
    pattern: "None",
    character: "Quiet, refined, forgiving",
    bestFor: "Cladding, joinery, lift interiors",
    note: "A fine directional brush — the most widely specified architectural surface.",
    swatch: "linear-gradient(135deg,#7d848a,#d9dee2 30%,#98a0a6 55%,#eef1f3 74%,#7d848a)",
  },
  {
    id: "etched",
    index: "04",
    name: "Etched",
    headline: ["PATTERN", "WITH PRECISION."],
    image: etched,
    alt: "Chemically etched stainless steel sheet with fine geometric pattern",
    meta: ["PRECISION", "CONTRAST", "DETAIL"],
    reflection: "Dual-tone",
    texture: "Chemically etched",
    pattern: "Fine, drawn",
    character: "Precise, graphic, detailed",
    bestFor: "Feature surfaces, doors, panels",
    note: "Pattern etched into the surface — part of the decorative sheet collection.",
    swatch: "linear-gradient(135deg,#2c3033,#b9c0c5 22%,#3b4145 48%,#e2e7ea 68%,#2c3033)",
  },
  {
    id: "embossed",
    index: "05",
    name: "Embossed",
    headline: ["TEXTURE", "YOU CAN SEE."],
    image: embossed,
    alt: "Embossed stainless steel sheet with raised three dimensional relief",
    meta: ["PHYSICAL DEPTH", "LIGHT / SHADOW", "ARCHITECTURAL TEXTURE"],
    reflection: "Scattered",
    texture: "Raised relief",
    pattern: "Repeating, three-dimensional",
    character: "Tactile, shadow-forming",
    bestFor: "Walls, ceilings, furniture faces",
    note: "Raised, three-dimensional texture — a core decorative sheet category.",
    swatch: "linear-gradient(135deg,#5f666c,#ced5da 28%,#798086 52%,#f0f3f5 72%,#5f666c)",
  },
  {
    id: "bead-blast",
    index: "06",
    name: "Bead Blast",
    headline: ["LIGHT,", "SOFTENED."],
    image: beadblast,
    alt: "Bead blasted stainless steel with an even matte non reflective texture",
    meta: ["MATTE", "DIFFUSE", "EVEN"],
    reflection: "Diffuse",
    texture: "Even matte tooth",
    pattern: "None",
    character: "Quiet, non-reflective, calm",
    bestFor: "Street level, exteriors, quiet interiors",
    note: "A matte, non-reflective textured finish.",
    swatch: "linear-gradient(135deg,#8b9197,#c3c9cd 35%,#9ba1a6 60%,#d5dade 78%,#8b9197)",
  },
  {
    id: "water-ripple",
    index: "07",
    name: "Water Ripple",
    headline: ["METAL", "IN MOTION."],
    image: ripple,
    alt: "Water ripple stainless steel sheet with undulating wave-like surface",
    meta: ["MOVEMENT", "REFLECTION", "SCULPTURAL"],
    reflection: "Following the ripple",
    texture: "Undulating",
    pattern: "Organic wave",
    character: "Liquid, sculptural, in motion",
    bestFor: "Statement walls, columns, feature surfaces",
    note: "A rippled surface that carries reflection across the sheet.",
    swatch: "linear-gradient(120deg,#5b666e,#dfe6ea 20%,#6e7a82 40%,#eef3f6 60%,#69747c 80%,#5b666e)",
  },
];

export const pvdFinish = {
  index: "08",
  name: "PVD / Coloured",
  image: pvd,
  alt: "PVD coated stainless steel sheet in a dark studio with rim lighting",
  note: "PVD coloured designer sheets — silver, gold, rose gold, champagne, bronze and black.",
};

export type SheetColour = {
  id: string;
  name: string;
  /** Tint layered over the sheet photograph. */
  tint: string;
  swatch: string;
  glow: string;
};

export const colours: SheetColour[] = [
  { id: "silver", name: "Silver", tint: "rgba(206,214,220,0.25)", swatch: "linear-gradient(135deg,#7d848a,#e6eaee 45%,#9aa2a8)", glow: "rgba(206,214,220,0.35)" },
  { id: "gold", name: "Gold", tint: "rgba(214,168,64,0.5)", swatch: "linear-gradient(135deg,#8a6a1c,#f2c95c 45%,#c79a29)", glow: "rgba(214,168,64,0.4)" },
  { id: "rose-gold", name: "Rose Gold", tint: "rgba(214,146,124,0.5)", swatch: "linear-gradient(135deg,#8c4f42,#f0b4a0 45%,#c98873)", glow: "rgba(214,146,124,0.4)" },
  { id: "champagne", name: "Champagne", tint: "rgba(198,181,142,0.45)", swatch: "linear-gradient(135deg,#8a7048,#efdcb6 45%,#c6b58e)", glow: "rgba(198,181,142,0.4)" },
  { id: "bronze", name: "Bronze", tint: "rgba(115,89,67,0.6)", swatch: "linear-gradient(135deg,#4a3220,#a97f4f 45%,#735943)", glow: "rgba(115,89,67,0.45)" },
  { id: "black", name: "Black", tint: "rgba(10,10,10,0.62)", swatch: "linear-gradient(135deg,#0b0b0b,#3d3d3d 45%,#151515)", glow: "rgba(60,60,60,0.4)" },
];

export const applicationOptions = [
  "Wall",
  "Ceiling",
  "Feature Surface",
  "Interior",
  "Exterior",
  "Furniture",
  "Architecture",
] as const;

export const grades = ["SS 202", "SS 304", "SS 316"] as const;

export const fabricationSteps = [
  { index: "01", name: "Cut to size" },
  { index: "02", name: "Bending" },
  { index: "03", name: "V-grooving" },
  { index: "04", name: "Laser cutting" },
  { index: "05", name: "Welding" },
  { index: "06", name: "Polishing" },
  { index: "07", name: "Laser marking" },
] as const;

export const projects = [
  { name: "Celestia Spaces", location: "Mumbai" },
  { name: "Phoenix Palladium", location: "Mumbai" },
  { name: "Minerva Towers", location: "Mumbai" },
  { name: "Supreme Headquarters", location: "Mumbai" },
  { name: "Silicon Valley", location: "Mumbai" },
] as const;
