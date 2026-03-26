import Image from "next/image";
import { ChevronRight, Shield } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { servicesList } from "@/data/home-content";

export function ServicesHighlightSection() {
  return (
    <Section
      id="services-highlight"
      className="bg-background-accent"
      contained={false}
    >
      <Container>
        <div className="grid min-w-0 gap-8 sm:gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-14">
          <div className="min-w-0 space-y-3">
            <p className="text-sm font-medium text-muted-foreground">
              What we offer
            </p>
            <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl lg:text-5xl">
              Care built around your smile
            </h2>
            <ul className="space-y-2 pt-2">
              {servicesList.map((item) => (
                <li key={item}>
                  <Button
                    variant="secondary"
                    className="h-auto w-full justify-between rounded-xl border-0 bg-secondary/80 py-3 pr-3 pl-4 text-left font-medium text-foreground shadow-none hover:bg-secondary"
                    asChild
                  >
                    <a href="#services">
                      <span>{item}</span>
                      <ChevronRight className="size-4 shrink-0 opacity-70" />
                    </a>
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0 overflow-hidden rounded-2xl bg-card shadow-md ring-1 ring-border/60">
            <div className="grid h-full grid-cols-2 items-stretch">
              {/* Left: image */}
              <div className="relative h-full w-full bg-muted overflow-hidden">
                <Image
                  src="/assets/consultation.jpg"
                  alt="Online dental consultation"
                  fill
                  className="object-cover object-bottom scale-[1.06]"
                />
              </div>

              {/* Right: text + CTA */}
              <div className="flex h-full flex-col justify-center">
                <div className="space-y-4 p-6 sm:p-7">
                  <Badge className="w-fit rounded-full bg-primary text-primary-foreground">
                    <Shield className="mr-1 size-3" aria-hidden />
                    Safe &amp; protected
                  </Badge>
                  <h3 className="font-heading text-2xl leading-tight sm:text-3xl">
                    Online consultation
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    Speak with our team from home. We&apos;ll guide next steps
                    and scheduling.
                  </p>
                  <div>
                    <Button className="w-full sm:w-auto" asChild>
                      <a href="#cta">Book a video consult</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
