import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart3, Bot, Check, Handshake, Landmark, MapPin, Rocket, ShieldCheck, Users } from "lucide-react";

export const metadata = {
  title: "NXTFund Capital | Startup Fund",
  description: "NXTFund Capital is a next-generation startup fund with funding, incubation, mentorship and AI-powered startup monitoring.",
};

const stats = [["₹100 Cr+", "Startup Fund"], ["500+", "Applications Received"], ["100+", "Mentors & Experts"], ["50+", "Investor Network"], ["24/7", "AI Monitoring"]];
const heroCards = [["₹100 Cr", "Fund Size"], ["Jaipur HQ", "India"], ["AI Due Diligence", "& Monitoring"], ["Startup", "Incubation"]];
const process = [["Apply Online", Rocket], ["AI Screening", Bot], ["Partner Review", Users], ["Founder Meeting", Handshake], ["Due Diligence", ShieldCheck], ["Funding & Support", Landmark]];
const founderSupport = [
  ["Funding", "Early-stage funding from our ₹100 Cr fund to fuel your growth."],
  ["Startup Valley Incubation", "Premium workspace, resources and a thriving founder community."],
  ["Investor Network", "Connect with 50+ investors, VCs and family offices."],
  ["Growth Support", "Go-to-market, branding, hiring, legal and scale support."],
  ["AI Monitoring Dashboard", "Real-time KPI tracking, insights and AI-driven recommendations."],
  ["Startup School", "Learn, grow and scale with mentorship and workshops."],
];
const partners = ["SEQUOIA", "a16z", "BLUME", "Accel", "TIGER GLOBAL", "matrix", "Kalaari", "BEENEXT", "SPARTAN", "IDG Capital"];

function Card({ children, className = "" }) {
  return <div className={`rounded-2xl border border-orange-100 bg-white shadow-[0_14px_45px_rgba(99,33,14,.06)] ${className}`}>{children}</div>;
}

function Label({ children }) {
  return <p className="text-xs font-black uppercase tracking-[.16em] text-[#ff684f]">{children}</p>;
}

