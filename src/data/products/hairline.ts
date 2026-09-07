import hero from "@/assets/hl-hero.jpg";
import macroGrain from "@/assets/hl-macro-grain.jpg";
import dirHorizontal from "@/assets/hl-dir-horizontal.jpg";
import dirVertical from "@/assets/hl-dir-vertical.jpg";
import dirCustom from "@/assets/hl-dir-custom.jpg";
import scaleFine from "@/assets/hl-scale-fine.jpg";
import scaleCoarse from "@/assets/hl-scale-coarse.jpg";
import silver from "@/assets/hl-c-silver.jpg";
import gold from "@/assets/hl-c-gold.jpg";
import roseGold from "@/assets/hl-c-rose-gold.jpg";
import champagne from "@/assets/hl-c-champagne.jpg";
import bronze from "@/assets/hl-c-bronze.jpg";
import black from "@/assets/hl-c-black.jpg";
import blue from "@/assets/hl-c-blue.jpg";
import macroGold from "@/assets/hl-macro-gold.jpg";
import macroBlack from "@/assets/hl-macro-black.jpg";
import edge from "@/assets/hl-edge.jpg";
import lightTravel from "@/assets/hl-light-travel.jpg";
import elevator from "@/assets/hl-app-elevator.jpg";
import wall from "@/assets/hl-app-wall.jpg";
import hospitality from "@/assets/hl-app-hospitality.jpg";
import retail from "@/assets/hl-app-retail.jpg";
import furniture from "@/assets/hl-app-furniture.jpg";
import reception from "@/assets/hl-app-reception.jpg";
import columns from "@/assets/hl-app-columns.jpg";
import doors from "@/assets/hl-app-doors.jpg";
import archHorizontal from "@/assets/hl-arch-horizontal.jpg";
import archVertical from "@/assets/hl-arch-vertical.jpg";
import alignRandom from "@/assets/hl-align-random.jpg";
import alignAligned from "@/assets/hl-align-aligned.jpg";
import baLiftBefore from "@/assets/dsl-ba-lift-before.jpg";
import baReceptionBefore from "@/assets/dsl-ba-reception-before.jpg";
import baReceptionAfter from "@/assets/hl-ba-reception-after.jpg";
import baRetailBefore from "@/assets/mir-ba-retail-before.jpg";
import baRetailAfter from "@/assets/hl-ba-retail-after.jpg";

import mirrorMacro from "@/assets/mir-macro.jpg";
import dslMacroEmbossed from "@/assets/dsl-macro-embossed.jpg";
import dslMacroBeadblast from "@/assets/dsl-macro-beadblast.jpg";
import dslMacroRipple from "@/assets/dsl-macro-ripple.jpg";
import dslMacroHammered from "@/assets/dsl-macro-hammered.jpg";

import { ON_REQUEST, SITE_URL, type Faq } from "@/data/products/designer-sheets";

export { ON_REQUEST, SITE_URL };

/** Central, replaceable image system for the Hairline page. */
export const hairlineImages = {
  hero,
  macroGrain,
  grainDirection: { horizontal: dirHorizontal, vertical: dirVertical, custom: dirCustom },
  grainScale: { fine: scaleFine, standard: dirHorizontal, coarse: scaleCoarse },
  silver,
  gold,
  roseGold,
  champagne,
  bronze,
  black,
  blue,
  elevator,
  wall,
  retail,
  hospitality,
  furniture,
  reception,
  columns,
  doors,
  architecture: { horizontal: archHorizontal, vertical: archVertical },
  panelAlignment: { random: alignRandom, aligned: alignAligned },
  beforeAfter: {
    lift: { before: baLiftBefore, after: archVertical },
    reception: { before: baReceptionBefore, after: baReceptionAfter },
    retail: { before: baRetailBefore, after: baRetailAfter },
  },
  macro: { gold: macroGold, black: macroBlack, edge, light: lightTravel },
};

export type GrainDirection = {
  id: "horizontal" | "vertical" | "custom";
  name: string;
  image: string;
  alt: string;
  /** CSS angle used for the directional light sweep overlay. */
  angle: number;
  note: string;
  confirmed: boolean;
};

