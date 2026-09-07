import { MessageCircle, Sparkles } from "lucide-react";
import { whatsappLink } from "@/components/whatsapp";

export function StickyActions({
  productName,
  whatsappNumber,
  onEnquire,
}: {
  productName: string;
  whatsappNumber: string;
  onEnquire: () => void;
}) {
  const wa = whatsappLink(whatsappNumber, productName);

  return (
    <>
      {/* Desktop side rail */}
      <div className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 lg:flex">
        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Chat on WhatsApp about ${productName}`}
          className="grid h-12 w-12 place-items-center rounded-full border border-gold/50 bg-background/85 text-gold backdrop-blur transition-transform hover:scale-110"
        >
          <MessageCircle className="h-5 w-5" />
        </a>
        <button
          type="button"
          onClick={onEnquire}
          className="rounded-full border border-gold bg-background/85 px-3 py-4 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-gold shadow-gold-glow backdrop-blur transition-transform hover:scale-105 [writing-mode:vertical-rl]"
        >
          Enquire
        </button>
      </div>

      {/* Mobile bottom bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-gold/30 bg-background/95 backdrop-blur lg:hidden">
        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-gold"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
        <button
          type="button"
          onClick={onEnquire}
          className="flex flex-1 items-center justify-center gap-2 bg-gold-gradient py-4 text-sm font-semibold uppercase tracking-[0.14em] text-primary-foreground"
        >
          <Sparkles className="h-4 w-4" />
          Enquire
        </button>
      </div>
    </>
  );
}
