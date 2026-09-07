/**
 * Central media + editorial content map for the /designer-sheets category page.
 *
 * Every image on the page is referenced from here so that temporary reference
 * photography can be swapped for real STEELX photography without touching a
 * single component.
 */

import mirror from "@/assets/ds-mirror.jpg";
import hairline from "@/assets/ds-hairline.jpg";
import embossed from "@/assets/ds-embossed.jpg";
import beadblast from "@/assets/ds-beadblast.jpg";
import ripple from "@/assets/ds-ripple.jpg";
import hammered from "@/assets/hm-silver.jpg";

import macroMirror from "@/assets/dsl-macro-mirror.jpg";
import macroHairline from "@/assets/dsl-macro-hairline.jpg";
import macroEmbossed from "@/assets/dsl-macro-embossed.jpg";
import macroBeadblast from "@/assets/dsl-macro-beadblast.jpg";
import macroRipple from "@/assets/dsl-macro-ripple.jpg";
import macroHammered from "@/assets/dsl-macro-hammered.jpg";

import heroImage from "@/assets/dsl-hero.jpg";
import scaleSheet from "@/assets/dsl-scale-sheet.jpg";

import appElevator from "@/assets/dsl-app-elevator.jpg";
import appHospitality from "@/assets/dsl-app-hospitality.jpg";
import appRetail from "@/assets/dsl-app-retail.jpg";
import appInterior from "@/assets/ds-app-interior.jpg";
import appCeiling from "@/assets/ds-app-ceiling.jpg";
import appExterior from "@/assets/ds-app-exterior.jpg";

import baLiftBefore from "@/assets/dsl-ba-lift-before.jpg";
import baLiftAfter from "@/assets/dsl-ba-lift-after.jpg";
import baWallBefore from "@/assets/dsl-ba-wall-before.jpg";
import baWallAfter from "@/assets/dsl-ba-wall-after.jpg";
import baReceptionBefore from "@/assets/dsl-ba-reception-before.jpg";
import baReceptionAfter from "@/assets/dsl-ba-reception-after.jpg";

import cSilver from "@/assets/hm-silver.jpg";
import cGold from "@/assets/hm-gold.jpg";
import cRoseGold from "@/assets/hm-rose-gold.jpg";
import cChampagne from "@/assets/hm-champagne.jpg";
import cBronze from "@/assets/hm-bronze.jpg";
import cBlack from "@/assets/hm-black.jpg";
import cBlue from "@/assets/hm-blue.jpg";

export type FinishMedia = {
  /** Full sheet / product photograph. */
  sheet: string;
  /** Extreme macro of the surface. */
  macro: string;
  sheetAlt: string;
  macroAlt: string;
};

export const designerSheetImages: Record<string, FinishMedia> = {
  mirror: {
    sheet: mirror,
    macro: macroMirror,
    sheetAlt: "Mirror finish stainless steel panels reflecting a minimal interior",
    macroAlt: "Extreme close-up of mirror polished stainless steel showing a crisp specular highlight",
  },
  hairline: {
    sheet: hairline,
    macro: macroHairline,
    sheetAlt: "Hairline brushed stainless steel sheet with fine directional grain",
    macroAlt: "Extreme close-up of hairline brushed stainless steel grain",
  },
  embossed: {
    sheet: embossed,
    macro: macroEmbossed,
    sheetAlt: "Embossed stainless steel sheet with raised three dimensional relief",
    macroAlt: "Extreme close-up of embossed stainless steel relief casting shadow",
  },
  "bead-blast": {
    sheet: beadblast,
    macro: macroBeadblast,
    sheetAlt: "Bead blasted stainless steel sheet with an even matte surface",
    macroAlt: "Extreme close-up of bead blasted stainless steel texture diffusing light",
  },
  "water-ripple": {
    sheet: ripple,
    macro: macroRipple,
    sheetAlt: "Water ripple stainless steel sheet with undulating wave surface",
    macroAlt: "Extreme close-up of water ripple stainless steel carrying stretched reflections",
  },
  hammered: {
    sheet: hammered,
    macro: macroHammered,
    sheetAlt: "Hammered stainless steel sheet with irregular dimpled texture",
    macroAlt: "Extreme close-up of hammered stainless steel showing broken highlights",
  },
};

export const heroMedia = {
  image: heroImage,
  alt: "Hotel lobby wall clad in textured decorative stainless steel panels under warm light",
};

export const scaleMedia = {
  image: scaleSheet,
  alt: "A single stainless steel sheet standing vertically in a dark studio",
};

/** Order + one-line surface character used by the collection and gallery. */
export type FinishNote = {
  slug: string;
  index: string;
  name: string;
  line: string;
  /** Poster line used over the full-screen gallery. */
  poster: string;
  /** Editorial grid emphasis. */
  scale: "tall" | "wide" | "regular";
};

