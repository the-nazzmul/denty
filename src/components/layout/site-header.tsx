import { Container } from "@/components/layout/container";
import { SiteHeaderBar } from "@/components/layout/site-header-bar";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <Container className="flex h-16 min-w-0 items-center justify-between gap-3 sm:h-[4.5rem] sm:gap-4">
        <SiteHeaderBar />
      </Container>
    </header>
  );
}
