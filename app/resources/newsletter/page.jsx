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
    <main className="bg-[#f7fbff] text-[#07152f] dark:bg-[#f7fbff] dark:text-[#07152f]">
      <section className="relative overflow-hidden px-7 py-20 lg:px-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(16,185,129,.18),transparent_30%),radial-gradient(circle_at_80%_22%,rgba(58,134,255,.18),transparent_28%)]" />
        <div className="relative mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[.55fr_.45fr] lg:items-center">
          <div>
            <p className="flex items-center gap-2 text-sm font-black uppercase tracking-[.12em] text-[#096dd9]"><Sparkles size={16} /> Newsletter</p>
            <h1 className="mt-5 text-6xl font-black leading-[1.02] tracking-[-.06em]">Ideas worth reading. Updates worth keeping.</h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">Join Antellay’s newsletter for expert insights on AI, GIS, data, cloud and digital transformation — delivered straight to your inbox.</p>
          </div>
          <div className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-xl">
            <Mail size={46} className="text-emerald-600" />
            <h2 className="mt-5 text-3xl font-black">Stay Updated</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">Get trends, practical guides and company updates every month.</p>
            <div className="mt-6 flex overflow-hidden rounded-xl border border-slate-200">
              <input placeholder="Enter your email" className="min-w-0 flex-1 px-4 py-4 text-sm outline-none" />
              <button className="bg-emerald-600 px-5 text-sm font-bold text-white">Subscribe</button>
            </div>
            <p className="mt-3 text-xs text-slate-400">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-7 pb-14 lg:px-14">
        <div className="grid gap-4 md:grid-cols-4">
          {benefits.map((benefit) => (
            <div key={benefit} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <CheckCircle2 className="text-emerald-600" size={24} />
              <h3 className="mt-4 text-lg font-black">{benefit}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-7 pb-16 lg:px-14">
        <div className="mb-6 flex items-end justify-between">
          <div><p className="text-xs font-black uppercase tracking-[.14em] text-[#096dd9]">Newsletter Editions</p><h2 className="mt-3 text-4xl font-black tracking-[-.04em]">Choose what you want to follow.</h2></div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {editions.map(([title, copy]) => (
            <article key={title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <Bell className="text-[#096dd9]" size={30} />
              <h3 className="mt-5 text-2xl font-black tracking-[-.035em]">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{copy}</p>
              <Link href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#096dd9]">Subscribe <ArrowRight size={15} /></Link>
            </article>
          ))}
        </div>
      </section>

      <section className="px-7 pb-16 lg:px-14">
        <div className="mx-auto grid max-w-[1320px] gap-6 rounded-3xl bg-[#071124] p-8 text-white md:grid-cols-[1fr_auto] md:items-center">
          <div><h2 className="text-3xl font-black">Want updates for your team?</h2><p className="mt-3 text-white/65">We can share curated insights for your industry and transformation goals.</p></div>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-6 py-3 text-sm font-bold text-[#071124]">Request Curated Updates <Send size={16} /></Link>
        </div>
      </section>
    </main>
  );
}
