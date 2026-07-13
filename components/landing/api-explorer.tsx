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
    <div className="grid gap-6 xl:grid-cols-[260px_1fr]">
      <div className="rounded-[24px] border border-white/10 bg-[var(--color-elevated)] p-4">
        <p className="mb-4 text-xs uppercase tracking-[0.22em] text-zinc-500">
          Operations
        </p>
        <div className="space-y-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActive(tab.id)}
              className={`flex w-full items-center justify-between rounded-[16px] border px-4 py-3 text-left text-sm transition ${
                tab.id === current.id
                  ? "border-[var(--color-border-strong)] bg-[rgba(46,229,157,0.08)] text-white"
                  : "border-white/8 bg-black/25 text-zinc-400 hover:text-white"
              }`}
            >
              {tab.label}
              <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                API
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-[24px] border border-white/10 bg-[var(--color-elevated)] p-5">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
              MongoDB-style workflow
            </p>
            <h3 className="mt-2 text-xl font-semibold text-white">{current.label}</h3>
          </div>
          <button
            type="button"
            onClick={() => {
              setRunning(true);
              window.setTimeout(() => setRunning(false), 1100);
            }}
            className="inline-flex items-center gap-2 rounded-[10px] bg-[var(--color-primary)] px-4 py-3 text-sm font-semibold text-black transition hover:bg-[var(--color-primary-bright)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
          >
            {running ? <LoaderCircle size={16} className="animate-spin" /> : <Play size={16} />}
            Run query
          </button>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${current.id}-code`}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="min-w-0"
            >
              <CodeBlock
                code={current.code}
                variant="typescript"
                className="bg-[linear-gradient(180deg,rgba(8,10,14,0.92),rgba(6,7,10,0.96))] text-zinc-200"
              />
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${current.id}-${running ? "running" : "done"}`}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="rounded-[18px] border border-white/8 bg-[linear-gradient(180deg,rgba(85,214,255,0.06),rgba(0,0,0,0))] p-4"
            >
              <p className="mb-4 text-xs uppercase tracking-[0.22em] text-zinc-500">
                Result
              </p>
              {running ? (
                <div className="space-y-3">
                  {[1, 2, 3].map((bar) => (
                    <motion.div
                      key={bar}
                      animate={reduceMotion ? {} : { opacity: [0.35, 0.9, 0.35] }}
                      transition={{ repeat: Infinity, duration: 1.1, delay: bar * 0.08 }}
                      className="h-4 rounded-full bg-white/8"
                    />
                  ))}
                </div>
              ) : (
                <CodeBlock
                  code={current.output}
                  variant="json"
                  className="border-0 bg-transparent p-0 text-zinc-200"
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
