import Image from "next/image";
import Link from "next/link";
import { footerColumns } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="mx-auto max-w-[1280px] px-4 py-16 md:px-8 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-5">
          <div className="xl:col-span-1">
            <Link
              href="/#top"
              className="inline-flex flex-col items-start gap-3 rounded-[var(--radius-md)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-green)]"
            >
              <span className="grid h-11 w-11 place-items-center overflow-hidden">
                <Image
                  src="/favicon.ico"
                  alt="LioranDB logo"
                  width={28}
                  height={28}
                  className="h-7 w-7 rounded-[4px]"
                />
              </span>
              <p className="text-xl font-semibold tracking-tight text-[var(--color-ink)]">
                LioranDB
              </p>
            </Link>
            <p className="mt-3 text-sm leading-7 text-[var(--color-steel)]">
              Built with care, Rust, TypeScript and an unreasonable number of
              database benchmarks.
            </p>
          </div>
          {footerColumns.map((column) => (
            <div key={column.title}>
              <p className="text-sm font-medium text-[var(--color-ink)]">
                {column.title}
              </p>
              <div className="mt-4 space-y-2">
                {column.links.map(([label, href]) => (
                  <Link
                    key={label}
                    href={href.startsWith("#") ? `/${href}` : href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    className="block py-0.5 text-sm text-[var(--color-steel)] transition hover:text-[var(--color-ink)]"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-[var(--color-hairline)] pt-8 text-sm text-[var(--color-stone)] md:flex-row md:items-center md:justify-between">
          <p>© 2026 Lioran Developer Solutions. LioranDB is developed in India.</p>
          <p>Aligned with the vision of keeping Indian data in India.</p>
        </div>
      </div>
    </footer>
  );
}
