import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, BarChart3, CheckCircle2, Globe2, Search, ShieldCheck, Star, TrendingUp, Users } from "lucide-react";
import CaseStudyModal from "./CaseStudyModal";

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
  ["/images/gis_hero_map.jpg", "GIS & Mapping", "Smarter Infrastructure Planning for a Better Tomorrow", "Delivered high-accuracy GIS mapping and spatial analysis to support infrastructure development and decision-making for a government agency.", [["30%", "Efficiency Gain"], ["20%", "Cost Savings"], ["1000+ km²", "Mapped"]], "smarter-infrastructure-planning"],
  ["/images/healthcare/healthcare-dashboard.png", "Computer Vision", "AI-Powered Imaging for Healthcare Excellence", "Developed an AI system for medical image annotation and analysis, improving diagnostic accuracy and reducing turnaround time.", [["95%", "Accuracy"], ["40%", "Time Saved"], ["10K+", "Images Annotated"]], "ai-powered-healthcare-imaging"],
  ["/images/logistics/warehouse-ai.png", "Automation", "Automation that Powers Operational Efficiency", "Implemented intelligent automation and data solutions to streamline warehouse operations and reduce manual efforts.", [["35%", "Productivity Gain"], ["50%", "Manual Work Reduced"], ["3x", "Faster Reporting"]], "warehouse-automation-efficiency"],
  ["/images/environment-climate/environment-hero.png", "GIS & Analytics", "Data-Driven Decisions for a Sustainable Future", "Provided geospatial insights and analytics to support renewable energy planning and environmental monitoring.", [["25%", "Better Planning"], ["15%", "Cost Efficiency"], ["100%", "Data Visibility"]], "sustainable-energy-planning"],
];

const reasons = [
  [Award, "Proven Expertise", "Experienced team with deep domain knowledge"],
  [BarChart3, "Scalable Solutions", "Built to grow with your business"],
  [ShieldCheck, "Data-Driven Impact", "Solutions that deliver measurable results"],
  [Users, "Long-Term Partnership", "Your success is our mission"],
];

const topics = ["AI Agents", "GIS", "Computer Vision", "Data Annotation", "Automation", "Enterprise AI", "Data Engineering", "Digital Transformation"];

