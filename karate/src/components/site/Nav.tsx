import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { BRAND } from "./data";

const LINKS = [
  { label: "ARTS", href: "#arts" },
  { label: "METHOD", href: "#method" },
  { label: "STORY", href: "#story" },
  { label: "TIMINGS", href: "#timings" },
  { label: "GALLERY", href: "#gallery" },
  { label: "REVIEWS", href: "#reviews" },
  { label: "DOJO", href: "#dojo" },
];

export function Nav() {
  const [compact, setCompact] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setCompact(y > 120);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        compact
          ? "bg-ink/80 py-2 backdrop-blur-md"
          : "bg-gradient-to-b from-ink/85 to-transparent py-5",
      )}
    >
      <nav className="mx-auto flex max-w-[104rem] items-center justify-between px-5 md:px-10">
        <a href="#top" className="flex items-baseline gap-3">
          <span
            className={cn(
              "display text-ivory transition-all duration-500",
              compact ? "text-lg" : "text-xl md:text-2xl",
            )}
            style={{ letterSpacing: "0.14em" }}
          >
            {BRAND.name}
          </span>
          <span className="hidden text-[0.55rem] uppercase tracking-[0.3em] text-muted-foreground lg:inline">
            EST. {BRAND.established}
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="group relative text-[0.65rem] font-semibold uppercase tracking-[0.26em] text-muted-foreground transition-colors hover:text-ivory"
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#book"
            className="hidden border border-gold/40 px-5 py-2.5 text-[0.62rem] font-semibold uppercase tracking-[0.26em] text-gold transition-colors hover:bg-gold hover:text-ink md:inline-block"
          >
            BOOK A TRIAL
          </a>
          <button
            type="button"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span
              className={cn("h-px w-6 bg-ivory transition-transform", open && "translate-y-[3.5px] rotate-45")}
            />
            <span
              className={cn("h-px w-6 bg-ivory transition-transform", open && "-translate-y-[3.5px] -rotate-45")}
            />
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "overflow-hidden border-t border-line bg-ink/95 transition-[max-height] duration-500 lg:hidden",
          open ? "max-h-96" : "max-h-0",
        )}
      >
        <ul className="px-5 py-4">
          {LINKS.map((l, i) => (
            <li key={l.label} className={cn(i > 0 && "hairline")}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-4 py-3"
              >
                <span className="num-tag text-[0.6rem]">0{i + 1}</span>
                <span className="display text-2xl text-ivory">{l.label}</span>
              </a>
            </li>
          ))}
          <li className="pt-4">
            <a
              href="#book"
              onClick={() => setOpen(false)}
              className="block bg-gold px-5 py-3 text-center text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-ink"
            >
              BOOK A TRIAL
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
