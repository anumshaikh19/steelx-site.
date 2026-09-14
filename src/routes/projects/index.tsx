import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";

import { PageShell, Section } from "@/components/page-shell";
import { FeatureProjectCard, ProjectGridCard } from "@/components/project-grid-card";
import { Reveal } from "@/components/reveal";
import { Marquee } from "@/components/motion";
import { categories, projects, type CategoryFilter } from "@/data/projects";
import { cn } from "@/lib/utils";

const title = "STEELX | PVD Coated Stainless Steel Architectural Surfaces India/GCC";
const description =
  "Engineer PVD-coated stainless steel facades, interiors & sculpture with STEELX. Projects in Mumbai, Dubai, Doha & Singapore. Custom bronze, champagne & gold PVD. Specify today.";

const footprint = [
  {
    region: "India — West & South",
    places: "Mumbai, Ahmedabad, Rajkot, Surat, Bengaluru",
    examples: "Harbour House Penthouse, Aurum Flagship, Agrasen Atrium, North Terminal Wayfinding, Nikhil Gupta Residence, Kalyan Furniture, Solace Hotel Sheets, Lumen Restaurant Screens",
    keywords: "PVD stainless steel facade Mumbai · architectural metalwork Ahmedabad commercial · coastal India PVD coating Surat",
  },
  {
    region: "GCC & Middle East",
    places: "Dubai, Doha, Riyadh",
    examples: "Vira Hotel Lobby, Cascade Sculpture Wall, SS Mesh Programme",
    keywords: "GCC hospitality PVD metal Dubai · Qatar architectural sculpture bronze PVD · UAE hotel lobby mirror finish metal",
  },
  {
    region: "Global",
    places: "Singapore, London",
    examples: "Meridian Tower, Atelier Nine Interiors",
    keywords: "Singapore commercial facade PVD gunmetal · UK hospitality interior metalwork London",
  },
];

const faqs = [
  {
    question: "What is PVD coating, and why is it better than paint or anodizing for architectural metal?",
    answer:
      "PVD (Physical Vapor Deposition) creates a microscopically bonded, ceramic-like metal layer that is harder and more durable than conventional painted finishes, with strong UV and wear resistance. STEELX positions PVD-coated stainless steel for architectural applications where colour stability, surface performance and long-term visual consistency matter.",
  },
  {
    question: "Can STEELX match PVD colors to specific project lighting or brand guidelines?",
    answer:
      "Yes. STEELX can develop and validate champagne, bronze, rose gold and related PVD tones against project lighting and material palettes. The process is intended to reduce colour mismatch between large architectural surfaces, hospitality interiors and branded environments.",
  },
  {
    question: "What’s the typical lead time for custom PVD-coated stainless steel panels or mesh?",
    answer:
      "Stock programmes such as Trim Line and SS Mesh can be planned for fast-track supply, while custom facade panels and sculptural elements require additional engineering, coating validation, fabrication and crating time. Final lead time is confirmed against project scope, finish, quantity and installation schedule.",
  },
];

export const Route = createFileRoute("/projects/")({
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
  component: ProjectsPage,
});

