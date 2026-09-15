export type PageDesign = {
  headingFont: "display" | "sans";
  headingSize: "small" | "medium" | "large" | "xl";
  headingWeight: "normal" | "medium" | "bold";
  bodySize: "small" | "medium" | "large";
  accent: string;
  background: string;
  headingColor: string;
  bodyColor: string;
  sectionSpacing: "compact" | "comfortable" | "luxury";
};
export type BlockDesign = Partial<PageDesign> & { css?: string };
export type PageSeo = {
  path: string; title: string; description: string; keywords: string; canonical: string; robots: string;
  ogTitle: string; ogDescription: string; ogImage: string; schema: string; tags: string[];
  content: { eyebrow: string; heading: string; intro: string; primaryCta: string; secondaryCta: string };
  design: PageDesign; blocks: Record<string, { label?: string; design?: BlockDesign }>;
};
export const PAGE_SEO_KEY = "steelx-page-seo-v1";
export const SITE_ORIGIN = "https://steelxdecor.com";
const routes = [
  "/", "/capabilities", "/careers", "/contact", "/exhibitions", "/journal", "/material-light-space", "/materials", "/people", "/process", "/services", "/ss-decorative-mesh-pvd", "/steel-collection", "/studio", "/marble", "/vintex-web", "/workfront", "/admin-seo", "/category/:slug", "/designer-sheets/embossed", "/designer-sheets/hairline", "/designer-sheets/mirror", "/journal/:slug", "/product/:slug", "/projects", "/projects/:slug", "/tag/:slug", "/designer-sheets/:finish", "/designer-sheets/:finish/:product",
];
const humanize = (value: string) => value.replace(/^\/+/, "").replace(/[:$]/g, "").replace(/[-_]+/g, " ").trim().replace(/\b\w/g, c => c.toUpperCase()) || "Home";
export const routePathCatalog = routes;
const defaultDesign: PageDesign = { headingFont: "display", headingSize: "large", headingWeight: "normal", bodySize: "medium", accent: "#c9a96e", background: "#f4f3ef", headingColor: "#181817", bodyColor: "#5d5b55", sectionSpacing: "luxury" };
export function defaultPageSeo(path: string): PageSeo {
  const label = path === "/" ? "SteelXDecor" : humanize(path.split("/").filter(Boolean).pop() || path);
  const title = path === "/" ? "Architectural Stainless Steel Surfaces Manufacturer | SteelXDecor" : `${label} | SteelXDecor`;
  const description = path === "/" ? "SteelXDecor designs, PVD-coats, fabricates and installs architectural stainless steel surfaces, decorative mesh, metal profiles and luxury finishes for global projects." : `Explore ${label.toLowerCase()} by SteelXDecor — architectural stainless steel surfaces, PVD finishes and engineered metal solutions for premium interiors.`;
  return { path, title, description, keywords: "architectural stainless steel, PVD coated stainless steel, decorative metal surfaces, SteelXDecor", canonical: `${SITE_ORIGIN}${path === "/" ? "/" : path}`, robots: "index,follow", ogTitle: title, ogDescription: description, ogImage: "", schema: JSON.stringify({ "@context": "https://schema.org", "@type": "WebPage", name: title, description, url: `${SITE_ORIGIN}${path}` }, null, 2), tags: ["PVD", "stainless steel", "architectural metal", "luxury interiors"], content: { eyebrow: path === "/" ? "STEELXDECOR / ARCHITECTURAL SURFACES" : label.toUpperCase(), heading: path === "/" ? "Architectural surfaces engineered to last." : label, intro: description, primaryCta: "Start a project", secondaryCta: "Explore collection" }, design: { ...defaultDesign }, blocks: {} };
}
function mergePageSeo(base: PageSeo, value: Partial<PageSeo>): PageSeo { return { ...base, ...value, content: { ...base.content, ...(value.content || {}) }, design: { ...base.design, ...(value.design || {}) }, blocks: { ...base.blocks, ...(value.blocks || {}) } }; }
export function readPageSeo(): Record<string, PageSeo> { if (typeof window === "undefined") return {}; try { return JSON.parse(localStorage.getItem(PAGE_SEO_KEY) || "{}"); } catch { return {}; } }
export function hasPageSeoOverride(path: string): boolean { if (typeof window === "undefined") return false; const stored = readPageSeo(); return Boolean(stored[path] || stored[normalizeTemplatePath(path)]); }
export function getPageSeo(path: string): PageSeo { const stored = readPageSeo(); const value = stored[path] || stored[normalizeTemplatePath(path)]; return value ? mergePageSeo(defaultPageSeo(path), value) : defaultPageSeo(path); }
export function normalizeTemplatePath(path: string): string { const parts = path.split("/").filter(Boolean); if (!parts.length) return "/"; const candidates = [`/${parts[0]}/${parts[1] ? ":slug" : ""}`.replace(/\/$/, ""), `/${parts[0]}`]; return candidates.find(candidate => routes.includes(candidate)) || path; }
export function savePageSeo(page: PageSeo) { if (typeof window === "undefined") return; const all = readPageSeo(); all[page.path] = page; localStorage.setItem(PAGE_SEO_KEY, JSON.stringify(all)); window.dispatchEvent(new CustomEvent("steelx-seo-updated")); }
