"use client";

import Image from "next/image";
import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
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
  Video,
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

          <section className="relative mt-20 overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white px-6 py-10 shadow-[0_24px_70px_rgba(11,19,43,.10)] dark:border-white/10 dark:bg-[#101b34] sm:px-10 sm:py-12 lg:mt-28 lg:px-14 lg:py-14">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_45%,rgba(0,245,212,.14),transparent_34%)]" />
            <div className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full border-[44px] border-[#00A98F]/5" />
            <div className="relative grid gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-center lg:gap-16">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-[#00A98F]/10 px-4 py-2 text-xs font-bold uppercase tracking-[.16em] text-[#008D7A] dark:bg-[#00F5D4]/10 dark:text-[#00F5D4]">
                  <CalendarDays size={15} /> Schedule a consultation
                </span>
                <h2 className="mt-5 max-w-2xl font-[family-name:var(--font-heading)] text-3xl font-semibold leading-tight tracking-[-.035em] sm:text-4xl lg:text-5xl">
                  Let&apos;s find a time that works for <span className="text-[#00A98F] dark:text-[#00F5D4]">you.</span>
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300">
                  Prefer to speak directly with our team? Schedule a free 30-minute consultation and choose a date and time that works best for you.
                </p>
                <a
                  href="https://calendly.com/space-antellay/30min"
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0b1731] px-7 py-3.5 text-sm font-bold !text-white shadow-lg shadow-[#0b1731]/20 transition hover:-translate-y-0.5 hover:bg-[#00A98F] focus:outline-none focus:ring-4 focus:ring-[#00A98F]/20 dark:bg-[#00F5D4] dark:!text-[#071126] dark:hover:bg-[#70EEFF] sm:w-auto"
                >
                  Schedule a Meeting <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>

              <div className="relative mx-auto w-full max-w-[620px] pb-4 sm:pl-10">
                <div className="absolute left-0 top-12 hidden h-[220px] w-[44%] rounded-2xl border border-slate-200 bg-slate-50 shadow-lg dark:border-white/10 dark:bg-[#14213b] sm:block">
                  <div className="flex items-center gap-3 border-b border-slate-200 p-4 dark:border-white/10">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-[#00A98F]/10 text-[#00A98F] dark:text-[#00F5D4]"><CalendarDays size={19} /></span>
                    <div className="space-y-2"><span className="block h-2 w-20 rounded bg-slate-200 dark:bg-white/10" /><span className="block h-2 w-14 rounded bg-slate-100 dark:bg-white/5" /></div>
                  </div>
                  <div className="space-y-3 p-4">{[1, 2, 3].map((item) => <div key={item} className="h-8 rounded-lg bg-white shadow-sm dark:bg-white/5" />)}</div>
                </div>

                <div className="relative ml-auto w-full rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_22px_55px_rgba(11,19,43,.16)] dark:border-white/10 dark:bg-[#0d1930] sm:w-[78%]">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4 dark:border-white/10">
                    <div><p className="text-base font-bold">Schedule a Meeting</p><p className="mt-1 text-xs text-slate-400">30 min · Online</p></div>
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-[#00A98F]/10 text-[#008D7A] dark:text-[#00F5D4]"><Video size={17} /></span>
                  </div>
                  <div className="mt-5 grid gap-5 sm:grid-cols-[1.2fr_.8fr]">
                    <div>
                      <div className="flex items-center justify-between text-xs font-bold"><span>August 2026</span><span className="text-slate-400">‹ &nbsp; ›</span></div>
                      <div className="mt-4 grid grid-cols-7 gap-1 text-center text-[10px] text-slate-400">{["S", "M", "T", "W", "T", "F", "S"].map((day, index) => <span key={`${day}-${index}`}>{day}</span>)}</div>
                      <div className="mt-2 grid grid-cols-7 gap-1 text-center text-[10px] font-medium">{Array.from({ length: 28 }, (_, index) => <span key={index} className={`grid aspect-square place-items-center rounded-full ${index === 20 ? "bg-[#00A98F] font-bold text-white dark:bg-[#00F5D4] dark:text-[#071126]" : "text-slate-600 dark:text-slate-300"}`}>{index + 1}</span>)}</div>
                    </div>
                    <div className="border-t border-slate-100 pt-4 dark:border-white/10 sm:border-l sm:border-t-0 sm:pl-4 sm:pt-0">
                      <p className="text-[11px] font-bold">Available times</p>
                      <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-1">{["10:00 AM", "11:00 AM", "01:00 PM", "03:00 PM"].map((time, index) => <span key={time} className={`rounded-md border px-2 py-2 text-center text-[10px] font-semibold ${index === 1 ? "border-[#00A98F] bg-[#00A98F] text-white dark:border-[#00F5D4] dark:bg-[#00F5D4] dark:text-[#071126]" : "border-slate-200 text-slate-600 dark:border-white/10 dark:text-slate-300"}`}>{time}</span>)}</div>
                    </div>
                  </div>
                  <div className="mt-5 h-9 rounded-lg bg-gradient-to-r from-[#00A98F] to-[#00D9BC] text-center text-[11px] font-bold leading-9 text-white">Confirm meeting</div>
                </div>
              </div>
            </div>
          </section>

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
