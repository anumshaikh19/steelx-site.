import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Check, X } from "lucide-react";
import { PageShell, Section } from "@/components/page-shell";
import { Reveal } from "@/components/reveal";
import { ClipReveal, Parallax } from "@/components/motion";
import { getJournalPost, relatedJournalPosts } from "@/data/journalData";

export const Route = createFileRoute("/journal/$slug")({
  loader: ({ params }) => {
    const post = getJournalPost(params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Article unavailable" }, { name: "robots", content: "noindex" }] };
    return {
      meta: [
        { title: loaderData.metaTitle },
        { name: "description", content: loaderData.metaDescription },
        { name: "robots", content: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" },
        { name: "author", content: "SteelX Decor" },
        { property: "og:title", content: loaderData.metaTitle },
        { property: "og:description", content: loaderData.metaDescription },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `https://steelxdecor.com/journal/${loaderData.slug}` },
        { property: "og:image", content: loaderData.hero },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: loaderData.metaTitle },
        { name: "twitter:description", content: loaderData.metaDescription },
        { name: "twitter:image", content: loaderData.hero },
      ],
      links: [{ rel: "canonical", href: `https://steelxdecor.com/journal/${loaderData.slug}` }],
    };
  },
  component: ArticlePage,
});

type Block = { kind: "tldr"|"table"|"proscons"|"steps"|"formula"|"quick"|"tools"|"dosdonts"|"diy"|"gallery"|"listicle"|"quote"|"feature"|"checklist"|"timeline"|"pricing"|"map"; title?:string };

