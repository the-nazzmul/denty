import { Section } from "@/components/layout/section";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { experts } from "@/data/home-content";

function initials(name: string) {
  return name
    .replace(/^Dr\.\s*/i, "")
    .split(/\s+/)
    .slice(0, 2)
    .map((p) => p[0])
    .join("")
    .toUpperCase();
}

export function ExpertsSection() {
  return (
    <Section id="experts" className="bg-secondary/50">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <p className="text-sm font-medium text-muted-foreground">Team</p>
        <h2 className="mt-2 font-heading text-2xl font-bold text-foreground sm:text-3xl">
          Meet our experts
        </h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {experts.map((doc) => (
          <Card
            key={doc.name}
            className="border-0 bg-card text-center shadow-md ring-1 ring-border/60"
          >
            <CardContent className="flex flex-col items-center gap-3 pt-8 pb-6">
              <Avatar size="lg" className="size-20">
                <AvatarFallback className="bg-secondary text-lg font-semibold text-primary">
                  {initials(doc.name)}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-heading font-semibold text-foreground">
                  {doc.name}
                </p>
                <p className="text-sm text-muted-foreground">{doc.role}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
