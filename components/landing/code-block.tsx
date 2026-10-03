"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type CodeVariant = "typescript" | "json" | "terminal";

type CodeBlockProps = {
  code: string;
  variant: CodeVariant;
  className?: string;
  showLineNumbers?: boolean;
  animated?: boolean;
  trailingCursor?: boolean;
};

type Token = {
  text: string;
  className?: string;
};

const tsPattern =
  /(\/\/.*$|"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`|\b(?:import|from|const|await|async|return|console|log|true|false|null|type|try|finally|new)\b|\b(?:LioranDBClient|client|db|collection|users|items|page|found|user|insertResult|activeUsers)\b|\b\d+(?:\.\d+)?\b|[{}()[\].,:;<>]|[@$][A-Za-z_][\w-]*|\b[A-Za-z_][\w]*\b)/g;

const jsonPattern =
  /("(?:[^"\\]|\\.)*")|(\b\d+(?:\.\d+)?\b)|(\btrue\b|\bfalse\b|\bnull\b)|([{}[\],:])/g;

const terminalPattern =
  /(^\$)|(^✓)|(@liorandb\/driver|@liorandb\/cli|liorandb)|(npm install|npm i|docker run|liorandb start)|(package installed|database ready)/g;

function classifyTsToken(token: string) {
  if (token.startsWith("//")) return "code-comment";
  if (/^['"`]/.test(token)) return "code-string";
  if (
    /^(import|from|const|await|async|return|true|false|null|type|try|finally|new)$/.test(token)
  ) {
    return "code-keyword";
  }
  if (/^(console|log|encodeURIComponent|connect|close|insertOne|findOne|find|limit|toArray|aggregate|createIndex|createTextIndex)$/.test(token)) {
    return "code-fn";
  }
  if (/^[@$]/.test(token)) return "code-accent";
  if (/^\d/.test(token)) return "code-number";
  if (/^[{}()[\].,:;<>]$/.test(token)) return "code-punct";
  if (/^(LioranDBClient|client|db|collection|users|items|page|found|user|insertResult|activeUsers|User)$/.test(token)) {
    return "code-symbol";
  }
  return "code-text";
}

function tokenizeTypescript(line: string): Token[] {
  const tokens: Token[] = [];
  let lastIndex = 0;

  for (const match of line.matchAll(tsPattern)) {
    const index = match.index ?? 0;
    if (index > lastIndex) {
      tokens.push({ text: line.slice(lastIndex, index) });
    }

    const value = match[0];
    tokens.push({ text: value, className: classifyTsToken(value) });
    lastIndex = index + value.length;
  }

  if (lastIndex < line.length) {
    tokens.push({ text: line.slice(lastIndex) });
  }

  return tokens;
}

function tokenizeJson(line: string): Token[] {
  const tokens: Token[] = [];
  let lastIndex = 0;

  for (const match of line.matchAll(jsonPattern)) {
    const index = match.index ?? 0;
    if (index > lastIndex) {
      tokens.push({ text: line.slice(lastIndex, index) });
    }

    const [value, stringToken, numberToken, booleanToken, punctToken] = match;
    let className = "code-text";

    if (stringToken) {
      const nextChar = line.slice(index + value.length).trimStart()[0];
      className = nextChar === ":" ? "code-key" : "code-string";
    } else if (numberToken) {
      className = "code-number";
    } else if (booleanToken) {
      className = "code-keyword";
    } else if (punctToken) {
      className = "code-punct";
    }

    tokens.push({ text: value, className });
    lastIndex = index + value.length;
  }

  if (lastIndex < line.length) {
    tokens.push({ text: line.slice(lastIndex) });
  }

  return tokens;
}

function tokenizeTerminal(line: string): Token[] {
  const tokens: Token[] = [];
  let lastIndex = 0;

  for (const match of line.matchAll(terminalPattern)) {
    const index = match.index ?? 0;
    if (index > lastIndex) {
      tokens.push({ text: line.slice(lastIndex, index) });
    }

    const value = match[0];
    let className = "code-text";

    if (value === "$") className = "code-accent";
    else if (value === "✓") className = "code-symbol";
    else if (/@liorandb\/driver|@liorandb\/cli/.test(value)) className = "code-cyan";
    else if (value === "liorandb") className = "code-symbol";
    else if (/npm|docker|liorandb start/.test(value)) className = "code-string";
    else className = "code-number";

    tokens.push({ text: value, className });
    lastIndex = index + value.length;
  }

  if (lastIndex < line.length) {
    tokens.push({ text: line.slice(lastIndex) });
  }

  return tokens;
}

function renderTokens(tokens: Token[]) {
  return tokens.map((token, index) => (
    <span key={`${token.text}-${index}`} className={token.className}>
      {token.text}
    </span>
  ));
}

function tokenizeLine(line: string, variant: CodeVariant): ReactNode[] {
  if (variant === "json") return renderTokens(tokenizeJson(line));
  if (variant === "terminal") return renderTokens(tokenizeTerminal(line));
  return renderTokens(tokenizeTypescript(line));
}

export function CodeBlock({
  code,
  variant,
  className = "",
  showLineNumbers = false,
  animated = false,
  trailingCursor = false,
}: CodeBlockProps) {
  const reduceMotion = useReducedMotion();
  const lines = code.split("\n");

  return (
    <pre
      className={`code-block code-scroll overflow-x-auto p-4 font-mono text-[13px] leading-6 bg-[#171717] text-[#e6edf3] border border-[#28282c] rounded-[var(--radius-lg)] ${className}`}
    >
      <code>
        {lines.map((line, index) => {
          const content = (
            <>
              {showLineNumbers ? (
                <span className="mr-4 inline-block w-6 select-none text-right text-[#6e7681]">
                  {index + 1}
                </span>
              ) : null}
              {tokenizeLine(line, variant)}
              {trailingCursor && index === lines.length - 1 ? (
                <motion.span
                  aria-hidden
                  animate={reduceMotion ? {} : { opacity: [1, 0, 1] }}
                  transition={{ repeat: Infinity, duration: 1.25 }}
                  className="ml-1 inline-block h-4 w-[2px] bg-[#7ee787] align-middle"
                />
              ) : null}
            </>
          );

          if (!animated || reduceMotion) {
            return (
              <div key={`${index}-${line}`} className="relative whitespace-pre">
                {content}
              </div>
            );
          }

          return (
            <motion.div
              key={`${index}-${line}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.18, delay: Math.min(index * 0.03, 0.5) }}
              className="relative whitespace-pre"
            >
              {content}
            </motion.div>
          );
        })}
      </code>
    </pre>
  );
}
