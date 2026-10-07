import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Database,
  HelpCircle,
  Layers,
  Server,
  ShieldCheck,
  XCircle,
  Zap,
} from "lucide-react";
import { SiteHeader } from "@/components/landing/site-header";
import { SiteFooter } from "@/components/landing/site-footer";
import { navItems, pricingPlans, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Pricing & Plans — LioranDB",
  description:
    "Predictable hourly pricing for LioranDB managed database hosting. Starter plan at ₹1/hour and Dedicated Server at ₹8/hour.",
};

export default function PricingPage() {
  const comparisonRows = [
    {
      feature: "Document Capacity",
      starter: "Up to 100K documents",
      dedicated: "Up to 1 Million documents",
    },
    {
      feature: "Total Throughput",
      starter: "3,000 Ops / sec",
      dedicated: "45,000 Ops / sec",
    },
    {
      feature: "Write Ops Throughput",
      starter: "1,000 writes / sec",
      dedicated: "10,000 writes / sec",
    },
    {
      feature: "Read Ops Throughput",
      starter: "2,000 reads / sec",
      dedicated: "35,000 reads / sec",
    },
    {
      feature: "Infrastructure Isolation",
      starter: "Starter managed instance",
      dedicated: "Dedicated single-node server",
    },
    {
      feature: "Automated Daily Backups",
      starter: "No (Not allowed in starter)",
      dedicated: "Yes (Daily automated snapshots)",
      starterStatus: false,
      dedicatedStatus: true,
    },
    {
      feature: "Rust V2 Storage Engine",
      starter: "Included",
      dedicated: "Included",
      starterStatus: true,
      dedicatedStatus: true,
    },
    {
      feature: "MongoDB Driver & TypeScript SDK",
      starter: "Included",
      dedicated: "Included",
      starterStatus: true,
      dedicatedStatus: true,
    },
    {
      feature: "gRPC & REST API Endpoints",
      starter: "Included",
      dedicated: "Included",
      starterStatus: true,
      dedicatedStatus: true,
    },
    {
      feature: "Engineering Support",
      starter: "Community & developer email",
      dedicated: "Direct Founder & Core Engineering",
    },
    {
      feature: "Support Hours",
      starter: "Standard queue",
      dedicated: "6:00 PM – 10:00 PM IST (Mon–Fri)",
    },
    {
      feature: "Performance Tuning Review",
      starter: "Self-service docs",
      dedicated: "Query shape & index assistance",
    },
  ];

  const pricingFaqs = [
    {
      q: "How does hourly billing work?",
      a: "Managed database instances are billed at straightforward hourly rates: ₹1 per hour for Starter instances (~₹720/month if run full-time) and ₹8 per hour for Dedicated Servers (~₹5,760/month if run full-time). You only pay for active instance provisioning time.",
    },
    {
      q: "Why does the ₹1/hr Starter plan not include backups?",
      a: "The ₹1/hour Starter plan is designed specifically as an ultra-affordable entry tier for prototyping, side projects, local staging, and lightweight database management testing. To keep compute and storage overhead minimal at this price point, automated snapshot backups are excluded. For production data safety and automated daily backups, choose the ₹8/hour Dedicated Server.",
    },
    {
      q: "How quickly is my database instance provisioned?",
      a: "LioranDB provides 100% digital cloud developer infrastructure. Once you submit your workload request on app.liorandb.com and complete activation, dedicated database instances, connection strings, and access credentials are electronically provisioned within 1 to 24 hours.",
    },
    {
      q: "Can I upgrade from ₹1/hr to ₹8/hr later?",
      a: "Yes. When your application grows beyond 100K documents or requires higher write throughput (> 1K writes/sec) and automated backups, you can easily request a seamless migration to the ₹8/hr Dedicated Server tier directly from your customer dashboard.",
    },
    {
      q: "What is your refund policy?",
      a: "Because dedicated server compute, persistent NVMe storage, and engineering setup time are allocated immediately upon provisioning, all subscriptions are subject to a strict No-Refund Policy. You can cancel your subscription at any time directly through the dashboard to stop future renewals.",
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
        {/* Header Breadcrumb */}
        <div className="mb-6">
          <Link
            href="/"
            className="btn-link inline-flex items-center gap-1.5 text-sm font-medium"
          >
            ← Back to Overview
          </Link>
        </div>

        {/* Page Title & Intro */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <p className="eyebrow">Managed Database Hosting</p>
          <h1 className="text-3xl font-semibold tracking-[-0.04em] text-[var(--color-ink)] sm:text-5xl lg:text-[54px] lg:leading-[1.1]">
            Transparent, predictable database pricing.
          </h1>
          <p className="text-base sm:text-lg leading-relaxed text-[var(--color-body)]">
            Deploy managed LioranDB instances with high-performance Rust storage, MongoDB-compatible APIs, and Indian data sovereignty. Choose between hourly starter testing or high-throughput dedicated production servers.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="mt-12 sm:mt-16 grid gap-8 grid-cols-1 lg:grid-cols-2 max-w-5xl mx-auto items-stretch">
          {/* Plan 1: ₹1/hr Starter Plan */}
          <div className="pricing-card flex flex-col justify-between border-2 border-[var(--color-hairline-strong)]">
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-lg font-semibold text-[var(--color-ink)]">
                  {pricingPlans[0].name}
                </span>
                <span className="badge-pill">
                  {pricingPlans[0].badge}
                </span>
              </div>

              <div className="mt-4 flex items-baseline gap-1.5">
                <span className="text-4xl sm:text-5xl font-semibold tracking-tight text-[var(--color-ink)]">
                  {pricingPlans[0].price}
                </span>
                <span className="text-base text-[var(--color-muted)] font-medium">
                  {pricingPlans[0].period}
                </span>
              </div>
              <p className="mt-1 text-xs text-[var(--color-muted)]">
                {pricingPlans[0].billingNote}
              </p>

              <p className="mt-4 text-sm leading-relaxed text-[var(--color-body)]">
                {pricingPlans[0].description}
              </p>

              {/* Key Highlights Pill Row */}
              <div className="mt-4 grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="rounded-[var(--radius-sm)] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-2">
                  <span className="text-[var(--color-muted)] block">Capacity</span>
                  <strong className="text-[var(--color-ink)]">100K docs</strong>
                </div>
                <div className="rounded-[var(--radius-sm)] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-2">
                  <span className="text-[var(--color-muted)] block">Throughput</span>
                  <strong className="text-[var(--color-ink)]">3K ops/sec</strong>
                </div>
              </div>

              <div className="my-6 h-px w-full bg-[var(--color-hairline)]" />

              <p className="eyebrow">Plan Specifications:</p>
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
                className="btn-primary w-full justify-center text-sm font-medium"
              >
                {pricingPlans[0].ctaText}
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          {/* Plan 2: ₹8/hr Dedicated Server (Featured) */}
          <div className="pricing-card-featured flex flex-col justify-between border-2 border-[#333338] shadow-xl">
            <div>
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold text-[var(--color-on-dark)]">
                    {pricingPlans[1].name}
                  </span>
                  <span className="rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider">
                    Recommended
                  </span>
                </div>
                <span className="rounded-full border border-[#333338] bg-[#1f1f23] px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-[#a0a4aa]">
                  {pricingPlans[1].badge}
                </span>
              </div>

              <div className="mt-4 flex items-baseline gap-1.5">
                <span className="text-4xl sm:text-5xl font-semibold tracking-tight text-[var(--color-on-dark)]">
                  {pricingPlans[1].price}
                </span>
                <span className="text-base text-[#8b949e] font-medium">
                  {pricingPlans[1].period}
                </span>
              </div>
              <p className="mt-1 text-xs text-[#8b949e]">
                {pricingPlans[1].billingNote}
              </p>

              <p className="mt-4 text-sm leading-relaxed text-[#b0b4ba]">
                {pricingPlans[1].description}
              </p>

              {/* Key Highlights Pill Row */}
              <div className="mt-4 grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="rounded-[var(--radius-sm)] border border-[#28282c] bg-[#1f1f23] p-2">
                  <span className="text-[#8b949e] block">Capacity</span>
                  <strong className="text-white">1M docs</strong>
                </div>
                <div className="rounded-[var(--radius-sm)] border border-[#28282c] bg-[#1f1f23] p-2">
                  <span className="text-[#8b949e] block">Throughput</span>
                  <strong className="text-white">45K ops/sec</strong>
                </div>
              </div>

              <div className="my-6 h-px w-full bg-[#28282c]" />

              <p className="eyebrow-on-dark">Plan Specifications:</p>
              <ul className="mt-3 space-y-2.5">
                {pricingPlans[1].features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5 text-sm text-[#b0b4ba]">
                    <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-white" />
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
          </div>
        </div>

        {/* Detailed Feature Comparison Table */}
        <div className="mt-16 sm:mt-24">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <p className="eyebrow">Direct Comparison</p>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--color-ink)]">
              Compare Starter vs. Dedicated Server
            </h2>
            <p className="text-sm text-[var(--color-body)]">
              Evaluate storage capacity, operation throughput, backups, and support side-by-side.
            </p>
          </div>

          <div className="mt-8 overflow-x-auto rounded-[var(--radius-lg)] border border-[var(--color-hairline)] bg-[var(--color-surface-card)]">
            <table className="w-full min-w-[640px] text-left border-collapse">
              <thead>
                <tr className="border-b border-[var(--color-hairline)] bg-[var(--color-surface)]">
                  <th className="p-4 text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)]">
                    Specification
                  </th>
                  <th className="p-4 text-xs font-semibold uppercase tracking-wider text-[var(--color-ink)] w-1/3">
                    Starter Plan (₹1/hr)
                  </th>
                  <th className="p-4 text-xs font-semibold uppercase tracking-wider text-[var(--color-ink)] w-1/3 bg-[var(--color-surface-soft)]">
                    Dedicated Server (₹8/hr)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-hairline)] text-sm">
                {comparisonRows.map((row) => (
                  <tr key={row.feature} className="hover:bg-[var(--color-surface-soft)]/50 transition">
                    <td className="p-4 font-medium text-[var(--color-ink)]">
                      {row.feature}
                    </td>
                    <td className="p-4 text-[var(--color-body)]">
                      {row.starterStatus === false ? (
                        <span className="inline-flex items-center gap-1.5 text-amber-600 dark:text-amber-400 font-medium text-xs">
                          <XCircle size={14} />
                          {row.starter}
                        </span>
                      ) : row.starterStatus === true ? (
                        <span className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium text-xs">
                          <CheckCircle2 size={14} />
                          {row.starter}
                        </span>
                      ) : (
                        <span>{row.starter}</span>
                      )}
                    </td>
                    <td className="p-4 text-[var(--color-body)] bg-[var(--color-surface-soft)]/30 font-medium">
                      {row.dedicatedStatus === true ? (
                        <span className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium text-xs">
                          <CheckCircle2 size={14} />
                          {row.dedicated}
                        </span>
                      ) : (
                        <span>{row.dedicated}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Provisioning Workflow */}
        <div className="mt-16 sm:mt-24 card-base">
          <div className="flex items-center gap-2.5">
            <span className="grid h-7 w-7 place-items-center rounded-[var(--radius-sm)] border border-[var(--color-hairline-strong)] bg-[var(--color-surface-strong)] text-[var(--color-ink)]">
              <Zap size={15} />
            </span>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-ink)]">
              How Managed Provisioning Works
            </h3>
          </div>
          <div className="mt-6 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Request on Dashboard",
                desc: "Choose between ₹1/hr or ₹8/hr and submit your workload sizing on app.liorandb.com.",
              },
              {
                step: "02",
                title: "Workload Review",
                desc: "Our engineering team verifies sizing, query patterns, and network configuration.",
              },
              {
                step: "03",
                title: "Digital Provisioning",
                desc: "Instance is allocated, isolated, and activated within 1 to 24 hours of approval.",
              },
              {
                step: "04",
                title: "Connect & Scale",
                desc: "Connect via @liorandb/driver or gRPC/REST endpoints with live throughput metrics.",
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
                <p className="mt-1 text-xs leading-5 text-[var(--color-body)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Policy & SLA Notice Grid */}
        <div className="mt-8 card-base">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
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
                Strict No-Refund Policy
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-[var(--color-body)]">
                Due to immediate allocation of dedicated server compute and storage resources upon provisioning, all payments are covered under our <Link href="/refund" className="underline text-[var(--color-ink)] hover:text-[var(--color-text-link)]">Strict No-Refund Policy</Link>. Cancel anytime before renewal.
              </p>
            </div>
          </div>
        </div>

        {/* Pricing FAQ */}
        <div className="mt-16 sm:mt-24 max-w-3xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <p className="eyebrow">Pricing FAQ</p>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--color-ink)]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-8 space-y-4">
            {pricingFaqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-[var(--radius-lg)] border border-[var(--color-hairline)] bg-[var(--color-surface-card)] p-5"
              >
                <h3 className="text-base font-semibold text-[var(--color-ink)]">
                  {faq.q}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-body)]">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 sm:mt-24 card-base p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--color-ink)]">
            Ready to deploy your database instance?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[var(--color-body)] max-w-xl mx-auto">
            Choose the Starter Plan for ₹1/hour or launch a high-throughput Dedicated Server for ₹8/hour on our managed dashboard.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href={siteConfig.appUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-primary w-full sm:w-auto px-6 py-2.5"
            >
              Launch on Dashboard
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
