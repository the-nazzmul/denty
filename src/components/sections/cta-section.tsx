import {
  BookAppointmentButton,
  SecondaryMarketingButton,
} from "@/components/denty/marketing-buttons";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
} from "@/components/ui/avatar";

export function CtaSection() {
  return (
    <Section id="cta" className="bg-secondary/60" contained={false}>
      <Container>
        <div className="rounded-3xl bg-background-accent px-6 py-12 text-center shadow-inner ring-1 ring-border/50 sm:px-10 sm:py-14">
          <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
            Get in touch with us
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
            Join hundreds of patients who trust Denty for preventive and
            restorative care.
          </p>

          <div className="mt-6 flex justify-center">
            <AvatarGroup className="justify-center">
              <Avatar>
                <AvatarFallback>AM</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>JK</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>PS</AvatarFallback>
              </Avatar>
              <AvatarGroupCount>+2k</AvatarGroupCount>
            </AvatarGroup>
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <BookAppointmentButton>Book appointment</BookAppointmentButton>
            <SecondaryMarketingButton>
              Get started today
            </SecondaryMarketingButton>
          </div>
        </div>
      </Container>
    </Section>
  );
}
