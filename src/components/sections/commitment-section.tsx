import Image from "next/image";
import { Check } from "lucide-react";

import { Section } from "@/components/layout/section";

const commitmentImages = [
  "/assets/commitment-1.jpg",
  "/assets/commitment-2.jpg",
  "/assets/commitment-3.jpg",
  "/assets/commitment-4.jpg",
] as const;

const points = [
  "Advanced Dental Care For Every Smile",
  "Personalized Treatments Tailored To You",
  "Modern Technology For Better Results",
  "Comfort, Safety, And Quality Guaranteed",
  "Your Smile, Our Responsibility",
] as const;

export function CommitmentSection() {
  return (
    <Section id="commitment">
      <div className="grid min-w-0 gap-8 sm:gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
        <div className="min-w-0 space-y-4 sm:space-y-5">
          <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl lg:text-6xl">
            Committed To Your Oral Health
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed sm:text-base lg:text-lg">
            We strive to provide exceptional dental care through advanced
            technology, personalized treatments, and a compassionate approach,
            ensuring your oral health is always our top priority for a brighter,
            healthier smile.
          </p>
          <ul className="space-y-3">
            {points.map((text) => (
              <li key={text} className="flex gap-3 lg:gap-4">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                  <Check className="size-3.5" aria-hidden />
                </span>
                <span className="text-foreground text-sm sm:text-[0.95rem] lg:text-[1.05rem]">
                  {text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid min-w-0 grid-cols-2 gap-2 sm:gap-3 md:gap-4">
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl ring-1 ring-border/60 sm:rounded-2xl">
            <Image
              src={commitmentImages[0]}
              alt="Dental care"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 25vw, 45vw"
            />
          </div>
          <div className="relative mt-6 aspect-[4/5] overflow-hidden rounded-xl ring-1 ring-border/60 sm:mt-10 sm:rounded-2xl md:mt-12">
            <Image
              src={commitmentImages[1]}
              alt="Dental treatment"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 25vw, 45vw"
            />
          </div>
          <div className="relative -mt-4 aspect-[4/5] overflow-hidden rounded-xl ring-1 ring-border/60 sm:-mt-6 sm:rounded-2xl md:-mt-8">
            <Image
              src={commitmentImages[2]}
              alt="Clinic environment"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 25vw, 45vw"
            />
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl ring-1 ring-border/60 sm:rounded-2xl">
            <Image
              src={commitmentImages[3]}
              alt="Patient care"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 25vw, 45vw"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
