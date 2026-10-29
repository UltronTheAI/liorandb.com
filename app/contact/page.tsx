import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { PublicLayout } from "@/components/site/layout";
import { Container, PageIntro, Panel } from "@/components/site/ui";
import { siteConfig } from "@/data/content";

export const metadata: Metadata = { title: "Contact", description: "Contact routes for LioranDB technical support, managed provisioning, and commercial questions." };

export default function ContactPage() {
  return <PublicLayout><PageIntro eyebrow="Contact" title="Bring a concrete question." description="For technical questions, include the version, deployment shape, workload, and evidence that will help the engineering team reproduce the issue." /><section className="section-band"><Container><div className="grid gap-4 md:grid-cols-3"><Panel><Mail size={20} /><h2 className="mt-5 text-lg font-semibold">Technical support</h2><p className="mt-2 text-sm leading-6 text-[var(--color-body)]">For account, connection, or workload questions, email the support team with enough context to investigate.</p><Link href={`mailto:${siteConfig.supportEmail}`} className="inline-link mt-5">{siteConfig.supportEmail} <ArrowUpRight size={13} /></Link></Panel><Panel><h2 className="text-lg font-semibold">Managed provisioning</h2><p className="mt-2 text-sm leading-6 text-[var(--color-body)]">Use the dashboard for current plan availability, sizing, and provisioning requests.</p><Link href={siteConfig.appUrl} className="inline-link mt-5" target="_blank" rel="noreferrer">Open dashboard <ArrowUpRight size={13} /></Link></Panel><Panel><h2 className="text-lg font-semibold">Community</h2><p className="mt-2 text-sm leading-6 text-[var(--color-body)]">Questions that benefit from public discussion belong in the official community channels.</p><Link href={siteConfig.discordUrl} className="inline-link mt-5" target="_blank" rel="noreferrer">Join Discord <ArrowUpRight size={13} /></Link></Panel></div></Container></section></PublicLayout>;
}
