import { CopyButton } from "@/components/site/copy-button";

export function CodeBlock({ code, language = "text", filename }: { code: string; language?: string; filename?: string }) {
  return <div className="code-surface"><div className="code-surface__header"><span>{filename ?? language}</span><CopyButton value={code} /></div><pre className="code-surface__body"><code>{code}</code></pre></div>;
}
