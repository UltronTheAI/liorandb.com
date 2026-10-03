import Link from "next/link";
import type { ReactNode } from "react";
import { navItems, siteConfig } from "@/data/site";
import { SiteHeader } from "@/components/landing/site-header";
import { SiteFooter } from "@/components/landing/site-footer";

type LegalPageProps = {
  title: string;
  intro: string;
  children: ReactNode;
};

export function LegalPage({ title, intro, children }: LegalPageProps) {
  return (
    <div className="min-h-screen overflow-x-clip bg-[var(--color-canvas)] text-[var(--color-ink)]">
      <SiteHeader
        navItems={navItems}
        appUrl={siteConfig.appUrl}
        docsUrl={siteConfig.docsUrl}
        studioUrl={siteConfig.studioUrl}
        discordUrl={siteConfig.discordUrl}
        githubUrl={siteConfig.v1GithubUrl}
        githubRepo={siteConfig.githubRepo}
      />

      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <Link
          href="/"
          className="btn-link inline-flex items-center gap-1.5 text-sm font-medium"
        >
          ← Back to Overview
        </Link>

        <div className="mt-6 rounded-[var(--radius-lg)] border border-[var(--color-hairline)] bg-[var(--color-surface-card)] p-6 sm:p-8">
          <p className="eyebrow">LioranDB Legal &amp; Compliance</p>
          <h1 className="mt-3 text-balance text-3xl font-semibold tracking-[-0.04em] text-[var(--color-ink)] sm:text-4xl">
            {title}
          </h1>
          <p className="mt-3 text-base leading-relaxed text-[var(--color-body)]">
            {intro}
          </p>
        </div>

        <article className="prose-legal mt-6 rounded-[var(--radius-lg)] border border-[var(--color-hairline)] bg-[var(--color-surface-card)] p-6 sm:p-8">
          {children}
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}
