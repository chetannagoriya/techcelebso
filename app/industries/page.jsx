"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Globe2,
  Sparkles,
} from "lucide-react";
import { industriesData, generateSlug as generateIndustrySlug } from "../../data/industries";

const industryLandingRoutes = {
  Healthcare: "/industries/healthcare",
  Automotive: "/industries/automotive",
  "Banking & Finance": "/industries/banking-finance",
  Insurance: "/industries/insurance",
  Manufacturing: "/industries/manufacturing",
  "Retail & E-commerce": "/industries/retail-ecommerce",
  "Construction & Infrastructure": "/industries/construction-infrastructure",
  "Environmental & Climate": "/industries/environment-climate",
  "Pharmaceutical & Life Sciences": "/industries/pharmaceutical-life-sciences",
  "Quick Commerce & Delivery": "/industries/quick-commerce-delivery",
  Robotics: "/industries/robotics",
  "Security & Surveillance": "/industries/security-surveillance",
  "Real Estate": "/industries/real-estate",
  Agriculture: "/industries/agriculture",
  Education: "/industries/education",
  "Energy & Utilities": "/industries/energy-utilities",
  "Logistics & Supply Chain": "/industries/logistics-supply-chain",
  "GIS & Mapping": "/services/gis-geospatial",
  "Government & Smart Cities": "/industries/government-smart-cities",
  Telecom: "/industries/telecom",
  "Aviation & Aerospace": "/industries/aviation-aerospace",
  "Maritime & Ports": "/industries/maritime-ports",
  "Hospitality & Travel": "/industries/hospitality-travel",
  "Consumer Technology": "/industries/consumer-technology",
};

