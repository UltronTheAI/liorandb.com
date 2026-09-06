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
      <div className="card-feature">
        <div className="mb-4 flex items-center justify-between gap-4">
          <div>
            <p className="eyebrow">Representative development workload</p>
            <h3 className="mt-2 text-xl font-semibold text-[var(--color-ink)]">
              Internal development benchmarks
            </h3>
          </div>
          <span className="rounded-full bg-[var(--color-semantic-warning-bg)] px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-semantic-warning-text)]">
            Visual demo
          </span>
        </div>

        <div className="rounded-[var(--radius-lg)] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-4">
          <svg
            viewBox="0 0 960 280"
            className="h-auto w-full"
            role="img"
            aria-label="Decorative workload graph showing stable throughput over time"
          >
            <defs>
              <linearGradient id="bench-line" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#00ED64" />
                <stop offset="55%" stopColor="#00A35C" />
                <stop offset="100%" stopColor="#00684A" />
              </linearGradient>
            </defs>
            {[0, 1, 2, 3].map((row) => (
              <line
                key={row}
                x1="0"
                x2="960"
                y1={48 + row * 56}
                y2={48 + row * 56}
                stroke="#e1e5e8"
                strokeDasharray="4 10"
              />
            ))}
            {[0, 1, 2, 3, 4, 5].map((column) => (
              <line
                key={column}
                x1={80 + column * 144}
                x2={80 + column * 144}
                y1="20"
                y2="252"
                stroke="#eceff1"
              />
            ))}
            <motion.path
              d="M32 196 C96 110, 158 122, 220 136 S344 122, 408 132 S538 182, 612 154 S742 76, 812 118 S902 104, 944 86"
              fill="none"
              stroke="url(#bench-line)"
              strokeWidth="5"
              strokeLinecap="round"
              initial={reduceMotion ? false : { pathLength: 0, opacity: 0.4 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
          </svg>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.06 }}
            className="card-base"
          >
            <p className="eyebrow">{metric.label}</p>
            <p className="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-ink)]">
              {formatMetric(metric.value)}
              <span className="ml-2 text-base text-[var(--color-stone)]">
                {metric.suffix}
              </span>
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
