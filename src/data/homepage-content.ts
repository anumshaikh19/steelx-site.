export type SeoLink = { label: string; url: string; external?: boolean };

export const defaultHomepageContent = {
  seo: {
    title: "Architectural Stainless Steel Surfaces Manufacturer | SteelXDecor",
    description: "SteelXDecor designs, PVD-coats, fabricates and installs architectural stainless steel surfaces, decorative mesh, metal profiles and luxury finishes for global projects.",
    keywords: "architectural stainless steel surfaces manufacturer, PVD coated stainless steel panels, decorative stainless steel sheets supplier, designer metal surfaces for interiors, PVD finish stainless steel fabrication, architectural metal cladding supplier",
    canonical: "https://steelxdecor.com/",
    robots: "index,follow",
    tags: ["PVD", "stainless steel", "architectural metal", "decorative mesh", "PVD coating", "luxury interiors"],
    schema: `{"@context":"https://schema.org","@type":"Organization","name":"SteelXDecor","url":"https://steelxdecor.com","description":"Architectural stainless steel surfaces manufacturer — PVD-coated panels, decorative mesh, metal profiles, and fabrication services for global hospitality, commercial, retail, and residential projects.","address":{"@type":"PostalAddress","streetAddress":"Plot 24, Industrial Estate","addressLocality":"Rajkot","addressRegion":"Gujarat","postalCode":"360004","addressCountry":"IN"},"contactPoint":{"@type":"ContactPoint","telephone":"+91 90000 00000","contactType":"sales","email":"studio@steelxdecor.com","areaServed":"IN, AE, UK, SG","availableLanguage":["en"]},"hasOfferCatalog":{"@type":"OfferCatalog","name":"PVD-Coated Stainless Steel Surfaces"}}`,
  },
  hero: {
    eyebrow: "ARCHITECTURAL STAINLESS STEEL SURFACES",
    title: "Architectural Stainless Steel Surfaces — Designed, PVD-Coated & Installed for Global Projects",
    subtitle: "From mill sheet to finished surface. PVD-coloured stainless-steel panels, decorative mesh, and metal profiles for hospitality, retail, commercial, and residential interiors worldwide.",
    supporting: "Every SteelXDecor project begins with a specification. Our process moves from raw stainless-steel sheet through surface preparation, vacuum PVD colour bonding, precision fabrication, and in-house installation.",
    primaryCta: "Explore Collection", primaryUrl: "/steel-collection",
    secondaryCta: "Start a Project", secondaryUrl: "/contact",
    videoUrl: "https://videos.pexels.com/video-files/3139195/3139195-hd_1920_1080_30fps.mp4",
  },
  products: [
    { name: "PVD Marble Collection", description: "PVD-coated stainless-steel panels with marble-effect finishes in Champagne, Gold, Rose Gold, Bronze, and Black. SS 304 Grade with vacuum PVD colour bonding.", url: "/marble" },
    { name: "Vintex Web", description: "Specialty woven wire mesh with PVD coating for architectural screens, partitions, ceilings, and decorative facades. SS 304 Grade construction.", url: "/vintex-web" },
    { name: "Designer Sheets", description: "Finished stainless-steel sheets in Mirror, Hairline, Vibration, and Bead Blast textures with full PVD colour options for architectural applications.", url: "/designer-sheets" },
    { name: "SS Decorative Mesh PVD", description: "Woven wire mesh with vacuum PVD coating for decorative partitions, screens, room dividers, furniture elements, and architectural fabric applications.", url: "/ss-decorative-mesh-pvd" },
    { name: "PVD Profiles — T, U & L Patti", description: "Decorative stainless-steel profiles in T, U, L, Collar, and Fluted configurations for edge detailing, cladding frames, rail infill, and architectural trim.", url: "/materials" },
    { name: "PVD Lift Jamb & Cladding Panels", description: "PVD-coated panels designed for lift jamb cladding, elevator interiors, and corridor cladding in Mirror, Hairline, and Vibration textures.", url: "/materials" },
    { name: "PVD Coated Pipes", description: "Decorative stainless-steel pipes with PVD surface finishes for architectural railings, furniture frames, structural elements, and designer fixtures.", url: "/materials" },
    { name: "TI-PVD Furniture Surfaces", description: "Tabletops, consoles, display showcases, partition panels, and decorative screens with full PVD surface treatment for demanding environments.", url: "/materials" },
  ],
  process: [
    ["01", "Raw Steel", "Mill sheet 304 or 316 Grade is selected and checked for flatness, surface condition, and material integrity before any processing begins."],
    ["02", "Surface Preparation", "The chosen texture is applied: Hairline, Vibration, Bead Blast, or Mirror. This mechanical preparation defines the base surface that the PVD coating will bond to."],
    ["03", "PVD Coating", "Vaporised metal condenses onto the panel inside a vacuum chamber. The PVD layer bonds atomically to the surface, measured in microns. Colour is controlled against a signed sample for every batch."],
    ["04", "Inspection", "Colour accuracy, coating thickness, and adhesion are checked against the control sample. Each panel is inspected before crating and sequence numbering for installation."],
    ["05", "Installation", "Panels are crated in installation order. Own in-house teams fit every project globally — from Dubai lobby interiors to Singapore commercial facades."],
  ],
  about: {
    story: "SteelXDecor is an architectural metal specialist that designs, PVD-coats, fabricates, and installs stainless-steel surfaces for high-end commercial, hospitality, and residential projects globally. Operating from our studio in Rajkot, Gujarat, our team handles every stage in-house — from mill sheet selection through PVD coating, precision fabrication, and on-site installation. We work with architects, interior designers, contractors, and developers who require consistent, technically specified PVD finishes at project scale.",
    differentiators: ["End-to-end capability — mill sheet to installed surface, fully managed", "Vacuum PVD coating — colour bonded atomically, measured in microns, not electroplated", "Project-proven portfolio — completed works across India, UAE, UK, Singapore, and GCC", "Technical transparency — process documentation, specification articles, signed colour control samples", "Specifier-focused approach — every project begins with material specification and finish selection", "Global installation teams — own crews deployed for every project, on schedule and on site"],
  },
  finishes: ["Champagne", "Gold", "Rose Gold", "Bronze", "Black", "Gunmetal", "Titanium", "Silver", "Custom"],
  finalCta: { title: "Ready to Specify a PVD Surface?", text: "Every project starts with a specification conversation. Share your dimensions, application, desired finish, and grade requirement and the SteelXDecor team will recommend the right material, construction, and PVD finish for your project." },
  links: [] as SeoLink[],
};

export type HomepageContent = typeof defaultHomepageContent;
