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
    <div className="divide-y divide-[var(--color-hairline)] rounded-[var(--radius-lg)] border border-[var(--color-hairline)] bg-[var(--color-canvas)]">
      {items.map(([question, answer], index) => {
        const isOpen = open === index;

        return (
          <div key={question}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : index)}
            >
              <span className="text-base font-semibold text-[var(--color-ink)]">
                {question}
              </span>
              <motion.span animate={{ rotate: isOpen ? 180 : 0 }}>
                <ChevronDown size={18} className="text-[var(--color-steel)]" />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.22 }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-5 text-sm leading-7 text-[var(--color-steel)]">
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
