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
  AvatarImage,
} from "@/components/ui/avatar";

const ctaAvatars = [
  "/assets/avatar-1.jpg",
  "/assets/avatar-2.jpg",
  "/assets/avatar-3.jpg",
] as const;

export function CtaSection() {
  return (
    <Section id="cta" className="bg-secondary/60" contained={false}>
      <Container className="min-w-0">
        <div className="rounded-2xl bg-background-accent px-4 py-10 text-center shadow-inner ring-1 ring-border/50 sm:rounded-3xl sm:px-8 sm:py-12 md:px-10 md:py-14">
          <h2 className="font-heading text-xl font-bold text-foreground sm:text-2xl md:text-3xl">
            Get in touch with us
          </h2>
          <p className="mx-auto mt-3 max-w-lg px-1 text-sm text-muted-foreground sm:text-base">
            Join hundreds of patients who trust Denty for preventive and
            restorative care.
          </p>

          <div className="mt-6 flex justify-center overflow-x-auto px-2">
            <AvatarGroup className="justify-center">
              <Avatar>
                <AvatarImage src={ctaAvatars[0]} alt="" />
                <AvatarFallback>ML</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src={ctaAvatars[1]} alt="" />
                <AvatarFallback>JK</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src={ctaAvatars[2]} alt="" />
                <AvatarFallback>DR</AvatarFallback>
              </Avatar>
              <AvatarGroupCount>+2k</AvatarGroupCount>
            </AvatarGroup>
          </div>

          <div className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:items-center">
            <BookAppointmentButton className="w-full sm:w-auto">
              Book appointment
            </BookAppointmentButton>
            <SecondaryMarketingButton className="w-full sm:w-auto">
              Get started today
            </SecondaryMarketingButton>
          </div>
        </div>
      </Container>
    </Section>
  );
}
