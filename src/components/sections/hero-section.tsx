import Image from "next/image";
import { ArrowUpRight, Star } from "lucide-react";

import {
  BookAppointmentButton,
  SecondaryMarketingButton,
} from "@/components/denty/marketing-buttons";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { hero } from "@/data/home-content";

const heroFloatImages = [
  "/assets/hero-doctor-1.png",
  "/assets/hero-doctor-2.png",
] as const;

const floatCardStyles = ["bg-[#f3dccd]", "bg-[#edd0f5]"] as const;

export function HeroSection() {
  return (
    <Section
      id="hero"
      className="overflow-x-clip pt-8 pb-12 sm:pt-12 sm:pb-16 min-h-screen"
    >
      <div className="grid min-w-0 gap-6 lg:grid-cols-2 lg:gap-8 xl:gap-10">
        {/* Reference: left column is a large tinted “card” */}
        <div className="order-2 flex min-w-0 lg:order-0">
          <div className="flex w-full flex-col overflow-hidden rounded-[28px] bg-secondary px-5 py-6 shadow-sm ring-1 ring-border/40 sm:px-7 sm:py-8 ">
            <Badge
              variant="secondary"
              className="w-fit gap-2 rounded-full border border-border/40 bg-background px-3 py-1 text-secondary-foreground shadow-sm"
            >
              <Star
                className="size-3.5 fill-primary text-primary"
                aria-hidden
              />
              {hero.ratingLabel}
            </Badge>

            <div className="mt-5 space-y-6 sm:mt-6">
              <h1 className="font-heading text-[1.65rem] font-bold leading-[1.12] tracking-tight text-foreground sm:text-4xl lg:text-5xl lg:leading-[1.08]">
                {hero.title}
              </h1>
              <p className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                {hero.description}
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center">
              <BookAppointmentButton className="w-full sm:w-auto">
                Book Appointment
              </BookAppointmentButton>
              <SecondaryMarketingButton className="w-full !border-primary bg-background hover:bg-muted/40 sm:w-auto">
                Get Started Today
              </SecondaryMarketingButton>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-auto sm:gap-4">
              {hero.floatCards.map((card, index) => (
                <div
                  key={card.title}
                  className={`relative overflow-hidden rounded-2xl ${floatCardStyles[index]} shadow-sm ring-1 ring-black/5 flex max-w-[250px] mx-auto`}
                >
                  {/* Text + arrow overlay */}
                  <div className="flex flex-col items-start justify-between gap-4 p-5 sm:p-6">
                    <p className="min-w-0 pr-14 text-lg font-bold leading-[1.05] text-foreground sm:text-lg">
                      {card.title}
                    </p>
                    <span className="inline-flex size-12 -translate-y-1 items-center justify-center rounded-full bg-foreground text-background shadow-sm">
                      <ArrowUpRight className="size-5" />
                    </span>
                  </div>

                  <Image
                    src={heroFloatImages[index]}
                    alt="Doctor"
                    height={220}
                    width={220}
                    className="object-contain absolute -right-10 -bottom-15 w-full scale-[1.18] h-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reference: right column is a taller image panel with split stat pills */}
        <div className="relative order-1 min-w-0 lg:order-0">
          <div className="relative mx-auto aspect-3/4 w-full overflow-hidden rounded-[28px] bg-muted shadow-lg ring-1 ring-border/50 sm:aspect-4/5 lg:mx-0">
            <Image
              src="/assets/hero-dentist-main.jpg"
              alt="Dentist caring for a patient"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 46vw, 100vw"
            />

            <div className="absolute inset-x-4 bottom-4 grid grid-cols-3 gap-2 sm:inset-x-6 sm:bottom-6 sm:gap-3">
              {hero.stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl bg-background/95 px-2 py-3 text-center shadow-md ring-1 ring-border/60 backdrop-blur-sm sm:px-3 sm:py-4"
                >
                  <p className="text-sm font-bold text-foreground sm:text-base">
                    {s.value}
                  </p>
                  <p className="mt-1 text-[10px] leading-tight text-muted-foreground sm:text-xs">
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
