import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BenchmarkCharts } from "@/components/site/benchmark-charts";
import { PublicLayout } from "@/components/site/layout";
import { Container, PageIntro, Panel, Pill, SectionHeading } from "@/components/site/ui";
import { benchmarkData } from "@/data/content";

export const metadata: Metadata = { title: "Benchmarks", description: "Observed local development measurements for a documented LioranDB workload, with comparison scope and caveats." };

export default function BenchmarksPage() {
  const configurationRows = [
    ["Documents", benchmarkData.workload.documents, benchmarkData.workload.documents],
    ["Document shape", "Simple username and age", "Simple username and age"],
    ["Batch size", benchmarkData.workload.lioranDbBatch, "512 reported"],
    ["Indexes", benchmarkData.workload.liorandbIndexes, benchmarkData.mongodb.indexes],
    ["Node / partitions", "1 internal node / 1 partition", "Not recorded"],
    ["Durability", "WAL and checkpointing enabled", "Write concern and fsync behavior not recorded"],
    ["Memory", `≈${benchmarkData.liorandb.memoryGiB} GiB observed`, `≈${benchmarkData.mongodb.memoryGiB} GiB reported`],
  ] as const;

  return <PublicLayout><PageIntro eyebrow="Benchmarks / results" title="Performance with the conditions attached." description="These are user-reported local development measurements, presented as a specialized raw-ingestion comparison—not a universal claim about production performance."><Link href="/benchmarks/methodology" className="btn-primary">Read the methodology <ArrowRight size={15} /></Link><Link href="/developers" className="btn-secondary">Reproduce locally</Link></PageIntro><section className="section-band"><Container><div className="callout"><strong>Disclosure:</strong> {benchmarkData.evidenceStatus}. The supplied comparison does not record enough detail to establish identical durability, caching, threading, API transport, acknowledgement, or client-overhead conditions. The MongoDB comparison reports the same document shape, secondary/text indexes disabled, and approximately 4 GiB of RAM; the RAM measurement method is unrecorded.</div><div className="mt-10"><BenchmarkCharts /></div><div className="mt-10 grid gap-4 md:grid-cols-3"><Panel><p className="eyebrow">Peak write rate</p><p className="stat-card__value">12×</p><p className="mt-2 text-sm leading-6 text-[var(--color-body)]">Peak-rate ratio: 300K observed LioranDB writes/sec versus 25K reported MongoDB writes/sec.</p></Panel><Panel><p className="eyebrow">End-to-end ingestion</p><p className="stat-card__value">11.1×</p><p className="mt-2 text-sm leading-6 text-[var(--color-body)]">36 seconds versus 400 seconds for this 10M-document local workload.</p></Panel><Panel><p className="eyebrow">Reported image size</p><p className="stat-card__value">72.6% smaller</p><p className="mt-2 text-sm leading-6 text-[var(--color-body)]">Approximate 45 MB versus 164 MB reported image sizes; separate from the Windows benchmark environment.</p></Panel></div></Container></section><section className="section-band section-band--soft"><Container><SectionHeading eyebrow="Configuration" title="The workload is intentionally narrow." description="Secondary and text indexes were disabled for both reported write runs. That reduces write amplification. Simple username/age documents do not represent arbitrary application data." /><div className="table-wrap mt-8"><table className="data-table"><thead><tr><th>Setting</th><th>LioranDB</th><th>MongoDB comparison</th></tr></thead><tbody>{configurationRows.map(([key, ldb, mongo]) => <tr key={key}><td>{key}</td><td>{ldb}</td><td>{mongo}</td></tr>)}</tbody></table></div><div className="mt-8 flex flex-wrap gap-3"><Pill>Observed</Pill><Pill>Calculated</Pill><Pill>Reported</Pill><Link href="/benchmarks/methodology" className="inline-link">See all caveats <ArrowRight size={14} /></Link></div></Container></section></PublicLayout>;
}
