import {
  CommitmentSection,
  CtaSection,
  ExpertsSection,
  HeroSection,
  ServiceCategoriesSection,
  ServicesHighlightSection,
  TestimonialsSection,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesHighlightSection />
      <CommitmentSection />
      <ServiceCategoriesSection />
      <ExpertsSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
