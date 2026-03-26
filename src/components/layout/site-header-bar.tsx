"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useState, useRef, useEffect } from "react";
import { Bell, Menu, Search, UserRound } from "lucide-react";

import { IconHeaderButton } from "@/components/denty/marketing-buttons";
import { useActiveNavSection } from "@/components/layout/use-active-nav-section";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks, navSectionIds } from "@/data/home-content";
import { smoothScrollToHash } from "@/lib/smooth-scroll";
import { cn } from "@/lib/utils";

const SCROLL_MS = 850;
/** Extra time after easing ends so layout + observer settle before showing active styles */
const SCROLL_SETTLE_MS = 120;

function isModifiedClick(e: React.MouseEvent) {
  return (
    e.button !== 0 ||
    e.metaKey ||
    e.ctrlKey ||
    e.shiftKey ||
    e.altKey
  );
}

export function SiteHeaderBar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  /** While true, active nav styles stay off until scroll animation + observer catch up */
  const [scrollAnimating, setScrollAnimating] = useState(false);
  const scrollEndTimerRef = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  const activeId = useActiveNavSection(navSectionIds);

  useEffect(() => {
    return () => {
      if (scrollEndTimerRef.current !== null) {
        clearTimeout(scrollEndTimerRef.current);
      }
    };
  }, []);

  const navigateToHash = useCallback(
    (hash: string, closeMobile: boolean) => {
      if (closeMobile) setMobileOpen(false);
      const ok = smoothScrollToHash(hash, SCROLL_MS);
      if (!ok) return;

      window.history.pushState(null, "", hash);

      if (scrollEndTimerRef.current !== null) {
        clearTimeout(scrollEndTimerRef.current);
      }
      setScrollAnimating(true);
      scrollEndTimerRef.current = setTimeout(() => {
        setScrollAnimating(false);
        scrollEndTimerRef.current = null;
      }, SCROLL_MS + SCROLL_SETTLE_MS);
    },
    []
  );

  const onLogoClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (isModifiedClick(e)) return;
      if (pathname !== "/") return;
      e.preventDefault();
      if (e.detail > 0) e.currentTarget.blur();
      if (scrollEndTimerRef.current !== null) {
        clearTimeout(scrollEndTimerRef.current);
        scrollEndTimerRef.current = null;
      }
      setScrollAnimating(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.replaceState(null, "", "/");
    },
    [pathname]
  );

  const onInPageClick = useCallback(
    (
      e: React.MouseEvent<HTMLAnchorElement>,
      href: string,
      closeMobile: boolean
    ) => {
      if (!href.startsWith("#")) return;
      if (isModifiedClick(e)) return;
      e.preventDefault();
      // Mouse clicks focus the link and can look like an instant “active” underline
      if (e.detail > 0) e.currentTarget.blur();
      navigateToHash(href, closeMobile);
    },
    [navigateToHash]
  );

  const isNavActive = (id: string) =>
    !scrollAnimating && activeId === id;

  const desktopLinkClass = (id: string) =>
    cn(
      "relative shrink-0 rounded-md px-2.5 py-2 text-sm font-medium transition-colors",
      "focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:outline-none",
      isNavActive(id)
        ? "text-primary after:absolute after:right-2 after:bottom-0.5 after:left-2 after:h-0.5 after:rounded-full after:bg-primary"
        : "text-muted-foreground hover:bg-muted/70 hover:text-foreground"
    );

  const mobileLinkClass = (id: string) =>
    cn(
      "block rounded-lg border-l-4 py-3 pr-3 pl-3 text-base font-medium transition-colors",
      "focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:outline-none",
      isNavActive(id)
        ? "border-primary bg-primary/10 text-primary"
        : "border-transparent text-foreground hover:bg-muted"
    );

  return (
    <>
      <Link
        href="/"
        onClick={onLogoClick}
        className="flex min-w-0 shrink-0 items-center gap-2"
      >
        <Image
          src="/denty-logo-text.png"
          alt="Denty"
          width={120}
          height={36}
          className="h-7 w-auto sm:h-9"
          priority
        />
      </Link>

      <nav
        className="hidden min-w-0 flex-1 justify-center gap-4 text-foreground xl:gap-6 lg:flex"
        aria-label="Main"
      >
        {navLinks.map(({ href, label }) => {
          const id = href.slice(1);
          return (
            <Link
              key={href}
              href={href}
              onClick={(e) => onInPageClick(e, href, false)}
              className={desktopLinkClass(id)}
              aria-current={isNavActive(id) ? "page" : undefined}
            >
              {label}
            </Link>
          );
        })}
      </nav>

      <div className="flex shrink-0 items-center gap-0.5 sm:gap-2">
        <IconHeaderButton aria-label="Search">
          <Search className="size-5" />
        </IconHeaderButton>
        <IconHeaderButton
          aria-label="Account"
          className="hidden sm:inline-flex"
        >
          <UserRound className="size-5" />
        </IconHeaderButton>
        <IconHeaderButton aria-label="Notifications">
          <Bell className="size-5" />
        </IconHeaderButton>

        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="flex w-[min(100vw-1.5rem,20rem)] flex-col"
          >
            <SheetHeader className="text-left">
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <nav
              className="flex flex-1 flex-col gap-0.5 px-2 pb-6"
              aria-label="Main"
            >
              {navLinks.map(({ href, label }) => {
                const id = href.slice(1);
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={(e) => onInPageClick(e, href, true)}
                    className={mobileLinkClass(id)}
                    aria-current={isNavActive(id) ? "page" : undefined}
                  >
                    {label}
                  </Link>
                );
              })}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
