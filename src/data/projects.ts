import bungalow from "@/assets/proj-bungalow.jpg";
import commercial from "@/assets/proj-commercial.jpg";
import institutional from "@/assets/proj-institutional.jpg";
import interiors from "@/assets/proj-interiors.jpg";
import concept from "@/assets/proj-concept.jpg";
import mixeduse from "@/assets/proj-mixeduse.jpg";
import detailA from "@/assets/proj-detail-a.jpg";
import detailB from "@/assets/proj-detail-b.jpg";
import lobby from "@/assets/install-lobby.jpg";
import meshHero from "@/assets/mesh-hero.jpg";
import meshApplication from "@/assets/mesh-application.jpg";
import metalHero from "@/assets/metal-hero.jpg";
import inspection from "@/assets/inspection.jpg";
import polishing from "@/assets/polishing.jpg";
import installation from "@/assets/installation.jpg";
import pvdChamber from "@/assets/pvd-chamber.jpg";
import sheetPrep from "@/assets/sheet-prep.jpg";
import divider from "@/assets/proj-divider.jpg";
import furniture from "@/assets/proj-furniture.jpg";
import profiles from "@/assets/proj-profiles.jpg";
import sheets from "@/assets/proj-sheets.jpg";
import finishSwatches from "@/assets/finish-swatches.jpg";

export type ProjectCategory =
  | "Residential"
  | "Commercial"
  | "Hospitality"
  | "Retail"
  | "Institutional"
  | "Interiors"
  | "PVD / Metal"
  | "Special Projects";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  client: string;
  location: string;
  year: string;
  area: string;
  status: string;
  scope: string;
  finish: string;
  services: string[];
  coverImage: string;
  gallery: { src: string; alt: string }[];
  detailGallery: { src: string; alt: string }[];
  intro: string;
  description: string;
  approach: string;
  materialStory: string;
  outcome: string;
  facts: { label: string; value: string }[];
  technical: { label: string; value: string }[];
};

export const categories = [
  "All",
  "Residential",
  "Commercial",
  "Hospitality",
  "Retail",
  "Institutional",
  "Interiors",
  "PVD / Metal",
  "Special Projects",
] as const;

export type CategoryFilter = (typeof categories)[number];

const g = (src: string, alt: string) => ({ src, alt });

