import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Bot, CalendarDays, Check, ChevronDown, FileCheck2, Gauge, Layers3, Network, Play, Sparkles, Users, Workflow } from "lucide-react";
import { PageShell, Section } from "@/components/page-shell";
import { Reveal, SectionHeading } from "@/components/reveal";

const title = "Workfront — Connected work management | STEELX";
const description = "A premium STEELX product experience inspired by the information architecture and interaction patterns of Adobe Workfront: planning, execution, automation, review, insights and AI-enabled work.";

export const Route = createFileRoute("/workfront")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
    ],
  }),
  component: WorkfrontPage,
});

const features = [
  { id: "ai", label: "AI collaborators", icon: Bot, title: "Human-directed. Agent executed.", text: "Bring people and AI into one governed workflow. Assign preparation, validation and repeatable tasks to AI while people stay focused on decisions, review and creative direction.", points: ["Assign work to AI collaborators", "Shared project and campaign context", "Human review and approval", "Governed actions and visibility"] },
  { id: "plan", label: "Intelligent planning", icon: CalendarDays, title: "Plan with the whole picture.", text: "Connect strategy, campaigns, timelines and execution so teams can see what is planned, what is moving and what needs attention.", points: ["Calendar and timeline views", "Role-based visibility", "Planning-to-execution connection", "Capacity-aware decisions"] },
  { id: "centralize", label: "Centralize work", icon: Layers3, title: "One place for every request.", text: "Turn fragmented requests, spreadsheets and conversations into a structured system for getting work into the right hands.", points: ["Centralized intake", "Custom forms and briefs", "Agile and hybrid work", "Cross-team collaboration"] },
  { id: "automate", label: "Automate", icon: Workflow, title: "Make work move itself.", text: "Standardize repeatable processes and automate handoffs so work keeps moving without constant manual coordination.", points: ["Reusable project templates", "Sequential and parallel approvals", "No-code process automation", "AI-assisted brief creation"] },
  { id: "review", label: "Review & approve", icon: FileCheck2, title: "Shorten the feedback loop.", text: "Bring stakeholders into a clear review path with versions, comments, approvals and accountability built into the work.", points: ["Proofing and annotations", "Approval stages", "Version visibility", "Audit-ready history"] },
  { id: "insights", label: "Visibility & insights", icon: Gauge, title: "See what is really happening.", text: "Turn work data into operational visibility with dashboards, progress signals, risk awareness and reporting that supports better decisions.", points: ["Live dashboards", "Project health visibility", "Custom reporting", "Data export and BI readiness"] },
];

const useCases = ["Enterprise project management", "Marketing operations", "Creative production", "Agency and client work", "Campaign planning", "Cross-functional collaboration"];

