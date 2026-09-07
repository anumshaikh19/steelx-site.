import hero from "@/assets/em-hero.jpg";
import statement from "@/assets/em-statement.jpg";
import signature from "@/assets/em-signature.jpg";
import macro from "@/assets/em-macro.jpg";
import patDiamond from "@/assets/em-pat-diamond.jpg";
import patLinear from "@/assets/em-pat-linear.jpg";
import patSquare from "@/assets/em-pat-square.jpg";
import patWave from "@/assets/em-pat-wave.jpg";
import appLift from "@/assets/em-app-lift.jpg";
import appBar from "@/assets/em-app-bar.jpg";
import appDivider from "@/assets/em-app-divider.jpg";
import appCeiling from "@/assets/em-app-ceiling.jpg";
import appRetail from "@/assets/em-app-retail.jpg";
import appReception from "@/assets/em-app-reception.jpg";
import appFacade from "@/assets/em-app-facade.jpg";
import cSilver from "@/assets/em-c-silver.jpg";
import cGold from "@/assets/em-c-gold.jpg";
import cRoseGold from "@/assets/em-c-rose-gold.jpg";
import cBronze from "@/assets/em-c-bronze.jpg";
import cBlack from "@/assets/em-c-black.jpg";
import lightSoft from "@/assets/em-light-soft.jpg";
import lightGrazing from "@/assets/em-light-grazing.jpg";
import lightWarm from "@/assets/em-light-warm.jpg";
import fullSheet from "@/assets/em-fullsheet.jpg";
import fabrication from "@/assets/em-fabrication.jpg";
import sample from "@/assets/em-sample.jpg";

import mirrorMacro from "@/assets/mir-macro.jpg";
import macroHairline from "@/assets/dsl-macro-hairline.jpg";
import macroBeadblast from "@/assets/dsl-macro-beadblast.jpg";
import macroRipple from "@/assets/dsl-macro-ripple.jpg";
import macroHammered from "@/assets/dsl-macro-hammered.jpg";

import { ON_REQUEST, SITE_URL, type Faq } from "@/data/products/designer-sheets";

export { ON_REQUEST, SITE_URL };

/** Central, replaceable image system for the Embossed page. */
export const embossedImages = {
  hero,
  statement,
  signature,
  macro,
  fullSheet,
  fabrication,
  sample,
};

export const whyEmbossed = [
  {
    index: "01",
    title: "Physical depth",
    copy: "The pattern is formed into the steel between rollers. It is geometry, not print, so it casts real shadow and changes as light moves across the panel.",
  },
  {
    index: "02",
    title: "Forgiving surface",
    copy: "Relief scatters reflection, so handling marks and everyday contact read far less than on a flat or polished sheet.",
  },
  {
    index: "03",
    title: "Pattern as identity",
    copy: "Scale and repeat can be selected against a project reference, giving an interior a texture that belongs to it alone.",
  },
];

export type EmPattern = {
  id: string;
  name: string;
  image: string;
  alt: string;
  depth: string;
  note: string;
  confirmed: boolean;
};

export const embossedPatterns: EmPattern[] = [
  {
    id: "diamond",
    name: "Diamond",
    image: patDiamond,
    alt: "Embossed stainless steel sheet with a repeating diamond relief",
    depth: "Medium relief",
    note: "A regular diagonal repeat. Reads as an even field at distance and resolves into geometry up close.",
    confirmed: true,
  },
  {
    id: "linear",
    name: "Linear rib",
    image: patLinear,
    alt: "Embossed stainless steel sheet with straight parallel raised ribs",
    depth: "Shallow to medium relief",
    note: "Parallel raised ribs. The most architectural of the patterns, and the one that most emphasises length or height.",
    confirmed: true,
  },
  {
    id: "square",
    name: "Square grid",
    image: patSquare,
    alt: "Embossed stainless steel sheet with a raised square grid relief",
    depth: "Medium relief",
    note: "A disciplined orthogonal grid that sits well against stone, timber and plaster.",
    confirmed: true,
  },
  {
    id: "wave",
    name: "Wave",
    image: patWave,
    alt: "Embossed stainless steel sheet with a soft undulating wave relief",
    depth: "Soft, flowing relief",
    note: "A softer, organic undulation. Light travels across it rather than breaking on it.",
    confirmed: false,
  },
];

export const patternNote =
  "Pattern, repeat and depth are confirmed against a sample. Availability depends on grade, thickness and sheet format.";

export type EmColour = { id: string; name: string; image: string; alt: string; coating: string; note: string };

