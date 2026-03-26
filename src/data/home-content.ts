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
  ratingLabel: "5.0 (2k reviews)",
  title: "Exceptional dental care, every step of the way.",
  description:
    "From routine checkups to advanced treatment, Denty combines experienced clinicians with a calm, modern experience.",
  stats: [
    { value: "200+", label: "Expert doctors" },
    { value: "400+", label: "Regular patients" },
    { value: "99%", label: "Satisfied rate" },
  ],
  floatCards: [
    { title: "24/7 service", subtitle: "We are here when you need us" },
    { title: "Best doctors", subtitle: "Find the right specialist" },
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