function strategyBlocks(strategy: string, slug: string): Block[] {
  if (slug === "ss-304-vs-mild-steel-partitions") return [{kind:"tldr",title:"TL;DR"},{kind:"table",title:"SS 304 vs Mild Steel — comparison matrix"}];
  const blocks: Block[] = [];
  if (/Pros and Cons/i.test(strategy)) blocks.push({kind:"proscons",title:"Pros and Cons"});
  if (/Step-by-step|Step-by-Step/i.test(strategy)) blocks.push({kind:"steps",title:"Step-by-Step"});
  if (/formula/i.test(strategy)) blocks.push({kind:"formula",title:"Calculation formula"});
  if (/calculation table/i.test(strategy)) blocks.push({kind:"table",title:"Calculation example"});
  if (/Quick Answer/i.test(strategy)) blocks.push({kind:"quick",title:"Quick Answer"});
  if (/Tool Checklist/i.test(strategy)) blocks.push({kind:"tools",title:"Tool Checklist"});
  if (/track system diagram|video embed/i.test(strategy)) blocks.push({kind:"feature",title:"Track system diagram / video"});
  if (/Do's and Don'ts/i.test(strategy)) blocks.push({kind:"dosdonts",title:"Do's and Don'ts"});
  if (/3 highlighted DIY/i.test(strategy)) blocks.push({kind:"diy",title:"Three DIY solutions"});
  if (/Image Gallery/i.test(strategy)) blocks.push({kind:"gallery",title:"Visual gallery"});
  if (/Listicle/i.test(strategy)) blocks.push({kind:"listicle",title:"Design ideas"});
  if (/blockquote/i.test(strategy)) blocks.push({kind:"quote",title:"Design principles"});
  if (/full-width feature/i.test(strategy)) blocks.push({kind:"feature",title:"Featured project image"});
  if (/Airflow, Privacy/i.test(strategy)) blocks.push({kind:"table",title:"Mesh vs glass — comparison matrix"});
  if (/Design Tricks/i.test(strategy)) blocks.push({kind:"listicle",title:"Design Tricks"});
  if (/B2B Buyer's Checklist/i.test(strategy)) blocks.push({kind:"checklist",title:"B2B Buyer's Checklist"});
  if (/Timeline \/ Lead Time/i.test(strategy)) blocks.push({kind:"timeline",title:"Indicative project timeline"});
  if (/pricing formula/i.test(strategy)) blocks.push({kind:"pricing",title:"Pricing formula"});
  if (/local map/i.test(strategy)) blocks.push({kind:"map",title:"Maharashtra sourcing map"});
  return blocks.length ? blocks : [{kind:"tldr",title:"Quick answer"}];
}

function RichBlock({ block }: { block: Block }) {
  const base = "mt-10 border border-border bg-surface/30 p-6 sm:p-8";
  if (block.kind === "tldr" || block.kind === "quick") return <aside className={`${base} border-l-2 border-l-champagne`} aria-label={block.title}><p className="text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-champagne">{block.title}</p><p className="mt-4 text-lg font-medium leading-relaxed text-foreground"><strong>{block.kind === "quick" ? "Quick answer: " : "In short: "}</strong>For decorative architectural partitions, SS 304 is generally the stronger specification when corrosion resistance, long service life and a premium PVD finish are priorities.</p></aside>;
  if (block.kind === "table") return <div className={`${base} overflow-x-auto`}><h3 className="font-display text-2xl text-foreground">{block.title}</h3><table className="mt-6 w-full min-w-[620px] border-collapse text-left text-sm"><thead><tr className="border-b border-border"><th className="p-3 text-[0.6rem] uppercase tracking-[0.18em] text-muted-foreground">Criteria</th><th className="p-3 text-[0.6rem] uppercase tracking-[0.18em] text-champagne">SS 304</th><th className="p-3 text-[0.6rem] uppercase tracking-[0.18em] text-muted-foreground">Mild Steel</th></tr></thead><tbody>{[["Corrosion resistance","High","Low without protective coating"],["Typical architectural lifespan","Long","Depends strongly on coating/maintenance"],["PVD compatibility","Excellent","Not a stainless-steel substrate"],["Maintenance","Low","Higher where corrosion protection is exposed"],["Premium decorative finish","Consistent PVD-ready surface","Paint/powder systems commonly used"]].map(r=><tr key={r[0]} className="border-b border-border/70"><th className="p-3 font-medium text-foreground">{r[0]}</th><td className="p-3 text-muted-foreground">{r[1]}</td><td className="p-3 text-muted-foreground">{r[2]}</td></tr>)}</tbody></table></div>;
  if (block.kind === "proscons") return <div className={`${base} grid gap-8 sm:grid-cols-2`}><div><h3 className="font-display text-2xl">Pros</h3><ul className="mt-5 space-y-3 text-sm text-muted-foreground"><li className="flex gap-3"><Check className="mt-0.5 h-4 w-4 text-champagne"/>Strong corrosion resistance</li><li className="flex gap-3"><Check className="mt-0.5 h-4 w-4 text-champagne"/>Broad architectural availability</li><li className="flex gap-3"><Check className="mt-0.5 h-4 w-4 text-champagne"/>Excellent decorative finish base</li></ul></div><div><h3 className="font-display text-2xl">Cons</h3><ul className="mt-5 space-y-3 text-sm text-muted-foreground"><li className="flex gap-3"><X className="mt-0.5 h-4 w-4"/>Higher material cost than mild steel</li><li className="flex gap-3"><X className="mt-0.5 h-4 w-4"/>316 may be preferred in chloride-heavy environments</li></ul></div></div>;
  if (block.kind === "steps") return <div className={base}><h3 className="font-display text-2xl">{block.title}</h3><ol className="mt-6 space-y-5">{["Define the substrate, mesh geometry and required finish.","Prepare and clean the stainless surface to the specified standard.","Form, frame or fabricate the component before final finishing where practical.","Run the PVD process using the approved colour target and control sample.","Inspect, protect and install without contaminating the finished surface."].map((x,i)=><li key={x} className="flex gap-5 text-sm leading-7 text-muted-foreground"><span className="font-display text-xl text-champagne">{String(i+1).padStart(2,"0")}</span><span>{x}</span></li>)}</ol></div>;
  if (block.kind === "formula") return <div className={base}><h3 className="font-display text-2xl">{block.title}</h3><div className="mt-5 border border-champagne/30 bg-background p-5 font-mono text-sm text-champagne">Open Area % = (Open Area ÷ Total Mesh Area) × 100</div><p className="mt-4 text-sm leading-7 text-muted-foreground">For regular woven mesh, calculate the open area from the clear aperture and pitch in both directions, then validate the result against the manufacturer's technical data.</p></div>;
  if (block.kind === "tools" || block.kind === "checklist") return <div className={base}><h3 className="font-display text-2xl">{block.title}</h3><ul className="mt-5 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">{["Approved cutting tool","Fine abrasive/deburring tool","Measuring tape and straightedge","Protective gloves and eye protection","Clean lint-free cloths","Approved installation drawings"].map(x=><li key={x} className="flex gap-3 border-b border-border pb-3"><Check className="h-4 w-4 text-champagne"/>{x}</li>)}</ul></div>;
  if (block.kind === "dosdonts") return <div className={`${base} grid gap-px border-0 bg-border p-0 sm:grid-cols-2`}><div className="bg-surface p-6"><h3 className="font-display text-2xl">Do</h3><ul className="mt-5 space-y-3 text-sm text-muted-foreground"><li>Use a soft cloth and neutral cleaner.</li><li>Rinse residue and dry the surface.</li><li>Follow the finish grain.</li></ul></div><div className="bg-surface p-6"><h3 className="font-display text-2xl">Don't</h3><ul className="mt-5 space-y-3 text-sm text-muted-foreground"><li>Use chlorine or abrasive pads.</li><li>Leave cleaner to dry on PVD.</li><li>Scrub across a directional finish.</li></ul></div></div>;
  if (block.kind === "diy") return <div className={base}><h3 className="font-display text-2xl">{block.title}</h3><div className="mt-6 grid gap-4 md:grid-cols-3">{["Microfiber + neutral cleaner","Warm water + dry wipe","Diluted mild soap + rinse"].map((x,i)=><div key={x} className="border border-border p-5"><p className="text-[0.6rem] uppercase tracking-[0.2em] text-champagne">Solution 0{i+1}</p><p className="mt-3 text-sm leading-6 text-muted-foreground">{x}. Test on an inconspicuous area first.</p></div>)}</div></div>;
  if (block.kind === "timeline") return <div className={`${base} overflow-x-auto`}><h3 className="font-display text-2xl">{block.title}</h3><table className="mt-6 w-full min-w-[600px] text-sm"><tbody>{[["Brief + drawings","1–3 days"],["Sample / finish approval","3–10 days"],["Fabrication","1–4 weeks"],["PVD + quality control","3–10 working days"],["Packing + dispatch","2–7 days"]].map(r=><tr key={r[0]} className="border-b border-border"><th className="p-4 text-left font-medium">{r[0]}</th><td className="p-4 text-right text-champagne">{r[1]}</td></tr>)}</tbody></table></div>;
  if (block.kind === "pricing") return <div className={`${base} border-l-2 border-l-champagne`}><h3 className="font-display text-2xl">{block.title}</h3><p className="mt-5 font-mono text-sm text-champagne">Estimated price = material + mesh fabrication + PVD finish + framing + packing + logistics</p><p className="mt-4 text-sm leading-7 text-muted-foreground">Actual pricing depends on grade, wire diameter, weave, panel size, finish, quantity, tolerances and project logistics. Request a project-specific quotation rather than relying on a generic per-square-foot number.</p></div>;
  if (block.kind === "map") return <div className={`${base} min-h-[260px]`}><h3 className="font-display text-2xl">{block.title}</h3><div className="mt-6 flex min-h-[150px] items-center justify-center border border-dashed border-border text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">Map / supplier verification placeholder</div></div>;
  if (block.kind === "feature") return <div className={base}><h3 className="font-display text-2xl">{block.title}</h3><div className="mt-6 aspect-[21/8] overflow-hidden"><img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=88" alt="Architectural metal feature" className="h-full w-full object-cover" /></div></div>;
  if (block.kind === "gallery") return <div className={base}><h3 className="font-display text-2xl">{block.title}</h3><div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3">{[0,1,2,3,4,5].map(i=><img key={i} src={`https://images.unsplash.com/photo-${["1600607687939-ce8a6c25118c","1600607687920-4e2a09cf159d","1600210492486-724fe5c67fb0","1600607688969-a5bfcd646154","1618221195710-dd6b41faaea6","1600566753190-17f0baa2a6c3"][i]}?auto=format&fit=crop&w=1000&q=82`} alt="Architectural mesh design" className="aspect-square w-full object-cover" loading="lazy" />)}</div></div>;
  if (block.kind === "listicle") return <div className={base}><h3 className="font-display text-2xl">{block.title}</h3><ol className="mt-6 space-y-5">{["Antique bronze for warm hospitality interiors","Champagne PVD for understated luxury","Mirror finish where controlled reflection is intentional","Dark finishes for contrast with stone and timber","Fine mesh apertures for privacy without visual closure"].map((x,i)=><li key={x} className="flex gap-4 text-sm leading-7 text-muted-foreground"><strong className="font-display text-xl text-champagne">{i+1}.</strong>{x}</li>)}</ol></div>;
  if (block.kind === "quote") return <div className={base}><blockquote className="border-l-2 border-champagne pl-6 font-display text-2xl leading-snug text-foreground">Design principle: use mesh to control sightlines, light and airflow without making a space feel closed.</blockquote></div>;
  return null;
}

function ArticlePage() {
  const post = Route.useLoaderData();
  const related = relatedJournalPosts(post.slug);
  const blocks = strategyBlocks(post.aiRankingStrategy, post.slug);
  return <PageShell>
    <article>
      <header className="mx-auto max-w-[1100px] px-4 pb-10 pt-28 sm:px-8 lg:pt-40">
        <Reveal variant="text" as="p" className="text-[0.62rem] uppercase tracking-[0.36em] text-champagne">{post.category} · SteelX Journal</Reveal>
        <Reveal variant="up" delay={80}><h1 className="mt-6 font-display text-[2.4rem] leading-[1.02] text-foreground sm:text-5xl lg:text-7xl">{post.title}</h1></Reveal>
        <Reveal variant="up" delay={140}><p className="mt-7 max-w-3xl text-base leading-8 text-muted-foreground">{post.metaDescription}</p></Reveal>
      </header>
      <ClipReveal className="mx-auto max-w-[1400px] px-4 sm:px-8"><Parallax className="aspect-[16/9] w-full border border-border" amount={50}><img src={post.hero} alt={post.heroAlt} className="h-full w-full object-cover" /></Parallax></ClipReveal>
      <div className="mx-auto max-w-[800px] px-4 py-14 sm:px-8 lg:py-24">
        {post.slug === "ss-304-vs-mild-steel-partitions" ? <RichBlock block={{kind:"tldr",title:"TL;DR"}} /> : null}
        <section className="prose-steelx mt-10"><Reveal variant="up"><p className="font-display text-2xl leading-snug text-foreground lg:text-3xl">{introFor(post.title)}</p></Reveal><Reveal variant="up" delay={80}><p className="mt-6 text-base leading-[1.9] text-muted-foreground">For architects and interior designers, the useful answer is not just which material looks better on a sample. The specification has to account for environment, fabrication, maintenance, finish consistency and the way the surface will be experienced after installation.</p></Reveal></section>
        {blocks.filter(b=>!(post.slug === "ss-304-vs-mild-steel-partitions" && b.kind === "tldr")).map((b,i)=><Reveal key={`${b.kind}-${i}`} variant="up" delay={i*60}><RichBlock block={b}/></Reveal>)}
        <section className="mt-16 border-t border-border pt-10"><h2 className="font-display text-3xl">Key takeaway</h2><p className="mt-5 text-base leading-[1.9] text-muted-foreground">{post.metaDescription} Use approved samples, project drawings and supplier technical data before final specification.</p></section>
        <Link to="/journal" className="mt-14 inline-flex items-center gap-2 text-[0.66rem] uppercase tracking-[0.22em] text-champagne"><ArrowLeft className="h-4 w-4"/> All articles</Link>
      </div>
    </article>
    <Section className="border-t border-border"><p className="text-[0.62rem] uppercase tracking-[0.34em] text-champagne">Keep reading</p><div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">{related.map(p=><Link key={p.slug} to="/journal/$slug" params={{slug:p.slug}} className="group"><div className="aspect-[4/3] overflow-hidden border border-border"><img src={p.hero} alt={p.heroAlt} loading="lazy" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"/></div><h3 className="mt-4 font-display text-xl leading-snug group-hover:text-champagne">{p.title}</h3><p className="mt-2 text-[0.58rem] uppercase tracking-[0.2em] text-muted-foreground">{p.category}</p></Link>)}</div></Section>
    <Section className="border-t border-border text-center"><h2 className="font-display text-4xl sm:text-5xl">Need a material specification?</h2><Link to="/contact" className="mt-8 inline-flex items-center gap-2 bg-champagne-gradient px-8 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-metal-black">Talk to SteelX <ArrowUpRight className="h-4 w-4"/></Link></Section>
  </PageShell>;
}

function introFor(title:string) { return `A practical guide to ${title.toLowerCase()}, with the material, fabrication and specification decisions that matter on real architectural projects.`; }
