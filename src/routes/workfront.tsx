import { createFileRoute } from "@tanstack/react-router";
import { ArrowDownRight, ArrowRight, Bot, Check, ClipboardList, Eye, Gauge, Layers3, Network, ShieldCheck, Sparkles, Users, Workflow } from "lucide-react";
import { PageShell, Section } from "@/components/page-shell";
import { Reveal, SectionHeading } from "@/components/reveal";

const title = "Workfront — Work management, workflow automation & AI | STEELX";
const description =
  "Explore Adobe Workfront: a governed work management platform for planning, project execution, resource management, workflow automation, review and approval, and AI-assisted work.";

export const Route = createFileRoute("/workfront")({
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
  component: WorkfrontPage,
});

const capabilities = [
  { icon: ClipboardList, number: "01", title: "Plan & intake", text: "Centralize work requests, capture requirements with custom forms, prioritize initiatives, and connect planning with execution." },
  { icon: Workflow, number: "02", title: "Automate workflows", text: "Standardize repeatable work with project templates, automated handoffs, sequential or parallel review stages, and no-code process automation." },
  { icon: Users, number: "03", title: "Manage resources", text: "Estimate capacity, allocate people and budgets, schedule work, and balance workloads across projects and teams." },
  { icon: Eye, number: "04", title: "Review & approve", text: "Bring feedback, proofing, versioning, approvals, and audit trails into collaborative digital workflows." },
  { icon: Gauge, number: "05", title: "Visibility & insights", text: "Turn project and work data into dashboards, reports, risk visibility, and actionable operational insight." },
  { icon: Bot, number: "06", title: "Work with AI agents", text: "Bring governed AI collaborators into Workfront so agents can execute work using shared project context while people retain oversight." },
];

const workflow = [
  { label: "REQUEST", detail: "Brief + requirements", icon: ClipboardList },
  { label: "PLAN", detail: "Scope + resources", icon: Layers3 },
  { label: "EXECUTE", detail: "Tasks + automation", icon: Workflow },
  { label: "REVIEW", detail: "Proof + approval", icon: Check },
  { label: "INSIGHT", detail: "Report + optimize", icon: Gauge },
];

const useCases = [
  "Enterprise project management",
  "Marketing operations",
  "Creative production",
  "Agency and client work",
  "Campaign planning",
  "Cross-functional collaboration",
];