function WorkfrontPage() {
  const [active, setActive] = useState("ai");
  const feature = features.find((item) => item.id === active) ?? features[0];

  return (
    <PageShell overlayHeader>
      {/* Product hero */}
      <section className="relative overflow-hidden border-b border-[#262522] bg-[#151513] text-[#f7f5ee]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(201,169,110,.20),transparent_28%),radial-gradient(circle_at_18%_80%,rgba(255,255,255,.06),transparent_28%)]" />
        <div className="absolute -right-40 -top-40 h-[620px] w-[620px] rounded-full border border-[#c9a96e]/15" />
        <div className="absolute right-20 top-24 h-[360px] w-[360px] rounded-full border border-[#c9a96e]/10" />
        <div className="relative mx-auto grid min-h-[90vh] max-w-[1600px] items-end gap-12 px-4 pb-16 pt-40 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:px-10 lg:pb-24">
          <div>
            <Reveal variant="text" as="p" className="text-[0.62rem] uppercase tracking-[0.42em] text-[#c9a96e]">STEELX / WORKFRONT</Reveal>
            <Reveal variant="up" delay={80}><h1 className="mt-7 max-w-5xl font-display text-[3.4rem] leading-[.86] sm:text-7xl lg:text-[8.6rem]">WHERE WORK<br /><span className="text-[#c9a96e]">CONNECTS.</span></h1></Reveal>
            <Reveal variant="up" delay={160}><p className="mt-8 max-w-2xl text-base leading-relaxed text-white/65 lg:text-lg">A connected work-management experience for planning, executing, reviewing and understanding complex work — with people and AI operating from the same context.</p></Reveal>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="https://business.adobe.com/products/workfront.html" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-full bg-[#c9a96e] px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-black hover:-translate-y-0.5">Explore Adobe Workfront <ArrowRight className="h-4 w-4" /></a>
              <a href="#features" className="inline-flex items-center gap-3 rounded-full border border-white/15 px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/75 hover:border-[#c9a96e]/60 hover:text-white">Explore capabilities</a>
            </div>
          </div>

          <Reveal variant="up" delay={220} className="hidden lg:block">
            <div className="ml-auto max-w-xl border border-white/10 bg-white/[.035] p-4 shadow-2xl backdrop-blur">
              <div className="flex items-center justify-between border-b border-white/10 px-3 pb-4"><span className="text-[0.58rem] uppercase tracking-[0.3em] text-white/40">WORKFRONT / WORKSPACE</span><span className="flex items-center gap-2 text-[0.55rem] uppercase tracking-[.2em] text-[#c9a96e]"><span className="h-1.5 w-1.5 rounded-full bg-[#c9a96e]" /> Live system</span></div>
              <div className="grid grid-cols-[.75fr_1.25fr] gap-4 p-3">
                <div className="space-y-2">
                  {features.slice(0, 5).map((item) => { const Icon = item.icon; return <button key={item.id} onClick={() => setActive(item.id)} className={`flex w-full items-center gap-3 border p-3 text-left transition ${active === item.id ? "border-[#c9a96e]/50 bg-[#c9a96e]/10" : "border-white/8 hover:border-white/20"}`}><Icon className="h-4 w-4 shrink-0 text-[#c9a96e]" /><span className="text-[.62rem] text-white/65">{item.label}</span></button>; })}
                </div>
                <div className="min-h-[300px] border border-white/8 bg-black/15 p-5">
                  <div className="flex items-center gap-3"><div className="grid h-10 w-10 place-items-center rounded-full border border-[#c9a96e]/30"><Bot className="h-4 w-4 text-[#c9a96e]" /></div><div><p className="text-[.55rem] uppercase tracking-[.25em] text-white/35">AI collaborator</p><p className="mt-1 text-sm text-white/80">Campaign preparation</p></div></div>
                  <div className="mt-6 space-y-3">{["Read campaign context", "Prepare project brief", "Validate required fields", "Return for human review"].map((step, i) => <div key={step} className="flex items-center gap-3 border border-white/8 p-3"><span className="text-[.58rem] text-[#c9a96e]">0{i + 1}</span><span className="text-xs text-white/60">{step}</span><Check className="ml-auto h-3.5 w-3.5 text-white/30" /></div>)}</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Product category rail */}
      <div className="overflow-x-auto border-b border-border bg-surface">
        <div className="mx-auto flex min-w-max max-w-[1600px] gap-8 px-4 py-5 sm:px-8 lg:px-10">{features.map((item) => <button key={item.id} onClick={() => { setActive(item.id); document.getElementById("feature-detail")?.scrollIntoView({ behavior: "smooth", block: "center" }); }} className={`text-[0.58rem] uppercase tracking-[0.22em] transition-colors ${active === item.id ? "text-gold" : "text-muted-foreground hover:text-foreground"}`}>{item.label}</button>)}</div>
      </div>

      {/* Interactive feature showcase */}
      <Section id="features" className="border-b border-border">
        <SectionHeading eyebrow="Explore the platform" title="One system. Six connected capabilities." />
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground lg:text-base">Instead of presenting work as isolated tools, this experience follows the way enterprise work actually moves: plan it, bring it in, execute it, review it, automate it and learn from it.</p>
        <div id="feature-detail" className="mt-14 grid gap-px border border-border bg-border lg:grid-cols-[.72fr_1.28fr]">
          <div className="bg-background p-3">{features.map((item, i) => { const Icon = item.icon; return <button key={item.id} onClick={() => setActive(item.id)} className={`group flex w-full items-center gap-4 border-b p-5 text-left last:border-b-0 ${active === item.id ? "border-gold/40 bg-surface" : "border-border hover:bg-surface"}`}><span className={`grid h-10 w-10 shrink-0 place-items-center border ${active === item.id ? "border-gold text-gold" : "border-border text-muted-foreground"}`}><Icon className="h-4 w-4" /></span><span><span className="block text-[.58rem] uppercase tracking-[.22em] text-muted-foreground">0{i + 1}</span><span className="mt-1 block font-display text-xl text-foreground">{item.label}</span></span><ArrowRight className={`ml-auto h-4 w-4 transition-transform ${active === item.id ? "translate-x-1 text-gold" : "text-muted-foreground"}`} /></button>; })}</div>
          <div className="relative min-h-[520px] overflow-hidden bg-[#181816] p-8 text-white sm:p-12 lg:p-14">
            <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-[#c9a96e]/10 blur-3xl" />
            <div className="relative"><div className="flex items-center gap-3 text-[#c9a96e]"><feature.icon className="h-5 w-5" /><span className="text-[.58rem] uppercase tracking-[.3em]">{feature.label}</span></div><h2 className="mt-7 max-w-2xl font-display text-4xl leading-[.95] sm:text-6xl">{feature.title}</h2><p className="mt-7 max-w-xl text-sm leading-relaxed text-white/55 lg:text-base">{feature.text}</p><div className="mt-9 grid gap-3 sm:grid-cols-2">{feature.points.map((point) => <div key={point} className="flex gap-3 border border-white/10 bg-white/[.025] p-4 text-sm text-white/70"><Check className="h-4 w-4 shrink-0 text-[#c9a96e]" />{point}</div>)}</div></div>
          </div>
        </div>
      </Section>

      {/* Lifecycle */}
      <Section className="border-b border-border bg-[#181816] text-white">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div><p className="text-[.6rem] uppercase tracking-[.3em] text-[#c9a96e]">How work flows</p><h2 className="mt-5 font-display text-5xl leading-[.92] sm:text-7xl">From idea<br />to impact.</h2><p className="mt-6 max-w-md text-sm leading-relaxed text-white/50">The experience is designed around the complete lifecycle, not just a list of tasks.</p></div>
          <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">{[{n:"01",t:"INTAKE",d:"Capture the request"},{n:"02",t:"PLAN",d:"Align scope and resources"},{n:"03",t:"EXECUTE",d:"Move work forward"},{n:"04",t:"REVIEW",d:"Collaborate and approve"},{n:"05",t:"MEASURE",d:"Understand performance"},{n:"06",t:"OPTIMIZE",d:"Improve the next cycle"}].map((item) => <div key={item.n} className="bg-[#181816] p-6"><span className="text-2xl font-display text-[#c9a96e]">{item.n}</span><h3 className="mt-9 text-[.62rem] uppercase tracking-[.25em] text-white/75">{item.t}</h3><p className="mt-2 text-xs text-white/40">{item.d}</p></div>)}</div>
        </div>
      </Section>

      {/* AI section */}
      <Section className="border-b border-border">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
          <div><SectionHeading eyebrow="The AI layer" title="People lead. Agents accelerate." /><p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground lg:text-base">AI becomes part of the work system instead of another disconnected application. Agents can receive work, use shared context and return results for people to review.</p><div className="mt-8 space-y-0 border-t border-border">{["Human creates direction", "System provides context", "Agent executes the routine work", "Human reviews and decides", "The workflow records the outcome"].map((x, i) => <div key={x} className="flex items-center gap-4 border-b border-border py-4"><span className="font-display text-lg text-gold">0{i + 1}</span><span className="text-sm text-foreground">{x}</span><ArrowRight className="ml-auto h-4 w-4 text-muted-foreground" /></div>)}</div></div>
          <div className="relative overflow-hidden border border-border bg-[#171714] p-7 text-white sm:p-10"><div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#c9a96e]/10 blur-3xl" /><div className="relative"><div className="flex items-center justify-between"><span className="text-[.58rem] uppercase tracking-[.28em] text-white/35">AI COLLABORATOR / RUNNING</span><Bot className="h-5 w-5 text-[#c9a96e]" /></div><div className="mt-10 border border-white/10 p-5"><div className="flex items-center gap-4"><div className="grid h-12 w-12 place-items-center rounded-full border border-[#c9a96e]/30"><Sparkles className="h-5 w-5 text-[#c9a96e]" /></div><div><p className="text-sm">Campaign brief preparation</p><p className="mt-1 text-xs text-white/35">Using project context • 84% complete</p></div></div><div className="mt-7 h-1 bg-white/10"><div className="h-full w-[84%] bg-[#c9a96e]" /></div></div><div className="mt-3 grid gap-3 sm:grid-cols-2"><div className="border border-white/10 p-4"><Users className="h-4 w-4 text-[#c9a96e]" /><p className="mt-4 text-xs text-white/45">Human oversight</p><p className="mt-1 text-sm">Required</p></div><div className="border border-white/10 p-4"><Network className="h-4 w-4 text-[#c9a96e]" /><p className="mt-4 text-xs text-white/45">Context</p><p className="mt-1 text-sm">Shared</p></div></div></div></div>
        </div>
      </Section>

      {/* Use cases */}
      <Section className="border-b border-border">
        <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-start"><div><SectionHeading eyebrow="Built for complexity" title="Where it fits." /><p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">The platform model is especially useful when work crosses teams, approvals, resources, timelines and business systems.</p></div><div className="grid border-l border-t border-border sm:grid-cols-2">{useCases.map((item, i) => <div key={item} className="border-b border-r border-border p-7"><span className="font-display text-3xl text-gold">0{i + 1}</span><h3 className="mt-10 font-display text-xl text-foreground">{item}</h3><p className="mt-2 text-xs leading-relaxed text-muted-foreground">Connected intake, execution, collaboration and visibility.</p></div>)}</div></div>
      </Section>

      {/* Ecosystem */}
      <Section className="border-b border-border bg-[#f4f3ef]">
        <div className="text-center"><p className="text-[.6rem] uppercase tracking-[.32em] text-gold">Connected ecosystem</p><h2 className="mx-auto mt-5 max-w-4xl font-display text-5xl leading-[.92] text-foreground sm:text-7xl">Connect the tools around the work.</h2><p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">Work management becomes more powerful when planning, content, creative production, review and business systems can share the same operating context.</p></div><div className="mx-auto mt-14 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-5">{["Experience Manager", "Frame.io", "Creative Cloud", "Adobe Express", "GenStudio"].map((item, i) => <div key={item} className="group border border-border bg-background p-6 text-center transition hover:-translate-y-1 hover:border-gold"><div className="mx-auto grid h-12 w-12 place-items-center rounded-full border border-border text-gold"><Network className="h-4 w-4" /></div><p className="mt-5 text-[.62rem] uppercase tracking-[.15em] text-muted-foreground">{item}</p></div>)}</div>
      </Section>

      {/* FAQ */}
      <Section className="border-b border-border">
        <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]"><div><SectionHeading eyebrow="Questions" title="Workfront, explained." /></div><div className="border-t border-border">{[["What is Workfront?","Adobe Workfront is a cloud-based work management platform for planning, tracking and executing complex work across teams."],["What makes it different from a task list?","It connects intake, planning, resources, execution, review, automation and reporting instead of treating each stage as a separate tool."],["How does AI fit into Workfront?","AI collaborators can participate in governed workflows, using shared context to handle routine work while people retain oversight and decision-making."],["Who is it for?","It is designed for organizations managing complex project, marketing, creative and cross-functional workflows at scale."]].map(([q,a]) => <details key={q} className="group border-b border-border py-6"><summary className="flex cursor-pointer list-none items-center justify-between font-display text-xl text-foreground"><span>{q}</span><ChevronDown className="h-5 w-5 shrink-0 text-muted-foreground transition group-open:rotate-180" /></summary><p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">{a}</p></details>)}</div></div>
      </Section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-gold-gradient px-4 py-20 sm:px-8 lg:px-10 lg:py-32"><div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-white/20" /><div className="relative mx-auto flex max-w-[1600px] flex-col gap-10 lg:flex-row lg:items-end lg:justify-between"><div><p className="text-[.6rem] uppercase tracking-[.35em] text-primary-foreground/65">STEELX / WORKFRONT</p><h2 className="mt-5 max-w-4xl font-display text-5xl leading-[.9] text-primary-foreground sm:text-8xl">The system behind the work.</h2></div><a href="https://business.adobe.com/products/workfront.html" target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center gap-3 rounded-full bg-primary-foreground px-7 py-4 text-xs font-semibold uppercase tracking-[.18em] text-foreground hover:opacity-90">Visit Adobe Workfront <ArrowRight className="h-4 w-4" /></a></div></section>
    </PageShell>
  );
}
