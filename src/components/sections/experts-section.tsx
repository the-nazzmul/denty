import Image from "next/image";
import { Plus } from "lucide-react";

import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { experts } from "@/data/home-content";
import { cn } from "@/lib/utils";

export function ExpertsSection() {
  return (
    <Section id="experts" className="relative overflow-hidden bg-secondary/35">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-secondary/25 via-secondary/10 to-background-accent" />

      <div className="mx-auto mb-8 max-w-2xl px-1 text-center sm:mb-10">
        <p className="relative z-10 text-sm font-medium text-muted-foreground">
          Finest Industry Experts
        </p>
        <h2 className="relative z-10 mt-2 font-heading text-2xl font-bold text-foreground sm:text-3xl">
          Meet Our Experts Doctors
        </h2>
      </div>

      <div className="relative z-10 grid min-w-0 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {experts.map((doc, index) => (
          <div
            key={doc.name}
            className={cn(
              "group relative min-w-0 overflow-hidden rounded-2xl bg-secondary shadow-md ring-1 ring-border/60",
              // Keep mobile as square so the portrait image doesn't crop the face.
              "h-auto sm:h-[220px] lg:h-[240px]",
            )}
          >
            <div className="relative aspect-square w-full bg-secondary">
              <Image
                src={`/assets/expert-${index + 1}.png`}
                alt={doc.name}
                fill
                priority={index < 2}
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 100vw"
                // Mobile: slightly zoomed-out + top-aligned to avoid cutting the head.
                // Desktop: keep the tighter crop.
                className="object-cover object-top scale-[0.98] sm:scale-[1.07]"
              />
            </div>

            <div className="absolute inset-x-4 bottom-3 rounded-xl bg-card/85 p-2.5 backdrop-blur sm:bottom-4 sm:p-3">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="truncate font-heading text-[0.95rem] font-semibold text-foreground">
                    {doc.name}
                  </p>
                  <p className="truncate text-xs text-muted-foreground">
                    {doc.role}
                  </p>
                </div>

                <Button
                  size="icon"
                  variant="outline"
                  aria-label={`More about ${doc.name}`}
                  className="h-9 w-9 rounded-full bg-background/70 backdrop-blur transition-colors group-hover:bg-background/90"
                >
                  <Plus className="size-4" aria-hidden />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
