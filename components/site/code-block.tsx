import { CopyButton } from "@/components/site/copy-button";
import { SyntaxCode } from "@/components/site/syntax";

export function CodeBlock({ code, language = "text", filename }: { code: string; language?: string; filename?: string }) {
  return <div className="code-surface"><div className="code-surface__header"><span className="code-surface__label">{filename ?? language}</span><CopyButton value={code} /><span className="sr-only" aria-live="polite">Code can be copied to the clipboard.</span></div><pre className="code-surface__body" tabIndex={0} aria-label={`${filename ?? language} code`}><code><SyntaxCode code={code} language={language} /></code></pre></div>;
}

export function Terminal({ code, label = "liorandb / local" }: { code: string; label?: string }) {
  return <div className="terminal-surface"><div className="terminal-surface__header"><span className="terminal-surface__label">{label}</span><CopyButton value={code} /></div><pre className="terminal-surface__body" tabIndex={0} aria-label={`${label} terminal commands`}><code><SyntaxCode code={code} language="bash" /></code></pre></div>;
}
