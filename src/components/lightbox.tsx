import { useCallback, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export type LightboxImage = { src: string; alt: string };

export function Lightbox({
  images,
  index,
  onClose,
  onIndex,
}: {
  images: LightboxImage[];
  index: number | null;
  onClose: () => void;
  onIndex: (i: number) => void;
}) {
  const open = index !== null;

  const step = useCallback(
    (dir: number) => {
      if (index === null) return;
      onIndex((index + dir + images.length) % images.length);
    },
    [index, images.length, onIndex],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose, step]);

  if (!open || index === null) return null;
  const image = images[index];
  if (!image) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Project image viewer"
      className="fixed inset-0 z-[90] flex flex-col bg-background/97 backdrop-blur animate-fade-in"
    >
      <div className="flex items-center justify-between border-b border-border px-5 py-4">
        <span className="text-[0.65rem] tabular-nums uppercase tracking-[0.3em] text-champagne">
          {String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close viewer"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-champagne hover:text-champagne"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <div className="relative flex flex-1 items-center justify-center overflow-hidden p-4 sm:p-10">
        <img
          key={image.src}
          src={image.src}
          alt={image.alt}
          className="max-h-full max-w-full object-contain motion-safe:animate-scale-in"
        />
        <button
          type="button"
          onClick={() => step(-1)}
          aria-label="Previous image"
          className="absolute left-3 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background/60 text-foreground transition-colors hover:border-champagne hover:text-champagne sm:left-8"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => step(1)}
          aria-label="Next image"
          className="absolute right-3 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background/60 text-foreground transition-colors hover:border-champagne hover:text-champagne sm:right-8"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <p className="border-t border-border px-5 py-4 text-center text-xs text-muted-foreground">
        {image.alt}
      </p>
    </div>
  );
}
