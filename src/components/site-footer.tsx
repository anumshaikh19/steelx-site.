import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone, Youtube } from "lucide-react";
import { ctaItem, navItems, secondaryItems, studio } from "@/config/nav";

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
              <li>
                <Link to="/" className="transition-colors hover:text-foreground">
                  Home
                </Link>
              </li>
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
