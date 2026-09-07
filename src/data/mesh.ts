/**
 * Content model for the SS Decorative Mesh (PVD) material page.
 * Every section on the page is driven from this file.
 */
import meshHero from "@/assets/mesh-hero.jpg";
import meshApplication from "@/assets/mesh-application.jpg";
import lobby from "@/assets/install-lobby.jpg";
import swatches from "@/assets/finish-swatches.jpg";
import metalHero from "@/assets/metal-hero.jpg";
import installation from "@/assets/installation.jpg";
import inspection from "@/assets/inspection.jpg";
import polishing from "@/assets/polishing.jpg";
import rawSteel from "@/assets/raw-steel.jpg";
import sheetPrep from "@/assets/sheet-prep.jpg";
import pvdChamber from "@/assets/pvd-chamber.jpg";
import pvdSteel from "@/assets/pvd-steel.jpg";
import projCommercial from "@/assets/proj-commercial.jpg";
import projInteriors from "@/assets/proj-interiors.jpg";
import projInstitutional from "@/assets/proj-institutional.jpg";
import projMixeduse from "@/assets/proj-mixeduse.jpg";
import projBungalow from "@/assets/proj-bungalow.jpg";
import projConcept from "@/assets/proj-concept.jpg";
import projDetailA from "@/assets/proj-detail-a.jpg";
import projDetailB from "@/assets/proj-detail-b.jpg";

export const img = {
  meshHero,
  meshApplication,
  lobby,
  swatches,
  metalHero,
  installation,
  inspection,
  polishing,
  rawSteel,
  sheetPrep,
  pvdChamber,
  pvdSteel,
  projCommercial,
  projInteriors,
  projInstitutional,
  projMixeduse,
  projBungalow,
  projConcept,
  projDetailA,
  projDetailB,
};

/* ── 01 Hero ─────────────────────────────────────────────────── */
export const heroStats = [
  { value: 15, suffix: "+", label: "Years experience" },
  { value: 500, suffix: "+", label: "Projects delivered" },
  { value: 100, suffix: "+", label: "Cities served" },
];

export const heroBadges = ["Since 2010", "ISO 9001:2015", "Exported worldwide"];

/* ── 04 Value proposition ────────────────────────────────────── */
export const valuePoints = [
  {
    title: "ISO 9001:2015 certified",
    body: "Documented quality management systems ensure material traceability from raw SS304/316 coils to the final finished panel in your building.",
  },
  {
    title: "Vertical integration",
    body: "From CNC loom weaving to in-house titanium PVD coating, we don't outsource. You get direct manufacturer pricing and perfect colour consistency.",
  },
  {
    title: "Custom fabrication",
    body: "Bespoke wire gauges, custom open areas and modular tensioning systems. Our engineering team converts concept sketches into buildable shop drawings.",
  },
];

/* ── 06 Product directory ────────────────────────────────────── */
export type DirectoryEntry = {
  code: string;
  name: string;
  image: string;
  body: string;
  links: { label: string; href: string }[];
};

export const productDirectory: DirectoryEntry[] = [
  {
    code: "SXD-01",
    name: "SS Profiles",
    image: metalHero,
    body: "PVD coated T-profiles, U-channels, L-angles and fluted trims for luxury interiors.",
    links: [{ label: "Designer Profiles", href: "/category/stainless-steel-designer-profiles" }],
  },
  {
    code: "SXD-02",
    name: "SS Sheets",
    image: pvdSteel,
    body: "PVD coloured, designer textured, perforated and laser cut stainless steel sheets.",
    links: [
      { label: "PVD SS Sheets", href: "/category/pvd-colored-sheets" },
      { label: "Designer Sheets", href: "/category/stainless-steel-designer-sheets" },
      { label: "Laser Cut Panels", href: "/category/laser-cut-metal-panels" },
    ],
  },
  {
    code: "SXD-03",
    name: "Mesh",
    image: meshHero,
    body: "Architectural woven, crimped, rope, spiral and expanded metal mesh systems.",
    links: [
      { label: "Woven Wire Mesh", href: "/category/decorative-woven-wire-mesh" },
      { label: "SS Woven Mesh", href: "/category/ss-woven-wire-mesh" },
      { label: "Crimped Mesh", href: "/category/crimped-wire-mesh" },
      { label: "Rope / Cable Mesh", href: "/category/rope-cable-mesh" },
      { label: "Spiral / Helix Mesh", href: "/category/spiral-helix-wire-mesh" },
      { label: "Expanded Metal", href: "/category/expanded-metal-mesh" },
    ],
  },
];

