import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { PageShell, Section } from "@/components/page-shell";
import { Reveal } from "@/components/reveal";
import { ClipReveal, Parallax } from "@/components/motion";
import { formatDate, getPost, relatedPosts } from "@/data/journal";

export const Route = createFileRoute("/journal/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { title: post.title, excerpt: post.excerpt };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Article unavailable" }, { name: "robots", content: "noindex" }] };
    }
    const title = `${loaderData.title} — STEELX Journal`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.excerpt },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.excerpt },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ArticlePage,
});

function ArticlePage() {
  const { slug } = Route.useParams();
  const post = getPost(slug);
  if (!post) return null;
  const related = relatedPosts(slug);

  return (
    <PageShell>
      <article>
        <section className="mx-auto max-w-[1100px] px-4 pb-10 pt-28 sm:px-8 lg:pt-40">
          <Reveal variant="text" as="p" className="text-[0.62rem] uppercase tracking-[0.36em] text-champagne">
            {post.category} · {formatDate(post.date)} · {post.readingTime} read
          </Reveal>
          <Reveal variant="up" delay={80}>
            <h1 className="mt-6 font-display text-[2.4rem] leading-[1.02] text-foreground sm:text-5xl lg:text-6xl">
              {post.title}
            </h1>
          </Reveal>
        </section>

        <ClipReveal className="mx-auto max-w-[1400px] px-4 sm:px-8">
          <Parallax className="aspect-[16/9] w-full border border-border" amount={50}>
            <img src={post.hero} alt={post.heroAlt} className="h-full w-full object-cover" />
          </Parallax>
        </ClipReveal>

        <div className="mx-auto max-w-[760px] px-4 py-16 sm:px-8 lg:py-24">
          <Reveal variant="up">
            <p className="font-display text-2xl leading-snug text-foreground lg:text-3xl">
              {post.intro}
            </p>
          </Reveal>

          {post.sections.map((s, i) => (
            <section key={s.heading} className="mt-16">
              <Reveal variant="up">
                <h2 className="font-display text-3xl text-foreground">{s.heading}</h2>
              </Reveal>
              {s.body.map((p, j) => (
                <Reveal key={j} variant="up" delay={60 + j * 60}>
                  <p className="mt-5 text-base leading-[1.85] text-muted-foreground">{p}</p>
                </Reveal>
              ))}
              {s.image ? (
                <ClipReveal className="mt-10">
                  <figure>
                    <div className="aspect-[16/10] overflow-hidden border border-border metal-sheen">
                      <img
                        src={s.image.src}
                        alt={s.image.alt}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <figcaption className="mt-3 text-[0.6rem] uppercase tracking-[0.24em] text-muted-foreground">
                      {s.image.alt}
                    </figcaption>
                  </figure>
                </ClipReveal>
              ) : null}
              {s.callout?.length ? (
                <dl className="mt-10 grid gap-px border-t border-border sm:grid-cols-2">
                  {s.callout.map((c) => (
                    <div key={c.label} className="border-b border-border py-5 pr-6">
                      <dt className="text-[0.58rem] uppercase tracking-[0.24em] text-muted-foreground">
                        {c.label}
                      </dt>
                      <dd className="mt-2 font-display text-lg text-champagne">{c.value}</dd>
                    </div>
                  ))}
                </dl>
              ) : null}
              {i === 0 ? (
                <Reveal variant="scale" delay={120}>
                  <blockquote className="mt-16 border-l-2 border-champagne pl-6 font-display text-2xl leading-snug text-foreground lg:text-3xl">
                    {post.pullQuote}
                  </blockquote>
                </Reveal>
              ) : null}
            </section>
          ))}

          <Reveal variant="up" className="mt-16 border-t border-border pt-10">
            <p className="text-base leading-[1.85] text-muted-foreground">{post.conclusion}</p>
          </Reveal>

          <Link
            to="/journal"
            className="mt-14 inline-flex items-center gap-2 text-[0.66rem] uppercase tracking-[0.22em] text-champagne"
          >
            <ArrowLeft className="h-4 w-4" /> All articles
          </Link>
        </div>
      </article>

      <Section className="border-t border-border">
        <p className="text-[0.62rem] uppercase tracking-[0.34em] text-champagne">Keep reading</p>
        <div className="mt-10 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((p, i) => (
            <Reveal key={p.slug} variant="up" delay={(i % 3) * 100}>
              <Link to="/journal/$slug" params={{ slug: p.slug }} data-cursor="Read →" className="group block">
                <div className="aspect-[4/3] overflow-hidden border border-border metal-sheen">
                  <img
                    src={p.hero}
                    alt={p.heroAlt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1300ms] group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-4 font-display text-xl leading-snug text-foreground transition-colors group-hover:text-champagne">
                  {p.title}
                </h3>
                <p className="mt-2 text-[0.58rem] uppercase tracking-[0.26em] text-muted-foreground">
                  {p.category} · {p.readingTime}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border text-center">
        <Reveal variant="up">
          <h2 className="font-display text-4xl text-foreground sm:text-5xl">Talk surfaces with us</h2>
        </Reveal>
        <Reveal variant="up" delay={100}>
          <Link
            to="/contact"
            data-cursor="Start →"
            className="mt-8 inline-flex items-center gap-2 bg-champagne-gradient px-8 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-metal-black"
          >
            Start a project <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </Section>
    </PageShell>
  );
}
