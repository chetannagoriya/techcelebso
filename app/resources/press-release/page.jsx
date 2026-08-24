import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Megaphone, Newspaper, Search, Sparkles } from "lucide-react";

export const metadata = {
  title: "Press Release | Antellay Resources",
  description: "Latest Antellay announcements, company news, partnerships and product updates.",
};

const releases = [
  ["/images/robot_ai_head.jpg", "July 2026", "Antellay expands AI, GIS and engineering solutions portfolio", "Company strengthens its industry-focused solutions across government, agriculture, healthcare, logistics and smart cities."],
  ["/images/antellay-product-logos.png", "June 2026", "Antellay launches new product ecosystem for AI-first businesses", "The portfolio includes Byizon.ai, Grehni.ai, CelebsoX, Celebso Production and NXTFund Capital."],
  ["/images/gis_hero_map.jpg", "May 2026", "Antellay announces new geospatial intelligence capabilities", "New GIS dashboards, satellite analytics and spatial workflows help organizations make faster decisions."],
  ["/images/careers/strategy-meeting.png", "April 2026", "Antellay partners with startups for AI transformation initiatives", "The company will support emerging businesses with product engineering, cloud and AI automation expertise."],
];

export default function PressReleasePage() {
  return (
    <main className="bg-[#f7fbff] text-[#07152f] transition-colors duration-300 dark:bg-[#071126] dark:text-white">
      <section className="relative overflow-hidden bg-white px-7 py-20 dark:bg-[#0B1730] lg:px-14">
        <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_60%_35%,rgba(0,169,143,.18),transparent_32%),radial-gradient(circle_at_70%_70%,rgba(0,245,212,.13),transparent_28%)] dark:opacity-70" />
        <div className="relative mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[.58fr_.42fr] lg:items-center">
          <div>
            <p className="flex items-center gap-2 text-sm font-black uppercase tracking-[.12em] text-[#008D7A] dark:text-[#00F5D4]"><Sparkles size={16} /> Press Release</p>
            <h1 className="mt-5 text-6xl font-black leading-[1.02] tracking-[-.06em]">Company news, announcements and media updates.</h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-300">Stay updated with Antellay’s latest launches, partnerships, product updates and industry milestones.</p>
          </div>
          <div className="group overflow-hidden rounded-3xl bg-[#071124] text-white shadow-xl shadow-[#071124]/20 dark:shadow-black/30">
            <div className="relative h-52 overflow-hidden">
              <Image src="/images/events/events-hero-conference.png" alt="Antellay press and media announcements" fill priority sizes="(max-width: 1024px) 100vw, 42vw" className="object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071124] via-[#071124]/20 to-transparent" />
              <span className="absolute bottom-5 left-6 grid h-12 w-12 place-items-center rounded-xl bg-[#00F5D4] text-[#071124] shadow-lg"><Megaphone size={25} /></span>
            </div>
            <div className="p-7 pt-5 sm:p-8 sm:pt-5">
              <h2 className="text-3xl font-black">Media Contact</h2>
              <p className="mt-3 text-sm leading-7 text-white/65">For press inquiries, interviews and company information, connect with the Antellay communications team.</p>
              <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#00F5D4] px-5 py-3 text-sm font-bold !text-[#071124] transition hover:bg-white">Contact Media Team <ArrowRight size={15} /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-7 py-10 lg:px-14">
        <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm text-slate-400 shadow-sm dark:border-white/10 dark:bg-[#111D37] dark:shadow-black/20">Search press releases... <Search className="ml-auto text-slate-700 dark:text-slate-200" size={18} /></div>
      </section>

      <section className="mx-auto max-w-[1320px] px-7 pb-16 lg:px-14">
        <div className="grid gap-5">
          {releases.map(([image, date, title, copy]) => (
            <article key={title} className="group grid gap-5 overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:border-[#00A98F]/35 hover:shadow-xl dark:border-white/10 dark:bg-[#111D37] dark:hover:border-[#00F5D4]/35 dark:hover:shadow-black/30 md:grid-cols-[180px_150px_1fr_auto] md:items-center">
              <div className="relative h-44 overflow-hidden rounded-xl bg-slate-100 dark:bg-white/5 md:h-28">
                <Image src={image} alt="" fill sizes="180px" className="object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071124]/20 to-transparent" />
              </div>
              <div className="flex items-center gap-3 text-sm font-black text-[#008D7A] dark:text-[#00F5D4]"><CalendarDays size={20} /> {date}</div>
              <div><h2 className="text-2xl font-black tracking-[-.035em]">{title}</h2><p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{copy}</p></div>
              <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-bold !text-[#008D7A] transition hover:gap-3 dark:!text-[#00F5D4]">Read More <ArrowRight size={15} /></Link>
            </article>
          ))}
        </div>
      </section>

      <section className="px-7 pb-16 lg:px-14">
        <div className="mx-auto max-w-[1320px] rounded-3xl border border-[#00A98F]/15 bg-[linear-gradient(135deg,rgba(0,169,143,.10),#ffffff)] p-8 text-center shadow-sm dark:border-[#00F5D4]/15 dark:bg-[linear-gradient(135deg,rgba(0,245,212,.09),#111D37)]">
          <Newspaper className="mx-auto text-[#008D7A] dark:text-[#00F5D4]" size={44} />
          <h2 className="mt-4 text-3xl font-black">Antellay in the news</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300">Follow our announcements as we continue building intelligent solutions for enterprises, governments and startups.</p>
        </div>
      </section>
    </main>
  );
}
