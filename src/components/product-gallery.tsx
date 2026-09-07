import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { cn } from "@/lib/utils";

export type GalleryImage = { src: string; alt: string };

export function ProductGallery({ images }: { images: GalleryImage[] }) {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const go = (dir: number) => setActive((i) => (i + dir + images.length) % images.length);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(false);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightbox, images.length]);

  const current = images[active] ?? images[0]!;

  return (
    <div className="lg:sticky lg:top-6">
      <div className="relative overflow-hidden rounded-sm bg-white">
        <img
          src={current.src}
          alt={current.alt}
          width={1024}
          height={1024}
          className="aspect-square w-full object-contain"
        />
        <button
          type="button"
          onClick={() => setLightbox(true)}
          aria-label="Zoom image"
          className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-border/40 bg-background/85 text-foreground transition-colors hover:bg-background"
        >
          <Expand className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous image"
          className="absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-background/70 text-foreground opacity-0 transition-opacity hover:bg-background focus-visible:opacity-100 sm:opacity-0 sm:group-hover:opacity-100 lg:opacity-100"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next image"
          className="absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-background/70 text-foreground opacity-0 transition-opacity hover:bg-background focus-visible:opacity-100 lg:opacity-100"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <ul className="mt-4 grid grid-cols-4 gap-3 sm:gap-4">
        {images.map((img, i) => (
          <li key={img.src}>
            <button
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show image ${i + 1}`}
              aria-current={i === active}
              className={cn(
                "block w-full overflow-hidden rounded-sm bg-white transition-all",
                i === active
                  ? "ring-2 ring-gold ring-offset-2 ring-offset-background"
                  : "opacity-70 hover:opacity-100",
              )}
            >
              <img
                src={img.src}
                alt={img.alt}
                width={1024}
                height={1024}
                loading="lazy"
                className="aspect-square w-full object-contain"
              />
            </button>
          </li>
        ))}
      </ul>

      {lightbox ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Product image viewer"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-background/95 p-4"
          onClick={() => setLightbox(false)}
        >
          <button
            type="button"
            onClick={() => setLightbox(false)}
            aria-label="Close viewer"
            className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-border text-foreground hover:text-gold"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={current.src}
            alt={current.alt}
            className="max-h-[85vh] w-auto max-w-full rounded-sm bg-white object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      ) : null}
    </div>
  );
}
