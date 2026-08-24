"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { BrandMark } from "@/components/layout/brand-mark";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { headerCta, primaryNavigation } from "@/config/navigation";
import { ROUTES } from "@/config/routes";
import { track } from "@/lib/analytics";

export function SiteHeader(): React.ReactElement {
  const [open, setOpen] = useState(false);

  return (
    <header className="gtm-glass sticky top-0 z-40 border-b border-border">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href={ROUTES.home} aria-label={"Nudgeio home"} onClick={() => setOpen(false)}>
          <BrandMark />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {primaryNavigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm text-text-secondary transition-colors hover:text-foreground"
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

        <div className="flex items-center gap-1 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-md text-foreground transition-colors hover:bg-surface-hover"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <Icon icon={open ? X : Menu} className="size-5" />
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-border bg-surface lg:hidden"
        >
          <ul className="mx-auto w-full max-w-6xl px-4 py-2 sm:px-6">
            {primaryNavigation.map((item) => (
              <li key={item.label} className="border-b border-border-subtle last:border-b-0">
                <Link
                  href={item.href}
                  className="block py-3.5 text-sm text-foreground"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mx-auto w-full max-w-6xl px-4 pb-5 pt-3 sm:px-6">
            <Button
              href={headerCta.href}
              className="w-full"
              onClick={() => {
                track("cta_click", { label: headerCta.label, surface: "header-mobile" });
                setOpen(false);
              }}
            >
              {headerCta.label}
            </Button>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
