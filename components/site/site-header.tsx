"use client";

import Link from "next/link";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from "react";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import { navGroups, siteConfig } from "@/data/content";

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const closeTimer = useRef<number | null>(null);
  const suppressFocus = useRef(false);
  const mobileButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const menuItemRefs = useRef<Record<string, Array<HTMLAnchorElement | null>>>({});

  const cancelScheduledClose = () => {
    if (closeTimer.current !== null) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const openNavigationGroup = (label: string) => {
    cancelScheduledClose();
    setOpenGroup(label);
  };

  const scheduleClose = () => {
    cancelScheduledClose();
    closeTimer.current = window.setTimeout(() => {
      setOpenGroup(null);
      closeTimer.current = null;
    }, 160);
  };

  const isActiveRoute = (href: string) => href.startsWith("/") && (pathname === href || (href !== "/" && pathname.startsWith(`${href}/`)));

  useEffect(() => () => cancelScheduledClose(), []);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      if (openGroup) {
        event.preventDefault();
        const trigger = triggerRefs.current[openGroup];
        setOpenGroup(null);
        suppressFocus.current = true;
        trigger?.focus();
        return;
      }
      if (mobileOpen) {
        event.preventDefault();
        setMobileOpen(false);
        mobileButtonRef.current?.focus();
      }
    }

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [mobileOpen, openGroup]);

  function handleTriggerFocus(label: string) {
    if (suppressFocus.current) {
      suppressFocus.current = false;
      return;
    }
    openNavigationGroup(label);
  }

  function handleTriggerKeyDown(event: ReactKeyboardEvent<HTMLAnchorElement>, label: string) {
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
    event.preventDefault();
    openNavigationGroup(label);
    window.requestAnimationFrame(() => {
      const items = menuItemRefs.current[label]?.filter(Boolean) as HTMLAnchorElement[] | undefined;
      items?.[event.key === "ArrowUp" ? items.length - 1 : 0]?.focus();
    });
  }

  function handleMenuKeyDown(event: ReactKeyboardEvent<HTMLAnchorElement>, label: string, index: number) {
    const items = menuItemRefs.current[label]?.filter(Boolean) as HTMLAnchorElement[] | undefined;
    if (!items?.length) return;
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      const offset = event.key === "ArrowDown" ? 1 : -1;
      items[(index + offset + items.length) % items.length]?.focus();
    } else if (event.key === "Home" || event.key === "End") {
      event.preventDefault();
      items[event.key === "Home" ? 0 : items.length - 1]?.focus();
    }
  }

  return (
    <header className="site-header">
      <div className="container-wide flex h-16 items-center justify-between gap-6">
        <Link href="/" className="brand-mark" aria-label="LioranDB home">
          <span className="brand-mark__glyph" aria-hidden="true">L</span>
          <span>LioranDB</span>
        </Link>

        <nav
          className="hidden h-full items-center gap-1 lg:flex"
          aria-label="Primary navigation"
          onPointerEnter={cancelScheduledClose}
          onPointerLeave={scheduleClose}
          onFocus={cancelScheduledClose}
          onBlur={(event) => {
            const nextTarget = event.relatedTarget as Node | null;
            if (!nextTarget || !event.currentTarget.contains(nextTarget)) scheduleClose();
          }}
        >
          {navGroups.map((group) => (
            <div key={group.label} className={`nav-group ${openGroup === group.label ? "is-open" : ""}`}>
              <Link
                ref={(element) => { triggerRefs.current[group.label] = element; }}
                href={group.href}
                className={`nav-link ${isActiveRoute(group.href) ? "is-active" : ""}`}
                aria-haspopup="menu"
                aria-expanded={openGroup === group.label}
                aria-controls={`nav-menu-${group.label.toLowerCase()}`}
                aria-current={isActiveRoute(group.href) ? "page" : undefined}
                onPointerEnter={() => openNavigationGroup(group.label)}
                onFocus={() => handleTriggerFocus(group.label)}
                onKeyDown={(event) => handleTriggerKeyDown(event, group.label)}
                onClick={() => setOpenGroup(null)}
              >
                {group.label}
                <ChevronDown size={14} aria-hidden="true" />
              </Link>
              <div id={`nav-menu-${group.label.toLowerCase()}`} className="nav-popover" role="menu" aria-hidden={openGroup !== group.label}>
                {group.items.map((item, index) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="nav-popover__link"
                    role="menuitem"
                    ref={(element) => {
                      const items = menuItemRefs.current[group.label] ?? [];
                      items[index] = element;
                      menuItemRefs.current[group.label] = items;
                    }}
                    tabIndex={openGroup === group.label ? 0 : -1}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer" : undefined}
                    onFocus={() => openNavigationGroup(group.label)}
                    onKeyDown={(event) => handleMenuKeyDown(event, group.label, index)}
                    onClick={() => setOpenGroup(null)}
                  >
                    {item.label}
                    {item.external && <ArrowUpRight size={13} aria-hidden="true" />}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <Link href="/pricing" className={`nav-link ${isActiveRoute("/pricing") ? "is-active" : ""}`} aria-current={isActiveRoute("/pricing") ? "page" : undefined}>Pricing</Link>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <Link href={siteConfig.docsUrl} className="btn-secondary" target="_blank" rel="noreferrer">Docs <ArrowUpRight size={14} /></Link>
          <Link href="/developers" className="btn-primary">Get started</Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button ref={mobileButtonRef} type="button" className="icon-button" onClick={() => setMobileOpen((value) => !value)} aria-expanded={mobileOpen} aria-controls="mobile-navigation" aria-label={mobileOpen ? "Close navigation" : "Open navigation"}>
            {mobileOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div id="mobile-navigation" className="mobile-nav lg:hidden">
          <div className="container-wide grid gap-5 py-5">
            {navGroups.map((group) => (
              <div key={group.label}>
                <Link href={group.href} className={`mobile-nav__heading ${isActiveRoute(group.href) ? "is-active" : ""}`} onClick={() => setMobileOpen(false)}>{group.label}</Link>
                <div className="mt-2 grid gap-1 pl-3">
                  {group.items.map((item) => <Link key={item.label} href={item.href} className="mobile-nav__link" target={item.external ? "_blank" : undefined} rel={item.external ? "noreferrer" : undefined} onClick={() => setMobileOpen(false)}>{item.label}</Link>)}
                </div>
              </div>
            ))}
            <Link href="/pricing" className={`mobile-nav__heading ${isActiveRoute("/pricing") ? "is-active" : ""}`} onClick={() => setMobileOpen(false)}>Pricing</Link>
            <Link href="/developers" className="btn-primary w-full" onClick={() => setMobileOpen(false)}>Get started</Link>
          </div>
        </div>
      )}
    </header>
  );
}
