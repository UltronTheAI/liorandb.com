import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PublicLayout } from "@/components/site/layout";
import { Container, PageIntro, Panel, Pill, SectionHeading } from "@/components/site/ui";
import { featureGroups } from "@/data/content";

export const metadata: Metadata = { title: "Features", description: "Verified and version-sensitive LioranDB capabilities, organized for practical backend adoption." };

export default function FeaturesPage() {
  return <PublicLayout><PageIntro eyebrow="Product / features" title="Capabilities, without the brochure language." description="Use this as a concise capability map. “Documented”, “tested”, and “version-sensitive” are deliberate labels; follow the docs before depending on a feature in production." /><section className="section-band"><Container><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{featureGroups.map((feature) => <Panel key={feature.title}><div className="flex items-start justify-between gap-3"><h2 className="text-lg font-semibold">{feature.title}</h2><Pill tone={feature.status.includes("version") ? "amber" : "green"}>{feature.status}</Pill></div><p className="mt-4 text-sm leading-6 text-[var(--color-body)]">{feature.description}</p><ul className="mt-5 space-y-2 border-t border-[var(--color-hairline)] pt-4 text-xs text-[var(--color-muted)]">{feature.details.map((detail) => <li key={detail}>— {detail}</li>)}</ul></Panel>)}</div><div className="mt-12 border-t border-[var(--color-hairline)] pt-8"><SectionHeading eyebrow="Next step" title="Match the capability to the workload." description="The developer hub covers the local path. The architecture page explains boundaries. The docs remain authoritative for API and version details." /><div className="mt-6 flex flex-wrap gap-3"><Link href="/developers" className="btn-primary">Get started <ArrowRight size={15} /></Link><Link href="/architecture" className="btn-secondary">Read architecture</Link></div></div></Container></section></PublicLayout>;
}
