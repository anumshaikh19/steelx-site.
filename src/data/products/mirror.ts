import hero from "@/assets/mir-hero.jpg";
import fullSheet from "@/assets/mir-full-sheet.jpg";
import macro from "@/assets/mir-macro.jpg";
import edge from "@/assets/mir-edge.jpg";
import reflection from "@/assets/mir-reflection.jpg";
import silver from "@/assets/mir-c-silver.jpg";
import gold from "@/assets/mir-c-gold.jpg";
import roseGold from "@/assets/mir-c-rose-gold.jpg";
import champagne from "@/assets/mir-c-champagne.jpg";
import bronze from "@/assets/mir-c-bronze.jpg";
import black from "@/assets/mir-c-black.jpg";
import blue from "@/assets/mir-c-blue.jpg";
import elevator from "@/assets/mir-app-elevator.jpg";
import hospitality from "@/assets/mir-app-hospitality.jpg";
import retail from "@/assets/mir-app-retail.jpg";
import wallCladding from "@/assets/mir-app-wall.jpg";
import ceiling from "@/assets/mir-app-ceiling.jpg";
import furniture from "@/assets/mir-app-furniture.jpg";
import signage from "@/assets/mir-app-signage.jpg";
import baLiftBefore from "@/assets/dsl-ba-lift-before.jpg";
import baLiftAfter from "@/assets/dsl-ba-lift-after.jpg";
import baReceptionBefore from "@/assets/dsl-ba-reception-before.jpg";
import baReceptionAfter from "@/assets/dsl-ba-reception-after.jpg";
import baRetailBefore from "@/assets/mir-ba-retail-before.jpg";
import baRetailAfter from "@/assets/mir-ba-retail-after.jpg";

import { ON_REQUEST, SITE_URL, type Faq } from "@/data/products/designer-sheets";

export { ON_REQUEST, SITE_URL };

/** Central, replaceable image system for the Mirror page. */
export const mirrorImages = {
  hero,
  fullSheet,
  macro,
  edge,
  reflection,
  silver,
  gold,
  roseGold,
  champagne,
  bronze,
  black,
  blue,
  elevator,
  hospitality,
  retail,
  wallCladding,
  ceiling,
  furniture,
  signage,
  beforeAfter: {
    lift: { before: baLiftBefore, after: baLiftAfter },
    reception: { before: baReceptionBefore, after: baReceptionAfter },
    retail: { before: baRetailBefore, after: baRetailAfter },
  },
};

export type MirrorColour = {
  id: string;
  name: string;
  /** Future SEO route — pages are not built yet. */
  path: string;
  image: string;
  alt: string;
  base: string;
  coating: string;
  note: string;
  light: { highlight: string; mid: string; shadow: string };
};

