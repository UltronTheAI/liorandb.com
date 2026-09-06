"use client";

import { Star } from "lucide-react";
import { useEffect, useState } from "react";

function formatStars(count: number) {
  if (count >= 1000) {
    const value = count / 1000;
    return `${value >= 10 ? Math.round(value) : value.toFixed(1).replace(/\.0$/, "")}k`;
  }
  return count.toLocaleString();
}

type GitHubStarsProps = {
  repo: string;
};

export function GitHubStars({ repo }: GitHubStarsProps) {
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;
    const controller = new AbortController();

    async function loadStars() {
      try {
        const response = await fetch(`https://api.github.com/repos/${repo}`, {
          signal: controller.signal,
          headers: { Accept: "application/vnd.github+json" },
        });
        if (!response.ok) return;
        const data = (await response.json()) as { stargazers_count?: number };
        if (!cancelled && typeof data.stargazers_count === "number") {
          setStars(data.stargazers_count);
        }
      } catch {
        // Keep icon-only fallback if the request fails.
      }
    }

    void loadStars();
    return () => {
      cancelled = true;
      controller.abort();
    };
  }, [repo]);

  if (stars === null) return null;

  return (
    <span className="inline-flex items-center gap-1 text-xs font-semibold tabular-nums">
      <Star size={12} className="fill-current" aria-hidden />
      {formatStars(stars)}
    </span>
  );
}
