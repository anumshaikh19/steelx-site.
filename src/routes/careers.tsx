import { createFileRoute } from "@tanstack/react-router";

import { PageShell, Section } from "@/components/page-shell";
import { Reveal, SectionHeading } from "@/components/reveal";
import { Marquee } from "@/components/motion";
import { EnquiryForm } from "@/components/enquiry-form";

import lobby from "@/assets/install-lobby.jpg";
import polishing from "@/assets/polishing.jpg";
import sheetPrep from "@/assets/sheet-prep.jpg";
import inspection from "@/assets/inspection.jpg";

const title = "Collaborate — Work with STEELX on metal & PVD projects";
const description =
  "How architects, interior designers, contractors and developers collaborate with STEELX on PVD stainless steel, decorative mesh and custom architectural metal.";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CollaboratePage,
});

const audiences = [
  { t: "Architects", d: "Envelope, cladding and screen systems detailed with you at shop-drawing stage." },
  { t: "Interior designers", d: "Joinery metal, reception desks, lift interiors and feature walls in a house tone." },
  { t: "Hospitality groups", d: "Roll-out packages where every property has to read as the same brand." },
  { t: "Retail brands", d: "Fixture programmes batched, coated and shipped store by store." },
  { t: "Facade consultants", d: "Grade, backing and movement resolved before the tender goes out." },
  { t: "Contractors & developers", d: "One supplier for fabrication, coating, crating and installation." },
];

const journey = [
  { n: "01", t: "Enquiry", d: "Drawings, a photograph or a sentence — whatever you have." },
  { n: "02", t: "Consultation", d: "We review scope, environment and finish intent with the design team." },
  { n: "03", t: "Sampling", d: "Physical coated samples produced and viewed under project lighting." },
  { n: "04", t: "Prototype", d: "A full-size panel or assembly, signed as the project control sample." },
  { n: "05", t: "Production", d: "Batched by elevation, documented panel by panel." },
  { n: "06", t: "Installation", d: "Sequenced crating and fitting by our own crews, then handover." },
];

const support = [
  { t: "Sample library", d: "Finish sets sent to your studio, free for live projects." },
  { t: "Specification text", d: "Written clauses you can drop into a tender package." },
  { t: "CAD details", d: "Typical joints, returns and fixing conditions on request." },
  { t: "Site survey", d: "Dimensional survey before fabrication where access allows." },
  { t: "Value engineering", d: "Options that hold the design intent inside the budget." },
  { t: "Aftercare", d: "Cleaning guidance and retained spares from the original batch." },
];

function CollaboratePage() {
  return (
    <PageShell overlayHeader>
      <section className="relative flex min-h-[80vh] items-end overflow-hidden border-b border-border">
        <img src={lobby} alt="Completed interior in coated stainless steel" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
        <div className="relative mx-auto w-full max-w-[1600px] px-4 pb-14 sm:px-8 lg:px-10 lg:pb-20">
          <Reveal variant="text" as="p" className="text-[0.62rem] uppercase tracking-[0.4em] text-champagne">
            Collaborate
          </Reveal>
          <Reveal variant="up" delay={80}>
            <h1 className="mt-6 max-w-4xl font-display text-[3rem] leading-[0.9] text-foreground sm:text-8xl lg:text-[8.5rem]">
              WORK WITH US.
            </h1>
          </Reveal>
          <Reveal variant="up" delay={160}>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-lg">
              Most of our work starts as a conversation with a design team long before there is a
              tender. Bring us in early and the metal stops being a risk item.
            </p>
          </Reveal>
        </div>
      </section>

      <Marquee items={["ARCHITECTS", "INTERIOR DESIGNERS", "HOSPITALITY", "RETAIL", "FACADE CONSULTANTS", "CONTRACTORS", "DEVELOPERS"]} />

      <Section>
        <SectionHeading eyebrow="Who we work with" title="Six kinds of partner" />
        <div className="mt-12 grid gap-px border-t border-border sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((a, i) => (
            <Reveal key={a.t} variant="up" delay={(i % 3) * 100} className="border-b border-border py-8 pr-8">
              <h2 className="font-display text-2xl text-foreground">{a.t}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.d}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border">
        <SectionHeading eyebrow="Collaboration journey" title="Six steps, start to handover" />
        <div className="mt-12 -mx-4 overflow-x-auto px-4 no-scrollbar sm:mx-0 sm:px-0">
          <ol className="flex min-w-max gap-px border-t border-border">
            {journey.map((s, i) => (
              <Reveal key={s.n} variant="up" delay={i * 80} as="li" className="w-[17rem] border-b border-r border-border p-6">
                <p className="font-display text-4xl text-champagne">{s.n}</p>
                <h3 className="mt-4 text-sm uppercase tracking-[0.2em] text-foreground">{s.t}</h3>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{s.d}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>

      <Section className="border-t border-border">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading eyebrow="Design support" title="What you get from us" />
            <div className="mt-10 grid gap-px border-t border-border sm:grid-cols-2">
              {support.map((s, i) => (
                <Reveal key={s.t} variant="row" delay={i * 70} className="border-b border-border py-6 pr-6">
                  <h3 className="text-sm uppercase tracking-[0.18em] text-foreground">{s.t}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.d}</p>
                </Reveal>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { src: polishing, alt: "Polishing a coated assembly" },
              { src: sheetPrep, alt: "Sheet preparation" },
              { src: inspection, alt: "Inspection of a coated panel" },
              { src: lobby, alt: "Installed interior metal" },
            ].map((m, i) => (
              <Reveal key={m.src} variant="up" delay={(i % 2) * 100}>
                <div className="aspect-square overflow-hidden border border-border metal-sheen">
                  <img src={m.src} alt={m.alt} loading="lazy" className="h-full w-full object-cover" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section className="border-t border-border">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div>
            <SectionHeading eyebrow="Start a collaboration" title="Tell us about the project" />
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              Scope, location, finish direction and programme are enough to begin. We usually reply
              within two working days, with samples where a tone is already clear.
            </p>
          </div>
          <Reveal variant="right" delay={120}>
            <EnquiryForm
              productId="collaboration"
              productName="collaboration"
              withSubject
              submitLabel="Send collaboration enquiry"
            />
          </Reveal>
        </div>
      </Section>
    </PageShell>
  );
}
