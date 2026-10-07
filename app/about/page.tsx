import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Database,
  Globe,
  Layers,
  Milestone,
  ShieldCheck,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import { SiteHeader } from "@/components/landing/site-header";
import { SiteFooter } from "@/components/landing/site-footer";
import {
  indiaPillars,
  navItems,
  roadmap,
  siteConfig,
  trustedPartners,
} from "@/data/site";

export const metadata: Metadata = {
  title: "About Us — LioranDB",
  description:
    "Learn about LioranDB, India's developer-first document database developed by Lioran Developer Solutions to champion data sovereignty and high-performance infrastructure.",
};

export default function AboutPage() {
  const values = [
    {
      title: "Data Sovereignty & Domestic Infrastructure",
      description:
        "We believe that India's digital economy must not rely solely on foreign database monopolies. LioranDB provides domestic cloud hosting options where Indian enterprises retain complete control of their data.",
      icon: ShieldCheck,
    },
    {
      title: "Engineered in Rust from Scratch",
      description:
        "LioranDB V2 is not a wrapper around existing SQL or NoSQL engines. It is a custom-engineered storage engine written in Rust featuring MVCC, B+ tree indexing, and crash-resilient write-ahead logging.",
      icon: Cpu,
    },
    {
      title: "Familiar Developer Ergonomics",
      description:
        "High performance should not require a steep learning curve. LioranDB exposes a familiar MongoDB-style document API alongside native TypeScript SDKs, REST, and gRPC interfaces.",
      icon: Layers,
    },
    {
      title: "Radical Transparency & Stress Testing",
      description:
        "We publish real benchmark logs from 100M document workloads, crash-test recovery logs, and development progress in public forums. No toy benchmarks or marketing fluff.",
      icon: Zap,
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
        {/* Breadcrumbs */}
        <div className="mb-6">
          <Link
            href="/"
            className="btn-link inline-flex items-center gap-1.5 text-sm font-medium"
          >
            ← Back to Overview
          </Link>
        </div>

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <p className="eyebrow">About LioranDB</p>
          <h1 className="text-3xl font-semibold tracking-[-0.04em] text-[var(--color-ink)] sm:text-5xl lg:text-[54px] lg:leading-[1.1]">
            Building India&apos;s developer infrastructure for the world.
          </h1>
          <p className="text-base sm:text-lg leading-relaxed text-[var(--color-body)]">
            LioranDB is a high-performance document database developed in India by Lioran Developer Solutions. We are on a mission to deliver resilient, developer-first storage systems engineered for scale.
          </p>
        </div>

        {/* Origin Story & Mission */}
        <div className="mt-12 sm:mt-16 grid gap-8 lg:grid-cols-2 items-center">
          <div className="space-y-4">
            <span className="badge-pill">Our Mission</span>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--color-ink)]">
              Why we started LioranDB
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-[var(--color-body)]">
              India produces millions of world-class software engineers and powers global tech operations. Yet, almost every modern web and mobile application running in India depends on database systems and cloud infrastructure designed, owned, and hosted abroad.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[var(--color-body)]">
              LioranDB was founded to change this dynamic. By developing a ground-up database engine in Rust with native document APIs, high parallel read/write throughput, and strict data sovereignty, we are proving that India can build foundational developer infrastructure, not just consume it.
            </p>
            <div className="pt-2">
              <Link
                href="/founder"
                className="btn-secondary inline-flex items-center gap-2 text-sm"
              >
                <span>Read the Founder&apos;s Story</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          <div className="rounded-[var(--radius-lg)] border border-[var(--color-hairline)] bg-[var(--color-surface-card)] p-6 sm:p-8 space-y-5">
            <h3 className="text-lg font-semibold text-[var(--color-ink)]">
              At a Glance
            </h3>
            <dl className="space-y-4 text-sm">
              <div className="flex items-center justify-between pb-3 border-b border-[var(--color-hairline)]">
                <dt className="text-[var(--color-muted)]">Legal Entity</dt>
                <dd className="font-medium text-[var(--color-ink)] text-right">{siteConfig.legalEntity}</dd>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-[var(--color-hairline)]">
                <dt className="text-[var(--color-muted)]">Founder &amp; CTO</dt>
                <dd className="font-medium text-[var(--color-ink)]">Swaraj Puppalwar (@UltronTheAI)</dd>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-[var(--color-hairline)]">
                <dt className="text-[var(--color-muted)]">Core Engine</dt>
                <dd className="font-mono text-xs font-semibold text-[var(--color-ink)]">Rust (V2)</dd>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-[var(--color-hairline)]">
                <dt className="text-[var(--color-muted)]">Pre-alpha Release</dt>
                <dd className="font-medium text-[var(--color-ink)]">{siteConfig.preAlphaDate}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-[var(--color-muted)]">Alpha Launch Date</dt>
                <dd className="font-medium text-emerald-600 dark:text-emerald-400">{siteConfig.alphaLaunchDate}</dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Core Values Grid */}
        <div className="mt-16 sm:mt-24">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <p className="eyebrow">Engineering Principles</p>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--color-ink)]">
              What drives our technical decisions
            </h2>
            <p className="text-sm text-[var(--color-body)]">
              We design every component for predictability, developer ownership, and durability.
            </p>
          </div>

          <div className="mt-8 grid gap-6 grid-cols-1 md:grid-cols-2">
            {values.map((v) => (
              <div
                key={v.title}
                className="card-base flex flex-col justify-between p-6"
              >
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-hairline)] bg-[var(--color-surface)] text-[var(--color-ink)] mb-4">
                    <v.icon size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--color-ink)]">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-body)]">
                    {v.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why India Section */}
        <div className="mt-16 sm:mt-24 card-base p-6 sm:p-8 md:p-10">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-1 space-y-3">
              <p className="eyebrow">Developed in India</p>
              <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-ink)]">
                The Indian developer ecosystem deserves its own database.
              </h2>
              <p className="text-sm leading-relaxed text-[var(--color-body)]">
                Indian startups should not be held hostage by escalating foreign cloud bills or unpredictable currency fluctuations.
              </p>
            </div>

            <div className="lg:col-span-2 grid gap-4 grid-cols-1 sm:grid-cols-2">
              {indiaPillars.map(([title, desc]) => (
                <div
                  key={title}
                  className="rounded-[var(--radius-md)] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-4"
                >
                  <h3 className="text-sm font-semibold text-[var(--color-ink)]">
                    {title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-[var(--color-body)]">
                    {desc}
                  </p>
                </div>
              ))}
              <div className="rounded-[var(--radius-md)] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-4">
                <h3 className="text-sm font-semibold text-[var(--color-ink)]">
                  Affordable Hourly Pricing
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-[var(--color-body)]">
                  Managed hosting starting at ₹1/hour for developers and ₹8/hour for dedicated servers with daily backups.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Trusted Ecosystem */}
        <div className="mt-16 sm:mt-24">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <p className="eyebrow">Ecosystem &amp; Partners</p>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--color-ink)]">
              Powering modern Indian digital platforms
            </h2>
            <p className="text-sm text-[var(--color-body)]">
              LioranDB is actively battle-tested across production applications and developer platforms.
            </p>
          </div>

          <div className="mt-8 grid gap-4 grid-cols-1 md:grid-cols-3">
            {trustedPartners.map((partner) => (
              <div
                key={partner.name}
                className="card-base flex flex-col justify-between p-6"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="badge-pill">{partner.badge}</span>
                    <span className="text-xs text-[var(--color-muted)]">{partner.role}</span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-[var(--color-ink)]">
                    {partner.name}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[var(--color-body)]">
                    {partner.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Roadmap Snapshot */}
        <div className="mt-16 sm:mt-24">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <p className="eyebrow">Product Roadmap</p>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--color-ink)]">
              The Path from Pre-Alpha to Production
            </h2>
          </div>

          <div className="mt-8 grid gap-4 grid-cols-1 md:grid-cols-3">
            {roadmap.map((phase) => (
              <div
                key={phase.title}
                className="card-base p-6 border-t-2 border-t-[var(--color-ink)]"
              >
                <h3 className="text-base font-semibold text-[var(--color-ink)]">
                  {phase.title}
                </h3>
                <ul className="mt-4 space-y-2 text-xs text-[var(--color-body)]">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-ink)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 sm:mt-24 card-base p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--color-ink)]">
            Join us in building modern developer infrastructure.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[var(--color-body)] max-w-xl mx-auto">
            Test the pre-alpha via Docker, deploy a managed instance for ₹1/hr or ₹8/hr, or join our community on Discord.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/pricing"
              className="btn-primary w-full sm:w-auto px-6 py-2.5"
            >
              View Pricing &amp; Plans
              <ArrowRight size={15} />
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
