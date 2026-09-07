import { useState } from "react";
import { Link } from "@tanstack/react-router";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ProductHero } from "@/components/sections/product-hero";
import { ProductStory } from "@/components/sections/product-story";
import { MaterialsSection } from "@/components/sections/materials";
import { HowToUseSection } from "@/components/sections/how-to-use";
import { CareSection } from "@/components/sections/care";
import { TechnicalSpecs } from "@/components/sections/tech-specs";
import { VideoSection } from "@/components/sections/video-section";
import { WhyYouLoveItCarousel } from "@/components/sections/why-you-love-it";
import { RelatedProducts } from "@/components/sections/related-products";
import { FaqAndKnowMore } from "@/components/sections/faq-know-more";
import { KeywordsSection } from "@/components/sections/keywords";
import { EnquiryModal } from "@/components/enquiry-modal";
import { StickyActions } from "@/components/sticky-actions";
import type { Product } from "@/data/product";

export function ProductPageView({ product }: { product: Product }) {
  const [enquiry, setEnquiry] = useState(false);

  return (
    <div className="min-h-screen bg-background pb-16 lg:pb-0">
      <SiteHeader />

      <main>
        <nav aria-label="Breadcrumb" className="mx-auto max-w-[1500px] px-4 pb-6 sm:px-8 lg:px-10">
          <ol className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            <li className="flex items-center gap-2">
              <Link to="/" className="transition-colors hover:text-gold">
                Home
              </Link>
              <span aria-hidden="true">/</span>
            </li>
            {product.categories.slice(0, 2).map((cat) => (
              <li key={cat.href} className="flex items-center gap-2">
                <Link to={cat.href} className="transition-colors hover:text-gold">
                  {cat.label}
                </Link>
                <span aria-hidden="true">/</span>
              </li>
            ))}
            <li aria-current="page" className="text-foreground">
              {product.name}
            </li>
          </ol>
        </nav>

        <ProductHero product={product} onEnquire={() => setEnquiry(true)} />
        <ProductStory description={product.description} />
        <MaterialsSection materials={product.materials} />
        <HowToUseSection steps={product.howToUse} />
        <CareSection care={product.care} />
        <TechnicalSpecs specs={product.specs} />
        <VideoSection video={product.video} />
        <WhyYouLoveItCarousel data={product.whyYouLoveIt} />
        <RelatedProducts items={product.related} />
        <FaqAndKnowMore product={product} />
        <KeywordsSection keywords={product.keywords} />
      </main>

      <SiteFooter />

      <StickyActions
        productName={product.name}
        whatsappNumber={product.whatsappNumber}
        onEnquire={() => setEnquiry(true)}
      />
      <EnquiryModal
        open={enquiry}
        onClose={() => setEnquiry(false)}
        productId={product.id}
        productName={product.name}
      />
    </div>
  );
}