export const finishNotes: FinishNote[] = [
  {
    slug: "mirror",
    index: "01",
    name: "Mirror",
    line: "Full reflection. Crisp highlights. A polished surface that amplifies light and space.",
    poster: "THE ROOM LOOKS BACK AT YOU.",
    scale: "tall",
  },
  {
    slug: "hairline",
    index: "02",
    name: "Hairline",
    line: "Directional grain. Controlled reflection. A refined brushed surface for contemporary architecture.",
    poster: "LIGHT TRAVELS ALONG THE GRAIN.",
    scale: "regular",
  },
  {
    slug: "embossed",
    index: "03",
    name: "Embossed",
    line: "Physical relief. Shadow and depth. A dimensional surface across walls and panels.",
    poster: "SHADOW BECOMES PART OF THE MATERIAL.",
    scale: "regular",
  },
  {
    slug: "bead-blast",
    index: "04",
    name: "Bead Blast",
    line: "Soft diffusion. Matte character. A controlled surface that absorbs and diffuses light.",
    poster: "LIGHT SETTLES INSTEAD OF BOUNCING.",
    scale: "wide",
  },
  {
    slug: "water-ripple",
    index: "05",
    name: "Water Ripple",
    line: "Fluid movement. Dynamic reflection. A sculptural surface inspired by moving water.",
    poster: "LIGHT NEVER FALLS THE SAME WAY TWICE.",
    scale: "tall",
  },
  {
    slug: "hammered",
    index: "06",
    name: "Hammered",
    line: "Tactile depth. Irregular highlights. Every change in light reveals another detail.",
    poster: "A SURFACE MADE OF SMALL REFLECTIONS.",
    scale: "regular",
  },
];

/* --------------------------------------------------------------- compare */

export type ComparisonRow = {
  slug: string;
  name: string;
  reflection: { label: string; level: number };
  texture: { label: string; level: number };
  depth: { label: string; level: number };
  character: string;
  bestFor: string;
};

export const comparisonRows: ComparisonRow[] = [
  {
    slug: "mirror",
    name: "Mirror",
    reflection: { label: "High", level: 3 },
    texture: { label: "Low", level: 1 },
    depth: { label: "Visual", level: 2 },
    character: "Bright, optical, luminous",
    bestFor: "Ceilings, columns, feature walls",
  },
  {
    slug: "hairline",
    name: "Hairline",
    reflection: { label: "Medium", level: 2 },
    texture: { label: "Directional", level: 2 },
    depth: { label: "Low", level: 1 },
    character: "Quiet, refined, forgiving",
    bestFor: "Cladding, joinery, lift interiors",
  },
  {
    slug: "embossed",
    name: "Embossed",
    reflection: { label: "Variable", level: 2 },
    texture: { label: "High", level: 3 },
    depth: { label: "High", level: 3 },
    character: "Tactile, shadow-forming",
    bestFor: "Walls, ceilings, furniture faces",
  },
  {
    slug: "bead-blast",
    name: "Bead Blast",
    reflection: { label: "Low", level: 1 },
    texture: { label: "Fine", level: 2 },
    depth: { label: "Low", level: 1 },
    character: "Matte, even, calm",
    bestFor: "Street level, high-contact areas",
  },
  {
    slug: "water-ripple",
    name: "Water Ripple",
    reflection: { label: "High", level: 3 },
    texture: { label: "High", level: 3 },
    depth: { label: "High", level: 3 },
    character: "Liquid, sculptural, in motion",
    bestFor: "Statement walls, columns, lifts",
  },
  {
    slug: "hammered",
    name: "Hammered",
    reflection: { label: "Variable", level: 2 },
    texture: { label: "High", level: 3 },
    depth: { label: "High", level: 3 },
    character: "Crafted, irregular, warm",
    bestFor: "Feature walls, reception, furniture",
  },
];

/* --------------------------------------------------------------- colours */

export type ColourWorldEntry = {
  id: string;
  name: string;
  image: string;
  alt: string;
  swatch: string;
  note: string;
};

export const colourWorld: ColourWorldEntry[] = [
  {
    id: "silver",
    name: "Silver",
    image: cSilver,
    alt: "Silver stainless steel sheet surface",
    swatch: "linear-gradient(135deg,#7d848a,#e6eaee 45%,#9aa2a8)",
    note: "The natural tone of stainless steel — neutral, architectural and quiet.",
  },
  {
    id: "gold",
    name: "Gold",
    image: cGold,
    alt: "Gold PVD coated stainless steel sheet surface",
    swatch: "linear-gradient(135deg,#8a6a1c,#f2c95c 45%,#c79a29)",
    note: "A warm, saturated PVD tone that reads strongest under directional light.",
  },
  {
    id: "rose-gold",
    name: "Rose Gold",
    image: cRoseGold,
    alt: "Rose gold PVD coated stainless steel sheet surface",
    swatch: "linear-gradient(135deg,#8c4f42,#f0b4a0 45%,#c98873)",
    note: "A softer pink-warm metal that sits well with stone and pale timber.",
  },
  {
    id: "champagne",
    name: "Champagne",
    image: cChampagne,
    alt: "Champagne PVD coated stainless steel sheet surface",
    swatch: "linear-gradient(135deg,#8a7048,#efdcb6 45%,#c6b58e)",
    note: "A restrained warm neutral — gold without the saturation.",
  },
  {
    id: "bronze",
    name: "Bronze",
    image: cBronze,
    alt: "Bronze PVD coated stainless steel sheet surface",
    swatch: "linear-gradient(135deg,#4a3220,#a97f4f 45%,#735943)",
    note: "Deep and earthy, holding shadow across textured surfaces.",
  },
  {
    id: "black",
    name: "Black",
    image: cBlack,
    alt: "Black PVD coated stainless steel sheet surface",
    swatch: "linear-gradient(135deg,#0b0b0b,#3d3d3d 45%,#151515)",
    note: "Graphic and architectural — texture reads as light rather than colour.",
  },
  {
    id: "blue",
    name: "Blue",
    image: cBlue,
    alt: "Blue PVD coated stainless steel sheet surface",
    swatch: "linear-gradient(135deg,#12243a,#3f6c9e 45%,#1c3a5c)",
    note: "A cool, deep tone that shifts noticeably with the angle of view.",
  },
];