export const embossedColours: EmColour[] = [
  {
    id: "silver",
    name: "Silver",
    image: cSilver,
    alt: "Natural silver embossed stainless steel sample strip",
    coating: "Uncoated stainless",
    note: "The relief carries the whole effect — light and shadow only, no colour shift.",
  },
  {
    id: "gold",
    name: "Gold",
    image: cGold,
    alt: "Gold PVD embossed stainless steel sample strip",
    coating: "PVD colour",
    note: "Warm and reflective. Raised areas catch light while the recesses stay deep.",
  },
  {
    id: "rose-gold",
    name: "Rose Gold",
    image: cRoseGold,
    alt: "Rose gold PVD embossed stainless steel sample strip",
    coating: "PVD colour",
    note: "A softer pink-copper tone that keeps the pattern legible under warm light.",
  },
  {
    id: "bronze",
    name: "Bronze",
    image: cBronze,
    alt: "Bronze PVD embossed stainless steel sample strip",
    coating: "PVD colour",
    note: "Deep and warm. The strongest reading of shadow across the relief.",
  },
  {
    id: "black",
    name: "Black",
    image: cBlack,
    alt: "Black PVD embossed stainless steel sample strip",
    coating: "PVD colour",
    note: "Graphic and contemporary. The pattern reads as light on dark rather than as colour.",
  },
];

export const colourNote =
  "PVD colour, pattern, grade and thickness are confirmed together at enquiry stage. Not every combination is available on every grade or format.";

export type EmLightState = { id: string; name: string; image: string; alt: string; copy: string };

export const embossedLight: EmLightState[] = [
  {
    id: "soft",
    name: "Diffuse daylight",
    image: lightSoft,
    alt: "Embossed stainless steel panels under soft diffuse daylight",
    copy: "Under even daylight the relief reads quietly — a texture you notice at close range rather than across the room.",
  },
  {
    id: "grazing",
    name: "Grazing light",
    image: lightGrazing,
    alt: "Embossed stainless steel panels under strong grazing light with deep shadow",
    copy: "Bring the light in at an angle and the same panel becomes graphic. Shadow does the drawing.",
  },
  {
    id: "warm",
    name: "Warm interior light",
    image: lightWarm,
    alt: "Embossed stainless steel panels under warm evening interior lighting",
    copy: "Warm sources pool in the raised areas, which is why embossed surfaces suit bars, lounges and evening interiors.",
  },
];

export type EmApplication = { id: string; name: string; copy: string; image: string; alt: string; full?: boolean };

export const embossedApplications: EmApplication[] = [
  {
    id: "lift",
    name: "Lift cabins",
    copy: "Relief at hand height hides everyday contact, which makes embossed panels a practical cabin lining.",
    image: appLift,
    alt: "Lift cabin lined with embossed stainless steel panels",
  },
  {
    id: "reception",
    name: "Reception fronts",
    copy: "A repeating pattern gives a desk face presence without adding another material.",
    image: appReception,
    alt: "Reception desk faced in gold PVD embossed stainless steel",
  },
  {
    id: "bar",
    name: "Bars & hospitality",
    copy: "Warm light across deep relief is the strongest use of the finish.",
    image: appBar,
    alt: "Hotel bar front clad in bronze PVD embossed stainless steel",
    full: true,
  },
  {
    id: "divider",
    name: "Room dividers",
    copy: "Framed embossed panels used as freestanding screens and partitions.",
    image: appDivider,
    alt: "Room divider screen made from champagne PVD embossed stainless steel panels",
  },
  {
    id: "retail",
    name: "Retail interiors",
    copy: "Feature walls and fixture faces where texture has to survive daily contact.",
    image: appRetail,
    alt: "Retail feature wall in black PVD embossed stainless steel",
  },
  {
    id: "ceiling",
    name: "Ceilings & soffits",
    copy: "Overhead planes where grazing light from below reveals the whole pattern.",
    image: appCeiling,
    alt: "Lobby ceiling clad in embossed stainless steel panels",
  },
  {
    id: "facade",
    name: "Entrances & columns",
    copy: "Column casings, soffits and entrance details, subject to grade and exposure.",
    image: appFacade,
    alt: "Building entrance soffit and columns clad in embossed stainless steel",
  },
];

export const embossedSpecs: { label: string; value: string }[] = [
  { label: "Material", value: "Stainless steel" },
  { label: "Grade", value: "SS304, SS316 — other grades available on request" },
  { label: "Surface finish", value: "Embossed (rolled three-dimensional relief)" },
  { label: "Pattern", value: "Diamond, linear rib, square grid, wave — custom on request" },
  { label: "Relief depth", value: ON_REQUEST },
  { label: "Colour", value: "Silver, Gold, Rose Gold, Bronze, Black" },
  { label: "PVD", value: "Available on coloured options" },
  { label: "Thickness", value: "Available according to grade, pattern and application" },
  { label: "Sheet size", value: "4 × 8 ft, 4 × 10 ft, 5 × 10 ft, custom — typical formats" },
  { label: "Width", value: ON_REQUEST },
  { label: "Length", value: ON_REQUEST },
  { label: "Surface protection", value: "Protective film; anti-fingerprint on request" },
  { label: "Processing", value: "Cutting, bending, grooving, welding, edge finishing — on request" },
  { label: "Customisation", value: ON_REQUEST },
];