export const mirrorColours: MirrorColour[] = [
  {
    id: "silver",
    name: "Silver",
    path: "/designer-sheets/mirror/silver-mirror-stainless-steel-sheet",
    image: silver,
    alt: "Silver mirror polished stainless steel panels in a minimal interior",
    base: "Mirror polished stainless steel",
    coating: "Uncoated",
    note: "The natural mirror surface: a cool, neutral reflection with no colour cast.",
    light: { highlight: "rgba(255,255,255,0.55)", mid: "rgba(198,208,216,0.22)", shadow: "rgba(6,8,10,0.55)" },
  },
  {
    id: "gold",
    name: "Gold",
    path: "/designer-sheets/mirror/gold-pvd-mirror-stainless-steel-sheet",
    image: gold,
    alt: "Gold PVD mirror stainless steel wall panels in a luxury lobby",
    base: "Mirror polished stainless steel",
    coating: "PVD gold",
    note: "A warm gold reflection over a mirror-polished base. Tone reads differently under daylight and warm lighting.",
    light: { highlight: "rgba(255,226,150,0.6)", mid: "rgba(196,150,60,0.26)", shadow: "rgba(24,15,3,0.55)" },
  },
  {
    id: "rose-gold",
    name: "Rose Gold",
    path: "/designer-sheets/mirror/rose-gold-pvd-mirror-stainless-steel-sheet",
    image: roseGold,
    alt: "Rose gold PVD mirror stainless steel panels in a residential interior",
    base: "Mirror polished stainless steel",
    coating: "PVD rose gold",
    note: "A soft pink-copper reflection that warms adjacent stone, timber and textile finishes.",
    light: { highlight: "rgba(255,214,198,0.58)", mid: "rgba(203,140,120,0.26)", shadow: "rgba(28,12,10,0.55)" },
  },
  {
    id: "champagne",
    name: "Champagne",
    path: "/designer-sheets/mirror/champagne-pvd-mirror-stainless-steel-sheet",
    image: champagne,
    alt: "Champagne PVD mirror stainless steel panels in a pale luxury interior",
    base: "Mirror polished stainless steel",
    coating: "PVD champagne",
    note: "The quietest of the warm tones — pale, neutral-warm, easy alongside light stone.",
    light: { highlight: "rgba(255,242,214,0.55)", mid: "rgba(198,181,142,0.24)", shadow: "rgba(24,20,10,0.5)" },
  },
  {
    id: "bronze",
    name: "Bronze",
    path: "/designer-sheets/mirror/bronze-pvd-mirror-stainless-steel-sheet",
    image: bronze,
    alt: "Bronze PVD mirror stainless steel panels in a dark interior",
    base: "Mirror polished stainless steel",
    coating: "PVD bronze",
    note: "A deep, warm reflection that holds shadow and reads darker in low light.",
    light: { highlight: "rgba(240,200,150,0.5)", mid: "rgba(140,96,58,0.3)", shadow: "rgba(16,10,6,0.6)" },
  },
  {
    id: "black",
    name: "Black",
    path: "/designer-sheets/mirror/black-pvd-mirror-stainless-steel-sheet",
    image: black,
    alt: "Black PVD mirror stainless steel panels reflecting interior lighting",
    base: "Mirror polished stainless steel",
    coating: "PVD black",
    note: "Reflection without brightness — the surface returns light points rather than the whole room.",
    light: { highlight: "rgba(220,225,230,0.4)", mid: "rgba(40,44,48,0.3)", shadow: "rgba(0,0,0,0.65)" },
  },
  {
    id: "blue",
    name: "Blue",
    path: "/designer-sheets/mirror/blue-pvd-mirror-stainless-steel-sheet",
    image: blue,
    alt: "Blue PVD mirror stainless steel panels in a contemporary interior",
    base: "Mirror polished stainless steel",
    coating: "PVD blue",
    note: "A saturated, cool reflection generally used as an accent rather than a full elevation.",
    light: { highlight: "rgba(200,225,255,0.5)", mid: "rgba(40,80,170,0.3)", shadow: "rgba(4,8,24,0.6)" },
  },
];

export type MirrorLevel = {
  id: string;
  name: string;
  clarity: number;
  summary: string;
  detail: string;
  availability: string;
};

export const mirrorLevels: MirrorLevel[] = [
  {
    id: "6k",
    name: "6K",
    clarity: 68,
    summary: "Bright, polished, slightly softer reflection",
    detail:
      "A polished surface with a clear reflection that stays a little softer at the edges of reflected detail.",
    availability: ON_REQUEST,
  },
  {
    id: "8k",
    name: "8K / No. 8",
    clarity: 88,
    summary: "The most widely specified architectural mirror",
    detail:
      "The finish most projects mean when they say mirror stainless steel — a bright, non-directional, highly reflective surface.",
    availability: "Available",
  },
  {
    id: "10k",
    name: "10K",
    clarity: 95,
    summary: "Further refined polishing, deeper clarity",
    detail: "A further stage of polishing and buffing, giving a deeper, cleaner reflected image.",
    availability: ON_REQUEST,
  },
  {
    id: "super",
    name: "Super Mirror",
    clarity: 99,
    summary: "The highest clarity level we quote",
    detail:
      "The most refined mirror level we quote for. Reflection quality also depends on sheet flatness, handling and installation.",
    availability: ON_REQUEST,
  },
];

export const mirrorApplications = [
  {
    id: "elevators",
    name: "Elevators",
    body: "Luxury lift interiors, cabin walls, doors and architectural details.",
    image: elevator,
    alt: "Luxury elevator cabin clad in mirror stainless steel",
    tall: true,
  },
  {
    id: "hospitality",
    name: "Hospitality",
    body: "Hotel lobbies, reception areas, bars and feature walls.",
    image: hospitality,
    alt: "Hotel reception with a mirror stainless steel feature wall",
    tall: false,
  },
  {
    id: "retail",
    name: "Retail",
    body: "Luxury retail interiors, display walls, fixtures and brand environments.",
    image: retail,
    alt: "Luxury retail interior with mirror stainless steel display walls",
    tall: false,
  },
  {
    id: "feature-walls",
    name: "Feature Walls",
    body: "Reflective architectural panels that amplify surrounding light and space.",
    image: wallCladding,
    alt: "Mirror stainless steel feature wall in a contemporary lobby",
    tall: false,
  },
  {
    id: "ceilings",
    name: "Ceilings",
    body: "Decorative ceiling panels and reflective architectural details.",
    image: ceiling,
    alt: "Mirror stainless steel ceiling panels above a restaurant",
    tall: false,
  },
  {
    id: "furniture",
    name: "Furniture",
    body: "Tabletops, cabinetry, furniture accents and decorative panels.",
    image: furniture,
    alt: "Mirror stainless steel cabinetry in a minimal interior",
    tall: true,
  },
  {
    id: "signage",
    name: "Signage",
    body: "Premium signage, lettering and decorative metalwork.",
    image: signage,
    alt: "Mirror stainless steel lettering mounted on dark stone",
    tall: false,
  },
  {
    id: "architecture",
    name: "Architecture",
    body: "Selected interior and exterior applications where grade and installation requirements are appropriate.",
    image: fullSheet,
    alt: "Full mirror stainless steel sheet in a dark studio",
    tall: false,
  },
];

