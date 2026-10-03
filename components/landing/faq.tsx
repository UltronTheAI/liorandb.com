"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

type FaqProps = {
  items: ReadonlyArray<readonly [string, string]>;
};

export function Faq({ items }: FaqProps) {
  const [open, setOpen] = useState(0);
  const reduceMotion = useReducedMotion();

  return (
    <div className="divide-y divide-[var(--color-hairline)] rounded-[var(--radius-lg)] border border-[var(--color-hairline)] bg-[var(--color-surface-card)]">
      {items.map(([question, answer], index) => {
        const isOpen = open === index;

        return (
          <div key={question}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-3 px-4 sm:px-6 py-4 sm:py-5 text-left transition hover:bg-[var(--color-surface-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ink)]"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : index)}
            >
              <span className="text-sm sm:text-base font-semibold text-[var(--color-ink)]">
                {question}
              </span>
              <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown size={18} className="shrink-0 text-[var(--color-muted)]" />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <p className="px-4 sm:px-6 pb-4 sm:pb-5 text-xs sm:text-sm leading-relaxed text-[var(--color-body)]">
                    {answer}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
