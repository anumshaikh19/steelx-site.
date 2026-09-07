import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { PageHero, PageShell, Section } from "@/components/page-shell";
import { Reveal, SectionHeading } from "@/components/reveal";
import { EnquiryForm } from "@/components/enquiry-form";
import { studio } from "@/config/nav";

const title = "Contact — Start a project with STEELX Studio";
const description =
  "Talk to STEELX Studio about a new house, workplace, campus or interior. Studio address, phone, WhatsApp, email and enquiry form.";

export const Route = createFileRoute("/contact")({
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
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title="Start a project"
        lead="Tell us about the site, the brief and when you would like to begin. Every enquiry is read by a partner and answered within one working day."
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <div>
            <SectionHeading eyebrow="Studio" title="Come and see us" />
            <ul className="mt-10 space-y-6 text-sm">
              <li className="flex items-start gap-4">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span className="text-muted-foreground">{studio.address}</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="h-4 w-4 shrink-0 text-gold" />
                <a
                  href={`tel:${studio.phone.replace(/\s/g, "")}`}
                  className="text-muted-foreground hover:text-gold"
                >
                  {studio.phone}
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="h-4 w-4 shrink-0 text-gold" />
                <a href={`mailto:${studio.email}`} className="text-muted-foreground hover:text-gold">
                  {studio.email}
                </a>
              </li>
              <li className="flex items-center gap-4">
                <MessageCircle className="h-4 w-4 shrink-0 text-gold" />
                <a
                  href={`https://wa.me/${studio.whatsapp}?text=${encodeURIComponent(
                    "Hello STEELX Studio — I would like to discuss a project.",
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-gold"
                >
                  Message us on WhatsApp
                </a>
              </li>
            </ul>

            <div className="mt-12 grid gap-px border-t border-border sm:grid-cols-2">
              {[
                { label: "Studio hours", value: "Mon–Sat, 10:00–19:00" },
                { label: "Site visits", value: "Across India, on request" },
              ].map((f) => (
                <div key={f.label} className="border-b border-border py-5 sm:pr-8">
                  <p className="text-[0.68rem] uppercase tracking-[0.22em] text-muted-foreground">
                    {f.label}
                  </p>
                  <p className="mt-2 font-display text-lg text-foreground">{f.value}</p>
                </div>
              ))}
            </div>
          </div>

          <Reveal variant="right" delay={120}>
            <div className="border border-border p-6 sm:p-10">
              <h2 className="font-display text-3xl text-gold-gradient">Project enquiry</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                The more you can tell us about the site and scope, the more useful our first reply.
              </p>
              <EnquiryForm
                productId="new-project"
                productName="new project"
                withSubject
                submitLabel="Send enquiry"
                className="mt-8"
              />
            </div>
          </Reveal>
        </div>
      </Section>
    </PageShell>
  );
}
