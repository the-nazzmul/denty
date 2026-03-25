import { Check } from "lucide-react";

import { Section } from "@/components/layout/section";

const points = [
  "Evidence-based treatment plans",
  "Sterile instruments and modern suites",
  "Insurance-friendly billing support",
  "Gentle care for anxious patients",
] as const;

export function CommitmentSection() {
  return (
    <Section id="commitment">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
        <div className="space-y-5">
          <p className="text-sm font-medium text-muted-foreground">
            Our promise
          </p>
          <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
            Committed to your oral health
          </h2>
          <p className="text-muted-foreground">
            We combine clinical excellence with a calm environment so every visit
            feels straightforward and supportive.
          </p>
          <ul className="space-y-3">
            {points.map((text) => (
              <li key={text} className="flex gap-3">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                  <Check className="size-3.5" aria-hidden />
                </span>
                <span className="text-foreground">{text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Image collage placeholder — replace with real photography */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <div className="aspect-[4/5] rounded-2xl bg-muted ring-1 ring-border/60" />
          <div className="mt-8 aspect-[4/5] rounded-2xl bg-muted ring-1 ring-border/60" />
          <div className="-mt-6 aspect-[4/5] rounded-2xl bg-muted ring-1 ring-border/60" />
          <div className="aspect-[4/5] rounded-2xl bg-muted ring-1 ring-border/60" />
        </div>
      </div>
    </Section>
  );
}
