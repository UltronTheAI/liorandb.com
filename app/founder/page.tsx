import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BookOpen,
  Code2,
  Cpu,
  ExternalLink,
  Mail,
  MessageSquareText,
  Shield,
  Sparkles,
  Terminal,
} from "lucide-react";
import { SiteHeader } from "@/components/landing/site-header";
import { SiteFooter } from "@/components/landing/site-footer";
import { GitHubMark } from "@/components/landing/github-mark";
import {
  founderSkills,
  navItems,
  siteConfig,
} from "@/data/site";

export const metadata: Metadata = {
  title: "Founder — Swaraj Puppalwar | LioranDB",
  description:
    "Meet Swaraj Puppalwar (@UltronTheAI), 18-year-old database engineer and Founder & CTO of Lioran Developer Solutions, building India's high-performance document database in Rust.",
};

export default function FounderPage() {
  const milestones = [
    {
      year: "Age 11",
      title: "Started Programming",
      desc: "Discovered low-level systems programming, backend architectures, and database internals.",
    },
    {
      year: "2024–2025",
      title: "LioranDB V1 & Ecosystem",
      desc: "Built early TypeScript document database prototypes and founded Lioran Group developer initiatives.",
    },
    {
      year: "August 2026",
      title: "LioranDB V2 Pre-alpha Launched",
      desc: "Rewrote storage engine from scratch in Rust, reaching 25K+ writes/sec and 35K ops/sec in soak tests.",
    },
    {
      year: "October 2026",
      title: "V2 Alpha Launch",
      desc: "Expanding the managed cloud database hosting service, driver ecosystem, and multi-node testing.",
    },
  ];

  return (
    <div className="min-h-screen overflow-x-clip bg-[var(--color-canvas)] text-[var(--color-ink)] font-sans">
      <SiteHeader
        navItems={navItems}
        appUrl={siteConfig.appUrl}
        docsUrl={siteConfig.docsUrl}
        studioUrl={siteConfig.studioUrl}
        discordUrl={siteConfig.discordUrl}
        githubUrl={siteConfig.v1GithubUrl}
        githubRepo={siteConfig.githubRepo}
      />

      <main className="mx-auto max-w-[1200px] px-4 py-8 sm:px-6 md:py-16 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link
            href="/"
            className="btn-link inline-flex items-center gap-1.5 text-sm font-medium"
          >
            ← Back to Overview
          </Link>
        </div>

        {/* Hero Card */}
        <div className="card-base p-6 sm:p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 lg:gap-12 items-center">
            {/* Founder Avatar Box */}
            <div className="mx-auto w-full max-w-[280px]">
              <div className="relative overflow-hidden rounded-[var(--radius-xl)] border-2 border-[var(--color-hairline-strong)] bg-[var(--color-surface)] p-2 shadow-lg">
                <Image
                  src={siteConfig.founderImage}
                  alt="Swaraj Puppalwar"
                  width={300}
                  height={300}
                  className="h-auto w-full rounded-[var(--radius-lg)] object-cover"
                  priority
                />
                <div className="mt-3 flex items-center justify-between px-2 py-1 text-xs">
                  <span className="font-semibold text-[var(--color-ink)]">Swaraj Puppalwar</span>
                  <span className="font-mono text-[11px] text-[var(--color-muted)]">@UltronTheAI</span>
                </div>
              </div>
            </div>

            {/* Founder Intro Content */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="badge-pill">Founder &amp; CTO</span>
                <span className="badge-pill">Database Engineer</span>
                <span className="badge-pill">Age 18</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[var(--color-ink)]">
                Swaraj Puppalwar
              </h1>

              <p className="text-sm font-medium text-[var(--color-muted)]">
                Founder &amp; CTO at {siteConfig.legalEntity} (Lioran Group)
              </p>

              <p className="text-base sm:text-lg leading-relaxed text-[var(--color-body)]">
                Swaraj Puppalwar is an 18-year-old software engineer and founder leading the design and implementation of LioranDB. Programming since age 11, Swaraj is building high-concurrency database storage engines in Rust to bring sovereign developer infrastructure to India.
              </p>

              <blockquote className="border-l-2 border-[var(--color-ink)] pl-4 py-1 text-base sm:text-lg font-medium italic text-[var(--color-ink)]">
                “I don&apos;t want India to only consume developer infrastructure. I want us to build it.”
              </blockquote>

              <div className="pt-2 flex flex-wrap gap-2.5">
                <Link
                  href={siteConfig.founderGithubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary inline-flex items-center gap-2 text-sm"
                >
                  <GitHubMark className="h-4 w-4" />
                  <span>GitHub @UltronTheAI</span>
                  <ExternalLink size={13} />
                </Link>
                <Link
                  href={siteConfig.discordUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary inline-flex items-center gap-2 text-sm"
                >
                  <MessageSquareText size={15} />
                  <span>Chat on Discord</span>
                </Link>
                <Link
                  href={`mailto:${siteConfig.supportEmail}`}
                  className="btn-secondary inline-flex items-center gap-2 text-sm"
                >
                  <Mail size={15} />
                  <span>Email Swaraj</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Philosophy & Story */}
        <div className="mt-12 sm:mt-16 grid gap-8 lg:grid-cols-2">
          <div className="card-base p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center rounded-[var(--radius-sm)] border border-[var(--color-hairline-strong)] bg-[var(--color-surface)] text-[var(--color-ink)]">
                <Code2 size={16} />
              </span>
              <h2 className="text-xl font-semibold text-[var(--color-ink)]">
                Technical Philosophy
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-[var(--color-body)]">
              When designing LioranDB V2, Swaraj opted against wrapping SQLite or building another thin abstraction layer over existing database engines. Instead, he chose to implement a pure Rust storage engine with custom B+ Tree pages, Multi-Version Concurrency Control (MVCC), and crash-resilient write-ahead logs.
            </p>
            <p className="text-sm leading-relaxed text-[var(--color-body)]">
              The goal: deliver deterministic latency, low-overhead resource consumption on consumer and enterprise NVMe hardware alike, and zero-compromise developer ergonomics.
            </p>
          </div>

          <div className="card-base p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center rounded-[var(--radius-sm)] border border-[var(--color-hairline-strong)] bg-[var(--color-surface)] text-[var(--color-ink)]">
                <Shield size={16} />
              </span>
              <h2 className="text-xl font-semibold text-[var(--color-ink)]">
                Direct Founder Support Promise
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-[var(--color-body)]">
              Unlike faceless hyperscaler clouds where support tickets disappear into automated bots, Swaraj personally reviews database workloads and provides direct engineering support for managed hosting customers.
            </p>
            <div className="rounded-[var(--radius-md)] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-3.5 text-xs text-[var(--color-body)] space-y-1 font-mono">
              <div className="font-semibold text-[var(--color-ink)]">Official Support Hours:</div>
              <div>Monday to Friday: 6:00 PM – 10:00 PM IST (4 hours daily)</div>
              <div>Saturday &amp; Sunday: Off (Weekend testing &amp; R&amp;D)</div>
            </div>
          </div>
        </div>

        {/* Core Expertise & Stack */}
        <div className="mt-12 sm:mt-16">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <p className="eyebrow">Engineering Focus</p>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--color-ink)]">
              Core Technical Skills
            </h2>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-2.5 max-w-3xl mx-auto">
            {founderSkills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-[var(--color-hairline-strong)] bg-[var(--color-surface-card)] px-4 py-2 text-sm font-medium text-[var(--color-ink)] shadow-sm"
              >
                {skill}
              </span>
            ))}
            <span className="rounded-full border border-[var(--color-hairline-strong)] bg-[var(--color-surface-card)] px-4 py-2 text-sm font-medium text-[var(--color-ink)] shadow-sm">
              MVCC &amp; WAL
            </span>
            <span className="rounded-full border border-[var(--color-hairline-strong)] bg-[var(--color-surface-card)] px-4 py-2 text-sm font-medium text-[var(--color-ink)] shadow-sm">
              B+ Tree Indexing
            </span>
            <span className="rounded-full border border-[var(--color-hairline-strong)] bg-[var(--color-surface-card)] px-4 py-2 text-sm font-medium text-[var(--color-ink)] shadow-sm">
              LSM Trees &amp; Compaction
            </span>
          </div>
        </div>

        {/* Journey Milestones */}
        <div className="mt-16 sm:mt-24">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <p className="eyebrow">Milestones</p>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--color-ink)]">
              The Journey So Far
            </h2>
          </div>

          <div className="mt-8 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {milestones.map((m) => (
              <div
                key={m.year}
                className="card-base p-5 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[var(--color-muted)]">
                    {m.year}
                  </span>
                  <h3 className="mt-2 text-base font-semibold text-[var(--color-ink)]">
                    {m.title}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-[var(--color-body)]">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Published Articles & Benchmark Logs */}
        <div className="mt-16 sm:mt-24 card-base p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="eyebrow">Published Benchmarks</p>
              <h3 className="mt-1 text-lg font-semibold text-[var(--color-ink)]">
                LioranDB V2 Pre-Alpha Benchmark Summary on Dev.to
              </h3>
              <p className="mt-1 text-sm text-[var(--color-body)]">
                Detailed technical breakdown of 100M document stress tests, soak tests, and crash-recovery verification.
              </p>
            </div>
            <Link
              href="https://dev.to/ultrontheai/liorandb-v2-pre-alpha-benchmark-summary-4nfb"
              target="_blank"
              rel="noreferrer"
              className="btn-primary shrink-0 self-start sm:self-center"
            >
              <span>Read on Dev.to</span>
              <ExternalLink size={14} />
            </Link>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 sm:mt-24 card-base p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--color-ink)]">
            Connect with Swaraj &amp; the LioranDB team
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[var(--color-body)] max-w-xl mx-auto">
            Have questions about V2 internals, need custom workload sizing, or want to contribute? Reach out directly.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href={siteConfig.founderGithubUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-primary w-full sm:w-auto px-6 py-2.5"
            >
              <GitHubMark className="h-4 w-4" />
              Follow on GitHub
            </Link>
            <Link
              href={siteConfig.discordUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary w-full sm:w-auto px-6 py-2.5"
            >
              Join Discord Community
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
