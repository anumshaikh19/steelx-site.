import { useEffect } from "react";
import { X } from "lucide-react";
import { EnquiryForm } from "@/components/enquiry-form";

export function EnquiryModal({
  open,
  onClose,
  productId,
  productName,
}: {
  open: boolean;
  onClose: () => void;
  productId: string;
  productName: string;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-start justify-center overflow-y-auto bg-background/85 p-4 backdrop-blur-sm sm:items-center sm:p-8"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquiry-modal-title"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl rounded-xl border border-gold/45 bg-surface p-6 shadow-gold-glow motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-95 sm:p-9"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close enquiry form"
          className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-border text-foreground transition-colors hover:border-gold hover:text-gold"
        >
          <X className="h-4 w-4" />
        </button>

        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">Enquiry</p>
        <h2
          id="enquiry-modal-title"
          className="mt-3 font-display text-3xl leading-tight text-gold-gradient"
        >
          Enquire About This Product
        </h2>
        <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
          Share a few details and our studio team will come back to you with pricing, lead times and
          colourway options.
        </p>

        <EnquiryForm className="mt-7" productId={productId} productName={productName} />
      </div>
    </div>
  );
}