/* ── 11–14 Weave library ─────────────────────────────────────── */
export type Weave = {
  id: string;
  name: string;
  open: string;
  group: "open" | "textured" | "directional" | "dense";
  body: string;
  applications: string[];
  material: string;
};

const MAT = "SS 304 Grade • PVD Coated";

export const weaves: Weave[] = [
  {
    id: "plain",
    name: "Plain Weave",
    open: "30-65% Open",
    group: "open",
    body: "Simple one-over-one-under weave. The most versatile architectural mesh pattern — clean, uniform and timeless.",
    applications: ["Balcony Railing", "Cabinet Doors", "Ceilings"],
    material: MAT,
  },
  {
    id: "leno",
    name: "Leno Weave",
    open: "45-75% Open",
    group: "open",
    body: "Two warp wires twist around each weft wire, creating an extremely open, minimal-wire-density weave.",
    applications: ["Ceilings", "Room Dividers"],
    material: MAT,
  },
  {
    id: "crimped",
    name: "Crimped Weave",
    open: "20-55% Open",
    group: "textured",
    body: "Wires are pre-crimped before weaving, creating a pronounced three-dimensional ridged surface.",
    applications: ["Facades", "Textured Walls"],
    material: MAT,
  },
  {
    id: "lock-crimp",
    name: "Lock Crimp",
    open: "15-45% Open",
    group: "textured",
    body: "Wires lock mechanically at every intersection. Highly stable panel with zero wire shift.",
    applications: ["Security Screens", "Heavy Guards"],
    material: MAT,
  },
  {
    id: "flat-top-crimp",
    name: "Flat Top Crimp",
    open: "20-50% Open",
    group: "textured",
    body: "Crimp is positioned underneath the visible face, producing a flat, smooth surface plane.",
    applications: ["Touch Areas", "Wall Cladding"],
    material: MAT,
  },
  {
    id: "double-crimp",
    name: "Double Crimp",
    open: "15-40% Open",
    group: "textured",
    body: "Two crimps at each wire intersection double the locking force. Exceptional rigidity.",
    applications: ["Large Spans", "Security"],
    material: MAT,
  },
  {
    id: "intermediate-crimp",
    name: "Intermediate Crimp",
    open: "20-50% Open",
    group: "textured",
    body: "Crimps placed between intersections hold the aperture true on wider wire gauges.",
    applications: ["Screens", "Infill Panels"],
    material: MAT,
  },
  {
    id: "pre-crimp",
    name: "Pre-Crimp",
    open: "25-55% Open",
    group: "textured",
    body: "Wires crimped before weaving so the panel keeps its geometry under tension.",
    applications: ["Partitions", "Balustrades"],
    material: MAT,
  },
  {
    id: "intercrimp",
    name: "Intercrimp",
    open: "25-60% Open",
    group: "textured",
    body: "Multiple crimps between each intersection produce a fine, stable, decorative texture.",
    applications: ["Joinery", "Feature Walls"],
    material: MAT,
  },
  {
    id: "twill",
    name: "Twill Weave",
    open: "25-60% Open",
    group: "directional",
    body: "Over-two-under-two weave structure creates a visible 45° diagonal line.",
    applications: ["Retail Accent", "Facades"],
    material: MAT,
  },
  {
    id: "herringbone",
    name: "Herringbone Weave",
    open: "20-55% Open",
    group: "directional",
    body: "Zigzag chevron pattern reminiscent of luxury textile weaves.",
    applications: ["Hospitality", "Jewellery Stores"],
    material: MAT,
  },
  {
    id: "chevron",
    name: "Chevron Weave",
    open: "35-60% Open",
    group: "directional",
    body: "Continuous, uninterrupted V-pattern across the full panel width. Powerful visual statement.",
    applications: ["Facades", "Atriums"],
    material: MAT,
  },
  {
    id: "diamond",
    name: "Diamond Weave",
    open: "30-55% Open",
    group: "directional",
    body: "Interlocking diamond repeats. Suited for projects bridging contemporary design with traditional motifs.",
    applications: ["Interiors", "Screens"],
    material: MAT,
  },
  {
    id: "dutch",
    name: "Dutch Weave",
    open: "3-15% Open",
    group: "dense",
    body: "Fine warp wires tightly packed against heavier weft wires. Excellent screening.",
    applications: ["Privacy Screens", "Filtration"],
    material: MAT,
  },
  {
    id: "reverse-dutch",
    name: "Reverse Dutch",
    open: "3-10% Open",
    group: "dense",
    body: "Surface reads as a solid metal plane with fine woven texture.",
    applications: ["Solid Cladding", "Security"],
    material: MAT,
  },
  {
    id: "cable",
    name: "Cable Weave",
    open: "50-80% Open",
    group: "open",
    body: "Stainless steel cable warp with round-rod weft. Engineered for vertical spans up to 10m+.",
    applications: ["Atriums", "Large Facades"],
    material: MAT,
  },
  {
    id: "ring",
    name: "Ring Mesh",
    open: "30-70% Open",
    group: "open",
    body: "Interlinked metal rings create the iconic medieval armour construction reimagined for luxury.",
    applications: ["Drapery", "Lighting"],
    material: MAT,
  },
  {
    id: "spiral",
    name: "Spiral Weave",
    open: "45-75% Open",
    group: "open",
    body: "Continuous spiral coils bound by cross rods. Distinctive circular-motion visual effect.",
    applications: ["Dividers", "Retail"],
    material: MAT,
  },
];

