import Link from "next/link";
import { ArrowRight, CalendarDays, Megaphone, Newspaper, Search, Sparkles } from "lucide-react";

export const metadata = {
  title: "Press Release | Antellay Resources",
  description: "Latest Antellay announcements, company news, partnerships and product updates.",
};

const releases = [
  ["July 2026", "Antellay expands AI, GIS and engineering solutions portfolio", "Company strengthens its industry-focused solutions across government, agriculture, healthcare, logistics and smart cities."],
  ["June 2026", "Antellay launches new product ecosystem for AI-first businesses", "The portfolio includes Byizon.ai, Grehni.ai, CelebsoX, Celebso Production and NXTFund Capital."],
  ["May 2026", "Antellay announces new geospatial intelligence capabilities", "New GIS dashboards, satellite analytics and spatial workflows help organizations make faster decisions."],
  ["April 2026", "Antellay partners with startups for AI transformation initiatives", "The company will support emerging businesses with product engineering, cloud and AI automation expertise."],
];

export default function PressReleasePage() {
  return (
    <main className="bg-[#f7fbff] text-[#07152f] dark:bg-[#f7fbff] dark:text-[#07152f]">
      <section className="relative overflow-hidden bg-white px-7 py-20 lg:px-14">
        <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_60%_35%,rgba(58,134,255,.18),transparent_32%),radial-gradient(circle_at_70%_70%,rgba(16,185,129,.14),transparent_28%)]" />
        <div className="relative mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[.58fr_.42fr] lg:items-center">
          <div>
            <p className="flex items-center gap-2 text-sm font-black uppercase tracking-[.12em] text-[#096dd9]"><Sparkles size={16} /> Press Release</p>
            <h1 className="mt-5 text-6xl font-black leading-[1.02] tracking-[-.06em]">Company news, announcements and media updates.</h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">Stay updated with Antellay’s latest launches, partnerships, product updates and industry milestones.</p>
          </div>
          <div className="rounded-3xl bg-[#071124] p-8 text-white shadow-xl">
            <Megaphone size={54} className="text-cyan-300" />
            <h2 className="mt-6 text-3xl font-black">Media Contact</h2>
            <p className="mt-3 text-sm leading-7 text-white/65">For press inquiries, interviews and company information, connect with the Antellay communications team.</p>
            <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#3A86FF] px-5 py-3 text-sm font-bold">Contact Media Team <ArrowRight size={15} /></Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-7 py-10 lg:px-14">
        <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm text-slate-400 shadow-sm">Search press releases... <Search className="ml-auto text-slate-700" size={18} /></div>
      </section>

      <section className="mx-auto max-w-[1320px] px-7 pb-16 lg:px-14">
        <div className="grid gap-5">
          {releases.map(([date, title, copy]) => (
            <article key={title} className="grid gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl md:grid-cols-[180px_1fr_auto] md:items-center">
              <div className="flex items-center gap-3 text-sm font-black text-[#096dd9]"><CalendarDays size={20} /> {date}</div>
              <div><h2 className="text-2xl font-black tracking-[-.035em]">{title}</h2><p className="mt-2 text-sm leading-7 text-slate-600">{copy}</p></div>
              <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-bold text-[#096dd9]">Read More <ArrowRight size={15} /></Link>
            </article>
          ))}
        </div>
      </section>

      <section className="px-7 pb-16 lg:px-14">
        <div className="mx-auto rounded-3xl bg-[linear-gradient(135deg,#eaf4ff,#ffffff)] p-8 text-center shadow-sm">
          <Newspaper className="mx-auto text-[#096dd9]" size={44} />
          <h2 className="mt-4 text-3xl font-black">Antellay in the news</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600">Follow our announcements as we continue building intelligent solutions for enterprises, governments and startups.</p>
        </div>
      </section>
    </main>
  );
}
