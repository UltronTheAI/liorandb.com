import Link from "next/link";
import { ArrowRight, Database, GitBranch, Server, ShieldCheck } from "lucide-react";
import { ArchitectureDiagram } from "@/components/site/architecture-diagram";
import { BenchmarkSummary } from "@/components/site/benchmark-charts";
import { CodeBlock, Terminal } from "@/components/site/code-block";
import { PublicLayout } from "@/components/site/layout";
import { Container, Panel, SectionHeading } from "@/components/site/ui";
import { benchmarkData, featureGroups, getStartedCode, localDeveloperWorkflow, siteConfig } from "@/data/content";

export function HomePage() {
  return (
    <PublicLayout>
      <section className="hero-section">
        <Container>
          <div className="hero-grid">
            <div className="hero-copy">
              <h1 className="display-mega">Document storage,<br />built for engineers.</h1>
              <p className="lede mt-6 max-w-xl">A Rust-powered document database designed for backend applications, practical operations, and transparent performance engineering. Official SDK support currently covers JavaScript and TypeScript.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/developers" className="btn-primary">Get started <ArrowRight size={16} /></Link>
                <Link href={siteConfig.docsUrl} className="btn-secondary" target="_blank" rel="noreferrer">Read the docs <ArrowRight size={16} /></Link>
              </div>
              <p className="mt-5 text-xs text-[var(--color-muted)]">Self-hostable · V2 pre-alpha · APIs and deployment details live in the maintained docs</p>
            </div>
            <Terminal code={`$ ${localDeveloperWorkflow.replaceAll("\n", "\n$ ")}`} />
          </div>
        </Container>
      </section>

      <section className="section-band section-band--soft"><Container><div className="flex flex-col gap-6 border-b border-[var(--color-hairline)] pb-8 md:flex-row md:items-end md:justify-between"><div><p className="eyebrow">Measured, with context</p><h2 className="display-md mt-3">A benchmark preview you can interrogate.</h2></div><Link href="/benchmarks" className="inline-link">See the full comparison <ArrowRight size={14} /></Link></div><div className="mt-8"><BenchmarkSummary /></div><p className="mt-6 text-xs leading-5 text-[var(--color-body)]">{benchmarkData.evidenceStatus}. These numbers describe one local development workload and should not be read as universal production performance.</p></Container></section>

      <section className="section-band"><Container><SectionHeading eyebrow="Engine surface" title="A practical storage layer for backend work." description="LioranDB keeps the developer path close to the engine: a familiar document API, a Rust storage core, and deployment choices that are explicit about what is ready today." /><div className="mt-10 grid gap-x-8 gap-y-4 md:grid-cols-2 lg:grid-cols-3">{featureGroups.slice(0, 6).map((feature) => <Panel key={feature.title}><div className="flex items-start justify-between gap-4"><Database size={18} className="mt-0.5 shrink-0 text-[var(--color-accent-strong)]" /><span className="feature-status text-right">{feature.status}</span></div><h3 className="mt-6 text-lg font-semibold">{feature.title}</h3><p className="mt-3 text-sm leading-6 text-[var(--color-body)]">{feature.description}</p><div className="mt-5 border-t border-[var(--color-hairline)] pt-4 text-xs font-mono text-[var(--color-muted)]">{feature.details.join(" · ")}</div></Panel>)}</div></Container></section>

      <section className="section-band section-band--dark"><Container><div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center"><div><p className="eyebrow text-[var(--color-on-dark-soft)]">Developer path</p><h2 className="display-lg mt-5 text-white">Start local. Keep the escape hatch.</h2><p className="mt-5 max-w-lg leading-7 text-[var(--color-on-dark-soft)]">The first step is a local Docker instance and a documented driver. Managed infrastructure, Studio, and the source repositories are separate paths you can evaluate when the workload earns it.</p><div className="mt-7 flex flex-wrap gap-3"><Link href="/developers" className="btn-on-dark">Quick start <ArrowRight size={16} /></Link><Link href="/deployment" className="btn-secondary-on-dark">Deployment options</Link></div></div><CodeBlock code={getStartedCode} language="typescript" filename="index.ts" /></div></Container></section>

      <section className="section-band"><Container><div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start"><div><p className="eyebrow">Architecture</p><h2 className="display-lg mt-3">Know where the request goes.</h2><p className="mt-4 leading-7 text-[var(--color-body)]">Follow the path from client request to persistent state. Implementation status and caveats are called out on the architecture page.</p><Link href="/architecture" className="inline-link mt-6">Explore the architecture <ArrowRight size={14} /></Link></div><ArchitectureDiagram /></div></Container></section>

      <section className="section-band section-band--soft"><Container><div className="grid gap-x-8 gap-y-4 md:grid-cols-3"><Panel><Server size={20} className="text-[var(--color-accent-strong)]" /><h3 className="mt-5 font-semibold">Self-host</h3><p className="mt-2 text-sm leading-6 text-[var(--color-body)]">Run the local Docker path and keep your operational boundary close.</p><Link href="/deployment" className="inline-link mt-5">Review deployment <ArrowRight size={14} /></Link></Panel><Panel><GitBranch size={20} className="text-[var(--color-accent-strong)]" /><h3 className="mt-5 font-semibold">Build with drivers</h3><p className="mt-2 text-sm leading-6 text-[var(--color-body)]">Use the official JavaScript and TypeScript SDK entry points.</p><Link href="/drivers" className="inline-link mt-5">See drivers <ArrowRight size={14} /></Link></Panel><Panel><ShieldCheck size={20} className="text-[var(--color-accent-strong)]" /><h3 className="mt-5 font-semibold">Choose managed</h3><p className="mt-2 text-sm leading-6 text-[var(--color-body)]">Compare shared and dedicated offerings without confusing them with local benchmarks.</p><Link href="/cloud" className="inline-link mt-5">Review cloud <ArrowRight size={14} /></Link></Panel></div></Container></section>
    </PublicLayout>
  );
}