export const weaveGroups = ["all", "open", "textured", "directional", "dense"] as const;

/* ── 15–16 Applications ──────────────────────────────────────── */
export const applications = [
  {
    name: "Room Dividers & Partitions",
    body: "Semi-transparent space zoning for luxury hotels, corporate offices and grand residences.",
    image: meshApplication,
  },
  {
    name: "Ceiling Panels & Screens",
    body: "Acoustic and decorative suspended ceiling systems for atriums, lobbies and commercial interiors.",
    image: lobby,
  },
  {
    name: "Railing & Balustrade Infill",
    body: "Safety-compliant mesh infill for balconies, staircases and bridge walkways that preserves views.",
    image: projBungalow,
  },
  {
    name: "Facade & Exterior Screens",
    body: "High-transparency building envelopes and second-skin facades for solar shading and building identity.",
    image: projMixeduse,
  },
  {
    name: "Furniture & Cabinet Mesh",
    body: "Luxury metal mesh inserts for wardrobes, bars, cabinets and custom furniture pieces.",
    image: projDetailA,
  },
  {
    name: "Landscape & Garden Screens",
    body: "Corten and marine-grade SS screens for garden perimeters, gazebo cladding and green wall trellis.",
    image: projConcept,
  },
  {
    name: "Retail & Hospitality Interiors",
    body: "Signature feature walls and display backdrops for 5-star hotels and luxury retail flagship stores.",
    image: projInteriors,
  },
  {
    name: "Commercial & Office Interiors",
    body: "Functional and aesthetic partitions, ceiling baffles and column cladding for modern workspaces.",
    image: projCommercial,
  },
  {
    name: "Feature Walls & Decorative Panels",
    body: "Large-format focal points using PVD-coated weaves and high-texture crimped mesh.",
    image: projInstitutional,
  },
];

/* ── 17–18 Process ───────────────────────────────────────────── */
export const processSteps = [
  {
    id: "specification",
    index: "01",
    title: "Specification",
    text: "Selection of material grade (SS304/316), wire diameter and open area based on environmental and structural needs.",
    image: rawSteel,
    alt: "Raw stainless steel coil stock",
  },
  {
    id: "sampling",
    index: "02",
    title: "Sampling",
    text: "Free A4 architectural swatches provided within 48 hours for board presentations and lighting mockups.",
    image: swatches,
    alt: "PVD finish swatch set",
  },
  {
    id: "engineering",
    index: "03",
    title: "Engineering",
    text: "Production of CAD shop drawings and NBS specifications for seamless integration into your project's BIM model.",
    image: sheetPrep,
    alt: "Sheet preparation before fabrication",
  },
  {
    id: "fabrication",
    index: "04",
    title: "Fabrication",
    text: "Precision CNC manufacturing and in-house PVD coating with strict ISO 9001:2015 quality controls.",
    image: pvdChamber,
    alt: "PVD coating chamber",
  },
];

/* ── 19–21 Inspiration gallery ───────────────────────────────── */
export type Inspiration = {
  title: string;
  category: string;
  spec: string;
  image: string;
};

