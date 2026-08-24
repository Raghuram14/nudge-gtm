"use client";

import Link from "next/link";
import { useState } from "react";

import { BrandMark } from "@/components/layout/brand-mark";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";
import { headerCta, primaryNavigation } from "@/config/navigation";
import { ROUTES } from "@/config/routes";
import { track } from "@/lib/analytics";

export function SiteHeader(): React.ReactElement {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border gtm-glass">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href={ROUTES.home} aria-label="Nudgeio home">
          <BrandMark />
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {primaryNavigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <Button
            href={headerCta.href}
            onClick={() => track("cta_click", { label: headerCta.label, surface: "header" })}
          >
            {headerCta.label}
          </Button>
        </div>
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <Button
            variant="secondary"
            className="min-h-9"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            Menu
          </Button>
        </div>
      </div>
      {open ? (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-border px-4 py-4 lg:hidden">
          <ul className="flex flex-col gap-3">
            {primaryNavigation.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="text-sm" onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Button href={headerCta.href}>{headerCta.label}</Button>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
