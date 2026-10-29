import Link from "next/link";
import { ArrowUpRight, GitBranch as Github } from "lucide-react";
import { footerColumns, siteConfig } from "@/data/content";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container-wide py-14 sm:py-18">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          <div className="max-w-sm">
            <Link href="/" className="brand-mark"><span className="brand-mark__glyph" aria-hidden="true">L</span><span>LioranDB</span></Link>
            <p className="mt-5 text-sm leading-6 text-[var(--color-body)]">Rust-powered document storage for engineers who need a practical path from local development to managed infrastructure.</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Link href={siteConfig.githubUrl} className="btn-secondary" target="_blank" rel="noreferrer"><Github size={14} /> GitHub</Link>
              <Link href={siteConfig.docsUrl} className="btn-secondary" target="_blank" rel="noreferrer">Documentation <ArrowUpRight size={14} /></Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <p className="eyebrow">{column.title}</p>
                <ul className="mt-4 space-y-3">
                  {column.links.map(([label, href]) => <li key={label}><Link href={href} className="footer-link" target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>{label}</Link></li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-[var(--color-hairline)] pt-5 text-xs text-[var(--color-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.legalEntity}. LioranDB is developer infrastructure in active development.</p>
          <p className="font-mono">built with Rust · documented in public</p>
        </div>
      </div>
    </footer>
  );
}
