import { Section } from "@/components/page-shell";
import { Reveal, SectionHeading } from "@/components/reveal";
import { ClipReveal, Parallax } from "@/components/motion";
import {
  comparisonFootnote,
  comparisonRows,
  engineeringSpecs,
  gradeGuidance,
  grades,
  img,
  maintenanceCards,
  technicalComparison,
  technicalMatrix,
} from "@/data/mesh";

/* ── 22–24 Maintenance & product care ────────────────────────── */
export function MaintenanceSection() {
  return (
    <Section className="border-t border-border">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <div>
          <SectionHeading eyebrow="Technical support" title="Maintenance & product care" />
          <div className="mt-10 border-t border-border">
            {maintenanceCards.map((c, i) => (
              <Reveal key={c.title} variant="row" delay={i * 100} className="border-b border-border py-7">
                <h3 className="font-display text-2xl text-foreground">{c.title}</h3>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              </Reveal>
            ))}
          </div>
          <Reveal variant="up" delay={200}>
            <div className="mt-10 border border-champagne/50 p-8">
              <p className="text-[0.58rem] uppercase tracking-[0.32em] text-champagne">10-year warranty</p>
              <p className="mt-4 font-display text-3xl leading-tight text-foreground">
                Against PVD colour fading
                <span className="block">& structural failure</span>
              </p>
            </div>
          </Reveal>
        </div>
        <ClipReveal delay={120}>
          <Parallax className="aspect-[4/5] w-full border border-border" amount={50}>
            <img src={img.inspection} alt="Coated mesh under quality inspection" loading="lazy" className="h-full w-full object-cover" />
          </Parallax>
        </ClipReveal>
      </div>
    </Section>
  );
}

