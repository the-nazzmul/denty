import { ChevronRight, Shield } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { servicesList } from "@/data/home-content";

export function ServicesHighlightSection() {
  return (
    <Section
      id="services-highlight"
      className="bg-background-accent"
      contained={false}
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div className="space-y-3">
            <p className="text-sm font-medium text-muted-foreground">
              What we offer
            </p>
            <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
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

          <Card className="overflow-hidden border-0 bg-card shadow-md ring-1 ring-border/60">
            <div className="relative aspect-video bg-muted">
              {/* Placeholder “video call” tile — swap for real media later */}
              <div className="absolute inset-0 flex items-center justify-center text-sm text-muted-foreground">
                Online consultation preview
              </div>
            </div>
            <CardHeader className="space-y-3">
              <Badge className="w-fit rounded-full bg-primary text-primary-foreground">
                <Shield className="mr-1 size-3" aria-hidden />
                Safe &amp; protected
              </Badge>
              <CardTitle className="font-heading text-xl sm:text-2xl">
                Online consultation
              </CardTitle>
              <CardDescription className="text-base">
                Speak with our team from home. We&apos;ll guide next steps and
                scheduling.
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-6">
              <Button className="w-full sm:w-auto" asChild>
                <a href="#cta">Book a video consult</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
