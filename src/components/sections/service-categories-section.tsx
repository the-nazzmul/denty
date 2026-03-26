import Image from "next/image";
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

const serviceImages = [
  "/assets/service-1.jpg",
  "/assets/service-2.jpg",
  "/assets/service-3.jpg",
] as const;

export function ServiceCategoriesSection() {
  return (
    <Section id="services" className="bg-background-accent">
      <div className="mx-auto mb-8 max-w-2xl px-1 text-center sm:mb-10">
        <p className="text-sm font-medium text-muted-foreground">Services</p>
        <h2 className="mt-2 font-heading text-2xl font-bold text-foreground sm:text-3xl">
          Treatments for every stage
        </h2>
      </div>

      <div className="grid min-w-0 grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {serviceCategories.map((cat, index) => (
          <Card
            key={cat.title}
            className={cn(
              "min-w-0 overflow-hidden border-0 shadow-md ring-1 ring-border/60",
              "accent" in cat &&
                cat.accent === "pink" &&
                "bg-pink-accent/40 ring-pink-accent/30"
            )}
          >
            <div className="relative aspect-[5/3] w-full bg-muted">
              <Image
                src={serviceImages[index]}
                alt=""
                fill
                className="object-cover"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
            </div>
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
