import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart3, Bot, Building2, CalendarDays, Check, CircleDollarSign, GraduationCap, Handshake, Landmark, MapPin, Mic2, Network, Rocket, ShieldCheck, TrendingUp, Users } from "lucide-react";

export const metadata = {
  title: "NXTFund Capital | Startup Fund",
  description: "NXTFund Capital is a next-generation startup fund with funding, incubation, mentorship and AI-powered startup monitoring.",
};

const stats = [["₹100 Cr+", "Startup Fund"], ["500+", "Applications Received"], ["100+", "Mentors & Experts"], ["50+", "Investor Network"], ["24/7", "AI Monitoring"]];
const process = [["Apply Online", Rocket], ["AI Screening", Bot], ["Partner Review", Users], ["Founder Meeting", Handshake], ["Due Diligence", ShieldCheck], ["Funding & Support", Landmark]];
const founderSupport = [
  [CircleDollarSign, "Funding", "Early-stage funding from our ₹100 Cr fund to fuel your growth."],
  [Rocket, "Startup Valley Incubation", "Premium workspace, resources and a thriving founder community."],
  [Network, "Investor Network", "Connect with 50+ investors, VCs and family offices."],
  [TrendingUp, "Growth Support", "Go-to-market, branding, hiring, legal and scale support."],
  [BarChart3, "AI Monitoring Dashboard", "Real-time KPI tracking, insights and AI-driven recommendations."],
  [GraduationCap, "Startup School", "Learn, grow and scale with mentorship and workshops."],
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
        <div className="relative mx-auto grid min-h-[540px] max-w-[1240px] items-center gap-12 px-7 py-14 lg:grid-cols-[1.08fr_.92fr] lg:px-14">
          <div>
            <div className="rounded-[1.75rem] border border-slate-100 bg-white p-7 shadow-[0_18px_60px_rgba(15,23,42,.06)] sm:p-9">
              <h1 className="text-4xl font-black leading-tight tracking-[-.045em] sm:text-5xl">NXT turns builders</h1>
              <h2 className="mt-5 text-2xl font-black tracking-[-.035em] sm:text-3xl">Into formidable founders</h2>
            </div>
            <p className="mt-6 max-w-xl text-sm leading-7 text-slate-600">Connecting visionary founders with investors, strategic partners, and growth opportunities to build the defining companies of tomorrow.</p>
            <Link href="https://nxtfund.in" className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#ff684f] px-7 py-4 text-xs font-black !text-white shadow-lg shadow-[#ff684f]/20 transition hover:bg-[#ed553c]">Explore NXT Fund <ArrowRight size={15} /></Link>
          </div>
          <div className="rounded-[1.75rem] bg-[#fffdfb] p-5 shadow-[0_20px_70px_rgba(15,23,42,.07)]">
            <div className="relative min-h-[430px] overflow-hidden rounded-[1.35rem] bg-blue-50"><Image src="/images/products/nxtfund/founder-stage.png" alt="NXTFund founder speaking on stage" fill priority sizes="(min-width: 1024px) 430px, 100vw" className="object-cover object-center" /></div>
            <div className="mt-4 flex items-center justify-between"><b className="tracking-[-.04em]">NXT<span className="text-[#ff684f]">FUND</span></b><span className="text-[10px] uppercase tracking-[.15em] text-slate-400">Founder first</span></div>
          </div>
        </div>
      </section>

      <section className="bg-white px-7 py-16 lg:px-14">
        <div className="mx-auto max-w-[760px] text-base leading-8 text-slate-700">
          <p className="first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-7xl first-letter:italic first-letter:leading-[.75]">In 2025, NEXT FUND developed a new model of startup funding. Four times a year we invest up to ₹100 Crore in a select group of startups. Selected founders gain access to funding, incubation, mentorship, and an extensive investor network, while working closely with our team to get their companies into the best possible shape before presenting to investors.</p>
          <p className="mt-6">But NEXT FUND doesn&apos;t end with funding. We and the NEXT FUND founder network continue to help founders build, scale, raise capital, and grow their companies for the long term—and beyond.</p>
        </div>
      </section>

      <section className="px-7 py-6 lg:px-14">
        <div className="mx-auto grid max-w-[1320px] gap-4 rounded-2xl bg-[#fff1ed] p-5 md:grid-cols-5">
          {stats.map(([value, label]) => <div key={label} className="text-center"><b className="text-2xl text-[#ff684f]">{value}</b><p className="mt-1 text-xs font-bold text-slate-600">{label}</p></div>)}
        </div>
      </section>

      <section id="about-nxtfund" className="mx-auto grid scroll-mt-24 max-w-[1320px] gap-6 px-7 py-8 lg:grid-cols-2 lg:px-14">
        <div className="relative min-h-[300px] overflow-hidden rounded-3xl bg-slate-200">
          <Image src="/images/products/nxtfund/startup-valley.png" alt="Startup Valley innovation center in Jaipur" fill className="object-cover object-center" />
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
          {founderSupport.map(([Icon, title, copy], index) => (
            <Card key={title} className="overflow-hidden p-4">
              <div className="relative grid h-32 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-[#fff6f2] to-[#ffe5dc]">
                <span className="absolute -right-7 -top-7 h-24 w-24 rounded-full border-[18px] border-white/50" />
                <span className="absolute bottom-3 left-4 text-5xl font-black text-[#ff684f]/8">0{index + 1}</span>
                <span className="relative grid h-16 w-16 place-items-center rounded-2xl border border-[#ff684f]/15 bg-white text-[#ff684f] shadow-[0_12px_28px_rgba(255,104,79,.16)]"><Icon size={28} /></span>
              </div>
              <h3 className="mt-4 text-sm font-black">{title}</h3>
              <p className="mt-2 text-xs leading-5 text-slate-500">{copy}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-[1320px] gap-6 px-7 py-8 lg:grid-cols-[1fr_.9fr] lg:px-14" id="startup-valley">
        <div className="grid grid-cols-2 gap-3">
          <div className="relative col-span-2 h-64 overflow-hidden rounded-2xl sm:h-72">
            <Image src="/images/products/nxtfund/startup-valley.png" alt="Startup Valley innovation center" fill className="object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent p-5 pt-16 text-white"><p className="text-lg font-black">Startup Valley Jaipur</p><p className="mt-1 text-xs text-white/70">A purpose-built home for ambitious founders.</p></div>
          </div>
          {[[Building2, "Founder Workspace"], [Landmark, "Meeting Rooms"], [Mic2, "Podcast Studio"], [CalendarDays, "Community Events"]].map(([Icon, title], index) => (
            <div key={title} className="relative min-h-32 overflow-hidden rounded-2xl border border-orange-100 bg-gradient-to-br from-white to-[#fff3ee] p-5 shadow-sm">
              <span className="absolute -bottom-5 -right-3 text-7xl font-black text-[#ff684f]/5">0{index + 1}</span>
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#ff684f] text-white shadow-lg shadow-[#ff684f]/20"><Icon size={20} /></span>
              <p className="relative mt-4 text-xs font-black text-slate-700">{title}</p>
            </div>
          ))}
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

    </main>
  );
}
