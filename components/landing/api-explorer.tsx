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
    <div className="grid min-w-0 gap-6 lg:grid-cols-[240px_1fr]">
      <div className="card-base min-w-0">
        <p className="eyebrow mb-4">Operations</p>
        <div className="space-y-1.5" role="tablist" aria-label="API Operations">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={tab.id === current.id}
              onClick={() => setActive(tab.id)}
              className={`flex w-full min-w-0 items-center justify-between gap-3 rounded-[var(--radius-md)] border px-3.5 py-2.5 text-left text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ink)] ${
                tab.id === current.id
                  ? "border-[var(--color-ink)] bg-[var(--color-surface-strong)] font-semibold text-[var(--color-ink)]"
                  : "border-transparent bg-transparent text-[var(--color-body)] hover:bg-[var(--color-surface-soft)] hover:text-[var(--color-ink)]"
              }`}
            >
              <span className="min-w-0 truncate">{tab.label}</span>
              <span
                className={`shrink-0 font-mono text-[10px] uppercase tracking-wider ${
                  tab.id === current.id
                    ? "text-[var(--color-ink)]"
                    : "text-[var(--color-muted)]"
                }`}
              >
                API
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="card-base min-w-0">
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-4">
          <div className="min-w-0">
            <p className="eyebrow">TypeScript SDK Example</p>
            <h3 className="mt-1 text-lg font-semibold text-[var(--color-ink)] sm:text-xl">
              {current.label} Operation
            </h3>
          </div>
          <button
            type="button"
            onClick={() => {
              setRunning(true);
              window.setTimeout(() => setRunning(false), 900);
            }}
            className="btn-primary w-full sm:w-auto"
          >
            {running ? <LoaderCircle size={15} className="animate-spin" /> : <Play size={15} />}
            Execute
          </button>
        </div>

        <div className="grid min-w-0 gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${current.id}-code`}
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              className="min-w-0"
            >
              <div className="mb-2 text-xs font-mono text-[var(--color-muted)]">query.ts</div>
              <CodeBlock code={current.code} variant="typescript" />
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${current.id}-${running ? "running" : "done"}`}
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              className="min-w-0 flex flex-col"
            >
              <div className="mb-2 flex items-center justify-between text-xs font-mono text-[var(--color-muted)]">
                <span>response.json</span>
                {running ? (
                  <span className="text-[var(--color-muted)]">running query...</span>
                ) : (
                  <span className="text-[var(--color-semantic-success)]">200 OK</span>
                )}
              </div>
              {running ? (
                <div className="flex h-full min-h-[160px] flex-col justify-center space-y-3 rounded-[var(--radius-lg)] border border-[var(--color-hairline)] bg-[var(--color-surface-dark)] p-4">
                  {[1, 2, 3].map((bar) => (
                    <motion.div
                      key={bar}
                      animate={reduceMotion ? {} : { opacity: [0.2, 0.7, 0.2] }}
                      transition={{ repeat: Infinity, duration: 0.9, delay: bar * 0.1 }}
                      className="h-3.5 rounded bg-[#333338]"
                    />
                  ))}
                </div>
              ) : (
                <CodeBlock code={current.output} variant="json" className="h-full" />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
