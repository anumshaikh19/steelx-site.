import metalHero from "@/assets/metal-hero.jpg";
import pvdChamber from "@/assets/pvd-chamber.jpg";
import polishing from "@/assets/polishing.jpg";
import sheetPrep from "@/assets/sheet-prep.jpg";
import inspection from "@/assets/inspection.jpg";
import lobby from "@/assets/install-lobby.jpg";
import meshHero from "@/assets/mesh-hero.jpg";
import meshApplication from "@/assets/mesh-application.jpg";
import swatches from "@/assets/finish-swatches.jpg";
import installation from "@/assets/installation.jpg";
import rawSteel from "@/assets/raw-steel.jpg";
import pvdSteel from "@/assets/pvd-steel.jpg";

export type JournalCategory =
  | "PVD Technology"
  | "Materials"
  | "Interiors"
  | "Architecture"
  | "Specification"
  | "Care";

export type JournalSection = {
  heading: string;
  body: string[];
  image?: { src: string; alt: string };
  callout?: { label: string; value: string }[];
};

export type JournalPost = {
  slug: string;
  title: string;
  category: JournalCategory;
  date: string;
  readingTime: string;
  excerpt: string;
  hero: string;
  heroAlt: string;
  intro: string;
  sections: JournalSection[];
  pullQuote: string;
  conclusion: string;
};

const img = (src: string, alt: string) => ({ src, alt });

export const journalCategories = [
  "All",
  "PVD Technology",
  "Materials",
  "Interiors",
  "Architecture",
  "Specification",
  "Care",
] as const;

export type JournalCategoryFilter = (typeof journalCategories)[number];

