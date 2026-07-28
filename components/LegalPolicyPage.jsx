import Link from "next/link";
import { ArrowUpRight, FileText, Mail, ShieldCheck } from "lucide-react";

const policyLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/client-policy", label: "Client Policy" },
  { href: "/employee-policy", label: "Employee Policy" },
];

export default function LegalPolicyPage({
  eyebrow,
  title,
  description,
  effectiveDate,
  intro,
  sections,
  activePath,
  notice,
  contactLabel = "Questions about this policy?",
}) {
  return (
    <main className="min-h-screen bg-[#F7F9FC] text-[#0B132B] dark:bg-[#081126] dark:text-white">
      <section className="relative overflow-hidden border-b border-slate-200 dark:border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(58,134,255,0.14),transparent_30%),radial-gradient(circle_at_5%_90%,rgba(0,245,212,0.08),transparent_25%)]" />
        <div className="relative mx-auto max-w-[1180px] px-6 pb-16 pt-16 lg:px-10 lg:pb-20 lg:pt-20">
          <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#3A86FF] dark:text-[#00F5D4]">
            <ShieldCheck size={17} />
            {eyebrow}
          </div>
          <h1 className="mt-5 max-w-4xl font-[family-name:var(--font-heading)] text-5xl font-semibold tracking-[-0.04em] md:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">{description}</p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium shadow-sm dark:border-white/10 dark:bg-white/5">
              Effective {effectiveDate}
            </span>
            <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-500 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-400">
              Antellay Technologies Pvt. Ltd.
            </span>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-[1180px] gap-12 px-6 py-16 lg:grid-cols-[280px_minmax(0,1fr)] lg:px-10 lg:py-20">
        <aside className="lg:sticky lg:top-8 lg:self-start">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">On this page</p>
          <nav aria-label="Policy sections" className="space-y-1 border-l border-slate-200 dark:border-white/10">
            {sections.map((section, index) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="block border-l-2 border-transparent py-2 pl-5 text-sm text-slate-500 transition hover:border-[#3A86FF] hover:text-[#3A86FF] dark:text-slate-400 dark:hover:border-[#00F5D4] dark:hover:text-[#00F5D4]"
              >
                {index + 1}. {section.title}
              </a>
            ))}
          </nav>
        </aside>

        <article className="min-w-0">
          <div className="rounded-2xl border border-[#3A86FF]/15 bg-[#3A86FF]/5 p-6 leading-7 text-slate-700 dark:border-[#00F5D4]/15 dark:bg-[#00F5D4]/5 dark:text-slate-300">
            {intro}
          </div>

          {notice && (
            <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-950 dark:border-amber-400/20 dark:bg-amber-400/10 dark:text-amber-100">
              <strong>Important:</strong> {notice}
            </div>
          )}

          <div className="mt-12 space-y-14">
            {sections.map((section, index) => (
              <section key={section.id} id={section.id} className="scroll-mt-8">
                <div className="mb-5 flex items-start gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#0B132B] text-sm font-semibold text-white dark:bg-[#00F5D4] dark:text-[#081126]">
                    {index + 1}
                  </span>
                  <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold tracking-tight md:text-3xl">
                    {section.title}
                  </h2>
                </div>
                <div className="legal-copy pl-0 md:pl-[52px]">{section.content}</div>
              </section>
            ))}
          </div>

          <div className="mt-16 rounded-3xl bg-[#0B132B] p-7 text-white dark:bg-[#111D37] md:flex md:items-center md:justify-between md:p-9">
            <div>
              <Mail className="mb-4 text-[#00F5D4]" size={24} />
              <h2 className="text-2xl font-semibold">{contactLabel}</h2>
              <p className="mt-2 text-sm text-white/60">Contact our team and include the policy name in your subject line.</p>
            </div>
            <a
              href="mailto:info@antellay.com"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#00F5D4] px-5 py-3 font-semibold text-[#081126] transition hover:bg-[#6FFFE9] md:mt-0"
            >
              info@antellay.com
              <ArrowUpRight size={18} />
            </a>
          </div>
        </article>
      </div>

      <section className="border-t border-slate-200 bg-white dark:border-white/10 dark:bg-white/[0.025]">
        <div className="mx-auto max-w-[1180px] px-6 py-12 lg:px-10">
          <div className="mb-6 flex items-center gap-2 text-sm font-semibold">
            <FileText size={18} className="text-[#3A86FF] dark:text-[#00F5D4]" />
            Other legal documents
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {policyLinks.map((policy) => (
              <Link
                key={policy.href}
                href={policy.href}
                aria-current={activePath === policy.href ? "page" : undefined}
                className={`flex items-center justify-between rounded-xl border p-4 text-sm font-semibold transition ${
                  activePath === policy.href
                    ? "border-[#3A86FF] bg-[#3A86FF] text-white dark:border-[#00F5D4] dark:bg-[#00F5D4] dark:text-[#081126]"
                    : "border-slate-200 hover:border-[#3A86FF]/50 dark:border-white/10 dark:hover:border-[#00F5D4]/50"
                }`}
              >
                {policy.label}
                <ArrowUpRight size={17} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
