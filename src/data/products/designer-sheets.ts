/**
 * Central product catalogue for the STEELX product ecosystem.
 *
 * Structure:
 *   productCategories  → top-level products (Designer Sheets, Profiles, ...)
 *   designerSheetFinishes → the six designer-sheet finishes
 *   colourProducts     → SEO colour pages, keyed by finish slug
 *
 * Adding a new colour page = adding one object to colourProducts.
 * No route or component work is required.
 */

import mirror from "@/assets/ds-mirror.jpg";
import hairline from "@/assets/ds-hairline.jpg";
import embossed from "@/assets/ds-embossed.jpg";
import beadblast from "@/assets/ds-beadblast.jpg";
import ripple from "@/assets/ds-ripple.jpg";
import appInterior from "@/assets/ds-app-interior.jpg";
import appCeiling from "@/assets/ds-app-ceiling.jpg";
import appExterior from "@/assets/ds-app-exterior.jpg";

import hmGold from "@/assets/hm-gold.jpg";
import hmRoseGold from "@/assets/hm-rose-gold.jpg";
import hmChampagne from "@/assets/hm-champagne.jpg";
import hmBronze from "@/assets/hm-bronze.jpg";
import hmBlack from "@/assets/hm-black.jpg";
import hmSilver from "@/assets/hm-silver.jpg";
import hmBlue from "@/assets/hm-blue.jpg";

export const ON_REQUEST = "Available on request";

export const SITE_URL = "https://gleeful-toolbelt.lovable.app";

export type ProductCategory = {
  slug: string;
  name: string;
  href: string;
  blurb: string;
  live: boolean;
};

/** Top-level product ecosystem. Only Designer Sheets is built out in this phase. */
export const productCategories: ProductCategory[] = [
  {
    slug: "designer-sheets",
    name: "Designer Sheets",
    href: "/designer-sheets",
    blurb: "Six architectural stainless steel surfaces, each shaped by a different relationship with light.",
    live: true,
  },
  {
    slug: "decorative-profiles",
    name: "Decorative Profiles",
    href: "/designer-sheets",
    blurb: "Trims, T-profiles, L-angles and shadow-gap sections in matching PVD colours.",
    live: false,
  },
  {
    slug: "fluted-panels",
    name: "Fluted Panels",
    href: "/designer-sheets",
    blurb: "Vertical rhythm in stainless steel for feature walls and reception faces.",
    live: false,
  },
  {
    slug: "pvd-pipes",
    name: "PVD Pipes",
    href: "/designer-sheets",
    blurb: "Round and square section tube, colour-matched to sheet finishes.",
    live: false,
  },
  {
    slug: "lift-elevator-cladding",
    name: "Lift & Elevator Cladding",
    href: "/designer-sheets",
    blurb: "Cabin walls, ceilings, doors and jambs as a coordinated surface package.",
    live: false,
  },
  {
    slug: "custom-metal",
    name: "Custom Metal",
    href: "/designer-sheets",
    blurb: "Fabricated furniture, screens and dividers built from the same sheet library.",
    live: false,
  },
];

export type PatternOption = {
  name: string;
  description: string;
  /** Confirmed availability. Unconfirmed options are labelled "Available on request". */
  confirmed: boolean;
};

export type Faq = { q: string; a: string };

export type SheetFinishEntry = {
  slug: string;
  name: string;
  /** Display H1 */
  h1: string;
  seoTitle: string;
  metaDescription: string;
  heroLine: string;
  image: string;
  alt: string;
  /** Card copy on the /designer-sheets landing page. */
  shortDescription: string;
  /** Two to three paragraphs, unique to this finish. */
  longDescription: string[];
  character: string[];
  patterns: PatternOption[];
  applications: string[];
  specifications: { label: string; value: string }[];
  faqs: Faq[];
  /** Metallic gradient used for swatches. */
  swatch: string;
};

const sharedGrades = ["SS304", "SS316"];

