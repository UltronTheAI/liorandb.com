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
  trustedPartners,
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
import TextLoop from "./text-loop";
import GlowCursor from "./glow-cursor";
import ElectricBorder from "./electric-border";
import { DrawHeading } from "./draw-heading";
import { DesktopOnly } from "./desktop-only";

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
    <div className="max-w-3xl space-y-4">
      <p className={onDark ? "eyebrow-on-dark" : "eyebrow"}>{eyebrow}</p>
      <h2
        className={`text-balance text-3xl font-medium tracking-[-0.04em] sm:text-4xl lg:text-5xl ${
          onDark ? "text-[var(--color-on-dark)]" : "text-[var(--color-ink)]"
        }`}
      >
        {title}
      </h2>
      <p
        className={`text-base leading-8 sm:text-lg ${
          onDark ? "text-[var(--color-on-dark-muted)]" : "text-[var(--color-steel)]"
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
      className={`${surface ? "section-surface" : "bg-[var(--color-canvas)]"} ${className}`}
    >
      <div className="mx-auto max-w-[1280px] px-4 py-12 md:px-8 lg:py-16">{children}</div>
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
    <GlowCursor
      id="top"
      className="min-h-screen overflow-x-clip bg-[var(--color-canvas)] text-[var(--color-ink)]"
      color="#7CFFB2"
      secondaryColor="#00ed64"
      trailLength={16}
      trailWidth={9}
      trailTaper={0.7}
      followSpeed={0.12}
      glowIntensity={1.8}
      glowSpread={1.25}
      hotspot={0.3}
      brightness={1.25}
      opacity={0.5}
      pulseSpeed={0.4}
      idleFade
      idleTimeout={400}
      fadeDuration={500}
      blendMode="normal"
      maxDevicePixelRatio={1}
    >
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
        <section id="product" className="hero-band-dark border-b border-[var(--color-hairline)]">
          <div className="mx-auto flex w-full max-w-[1280px] flex-col justify-start px-4 py-6 md:px-8 md:py-8 lg:py-10">
            <div className="grid w-full items-start gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
              <Reveal className="flex min-w-0 flex-col justify-start space-y-4 lg:space-y-5">
                <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-[var(--color-brand-green-soft)] bg-[var(--color-surface-feature)] px-3.5 py-2 text-[10px] font-medium tracking-[0.04em] text-[var(--color-charcoal)] sm:px-4 sm:text-xs sm:tracking-[0.08em]">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[var(--color-brand-green)] animate-pulse" />
                  <span className="min-w-0 truncate sm:overflow-visible sm:whitespace-normal sm:text-clip">
                    LioranDB V2 pre-alpha is live •{" "}
                    <strong className="text-[var(--color-ink)]">
                      Tested by 10+ developers &amp; received 3 real feedbacks
                    </strong>
                  </span>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <h1 className="max-w-xl text-[1.75rem] font-medium tracking-[-0.05em] text-[var(--color-ink)] xs:text-3xl sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15] xl:text-[3.25rem]">
                    <span className="block">
                      <DrawHeading strokeColor="var(--color-ink)">
                        India&apos;s developer-first
                      </DrawHeading>
                    </span>
                    <DrawHeading
                      className="text-[var(--color-brand-green-dark)]"
                      strokeColor="var(--color-brand-green-dark)"
                    >
                      document database.
                    </DrawHeading>
                  </h1>
                  <p className="max-w-xl text-base leading-7 text-[var(--color-steel)] sm:text-lg sm:leading-8">
                    High-performance document database developed in Rust — with Docker deployment and MongoDB-style APIs for startups and data-intensive apps.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link href={siteConfig.docsUrl} target="_blank" rel="noreferrer" className="btn-primary w-full justify-center sm:w-auto">
                    Read Docs
                    <ArrowRight size={16} />
                  </Link>
                  <Link href={siteConfig.discordUrl} target="_blank" rel="noreferrer" className="btn-secondary w-full justify-center sm:w-auto">
                    Join Community
                  </Link>
                  <Link href={siteConfig.appUrl} target="_blank" rel="noreferrer" className="btn-secondary w-full justify-center sm:w-auto">
                    Launch Dashboard
                  </Link>
                </div>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[var(--color-steel)]">
                  <Link
                    href={siteConfig.v1GithubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 transition hover:text-[var(--color-ink)]"
                  >
                    View source on GitHub
                    <ExternalLink size={14} />
                  </Link>
                  <span className="hidden h-1 w-1 rounded-full bg-[var(--color-hairline-strong)] sm:inline-block" />
                  <span>Self-hostable · Rust V2 · Developed in India</span>
                </div>
              </Reveal>

              <Reveal delay={0.1} className="flex min-h-0 min-w-0 w-full">
                <div className="flex w-full min-h-0 sm:min-h-[360px] lg:min-h-[420px] lg:max-h-[520px]">
                  <HeroConsole collections={heroCollections} />
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.15} className="mt-6 w-full lg:mt-8">
              <div className="w-full rounded-[var(--radius-xl)] border border-[var(--color-hairline)] bg-[var(--color-canvas)] p-5 sm:p-6 md:p-7">
                <div className="flex flex-col gap-2 border-b border-[var(--color-hairline)] pb-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="eyebrow">Currently Used &amp; Managed By</p>
                  <p className="text-xs text-[var(--color-steel)]">
                    Live production adoption &amp; brand management
                  </p>
                </div>
                <div className="mt-5 grid gap-4 md:grid-cols-3">
                  {trustedPartners.map((partner) => (
                    <div
                      key={partner.name}
                      className="flex min-w-0 items-center gap-4 rounded-[var(--radius-lg)] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-4"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-[var(--radius-md)] bg-white p-2 sm:h-14 sm:w-14">
                        <Image
                          src={partner.logo}
                          alt={`${partner.name} logo`}
                          width={56}
                          height={56}
                          className={`h-full w-full object-contain transition-transform ${
                            partner.darkLogo
                              ? "scale-[1.38] opacity-90 brightness-0 dark:brightness-0 dark:invert"
                              : ""
                          }`}
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-[var(--color-ink)] sm:text-base">
                          {partner.name}
                        </p>
                        <p className="mt-0.5 text-xs font-medium text-[var(--color-brand-green-dark)]">
                          {partner.role}
                        </p>
                        <p className="mt-1 line-clamp-1 text-xs text-[var(--color-steel)]">
                          {partner.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <Section id="status-strip">
          <Reveal className="rounded-[var(--radius-lg)] border border-[var(--color-hairline)] bg-[var(--color-canvas)] p-5 sm:p-6 md:p-8">
            <div className="grid gap-5 xl:grid-cols-[0.85fr_1fr]">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-stone)]">
                  Product status
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[var(--color-ink)]">
                  V2 is live and ready.
                </h2>
                <p className="mt-2 text-sm text-[var(--color-steel)]">
                  Pre-alpha tested with real workloads by 10+ developers with 3 detailed feedbacks incorporated.
                </p>
              </div>
              <div className="rounded-[var(--radius-lg)] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-5">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-[var(--color-ink)]">V2 Pre-alpha</span>
                  <span className="rounded-full border border-[var(--color-hairline)] px-3 py-1 text-xs uppercase tracking-[0.18em] text-[var(--color-brand-green-dark)]">
                    Launched
                  </span>
                </div>
                <dl className="mt-4 space-y-3 text-sm text-[var(--color-steel)]">
                  <div className="flex justify-between gap-4">
                    <dt>Engine</dt>
                    <dd>Rust</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt>Validation</dt>
                    <dd className="text-right text-[var(--color-brand-green-dark)] font-medium">10+ Devs (3 Real Feedbacks)</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt>Released</dt>
                    <dd>{siteConfig.preAlphaDate}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt>Alpha Launch</dt>
                    <dd className="text-right">{siteConfig.alphaLaunchDate}</dd>
                  </div>
                </dl>
                <Link
                  href={siteConfig.docsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-ink)]"
                >
                  Read the docs
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </Reveal>
        </Section>

        <Section id="get-started" surface>
          <Reveal>
            <SectionHeading
              eyebrow="Get Started"
              title="Solo Docker Quickstart"
              description="Spin up a single local LioranDB instance running directly from Docker. Everything you need to start building."
            />
          </Reveal>
          <div className="mt-10">
            <InstallPanel
              commands={installCommands}
              steps={getStartedSteps}
              code={getStartedCode}
              output={getStartedOutput}
            />
          </div>
        </Section>

        <Section id="api-explorer">
          <Reveal>
            <SectionHeading
              eyebrow="Developer API"
              title="Build with the TypeScript driver."
              description="Connect, query, index, and aggregate with familiar MongoDB-style operations. gRPC and REST APIs are also available."
            />
          </Reveal>
          <div className="mt-10">
            <ApiExplorer tabs={apiExplorerTabs} />
          </div>
        </Section>

        <Section id="v2">
          <Reveal>
            <div className="rounded-[var(--radius-lg)] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-5 sm:p-6 md:p-8">
              <span className="inline-flex rounded-full border border-[var(--color-brand-green-soft)] bg-[var(--color-surface-feature)] px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-brand-green-dark)]">
                Pre-alpha Launched
              </span>
              <div className="mt-6 grid gap-8 xl:grid-cols-[1.05fr_0.95fr]">
                <div>
                  <h2 className="max-w-3xl text-balance text-4xl font-semibold tracking-[-0.05em] text-[var(--color-ink)] md:text-5xl">
                    LioranDB V2 is built in Rust. Now you can code it.
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--color-slate)]">
                    V2 is a high-performance storage engine designed for larger
                    datasets, predictable latency, and transactional workloads. Local Docker pre-alpha is available for developer evaluation and benchmarking, while production workloads are reviewed and managed via our Founder Program. Alpha launch coming on {siteConfig.alphaLaunchDate}.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <span className="rounded-full border border-[var(--color-hairline)] bg-[var(--color-surface)] px-4 py-2 text-sm text-[var(--color-ink)]">
                      Rust engine
                    </span>
                    <span className="rounded-full border border-[var(--color-hairline)] bg-[var(--color-surface)] px-4 py-2 text-sm text-[var(--color-ink)]">
                      Pre-alpha • {siteConfig.preAlphaDate}
                    </span>
                    <span className="rounded-full border border-[var(--color-brand-green)] bg-[var(--color-surface-feature)] px-4 py-2 text-sm text-[var(--color-brand-green-dark)]">
                      Managed Hosting Available
                    </span>
                  </div>
                  <Link
                    href={siteConfig.discordUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--color-brand-green)] px-5 py-4 text-sm font-semibold text-[var(--color-on-primary)]"
                  >
                    Join the pre-alpha community
                    <ArrowRight size={16} />
                  </Link>
                </div>

                <div className="min-w-0 rounded-[var(--radius-lg)] border border-[var(--color-hairline)] bg-[var(--color-canvas)] p-4 sm:p-5">
                  <p className="mb-4 text-xs uppercase tracking-[0.22em] text-[var(--color-stone)]">
                    Architecture direction
                  </p>
                  <div className="grid gap-3">
                    {architectureFlow.map((item, index) => (
                      <div
                        key={item}
                        className="rounded-[var(--radius-lg)] border border-[var(--color-hairline-soft)] bg-[var(--color-surface)] px-4 py-4 transition-colors hover:border-[var(--color-hairline-strong)] hover:bg-[var(--color-surface-soft)]"
                      >
                        <div className="grid items-start gap-3 md:grid-cols-[1fr_140px] md:items-center">
                          <span className="text-sm font-medium text-[var(--color-ink)]">{item}</span>
                          <span className="justify-self-start rounded-full border border-[var(--color-hairline)] bg-[var(--color-surface)] px-3 py-1.5 text-xs uppercase tracking-[0.16em] text-[var(--color-steel)]">
                            {architectureStages[index]}
                          </span>
                        </div>
                      </div>
                    ))}
                    <div className="mt-2 grid gap-3 sm:grid-cols-2">
                      {architectureSideSystems.map((item) => (
                        <div
                          key={item}
                          className="rounded-[var(--radius-md)] border border-[var(--color-hairline-soft)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-slate)]"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {v2Cards.map((item, index) => (
                  <Reveal key={item} delay={index * 0.04}>
                    <div className="rounded-[var(--radius-lg)] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-5 text-sm text-[var(--color-slate)]">
                      <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-stone)]">
                        V2 focus
                      </p>
                      <p className="mt-3 text-lg font-semibold text-[var(--color-ink)]">{item}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </Section>

        <Section id="benchmarks" surface>
          <Reveal>
            <SectionHeading
              eyebrow="Internal Benchmarking"
              title="Built under pressure, not inside a toy demo."
              description="Development testing has reached datasets approaching 100 million documents, with sustained write throughput of 23-25K writes per second and 35K combined operations per second in mixed workloads."
            />
          </Reveal>
          <div className="mt-10">
            <BenchmarkDashboard metrics={benchmarkMetrics} />
          </div>
          
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <Reveal className="rounded-[var(--radius-lg)] border border-[var(--color-hairline)] bg-[var(--color-canvas)] p-5">
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-brand-green-dark)]">Hardware</h3>
              <ul className="mt-4 space-y-2 text-sm text-[var(--color-steel)]">
                <li>{benchmarkDetails.hardware.processor}</li>
                <li>{benchmarkDetails.hardware.cores}</li>
                <li>{benchmarkDetails.hardware.memory}</li>
                <li>{benchmarkDetails.hardware.storage}</li>
              </ul>
            </Reveal>
            
            <Reveal className="rounded-[var(--radius-lg)] border border-[var(--color-hairline)] bg-[var(--color-canvas)] p-5" delay={0.04}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-brand-green-dark)]">Configuration</h3>
              <ul className="mt-4 space-y-2 text-sm text-[var(--color-steel)]">
                <li>Nodes: {benchmarkDetails.configuration.nodes}</li>
                <li>Partitions: {benchmarkDetails.configuration.partitions}</li>
                <li>Threads: {benchmarkDetails.configuration.workerThreads}</li>
                <li>Batch: {benchmarkDetails.configuration.batchSize}</li>
              </ul>
            </Reveal>
            
            <Reveal className="rounded-[var(--radius-lg)] border border-[var(--color-hairline)] bg-[var(--color-canvas)] p-5" delay={0.08}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-brand-green-dark)]">Write Performance</h3>
              <p className="mt-4 text-sm text-[var(--color-slate)]">{benchmarkDetails.results.writePerformance.throughput}</p>
              <p className="mt-2 text-xs text-[var(--color-steel)]">{benchmarkDetails.results.writePerformance.description}</p>
            </Reveal>
            
            <Reveal className="rounded-[var(--radius-lg)] border border-[var(--color-hairline)] bg-[var(--color-canvas)] p-5" delay={0.12}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-brand-green-dark)]">Recovery & Durability</h3>
              <p className="mt-4 text-sm text-[var(--color-slate)]">Crash Recovery</p>
              <p className="mt-2 text-xs text-[var(--color-steel)]">WAL replay, metadata consistency, and duplicate prevention validated through repeated crash cycles.</p>
            </Reveal>
          </div>
          
          <Reveal className="mt-10 rounded-[var(--radius-lg)] border border-[var(--color-hairline)] bg-[var(--color-canvas)] p-6">
            <h3 className="text-lg font-semibold text-[var(--color-ink)]">Features Tested</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {benchmarkDetails.features.map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-sm text-[var(--color-slate)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-brand-green)]" />
                  {feature}
                </div>
              ))}
            </div>
          </Reveal>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <Reveal className="rounded-[var(--radius-lg)] border border-[var(--color-hairline)] bg-[var(--color-canvas)] p-6">
              <h3 className="text-base font-semibold text-[var(--color-ink)]">📊 Write Performance Logs</h3>
              <p className="mt-2 text-xs text-[var(--color-steel)]">23K-25K writes/sec with stable WAL group commit</p>
              <div className="mt-4 space-y-2">
                {benchmarkDetails.results.writePerformance.logs.map((log) => (
                  <Link
                    key={log}
                    href={log}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded px-3 py-2 text-xs text-[var(--color-slate)] hover:bg-[var(--color-surface)] hover:text-[var(--color-brand-green-dark)]"
                  >
                    <ExternalLink size={12} />
                    {log.split("/").pop()}
                  </Link>
                ))}
              </div>
            </Reveal>

            <Reveal className="rounded-[var(--radius-lg)] border border-[var(--color-hairline)] bg-[var(--color-canvas)] p-6" delay={0.04}>
              <h3 className="text-base font-semibold text-[var(--color-ink)]">📖 Read Performance Logs</h3>
              <p className="mt-2 text-xs text-[var(--color-steel)]">Low millisecond latency with high parallel throughput</p>
              <div className="mt-4 space-y-2">
                {benchmarkDetails.results.readPerformance.logs.map((log) => (
                  <Link
                    key={log}
                    href={log}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded px-3 py-2 text-xs text-[var(--color-slate)] hover:bg-[var(--color-surface)] hover:text-[var(--color-brand-green-dark)]"
                  >
                    <ExternalLink size={12} />
                    {log.split("/").pop()}
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            <Reveal className="rounded-[var(--radius-lg)] border border-[var(--color-hairline)] bg-[var(--color-canvas)] p-6">
              <h3 className="text-base font-semibold text-[var(--color-ink)]">🔄 Mixed Workload (Soak Test)</h3>
              <p className="mt-2 text-xs text-[var(--color-steel)]">~10K writes/sec + ~25K reads/sec = ~35K ops/sec</p>
              <Link
                href={benchmarkDetails.results.mixedWorkload.log}
                target="_blank"
                rel="noreferrer"
                className="mt-4 flex items-center gap-2 rounded px-3 py-2 text-xs text-[var(--color-slate)] hover:bg-[var(--color-surface)] hover:text-[var(--color-brand-green-dark)]"
              >
                <ExternalLink size={12} />
                {benchmarkDetails.results.mixedWorkload.log.split("/").pop()}
              </Link>
            </Reveal>

            <Reveal className="rounded-[var(--radius-lg)] border border-[var(--color-hairline)] bg-[var(--color-canvas)] p-6" delay={0.04}>
              <h3 className="text-base font-semibold text-[var(--color-ink)]">🛡️ Crash Recovery Test</h3>
              <p className="mt-2 text-xs text-[var(--color-steel)]">WAL replay & durability validation</p>
              <Link
                href={benchmarkDetails.results.crashRecovery.log}
                target="_blank"
                rel="noreferrer"
                className="mt-4 flex items-center gap-2 rounded px-3 py-2 text-xs text-[var(--color-slate)] hover:bg-[var(--color-surface)] hover:text-[var(--color-brand-green-dark)]"
              >
                <ExternalLink size={12} />
                {benchmarkDetails.results.crashRecovery.log.split("/").pop()}
              </Link>
            </Reveal>
          </div>
          
          <Reveal className="mt-6 rounded-[var(--radius-lg)] border border-[#f0e0a8] bg-[var(--color-semantic-warning-bg)] p-5 text-sm leading-7 text-[var(--color-slate)]">
            <p>All raw benchmark logs are publicly available for inspection and validation. These results demonstrate current pre-alpha capabilities rather than production guarantees. Dedicated server hardware is expected to deliver significantly higher throughput than consumer laptop testing.</p>
            <Link
              href={benchmarkDetails.logsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-[var(--color-brand-green-dark)] hover:text-[var(--color-brand-green)]"
            >
              View all benchmark logs
              <ExternalLink size={14} />
            </Link>
          </Reveal>
        </Section>

        <Section id="pricing">
          <Reveal>
            <SectionHeading
              eyebrow="Managed Database Hosting"
              title="Transparent pricing for developer infrastructure."
              description="Deploy high-performance LioranDB document database infrastructure with guaranteed throughput, automated daily backups, and direct founder engineering support."
            />
          </Reveal>

          {/* Workflow Explanation for Reviewers & Customers */}
          <Reveal className="mt-8 rounded-[var(--radius-lg)] border border-[var(--color-hairline)] bg-[var(--color-canvas)] p-5 sm:p-6 md:p-8">
            <div className="flex items-start gap-3 sm:items-center">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-[var(--color-brand-green)] bg-[var(--color-surface-feature)] text-[var(--color-brand-green-dark)]">
                <Zap size={16} />
              </span>
              <h3 className="min-w-0 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-ink)] text-balance sm:text-base sm:tracking-[0.16em]">
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
                  className="rounded-[var(--radius-lg)] border border-[var(--color-hairline-soft)] bg-[var(--color-surface)] p-4 transition hover:border-[var(--color-hairline-strong)]"
                >
                  <span className="text-xs font-mono font-bold text-[var(--color-brand-green-dark)]">
                    STEP {item.step}
                  </span>
                  <h4 className="mt-2 text-sm font-semibold text-[var(--color-ink)]">{item.title}</h4>
                  <p className="mt-2 text-xs leading-5 text-[var(--color-steel)]">{item.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Pricing Plans Grid */}
          <div className="mt-8 grid gap-5 overflow-x-clip lg:grid-cols-2">
            {pricingPlans.map((plan, index) => (
              <Reveal key={plan.id} delay={index * 0.05} className="flex">
                <ElectricBorder
                  color="#00ed64"
                  speed={plan.highlight ? 1.15 : 0.9}
                  chaos={plan.highlight ? 0.14 : 0.1}
                  borderRadius={14}
                  className="flex w-full"
                  style={{ width: "100%", borderRadius: 14 }}
                >
                  <div
                    className={`flex h-full w-full flex-col justify-between rounded-[14px] p-4 sm:p-5 ${
                      plan.highlight
                        ? "bg-[var(--color-surface-feature)]"
                        : "bg-[var(--color-canvas)]"
                    }`}
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full border border-[var(--color-hairline-strong)] bg-[var(--color-surface)] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--color-charcoal)]">
                          {plan.name}
                        </span>
                        <span
                          className={
                            plan.highlight
                              ? "badge-popular"
                              : "rounded-full border border-[var(--color-hairline)] bg-[var(--color-surface)] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--color-steel)]"
                          }
                        >
                          {plan.badge}
                        </span>
                      </div>

                      <div className="mt-4 flex items-baseline gap-1.5">
                        <span className="text-3xl font-bold tracking-tight text-[var(--color-ink)] sm:text-4xl">
                          {plan.price}
                        </span>
                        <span className="text-xs font-medium text-[var(--color-steel)]">
                          {plan.period}
                        </span>
                      </div>

                      <p className="mt-2.5 text-xs leading-5 text-[var(--color-slate)] sm:text-sm sm:leading-6">
                        {plan.description}
                      </p>

                      <div className="my-4 h-px w-full bg-[var(--color-hairline)]" />

                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-steel)]">
                        Included with plan:
                      </p>
                      <ul className="mt-2.5 space-y-2">
                        {plan.features.map((feat) => (
                          <li
                            key={feat}
                            className="flex items-start gap-2 text-xs text-[var(--color-slate)] sm:text-sm"
                          >
                            <CheckCircle2
                              size={14}
                              className="mt-0.5 shrink-0 text-[var(--color-brand-green-dark)]"
                            />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-5 space-y-3">
                      <div className="flex items-center gap-2 rounded-[var(--radius-md)] border border-[var(--color-hairline-soft)] bg-[var(--color-surface)] px-3 py-2 text-[11px] leading-4 text-[var(--color-slate)]">
                        <Clock
                          size={12}
                          className="shrink-0 text-[var(--color-accent-orange)]"
                        />
                        <span>{plan.supportNote}</span>
                      </div>

                      <Link
                        href={plan.ctaHref}
                        target="_blank"
                        rel="noreferrer"
                        className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold transition ${
                          plan.highlight
                            ? "bg-[var(--color-brand-green)] text-[var(--color-on-primary)] hover:bg-[var(--color-primary-deep)] "
                            : "border border-[var(--color-hairline-strong)] bg-[var(--color-surface)] text-[var(--color-ink)] hover:bg-[var(--color-surface-soft)]"
                        }`}
                      >
                        {plan.ctaText}
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </ElectricBorder>
              </Reveal>
            ))}
          </div>

          {/* Support & Policy Notice Box */}
          <Reveal className="mt-8 rounded-[var(--radius-lg)] border border-[var(--color-hairline)] bg-[var(--color-canvas)] p-6 sm:p-7">
            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <h4 className="flex items-center gap-2 text-sm font-semibold text-[var(--color-ink)]">
                  <Clock size={16} className="text-[var(--color-brand-green-dark)]" />
                  Support Schedule
                </h4>
                <p className="mt-2 text-xs leading-6 text-[var(--color-steel)]">
                  Direct Founder & engineering support is available daily from <strong className="text-[var(--color-charcoal)]">6:00 PM to 10:00 PM IST (4 hours nightly)</strong>, Monday to Friday. Closed on Saturdays and Sundays.
                </p>
              </div>
              <div>
                <h4 className="flex items-center gap-2 text-sm font-semibold text-[var(--color-ink)]">
                  <Server size={16} className="text-[var(--color-brand-green-mid)]" />
                  Digital Provisioning
                </h4>
                <p className="mt-2 text-xs leading-6 text-[var(--color-steel)]">
                  LioranDB provides digital cloud software and database infrastructure. Server instances and connection credentials are provisioned within 1 to 24 hours of approval. No physical shipment.
                </p>
              </div>
              <div>
                <h4 className="flex items-center gap-2 text-sm font-semibold text-[var(--color-ink)]">
                  <ShieldCheck size={16} className="text-[var(--color-accent-orange)]" />
                  Subscription & Refund Terms
                </h4>
                <p className="mt-2 text-xs leading-6 text-[var(--color-steel)]">
                  Subscriptions are billed monthly. Due to immediate allocation of dedicated server compute and storage resources upon provisioning, all payments are covered under our <Link href="/refund" className="underline text-[var(--color-charcoal)] hover:text-[var(--color-ink)]">Strict No-Refund Policy</Link>. Cancel anytime before the next billing cycle.
                </p>
              </div>
            </div>
          </Reveal>
        </Section>

        <Section id="why-india" surface>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <Reveal>
              <SectionHeading
                eyebrow="Developed in India"
                title="Indian data deserves Indian infrastructure."
                description="India’s software ecosystem should not depend entirely on infrastructure designed, owned and controlled elsewhere. LioranDB is one step toward a stronger domestic developer platform ecosystem."
              />
              <div className="india-mark mt-8 rounded-[var(--radius-lg)] border border-[var(--color-hairline)] bg-[var(--color-canvas)] p-6">
                <p className="text-2xl font-semibold tracking-[-0.04em] text-[var(--color-ink)]">
                  Developed in India. Built for the world.
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--color-steel)]">
                  LioranDB is independently developed and is not presented as an
                  official government product or initiative.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-4">
              {indiaPillars.map(([title, description], index) => (
                <Reveal key={title} delay={index * 0.04}>
                  <div className="rounded-[var(--radius-lg)] border border-[var(--color-hairline)] bg-[var(--color-canvas)] p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--color-hairline)] bg-[var(--color-surface)] text-[var(--color-brand-green-dark)]">
                      <ShieldCheck size={20} />
                    </div>
                    <h3 className="text-xl font-semibold text-[var(--color-ink)]">{title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--color-steel)]">{description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Section>

        <Section id="use-cases">
          <Reveal>
            <SectionHeading
              eyebrow="Use Cases"
              title="Designed for products that cannot afford database drama."
              description="From internal tools to SaaS backends, the page maps real collection names, query shapes and operating benefits instead of generic market segments."
            />
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {useCases.map(([title, collections, query, benefit], index) => (
              <Reveal key={title} delay={index * 0.03}>
                <div className="rounded-[var(--radius-lg)] border border-[var(--color-hairline)] bg-[var(--color-canvas)] p-5">
                  <h3 className="text-lg font-semibold text-[var(--color-ink)]">{title}</h3>
                  <p className="mt-4 text-xs uppercase tracking-[0.18em] text-[var(--color-stone)]">
                    Collections
                  </p>
                  <p className="mt-2 text-sm text-[var(--color-slate)]">{collections}</p>
                  <div className="mt-4 rounded-[var(--radius-md)] border border-[var(--color-hairline-soft)] bg-[var(--color-surface)] px-3 py-3 font-mono text-xs text-[var(--color-brand-green-dark)]">
                    {query}
                  </div>
                  <p className="mt-4 text-sm leading-7 text-[var(--color-steel)]">{benefit}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="dx">
          <Reveal>
            <SectionHeading
              eyebrow="Developer Experience"
              title="Familiar enough to start. Deep enough to grow."
              description="The experience starts with MongoDB-style syntax, stays self-hostable by default, and keeps storage plus performance visible to the engineers running it."
            />
          </Reveal>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
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
                <div className="rounded-[var(--radius-lg)] border border-[var(--color-hairline)] bg-[var(--color-canvas)] p-6">
                  <h3 className="text-xl font-semibold text-[var(--color-ink)]">{panel.title}</h3>
                  {index === 0 ? (
                    <CodeBlock
                      code={panel.body}
                      variant="typescript"
                      className="mt-5 "
                    />
                  ) : (
                    <p className="mt-5 text-sm leading-7 text-[var(--color-steel)]">{panel.body}</p>
                  )}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {["TypeScript", "Node.js", "JSON", "Rust V2", "Self-hosted", "No vendor lock-in"].map(
                      (badge) => (
                        <span
                          key={badge}
                          className="rounded-full border border-[var(--color-hairline)] bg-[var(--color-surface)] px-3 py-1 text-xs uppercase tracking-[0.14em] text-[var(--color-slate)]"
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

        <Section id="roadmap" surface>
          <Reveal>
            <SectionHeading
              eyebrow="Roadmap"
              title="Shipping the database one hard problem at a time."
              description="The roadmap separates what is live, what is being actively built, and what the August 16, 2026 pre-alpha is actually meant to validate."
            />
          </Reveal>
          <div className="mt-10 grid gap-4 xl:grid-cols-4">
            {roadmap.map((phase, index) => (
              <Reveal key={phase.title} delay={index * 0.04}>
                <div className="relative h-full rounded-[var(--radius-lg)] border border-[var(--color-hairline)] bg-[var(--color-canvas)] p-5">
                  <span className="absolute left-5 top-0 h-1 w-16 rounded-full bg-[linear-gradient(90deg,var(--color-brand-green),var(--color-brand-green-dark))]" />
                  <h3 className="pt-4 text-lg font-semibold text-[var(--color-ink)]">{phase.title}</h3>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--color-steel)]">
                    {phase.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-brand-green)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="founder">
          <Reveal>
            <div className="rounded-[var(--radius-lg)] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-6 md:p-8">
              <div className="grid gap-8 lg:grid-cols-[320px_1fr] lg:items-center">
                <div className="relative mx-auto w-full max-w-[320px]">
                  <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(0,237,100,0.22),rgba(0,237,100,0))] blur-3xl" />
                  <div className="relative overflow-hidden rounded-full border border-[var(--color-hairline-strong)] p-2">
                    <Image
                      src={siteConfig.founderImage}
                      alt="Swaraj Puppalwar, Founder and CTO of Lioran Group"
                      width={304}
                      height={304}
                      className="h-auto w-full rounded-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-10 right-4 inline-flex items-center gap-2 rounded-full border border-[var(--color-hairline)] bg-[var(--color-canvas)] px-3 py-2 text-xs text-[var(--color-steel)] shadow-[var(--shadow-1)]">
                    <span className="status-dot" />
                    building
                  </div>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-brand-green-dark)]">
                    Founder
                  </p>
                  <h2 className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-[var(--color-ink)]">
                    Swaraj Puppalwar
                  </h2>
                  <p className="mt-2 text-base text-[var(--color-steel)]">
                    Founder &amp; CTO, Lioran Group
                  </p>
                  <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--color-slate)]">
                    Swaraj Puppalwar is an 18-year-old full-stack developer,
                    database engineer and founder building developer infrastructure
                    from India. He began programming at 11 and is leading the
                    architecture and development of LioranDB.
                  </p>
                  <blockquote className="mt-6 max-w-3xl border-l-2 border-[var(--color-brand-green)] pl-5 text-xl font-medium tracking-[-0.03em] text-[var(--color-ink)]">
                    “I don&apos;t want India to only consume developer infrastructure.
                    I want us to build it.”
                  </blockquote>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {founderSkills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-[var(--color-hairline)] bg-[var(--color-surface)] px-3 py-2 text-xs uppercase tracking-[0.16em] text-[var(--color-slate)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <p className="mt-6 overflow-x-auto rounded-[var(--radius-md)] border border-[var(--color-hairline)] bg-[var(--color-surface)] px-4 py-4 font-mono text-xs text-[var(--color-brand-green-dark)] sm:text-sm break-all sm:break-normal">
                    swaraj@lioran:~/liorandb$ building_indias_infra
                  </p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href={siteConfig.founderGithubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--color-hairline-strong)] bg-[var(--color-surface)] px-5 py-4 text-sm font-medium text-[var(--color-ink)]"
                    >
                      <GitHubMark className="h-4 w-4" />
                      GitHub profile
                    </Link>
                    <Link
                      href={siteConfig.orgGithubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-full border border-[var(--color-hairline-strong)] bg-[var(--color-surface)] px-5 py-4 text-sm font-medium text-[var(--color-ink)]"
                    >
                      Follow Lioran Group
                    </Link>
                    <Link
                      href={siteConfig.discordUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-full bg-[var(--color-brand-green)] px-5 py-4 text-sm font-semibold text-[var(--color-on-primary)]"
                    >
                      Join Discord
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </Section>

        <Section id="community">
          <Reveal>
            <SectionHeading
              eyebrow="Open Development"
              title="Watch it being built. Break it before production does."
              description="LioranDB is being developed in the open with feedback from backend engineers, founders and database enthusiasts."
            />
          </Reveal>
          <div className="mt-10 grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
            <div className="grid auto-rows-fr gap-4 md:grid-cols-2">
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
                    className="flex h-full min-h-[176px] flex-col rounded-[var(--radius-lg)] border border-[var(--color-hairline)] bg-[var(--color-canvas)] p-5 sm:p-6 transition hover:border-[var(--color-hairline-strong)] hover:shadow-[var(--shadow-1)]"
                  >
                    <p className="text-lg font-semibold text-[var(--color-ink)]">{label}</p>
                    <p className="mt-3 text-sm leading-7 text-[var(--color-steel)]">
                      Public development. Source available. Feedback welcome.
                    </p>
                    <span className="mt-auto pt-6 text-sm font-medium text-[var(--color-brand-green-dark)]">
                      Open link →
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.08}>
              <div className="min-w-0 rounded-[var(--radius-lg)] border border-[var(--color-hairline)] bg-[var(--color-canvas)] p-5 sm:p-6">
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-stone)]">
                  GitHub activity panel
                </p>
                <div className="mt-5 grid gap-3">
                  {[
                    "source_available.ts",
                    "feedback_welcome.md",
                    "v2-rust-engine.rs",
                    "benchmarks/internal-dev.json",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="flex min-w-0 items-center justify-between gap-3 rounded-[var(--radius-md)] border border-[var(--color-hairline-soft)] bg-[var(--color-surface)] px-3 py-3 font-mono text-xs text-[var(--color-slate)] sm:px-4 sm:text-sm"
                    >
                      <span className="min-w-0 truncate">{item}</span>
                      <span className="shrink-0 text-[10px] uppercase tracking-[0.16em] text-[var(--color-stone)] sm:text-xs sm:tracking-[0.2em]">
                        {index < 2 ? "public" : "active"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Section>

        <Section id="faq" surface>
          <Reveal>
            <SectionHeading
              eyebrow="FAQ"
              title="Straight answers for evaluating the product."
              description="The page keeps the line between V1, V2, development targets and public availability explicit."
            />
          </Reveal>
          <div className="mt-10">
            <Faq items={faqs} />
          </div>
        </Section>

        <Section id="final-cta" surface>
          <Reveal>
            <div className="cta-banner-dark p-8 md:p-12">
              <div className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <h2 className="text-balance text-4xl font-medium tracking-[-0.05em] text-[var(--color-ink)] md:text-5xl">
                    Now you can code it. Pre-alpha is live.
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--color-steel)]">
                    Get started with the Docker Quickstart. Read the docs. Join the
                    community helping shape the production release.
                  </p>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <Link href={siteConfig.docsUrl} target="_blank" rel="noreferrer" className="btn-primary w-full justify-center sm:w-auto">
                      Read documentation
                    </Link>
                    <Link href={siteConfig.discordUrl} target="_blank" rel="noreferrer" className="btn-secondary w-full justify-center sm:w-auto">
                      Join Discord
                    </Link>
                    <Link href={siteConfig.orgGithubUrl} target="_blank" rel="noreferrer" className="btn-secondary w-full justify-center sm:w-auto">
                      View GitHub
                    </Link>
                  </div>
                  <p className="mt-6 text-sm text-[var(--color-stone)]">
                    From India to the global developer community.
                  </p>
                </div>
                <div className="code-mockup-card p-5">
                  <CodeBlock
                    code={`$ npm install @liorandb/driver
✓ package installed

$ liorandb start
✓ database ready`}
                    variant="terminal"
                    className="border-0 bg-transparent p-0"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </Section>
      </main>

      <DesktopOnly>
        <div className="overflow-hidden">
          <TextLoop
            text="LioranDB ✦ Document Database ✦ Built in India"
            shape="wave"
            speed={90}
            direction="forward"
            separator="✦"
            curviness={50}
            fontSize={26}
            fontWeight={700}
            letterSpacing={1.5}
            uppercase
            color="var(--color-brand-green-dark)"
            ribbon={false}
            pauseOnHover={false}
          />
        </div>
      </DesktopOnly>

      <SiteFooter />
    </GlowCursor>
  );
}
