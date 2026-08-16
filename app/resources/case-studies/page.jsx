import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart3, Filter, Search, Sparkles } from "lucide-react";

export const metadata = {
  title: "Case Studies | Antellay Resources",
  description: "Explore Antellay case studies across AI, GIS, automation, data and enterprise technology.",
};

const cases = [
  ["/images/gis_hero_map.jpg", "GIS & Mapping", "Smarter Infrastructure Planning", "High-accuracy mapping and spatial intelligence for better public infrastructure decisions.", "30% Efficiency Gain"],
  ["/images/healthcare/healthcare-dashboard.png", "Healthcare AI", "Medical Imaging Intelligence", "Computer vision and AI analytics for faster, more reliable diagnostic workflows.", "95% AI Accuracy"],
  ["/images/retail-ecommerce/retail-hero.png", "Retail AI", "Inventory & Customer Intelligence", "AI-powered recommendations, monitoring and analytics for smarter retail operations.", "32% Sales Uplift"],
  ["/images/manufacturing/manufacturing-hero.png", "Manufacturing", "Predictive Maintenance", "Automation and vision intelligence to reduce downtime and improve quality control.", "40% Less Downtime"],
  ["/images/environment-climate/environment-hero.png", "Climate GIS", "Sustainable Planning Intelligence", "Geospatial monitoring and data dashboards for environment and resource planning.", "100% Data Visibility"],
  ["/images/logistics/logistics-hero.png", "Logistics", "Route & Fleet Optimization", "Real-time analytics and optimization for faster, more reliable delivery operations.", "25% Cost Savings"],
];

export default function CaseStudiesPage() {
  return (
    <main className="bg-[#f7fbff] text-[#07152f] dark:bg-[#f7fbff] dark:text-[#07152f]">
      <section className="relative overflow-hidden px-7 py-20 lg:px-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(58,134,255,.18),transparent_30%),radial-gradient(circle_at_80%_12%,rgba(16,185,129,.18),transparent_28%)]" />
        <div className="relative mx-auto max-w-[1320px]">
          <p className="flex items-center gap-2 text-sm font-black uppercase tracking-[.12em] text-[#096dd9]"><Sparkles size={16} /> Case Studies</p>
          <h1 className="mt-5 max-w-4xl text-6xl font-black leading-[1.02] tracking-[-.06em]">Real work. Real results. Real transformation.</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">See how Antellay applies AI, GIS, data and engineering to solve complex business and operational challenges.</p>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-7 pb-10 lg:px-14">
        <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-400 md:w-96">Search case studies... <Search className="ml-auto text-slate-700" size={18} /></div>
          <button className="inline-flex items-center gap-2 rounded-lg bg-[#096dd9] px-5 py-3 text-sm font-bold text-white"><Filter size={16} /> Filter by Industry</button>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-7 pb-16 lg:px-14">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cases.map(([image, tag, title, copy, metric]) => (
            <article key={title} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="relative h-56 overflow-hidden"><Image src={image} alt={title} fill sizes="420px" className="object-cover transition duration-500 group-hover:scale-105" /><span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-[#096dd9]">{tag}</span></div>
              <div className="p-6"><h2 className="text-2xl font-black tracking-[-.035em]">{title}</h2><p className="mt-3 text-sm leading-7 text-slate-600">{copy}</p><p className="mt-5 flex items-center gap-2 text-sm font-black text-emerald-600"><BarChart3 size={17} />{metric}</p><Link href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#096dd9]">Read Case Study <ArrowRight size={15} /></Link></div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-7 pb-16 lg:px-14">
        <div className="mx-auto grid max-w-[1320px] gap-6 rounded-3xl bg-[#071124] p-8 text-white md:grid-cols-[1fr_auto] md:items-center">
          <div><h2 className="text-3xl font-black">Have a challenge worth solving?</h2><p className="mt-3 text-white/65">Let’s turn it into the next measurable success story.</p></div>
        </div>
      </section>
    </main>
  );
}
