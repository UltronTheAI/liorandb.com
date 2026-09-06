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

      <main className="mx-auto max-w-4xl px-4 py-10 md:px-8 md:py-14">
        <Link
          href="/"
          className="btn-link inline-flex items-center gap-2 text-sm"
        >
          ← Back to Overview
        </Link>

        <div className="mt-6 rounded-[var(--radius-lg)] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-6 md:p-8">
          <p className="eyebrow">LioranDB Legal &amp; Compliance</p>
          <h1 className="mt-4 text-balance text-4xl font-medium tracking-[-0.05em] text-[var(--color-ink)] md:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--color-steel)]">
            {intro}
          </p>
        </div>

        <article className="prose-legal mt-8 rounded-[var(--radius-lg)] border border-[var(--color-hairline)] bg-[var(--color-canvas)] p-6 md:p-8">
          {children}
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}