export const grainDirections: GrainDirection[] = [
  {
    id: "horizontal",
    name: "Horizontal",
    image: dirHorizontal,
    alt: "Hairline stainless steel panel with grain running horizontally",
    angle: 90,
    note: "Grain runs across the panel. Widely used on wall cladding and long runs where the surface should read as continuous and calm.",
    confirmed: true,
  },
  {
    id: "vertical",
    name: "Vertical",
    image: dirVertical,
    alt: "Hairline stainless steel panel with grain running vertically",
    angle: 0,
    note: "Grain runs top to bottom. Common on lift cabins, door leaves and columns, where it emphasises height.",
    confirmed: true,
  },
  {
    id: "custom",
    name: "Custom direction",
    image: dirCustom,
    alt: "Brushed stainless steel panel with a custom diagonal grain direction",
    angle: 45,
    note: "Non-standard grain orientation for specific detailing. Direction subject to production and project requirements.",
    confirmed: false,
  },
];

export type GrainScale = {
  id: string;
  name: string;
  image: string;
  alt: string;
  line: string;
  confirmed: boolean;
};

export const grainScales: GrainScale[] = [
  {
    id: "standard",
    name: "Standard hairline",
    image: dirHorizontal,
    alt: "Standard hairline brushed stainless steel",
    line: "The reference grain. Fine, continuous and even across the sheet.",
    confirmed: true,
  },
  {
    id: "fine",
    name: "Fine hairline",
    image: scaleFine,
    alt: "Fine grain brushed stainless steel macro",
    line: "A tighter, quieter grain that reads almost satin at a distance.",
    confirmed: false,
  },
  {
    id: "coarse",
    name: "Coarse hairline",
    image: scaleCoarse,
    alt: "Coarse grain brushed stainless steel macro",
    line: "A wider, more pronounced brush line with stronger directional texture.",
    confirmed: false,
  },
  {
    id: "custom",
    name: "Custom grain",
    image: macroGrain,
    alt: "Macro of brushed stainless steel grain",
    line: "Grain scale developed against a project reference or approved sample.",
    confirmed: false,
  },
];

export type HairlineColour = {
  id: string;
  name: string;
  image: string;
  alt: string;
  coating: string;
  note: string;
};

export const hairlineColours: HairlineColour[] = [
  {
    id: "silver",
    name: "Silver",
    image: silver,
    alt: "Silver hairline brushed stainless steel strip",
    coating: "Uncoated stainless",
    note: "The natural brushed surface. Neutral, cool and the most widely specified hairline.",
  },
  {
    id: "gold",
    name: "Gold",
    image: gold,
    alt: "Gold PVD hairline brushed stainless steel strip",
    coating: "PVD colour",
    note: "Warm gold drawn over the grain, so the brush lines stay visible rather than reading as flat colour.",
  },
  {
    id: "rose-gold",
    name: "Rose Gold",
    image: roseGold,
    alt: "Rose gold PVD hairline brushed stainless steel strip",
    coating: "PVD colour",
    note: "A softer pink-copper tone that keeps the linear texture legible under warm light.",
  },
  {
    id: "champagne",
    name: "Champagne",
    image: champagne,
    alt: "Champagne PVD hairline brushed stainless steel strip",
    coating: "PVD colour",
    note: "Pale and restrained. Reads close to natural steel with a warm shift.",
  },
  {
    id: "bronze",
    name: "Bronze",
    image: bronze,
    alt: "Bronze PVD hairline brushed stainless steel strip",
    coating: "PVD colour",
    note: "Deep and warm. The grain shows as fine bright lines through the darker body.",
  },
  {
    id: "black",
    name: "Black",
    image: black,
    alt: "Black PVD hairline brushed stainless steel strip",
    coating: "PVD colour",
    note: "The grain becomes the only source of light on the surface, which makes direction very visible.",
  },
  {
    id: "blue",
    name: "Blue",
    image: blue,
    alt: "Blue PVD hairline brushed stainless steel strip",
    coating: "PVD colour",
    note: "A saturated tone for feature surfaces. Availability confirmed per project.",
  },
];

export const colourAvailabilityNote =
  "PVD colour, grain direction, grade and thickness are confirmed together at enquiry stage. Not every combination is available on every grade or format.";

export const macroGallery = [
  { id: "grain", image: macroGrain, alt: "Macro of fine directional hairline grain", label: "Fine grain" },
  { id: "light", image: lightTravel, alt: "Light travelling along the grain of brushed steel", label: "Light along the grain" },
  { id: "gold", image: macroGold, alt: "Macro of gold PVD hairline stainless steel", label: "Gold hairline" },
  { id: "black", image: macroBlack, alt: "Macro of black PVD hairline stainless steel", label: "Black hairline" },
  { id: "edge", image: edge, alt: "Macro of the cut edge of a hairline stainless steel sheet", label: "Edge detail" },
  { id: "silver", image: scaleFine, alt: "Macro of silver hairline brushed stainless steel", label: "Silver hairline" },
];

