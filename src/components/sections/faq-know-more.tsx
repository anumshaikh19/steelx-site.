import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { EnquiryForm } from "@/components/enquiry-form";
import { Reveal, SectionHeading } from "@/components/reveal";
import { cn } from "@/lib/utils";
import type { Product } from "@/data/product";

function Faqs({ faqs }: { faqs: Product["faqs"] }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="rounded-sm border border-gold/35">
      {faqs.map((faq, i) => {
        const isOpen = open === i;
        return (
          <Reveal
            key={faq.q}
            variant="row"
            delay={i * 80}
            className="border-b border-gold/20 last:border-b-0"
          >
            <h3>
              <button
                type="button"
                id={`faq-btn-${i}`}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left text-base font-medium transition-colors hover:text-gold sm:px-7 sm:py-6"
              >
                <span className="min-w-0">{faq.q}</span>
                <ChevronDown
                  className={cn("h-4 w-4 shrink-0 text-gold transition-transform duration-300", isOpen && "rotate-180")}
                />
              </button>
            </h3>
            <div
              id={`faq-panel-${i}`}
              role="region"
              aria-labelledby={`faq-btn-${i}`}
              className={cn(
                "grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <p className="max-w-prose px-5 pb-6 text-sm leading-[1.95] text-muted-foreground sm:px-7 sm:pb-8">
                  {faq.body}
                </p>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}

export function FaqAndKnowMore({ product }: { product: Product }) {
  return (
    <section id="faqs" className="mx-auto max-w-[1500px] px-4 py-24 sm:px-8 lg:px-10 lg:py-40">
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
        <div className="min-w-0">
          <SectionHeading eyebrow="Answers" title="FAQs" />
          <div className="mt-10">
            <Faqs faqs={product.faqs} />
          </div>
        </div>

        <div id="know-more" className="min-w-0">
          <SectionHeading eyebrow="Get in touch" title="Know more" />
          <Reveal variant="up" delay={120}>
            <EnquiryForm
              className="mt-10"
              productId={product.id}
              productName={product.name}
              withSubject
              submitLabel="Get in Touch"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
