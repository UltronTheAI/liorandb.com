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
      className="inline-flex shrink-0 items-center gap-1.5 rounded-[var(--radius-md)] border border-[#333338] bg-[#1f1f23] px-2.5 py-1 text-xs font-medium text-[#c0c4cc] transition hover:bg-[#2a2a30] hover:text-[#ffffff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffffff]"
      onClick={async () => {
        await navigator.clipboard.writeText(text);
        setCopied(true);
      }}
    >
      {copied ? <Check size={13} className="text-[#7ee787]" /> : <Copy size={13} />}
      <span className="hidden xs:inline">{copied ? "Copied" : "Copy"}</span>
    </button>
  );
}