export type HairlineApplication = {
  id: string;
  name: string;
  copy: string;
  image: string;
  alt: string;
  tall?: boolean;
};

export const hairlineApplications: HairlineApplication[] = [
  {
    id: "elevators",
    name: "Elevators",
    copy: "Directional stainless steel surfaces for cabin walls, doors and architectural details.",
    image: elevator,
    alt: "Lift cabin clad in hairline stainless steel",
    tall: true,
  },
  {
    id: "wall-cladding",
    name: "Wall cladding",
    copy: "Large-format brushed panels with a controlled linear appearance.",
    image: wall,
    alt: "Hairline stainless steel wall cladding in a lobby",
  },
  {
    id: "hospitality",
    name: "Hospitality",
    copy: "Hotel lobbies, restaurants, bars and feature interiors.",
    image: hospitality,
    alt: "Hotel lobby with hairline stainless steel detailing",
  },
  {
    id: "retail",
    name: "Retail",
    copy: "Display walls, furniture and premium fixtures.",
    image: retail,
    alt: "Retail display wall in black hairline stainless steel",
  },
  {
    id: "furniture",
    name: "Furniture",
    copy: "Cabinetry, tables, panels and architectural furniture details.",
    image: furniture,
    alt: "Furniture faced in hairline stainless steel",
    tall: true,
  },
  {
    id: "reception",
    name: "Reception",
    copy: "Feature desks, counters and wall panels.",
    image: reception,
    alt: "Reception desk faced in hairline stainless steel",
  },
  {
    id: "doors",
    name: "Doors & panels",
    copy: "Architectural doors and decorative panels.",
    image: doors,
    alt: "Architectural doors faced in hairline stainless steel",
  },
  {
    id: "columns",
    name: "Columns",
    copy: "Continuous vertical grain creates a clean architectural rhythm.",
    image: columns,
    alt: "Columns clad in hairline stainless steel with vertical grain",
    tall: true,
  },
];

export const hairlineBeforeAfter = [
  {
    id: "lift",
    title: "Lift cabin",
    before: hairlineImages.beforeAfter.lift.before,
    after: hairlineImages.beforeAfter.lift.after,
    beforeAlt: "Plain lift cabin interior",
    afterAlt: "Lift cabin lined with hairline stainless steel",
    note: "Silver hairline, vertical grain",
  },
  {
    id: "reception",
    title: "Reception wall",
    before: hairlineImages.beforeAfter.reception.before,
    after: hairlineImages.beforeAfter.reception.after,
    beforeAlt: "Plain reception wall",
    afterAlt: "Reception feature wall in gold PVD hairline stainless steel",
    note: "Gold PVD hairline",
  },
  {
    id: "retail",
    title: "Retail fixture",
    before: hairlineImages.beforeAfter.retail.before,
    after: hairlineImages.beforeAfter.retail.after,
    beforeAlt: "Plain retail fixture",
    afterAlt: "Retail fixture in black PVD hairline stainless steel",
    note: "Black PVD hairline",
  },
];

export const hairlineSpecs: { label: string; value: string }[] = [
  { label: "Material", value: "Stainless steel" },
  { label: "Grade", value: "SS304, SS316 — other grades available on request" },
  { label: "Surface finish", value: "Hairline (brushed, directional)" },
  { label: "Grain", value: "Horizontal or vertical; custom direction on request" },
  { label: "Colour", value: "Silver, Gold, Rose Gold, Champagne, Bronze, Black, Blue" },
  { label: "PVD", value: "Available on coloured options" },
  { label: "Thickness", value: "Available according to grade and application" },
  { label: "Width", value: ON_REQUEST },
  { label: "Length", value: ON_REQUEST },
  { label: "Sheet size", value: "4 × 8 ft, 4 × 10 ft, 5 × 10 ft, custom — typical formats" },
  { label: "Surface protection", value: "Protective film; anti-fingerprint on request" },
  { label: "Processing", value: "Cutting, bending, grooving, welding, edge finishing — on request" },
  { label: "Customisation", value: ON_REQUEST },
];

