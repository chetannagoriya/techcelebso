"use client";

import Image from "next/image";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronDown,
  Clock3,
  FileSearch,
  Headphones,
  Lightbulb,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";

const contactSteps = [
  {
    icon: FileSearch,
    title: "We review your brief",
    description: "A specialist studies your goals, scope, and timeline so the first conversation is productive.",
  },
  {
    icon: Headphones,
    title: "We schedule a discovery call",
    description: "We bring the right domain and technology experts together to explore your requirements.",
  },
  {
    icon: Lightbulb,
    title: "You receive a clear next step",
    description: "We share a practical approach, estimated engagement model, and the recommended way forward.",
  },
];

const faqs = [
  {
    question: "How quickly will I hear back?",
    answer: "Our team typically responds within one business day, Monday through Friday. Time-sensitive requests can be mentioned in your message so we can route them appropriately.",
  },
  {
    question: "What information should I include in my inquiry?",
    answer: "A short overview of your goal, current challenge, expected timeline, and any known technical requirements is enough to begin. You do not need a finished specification.",
  },
  {
    question: "Can you sign an NDA before we discuss the project?",
    answer: "Yes. Select the Mutual NDA option in the form and our team will arrange it before sensitive project details are discussed.",
  },
  {
    question: "Do you work with startups as well as enterprises?",
    answer: "Yes. We support early-stage teams validating ideas, growing companies scaling products, and enterprises modernizing complex technology and data systems.",
  },
  {
    question: "Can your team work with an existing product or codebase?",
    answer: "Yes. We can assess an existing platform, identify technical gaps, and recommend whether to improve, integrate, modernize, or rebuild specific parts.",
  },
  {
    question: "Do you support clients outside India?",
    answer: "Yes. Our team collaborates remotely with clients across time zones and can plan meetings, delivery, and communication around your working hours.",
  },
];