export const inspirations: Inspiration[] = [
  { title: "Decorative Stainless Steel Mesh for Modern Kitchens", category: "Kitchens", spec: "SS 304 Woven Wire Infill", image: projDetailA },
  { title: "PVD Stainless Steel Mesh Kitchen Screens & Partitions", category: "Kitchens", spec: "PVD Gold Woven Mesh", image: projDetailB },
  { title: "Decorative Stainless Steel Mesh for Luxury Bathrooms", category: "Bathrooms", spec: "Bronze Mesh Curtain", image: polishing },
  { title: "PVD Metal Mesh Screens for Contemporary Bathrooms", category: "Bathrooms", spec: "PVD Black Perforated", image: pvdSteel },
  { title: "Designer Stainless Steel Mesh Interior Screens", category: "Interiors", spec: "PVD Champagne Ceiling", image: meshApplication },
  { title: "PVD Decorative Metal Mesh for Feature Interiors", category: "Interiors", spec: "PVD Gold Woven Mesh", image: lobby },
  { title: "Stainless Steel Decorative Mesh for Outdoor Architecture", category: "Outdoor", spec: "SS316 Woven Wire", image: projConcept },
  { title: "PVD Metal Screens for Exterior Architectural Applications", category: "Outdoor", spec: "SS316 Expanded Metal", image: projBungalow },
  { title: "Architectural Stainless Steel Mesh for Building Facades", category: "Facades", spec: "Architectural Metal Fabric", image: projMixeduse },
  { title: "PVD Decorative Stainless Steel Mesh Facade Systems", category: "Facades", spec: "PVD Gold Woven Mesh", image: projInstitutional },
  { title: "Decorative Stainless Steel Mesh for Commercial Interiors", category: "Commercial", spec: "PVD Black Perforated", image: projCommercial },
  { title: "PVD Architectural Mesh for Retail & Hospitality Spaces", category: "Commercial", spec: "PVD Champagne Ceiling", image: projInteriors },
  { title: "Decorative Stainless Steel Mesh Applications", category: "All spaces", spec: "Various Weave Patterns", image: meshHero },
  { title: "Designer PVD Stainless Steel Mesh Architecture", category: "All spaces", spec: "PVD Gold & Bronze Finishes", image: metalHero },
];

export const inspirationCategories = [
  "All spaces",
  "Kitchens",
  "Bathrooms",
  "Interiors",
  "Outdoor",
  "Facades",
  "Commercial",
];

/* ── 22–24 Maintenance ───────────────────────────────────────── */
export const maintenanceCards = [
  {
    title: "Cleaning SS 304/316 PVD",
    body: "Use only clean water and neutral soap with a soft microfiber cloth. Avoid abrasive cleaners, bleach or steel wool which can damage the titanium PVD layer.",
  },
  {
    title: "Environmental protection",
    body: "For coastal or high-pollution areas we recommend a bi-annual cleaning schedule to prevent salt and particulate buildup, preserving the shimmer of the gold and bronze finishes.",
  },
];

/* ── 25 Material comparison matrix ───────────────────────────── */
export const comparisonRows = [
  { property: "Chromium (Cr) content", ss304: "18.0 – 20.0%", ss316: "16.0 – 18.0%", ss316l: "16.0 – 18.0%" },
  { property: "Nickel (Ni) content", ss304: "8.0 – 10.5%", ss316: "10.0 – 14.0%", ss316l: "10.0 – 14.0%" },
  { property: "Molybdenum (Mo) content", ss304: "None", ss316: "2.0 – 3.0%", ss316l: "2.0 – 3.0%" },
  { property: "Carbon (C) content", ss304: "Max 0.08%", ss316: "Max 0.08%", ss316l: "Max 0.03% (ultra low)" },
  { property: "Pitting resistance (PREN)", ss304: "18.0 – 20.0", ss316: "24.0 – 26.0", ss316l: "24.0 – 26.0" },
  { property: "Corrosion resistance", ss304: "High (general)", ss316: "Superior (chloride)", ss316l: "Superior + weld-stable" },
  { property: "Coastal suitability", ss304: "Not recommended", ss316: "Mandatory (<15km)", ss316l: "Mandatory (<15km)" },
  { property: "PVD compatibility", ss304: "Excellent", ss316: "Excellent", ss316l: "Excellent" },
  { property: "Welding performance", ss304: "Standard", ss316: "Standard", ss316l: "Superior (no sensitization)" },
  { property: "Hardness (Brinell)", ss304: "Max 201 HBW", ss316: "Max 217 HBW", ss316l: "Max 217 HBW" },
  { property: "Tensile strength", ss304: "515 MPa (min)", ss316: "515 MPa (min)", ss316l: "485 MPa (min)" },
  { property: "Yield strength (0.2%)", ss304: "205 MPa (min)", ss316: "205 MPa (min)", ss316l: "170 MPa (min)" },
  { property: "Relative price index", ss304: "1.0 (baseline)", ss316: "1.4 – 1.6x", ss316l: "1.5 – 1.7x" },
];

