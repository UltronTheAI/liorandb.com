"use client";

import { useState } from "react";

type ChartKey = "writes" | "reads" | "time" | "images";
const chartOptions: ReadonlyArray<{ id: ChartKey; label: string }> = [
  { id: "writes", label: "Write throughput" },
  { id: "reads", label: "Read throughput" },
  { id: "time", label: "10M completion" },
  { id: "images", label: "Image size" },
];

const datasets = {
  writes: { unit: "docs/sec", max: 300000, rows: [{ label: "LioranDB peak", value: 300000, display: "300K", tone: "accent" }, { label: "LioranDB full-run average", value: 277777.78, display: "277,778", tone: "accent-soft" }, { label: "MongoDB reported", value: 25000, display: "25K", tone: "muted" }] },
  reads: { unit: "reads/sec", max: 35000, rows: [{ label: "LioranDB reported", value: 35000, display: "35K", tone: "accent" }, { label: "MongoDB reported", value: 16000, display: "16K", tone: "muted" }] },
  time: { unit: "seconds · lower is better", max: 400, rows: [{ label: "LioranDB", value: 36, display: "36s", tone: "accent" }, { label: "MongoDB", value: 400, display: "400s", tone: "muted" }] },
  images: { unit: "MB · approximate reported size", max: 164, rows: [{ label: "LioranDB", value: 45, display: "45 MB", tone: "accent" }, { label: "MongoDB", value: 164, display: "164 MB", tone: "muted" }] },
} as const;

export function BenchmarkCharts() {
  const [active, setActive] = useState<ChartKey>("writes");
  const dataset = datasets[active];
  return <div className="chart-shell"><div className="chart-tabs" role="tablist" aria-label="Benchmark chart views">{chartOptions.map((option) => <button key={option.id} type="button" role="tab" aria-selected={active === option.id} className={`chart-tab ${active === option.id ? "is-active" : ""}`} onClick={() => setActive(option.id)}>{option.label}</button>)}</div><div className="chart-body"><div className="mb-7 flex flex-wrap items-center justify-between gap-3"><p className="eyebrow">Observed comparison · {dataset.unit}</p><span className="text-xs text-[var(--color-muted)]">No animation required to understand result</span></div><div className="grid gap-6">{dataset.rows.map((row) => <div key={row.label} className="chart-row min-w-0"><div className="flex flex-wrap items-end justify-between gap-3 text-sm"><span className="font-medium text-[var(--color-ink)]">{row.label}</span><strong className="font-mono text-[var(--color-ink)]">{row.display}</strong></div><div className="chart-track mt-2 bg-[var(--color-surface-strong)]"><div className={`chart-bar chart-bar--${row.tone}`} style={{ width: `${Math.max(6, (row.value / dataset.max) * 100)}%` }} aria-label={`${row.label}: ${row.display}`} /></div></div>)}</div><p className="mt-8 text-xs leading-5 text-[var(--color-body)]">{active === "writes" ? "Peak rate and full-run average are separate metrics. The average is calculated from 10 million documents over 36 seconds." : active === "reads" ? "Read query shape, indexing strategy, thread count, cache state, and durability configuration were not recorded." : active === "time" ? "This is an end-to-end ingestion comparison for the supplied local workload, not a general database speed claim." : "Image sizes are approximate observed values and are not a universal package-size guarantee."}</p></div></div>;
}

export function BenchmarkSummary() {
  return <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4"><div className="stat-card"><p className="eyebrow">Peak raw writes</p><p className="stat-card__value">300K</p><p className="mt-2 text-xs text-[var(--color-body)]">docs/sec · observed local peak</p></div><div className="stat-card"><p className="eyebrow">10M completion</p><p className="stat-card__value">36s</p><p className="mt-2 text-xs text-[var(--color-body)]">end-to-end insertion time</p></div><div className="stat-card"><p className="eyebrow">Read throughput</p><p className="stat-card__value">35K</p><p className="mt-2 text-xs text-[var(--color-body)]">reads/sec · query shape unrecorded</p></div><div className="stat-card"><p className="eyebrow">Memory observed</p><p className="stat-card__value">3.5 GiB</p><p className="mt-2 text-xs text-[var(--color-body)]">LioranDB only; not a comparison</p></div></div>;
}
