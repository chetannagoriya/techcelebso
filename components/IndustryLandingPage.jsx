import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart3, Check, ChevronRight, CircleDot, Database, Gauge, MonitorCheck, ShieldCheck } from "lucide-react";

const SectionTitle = ({ children }) => (
  <h2 className="mb-5 text-center text-[11px] font-extrabold uppercase tracking-[.08em] text-[#0c327e]">
    {children}
  </h2>
);

const MiniDashboard = ({ title, stats, accent }) => (
  <div className="rounded-xl border border-blue-300/20 bg-[#06172e]/95 p-4 text-white shadow-2xl">
    <div className="flex items-center justify-between text-xs font-bold">
      <span>{title}</span>
      <span className="text-lime-300">Live</span>
    </div>
    <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
      {stats.map(([value, label]) => (
        <div key={label} className="rounded-lg border border-white/10 bg-white/5 p-3">
          <b className="text-lg" style={{ color: accent }}>{value}</b>
          <span className="mt-1 block text-[7px] text-white/55">{label}</span>
          <small className="text-lime-300">+12.8%</small>
        </div>
      ))}
    </div>
    <div className="mt-3 grid grid-cols-[1.15fr_.85fr] gap-3">
      <div className="rounded-lg border border-white/10 p-3">
        <p className="text-[8px] text-white/60">Activity Trend</p>
        <svg viewBox="0 0 300 100" className="mt-3 w-full" fill="none">
          <path d="M0 82 L38 70 L78 74 L116 45 L150 56 L190 27 L232 36 L270 14 L300 18" stroke={accent} strokeWidth="3" />
          <path d="M0 82 L38 70 L78 74 L116 45 L150 56 L190 27 L232 36 L270 14 L300 18 V100 H0Z" fill={accent} opacity=".18" />
        </svg>
      </div>
      <div className="grid place-items-center rounded-lg border border-white/10">
        <div className="grid h-24 w-24 place-items-center rounded-full border-[14px] border-[#226be5] border-r-[#efb329] border-b-[#39c3c9]">
          <b>98%</b>
        </div>
      </div>
    </div>
  </div>
);

