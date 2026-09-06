"use client";

import { Check, Copy } from "lucide-react";
import { useEffect, useState } from "react";

type CopyButtonProps = {
  text: string;
  label?: string;
};

export function CopyButton({
  text,
  label = "Copy code to clipboard",
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timeout = window.setTimeout(() => setCopied(false), 1800);
    return () => window.clearTimeout(timeout);
  }, [copied]);

  return (
    <button
      type="button"
      aria-label={label}
      className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[var(--color-hairline-strong)] bg-[var(--color-canvas)] px-3 py-2 text-xs font-semibold text-[var(--color-charcoal)] transition hover:bg-[var(--color-surface)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-green)]"
      onClick={async () => {
        await navigator.clipboard.writeText(text);
        setCopied(true);
      }}
    >
      {copied ? <Check size={14} /> : <Copy size={14} />}
      <span className="hidden xs:inline">{copied ? "Copied" : "Copy"}</span>
    </button>
  );
}
