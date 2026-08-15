import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, ShieldCheck } from "lucide-react";
import {
  apiExplorerTabs,
  architectureFlow,
  architectureSideSystems,
  benchmarkDetails,
  benchmarkMetrics,
  faqs,
  footerColumns,
  founderSkills,
  getStartedCode,
  getStartedOutput,
  getStartedSteps,
  heroCode,
  heroOutput,
  indiaPillars,
  installCommands,
  navItems,
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

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl space-y-4">
      <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--color-primary)]">
        {eyebrow}
      </p>
      <h2 className="text-balance text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="text-base leading-8 text-zinc-400 sm:text-lg">{description}</p>
    </div>
  );
}

function Section({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:py-24">
      {children}
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
    <div id="top" className="min-h-screen overflow-x-clip bg-[var(--color-bg)] text-[var(--color-text)]">
      <div className="page-grid pointer-events-none fixed inset-0 opacity-100" />
      <div className="page-glow page-glow-top" />
      <div className="page-glow page-glow-mid" />
      <SiteHeader
        navItems={navItems}
        docsUrl={siteConfig.docsUrl}
        studioUrl={siteConfig.studioUrl}
        discordUrl={siteConfig.discordUrl}
        githubUrl={siteConfig.v1GithubUrl}
      />

      <main>
        <Section id="product">
          <div className="grid items-center gap-10 pt-8 sm:gap-12 sm:pt-10 lg:grid-cols-[1.02fr_0.98fr] lg:pt-16">
            <Reveal className="min-w-0 space-y-8">
              <div className="inline-flex max-w-full flex-wrap items-center rounded-sm border border-white/12 bg-white/[0.03] px-3 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-zinc-300 sm:px-4 sm:text-xs sm:tracking-[0.18em]">
                LioranDB V2 pre-alpha launched on {siteConfig.preAlphaDate}. Alpha coming {siteConfig.alphaLaunchDate}
              </div>
              <div className="space-y-6">
                <h1 className="max-w-4xl text-balance text-4xl font-semibold tracking-[-0.065em] text-white xs:text-[2.8rem] sm:text-6xl lg:text-7xl">
                  India&apos;s developer-first{" "}
                  <span className="text-gradient">document database.</span>
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
                  High-performance document database developed in Rust.
                </p>
                <p className="max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
                  LioranDB V2 is a developer-first document database with Rust performance, Docker deployment, and APIs designed for startups, SaaS platforms, APIs and data-intensive applications. Pre-alpha is live now.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href={siteConfig.docsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-[10px] bg-[var(--color-primary)] px-5 py-4 text-sm font-semibold text-black transition hover:bg-[var(--color-primary-bright)]"
                >
                  Read Docs
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href={siteConfig.discordUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-[10px] border border-white/12 bg-white/5 px-5 py-4 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  Join Community
                </Link>
              </div>
              <Link
                href={siteConfig.v1GithubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
              >
                View source on GitHub
                <ExternalLink size={14} />
              </Link>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {[
                  "Developed in India",
                  "Self-hostable",
                  "Developer-first",
                  "MongoDB-style API",
                  "Rust-powered V2",
                  "1 year old",
                ].map((item) => (
                  <span
                    key={item}
                    className="inline-flex rounded-full border border-white/10 bg-white/4 px-3 py-2 text-xs text-zinc-300 sm:px-4 sm:text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1} className="min-w-0">
              <HeroConsole code={heroCode} output={heroOutput} />
            </Reveal>
          </div>
        </Section>

        <Section id="status-strip">
          <Reveal className="rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(14,14,18,0.9),rgba(10,10,12,0.92))] p-5 sm:p-6 md:p-8">
            <div className="grid gap-5 xl:grid-cols-[0.85fr_1fr]">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
                  Product status
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white">
                  V2 is live and ready.
                </h2>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-black/30 p-5">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-white">V2 Pre-alpha</span>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-[var(--color-primary)]">
                    Launched
                  </span>
                </div>
                <dl className="mt-4 space-y-3 text-sm text-zinc-400">
                  <div className="flex justify-between gap-4">
                    <dt>Engine</dt>
                    <dd>Rust</dd>
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
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white"
                >
                  Read the docs
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </Reveal>
        </Section>

        <Section id="get-started">
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
            <div className="rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(22,22,24,0.94),rgba(10,10,12,0.98))] p-5 sm:p-6 md:p-8">
              <span className="inline-flex rounded-full border border-[rgba(46,229,157,0.14)] bg-[rgba(46,229,157,0.05)] px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] text-[#2ee59d]">
                Pre-alpha Launched
              </span>
              <div className="mt-6 grid gap-8 xl:grid-cols-[1.05fr_0.95fr]">
                <div>
                  <h2 className="max-w-3xl text-balance text-4xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
                    LioranDB V2 is built in Rust. Now you can code it.
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-300">
                    V2 is a high-performance storage engine designed for larger
                    datasets, predictable latency, transactional workloads and
                    production-focused observability. Docker deployment is ready. Alpha launch coming on {siteConfig.alphaLaunchDate}.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white">
                      Rust engine
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white">
                      Pre-alpha • {siteConfig.preAlphaDate}
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white">
                      Not production-ready
                    </span>
                  </div>
                  <Link
                    href={siteConfig.discordUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-flex items-center gap-2 rounded-[10px] bg-[var(--color-primary)] px-5 py-4 text-sm font-semibold text-black"
                  >
                    Join the pre-alpha community
                    <ArrowRight size={16} />
                  </Link>
                </div>

                <div className="min-w-0 rounded-[24px] border border-white/10 bg-[rgba(8,10,12,0.72)] p-4 sm:p-5">
                  <p className="mb-4 text-xs uppercase tracking-[0.22em] text-zinc-500">
                    Architecture direction
                  </p>
                  <div className="grid gap-3">
                    {architectureFlow.map((item, index) => (
                      <div
                        key={item}
                        className="rounded-[18px] border border-white/8 bg-[rgba(255,255,255,0.02)] px-4 py-4 transition-colors hover:border-white/12 hover:bg-[rgba(255,255,255,0.03)]"
                      >
                        <div className="grid items-start gap-3 md:grid-cols-[1fr_140px] md:items-center">
                          <span className="text-sm font-medium text-white">{item}</span>
                          <span className="justify-self-start rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs uppercase tracking-[0.16em] text-zinc-400">
                            {architectureStages[index]}
                          </span>
                        </div>
                      </div>
                    ))}
                    <div className="mt-2 grid gap-3 sm:grid-cols-2">
                      {architectureSideSystems.map((item) => (
                        <div
                          key={item}
                          className="rounded-[14px] border border-white/8 bg-black/20 px-4 py-3 text-sm text-zinc-300"
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
                    <div className="rounded-[20px] border border-white/10 bg-black/30 p-5 text-sm text-zinc-300">
                      <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
                        V2 focus
                      </p>
                      <p className="mt-3 text-lg font-semibold text-white">{item}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </Section>

        <Section id="benchmarks">
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
            <Reveal className="rounded-[22px] border border-white/10 bg-[var(--color-elevated)] p-5">
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)]">Hardware</h3>
              <ul className="mt-4 space-y-2 text-sm text-zinc-400">
                <li>{benchmarkDetails.hardware.processor}</li>
                <li>{benchmarkDetails.hardware.cores}</li>
                <li>{benchmarkDetails.hardware.memory}</li>
                <li>{benchmarkDetails.hardware.storage}</li>
              </ul>
            </Reveal>
            
            <Reveal className="rounded-[22px] border border-white/10 bg-[var(--color-elevated)] p-5" delay={0.04}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)]">Configuration</h3>
              <ul className="mt-4 space-y-2 text-sm text-zinc-400">
                <li>Nodes: {benchmarkDetails.configuration.nodes}</li>
                <li>Partitions: {benchmarkDetails.configuration.partitions}</li>
                <li>Threads: {benchmarkDetails.configuration.workerThreads}</li>
                <li>Batch: {benchmarkDetails.configuration.batchSize}</li>
              </ul>
            </Reveal>
            
            <Reveal className="rounded-[22px] border border-white/10 bg-[var(--color-elevated)] p-5" delay={0.08}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)]">Write Performance</h3>
              <p className="mt-4 text-sm text-zinc-300">{benchmarkDetails.results.writePerformance.throughput}</p>
              <p className="mt-2 text-xs text-zinc-400">{benchmarkDetails.results.writePerformance.description}</p>
            </Reveal>
            
            <Reveal className="rounded-[22px] border border-white/10 bg-[var(--color-elevated)] p-5" delay={0.12}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)]">Recovery & Durability</h3>
              <p className="mt-4 text-sm text-zinc-300">Crash Recovery</p>
              <p className="mt-2 text-xs text-zinc-400">WAL replay, metadata consistency, and duplicate prevention validated through repeated crash cycles.</p>
            </Reveal>
          </div>
          
          <Reveal className="mt-10 rounded-[20px] border border-white/10 bg-[var(--color-elevated)] p-6">
            <h3 className="text-lg font-semibold text-white">Features Tested</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {benchmarkDetails.features.map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-sm text-zinc-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]" />
                  {feature}
                </div>
              ))}
            </div>
          </Reveal>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <Reveal className="rounded-[20px] border border-white/10 bg-[var(--color-elevated)] p-6">
              <h3 className="text-base font-semibold text-white">📊 Write Performance Logs</h3>
              <p className="mt-2 text-xs text-zinc-400">23K-25K writes/sec with stable WAL group commit</p>
              <div className="mt-4 space-y-2">
                {benchmarkDetails.results.writePerformance.logs.map((log) => (
                  <Link
                    key={log}
                    href={log}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded px-3 py-2 text-xs text-zinc-300 hover:bg-white/5 hover:text-[var(--color-primary)]"
                  >
                    <ExternalLink size={12} />
                    {log.split("/").pop()}
                  </Link>
                ))}
              </div>
            </Reveal>

            <Reveal className="rounded-[20px] border border-white/10 bg-[var(--color-elevated)] p-6" delay={0.04}>
              <h3 className="text-base font-semibold text-white">📖 Read Performance Logs</h3>
              <p className="mt-2 text-xs text-zinc-400">Low millisecond latency with high parallel throughput</p>
              <div className="mt-4 space-y-2">
                {benchmarkDetails.results.readPerformance.logs.map((log) => (
                  <Link
                    key={log}
                    href={log}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded px-3 py-2 text-xs text-zinc-300 hover:bg-white/5 hover:text-[var(--color-primary)]"
                  >
                    <ExternalLink size={12} />
                    {log.split("/").pop()}
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            <Reveal className="rounded-[20px] border border-white/10 bg-[var(--color-elevated)] p-6">
              <h3 className="text-base font-semibold text-white">🔄 Mixed Workload (Soak Test)</h3>
              <p className="mt-2 text-xs text-zinc-400">~10K writes/sec + ~25K reads/sec = ~35K ops/sec</p>
              <Link
                href={benchmarkDetails.results.mixedWorkload.log}
                target="_blank"
                rel="noreferrer"
                className="mt-4 flex items-center gap-2 rounded px-3 py-2 text-xs text-zinc-300 hover:bg-white/5 hover:text-[var(--color-primary)]"
              >
                <ExternalLink size={12} />
                {benchmarkDetails.results.mixedWorkload.log.split("/").pop()}
              </Link>
            </Reveal>

            <Reveal className="rounded-[20px] border border-white/10 bg-[var(--color-elevated)] p-6" delay={0.04}>
              <h3 className="text-base font-semibold text-white">🛡️ Crash Recovery Test</h3>
              <p className="mt-2 text-xs text-zinc-400">WAL replay & durability validation</p>
              <Link
                href={benchmarkDetails.results.crashRecovery.log}
                target="_blank"
                rel="noreferrer"
                className="mt-4 flex items-center gap-2 rounded px-3 py-2 text-xs text-zinc-300 hover:bg-white/5 hover:text-[var(--color-primary)]"
              >
                <ExternalLink size={12} />
                {benchmarkDetails.results.crashRecovery.log.split("/").pop()}
              </Link>
            </Reveal>
          </div>
          
          <Reveal className="mt-6 rounded-[20px] border border-[rgba(255,209,102,0.16)] bg-[rgba(255,209,102,0.06)] p-5 text-sm leading-7 text-zinc-300">
            <p>All raw benchmark logs are publicly available for inspection and validation. These results demonstrate current pre-alpha capabilities rather than production guarantees. Dedicated server hardware is expected to deliver significantly higher throughput than consumer laptop testing.</p>
            <Link
              href={benchmarkDetails.logsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-[var(--color-primary)] hover:text-[var(--color-primary-bright)]"
            >
              View all benchmark logs
              <ExternalLink size={14} />
            </Link>
          </Reveal>
        </Section>

        <Section id="why-india">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <Reveal>
              <SectionHeading
                eyebrow="Developed in India"
                title="Indian data deserves Indian infrastructure."
                description="India’s software ecosystem should not depend entirely on infrastructure designed, owned and controlled elsewhere. LioranDB is one step toward a stronger domestic developer platform ecosystem."
              />
              <div className="india-mark mt-8 rounded-[28px] border border-white/10 bg-[var(--color-elevated)] p-6">
                <p className="text-2xl font-semibold tracking-[-0.04em] text-white">
                  Developed in India. Built for the world.
                </p>
                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  LioranDB is independently developed and is not presented as an
                  official government product or initiative.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-4">
              {indiaPillars.map(([title, description], index) => (
                <Reveal key={title} delay={index * 0.04}>
                  <div className="rounded-[22px] border border-white/10 bg-[var(--color-elevated)] p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/25 text-[var(--color-primary)]">
                      <ShieldCheck size={20} />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{title}</h3>
                    <p className="mt-3 text-sm leading-7 text-zinc-400">{description}</p>
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
                <div className="rounded-[22px] border border-white/10 bg-[var(--color-card)] p-5">
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                  <p className="mt-4 text-xs uppercase tracking-[0.18em] text-zinc-500">
                    Collections
                  </p>
                  <p className="mt-2 text-sm text-zinc-300">{collections}</p>
                  <div className="mt-4 rounded-[14px] border border-white/8 bg-black/35 px-3 py-3 font-mono text-xs text-[var(--color-primary)]">
                    {query}
                  </div>
                  <p className="mt-4 text-sm leading-7 text-zinc-400">{benefit}</p>
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
                <div className="rounded-[24px] border border-white/10 bg-[var(--color-elevated)] p-6">
                  <h3 className="text-xl font-semibold text-white">{panel.title}</h3>
                  {index === 0 ? (
                    <CodeBlock
                      code={panel.body}
                      variant="typescript"
                      className="mt-5 bg-[linear-gradient(180deg,rgba(8,10,14,0.92),rgba(6,7,10,0.96))] text-zinc-200"
                    />
                  ) : (
                    <p className="mt-5 text-sm leading-7 text-zinc-400">{panel.body}</p>
                  )}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {["TypeScript", "Node.js", "JSON", "Rust V2", "Self-hosted", "No vendor lock-in"].map(
                      (badge) => (
                        <span
                          key={badge}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.14em] text-zinc-300"
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

        <Section id="roadmap">
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
                <div className="relative h-full rounded-[22px] border border-white/10 bg-[var(--color-elevated)] p-5">
                  <span className="absolute left-5 top-0 h-1 w-16 rounded-full bg-[linear-gradient(90deg,var(--color-primary),var(--color-cyan))]" />
                  <h3 className="pt-4 text-lg font-semibold text-white">{phase.title}</h3>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-zinc-400">
                    {phase.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-primary)]" />
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
            <div className="rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(12,12,15,0.94),rgba(8,8,10,0.98))] p-6 md:p-8">
              <div className="grid gap-8 lg:grid-cols-[320px_1fr] lg:items-center">
                <div className="relative mx-auto w-full max-w-[320px]">
                  <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(46,229,157,0.28),rgba(46,229,157,0))] blur-3xl" />
                  <div className="relative overflow-hidden rounded-full border border-[var(--color-border-strong)] p-2">
                    <Image
                      src={siteConfig.founderImage}
                      alt="Swaraj Puppalwar, Founder and CTO of Lioran Group"
                      width={304}
                      height={304}
                      className="h-auto w-full rounded-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-10 right-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/75 px-3 py-2 text-xs text-zinc-300">
                    <span className="status-dot" />
                    building
                  </div>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-primary)]">
                    Founder
                  </p>
                  <h2 className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-white">
                    Swaraj Puppalwar
                  </h2>
                  <p className="mt-2 text-base text-zinc-400">
                    Founder &amp; CTO, Lioran Group
                  </p>
                  <p className="mt-5 max-w-3xl text-base leading-8 text-zinc-300">
                    Swaraj Puppalwar is an 18-year-old full-stack developer,
                    database engineer and founder building developer infrastructure
                    from India. He began programming at 11 and is leading the
                    architecture and development of LioranDB.
                  </p>
                  <blockquote className="mt-6 max-w-3xl border-l border-[var(--color-primary)] pl-5 text-xl font-medium tracking-[-0.03em] text-white">
                    “I don&apos;t want India to only consume developer infrastructure.
                    I want us to build it.”
                  </blockquote>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {founderSkills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.16em] text-zinc-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <p className="mt-6 rounded-[16px] border border-white/10 bg-black/30 px-4 py-4 font-mono text-sm text-[var(--color-primary)]">
                    swaraj@lioran:~/liorandb$ building_indias_infra
                  </p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href={siteConfig.founderGithubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-[10px] border border-white/12 bg-white/5 px-5 py-4 text-sm font-medium text-white"
                    >
                      <GitHubMark className="h-4 w-4" />
                      GitHub profile
                    </Link>
                    <Link
                      href={siteConfig.orgGithubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-[10px] border border-white/12 bg-white/5 px-5 py-4 text-sm font-medium text-white"
                    >
                      Follow Lioran Group
                    </Link>
                    <Link
                      href={siteConfig.discordUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-[10px] bg-[var(--color-primary)] px-5 py-4 text-sm font-semibold text-black"
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
                    className="flex h-full min-h-[176px] flex-col rounded-[22px] border border-white/10 bg-[var(--color-elevated)] p-5 sm:p-6 transition hover:border-[var(--color-border-strong)]"
                  >
                    <p className="text-lg font-semibold text-white">{label}</p>
                    <p className="mt-3 text-sm leading-7 text-zinc-400">
                      Public development. Source available. Feedback welcome.
                    </p>
                    <span className="mt-auto pt-6 text-sm font-medium text-[var(--color-primary)]">
                      Open link →
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.08}>
              <div className="min-w-0 rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(14,14,18,0.92),rgba(8,8,10,0.98))] p-5 sm:p-6">
                <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
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
                      className="flex items-center justify-between rounded-[16px] border border-white/8 bg-black/25 px-4 py-3 font-mono text-sm text-zinc-300"
                    >
                      <span>{item}</span>
                      <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                        {index < 2 ? "public" : "active"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Section>

        <Section id="faq">
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

        <Section id="final-cta">
          <Reveal>
            <div className="rounded-[30px] border border-[var(--color-border-strong)] bg-[linear-gradient(180deg,rgba(46,229,157,0.08),rgba(8,8,10,0.98))] p-6 md:p-8">
              <div className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <h2 className="text-balance text-4xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
                    Now you can code it. Pre-alpha is live.
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-300">
                    Get started with the Docker Quickstart. Read the docs. Join the
                    community helping shape the production release.
                  </p>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href={siteConfig.docsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-[10px] bg-[var(--color-primary)] px-5 py-4 text-sm font-semibold text-black"
                    >
                      Read documentation
                    </Link>
                    <Link
                      href={siteConfig.discordUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-[10px] border border-white/12 bg-white/5 px-5 py-4 text-sm font-medium text-white"
                    >
                      Join Discord
                    </Link>
                    <Link
                      href={siteConfig.orgGithubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-[10px] border border-white/12 bg-white/5 px-5 py-4 text-sm font-medium text-white"
                    >
                      View GitHub
                    </Link>
                  </div>
                  <p className="mt-6 text-sm text-zinc-400">
                    From India to the global developer community.
                  </p>
                </div>
                <div className="rounded-[24px] border border-white/10 bg-black/45 p-5">
                  <CodeBlock
                    code={`$ npm install @liorandb/driver
✓ package installed

$ liorandb start
✓ database ready`}
                    variant="terminal"
                    className="border-0 bg-transparent p-0 text-zinc-200"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </Section>
      </main>

      <footer className="mx-auto max-w-7xl px-4 pb-16 pt-8 md:px-6">
        <div className="grid gap-8 rounded-[28px] border border-white/10 bg-[var(--color-elevated)] p-5 sm:p-6 md:grid-cols-2 xl:grid-cols-5">
          <div className="xl:col-span-1">
            <p className="text-xl font-semibold text-white">LioranDB</p>
            <p className="mt-3 text-sm leading-7 text-zinc-400">
              Built with care, Rust, TypeScript and an unreasonable number of
              database benchmarks.
            </p>
          </div>
          {footerColumns.map((column) => (
            <div key={column.title}>
              <p className="text-sm font-semibold text-white">{column.title}</p>
              <div className="mt-4 space-y-3">
                {column.links.map(([label, href]) => (
                  <Link
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    className="block text-sm text-zinc-400 transition hover:text-white"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-col gap-3 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Lioran Developer Solutions. LioranDB is developed in India.</p>
          <p>Aligned with the vision of keeping Indian data in India.</p>
        </div>
      </footer>
    </div>
  );
}
