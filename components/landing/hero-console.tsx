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
    <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(14,14,18,0.98),rgba(7,7,10,0.98))] shadow-[0_40px_120px_rgba(0,0,0,0.55)]">
      <div className="flex items-center justify-between border-b border-white/8 px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </div>
          <span className="rounded-full border border-[var(--color-border-strong)] bg-[rgba(46,229,157,0.08)] px-2 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--color-primary)]">
            Connected
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded-full border border-white/8 px-2 py-1 text-[11px] text-zinc-400">
            V1
          </span>
          <span className="rounded-full border border-[rgba(255,209,102,0.16)] bg-[rgba(255,209,102,0.08)] px-2 py-1 text-[11px] text-[#ffd166]">
            V2 in development
          </span>
          <CopyButton text={code} />
        </div>
      </div>
      <div className="grid gap-0 xl:grid-cols-[220px_1fr_280px]">
        <aside className="border-b border-white/8 p-4 xl:border-r xl:border-b-0">
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
        <div className="border-b border-white/8 p-4 xl:border-r xl:border-b-0">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">
              startup.ts
            </span>
            <span className="text-xs text-zinc-500">Node.js / TypeScript</span>
          </div>
          <CodeBlock
            code={code}
            variant="typescript"
            showLineNumbers
            animated
            trailingCursor
            className="bg-[linear-gradient(180deg,rgba(8,10,14,0.92),rgba(6,7,10,0.96))] text-zinc-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
          />
        </div>
        <div className="p-4">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">
              Output
            </span>
            <motion.span
              animate={reduceMotion ? {} : { opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 1.8 }}
              className="text-xs text-[var(--color-primary)]"
            >
              query executed
            </motion.span>
          </div>
          <CodeBlock
            code={output}
            variant="json"
            className="bg-[linear-gradient(180deg,rgba(46,229,157,0.08),rgba(10,10,10,0.88))] text-zinc-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
          />
        </div>
      </div>
    </div>
  );
}
