import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { PublicLayout } from "@/components/site/layout";
import { Container, PageIntro, Panel, SectionHeading } from "@/components/site/ui";
import { siteConfig } from "@/data/content";

export const metadata: Metadata = { title: "Cloud", description: "Technical paths for LioranDB Cloud, Dashboard, Studio, and self-hosted deployment." };

export default function CloudPage() {
  return <PublicLayout><PageIntro eyebrow="Product / cloud" title="Managed infrastructure, with the edges left visible." description="LioranDB Cloud is the managed path around the LioranDB engine. Use the dashboard to request an instance, the docs for connection and deployment details, and Studio for the official operational surface." /><section className="section-band"><Container><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">{[["Documentation", "Versioned setup, driver, CLI, and deployment guidance.", siteConfig.docsUrl, "Read docs"],["Dashboard", "Create or use a managed database instance through the official app.", siteConfig.appUrl, "Open app"],["Studio", "Launch the official database workspace when enabled for your instance.", siteConfig.studioUrl, "Launch Studio"],["Self-host", "Run the local Docker path and own the deployment boundary.", "/deployment", "Review deployment"]].map(([title, body, href, label]) => <Panel key={title}><h2 className="text-lg font-semibold">{title}</h2><p className="mt-3 text-sm leading-6 text-[var(--color-body)]">{body}</p><Link href={href} className="inline-link mt-5" target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>{label} {href.startsWith("http") ? <ExternalLink size={13} /> : <ArrowRight size={14} />}</Link></Panel>)}</div><div className="mt-12"><SectionHeading eyebrow="Important distinction" title="Cloud capacity is not a benchmark guarantee." description="The local Windows comparison and managed pricing limits answer different questions. Cloud performance depends on the provisioned instance, workload, network, indexes, durability, and service configuration. Review current plan terms before sizing an application." /></div></Container></section></PublicLayout>;
}