function WorkfrontPage() {
  return (
    <PageShell overlayHeader>
      <section className="relative overflow-hidden border-b border-border bg-[#171714] text-[#f4f1e8]">
        <div className="absolute inset-0 opacity-60" style={{ background: "radial-gradient(circle at 72% 24%, rgba(201,169,110,.20), transparent 34%), radial-gradient(circle at 20% 70%, rgba(255,255,255,.07), transparent 32%)" }} />
        <div className="absolute right-[-10%] top-[-20%] h-[520px] w-[520px] rounded-full border border-[#c9a96e]/20" />
        <div className="absolute right-[5%] top-[8%] h-[330px] w-[330px] rounded-full border border-[#c9a96e]/15" />
        <div className="relative mx-auto grid min-h-[86vh] max-w-[1600px] items-end gap-12 px-4 pb-16 pt-36 sm:px-8 lg:grid-cols-[1.25fr_.75fr] lg:px-10 lg:pb-24">
          <div>
            <Reveal variant="text" as="p" className="text-[0.62rem] uppercase tracking-[0.42em] text-[#c9a96e]">STEELX / WORKFRONT</Reveal>
            <Reveal variant="up" delay={80}>
              <h1 className="mt-7 max-w-5xl font-display text-[3.4rem] leading-[.88] sm:text-7xl lg:text-[8.5rem]">WORK, <span className="text-[#c9a96e]">CONNECTED.</span></h1>
            </Reveal>
            <Reveal variant="up" delay={160}>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/65 lg:text-lg">Adobe Workfront brings planning, execution, collaboration, resources, approvals, insights, and governed AI into one work management system.</p>
            </Reveal>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="https://business.adobe.com/products/workfront.html" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-full bg-[#c9a96e] px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-black transition-transform hover:-translate-y-0.5">Explore Adobe Workfront <ArrowRight className="h-4 w-4" /></a>
              <a href="#capabilities" className="inline-flex items-center gap-3 rounded-full border border-white/15 px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/75 hover:border-[#c9a96e]/60 hover:text-white">See capabilities</a>
            </div>
          </div>
          <Reveal variant="up" delay={220} className="hidden lg:block">
            <div className="relative ml-auto max-w-md border border-white/10 bg-white/[.035] p-5 backdrop-blur-sm">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-[0.58rem] uppercase tracking-[0.3em] text-white/40">WORKFRONT / LIVE WORK</span>
                <span className="h-2 w-2 rounded-full bg-[#c9a96e]" />
              </div>
              <div className="space-y-3 py-5">
                {workflow.slice(0, 4).map((item, i) => {
                  const Icon = item.icon;
                  return <div key={item.label} className="flex items-center gap-4 border border-white/8 bg-black/10 p-3"><div className="grid h-9 w-9 place-items-center border border-[#c9a96e]/25 text-[#c9a96e]"><Icon className="h-4 w-4" /></div><div className="min-w-0"><p className="text-[0.6rem] tracking-[0.22em] text-white/35">0{i + 1} / {item.label}</p><p className="mt-1 text-sm text-white/80">{item.detail}</p></div><ArrowDownRight className="ml-auto h-4 w-4 text-white/20" /></div>;
                })}
              </div>
              <div className="border-t border-white/10 pt-4 text-[0.58rem] uppercase tracking-[0.24em] text-white/35">One governed system / many teams / one source of work</div>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="border-b border-border bg-surface py-4 overflow-hidden">
        <div className="mx-auto flex max-w-[1600px] min-w-max gap-10 px-4 text-[0.58rem] uppercase tracking-[0.3em] text-muted-foreground sm:px-8 lg:px-10">{["Planning", "Project management", "Resource management", "Automation", "Proofing", "Approvals", "Dashboards", "AI collaborators"].map((item) => <span key={item}>● {item}</span>)}</div>
      </div>

      <Section id="capabilities" className="border-b border-border">
        <SectionHeading eyebrow="What Workfront provides" title="From request to result." />
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground lg:text-base">Workfront is designed to give organizations a shared system for getting work into the pipeline, assigning it, executing it, reviewing it, and understanding what happened. Its value is less about another task list and more about connecting the whole operating workflow.</p>
        <div className="mt-14 grid gap-px border-l border-t border-border md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item, i) => { const Icon = item.icon; return <Reveal key={item.number} variant="up" delay={(i % 3) * 80} className="group min-h-[280px] border-b border-r border-border p-7 transition-colors hover:bg-surface sm:p-9"><div className="flex items-start justify-between"><div className="grid h-11 w-11 place-items-center border border-border text-gold transition-colors group-hover:border-gold"><Icon className="h-5 w-5" /></div><span className="font-display text-2xl text-muted-foreground/30">{item.number}</span></div><h3 className="mt-14 font-display text-2xl text-foreground">{item.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p></Reveal>; })}
        </div>
      </Section>

      <Section className="border-b border-border bg-[#181816] text-[#f4f1e8]">
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div><SectionHeading eyebrow="How it works" title="A connected work lifecycle." /><p className="mt-6 max-w-md text-sm leading-relaxed text-white/55">Workfront connects the stages that often live in separate spreadsheets, email threads, project tools, review platforms, and reporting systems.</p></div>
          <div className="relative"><div className="absolute left-6 right-6 top-8 hidden h-px bg-white/10 lg:block" /><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{workflow.map((item, i) => { const Icon = item.icon; return <Reveal key={item.label} variant="up" delay={i * 70}><div className="relative border border-white/10 bg-white/[.025] p-5"><div className="grid h-12 w-12 place-items-center rounded-full border border-[#c9a96e]/30 bg-[#181816] text-[#c9a96e]"><Icon className="h-5 w-5" /></div><p className="mt-7 text-[0.58rem] uppercase tracking-[0.24em] text-[#c9a96e]">{item.label}</p><p className="mt-2 text-sm text-white/65">{item.detail}</p></div></Reveal>; })}</div></div>
        </div>
      </Section>

      <Section className="border-b border-border">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-24">
          <div><SectionHeading eyebrow="AI, with governance" title="Human direction. Agent execution." /><p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">Adobe’s current Workfront direction brings people and AI agents into the same governed work system. AI Collaborators can be assigned work like team members, using shared project and campaign context while permissions, oversight, and auditability remain part of the workflow.</p><div className="mt-8 grid gap-3 sm:grid-cols-2"><div className="border border-border p-5"><ShieldCheck className="h-5 w-5 text-gold" /><p className="mt-4 font-display text-lg text-foreground">Governed access</p><p className="mt-2 text-xs leading-relaxed text-muted-foreground">Agent activity follows existing permissions and can be logged for accountability.</p></div><div className="border border-border p-5"><Sparkles className="h-5 w-5 text-gold" /><p className="mt-4 font-display text-lg text-foreground">Shared context</p><p className="mt-2 text-xs leading-relaxed text-muted-foreground">Agents can work from project, timeline, campaign, and workflow context.</p></div></div></div>
          <div className="border border-border bg-surface p-6 sm:p-9"><div className="flex items-center justify-between border-b border-border pb-5"><span className="text-[0.58rem] uppercase tracking-[0.28em] text-muted-foreground">AI collaborator / task handoff</span><Bot className="h-5 w-5 text-gold" /></div><div className="space-y-0 pt-2">{["Human creates brief", "Workfront routes the task", "AI collaborator executes", "Human reviews output", "Action is logged"].map((step, i) => <div key={step} className="flex items-center gap-4 border-b border-border py-5 last:border-b-0"><span className="font-display text-xl text-gold">0{i + 1}</span><span className="text-sm text-foreground">{step}</span><Check className="ml-auto h-4 w-4 text-muted-foreground" /></div>)}</div></div>
        </div>
      </Section>

      <Section className="border-b border-border">
        <div className="grid gap-14 lg:grid-cols-[1fr_.9fr]">
          <div><SectionHeading eyebrow="Where it fits" title="Built for complex organizations." /><p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">Workfront is positioned for teams that have multiple stakeholders, high work volume, dependencies, approvals, resource constraints, and a need for visibility across the organization.</p><div className="mt-8 grid gap-2 sm:grid-cols-2">{useCases.map((item) => <div key={item} className="flex items-center gap-3 border-b border-border py-4 text-sm text-foreground"><span className="h-1.5 w-1.5 rounded-full bg-gold" />{item}</div>)}</div></div>
          <div className="border border-border p-7 sm:p-9"><div className="flex items-center gap-3 text-gold"><Network className="h-5 w-5" /><span className="text-[0.6rem] uppercase tracking-[0.28em]">Adobe ecosystem</span></div><h3 className="mt-8 font-display text-3xl text-foreground">Connect the work stack.</h3><p className="mt-4 text-sm leading-relaxed text-muted-foreground">Adobe highlights integrations with Experience Manager, Frame.io for Business, Creative Cloud for enterprise, Adobe Express, and GenStudio for Performance Marketing — helping teams connect work management with content and experience workflows.</p><div className="mt-8 flex flex-wrap gap-2">{["Experience Manager", "Frame.io", "Creative Cloud", "Adobe Express", "GenStudio"].map((item) => <span key={item} className="border border-border px-3 py-2 text-[0.58rem] uppercase tracking-[0.14em] text-muted-foreground">{item}</span>)}</div></div>
        </div>
      </Section>

      <section className="border-b border-border bg-gold-gradient px-4 py-20 sm:px-8 lg:px-10 lg:py-28"><div className="mx-auto flex max-w-[1600px] flex-col justify-between gap-10 lg:flex-row lg:items-end"><div><p className="text-[0.6rem] uppercase tracking-[0.35em] text-primary-foreground/65">Workfront / Adobe</p><h2 className="mt-5 max-w-4xl font-display text-5xl leading-[.92] text-primary-foreground sm:text-7xl">A system for the work behind the work.</h2></div><a href="https://business.adobe.com/products/workfront.html" target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center gap-3 rounded-full bg-primary-foreground px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-foreground hover:opacity-90">Visit Adobe Workfront <ArrowRight className="h-4 w-4" /></a></div></section>
    </PageShell>
  );
}
