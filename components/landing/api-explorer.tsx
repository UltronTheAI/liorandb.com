"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { LoaderCircle, Play } from "lucide-react";
import { useState } from "react";
import { CodeBlock } from "./code-block";

type ExplorerTab = {
  id: string;
  label: string;
  code: string;
  output: string;
};

type ApiExplorerProps = {
  tabs: readonly ExplorerTab[];
};

export function ApiExplorer({ tabs }: ApiExplorerProps) {
  const [active, setActive] = useState(tabs[0]?.id ?? "");
  const [running, setRunning] = useState(false);
  const reduceMotion = useReducedMotion();

  const current = tabs.find((tab) => tab.id === active) ?? tabs[0];

  return (
    <div className="grid min-w-0 gap-6 xl:grid-cols-[260px_1fr]">
      <div className="card-base min-w-0">
        <p className="eyebrow mb-4">Operations</p>
        <div className="space-y-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActive(tab.id)}
              className={`flex w-full min-w-0 items-center justify-between gap-3 rounded-[var(--radius-lg)] border px-3 py-3 text-left text-sm transition sm:px-4 ${
                tab.id === current.id
                  ? "border-[var(--color-brand-green)] bg-[var(--color-surface-feature)] text-[var(--color-ink)]"
                  : "border-[var(--color-hairline)] bg-[var(--color-canvas)] text-[var(--color-steel)] hover:text-[var(--color-ink)]"
              }`}
            >
              <span className="min-w-0 truncate">{tab.label}</span>
              <span
                className={`shrink-0 text-[10px] uppercase tracking-[0.2em] ${
                  tab.id === current.id
                    ? "text-[var(--color-brand-green-dark)]"
                    : "text-[var(--color-muted)]"
                }`}
              >
                API
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="card-feature min-w-0">
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-4">
          <div className="min-w-0">
            <p className="eyebrow">MongoDB-style workflow</p>
            <h3 className="mt-2 text-lg font-semibold text-[var(--color-ink)] sm:text-xl">
              {current.label}
            </h3>
          </div>
          <button
            type="button"
            onClick={() => {
              setRunning(true);
              window.setTimeout(() => setRunning(false), 1100);
            }}
            className="btn-primary w-full sm:w-auto"
          >
            {running ? <LoaderCircle size={16} className="animate-spin" /> : <Play size={16} />}
            Run query
          </button>
        </div>

        <div className="grid min-w-0 gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${current.id}-code`}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="min-w-0"
            >
              <CodeBlock code={current.code} variant="typescript" />
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${current.id}-${running ? "running" : "done"}`}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="rounded-[var(--radius-lg)] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-4"
            >
              <p className="eyebrow mb-4">Result</p>
              {running ? (
                <div className="space-y-3">
                  {[1, 2, 3].map((bar) => (
                    <motion.div
                      key={bar}
                      animate={reduceMotion ? {} : { opacity: [0.35, 0.9, 0.35] }}
                      transition={{ repeat: Infinity, duration: 1.1, delay: bar * 0.08 }}
                      className="h-4 rounded-full bg-[var(--color-hairline)]"
                    />
                  ))}
                </div>
              ) : (
                <CodeBlock code={current.output} variant="json" />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
