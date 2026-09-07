export type Finish = {
  id: string;
  name: string;
  family: string;
  note: string;
  /** CSS gradient used for the swatch until a photographed sample is available. */
  swatch: string;
};

export const finishes: Finish[] = [
  {
    id: "champagne",
    name: "Champagne",
    family: "Warm neutral",
    note: "The most specified tone in hospitality — warm without reading as gold.",
    swatch: "linear-gradient(135deg,#8a7048,#f0dcb4 35%,#c7a877 60%,#f6ecd6 78%,#8a7048)",
  },
  {
    id: "gold",
    name: "Gold",
    family: "Warm",
    note: "A saturated yellow tone; best on hairline and vibration surfaces.",
    swatch: "linear-gradient(135deg,#8a6a1c,#f5cd5f 35%,#c79a29 60%,#ffe9a3 78%,#8a6a1c)",
  },
  {
    id: "rose-gold",
    name: "Rose Gold",
    family: "Warm",
    note: "Pink-shifted copper tone, used most often in retail and jewellery work.",
    swatch: "linear-gradient(135deg,#8c4f42,#f0b4a0 35%,#c98873 60%,#fbd8c9 78%,#8c4f42)",
  },
  {
    id: "bronze",
    name: "Bronze",
    family: "Deep warm",
    note: "Deep and architectural; holds its reading at facade distance.",
    swatch: "linear-gradient(135deg,#4a3220,#a97f4f 35%,#6d4c2c 60%,#c99d68 78%,#4a3220)",
  },
  {
    id: "black",
    name: "Black",
    family: "Dark",
    note: "Available in matt through mirror; the hardest tone to keep even at scale.",
    swatch: "linear-gradient(135deg,#0b0b0b,#3a3a3a 35%,#151515 60%,#4a4a4a 78%,#0b0b0b)",
  },
  {
    id: "gunmetal",
    name: "Gunmetal",
    family: "Dark neutral",
    note: "Grey with warmth in it — a quieter alternative to black.",
    swatch: "linear-gradient(135deg,#2a2d31,#71777e 35%,#3a3f45 60%,#8e959c 78%,#2a2d31)",
  },
  {
    id: "titanium",
    name: "Titanium",
    family: "Cool neutral",
    note: "Cool grey, fingerprint tolerant, specified widely in institutional work.",
    swatch: "linear-gradient(135deg,#3d444b,#9aa3ab 35%,#545c64 60%,#b8c0c7 78%,#3d444b)",
  },
  {
    id: "silver",
    name: "Silver",
    family: "Cool",
    note: "A clear PVD layer over polished stainless — protection without colour shift.",
    swatch: "linear-gradient(135deg,#5c6268,#d6dade 35%,#828a91 60%,#eef1f3 78%,#5c6268)",
  },
  {
    id: "custom",
    name: "Custom",
    family: "Developed to sample",
    note: "Matched to a submitted sample and locked as a project-specific target.",
    swatch: "linear-gradient(135deg,#2a2a2a,#c7a877 30%,#71777e 55%,#f0b4a0 80%,#2a2a2a)",
  },
];

export const surfaces = [
  { id: "hairline", name: "Hairline No.4", note: "Fine directional brush; the workhorse architectural surface." },
  { id: "mirror", name: "Mirror No.8", note: "Full reflection; used where the surface should disappear." },
  { id: "vibration", name: "Vibration", note: "Non-directional swirl that scatters reflection into a soft cloud." },
  { id: "bead", name: "Bead-blast", note: "Even matt tooth; no glare, ideal at street level." },
  { id: "woven", name: "Woven mesh", note: "In-house weave, coated to the same target as sheet." },
  { id: "etched", name: "Etched", note: "Chemically patterned surface, coated after etching." },
];
