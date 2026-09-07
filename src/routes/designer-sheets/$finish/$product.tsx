import { useState } from "react";
import { createFileRoute, notFound } from "@tanstack/react-router";

import { PageShell } from "@/components/page-shell";
import { Reveal } from "@/components/reveal";
import { EnquiryModal } from "@/components/enquiry-modal";
import { MaterialViewer } from "@/components/products/material-viewer";
import { MaterialConfigurator } from "@/components/products/configurator";
import {
  Breadcrumbs,
  ColourSelector,
  FaqList,
  FinishLinks,
  ProductSection,
  QuoteCta,
  SampleCta,
  SpecTable,
  StickyProductBar,
} from "@/components/products/ui";
import {
  applicationImages,
  designerSheetFinishes,
  getColourProduct,
  getColourProducts,
  getFinish,
  ON_REQUEST,
  SITE_URL,
} from "@/data/products/designer-sheets";

export const Route = createFileRoute("/designer-sheets/$finish/$product")({
  loader: ({ params }) => {
    const product = getColourProduct(params.finish, params.product);
    if (!product) throw notFound();
    return { slug: product.slug };
  },
  head: ({ params }) => {
    const product = getColourProduct(params.finish, params.product);
    if (!product) {
      return { meta: [{ title: "Not found | STEELX" }, { name: "robots", content: "noindex" }] };
    }
    const canonical = `${SITE_URL}/designer-sheets/${product.finishSlug}/${product.slug}`;
    return {
      meta: [
        { title: product.seoTitle },
        { name: "description", content: product.metaDescription },
        { name: "keywords", content: [product.primaryKeyword, ...product.secondaryKeywords].join(", ") },
        { property: "og:title", content: product.seoTitle },
        { property: "og:description", content: product.metaDescription },
        { property: "og:type", content: "product" },
        { property: "og:url", content: canonical },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: canonical }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            description: product.metaDescription,
            material: "Stainless Steel",
            color: product.colour,
            brand: { "@type": "Brand", name: "STEELX" },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
              { "@type": "ListItem", position: 2, name: "Designer Sheets", item: `${SITE_URL}/designer-sheets` },
              {
                "@type": "ListItem",
                position: 3,
                name: product.finish,
                item: `${SITE_URL}/designer-sheets/${product.finishSlug}`,
              },
              { "@type": "ListItem", position: 4, name: product.colour, item: canonical },
            ],
          }),
        },
      ],
    };
  },
  component: ColourProductPage,
});

function ColourProductPage() {
  const params = Route.useParams();
  const product = getColourProduct(params.finish, params.product);
  const finish = getFinish(params.finish);
  const [sample, setSample] = useState(false);

  if (!product || !finish) return null;
  const siblings = getColourProducts(product.finishSlug);

  return (
    <PageShell>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Designer Sheets", to: "/designer-sheets" },
          { label: finish.name, to: "/designer-sheets/$finish", params: { finish: finish.slug } },
          { label: product.colour },
        ]}
      />

      <section className="mx-auto max-w-[1500px] px-4 pb-12 pt-10 sm:px-8 lg:px-10 lg:pb-16 lg:pt-14">
        <Reveal variant="up">
          <h1 className="max-w-5xl font-display text-[2.4rem] leading-[0.98] text-foreground sm:text-6xl lg:text-[5.6rem]">
            {product.name.toUpperCase()}
          </h1>
        </Reveal>
        <Reveal variant="text" delay={120} as="p" className="mt-7 text-[0.68rem] uppercase tracking-[0.28em] text-champagne">
          {product.supportingHeadline}
        </Reveal>
        <Reveal variant="up" delay={180}>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">{product.shortDescription}</p>
        </Reveal>
      </section>

      <div className="mx-auto max-w-[1500px] px-4 sm:px-8 lg:px-10">
        <MaterialViewer
          image={product.image}
          alt={product.alt}
          light={product.light}
          caption={`${product.finish} · ${product.colour}`}
          priority
        />
      </div>

      <ProductSection eyebrow="The surface" title="COLOUR, LIGHT AND TEXTURE.">
        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-16">
          {product.longDescription.map((paragraph) => (
            <p key={paragraph.slice(0, 32)} className="text-base leading-relaxed text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </div>
        <p className="mt-10 max-w-2xl border-l border-champagne/50 pl-6 text-sm leading-relaxed text-foreground">
          {product.colourNote}
        </p>
      </ProductSection>

      <ProductSection
        eyebrow="Configurator"
        title="BUILD THE SPECIFICATION."
        lead="Colour, pattern, grade and size. Options that are project dependent are marked as available on request."
      >
        <MaterialConfigurator
          finishName={product.finish}
          colours={siblings}
          patterns={finish.patterns}
          initialColourSlug={product.slug}
        />
      </ProductSection>

      <ProductSection eyebrow="Technical" title="SPECIFICATIONS.">
        <SpecTable rows={product.specifications} />
      </ProductSection>

      <ProductSection eyebrow="Use" title="APPLICATIONS.">
        <ul className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {product.applications.map((application) => (
            <li key={application} className="bg-background px-6 py-6 text-sm text-foreground">
              {application}
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-2xl text-xs leading-relaxed text-muted-foreground">{product.applicationNote}</p>
        <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-3">
          {applicationImages.map((item) => (
            <figure key={item.label} className="m-0 bg-background">
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full object-cover"
              />
              <figcaption className="px-5 py-4 text-[0.62rem] uppercase tracking-[0.22em] text-muted-foreground">
                {item.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </ProductSection>

      <SampleCta onRequest={() => setSample(true)} />

      <ProductSection eyebrow="Questions" title="FREQUENTLY ASKED.">
        <FaqList items={product.faqs} />
      </ProductSection>

      <QuoteCta
        defaults={{
          finish: product.finish,
          colour: product.colour,
          pattern: finish.patterns[0]?.name ?? "Standard",
        }}
        finishOptions={designerSheetFinishes.map((f) => f.name)}
        colourOptions={siblings.length ? siblings.map((c) => c.colour) : [product.colour, ON_REQUEST]}
        patternOptions={finish.patterns.map((p) => p.name)}
      />

      <ProductSection eyebrow="Related" title={`EXPLORE MORE ${product.finish.toUpperCase()} FINISHES.`}>
        <div className="mt-10">
          <ColourSelector products={siblings} activeSlug={product.slug} heading={`Other ${product.finish.toLowerCase()} colours`} />
        </div>
        <div className="mt-16">
          <FinishLinks finishes={designerSheetFinishes} activeSlug={finish.slug} />
        </div>
      </ProductSection>

      <StickyProductBar label={`${product.finish} · ${product.colour}`} onSample={() => setSample(true)} />

      <EnquiryModal
        open={sample}
        onClose={() => setSample(false)}
        productId={product.slug}
        productName={`${product.name} sample`}
      />
    </PageShell>
  );
}
