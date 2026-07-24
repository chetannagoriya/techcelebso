import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, BarChart3, CheckCircle2, Globe2, Search, ShieldCheck, Star, TrendingUp, Users } from "lucide-react";

export const metadata = {
  title: "Our Impact | Antellay Resources",
  description: "Real challenges, smarter solutions and measurable impact delivered by Antellay.",
};

const heroStats = [
  [Users, "50+", "Happy Clients"],
  [BarChart3, "100+", "Projects Delivered"],
  [CheckCircle2, "99%", "Client Satisfaction"],
];

const summary = [
  [Users, "50+", "Happy Clients"],
  [Star, "100+", "Successful Projects"],
  [Globe2, "25+", "Countries Served"],
  [TrendingUp, "99%", "Client Satisfaction"],
];

const cases = [
  ["/images/gis_hero_map.jpg", "GIS & Mapping", "Smarter Infrastructure Planning for a Better Tomorrow", "Delivered high-accuracy GIS mapping and spatial analysis to support infrastructure development and decision-making for a government agency.", [["30%", "Efficiency Gain"], ["20%", "Cost Savings"], ["1000+ km²", "Mapped"]]],
  ["/images/healthcare/healthcare-dashboard.png", "Computer Vision", "AI-Powered Imaging for Healthcare Excellence", "Developed an AI system for medical image annotation and analysis, improving diagnostic accuracy and reducing turnaround time.", [["95%", "Accuracy"], ["40%", "Time Saved"], ["10K+", "Images Annotated"]]],
  ["/images/logistics/warehouse-ai.png", "Automation", "Automation that Powers Operational Efficiency", "Implemented intelligent automation and data solutions to streamline warehouse operations and reduce manual efforts.", [["35%", "Productivity Gain"], ["50%", "Manual Work Reduced"], ["3x", "Faster Reporting"]]],
  ["/images/environment-climate/environment-hero.png", "GIS & Analytics", "Data-Driven Decisions for a Sustainable Future", "Provided geospatial insights and analytics to support renewable energy planning and environmental monitoring.", [["25%", "Better Planning"], ["15%", "Cost Efficiency"], ["100%", "Data Visibility"]]],
];

const reasons = [
  [Award, "Proven Expertise", "Experienced team with deep domain knowledge"],
  [BarChart3, "Scalable Solutions", "Built to grow with your business"],
  [ShieldCheck, "Data-Driven Impact", "Solutions that deliver measurable results"],
  [Users, "Long-Term Partnership", "Your success is our mission"],
];

const topics = ["AI Agents", "GIS", "Computer Vision", "Data Annotation", "Automation", "Enterprise AI", "Data Engineering", "Digital Transformation"];

function FooterBlock() {
  return (
    <footer className="bg-[#03152e] px-7 py-12 text-white lg:px-14">
      <div className="mx-auto grid max-w-[1320px] gap-9 md:grid-cols-[1.4fr_repeat(4,1fr)]">
        <div>
          <div className="flex items-center gap-3"><span className="text-4xl font-black">A</span><b className="text-2xl tracking-[.12em]">ANTELLAY</b></div>
          <p className="mt-4 text-xs leading-6 text-white/60">Empowering businesses with AI, data and geospatial intelligence to build a smarter tomorrow.</p>
        </div>
        {[
          ["Services", "AI & ML Solutions\nData Solutions\nGIS & Mapping\nEnterprise Software"],
          ["Solutions", "By Industry\nBy Technology\nUse Cases"],
          ["Resources", "Blog\nCase Studies\nWhitepapers\nGuides"],
          ["Company", "About Us\nCareers\nContact Us"],
        ].map(([title, copy]) => <div key={title}><b>{title}</b><p className="mt-4 whitespace-pre-line text-xs leading-7 text-white/55">{copy}</p></div>)}
      </div>
      <div className="mx-auto mt-10 flex max-w-[1320px] justify-between border-t border-white/10 pt-5 text-xs text-white/40"><span>© 2026 Antellay Technologies. All rights reserved.</span><span>Building Intelligence. Delivering Impact.</span></div>
    </footer>
  );
}