export default function Industries() {
  return (
    <main className="industries-index-page min-h-screen bg-[#F6F9F9] text-[#0B132B] transition-colors duration-300 dark:bg-[#071126] dark:text-white">
      <section className="relative isolate overflow-hidden bg-[#08172A] text-white">
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-90"
          src="/videos/landing-routine.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,15,29,.78)_0%,rgba(4,15,29,.52)_54%,rgba(4,15,29,.30)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(0,245,212,.12),transparent_27%),radial-gradient(circle_at_85%_75%,rgba(112,238,255,.06),transparent_28%)]" />
        <div className="absolute inset-0 opacity-[.08] [background-image:linear-gradient(rgba(255,255,255,.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.16)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="absolute -right-36 -top-36 h-[430px] w-[430px] rounded-full border-[70px] border-[#00F5D4]/[.06]" />

        <div className="relative mx-auto grid max-w-[1400px] gap-10 px-6 pb-16 pt-10 sm:px-8 md:pb-20 md:pt-12 lg:grid-cols-[1.15fr_.85fr] lg:items-end lg:px-12 lg:pb-20 lg:pt-14">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#00F5D4]/25 bg-[#00F5D4]/10 px-4 py-2 text-xs font-bold uppercase tracking-[.18em] text-[#00F5D4]">
              <Sparkles size={15} /> Domain expertise
            </div>
            <h1 className="mt-6 max-w-4xl font-[family-name:var(--font-heading)] text-5xl font-semibold leading-[.98] tracking-[-.05em] sm:text-6xl lg:text-[76px]">
              Technology built for how your <span className="text-[#00F5D4]">industry works.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/64 sm:text-lg">
              We combine deep domain understanding with AI, data, cloud, GIS, and product engineering to solve complex industry challenges.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#industry-grid" className="inline-flex items-center gap-2 rounded-xl bg-[#00F5D4] px-6 py-3.5 text-sm font-bold text-[#071126] transition hover:-translate-y-0.5 hover:bg-[#70EEFF]">
                Explore industries <ArrowRight size={17} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-3 overflow-hidden rounded-2xl border border-white/10 bg-white/[.06] backdrop-blur-sm">
            {[
              ["24", "Industries"],
              ["6+", "Core capabilities"],
              ["Global", "Delivery mindset"],
            ].map(([value, label], index) => (
              <div key={label} className={`px-3 py-6 text-center sm:px-5 ${index > 0 ? "border-l border-white/10" : ""}`}>
                <strong className="block font-[family-name:var(--font-heading)] text-2xl text-[#00F5D4] sm:text-3xl">{value}</strong>
                <span className="mt-2 block text-[10px] font-semibold uppercase tracking-[.12em] text-white/48 sm:text-xs">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="industry-grid" className="mx-auto max-w-[1400px] scroll-mt-24 px-6 py-16 sm:px-8 md:py-20 lg:px-12 lg:py-24">
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.18em] text-[#008D7A] dark:text-[#00F5D4]">Solutions by sector</p>
            <h2 className="mt-3 max-w-2xl font-[family-name:var(--font-heading)] text-4xl font-semibold tracking-[-.04em] sm:text-5xl">Expertise across the industries shaping tomorrow.</h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-slate-600 dark:text-slate-400">Select an industry to explore specialized capabilities, use cases, and transformation opportunities.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {industriesData.map((industry) => {
            const Icon = industry.icon;
            const landingRoute = industryLandingRoutes[industry.category];
            const primaryRoute = landingRoute || `/industries/${generateIndustrySlug(industry.items[0])}`;

            return (
              <article key={industry.category} className="group relative flex min-h-[290px] flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-5 shadow-[0_10px_35px_rgba(11,19,43,.045)] transition duration-300 hover:-translate-y-1 hover:border-[#00D9BD] hover:shadow-[0_22px_55px_rgba(0,169,143,.12)] dark:border-white/10 dark:bg-[#101B34]">
                <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#00F5D4]/0 blur-2xl transition duration-500 group-hover:bg-[#00F5D4]/10" />
                <div className="relative flex items-start justify-between gap-4">
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-[#00D9BD]/20 bg-[#00F5D4]/10 text-[#008D7A] transition group-hover:bg-[#00F5D4] group-hover:text-[#071126] dark:text-[#00F5D4]">
                    <Icon size={20} strokeWidth={1.6} />
                  </span>
                  <Link href={primaryRoute} aria-label={`Explore ${industry.category}`} className="grid h-9 w-9 place-items-center rounded-full border border-slate-200 text-slate-400 transition group-hover:border-[#00D9BD] group-hover:bg-[#00F5D4] group-hover:text-[#071126] dark:border-white/10">
                    <ArrowUpRight size={16} />
                  </Link>
                </div>

                <h3 className="relative mt-5 font-[family-name:var(--font-heading)] text-xl font-semibold tracking-[-.025em]">
                  <Link href={primaryRoute} className="transition hover:text-[#008D7A] dark:hover:text-[#00F5D4]">{industry.category}</Link>
                </h3>

                <ul className="relative mt-4 space-y-2.5">
                  {industry.items.slice(0, 4).map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[13px] leading-5 text-slate-600 dark:text-slate-400">
                      <Check size={14} className="mt-0.5 shrink-0 text-[#00A98F] dark:text-[#00F5D4]" /> {item}
                    </li>
                  ))}
                </ul>

                <Link href={primaryRoute} className="relative mt-auto inline-flex items-center gap-2 border-t border-slate-100 pt-4 text-[13px] font-bold text-[#008D7A] transition group-hover:gap-3 dark:border-white/10 dark:text-[#00F5D4]">
                  Explore solutions <ArrowRight size={15} />
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-16 sm:px-8 md:py-20 lg:px-12">
        <div className="relative overflow-hidden rounded-3xl bg-[#08172A] px-6 py-10 text-white sm:px-10 md:px-14 md:py-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_50%,rgba(0,245,212,.24),transparent_30%)]" />
          <Globe2 className="absolute -bottom-14 -right-8 h-56 w-56 text-[#00F5D4]/10" strokeWidth={.7} />
          <div className="relative flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[.18em] text-[#00F5D4]">Your industry. Your advantage.</p>
              <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-semibold tracking-[-.035em] sm:text-4xl">Ready to solve your next industry challenge?</h2>
              <p className="mt-3 text-sm leading-7 text-white/60">Let&apos;s identify the highest-impact opportunity and create a practical path forward.</p>
            </div>
            <Link href="/contact" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#00F5D4] px-7 py-4 text-sm font-bold text-[#071126] transition hover:-translate-y-0.5 hover:bg-[#70EEFF]">Book a consultation <ArrowUpRight size={17} /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
