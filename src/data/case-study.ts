import csHero from "@/assets/cs-hero.jpg";
import csSpatial from "@/assets/cs-spatial.jpg";
import csVertical from "@/assets/cs-vertical.jpg";
import csVenue from "@/assets/cs-venue.jpg";
import macroFinish from "@/assets/macro-finish.jpg";
import metalHero from "@/assets/metal-hero.jpg";
import detailA from "@/assets/proj-detail-a.jpg";
import lobby from "@/assets/install-lobby.jpg";
import rawSteel from "@/assets/raw-steel.jpg";
import sheetPrep from "@/assets/sheet-prep.jpg";
import pvdChamber from "@/assets/pvd-chamber.jpg";
import inspection from "@/assets/inspection.jpg";
import installation from "@/assets/installation.jpg";

import { projects } from "@/data/projects";

export const caseStudy = {
  slug: "material-light-space",
  title: "Material / Light / Space",
  category: "Exhibitions",
  location: "Mumbai, India",
  year: "2026",
  client: "STEELX Studio",
  discipline: "Material Installation / PVD Stainless Steel / Spatial Design",
  short:
    "An exploration of stainless steel as an architectural medium — where surface, reflection, texture and light become part of the space.",
} as const;

export type SequenceImage = {
  id: string;
  index: string;
  src: string;
  alt: string;
  caption: string;
  finish: string;
  /** Layout rhythm for the editorial sequence. */
  layout: "full" | "right" | "viewport" | "left" | "portrait" | "closing";
};

export const sequence: SequenceImage[] = [
  {
    id: "img-01",
    index: "01",
    src: csHero,
    alt: "Champagne PVD stainless steel panels forming a sculptural exhibition landscape",
    caption: "Installation view",
    finish: "PVD Champagne / Hairline",
    layout: "full",
  },
  {
    id: "img-02",
    index: "02",
    src: macroFinish,
    alt: "Macro detail of a brushed PVD stainless steel surface",
    caption: "Surface detail",
    finish: "Rose Gold / Brushed",
    layout: "right",
  },
  {
    id: "img-03",
    index: "03",
    src: csSpatial,
    alt: "Perforated gunmetal stainless steel screens lining a dark exhibition room",
    caption: "Spatial view",
    finish: "Gunmetal / Bead Blast",
    layout: "viewport",
  },
  {
    id: "img-04",
    index: "04",
    src: detailA,
    alt: "Close detail of a metal joint and reveal on a PVD panel",
    caption: "Junction study",
    finish: "Champagne / Mirror",
    layout: "left",
  },
  {
    id: "img-05",
    index: "05",
    src: csVertical,
    alt: "Full-height fluted rose gold stainless steel panel catching warm light",
    caption: "Fluted elevation",
    finish: "Rose Gold / Hairline",
    layout: "portrait",
  },
  {
    id: "img-06",
    index: "06",
    src: lobby,
    alt: "Wide view of the completed installation reflecting the surrounding room",
    caption: "Closing view",
    finish: "Champagne / Mirror / Bead Blast",
    layout: "closing",
  },
];

export const specification = [
  { label: "Material", value: "304 / 316 Stainless Steel" },
  { label: "Finish", value: "Hairline / Mirror / Bead Blast" },
  { label: "PVD", value: "Champagne / Rose / Gunmetal" },
  { label: "Application", value: "Walls / Screens / Sculptural Elements" },
  { label: "Fabrication", value: "Custom" },
  { label: "Installation", value: "STEELX Studio" },
];

export const projectFacts = [
  { label: "Project", value: "Material / Light / Space" },
  { label: "Category", value: "Exhibition / Installation" },
  { label: "Location", value: "Mumbai, India" },
  { label: "Year", value: "2026" },
  { label: "Material", value: "PVD Stainless Steel" },
  { label: "Finishes", value: "Champagne / Rose Gold / Gunmetal" },
  { label: "Scope", value: "Fabrication + Finishing + Installation" },
];

export const processStages = [
  {
    index: "01",
    title: "Raw Steel",
    text: "Grade selected against environment and span — 304 inside, 316 where coastal air is in play.",
    image: rawSteel,
    alt: "Coil of raw stainless steel",
  },
  {
    index: "02",
    title: "Preparation",
    text: "Cut, formed and surfaced. Hairline, vibration, bead-blast or mirror is fixed before coating.",
    image: sheetPrep,
    alt: "Stainless steel sheets prepared for finishing",
  },
  {
    index: "03",
    title: "PVD",
    text: "Colour bonded in a vacuum chamber, batched per elevation so tone reads continuous.",
    image: pvdChamber,
    alt: "PVD coating chamber in operation",
  },
  {
    index: "04",
    title: "Inspection",
    text: "Tone, gloss and grain direction checked against the approved sample under gallery light.",
    image: inspection,
    alt: "Inspection of a coated metal panel",
  },
  {
    index: "05",
    title: "Installation",
    text: "Sequenced on site by our own team — reveals, shadow gaps and joints set to drawing.",
    image: installation,
    alt: "Installation of metal panels on site",
  },
];

export const materialDetailImage = metalHero;
export const venueImage = csVenue;

const relatedSlugs = [
  "the-vira-hotel-lobby",
  "aurum-flagship-store",
  "meridian-tower-facade",
  "nikhil-gupta-residence",
  "atelier-nine-interiors",
  "ss-decorative-mesh-programme",
];

export const relatedProjects = relatedSlugs
  .map((slug) => projects.find((p) => p.slug === slug))
  .filter((p): p is (typeof projects)[number] => Boolean(p));

export const nextProject = relatedProjects.find((p) => p.slug === "aurum-flagship-store")!;