export const mirrorGallery = [
  { id: "full", label: "Full sheet", image: fullSheet, alt: "Full mirror finish stainless steel sheet in a studio", span: "lg:col-span-7" },
  { id: "macro", label: "Extreme close-up", image: macro, alt: "Macro photograph of mirror polished stainless steel", span: "lg:col-span-5" },
  { id: "edge", label: "Edge detail", image: edge, alt: "Cut edge of a mirror stainless steel sheet with protective film", span: "lg:col-span-5" },
  { id: "reflection", label: "Reflection detail", image: reflection, alt: "Mirror stainless steel panel reflecting furniture and plants", span: "lg:col-span-7" },
  { id: "gold", label: "Gold mirror", image: gold, alt: "Gold PVD mirror stainless steel panels", span: "lg:col-span-6" },
  { id: "rose", label: "Rose gold mirror", image: roseGold, alt: "Rose gold PVD mirror stainless steel panels", span: "lg:col-span-6" },
  { id: "black", label: "Black mirror", image: black, alt: "Black PVD mirror stainless steel panels", span: "lg:col-span-6" },
  { id: "champagne", label: "Champagne mirror", image: champagne, alt: "Champagne PVD mirror stainless steel panels", span: "lg:col-span-6" },
];

export const mirrorBeforeAfter = [
  {
    id: "lift",
    title: "Elevator cabin",
    caption: "A plain lift cabin re-lined in mirror stainless steel.",
    before: mirrorImages.beforeAfter.lift.before,
    beforeAlt: "Plain elevator cabin interior before mirror stainless steel cladding",
    after: mirrorImages.beforeAfter.lift.after,
    afterAlt: "Elevator cabin interior lined with mirror stainless steel",
  },
  {
    id: "reception",
    title: "Reception wall",
    caption: "A flat reception wall turned into a reflective feature elevation.",
    before: mirrorImages.beforeAfter.reception.before,
    beforeAlt: "Plain reception wall before stainless steel cladding",
    after: mirrorImages.beforeAfter.reception.after,
    afterAlt: "Reception wall clad in mirror stainless steel",
  },
  {
    id: "retail",
    title: "Retail interior",
    caption: "A plain retail shell with a gold mirror architectural feature.",
    before: mirrorImages.beforeAfter.retail.before,
    beforeAlt: "Plain white retail interior before renovation",
    after: mirrorImages.beforeAfter.retail.after,
    afterAlt: "Retail interior with a gold mirror stainless steel feature",
  },
];

export const mirrorSpecs: { label: string; value: string }[] = [
  { label: "Material", value: "Stainless steel" },
  { label: "Grade", value: "SS304, SS316 — other grades available on request" },
  { label: "Surface finish", value: "Mirror polished, non-directional" },
  { label: "Mirror level", value: "8K / No. 8 — 6K, 10K and Super Mirror available on request" },
  { label: "Colour", value: "Silver, Gold, Rose Gold, Champagne, Bronze, Black, Blue" },
  { label: "PVD", value: "PVD colour coating on a mirror-polished base, where applicable" },
  { label: "Thickness", value: "Available according to grade and application" },
  { label: "Width", value: ON_REQUEST },
  { label: "Length", value: ON_REQUEST },
  { label: "Sheet size", value: "4 × 8 ft, 4 × 10 ft, 5 × 10 ft, custom — typical / available formats" },
  { label: "Surface protection", value: "Protective film; anti-fingerprint treatment available on request" },
  { label: "Processing", value: "Cutting, bending, V-grooving, welding, edge finishing" },
  { label: "Customisation", value: "Custom sizes and fabrication to drawing" },
];

export const mirrorFabrication = [
  { step: "Cut", body: "Laser cutting, CNC cutting and waterjet cutting to drawing." },
  { step: "Bend", body: "Bending and V-grooving for folded panels, returns and corners." },
  { step: "Form", body: "Panel forming, edge finishing and detailing for install-ready parts." },
  { step: "Fabricate", body: "Welding, assembly and custom fabrication for cladding and furniture." },
];

