"use client";

import { useState } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  Clock3,
  Mail,
  MapPin,
  MessageSquareText,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const faqs = [
  {
    question: "What happens after I send an inquiry?",
    answer:
      "A member of our team reviews your requirements and connects you with the right specialist for a focused first conversation.",
  },
  {
    question: "Can you work with an existing product or engineering team?",
    answer:
      "Yes. We can own a complete workstream or work alongside your internal team across strategy, design, engineering, cloud, AI, and data.",
  },
  {
    question: "Do you take on early-stage ideas?",
    answer:
      "Yes. We can help shape an idea into a practical roadmap, validate the technical approach, and build a focused first release.",
  },
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Project inquiry from ${data.get("name")}`);
    const body = encodeURIComponent(
      [
        `Name: ${data.get("name")}`,
        `Work email: ${data.get("email")}`,
        "",
        "Project details:",
        data.get("message"),
      ].join("\n")
    );

    window.location.href = `mailto:info@antellay.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#F7F9FC] text-[#0B132B] transition-colors duration-300 dark:bg-[#081126] dark:text-white">
      <section className="relative border-b border-[#DDE5F0] dark:border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_12%,rgba(58,134,255,0.16),transparent_32%),radial-gradient(circle_at_10%_70%,rgba(0,245,212,0.08),transparent_28%)]" />
        <div className="relative mx-auto grid max-w-[1280px] gap-12 px-6 pb-16 pt-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20 lg:px-10 lg:pb-24 lg:pt-10">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#3A86FF]/20 bg-white/70 px-4 py-2 text-sm font-semibold text-[#246FDD] shadow-sm backdrop-blur dark:border-[#00F5D4]/20 dark:bg-white/5 dark:text-[#00F5D4]">
              <Sparkles size={16} />
              Start a conversation
            </div>
            <h1 className="max-w-2xl font-[family-name:var(--font-heading)] text-5xl font-semibold leading-[1.02] tracking-[-0.045em] md:text-7xl">
              Let&apos;s turn your next idea into{" "}
              <span className="text-[#3A86FF] dark:text-[#00F5D4]">real impact.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Tell us what you&apos;re building, improving, or trying to solve. We&apos;ll bring the right people
              to the first conversation.
            </p>

            <div className="mt-10 grid max-w-xl gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 rounded-lg bg-[#3A86FF]/10 p-2 text-[#3A86FF] dark:bg-[#00F5D4]/10 dark:text-[#00F5D4]">
                  <Clock3 size={18} />
                </div>
                <div>
                  <p className="font-semibold">Quick first response</p>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Typically within one business day</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-0.5 rounded-lg bg-[#3A86FF]/10 p-2 text-[#3A86FF] dark:bg-[#00F5D4]/10 dark:text-[#00F5D4]">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <p className="font-semibold">Your idea stays yours</p>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Handled privately and responsibly</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-[#3A86FF]/20 to-[#00F5D4]/10 blur-2xl" />
            <div className="relative rounded-[1.75rem] border border-white/70 bg-white p-6 shadow-[0_28px_80px_rgba(11,19,43,0.14)] dark:border-white/10 dark:bg-[#111D37] md:p-9">
              <div className="mb-8">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#3A86FF] dark:text-[#00F5D4]">
                  Quick inquiry
                </p>
                <h2 className="mt-2 font-[family-name:var(--font-heading)] text-3xl font-semibold tracking-tight">
                  Start with a short note
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
                  No long questionnaire. Share the essentials and we&apos;ll take it from there.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="text-sm font-semibold">
                    Your name
                    <input name="name" required autoComplete="name" placeholder="Full name" className="contact-field" />
                  </label>
                  <label className="text-sm font-semibold">
                    Work email
                    <input name="email" required type="email" autoComplete="email" placeholder="you@company.com" className="contact-field" />
                  </label>
                </div>

                <label className="block text-sm font-semibold">
                  How can we help?
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us briefly about your idea or challenge..."
                    className="contact-field resize-none"
                  />
                </label>

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#0B132B] px-6 py-4 font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#17264B] focus:outline-none focus:ring-4 focus:ring-[#3A86FF]/20 dark:bg-[#00F5D4] dark:text-[#081126] dark:hover:bg-[#6FFFE9]"
                >
                  Send your message
                  <ArrowRight size={19} className="transition-transform group-hover:translate-x-1" />
                </button>
                <p className="text-center text-xs leading-5 text-slate-400">
                  This opens your email app with the project details pre-filled.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#3A86FF] dark:text-[#00F5D4]">
              Other ways to connect
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-4xl font-semibold tracking-tight">
              Find the right starting point.
            </h2>
            <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
              Prefer a direct route? Reach our team by email or explore opportunities to work with us.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <a href="mailto:info@antellay.com" className="contact-option-card group">
              <Mail size={24} />
              <h3>Business inquiries</h3>
              <p>info@antellay.com</p>
              <ArrowRight className="mt-auto transition-transform group-hover:translate-x-1" size={18} />
            </a>
            <a href="/careers" className="contact-option-card group">
              <BriefcaseBusiness size={24} />
              <h3>Join our team</h3>
              <p>Explore open roles and build what&apos;s next with us.</p>
              <ArrowRight className="mt-auto transition-transform group-hover:translate-x-1" size={18} />
            </a>
            <div className="contact-option-card">
              <MapPin size={24} />
              <h3>Based in India</h3>
              <p>Collaborating with ambitious teams across markets.</p>
              <MessageSquareText className="mt-auto" size={18} />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#DDE5F0] bg-white/60 dark:border-white/10 dark:bg-white/[0.025]">
        <div className="mx-auto grid max-w-[1080px] gap-10 px-6 py-20 lg:grid-cols-[0.75fr_1.25fr] lg:px-10 lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#3A86FF] dark:text-[#00F5D4]">Good to know</p>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-4xl font-semibold tracking-tight">Before we talk.</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={faq.question} className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-white/10 dark:bg-[#111D37]">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left font-semibold"
                  >
                    {faq.question}
                    <span className={`text-2xl font-light text-[#3A86FF] transition-transform dark:text-[#00F5D4] ${isOpen ? "rotate-45" : ""}`}>+</span>
                  </button>
                  <div className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 leading-7 text-slate-600 dark:text-slate-400">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