export const journalPosts: JournalPost[] = [
  {
    slug: "how-pvd-coating-works",
    title: "How PVD coating actually works",
    category: "PVD Technology",
    date: "2026-07-18",
    readingTime: "7 min",
    excerpt:
      "Physical vapour deposition explained without the marketing: vacuum, plasma, and a coating measured in microns.",
    hero: pvdChamber,
    heroAlt: "PVD vacuum chamber with plasma glow",
    intro:
      "PVD is often described as a colour. It is closer to a physics process that happens to produce colour: metal is vaporised in a vacuum and re-condenses on a surface as a layer a few microns thick.",
    sections: [
      {
        heading: "Inside the chamber",
        body: [
          "The panel goes into a sealed chamber and the air is pumped out. Without air, vaporised metal travels in straight lines and lands cleanly instead of oxidising on the way.",
          "A target metal — typically titanium or zirconium — is bombarded until it releases ions. Those ions accelerate toward the panel, which is held at an opposing charge.",
        ],
        image: img(pvdChamber, "Interior of a PVD vacuum chamber"),
      },
      {
        heading: "Where the colour comes from",
        body: [
          "Colour is set by the reactive gas introduced during deposition and by the deposition time. Nitrogen produces the gold family, acetylene the darks, and controlled mixes produce bronze, champagne and rose tones.",
          "Because the colour is a compound rather than a pigment, it cannot fade in UV the way a paint or a lacquer does.",
        ],
        callout: [
          { label: "Layer thickness", value: "0.3–4 microns" },
          { label: "Process temperature", value: "Below tempering range" },
          { label: "Bond", value: "Atomic, not adhesive" },
        ],
      },
      {
        heading: "Why the substrate matters more than the colour",
        body: [
          "The coating follows the surface exactly. A scratch, a weld line or an uneven brush will still be visible after coating — often more visible, because the colour catches light differently.",
          "This is why the preparation line takes longer than the coating run on most projects.",
        ],
        image: img(polishing, "Surface preparation before coating"),
      },
    ],
    pullQuote:
      "PVD does not hide a surface. It commits to it.",
    conclusion:
      "If you remember one thing: specify the surface first, the colour second. The finish you receive is the surface you prepared, wearing a colour.",
  },
  {
    slug: "pvd-vs-electroplating",
    title: "PVD vs electroplating: what specifiers should know",
    category: "Specification",
    date: "2026-07-04",
    readingTime: "6 min",
    excerpt:
      "Two ways to colour metal, two very different service lives. A practical comparison for architectural work.",
    hero: swatches,
    heroAlt: "PVD finish swatches on a dark surface",
    intro:
      "Electroplating and PVD both put metal on metal. The difference is how the layer bonds, how hard it ends up, and what happens to it after five years on a building.",
    sections: [
      {
        heading: "The process difference",
        body: [
          "Electroplating deposits metal from a chemical bath using current. PVD deposits it from a vapour in a vacuum, with no wet chemistry involved.",
          "That difference shows up in effluent as much as in performance — plating produces a chemical waste stream that PVD does not.",
        ],
      },
      {
        heading: "Hardness and wear",
        body: [
          "PVD layers are typically several times harder than plated layers, which is why they hold up on handles, lift panels and counter fronts.",
          "Plated finishes remain useful for decorative items that are not touched daily, and are often cheaper at small scale.",
        ],
        callout: [
          { label: "PVD", value: "Hard, UV stable, dry process" },
          { label: "Plating", value: "Softer, wet chemistry, lower tooling cost" },
        ],
      },
      {
        heading: "Where each belongs",
        body: [
          "For architectural surfaces with a fifteen-year expectation, PVD is the defensible specification.",
          "For short-cycle retail props or interior objects that will be replaced with the fit-out, plating may be entirely appropriate.",
        ],
        image: img(lobby, "Coated metal in a hotel lobby"),
      },
    ],
    pullQuote:
      "Specify for the maintenance regime the building will actually get, not the one in the manual.",
    conclusion:
      "Ask two questions: will it be touched, and will it see sun. If either answer is yes, PVD is usually the right call.",
  },
  {
    slug: "choosing-metal-finishes-for-interiors",
    title: "Choosing metal finishes for interiors",
    category: "Interiors",
    date: "2026-06-22",
    readingTime: "8 min",
    excerpt:
      "Mirror, hairline, vibration or bead-blast — how the surface, not the colour, decides how a room feels.",
    hero: metalHero,
    heroAlt: "Brushed champagne metal surface under raking light",
    intro:
      "Two panels in the same colour can read as completely different materials. The variable is the surface underneath.",
    sections: [
      {
        heading: "Reflection is a design decision",
        body: [
          "Mirror doubles a room and shows every fingerprint. Vibration scatters light into a soft cloud and forgives handling. Hairline sits between the two.",
          "Choose the surface against the lighting scheme, not against a sample held in a showroom.",
        ],
        image: img(metalHero, "Raking light across a brushed surface"),
      },
      {
        heading: "Scale changes everything",
        body: [
          "A finish that looks refined on an A4 sample can look busy across a nine-metre wall. Always view a full-height mock-up before locking a specification.",
          "Directional finishes also need a stated grain direction on the drawings, or panels will arrive correct and look wrong.",
        ],
      },
      {
        heading: "Matching across textures",
        body: [
          "When mirror, hairline and mesh appear in the same room, coat them to one colour target in matched batches.",
          "Different textures reflect differently, so identical coating parameters still produce a visible family rather than an identical match — which is usually the better result.",
        ],
        callout: [
          { label: "High traffic", value: "Vibration or bead-blast" },
          { label: "Feature wall", value: "Hairline" },
          { label: "Ceilings", value: "Mirror" },
        ],
      },
    ],
    pullQuote: "Colour gets specified. Surface gets remembered.",
    conclusion:
      "Pick the surface for how the room is used, then choose the colour. Doing it the other way around is where most metal specifications go wrong.",
  },
  {
    slug: "stainless-steel-grades-304-vs-316",
    title: "SS 304 vs SS 316: choosing the right grade",
    category: "Materials",
    date: "2026-06-10",
    readingTime: "5 min",
    excerpt: "Coastal air, chlorides and cleaning chemistry — when the grade upgrade is worth it.",
    hero: sheetPrep,
    heroAlt: "Stacked stainless steel sheets in a warehouse",
    intro:
      "Most architectural metal is 304. Some of it should have been 316, and the difference only becomes obvious two years after handover.",
    sections: [
      {
        heading: "What separates the grades",
        body: [
          "316 contains molybdenum, which markedly improves resistance to chlorides — sea air, pool environments and de-icing salts.",
          "In dry inland interiors, 304 performs indistinguishably and costs less.",
        ],
      },
      {
        heading: "Where we insist on 316",
        body: [
          "Coastal facades, poolside and spa areas, and any surface within reach of aggressive cleaning products.",
          "Marine-adjacent penthouses are the common case: the interior looks protected but the air is not.",
        ],
        image: img(installation, "Facade panel installation"),
      },
      {
        heading: "Coating does not replace grade",
        body: [
          "A PVD layer is measured in microns and follows the substrate. It resists wear and UV, but it is not a corrosion barrier for the wrong grade in the wrong environment.",
          "Choose the grade for the environment and the coating for the appearance.",
        ],
      },
    ],
    pullQuote: "The coating protects the look. The grade protects the metal.",
    conclusion:
      "If the project is within a few kilometres of the sea, price 316 before you value-engineer it away.",
  },
  {
    slug: "designing-with-decorative-metal-mesh",
    title: "Designing with decorative metal mesh",
    category: "Interiors",
    date: "2026-05-28",
    readingTime: "7 min",
    excerpt: "Weave, aperture and framing — how to specify mesh that divides space without closing it.",
    hero: meshHero,
    heroAlt: "Woven decorative metal mesh close-up",
    intro:
      "Mesh is the only architectural metal that is simultaneously a surface and an opening. Specifying it well means deciding what you want to see through it.",
    sections: [
      {
        heading: "Weave families",
        body: [
          "Crimped weaves are stiff and hold a flat plane. Rod-and-cable weaves drape and are used for curtains and cascading screens.",
          "The weave decides the frame: a draping mesh needs tension hardware, a crimped mesh needs a rigid perimeter.",
        ],
        image: img(meshHero, "Detail of a woven mesh panel"),
      },
      {
        heading: "Aperture and privacy",
        body: [
          "Transparency changes with viewing angle. A screen that is open head-on can be nearly solid at 45 degrees, which is exactly what a restaurant divider needs.",
          "Sample full-height and view from a seated position before locking the aperture.",
        ],
      },
      {
        heading: "Getting the colour to match",
        body: [
          "Wire and sheet coat differently because the geometry is different. Coating both in matched batches keeps mesh and cladding in one family.",
          "Framing should be coated with the mesh, never afterwards.",
        ],
        image: img(meshApplication, "Mesh screens in a restaurant interior"),
      },
    ],
    pullQuote: "Mesh is specified head-on and experienced at an angle.",
    conclusion:
      "Decide the sightline first, then choose the weave. Everything else — frame, tension, colour — follows from that.",
  },
  {
    slug: "pvd-colour-selection-guide",
    title: "A guide to PVD colour selection",
    category: "Specification",
    date: "2026-05-14",
    readingTime: "6 min",
    excerpt: "Why champagne outsells gold, and how to hold a colour across a multi-phase project.",
    hero: swatches,
    heroAlt: "Grid of PVD finish samples",
    intro:
      "PVD colours are targets, not paint codes. Understanding how they are hit — and held — makes specification far more predictable.",
    sections: [
      {
        heading: "The working palette",
        body: [
          "Champagne, gold, rose gold, bronze, black, gunmetal, titanium and silver cover the overwhelming majority of architectural work.",
          "Champagne dominates hospitality because it delivers warmth at low saturation, which photographs well under warm lighting.",
        ],
      },
      {
        heading: "Batch consistency",
        body: [
          "Colour is held by coating a full elevation or room in matched chamber runs. Split a wall across two campaigns months apart and a difference can become visible.",
          "Retained control samples should be part of every specification.",
        ],
        callout: [
          { label: "Best practice", value: "One elevation, one batch" },
          { label: "Record", value: "Retain signed control sample" },
        ],
      },
      {
        heading: "Viewing conditions",
        body: [
          "Approve colour under the project lighting temperature. A champagne approved under 4000K daylight will read noticeably warmer at 2700K.",
          "Where possible, approve on the actual substrate and surface too.",
        ],
        image: img(inspection, "Colour inspection of a coated panel"),
      },
    ],
    pullQuote: "Approve colour under the light the building will actually have.",
    conclusion:
      "Lock the colour on a signed control sample, coated on the real substrate, viewed under the real lighting. Everything after that is logistics.",
  },
  {
    slug: "metal-facades-in-hot-climates",
    title: "Metal facades in hot climates",
    category: "Architecture",
    date: "2026-04-30",
    readingTime: "7 min",
    excerpt: "Expansion, glare and dust: designing coated stainless envelopes for 45°C summers.",
    hero: installation,
    heroAlt: "Metal facade panels being installed",
    intro:
      "A metal envelope in a hot, dusty climate has three enemies: movement, glare and settled dust. All three are solvable at design stage.",
    sections: [
      {
        heading: "Designing for movement",
        body: [
          "Large panels move. Fixing systems must allow it, or the panel will oil-can and the joint lines will drift out of alignment.",
          "Sliding cleats and a stated expansion gap are cheaper than a rectified facade.",
        ],
      },
      {
        heading: "Controlling glare",
        body: [
          "At street level, mirror finishes are almost always the wrong answer. Bead-blast and vibration surfaces give the metallic reading without throwing light into traffic.",
          "Reserve reflective finishes for soffits and recessed positions.",
        ],
        image: img(installation, "Facade under installation at night"),
      },
      {
        heading: "Dust and cleaning access",
        body: [
          "Horizontal ledges collect dust. Detailing a slight fall on every outward face keeps the facade self-cleaning in the first rain.",
          "Coated stainless washes with water and a soft cloth — but only if someone can reach it.",
        ],
      },
    ],
    pullQuote: "A facade is only as maintainable as its access strategy.",
    conclusion:
      "Movement, glare, dust, access. Resolve those four and a coated stainless envelope will outlive the fit-out inside it.",
  },
  {
    slug: "elevator-interiors-in-coated-stainless",
    title: "Elevator interiors in coated stainless",
    category: "Interiors",
    date: "2026-04-16",
    readingTime: "5 min",
    excerpt: "The most touched metal in any building — and the strongest argument for PVD.",
    hero: lobby,
    heroAlt: "Lift lobby clad in coated stainless steel",
    intro:
      "A lift car is a small room that thousands of hands touch every week. It is where finish decisions are punished fastest.",
    sections: [
      {
        heading: "Why plain stainless struggles",
        body: [
          "Uncoated mirror stainless shows every fingerprint. Within a month the car looks unmaintained regardless of cleaning frequency.",
          "A coated hairline or vibration surface dramatically reduces visible marking.",
        ],
      },
      {
        heading: "Finish choices that survive",
        body: [
          "Vibration and bead-blast surfaces disperse marks. Dark tones show grease more than mid tones, which is why gunmetal and champagne outperform black in cars.",
          "Keep mirror to the ceiling where hands do not reach.",
        ],
        image: img(metalHero, "Coated metal surface detail"),
      },
      {
        heading: "Detailing for replacement",
        body: [
          "Design car panels as demountable units. Damage in a lift is a matter of when, not if.",
          "Retain a spare set from the original coating batch at handover.",
        ],
        callout: [
          { label: "Best surface", value: "Vibration / bead-blast" },
          { label: "Keep spares", value: "From the original batch" },
        ],
      },
    ],
    pullQuote: "Specify a lift car for its worst Tuesday, not its photoshoot.",
    conclusion:
      "Coated stainless in a forgiving surface, demountable panels and a retained spare set — that is a lift interior that still looks new in year five.",
  },
  {
    slug: "how-to-clean-and-maintain-pvd-surfaces",
    title: "How to clean and maintain PVD surfaces",
    category: "Care",
    date: "2026-04-02",
    readingTime: "4 min",
    excerpt: "Water, a soft cloth, and a short list of things that must never touch the surface.",
    hero: inspection,
    heroAlt: "Gloved inspection of a coated panel",
    intro:
      "PVD is hard, but it is not indestructible. Maintenance is genuinely simple, provided the wrong products stay away from it.",
    sections: [
      {
        heading: "The routine",
        body: [
          "Warm water, a neutral detergent and a soft microfibre cloth, wiped in the direction of the grain. Dry immediately to avoid water marks.",
          "For fingerprints on mirror surfaces, a dedicated stainless cleaner without abrasives is acceptable.",
        ],
      },
      {
        heading: "What must never be used",
        body: [
          "No abrasive pads, no scouring powders, no chloride-based or acidic cleaners, no steel wool.",
          "Abrasives cut through the coating layer; chlorides attack the stainless underneath.",
        ],
        callout: [
          { label: "Use", value: "Neutral detergent, microfibre" },
          { label: "Never", value: "Abrasives, chlorides, acids" },
        ],
      },
      {
        heading: "Site protection",
        body: [
          "Most damage happens before handover. Keep protective film on until the last wet trade has left the area.",
          "Remove film within the manufacturer's stated window so adhesive does not bake onto the surface.",
        ],
        image: img(installation, "Protected panels on site"),
      },
    ],
    pullQuote: "Nearly all PVD damage is site damage.",
    conclusion:
      "Protect it during construction, clean it with water and a soft cloth afterwards, and a coated surface will outlast the interior around it.",
  },
  {
    slug: "custom-metal-fabrication-explained",
    title: "Custom metal fabrication, explained",
    category: "Materials",
    date: "2026-03-19",
    readingTime: "6 min",
    excerpt: "From sheet size to chamber size: the constraints that shape every bespoke metal element.",
    hero: polishing,
    heroAlt: "Precision polishing of a metal panel",
    intro:
      "Bespoke metal is a negotiation between what you draw and what a press-brake, a welder and a vacuum chamber can physically do.",
    sections: [
      {
        heading: "The three limits",
        body: [
          "Sheet size limits the seamless plane. Press-brake length limits the fold. Chamber size limits the coated assembly.",
          "Knowing all three early prevents a design that has to be re-drawn after tender.",
        ],
        image: img(sheetPrep, "Sheet stock in the workshop"),
      },
      {
        heading: "Coat before or after assembly",
        body: [
          "Coating after fabrication gives seamless, joint-free colour but caps the assembly size at the chamber.",
          "Coating before assembly allows larger objects but every joint must be detailed so cut edges are concealed.",
        ],
      },
      {
        heading: "Tolerance in the real world",
        body: [
          "Metal is made to millimetres; buildings are built to centimetres. Adjustable fixings absorb the difference.",
          "Every bespoke element should carry a stated site tolerance on the shop drawing.",
        ],
        callout: [
          { label: "Typical site tolerance", value: "±2 mm to survey grid" },
          { label: "Shop tolerance", value: "±0.5 mm" },
        ],
      },
    ],
    pullQuote: "Design to the chamber and the press-brake, and nothing gets value-engineered later.",
    conclusion:
      "Bring fabrication into the drawing stage. The constraints are few, they are knowable, and they make better details.",
  },
  {
    slug: "surface-engineering-for-architecture",
    title: "Surface engineering for architecture",
    category: "PVD Technology",
    date: "2026-03-05",
    readingTime: "7 min",
    excerpt: "Why the preparation line matters more than the coating run.",
    hero: polishing,
    heroAlt: "Worker preparing a stainless steel sheet",
    intro:
      "Coating is the shortest part of the process. Everything that determines the result happens before the chamber door closes.",
    sections: [
      {
        heading: "Preparation",
        body: [
          "Grinding, brushing, blasting or polishing establishes the texture that the coating will faithfully reproduce.",
          "Any inconsistency in this stage becomes a permanent, visible defect.",
        ],
        image: img(polishing, "Preparation line in the workshop"),
      },
      {
        heading: "Cleaning",
        body: [
          "Ultrasonic and solvent cleaning remove oils and particles. A single fingerprint left on a panel becomes an adhesion failure.",
          "Panels move from cleaning to chamber without being handled bare-handed.",
        ],
      },
      {
        heading: "Verification",
        body: [
          "Adhesion, thickness and colour are checked against the retained control sample before a batch is released.",
          "Rejected panels go back to preparation, not back to coating.",
        ],
        image: img(inspection, "Verification under focused light"),
      },
    ],
    pullQuote: "The chamber records the surface. It does not improve it.",
    conclusion:
      "Judge a coating supplier by their preparation line and their inspection discipline, not by their colour chart.",
  },
  {
    slug: "luxury-retail-and-metal",
    title: "Luxury retail and the return of metal",
    category: "Interiors",
    date: "2026-02-19",
    readingTime: "6 min",
    excerpt: "Why flagship stores are replacing veneer and stone with coated stainless.",
    hero: lobby,
    heroAlt: "Metal-clad retail interior",
    intro:
      "Retail interiors are rebuilt every five to seven years. Metal has become the surface that survives the cycle and photographs the best while doing it.",
    sections: [
      {
        heading: "Durability under handling",
        body: [
          "Display frames, door pulls and counter edges are touched constantly. Coated stainless resists the wear that kills lacquered timber.",
          "It also survives being dismantled and re-installed between store refits.",
        ],
      },
      {
        heading: "Photography and brand colour",
        body: [
          "Brands increasingly specify a metal tone as part of the identity. PVD can hold a custom target across every store in a rollout.",
          "Warm tones photograph better under the point lighting most retail schemes use.",
        ],
        image: img(metalHero, "Warm coated metal surface"),
      },
      {
        heading: "Rollout logistics",
        body: [
          "Consistency across cities is the real challenge. Coating all stores against one retained control sample keeps the identity intact.",
          "Spares should be produced with the first batch, not the last.",
        ],
      },
    ],
    pullQuote: "In a rollout, consistency is the brand.",
    conclusion:
      "Metal earns its place in retail because it survives the refit cycle and holds a brand colour across every location.",
  },
  {
    slug: "architectural-detailing-with-metal",
    title: "Architectural detailing with metal",
    category: "Architecture",
    date: "2026-02-05",
    readingTime: "8 min",
    excerpt: "Shadow gaps, returns and reveals — the details that make metal look intentional.",
    hero: metalHero,
    heroAlt: "Metal surface with a crisp shadow line",
    intro:
      "Metal is unforgiving in a way that rewards good detailing. Three moves account for most of the difference between crisp and cheap.",
    sections: [
      {
        heading: "The return",
        body: [
          "A panel that folds back at its edge reads as solid. A flat panel with a visible cut edge reads as a skin.",
          "A 25 mm return is usually enough to change the perception entirely.",
        ],
      },
      {
        heading: "The shadow gap",
        body: [
          "Butt joints show every tolerance. A consistent shadow gap absorbs deviation and turns the joint into a line.",
          "Set the gap once and hold it across the whole surface, including at corners.",
        ],
        image: img(metalHero, "Shadow gap between metal panels"),
      },
      {
        heading: "The grain direction",
        body: [
          "Directional finishes need a stated grain on the drawings, including for returns and reveals.",
          "Where two grains meet, decide deliberately whether they align or deliberately oppose.",
        ],
        callout: [
          { label: "Return", value: "25 mm minimum" },
          { label: "Shadow gap", value: "Consistent, corners included" },
          { label: "Grain", value: "Stated on drawing" },
        ],
      },
    ],
    pullQuote: "Metal does not forgive an undecided edge.",
    conclusion:
      "Return the edge, hold the gap, state the grain. Those three notes on a drawing raise the result more than any change of finish.",
  },
  {
    slug: "black-pvd-getting-it-right",
    title: "Black PVD: getting it right",
    category: "Specification",
    date: "2026-01-22",
    readingTime: "5 min",
    excerpt: "The hardest colour to hold at scale, and how to specify it so it works.",
    hero: swatches,
    heroAlt: "Dark PVD samples",
    intro:
      "Black is the most requested and the most difficult PVD tone. At large scale, small variations that are invisible in champagne become obvious.",
    sections: [
      {
        heading: "Why black is difficult",
        body: [
          "Dark coatings reveal surface inconsistency because there is no colour saturation to hide behind.",
          "Preparation tolerance therefore has to be tighter than for any warm tone.",
        ],
      },
      {
        heading: "Choosing the surface",
        body: [
          "Bead-blast and vibration surfaces are the safest at wall scale. Mirror black is spectacular and shows everything.",
          "For handled elements, avoid mirror black entirely.",
        ],
        image: img(metalHero, "Dark metal surface detail"),
      },
      {
        heading: "Managing expectations",
        body: [
          "Black PVD is a very dark grey-black with metallic depth, not a matt paint black. Approve it on a sample, never on a render.",
          "Where a true flat black is required, say so early — it may be a different product.",
        ],
      },
    ],
    pullQuote: "Black shows the preparation, not the coating.",
    conclusion:
      "Use a forgiving surface, tighten the preparation standard and approve a physical sample. Black then behaves like every other tone.",
  },
  {
    slug: "hospitality-interiors-and-metal-warmth",
    title: "Hospitality interiors and metal warmth",
    category: "Interiors",
    date: "2026-01-08",
    readingTime: "6 min",
    excerpt: "How hotels use coated metal to feel warm without looking gilded.",
    hero: lobby,
    heroAlt: "Warm metal-clad hotel lobby",
    intro:
      "Hospitality has moved away from gold. What replaced it is a family of low-saturation warm metals that read rich under 2700K lighting.",
    sections: [
      {
        heading: "The champagne shift",
        body: [
          "Champagne carries warmth at roughly half the saturation of gold, which keeps a lobby from reading as a nineties refurbishment.",
          "Under warm lighting the difference between the two becomes much smaller, which is why sample approval must happen on site.",
        ],
        image: img(lobby, "Champagne metal in a lobby setting"),
      },
      {
        heading: "Mixing textures, not colours",
        body: [
          "The most successful schemes use one colour across three textures rather than three colours in one texture.",
          "Mirror, hairline and mesh in a single tone gives depth without visual noise.",
        ],
      },
      {
        heading: "Where metal should stop",
        body: [
          "Guest rooms rarely want large metal planes. Keep it to public areas, thresholds and joinery edges.",
          "Restraint is what makes the lobby feel expensive rather than clad.",
        ],
      },
    ],
    pullQuote: "One colour, three textures. That is the whole trick.",
    conclusion:
      "Choose a low-saturation warm tone, express it through texture, and stop before it reaches the bedrooms.",
  },
  {
    slug: "large-format-panels-what-is-possible",
    title: "Large-format panels: what is actually possible",
    category: "Materials",
    date: "2025-12-18",
    readingTime: "5 min",
    excerpt: "Sheet sizes, chamber sizes and the honest limits of a seamless surface.",
    hero: sheetPrep,
    heroAlt: "Large stainless steel sheets stacked",
    intro:
      "Everyone wants a seamless wall. What is achievable depends on three physical limits that no supplier can talk their way around.",
    sections: [
      {
        heading: "Sheet and chamber",
        body: [
          "The uncut sheet sets the maximum seamless plane; the vacuum chamber sets the maximum coated piece.",
          "The smaller of the two is your real limit.",
        ],
        image: img(pvdChamber, "Panels loaded into a coating chamber"),
      },
      {
        heading: "Flatness at scale",
        body: [
          "Thin large panels oil-can. Bonding to an aluminium honeycomb core is the standard answer and keeps weight manageable.",
          "Honeycomb-backed panels also install faster because they stay flat during handling.",
        ],
      },
      {
        heading: "Designing the joint",
        body: [
          "Because seamless has a limit, the joint becomes a design element. A deliberate rhythm of shadow gaps always beats a hidden joint that later shows.",
          "Set the module from the panel size, not the other way around.",
        ],
        callout: [
          { label: "Typical max panel", value: "1.5 × 3.0 m" },
          { label: "Backing", value: "Aluminium honeycomb" },
        ],
      },
    ],
    pullQuote: "Design the joint you can hold, not the seam you cannot.",
    conclusion:
      "Set the module from the real panel limit and the wall will look designed rather than compromised.",
  },
  {
    slug: "working-with-a-metal-partner-early",
    title: "Why designers bring metal partners in early",
    category: "Specification",
    date: "2025-12-04",
    readingTime: "6 min",
    excerpt: "The decisions that get cheaper when fabrication joins at concept rather than tender.",
    hero: polishing,
    heroAlt: "Workshop fabrication in progress",
    intro:
      "Metal is usually specified at tender and re-drawn afterwards. Bringing fabrication into concept stage removes that second round entirely.",
    sections: [
      {
        heading: "What changes at concept stage",
        body: [
          "Panel modules, joint strategy and coating sequence can be set while the design is still fluid.",
          "That typically removes weeks from the shop-drawing cycle later.",
        ],
      },
      {
        heading: "Samples as a design tool",
        body: [
          "Early coated samples let the design team choose against real material rather than a render.",
          "It also gives the client something physical to approve, which shortens sign-off.",
        ],
        image: img(inspection, "Coated sample under inspection light"),
      },
      {
        heading: "Programme certainty",
        body: [
          "Coating capacity is scheduled in batches. Booking it early is the difference between a nine-week and a fifteen-week programme.",
          "Late colour changes are the single most common cause of metal delays.",
        ],
      },
    ],
    pullQuote: "The cheapest change to a metal package is the one made before shop drawings.",
    conclusion:
      "Bring the fabricator into the concept conversation. It costs nothing and removes most of the risk from the package.",
  },
  {
    slug: "colour-consistency-across-batches",
    title: "Colour consistency across batches",
    category: "PVD Technology",
    date: "2025-11-20",
    readingTime: "5 min",
    excerpt: "How a large project holds one tone across months of production.",
    hero: pvdChamber,
    heroAlt: "Coating chamber during a production run",
    intro:
      "On a long programme, colour drift is the risk that clients notice and specifications rarely address.",
    sections: [
      {
        heading: "The control sample",
        body: [
          "One signed physical sample governs the entire project. Every batch is compared against it under standard lighting before release.",
          "Digital references are useless for this; only the physical sample counts.",
        ],
        image: img(inspection, "Batch compared against a control sample"),
      },
      {
        heading: "Batching by elevation",
        body: [
          "Coating a full elevation or a full room in one campaign keeps any drift outside the visible field.",
          "Where phasing forces a split, place the break at a corner or a change of plane.",
        ],
      },
      {
        heading: "Documentation",
        body: [
          "Batch numbers should follow the panel through crating to installation so a replacement can be matched years later.",
          "Retained spares from the original batch remove the problem entirely.",
        ],
        callout: [
          { label: "Governing reference", value: "Signed physical sample" },
          { label: "Batch break", value: "At corners only" },
        ],
      },
    ],
    pullQuote: "Colour is not held by a chart. It is held by a sample and a sequence.",
    conclusion:
      "One control sample, batched by elevation, documented to the panel. That is the whole consistency strategy.",
  },
  {
    slug: "raw-steel-to-architectural-surface",
    title: "From raw steel to architectural surface",
    category: "PVD Technology",
    date: "2025-11-06",
    readingTime: "7 min",
    excerpt: "The full journey of one panel, from mill sheet to installed facade.",
    hero: rawSteel,
    heroAlt: "Raw brushed stainless steel surface",
    intro:
      "A single architectural panel passes through seven distinct stages. Each one is capable of ruining the six before it.",
    sections: [
      {
        heading: "Cutting and forming",
        body: [
          "Mill sheet is cut to module, then folded. Forming before coating means the coating never has to bridge a bend.",
          "Welds are ground flush at this stage, never after.",
        ],
        image: img(sheetPrep, "Sheet stock ready for cutting"),
      },
      {
        heading: "Surface and coating",
        body: [
          "The chosen surface is applied, the panel is cleaned, then coated in vacuum against the project control sample.",
          "Panels are handled with gloves from cleaning onward.",
        ],
        image: img(pvdSteel, "Coated champagne surface"),
      },
      {
        heading: "Inspection, crating, install",
        body: [
          "Colour, thickness and adhesion are verified, then panels are crated in installation sequence with protective film intact.",
          "Film comes off only after the last wet trade has finished.",
        ],
      },
    ],
    pullQuote: "Seven stages, one chance at each.",
    conclusion:
      "The finish a building receives is the sum of every stage upstream of it — which is why we keep all seven under one roof.",
  },
];

export function getPost(slug: string) {
  return journalPosts.find((p) => p.slug === slug);
}

export function relatedPosts(slug: string, count = 3) {
  const current = getPost(slug);
  if (!current) return journalPosts.slice(0, count);
  const same = journalPosts.filter((p) => p.slug !== slug && p.category === current.category);
  const rest = journalPosts.filter((p) => p.slug !== slug && p.category !== current.category);
  return [...same, ...rest].slice(0, count);
}

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
