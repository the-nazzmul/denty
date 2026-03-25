import * as React from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const pill = "h-11 rounded-full px-6 text-sm font-medium sm:h-12 sm:px-8";

type MarketingButtonProps = React.ComponentProps<typeof Button>;

/** Primary filled CTA — matches hero / footer “Book appointment” pattern. */
export function BookAppointmentButton({
  className,
  ...props
}: MarketingButtonProps) {
  return (
    <Button
      type="button"
      size="lg"
      className={cn(pill, className)}
      {...props}
    />
  );
}

/** Secondary outline CTA — light blue border / ghost of hero second button. */
export function SecondaryMarketingButton({
  className,
  variant = "outline",
  ...props
}: MarketingButtonProps) {
  return (
    <Button
      type="button"
      size="lg"
      variant={variant}
      className={cn(
        pill,
        "border-2 border-secondary bg-secondary/30 text-foreground hover:bg-secondary/60",
        className
      )}
      {...props}
    />
  );
}

/** Icon-only ghost control (nav search / profile / notifications). */
export function IconHeaderButton({
  className,
  "aria-label": ariaLabel,
  ...props
}: MarketingButtonProps) {
  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      aria-label={ariaLabel}
      className={cn("text-foreground", className)}
      {...props}
    />
  );
}
