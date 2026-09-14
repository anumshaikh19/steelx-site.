/**
 * Central navigation configuration.
 * Add a page here and it appears in the global header + footer automatically.
 */
export const navItems = [
  { label: "Collection", href: "/steel-collection" },
  { label: "MARBLE", href: "/marble" },
  { label: "VINTEX WEB", href: "/vintex-web" },
  { label: "Colors", href: "/colors" },
  { label: "Materials", href: "/materials" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Studio", href: "/studio" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
] as const;

/** Secondary pages — shown in the menu and footer, not the compact header bar. */
export const secondaryItems = [
  { label: "Capabilities", href: "/capabilities" },
  { label: "Process", href: "/process" },
  { label: "People", href: "/people" },
  { label: "Exhibitions", href: "/exhibitions" },
  { label: "Careers", href: "/careers" },
  { label: "Email Builder", href: "/email-template-builder" },
] as const;

export type NavItem = (typeof navItems)[number];

/** Product / material pages surfaced alongside the main navigation. */
export const materialItems = [
  { label: "Designer Sheets", href: "/designer-sheets" },
  { label: "SS Designer Sheets", href: "/stainless-steel-designer-sheets" },
  { label: "SS Decorative Mesh PVD", href: "/ss-decorative-mesh-pvd" },
  { label: "Material / Light / Space", href: "/material-light-space" },
] as const;

export const ctaItem = { label: "Start a Project", href: "/contact" } as const;

export const studio = {
  name: "STEELX",
  suffix: "P V D   S U R F A C E S",
  tagline: "STAINLESS STEEL. PVD. PRECISION.",
  description:
    "We engineer and craft PVD-coated stainless steel surfaces for architecture and interiors — facades, cladding, decorative mesh and bespoke metal, from sheet to installed surface.",
  phone: "+91 90000 00000",
  whatsapp: "919000000000",
  email: "studio@steelxdecor.com",
  address: "Plot 24, Industrial Estate, Rajkot, Gujarat 360004",
} as const;