export default function ImpactPage() {
  return (
    <main className="bg-[#f7fbff] text-[#07152f] dark:bg-[#f7fbff] dark:text-[#07152f]">
      <section className="relative -mt-px overflow-hidden bg-[linear-gradient(105deg,#f9fcff_0%,#f9fcff_47%,#e2f1ff_47%,#edf7ff_100%)] px-7 pb-10 pt-8 lg:px-14 lg:pb-9 lg:pt-10">
        <div className="absolute right-0 top-0 h-full w-[58%] opacity-95">
          <div className="absolute -left-20 top-0 z-10 h-full w-52 rounded-r-[100%] bg-[#f9fcff]" />
          <div className="absolute inset-0 rounded-bl-[44%] bg-[radial-gradient(circle_at_42%_47%,rgba(4,64,132,.7),transparent_24%),radial-gradient(circle_at_52%_47%,rgba(40,145,255,.45),transparent_31%),linear-gradient(120deg,rgba(255,255,255,.15),rgba(9,93,181,.18))]" />
          <Image src="/images/gis_cta_satellite.jpg" alt="Global intelligence earth network" fill sizes="58vw" className="object-cover object-center mix-blend-multiply opacity-82" />
          <div className="absolute left-[18%] top-[16%] h-[360px] w-[360px] rounded-full border border-cyan-200/45 bg-[radial-gradient(circle_at_42%_38%,rgba(255,255,255,.38),transparent_12%),radial-gradient(circle_at_50%_52%,rgba(28,130,255,.45),transparent_50%)] shadow-[0_0_70px_rgba(19,111,204,.42)]" />
          <div className="absolute left-[22%] top-[22%] h-[285px] w-[285px] rounded-full border border-white/35 bg-[linear-gradient(30deg,transparent_46%,rgba(255,255,255,.45)_47%,transparent_49%),linear-gradient(110deg,transparent_44%,rgba(125,211,252,.5)_45%,transparent_47%)] opacity-75" />
        </div>
        <div className="relative mx-auto grid min-h-[470px] max-w-[1320px] gap-8 lg:grid-cols-[.62fr_.38fr]">
          <div className="py-5 lg:py-6">
            <p className="text-sm font-black uppercase tracking-[.12em] text-[#065cae]">Our Impact</p>
            <h1 className="mt-4 max-w-2xl text-[50px] font-black leading-[1.01] tracking-[-.055em] md:text-[68px]">
              Real Challenges. <br />Smarter Solutions. <br /><span className="text-[#096dd9]">Measurable Impact.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-700">Antellay helps organizations turn data and ideas into real-world results. Explore how we’ve delivered AI, GIS and Data solutions that drive efficiency, innovation and growth.</p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link href="#case-studies" className="inline-flex items-center gap-2 rounded-md bg-[#096dd9] px-7 py-4 text-sm font-bold text-white">View All Case Studies <ArrowRight size={16} /></Link>
              <Link href="/contact" className="rounded-md border border-[#096dd9] bg-white px-7 py-4 text-sm font-bold text-[#0757a5]">Let’s Talk</Link>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute right-2 top-10 flex flex-col gap-4">
              {heroStats.map(([Icon, value, label]) => <div key={label} className="flex w-[235px] items-center gap-4 rounded-xl bg-white/78 p-4 shadow-[0_14px_35px_rgba(20,84,160,.18)] backdrop-blur"><Icon className="text-[#096dd9]" size={30} /><div><b className="text-2xl">{value}</b><p className="text-sm text-slate-600">{label}</p></div></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="-mt-7 px-7 lg:px-14">
        <div className="relative mx-auto grid max-w-[1260px] gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-xl md:grid-cols-4">
          {summary.map(([Icon, value, label], index) => <div key={label} className={`flex items-center justify-center gap-4 ${index ? "md:border-l md:border-slate-200" : ""}`}><Icon className="text-[#096dd9]" size={32} /><div><b className="text-2xl">{value}</b><p className="text-sm text-slate-600">{label}</p></div></div>)}
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-7 py-16 lg:px-14" id="case-studies">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div><h2 className="text-3xl font-black tracking-[-.04em]">Our Case Studies</h2><p className="mt-1 text-slate-500">Real solutions. Tangible impact.</p></div>
          <div className="flex gap-4"><button className="rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm">All Categories⌄</button><div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-400">Search case studies... <Search size={18} /></div></div>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {cases.map(([image, tag, title, copy, stats]) => (
            <article key={title} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="relative h-56"><Image src={image} alt={title} fill sizes="320px" className="object-cover" /><span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-[#0757a5]">{tag}</span></div>
              <div className="p-5"><h3 className="text-lg font-black leading-snug">{title}</h3><p className="mt-3 text-xs leading-6 text-slate-600">{copy}</p><div className="mt-5 grid grid-cols-3 gap-2 border-t border-slate-100 pt-4 text-center">{stats.map(([v, l]) => <div key={l}><b>{v}</b><p className="text-[10px] text-slate-500">{l}</p></div>)}</div><Link href="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#096dd9]">Read Case Study <ArrowRight size={15} /></Link></div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-[1320px] gap-6 px-7 pb-12 lg:grid-cols-[1.25fr_.9fr] lg:px-14">
        <div className="rounded-2xl bg-[#03152e] p-8 text-white">
          <h2 className="text-2xl font-black">Why Clients Choose Antellay</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-4">{reasons.map(([Icon, title, copy]) => <div key={title} className="text-center md:border-l md:border-white/15 md:first:border-l-0"><Icon className="mx-auto" size={42} /><h3 className="mt-4 text-sm font-bold">{title}</h3><p className="mt-2 text-xs leading-5 text-white/60">{copy}</p></div>)}</div>
        </div>
        <div className="rounded-2xl bg-[linear-gradient(135deg,#eef7ff,#d8eaff)] p-8">
          <h2 className="text-2xl font-black">Let’s Build What’s Next</h2>
          <p className="mt-4 max-w-sm text-sm leading-7 text-slate-700">Have a project in mind? We’re here to turn your vision into a powerful solution.</p>
          <Link href="/contact" className="mt-7 inline-flex items-center gap-2 rounded-md bg-[#096dd9] px-6 py-3 text-sm font-bold text-white">Contact Our Experts <ArrowRight size={15} /></Link>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-7 pb-10 lg:px-14"><div className="rounded-2xl border border-slate-200 bg-white p-6"><b className="mr-6 text-xl">Trending Topics</b>{topics.map((topic) => <span key={topic} className="mb-2 mr-2 inline-flex rounded-md bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-700">{topic}</span>)}</div></section>
      <FooterBlock />
    </main>
  );
}
