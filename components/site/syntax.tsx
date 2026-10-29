import type { ReactNode } from "react";

type SyntaxKind =
  | "comment"
  | "constant"
  | "function"
  | "keyword"
  | "number"
  | "operator"
  | "property"
  | "string"
  | "type"
  | "variable"
  | "command"
  | "plain";

type SyntaxToken = { kind: SyntaxKind; value: string };

const javascriptKeywords = new Set([
  "as",
  "async",
  "await",
  "catch",
  "class",
  "const",
  "else",
  "export",
  "extends",
  "finally",
  "from",
  "function",
  "if",
  "import",
  "in",
  "interface",
  "let",
  "new",
  "of",
  "return",
  "throw",
  "try",
  "type",
  "typeof",
  "undefined",
  "var",
  "while",
]);

const shellCommands = new Set(["docker", "git", "node", "npm", "npx", "pnpm", "yarn"]);
const constants = new Set(["false", "null", "true", "undefined"]);
const multiCharacterOperators = ["===", "!==", "=>", "??", "?.", "&&", "||", "<=", ">=", "++", "--", "+=", "-=", "**"];

function isWordStart(value: string) {
  return /[A-Za-z_$]/.test(value);
}

function isWordPart(value: string) {
  return /[A-Za-z0-9_$-]/.test(value);
}

function readQuoted(code: string, start: number, quote: string) {
  let index = start + 1;
  while (index < code.length) {
    if (code[index] === "\\") {
      index += 2;
      continue;
    }
    if (code[index] === quote) {
      return index + 1;
    }
    index += 1;
  }
  return code.length;
}

function tokenize(code: string, language: string): SyntaxToken[] {
  const normalizedLanguage = language.toLowerCase();
  const isShell = normalizedLanguage === "bash" || normalizedLanguage === "shell" || normalizedLanguage === "sh";
  const tokens: SyntaxToken[] = [];
  let index = 0;

  const push = (kind: SyntaxKind, value: string) => {
    if (!value) return;
    const previous = tokens[tokens.length - 1];
    if (previous?.kind === kind) {
      previous.value += value;
    } else {
      tokens.push({ kind, value });
    }
  };

  while (index < code.length) {
    const current = code[index];
    const next = code[index + 1] ?? "";

    if (/\s/.test(current)) {
      let end = index + 1;
      while (end < code.length && /\s/.test(code[end])) end += 1;
      push("plain", code.slice(index, end));
      index = end;
      continue;
    }

    if ((!isShell && current === "/" && next === "/") || (isShell && current === "#")) {
      const end = code.indexOf("\n", index);
      const commentEnd = end === -1 ? code.length : end;
      push("comment", code.slice(index, commentEnd));
      index = commentEnd;
      continue;
    }

    if (current === "\"" || current === "'" || (!isShell && current === "`")) {
      const end = readQuoted(code, index, current);
      push("string", code.slice(index, end));
      index = end;
      continue;
    }

    if (current === "$" && isWordStart(next)) {
      let end = index + 2;
      while (end < code.length && isWordPart(code[end])) end += 1;
      push("variable", code.slice(index, end));
      index = end;
      continue;
    }

    if (/\d/.test(current)) {
      const match = code.slice(index).match(/^\d+(?:\.\d+)?/);
      const value = match?.[0] ?? current;
      push("number", value);
      index += value.length;
      continue;
    }

    if (isWordStart(current)) {
      let end = index + 1;
      while (end < code.length && isWordPart(code[end])) end += 1;
      const value = code.slice(index, end);
      let lookahead = end;
      while (lookahead < code.length && /\s/.test(code[lookahead])) lookahead += 1;
      const previousCharacter = code[index - 1] ?? "";
      const isDeclaredVariable = /(?:const|let|var)\s+$/.test(code.slice(0, index));

      if (isShell && shellCommands.has(value)) push("command", value);
      else if (constants.has(value)) push("constant", value);
      else if (!isShell && javascriptKeywords.has(value)) push("keyword", value);
      else if (!isShell && code[lookahead] === "(") push("function", value);
      else if (!isShell && previousCharacter === ".") push("property", value);
      else if (!isShell && isDeclaredVariable) push("variable", value);
      else if (!isShell && /^[A-Z]/.test(value)) push("type", value);
      else push("plain", value);

      index = end;
      continue;
    }

    const operator = multiCharacterOperators.find((candidate) => code.startsWith(candidate, index));
    if (operator) {
      push("operator", operator);
      index += operator.length;
      continue;
    }

    if ("=+-*/%!<>?:&|^~".includes(current)) push("operator", current);
    else push("plain", current);
    index += 1;
  }

  return tokens;
}

export function SyntaxCode({ code, language }: { code: string; language: string }): ReactNode {
  return tokenize(code, language).map((token, index) => (
    <span key={`${token.kind}-${index}`} className={`syntax-${token.kind}`}>
      {token.value}
    </span>
  ));
}
