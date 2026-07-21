import Link from "next/link";
import { ArrowRight, BookOpenText, CalendarDays, Clock, Sparkles, Tag } from "lucide-react";

export const metadata = {
  title: "Our Blog | Antellay Resources",
  description: "Read Antellay insights on AI, GIS, automation, cloud, data and digital transformation.",
};

const featured = {
  title: "How AI, GIS and automation are reshaping modern industries",
  category: "Digital Transformation",
  readTime: "6 min read",
  excerpt: "A practical look at how intelligent systems are moving from dashboards to real-time operational decision-making.",
};

const posts = [
  ["AI Strategy", "Building AI products that move beyond demos", "How to connect data, UX and measurable workflows before scaling AI."],
  ["GIS Intelligence", "Why geospatial data is becoming a boardroom asset", "Location intelligence is now central to planning, monitoring and risk."],
  ["Cloud", "Designing secure cloud foundations for fast teams", "A simple framework for scalable, reliable and auditable cloud systems."],
  ["Computer Vision", "Where visual AI creates the most business value", "From retail shelves to security operations and manufacturing quality."],
  ["Data", "The hidden cost of poor data readiness", "Why annotation, pipelines and quality checks decide AI success."],
  ["Product", "What makes an enterprise product feel effortless", "Lessons from designing dashboards, automations and AI copilots."],
];

export default function BlogPage() {
  return (
    <main className="bg-white text-[#07152f] dark:bg-[#07152f] dark:text-white">
      <section className="relative overflow-hidden px-6 py-24 md:px-10 lg:px-14">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-[#071124] dark:via-[#07152f] dark:to-[#0b2c3a]" />
        <div className="relative mx-auto max-w-[1280px]">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[.14em] text-[#3A86FF] shadow-sm dark:border-white/10 dark:bg-white/8">
            <Sparkles size={15} /> Our Blog
          </span>
          <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[1.04] tracking-[-.05em] md:text-7xl">
            Insights on AI, GIS, cloud and digital transformation.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-white/66">
            Practical ideas, technology trends and implementation notes from the Antellay team.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-6 py-14 md:px-10">
        <div className="grid gap-7 rounded-3xl border border-slate-200 bg-[#071124] p-8 text-white shadow-xl md:grid-cols-[.8fr_1.2fr] md:p-10">
          <div className="grid min-h-72 place-items-center rounded-2xl bg-[radial-gradient(circle_at_30%_25%,rgba(58,134,255,.55),transparent_30%),radial-gradient(circle_at_72%_65%,rgba(0,245,212,.34),transparent_32%),#0b1733]">
            <BookOpenText size={82} className="text-cyan-200" />
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex flex-wrap gap-3 text-xs font-bold text-white/60">
              <span className="inline-flex items-center gap-1"><Tag size={14} /> {featured.category}</span>
              <span className="inline-flex items-center gap-1"><Clock size={14} /> {featured.readTime}</span>
            </div>
            <h2 className="mt-4 text-4xl font-black tracking-[-.04em]">{featured.title}</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/65">{featured.excerpt}</p>
            <Link href="/contact" className="mt-7 inline-flex w-fit items-center gap-2 rounded-md bg-[#3A86FF] px-6 py-3 text-sm font-bold text-white">
              Discuss This Topic <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-6 pb-16 md:px-10">
        <div className="mb-7 flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[.14em] text-[#3A86FF]">Latest Articles</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-.04em]">From the Antellay desk</h2>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-black text-[#3A86FF]">Suggest a topic <ArrowRight size={15} /></Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map(([category, title, excerpt], index) => (
            <article key={title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/5">
              <div className="flex items-center justify-between text-xs font-bold text-slate-500 dark:text-white/50">
                <span className="text-[#3A86FF]">{category}</span>
                <span className="inline-flex items-center gap-1"><CalendarDays size={14} /> 2026</span>
              </div>
              <h3 className="mt-5 text-2xl font-black tracking-[-.03em]">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-white/62">{excerpt}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-xs font-black text-[#3A86FF]">Read Article {index + 1} <ArrowRight size={14} /></span>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
