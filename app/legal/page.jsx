import Link from "next/link";
import { ArrowUpRight, FileSignature, FileText, Scale, ShieldCheck } from "lucide-react";
import policies from "../../data/legalPolicies.json";

export const metadata = {
  title: "Legal & Policies | Antellay",
  description: "Antellay's terms, privacy, client, workplace, refund, cookie, data, GIS, NDA, and AI service documents.",
};

const groups = [
  { title: "Core policies", icon: Scale, slugs: ["terms-and-conditions", "privacy-policy", "client-policy", "refund-cancellation-policy", "cookie-policy"] },
  { title: "Service policies", icon: ShieldCheck, slugs: ["data-annotation-policy", "gis-geospatial-policy", "ai-services-policy"] },
  { title: "People & agreements", icon: FileSignature, slugs: ["employee-policy", "employee-nda", "mutual-client-nda"] },
];

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-[#F6F7F4] text-[#14213D] dark:bg-[#071126] dark:text-white">
      <section className="relative overflow-hidden bg-[#14213D] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(215,168,74,0.23),transparent_30%),radial-gradient(circle_at_10%_90%,rgba(0,245,212,0.1),transparent_28%)]" />
        <div className="relative mx-auto max-w-[1240px] px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-[#D7A84A]"><Scale size={17} /> Legal centre</div>
          <h1 className="mt-6 max-w-4xl font-[family-name:var(--font-heading)] text-5xl font-semibold tracking-[-0.04em] sm:text-6xl lg:text-7xl">Clear terms. Responsible technology.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">Explore the official policies and agreement templates that govern how Antellay works with clients, people, data, and emerging technology.</p>
          <div className="mt-9 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2">Version 1.0</span>
            <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2">Effective 05 August 2026</span>
            <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2">11 documents</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9B6B16] dark:text-[#D7A84A]">Master legal & policy document</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.025em] sm:text-4xl">Find the document that applies to you</h2>
          <p className="mt-4 leading-7 text-[#14213D]/62 dark:text-white/58">Each web page follows the structure and wording of Antellay Technologies Private Limited's master document, with section-level navigation for easier reading.</p>
        </div>

        <div className="space-y-12">
          {groups.map(({ title, icon: Icon, slugs }) => (
            <section key={title}>
              <div className="mb-5 flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F2EEE5] text-[#9B6B16] dark:bg-white/5 dark:text-[#D7A84A]"><Icon size={20} /></span><h2 className="text-xl font-semibold">{title}</h2></div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {slugs.map((slug) => {
                  const policy = policies.find((item) => item.slug === slug);
                  return (
                    <Link key={slug} href={`/legal/${slug}`} className="group flex min-h-56 flex-col rounded-2xl border border-[#14213D]/10 bg-white p-6 transition hover:-translate-y-1 hover:border-[#B57C1B]/50 hover:shadow-[0_16px_45px_rgba(20,33,61,0.08)] dark:border-white/10 dark:bg-white/[0.035] dark:hover:border-[#00F5D4]/40">
                      <div className="flex items-center justify-between"><FileText size={20} className="text-[#9B6B16] dark:text-[#00F5D4]" /><span className="text-xs font-semibold text-[#14213D]/40 dark:text-white/35">{policy.sections.length} sections</span></div>
                      <h3 className="mt-6 text-xl font-semibold leading-snug tracking-[-0.015em]">{policy.title}</h3>
                      <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#14213D]/58 dark:text-white/50">{policy.summary}</p>
                      <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-bold text-[#9B6B16] dark:text-[#00F5D4]">Read document <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></span>
                    </Link>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
