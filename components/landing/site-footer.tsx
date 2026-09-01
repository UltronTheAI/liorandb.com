import Link from "next/link";
import { footerColumns } from "@/data/site";

export function SiteFooter() {
  return (
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
                  href={href.startsWith("#") ? `/${href}` : href}
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
  );
}

