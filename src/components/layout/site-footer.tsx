import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

import { Container } from "@/components/layout/container";
import { FooterSubscribeForm } from "@/components/layout/footer-subscribe-form";
import { Separator } from "@/components/ui/separator";
import { footerColumns } from "@/data/home-content";

const social = [
  { Icon: FaFacebookF, label: "Facebook", href: "#" },
  { Icon: FaInstagram, label: "Instagram", href: "#" },
  { Icon: FaXTwitter, label: "X", href: "#" },
  { Icon: FaLinkedinIn, label: "LinkedIn", href: "#" },
] as const;

export function SiteFooter() {
  return (
    <footer
      id="footer"
      className="scroll-mt-[5.5rem] bg-primary text-primary-foreground"
    >
      <Container className="min-w-0 py-12 sm:py-14 md:py-16">
        <div className="grid min-w-0 gap-10 lg:grid-cols-[1.2fr_2fr]">
          <div className="min-w-0 space-y-4">
            <Link href="#hero" className="inline-block">
              <Image
                src="/denty-logo-text.png"
                alt="Denty"
                width={120}
                height={36}
                className="h-9 w-auto brightness-0 invert"
              />
            </Link>
            <p className="max-w-sm text-sm text-primary-foreground/85">
              Subscribe for tips on oral health and clinic updates.
            </p>
            <FooterSubscribeForm />
            <div className="flex gap-2 pt-2">
              {social.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="inline-flex size-10 items-center justify-center rounded-full border border-primary-foreground/25 bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20"
                >
                  <Icon className="size-[18px]" aria-hidden />
                </a>
              ))}
            </div>
          </div>

          <div className="grid min-w-0 grid-cols-2 gap-8 sm:grid-cols-3">
            {footerColumns.map((col) => (
              <div key={col.title} className="min-w-0">
                <p className="mb-3 text-sm font-semibold">{col.title}</p>
                <ul className="space-y-2 text-sm text-primary-foreground/85">
                  {col.links.map((item) => (
                    <li key={item}>
                      <a href="#" className="hover:text-primary-foreground">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Separator className="my-10 bg-primary-foreground/20" />

      </Container>

      {/* Slightly darker band — legal / meta (matches reference footer strip) */}
      <div className="border-t border-black/10 bg-black/15 py-4">
        <Container className="flex flex-col items-center justify-between gap-3 text-xs text-primary-foreground/80 sm:flex-row">
          <p>© {new Date().getFullYear()} Denty. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="hover:text-primary-foreground">
              Privacy policy
            </a>
            <a href="#" className="hover:text-primary-foreground">
              Terms
            </a>
            <a href="#" className="hover:text-primary-foreground">
              Cookies
            </a>
          </div>
        </Container>
      </div>
    </footer>
  );
}
