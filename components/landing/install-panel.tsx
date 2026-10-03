"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { CodeBlock } from "./code-block";
import { CopyButton } from "./copy-button";

type InstallPanelProps = {
  commands: Record<string, string>;
  steps: readonly string[];
  code: string;
  output: string;
};

export function InstallPanel({
  commands,
  steps,
  code,
  output,
}: InstallPanelProps) {
  const [activePkg, setActivePkg] = useState<string>(Object.keys(commands)[0]);
  const reduceMotion = useReducedMotion();

  return (
    <div className="space-y-6">
      <div className="card-base">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
          <div className="inline-flex max-w-full flex-wrap gap-1 rounded-[var(--radius-md)] border border-[var(--color-hairline)] bg-[var(--color-surface-strong)] p-1">
            {Object.keys(commands).map((pkg) => (
              <button
                key={pkg}
                type="button"
                onClick={() => setActivePkg(pkg)}
                className={`rounded-[var(--radius-md)] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition ${
                  activePkg === pkg
                    ? "bg-[var(--color-primary)] text-[var(--color-on-primary)] shadow-sm"
                    : "text-[var(--color-body)] hover:text-[var(--color-ink)]"
                }`}
              >
                {pkg}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-[var(--color-muted)]">Terminal command</span>
            <CopyButton text={commands[activePkg]} label="Copy installation command" />
          </div>
        </div>
        <CodeBlock code={commands[activePkg]} variant="terminal" className="min-w-0 max-w-full" />
      </div>

      <div className="grid min-w-0 gap-6 lg:grid-cols-[280px_1fr]">
        <div className="card-base min-w-0">
          <p className="eyebrow mb-4">Build Path</p>
          <div className="space-y-2.5">
            {steps.map((step, index) => (
              <motion.div
                key={step}
                initial={reduceMotion ? false : { opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                className="rounded-[var(--radius-md)] border border-[var(--color-hairline)] bg-[var(--color-surface)] px-3.5 py-3 transition hover:border-[var(--color-hairline-strong)]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-[var(--color-muted)]">
                    0{index + 1}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-muted-soft)]" />
                </div>
                <p className="mt-1 text-sm font-medium text-[var(--color-ink)]">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="card-base min-w-0">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <span className="eyebrow">First Database Query</span>
            <CopyButton text={code} />
          </div>
          <div className="grid min-w-0 gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="min-w-0">
              <div className="mb-2 text-xs font-mono text-[var(--color-muted)]">index.ts</div>
              <CodeBlock code={code} variant="typescript" />
            </div>
            <div className="min-w-0">
              <div className="mb-2 text-xs font-mono text-[var(--color-muted)]">output.json</div>
              <CodeBlock code={output} variant="json" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
