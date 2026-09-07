import metalHero from "@/assets/metal-hero.jpg";
import macroFinish from "@/assets/macro-finish.jpg";
import facadeNight from "@/assets/facade-night.jpg";
import plasmaChamber from "@/assets/plasma-chamber.jpg";
import meshHero from "@/assets/mesh-hero.jpg";
import meshApplication from "@/assets/mesh-application.jpg";
import lobby from "@/assets/install-lobby.jpg";
import interiors from "@/assets/proj-interiors.jpg";
import retail from "@/assets/proj-concept.jpg";
import commercial from "@/assets/proj-commercial.jpg";
import institutional from "@/assets/proj-institutional.jpg";
import bungalow from "@/assets/proj-bungalow.jpg";
import detailA from "@/assets/proj-detail-a.jpg";
import detailB from "@/assets/proj-detail-b.jpg";
import rawSteel from "@/assets/raw-steel.jpg";
import sheetPrep from "@/assets/sheet-prep.jpg";
import inspection from "@/assets/inspection.jpg";
import installation from "@/assets/installation.jpg";
import pvdSteel from "@/assets/pvd-steel.jpg";
import polishing from "@/assets/polishing.jpg";

export const exhibitionImages = {
  hero: facadeNight,
  featured: lobby,
  manifesto: macroFinish,
  mesh: meshHero,
  meshApplication,
  metalHero,
  plasmaChamber,
  interiors,
  retail,
  commercial,
  institutional,
  bungalow,
  detailA,
  detailB,
  rawSteel,
  sheetPrep,
  inspection,
  installation,
  pvdSteel,
  polishing,
};

export const experiments = [
  {
    index: "01",
    title: "Reflection",
    text: "Mirror and vibration surfaces used as instruments — borrowing the room, doubling depth, dissolving structure into light.",
    image: metalHero,
    alt: "Mirror-polished PVD stainless steel reflecting an interior",
  },
  {
    index: "02",
    title: "Texture",
    text: "Hairline, bead-blast, etch and woven mesh, read at hand distance and at thirty metres. Grain direction is a drawing decision.",
    image: macroFinish,
    alt: "Macro detail of a brushed metallic surface",
  },
  {
    index: "03",
    title: "Light",
    text: "Coatings tuned so a single tone shifts through the day — warm at dusk, sharp at noon, never flat under artificial light.",
    image: facadeNight,
    alt: "Metal facade catching directional light at night",
  },
];

export type ExhibitionEntry = {
  index: string;
  title: string;
  location: string;
  year: string;
  image: string;
  alt: string;
  slug?: string;
};

export const exhibitionIndex: ExhibitionEntry[] = [
  {
    index: "01",
    title: "The Vira Hotel — Material Installation",
    location: "Dubai, UAE",
    year: "2025",
    image: lobby,
    alt: "Hotel lobby clad in champagne PVD stainless steel",
    slug: "the-vira-hotel-lobby",
  },
  {
    index: "02",
    title: "Aurum Flagship — Rose Gold Spatial Study",
    location: "Mumbai, India",
    year: "2025",
    image: retail,
    alt: "Retail interior in rose gold PVD stainless steel",
    slug: "aurum-flagship-store",
  },
  {
    index: "03",
    title: "Meridian Tower — Gunmetal Facade Study",
    location: "Singapore",
    year: "2026",
    image: commercial,
    alt: "Gunmetal metal facade study on a tower elevation",
    slug: "meridian-tower-facade",
  },
  {
    index: "04",
    title: "Nikhil Gupta Residence — Black PVD Installation",
    location: "Rajkot, India",
    year: "2025",
    image: bungalow,
    alt: "Residential interior with black PVD metalwork",
    slug: "nikhil-gupta-residence",
  },
  {
    index: "05",
    title: "Atelier Nine — Champagne Interior Study",
    location: "London, UK",
    year: "2025",
    image: interiors,
    alt: "Champagne toned metal interior study",
    slug: "atelier-nine-interiors",
  },
  {
    index: "06",
    title: "SS Decorative Mesh — Spatial Systems",
    location: "India / GCC",
    year: "2026",
    image: meshHero,
    alt: "Woven stainless steel mesh used as a spatial screen",
    slug: "ss-decorative-mesh-programme",
  },
];

