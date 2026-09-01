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
    <div className="min-h-screen overflow-x-clip bg-[var(--color-bg)] text-[var(--color-text)]">
      <div className="page-grid pointer-events-none fixed inset-0 opacity-100" />
      <div className="page-glow page-glow-top" />
      <div className="page-glow page-glow-mid" />

      {/* Global Menu Bar */}
      <SiteHeader
        navItems={navItems}
        appUrl={siteConfig.appUrl}
        docsUrl={siteConfig.docsUrl}
        studioUrl={siteConfig.studioUrl}
        discordUrl={siteConfig.discordUrl}
        githubUrl={siteConfig.v1GithubUrl}
      />

      <main className="mx-auto max-w-4xl px-4 py-10 md:px-6 md:py-14">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-zinc-300 transition hover:bg-white/10 hover:text-white"
        >
          ← Back to Overview
        </Link>

        <div className="mt-6 rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(14,14,18,0.96),rgba(8,8,10,0.98))] p-6 md:p-8">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--color-primary)]">
            LioranDB Legal &amp; Compliance
          </p>
          <h1 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-zinc-400">{intro}</p>
        </div>

        <article className="prose-legal mt-8 rounded-[28px] border border-white/10 bg-[var(--color-elevated)] p-6 md:p-8">
          {children}
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}
