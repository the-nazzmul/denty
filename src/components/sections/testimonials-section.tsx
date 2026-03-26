import { Quote } from "lucide-react";

import { Section } from "@/components/layout/section";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { testimonials } from "@/data/home-content";

export function TestimonialsSection() {
  return (
    <Section id="testimonials">
      <div className="mx-auto mb-8 max-w-2xl px-1 text-center sm:mb-10">
        <p className="text-sm font-medium text-muted-foreground">Stories</p>
        <h2 className="mt-2 font-heading text-2xl font-bold text-foreground sm:text-3xl">
          Healing stories
        </h2>
      </div>

      <div className="grid min-w-0 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <Card
            key={t.author}
            className="grid grid-rows-3 border-0 bg-card shadow-md ring-1 ring-border/60"
          >
            <CardHeader>
              <Quote
                className="size-8 text-secondary-foreground/40"
                aria-hidden
              />
            </CardHeader>
            <CardContent className="space-y-4 pt-0">
              <p className="text-sm text-muted-foreground sm:text-base">
                &ldquo;{t.quote}&rdquo;
              </p>
            </CardContent>
            <CardFooter className="">
              <p className="text-sm font-medium text-foreground">{t.author}</p>
              <p className="text-sm text-muted-foreground">{t.role}</p>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Pagination dots — visual only until carousel is added */}
      <div
        className="mt-8 flex justify-center gap-2"
        role="presentation"
        aria-hidden
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className={`size-2 rounded-full ${i === 0 ? "bg-primary" : "bg-border"}`}
          />
        ))}
      </div>
    </Section>
  );
}
