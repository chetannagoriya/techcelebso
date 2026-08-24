import Link from "next/link";
import { ArrowRight, Bell, CheckCircle2, Mail, Send, Sparkles } from "lucide-react";

export const metadata = {
  title: "Newsletter | Antellay Resources",
  description: "Subscribe to Antellay newsletter for insights on AI, GIS, data, engineering and digital transformation.",
};

const benefits = ["AI, GIS and data insights", "Industry trends and guides", "Product and event updates", "Case studies and best practices"];
const editions = [
  ["AI & Automation Digest", "Monthly insights on AI agents, automation, computer vision and enterprise AI."],
  ["GIS & Data Brief", "Geospatial intelligence, analytics and data engineering updates for modern teams."],
  ["Antellay Product Notes", "New products, feature launches, case studies and company updates."],
];

export default function NewsletterPage() {
  return (
    <main className="bg-[#f7fbff] text-[#07152f] transition-colors duration-300 dark:bg-[#071126] dark:text-white">
      <section className="relative overflow-hidden px-7 py-20 lg:px-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(0,169,143,.18),transparent_30%),radial-gradient(circle_at_80%_22%,rgba(0,245,212,.14),transparent_28%)] dark:opacity-70" />
        <div className="relative mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[.55fr_.45fr] lg:items-center">
          <div>
            <p className="flex items-center gap-2 text-sm font-black uppercase tracking-[.12em] text-[#008D7A] dark:text-[#00F5D4]"><Sparkles size={16} /> Newsletter</p>
            <h1 className="mt-5 text-6xl font-black leading-[1.02] tracking-[-.06em]">Ideas worth reading. Updates worth keeping.</h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-300">Join Antellay’s newsletter for expert insights on AI, GIS, data, cloud and digital transformation — delivered straight to your inbox.</p>
          </div>
          <div className="rounded-3xl border border-[#00A98F]/20 bg-white p-8 shadow-xl shadow-[#00A98F]/10 dark:border-[#00F5D4]/15 dark:bg-[#111D37] dark:shadow-black/25">
            <Mail size={46} className="text-[#008D7A] dark:text-[#00F5D4]" />
            <h2 className="mt-5 text-3xl font-black">Stay Updated</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">Get trends, practical guides and company updates every month.</p>
            <div className="mt-6 flex overflow-hidden rounded-xl border border-slate-200 focus-within:border-[#00A98F] dark:border-white/10 dark:focus-within:border-[#00F5D4]">
              <input type="email" aria-label="Email address" placeholder="Enter your email" className="min-w-0 flex-1 bg-white px-4 py-4 text-sm text-[#07152f] outline-none dark:bg-white/5 dark:text-white" />
              <button className="bg-[#00A98F] px-5 text-sm font-bold text-white transition hover:bg-[#008D7A] dark:bg-[#00F5D4] dark:text-[#071126] dark:hover:bg-[#70EEFF]">Subscribe</button>
            </div>
            <p className="mt-3 text-xs text-slate-400">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-7 pb-14 lg:px-14">
        <div className="grid gap-4 md:grid-cols-4">
          {benefits.map((benefit) => (
            <div key={benefit} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[#00A98F]/35 dark:border-white/10 dark:bg-[#111D37] dark:hover:border-[#00F5D4]/35">
              <CheckCircle2 className="text-[#008D7A] dark:text-[#00F5D4]" size={24} />
              <h3 className="mt-4 text-lg font-black">{benefit}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-7 pb-16 lg:px-14">
        <div className="mb-6 flex items-end justify-between">
          <div><p className="text-xs font-black uppercase tracking-[.14em] text-[#008D7A] dark:text-[#00F5D4]">Newsletter Editions</p><h2 className="mt-3 text-4xl font-black tracking-[-.04em]">Choose what you want to follow.</h2></div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {editions.map(([title, copy]) => (
            <article key={title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-[#00A98F]/35 hover:shadow-xl dark:border-white/10 dark:bg-[#111D37] dark:hover:border-[#00F5D4]/35 dark:hover:shadow-black/30">
              <Bell className="text-[#008D7A] dark:text-[#00F5D4]" size={30} />
              <h3 className="mt-5 text-2xl font-black tracking-[-.035em]">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{copy}</p>
              <Link href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-bold !text-[#008D7A] transition hover:gap-3 dark:!text-[#00F5D4]">Subscribe <ArrowRight size={15} /></Link>
            </article>
          ))}
        </div>
      </section>

      <section className="px-7 pb-16 lg:px-14">
        <div className="mx-auto grid max-w-[1320px] gap-6 rounded-3xl bg-[#071124] p-8 text-white md:grid-cols-[1fr_auto] md:items-center">
          <div><h2 className="text-3xl font-black">Want updates for your team?</h2><p className="mt-3 text-white/65">We can share curated insights for your industry and transformation goals.</p></div>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-md bg-[#00F5D4] px-6 py-3 text-sm font-bold !text-[#071124] transition hover:bg-white">Request Curated Updates <Send size={16} /></Link>
        </div>
      </section>
    </main>
  );
}