export const designerSheetFinishes: SheetFinishEntry[] = [
  {
    slug: "mirror",
    name: "Mirror",
    h1: "MIRROR STAINLESS STEEL SHEETS",
    seoTitle: "Mirror Stainless Steel Sheets | PVD Mirror Finish | STEELX",
    metaDescription:
      "Mirror finish stainless steel sheets from STEELX — highly reflective architectural surfaces in SS304 and SS316, available with PVD colour. Request a sample.",
    heroLine:
      "A polished stainless steel surface that returns the room to itself — light, depth and architecture held in one plane.",
    image: mirror,
    alt: "Mirror finish stainless steel panel reflecting a minimal interior",
    shortDescription: "Full reflection. Optical depth. The brightest surface in the library.",
    longDescription: [
      "Mirror is the most optically demanding finish we supply. The sheet is polished until the surface stops reading as metal and starts reading as reflection — ceilings appear taller, corridors appear longer and adjacent materials are drawn into the panel.",
      "Because reflection is unforgiving, mirror rewards flat substrates, careful handling and considered joint lines. We recommend it where the surface can be protected from daily contact: upper wall zones, ceilings, soffits, columns and feature backdrops.",
      "Mirror also carries PVD colour with the most saturation of any finish, since there is no texture to scatter light. Gold, bronze and black mirror read as coloured light rather than coloured metal.",
    ],
    character: ["Full reflection", "No texture", "Highest colour saturation"],
    patterns: [
      { name: "Mirror", description: "Standard polished mirror surface.", confirmed: true },
      { name: "Super Mirror", description: "Higher polish grade for critical reflections.", confirmed: false },
    ],
    applications: [
      "Ceilings and soffits",
      "Lobby feature walls",
      "Columns",
      "Elevator interiors",
      "Retail display backdrops",
    ],
    specifications: [
      { label: "Material", value: "Stainless steel" },
      { label: "Grade", value: "SS304 / SS316" },
      { label: "Surface", value: "Mirror polished" },
      { label: "PVD colour", value: "Silver, gold, rose gold, champagne, bronze, black" },
      { label: "Thickness", value: ON_REQUEST },
      { label: "Sheet size", value: "4 × 8 ft, 4 × 10 ft, custom (project dependent)" },
      { label: "Processing", value: "Cut to size, bending, laser cutting, welding, polishing" },
    ],
    faqs: [
      {
        q: "What is mirror finish stainless steel?",
        a: "It is stainless steel polished to a highly reflective surface. The finish has no directional grain or texture, so it reflects the surrounding space almost like glass.",
      },
      {
        q: "Where is mirror finish best used?",
        a: "It performs best in areas away from frequent hand contact — ceilings, upper wall panels, columns and feature surfaces. For heavily touched areas, hairline or bead blast is usually more practical.",
      },
      {
        q: "Can mirror sheets be PVD coloured?",
        a: "Yes. Mirror carries PVD colour with the highest saturation of any finish in the library. Colour availability for a specific project is confirmed at enquiry stage.",
      },
      {
        q: "What sizes are available?",
        a: "Common architectural formats are 4 × 8 ft and 4 × 10 ft. Other sizes are project dependent and confirmed on request.",
      },
    ],
    swatch: "linear-gradient(135deg,#6f767c,#eef2f5 30%,#8d959b 55%,#ffffff 72%,#6f767c)",
  },
  {
    slug: "hairline",
    name: "Hairline",
    h1: "HAIRLINE STAINLESS STEEL SHEETS",
    seoTitle: "Hairline Stainless Steel Sheets | Brushed PVD Finish | STEELX",
    metaDescription:
      "Hairline brushed stainless steel sheets from STEELX — fine directional grain in SS304 and SS316, with optional PVD colour. Request a sample or project quote.",
    heroLine:
      "A fine directional grain that softens reflection and gives large surfaces a calm, continuous direction.",
    image: hairline,
    alt: "Hairline brushed stainless steel panel with fine directional grain",
    shortDescription: "Directional grain. Soft reflection. The most specified architectural surface.",
    longDescription: [
      "Hairline is brushed in one continuous direction, so light travels along the grain instead of bouncing back at the viewer. The result is a surface that stays legible as metal at every distance — grain up close, quiet sheen across a room.",
      "It is the most forgiving finish we supply. Fingerprints and everyday marking are far less visible than on mirror, which is why hairline dominates lift interiors, joinery faces and door leaves.",
      "Grain direction becomes a design decision: run it vertically to lengthen a wall, horizontally to widen it, and keep it consistent across a panel set so joints disappear.",
    ],
    character: ["Directional grain", "Soft sheen", "Forgiving in use"],
    patterns: [
      { name: "Standard hairline", description: "Fine continuous brush.", confirmed: true },
      { name: "Long grain / No.4", description: "Coarser brushed grain.", confirmed: false },
    ],
    applications: [
      "Lift and elevator cabins",
      "Door leaves and jambs",
      "Joinery and furniture faces",
      "Wall cladding",
      "Reception desks",
    ],
    specifications: [
      { label: "Material", value: "Stainless steel" },
      { label: "Grade", value: "SS304 / SS316" },
      { label: "Surface", value: "Hairline brushed" },
      { label: "PVD colour", value: "Silver, gold, rose gold, champagne, bronze, black" },
      { label: "Thickness", value: ON_REQUEST },
      { label: "Sheet size", value: "4 × 8 ft, 4 × 10 ft, custom (project dependent)" },
      { label: "Processing", value: "Cut to size, bending, V-grooving, laser cutting, welding" },
    ],
    faqs: [
      {
        q: "What is hairline stainless steel?",
        a: "Hairline is stainless steel brushed with a fine, continuous directional grain. It reflects light softly along the grain rather than mirroring the space.",
      },
      {
        q: "Why is hairline used so widely in interiors?",
        a: "The grain diffuses reflection and reduces the visibility of everyday marking, which makes it practical for surfaces people touch — lift cabins, doors and joinery.",
      },
      {
        q: "Does grain direction matter?",
        a: "Yes. Grain direction should be specified per panel so that it stays consistent across an installation. We confirm direction with your drawings before fabrication.",
      },
      {
        q: "Can hairline be PVD coloured?",
        a: "Yes. Hairline carries PVD colour with a softer, more matte reading than mirror. Specific colours are confirmed at enquiry stage.",
      },
    ],
    swatch: "linear-gradient(135deg,#7d848a,#d9dee2 30%,#98a0a6 55%,#eef1f3 74%,#7d848a)",
  },
  {
    slug: "embossed",
    name: "Embossed",
    h1: "EMBOSSED STAINLESS STEEL SHEETS",
    seoTitle: "Embossed Stainless Steel Sheets | Textured Metal Panels | STEELX",
    metaDescription:
      "Embossed stainless steel sheets from STEELX — raised three-dimensional relief patterns in SS304 and SS316 with optional PVD colour. Request a sample.",
    heroLine:
      "Raised relief pressed into the sheet, so the surface builds its own light and shadow across the day.",
    image: embossed,
    alt: "Embossed stainless steel sheet with raised three dimensional relief",
    shortDescription: "Physical depth. Shadow-forming relief. Texture you read from across a room.",
    longDescription: [
      "Embossed sheets are formed between patterned rollers, lifting the surface into a repeating three-dimensional relief. Unlike printed or etched pattern, the geometry is physical — it casts real shadow and changes with the position of the light.",
      "Because the relief scatters reflection, embossed panels hide handling marks well and read as texture rather than as a mirror. This makes them a practical choice at seated and standing height.",
      "Pattern scale is the key specification decision: a fine relief reads as a material, a deep relief reads as architecture. We advise on scale relative to viewing distance.",
    ],
    character: ["Raised relief", "Scattered reflection", "Shadow forming"],
    patterns: [
      { name: "Fine relief", description: "Small-scale repeating texture.", confirmed: true },
      { name: "Deep relief", description: "Larger pressed geometry.", confirmed: true },
      { name: "Custom tooling", description: "Project-specific pattern.", confirmed: false },
    ],
    applications: [
      "Feature walls",
      "Ceiling panels",
      "Furniture faces",
      "Lift cabin walls",
      "Restaurant and bar fronts",
    ],
    specifications: [
      { label: "Material", value: "Stainless steel" },
      { label: "Grade", value: "SS304 / SS316" },
      { label: "Surface", value: "Embossed relief" },
      { label: "PVD colour", value: "Silver, gold, rose gold, champagne, bronze, black" },
      { label: "Thickness", value: ON_REQUEST },
      { label: "Sheet size", value: "4 × 8 ft, 4 × 10 ft, custom (project dependent)" },
      { label: "Pattern repeat", value: ON_REQUEST },
    ],
    faqs: [
      {
        q: "What is embossed stainless steel?",
        a: "It is stainless steel formed with patterned rollers so the surface carries a raised, repeating three-dimensional relief.",
      },
      {
        q: "Is the pattern printed or physical?",
        a: "Physical. The relief is formed into the metal, which is why it casts real shadow and changes appearance as light moves.",
      },
      {
        q: "Can embossed patterns be customised?",
        a: "Custom tooling is available on request and depends on the pattern, quantity and project programme.",
      },
      {
        q: "Does embossing affect PVD colour?",
        a: "The relief scatters light, so PVD colour reads softer and more varied across the surface than it does on mirror.",
      },
    ],
    swatch: "linear-gradient(135deg,#5f666c,#ced5da 28%,#798086 52%,#f0f3f5 72%,#5f666c)",
  },
  {
    slug: "bead-blast",
    name: "Bead Blast",
    h1: "BEAD BLAST STAINLESS STEEL SHEETS",
    seoTitle: "Bead Blast Stainless Steel Sheets | Matte Metal Finish | STEELX",
    metaDescription:
      "Bead blast stainless steel sheets from STEELX — an even matte, non-reflective architectural surface in SS304 and SS316 with optional PVD colour.",
    heroLine:
      "An even matte surface that absorbs glare and lets colour, not reflection, carry the wall.",
    image: beadblast,
    alt: "Bead blasted stainless steel with an even matte non reflective texture",
    shortDescription: "Diffuse and quiet. The calmest surface in the collection.",
    longDescription: [
      "Bead blasting drives fine media across the sheet to create a uniform micro-texture. The surface no longer reflects an image — it holds an even, velvety light that stays consistent from every viewing angle.",
      "This makes bead blast the right answer where mirror would be a distraction: quiet lobbies, gallery walls, hospitality bedrooms, and any surface sitting near a lit ceiling or a glazed façade.",
      "In PVD colour, bead blast reads as a solid, pigment-like tone rather than a metallic shine — the closest the library comes to a painted surface while remaining stainless steel.",
    ],
    character: ["Matte", "Diffuse", "Even from all angles"],
    patterns: [
      { name: "Standard bead blast", description: "Even matte tooth.", confirmed: true },
      { name: "Coarse blast", description: "Heavier texture.", confirmed: false },
    ],
    applications: [
      "Quiet interiors and bedrooms",
      "Gallery and museum walls",
      "Street-level cladding",
      "Signage backplates",
      "Furniture and joinery",
    ],
    specifications: [
      { label: "Material", value: "Stainless steel" },
      { label: "Grade", value: "SS304 / SS316" },
      { label: "Surface", value: "Bead blasted" },
      { label: "PVD colour", value: "Silver, gold, rose gold, champagne, bronze, black" },
      { label: "Thickness", value: ON_REQUEST },
      { label: "Sheet size", value: "4 × 8 ft, 4 × 10 ft, custom (project dependent)" },
      { label: "Processing", value: "Cut to size, bending, laser cutting, welding" },
    ],
    faqs: [
      {
        q: "What is bead blast stainless steel?",
        a: "It is stainless steel with an even matte texture created by blasting fine media across the surface.",
      },
      {
        q: "Is bead blast reflective?",
        a: "No. It diffuses light rather than reflecting an image, which is why it reads as a calm, even tone.",
      },
      {
        q: "Does bead blast show fingerprints?",
        a: "Marking behaviour depends on the environment and cleaning regime. We recommend requesting a physical sample to assess it for your project.",
      },
      {
        q: "Can bead blast be PVD coloured?",
        a: "Yes. Colour reads as a solid, matte tone. Specific colours are confirmed at enquiry stage.",
      },
    ],
    swatch: "linear-gradient(135deg,#8b9197,#c3c9cd 35%,#9ba1a6 60%,#d5dade 78%,#8b9197)",
  },
  {
    slug: "water-ripple",
    name: "Water Ripple",
    h1: "WATER RIPPLE STAINLESS STEEL SHEETS",
    seoTitle: "Water Ripple Stainless Steel Sheets | Rippled Metal | STEELX",
    metaDescription:
      "Water ripple stainless steel sheets from STEELX — undulating sculptural surfaces in SS304 and SS316 with optional PVD colour. Request a sample.",
    heroLine:
      "An undulating surface that carries reflection across the sheet like light moving over water.",
    image: ripple,
    alt: "Water ripple stainless steel sheet with undulating wave-like surface",
    shortDescription: "Liquid movement. Reflection that travels as you walk past.",
    longDescription: [
      "Water ripple is a formed surface: the sheet is worked into a shallow, organic wave so reflection is stretched and folded rather than returned flat. Standing still, the panel is sculptural. Walking past, it moves.",
      "It is the most expressive finish in the collection and is usually specified as a single moment in a scheme — a lift lobby wall, a bar front, a column wrap — rather than as a general cladding surface.",
      "Ripple depth and wave scale change the effect substantially, so we recommend confirming both against a physical sample and the actual lighting design.",
    ],
    character: ["Undulating form", "Travelling reflection", "Sculptural"],
    patterns: [
      { name: "Standard ripple", description: "Regular shallow wave.", confirmed: true },
      { name: "Large wave", description: "Wider, deeper undulation.", confirmed: false },
    ],
    applications: [
      "Statement feature walls",
      "Column wraps",
      "Bar and reception fronts",
      "Lift lobby panels",
      "Hospitality interiors",
    ],
    specifications: [
      { label: "Material", value: "Stainless steel" },
      { label: "Grade", value: "SS304 / SS316" },
      { label: "Surface", value: "Water ripple formed" },
      { label: "PVD colour", value: "Silver, gold, rose gold, champagne, bronze, black" },
      { label: "Thickness", value: ON_REQUEST },
      { label: "Sheet size", value: "4 × 8 ft, 4 × 10 ft, custom (project dependent)" },
      { label: "Wave depth", value: ON_REQUEST },
    ],
    faqs: [
      {
        q: "What is water ripple stainless steel?",
        a: "It is stainless steel formed into a shallow, wave-like surface so that reflections stretch and shift across the panel.",
      },
      {
        q: "Where is it best used?",
        a: "As a focused statement surface — feature walls, columns and reception fronts — rather than as continuous cladding.",
      },
      {
        q: "Can wave depth be specified?",
        a: "Wave depth and scale options are project dependent and confirmed on request.",
      },
      {
        q: "Can it be PVD coloured?",
        a: "Yes. Colour follows the wave, which increases the sense of movement across the sheet.",
      },
    ],
    swatch: "linear-gradient(120deg,#5b666e,#dfe6ea 20%,#6e7a82 40%,#eef3f6 60%,#69747c 80%,#5b666e)",
  },
  {
    slug: "hammered",
    name: "Hammered",
    h1: "HAMMERED STAINLESS STEEL SHEETS",
    seoTitle: "Hammered Stainless Steel Sheets | PVD Hammered Metal | STEELX",
    metaDescription:
      "Hammered stainless steel sheets from STEELX — dimensional hammered texture in SS304 and SS316 with PVD colour in gold, rose gold, champagne, bronze, black, silver and blue.",
    heroLine:
      "A sculpted stainless steel surface where texture, reflection and depth create a distinctive architectural character.",
    image: hmGold,
    alt: "Gold PVD hammered stainless steel sheet catching directional light",
    shortDescription: "Dimensional hammer texture. Highlights that shift with every step.",
    longDescription: [
      "Hammered stainless steel is made by working the sheet with controlled, repeated impressions. Each dimple becomes a small curved facet, so a single panel holds hundreds of independent highlights instead of one flat reflection.",
      "The practical effect is that light is broken up. A hammered wall never shows a hard glare spot, and the surface reads as depth rather than as a mirror — which is why it sits comfortably in lobbies, lift interiors and restaurant fronts where flat reflection would be harsh.",
      "Hammered is also the strongest carrier of PVD colour in the collection. Because each facet catches light at a different angle, a gold or bronze coating produces a range of tones across one sheet rather than a single uniform colour.",
    ],
    character: ["Dimensional facets", "Broken reflection", "Colour depth"],
    patterns: [
      { name: "Fine Hammer", description: "Small, densely spaced impressions.", confirmed: true },
      { name: "Medium Hammer", description: "Balanced scale for wall-sized panels.", confirmed: true },
      { name: "Deep Hammer", description: "Pronounced depth and stronger shadow.", confirmed: true },
      { name: "Random Hammer", description: "Irregular, hand-worked rhythm.", confirmed: false },
      { name: "Artistic Hammer", description: "Bespoke pattern developed per project.", confirmed: false },
    ],
    applications: [
      "Luxury wall cladding",
      "Elevator interiors and lift doors",
      "Hotel lobbies",
      "Retail interiors",
      "Feature walls and columns",
      "Reception desks and furniture",
    ],
    specifications: [
      { label: "Material", value: "Stainless steel" },
      { label: "Grade", value: "SS304 / SS316" },
      { label: "Surface", value: "Hammered" },
      { label: "PVD colour", value: "Gold, rose gold, champagne, bronze, black, silver, blue" },
      { label: "Pattern", value: "Fine, medium, deep; random and artistic on request" },
      { label: "Thickness", value: ON_REQUEST },
      { label: "Sheet size", value: "4 × 8 ft, 4 × 10 ft, custom (project dependent)" },
      { label: "Processing", value: "Cut to size, bending, laser cutting, welding, polishing" },
    ],
    faqs: [
      {
        q: "What is hammered stainless steel?",
        a: "It is stainless steel worked with controlled, repeated impressions so the surface carries a dimensional, faceted texture.",
      },
      {
        q: "Which hammered patterns are available?",
        a: "Fine, medium and deep hammer are standard. Random and artistic hammer patterns are available on request and confirmed per project.",
      },
      {
        q: "Which colours can hammered sheets be supplied in?",
        a: "Gold, rose gold, champagne, bronze, black and blue in PVD, plus natural silver stainless steel without a coating.",
      },
      {
        q: "Can hammered sheets be cut and fabricated?",
        a: "Yes. Cutting to size, bending, laser cutting, welding and polishing are available. Scope is confirmed against your drawings.",
      },
    ],
    swatch: "linear-gradient(135deg,#3a3f44,#9aa2a8 25%,#4b5157 50%,#c2c9ce 70%,#3a3f44)",
  },
];

