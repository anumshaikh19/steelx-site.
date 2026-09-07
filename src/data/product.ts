import pillow1 from "@/assets/pillow-1.jpg";
import pillow2 from "@/assets/pillow-2.jpg";
import pillow3 from "@/assets/pillow-3.jpg";
import pillow4 from "@/assets/pillow-4.jpg";
import detail1 from "@/assets/detail-1.jpg";
import detail2 from "@/assets/detail-2.jpg";
import detail3 from "@/assets/detail-3.jpg";
import relLampWhite from "@/assets/rel-lamp-white.jpg";
import relLampCeramic from "@/assets/rel-lamp-ceramic.jpg";
import relChair from "@/assets/rel-chair.jpg";
import relDeskLamp from "@/assets/rel-desk-lamp.jpg";
import productFilm from "@/assets/product-film.mp4.asset.json";

export type Taxon = { label: string; href: string };
export type ImageAsset = { src: string; alt: string };
export type Spec = { label: string; value?: string };
export type Step = { index: string; title: string; body: string; image?: ImageAsset };

export type RelatedProduct = {
  sku: string;
  brand: string;
  categories: string[];
  name: string;
  price: number;
  compareAt?: number;
  image: string;
  badge?: string;
  href: string;
};

export type Product = {
  id: string;
  sku: string;
  name: string;
  tagline: string;
  highlights: string[];
  categories: Taxon[];
  tags: Taxon[];
  colours: Taxon[];
  whatsappNumber: string;
  gallery: ImageAsset[];
  description: { heading: string; blocks: { text: string; image: ImageAsset }[] };
  materials: { intro: string; points: { label: string; body: string }[]; image: ImageAsset };
  howToUse: Step[];
  care: { title: string; body: string }[];
  specs: Spec[];
  video: { src?: string; poster: string; eyebrow: string; title: string };
  whyYouLoveIt: { points: string[]; note: string; images: ImageAsset[] };
  faqs: { q: string; body: string }[];
  keywords: Taxon[];
  related: RelatedProduct[];
};

const cat = (label: string) => ({
  label,
  href: `/category/${label.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`,
});
const tag = (label: string) => ({
  label,
  href: `/tag/${label.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`,
});