export const storyBlocks = [
  {
    id: "surface",
    statement: "The surface becomes the space.",
    text: "An installation is not cladding applied to a room. Panel size, joint rhythm and grain direction set the proportion a visitor actually reads.",
    image: interiors,
    alt: "Interior volume defined entirely by metal surfaces",
    layout: "image-left" as const,
  },
  {
    id: "light",
    statement: "Light reveals the finish.",
    text: "We mock up every finish under the lighting design of the space before the coating target is locked. A tone approved on a desk rarely survives the room.",
    image: meshApplication,
    alt: "Directional lighting across a woven metal screen",
    layout: "text-left" as const,
  },
];

export const materialCopy: Record<string, { finish: string; image: string; alt: string; text: string }> = {
  champagne: {
    finish: "Hairline No.4",
    image: lobby,
    alt: "Champagne PVD stainless steel in a hospitality lobby",
    text: "Warm without reading as gold. The most specified tone across hospitality arrival spaces.",
  },
  gold: {
    finish: "Mirror No.8",
    image: interiors,
    alt: "Gold PVD stainless steel interior surface",
    text: "Saturated and reflective. Used sparingly, as a single plane rather than a whole room.",
  },
  "rose-gold": {
    finish: "Vibration",
    image: retail,
    alt: "Rose gold PVD stainless steel retail surface",
    text: "Pink-shifted copper. A retail and jewellery tone that flatters skin and product light.",
  },
  bronze: {
    finish: "Hairline No.4",
    image: commercial,
    alt: "Bronze PVD stainless steel facade fins",
    text: "Deep and architectural. Holds its reading at facade distance and at dusk.",
  },
  black: {
    finish: "Bead-blast",
    image: bungalow,
    alt: "Black PVD stainless steel residential metalwork",
    text: "Matt through mirror. The hardest tone to keep even across large continuous runs.",
  },
  gunmetal: {
    finish: "Vibration",
    image: facadeNight,
    alt: "Gunmetal PVD stainless steel facade at night",
    text: "Grey with warmth in it — quieter than black, and forgiving under mixed light.",
  },
  titanium: {
    finish: "Bead-blast",
    image: institutional,
    alt: "Titanium PVD stainless steel institutional surface",
    text: "Cool, fingerprint tolerant, specified widely in institutional and transport work.",
  },
  silver: {
    finish: "Mirror No.8",
    image: metalHero,
    alt: "Silver PVD stainless steel mirror surface",
    text: "A clear PVD layer over polished stainless — protection without a colour shift.",
  },
};

export const makingStages = [
  {
    index: "01",
    title: "Raw steel",
    text: "Grade selected against environment and span — 304 inside, 316 and 316L where salt, chlorine or coastal air are in play.",
    image: rawSteel,
    alt: "Stainless steel coil stock",
  },
  {
    index: "02",
    title: "Preparation",
    text: "Cut, formed and surfaced. Hairline, vibration, bead-blast or mirror is established before any coating enters the conversation.",
    image: sheetPrep,
    alt: "Sheet preparation in the workshop",
  },
  {
    index: "03",
    title: "PVD",
    text: "Panels are batched per elevation and coated in a single chamber run so colour reads continuous across the full installation.",
    image: plasmaChamber,
    alt: "PVD coating chamber during a run",
  },
  {
    index: "04",
    title: "Inspection",
    text: "Tone, gloss, adhesion and edge condition are checked against the approved sample before anything leaves the floor.",
    image: inspection,
    alt: "Panel inspection under controlled lighting",
  },
  {
    index: "05",
    title: "Installation",
    text: "Sequenced with the site programme, protected until handover, and set out so joints resolve against the architecture, not against tolerance.",
    image: installation,
    alt: "Metal panels being installed on site",
  },
];

export const surfaceDetails = [
  { src: detailA, alt: "Reveal detail between glazing and metal" },
  { src: detailB, alt: "Corner junction of a fabricated panel system" },
  { src: polishing, alt: "Hand polishing a stainless steel panel" },
  { src: pvdSteel, alt: "Coated stainless steel sample sheets" },
];