export const comparisonFootnote =
  "PREN = Pitting Resistance Equivalent Number. Values are indicative and based on ASTM A240 standards. Coastal installations require fresh water rinsing regardless of grade.";

/* ── 26–28 PVD finishes ──────────────────────────────────────── */
export const pvdFinishes = [
  { id: "silver-mirror", name: "Silver Mirror", note: "Mill finish, bright annealed", swatch: "linear-gradient(135deg,#5c6268,#e6eaee 32%,#8a9299 58%,#f4f7f9 78%,#5c6268)" },
  { id: "satin-brushed", name: "Satin-Brushed", note: "180-grit brushed, soft matte", swatch: "linear-gradient(135deg,#4e545a,#b6bcc2 34%,#767d84 60%,#cfd4d9 80%,#4e545a)" },
  { id: "pvd-gold", name: "PVD Gold", note: "Warm champagne-gold lustre", swatch: "linear-gradient(135deg,#8a6a1c,#f5cd5f 35%,#c79a29 60%,#ffe9a3 78%,#8a6a1c)" },
  { id: "pvd-rose-gold", name: "PVD Rose Gold", note: "Copper-blush pink-gold", swatch: "linear-gradient(135deg,#8c4f42,#f0b4a0 35%,#c98873 60%,#fbd8c9 78%,#8c4f42)" },
  { id: "pvd-black", name: "PVD Black", note: "Deep charcoal-black matte", swatch: "linear-gradient(135deg,#0b0b0b,#3a3a3a 35%,#151515 60%,#4a4a4a 78%,#0b0b0b)" },
  { id: "pvd-bronze", name: "PVD Bronze", note: "Rich warm brown-bronze tone", swatch: "linear-gradient(135deg,#4a3220,#a97f4f 35%,#6d4c2c 60%,#c99d68 78%,#4a3220)" },
  { id: "pvd-champagne", name: "PVD Champagne", note: "Pale yellow-gold, elegant", swatch: "linear-gradient(135deg,#8a7048,#f0dcb4 35%,#c7a877 60%,#f6ecd6 78%,#8a7048)" },
  { id: "pvd-copper", name: "PVD Copper", note: "Rustic red-brown metallic", swatch: "linear-gradient(135deg,#5e2f1c,#c9784a 35%,#8c4a2a 60%,#e9a172 78%,#5e2f1c)" },
];

/* ── 29–30 Case studies ──────────────────────────────────────── */
export const caseStudies = [
  {
    id: "oberoi-sky-residences-mumbai",
    title: "Oberoi Sky Residences, Mumbai",
    scope: "Lobby & Interior",
    material: "PVD Gold Woven Mesh",
    location: "Mumbai, India",
    area: "1,850 sqm",
    body: "Transformation of a high-end luxury residential lobby using bespoke PVD Gold woven wire mesh panels for wall cladding and ceiling features.",
    before: { src: projConcept, alt: "Residential lobby shell before mesh cladding" },
    after: { src: projInteriors, alt: "Completed lobby with PVD gold woven mesh cladding" },
  },
  {
    id: "emaar-boulevard-tower-dubai",
    title: "Emaar Boulevard Tower, Dubai",
    scope: "Facade & Shading",
    material: "SS316 Architectural Mesh",
    location: "Dubai, UAE",
    area: "3,200 sqm",
    body: "Implementation of a high-performance SS316 sun-screen facade for a luxury tower in Dubai, providing 45% solar gain reduction.",
    before: { src: rawSteel, alt: "Tower structure before facade screen installation" },
    after: { src: projMixeduse, alt: "Completed SS316 mesh sun-screen facade" },
  },
  {
    id: "itc-windsor-wing-bengaluru",
    title: "ITC Windsor Wing, Bengaluru",
    scope: "Hospitality & Retail",
    material: "Crimped Diamond Weave",
    location: "Bengaluru, India",
    area: "620 sqm",
    body: "Creation of a signature ballroom feature wall and bar front using crimped diamond weave mesh with antique brass PVD finish.",
    before: { src: sheetPrep, alt: "Ballroom wall before mesh feature installation" },
    after: { src: projCommercial, alt: "Completed ballroom feature wall in crimped diamond weave" },
  },
];

