import Link from "next/link";
import { ArrowRight, BarChart3, CheckCircle2, Globe2, HeartHandshake, Rocket, ShieldCheck, Sparkles, Users } from "lucide-react";

export const metadata = {
  title: "Our Impact | Antellay Resources",
  description: "Explore Antellay's measurable impact across AI, GIS, automation, digital platforms and enterprise transformation.",
};

const metrics = [
  ["120+", "Projects Delivered"],
  ["30+", "Industries Served"],
  ["50M+", "Users Impacted"],
  ["99.9%", "Reliable Delivery"],
];

const impactAreas = [
  [Rocket, "Faster Digital Launches", "We help businesses move from idea to production with focused product engineering and scalable delivery."],
  [BarChart3, "Smarter Decisions", "AI dashboards, analytics and automation turn scattered data into practical business intelligence."],
  [Globe2, "Real-world Intelligence", "GIS, mapping and remote sensing solutions improve planning, operations and resource visibility."],
  [ShieldCheck, "Secure Growth", "Cloud, cybersecurity and governance practices support dependable enterprise transformation."],
];

const stories = [
  ["Agriculture & GIS", "Precision monitoring, crop visibility and satellite-powered decision support."],
  ["Healthcare AI", "Medical imaging intelligence and faster diagnostic workflows."],
  ["Retail Automation", "Inventory intelligence, customer analytics and computer vision monitoring."],
  ["Smart Cities", "Urban planning, public service dashboards and geospatial operations."],
];

export default function ImpactPage() {
  return (
    <main className="bg-white text-[#07152f] dark:bg-[#07152f] dark:text-white">
      <section className="relative overflow-hidden bg-[#071124] px-6 py-24 text-white md:px-10 lg:px-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(58,134,255,.42),transparent_34%),radial-gradient(circle_at_78%_35%,rgba(0,245,212,.22),transparent_30%)]" />
        <div className="relative mx-auto max-w-[1280px]">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[.14em] text-cyan-200">
            <Sparkles size={15} /> Our Impact
          </span>
          <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[1.04] tracking-[-.05em] md:text-7xl">
            Building intelligent systems that create measurable business impact.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/70">
            From AI-powered platforms to GIS intelligence and automation, our work helps organizations move faster, operate smarter and serve people better.
          </p>
          <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#3A86FF] px-6 py-3 text-sm font-bold text-white">
            Talk to Our Team <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-6 py-14 md:px-10">
        <div className="grid gap-4 md:grid-cols-4">
          {metrics.map(([value, label]) => (
            <div key={label} className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm dark:border-white/10 dark:bg-white/5">
              <b className="text-4xl text-[#3A86FF]">{value}</b>
              <p className="mt-2 text-xs font-bold uppercase tracking-[.12em] text-slate-500 dark:text-white/55">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-6 pb-14 md:px-10">
        <div className="grid gap-5 md:grid-cols-2">
          {impactAreas.map(([Icon, title, copy]) => (
            <div key={title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/5">
              <Icon size={34} className="text-[#3A86FF]" />
              <h2 className="mt-5 text-2xl font-black tracking-[-.03em]">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-white/62">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-14 dark:bg-white/5 md:px-10">
        <div className="mx-auto max-w-[1280px]">
          <p className="text-xs font-black uppercase tracking-[.14em] text-[#3A86FF]">Impact Stories</p>
          <h2 className="mt-3 text-4xl font-black tracking-[-.04em]">Where intelligence becomes outcomes.</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {stories.map(([title, copy]) => (
              <div key={title} className="rounded-2xl bg-white p-6 shadow-sm dark:bg-[#071124]">
                <CheckCircle2 size={24} className="text-emerald-500" />
                <h3 className="mt-4 text-lg font-black">{title}</h3>
                <p className="mt-3 text-xs leading-6 text-slate-600 dark:text-white/60">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1280px] gap-5 px-6 py-14 md:grid-cols-3 md:px-10">
        {[[Users, "People-first"], [HeartHandshake, "Partnership-led"], [ShieldCheck, "Built to last"]].map(([Icon, title]) => (
          <div key={title} className="rounded-2xl border border-slate-200 p-6 text-center dark:border-white/10">
            <Icon className="mx-auto text-[#3A86FF]" size={30} />
            <h3 className="mt-4 text-xl font-black">{title}</h3>
          </div>
        ))}
      </section>
    </main>
  );
}
