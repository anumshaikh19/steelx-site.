import pvdChamber from "@/assets/pvd-chamber.jpg";
import plasmaChamber from "@/assets/plasma-chamber.jpg";
import sheetPrep from "@/assets/sheet-prep.jpg";
import polishing from "@/assets/polishing.jpg";
import macroFinish from "@/assets/macro-finish.jpg";
import meshApplication from "@/assets/mesh-application.jpg";
import installation from "@/assets/installation.jpg";
import inspection from "@/assets/inspection.jpg";
import facadeNight from "@/assets/facade-night.jpg";
import metalHero from "@/assets/metal-hero.jpg";
import productFilm from "@/assets/product-film.mp4.asset.json";

export const servicesHero = {
  eyebrow: "Services",
  title: "Sheet to surface",
  lead: "STEELX is a stainless steel surface workshop. Coating, cutting, forming and finishing are carried out in-house, so a single sheet can move from mill finish to installed architectural surface without leaving our control.",
  poster: metalHero,
  videoSrc: productFilm.url,
  alt: "Brushed stainless steel sheet under raking studio light",
};

export type Service = {
  id: string;
  index: string;
  name: string;
  summary: string;
  detail: string;
  specs: { label: string; value: string }[];
  image: string;
  alt: string;
};

export const services: Service[] = [
  {
    id: "pvd",
    index: "01",
    name: "PVD Coating",
    summary: "Vacuum-deposited nano-coating in champagne, bronze, rose, black and blue.",
    detail:
      "Physical Vapour Deposition bonds a titanium-based film to stainless steel inside a vacuum chamber. The colour is metallurgical, not painted — it cannot peel, and it holds its tone under UV, salt air and daily contact.",
    specs: [
      { label: "Chamber", value: "2500 × 1500 mm" },
      { label: "Film", value: "0.3 – 1.0 µm" },
      { label: "Standard", value: "ASTM B117 · RoHS" },
    ],
    image: pvdChamber,
    alt: "Stainless steel sheets loaded into a PVD vacuum chamber",
  },
  {
    id: "laser",
    index: "02",
    name: "Laser Cutting",
    summary: "Fibre laser cutting for perforation, screens, signage and precise panel edges.",
    detail:
      "Fibre optics cut a clean, oxide-free edge in stainless up to 12 mm. Perforated screens, jali patterns and bespoke panel geometry are cut from drawing files with no tooling cost and no distortion at the edge.",
    specs: [
      { label: "Bed", value: "3000 × 1500 mm" },
      { label: "Thickness", value: "0.5 – 12 mm" },
      { label: "Tolerance", value: "± 0.1 mm" },
    ],
    image: meshApplication,
    alt: "Laser-cut perforated stainless steel screen",
  },
  {
    id: "grooving",
    index: "03",
    name: "V-Grooving & Forming",
    summary: "V-cut grooving, press braking and folding for sharp, seamless corners.",
    detail:
      "A V-groove removes material from the reverse face so the sheet folds to a true 90° arris with no visible radius. Grooving, braking and rolling let a flat surface become a column cladding, a reveal or a box section without a weld line on show.",
    specs: [
      { label: "Groove length", value: "up to 3000 mm" },
      { label: "Brake", value: "160 T" },
      { label: "Corner", value: "Seamless arris" },
    ],
    image: sheetPrep,
    alt: "V-grooved stainless steel sheet being folded",
  },
  {
    id: "texturing",
    index: "04",
    name: "Etching & Embossing",
    summary: "Chemical etching, stamping and embossing across our pattern library.",
    detail:
      "Masked chemical etching produces matte pattern against mirror ground; rolled embossing gives relief with real depth. Both can be run before PVD so the colour follows the texture rather than sitting on top of it.",
    specs: [
      { label: "Patterns", value: "40+ in library" },
      { label: "Bespoke", value: "Artwork to sheet" },
      { label: "Sheet", value: "1220 × 3050 mm" },
    ],
    image: macroFinish,
    alt: "Macro view of etched and embossed stainless steel texture",
  },
  {
    id: "finishing",
    index: "05",
    name: "Mirror & Hairline Finishing",
    summary: "Mirror polishing, hairline, satin, bead blast and vibration finishes.",
    detail:
      "Every surface is ground and polished in stages, each one removing the marks of the last. The final pass decides how the metal holds light — a hairline that reads as fabric at distance, or a mirror that dissolves into its reflection.",
    specs: [
      { label: "Finishes", value: "No.4 · No.8 · HL · BB" },
      { label: "Widths", value: "up to 1500 mm" },
      { label: "Protection", value: "PE film applied" },
    ],
    image: polishing,
    alt: "Stainless steel sheet being mirror polished",
  },
  {
    id: "fabrication",
    index: "06",
    name: "Fabrication & Installation",
    summary: "Panel systems, cassettes, joinery metal and site installation.",
    detail:
      "Drawings are developed with the architect, panels are jigged and welded in the workshop, and the same team sets out and installs on site. Sequence, tolerance and joint alignment are resolved before anything is coated.",
    specs: [
      { label: "Systems", value: "Cassette · Rail · Fix" },
      { label: "Survey", value: "Site to shop drawing" },
      { label: "Handover", value: "Care pack + spares" },
    ],
    image: installation,
    alt: "Installation of stainless steel cladding panels on site",
  },
];

export const filmSection = {
  eyebrow: "Inside the chamber",
  title: "Colour, deposited atom by atom",
  body: "Argon plasma strikes a titanium target; the vapour condenses onto the steel in a film thinner than a fingerprint. The tone is set by the gas, not by pigment.",
  poster: plasmaChamber,
  videoSrc: productFilm.url,
  alt: "Plasma glow inside a PVD coating chamber",
};

export const proof = {
  images: [
    { src: inspection, alt: "Finished sheet under inspection light" },
    { src: facadeNight, alt: "PVD stainless facade at night" },
  ],
  facts: [
    { label: "In-house stages", value: "Six" },
    { label: "Sheet capacity", value: "3050 mm" },
    { label: "Finish warranty", value: "10 years" },
  ],
};
