import { Section } from "@/components/page-shell";
import { Reveal, SectionHeading } from "@/components/reveal";
import { ClipReveal, StickyStory } from "@/components/motion";
import { applications, processSteps } from "@/data/mesh";

/* ── 15–16 Architectural applications ────────────────────────── */
export function Applications() {
  return (
    <Section className="border-t border-border">
      <SectionHeading eyebrow="Architectural applications" title="Where to use architectural metal systems" />
      <Reveal variant="up" delay={100}>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          A versatile material for both interior and exterior architectural systems — transforming
          spaces through light, texture and engineering.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {applications.map((a, i) => (
          <ClipReveal key={a.name} delay={(i % 3) * 120}>
            <article className="group relative h-full overflow-hidden border border-border" data-cursor="Explore">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={a.image}
                  alt={`${a.name} — architectural metal mesh application`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-metal-black via-metal-black/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-display text-2xl leading-tight text-foreground">{a.name}</h3>
                <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-muted-foreground opacity-0 transition-all duration-700 group-hover:max-h-40 group-hover:opacity-100">
                  {a.body}
                </p>
              </div>
            </article>
          </ClipReveal>
        ))}
      </div>
    </Section>
  );
}

/* ── 17–18 Process ───────────────────────────────────────────── */
export function ProcessSection() {
  return (
    <Section className="border-t border-border">
      <SectionHeading eyebrow="Our process" title="Concept to installation" />
      <Reveal variant="up" delay={100}>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          We provide comprehensive technical support for architects and facade consultants, ensuring
          every project benefits from our 15+ years of manufacturing expertise.
        </p>
      </Reveal>
      <div className="mt-14">
        <StickyStory steps={processSteps} />
      </div>
    </Section>
  );
}
