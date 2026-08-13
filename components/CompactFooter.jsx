"use client";

import Link from "next/link";
import { ChevronDown, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const socialLinks = [
  { label: "LinkedIn", href: "https://in.linkedin.com/company/antellay", Icon: Linkedin },
  { label: "Instagram", href: "https://www.instagram.com/antellay", Icon: Instagram },
  { label: "Facebook", href: "https://www.facebook.com/antellay", Icon: Facebook },
  { label: "YouTube", href: "https://www.youtube.com/@antellay", Icon: Youtube },
];

export default function CompactFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#071126] text-white">
      <video
        className="pointer-events-none absolute inset-0 h-full w-full scale-[1.01] object-cover contrast-[1.12] saturate-[1.08]"
        src="/videos/footer-background.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#071126]/78 via-[#071126]/66 to-[#071126]/76" />
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 py-10 sm:px-10 lg:px-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-[1.45fr_repeat(4,minmax(0,1fr))]">
          <div className="lg:pr-10">
            <Link href="/" aria-label="Antellay home" className="inline-flex items-center text-3xl font-black tracking-[0.16em] text-white">
              <span className="text-[#00F5D4]" aria-hidden="true">Λ</span>
              <span>NTELLAY</span>
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-6 text-white/55">
              Intelligent technology, engineering, and digital products built to help ambitious businesses move forward.
            </p>
            <form action="/resources/newsletter" method="get" className="mt-4 max-w-sm">
              <label htmlFor="footer-newsletter-email" className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-white/75">
                Subscribe to our newsletter
              </label>
              <div className="flex overflow-hidden rounded-md border border-white/15 bg-white/5 focus-within:border-[#00F5D4]">
                <input id="footer-newsletter-email" name="email" type="email" required placeholder="Your email address" className="min-w-0 flex-1 bg-transparent px-3 py-2.5 text-sm text-white outline-none placeholder:text-white/35" />
                <button type="submit" className="bg-[#00F5D4] px-4 text-xs font-bold text-[#071126] transition hover:bg-white">Subscribe</button>
              </div>
            </form>
            <div className="mt-4 flex flex-wrap gap-3" aria-label="Antellay social media">
              {socialLinks.map(({ label, href, Icon }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={`Follow Antellay on ${label}`} title={label} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/65 transition hover:-translate-y-0.5 hover:border-[#00F5D4] hover:bg-[#00F5D4] hover:text-[#071126]">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#00F5D4]">Explore</h3>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <details className="group">
                  <summary className="flex w-fit cursor-pointer list-none items-center gap-1.5 rounded-sm outline-none transition hover:text-white focus-visible:ring-2 focus-visible:ring-[#00F5D4]">
                    Services
                    <ChevronDown size={15} strokeWidth={2.25} className="transition-transform duration-200 group-open:rotate-180" aria-hidden="true" />
                  </summary>
                  <div className="mt-3 space-y-2 border-l border-white/15 pl-3 text-xs">
                    <Link href="/services_pg" className="block hover:text-[#00F5D4]">All Services</Link>
                    <Link href="/services/artificial-intelligence" className="block hover:text-[#00F5D4]">Artificial Intelligence</Link>
                    <Link href="/services/gis-geospatial" className="block hover:text-[#00F5D4]">GIS &amp; Geospatial</Link>
                    <Link href="/services/cloud-infrastructure" className="block hover:text-[#00F5D4]">Cloud &amp; Infrastructure</Link>
                  </div>
                </details>
              </li>
              <li><Link href="/industries" className="transition hover:text-white">Industries</Link></li>
              <li><Link href="/products" className="transition hover:text-white">Products</Link></li>
              <li><Link href="/events" className="transition hover:text-white">Events</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#00F5D4]">Company</h3>
            <ul className="space-y-2 text-sm text-white/60">
              <li><Link href="/about" className="transition hover:text-white">About Us</Link></li>
              <li><Link href="/contact" className="transition hover:text-white">Contact Us</Link></li>
              <li><Link href="/careers" className="transition hover:text-white">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#00F5D4]">Legal</h3>
            <ul className="space-y-2 text-sm text-white/60">
              <li><Link href="/legal" className="transition hover:text-white">Legal Centre</Link></li>
              <li><Link href="/legal/terms-and-conditions" className="transition hover:text-white">Terms &amp; Conditions</Link></li>
              <li><Link href="/legal/privacy-policy" className="transition hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/legal/refund-cancellation-policy" className="transition hover:text-white">Refund Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#00F5D4]">Resources</h3>
            <ul className="space-y-2 text-sm text-white/60">
              <li><Link href="/resources/impact" className="transition hover:text-white">Our Impact</Link></li>
              <li><Link href="/resources/blog" className="transition hover:text-white">Blog</Link></li>
              <li><Link href="/resources/case-studies" className="transition hover:text-white">Case Studies</Link></li>
              <li><Link href="/resources/press-release" className="transition hover:text-white">Press Releases</Link></li>
              <li><Link href="/resources/newsletter" className="transition hover:text-white">Newsletter</Link></li>
            </ul>
          </div>

        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-5 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Antellay Technologies Pvt. Ltd. All rights reserved.</p>
          <a href="mailto:info@antellay.com" className="transition hover:text-[#00F5D4]">info@antellay.com</a>
        </div>
      </div>
    </footer>
  );
}
