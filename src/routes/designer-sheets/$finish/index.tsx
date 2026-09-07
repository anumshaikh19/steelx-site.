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
  getColourProducts,
  getFinish,
  ON_REQUEST,
  SITE_URL,
} from "@/data/products/designer-sheets";

export const Route = createFileRoute("/designer-sheets/$finish/")({
  loader: ({ params }) => {
    const finish = getFinish(params.finish);
    if (!finish) throw notFound();
    return { slug: finish.slug };
  },
  head: ({ params }) => {
    const finish = getFinish(params.finish);
    if (!finish) {
      return { meta: [{ title: "Not found | STEELX" }, { name: "robots", content: "noindex" }] };
    }
    const canonical = `${SITE_URL}/designer-sheets/${finish.slug}`;
    return {
      meta: [
        { title: finish.seoTitle },
        { name: "description", content: finish.metaDescription },
        { property: "og:title", content: finish.seoTitle },
        { property: "og:description", content: finish.metaDescription },
        { property: "og:type", content: "website" },
        { property: "og:url", content: canonical },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: canonical }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
              { "@type": "ListItem", position: 2, name: "Designer Sheets", item: `${SITE_URL}/designer-sheets` },
              { "@type": "ListItem", position: 3, name: finish.name, item: canonical },
            ],
          }),
        },
      ],
    };
  },
  component: FinishPage,
});

function FinishPage() {
  const { finish: slug } = Route.useParams();
  const finish = getFinish(slug);
  const [sample, setSample] = useState(false);

  if (!finish) return null;
  const colours = getColourProducts(finish.slug);

  return (
    <PageShell>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Designer Sheets", to: "/designer-sheets" },
          { label: finish.name },
        ]}
      />

      <section className="mx-auto max-w-[1500px] px-4 pb-14 pt-10 sm:px-8 lg:px-10 lg:pb-20 lg:pt-14">
        <Reveal variant="up">
          <h1 className="max-w-5xl font-display text-[2.6rem] leading-[0.96] text-foreground sm:text-6xl lg:text-[6.5rem]">
            {finish.h1}
          </h1>
        </Reveal>
        <Reveal variant="up" delay={120}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">{finish.heroLine}</p>
        </Reveal>
        <Reveal variant="up" delay={200}>
          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-2 text-[0.62rem] uppercase tracking-[0.22em] text-champagne">
            {finish.character.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
      </section>

      <div className="mx-auto max-w-[1500px] px-4 sm:px-8 lg:px-10">
        <MaterialViewer
          image={finish.image}
          alt={finish.alt}
          light={{
            highlight: "rgba(255,255,255,0.42)",
            mid: "rgba(160,170,178,0.28)",
            shadow: "rgba(8,10,12,0.6)",
          }}
          caption={`${finish.name} finish`}
          priority
        />
      </div>

      <ProductSection eyebrow="The finish" title={`WHAT ${finish.name.toUpperCase()} DOES.`}>
        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-16">
          {finish.longDescription.map((paragraph) => (
            <p key={paragraph.slice(0, 32)} className="text-base leading-relaxed text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </div>
      </ProductSection>

      {colours.length ? (
        <ProductSection eyebrow="Colour" title="AVAILABLE COLOURS.">
          <div className="mt-12">
            <ColourSelector products={colours} heading={`${finish.name} colour pages`} />
          </div>
        </ProductSection>
      ) : (
        <ProductSection
          eyebrow="Colour"
          title="PVD COLOUR."
          lead={`${finish.name} can be supplied in PVD colour. Specific colour availability for this finish is confirmed at enquiry stage — available on request.`}
        />
      )}

      <ProductSection eyebrow="Pattern" title="PATTERN AND TEXTURE OPTIONS.">
        <ul className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {finish.patterns.map((pattern) => (
            <li key={pattern.name} className="bg-background p-7">
              <p className="font-display text-2xl text-foreground">{pattern.name}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{pattern.description}</p>
              <p className="mt-5 text-[0.6rem] uppercase tracking-[0.22em] text-champagne">
                {pattern.confirmed ? "Standard option" : ON_REQUEST}
              </p>
            </li>
          ))}
        </ul>
      </ProductSection>

      {colours.length ? (
        <ProductSection
          eyebrow="Configurator"
          title="BUILD THE SPECIFICATION."
          lead="Choose colour, pattern, grade and size. Unconfirmed options are marked as available on request."
        >
          <MaterialConfigurator finishName={finish.name} colours={colours} patterns={finish.patterns} />
        </ProductSection>
      ) : null}

      <ProductSection eyebrow="Technical" title="SPECIFICATIONS.">
        <SpecTable rows={finish.specifications} />
      </ProductSection>

      <ProductSection eyebrow="Use" title="APPLICATIONS.">
        <ul className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {finish.applications.map((application) => (
            <li key={application} className="bg-background px-6 py-6 text-sm text-foreground">
              {application}
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-2xl text-xs leading-relaxed text-muted-foreground">
          Suitability depends on grade, thickness and location. We confirm the right specification per project.
        </p>
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
        <FaqList items={finish.faqs} />
      </ProductSection>

      <QuoteCta
        defaults={{ finish: finish.name, colour: colours[0]?.colour ?? "Silver", pattern: finish.patterns[0]?.name ?? "Standard" }}
        finishOptions={designerSheetFinishes.map((f) => f.name)}
        colourOptions={
          colours.length
            ? colours.map((c) => c.colour)
            : ["Silver", "Gold", "Rose Gold", "Champagne", "Bronze", "Black", ON_REQUEST]
        }
        patternOptions={finish.patterns.map((p) => p.name)}
      />

      <ProductSection eyebrow="Related" title="EXPLORE OTHER SURFACES.">
        <div className="mt-6">
          <FinishLinks finishes={designerSheetFinishes} activeSlug={finish.slug} heading="Related finishes" />
        </div>
      </ProductSection>

      <StickyProductBar label={finish.name} onSample={() => setSample(true)} />

      <EnquiryModal
        open={sample}
        onClose={() => setSample(false)}
        productId={`designer-sheets-${finish.slug}`}
        productName={`${finish.name} stainless steel sheet sample`}
      />
    </PageShell>
  );
}
