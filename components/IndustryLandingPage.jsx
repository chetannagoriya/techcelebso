import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, ChevronRight, CircleDot } from "lucide-react";
import TechStackMarquee from "./TechStackMarquee";
import TrustedOrganizationsMarquee from "./TrustedOrganizationsMarquee";
import UseCasesMarquee from "./UseCasesMarquee";

const SectionTitle = ({ children }) => (
  <h2 className="mb-5 text-center text-[11px] font-extrabold uppercase tracking-[.08em] text-[#008D7A] dark:text-[#00F5D4]">
    {children}
  </h2>
);

export default function IndustryLandingPage({ config }) {
  const {
    eyebrow, title, highlight, description, hero, dashboardImage, ctaImage, dashboardTitle,
    badges, logos, challenges, challengeImage, solutions, useCases, features,
    technologies, workflow, modalitiesTitle, modalities, ctaTitle, ctaCopy,
    accent = "#00A98F"
  } = config;
  return (
    <main className="bg-[#fcfdff] text-[#0b1d3a] dark:bg-[#071126] dark:text-white">
      <section className="relative overflow-hidden border-b border-[#CCFBF1]">
        <Image src={hero} alt={`${title} hero`} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#fff_0%,rgba(255,255,255,.98)_36%,rgba(255,255,255,.22)_70%,rgba(255,255,255,.04)_100%)]" />
        <div className="relative mx-auto grid min-h-[570px] max-w-[1440px] items-center gap-8 px-6 py-10 md:px-10 lg:grid-cols-[.95fr_1.05fr] lg:px-14">
          <div>
            <span className="rounded bg-[#E6FFFB] px-3 py-1.5 text-[10px] font-bold uppercase text-[#008D7A]">{eyebrow}</span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-[-.04em] sm:text-5xl lg:text-[52px]">
              {title}<span className="block text-[#00A98F] dark:text-[#00F5D4]">{highlight}</span>
            </h1>
            <p className="mt-5 max-w-[520px] text-sm leading-7 text-slate-700">{description}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-md bg-[#00A98F] px-5 py-3 text-xs font-bold text-white transition hover:bg-[#00D9BD]">Book Free Consultation <ArrowRight size={14} /></Link>
            </div>
          </div>
        </div>
        <div className="industry-hero-icon-strip relative mx-auto grid max-w-[1200px] grid-cols-4 gap-3 px-6 pb-7 sm:grid-cols-8" style={{ position: "absolute", bottom: 0, left: "50%", zIndex: 20, width: "min(1200px, calc(100% - 3rem))", minHeight: 78, margin: 0, transform: "translateX(-50%)" }}>
          {badges.map(([Icon, label]) => (
            <div key={label} className="text-center">
              <Icon size={20} className="mx-auto text-[#00A98F] dark:text-[#00F5D4]" />
              <span className="mt-2 block text-[8px] font-semibold">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1360px] px-6 py-5 md:px-10">
        <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
          <p className="text-center text-[10px] font-bold uppercase text-[#008D7A] dark:text-[#00F5D4]">Trusted by leading organizations</p>
          <TrustedOrganizationsMarquee organizations={logos} />
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
                <Icon size={20} className="text-[#00A98F] dark:text-[#00F5D4]" />
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
                <div className="flex items-center gap-2"><Icon size={18} className="text-[#00A98F] dark:text-[#00F5D4]" /><h3 className="text-xs font-bold">{name}</h3></div>
                <ul className="mt-3 space-y-2 text-[8px] text-slate-600">
                  {items.map((item) => <li key={item} className="flex gap-2"><Check size={11} className="text-[#00A98F] dark:text-[#00F5D4]" />{item}</li>)}
                </ul>
                <Link href="/contact" className="mt-4 inline-flex items-center gap-1 text-[9px] font-bold text-[#008D7A] dark:text-[#00F5D4]">Explore Solution <ArrowRight size={11} /></Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-8 md:px-10">
        <SectionTitle>Use Cases</SectionTitle>
        <UseCasesMarquee useCases={useCases} />
      </section>

      <section className="mx-auto grid max-w-[1360px] gap-4 px-6 py-8 md:px-10 lg:grid-cols-[.55fr_1.8fr_.7fr]">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-center text-[10px] font-bold uppercase text-[#0c327e]">AI Features</h2>
          <ul className="mt-5 space-y-3">{features.map((item) => <li key={item} className="flex gap-2 text-[8px]"><Check size={12} className="text-[#00A98F] dark:text-[#00F5D4]" />{item}</li>)}</ul>
        </div>
        <div>
          <h2 className="mb-3 text-center text-[10px] font-bold uppercase text-[#0c327e]">{dashboardTitle}</h2>
          <div className="relative min-h-[340px] overflow-hidden rounded-xl bg-[#06172e]"><Image src={dashboardImage} alt={`${dashboardTitle} dashboard`} fill className="object-cover" /></div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-center text-[10px] font-bold uppercase text-[#0c327e]">{modalitiesTitle}</h2>
          <div className="mt-5 grid grid-cols-2 gap-3">
            {modalities.map((item) => <div key={item} className="rounded-lg border p-3 text-center text-[8px] font-bold text-slate-600"><CircleDot size={16} className="mx-auto mb-2 text-[#00A98F] dark:text-[#00F5D4]" />{item}</div>)}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1360px] gap-4 px-6 pb-8 md:px-10">
        <div className="rounded-xl border border-slate-200 bg-white p-5"><h2 className="text-center text-[10px] font-bold uppercase text-[#008D7A] dark:text-[#00F5D4]">Technology Stack</h2><TechStackMarquee technologies={technologies} /></div>
        <div className="rounded-xl border border-slate-200 bg-white p-5"><h2 className="text-center text-[10px] font-bold uppercase text-[#008D7A] dark:text-[#00F5D4]">Our AI Workflow</h2><div className="mt-7 grid grid-cols-4 gap-4 sm:grid-cols-7">{workflow.map(([Icon, label], index) => <div key={label} className="relative text-center">{index < workflow.length - 1 && <ChevronRight size={13} className="absolute -right-2 top-5 hidden text-[#00A98F] sm:block" />}<span className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-[#E6FFFB] text-[#00A98F] dark:bg-[#00F5D4]/10 dark:text-[#00F5D4]"><Icon size={18} /></span><p className="mt-2 text-[7px] font-bold">{label}</p></div>)}</div></div>
      </section>

      <section className="mx-auto max-w-[1360px] px-6 pb-10 md:px-10">
        <div className="relative min-h-[260px] overflow-hidden rounded-xl bg-[#06172e] text-white"><Image src={ctaImage} alt="AI transformation CTA" fill className="object-cover" /><div className="absolute inset-0 bg-gradient-to-r from-[#06172e] via-[#06172e]/85 to-transparent" /><div className="relative max-w-sm p-6"><h2 className="text-2xl font-bold">{ctaTitle}</h2><p className="mt-3 text-[9px] leading-4 text-white/75">{ctaCopy}</p><div className="mt-5 flex gap-2"><Link href="/contact" className="rounded bg-[#00A98F] px-4 py-2 text-[8px] font-bold transition hover:bg-[#00D9BD]">Book Free Consultation</Link></div></div></div>
      </section>
    </main>
  );
}
