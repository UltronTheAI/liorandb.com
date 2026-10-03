"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Activity,
  BookOpen,
  ChevronDown,
  Cpu,
  Database,
  FileCode,
  Globe,
  HelpCircle,
  LayoutDashboard,
  Layers,
  MapPin,
  Menu,
  MessageSquareText,
  Milestone,
  Shield,
  User,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { GitHubMark } from "./github-mark";
import { GitHubStars } from "./github-stars";

type SiteHeaderProps = {
  navItems?: readonly (readonly [string, string])[];
  appUrl: string;
  docsUrl: string;
  studioUrl: string;
  discordUrl: string;
  githubUrl: string;
  githubRepo: string;
};

export function SiteHeader({
  appUrl,
  docsUrl,
  discordUrl,
  githubUrl,
  githubRepo,
}: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const reduceMotion = useReducedMotion();
  const menuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  const handleMouseEnter = (menuName: string) => {
    if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
    setActiveMenu(menuName);
  };

  const handleMouseLeave = () => {
    menuTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  const productItems = [
    {
      title: "Overview",
      description: "Developer-first document database architecture",
      href: "/#product",
      icon: Database,
    },
    {
      title: "V2 Rust Engine",
      description: "High-performance storage engine with MVCC",
      href: "/#v2",
      icon: Cpu,
    },
    {
      title: "Benchmarks",
      description: "Stress test waveforms, latency, and logs",
      href: "/#benchmarks",
      icon: Activity,
    },
    {
      title: "Developer API",
      description: "MongoDB-style queries & TypeScript SDK",
      href: "/#api-explorer",
      icon: FileCode,
    },
    {
      title: "Use Cases",
      description: "Workload patterns from SaaS to AI backends",
      href: "/#use-cases",
      icon: Layers,
    },
  ];

  const resourceItems = [
    {
      title: "Documentation",
      description: "Guides, tutorials, and driver installation",
      href: docsUrl,
      external: true,
      icon: BookOpen,
    },
    {
      title: "Roadmap",
      description: "Pre-alpha milestones & Alpha launch plan",
      href: "/#roadmap",
      external: false,
      icon: Milestone,
    },
    {
      title: "Why India",
      description: "Data sovereignty & domestic infrastructure",
      href: "/#why-india",
      external: false,
      icon: Shield,
    },
    {
      title: "Founder",
      description: "Swaraj Puppalwar & engineering mission",
      href: "/#founder",
      external: false,
      icon: User,
    },
    {
      title: "Community & Discord",
      description: "Join real-time discussions and updates",
      href: discordUrl,
      external: true,
      icon: MessageSquareText,
    },
    {
      title: "FAQ",
      description: "Straight answers on V1, V2, and hosting",
      href: "/#faq",
      external: false,
      icon: HelpCircle,
    },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition border-b ${
        scrolled
          ? "border-[var(--color-hairline)] bg-[var(--color-canvas)]/98 shadow-[var(--shadow-1)] backdrop-blur-sm"
          : "border-[var(--color-hairline)] bg-[var(--color-canvas)]"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link
          href="/#top"
          className="inline-flex h-10 items-center gap-2.5 rounded-[var(--radius-md)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ink)]"
        >
          <span className="grid h-8 w-8 shrink-0 place-items-center overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-hairline-strong)] bg-[var(--color-surface-card)]">
            <Image
              src="/favicon.ico"
              alt="LioranDB logo"
              width={20}
              height={20}
              className="h-5 w-5 rounded-[3px]"
              priority
            />
          </span>
          <span className="flex min-w-0 flex-col justify-center leading-none">
            <span className="truncate text-sm font-semibold tracking-tight text-[var(--color-ink)]">
              LioranDB
            </span>
            <span className="mt-1 hidden text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--color-muted)] min-[380px]:block">
              Developed in India
            </span>
          </span>
        </Link>

        {/* Desktop Navigation Menus */}
        <nav className="hidden items-center gap-1 lg:flex">
          {/* Product Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("product")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              onClick={() => setActiveMenu(activeMenu === "product" ? null : "product")}
              aria-expanded={activeMenu === "product"}
              className={`inline-flex h-9 items-center gap-1 px-3 text-sm font-medium rounded-[var(--radius-md)] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ink)] ${
                activeMenu === "product"
                  ? "bg-[var(--color-surface-strong)] text-[var(--color-ink)]"
                  : "text-[var(--color-body)] hover:text-[var(--color-ink)]"
              }`}
            >
              <span>Product</span>
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${
                  activeMenu === "product" ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {activeMenu === "product" ? (
                <motion.div
                  initial={reduceMotion ? false : { opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 6 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-0 top-full mt-1.5 w-[320px] rounded-[var(--radius-lg)] border border-[var(--color-hairline)] bg-[var(--color-surface-card)] p-2 shadow-[var(--shadow-3)]"
                >
                  <div className="space-y-1">
                    {productItems.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        onClick={() => setActiveMenu(null)}
                        className="flex items-start gap-3 rounded-[var(--radius-md)] p-2.5 transition hover:bg-[var(--color-surface-soft)]"
                      >
                        <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-[var(--radius-sm)] border border-[var(--color-hairline)] bg-[var(--color-surface)] text-[var(--color-ink)]">
                          <item.icon size={14} />
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-[var(--color-ink)]">
                            {item.title}
                          </p>
                          <p className="mt-0.5 text-xs text-[var(--color-body)] line-clamp-1">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>

          {/* Pricing Direct Link */}
          <Link
            href="/#pricing"
            className="inline-flex h-9 items-center px-3 text-sm font-medium text-[var(--color-body)] transition hover:text-[var(--color-ink)] rounded-[var(--radius-md)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ink)]"
          >
            Pricing
          </Link>

          {/* Docs Direct Link */}
          <Link
            href={docsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 items-center px-3 text-sm font-medium text-[var(--color-body)] transition hover:text-[var(--color-ink)] rounded-[var(--radius-md)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ink)]"
          >
            Docs
          </Link>

          {/* Resources Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("resources")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              onClick={() => setActiveMenu(activeMenu === "resources" ? null : "resources")}
              aria-expanded={activeMenu === "resources"}
              className={`inline-flex h-9 items-center gap-1 px-3 text-sm font-medium rounded-[var(--radius-md)] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ink)] ${
                activeMenu === "resources"
                  ? "bg-[var(--color-surface-strong)] text-[var(--color-ink)]"
                  : "text-[var(--color-body)] hover:text-[var(--color-ink)]"
              }`}
            >
              <span>Resources</span>
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${
                  activeMenu === "resources" ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {activeMenu === "resources" ? (
                <motion.div
                  initial={reduceMotion ? false : { opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 6 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-0 top-full mt-1.5 w-[330px] rounded-[var(--radius-lg)] border border-[var(--color-hairline)] bg-[var(--color-surface-card)] p-2 shadow-[var(--shadow-3)]"
                >
                  <div className="space-y-1">
                    {resourceItems.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noreferrer" : undefined}
                        onClick={() => setActiveMenu(null)}
                        className="flex items-start gap-3 rounded-[var(--radius-md)] p-2.5 transition hover:bg-[var(--color-surface-soft)]"
                      >
                        <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-[var(--radius-sm)] border border-[var(--color-hairline)] bg-[var(--color-surface)] text-[var(--color-ink)]">
                          <item.icon size={14} />
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-[var(--color-ink)]">
                            {item.title}
                          </p>
                          <p className="mt-0.5 text-xs text-[var(--color-body)] line-clamp-1">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </nav>

        {/* Right Actions */}
        <div className="hidden items-center justify-end gap-2.5 lg:flex">
          <ThemeToggle />
          <Link
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="View LioranDB on GitHub"
            className="inline-flex h-10 items-center justify-center gap-1.5 rounded-[var(--radius-md)] border border-[var(--color-hairline-strong)] bg-[var(--color-surface-card)] px-3 text-sm font-medium text-[var(--color-ink)] transition hover:bg-[var(--color-surface-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ink)]"
          >
            <GitHubMark className="h-4 w-4 text-[var(--color-ink)]" />
            <GitHubStars repo={githubRepo} />
          </Link>
          <Link
            href={appUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-primary gap-1.5 px-4"
          >
            <LayoutDashboard size={15} />
            Try Free
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center justify-end gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-hairline-strong)] bg-[var(--color-surface-card)] text-[var(--color-ink)] transition hover:bg-[var(--color-surface-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ink)]"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="border-t border-[var(--color-hairline)] bg-[var(--color-canvas)] px-4 py-5 shadow-[var(--shadow-2)] lg:hidden max-h-[85vh] overflow-y-auto"
          >
            <div className="mx-auto flex max-w-[1200px] flex-col gap-6">
              {/* Product Category */}
              <div>
                <p className="eyebrow px-2 mb-2">Product</p>
                <div className="grid gap-1">
                  {productItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="flex items-center gap-3 rounded-[var(--radius-md)] px-3 py-2 text-sm font-medium text-[var(--color-body)] transition hover:bg-[var(--color-surface-soft)] hover:text-[var(--color-ink)]"
                      onClick={() => setOpen(false)}
                    >
                      <item.icon size={15} className="text-[var(--color-muted)]" />
                      <span>{item.title}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Resources Category */}
              <div>
                <p className="eyebrow px-2 mb-2">Resources &amp; Company</p>
                <div className="grid gap-1">
                  {resourceItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noreferrer" : undefined}
                      className="flex items-center gap-3 rounded-[var(--radius-md)] px-3 py-2 text-sm font-medium text-[var(--color-body)] transition hover:bg-[var(--color-surface-soft)] hover:text-[var(--color-ink)]"
                      onClick={() => setOpen(false)}
                    >
                      <item.icon size={15} className="text-[var(--color-muted)]" />
                      <span>{item.title}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Direct Quick Links & CTA */}
              <div className="grid gap-2 pt-3 border-t border-[var(--color-hairline)]">
                <Link
                  href="/#pricing"
                  className="rounded-[var(--radius-md)] px-3 py-2 text-sm font-semibold text-[var(--color-ink)] transition hover:bg-[var(--color-surface-soft)]"
                  onClick={() => setOpen(false)}
                >
                  Pricing &amp; Plans →
                </Link>
                <Link
                  href={appUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary w-full justify-center mt-2"
                  onClick={() => setOpen(false)}
                >
                  <LayoutDashboard size={16} />
                  Try Free
                </Link>
                <Link
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary w-full justify-center"
                >
                  <GitHubMark className="h-4 w-4" />
                  GitHub Star
                  <GitHubStars repo={githubRepo} />
                </Link>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