export default function NxtfundCapitalPage() {
  return (
    <main className="bg-[#fffaf7] text-[#151515] dark:bg-[#fffaf7] dark:text-[#151515]">
      <section className="relative overflow-hidden bg-white">
        <nav className="relative z-10 mx-auto flex max-w-[1380px] items-center justify-between px-7 py-6 lg:px-14">
          <Link href="/products" className="text-3xl font-black tracking-[-.08em]"><span className="text-black">NXT</span><span className="text-[#ff684f]">FUND</span></Link>
          <div className="hidden items-center gap-8 text-xs font-black text-slate-700 lg:flex">
            {["Home", "About Us", "For Founders", "Startup Valley", "Startup School", "AI Platform", "Investors", "Contact"].map((item) => <span key={item}>{item}</span>)}
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl bg-[#ff684f] px-5 py-3 text-xs font-black text-white">Apply for Funding <ArrowRight size={14} /></Link>
        </nav>

        <div className="relative mx-auto grid min-h-[560px] max-w-[1380px] items-center gap-10 px-7 pb-12 lg:grid-cols-[.83fr_1.17fr] lg:px-14">
          <div>
            <h1 className="max-w-xl text-[50px] font-black leading-[1.02] tracking-[-.055em] md:text-[72px]">
              India’s Next Generation <span className="text-[#ff684f]">Startup Fund</span>
            </h1>
            <h2 className="mt-5 text-3xl font-black tracking-[-.04em]"><span className="text-[#ff684f]">₹100 Crore</span> Fund for India’s Most Ambitious Founders.</h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">Apply once. Get funding, incubation, mentorship and AI-powered startup monitoring.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl bg-[#ff684f] px-7 py-4 text-xs font-black text-white">Apply For Funding <ArrowRight size={15} /></Link>
              <Link href="#startup-valley" className="rounded-xl border border-slate-200 bg-white px-7 py-4 text-xs font-black">Explore Startup Valley</Link>
            </div>
            <p className="mt-6 text-xs text-slate-500">NXTFund is the investment arm of <span className="text-[#ff684f]">Celebso Group</span></p>
          </div>

          <div className="relative min-h-[510px]">
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-blue-100 via-white to-orange-50" />
            <div className="relative h-[510px] overflow-hidden rounded-[2.5rem]">
              <Image src="/images/products/nxtfund-capital.jpeg" alt="NXTFund startup building" fill sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/25 via-transparent to-white/10" />
            </div>
            <div className="absolute right-5 top-14 grid gap-4">
              {heroCards.map(([title, copy], index) => (
                <Card key={title} className="flex w-44 items-center gap-3 p-4">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#fff0eb] text-[#ff684f]">{[Landmark, MapPin, Bot, Rocket].map((Icon, i) => i === index && <Icon key={i} size={20} />)}</span>
                  <div><b className="text-sm">{title}</b><p className="text-xs text-slate-500">{copy}</p></div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-7 py-6 lg:px-14">
        <div className="mx-auto grid max-w-[1320px] gap-4 rounded-2xl bg-[#fff1ed] p-5 md:grid-cols-5">
          {stats.map(([value, label]) => <div key={label} className="text-center"><b className="text-2xl text-[#ff684f]">{value}</b><p className="mt-1 text-xs font-bold text-slate-600">{label}</p></div>)}
        </div>
      </section>

      <section className="mx-auto grid max-w-[1320px] gap-6 px-7 py-8 lg:grid-cols-2 lg:px-14">
        <div className="relative min-h-[300px] overflow-hidden rounded-3xl bg-slate-200">
          <Image src="/images/products/nxtfund-capital.jpeg" alt="NXTFund founder session" fill className="object-cover object-center" />
        </div>
        <div className="py-4">
          <Label>About NXTFund</Label>
          <h2 className="mt-3 text-4xl font-black tracking-[-.04em]">Built For Founders.</h2>
          <p className="mt-5 text-sm leading-7 text-slate-600">NXTFund is the investment arm of Celebso Group, on a mission to back exceptional founders and build category-defining companies from India.</p>
          <p className="mt-4 text-sm leading-7 text-slate-600">We provide early-stage funding, world-class incubation at Startup Valley Jaipur, mentorship from industry leaders and AI-powered monitoring to help startups grow 10X faster.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-4">
            {["Jaipur, India HQ", "100 Cr Fund", "Long-term Partnership", "Founder First Approach"].map((item) => <div key={item} className="text-center text-xs font-bold text-slate-600"><MapPin className="mx-auto mb-2 text-[#ff684f]" size={20} />{item}</div>)}
          </div>
        </div>
      </section>

      <section className="px-7 py-8 lg:px-14">
        <Card className="mx-auto max-w-[1320px] p-7">
          <Label>Our Investment Process</Label>
          <h2 className="mt-2 text-center text-2xl font-black">From Application to Funding. We Keep It Simple.</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-6">
            {process.map(([title, Icon], index) => <div key={title} className="relative text-center">{index < process.length - 1 && <span className="absolute -right-3 top-6 hidden text-[#ff684f] md:block">→</span>}<Icon className="mx-auto text-[#ff684f]" size={28} /><p className="mt-3 text-xs font-black">{title}</p></div>)}
          </div>
        </Card>
      </section>

      <section className="px-7 py-8 lg:px-14">
        <Label>What Founders Get With NXTFund</Label>
        <div className="mx-auto mt-5 grid max-w-[1320px] gap-4 md:grid-cols-3 lg:grid-cols-6">
          {founderSupport.map(([title, copy]) => (
            <Card key={title} className="overflow-hidden p-4">
              <div className="relative h-32 overflow-hidden rounded-xl bg-orange-50"><Image src="/images/products/nxtfund-capital.jpeg" alt={title} fill className="object-cover object-top" /></div>
              <h3 className="mt-4 text-sm font-black">{title}</h3>
              <p className="mt-2 text-xs leading-5 text-slate-500">{copy}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-[1320px] gap-6 px-7 py-8 lg:grid-cols-[1fr_.9fr] lg:px-14" id="startup-valley">
        <div className="grid grid-cols-2 gap-3">
          {[1, 2, 3, 4, 5, 6].map((item) => <div key={item} className="relative h-40 overflow-hidden rounded-2xl"><Image src="/images/products/nxtfund-capital.jpeg" alt={`Startup Valley ${item}`} fill className="object-cover object-top" /></div>)}
        </div>
        <div className="py-4">
          <Label>Startup Valley - Jaipur</Label>
          <h2 className="mt-3 text-4xl font-black tracking-[-.04em]">Build Your Startup Inside <span className="text-[#ff684f]">Startup Valley</span></h2>
          <p className="mt-5 text-sm leading-7 text-slate-600">A premium incubation and co-working space in the heart of Jaipur, designed for unicorns of tomorrow.</p>
          <ul className="mt-5 space-y-2 text-sm font-bold text-slate-600">{["Fully Equipped Coworking Space", "Private Cabins & Meeting Rooms", "Podcast Studio & Event Space", "Founder Community & Networking", "Investor Meets & Industry Events"].map((item) => <li key={item} className="flex gap-2"><Check className="text-[#ff684f]" size={17} />{item}</li>)}</ul>
          <Link href="/contact" className="mt-6 inline-flex rounded-xl bg-[#ff684f] px-6 py-3 text-xs font-black text-white">Book a Visit</Link>
        </div>
      </section>

      <section className="px-7 py-8 lg:px-14">
        <div className="mx-auto grid max-w-[1320px] gap-8 rounded-3xl bg-[#071024] p-8 text-white lg:grid-cols-[.85fr_1.15fr] lg:p-12">
          <div>
            <Label>AI Platform</Label>
            <h2 className="mt-3 text-4xl font-black">Your AI Startup Advisor</h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/65">NXTFund’s AI engine monitors your startup 24/7 and helps you make smarter decisions, faster.</p>
            <div className="mt-7 grid grid-cols-2 gap-4 text-xs text-white/65 md:grid-cols-4">{["KPI Tracking", "Revenue & Burn", "Runway", "Investor Reports", "Product Health", "Team Growth", "Fundraising Progress", "AI Insights"].map((item) => <p key={item} className="flex items-center gap-2"><BarChart3 size={15} />{item}</p>)}</div>
            <Link href="/contact" className="mt-8 inline-flex rounded-xl bg-[#ff684f] px-6 py-3 text-xs font-black text-white">View AI Platform</Link>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="grid gap-4 sm:grid-cols-4">{["₹18.6L", "₹6.3L", "18.5", "82"].map((v) => <div key={v} className="rounded-xl bg-black/25 p-4"><b className="text-2xl">{v}</b><p className="text-xs text-emerald-300">+12%</p></div>)}</div>
            <div className="mt-5 h-56 rounded-2xl bg-[linear-gradient(135deg,#10213d,#071024_40%,#1f8f63)]" />
          </div>
        </div>
      </section>

      <section className="px-7 py-8 lg:px-14">
        <Label>Backed by incredible investors & partners</Label>
        <div className="mx-auto mt-5 grid max-w-[1320px] gap-3 md:grid-cols-5 lg:grid-cols-10">
          {partners.map((p) => <Card key={p} className="grid h-16 place-items-center p-3 text-center text-sm font-black text-slate-600">{p}</Card>)}
        </div>
      </section>

      <footer className="mt-8 bg-[#111] px-7 py-12 text-white lg:px-14">
        <div className="mx-auto grid max-w-[1320px] gap-8 md:grid-cols-5">
          <div><b className="text-3xl font-black tracking-[-.08em]"><span>NXT</span><span className="text-[#ff684f]">FUND</span></b><p className="mt-4 text-xs leading-6 text-white/55">The investment arm of Celebso Group backing India’s most ambitious founders.</p></div>
          {["Platform", "Startup Valley", "Startup School", "Company"].map((h) => <div key={h}><b>{h}</b><p className="mt-4 text-xs leading-7 text-white/55">About<br/>Programs<br/>Resources<br/>Contact</p></div>)}
        </div>
      </footer>
    </main>
  );
}