/* ── 31–32 SteelX in motion ──────────────────────────────────── */
export const reels = [
  { title: "PVD Gold facade — install timelapse", meta: "Mumbai · 45 sec", poster: installation, alt: "PVD gold facade installation" },
  { title: "Woven wire mesh — workshop reel", meta: "Factory floor · 30 sec", poster: polishing, alt: "Woven wire mesh in the workshop" },
  { title: "Hotel lobby ceiling reveal", meta: "Bengaluru · 60 sec", poster: lobby, alt: "Hotel lobby mesh ceiling" },
  { title: "Titanium PVD chamber cycle", meta: "Coating plant · 40 sec", poster: pvdChamber, alt: "PVD coating chamber cycle" },
];

/* ── 33–35 Technical specifications ──────────────────────────── */
export const gradeGuidance = [
  {
    title: "Coastal (SS316 mandatory)",
    body: "Mumbai, Chennai, Kochi, Goa, Vishakhapatnam, Kolkata. Molybdenum-alloyed for extreme chloride resistance. Required for all projects within 15km of the shoreline to prevent tea-staining.",
  },
  {
    title: "Inland (SS304 recommended)",
    body: "Delhi NCR, Pune, Bangalore, Hyderabad, Jaipur. Economical and highly durable for dry or non-polluted environments where salt spray is not a factor.",
  },
];

export const technicalComparison = [
  { property: "Corrosion resistance", ss304: "High", ss316: "Extreme" },
  { property: "Pitting resistance (PREN)", ss304: "18-20", ss316: "24-26" },
  { property: "Material composition", ss304: "18% Cr, 8% Ni", ss316: "16% Cr, 10% Ni, 2% Mo" },
  { property: "Salt spray resistance", ss304: "240-500 hrs", ss316: "1,000+ hrs" },
  { property: "Relative cost index", ss304: "1.0", ss316: "1.35 – 1.45" },
];

export const engineeringSpecs = [
  { property: "Wire diameter", range: "0.3mm to 8.0mm", tolerance: "±0.02mm", standard: "ASTM A580" },
  { property: "Aperture size", range: "1.0mm to 150mm", tolerance: "±0.10mm", standard: "ISO 9044" },
  { property: "Panel width", range: "Up to 3000mm", tolerance: "+5mm / -0mm", standard: "ISO 9044" },
  { property: "Panel length", range: "Up to 6000mm", tolerance: "+10mm / -0mm", standard: "ISO 9044" },
  { property: "Open area", range: "3% to 80%", tolerance: "±2%", standard: "Calculated" },
  { property: "Weight", range: "1.5 kg to 25 kg per m²", tolerance: "±5%", standard: "Calculated" },
  { property: "PVD hardness", range: "2,500 HV (titanium)", tolerance: "N/A", standard: "Vickers" },
  { property: "Tensile strength", range: "500 – 800 N/mm²", tolerance: "N/A", standard: "ASTM A370" },
];

/* ── 37–40 Material grade comparison ─────────────────────────── */
export const grades = [
  {
    code: "SS304",
    name: "Standard Grade",
    points: [
      "Indoor partitions, ceilings, elevator cladding",
      "Façades in non-coastal, low-pollution zones",
      "Retail & hospitality interior décor",
      "NOT for coastal / marine environments",
      "NOT for high-chloride industrial zones",
    ],
    price: "Most economical: ₹280-850/sq ft",
    pren: "PREN: 18-20",
    recommended: "Indoor architectural applications & non-coastal exteriors.",
  },
  {
    code: "SS316",
    name: "Marine Grade",
    points: [
      "Coastal façades (within 15km of shoreline)",
      "Swimming pool enclosures & wet zones",
      "High-humidity commercial buildings",
      "Chemical & food processing facility cladding",
      "2-3% Molybdenum for pitting resistance",
    ],
    price: "Mid-range: ₹420-1,150/sq ft",
    pren: "PREN: 24-26",
    recommended: "Coastal projects, high-humidity zones & wet applications.",
  },
  {
    code: "SS316L",
    name: "Low-Carbon Marine Grade",
    points: [
      "All SS316 applications + welded joints",
      "Post-weld corrosion resistance (no sensitization)",
      "Large-span tensioned mesh assemblies",
      "Pharma, biotech & cleanroom cladding",
      "Max carbon 0.03% (vs 0.08% in SS316)",
    ],
    price: "Premium: ₹480-1,450/sq ft",
    pren: "PREN: 24-26",
    recommended: "Welded-frame panels, cleanrooms & premium coastal projects.",
  },
];