function ProjectsPage() {
  const [category, setCategory] = useState<CategoryFilter>("All");
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      if (category !== "All" && p.category !== category) return false;
      if (!q) return true;
      return [p.title, p.client, p.location, p.category, p.year, p.finish, p.scope].some((v) =>
        v.toLowerCase().includes(q),
      );
    });
  }, [category, query]);

  /** 3 standard cards, then one full-width feature — repeated. */
  const blocks = useMemo(() => {
    const out: { rows: typeof results; feature: (typeof results)[number] | undefined }[] = [];
    for (let i = 0; i < results.length; i += 4) {
      out.push({ rows: results.slice(i, i + 3), feature: results[i + 3] });
    }
    return out;
  }, [results]);

  return (
    <PageShell>
      <section className="relative mx-auto max-w-[1600px] px-4 pb-14 pt-28 sm:px-8 lg:px-10 lg:pb-20 lg:pt-40">
        <div className="pointer-events-none absolute inset-0 tech-grid opacity-40" aria-hidden="true" />
        <div className="relative">
          <Reveal variant="text" as="p" className="text-[0.62rem] uppercase tracking-[0.4em] text-champagne">
            Selected work — {projects.length} projects
          </Reveal>
          <Reveal variant="up" delay={80}>
            <h1 className="mt-6 max-w-[1200px] font-display text-[3rem] leading-[0.92] text-foreground sm:text-7xl lg:text-[7.6rem]">
              PVD-COATED STAINLESS STEEL ARCHITECTURAL SURFACES
            </h1>
          </Reveal>
          <Reveal variant="up" delay={140}>
            <p className="mt-8 max-w-4xl text-base leading-relaxed text-muted-foreground lg:text-xl">
              Transform spaces with STEELX’s award-winning PVD stainless steel solutions—engineered for light interaction, durability, and seamless integration across commercial, hospitality, retail, and residential projects worldwide. From Mumbai facades to Doha sculptures, we deliver metal that <em>defines</em> space.
            </p>
          </Reveal>
          <Reveal variant="up" delay={200}>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-[0.62rem] uppercase tracking-[0.22em] text-champagne">
              <span>PVD architectural surfaces</span>
              <span>Precision engineering facades</span>
              <span>Bespoke metalwork interiors</span>
              <span>Global delivery</span>
            </div>
          </Reveal>
        </div>
      </section>

      <Marquee
        items={[
          "PVD COATED STAINLESS",
          "FACADE SYSTEMS",
          "DECORATIVE MESH",
          "HOSPITALITY METAL",
          "RETAIL FABRICATION",
          "SPECIAL PROJECTS",
          "INTERNATIONAL DELIVERY",
        ]}
      />

      <Section className="lg:py-16">
        <Reveal variant="up">
          <div className="grid gap-10 border-b border-border pb-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <p className="text-[0.62rem] uppercase tracking-[0.34em] text-champagne">01 — Why STEELX</p>
              <h2 className="mt-5 font-display text-4xl leading-none text-foreground sm:text-5xl lg:text-6xl">
                Why Architects &amp; Designers Choose STEELX for PVD Metal Innovation
              </h2>
            </div>
            <div className="text-sm leading-relaxed text-muted-foreground lg:text-base">
              <p>
                STEELX specializes in <strong className="font-medium text-foreground">end-to-end PVD-coated stainless steel systems</strong>—from initial engineering and vacuum deposition coating to precision installation. Unlike generic metal suppliers, we develop custom PVD colour palettes, engineer seamless metal transitions, deliver durable finishes for demanding climates, and support architects and designers through material specification.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Custom PVD colour palettes — champagne, bronze, rose gold, gunmetal and black",
                  "Seamless metal transitions across complex architectural forms",
                  "Marine-grade material strategies for GCC and coastal Indian projects",
                  "Material specification support for reflectance, performance and lifecycle decisions",
                ].map((item) => (
                  <div key={item} className="border border-border bg-surface/30 p-5 text-xs uppercase tracking-[0.12em] text-muted-foreground">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-16 flex flex-col gap-8">
          <div>
            <p className="text-[0.62rem] uppercase tracking-[0.34em] text-champagne">02 — Project archive</p>
            <h2 className="mt-4 font-display text-4xl text-foreground sm:text-5xl lg:text-6xl">
              Explore Our PVD Metal Projects by Sector
            </h2>
            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground lg:text-base">
              Facades, hospitality interiors, retail metal, decorative mesh, bespoke residential work and special projects — organized for architects, facade contractors, hospitality developers and high-end interior designers.
            </p>
          </div>

          <div className="-mx-4 overflow-x-auto px-4 no-scrollbar sm:mx-0 sm:px-0">
            <ul className="flex min-w-max items-center gap-2" role="tablist" aria-label="Project categories">
              {categories.map((c) => (
                <li key={c}>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={category === c}
                    onClick={() => setCategory(c)}
                    className={cn(
                      "border px-5 py-2.5 text-[0.66rem] uppercase tracking-[0.2em] transition-all duration-300",
                      category === c
                        ? "border-champagne bg-champagne-gradient text-metal-black"
                        : "border-border text-muted-foreground hover:border-champagne hover:text-champagne",
                    )}
                  >
                    {c}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3 border-t border-border pt-8 lg:flex-row lg:items-center lg:justify-between">
            <p className="text-[0.62rem] uppercase tracking-[0.34em] text-champagne">Search projects</p>
            <label className="relative block w-full lg:w-[28rem]">
              <span className="sr-only">Search by project, client, location, category or year</span>
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                type="search"
                placeholder="Search by project, client, location..."
                className="w-full border border-border bg-surface/50 py-3.5 pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-champagne focus:outline-none"
              />
            </label>
            <p className="text-xs tabular-nums uppercase tracking-[0.22em] text-muted-foreground">
              {String(results.length).padStart(2, "0")} {results.length === 1 ? "result" : "results"}
            </p>
          </div>
        </div>

        {results.length === 0 ? (
          <div className="mt-16 border-t border-border py-24 text-center">
            <h2 className="font-display text-3xl text-foreground">No projects found.</h2>
            <p className="mt-4 text-sm text-muted-foreground">Try another search or category.</p>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setCategory("All");
              }}
              className="mt-8 border border-champagne px-6 py-3 text-xs uppercase tracking-[0.2em] text-champagne transition-colors hover:bg-champagne hover:text-metal-black"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="mt-16 space-y-20 lg:space-y-28">
            {blocks.map((block, bi) => (
              <div key={bi} className="space-y-20 lg:space-y-28">
                {block.rows.length ? (
                  <div className="grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
                    {block.rows.map((p, i) => (
                      <Reveal key={p.slug} variant="up" delay={(i % 3) * 110}>
                        <ProjectGridCard project={p} eager={bi === 0 && i === 0} index={bi * 4 + i} />
                      </Reveal>
                    ))}
                  </div>
                ) : null}
                {block.feature ? (
                  <Reveal variant="scale">
                    <FeatureProjectCard project={block.feature} />
                  </Reveal>
                ) : null}
              </div>
            ))}
          </div>
        )}
      </Section>

      <Section className="border-t border-border lg:py-24">
        <Reveal variant="up">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <p className="text-[0.62rem] uppercase tracking-[0.34em] text-champagne">03 — Programme</p>
              <h2 className="mt-5 font-display text-4xl leading-none text-foreground sm:text-5xl lg:text-6xl">
                SS Decorative Mesh &amp; Trim Line Programmes
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <article className="border border-border p-6">
                <p className="text-[0.6rem] uppercase tracking-[0.28em] text-champagne">SS Decorative Mesh</p>
                <h3 className="mt-4 font-display text-2xl text-foreground">Woven stainless steel mesh, PVD colour matched</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Custom framing systems for interior partitions, ceiling clouds and facade screens where acoustic transparency, light diffusion and a consistent architectural finish matter.
                </p>
              </article>
              <article className="border border-border p-6">
                <p className="text-[0.6rem] uppercase tracking-[0.28em] text-champagne">Trim Line Profiles</p>
                <h3 className="mt-4 font-display text-2xl text-foreground">Decorative stainless profiles, cut to site schedules</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Gold, black, bronze and rose PVD profiles for hospitality millwork, retail displays, elevator cabs and fast-track interior metalwork.
                </p>
              </article>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section className="border-t border-border lg:py-24">
        <Reveal variant="up">
          <div>
            <p className="text-[0.62rem] uppercase tracking-[0.34em] text-champagne">04 — Global footprint</p>
            <h2 className="mt-5 max-w-4xl font-display text-4xl leading-none text-foreground sm:text-5xl lg:text-6xl">
              STEELX Project Footprint: Where Our PVD Metal Transforms Spaces
            </h2>
            <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground lg:text-base">
              We engineer and install PVD-coated stainless steel solutions across key regions, adapting substrate, finish, fabrication and delivery strategy to the project environment.
            </p>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden border border-border bg-border lg:grid-cols-3">
            {footprint.map((item) => (
              <article key={item.region} className="bg-background p-7 lg:p-8">
                <p className="text-[0.62rem] uppercase tracking-[0.25em] text-champagne">{item.region}</p>
                <h3 className="mt-4 font-display text-2xl text-foreground">{item.places}</h3>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{item.examples}</p>
                <p className="mt-6 border-t border-border pt-5 text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground">{item.keywords}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section className="border-t border-border lg:py-24">
        <Reveal variant="up">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <p className="text-[0.62rem] uppercase tracking-[0.34em] text-champagne">05 — FAQ</p>
              <h2 className="mt-5 font-display text-4xl leading-none text-foreground sm:text-5xl lg:text-6xl">
                Frequently Asked Questions About PVD Metal for Architecture
              </h2>
            </div>
            <div className="divide-y divide-border border-y border-border">
              {faqs.map((faq) => (
                <details key={faq.question} className="group py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-8 font-display text-xl text-foreground [&::-webkit-details-marker]:hidden">
                    {faq.question}
                    <span className="text-champagne transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="max-w-3xl pt-4 text-sm leading-relaxed text-muted-foreground lg:text-base">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </Reveal>
      </Section>

      <Section className="pb-24 pt-10 lg:pb-32">
        <Reveal variant="scale">
          <div className="relative overflow-hidden border border-border bg-surface p-8 sm:p-12 lg:p-16">
            <div className="pointer-events-none absolute inset-0 tech-grid opacity-30" aria-hidden="true" />
            <div className="relative max-w-4xl">
              <p className="text-[0.62rem] uppercase tracking-[0.34em] text-champagne">Specify STEELX</p>
              <h2 className="mt-5 font-display text-4xl leading-none text-foreground sm:text-6xl lg:text-7xl">
                Bring the right surface into the specification.
              </h2>
              <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground lg:text-base">
                From custom bronze, champagne and gold PVD to gunmetal, black, decorative mesh and precision-fabricated architectural metalwork, STEELX supports the project from material selection through installation.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="/contact" className="border border-champagne bg-champagne-gradient px-6 py-3 text-[0.65rem] uppercase tracking-[0.2em] text-metal-black transition-transform hover:-translate-y-0.5">
                  Specify today
                </a>
                <a href="/contact" className="border border-border px-6 py-3 text-[0.65rem] uppercase tracking-[0.2em] text-foreground transition-colors hover:border-champagne hover:text-champagne">
                  Start a project
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>
    </PageShell>
  );
}
