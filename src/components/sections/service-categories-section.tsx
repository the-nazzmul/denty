import { Plus } from "lucide-react";

import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { serviceCategories } from "@/data/home-content";
import { cn } from "@/lib/utils";

export function ServiceCategoriesSection() {
  return (
    <Section id="services" className="bg-background-accent">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <p className="text-sm font-medium text-muted-foreground">Services</p>
        <h2 className="mt-2 font-heading text-2xl font-bold text-foreground sm:text-3xl">
          Treatments for every stage
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {serviceCategories.map((cat) => (
          <Card
            key={cat.title}
            className={cn(
              "overflow-hidden border-0 shadow-md ring-1 ring-border/60",
              "accent" in cat &&
                cat.accent === "pink" &&
                "bg-pink-accent/40 ring-pink-accent/30"
            )}
          >
            <div className="aspect-[5/3] bg-muted" />
            <CardHeader>
              <CardTitle className="font-heading text-lg">{cat.title}</CardTitle>
              <CardDescription>{cat.description}</CardDescription>
            </CardHeader>
            <CardFooter className="justify-end border-0 bg-transparent pt-0">
              <Button
                size="icon"
                variant="outline"
                className="rounded-full"
                aria-label={`More about ${cat.title}`}
              >
                <Plus className="size-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  );
}