export const fabricationSteps = [
  { step: "Cut", copy: "Sheets cut to project dimensions before finishing details are applied." },
  { step: "Groove", copy: "V-grooving prepares clean folded corners without breaking the grain line." },
  { step: "Bend", copy: "Press braking to profiles, returns and panel edges." },
  { step: "Form", copy: "Panels, cassettes and fabricated assemblies built to drawing." },
  { step: "Install", copy: "Delivered with grain direction identified for the installation sequence." },
];

export const fabricationServices = [
  "Laser cutting",
  "CNC cutting",
  "Waterjet",
  "Bending",
  "V-grooving",
  "Welding",
  "Edge finishing",
  "Custom fabrication",
];

export const fabricationNote =
  "Processing availability depends on grade, thickness, finish and project requirements.";

export const hairlineVsMirror = {
  mirror: {
    name: "Mirror",
    image: mirrorMacro,
    alt: "Macro of mirror polished stainless steel",
    points: ["High reflection", "Non-directional visual", "Dramatic", "Reflective interiors"],
  },
  hairline: {
    name: "Hairline",
    image: macroGrain,
    alt: "Macro of hairline brushed stainless steel",
    points: ["Directional reflection", "Fine linear texture", "Controlled", "Architectural precision"],
  },
};

export const relatedFinishes = [
  { name: "Mirror", slug: "mirror", image: mirrorMacro, alt: "Mirror polished stainless steel" },
  { name: "Embossed", slug: "embossed", image: dslMacroEmbossed, alt: "Embossed stainless steel" },
  { name: "Bead Blast", slug: "bead-blast", image: dslMacroBeadblast, alt: "Bead blasted stainless steel" },
  { name: "Water Ripple", slug: "water-ripple", image: dslMacroRipple, alt: "Water ripple stainless steel" },
  { name: "Hammered", slug: "hammered", image: dslMacroHammered, alt: "Hammered stainless steel" },
];

export const hairlineFaqs: Faq[] = [
  {
    q: "What is hairline stainless steel?",
    a: "Hairline is a brushed stainless steel finish with fine, continuous directional lines produced by abrasive finishing. The surface reflects light along the direction of the grain rather than mirroring the room.",
  },
  {
    q: "What is the difference between hairline and mirror stainless steel?",
    a: "Mirror is polished to a highly reflective, non-directional surface. Hairline is brushed, so reflection is softened and follows the grain. Hairline generally shows handling marks less readily than mirror.",
  },
  {
    q: "Is hairline the same as No. 4 finish?",
    a: "Hairline and No. 4 are commonly related terms for brushed, directional finishes, but they are not automatically identical. Grain fineness and appearance vary by producer and specification, so we confirm the specific finish supplied against a sample.",
  },
  {
    q: "What is grain direction?",
    a: "Grain direction is the orientation of the brush lines on the sheet — usually horizontal or vertical relative to how the panel is installed. It affects how light travels across the surface and how adjacent panels read together.",
  },
  {
    q: "Can hairline stainless steel be PVD coloured?",
    a: "Yes. PVD colour is applied over the brushed surface, so the grain remains visible through the colour.",
  },
  {
    q: "What colours are available?",
    a: "Silver (uncoated), Gold, Rose Gold, Champagne, Bronze, Black and Blue. Availability of a specific colour against a specific grade, thickness and grain is confirmed at enquiry stage.",
  },
  {
    q: "What stainless steel grades are available?",
    a: "SS304 and SS316 are the standard grades. Other grades are available on request.",
  },
  {
    q: "What thicknesses are available?",
    a: "Thickness is available according to grade and application. We confirm the options for your project on enquiry.",
  },
  {
    q: "What sheet sizes are available?",
    a: "4 × 8 ft, 4 × 10 ft and 5 × 10 ft are typical formats, and custom sizes are available. Formats are confirmed per order.",
  },
  {
    q: "Can hairline sheets be cut to size?",
    a: "Yes. Cutting to size is available on request; the method depends on grade, thickness and the detail required.",
  },
  {
    q: "Can hairline stainless steel be bent?",
    a: "Yes. Bending and V-grooving are available on request. Suitability depends on grade, thickness and the radius or corner detail.",
  },
  {
    q: "Can hairline be used for elevator interiors?",
    a: "Hairline is widely used for lift cabin walls, door leaves and architectural details, because the brushed surface is less prone to showing everyday handling marks than mirror.",
  },
  {
    q: "Does hairline stainless steel show fingerprints?",
    a: "Marks are generally less visible on hairline than on mirror, though they can still show, particularly on dark PVD colours. Anti-fingerprint treatment is available on request.",
  },
  {
    q: "How should hairline stainless steel be cleaned?",
    a: "Use a soft microfiber cloth and a suitable non-abrasive stainless steel cleaner, wiping along the direction of the grain. Avoid steel wool, abrasive pads and harsh abrasive cleaners.",
  },
  {
    q: "Can I request a sample?",
    a: "Yes. Request a physical sample before final specification so the grain, colour and light interaction can be assessed on site.",
  },
];

