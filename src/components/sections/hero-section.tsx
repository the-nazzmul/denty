import Image from "next/image";
import { Star } from "lucide-react";

import {
  BookAppointmentButton,
  SecondaryMarketingButton,
} from "@/components/denty/marketing-buttons";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { hero } from "@/data/home-content";

export function HeroSection() {
  return (
    <Section id="hero" className="pt-8 pb-12 sm:pt-10 sm:pb-16">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-6">
          <Badge
            variant="secondary"
            className="gap-1 rounded-full border-0 bg-secondary px-3 py-1 text-secondary-foreground"
          >
            <Star className="size-3.5 fill-primary text-primary" aria-hidden />
            {hero.ratingLabel}
          </Badge>

          <div className="space-y-4">
            <h1 className="font-heading text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              {hero.title}
            </h1>
            <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
              {hero.description}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <BookAppointmentButton>Book appointment</BookAppointmentButton>
            <SecondaryMarketingButton>
              Get started today
            </SecondaryMarketingButton>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            {hero.floatCards.map((card) => (
              <Card
                key={card.title}
                size="sm"
                className="max-w-[11rem] border-0 bg-secondary/60 shadow-sm ring-1 ring-border/60"
              >
                <CardContent className="!px-3 !py-3">
                  <p className="text-xs font-semibold text-foreground">
                    {card.title}
                  </p>
                  <p className="text-[11px] text-muted-foreground">
                    {card.subtitle}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-muted shadow-lg ring-1 ring-border/60">
            <Image
              src="/reference-image.webp"
              alt="Dentist caring for a patient"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>

          <div className="relative z-10 -mt-8 mx-4 rounded-xl bg-card px-4 py-3 shadow-md ring-1 ring-border/80 sm:mx-8 sm:px-6 sm:py-4">
            <div className="grid grid-cols-3 gap-2 text-center sm:gap-4">
              {hero.stats.map((s) => (
                <div key={s.label}>
                  <p className="text-lg font-bold text-foreground sm:text-xl">
                    {s.value}
                  </p>
                  <p className="text-[10px] text-muted-foreground sm:text-xs">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