export default function IndustryLandingPage({ config }) {
  const {
    eyebrow, title, highlight, description, hero, dashboardImage, ctaImage, dashboardTitle,
    stats, badges, logos, challenges, challengeImage, solutions, useCases, features,
    technologies, workflow, modalitiesTitle, modalities, impact, faqs, why, ctaTitle, ctaCopy,
    accent = "#1264d8"
  } = config;

  return (
    <main className="bg-[#fcfdff] text-[#0b1d3a] dark:bg-[#fcfdff] dark:text-[#0b1d3a]">
      <section className="relative overflow-hidden border-b border-blue-50">
        <Image src={hero} alt={`${title} hero`} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#fff_0%,rgba(255,255,255,.98)_36%,rgba(255,255,255,.22)_70%,rgba(255,255,255,.04)_100%)]" />
        <div className="relative mx-auto grid min-h-[570px] max-w-[1440px] items-center gap-8 px-6 py-10 md:px-10 lg:grid-cols-[.72fr_1.28fr] lg:px-14">
          <div>
            <span className="rounded bg-blue-50 px-3 py-1.5 text-[10px] font-bold uppercase text-[#075fd8]">{eyebrow}</span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-[-.04em] sm:text-5xl lg:text-[52px]">
              {title}<span className="block text-[#1264d8]">{highlight}</span>
            </h1>
            <p className="mt-5 max-w-[520px] text-sm leading-7 text-slate-700">{description}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-md bg-[#1264d8] px-5 py-3 text-xs font-bold text-white">Book Free Consultation <ArrowRight size={14} /></Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <MiniDashboard title={dashboardTitle} stats={stats} accent={accent} />
          </div>
        </div>
        <div className="relative mx-auto grid max-w-[1200px] grid-cols-4 gap-3 px-6 pb-7 sm:grid-cols-8">
          {badges.map(([Icon, label]) => (
            <div key={label} className="text-center">
              <Icon size={20} className="mx-auto text-[#1264d8]" />
              <span className="mt-2 block text-[8px] font-semibold">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1360px] px-6 py-5 md:px-10">
        <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
          <p className="text-center text-[10px] font-bold uppercase text-[#0c327e]">Trusted by leading organizations</p>
          <div className="mt-5 grid grid-cols-2 items-center gap-5 text-center text-base font-bold sm:grid-cols-4 lg:grid-cols-8">
            {logos.map((logo, index) => {
              const name = typeof logo === "string" ? logo : logo.name;
              return typeof logo === "string" ? (
                <span key={name} className={index % 3 === 0 ? "text-[#1264d8]" : "text-slate-700"}>{name}</span>
              ) : (
                <span key={name} className="grid min-h-12 place-items-center rounded-md border border-slate-100 bg-white px-3 py-2 shadow-sm">
                  <span
                    aria-hidden="true"
                    className="block h-7 w-full bg-contain bg-center bg-no-repeat"
                    style={{ backgroundImage: `url("${logo.src}")` }}
                  />
                  <span className="mt-1 text-[10px] font-extrabold uppercase tracking-[.04em] text-slate-700">{name}</span>
                </span>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1360px] gap-5 px-6 py-8 md:px-10 lg:grid-cols-[.78fr_1.22fr]">
        <div className="relative min-h-72 overflow-hidden rounded-xl">
          <Image src={challengeImage} alt="Industry challenges" fill className="object-cover" />
        </div>
        <div>
          <SectionTitle>Industry Challenges</SectionTitle>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {challenges.map(([Icon, name, copy]) => (
              <div key={name} className="rounded-xl border border-slate-200 bg-white p-4">
                <Icon size={20} className="text-[#1264d8]" />
                <h3 className="mt-2 text-[10px] font-bold">{name}</h3>
                <p className="mt-1 text-[8px] leading-4 text-slate-500">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1360px] px-6 py-8 md:px-10">
        <SectionTitle>Our AI-Powered Solutions</SectionTitle>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {solutions.map(([Icon, name, image, items]) => (
            <article key={name} className="overflow-hidden rounded-xl border border-slate-200 bg-white">
              <div className="relative h-40"><Image src={image} alt={`${name} solution`} fill className="object-cover" /></div>
              <div className="p-4">
                <div className="flex items-center gap-2"><Icon size={18} className="text-[#1264d8]" /><h3 className="text-xs font-bold">{name}</h3></div>
                <ul className="mt-3 space-y-2 text-[8px] text-slate-600">
                  {items.map((item) => <li key={item} className="flex gap-2"><Check size={11} className="text-[#1264d8]" />{item}</li>)}
                </ul>
                <Link href="/contact" className="mt-4 inline-flex items-center gap-1 text-[9px] font-bold text-[#1264d8]">Explore Solution <ArrowRight size={11} /></Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1360px] px-6 py-7 md:px-10">
        <SectionTitle>Use Cases</SectionTitle>
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-5 lg:grid-cols-9">
          {useCases.map(([name, image]) => (
            <div key={name}>
              <div className="relative aspect-[1.35] overflow-hidden rounded-lg"><Image src={image} alt={`${name} use case`} fill className="object-cover" /></div>
              <p className="mt-2 text-center text-[8px] font-bold">{name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-[1360px] gap-4 px-6 py-8 md:px-10 lg:grid-cols-[.55fr_1.8fr_.7fr]">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-center text-[10px] font-bold uppercase text-[#0c327e]">AI Features</h2>
          <ul className="mt-5 space-y-3">{features.map((item) => <li key={item} className="flex gap-2 text-[8px]"><Check size={12} className="text-[#1264d8]" />{item}</li>)}</ul>
        </div>
        <div>
          <h2 className="mb-3 text-center text-[10px] font-bold uppercase text-[#0c327e]">{dashboardTitle}</h2>
          <div className="relative min-h-[340px] overflow-hidden rounded-xl bg-[#06172e]"><Image src={dashboardImage} alt={`${dashboardTitle} dashboard`} fill className="object-cover" /></div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-center text-[10px] font-bold uppercase text-[#0c327e]">{modalitiesTitle}</h2>
          <div className="mt-5 grid grid-cols-2 gap-3">
            {modalities.map((item) => <div key={item} className="rounded-lg border p-3 text-center text-[8px] font-bold text-slate-600"><CircleDot size={16} className="mx-auto mb-2 text-[#1264d8]" />{item}</div>)}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1360px] gap-4 px-6 pb-8 md:px-10 lg:grid-cols-[.75fr_1.55fr_.7fr]">
        <div className="rounded-xl border border-slate-200 bg-white p-5"><h2 className="text-center text-[10px] font-bold uppercase text-[#0c327e]">Technology Stack</h2><div className="mt-5 grid grid-cols-3 gap-3">{technologies.map((item) => <span key={item} className="rounded bg-slate-50 p-2 text-center text-[8px] font-bold">{item}</span>)}</div></div>
        <div className="rounded-xl border border-slate-200 bg-white p-5"><h2 className="text-center text-[10px] font-bold uppercase text-[#0c327e]">Our AI Workflow</h2><div className="mt-7 grid grid-cols-4 gap-4 sm:grid-cols-7">{workflow.map(([Icon, label], index) => <div key={label} className="relative text-center">{index < workflow.length - 1 && <ChevronRight size={13} className="absolute -right-2 top-5 hidden sm:block" />}<span className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-blue-50 text-[#1264d8]"><Icon size={18} /></span><p className="mt-2 text-[7px] font-bold">{label}</p></div>)}</div></div>
        <div className="rounded-xl border border-slate-200 bg-white p-5"><h2 className="text-center text-[10px] font-bold uppercase text-[#0c327e]">Why Antellay?</h2><ul className="mt-5 space-y-3">{why.map((item) => <li key={item} className="flex gap-2 text-[8px]"><Check size={12} className="text-[#1264d8]" />{item}</li>)}</ul></div>
      </section>

      <section className="mx-auto grid max-w-[1360px] gap-4 px-6 pb-10 md:px-10 lg:grid-cols-[.9fr_.65fr_1.15fr]">
        <div className="rounded-xl border border-slate-200 bg-white p-5"><h2 className="text-center text-[10px] font-bold uppercase text-[#0c327e]">Business Impact</h2><div className="mt-6 grid grid-cols-4 gap-2">{impact.map(([value, label]) => <div key={label} className="text-center"><b className="text-2xl text-[#0e52bd]">{value}</b><span className="mt-2 block text-[7px]">{label}</span></div>)}</div></div>
        <div className="rounded-xl border border-slate-200 bg-white p-5"><h2 className="text-center text-[10px] font-bold uppercase text-[#0c327e]">Frequently Asked Questions</h2>{faqs.map((q) => <details key={q} className="border-b py-2 text-[8px]"><summary>{q}</summary><p className="pt-2 text-slate-500">Yes. Our solution is modular, secure and tailored to your current ecosystem.</p></details>)}</div>
        <div className="relative min-h-[260px] overflow-hidden rounded-xl bg-[#06172e] text-white"><Image src={ctaImage} alt="AI transformation CTA" fill className="object-cover" /><div className="absolute inset-0 bg-gradient-to-r from-[#06172e] via-[#06172e]/85 to-transparent" /><div className="relative max-w-sm p-6"><h2 className="text-2xl font-bold">{ctaTitle}</h2><p className="mt-3 text-[9px] leading-4 text-white/75">{ctaCopy}</p><div className="mt-5 flex gap-2"><Link href="/contact" className="rounded bg-[#1264d8] px-4 py-2 text-[8px] font-bold">Book Free Consultation</Link><Link href="/contact" className="rounded bg-white px-4 py-2 text-[8px] font-bold text-slate-900">Schedule a Demo</Link></div></div></div>
      </section>
    </main>
  );
}
