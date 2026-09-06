"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";
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
  const highlightedStep = useMemo(() => 3, []);

  return (
    <div className="space-y-6">
      <div className="card-feature">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
          <div className="inline-flex max-w-full flex-wrap rounded-full border border-[var(--color-hairline)] bg-[var(--color-surface)] p-1">
            {Object.keys(commands).map((pkg) => (
              <button
                key={pkg}
                type="button"
                onClick={() => setActivePkg(pkg)}
                className={`rounded-full px-4 py-2 text-sm font-semibold capitalize transition ${
                  activePkg === pkg
                    ? "bg-[var(--color-brand-green)] text-[var(--color-on-primary)]"
                    : "text-[var(--color-steel)] hover:text-[var(--color-ink)]"
                }`}
              >
                {pkg}
              </button>
            ))}
          </div>
          <CopyButton text={commands[activePkg]} label="Copy installation command" />
        </div>
        <CodeBlock code={commands[activePkg]} variant="terminal" className="min-w-0 max-w-full" />
      </div>

      <div className="grid min-w-0 gap-6 xl:grid-cols-[280px_1fr]">
        <div className="card-base min-w-0">
          <p className="eyebrow mb-4">Build Path</p>
          <div className="space-y-3">
            {steps.map((step, index) => (
              <motion.div
                key={step}
                initial={reduceMotion ? false : { opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className={`rounded-[var(--radius-lg)] border px-4 py-4 ${
                  index === highlightedStep
                    ? "border-[var(--color-brand-green)] bg-[var(--color-surface-feature)]"
                    : "border-[var(--color-hairline)] bg-[var(--color-surface)]"
                }`}
              >
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-stone)]">
                  Step {index + 1}
                </p>
                <p className="mt-2 text-sm font-medium text-[var(--color-ink)]">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="card-base min-w-0">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <span className="eyebrow">First database</span>
            <CopyButton text={code} />
          </div>
          <div className="grid min-w-0 gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="min-w-0">
              <CodeBlock code={code} variant="typescript" />
            </div>
            <div className="min-w-0">
              <CodeBlock code={output} variant="json" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
