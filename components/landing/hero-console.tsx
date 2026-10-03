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
    <div className="relative flex h-full min-h-0 w-full min-w-0 flex-col overflow-hidden rounded-[var(--radius-lg)] border border-[#28282c] bg-[#171717] text-[#e6edf3]">
      {/* Header bar */}
      <div className="flex shrink-0 items-center justify-between border-b border-[#28282c] px-4 py-3 bg-[#141414]">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          <span className="ml-2 hidden font-mono text-xs text-[#8b949e] sm:inline">
            liorandb-studio :: {active.name}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded-[var(--radius-sm)] border border-[#333338] bg-[#1f1f23] px-2 py-0.5 font-mono text-[11px] text-[#8b949e]">
            v2.0.4-pre-alpha
          </span>
          <CopyButton text={active.code} />
        </div>
      </div>

      {/* Main console content */}
      <div className="grid min-h-0 flex-1 gap-0 lg:grid-cols-[190px_1fr] xl:grid-cols-[210px_1fr]">
        <aside className="min-w-0 border-b border-[#28282c] p-2.5 sm:p-3.5 bg-[#141414] lg:border-r lg:border-b-0">
          <div className="mb-2 sm:mb-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8b949e]">
            <DatabaseZap size={13} />
            Collections
          </div>
          <div className="flex gap-1.5 overflow-x-auto pb-1 lg:flex-col lg:gap-0 lg:space-y-1.5 lg:overflow-visible lg:pb-0" role="tablist" aria-label="Database collections">
            {collections.map((collection, index) => {
              const isActive = collection.id === active.id;

              return (
                <motion.div
                  key={collection.id}
                  initial={reduceMotion ? false : { opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.25, delay: index * 0.05 }}
                  className="shrink-0 lg:shrink"
                >
                  <button
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveId(collection.id)}
                    className={`flex items-center gap-2 rounded-[var(--radius-md)] border px-2.5 py-1.5 sm:px-3 sm:py-2 text-left font-mono text-xs transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffffff] lg:w-full lg:justify-between ${
                      isActive
                        ? "border-[#404048] bg-[#222228] text-[#ffffff] font-semibold"
                        : "border-transparent text-[#8b949e] hover:bg-[#1c1c20] hover:text-[#e6edf3]"
                    }`}
                  >
                    <span>{collection.name}</span>
                    <span
                      className={`text-[10px] ${
                        isActive ? "text-[#7ee787]" : "text-[#6e7681]"
                      }`}
                    >
                      {collection.docs.toLocaleString()}
                    </span>
                  </button>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-6 hidden space-y-2 text-[11px] font-mono text-[#8b949e] lg:block">
            <div className="flex items-center gap-2 rounded-[var(--radius-sm)] border border-[#28282c] bg-[#18181c] px-2.5 py-1.5">
              <Play size={11} className="text-[#7ee787]" />
              runtime: {active.runtime}
            </div>
            <div className="flex items-center gap-2 rounded-[var(--radius-sm)] border border-[#28282c] bg-[#18181c] px-2.5 py-1.5">
              <Activity size={11} className="text-[#79c0ff]" />
              wal sync: ok
            </div>
            <div className="flex items-center gap-2 rounded-[var(--radius-sm)] border border-[#28282c] bg-[#18181c] px-2.5 py-1.5">
              <TimerReset size={11} className="text-[#d2a8ff]" />
              checkpoint: {active.checkpoint}
            </div>
          </div>
        </aside>

        <div className="flex min-h-0 min-w-0 flex-1 flex-col p-3 sm:p-4 bg-[#171717]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={reduceMotion ? false : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
              transition={{ duration: 0.18 }}
              className="flex min-h-0 flex-1 flex-col gap-4"
            >
              <div>
                <div className="mb-2 flex items-center justify-between text-xs text-[#8b949e]">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#6e7681]">Query</span>
                  <span className="font-mono text-[11px]">{active.name}.find(...)</span>
                </div>
                <CodeBlock code={active.code} variant="typescript" animated className="!border-[#28282c] !bg-[#121214]" />
              </div>

              <div className="min-h-0 flex-1">
                <div className="mb-2 flex items-center justify-between text-xs text-[#8b949e]">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#6e7681]">Output</span>
                  <span className="font-mono text-[11px] text-[#7ee787]">2 documents matched</span>
                </div>
                <CodeBlock code={active.output} variant="terminal" className="!border-[#28282c] !bg-[#121214] max-h-[220px]" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