/* ---------------------------------------------------------- before/after */

export type BeforeAfterEntry = {
  id: string;
  title: string;
  caption: string;
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
};

export const beforeAfterExamples: BeforeAfterEntry[] = [
  {
    id: "lift",
    title: "Lift lobby",
    caption: "Plain painted lift doors, re-clad in water ripple stainless steel.",
    before: baLiftBefore,
    after: baLiftAfter,
    beforeAlt: "Plain grey painted elevator doors in a bare lobby",
    afterAlt: "Lift lobby clad in rippled stainless steel with warm lighting",
  },
  {
    id: "wall",
    title: "Feature wall",
    caption: "A blank lounge wall becomes a hammered PVD gold surface.",
    before: baWallBefore,
    after: baWallAfter,
    beforeAlt: "Blank beige painted lounge wall behind a grey sofa",
    afterAlt: "Lounge wall clad in gold hammered stainless steel panels",
  },
  {
    id: "reception",
    title: "Reception",
    caption: "A flat reception backdrop rebuilt in mirror and hairline steel.",
    before: baReceptionBefore,
    after: baReceptionAfter,
    beforeAlt: "Plain white reception wall behind a laminate desk",
    afterAlt: "Reception clad in mirror and hairline stainless steel panels",
  },
];

/* --------------------------------------------------------- applications */

export type ApplicationEntry = {
  name: string;
  description: string;
  image: string;
  alt: string;
  span?: "wide";
};

export const applicationEntries: ApplicationEntry[] = [
  {
    name: "Elevators",
    description:
      "Reflective and textured surfaces for lift doors, cabin walls, ceilings and architectural details.",
    image: appElevator,
    alt: "Elevator cabin clad in bronze hairline stainless steel",
  },
  {
    name: "Feature walls",
    description:
      "Large-format decorative stainless steel that turns a wall into the focal element of a room.",
    image: appInterior,
    alt: "Feature wall in a luxury interior clad in decorative stainless steel",
    span: "wide",
  },
  {
    name: "Hospitality",
    description: "Surfaces for hotels, restaurants, lounges and luxury interiors.",
    image: appHospitality,
    alt: "Restaurant interior with champagne stainless steel wall panels",
  },
  {
    name: "Retail",
    description: "Display backdrops, niches and shopfront details with controlled reflection.",
    image: appRetail,
    alt: "Retail boutique with a black mirror stainless steel feature wall",
  },
  {
    name: "Ceilings",
    description: "Panels and soffits that carry light across a space rather than absorbing it.",
    image: appCeiling,
    alt: "Stainless steel ceiling panels in a lobby",
  },
  {
    name: "Facades & columns",
    description: "Exterior cladding, column wraps and architectural details in SS304 and SS316.",
    image: appExterior,
    alt: "Stainless steel cladding on a building exterior",
  },
];

/* -------------------------------------------------------------- projects */

export type ReferenceEntry = {
  name: string;
  finish: string;
  application: string;
  image: string;
  alt: string;
};

export const referenceStrip: ReferenceEntry[] = [
  {
    name: "Luxury lobby",
    finish: "Hammered / Gold PVD",
    application: "Wall cladding",
    image: baWallAfter,
    alt: "Lounge feature wall in gold hammered stainless steel",
  },
  {
    name: "Elevator interior",
    finish: "Hairline / Bronze PVD",
    application: "Lift cladding",
    image: appElevator,
    alt: "Elevator interior clad in bronze hairline stainless steel",
  },
  {
    name: "Retail interior",
    finish: "Mirror / Black PVD",
    application: "Feature wall",
    image: appRetail,
    alt: "Retail interior with a black mirror stainless steel wall",
  },
  {
    name: "Restaurant",
    finish: "Embossed / Champagne PVD",
    application: "Wall panels",
    image: appHospitality,
    alt: "Restaurant wall in champagne stainless steel panels",
  },
  {
    name: "Reception",
    finish: "Mirror + Hairline",
    application: "Desk and backdrop",
    image: baReceptionAfter,
    alt: "Reception desk and wall in stainless steel",
  },
  {
    name: "Lift lobby",
    finish: "Water Ripple",
    application: "Door and surround cladding",
    image: baLiftAfter,
    alt: "Lift lobby clad in water ripple stainless steel",
  },
];
