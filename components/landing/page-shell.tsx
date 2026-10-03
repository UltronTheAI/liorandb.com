import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, ExternalLink, Server, ShieldCheck, Zap } from "lucide-react";
import {
  apiExplorerTabs,
  architectureFlow,
  architectureSideSystems,
  benchmarkDetails,
  benchmarkMetrics,
  faqs,
  founderSkills,
  getStartedCode,
  getStartedOutput,
  getStartedSteps,
  heroCollections,
  indiaPillars,
  installCommands,
  navItems,
  pricingPlans,
  roadmap,
  siteConfig,
  useCases,
  v2Cards,
} from "@/data/site";
import { ApiExplorer } from "./api-explorer";
import { BenchmarkDashboard } from "./benchmark-dashboard";
import { CodeBlock } from "./code-block";
import { Faq } from "./faq";
import { GitHubMark } from "./github-mark";
import { HeroConsole } from "./hero-console";
import { InstallPanel } from "./install-panel";
import { Reveal } from "./reveal";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";

function SectionHeading({
  eyebrow,
  title,
  description,
  onDark = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  onDark?: boolean;
}) {
  return (
    <div className="max-w-3xl space-y-3">
      <p className={onDark ? "eyebrow-on-dark" : "eyebrow"}>{eyebrow}</p>
      <h2
        className={`text-balance text-2xl font-semibold tracking-[-0.03em] sm:text-3xl lg:text-[36px] lg:leading-[1.15] ${
          onDark ? "text-[var(--color-on-dark)]" : "text-[var(--color-ink)]"
        }`}
      >
        {title}
      </h2>
      <p
        className={`text-base leading-relaxed ${
          onDark ? "text-[var(--color-on-dark-soft)]" : "text-[var(--color-body)]"
        }`}
      >
        {description}
      </p>
    </div>
  );
}