export function getFinish(slug: string) {
  return designerSheetFinishes.find((f) => f.slug === slug);
}

export type ColourProduct = {
  slug: string;
  name: string;
  finishSlug: string;
  finish: string;
  colour: string;
  coating: string;
  supportingHeadline: string;
  shortDescription: string;
  longDescription: string[];
  /** Copy specific to how this colour behaves in light. */
  colourNote: string;
  seoTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  image: string;
  alt: string;
  /** rgba tint used by the material viewer lighting model. */
  light: { highlight: string; mid: string; shadow: string };
  swatch: string;
  applications: string[];
  applicationNote: string;
  grades: string[];
  patterns: string[];
  thickness: string;
  sizes: string[];
  specifications: { label: string; value: string }[];
  faqs: Faq[];
};

const hammeredPatternNames = ["Fine Hammer", "Medium Hammer", "Deep Hammer", "Random Hammer", "Artistic Hammer"];
const hammeredSizes = ["4 × 8 ft", "4 × 10 ft", "Custom dimensions"];

function hammeredSpecs(colour: string, coating: string) {
  return [
    { label: "Material", value: "Stainless steel" },
    { label: "Grade", value: "SS304 / SS316" },
    { label: "Surface", value: "Hammered" },
    { label: "Colour", value: colour },
    { label: "Coating", value: coating },
    { label: "Pattern", value: "Fine, medium, deep; random and artistic on request" },
    { label: "Thickness", value: ON_REQUEST },
    { label: "Sheet size", value: "4 × 8 ft, 4 × 10 ft" },
    { label: "Custom size", value: "Project dependent — available on request" },
    { label: "Application", value: "Interior architectural surfaces" },
    { label: "Processing", value: "Cut to size, bending, laser cutting, welding, polishing" },
  ];
}

