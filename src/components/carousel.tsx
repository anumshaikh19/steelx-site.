import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Carousel({
  children,
  count,
  label,
  itemClass = "w-[78%] sm:w-[46%] lg:w-[32%]",
  className,
}: {
  children: ReactNode[];
  count: number;
  label: string;
  itemClass?: string;
  className?: string | undefined;
}) {
  const trackRef = useRef<HTMLUListElement | null>(null);
  const [active, setActive] = useState(0);

  const onScroll = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const item = el.firstElementChild as HTMLElement | null;
    if (!item) return;
    const step = item.getBoundingClientRect().width + 24;
    setActive(Math.round(el.scrollLeft / step));
  }, []);

  useEffect(() => {
    onScroll();
  }, [onScroll]);

  const scrollTo = (index: number) => {
    const el = trackRef.current;
    const item = el?.children[Math.max(0, Math.min(count - 1, index))] as HTMLElement | undefined;
    if (!el || !item) return;
    el.scrollTo({ left: item.offsetLeft - el.offsetLeft, behavior: "smooth" });
  };

  return (
    <div className={className}>
      <ul
        ref={trackRef}
        onScroll={onScroll}
        aria-label={label}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children.map((child, i) => (
          <li
            key={i}
            className={cn(
              "shrink-0 snap-start transition-all duration-700",
              itemClass,
              i === active ? "opacity-100 motion-safe:scale-100" : "opacity-60 motion-safe:scale-[0.96]",
            )}
          >
            {child}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-center gap-4">
        <button
          type="button"
          onClick={() => scrollTo(active - 1)}
          aria-label={`Previous — ${label}`}
          className="grid h-11 w-11 place-items-center rounded-full border border-border transition-all hover:scale-105 hover:border-gold hover:text-gold"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => scrollTo(active + 1)}
          aria-label={`Next — ${label}`}
          className="grid h-11 w-11 place-items-center rounded-full border border-border transition-all hover:scale-105 hover:border-gold hover:text-gold"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
        <div className="flex items-center gap-2" role="tablist" aria-label={`${label} pagination`}>
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={`Go to item ${i + 1}`}
              onClick={() => scrollTo(i)}
              className={cn(
                "h-1 rounded-full transition-all",
                i === active ? "w-8 bg-gold-gradient" : "w-4 bg-border hover:bg-gold/50",
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