/* ── 41 Technical matrix ─────────────────────────────────────── */
export const technicalMatrix = [
  { label: "Material grades", value: "SS304, SS316, SS316L, Brass, Copper, Bronze" },
  { label: "Wire diameter", value: "0.3mm to 8.0mm (custom gauges available)" },
  { label: "Panel size", value: "Up to 3000mm width × 6000mm length" },
  { label: "Open area", value: "3% to 80% (variable by weave pattern)" },
  { label: "Finish options", value: "Mill, brushed, mirror, PVD (gold, rose gold, black, etc.)" },
  { label: "Fire rating", value: "Class A (non-combustible) — NBC India compliant" },
  { label: "Service life", value: "25+ years (with recommended maintenance)" },
  { label: "Manufacturing", value: "ISO 9001:2015 certified facility" },
];

/* ── 42–46 Resource hub ──────────────────────────────────────── */
export const resources = [
  {
    title: "Main Product Catalogue 2026",
    body: "Complete collection of 25+ weave patterns, PVD finishes and technical standards.",
    type: "PDF",
    size: "12.4 MB",
  },
  {
    title: "Technical Data Sheets (TDS)",
    body: "Material grades (SS304/SS316), wire diameters, tensile strengths and fire ratings.",
    type: "PDF",
    size: "4.2 MB",
  },
  {
    title: "CAD & BIM Resource Kit",
    body: "AutoCAD .dwg patterns and Revit .rfa BIM objects for architectural specification.",
    type: "ZIP",
    size: "85.6 MB",
  },
  {
    title: "Maintenance & Care Protocol",
    body: "Official cleaning procedures for indoor, outdoor and marine grade installations.",
    type: "PDF",
    size: "1.8 MB",
  },
];

/* ── 47–51 Care & maintenance ────────────────────────────────── */
export const careCards = [
  { tag: "Cleaning", title: "Indoor", items: ["Soft microfiber cloth", "Dry dusting"] },
  { tag: "Cleaning", title: "Outdoor / high-touch", items: ["Warm water", "pH-neutral detergent", "Wipe along the grain"] },
  { tag: "Maintenance", title: "Coastal installations", items: ["Fresh water rinse every quarter", "Recommend SS316"] },
];

export const neverUse = ["Steel wool", "Chlorine bleach", "Hydrochloric acid"];

/* ── 52–53 How to order ──────────────────────────────────────── */
export const orderSteps = [
  { n: "01", title: "Share drawings", body: "Send your project sketches or CAD files" },
  { n: "02", title: "Select specifications", body: "Pick weave • material • finish" },
  { n: "03", title: "Receive quote", body: "Detailed pricing within 24 hours" },
  { n: "04", title: "Free A4 sample", body: "Physical swatch for tactile approval" },
  { n: "05", title: "Production", body: "Standard: 2–4 weeks | Custom: 4–6 weeks" },
  { n: "06", title: "Quality inspection", body: "Rigorous QC checks before dispatch" },
  { n: "07", title: "Worldwide dispatch", body: "Secure packing and pan-India / global shipping" },
];

/* ── 54 Testimonials ─────────────────────────────────────────── */
export const testimonials = [
  {
    quote:
      "The PVD gold finish held up perfectly on a 12-storey facade. SteelXDecor delivered mill certificates, shop drawings and on-site supervision — flawless execution.",
    name: "Ar. Rohan Mehta",
    role: "Principal Architect",
    location: "Mumbai",
  },
  {
    quote:
      "Custom weave pattern developed in under two weeks. Samples arrived quickly and the final panels matched them to the millimetre.",
    name: "Priya Nair",
    role: "Interior Designer",
    location: "Bangalore",
  },
  {
    quote:
      "Best decorative mesh manufacturer we've worked with in India. Pricing was transparent, packing was site-ready, and lead time was met to the day.",
    name: "Sameer Kapoor",
    role: "Project Manager",
    location: "Delhi NCR",
  },
];

