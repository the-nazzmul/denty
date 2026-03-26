import * as React from "react";

import { cn } from "@/lib/utils";

/** Max-width page gutter used across marketing sections. */
export function Container({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "mx-auto w-full min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8",
        className
      )}
      {...props}
    />
  );
}
