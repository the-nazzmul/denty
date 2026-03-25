import Image from "next/image";
import Link from "next/link";
import { Bell, Search, UserRound } from "lucide-react";

import { IconHeaderButton } from "@/components/denty/marketing-buttons";
import { Container } from "@/components/layout/container";
import { navLinks } from "@/data/home-content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <Container className="flex h-16 items-center justify-between gap-4 sm:h-[4.5rem]">
        <Link href="#hero" className="flex shrink-0 items-center gap-2">
          <Image
            src="/denty-logo-text.png"
            alt="Denty"
            width={120}
            height={36}
            className="h-8 w-auto sm:h-9"
            priority
          />
        </Link>

        <nav
          className="hidden items-center gap-6 text-sm font-medium text-foreground lg:flex"
          aria-label="Main"
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <IconHeaderButton aria-label="Search">
            <Search className="size-5" />
          </IconHeaderButton>
          <IconHeaderButton aria-label="Account" className="hidden sm:inline-flex">
            <UserRound className="size-5" />
          </IconHeaderButton>
          <IconHeaderButton aria-label="Notifications">
            <Bell className="size-5" />
          </IconHeaderButton>
        </div>
      </Container>
    </header>
  );
}