/* ------------------------------------------------------------------
   Editorial layer — architectural photography for the redesigned page.
   Every image is referenced through hairlineImages so it can be
   replaced later with real STEELX photography.
   ------------------------------------------------------------------ */

import edHero from "@/assets/hl-ed-hero.jpg";
import edStatement from "@/assets/hl-ed-statement.jpg";
import edSignature from "@/assets/hl-ed-signature.jpg";
import edLightDay from "@/assets/hl-ed-light-day.jpg";
import edLightWarm from "@/assets/hl-ed-light-warm.jpg";
import edLightDirect from "@/assets/hl-ed-light-direct.jpg";
import edIntSilver from "@/assets/hl-ed-int-silver.jpg";
import edIntGold from "@/assets/hl-ed-int-gold.jpg";
import edIntRose from "@/assets/hl-ed-int-rose.jpg";
import edIntChampagne from "@/assets/hl-ed-int-champagne.jpg";
import edIntBronze from "@/assets/hl-ed-int-bronze.jpg";
import edIntBlack from "@/assets/hl-ed-int-black.jpg";
import edIntBlue from "@/assets/hl-ed-int-blue.jpg";
import edFullSheet from "@/assets/hl-ed-fullsheet.jpg";
import edFabrication from "@/assets/hl-ed-fabrication.jpg";
import edSample from "@/assets/hl-ed-sample.jpg";

export const hairlineEditorialImages = {
  heroArchitecture: edHero,
  materialStatement: edStatement,
  signature: edSignature,
  fullSheet: edFullSheet,
  fabrication: edFabrication,
  sample: edSample,
  light: { daylight: edLightDay, warm: edLightWarm, directional: edLightDirect },
  interiors: {
    silver: edIntSilver,
    gold: edIntGold,
    "rose-gold": edIntRose,
    champagne: edIntChampagne,
    bronze: edIntBronze,
    black: edIntBlack,
    blue: edIntBlue,
  } as Record<string, string>,
};

export const whyHairline = [
  {
    index: "01",
    title: "Subtle reflection",
    copy: "A controlled metallic surface that responds softly to surrounding light.",
  },
  {
    index: "02",
    title: "Directional grain",
    copy: "Fine brushing creates a consistent visual direction across the surface.",
  },
  {
    index: "03",
    title: "Architectural character",
    copy: "A refined finish suited to contemporary interiors and architectural detailing.",
  },
];

export type GalleryItem = {
  id: string;
  image: string;
  alt: string;
  caption: string;
  sub: string;
  span: string;
  ratio: string;
};

export const editorialGallery: GalleryItem[] = [
  {
    id: "silver-wall",
    image: edIntSilver,
    alt: "Silver hairline stainless steel wall panels and lift doors in a pale contemporary lobby",
    caption: "Silver hairline",
    sub: "Wall and lift portal",
    span: "lg:col-span-7",
    ratio: "aspect-[16/10]",
  },
  {
    id: "elevator",
    image: archVertical,
    alt: "Lift cabin lined in hairline stainless steel with vertical grain",
    caption: "Vertical grain",
    sub: "Elevator cabin",
    span: "lg:col-span-4 lg:col-start-9",
    ratio: "aspect-[3/4]",
  },
  {
    id: "reception",
    image: reception,
    alt: "Reception desk faced in hairline stainless steel",
    caption: "Reception",
    sub: "Feature counter",
    span: "lg:col-span-5 lg:col-start-2",
    ratio: "aspect-[4/3]",
  },
  {
    id: "furniture",
    image: furniture,
    alt: "Furniture faced in hairline stainless steel",
    caption: "Furniture",
    sub: "Cabinetry detail",
    span: "lg:col-span-4 lg:col-start-8",
    ratio: "aspect-[4/5]",
  },
  {
    id: "panel",
    image: archHorizontal,
    alt: "Architectural panel in hairline stainless steel with horizontal grain",
    caption: "Architectural panel",
    sub: "Horizontal grain",
    span: "lg:col-span-6",
    ratio: "aspect-[3/2]",
  },
  {
    id: "gold",
    image: edIntGold,
    alt: "Gold PVD hairline stainless steel feature wall in a luxury interior",
    caption: "Gold hairline",
    sub: "Interior feature",
    span: "lg:col-span-5 lg:col-start-8",
    ratio: "aspect-[16/10]",
  },
  {
    id: "black",
    image: edIntBlack,
    alt: "Black PVD hairline stainless steel panels in a contemporary interior",
    caption: "Black hairline",
    sub: "Graphic surface",
    span: "lg:col-span-7 lg:col-start-3",
    ratio: "aspect-[16/9]",
  },
  {
    id: "champagne",
    image: edIntChampagne,
    alt: "Champagne PVD hairline stainless steel lobby panelling",
    caption: "Champagne hairline",
    sub: "Lobby panelling",
    span: "lg:col-span-3",
    ratio: "aspect-[3/4]",
  },
];

