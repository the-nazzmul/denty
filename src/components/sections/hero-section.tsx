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

const heroFloatImages = [
  "/assets/hero-doctor-1.png",
  "/assets/hero-doctor-2.png",
] as const;

export function HeroSection() {
  return (
    <Section id="hero" className="pt-6 pb-10 sm:pt-10 sm:pb-16">
      <div className="grid min-w-0 items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12">
        <div className="min-w-0 space-y-5 sm:space-y-6">
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

          <div className="grid grid-cols-2 gap-3 pt-2 sm:flex sm:flex-wrap">
            {hero.floatCards.map((card, index) => (
              <Card
                key={card.title}
                size="sm"
                className="w-full border-0 bg-secondary/60 shadow-sm ring-1 ring-border/60 sm:max-w-[13rem]"
              >
                <CardContent className="!px-3 !py-3">
                  <div className="flex items-start gap-2.5">
                    <div className="relative size-11 shrink-0 overflow-hidden rounded-full ring-1 ring-border/40">
                      <Image
                        src={heroFloatImages[index]}
                        alt=""
                        width={44}
                        height={44}
                        className="size-full object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-foreground">
                        {card.title}
                      </p>
                      <p className="text-[11px] leading-snug text-muted-foreground">
                        {card.subtitle}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full min-w-0 max-w-lg lg:mx-0 lg:max-w-none">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-muted shadow-lg ring-1 ring-border/60">
            <Image
              src="/assets/hero-dentist-main.jpg"
              alt="Dentist caring for a patient"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 48vw, 100vw"
            />
          </div>

          <div className="relative z-10 -mt-6 mx-3 rounded-xl bg-card px-3 py-3 shadow-md ring-1 ring-border/80 sm:-mt-8 sm:mx-6 sm:px-6 sm:py-4 md:mx-8">
            <div className="grid grid-cols-3 gap-1 text-center sm:gap-4">
              {hero.stats.map((s) => (
                <div key={s.label} className="min-w-0 px-0.5">
                  <p className="text-base font-bold text-foreground sm:text-lg md:text-xl">
                    {s.value}
                  </p>
                  <p className="text-[9px] leading-tight text-muted-foreground sm:text-xs">
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
