import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { PageShell, Section } from "@/components/page-shell";
import { Reveal, SectionHeading } from "@/components/reveal";
import { ClipReveal, HorizontalRail, Parallax } from "@/components/motion";
import { Lightbox } from "@/components/lightbox";
import { ProjectGridCard } from "@/components/project-grid-card";
import { getProject, relatedProjects } from "@/data/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { title: project.title, intro: project.intro, slug: params.slug };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Project unavailable" }, { name: "robots", content: "noindex" }] };
    }
    const title = `${loaderData.title} — STEELX PVD Surfaces`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.intro },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.intro },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ProjectDetail,
});

function ProjectDetail() {
  const { slug } = Route.useParams();
  const project = getProject(slug);
  const [lightbox, setLightbox] = useState<number | null>(null);

  if (!project) return null;
  const related = relatedProjects(slug);
  const allImages = [...project.gallery, ...project.detailGallery];

  return (
    <PageShell>
      {/* Title block */}
      <section className="mx-auto max-w-[1600px] px-4 pb-10 pt-28 sm:px-8 lg:px-10 lg:pt-36">
        <Reveal variant="text" as="p" className="text-[0.62rem] uppercase tracking-[0.4em] text-champagne">
          {project.category}
        </Reveal>
        <Reveal variant="up" delay={80}>
          <h1 className="mt-6 font-display text-[2.8rem] leading-[0.92] text-foreground sm:text-7xl lg:text-[8rem]">
            {project.title}
          </h1>
        </Reveal>
        <Reveal variant="row" delay={160}>
          <p className="mt-6 text-sm uppercase tracking-[0.24em] text-muted-foreground">
            {project.location} · {project.year} · {project.status}
          </p>
        </Reveal>
      </section>

      {/* Hero */}
      <ClipReveal className="mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-10">
        <Parallax className="aspect-[16/10] w-full border border-border lg:aspect-[21/9]" amount={70}>
          <img
            src={project.coverImage}
            alt={`${project.title} — hero image`}
            className="h-full w-full object-cover"
          />
        </Parallax>
      </ClipReveal>

      {/* Facts */}
      <Section className="lg:py-20">
        <p className="text-[0.62rem] uppercase tracking-[0.34em] text-champagne">Project facts</p>
        <dl className="mt-8 grid gap-px border-t border-border sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Client", value: project.client },
            { label: "Location", value: project.location },
            { label: "Area", value: project.area },
            { label: "Year", value: project.year },
            { label: "Status", value: project.status },
            { label: "Scope", value: project.scope },
            { label: "Finish", value: project.finish },
            { label: "Services", value: project.services.join(", ") },
          ].map((f, i) => (
            <Reveal key={f.label} variant="row" delay={i * 60} className="border-b border-border py-6 pr-6">
              <dt className="text-[0.6rem] uppercase tracking-[0.24em] text-muted-foreground">
                {f.label}
              </dt>
              <dd className="mt-2 font-display text-lg leading-snug text-foreground">{f.value}</dd>
            </Reveal>
          ))}
        </dl>
      </Section>

      {/* Introduction */}
      <Section className="border-t border-border">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.4fr] lg:gap-20">
          <SectionHeading eyebrow="Introduction" title="The brief" />
          <div className="space-y-6">
            <Reveal variant="up">
              <p className="font-display text-2xl leading-snug text-foreground lg:text-3xl">
                {project.intro}
              </p>
            </Reveal>
            <Reveal variant="up" delay={100}>
              <p className="text-sm leading-relaxed text-muted-foreground lg:text-base">
                {project.description}
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Large image */}
      {project.gallery[1] ? (
        <ClipReveal className="mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-10">
          <Parallax className="aspect-[16/9] w-full border border-border" amount={60}>
            <img
              src={project.gallery[1].src}
              alt={project.gallery[1].alt}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </Parallax>
        </ClipReveal>
      ) : null}

      {/* Approach */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading eyebrow="Approach" title="How it was built" />
            <Reveal variant="up" delay={100}>
              <p className="mt-8 text-sm leading-relaxed text-muted-foreground lg:text-base">
                {project.approach}
              </p>
            </Reveal>
          </div>
          {project.detailGallery[0] ? (
            <Reveal variant="right" delay={120}>
              <div className="aspect-[4/3] overflow-hidden border border-border metal-sheen">
                <img
                  src={project.detailGallery[0].src}
                  alt={project.detailGallery[0].alt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          ) : null}
        </div>
      </Section>

      {/* Material story */}
      <Section className="border-t border-border">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {project.gallery[2] ? (
            <Reveal variant="left">
              <div className="aspect-[4/3] overflow-hidden border border-border metal-sheen">
                <img
                  src={project.gallery[2].src}
                  alt={project.gallery[2].alt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          ) : null}
          <div>
            <SectionHeading eyebrow="Material & surface" title="The finish story" />
            <Reveal variant="up" delay={100}>
              <p className="mt-8 text-sm leading-relaxed text-muted-foreground lg:text-base">
                {project.materialStory}
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Full width cinematic */}
      {project.gallery[3] ? (
        <ClipReveal>
          <Parallax className="aspect-[21/9] w-full border-y border-border" amount={80}>
            <img
              src={project.gallery[3].src}
              alt={project.gallery[3].alt}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </Parallax>
        </ClipReveal>
      ) : null}

      {/* Horizontal gallery */}
      <Section>
        <SectionHeading eyebrow="Gallery" title="Project gallery" />
        <p className="mt-4 text-xs uppercase tracking-[0.24em] text-muted-foreground">
          {String(allImages.length).padStart(2, "0")} images — click to enlarge
        </p>
        <HorizontalRail className="mt-10" itemClassName="w-[80vw] sm:w-[46vw] lg:w-[32vw]">
          {allImages.map((image, i) => (
            <button
              key={`${image.src}-${i}`}
              type="button"
              onClick={() => setLightbox(i)}
              data-cursor="Explore"
              className="group block w-full text-left"
            >
              <div className="aspect-[4/3] overflow-hidden border border-border metal-sheen">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
              </div>
              <p className="mt-3 flex items-center justify-between text-[0.6rem] uppercase tracking-[0.24em] text-muted-foreground">
                <span className="truncate pr-4">{image.alt}</span>
                <span className="tabular-nums text-champagne">
                  {String(i + 1).padStart(2, "0")} / {String(allImages.length).padStart(2, "0")}
                </span>
              </p>
            </button>
          ))}
        </HorizontalRail>
      </Section>

      {/* Detail grid */}
      <Section className="border-t border-border lg:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {project.detailGallery.map((image, i) => (
            <Reveal key={image.src + i} variant="up" delay={(i % 3) * 110}>
              <button
                type="button"
                onClick={() => setLightbox(project.gallery.length + i)}
                data-cursor="Explore"
                className="block w-full"
              >
                <div className="aspect-square overflow-hidden border border-border metal-sheen">
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  />
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Outcome + technical */}
      <Section className="border-t border-border">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading eyebrow="Outcome" title="What was delivered" />
            <Reveal variant="up" delay={100}>
              <p className="mt-8 text-sm leading-relaxed text-muted-foreground lg:text-base">
                {project.outcome}
              </p>
            </Reveal>
            <div className="mt-10 grid grid-cols-2 gap-px border-t border-border">
              {project.facts.map((f, i) => (
                <Reveal key={f.label} variant="row" delay={i * 70} className="border-b border-border py-5 pr-4">
                  <p className="text-[0.58rem] uppercase tracking-[0.24em] text-muted-foreground">
                    {f.label}
                  </p>
                  <p className="mt-1.5 font-display text-xl text-champagne">{f.value}</p>
                </Reveal>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Technical" title="Specification" />
            <dl className="mt-8 border-t border-border">
              {project.technical.map((t, i) => (
                <Reveal
                  key={t.label}
                  variant="row"
                  delay={i * 70}
                  className="flex items-baseline justify-between gap-6 border-b border-border py-5"
                >
                  <dt className="text-[0.62rem] uppercase tracking-[0.24em] text-muted-foreground">
                    {t.label}
                  </dt>
                  <dd className="text-right text-sm text-foreground">{t.value}</dd>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </Section>

      {/* Related */}
      <Section className="border-t border-border">
        <SectionHeading eyebrow="More work" title="Related projects" />
        <div className="mt-12 grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((p, i) => (
            <Reveal key={p.slug} variant="up" delay={(i % 3) * 110}>
              <ProjectGridCard project={p} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="border-t border-border text-center">
        <Reveal variant="up">
          <h2 className="font-display text-4xl leading-tight text-foreground sm:text-6xl">
            Start a project
          </h2>
        </Reveal>
        <Reveal variant="up" delay={100}>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Send us the drawings, the finish you have in mind, or just a photograph of a surface you
            like. We will come back with samples.
          </p>
        </Reveal>
        <Reveal variant="up" delay={180}>
          <Link
            to="/contact"
            data-cursor="Start →"
            className="mt-10 inline-flex items-center gap-2 bg-champagne-gradient px-8 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-metal-black transition-opacity hover:opacity-90"
          >
            Start a project <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </Section>

      <Lightbox
        images={allImages}
        index={lightbox}
        onClose={() => setLightbox(null)}
        onIndex={setLightbox}
      />
    </PageShell>
  );
}
