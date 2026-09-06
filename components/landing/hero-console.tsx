"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Activity, DatabaseZap, Play, TimerReset } from "lucide-react";
import { useState } from "react";
import { CodeBlock } from "./code-block";
import { CopyButton } from "./copy-button";

type HeroCollection = {
  id: string;
  name: string;
  docs: number;
  code: string;
  output: string;
  runtime: string;
  checkpoint: string;
};

type HeroConsoleProps = {
  collections: readonly HeroCollection[];
};

export function HeroConsole({ collections }: HeroConsoleProps) {
  const reduceMotion = useReducedMotion();
  const [activeId, setActiveId] = useState(collections[0]?.id ?? "users");
  const active = collections.find((item) => item.id === activeId) ?? collections[0];

  if (!active) return null;

  return (
    <div className="code-mockup-card relative flex h-full min-h-0 w-full min-w-0 flex-col overflow-hidden">
      <div className="flex shrink-0 flex-col gap-3 border-b border-[var(--color-hairline)] px-3 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-4">
        <div className="flex min-w-0 flex-wrap items-center gap-2 sm:gap-3">
          <div className="flex gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-[var(--color-hairline)] px-2 py-1 text-[10px] text-[var(--color-steel)] sm:text-[11px]">
            V2
          </span>
          <CopyButton text={active.code} />
        </div>
      </div>
      <div className="grid min-h-0 flex-1 gap-0 lg:grid-cols-[200px_1fr] xl:grid-cols-[220px_1fr]">
        <aside className="min-w-0 border-b border-[var(--color-hairline)] p-4 lg:border-r lg:border-b-0">
          <div className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[var(--color-stone)]">
            <DatabaseZap size={14} />
            Collections
          </div>
          <div className="space-y-2" role="tablist" aria-label="Database collections">
            {collections.map((collection, index) => {
              const isActive = collection.id === active.id;

              return (
                <motion.div
                  key={collection.id}
                  initial={reduceMotion ? false : { opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.08 }}
                >
                  <button
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveId(collection.id)}
                    className={`flex w-full items-center justify-between rounded-[var(--radius-md)] border px-3 py-3 text-left text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-green)] ${
                      isActive
                        ? "border-[var(--color-brand-green)] bg-[var(--color-surface-feature)] text-[var(--color-ink)]"
                        : "border-[var(--color-hairline)] bg-[var(--color-surface)] text-[var(--color-steel)] hover:border-[var(--color-hairline-strong)] hover:text-[var(--color-ink)]"
                    }`}
                  >
                    <span className="font-medium">{collection.name}</span>
                    <span
                      className={`text-[10px] uppercase tracking-[0.14em] ${
                        isActive
                          ? "text-[var(--color-brand-green-dark)]"
                          : "text-[var(--color-muted)]"
                      }`}
                    >
                      {collection.docs.toLocaleString()}
                    </span>
                  </button>
                </motion.div>
              );
            })}
          </div>
          <div className="mt-6 hidden grid-cols-1 gap-3 text-xs text-[var(--color-steel)] xl:grid">
            <div className="flex items-center gap-2 rounded-[var(--radius-md)] border border-[var(--color-hairline)] bg-[var(--color-surface)] px-3 py-2">
              <Play size={13} className="text-[var(--color-brand-green-dark)]" />
              query runtime: {active.runtime}
            </div>
            <div className="flex items-center gap-2 rounded-[var(--radius-md)] border border-[var(--color-hairline)] bg-[var(--color-surface)] px-3 py-2">
              <Activity size={13} className="text-[var(--color-brand-green-mid)]" />
              wal sync: healthy
            </div>
            <div className="flex items-center gap-2 rounded-[var(--radius-md)] border border-[var(--color-hairline)] bg-[var(--color-surface)] px-3 py-2">
              <TimerReset size={13} className="text-[var(--color-brand-green-dark)]" />
              last checkpoint: {active.checkpoint}
            </div>
          </div>
        </aside>
        <div className="flex min-h-0 min-w-0 flex-1 flex-col p-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="grid min-h-0 flex-1 gap-4"
            >
              <div className="min-h-0">
                <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-stone)]">
                    Query
                  </span>
                  <span className="text-xs text-[var(--color-stone)]">
                    {active.name} collection
                  </span>
                </div>
                <CodeBlock code={active.code} variant="typescript" animated />
              </div>
              <div className="min-h-0 flex-1">
                <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-stone)]">
                    Terminal
                  </span>
                  <span className="text-xs text-[var(--color-stone)]">
                    {active.docs.toLocaleString()} docs
                  </span>
                </div>
                <CodeBlock code={active.output} variant="terminal" className="max-h-[220px]" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