const hammeredColours: ColourProduct[] = [
  {
    slug: "gold-hammered-pvd-stainless-steel-sheet",
    name: "Gold Hammered Stainless Steel Sheet",
    finishSlug: "hammered",
    finish: "Hammered",
    colour: "Gold",
    coating: "PVD",
    supportingHeadline: "PVD GOLD × HAMMERED STAINLESS STEEL",
    shortDescription: "Warm gold PVD over a dimensional hammered surface.",
    longDescription: [
      "Gold hammered stainless steel brings together two decisions: a texture that breaks reflection into hundreds of small facets, and a PVD gold coating that gives each of those facets a warm tone. The result is a surface that never reads as one flat colour — it moves between pale champagne-gold in the highlights and a deeper amber in the recesses.",
      "This is the reason gold hammered is specified for arrival spaces. A flat gold panel in a bright lobby produces glare; a hammered panel distributes the same light across its texture, so the wall stays luminous without a hotspot.",
      "The PVD coating is applied in a vacuum chamber after the sheet is textured, so colour follows the geometry into every impression rather than sitting on top of it.",
    ],
    colourNote:
      "Gold reads warmest under incandescent and low-angle light, and cools noticeably under daylight. In deep hammer patterns the contrast between highlight and recess is strongest.",
    seoTitle: "Gold Hammered Stainless Steel Sheet | PVD Gold Hammered SS | STEELX",
    metaDescription:
      "Gold hammered stainless steel sheet from STEELX — PVD gold over a dimensional hammered texture in SS304 and SS316, 4×8 ft, 4×10 ft and custom sizes.",
    primaryKeyword: "gold hammered stainless steel sheet",
    secondaryKeywords: ["PVD gold hammered SS sheet", "gold hammered SS304 sheet", "hammered gold metal cladding"],
    image: hmGold,
    alt: "Macro of gold PVD hammered stainless steel sheet with warm faceted highlights",
    light: { highlight: "rgba(255, 226, 150, 0.55)", mid: "rgba(198, 152, 52, 0.35)", shadow: "rgba(48, 32, 6, 0.65)" },
    swatch: "linear-gradient(135deg,#8a6a1c,#f2c95c 45%,#c79a29)",
    applications: [
      "Hotel lobbies",
      "Elevator interiors and lift doors",
      "Reception desks",
      "Feature walls",
      "Retail interiors",
    ],
    applicationNote:
      "Most often specified for arrival and hospitality spaces where warm light is already part of the scheme.",
    grades: sharedGrades,
    patterns: hammeredPatternNames,
    thickness: ON_REQUEST,
    sizes: hammeredSizes,
    specifications: hammeredSpecs("Gold", "PVD"),
    faqs: [
      {
        q: "What is gold hammered stainless steel?",
        a: "It is stainless steel worked into a dimensional hammered texture and then finished in a gold tone, so the surface holds many small warm highlights instead of one flat reflection.",
      },
      {
        q: "What is PVD gold hammered stainless steel?",
        a: "PVD is a vacuum coating process applied after texturing. The gold colour is deposited onto the sheet in a chamber, so it follows the hammered geometry rather than being painted over it.",
      },
      {
        q: "What stainless steel grades are available?",
        a: "SS304 and SS316. Grade selection depends on the environment and is confirmed with you at enquiry stage.",
      },
      {
        q: "What sizes are available?",
        a: "Common architectural formats are 4 × 8 ft and 4 × 10 ft. Other dimensions are project dependent and available on request.",
      },
      {
        q: "Can hammered sheets be custom sized?",
        a: "Yes. Sheets can be cut to size against your drawings. Availability of a specific size for a given pattern and grade is confirmed on request.",
      },
      {
        q: "Where can gold hammered stainless steel be used?",
        a: "It is used for interior architectural surfaces such as lobbies, lift interiors, feature walls, reception desks and retail fitouts. Suitability for a specific location is confirmed per project.",
      },
      {
        q: "Can I request a physical sample?",
        a: "Yes. We recommend it — hammered surfaces are difficult to judge from photography because they depend on the light in the room.",
      },
      {
        q: "Can STEELX provide fabrication or processing?",
        a: "Cutting to size, bending, laser cutting, welding and polishing are available. Scope is confirmed against your drawings.",
      },
    ],
  },
  {
    slug: "rose-gold-hammered-pvd-stainless-steel-sheet",
    name: "Rose Gold Hammered Stainless Steel Sheet",
    finishSlug: "hammered",
    finish: "Hammered",
    colour: "Rose Gold",
    coating: "PVD",
    supportingHeadline: "PVD ROSE GOLD × HAMMERED STAINLESS STEEL",
    shortDescription: "A soft copper-pink PVD tone across a faceted hammered surface.",
    longDescription: [
      "Rose gold sits between copper and blush. On a flat sheet the tone can look decorative; across a hammered texture it behaves quite differently — the highlights lift towards pale pink while the recesses hold a copper depth, and the two read together as a single warm material.",
      "It pairs unusually well with pale stone, oak and plaster, which is why interior designers tend to reach for it in residential and boutique hospitality work rather than in large commercial lobbies.",
      "As with all PVD colours here, the coating is applied after texturing so the tone follows the hammer geometry into the recesses.",
    ],
    colourNote:
      "Rose gold shifts most of any colour in the range under different white balances — noticeably pinker under warm light, more copper under neutral daylight.",
    seoTitle: "Rose Gold Hammered Stainless Steel Sheet | PVD Rose Gold SS | STEELX",
    metaDescription:
      "Rose gold hammered stainless steel sheet from STEELX — PVD rose gold over a hammered texture in SS304 and SS316, in 4×8 ft, 4×10 ft and custom sizes.",
    primaryKeyword: "rose gold hammered stainless steel sheet",
    secondaryKeywords: ["PVD rose gold hammered sheet", "copper pink hammered SS panel"],
    image: hmRoseGold,
    alt: "Macro of rose gold PVD hammered stainless steel sheet with soft copper highlights",
    light: { highlight: "rgba(255, 205, 194, 0.5)", mid: "rgba(200, 126, 108, 0.35)", shadow: "rgba(52, 22, 16, 0.6)" },
    swatch: "linear-gradient(135deg,#8c4f42,#f0b4a0 45%,#c98873)",
    applications: [
      "Boutique hospitality interiors",
      "Residential feature walls",
      "Furniture and joinery inlay",
      "Retail display",
      "Bathroom and spa surfaces",
    ],
    applicationNote:
      "Frequently used at smaller scale — inlays, panels and joinery details — where its warmth can register without dominating.",
    grades: sharedGrades,
    patterns: hammeredPatternNames,
    thickness: ON_REQUEST,
    sizes: hammeredSizes,
    specifications: hammeredSpecs("Rose Gold", "PVD"),
    faqs: [
      {
        q: "What is rose gold hammered stainless steel?",
        a: "It is hammered-textured stainless steel finished in a rose gold PVD tone — a warm pink-copper colour that varies across the faceted surface.",
      },
      {
        q: "How does rose gold differ from gold?",
        a: "Rose gold is cooler and pinker. Across hammered texture, its highlights read blush while gold highlights read amber.",
      },
      {
        q: "Which grades are available?",
        a: "SS304 and SS316, confirmed per project.",
      },
      {
        q: "Is rose gold consistent between batches?",
        a: "PVD colour is matched as closely as possible, but we recommend ordering a single batch for one visible surface. Batch matching for a specific project is confirmed on request.",
      },
      {
        q: "Can I see a sample before specifying?",
        a: "Yes — request a physical sample so the tone can be checked against your lighting and adjacent materials.",
      },
      {
        q: "Can it be fabricated into furniture?",
        a: "Yes. Cutting, bending, welding and polishing are available; scope is confirmed against drawings.",
      },
    ],
  },
  {
    slug: "champagne-hammered-pvd-stainless-steel-sheet",
    name: "Champagne Hammered Stainless Steel Sheet",
    finishSlug: "hammered",
    finish: "Hammered",
    colour: "Champagne",
    coating: "PVD",
    supportingHeadline: "PVD CHAMPAGNE × HAMMERED STAINLESS STEEL",
    shortDescription: "A pale, restrained metallic tone with hammered depth.",
    longDescription: [
      "Champagne is the quietest warm colour in the range. It carries the warmth of gold without its saturation, which allows a large hammered surface to read as a neutral rather than as an accent.",
      "This makes it the most specified colour for full-wall applications. Where a gold wall becomes the subject of a room, a champagne wall behaves like a material — closer to a warm plaster or a pale bronze.",
      "Across the hammered facets it produces very fine tonal variation: near-white highlights, sand mid-tones and soft grey recesses.",
    ],
    colourNote:
      "Champagne holds its tone across lighting conditions better than gold or rose gold, which is why it suits spaces mixing daylight and artificial light.",
    seoTitle: "Champagne Hammered Stainless Steel Sheet | PVD Champagne SS | STEELX",
    metaDescription:
      "Champagne hammered stainless steel sheet from STEELX — pale warm PVD champagne over hammered texture in SS304 and SS316, 4×8 ft, 4×10 ft and custom sizes.",
    primaryKeyword: "champagne hammered stainless steel sheet",
    secondaryKeywords: ["PVD champagne hammered sheet", "champagne gold SS wall panel"],
    image: hmChampagne,
    alt: "Macro of champagne PVD hammered stainless steel sheet with pale warm facets",
    light: { highlight: "rgba(255, 243, 214, 0.5)", mid: "rgba(198, 181, 142, 0.32)", shadow: "rgba(48, 42, 26, 0.55)" },
    swatch: "linear-gradient(135deg,#8a7048,#efdcb6 45%,#c6b58e)",
    applications: [
      "Full-height wall cladding",
      "Hotel corridors",
      "Lift cabin walls",
      "Ceiling panels",
      "Office reception areas",
    ],
    applicationNote: "The usual choice when a warm metal is wanted across a large area without becoming the focal point.",
    grades: sharedGrades,
    patterns: hammeredPatternNames,
    thickness: ON_REQUEST,
    sizes: hammeredSizes,
    specifications: hammeredSpecs("Champagne", "PVD"),
    faqs: [
      {
        q: "What is champagne hammered stainless steel?",
        a: "Hammered-textured stainless steel finished in a pale warm champagne PVD tone — softer and less saturated than gold.",
      },
      {
        q: "Is champagne the same as gold?",
        a: "No. Champagne is lighter and less saturated, so it behaves as a neutral across large surfaces where gold would read as an accent.",
      },
      {
        q: "Is it suitable for full walls?",
        a: "It is commonly specified for full-height cladding because of its restraint. Suitability for a specific location is confirmed per project.",
      },
      {
        q: "What sizes are available?",
        a: "4 × 8 ft and 4 × 10 ft are common formats; other dimensions are available on request.",
      },
      {
        q: "Can I request a sample?",
        a: "Yes. Champagne is particularly worth sampling because its tone is judged against adjacent materials.",
      },
    ],
  },
  {
    slug: "bronze-hammered-pvd-stainless-steel-sheet",
    name: "Bronze Hammered Stainless Steel Sheet",
    finishSlug: "hammered",
    finish: "Hammered",
    colour: "Bronze",
    coating: "PVD",
    supportingHeadline: "PVD BRONZE × HAMMERED STAINLESS STEEL",
    shortDescription: "A deep, low-reflectance bronze with pronounced hammer shadow.",
    longDescription: [
      "Bronze is the darkest warm tone in the collection. Because it absorbs more light than gold or champagne, the hammered geometry becomes more legible — you read the shadow in each impression before you read the colour.",
      "That behaviour makes bronze effective in low-light schemes: restaurants, bars, cigar lounges and evening-lit lobbies, where a bright metal would feel out of place.",
      "It also sits comfortably against dark timber, smoked glass and blackened steel, which is why it appears frequently in hospitality detailing rather than in daylight-driven interiors.",
    ],
    colourNote:
      "Under low light bronze reads almost brown-black with warm edges; under direct light it opens into a full copper-bronze.",
    seoTitle: "Bronze Hammered Stainless Steel Sheet | PVD Bronze SS | STEELX",
    metaDescription:
      "Bronze hammered stainless steel sheet from STEELX — deep PVD bronze over hammered texture in SS304 and SS316, in 4×8 ft, 4×10 ft and custom sizes.",
    primaryKeyword: "bronze hammered stainless steel sheet",
    secondaryKeywords: ["PVD bronze hammered sheet", "dark bronze SS cladding panel"],
    image: hmBronze,
    alt: "Macro of bronze PVD hammered stainless steel sheet with deep warm shadow",
    light: { highlight: "rgba(226, 172, 116, 0.42)", mid: "rgba(140, 92, 52, 0.4)", shadow: "rgba(28, 16, 8, 0.72)" },
    swatch: "linear-gradient(135deg,#4a3220,#a97f4f 45%,#735943)",
    applications: [
      "Restaurant and bar interiors",
      "Evening-lit lobbies",
      "Lift doors and jambs",
      "Feature columns",
      "Bespoke furniture",
    ],
    applicationNote: "Best where lighting is directional and warm; in flat daylight the depth of the texture reduces.",
    grades: sharedGrades,
    patterns: hammeredPatternNames,
    thickness: ON_REQUEST,
    sizes: hammeredSizes,
    specifications: hammeredSpecs("Bronze", "PVD"),
    faqs: [
      {
        q: "What is bronze hammered stainless steel?",
        a: "Hammered-textured stainless steel finished in a deep bronze PVD tone, where the shadow of each impression is more visible than in lighter colours.",
      },
      {
        q: "Why does bronze show the texture so strongly?",
        a: "Darker coatings reflect less light, so the contrast between the raised facets and the recesses becomes the dominant reading of the surface.",
      },
      {
        q: "Which grades and sizes are available?",
        a: "SS304 and SS316 in 4 × 8 ft and 4 × 10 ft formats, with custom dimensions available on request.",
      },
      {
        q: "Is bronze suitable for exterior use?",
        a: "Exterior suitability depends on the location, grade and exposure and is assessed per project. Available on request.",
      },
      {
        q: "Can I request a physical sample?",
        a: "Yes, and we strongly recommend viewing bronze under your actual lighting before specifying.",
      },
    ],
  },
  {
    slug: "black-hammered-pvd-stainless-steel-sheet",
    name: "Black Hammered Stainless Steel Sheet",
    finishSlug: "hammered",
    finish: "Hammered",
    colour: "Black",
    coating: "PVD",
    supportingHeadline: "PVD BLACK × HAMMERED STAINLESS STEEL",
    shortDescription: "Graphite-black PVD where texture, not colour, carries the surface.",
    longDescription: [
      "Black hammered stainless steel removes colour from the equation entirely. What remains is pure geometry: a dark field broken by thin silver edges wherever a facet catches light.",
      "It is the most graphic surface in the collection. At a distance the panel reads as a solid dark plane; up close it dissolves into a field of individual highlights.",
      "Because black shows dust and handling more readily than mid-tones, it is usually specified above hand height or in controlled interiors — feature walls, ceilings, lift cabin upper panels and joinery.",
    ],
    colourNote:
      "Black PVD is not matte — the coating keeps the metal's specularity, so highlights remain bright silver-white against the dark field.",
    seoTitle: "Black Hammered Stainless Steel Sheet | PVD Black SS | STEELX",
    metaDescription:
      "Black hammered stainless steel sheet from STEELX — graphite black PVD over hammered texture in SS304 and SS316, in 4×8 ft, 4×10 ft and custom sizes.",
    primaryKeyword: "black hammered stainless steel sheet",
    secondaryKeywords: ["PVD black hammered sheet", "black textured SS wall panel"],
    image: hmBlack,
    alt: "Macro of black PVD hammered stainless steel sheet with bright specular edges",
    light: { highlight: "rgba(226, 232, 238, 0.42)", mid: "rgba(90, 96, 102, 0.3)", shadow: "rgba(0, 0, 0, 0.78)" },
    swatch: "linear-gradient(135deg,#0b0b0b,#3d3d3d 45%,#151515)",
    applications: [
      "Feature walls above hand height",
      "Ceiling panels",
      "Lift cabin upper panels",
      "Retail and gallery interiors",
      "Joinery faces",
    ],
    applicationNote: "Best in controlled interiors; in high-touch areas a mid-tone colour is usually more practical.",
    grades: sharedGrades,
    patterns: hammeredPatternNames,
    thickness: ON_REQUEST,
    sizes: hammeredSizes,
    specifications: hammeredSpecs("Black", "PVD"),
    faqs: [
      {
        q: "What is black hammered stainless steel?",
        a: "Hammered-textured stainless steel finished in a black PVD coating, where the texture reads through bright specular highlights against a dark field.",
      },
      {
        q: "Is black PVD matte?",
        a: "No. The coating retains the metal's reflectivity, so highlights stay bright even though the base tone is dark.",
      },
      {
        q: "Does black show marks?",
        a: "Darker surfaces generally show dust and handling more readily than mid-tones. We recommend a sample and a defined cleaning regime.",
      },
      {
        q: "What sizes and grades are available?",
        a: "SS304 and SS316 in 4 × 8 ft and 4 × 10 ft, with custom dimensions available on request.",
      },
      {
        q: "Can black hammered sheets be fabricated?",
        a: "Yes — cut to size, bending, laser cutting, welding and polishing, confirmed against your drawings.",
      },
    ],
  },
  {
    slug: "silver-hammered-stainless-steel-sheet",
    name: "Silver Hammered Stainless Steel Sheet",
    finishSlug: "hammered",
    finish: "Hammered",
    colour: "Silver",
    coating: "None — natural stainless steel",
    supportingHeadline: "NATURAL STAINLESS × HAMMERED TEXTURE",
    shortDescription: "The uncoated original — hammered stainless steel in its natural tone.",
    longDescription: [
      "Silver hammered is the base material without any coating. There is no PVD layer, so what you see is stainless steel itself, worked into a faceted surface.",
      "It is the most neutral option in the collection and the easiest to integrate into an existing scheme, because it matches the stainless ironmongery, frames and fittings already present in most buildings.",
      "It is also the most straightforward to specify: no colour matching between batches, and no coating variable to manage in fabrication.",
    ],
    colourNote:
      "Because there is no coating, the surface takes on the colour of the light and the surroundings — cool under daylight, warm under lamplight.",
    seoTitle: "Silver Hammered Stainless Steel Sheet | Natural Hammered SS | STEELX",
    metaDescription:
      "Silver hammered stainless steel sheet from STEELX — natural uncoated hammered stainless steel in SS304 and SS316, in 4×8 ft, 4×10 ft and custom sizes.",
    primaryKeyword: "silver hammered stainless steel sheet",
    secondaryKeywords: ["natural hammered SS sheet", "uncoated hammered stainless panel"],
    image: hmSilver,
    alt: "Macro of natural silver hammered stainless steel sheet with cool bright facets",
    light: { highlight: "rgba(255, 255, 255, 0.5)", mid: "rgba(158, 168, 176, 0.3)", shadow: "rgba(20, 26, 30, 0.6)" },
    swatch: "linear-gradient(135deg,#7d848a,#e6eaee 45%,#9aa2a8)",
    applications: [
      "Lift cabins and doors",
      "Wall cladding",
      "Commercial interiors",
      "Kitchen and service areas",
      "Furniture and fittings",
    ],
    applicationNote: "The default choice where the surface must sit alongside existing stainless steel fittings.",
    grades: sharedGrades,
    patterns: hammeredPatternNames,
    thickness: ON_REQUEST,
    sizes: hammeredSizes,
    specifications: hammeredSpecs("Silver (natural)", "None — uncoated stainless steel"),
    faqs: [
      {
        q: "What is silver hammered stainless steel?",
        a: "It is hammered-textured stainless steel supplied without a PVD coating, so the natural colour of the metal is visible.",
      },
      {
        q: "Is it PVD coated?",
        a: "No. Silver is the uncoated option. If you need a coated silver tone, PVD silver is available on request.",
      },
      {
        q: "Why choose silver over a coloured finish?",
        a: "It matches existing stainless fittings, removes colour matching from the specification, and is generally the simplest option to detail.",
      },
      {
        q: "What grades and sizes are available?",
        a: "SS304 and SS316 in 4 × 8 ft and 4 × 10 ft, with custom dimensions available on request.",
      },
      {
        q: "Can I request a sample?",
        a: "Yes. A sample is the best way to judge how the hammer pattern reads at your intended viewing distance.",
      },
    ],
  },
  {
    slug: "blue-hammered-pvd-stainless-steel-sheet",
    name: "Blue Hammered Stainless Steel Sheet",
    finishSlug: "hammered",
    finish: "Hammered",
    colour: "Blue",
    coating: "PVD",
    supportingHeadline: "PVD BLUE × HAMMERED STAINLESS STEEL",
    shortDescription: "A deep sapphire PVD tone with cool, dramatic facet highlights.",
    longDescription: [
      "Blue is the only cool colour in the hammered range, and it behaves differently from the warm tones. Instead of blending into the light of a room, it holds its own colour and sits as a distinct element within a scheme.",
      "Across the hammered facets the tone runs from an almost black navy in the recesses to a bright cyan-white where the light lands directly, giving the surface a much wider tonal range than gold or champagne.",
      "It is normally used as a single deliberate moment — a bar front, a lift lobby panel, a retail feature — rather than as a general wall material.",
    ],
    colourNote:
      "Blue PVD is strongly directional: the same panel can look near-black from one side of a room and vivid sapphire from the other.",
    seoTitle: "Blue Hammered Stainless Steel Sheet | PVD Blue SS | STEELX",
    metaDescription:
      "Blue hammered stainless steel sheet from STEELX — deep sapphire PVD over hammered texture in SS304 and SS316, in 4×8 ft, 4×10 ft and custom sizes.",
    primaryKeyword: "blue hammered stainless steel sheet",
    secondaryKeywords: ["PVD blue hammered sheet", "sapphire blue SS panel"],
    image: hmBlue,
    alt: "Macro of blue PVD hammered stainless steel sheet with cool sapphire highlights",
    light: { highlight: "rgba(190, 226, 255, 0.5)", mid: "rgba(38, 92, 158, 0.4)", shadow: "rgba(4, 14, 34, 0.72)" },
    swatch: "linear-gradient(135deg,#0d2647,#4d8dc9 45%,#123963)",
    applications: [
      "Bar and restaurant fronts",
      "Retail feature surfaces",
      "Lift lobby panels",
      "Exhibition and event interiors",
      "Bespoke furniture details",
    ],
    applicationNote: "Used as a focused accent; large uninterrupted areas can overwhelm a scheme.",
    grades: sharedGrades,
    patterns: hammeredPatternNames,
    thickness: ON_REQUEST,
    sizes: hammeredSizes,
    specifications: hammeredSpecs("Blue", "PVD"),
    faqs: [
      {
        q: "What is blue hammered stainless steel?",
        a: "Hammered-textured stainless steel finished in a deep blue PVD tone, with a wide range between dark recesses and bright highlights.",
      },
      {
        q: "How strong is the colour?",
        a: "Blue is the most saturated colour in the hammered range and is usually specified as an accent rather than as a general surface.",
      },
      {
        q: "Does the colour change with viewing angle?",
        a: "Yes. Because the facets sit at different angles, the panel appears darker or brighter depending on where you stand.",
      },
      {
        q: "What grades and sizes are available?",
        a: "SS304 and SS316 in 4 × 8 ft and 4 × 10 ft, with custom dimensions available on request.",
      },
      {
        q: "Can I see a sample?",
        a: "Yes. Blue in particular should be viewed physically, since photography flattens its angular behaviour.",
      },
    ],
  },
];

/** Colour products keyed by finish slug. Add other finishes here as they are offered. */
export const colourProducts: Record<string, ColourProduct[]> = {
  hammered: hammeredColours,
};

export function getColourProducts(finishSlug: string) {
  return colourProducts[finishSlug] ?? [];
}

export function getColourProduct(finishSlug: string, productSlug: string) {
  return getColourProducts(finishSlug).find((p) => p.slug === productSlug);
}

export const applicationImages = [
  { image: appInterior, alt: "Stainless steel surface in a luxury interior", label: "Interiors" },
  { image: appCeiling, alt: "Stainless steel ceiling panels in a lobby", label: "Ceilings" },
  { image: appExterior, alt: "Stainless steel cladding on a building exterior", label: "Cladding" },
];
