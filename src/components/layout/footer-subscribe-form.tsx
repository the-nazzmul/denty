"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function FooterSubscribeForm() {
  return (
    <form
      className="flex max-w-md flex-col gap-2 sm:flex-row"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
        <Input
          type="email"
          name="email"
          placeholder="Email address"
          className="h-11 border-primary-foreground/25 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50"
        />
        <Button
          type="submit"
          variant="secondary"
          className="h-11 shrink-0 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
        >
          Subscribe
        </Button>
    </form>
  );
}
