"use client";

import Link from "next/link";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { navGroups, siteConfig } from "@/data/content";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container-wide flex h-16 items-center justify-between gap-6">
        <Link href="/" className="brand-mark" aria-label="LioranDB home">
          <span className="brand-mark__glyph" aria-hidden="true">L</span>
          <span>LioranDB</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navGroups.map((group) => (
            <div key={group.label} className="nav-group">
              <Link href={group.href} className="nav-link">
                {group.label}
                <ChevronDown size={14} aria-hidden="true" />
              </Link>
              <div className="nav-popover" role="menu">
                {group.items.map((item) => (
                  <Link key={item.label} href={item.href} className="nav-popover__link" target={item.external ? "_blank" : undefined} rel={item.external ? "noreferrer" : undefined}>
                    {item.label}
                    {item.external && <ArrowUpRight size={13} aria-hidden="true" />}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <Link href="/pricing" className="nav-link">Pricing</Link>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <Link href={siteConfig.docsUrl} className="btn-secondary" target="_blank" rel="noreferrer">Docs <ArrowUpRight size={14} /></Link>
          <Link href="/developers" className="btn-primary">Get started</Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button type="button" className="icon-button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close navigation" : "Open navigation"}>
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-navigation" className="mobile-nav lg:hidden">
          <div className="container-wide grid gap-5 py-5">
            {navGroups.map((group) => (
              <div key={group.label}>
                <Link href={group.href} className="mobile-nav__heading" onClick={() => setOpen(false)}>{group.label}</Link>
                <div className="mt-2 grid gap-1 pl-3">
                  {group.items.map((item) => <Link key={item.label} href={item.href} className="mobile-nav__link" onClick={() => setOpen(false)}>{item.label}</Link>)}
                </div>
              </div>
            ))}
            <Link href="/pricing" className="mobile-nav__heading" onClick={() => setOpen(false)}>Pricing</Link>
            <Link href="/developers" className="btn-primary w-full" onClick={() => setOpen(false)}>Get started</Link>
          </div>
        </div>
      )}
    </header>
  );
}