export const embossedFabrication = [
  { step: "Roll", copy: "The flat sheet passes between patterned rollers, which form the relief into the steel." },
  { step: "Colour", copy: "PVD colour is applied over the formed surface, so the pattern stays visible through the tone." },
  { step: "Cut", copy: "Sheets cut to panel sizes with the pattern repeat set out across the elevation." },
  { step: "Bend", copy: "Press braking to returns and corners; the relief continues around the fold." },
  { step: "Install", copy: "Delivered with panel sequence identified so the repeat aligns on site." },
];

export const fabricationServices = [
  "Laser cutting",
  "CNC cutting",
  "Bending",
  "V-grooving",
  "Welding",
  "Edge finishing",
  "Custom fabrication",
];

export const fabricationNote =
  "Processing availability depends on grade, thickness, pattern depth and project requirements.";

export const embossedVsFlat = {
  flat: {
    name: "Flat finishes",
    image: mirrorMacro,
    alt: "Macro of a flat polished stainless steel surface",
    points: ["Reflection carries the surface", "Marks show readily", "Reads as a plane", "Light bounces off"],
  },
  embossed: {
    name: "Embossed",
    image: macro,
    alt: "Macro of embossed stainless steel relief",
    points: ["Shadow carries the surface", "Marks are broken up", "Reads as a texture", "Light is held and released"],
  },
};

export const relatedFinishes = [
  { name: "Mirror", slug: "mirror", image: mirrorMacro, alt: "Mirror polished stainless steel" },
  { name: "Hairline", slug: "hairline", image: macroHairline, alt: "Hairline brushed stainless steel" },
  { name: "Bead Blast", slug: "bead-blast", image: macroBeadblast, alt: "Bead blasted stainless steel" },
  { name: "Water Ripple", slug: "water-ripple", image: macroRipple, alt: "Water ripple stainless steel" },
  { name: "Hammered", slug: "hammered", image: macroHammered, alt: "Hammered stainless steel" },
];

export const careRules = [
  "Wipe with a soft microfiber cloth and a non-abrasive stainless steel cleaner.",
  "Work with the pattern, not across it, so cleaner does not sit in the recesses.",
  "Dry the surface after cleaning to avoid marking in the deeper areas of the relief.",
  "Avoid steel wool, abrasive pads and harsh abrasive cleaners.",
];

export const embossedFaqs: Faq[] = [
  {
    q: "What is embossed stainless steel?",
    a: "Embossed stainless steel is formed between patterned rollers, which lift the surface into a repeating three-dimensional relief. The geometry is physical, so it casts real shadow and changes with the light.",
  },
  {
    q: "What is the difference between embossed and etched stainless steel?",
    a: "Embossing forms the sheet mechanically, so the pattern has physical depth on both faces. Etching removes material chemically to create a pattern that is largely visual rather than raised.",
  },
  {
    q: "Which patterns are available?",
    a: "Diamond, linear rib, square grid and wave are typical. Custom patterns can be developed against a project reference, subject to tooling and production.",
  },
  {
    q: "Can embossed sheets be PVD coloured?",
    a: "Yes. PVD colour is applied over the formed surface, so the relief remains visible through the colour.",
  },
  {
    q: "Which colours are available?",
    a: "Silver (uncoated), Gold, Rose Gold, Bronze and Black. Availability of a specific colour against a specific pattern, grade and thickness is confirmed at enquiry stage.",
  },
  {
    q: "What stainless steel grades are available?",
    a: "SS304 and SS316 are the standard grades. Other grades are available on request.",
  },
  {
    q: "What thicknesses are available?",
    a: "Thickness is available according to grade, pattern and application. We confirm the options for your project on enquiry.",
  },
  {
    q: "What sheet sizes are available?",
    a: "4 × 8 ft, 4 × 10 ft and 5 × 10 ft are typical formats, and custom sizes are available. Formats are confirmed per order.",
  },
  {
    q: "Can embossed sheets be cut and bent?",
    a: "Yes. Cutting, bending and V-grooving are available on request. Suitability depends on grade, thickness, pattern depth and the detail required.",
  },
  {
    q: "Does the pattern align between panels?",
    a: "Repeat alignment across adjacent panels is set out at drawing stage and identified on delivery. Tell us the elevation and we will plan the sequence with you.",
  },
  {
    q: "Does embossed stainless steel show fingerprints?",
    a: "Less than flat or mirror surfaces, because the relief scatters reflection. Marks can still show on dark PVD colours, and anti-fingerprint treatment is available on request.",
  },
  {
    q: "How should embossed stainless steel be cleaned?",
    a: "Use a soft microfiber cloth with a suitable non-abrasive stainless steel cleaner, working with the pattern and drying afterwards. Avoid steel wool and abrasive pads.",
  },
  {
    q: "Can I request a sample?",
    a: "Yes. Request a physical sample so the pattern depth, colour and light interaction can be assessed on site before specification.",
  },
];
