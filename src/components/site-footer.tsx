import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone, Youtube } from "lucide-react";
import { ctaItem, navItems, secondaryItems, studio } from "@/config/nav";

const footerPageLinks = [
  { label: "Home", href: "/" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
  { label: "Exhibitions", href: "/exhibitions" },
  { label: "Journal", href: "/journal" },
  { label: "MARBLE", href: "/marble" },
  { label: "Material / Light / Space", href: "/material-light-space" },
  { label: "Materials", href: "/materials" },
  { label: "People", href: "/people" },
  { label: "Process", href: "/process" },
  { label: "Services", href: "/services" },
  { label: "SS Decorative Mesh PVD", href: "/ss-decorative-mesh-pvd" },
  { label: "SS Designer Sheets", href: "/stainless-steel-designer-sheets" },
  { label: "Steel Collection", href: "/steel-collection" },
  { label: "Studio", href: "/studio" },
  { label: "VINTEX WEB", href: "/vintex-web" },
  { label: "Designer Sheets", href: "/designer-sheets" },
  { label: "Designer Sheets — Embossed", href: "/designer-sheets/embossed" },
  { label: "Designer Sheets — Hairline", href: "/designer-sheets/hairline" },
  { label: "Designer Sheets — Mirror", href: "/designer-sheets/mirror" },
  { label: "Designer Sheets — Hammered", href: "/designer-sheets/hammered" },
  {
    label: "Gold Hammered PVD Sheet",
    href: "/designer-sheets/hammered/gold-hammered-pvd-stainless-steel-sheet",
  },
  {
    label: "Rose Gold Hammered PVD Sheet",
    href: "/designer-sheets/hammered/rose-gold-hammered-pvd-stainless-steel-sheet",
  },
  { label: "Projects", href: "/projects" },
  { label: "Aangan Residences", href: "/projects/aangan-residences" },
  { label: "High Street Phoenix Canopy", href: "/projects/high-street-phoenix-canopy-mumbai" },
  { label: "JW Marriott Lobby Mumbai", href: "/projects/jw-marriott-lobby-mumbai" },
  { label: "Lodha Bellevue Facade", href: "/projects/lodha-bellevue-facade" },
  { label: "Nikhil Gupta Residence", href: "/projects/nikhil-gupta-residence" },
  { label: "Journal — How PVD Coating Works", href: "/journal/how-pvd-coating-works" },
  { label: "Category — Accessories", href: "/category/accessories" },
  { label: "Tag — Bedroom", href: "/tag/bedroom" },
  { label: "Bess Decorative Throw Pillow", href: "/product/bess-decorative-throw-pillow" },
  { label: "SEO Studio", href: "/admin-seo" },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-[1600px] px-4 py-14 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="min-w-0">
            <span className="text-gold-gradient text-xl font-semibold tracking-[0.24em]">
              {studio.name}
            </span>
            <p className="mt-1 text-[0.6rem] tracking-[0.45em] text-muted-foreground">
              {studio.suffix}
            </p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {studio.description}
            </p>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>{studio.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-gold" />
                <a href={`tel:${studio.phone.replace(/\s/g, "")}`} className="hover:text-gold">
                  {studio.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-gold" />
                <a href={`mailto:${studio.email}`} className="hover:text-gold">
                  {studio.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="h-4 w-4 shrink-0 text-gold" />
                <a
                  href={`https://wa.me/${studio.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gold"
                >
                  WhatsApp the studio
                </a>
              </li>
            </ul>
          </div>

          <nav aria-label="Site" className="min-w-0">
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">Navigate</h2>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              {[...navItems, ...secondaryItems].map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="transition-colors hover:text-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="min-w-0">
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">
              Start a project
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Tell us about the site, the brief and the timeline. We reply to every enquiry within
              one working day.
            </p>
            <Link
              to={ctaItem.href}
              className="mt-6 inline-flex rounded-full bg-gold-gradient px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-opacity hover:opacity-90"
            >
              {ctaItem.label}
            </Link>
          </div>
        </div>

        <nav aria-label="All site pages" className="mt-14 border-t border-border pt-10">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">
                Explore every page
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                35 direct links across the STEELX site.
              </p>
            </div>
            <span className="text-[0.58rem] uppercase tracking-[0.24em] text-muted-foreground">
              Full site index
            </span>
          </div>
          <ul className="mt-8 grid gap-x-8 gap-y-3 text-sm text-muted-foreground sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {footerPageLinks.map((item, index) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="group flex items-baseline gap-2 transition-colors hover:text-foreground"
                >
                  <span className="w-5 shrink-0 text-[0.55rem] tabular-nums text-muted-foreground/60">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="transition-colors group-hover:text-gold">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-12 flex flex-col gap-5 border-t border-border pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {studio.name} Studio. All rights reserved.
          </p>
          <ul className="flex items-center gap-3">
            {[
              { Icon: Facebook, label: "Facebook" },
              { Icon: Instagram, label: "Instagram" },
              { Icon: Linkedin, label: "LinkedIn" },
              { Icon: Youtube, label: "YouTube" },
            ].map(({ Icon, label }) => (
              <li key={label}>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-gold hover:text-gold"
                >
                  <Icon className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
