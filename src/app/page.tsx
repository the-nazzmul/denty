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
      <CommitmentSection />
      <ServicesHighlightSection />
      <ServiceCategoriesSection />
      <ExpertsSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