export const product: Product = {
  id: "bess-decorative-throw-pillow",
  sku: "VTPKPTY13",
  name: "Bess Decorative Throw Pillow",
  tagline: "Handwoven linen, feather-filled, finished with hand-stitched piping.",
  highlights: [
    "Jacquard-woven tonal motif that never fades",
    "European flax linen, softer with every wash",
    "Up to 60 days for free return",
  ],
  categories: [cat("Accessories"), cat("Bedroom"), cat("Children's room")],
  tags: [tag("Bedroom"), tag("Children's room"), tag("Furniture"), tag("Living room")],
  colours: [tag("Sand"), tag("Ivory"), tag("Charcoal")],
  whatsappNumber: "919876543210",
  gallery: [
    { src: pillow1, alt: "Bess Decorative Throw Pillow, front view on white background" },
    { src: pillow2, alt: "Bess Decorative Throw Pillow, three-quarter angle view" },
    { src: pillow3, alt: "Close-up of the piped seam and woven texture of the Bess pillow" },
    { src: pillow4, alt: "Pair of Bess Decorative Throw Pillows styled together" },
  ],
  description: {
    heading:
      "Transform your living space with a handwoven pillow made for both elegance and comfort.",
    blocks: [
      {
        text: "Bess began as a sampling exercise in our weaving room: a plain sand ground with a single tonal motif repeated just often enough to catch light without competing with the room around it. Three warps later we settled on a slubbed flax that reads soft from a distance and textural up close.",
        image: {
          src: pillow1,
          alt: "Bess Decorative Throw Pillow photographed straight on",
        },
      },
      {
        text: "A heavier cotton weft lets the cover drape over its feather inner instead of standing away from it. The piping is cut on the bias, folded and stitched by hand — the slowest part of the build, and the reason the corners stay square after years of use.",
        image: {
          src: detail1,
          alt: "Artisan hand-finishing a linen cushion cover on a workbench",
        },
      },
      {
        text: "It sits comfortably against charcoal velvet, oiled walnut, brushed brass and every one of our PVD finishes, which is why it has quietly become the piece we specify most often in client projects. Order it singly for a reading chair, or in pairs to bracket a three-seater.",
        image: {
          src: detail3,
          alt: "Dark living room styled with beige linen throw pillows",
        },
      },
    ],
  },
  materials: {
    intro:
      "Woven from a 68% European flax linen and 32% long-staple cotton blend, with a hidden YKK zip and a hypoallergenic duck-feather inner.",
    points: [
      {
        label: "Cloth",
        body: "Slubbed European flax with a long-staple cotton weft, woven to 320 gsm in our own weaving room.",
      },
      {
        label: "Motif",
        body: "The tonal geometric pattern is jacquard-woven rather than printed, so it will not fade, crack or peel with use.",
      },
      {
        label: "Finish",
        body: "Bias-cut piping folded and stitched by hand at every corner; a concealed YKK zip runs along the lower seam.",
      },
      {
        label: "Inner",
        body: "Hypoallergenic duck-feather inner, cut 5 cm oversized so the corners stay full and square.",
      },
    ],
    image: { src: detail2, alt: "Folded natural undyed linen swatches with dried botanicals" },
  },
  howToUse: [
    {
      index: "01",
      title: "Place it",
      body: "Dress a three-seater with two 50 cm covers at the outer corners and one lumbar cushion at the centre. On a reading chair, a single Bess is enough.",
      image: { src: pillow4, alt: "Pair of Bess pillows styled on a sofa corner" },
    },
    {
      index: "02",
      title: "Pair it",
      body: "It reads best against charcoal velvet, oiled walnut, brushed brass and matte PVD finishes. Keep the palette tonal and let the weave carry the texture.",
      image: { src: detail3, alt: "Dark living room styled with beige linen throw pillows" },
    },
    {
      index: "03",
      title: "Shape it",
      body: "Chop the inner lightly at the top edge and give the corners a firm pinch. Air the cushion weekly rather than washing it to keep the loft.",
      image: { src: pillow2, alt: "Bess pillow shown at a three-quarter angle" },
    },
  ],
  care: [
    {
      title: "Washing",
      body: "Cold gentle machine wash the cover separately, reshape while damp and dry flat away from direct sun. Do not tumble dry or bleach.",
    },
    {
      title: "Pressing",
      body: "Press on low heat from the reverse side while slightly damp. Avoid steaming the piping directly so the bias-cut edge keeps its crispness.",
    },
    {
      title: "The inner",
      body: "The feather inner is spot-clean only. Air it outdoors for an hour each month and it will hold its loft for years.",
    },
  ],
  specs: [
    { label: "Product", value: "Bess Decorative Throw Pillow" },
    { label: "SKU", value: "VTPKPTY13" },
    { label: "Material", value: "68% European flax linen / 32% long-staple cotton, 320 gsm" },
    { label: "Dimensions", value: "50 × 50 cm cover (20 × 20 in) with 55 cm feather inner" },
    { label: "Weight", value: "1.1 kg including inner" },
    { label: "Finish", value: "Jacquard tonal weave with hand-stitched bias piping" },
    { label: "Construction", value: "Handwoven, made to order, concealed YKK zip closure" },
    { label: "Origin", value: "Handcrafted in our own workshop" },
  ],
  video: {
    src: productFilm.url,
    poster: detail3,
    eyebrow: "The film",
    title: "Woven, piped and finished by hand",
  },
  whyYouLoveIt: {
    points: [
      "Jacquard-woven motif that never fades",
      "European flax linen, softer with every wash",
      "Hand-stitched bias piping at all four corners",
      "Feather inner that keeps its shape",
      "Hidden zip for easy cover changes",
      "Made to order in our own workshop",
    ],
    note: "Each Bess pillow leaves the workshop with a small numbered tag naming the weaver who finished it. It is a small thing, but it is the difference between a product and a piece worth keeping.",
    images: [
      { src: pillow1, alt: "Bess pillow front view" },
      { src: pillow4, alt: "Pair of Bess pillows styled together" },
      { src: pillow2, alt: "Bess pillow three-quarter view" },
      { src: pillow3, alt: "Close-up of the piped seam and woven texture" },
      { src: detail1, alt: "Artisan hand-finishing a linen cushion cover" },
    ],
  },
  faqs: [
    {
      q: "What size is the Bess pillow?",
      body: "The cover measures 50 × 50 cm (20 × 20 in) and is supplied with a 55 cm inner so the corners stay full and square. A 30 × 50 cm lumbar version is available on request through the enquiry form.",
    },
    {
      q: "Is the cover removable and washable?",
      body: "Yes. A concealed zip runs along the lower seam, so the cover slips off in seconds for a cold gentle wash. The inner is spot-clean only and should be aired rather than washed.",
    },
    {
      q: "Can I order a custom colourway?",
      body: "We hold nine house shades and can match a supplied reference for orders of six pieces or more. Custom weaves add roughly two weeks to the lead time.",
    },
    {
      q: "Do you ship internationally?",
      body: "We ship worldwide through tracked courier. Duties and import taxes are calculated at checkout for most destinations; where they cannot be prepaid they are collected by the carrier on delivery.",
    },
  ],
  keywords: [
    tag("Decorative Throw Pillow"),
    tag("Luxury Throw Pillow"),
    tag("Designer Cushion"),
    tag("Jacquard Pillow"),
    tag("European Flax Linen"),
    cat("Accessories"),
    cat("Bedroom"),
    tag("Living room"),
    tag("Interior Styling"),
    tag("Premium Decorative Cushion"),
  ],
  related: [
    {
      sku: "6Z2TP1W22",
      brand: "SlumberCraft",
      categories: ["Accessories", "Bathroom", "Kitchen", "Lighting"],
      name: "Prestige White lamp",
      price: 199,
      compareAt: 254,
      image: relLampWhite,
      href: "/",
    },
    {
      sku: "6Z2TP1W25",
      brand: "FeastFocal",
      categories: ["Accessories", "Bathroom", "Lighting"],
      name: "Table Lamp BELAYA Ceramic",
      price: 46,
      image: relLampCeramic,
      href: "/",
    },
    {
      sku: "XNUNZ8V35",
      brand: "FeastFocal",
      categories: ["Bedroom", "Chairs", "Children's room", "Office"],
      name: "Executive Desk Chair",
      price: 438,
      image: relChair,
      href: "/",
    },
    {
      sku: "29ECGVH",
      brand: "ApparelArk",
      categories: ["Accessories", "Bathroom", "Bedroom", "Lighting"],
      name: "Modern White Desk Lamp",
      price: 55.99,
      compareAt: 69.99,
      image: relDeskLamp,
      badge: "Hot",
      href: "/",
    },
  ],
};
