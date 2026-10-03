"use client";

import { motion, useReducedMotion } from "framer-motion";

type Metric = {
  label: string;
  value: number;
  suffix: string;
};

type BenchmarkDashboardProps = {
  metrics: readonly Metric[];
};

function formatMetric(value: number) {
  if (Number.isInteger(value)) {
    return value.toLocaleString();
  }
  return value.toFixed(1);
}

export function BenchmarkDashboard({ metrics }: BenchmarkDashboardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="space-y-6">
      <div className="card-base">
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
          <div className="min-w-0">
            <p className="eyebrow">Throughput &amp; Latency Waveform</p>
            <h3 className="mt-1 text-lg font-semibold text-[var(--color-ink)] sm:text-xl">
              Internal Stress Benchmarks
            </h3>
          </div>
          <span className="badge-pill self-start">
            Pre-alpha Test Run
          </span>
        </div>

        <div className="rounded-[var(--radius-lg)] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-4">
          <svg
            viewBox="0 0 960 280"
            className="h-auto w-full"
            role="img"
            aria-label="Workload graph showing sustained write and read throughput"
          >
            {[0, 1, 2, 3].map((row) => (
              <line
                key={row}
                x1="0"
                x2="960"
                y1={48 + row * 56}
                y2={48 + row * 56}
                stroke="var(--color-hairline-strong)"
                strokeDasharray="4 8"
              />
            ))}
            {[0, 1, 2, 3, 4, 5].map((column) => (
              <line
                key={column}
                x1={80 + column * 144}
                x2={80 + column * 144}
                y1="20"
                y2="252"
                stroke="var(--color-hairline)"
              />
            ))}
            <motion.path
              d="M32 196 C96 110, 158 122, 220 136 S344 122, 408 132 S538 182, 612 154 S742 76, 812 118 S902 104, 944 86"
              fill="none"
              stroke="var(--color-ink)"
              strokeWidth="3.5"
              strokeLinecap="round"
              initial={reduceMotion ? false : { pathLength: 0, opacity: 0.4 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: "easeOut" }}
            />
          </svg>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.04 }}
            className="card-base"
          >
            <p className="eyebrow">{metric.label}</p>
            <p className="mt-2 text-3xl font-semibold tracking-tight text-[var(--color-ink)]">
              {formatMetric(metric.value)}
              <span className="ml-1.5 text-base font-normal text-[var(--color-muted)]">
                {metric.suffix}
              </span>
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
