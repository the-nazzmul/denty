/** Placeholder copy and nav config for the landing page (iterate per section later). */

/**
 * In-page nav — each `href` must match a real `id` on the page.
 * Order must match **top-to-bottom** section order in `app/page.tsx` for scroll-spy.
 */
export const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#commitment", label: "About" },
  { href: "#services-highlight", label: "Services" },
  { href: "#experts", label: "Doctors" },
  { href: "#cta", label: "Appointments" },
] as const;

/** Nav-linked section ids in document order (scroll-spy + active styles). */
export const navSectionIds: readonly string[] = navLinks.map((l) =>
  l.href.slice(1)
);

export const hero = {
  ratingLabel: "5.0 (4824 Reviews)",
  title: "Exceptional Dental Care, Every Step Of The Way",
  description:
    "Your smile deserves the best. Experience advanced dental solutions with a gentle touch, tailored for your comfort.",
  stats: [
    { value: "200+", label: "Expert Doctors" },
    { value: "400+", label: "Recover Patient" },
    { value: "98%", label: "Satisfied Rate" },
  ],
  floatCards: [
    { title: "24/7 Service Available", subtitle: "" },
    { title: "Find The Best Doctors", subtitle: "" },
  ],
} as const;

export const servicesList = [
  "Expert care tailored to you",
  "Advanced technology & comfort",
  "Transparent pricing",
  "Family-friendly scheduling",
] as const;

export const serviceCategories = [
  {
    title: "General dentistry",
    description: "Checkups, hygiene, and prevention for the whole family.",
  },
  {
    title: "Cosmetic dentistry",
    description: "Smile design, whitening, and aesthetic treatments.",
  },
  {
    title: "More services",
    description: "Implants, orthodontics, and specialist referrals.",
    accent: "pink" as const,
  },
] as const;

export const experts = [
  { name: "Dr. Sarah Chen", role: "General dentistry" },
  { name: "Dr. James Okonkwo", role: "Orthodontics" },
  { name: "Dr. Emily Ross", role: "Cosmetic" },
  { name: "Dr. Michael Patel", role: "Oral surgery" },
] as const;

export const testimonials = [
  {
    quote: "The team made me feel at ease from the first visit. Clear explanations and gentle care.",
    author: "Marcus L.",
    role: "Patient since 2022",
  },
  {
    quote: "Booking online was simple and the clinic runs on time. Highly recommend.",
    author: "Jordan K.",
    role: "New patient",
  },
  {
    quote: "Professional, spotless, and friendly. My whole family comes here now.",
    author: "Daniel R.",
    role: "Family plan",
  },
] as const;

export const footerColumns = [
  {
    title: "Quick links",
    links: ["About", "Services", "Doctors", "Contact"],
  },
  {
    title: "Solutions",
    links: ["Insurance", "Financing", "Emergency", "FAQ"],
  },
  {
    title: "Features",
    links: ["Online booking", "Reminders", "Records", "Reviews"],
  },
] as const;
