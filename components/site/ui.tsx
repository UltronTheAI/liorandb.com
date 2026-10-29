import Link from "next/link";
import { ArrowRight, Check, ExternalLink } from "lucide-react";
import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`container-wide ${className}`}>{children}</div>;
}

export function PageIntro({ eyebrow, title, description, children }: { eyebrow: string; title: string; description: string; children?: ReactNode }) {
  return <section className="page-intro"><Container><div className="max-w-3xl"><p className="eyebrow">{eyebrow}</p><h1 className="display-xl mt-4">{title}</h1><p className="lede mt-5">{description}</p>{children && <div className="mt-7 flex flex-wrap gap-3">{children}</div>}</div></Container></section>;
}

export function SectionHeading({ eyebrow, title, description, align = "left" }: { eyebrow?: string; title: string; description?: string; align?: "left" | "center" }) {
  return <div className={`${align === "center" ? "mx-auto text-center" : ""} max-w-2xl`}>{eyebrow && <p className="eyebrow">{eyebrow}</p>}<h2 className="display-lg mt-3">{title}</h2>{description && <p className="mt-4 text-[var(--color-body)] leading-7">{description}</p>}</div>;
}

export function Panel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`panel panel-card ${className}`}>{children}</div>;
}

export function Pill({ children, tone = "neutral" }: { children: ReactNode; tone?: "neutral" | "green" | "amber" }) {
  return <span className={`pill pill--${tone}`}>{children}</span>;
}

export function ArrowLink({ href, children, external = false }: { href: string; children: ReactNode; external?: boolean }) {
  return <Link href={href} className="inline-link" target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>{children}{external ? <ExternalLink size={14} /> : <ArrowRight size={14} />}</Link>;
}

export function CheckList({ items }: { items: ReadonlyArray<string> }) {
  return <ul className="grid gap-3">{items.map((item) => <li key={item} className="flex items-start gap-2.5 text-sm leading-6 text-[var(--color-body)]"><Check size={16} className="mt-1 shrink-0 text-[var(--color-accent)]" aria-hidden="true" /><span>{item}</span></li>)}</ul>;
}

export function StatCard({ label, value, detail }: { label: string; value: string; detail: string }) {
  return <div className="stat-card"><p className="eyebrow">{label}</p><p className="stat-card__value">{value}</p><p className="mt-2 text-xs leading-5 text-[var(--color-body)]">{detail}</p></div>;
}
