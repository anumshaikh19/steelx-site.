import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Check, X } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { Reveal } from "@/components/reveal";
import { getJournalPost, relatedJournalPosts } from "@/data/journalData";

export const Route = createFileRoute("/journal/$slug")({
  loader: ({ params }) => {
    const post = getJournalPost(params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Article unavailable" }, { name: "robots", content: "noindex" }] };
    const canonical = `https://steelxdecor.com/journal/${loaderData.slug}`;
    return {
      meta: [
        { title: loaderData.metaTitle },
        { name: "description", content: loaderData.metaDescription },
        { name: "robots", content: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" },
        { name: "author", content: "SteelX Decor" },
        { property: "og:title", content: loaderData.metaTitle },
        { property: "og:description", content: loaderData.metaDescription },
        { property: "og:type", content: "article" },
        { property: "og:url", content: canonical },
        { property: "og:image", content: loaderData.hero },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: loaderData.metaTitle },
        { name: "twitter:description", content: loaderData.metaDescription },
        { name: "twitter:image", content: loaderData.hero },
      ],
      links: [{ rel: "canonical", href: canonical }],
    };
  },
  component: ArticlePage,
});

type Block = { kind: "tldr"|"table"|"proscons"|"steps"|"formula"|"quick"|"tools"|"dosdonts"|"diy"|"gallery"|"listicle"|"quote"|"feature"|"checklist"|"timeline"|"pricing"|"map"; title?:string };

function strategyBlocks(strategy: string, slug: string): Block[] {
  if (slug === "ss-304-vs-mild-steel-partitions") return [];
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
  const base = "mt-12 border border-border bg-surface/30 p-6 sm:p-8";
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
  if (block.kind === "gallery") return <div className={base}><h3 className="font-display text-2xl">{block.title}</h3><div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3">{["1600607687939-ce8a6c25118c","1600607687920-4e2a09cf159d","1600210492486-724fe5c67fb0","1600607688969-a5bfcd646154","1618221195710-dd6b41faaea6","1600566753190-17f0baa2a6c3"].map(id=><img key={id} src={`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1000&q=82`} alt="Architectural mesh design" className="aspect-square w-full object-cover" loading="lazy" />)}</div></div>;
  if (block.kind === "listicle") return <div className={base}><h3 className="font-display text-2xl">{block.title}</h3><ol className="mt-6 space-y-5">{["Antique bronze for warm hospitality interiors","Champagne PVD for understated luxury","Mirror finish where controlled reflection is intentional","Dark finishes for contrast with stone and timber","Fine mesh apertures for privacy without visual closure"].map((x,i)=><li key={x} className="flex gap-4 text-sm leading-7 text-muted-foreground"><strong className="font-display text-xl text-champagne">{i+1}.</strong>{x}</li>)}</ol></div>;
  if (block.kind === "quote") return <div className={base}><blockquote className="border-l-2 border-champagne pl-6 font-display text-2xl leading-snug text-foreground">Design principle: use mesh to control sightlines, light and airflow without making a space feel closed.</blockquote></div>;
  return null;
}

function ArticleContent({ html }: { html: string }) {
  return <div className="journal-content" dangerouslySetInnerHTML={{ __html: html }} />;
}

function ArticlePage() {
  const post = Route.useLoaderData();
  const related = relatedJournalPosts(post.slug);
  const blocks = strategyBlocks(post.aiRankingStrategy, post.slug);
  return <PageShell>
    <article>
      <style>{`.journal-content{color:hsl(var(--muted-foreground));font-size:1.02rem;line-height:1.9}.journal-content p{margin:1.25rem 0}.journal-content h2{margin:3.4rem 0 1rem;color:hsl(var(--foreground));font-family:var(--font-display);font-size:clamp(1.65rem,3vw,2.45rem);line-height:1.15;letter-spacing:-.02em}.journal-content h3{margin:2.2rem 0 .65rem;color:hsl(var(--foreground));font-family:var(--font-display);font-size:1.25rem;line-height:1.3}.journal-content strong{color:hsl(var(--foreground));font-weight:650}.journal-content ul,.journal-content ol{margin:1.25rem 0;padding-left:1.35rem}.journal-content li{margin:.65rem 0;padding-left:.25rem}.journal-content ul li::marker,.journal-content ol li::marker{color:hsl(var(--champagne))}.journal-callout{margin:2rem 0;padding:1.35rem 1.5rem;border:1px solid hsl(var(--border));border-left:3px solid hsl(var(--champagne));background:linear-gradient(135deg,hsl(var(--surface)/.72),hsl(var(--background)/.55));box-shadow:0 18px 50px rgba(0,0,0,.08);border-radius:.35rem;color:hsl(var(--foreground))}.journal-callout strong{color:hsl(var(--champagne))}.journal-table-wrap{margin:2rem 0;overflow-x:auto;border:1px solid hsl(var(--border));background:hsl(var(--surface)/.35);box-shadow:0 24px 70px rgba(0,0,0,.08)}.journal-table{width:100%;min-width:720px;border-collapse:collapse;text-align:left;font-size:.9rem}.journal-table th,.journal-table td{padding:1rem 1.1rem;border-bottom:1px solid hsl(var(--border)/.75);vertical-align:top}.journal-table thead th{background:hsl(var(--foreground));color:hsl(var(--background));font-size:.68rem;text-transform:uppercase;letter-spacing:.16em;font-weight:600}.journal-table thead th:not(:first-child){color:hsl(var(--champagne))}.journal-table tbody th{color:hsl(var(--foreground));font-weight:600}.journal-table tbody tr:last-child th,.journal-table tbody tr:last-child td{border-bottom:0}.journal-table tbody tr:hover{background:hsl(var(--surface)/.65)}`}</style>
      <header className="mx-auto max-w-[1100px] px-4 pb-10 pt-28 sm:px-8 lg:pt-40">
        <Reveal variant="text" as="p" className="text-[0.62rem] uppercase tracking-[0.36em] text-champagne">{post.category}</Reveal>
        <Reveal variant="text" as="h1" className="mt-5 max-w-[980px] font-display text-[clamp(2.5rem,6vw,5.8rem)] leading-[.94] tracking-[-.045em] text-foreground">{post.title}</Reveal>
        <p className="mt-6 max-w-[720px] text-sm leading-7 text-muted-foreground">{post.metaDescription}</p>
        <div className="mt-7 flex items-center gap-5 text-[0.62rem] uppercase tracking-[0.2em] text-muted-foreground"><span>SteelX Decor Journal</span><span className="h-px w-8 bg-border"/><span>{post.date}</span></div>
      </header>

      <div className="mx-auto max-w-[1320px] px-4 sm:px-8"><div className="aspect-[2.15/1] overflow-hidden"><img src={post.hero} alt={post.heroAlt} className="h-full w-full object-cover" fetchPriority="high" /></div></div>

      <div className="mx-auto grid max-w-[1100px] gap-12 px-4 py-16 sm:px-8 lg:grid-cols-[1fr_250px] lg:py-24">
        <main>
          {post.content ? <ArticleContent html={post.content}/> : <><p className="text-lg leading-8 text-foreground">A considered guide to architectural metal, material specification and premium interior applications from SteelX Decor.</p><p className="mt-6 text-base leading-8 text-muted-foreground">This editorial is being expanded with technical guidance, project considerations and practical specification notes for architects, designers, fabricators and procurement teams.</p></>}
          {blocks.map((block, i) => <RichBlock key={`${block.kind}-${i}`} block={block} />)}
        </main>
        <aside className="hidden lg:block"><div className="sticky top-28 border-l border-border pl-6"><p className="text-[0.6rem] uppercase tracking-[0.25em] text-champagne">On this page</p><p className="mt-4 text-sm leading-6 text-muted-foreground">Material selection, fabrication considerations, finish performance and architectural applications.</p></div></aside>
      </div>

      <section className="border-t border-border"><div className="mx-auto max-w-[1100px] px-4 py-16 sm:px-8 lg:py-24"><div className="flex items-end justify-between gap-6"><div><p className="text-[0.6rem] uppercase tracking-[0.3em] text-champagne">Continue reading</p><h2 className="mt-3 font-display text-3xl text-foreground">More from the Journal</h2></div><Link to="/journal" className="hidden items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground sm:flex">All articles <ArrowUpRight className="h-4 w-4"/></Link></div><div className="mt-10 grid gap-5 md:grid-cols-3">{related.map(item=><Link key={item.slug} to="/journal/$slug" params={{slug:item.slug}} className="group border border-border bg-surface/20 p-5 transition-transform duration-500 hover:-translate-y-1"><div className="aspect-[1.45/1] overflow-hidden"><img src={item.hero} alt={item.heroAlt} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy"/></div><p className="mt-5 text-[0.58rem] uppercase tracking-[0.2em] text-champagne">{item.category}</p><h3 className="mt-2 font-display text-xl leading-tight text-foreground">{item.title}</h3><span className="mt-5 inline-flex items-center gap-2 text-[0.6rem] uppercase tracking-[0.18em] text-muted-foreground">Read article <ArrowUpRight className="h-3.5 w-3.5"/></span></Link>)}</div></div></section>
    </article>
  </PageShell>;
}