export default function ContactPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`${data.get("requirement")} inquiry from ${data.get("name")}`);
    const body = encodeURIComponent(
      [
        `Name: ${data.get("name")}`,
        `Company email: ${data.get("email")}`,
        `Phone: ${data.get("code")} ${data.get("phone")}`,
        `Company: ${data.get("company")}`,
        `Looking for: ${data.get("requirement")}`,
        `Mutual NDA requested: ${data.get("nda") ? "Yes" : "No"}`,
        "",
        "Message:",
        data.get("message"),
      ].join("\n")
    );

    window.location.href = `mailto:info@antellay.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="min-h-screen bg-[#f6f8fc] text-[#0B132B] dark:bg-[#071126] dark:text-white">
      <section className="relative overflow-hidden border-b border-slate-200 dark:border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_5%_5%,rgba(0,245,212,.13),transparent_26%),radial-gradient(circle_at_95%_90%,rgba(0,245,212,.10),transparent_28%)]" />
        <div className="relative mx-auto max-w-[1440px] px-5 pb-16 pt-12 sm:px-8 lg:px-12 lg:pb-24 lg:pt-16">
          <div className="mb-10 max-w-3xl lg:mb-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#00F5D4]/30 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[.16em] text-[#008D7A] shadow-sm dark:border-[#00F5D4]/20 dark:bg-white/5 dark:text-[#00F5D4]">
              <MessageCircle size={15} /> Contact us
            </span>
            <h1 className="mt-5 font-[family-name:var(--font-heading)] text-4xl font-semibold leading-[1.04] tracking-[-.045em] sm:text-5xl lg:text-6xl">
              Let&apos;s build something <span className="text-[#00A98F] dark:text-[#00F5D4]">remarkable.</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300">
              Share your challenge, idea, or product vision. Our specialists will get back to you within one business day.
            </p>
          </div>

          <div className="grid overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_30px_90px_rgba(11,19,43,.11)] dark:border-white/10 dark:bg-[#101b34] lg:grid-cols-[.82fr_1.18fr]">
            <aside className="relative overflow-hidden bg-[#0b1731] p-6 text-white sm:p-9 lg:p-11">
              <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full border-[44px] border-[#00F5D4]/10" />
              <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-[#00F5D4]/10 blur-3xl" />
              <div className="relative">
                <p className="text-xs font-bold uppercase tracking-[.18em] text-[#70EEFF]">Our office</p>
                <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-semibold tracking-tight">Meet us in the heart of Jaipur.</h2>

                <div className="relative mx-auto mt-6 aspect-square w-full max-w-[300px]">
                  <Image
                    src="/images/contact/hawa-mahal-pink-transparent.png"
                    alt="Pink line illustration of Hawa Mahal in Jaipur"
                    fill
                    priority
                    sizes="300px"
                    className="object-contain"
                  />
                </div>

                <div className="mt-6 border-y border-white/10 py-6">
                  <div className="flex gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10 text-[#70EEFF] ring-1 ring-white/10"><MapPin size={21} /></span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[.14em] text-white/48">Antellay headquarters</p>
                      <h3 className="mt-1.5 text-xl font-bold">Jaipur, India</h3>
                      <p className="mt-3 flex gap-2 text-sm leading-6 text-white/66"><MapPin className="mt-1 shrink-0 text-[#70EEFF]" size={15} />Celebso Startup Valley, Lal Kothi, Signature Tower, Jaipur</p>
                      <a href="tel:+919784626443" className="mt-2 flex w-fit items-center gap-2 text-sm font-semibold text-white transition hover:text-[#70EEFF]"><Phone size={15} className="text-[#70EEFF]" />+91 97846 26443</a>
                    </div>
                  </div>
                </div>

                <div className="mt-7 space-y-3 text-sm">
                  <a href="mailto:info@antellay.com" className="flex items-center gap-3 text-white/76 transition hover:text-white"><Mail size={17} className="text-[#70EEFF]" /> info@antellay.com</a>
                  <a href="/careers" className="flex items-center gap-3 text-white/76 transition hover:text-white"><BriefcaseBusiness size={17} className="text-[#70EEFF]" /> careers@antellay.com</a>
                </div>

                <div className="mt-9 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4"><Clock3 size={18} className="text-[#70EEFF]" /><p className="mt-3 text-sm font-semibold">Reply in 1 day</p><p className="mt-1 text-xs text-white/48">Monday–Friday</p></div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4"><ShieldCheck size={18} className="text-[#70EEFF]" /><p className="mt-3 text-sm font-semibold">Private & secure</p><p className="mt-1 text-xs text-white/48">NDA available</p></div>
                </div>
              </div>
            </aside>

            <div className="p-6 sm:p-9 lg:p-11">
              <div className="mb-8">
                <p className="text-xs font-bold uppercase tracking-[.18em] text-[#00A98F] dark:text-[#00F5D4]">Tell us about your project</p>
                <h2 className="mt-2 font-[family-name:var(--font-heading)] text-3xl font-semibold tracking-tight sm:text-4xl">How can we help?</h2>
                <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">A few details will help us connect you with the right team.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="text-sm font-semibold">Full name <span className="text-[#00A98F]">*</span><input name="name" required autoComplete="name" placeholder="Enter your full name" className="contact-field" /></label>
                  <label className="text-sm font-semibold">Company email <span className="text-[#00A98F]">*</span><input name="email" required type="email" autoComplete="email" placeholder="you@company.com" className="contact-field" /></label>
                </div>
                <div className="grid gap-5 sm:grid-cols-[130px_1fr]">
                  <label className="text-sm font-semibold">Code <span className="text-[#00A98F]">*</span><select name="code" aria-label="Country calling code" defaultValue="+91" className="contact-field"><option>+91</option><option>+1</option><option>+44</option><option>+971</option><option>+61</option></select></label>
                  <label className="text-sm font-semibold">Phone number <span className="text-[#00A98F]">*</span><input name="phone" required type="tel" autoComplete="tel" placeholder="Enter your phone number" className="contact-field" /></label>
                </div>
                <label className="block text-sm font-semibold">Company name <span className="text-[#00A98F]">*</span><input name="company" required autoComplete="organization" placeholder="Enter your company name" className="contact-field" /></label>
                <label className="block text-sm font-semibold">What are you looking for? <span className="text-[#00A98F]">*</span><select name="requirement" required defaultValue="" className="contact-field"><option value="" disabled>Select a service</option><option>AI & Data Solutions</option><option>Software Product Development</option><option>Cloud & Infrastructure</option><option>GIS & Geospatial</option><option>Cybersecurity</option><option>Technology Consulting</option><option>Other</option></select></label>
                <label className="block text-sm font-semibold">Your message <span className="text-[#00A98F]">*</span><textarea name="message" required rows={5} placeholder="Tell us about your goals, timeline, or challenge..." className="contact-field resize-none" /></label>
                <label className="flex cursor-pointer items-start gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300"><input name="nda" type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-300 accent-[#00F5D4]" /><span>Yes, send me a Mutual NDA (Non-Disclosure Agreement).</span></label>
                <div className="flex flex-col-reverse gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="flex items-center gap-2 text-xs text-slate-400"><CheckCircle2 size={15} className="text-emerald-500" /> No spam. Your details stay private.</p>
                  <button type="submit" className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#00F5D4] px-7 py-3.5 text-sm font-bold text-[#071126] shadow-lg shadow-[#00F5D4]/20 transition hover:-translate-y-0.5 hover:bg-[#70EEFF] focus:outline-none focus:ring-4 focus:ring-[#00F5D4]/20">Submit inquiry <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" /></button>
                </div>
              </form>
            </div>
          </div>

          <div className="mt-20 lg:mt-28">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-bold uppercase tracking-[.18em] text-[#00A98F] dark:text-[#00F5D4]">A simple start</p>
              <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-semibold tracking-[-.03em] sm:text-4xl">What happens after you reach out?</h2>
              <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">No long sales cycle or generic presentation. We focus the first conversation on your problem and the fastest useful next step.</p>
            </div>

            <div className="relative mt-10 grid gap-5 md:grid-cols-3">
              <div className="pointer-events-none absolute left-[16%] right-[16%] top-8 hidden border-t border-dashed border-[#00A98F]/35 md:block" />
              {contactSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <article key={step.title} className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_14px_45px_rgba(11,19,43,.06)] dark:border-white/10 dark:bg-[#101b34] sm:p-7">
                    <div className="flex items-center justify-between">
                      <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[#00F5D4]/12 text-[#008D7A] ring-1 ring-[#00A98F]/15 dark:text-[#00F5D4]"><Icon size={24} /></span>
                      <span className="font-[family-name:var(--font-heading)] text-4xl font-semibold text-slate-100 dark:text-white/10">0{index + 1}</span>
                    </div>
                    <h3 className="mt-6 text-lg font-bold">{step.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{step.description}</p>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="mt-20 grid gap-10 lg:mt-28 lg:grid-cols-[.68fr_1.32fr] lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.18em] text-[#00A98F] dark:text-[#00F5D4]">Frequently asked questions</p>
              <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-semibold tracking-[-.03em] sm:text-4xl">A few answers before we talk.</h2>
              <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">Still unsure where your request fits? Send us a short note at <a href="mailto:info@antellay.com" className="font-semibold text-[#008D7A] underline decoration-[#00A98F]/30 underline-offset-4 transition hover:text-[#00A98F] dark:text-[#00F5D4]">info@antellay.com</a> and we&apos;ll route it to the right person.</p>
              <a href="tel:+919784626443" className="mt-7 inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold shadow-sm transition hover:-translate-y-0.5 hover:border-[#00A98F] dark:border-white/15 dark:bg-white/5 dark:hover:border-[#00F5D4]"><Phone size={17} /> Call +91 97846 26443</a>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <details key={faq.question} className="group rounded-2xl border border-slate-200 bg-white px-5 shadow-[0_10px_35px_rgba(11,19,43,.045)] open:border-[#00A98F]/40 dark:border-white/10 dark:bg-[#101b34] dark:open:border-[#00F5D4]/30 sm:px-6" open={index === 0}>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 text-left font-bold marker:content-none">
                    <span>{faq.question}</span>
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-slate-100 text-slate-500 transition group-open:rotate-180 group-open:bg-[#00F5D4]/15 group-open:text-[#008D7A] dark:bg-white/10 dark:text-slate-300 dark:group-open:text-[#00F5D4]"><ChevronDown size={17} /></span>
                  </summary>
                  <p className="border-t border-slate-100 pb-5 pt-4 text-sm leading-6 text-slate-600 dark:border-white/10 dark:text-slate-400">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
