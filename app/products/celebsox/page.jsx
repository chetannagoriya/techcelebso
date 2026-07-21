import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Briefcase, Building2, Download, Globe2, Rocket, Search, Sparkles, Star, Users } from "lucide-react";

const audiences = [
  [Users, "Creators", "Showcase your talent and grow your audience."],
  [Briefcase, "Professionals", "Build your career and professional connections."],
  [Rocket, "Startups", "Connect with investors, mentors and the right talent."],
  [Building2, "Brands", "Discover creators, collaborate and grow your brand."],
  [Star, "Investors", "Explore innovative startups and invest in the future."],
  [Globe2, "Public Figures", "Manage your presence and engage your community."],
];

const benefits = [
  "Build your digital identity and grow your presence",
  "Showcase your portfolio and achievements",
  "Connect with creators, brands and professionals",
  "Discover collaborations, jobs and opportunities",
  "Join communities that inspire and support you",
];

export const metadata = {
  title: "CelebsoX | Antellay Products",
  description: "CelebsoX is a creator-first social network for ambitious dreamers, professionals, brands and public figures.",
};

export default function CelebsoXPage() {
  return (
    <main className="bg-[#090909] text-white dark:bg-[#090909] dark:text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_18%,rgba(247,184,23,.18),transparent_34%),radial-gradient(circle_at_25%_30%,rgba(120,40,180,.16),transparent_28%)]" />
        <div className="relative mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 md:px-10 lg:px-14">
          <Link href="/products" className="text-3xl font-black tracking-[-.06em]">
            Celebso<span className="text-[#f7b817]">X</span>
          </Link>
          <nav className="hidden items-center gap-8 text-xs font-bold text-white/70 md:flex">
            {["Home", "Explore", "Creators", "About", "Product"].map((item) => <span key={item} className={item === "Product" ? "text-[#f7b817]" : ""}>{item}</span>)}
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/45">
              <Search size={14} /> Search creators...
            </div>
            <Link href="/contact" className="rounded-md bg-[#f7b817] px-5 py-3 text-xs font-black text-black">Join CelebsoX</Link>
          </div>
        </div>

        <div className="relative mx-auto grid min-h-[650px] max-w-[1440px] items-center gap-10 px-6 pb-16 pt-8 md:px-10 lg:grid-cols-[.75fr_1.25fr] lg:px-14">
          <div>
            <span className="inline-flex rounded-full border border-[#f7b817]/25 bg-[#f7b817]/10 px-4 py-2 text-[10px] font-black uppercase tracking-[.12em] text-[#f7b817]">
              Introducing CelebsoX
            </span>
            <h1 className="mt-6 text-5xl font-black leading-[1.05] tracking-[-.05em] md:text-7xl">
              A Social Network for Ambitious <span className="block font-serif italic text-[#f7b817]">Dreamers.</span>
            </h1>
            <p className="mt-6 max-w-lg text-sm leading-7 text-white/65">
              CelebsoX is a next-gen social network where creators, professionals and brands connect, collaborate and grow together.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-md bg-[#f7b817] px-6 py-3 text-sm font-black text-black">Join CelebsoX <ArrowRight size={16} /></Link>
              <Link href="#network" className="rounded-md border border-[#f7b817]/45 px-6 py-3 text-sm font-bold text-white">Explore Network</Link>
            </div>
            <div className="mt-8 flex items-center gap-3">
              <div className="flex -space-x-3">
                {[0, 1, 2, 3].map((i) => <span key={i} className="grid h-9 w-9 place-items-center rounded-full border border-[#090909] bg-[#f7b817] text-xs font-black text-black">{i + 1}</span>)}
              </div>
              <p className="text-xs text-white/58">Trusted by 100K+<br />creators & professionals</p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-8 rounded-full bg-[#f7b817]/20 blur-3xl" />
            <div className="relative ml-auto max-w-[720px] overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-2xl">
              <Image src="/images/products/celebsox.jpeg" alt="CelebsoX mobile product preview" width={900} height={1100} priority className="h-auto w-full object-cover object-top" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1360px] px-6 py-10 md:px-10" id="network">
        <div className="grid gap-6 rounded-3xl border border-white/10 bg-white/[.03] p-5 md:grid-cols-2 md:p-8">
          <div className="grid gap-4">
            <div className="relative min-h-64 overflow-hidden rounded-2xl bg-[#17120a]">
              <Image src="/images/products/celebsox.jpeg" alt="CelebsoX creators collaborating" fill className="object-cover object-left opacity-60" />
              <div className="absolute bottom-5 left-5 rounded-xl border border-[#f7b817]/30 bg-black/70 p-4 text-sm font-bold">
                Connect <span className="block text-xs font-normal text-white/50">Right People</span>
              </div>
            </div>
            <div className="relative min-h-52 overflow-hidden rounded-2xl bg-[#17120a]">
              <Image src="/images/products/celebso-production.jpeg" alt="Creator opportunity moment" fill className="object-cover opacity-55" />
              <div className="absolute bottom-5 left-5 rounded-xl border border-[#f7b817]/30 bg-black/70 p-4 text-sm font-bold">
                Create <span className="block text-xs font-normal text-white/50">New Opportunities</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center p-2 md:p-8">
            <p className="text-[11px] font-black uppercase tracking-[.12em] text-[#f7b817]">Why CelebsoX?</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-.04em] md:text-5xl">More Than Just A <span className="text-[#f7b817]">Social Network.</span></h2>
            <ul className="mt-8 space-y-5">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-4 text-sm text-white/72">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-[#f7b817] text-black"><BadgeCheck size={16} /></span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1360px] px-6 py-12 md:px-10">
        <div className="text-center">
          <p className="text-[11px] font-black uppercase tracking-[.12em] text-[#f7b817]">Built For Everyone</p>
          <h2 className="mt-3 text-4xl font-black tracking-[-.04em]">A Network for <span className="text-[#f7b817]">Every Identity.</span></h2>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3 lg:grid-cols-6">
          {audiences.map(([Icon, title, copy]) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/[.03] p-5 text-center">
              <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#f7b817] text-black"><Icon size={24} /></span>
              <h3 className="mt-4 text-lg font-black">{title}</h3>
              <p className="mt-2 text-xs leading-5 text-white/52">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-[1360px] gap-8 px-6 py-12 md:px-10 lg:grid-cols-[.65fr_1.35fr]">
        <div className="flex flex-col justify-center">
          <p className="text-[11px] font-black uppercase tracking-[.12em] text-[#f7b817]">Everything You Need</p>
          <h2 className="mt-4 text-4xl font-black tracking-[-.04em]">Your World. Organized. In <span className="font-serif italic text-[#f7b817]">One Profile.</span></h2>
          <p className="mt-5 text-sm leading-7 text-white/60">From your portfolio, collaborations, social links, messages and analytics, everything is in one powerful profile.</p>
          <ul className="mt-6 space-y-3">
            {["Verified Profile", "Portfolio & Media", "Social Links", "Achievements", "Analytics Dashboard"].map((item) => (
              <li key={item} className="flex gap-3 text-sm text-white/72"><Sparkles size={16} className="text-[#f7b817]" />{item}</li>
            ))}
          </ul>
          <Link href="/contact" className="mt-8 inline-flex w-fit items-center gap-2 rounded-md border border-[#f7b817]/45 px-5 py-3 text-xs font-bold">View Demo <ArrowRight size={14} /></Link>
        </div>
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[.03] p-4">
          <Image src="/images/products/celebsox.jpeg" alt="CelebsoX profile dashboard" width={900} height={1000} className="w-full rounded-2xl object-cover object-top" />
        </div>
      </section>

      <section className="mx-auto max-w-[1360px] px-6 pb-10 md:px-10">
        <div className="relative overflow-hidden rounded-3xl border border-[#f7b817]/25 bg-[#1b1302] p-8 md:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_40%,rgba(247,184,23,.28),transparent_32%)]" />
          <div className="relative grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="text-3xl font-black md:text-5xl">Be Seen. Be Connected. Be <span className="font-serif italic text-[#f7b817]">Celebrated.</span></h2>
              <p className="mt-3 max-w-xl text-sm text-white/62">Join CelebsoX today and become a part of India's fastest growing social network.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="rounded-md bg-[#f7b817] px-6 py-3 text-sm font-black text-black">Get Started</Link>
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-md border border-white/20 px-6 py-3 text-sm font-bold">Download App <Download size={15} /></Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
