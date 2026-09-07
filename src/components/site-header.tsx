import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, Menu, MessageCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ctaItem, materialItems, navItems, secondaryItems, studio } from "@/config/nav";
import { Magnetic } from "@/components/motion";

function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      className="flex shrink-0 flex-col leading-none"
      aria-label={`${studio.name} — home`}
      data-cursor="Home"
    >
      <span className="text-steel-gradient text-xl font-semibold tracking-[0.3em] sm:text-2xl">
        {studio.name}
      </span>
      <span className="mt-1 text-[0.5rem] tracking-[0.42em] text-muted-foreground">
        {studio.suffix}
      </span>
    </Link>
  );
}

export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const solid = scrolled || !overlay;

  return (
    <header
      id="top"
      className={cn(
        "z-50 transition-all duration-500",
        overlay ? "fixed inset-x-0 top-0" : "sticky top-0",
        solid
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-x-0 bottom-0 h-px transition-opacity duration-500",
          solid ? "opacity-100" : "opacity-0",
        )}
        style={{ backgroundImage: "var(--gradient-steel)" }}
        aria-hidden="true"
      />
      <div
        className={cn(
          "mx-auto flex max-w-[1600px] items-center gap-5 px-4 xl:gap-8 transition-all duration-500 sm:px-8 lg:px-10",
          solid ? "py-3.5 lg:py-4" : "py-5 lg:py-7",
        )}
      >
        <Logo />

        <nav aria-label="Main" className="mx-auto hidden min-w-0 lg:block">
          <ul className="flex items-center gap-4 xl:gap-7">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  activeProps={{ className: "text-champagne" }}
                  inactiveProps={{ className: "text-muted-foreground" }}
                  className="relative py-1 text-[0.66rem] uppercase tracking-[0.12em] xl:text-[0.74rem] xl:tracking-[0.2em] transition-colors hover:text-foreground after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-champagne after:transition-all after:duration-500 hover:after:w-full data-[status=active]:after:w-full"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <a
            href={`https://wa.me/${studio.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            aria-label="Chat on WhatsApp"
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-champagne hover:text-champagne sm:flex lg:hidden xl:flex"
          >
            <MessageCircle className="h-4 w-4" />
          </a>
          <Magnetic className="hidden sm:inline-block">
            <Link
              to={ctaItem.href}
              data-cursor="Start →"
              className="inline-flex items-center gap-2 rounded-full border border-champagne/50 bg-champagne-gradient px-5 py-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-metal-black transition-opacity hover:opacity-90"
            >
              {ctaItem.label}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Magnetic>
          <a
            href="/karate/"
            aria-label="Open KARATE website"
            className="hidden items-center gap-2 rounded-full border border-border px-4 py-2.5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:border-champagne hover:text-champagne xl:inline-flex"
          >
            KARATE <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors hover:text-champagne lg:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      <div
        className={cn(
          "fixed inset-0 z-50 overflow-y-auto bg-background/98 backdrop-blur transition-opacity duration-300 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="flex items-center justify-between px-4 py-4 sm:px-8">
          <Logo onClick={() => setOpen(false)} />
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="flex h-10 w-10 items-center justify-center rounded-full text-foreground hover:text-champagne"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav aria-label="Mobile" className="px-4 pb-16 sm:px-8">
          <ul className="divide-y divide-border border-y border-border">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  onClick={() => setOpen(false)}
                  activeProps={{ className: "text-champagne" }}
                  className="flex items-center justify-between py-4 font-display text-2xl text-foreground hover:text-champagne"
                >
                  {item.label}
                  <ArrowUpRight className="h-4 w-4 opacity-50" />
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-[0.62rem] uppercase tracking-[0.3em] text-muted-foreground">
            Studio
          </p>
          <ul className="mt-3 divide-y divide-border border-y border-border">
            {secondaryItems.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-4 text-sm uppercase tracking-[0.14em] text-muted-foreground hover:text-champagne"
                >
                  {item.label}
                  <ArrowUpRight className="h-4 w-4 opacity-50" />
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-[0.62rem] uppercase tracking-[0.3em] text-muted-foreground">
            Materials
          </p>
          <ul className="mt-3 divide-y divide-border border-y border-border">
            {materialItems.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-4 text-sm uppercase tracking-[0.14em] text-muted-foreground hover:text-champagne"
                >
                  {item.label}
                  <ArrowUpRight className="h-4 w-4 opacity-50" />
                </Link>
              </li>
            ))}
          </ul>
          <a
            href="/karate/"
            onClick={() => setOpen(false)}
            className="mt-8 flex w-full items-center justify-between border border-border px-6 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-foreground hover:border-champagne hover:text-champagne"
          >
            KARATE
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <Link
            to={ctaItem.href}
            onClick={() => setOpen(false)}
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-champagne-gradient px-6 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-metal-black"
          >
            {ctaItem.label}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