/* ── 25 Material comparison matrix ───────────────────────────── */
export function MaterialComparison() {
  return (
    <Section className="border-t border-border">
      <SectionHeading eyebrow="Technical data" title="Material comparison matrix" />
      <Reveal variant="up" delay={100}>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          A comprehensive comparison of architectural stainless steel grades. Material selection
          should be based on environmental salinity, pollution levels and structural requirements.
        </p>
      </Reveal>

      {/* Desktop table */}
      <div className="no-scrollbar mt-12 hidden overflow-x-auto border border-border md:block">
        <table className="w-full min-w-[720px] border-collapse text-left">
          <thead>
            <tr className="border-b border-border">
              {["Property / specification", "SS304 (standard)", "SS316 (marine)", "SS316L (low carbon)"].map((h) => (
                <th key={h} className="px-5 py-4 text-[0.58rem] uppercase tracking-[0.24em] text-champagne">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map((r, i) => (
              <Reveal key={r.property} as="tr" variant="row" delay={i * 45} className="border-b border-border last:border-0 transition-colors hover:bg-surface">
                <td className="px-5 py-4 text-[0.62rem] uppercase tracking-[0.18em] text-muted-foreground">{r.property}</td>
                <td className="px-5 py-4 text-sm text-foreground">{r.ss304}</td>
                <td className="px-5 py-4 text-sm text-foreground">{r.ss316}</td>
                <td className="px-5 py-4 text-sm text-foreground">{r.ss316l}</td>
              </Reveal>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile stacked */}
      <div className="mt-10 space-y-4 md:hidden">
        {comparisonRows.map((r) => (
          <div key={r.property} className="border border-border p-5">
            <p className="text-[0.58rem] uppercase tracking-[0.24em] text-champagne">{r.property}</p>
            <dl className="mt-3 space-y-2 text-sm">
              <div className="flex justify-between gap-4"><dt className="text-muted-foreground">SS304</dt><dd className="text-right text-foreground">{r.ss304}</dd></div>
              <div className="flex justify-between gap-4"><dt className="text-muted-foreground">SS316</dt><dd className="text-right text-foreground">{r.ss316}</dd></div>
              <div className="flex justify-between gap-4"><dt className="text-muted-foreground">SS316L</dt><dd className="text-right text-foreground">{r.ss316l}</dd></div>
            </dl>
          </div>
        ))}
      </div>

      <p className="mt-6 text-xs leading-relaxed text-muted-foreground">*{comparisonFootnote}</p>
    </Section>
  );
}

/* ── 33–36 Technical specifications & standards ──────────────── */
export function TechnicalSpecifications() {
  return (
    <Section className="border-t border-border">
      <SectionHeading eyebrow="Engineered for excellence" title="Technical specifications & standards" />

      <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="text-[0.58rem] uppercase tracking-[0.32em] text-champagne">Specification guide</p>
          <h3 className="mt-4 font-display text-3xl leading-tight text-foreground lg:text-4xl">
            Choosing the right grade: SS304 vs SS316
          </h3>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Material selection is the most critical technical decision in architectural
            specification. Environmental salinity and pollution levels dictate the required chromium
            and molybdenum content.
          </p>
          <div className="mt-8 grid gap-px border-t border-border">
            {gradeGuidance.map((g, i) => (
              <Reveal key={g.title} variant="row" delay={i * 110} className="border-b border-border py-6">
                <h4 className="text-sm uppercase tracking-[0.2em] text-foreground">{g.title}</h4>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{g.body}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-3xl text-foreground">Technical comparison</h3>
          <dl className="mt-8 border-t border-border">
            {technicalComparison.map((t, i) => (
              <Reveal key={t.property} variant="row" delay={i * 70} className="border-b border-border py-5">
                <dt className="text-[0.6rem] uppercase tracking-[0.24em] text-muted-foreground">{t.property}</dt>
                <dd className="mt-3 flex flex-wrap gap-3">
                  <span className="border border-border px-3 py-1.5 text-xs text-foreground">304: {t.ss304}</span>
                  <span className="border border-champagne/50 px-3 py-1.5 text-xs text-champagne">316: {t.ss316}</span>
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>

      <div className="mt-20">
        <h3 className="font-display text-3xl text-foreground lg:text-4xl">Engineering specifications</h3>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Global manufacturing standards and dimensional tolerances for SteelX architectural mesh
          systems. All data points conform to international ISO and ASTM protocols.
        </p>
        <div className="no-scrollbar mt-8 overflow-x-auto border border-border">
          <table className="w-full min-w-[680px] border-collapse text-left">
            <thead>
              <tr className="border-b border-border">
                {["Property", "Specification range", "Tolerance", "Standard"].map((h) => (
                  <th key={h} className="px-5 py-4 text-[0.58rem] uppercase tracking-[0.24em] text-champagne">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {engineeringSpecs.map((s, i) => (
                <Reveal key={s.property} as="tr" variant="row" delay={i * 50} className="border-b border-border last:border-0 transition-colors hover:bg-surface">
                  <td className="px-5 py-4 text-[0.62rem] uppercase tracking-[0.18em] text-muted-foreground">{s.property}</td>
                  <td className="px-5 py-4 text-sm text-foreground">{s.range}</td>
                  <td className="px-5 py-4 text-sm text-foreground">{s.tolerance}</td>
                  <td className="px-5 py-4 text-sm text-champagne">{s.standard}</td>
                </Reveal>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Section>
  );
}

/* ── 37–40 Material grade comparison ─────────────────────────── */
export function MaterialGradeComparison() {
  return (
    <Section className="border-t border-border">
      <SectionHeading eyebrow="Comparison" title="Material grade comparison" />
      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {grades.map((g, i) => (
          <Reveal key={g.code} variant="up" delay={i * 120}>
            <article className="flex h-full flex-col border border-border p-7 transition-colors hover:border-champagne">
              <p className="text-[0.6rem] uppercase tracking-[0.32em] text-champagne">{g.code}</p>
              <h3 className="mt-3 font-display text-2xl text-foreground">{g.name}</h3>
              <ul className="mt-6 space-y-3">
                {g.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span aria-hidden="true" className="mt-2 h-px w-4 shrink-0 bg-champagne" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-auto space-y-2 border-t border-border pt-6">
                <p className="text-sm text-foreground">{g.price}</p>
                <p className="text-[0.6rem] uppercase tracking-[0.24em] text-champagne">{g.pren}</p>
                <p className="text-xs leading-relaxed text-muted-foreground">Recommended: {g.recommended}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ── 41 Technical matrix ─────────────────────────────────────── */
export function TechnicalMatrix() {
  return (
    <Section className="border-t border-border">
      <SectionHeading eyebrow="Engineering excellence" title="Technical matrix" />
      <dl className="mt-12 grid gap-px border-t border-border sm:grid-cols-2">
        {technicalMatrix.map((m, i) => (
          <Reveal key={m.label} variant="row" delay={(i % 2) * 90} className="border-b border-border py-6 sm:pr-10">
            <dt className="text-[0.6rem] uppercase tracking-[0.26em] text-muted-foreground">{m.label}</dt>
            <dd className="mt-2 text-sm text-foreground">{m.value}</dd>
          </Reveal>
        ))}
      </dl>
    </Section>
  );
}
