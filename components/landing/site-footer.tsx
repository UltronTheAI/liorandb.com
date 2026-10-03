import Image from "next/image";
import Link from "next/link";
import { footerColumns } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <Link
              href="/#top"
              className="inline-flex items-center gap-2.5 rounded-[var(--radius-md)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ink)]"
            >
              <span className="grid h-8 w-8 shrink-0 place-items-center overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-hairline-strong)] bg-[var(--color-surface-card)]">
                <Image
                  src="/favicon.ico"
                  alt="LioranDB logo"
                  width={20}
                  height={20}
                  className="h-5 w-5 rounded-[3px]"
                />
              </span>
              <span className="text-base font-semibold tracking-tight text-[var(--color-ink)]">
                LioranDB
              </span>
            </Link>
            <p className="mt-3 text-sm leading-6 text-[var(--color-body)]">
              Built with care, Rust, TypeScript and an unreasonable number of database benchmarks.
            </p>
            <div className="mt-4">
              <span className="badge-pill">
                Engineered in India
              </span>
            </div>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <p className="text-sm font-semibold text-[var(--color-ink)]">
                {column.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {column.links.map(([label, href]) => (
                  <li key={label}>
                    <Link
                      href={href.startsWith("#") ? `/${href}` : href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noreferrer" : undefined}
                      className="text-sm text-[var(--color-body)] transition hover:text-[var(--color-ink)]"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-[var(--color-hairline)] pt-8 text-sm text-[var(--color-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Lioran Developer Solutions. LioranDB is developed in India.</p>
          <p className="text-xs sm:text-sm">Aligned with the vision of keeping Indian data in India.</p>
        </div>
      </div>
    </footer>
  );
}