export const lightStates = [
  {
    id: "daylight",
    name: "Soft daylight",
    image: edLightDay,
    alt: "Hairline stainless steel under soft daylight",
    line: "Even, diffuse light. The grain reads as a quiet texture rather than a reflection.",
  },
  {
    id: "warm",
    name: "Warm interior light",
    image: edLightWarm,
    alt: "Hairline stainless steel under warm interior lighting",
    line: "Warm downlights lift the tone of the surface and soften the contrast of the brush lines.",
  },
  {
    id: "directional",
    name: "Directional light",
    image: edLightDirect,
    alt: "Hairline stainless steel under strong directional light",
    line: "Grazing light stretches into a band along the grain instead of forming a mirrored hotspot.",
  },
];

export const colourStory = [
  {
    id: "silver",
    name: "Silver",
    image: edIntSilver,
    alt: "Silver hairline stainless steel in a contemporary interior",
    words: ["Quiet.", "Architectural.", "Timeless."],
  },
  {
    id: "gold",
    name: "Gold",
    image: edIntGold,
    alt: "Gold PVD hairline stainless steel in a luxury interior",
    words: ["Warm.", "Luxurious.", "Expressive."],
  },
  {
    id: "black",
    name: "Black",
    image: edIntBlack,
    alt: "Black PVD hairline stainless steel in a contemporary interior",
    words: ["Deep.", "Contemporary.", "Graphic."],
  },
];

export const finishNav = [
  {
    id: "mirror",
    name: "Mirror",
    slug: "mirror",
    image: mirrorMacro,
    alt: "Mirror polished stainless steel",
    line: "Highly reflective and smooth — the room appears in the surface.",
  },
  {
    id: "hairline",
    name: "Hairline",
    slug: "hairline",
    image: macroGrain,
    alt: "Hairline brushed stainless steel",
    line: "Fine directional brushing with a controlled, quiet reflection.",
  },
  {
    id: "embossed",
    name: "Embossed",
    slug: "embossed",
    image: dslMacroEmbossed,
    alt: "Embossed stainless steel",
    line: "A raised, three-dimensional surface with physical depth.",
  },
  {
    id: "bead-blast",
    name: "Bead Blast",
    slug: "bead-blast",
    image: dslMacroBeadblast,
    alt: "Bead blasted stainless steel",
    line: "A soft, even matte surface that diffuses light almost completely.",
  },
  {
    id: "water-ripple",
    name: "Water Ripple",
    slug: "water-ripple",
    image: dslMacroRipple,
    alt: "Water ripple stainless steel",
    line: "A flowing, rippled reflection that moves as you pass it.",
  },
  {
    id: "hammered",
    name: "Hammered",
    slug: "hammered",
    image: dslMacroHammered,
    alt: "Hammered stainless steel",
    line: "An irregular, hand-worked texture that scatters light.",
  },
];

export const materialDetails: { label: string; value: string }[] = [
  { label: "Material", value: "Stainless steel" },
  { label: "Surface", value: "Hairline / brushed" },
  { label: "Grade", value: "SS304 / SS316" },
  { label: "Colour", value: "Natural / PVD options" },
  { label: "Thickness", value: "Available according to grade and application" },
  { label: "Size", value: "Available formats / custom" },
  { label: "Protection", value: "Protective film where applicable" },
];
