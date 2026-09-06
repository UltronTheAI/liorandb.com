"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { BookOpen, LayoutDashboard, Menu, MessageSquareText, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { GitHubMark } from "./github-mark";
import { GitHubStars } from "./github-stars";

type NavItem = readonly [string, string];

type SiteHeaderProps = {
  navItems: readonly NavItem[];
  appUrl: string;
  docsUrl: string;
  studioUrl: string;
  discordUrl: string;
  githubUrl: string;
  githubRepo: string;
};

export function SiteHeader({
  navItems,
  appUrl,
  docsUrl,
  studioUrl,
  discordUrl,
  githubUrl,
  githubRepo,
}: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(navItems[0]?.[1] ?? "#product");
  const reduceMotion = useReducedMotion();

  const ids = useMemo(
    () =>
      navItems
        .map(([, href]) => href)
        .filter((href) => !href.startsWith("external:"))
        .map((href) => href.replace("#", "")),
    [navItems],
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => Boolean(node));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActive(`#${visible.target.id}`);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0.2, 0.45, 0.7],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [ids]);

  useEffect(() => {
    if (!open) return;
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  const linkClass =
    "inline-flex h-10 items-center rounded-full px-3 text-sm font-medium text-[var(--color-steel)] transition hover:text-[var(--color-ink)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-green)]";

  const iconBtnClass =
    "inline-flex h-10 shrink-0 items-center justify-center rounded-full border border-[var(--color-hairline-strong)] text-[var(--color-charcoal)] transition hover:bg-[var(--color-surface)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-green)]";

  return (
    <header
      className={`sticky top-0 z-50 border-b transition ${
        scrolled
          ? "border-[var(--color-hairline)] bg-[var(--color-canvas)]/95 shadow-[var(--shadow-1)] backdrop-blur-md"
          : "border-[var(--color-hairline)] bg-[var(--color-canvas)]"
      }`}
    >
      <div className="mx-auto grid h-16 max-w-[1280px] grid-cols-[auto_1fr_auto] items-center gap-3 px-4 md:gap-4 md:px-8">
        <Link
          href="/#top"
          className="inline-flex h-10 items-center gap-2.5 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-green)]"
        >
          <span className="grid h-8 w-8 shrink-0 place-items-center overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-hairline)] bg-[var(--color-surface)]">
            <Image
              src="/favicon.ico"
              alt="LioranDB logo"
              width={20}
              height={20}
              className="h-5 w-5 rounded-[3px]"
              priority
            />
          </span>
          <span className="flex flex-col justify-center leading-none">
            <span className="text-sm font-semibold tracking-tight text-[var(--color-ink)]">
              LioranDB
            </span>
            <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--color-brand-green-dark)]">
              Developed in India
            </span>
          </span>
        </Link>

        <nav className="hidden min-w-0 items-center justify-center gap-0.5 lg:flex">
          {navItems.map(([label, href]) => {
            const isExternal = href.startsWith("external:");
            const actualHref = isExternal
              ? href === "external:studio"
                ? studioUrl
                : href
              : href.startsWith("#")
                ? `/${href}`
                : href;

            return (
              <Link
                key={href}
                href={actualHref}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer" : undefined}
                className={`${linkClass} ${
                  !isExternal && active === href
                    ? "font-semibold text-[var(--color-ink)]"
                    : ""
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center justify-end gap-2 lg:flex">
          <ThemeToggle />
          <Link
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="View LioranDB on GitHub"
            className={`${iconBtnClass} gap-1.5 px-3`}
          >
            <GitHubMark className="h-4 w-4" />
            <GitHubStars repo={githubRepo} />
          </Link>
          <Link
            href={discordUrl}
            target="_blank"
            rel="noreferrer"
            className={`${iconBtnClass} gap-1.5 px-3 text-sm font-semibold`}
          >
            <MessageSquareText size={15} />
            Discord
          </Link>
          <Link
            href={docsUrl}
            target="_blank"
            rel="noreferrer"
            className={`${iconBtnClass} gap-1.5 px-3 text-sm font-semibold`}
          >
            <BookOpen size={15} />
            Docs
          </Link>
          <Link
            href={appUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-primary h-10 shrink-0 gap-1.5 !px-4 !py-0 text-sm"
          >
            <LayoutDashboard size={15} />
            Try Free
          </Link>
        </div>

        <div className="col-start-3 flex items-center justify-end gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className={`${iconBtnClass} w-10`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="border-t border-[var(--color-hairline)] bg-[var(--color-canvas)] px-4 py-4 shadow-[var(--shadow-2)] lg:hidden"
          >
            <nav className="mx-auto flex max-w-[1280px] flex-col gap-1">
              {navItems.map(([label, href]) => {
                const isExternal = href.startsWith("external:");
                const actualHref = isExternal
                  ? href === "external:studio"
                    ? studioUrl
                    : href
                  : href.startsWith("#")
                    ? `/${href}`
                    : href;

                return (
                  <Link
                    key={href}
                    href={actualHref}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noreferrer" : undefined}
                    className="rounded-[var(--radius-md)] px-4 py-3 text-sm font-medium text-[var(--color-charcoal)] transition hover:bg-[var(--color-surface)]"
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </Link>
                );
              })}
            </nav>
            <div className="mx-auto mt-4 grid max-w-[1280px] gap-2">
              <Link
                href={appUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-primary w-full"
                onClick={() => setOpen(false)}
              >
                <LayoutDashboard size={16} />
                Try Free
              </Link>
              <Link href={docsUrl} target="_blank" rel="noreferrer" className="btn-secondary w-full">
                <BookOpen size={16} />
                Docs
              </Link>
              <Link href={discordUrl} target="_blank" rel="noreferrer" className="btn-secondary w-full">
                Join Discord
              </Link>
              <Link href={githubUrl} target="_blank" rel="noreferrer" className="btn-secondary w-full">
                <GitHubMark className="h-4 w-4" />
                GitHub
                <GitHubStars repo={githubRepo} />
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
