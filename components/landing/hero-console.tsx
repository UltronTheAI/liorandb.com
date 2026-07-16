"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Activity, DatabaseZap, Play, TimerReset } from "lucide-react";
import { CodeBlock } from "./code-block";
import { CopyButton } from "./copy-button";

type HeroConsoleProps = {
  code: string;
  output: string;
};

export function HeroConsole({ code, output }: HeroConsoleProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative min-w-0 w-full overflow-hidden rounded-[24px] border border-white/10 bg-[#0b0b10] shadow-[0_40px_120px_rgba(0,0,0,0.55)]">
      <div className="flex flex-col gap-3 border-b border-white/8 px-3 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-4">
        <div className="flex min-w-0 flex-wrap items-center gap-2 sm:gap-3">
          <div className="flex gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-white/8 px-2 py-1 text-[10px] text-zinc-400 sm:text-[11px]">
            V1
          </span>
          <CopyButton text={code} />
        </div>
      </div>
      <div className="grid gap-0 xl:grid-cols-[220px_1fr]">
        <aside className="min-w-0 border-b border-white/8 p-4 xl:border-r xl:border-b-0">
          <div className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-zinc-500">
            <DatabaseZap size={14} />
            Collections
          </div>
          <div className="space-y-2">
            {["users", "sessions", "orders", "products"].map((name, index) => (
              <motion.div
                key={name}
                initial={reduceMotion ? false : { opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className={`rounded-2xl border px-3 py-3 text-sm ${
                  name === "users"
                    ? "border-[var(--color-border-strong)] bg-[rgba(46,229,157,0.08)] text-white"
                    : "border-white/8 bg-white/3 text-zinc-400"
                }`}
              >
                {name}
              </motion.div>
            ))}
          </div>
          <div className="mt-6 grid gap-3 text-xs text-zinc-500">
            <div className="flex items-center gap-2 rounded-2xl border border-white/8 bg-black/25 px-3 py-2">
              <Play size={13} className="text-[var(--color-primary)]" />
              query runtime: 4.8ms
            </div>
            <div className="flex items-center gap-2 rounded-2xl border border-white/8 bg-black/25 px-3 py-2">
              <Activity size={13} className="text-[var(--color-cyan)]" />
              wal sync: healthy
            </div>
            <div className="flex items-center gap-2 rounded-2xl border border-white/8 bg-black/25 px-3 py-2">
              <TimerReset size={13} className="text-[var(--color-purple)]" />
              last checkpoint: 11s
            </div>
          </div>
        </aside>
        <div className="min-w-0 p-4">
          <div className="grid gap-4">
            <div>
              <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                  Query
                </span>
                <span className="text-xs text-zinc-500">users collection</span>
              </div>
              <CodeBlock
                code={code}
                variant="typescript"
                animated
                className="bg-[#0d1016] text-zinc-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
              />
            </div>
            <div>
              <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                  Terminal
                </span>
              </div>
              <CodeBlock
                code={output}
                variant="terminal"
                className="bg-[#0a0d12] text-zinc-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