function Section({
  id,
  children,
  surface = false,
  className = "",
}: {
  id: string;
  children: React.ReactNode;
  surface?: boolean;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 border-b border-[var(--color-hairline)] ${
        surface ? "section-surface" : "bg-[var(--color-canvas)]"
      } ${className}`}
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function LandingPage() {
  const architectureStages = [
    "Client requests",
    "Document API",
    "Snapshot isolation",
    "Primary pages",
    "Durability layer",
    "Hot reads",
    "On-disk state",
  ] as const;

  return (
    <div id="top" className="min-h-screen overflow-x-clip bg-[var(--color-canvas)] text-[var(--color-ink)] font-sans">
      <SiteHeader
        navItems={navItems}
        appUrl={siteConfig.appUrl}
        docsUrl={siteConfig.docsUrl}
        studioUrl={siteConfig.studioUrl}
        discordUrl={siteConfig.discordUrl}
        githubUrl={siteConfig.v1GithubUrl}
        githubRepo={siteConfig.githubRepo}
      />

      <main>
        {/* Hero Section */}
        <section id="product" className="relative border-b border-[var(--color-hairline)] bg-[var(--color-canvas)] py-14 sm:py-18 md:py-24">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <div className="grid w-full items-start gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
              <Reveal className="flex min-w-0 flex-col justify-start space-y-6">
                <div className="space-y-4">
                  <h1 className="text-3xl font-semibold tracking-[-0.04em] text-[var(--color-ink)] sm:text-5xl lg:text-[56px] lg:leading-[1.08] xl:text-[64px]">
                    India&apos;s developer-first document database.
                  </h1>
                  <p className="max-w-xl text-base leading-relaxed text-[var(--color-body)] sm:text-lg">
                    High-performance document database developed in Rust — with Docker deployment and MongoDB-style APIs for startups and data-intensive apps.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link
                    href={siteConfig.docsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary w-full justify-center sm:w-auto"
                  >
                    Read Docs
                    <ArrowRight size={15} />
                  </Link>
                  <Link
                    href={siteConfig.discordUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary w-full justify-center sm:w-auto"
                  >
                    Join Community
                  </Link>
                  <Link
                    href={siteConfig.appUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary w-full justify-center sm:w-auto"
                  >
                    Launch Dashboard
                  </Link>
                </div>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[var(--color-muted)]">
                  <Link
                    href={siteConfig.v1GithubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 transition text-[var(--color-body)] hover:text-[var(--color-ink)]"
                  >
                    View source on GitHub
                    <ExternalLink size={13} />
                  </Link>
                  <span className="hidden h-1 w-1 rounded-full bg-[var(--color-hairline-strong)] sm:inline-block" />
                  <span>Self-hostable · Rust V2 · Developed in India</span>
                </div>
              </Reveal>

              <Reveal delay={0.1} className="flex min-h-0 min-w-0 w-full">
                <div className="flex w-full min-h-[360px] sm:min-h-[420px] lg:min-h-[480px]">
                  <HeroConsole collections={heroCollections} />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Status Strip */}
        <Section id="status-strip">
          <Reveal className="rounded-[var(--radius-lg)] border border-[var(--color-hairline)] bg-[var(--color-surface-card)] p-6 md:p-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:items-center">
              <div>
                <p className="eyebrow">Product status</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-[var(--color-ink)] sm:text-3xl">
                  V2 is live and ready.
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-body)]">
                  Pre-alpha tested with real workloads by 10+ developers with 3 detailed feedbacks incorporated.
                </p>
              </div>
              <div className="rounded-[var(--radius-lg)] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-5">
                <div className="flex items-center justify-between">
                  <span className="text-base font-semibold text-[var(--color-ink)]">V2 Pre-alpha</span>
                  <span className="badge-pill">Launched</span>
                </div>
                <dl className="mt-4 space-y-2.5 text-sm text-[var(--color-body)]">
                  <div className="flex justify-between gap-4">
                    <dt className="text-[var(--color-muted)]">Engine</dt>
                    <dd className="font-mono text-xs font-semibold text-[var(--color-ink)]">Rust</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-[var(--color-muted)]">Validation</dt>
                    <dd className="text-right font-medium text-[var(--color-ink)]">10+ Devs (3 Real Feedbacks)</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-[var(--color-muted)]">Released</dt>
                    <dd>{siteConfig.preAlphaDate}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-[var(--color-muted)]">Alpha Launch</dt>
                    <dd className="text-right font-medium text-[var(--color-ink)]">{siteConfig.alphaLaunchDate}</dd>
                  </div>
                </dl>
                <Link
                  href={siteConfig.docsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-link mt-4 text-sm font-medium"
                >
                  Read the docs
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </Reveal>
        </Section>

        {/* Solo Docker Quickstart */}
        <Section id="get-started" surface>
          <Reveal>
            <SectionHeading
              eyebrow="Get Started"
              title="Solo Docker Quickstart"
              description="Spin up a single local LioranDB instance running directly from Docker. Everything you need to start building."
            />
          </Reveal>
          <div className="mt-8">
            <InstallPanel
              commands={installCommands}
              steps={getStartedSteps}
              code={getStartedCode}
              output={getStartedOutput}
            />
          </div>
        </Section>

        {/* Developer API */}
        <Section id="api-explorer">
          <Reveal>
            <SectionHeading
              eyebrow="Developer API"
              title="Build with the TypeScript driver."
              description="Connect, query, index, and aggregate with familiar MongoDB-style operations. gRPC and REST APIs are also available."
            />
          </Reveal>
          <div className="mt-8">
            <ApiExplorer tabs={apiExplorerTabs} />
          </div>
        </Section>

        {/* V2 Architecture & Features */}
        <Section id="v2" surface>
          <Reveal>
            <div className="rounded-[var(--radius-lg)] border border-[var(--color-hairline)] bg-[var(--color-surface-card)] p-6 md:p-8">
              <span className="badge-pill">
                Pre-alpha Launched
              </span>
              <div className="mt-6 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <h2 className="text-balance text-3xl font-semibold tracking-[-0.04em] text-[var(--color-ink)] md:text-4xl">
                    LioranDB V2 is built in Rust. Now you can code it.
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-[var(--color-body)]">
                    V2 is a high-performance storage engine designed for larger datasets, predictable latency, and transactional workloads. Local Docker pre-alpha is available for developer evaluation and benchmarking, while production workloads are reviewed and managed via our Founder Program. Alpha launch coming on {siteConfig.alphaLaunchDate}.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="badge-pill">Rust engine</span>
                    <span className="badge-pill">Pre-alpha • {siteConfig.preAlphaDate}</span>
                    <span className="badge-pill">Managed Hosting Available</span>
                  </div>
                  <div className="mt-8">
                    <Link
                      href={siteConfig.discordUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-primary"
                    >
                      Join the pre-alpha community
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>

                <div className="min-w-0 rounded-[var(--radius-lg)] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-4 sm:p-5">
                  <p className="mb-4 eyebrow">Architecture direction</p>
                  <div className="grid gap-2.5">
                    {architectureFlow.map((item, index) => (
                      <div
                        key={item}
                        className="rounded-[var(--radius-md)] border border-[var(--color-hairline)] bg-[var(--color-surface-card)] px-3.5 py-2.5 transition hover:border-[var(--color-hairline-strong)]"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <span className="text-sm font-medium text-[var(--color-ink)]">{item}</span>
                          <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--color-muted)]">
                            {architectureStages[index]}
                          </span>
                        </div>
                      </div>
                    ))}
                    <div className="mt-2 grid gap-2 sm:grid-cols-2">
                      {architectureSideSystems.map((item) => (
                        <div
                          key={item}
                          className="rounded-[var(--radius-md)] border border-[var(--color-hairline)] bg-[var(--color-surface-card)] px-3 py-2 text-xs font-mono text-[var(--color-body)]"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3 pt-8 border-t border-[var(--color-hairline)]">
                {v2Cards.map((item, index) => (
                  <Reveal key={item} delay={index * 0.03}>
                    <div className="rounded-[var(--radius-lg)] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-5 transition hover:border-[var(--color-hairline-strong)]">
                      <p className="eyebrow">V2 focus</p>
                      <p className="mt-2 text-base font-semibold text-[var(--color-ink)]">{item}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </Section>

        {/* Internal Benchmarking */}
        <Section id="benchmarks">
          <Reveal>
            <SectionHeading
              eyebrow="Internal Benchmarking"
              title="Built under pressure, not inside a toy demo."
              description="Development testing has reached datasets approaching 100 million documents, with sustained write throughput of 23-25K writes per second and 35K combined operations per second in mixed workloads."
            />
          </Reveal>
          <div className="mt-8">
            <BenchmarkDashboard metrics={benchmarkMetrics} />
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Reveal className="card-base">
              <p className="eyebrow">Hardware</p>
              <ul className="mt-3 space-y-1.5 text-xs text-[var(--color-body)] font-mono">
                <li>{benchmarkDetails.hardware.processor}</li>
                <li>{benchmarkDetails.hardware.cores}</li>
                <li>{benchmarkDetails.hardware.memory}</li>
                <li>{benchmarkDetails.hardware.storage}</li>
              </ul>
            </Reveal>

            <Reveal className="card-base" delay={0.04}>
              <p className="eyebrow">Configuration</p>
              <ul className="mt-3 space-y-1.5 text-xs text-[var(--color-body)] font-mono">
                <li>Nodes: {benchmarkDetails.configuration.nodes}</li>
                <li>Partitions: {benchmarkDetails.configuration.partitions}</li>
                <li>Threads: {benchmarkDetails.configuration.workerThreads}</li>
                <li>Batch: {benchmarkDetails.configuration.batchSize}</li>
              </ul>
            </Reveal>

            <Reveal className="card-base" delay={0.08}>
              <p className="eyebrow">Write Performance</p>
              <p className="mt-3 text-sm font-semibold text-[var(--color-ink)]">
                {benchmarkDetails.results.writePerformance.throughput}
              </p>
              <p className="mt-1 text-xs text-[var(--color-body)]">
                {benchmarkDetails.results.writePerformance.description}
              </p>
            </Reveal>

            <Reveal className="card-base" delay={0.12}>
              <p className="eyebrow">Recovery &amp; Durability</p>
              <p className="mt-3 text-sm font-semibold text-[var(--color-ink)]">
                Crash Recovery
              </p>
              <p className="mt-1 text-xs text-[var(--color-body)]">
                WAL replay, metadata consistency, and duplicate prevention validated through repeated crash cycles.
              </p>
            </Reveal>
          </div>

          <Reveal className="mt-8 card-base">
            <h3 className="text-base font-semibold text-[var(--color-ink)]">Features Tested</h3>
            <div className="mt-3 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
              {benchmarkDetails.features.map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-xs text-[var(--color-body)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-ink)]" />
                  {feature}
                </div>
              ))}
            </div>
          </Reveal>

          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <Reveal className="card-base">
              <h3 className="text-sm font-semibold text-[var(--color-ink)]">Write Performance Logs</h3>
              <p className="mt-1 text-xs text-[var(--color-muted)]">23K-25K writes/sec with stable WAL group commit</p>
              <div className="mt-3 space-y-1.5">
                {benchmarkDetails.results.writePerformance.logs.map((log) => (
                  <a
                    key={log}
                    href={log}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-[var(--radius-sm)] border border-[var(--color-hairline)] bg-[var(--color-surface)] px-3 py-2 font-mono text-xs text-[var(--color-body)] transition hover:border-[var(--color-hairline-strong)] hover:text-[var(--color-ink)]"
                  >
                    <ExternalLink size={12} />
                    {log.split("/").pop()}
                  </a>
                ))}
              </div>
            </Reveal>

            <Reveal className="card-base" delay={0.04}>
              <h3 className="text-sm font-semibold text-[var(--color-ink)]">Read Performance Logs</h3>
              <p className="mt-1 text-xs text-[var(--color-muted)]">Low millisecond latency with high parallel throughput</p>
              <div className="mt-3 space-y-1.5">
                {benchmarkDetails.results.readPerformance.logs.map((log) => (
                  <a
                    key={log}
                    href={log}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-[var(--radius-sm)] border border-[var(--color-hairline)] bg-[var(--color-surface)] px-3 py-2 font-mono text-xs text-[var(--color-body)] transition hover:border-[var(--color-hairline-strong)] hover:text-[var(--color-ink)]"
                  >
                    <ExternalLink size={12} />
                    {log.split("/").pop()}
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            <Reveal className="card-base">
              <h3 className="text-sm font-semibold text-[var(--color-ink)]">Mixed Workload (Soak Test)</h3>
              <p className="mt-1 text-xs text-[var(--color-muted)]">~10K writes/sec + ~25K reads/sec = ~35K ops/sec</p>
              <a
                href={benchmarkDetails.results.mixedWorkload.log}
                target="_blank"
                rel="noreferrer"
                className="mt-3 flex items-center gap-2 rounded-[var(--radius-sm)] border border-[var(--color-hairline)] bg-[var(--color-surface)] px-3 py-2 font-mono text-xs text-[var(--color-body)] transition hover:border-[var(--color-hairline-strong)] hover:text-[var(--color-ink)]"
              >
                <ExternalLink size={12} />
                {benchmarkDetails.results.mixedWorkload.log.split("/").pop()}
              </a>
            </Reveal>

            <Reveal className="card-base" delay={0.04}>
              <h3 className="text-sm font-semibold text-[var(--color-ink)]">Crash Recovery Test</h3>
              <p className="mt-1 text-xs text-[var(--color-muted)]">WAL replay &amp; durability validation</p>
              <a
                href={benchmarkDetails.results.crashRecovery.log}
                target="_blank"
                rel="noreferrer"
                className="mt-3 flex items-center gap-2 rounded-[var(--radius-sm)] border border-[var(--color-hairline)] bg-[var(--color-surface)] px-3 py-2 font-mono text-xs text-[var(--color-body)] transition hover:border-[var(--color-hairline-strong)] hover:text-[var(--color-ink)]"
              >
                <ExternalLink size={12} />
                {benchmarkDetails.results.crashRecovery.log.split("/").pop()}
              </a>
            </Reveal>
          </div>
        </Section>

        {/* Pricing Section */}
        <Section id="pricing" surface>
          <Reveal>
            <SectionHeading
              eyebrow="Managed Database Hosting"
              title="Transparent pricing for developer infrastructure."
              description="Deploy high-performance LioranDB document database infrastructure with guaranteed throughput, automated daily backups, and direct founder engineering support."
            />
          </Reveal>

          {/* Workflow Explanation */}
          <Reveal className="mt-8 card-base">
            <div className="flex items-center gap-2.5">
              <span className="grid h-7 w-7 place-items-center rounded-[var(--radius-sm)] border border-[var(--color-hairline-strong)] bg-[var(--color-surface-strong)] text-[var(--color-ink)]">
                <Zap size={15} />
              </span>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-ink)]">
                How Managed Provisioning Works
              </h3>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  step: "01",
                  title: "Request on Dashboard",
                  desc: "Submit your database request with target workloads on app.liorandb.com.",
                },
                {
                  step: "02",
                  title: "Workload Review",
                  desc: "Our developer team reviews sizing, query patterns, and capacity requirements.",
                },
                {
                  step: "03",
                  title: "Server Provisioning",
                  desc: "Dedicated instance is allocated and activated via secure monthly subscription checkout.",
                },
                {
                  step: "04",
                  title: "Connect & Scale",
                  desc: "Connect via @liorandb/driver or gRPC/REST endpoints with automated daily backups.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="rounded-[var(--radius-md)] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-4 transition hover:border-[var(--color-hairline-strong)]"
                >
                  <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[var(--color-muted)]">
                    STEP {item.step}
                  </span>
                  <h4 className="mt-2 text-sm font-semibold text-[var(--color-ink)]">{item.title}</h4>
                  <p className="mt-1.5 text-xs leading-5 text-[var(--color-body)]">{item.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Pricing Plans Grid */}
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {/* Developer Starter */}
            <Reveal className="pricing-card flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-base font-semibold text-[var(--color-ink)]">
                    {pricingPlans[0].name}
                  </span>
                  <span className="badge-pill">
                    {pricingPlans[0].badge}
                  </span>
                </div>

                <div className="mt-4 flex items-baseline gap-1.5">
                  <span className="text-4xl font-semibold tracking-tight text-[var(--color-ink)]">
                    {pricingPlans[0].price}
                  </span>
                  <span className="text-sm text-[var(--color-muted)]">
                    {pricingPlans[0].period}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-[var(--color-body)]">
                  {pricingPlans[0].description}
                </p>

                <div className="my-6 h-px w-full bg-[var(--color-hairline)]" />

                <p className="eyebrow">
                  Included with plan:
                </p>
                <ul className="mt-3 space-y-2.5">
                  {pricingPlans[0].features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-sm text-[var(--color-body)]">
                      <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-[var(--color-ink)]" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-2 rounded-[var(--radius-md)] border border-[var(--color-hairline)] bg-[var(--color-surface)] px-3 py-2 text-xs text-[var(--color-body)]">
                  <Clock size={13} className="shrink-0 text-[var(--color-muted)]" />
                  <span>{pricingPlans[0].supportNote}</span>
                </div>

                <Link
                  href={pricingPlans[0].ctaHref}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary w-full justify-center"
                >
                  {pricingPlans[0].ctaText}
                  <ArrowRight size={15} />
                </Link>
              </div>
            </Reveal>

            {/* Custom Scale (Dark featured tier per DESIGN.md pricing-tier-featured) */}
            <Reveal className="pricing-card-featured flex flex-col justify-between" delay={0.05}>
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-base font-semibold text-[var(--color-on-dark)]">
                    {pricingPlans[1].name}
                  </span>
                  <span className="rounded-full border border-[#333338] bg-[#1f1f23] px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-[#a0a4aa]">
                    {pricingPlans[1].badge}
                  </span>
                </div>

                <div className="mt-4 flex items-baseline gap-1.5">
                  <span className="text-4xl font-semibold tracking-tight text-[var(--color-on-dark)]">
                    {pricingPlans[1].price}
                  </span>
                  <span className="text-sm text-[#8b949e]">
                    {pricingPlans[1].period}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-[#b0b4ba]">
                  {pricingPlans[1].description}
                </p>

                <div className="my-6 h-px w-full bg-[#28282c]" />

                <p className="eyebrow-on-dark">
                  Included with plan:
                </p>
                <ul className="mt-3 space-y-2.5">
                  {pricingPlans[1].features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-sm text-[#b0b4ba]">
                      <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-[#ffffff]" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-2 rounded-[var(--radius-md)] border border-[#28282c] bg-[#1f1f23] px-3 py-2 text-xs text-[#b0b4ba]">
                  <Clock size={13} className="shrink-0 text-[#8b949e]" />
                  <span>{pricingPlans[1].supportNote}</span>
                </div>

                <Link
                  href={pricingPlans[1].ctaHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-[var(--radius-md)] border border-[#333338] bg-[#ffffff] px-4 text-sm font-medium text-[#000000] transition hover:bg-[#e5e5e5]"
                >
                  {pricingPlans[1].ctaText}
                  <ArrowRight size={15} />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Support & Policy Notice Box */}
          <Reveal className="mt-8 card-base">
            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <h4 className="flex items-center gap-2 text-sm font-semibold text-[var(--color-ink)]">
                  <Clock size={15} className="text-[var(--color-muted)]" />
                  Support Schedule
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-[var(--color-body)]">
                  Direct Founder &amp; engineering support is available daily from <strong className="text-[var(--color-ink)]">6:00 PM to 10:00 PM IST (4 hours nightly)</strong>, Monday to Friday. Closed on Saturdays and Sundays.
                </p>
              </div>
              <div>
                <h4 className="flex items-center gap-2 text-sm font-semibold text-[var(--color-ink)]">
                  <Server size={15} className="text-[var(--color-muted)]" />
                  Digital Provisioning
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-[var(--color-body)]">
                  LioranDB provides digital cloud software and database infrastructure. Server instances and connection credentials are provisioned within 1 to 24 hours of approval. No physical shipment.
                </p>
              </div>
              <div>
                <h4 className="flex items-center gap-2 text-sm font-semibold text-[var(--color-ink)]">
                  <ShieldCheck size={15} className="text-[var(--color-muted)]" />
                  Subscription &amp; Refund Terms
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-[var(--color-body)]">
                  Subscriptions are billed monthly. Due to immediate allocation of dedicated server compute and storage resources upon provisioning, all payments are covered under our <Link href="/refund" className="underline text-[var(--color-ink)] hover:text-[var(--color-text-link)]">Strict No-Refund Policy</Link>. Cancel anytime before the next billing cycle.
                </p>
              </div>
            </div>
          </Reveal>
        </Section>

        {/* Why India */}
        <Section id="why-india">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <Reveal>
              <SectionHeading
                eyebrow="Developed in India"
                title="Indian data deserves Indian infrastructure."
                description="India’s software ecosystem should not depend entirely on infrastructure designed, owned and controlled elsewhere. LioranDB is one step toward a stronger domestic developer platform ecosystem."
              />
              <div className="mt-6 card-base">
                <p className="text-xl font-semibold tracking-tight text-[var(--color-ink)]">
                  Developed in India. Built for the world.
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-body)]">
                  LioranDB is independently developed and is not presented as an official government product or initiative.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-4">
              {indiaPillars.map(([title, description], index) => (
                <Reveal key={title} delay={index * 0.04}>
                  <div className="card-base">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-hairline)] bg-[var(--color-surface)] text-[var(--color-ink)]">
                      <ShieldCheck size={18} />
                    </div>
                    <h3 className="text-lg font-semibold text-[var(--color-ink)]">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--color-body)]">{description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Section>

        {/* Use Cases */}
        <Section id="use-cases" surface>
          <Reveal>
            <SectionHeading
              eyebrow="Use Cases"
              title="Designed for products that cannot afford database drama."
              description="From internal tools to SaaS backends, the page maps real collection names, query shapes and operating benefits instead of generic market segments."
            />
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {useCases.map(([title, collections, query, benefit], index) => (
              <Reveal key={title} delay={index * 0.02}>
                <div className="card-base h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-semibold text-[var(--color-ink)]">{title}</h3>
                    <p className="mt-3 eyebrow">Collections</p>
                    <p className="mt-1 font-mono text-xs text-[var(--color-body)]">{collections}</p>
                    <div className="mt-3 rounded-[var(--radius-sm)] border border-[var(--color-hairline)] bg-[var(--color-surface)] px-2.5 py-2 font-mono text-xs text-[var(--color-ink)]">
                      {query}
                    </div>
                  </div>
                  <p className="mt-4 text-xs leading-5 text-[var(--color-body)]">{benefit}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* Developer Experience */}
        <Section id="dx">
          <Reveal>
            <SectionHeading
              eyebrow="Developer Experience"
              title="Familiar enough to start. Deep enough to grow."
              description="The experience starts with MongoDB-style syntax, stays self-hostable by default, and keeps storage plus performance visible to the engineers running it."
            />
          </Reveal>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {[
              {
                title: "MongoDB-style syntax",
                body: `const users = db.collection("users");

await users.insertOne({
  email: "dev@startup.in",
  plan: "pro",
});

const result = await users.find({
  plan: "pro",
});`,
              },
              {
                title: "Self-hostable by default",
                body: "Run the database inside your Node.js process, keep files under your project, and control deployment instead of handing everything to a managed black box.",
              },
              {
                title: "Direct visibility into storage and performance",
                body: "Inspect directories, snapshots, query paths and benchmark intent without vendor lock-in or hidden service behavior.",
              },
            ].map((panel, index) => (
              <Reveal key={panel.title} delay={index * 0.04}>
                <div className="card-base h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--color-ink)]">{panel.title}</h3>
                    {index === 0 ? (
                      <div className="mt-4">
                        <CodeBlock
                          code={panel.body}
                          variant="typescript"
                        />
                      </div>
                    ) : (
                      <p className="mt-4 text-sm leading-relaxed text-[var(--color-body)]">{panel.body}</p>
                    )}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {["TypeScript", "Node.js", "JSON", "Rust V2", "Self-hosted", "No lock-in"].map(
                      (badge) => (
                        <span
                          key={badge}
                          className="rounded-[var(--radius-sm)] border border-[var(--color-hairline)] bg-[var(--color-surface)] px-2 py-0.5 font-mono text-[10px] text-[var(--color-muted)]"
                        >
                          {badge}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* Roadmap */}
        <Section id="roadmap" surface>
          <Reveal>
            <SectionHeading
              eyebrow="Roadmap"
              title="Shipping the database one hard problem at a time."
              description="The roadmap separates what is live, what is being actively built, and what the August 16, 2026 pre-alpha is actually meant to validate."
            />
          </Reveal>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {roadmap.map((phase, index) => (
              <Reveal key={phase.title} delay={index * 0.04}>
                <div className="card-base h-full flex flex-col justify-between border-t-2 border-t-[var(--color-ink)]">
                  <div>
                    <h3 className="text-base font-semibold text-[var(--color-ink)]">{phase.title}</h3>
                    <ul className="mt-4 space-y-2 text-sm text-[var(--color-body)]">
                      {phase.items.map((item) => (
                        <li key={item} className="flex items-center gap-2.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-ink)]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* Founder */}
        <Section id="founder">
          <Reveal>
            <div className="card-base p-6 md:p-8">
              <div className="grid gap-8 lg:grid-cols-[280px_1fr] lg:items-center">
                <div className="mx-auto w-full max-w-[280px]">
                  <div className="relative overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-hairline-strong)] bg-[var(--color-surface)] p-2">
                    <Image
                      src={siteConfig.founderImage}
                      alt="Swaraj Puppalwar, Founder and CTO of Lioran Group"
                      width={280}
                      height={280}
                      className="h-auto w-full rounded-[var(--radius-md)] object-cover"
                    />
                    <div className="mt-2 flex items-center justify-between px-1 py-1 text-xs text-[var(--color-body)]">
                      <span className="flex items-center gap-1.5">
                        <span className="status-dot" />
                        active development
                      </span>
                      <span className="font-mono text-[11px]">@UltronTheAI</span>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="eyebrow">Founder</p>
                  <h2 className="mt-2 text-3xl font-semibold tracking-[-0.03em] text-[var(--color-ink)] sm:text-4xl">
                    Swaraj Puppalwar
                  </h2>
                  <p className="mt-1 text-sm text-[var(--color-muted)]">
                    Founder &amp; CTO, Lioran Group
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-[var(--color-body)]">
                    Swaraj Puppalwar is an 18-year-old full-stack developer, database engineer and founder building developer infrastructure from India. He began programming at 11 and is leading the architecture and development of LioranDB.
                  </p>
                  <blockquote className="mt-5 border-l-2 border-[var(--color-ink)] pl-4 text-base font-medium italic text-[var(--color-ink)]">
                    “I don&apos;t want India to only consume developer infrastructure. I want us to build it.”
                  </blockquote>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {founderSkills.map((skill) => (
                      <span key={skill} className="badge-pill">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 rounded-[var(--radius-md)] border border-[var(--color-hairline)] bg-[var(--color-surface)] px-3.5 py-2.5 font-mono text-xs text-[var(--color-ink)]">
                    swaraj@lioran:~/liorandb$ building_indias_infra
                  </div>
                  <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
                    <Link
                      href={siteConfig.founderGithubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-secondary"
                    >
                      <GitHubMark className="h-4 w-4" />
                      GitHub Profile
                    </Link>
                    <Link
                      href={siteConfig.orgGithubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-secondary"
                    >
                      Follow Lioran Group
                    </Link>
                    <Link
                      href={siteConfig.discordUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-primary"
                    >
                      Join Discord
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </Section>

        {/* Community & Open Development */}
        <Section id="community" surface>
          <Reveal>
            <SectionHeading
              eyebrow="Open Development"
              title="Watch it being built. Break it before production does."
              description="LioranDB is being developed in the open with feedback from backend engineers, founders and database enthusiasts."
            />
          </Reveal>
          <div className="mt-8 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ["Explore V2 source", siteConfig.v1GithubUrl],
                ["Read the documentation", siteConfig.docsUrl],
                ["Join Discord", siteConfig.discordUrl],
                ["Follow V2 development", siteConfig.orgGithubUrl],
              ].map(([label, href], index) => (
                <Reveal key={label} delay={index * 0.03}>
                  <Link
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="card-base h-full flex flex-col justify-between transition hover:border-[var(--color-hairline-strong)]"
                  >
                    <div>
                      <p className="text-base font-semibold text-[var(--color-ink)]">{label}</p>
                      <p className="mt-2 text-xs leading-5 text-[var(--color-body)]">
                        Public development. Source available. Feedback welcome.
                      </p>
                    </div>
                    <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-[var(--color-text-link)]">
                      Open link →
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.06}>
              <div className="card-base h-full flex flex-col justify-between">
                <div>
                  <p className="eyebrow">GitHub Activity Panel</p>
                  <div className="mt-4 space-y-2">
                    {[
                      "source_available.ts",
                      "feedback_welcome.md",
                      "v2-rust-engine.rs",
                      "benchmarks/internal-dev.json",
                    ].map((item, index) => (
                      <div
                        key={item}
                        className="flex items-center justify-between rounded-[var(--radius-sm)] border border-[var(--color-hairline)] bg-[var(--color-surface)] px-3 py-2 font-mono text-xs text-[var(--color-body)]"
                      >
                        <span className="truncate">{item}</span>
                        <span className="font-sans text-[10px] font-semibold uppercase tracking-wider text-[var(--color-muted)]">
                          {index < 2 ? "public" : "active"}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Section>

        {/* FAQ */}
        <Section id="faq">
          <Reveal>
            <SectionHeading
              eyebrow="FAQ"
              title="Straight answers for evaluating the product."
              description="The page keeps the line between V1, V2, development targets and public availability explicit."
            />
          </Reveal>
          <div className="mt-8">
            <Faq items={faqs} />
          </div>
        </Section>

        {/* Pre-Footer CTA Band */}
        <Section id="final-cta" surface>
          <Reveal>
            <div className="card-base p-8 md:p-12">
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div>
                  <h2 className="text-balance text-3xl font-semibold tracking-[-0.04em] text-[var(--color-ink)] sm:text-4xl">
                    Now you can code it. Pre-alpha is live.
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-[var(--color-body)]">
                    Get started with the Docker Quickstart. Read the docs. Join the community helping shape the production release.
                  </p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <Link
                      href={siteConfig.docsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-primary w-full justify-center sm:w-auto"
                    >
                      Read documentation
                      <ArrowRight size={15} />
                    </Link>
                    <Link
                      href={siteConfig.discordUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-secondary w-full justify-center sm:w-auto"
                    >
                      Join Discord
                    </Link>
                    <Link
                      href={siteConfig.orgGithubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-secondary w-full justify-center sm:w-auto"
                    >
                      View GitHub
                    </Link>
                  </div>
                  <p className="mt-6 text-xs text-[var(--color-muted)]">
                    From India to the global developer community.
                  </p>
                </div>

                <div>
                  <CodeBlock
                    code={`$ npm install @liorandb/driver
✓ package installed

$ liorandb start
✓ database ready`}
                    variant="terminal"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </Section>
      </main>

      <SiteFooter />
    </div>
  );
}
