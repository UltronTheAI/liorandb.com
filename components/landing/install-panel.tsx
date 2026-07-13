"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";
import { CodeBlock } from "./code-block";
import { CopyButton } from "./copy-button";

type InstallPanelProps = {
  commands: Record<"npm" | "pnpm" | "yarn", string>;
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
  const [activePkg, setActivePkg] = useState<keyof typeof commands>("npm");
  const reduceMotion = useReducedMotion();
  const highlightedStep = useMemo(() => 3, []);

  return (
    <div className="space-y-6">
      <div className="rounded-[24px] border border-white/10 bg-[var(--color-elevated)] p-4 md:p-6">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
          <div className="inline-flex rounded-[14px] border border-white/10 bg-black/30 p-1">
            {(Object.keys(commands) as Array<keyof typeof commands>).map((pkg) => (
              <button
                key={pkg}
                type="button"
                onClick={() => setActivePkg(pkg)}
                className={`rounded-[10px] px-4 py-2 text-sm font-medium capitalize transition ${
                  activePkg === pkg
                    ? "bg-[var(--color-primary)] text-black"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {pkg}
              </button>
            ))}
          </div>
          <CopyButton text={commands[activePkg]} label="Copy installation command" />
        </div>
        <CodeBlock
          code={commands[activePkg]}
          variant="terminal"
          className="bg-[linear-gradient(180deg,rgba(8,10,14,0.94),rgba(6,7,10,0.98))] text-zinc-200"
        />
      </div>

      <div className="grid gap-6 xl:grid-cols-[280px_1fr]">
        <div className="rounded-[24px] border border-white/10 bg-[var(--color-elevated)] p-5">
          <p className="mb-4 text-xs uppercase tracking-[0.22em] text-zinc-500">
            Build Path
          </p>
          <div className="space-y-3">
            {steps.map((step, index) => (
              <motion.div
                key={step}
                initial={reduceMotion ? false : { opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className={`rounded-[18px] border px-4 py-4 ${
                  index === highlightedStep
                    ? "border-[var(--color-border-strong)] bg-[rgba(46,229,157,0.08)]"
                    : "border-white/8 bg-black/25"
                }`}
              >
                <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
                  Step {index + 1}
                </p>
                <p className="mt-2 text-sm font-medium text-white">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="rounded-[24px] border border-white/10 bg-[var(--color-elevated)] p-5">
          <div className="mb-4 flex items-center justify-between gap-4">
            <span className="text-xs uppercase tracking-[0.22em] text-zinc-500">
              First database
            </span>
            <CopyButton text={code} />
          </div>
          <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            <CodeBlock
              code={code}
              variant="typescript"
              className="bg-[linear-gradient(180deg,rgba(8,10,14,0.92),rgba(6,7,10,0.96))] text-zinc-200"
            />
            <CodeBlock
              code={output}
              variant="json"
              className="bg-[linear-gradient(180deg,rgba(46,229,157,0.08),rgba(10,10,10,0.88))] text-zinc-200"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