export default function ImpactPage() {
  return (
    <main className="bg-[#f7fbff] text-[#07152f] transition-colors dark:bg-[#071126] dark:text-white">
      <section className="relative -mt-px overflow-hidden bg-[linear-gradient(105deg,#f9fcff_0%,#f9fcff_47%,#e6fffb_47%,#f0fffc_100%)] px-7 pb-10 pt-8 transition-colors dark:bg-[linear-gradient(105deg,#071126_0%,#071126_47%,#0d2432_47%,#0a1b2d_100%)] lg:px-14 lg:pb-9 lg:pt-10">
        <div className="absolute right-0 top-0 h-full w-[58%] opacity-95">
          <div className="absolute -left-20 top-0 z-10 h-full w-52 rounded-r-[100%] bg-[#f9fcff] dark:bg-[#071126]" />
          <div className="absolute inset-0 rounded-bl-[44%] bg-[radial-gradient(circle_at_42%_47%,rgba(0,141,122,.72),transparent_24%),radial-gradient(circle_at_52%_47%,rgba(0,245,212,.38),transparent_31%),linear-gradient(120deg,rgba(255,255,255,.15),rgba(0,169,143,.2))]" />
          <Image src="/images/gis_cta_satellite.jpg" alt="Global intelligence earth network" fill sizes="58vw" className="object-cover object-center mix-blend-multiply opacity-82" />
          <div className="absolute left-[18%] top-[16%] h-[360px] w-[360px] rounded-full border border-[#00F5D4]/35 bg-[radial-gradient(circle_at_42%_38%,rgba(255,255,255,.38),transparent_12%),radial-gradient(circle_at_50%_52%,rgba(0,245,212,.36),transparent_50%)] shadow-[0_0_70px_rgba(0,169,143,.38)]" />
          <div className="absolute left-[22%] top-[22%] h-[285px] w-[285px] rounded-full border border-white/35 bg-[linear-gradient(30deg,transparent_46%,rgba(255,255,255,.45)_47%,transparent_49%),linear-gradient(110deg,transparent_44%,rgba(0,245,212,.45)_45%,transparent_47%)] opacity-75" />
        </div>
        <div className="relative mx-auto grid min-h-[470px] max-w-[1320px] gap-8 lg:grid-cols-[.62fr_.38fr]">
          <div className="py-5 lg:py-6">
            <p className="text-sm font-black uppercase tracking-[.12em] text-[#008D7A] dark:text-[#00F5D4]">Our Impact</p>
            <h1 className="mt-4 max-w-2xl text-[50px] font-black leading-[1.01] tracking-[-.055em] md:text-[68px]">
              Real Challenges. <br />Smarter Solutions. <br /><span className="text-[#00A98F] dark:text-[#00F5D4]">Measurable Impact.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-700 dark:text-slate-300">Antellay helps organizations turn data and ideas into real-world results. Explore how we’ve delivered AI, GIS and Data solutions that drive efficiency, innovation and growth.</p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link href="#case-studies" className="inline-flex items-center gap-2 rounded-md bg-[#00A98F] px-7 py-4 text-sm font-bold !text-white hover:bg-[#008D7A] dark:bg-[#00F5D4] dark:!text-[#071126]">View All Case Studies <ArrowRight size={16} /></Link>
              <Link href="/contact" className="rounded-md border border-[#00A98F] bg-white px-7 py-4 text-sm font-bold !text-[#008D7A] dark:border-[#00F5D4] dark:bg-white/5 dark:!text-[#00F5D4]">Let’s Talk</Link>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute right-2 top-10 flex flex-col gap-4">
              {heroStats.map(([Icon, value, label]) => <div key={label} className="flex w-[235px] items-center gap-4 rounded-xl bg-white/78 p-4 shadow-[0_14px_35px_rgba(0,169,143,.16)] backdrop-blur dark:border dark:border-white/10 dark:bg-[#101b34]/85"><Icon className="text-[#00A98F] dark:text-[#00F5D4]" size={30} /><div><b className="text-2xl">{value}</b><p className="text-sm text-slate-600 dark:text-slate-300">{label}</p></div></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="-mt-7 px-7 lg:px-14">
        <div className="relative mx-auto grid max-w-[1260px] gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-xl dark:border-white/10 dark:bg-[#101b34] md:grid-cols-4">
          {summary.map(([Icon, value, label], index) => <div key={label} className={`flex items-center justify-center gap-4 ${index ? "md:border-l md:border-slate-200 dark:md:border-white/10" : ""}`}><Icon className="text-[#00A98F] dark:text-[#00F5D4]" size={32} /><div><b className="text-2xl">{value}</b><p className="text-sm text-slate-600 dark:text-slate-300">{label}</p></div></div>)}
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-7 py-16 lg:px-14" id="case-studies">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div><h2 className="text-3xl font-black tracking-[-.04em]">Our Case Studies</h2><p className="mt-1 text-slate-500 dark:text-slate-400">Real solutions. Tangible impact.</p></div>
          <div className="flex gap-4"><button className="rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm dark:border-white/10 dark:bg-[#101b34]">All Categories⌄</button><div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-400 dark:border-white/10 dark:bg-[#101b34]">Search case studies... <Search size={18} /></div></div>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {cases.map(([image, tag, title, copy, stats]) => (
            <article key={title} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-[#101b34]">
              <div className="relative h-56"><Image src={image} alt={title} fill sizes="320px" className="object-cover" /><span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-[#008D7A] dark:bg-[#071126]/90 dark:text-[#00F5D4]">{tag}</span></div>
              <div className="p-5"><h3 className="text-lg font-black leading-snug">{title}</h3><p className="mt-3 text-xs leading-6 text-slate-600 dark:text-slate-300">{copy}</p><div className="mt-5 grid grid-cols-3 gap-2 border-t border-slate-100 pt-4 text-center dark:border-white/10">{stats.map(([v, l]) => <div key={l}><b>{v}</b><p className="text-[10px] text-slate-500 dark:text-slate-400">{l}</p></div>)}</div><CaseStudyModal image={image} tag={tag} title={title} copy={copy} stats={stats} /></div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-[1320px] gap-6 px-7 pb-12 lg:grid-cols-[1.25fr_.9fr] lg:px-14">
        <div className="rounded-2xl bg-[#03152e] p-8 text-white">
          <h2 className="text-2xl font-black">Why Clients Choose Antellay</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-4">{reasons.map(([Icon, title, copy]) => <div key={title} className="text-center md:border-l md:border-white/15 md:first:border-l-0"><Icon className="mx-auto" size={42} /><h3 className="mt-4 text-sm font-bold">{title}</h3><p className="mt-2 text-xs leading-5 text-white/60">{copy}</p></div>)}</div>
        </div>
        <div className="rounded-2xl bg-[linear-gradient(135deg,#e6fffb,#ccfbf1)] p-8 dark:border dark:border-[#00F5D4]/15 dark:bg-[linear-gradient(135deg,#101b34,#0d2432)]">
          <h2 className="text-2xl font-black">Let’s Build What’s Next</h2>
          <p className="mt-4 max-w-sm text-sm leading-7 text-slate-700 dark:text-slate-300">Have a project in mind? We’re here to turn your vision into a powerful solution.</p>
          <Link href="/contact" className="mt-7 inline-flex items-center gap-2 rounded-md bg-[#00A98F] px-6 py-3 text-sm font-bold !text-white hover:bg-[#008D7A] dark:bg-[#00F5D4] dark:!text-[#071126]">Contact Our Experts <ArrowRight size={15} /></Link>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-7 pb-10 lg:px-14"><div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-[#101b34]"><b className="mr-6 text-xl">Trending Topics</b>{topics.map((topic) => <span key={topic} className="mb-2 mr-2 inline-flex rounded-md bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-700 dark:bg-white/10 dark:text-slate-200">{topic}</span>)}</div></section>
    </main>
  );
}
