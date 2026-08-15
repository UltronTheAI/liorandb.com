"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { BookOpen, Menu, MessageSquareText, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { GitHubMark } from "./github-mark";

type NavItem = readonly [string, string];

type SiteHeaderProps = {
  navItems: readonly NavItem[];
  docsUrl: string;
  studioUrl: string;
  discordUrl: string;
  githubUrl: string;
};

export function SiteHeader({
  navItems,
  docsUrl,
  studioUrl,
  discordUrl,
  githubUrl,
}: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(navItems[0]?.[1] ?? "#product");
  const reduceMotion = useReducedMotion();

  const ids = useMemo(
    () => navItems
      .map(([, href]) => href)
      .filter(href => !href.startsWith("external:"))
      .map(href => href.replace("#", "")),
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
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  const linkClass =
    "rounded-full px-3 py-2 text-sm text-zinc-400 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]";

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 md:px-6">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-[18px] border px-4 py-3 backdrop-blur-xl transition md:px-5 ${
          scrolled
            ? "border-white/14 bg-black/80 shadow-[0_16px_60px_rgba(0,0,0,0.45)]"
            : "border-white/8 bg-black/45"
        }`}
      >
        <Link
          href="#top"
          className="inline-flex items-center gap-3 rounded-full pr-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
        >
          <span className="grid h-10 w-10 place-items-center rounded-xl border border-[var(--color-border-strong)] bg-[linear-gradient(135deg,rgba(46,229,157,0.18),rgba(85,214,255,0.14))]">
            <Image
              src="/favicon.ico"
              alt="LioranDB logo"
              width={24}
              height={24}
              className="h-6 w-6 rounded-[6px]"
              priority
            />
          </span>
          <span>
            <span className="block text-sm font-semibold tracking-[0.18em] text-white uppercase">
              LioranDB
            </span>
            <span className="inline-flex max-w-full rounded-full border border-[rgba(255,153,51,0.18)] bg-[rgba(255,153,51,0.07)] px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.18em] text-[#ffbb6e]">
              Developed in India
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map(([label, href]) => {
            const isExternal = href.startsWith("external:");
            const actualHref = isExternal ? (href === "external:studio" ? studioUrl : href) : href;
            
            return (
              <Link
                key={href}
                href={actualHref}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer" : undefined}
                className={`${linkClass} ${!isExternal && active === href ? "text-white" : ""}`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="View LioranDB on GitHub"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/12 bg-white/5 text-zinc-200 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
          >
            <GitHubMark className="h-[18px] w-[18px]" />
          </Link>
          <Link
            href={discordUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-[10px] border border-white/12 bg-white/5 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
          >
            <MessageSquareText size={16} />
            Join Discord
          </Link>
          <Link
            href={docsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-[10px] border border-white/12 bg-white/5 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
          >
            <BookOpen size={16} />
            Docs
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/12 bg-white/5 text-white lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -14 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-3 max-w-7xl rounded-[18px] border border-white/10 bg-[rgba(10,10,10,0.96)] p-4 shadow-[0_24px_70px_rgba(0,0,0,0.5)] lg:hidden"
          >
            <nav className="flex flex-col gap-2">
              {navItems.map(([label, href]) => {
                const isExternal = href.startsWith("external:");
                const actualHref = isExternal ? (href === "external:studio" ? studioUrl : href) : href;
                
                return (
                  <Link
                    key={href}
                    href={actualHref}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noreferrer" : undefined}
                    className="rounded-xl px-4 py-3 text-sm font-medium text-zinc-200 transition hover:bg-white/6"
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-4 grid gap-2">
              <Link
                href={docsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-[10px] border border-white/12 bg-white/5 px-4 py-3 text-sm font-medium text-white"
              >
                <BookOpen size={16} />
                Docs
              </Link>
              <Link
                href={discordUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-[10px] border border-white/12 bg-white/5 px-4 py-3 text-center text-sm font-medium text-white"
              >
                Join Discord
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