/* ── 55 FAQ ──────────────────────────────────────────────────── */
export const faqs = [
  {
    q: "What is architectural stainless steel metal mesh?",
    a: "Architectural stainless steel metal mesh is a precision-engineered woven, perforated or expanded metal product used in building facades, interior partitions, ceiling systems, railing infills and decorative screens. Manufactured from SS304 or SS316 stainless steel, it combines structural performance with aesthetic versatility. SteelXDecor produces architectural mesh in 25+ weave patterns with panel sizes up to 3000×6000mm at our ISO 9001:2015 certified facility in India.",
  },
  {
    q: "What is PVD coating on architectural mesh?",
    a: "PVD (Physical Vapour Deposition) is a vacuum process that bonds a titanium-based nano-coating to the stainless steel surface. It is not a paint or a plating: the colour is bonded into the metal, so it does not flake or peel. It is an environmentally clean process with no toxic effluent, and is REACH and RoHS compliant.",
  },
  {
    q: "Do you export architectural mesh outside India?",
    a: "Yes. Alongside 100+ Indian cities we export to the UAE, Singapore, the USA and the UK, with secure crating and documentation prepared for each shipment.",
  },
  {
    q: "How do I maintain and clean architectural stainless steel mesh?",
    a: "Use clean water and a pH-neutral soap with a soft microfiber cloth, wiping along the grain. Never use steel wool, chlorine bleach or hydrochloric acid. Coastal installations should be rinsed with fresh water every quarter.",
  },
  {
    q: "Which grade of stainless steel is best for architectural mesh — SS304 or SS316?",
    a: "SS304 is recommended for indoor and inland applications. SS316, with 2–3% molybdenum, is mandatory for projects within 15km of a shoreline and for wet or high-humidity zones. SS316L adds low carbon content for welded assemblies.",
  },
  {
    q: "What is the price of architectural metal mesh in India?",
    a: "Indicative rates are ₹280-850/sq ft for SS304, ₹420-1,150/sq ft for SS316 and ₹480-1,450/sq ft for SS316L. Final pricing depends on weave, wire gauge, open area, finish and panel size.",
  },
  {
    q: "What is the maximum panel size for architectural woven wire mesh?",
    a: "Panels are produced up to 3000mm wide and 6000mm long, with tolerances of +5mm/-0mm on width and +10mm/-0mm on length to ISO 9044.",
  },
  {
    q: "Is stainless steel architectural mesh fire-rated?",
    a: "Yes. Architectural stainless steel mesh is Class A (non-combustible) and NBC India compliant.",
  },
];

/* ── 56 Global reach ─────────────────────────────────────────── */
export const cities = [
  "Mumbai",
  "Delhi NCR",
  "Bangalore",
  "Hyderabad",
  "Chennai",
  "Pune",
  "Ahmedabad",
  "Kolkata",
  "Surat",
  "Jaipur",
  "Lucknow",
  "Kochi",
  "Chandigarh",
  "Goa",
  "Guwahati",
  "Bhopal",
  "Visakhapatnam",
  "Nagpur",
  "Dehradun",
  "Raipur",
];

/* ── 57 Keywords ─────────────────────────────────────────────── */
export const keywordClusters = [
  {
    title: "Manufacturing",
    items: [
      "Architectural Metal Mesh Manufacturer India",
      "SS304 Woven Wire Mesh Suppliers",
      "SS316 Marine Grade Facade Mesh",
      "SteelXDecor ISO 9001:2015 Certified",
      "India Leading Metal Mesh Exporter",
    ],
  },
  {
    title: "Finishes",
    items: [
      "PVD Gold Coated Stainless Steel Mesh",
      "Titanium PVD Coating Finishes",
      "Perforated Metal Sheets Manufacturer India",
      "Expanded Metal Mesh Facade Panels",
    ],
  },
  {
    title: "Applications",
    items: [
      "Decorative Metal Screens for Interior Design",
      "Metal Mesh Ceiling Design Ideas",
      "Woven Wire Mesh for Partition Walls",
      "Facade Cladding Mesh Systems",
      "High Transparency Solar Shading Mesh",
    ],
  },
  {
    title: "Specification",
    items: [
      "Architectural Wire Mesh Price India 2026",
      "Crimped Wire Mesh Screens Mumbai",
      "Rigid vs Flexible Architectural Mesh",
      "SS316 Architectural Mesh Coastal Projects",
      "Sustainable Architecture Building Materials",
      "Stainless Steel Mesh for Architects",
    ],
  },
];