export const projects: Project[] = [
  {
    slug: "qudrati-greens",
    title: "Qudrati Greens",
    category: "Commercial",
    client: "Bakir Qudrati",
    location: "Indore, Madhya Pradesh",
    year: "2026",
    area: "40,000 sq ft",
    status: "Under construction",
    scope: "Facade metal, entrance portal, lift lobbies",
    finish: "Bronze PVD, hairline",
    services: ["Facade metal", "Custom fabrication", "Installation"],
    coverImage: commercial,
    gallery: [
      g(commercial, "Qudrati Greens bronze-finned facade at dusk"),
      g(lobby, "Lift lobby clad in bronze PVD stainless steel"),
      g(detailA, "Reveal detail between glazing and metal fin"),
      g(metalHero, "Close-up of the bronze hairline surface"),
      g(mixeduse, "Public edge and covered arrival"),
    ],
    detailGallery: [
      g(inspection, "Panel inspection before dispatch"),
      g(installation, "Facade panels being installed on site"),
      g(detailB, "Corner junction of the fin system"),
    ],
    intro:
      "A workplace building wrapped in bronze PVD stainless fins — a shaded vertical street that reads warm at dusk and sharp at noon.",
    description:
      "The brief asked for a facade that would hold its colour in a hot, dusty climate without repainting. PVD-coated stainless steel let us keep a deep metallic tone with a surface that washes clean.",
    approach:
      "Fin depth was tuned per orientation, then translated into a repeating fabrication module so that the entire envelope is built from four panel types rather than forty.",
    materialStory:
      "Grade 304 stainless, hairline-brushed, then bronze PVD coated in a single chamber batch per elevation so the colour reads continuous across the full height.",
    outcome:
      "A facade delivered in eleven weeks of fabrication with a colour variation held inside a single visual batch, and a maintenance regime that is water and a soft cloth.",
    facts: [
      { label: "Floors", value: "G + 7" },
      { label: "Envelope", value: "Bronze PVD fins" },
      { label: "Panels", value: "1,240 nos" },
      { label: "Completion", value: "2026" },
    ],
    technical: [
      { label: "Substrate", value: "SS 304, 1.5 mm" },
      { label: "Surface", value: "Hairline No.4" },
      { label: "Coating", value: "PVD, bronze" },
      { label: "Fixing", value: "Concealed cleat system" },
    ],
  },
  {
    slug: "the-vira-hotel-lobby",
    title: "The Vira Hotel Lobby",
    category: "Hospitality",
    client: "Vira Hospitality Group",
    location: "Dubai, UAE",
    year: "2025",
    area: "8,600 sq ft",
    status: "Completed",
    scope: "Lobby cladding, reception, decorative mesh screens",
    finish: "Champagne PVD, mirror & hairline",
    services: ["Interior metal", "Decorative mesh", "Installation"],
    coverImage: lobby,
    gallery: [
      g(lobby, "Hotel lobby with champagne PVD cladding"),
      g(meshApplication, "Decorative mesh screen behind reception"),
      g(meshHero, "Woven mesh detail in champagne finish"),
      g(metalHero, "Champagne surface under raking light"),
    ],
    detailGallery: [
      g(inspection, "Champagne panel colour check"),
      g(polishing, "Panel polishing before coating"),
      g(detailA, "Shadow gap between cladding modules"),
    ],
    intro:
      "A double-height arrival hall where every vertical surface is metal — mirror, hairline and woven mesh in one champagne family.",
    description:
      "The designers wanted warmth without gold. We built a three-texture palette inside a single PVD colour so the room changes with the light instead of the palette.",
    approach:
      "Full-size mock-ups were coated and viewed under the actual lighting scheme before a single production panel was released.",
    materialStory:
      "Mirror panels for reflection, hairline for the large planes, woven mesh for the screens — all coated to the same champagne target so they read as one material.",
    outcome:
      "A lobby that photographs warm at every hour, delivered across four shipments with zero colour rejections on site.",
    facts: [
      { label: "Height", value: "9.4 m" },
      { label: "Textures", value: "Three" },
      { label: "Mesh", value: "410 sq m" },
      { label: "Completion", value: "2025" },
    ],
    technical: [
      { label: "Substrate", value: "SS 316 (coastal)" },
      { label: "Surface", value: "Mirror / hairline / woven" },
      { label: "Coating", value: "PVD, champagne" },
      { label: "Backing", value: "Aluminium honeycomb" },
    ],
  },
  {
    slug: "aurum-flagship-store",
    title: "Aurum Flagship Store",
    category: "Retail",
    client: "Aurum Jewellery",
    location: "Mumbai, Maharashtra",
    year: "2025",
    area: "3,200 sq ft",
    status: "Completed",
    scope: "Shopfront, display systems, ceiling metal",
    finish: "Rose gold PVD, mirror",
    services: ["Retail metal", "Display fabrication", "Installation"],
    coverImage: interiors,
    gallery: [
      g(interiors, "Retail interior with rose gold metal display"),
      g(metalHero, "Rose gold surface detail"),
      g(detailB, "Vitrine frame junction"),
      g(lobby, "Store entrance portal"),
    ],
    detailGallery: [
      g(polishing, "Mirror polishing of display frames"),
      g(inspection, "Frame inspection under focused light"),
      g(detailA, "Mitred corner detail"),
    ],
    intro:
      "A jewellery flagship where the architecture is the display case — mitred rose gold frames carrying glass with no visible fixing.",
    description:
      "Every vitrine is a welded stainless frame, ground flush, polished and coated after fabrication so the joints disappear into the colour.",
    approach:
      "Coating after welding meant the entire assembly had to survive the vacuum chamber, which set the maximum frame size and drove the module.",
    materialStory:
      "Mirror-polished SS 304 with rose gold PVD — a tone chosen against the client's product metal so the jewellery reads warmer than its setting.",
    outcome:
      "Seamless frames with no visible weld or fastener, and a surface hard enough for daily retail handling.",
    facts: [
      { label: "Vitrines", value: "28 nos" },
      { label: "Largest frame", value: "2.4 × 1.1 m" },
      { label: "Finish", value: "Rose gold mirror" },
      { label: "Completion", value: "2025" },
    ],
    technical: [
      { label: "Substrate", value: "SS 304, 2 mm" },
      { label: "Joinery", value: "Welded, ground flush" },
      { label: "Coating", value: "PVD, rose gold" },
      { label: "Hardness", value: "Coating post-fabrication" },
    ],
  },
  {
    slug: "meridian-tower-facade",
    title: "Meridian Tower Facade",
    category: "Commercial",
    client: "Meridian Developers",
    location: "Singapore",
    year: "2026",
    area: "64,000 sq ft",
    status: "In production",
    scope: "Podium cladding, fins, soffits",
    finish: "Gunmetal PVD, bead-blast",
    services: ["Facade metal", "Engineering support", "Logistics"],
    coverImage: mixeduse,
    gallery: [
      g(mixeduse, "Tower podium clad in gunmetal metal"),
      g(installation, "Panels being lifted into position"),
      g(metalHero, "Bead-blast gunmetal surface"),
      g(commercial, "Podium at dusk"),
    ],
    detailGallery: [
      g(sheetPrep, "Sheet stock staged for the project"),
      g(pvdChamber, "Panels loaded into the coating chamber"),
      g(inspection, "Batch colour verification"),
    ],
    intro:
      "A tower podium in bead-blasted gunmetal — a matt, non-reflective metal that holds the street edge without glare.",
    description:
      "A dense pedestrian frontage ruled out mirror surfaces. Bead-blasting before coating produced a deep, even matt that absorbs light instead of throwing it.",
    approach:
      "Panels were sequenced by elevation and coated in matched batches, then crated in installation order to keep site handling to a single lift per panel.",
    materialStory:
      "SS 316 for the coastal climate, bead-blasted to a uniform tooth, gunmetal PVD for a grey with warmth in it rather than a flat charcoal.",
    outcome:
      "A podium that reads as one continuous cast surface, produced in matched batches across a six-month programme.",
    facts: [
      { label: "Panels", value: "2,100 nos" },
      { label: "Elevations", value: "Four" },
      { label: "Finish", value: "Gunmetal matt" },
      { label: "Handover", value: "2026" },
    ],
    technical: [
      { label: "Substrate", value: "SS 316, 2 mm" },
      { label: "Surface", value: "Bead-blast" },
      { label: "Coating", value: "PVD, gunmetal" },
      { label: "Fixing", value: "Rail and clip" },
    ],
  },
  {
    slug: "nikhil-gupta-residence",
    title: "Nikhil Gupta Residence",
    category: "Residential",
    client: "Nikhil Gupta",
    location: "Rajkot, Gujarat",
    year: "2025",
    area: "9,400 sq ft",
    status: "Completed",
    scope: "Entrance door, stair balustrade, kitchen metal",
    finish: "Black PVD, hairline",
    services: ["Bespoke metal", "Joinery integration", "Installation"],
    coverImage: bungalow,
    gallery: [
      g(bungalow, "Residence entrance with black metal portal"),
      g(detailB, "Stair balustrade in black PVD"),
      g(interiors, "Kitchen island with metal edge"),
      g(metalHero, "Black hairline surface detail"),
    ],
    detailGallery: [
      g(polishing, "Balustrade panels being prepared"),
      g(inspection, "Black finish inspection"),
      g(detailA, "Fixing detail at floor junction"),
    ],
    intro:
      "A private house where metal appears only three times — but each time as the strongest line in the room.",
    description:
      "A 3.2 metre pivot entrance door, a stair balustrade folded from single sheets, and a kitchen island wrapped in one continuous edge.",
    approach:
      "Each element was drawn as a single folded piece to avoid visible joints, which set the sheet sizes and the coating chamber runs.",
    materialStory:
      "Hairline SS 304 with black PVD, kept low-sheen so the metal sits quietly against travertine and oak.",
    outcome:
      "Three sculptural elements with no visible fixings, installed inside a live interiors programme in four days.",
    facts: [
      { label: "Door", value: "3.2 m pivot" },
      { label: "Balustrade", value: "18 m run" },
      { label: "Finish", value: "Black hairline" },
      { label: "Completion", value: "2025" },
    ],
    technical: [
      { label: "Substrate", value: "SS 304, 1.5 mm" },
      { label: "Forming", value: "Press-brake, single fold" },
      { label: "Coating", value: "PVD, black" },
      { label: "Core", value: "Aluminium honeycomb" },
    ],
  },
  {
    slug: "agrasen-institute-atrium",
    title: "Agrasen Institute Atrium",
    category: "Institutional",
    client: "Agrasen Education Trust",
    location: "Ahmedabad, Gujarat",
    year: "2024",
    area: "120,000 sq ft",
    status: "Completed",
    scope: "Atrium screens, signage metal, handrails",
    finish: "Titanium PVD, hairline",
    services: ["Architectural metal", "Signage", "Installation"],
    coverImage: institutional,
    gallery: [
      g(institutional, "Institute atrium with metal screens"),
      g(meshApplication, "Perforated screen filtering daylight"),
      g(detailA, "Handrail junction detail"),
      g(metalHero, "Titanium surface detail"),
    ],
    detailGallery: [
      g(sheetPrep, "Sheet stock for the atrium screens"),
      g(polishing, "Screen edges being finished"),
      g(inspection, "Screen inspection"),
    ],
    intro:
      "A teaching campus where the metalwork does the wayfinding — screens, rails and signage in one titanium tone.",
    description:
      "The trust needed surfaces that survive 1,800 students a day. Coated stainless replaced painted steel throughout the public circulation.",
    approach:
      "A single perforation pattern scales across three screen sizes, so fabrication stayed on one tool and the campus reads consistent.",
    materialStory:
      "Titanium PVD over hairline SS 304 — cool grey, fingerprint-tolerant, and unaffected by the cleaning regime.",
    outcome:
      "Four years in service with no refinishing, and a public circulation that still looks like handover day.",
    facts: [
      { label: "Screens", value: "96 nos" },
      { label: "Handrail", value: "310 m" },
      { label: "Finish", value: "Titanium hairline" },
      { label: "Completion", value: "2024" },
    ],
    technical: [
      { label: "Substrate", value: "SS 304, 2 mm" },
      { label: "Perforation", value: "Single tool, three scales" },
      { label: "Coating", value: "PVD, titanium" },
      { label: "Cleaning", value: "Neutral detergent" },
    ],
  },
  {
    slug: "atelier-nine-interiors",
    title: "Atelier Nine Interiors",
    category: "Interiors",
    client: "Atelier Nine",
    location: "London, United Kingdom",
    year: "2025",
    area: "5,100 sq ft",
    status: "Completed",
    scope: "Wall panelling, joinery metal, bar front",
    finish: "Champagne PVD, vibration",
    services: ["Interior metal", "Joinery integration", "Logistics"],
    coverImage: interiors,
    gallery: [
      g(interiors, "Interior with champagne metal panelling"),
      g(lobby, "Bar front in coated stainless"),
      g(metalHero, "Vibration finish detail"),
      g(detailB, "Panel shadow gap"),
    ],
    detailGallery: [
      g(polishing, "Vibration finishing in progress"),
      g(inspection, "Panel check before crating"),
      g(detailA, "Joinery-to-metal junction"),
    ],
    intro:
      "A members' club interior where a vibration-finished champagne surface replaces what would normally be veneer.",
    description:
      "Metal was specified for durability in a high-traffic social space, but had to feel soft. A vibration finish scatters reflection into a cloudy, tactile surface.",
    approach:
      "Panels were sized to the joinery grid and coated after forming, then shipped flat-packed with the joinery for a single-trade install.",
    materialStory:
      "Vibration-finished SS 304 with champagne PVD — the least reflective way to use a warm metal at wall scale.",
    outcome:
      "A room that feels warm and hand-made while surviving nightly service.",
    facts: [
      { label: "Panels", value: "260 nos" },
      { label: "Wall area", value: "340 sq m" },
      { label: "Finish", value: "Champagne vibration" },
      { label: "Completion", value: "2025" },
    ],
    technical: [
      { label: "Substrate", value: "SS 304, 1.2 mm" },
      { label: "Surface", value: "Vibration" },
      { label: "Coating", value: "PVD, champagne" },
      { label: "Fixing", value: "Magnetic sub-frame" },
    ],
  },
  {
    slug: "ss-decorative-mesh-programme",
    title: "SS Decorative Mesh Programme",
    category: "PVD / Metal",
    client: "Multiple specifiers",
    location: "India / GCC",
    year: "2026",
    area: "Ongoing",
    status: "In production",
    scope: "Woven mesh development, coating, framing systems",
    finish: "Full PVD colour range",
    services: ["Product development", "Coating", "Framing"],
    coverImage: meshHero,
    gallery: [
      g(meshHero, "Woven decorative mesh in champagne"),
      g(meshApplication, "Mesh screens in a hospitality interior"),
      g(metalHero, "Coated wire close-up"),
      g(lobby, "Mesh integrated into a lobby wall"),
    ],
    detailGallery: [
      g(pvdChamber, "Mesh rolls loaded into the chamber"),
      g(inspection, "Weave inspection"),
      g(detailB, "Frame edge detail"),
    ],
    intro:
      "Our in-house woven mesh programme — the same weave available across the full PVD colour range with matched framing.",
    description:
      "Specifiers kept asking for mesh in a colour that matched their cladding. Coating the weave ourselves closed that gap.",
    approach:
      "Weave, frame and coating are developed as one system so a screen arrives on site as a finished panel rather than as a roll and a problem.",
    materialStory:
      "SS 304 and 316 wire, woven in-house, coated in the same chambers as sheet so mesh and panel land on the same colour target.",
    outcome:
      "A mesh range specified across hospitality, retail and commercial work, with matched sheet metal in the same batch.",
    facts: [
      { label: "Weaves", value: "Six" },
      { label: "Colours", value: "Nine + custom" },
      { label: "Max panel", value: "1.5 × 3.0 m" },
      { label: "Status", value: "In production" },
    ],
    technical: [
      { label: "Wire", value: "SS 304 / 316" },
      { label: "Weave", value: "Crimped, rod & cable" },
      { label: "Coating", value: "PVD, full range" },
      { label: "Framing", value: "Matched coated frame" },
    ],
  },
  {
    slug: "cascade-sculpture-wall",
    title: "Cascade Sculpture Wall",
    category: "Special Projects",
    client: "Private commission",
    location: "Doha, Qatar",
    year: "2024",
    area: "180 sq m",
    status: "Completed",
    scope: "Sculptural wall, engineering, installation",
    finish: "Mixed PVD gradient",
    services: ["Bespoke fabrication", "Engineering", "Installation"],
    coverImage: concept,
    gallery: [
      g(concept, "Sculptural metal wall in a private lobby"),
      g(metalHero, "Gradient between two PVD tones"),
      g(detailA, "Folded module detail"),
      g(lobby, "Wall in context"),
    ],
    detailGallery: [
      g(polishing, "Modules being finished"),
      g(pvdChamber, "Two-tone coating runs"),
      g(installation, "Module installation on site"),
    ],
    intro:
      "A 180 square metre folded wall that shifts from champagne to bronze across its length without a visible seam.",
    description:
      "The gradient is not printed — it is built from six coated tones arranged so the eye blends them at viewing distance.",
    approach:
      "Every module was numbered at fabrication and coated in its own tone group, then installed strictly by sequence.",
    materialStory:
      "Six PVD tones on hairline SS 304, folded into a repeating faceted module that catches light differently on each face.",
    outcome:
      "A wall that changes tone as you walk it, delivered from drawing to handover in nineteen weeks.",
    facts: [
      { label: "Modules", value: "744 nos" },
      { label: "Tones", value: "Six" },
      { label: "Programme", value: "19 weeks" },
      { label: "Completion", value: "2024" },
    ],
    technical: [
      { label: "Substrate", value: "SS 304, 1.5 mm" },
      { label: "Forming", value: "Faceted press-brake" },
      { label: "Coating", value: "PVD, six tones" },
      { label: "Fixing", value: "Numbered rail sequence" },
    ],
  },
  {
    slug: "harbour-house-penthouse",
    title: "Harbour House Penthouse",
    category: "Residential",
    client: "Private client",
    location: "Mumbai, Maharashtra",
    year: "2026",
    area: "6,800 sq ft",
    status: "Under construction",
    scope: "Ceiling metal, doors, bathroom surfaces",
    finish: "Silver mirror & champagne",
    services: ["Bespoke metal", "Coordination", "Installation"],
    coverImage: interiors,
    gallery: [
      g(interiors, "Penthouse living space with metal ceiling"),
      g(metalHero, "Mirror ceiling reflection"),
      g(detailB, "Door edge detail"),
      g(lobby, "Entrance vestibule"),
    ],
    detailGallery: [
      g(polishing, "Mirror polishing"),
      g(inspection, "Panel inspection"),
      g(detailA, "Ceiling junction"),
    ],
    intro:
      "A harbour-facing penthouse where a mirror ceiling doubles the water and the metal doors quietly do the rest.",
    description:
      "Coastal air ruled out standard mirror finishes. SS 316 with a PVD top layer holds the reflection without pitting.",
    approach:
      "Ceiling panels are demountable on a magnetic sub-frame so services stay accessible without a visible access hatch.",
    materialStory:
      "Mirror SS 316 with a clear PVD layer for the ceiling, champagne hairline for the doors and bathroom surfaces.",
    outcome:
      "A reflective interior specified for a marine environment, with every panel removable by hand.",
    facts: [
      { label: "Ceiling", value: "210 sq m" },
      { label: "Doors", value: "14 nos" },
      { label: "Finish", value: "Mirror / champagne" },
      { label: "Handover", value: "2026" },
    ],
    technical: [
      { label: "Substrate", value: "SS 316, 1.2 mm" },
      { label: "Surface", value: "Mirror No.8" },
      { label: "Coating", value: "PVD, clear / champagne" },
      { label: "Access", value: "Magnetic demountable" },
    ],
  },
  {
    slug: "north-terminal-wayfinding",
    title: "North Terminal Wayfinding",
    category: "Special Projects",
    client: "Airport authority",
    location: "Ahmedabad, Gujarat",
    year: "2025",
    area: "Terminal-wide",
    status: "Completed",
    scope: "Signage metal, portals, counter fronts",
    finish: "Gunmetal & champagne",
    services: ["Signage metal", "Fabrication", "Installation"],
    coverImage: institutional,
    gallery: [
      g(institutional, "Terminal concourse with metal signage portals"),
      g(lobby, "Check-in counter fronts in coated metal"),
      g(metalHero, "Gunmetal surface detail"),
      g(detailA, "Portal corner detail"),
    ],
    detailGallery: [
      g(sheetPrep, "Sheet stock for signage portals"),
      g(inspection, "Colour matching across two finishes"),
      g(installation, "Night installation in the concourse"),
    ],
    intro:
      "Terminal-wide wayfinding built as architecture — portals, not panels — in two coated tones that separate movement from service.",
    description:
      "Gunmetal marks circulation, champagne marks service. The colour split does the wayfinding before any text is read.",
    approach:
      "All work was installed in night possessions with pre-assembled portals lifted in complete, then aligned to a survey grid.",
    materialStory:
      "Two PVD tones on hairline SS 304, both coated to the same gloss level so the contrast is colour, not sheen.",
    outcome:
      "A terminal-wide system delivered across 42 night shifts without a single daytime closure.",
    facts: [
      { label: "Portals", value: "38 nos" },
      { label: "Night shifts", value: "42" },
      { label: "Tones", value: "Two" },
      { label: "Completion", value: "2025" },
    ],
    technical: [
      { label: "Substrate", value: "SS 304, 2 mm" },
      { label: "Assembly", value: "Pre-built portals" },
      { label: "Coating", value: "PVD, gunmetal / champagne" },
      { label: "Tolerance", value: "±2 mm to survey grid" },
    ],
  },
  {
    slug: "lumen-restaurant-screens",
    title: "Lumen Restaurant Screens",
    category: "Hospitality",
    client: "Lumen Hospitality",
    location: "Bengaluru, Karnataka",
    year: "2024",
    area: "1,900 sq ft",
    status: "Completed",
    scope: "Partition screens, bar metal, ceiling trim",
    finish: "Bronze PVD mesh",
    services: ["Decorative mesh", "Interior metal", "Installation"],
    coverImage: meshApplication,
    gallery: [
      g(meshApplication, "Bronze mesh screens dividing a restaurant"),
      g(meshHero, "Bronze mesh weave detail"),
      g(lobby, "Bar area behind the screens"),
      g(metalHero, "Bronze surface close-up"),
    ],
    detailGallery: [
      g(pvdChamber, "Mesh coating run"),
      g(inspection, "Weave and colour check"),
      g(detailB, "Screen frame junction"),
    ],
    intro:
      "Bronze mesh screens that divide a restaurant without closing it — privacy at eye level, openness above and below.",
    description:
      "The weave density was tuned on site with mock-ups until diners at adjacent tables lost eye contact but the room kept its depth.",
    approach:
      "Three weave densities were sampled at full height before the final specification was locked.",
    materialStory:
      "Crimped SS 304 wire in bronze PVD, framed in matching coated flat bar so the screen reads as one object.",
    outcome:
      "A dining room that seats 30% more covers without feeling denser.",
    facts: [
      { label: "Screens", value: "22 nos" },
      { label: "Weave", value: "Crimped, medium" },
      { label: "Finish", value: "Bronze PVD" },
      { label: "Completion", value: "2024" },
    ],
    technical: [
      { label: "Wire", value: "SS 304, 2 mm" },
      { label: "Aperture", value: "Sampled on site" },
      { label: "Coating", value: "PVD, bronze" },
      { label: "Frame", value: "Matched coated flat bar" },
    ],
  },
  {
    slug: "meridian-club-room-dividers",
    title: "Meridian Club Room Dividers",
    category: "Interiors",
    client: "Meridian Residences",
    location: "Ahmedabad, Gujarat",
    year: "2026",
    area: "26 panels",
    status: "Completed",
    scope: "Freestanding and floor-to-ceiling stainless steel room dividers",
    finish: "Rose gold PVD, hairline",
    services: ["Laser cutting", "Custom fabrication", "Installation"],
    coverImage: divider,
    gallery: [
      g(divider, "Rose gold PVD stainless steel jali room divider in a dark living room"),
      g(interiors, "Divider seen from the adjoining lounge"),
      g(detailA, "Laser-cut pattern edge detail"),
      g(metalHero, "Rose gold hairline surface close-up"),
    ],
    detailGallery: [
      g(inspection, "Panel flatness check before coating"),
      g(polishing, "Hairline graining across the divider frame"),
      g(installation, "Base plates being levelled on site"),
    ],
    intro:
      "Twenty-six laser-cut stainless steel dividers that separate living, dining and lounge without closing any of them.",
    description:
      "The apartments needed separation with light and sightlines intact. We cut a repeating geometric jali into 1.5 mm stainless and framed each panel in matched flat bar.",
    approach:
      "One pattern module was scaled per opening width so every divider reads from the same family while fitting its own room exactly.",
    materialStory:
      "Grade 304 stainless, hairline-brushed along the panel length, then rose gold PVD coated so the cut edges hold the same tone as the faces.",
    outcome:
      "Screens that stay fingerprint-tolerant in daily use and need nothing more than a dry cloth.",
    facts: [
      { label: "Panels", value: "26 nos" },
      { label: "Max height", value: "3.0 m" },
      { label: "Pattern", value: "Laser-cut jali" },
      { label: "Completion", value: "2026" },
    ],
    technical: [
      { label: "Substrate", value: "SS 304, 1.5 mm" },
      { label: "Surface", value: "Hairline No.4" },
      { label: "Coating", value: "PVD, rose gold" },
      { label: "Fixing", value: "Concealed base plate / ceiling channel" },
    ],
  },
  {
    slug: "kalyan-residence-steel-furniture",
    title: "Kalyan Residence Steel Furniture",
    category: "Residential",
    client: "Private residence",
    location: "Rajkot, Gujarat",
    year: "2025",
    area: "11 pieces",
    status: "Completed",
    scope: "Custom stainless steel console, coffee tables, bed backs and shelving",
    finish: "Gold PVD, satin",
    services: ["Furniture fabrication", "Stone integration", "Delivery & install"],
    coverImage: furniture,
    gallery: [
      g(furniture, "Gold PVD stainless steel console table with stone top"),
      g(interiors, "Steel furniture within the living room scheme"),
      g(detailB, "Mitred welded corner, ground and polished"),
      g(metalHero, "Satin gold surface detail"),
    ],
    detailGallery: [
      g(polishing, "Weld seams being dressed before coating"),
      g(inspection, "Frame squareness check"),
      g(installation, "Console positioning on site"),
    ],
    intro:
      "An eleven-piece furniture set built from square stainless section — welded, dressed until the joints disappear, then gold coated.",
    description:
      "The interior designer wanted brass warmth without brass maintenance. Stainless with a gold PVD finish gave the same tone and none of the tarnishing.",
    approach:
      "Every frame was dry-assembled, checked for square, then fully welded and ground so no joint line survives into the finished piece.",
    materialStory:
      "SS 304 box section with satin graining, gold PVD coated, paired with honed stone tops on machined levelling pads.",
    outcome:
      "Furniture that reads as solid metal, wipes clean, and holds its colour in an open, sunlit apartment.",
    facts: [
      { label: "Pieces", value: "11 nos" },
      { label: "Sections", value: "20 / 25 / 40 mm" },
      { label: "Tops", value: "Honed stone" },
      { label: "Completion", value: "2025" },
    ],
    technical: [
      { label: "Substrate", value: "SS 304 box section" },
      { label: "Surface", value: "Satin" },
      { label: "Coating", value: "PVD, gold" },
      { label: "Joints", value: "Full weld, dressed flush" },
    ],
  },
  {
    slug: "solace-hotel-designer-sheets",
    title: "Solace Hotel Designer Sheets",
    category: "Hospitality",
    client: "Solace Hotels",
    location: "Surat, Gujarat",
    year: "2026",
    area: "1,900 sq ft",
    status: "Completed",
    scope: "Etched and mirror designer sheet cladding for reception and lift lobbies",
    finish: "Gold PVD on black mirror, etched",
    services: ["Designer sheets", "Etching", "Installation"],
    coverImage: sheets,
    gallery: [
      g(sheets, "Etched gold on black mirror stainless steel behind a hotel reception desk"),
      g(lobby, "Lift lobby in the same sheet family"),
      g(detailA, "Etch depth and reflection detail"),
      g(finishSwatches, "Sheet finish samples reviewed with the design team"),
    ],
    detailGallery: [
      g(inspection, "Etch registration check between adjacent sheets"),
      g(pvdChamber, "Sheets entering the PVD chamber"),
      g(installation, "Panels set out on the reception backdrop"),
    ],
    intro:
      "A reception backdrop where the pattern is etched into the steel, not printed on it — so it survives cleaning, contact and time.",
    description:
      "The scheme called for an art-deco geometry across a nine-metre wall with no visible repeat break at the joints.",
    approach:
      "The pattern was laid out across the whole wall first, then split into sheet sizes, so alignment is designed rather than corrected on site.",
    materialStory:
      "Black mirror stainless, chemically etched to expose a satin ground, then gold PVD coated so the etched lines glow against the dark field.",
    outcome:
      "A continuous nine-metre composition installed with joints landing on pattern lines.",
    facts: [
      { label: "Wall", value: "9.2 m wide" },
      { label: "Sheets", value: "34 nos" },
      { label: "Pattern", value: "Etched art-deco" },
      { label: "Completion", value: "2026" },
    ],
    technical: [
      { label: "Substrate", value: "SS 304, 1.2 mm" },
      { label: "Surface", value: "Black mirror + etch" },
      { label: "Coating", value: "PVD, gold" },
      { label: "Backing", value: "Ply-bonded panel" },
    ],
  },
  {
    slug: "trim-line-profile-programme",
    title: "Trim Line Profile Programme",
    category: "PVD / Metal",
    client: "Multiple interior contractors",
    location: "Pan-India supply",
    year: "2026",
    area: "Ongoing",
    status: "In production",
    scope: "Decorative stainless steel profiles, T-trims, edge and skirting sections",
    finish: "Gold, black, bronze and rose PVD",
    services: ["Profile manufacture", "Coating", "Nationwide supply"],
    coverImage: profiles,
    gallery: [
      g(profiles, "Stainless steel decorative profiles and T-trims in gold, black and bronze PVD"),
      g(metalHero, "Profile surface under raking light"),
      g(finishSwatches, "Standard PVD colour range for profiles"),
      g(detailB, "Corner junction between two trim sections"),
    ],
    detailGallery: [
      g(sheetPrep, "Coil slitting before roll forming"),
      g(pvdChamber, "Profiles loaded into the coating chamber"),
      g(inspection, "Straightness and colour batch check"),
    ],
    intro:
      "A standing catalogue of decorative stainless profiles held in stock colours, cut to length and dispatched against site schedules.",
    description:
      "Interior contractors needed trims that match the sheets on the same wall. We run the profiles and the sheets through the same coating batches.",
    approach:
      "Standard sections are held in raw stock and coated to order, which keeps colour matching tight without long lead times.",
    materialStory:
      "SS 304 roll-formed L, T, U and H sections in 8, 10, 12 and 15 mm faces, PVD coated in gold, black, bronze and rose.",
    outcome:
      "Matched trims and sheets from one supplier, with repeat orders coated against the original batch reference.",
    facts: [
      { label: "Sections", value: "L / T / U / H" },
      { label: "Face widths", value: "8–15 mm" },
      { label: "Lengths", value: "Up to 3.0 m" },
      { label: "Colours", value: "Four standard" },
    ],
    technical: [
      { label: "Substrate", value: "SS 304" },
      { label: "Surface", value: "Mirror / hairline / satin" },
      { label: "Coating", value: "PVD" },
      { label: "Supply", value: "Cut to length" },
    ],
  },
];


export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function relatedProjects(slug: string, count = 3) {
  const current = getProject(slug);
  if (!current) return projects.slice(0, count);
  const sameCategory = projects.filter((p) => p.slug !== slug && p.category === current.category);
  const rest = projects.filter((p) => p.slug !== slug && p.category !== current.category);
  return [...sameCategory, ...rest].slice(0, count);
}
