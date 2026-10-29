import type { Metadata } from "next";
import { CalendarDays } from "lucide-react";
import { PublicLayout } from "@/components/site/layout";
import { Container, PageIntro, Panel, Pill } from "@/components/site/ui";
import { changelogEntries } from "@/data/content";

export const metadata: Metadata = { title: "Changelog", description: "Version and release updates for the LioranDB engine, docs, and developer ecosystem." };

export default function ChangelogPage() {
  return <PublicLayout><PageIntro eyebrow="Resources / changelog" title="Changes worth reading before you upgrade." description="A compact release surface for the engine and developer ecosystem. Use the linked documentation as the compatibility authority for each release track." /><section className="section-band"><Container><div className="mx-auto max-w-3xl space-y-4">{changelogEntries.map((entry) => <Panel key={entry.date}><div className="flex flex-wrap items-center gap-3"><Pill tone="green">{entry.tag}</Pill><span className="inline-flex items-center gap-1.5 text-xs text-[var(--color-muted)]"><CalendarDays size={13} /> <time dateTime={entry.date}>{entry.date}</time></span></div><h2 className="mt-5 text-xl font-semibold">{entry.title}</h2><p className="mt-3 text-sm leading-7 text-[var(--color-body)]">{entry.body}</p></Panel>)}</div></Container></section></PublicLayout>;
}
