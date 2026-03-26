import * as React from "react";

import { cn } from "@/lib/utils";

import { Container } from "./container";

type SectionProps = React.ComponentProps<"section"> & {
  /** When false, children span full width (you wrap with Container inside). */
  contained?: boolean;
};

/**
 * Vertical rhythm + optional anchor id for in-page nav.
 * Default: inner content is wrapped in Container.
 */
export function Section({
  id,
  className,
  children,
  contained = true,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-[5.5rem] py-14 sm:py-20",
        className
      )}
      {...props}
    >
      {contained ? <Container>{children}</Container> : children}
    </section>
  );
}