export const mirrorFabricationServices = [
  "Laser cutting",
  "CNC cutting",
  "Waterjet",
  "Bending",
  "V-grooving",
  "Welding",
  "Edge finishing",
  "Custom fabrication",
];

export const mirrorCare = {
  recommended: [
    "Soft microfibre cloth",
    "Neutral or suitable stainless-steel cleaner",
    "Prompt removal of fingerprints",
    "Non-abrasive cleaning",
  ],
  avoid: ["Abrasive pads", "Steel wool", "Harsh abrasive cleaners", "Unsuitable chemicals"],
};

export const mirrorComparison = [
  { slug: "mirror", name: "Mirror", points: ["Maximum reflection", "High visual impact", "Marks are more visible"] },
  { slug: "hairline", name: "Hairline", points: ["Directional grain", "More forgiving visual character", "Contemporary architectural appearance"] },
  { slug: "bead-blast", name: "Bead Blast", points: ["Low reflection", "Soft matte texture", "Even, quiet surface"] },
  { slug: "water-ripple", name: "Water Ripple", points: ["Dynamic reflection", "Strong texture", "Sculptural movement"] },
  { slug: "hammered", name: "Hammered", points: ["Irregular texture", "Variable highlights", "Hand-worked character"] },
  { slug: "embossed", name: "Embossed", points: ["Dimensional pattern", "Strong shadow and depth", "Repeating relief"] },
];

export const mirrorFaqs: Faq[] = [
  {
    q: "What is mirror finish stainless steel?",
    a: "Mirror finish stainless steel is a highly polished, non-directional stainless-steel surface produced by progressively finer polishing and buffing until the surface reflects its surroundings.",
  },
  {
    q: "What is an 8K mirror stainless steel sheet?",
    a: "8K is the term the industry commonly uses for a bright, highly reflective mirror-polished sheet. It describes a polishing level rather than a universal measured reflectivity value, so appearance can vary between producers.",
  },
  {
    q: "What is a No. 8 stainless steel finish?",
    a: "No. 8 is the standard designation for a mirror finish — the most reflective of the common architectural stainless-steel finishes. In practice No. 8 and 8K are used to describe the same family of surface.",
  },
  {
    q: "What is the difference between 6K, 8K and 10K mirror?",
    a: "They describe successive stages of polishing. 6K is bright with a slightly softer reflected image, 8K is the widely specified architectural mirror, and 10K and Super Mirror are further refined for a deeper, cleaner reflection.",
  },
  {
    q: "What grades are available?",
    a: "SS304 and SS316 are our standard grades for mirror sheets. Other grades are available on request, subject to project requirements.",
  },
  {
    q: "Can mirror stainless steel be PVD coloured?",
    a: "Yes. Coloured versions combine a mirror-polished stainless base with a PVD colour treatment. Availability of a given colour in a given grade, size or thickness should be confirmed per project.",
  },
  {
    q: "What colours are available?",
    a: "Silver (uncoated), Gold, Rose Gold, Champagne, Bronze, Black and Blue. Colour appearance varies with lighting and viewing angle.",
  },
  {
    q: "What sheet sizes are available?",
    a: "Typical formats are 4 × 8 ft, 4 × 10 ft and 5 × 10 ft, with custom dimensions available. Exact availability is confirmed at quotation.",
  },
  {
    q: "Can mirror stainless steel be cut to size?",
    a: "Yes. Sheets can be cut to size, and we also supply parts fabricated to drawing.",
  },
  {
    q: "Can it be laser cut or bent?",
    a: "Laser cutting, CNC cutting, waterjet, bending and V-grooving are available. Processing availability depends on grade, thickness, finish and project requirements.",
  },
  {
    q: "Is mirror stainless steel suitable for elevators?",
    a: "Mirror stainless steel is widely used for lift cabins, doors and interior details. Suitability for a specific environment depends on grade selection, detailing and installation.",
  },
  {
    q: "Does mirror stainless steel show fingerprints?",
    a: "Yes — a highly reflective surface shows fingerprints and handling marks more readily than a textured or matte finish. This is usually managed through detailing, placement and cleaning routine.",
  },
  {
    q: "Is an anti-fingerprint treatment available?",
    a: "An anti-fingerprint treatment can be quoted on request. Please confirm the requirement with your enquiry.",
  },
  {
    q: "How should mirror stainless steel be cleaned?",
    a: "Use a soft microfibre cloth with a neutral or suitable stainless-steel cleaner, and remove fingerprints promptly. Avoid abrasive pads, steel wool and harsh abrasive or unsuitable chemical cleaners.",
  },
  {
    q: "Can I request a physical sample?",
    a: "Yes. Reflection and colour are best judged in real light, so we recommend reviewing a physical sample before final specification.",
  },
];
