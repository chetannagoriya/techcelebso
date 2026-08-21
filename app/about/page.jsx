import Link from "next/link";
import {
  ArrowUpRight,
  BadgeCheck,
  BrainCircuit,
  HeartHandshake,
  Lightbulb,
  MessagesSquare,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";

const milestones = [
  { year: "2019", title: "The first bold step", text: "Antellay began with a small team and a clear belief: technology should create meaningful human progress." },
  { year: "2020", title: "Building our foundation", text: "We expanded our engineering practice and helped ambitious businesses turn complex ideas into dependable products." },
  { year: "2022", title: "Growing across industries", text: "Our work grew across cloud, AI, data, cybersecurity, and digital transformation." },
  { year: "2024", title: "From services to ecosystems", text: "We launched focused products and partnerships designed to create value beyond a single engagement." },
  { year: "Today", title: "Creating what is next", text: "We continue to bring strategy, design, and engineering together for organizations ready to move forward." },
];

const values = [
  { icon: HeartHandshake, title: "Customer Success", text: "We measure our work by the lasting outcomes it creates for the people and businesses we serve." },
  { icon: Lightbulb, title: "Innovation With Purpose", text: "We explore new possibilities, but always connect innovation to a practical human or business need." },
  { icon: ShieldCheck, title: "Trust & Accountability", text: "We communicate honestly, protect what matters, and take ownership from the first conversation to delivery." },
  { icon: UsersRound, title: "Team Spirit", text: "The strongest ideas emerge when diverse minds solve problems together with generosity and respect." },
  { icon: BrainCircuit, title: "Continuous Learning", text: "Curiosity keeps us relevant. We learn rapidly, share openly, and improve with every challenge." },
  { icon: MessagesSquare, title: "Clear Communication", text: "We make complexity understandable and keep every stakeholder aligned throughout the journey." },
];

const gallery = [
  { src: "/images/about/gallery/antellay-gallery-01.jfif", alt: "Life at Antellay gallery photo one" },
  { src: "/images/about/gallery/antellay-gallery-02.jfif", alt: "Life at Antellay gallery photo two" },
  { src: "/images/about/gallery/antellay-gallery-03.jfif", alt: "Life at Antellay gallery photo three" },
  { src: "/images/about/gallery/antellay-gallery-04.jfif", alt: "Life at Antellay gallery photo four" },
  { src: "/images/about/gallery/antellay-gallery-05.jfif", alt: "Life at Antellay gallery photo five" },
  { src: "/images/about/gallery/antellay-gallery-06.jfif", alt: "Life at Antellay gallery photo six" },
];

const faqs = [
  ["What does Antellay do?", "Antellay helps organizations design, build, and scale digital solutions across AI, cloud, data, cybersecurity, product engineering, and consulting."],
  ["Where does Antellay work?", "We are based in India and collaborate with ambitious teams across markets through flexible, distributed delivery."],
  ["What makes Antellay different?", "We combine industry understanding, thoughtful design, and strong engineering while keeping people and measurable outcomes at the center."],
  ["How can I work with Antellay?", "Tell us about your goal through our contact page. We will connect you with the right specialists for a focused first conversation."],
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-white text-[#0B132B] transition-colors dark:bg-[#081126] dark:text-white">
      <section className="relative border-b border-slate-200 bg-[#F7F9FC] px-6 pb-16 pt-8 dark:border-white/10 dark:bg-[#0B132B] md:pb-20 md:pt-10 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(0,169,143,0.14),transparent_30%),radial-gradient(circle_at_5%_90%,rgba(0,245,212,0.08),transparent_28%)]" />
        <div className="relative mx-auto max-w-[1280px]">
          <div className="mb-10 max-w-4xl md:mb-14">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#00A98F]/20 bg-white px-4 py-2 text-sm font-semibold text-[#008D7A] shadow-sm dark:border-[#00F5D4]/20 dark:bg-white/5 dark:text-[#00F5D4]">
              <Sparkles size={16} />
              About Antellay
            </div>
            <h1 className="font-[family-name:var(--font-heading)] text-5xl font-semibold leading-[1.02] tracking-[-0.045em] md:text-7xl lg:text-[5.5rem]">
              Being true to our values in{" "}
              <span className="text-[#00A98F] dark:text-[#00F5D4]">everything we create.</span>
            </h1>
          </div>
          <div className="relative h-[340px] overflow-hidden rounded-[1.75rem] shadow-[0_28px_80px_rgba(11,19,43,0.16)] md:h-[520px]">
            <video
              src="/videos/about-people-progress.mp4"
              className="h-full w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              aria-label="Technology designed around people and progress"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#081126]/70 via-transparent to-transparent" />
            <p className="absolute bottom-6 left-6 max-w-xl text-lg font-medium leading-7 text-white md:bottom-10 md:left-10 md:text-2xl">
              We design technology around people, progress, and lasting partnerships.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-20 lg:px-10">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#00A98F] dark:text-[#00F5D4]">Our Story</p>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-4xl font-semibold tracking-tight md:text-5xl">
              A human idea, built through technology.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
            <p>
              Antellay started with a simple conviction: powerful technology matters most when it improves how people live, work, and grow.
            </p>
            <p>
              Today, we bring together strategists, designers, engineers, and domain thinkers to solve complex challenges with clarity. We do not stop at delivering software—we build relationships, capability, and momentum that last.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#0B132B] px-6 py-16 text-white md:py-20 lg:px-10">
        <div className="mx-auto grid max-w-[1180px] gap-px overflow-hidden rounded-[1.5rem] bg-white/15 lg:grid-cols-2">
          <article className="bg-[#111D37] p-8 md:p-12">
            <BadgeCheck className="mb-8 text-[#00F5D4]" size={34} />
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#00F5D4]">Our Mission</p>
            <h2 className="mt-4 font-[family-name:var(--font-heading)] text-3xl font-semibold md:text-4xl">Turn technology into tangible progress.</h2>
            <p className="mt-5 leading-7 text-slate-300">
              We help organizations create smarter processes, stronger products, and better experiences by combining the right people, insight, and technology.
            </p>
          </article>
          <article className="bg-[#111D37] p-8 md:p-12">
            <ArrowUpRight className="mb-8 text-[#00F5D4]" size={34} />
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#00F5D4]">Our Vision</p>
            <h2 className="mt-4 font-[family-name:var(--font-heading)] text-3xl font-semibold md:text-4xl">Shape a future where innovation serves everyone.</h2>
            <p className="mt-5 leading-7 text-slate-300">
              We aspire to become a trusted global technology partner known for challenging convention, creating responsibly, and building connections that endure.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-[#F7F9FC] px-6 py-16 dark:bg-[#0B132B] md:py-20 lg:px-10">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#00A98F] dark:text-[#00F5D4]">Our History</p>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-4xl font-semibold tracking-tight md:text-5xl">The milestones that shaped us.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {milestones.map((milestone, index) => (
              <article key={milestone.year} className="relative rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-[#111D37]">
                <span className="mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-[#00A98F] text-sm font-bold text-white dark:bg-[#00F5D4] dark:text-[#081126]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm font-bold text-[#00A98F] dark:text-[#00F5D4]">{milestone.year}</p>
                <h3 className="mt-2 text-xl font-bold">{milestone.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">{milestone.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-20 lg:px-10">
        <div className="mx-auto max-w-[1180px]">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#00A98F] dark:text-[#00F5D4]">Our Values</p>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-4xl font-semibold tracking-tight md:text-5xl">The principles behind every decision.</h2>
            <p className="mt-5 leading-7 text-slate-600 dark:text-slate-400">They guide how we collaborate, solve, deliver, and grow together.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {values.map(({ icon: Icon, title, text }) => (
              <article key={title} className="group rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-[#00A98F]/40 hover:shadow-xl dark:border-white/10 dark:bg-[#111D37]">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#00A98F]/10 text-[#00A98F] dark:bg-[#00F5D4]/10 dark:text-[#00F5D4]">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 md:pb-20 lg:px-10">
        <div className="mx-auto overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-[#00A98F] to-[#0B132B] p-8 text-white md:p-12 lg:max-w-[1280px]">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <p className="inline-flex rounded-full border-2 border-white bg-[#00F5D4] px-5 py-2.5 text-sm font-bold uppercase tracking-[0.16em] text-[#081126] shadow-lg">
                Community &amp; Work
              </p>
              <h2 className="mt-4 max-w-3xl font-[family-name:var(--font-heading)] text-4xl font-semibold tracking-tight md:text-5xl">
                Great work grows from strong communities.
              </h2>
              <p className="mt-5 max-w-2xl leading-7 text-[#CCFBF1]">
                We grow with our clients, collaborators, and people by sharing knowledge and creating value that reaches beyond the project.
              </p>
              <Link
                href="/careers"
                className="group mt-8 inline-flex w-full items-center justify-center gap-3 rounded-xl border-2 border-white bg-[#00F5D4] px-7 py-4 text-base font-bold text-[#081126] shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:bg-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#00F5D4]/50 sm:w-auto"
              >
                Join our team
                <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {[["20+", "Industries"], ["25+", "Capabilities"], ["100%", "Commitment"]].map(([number, label]) => (
                <div key={label} className="rounded-2xl border border-white/15 bg-white/10 p-4 text-center backdrop-blur md:p-6">
                  <p className="text-2xl font-bold md:text-4xl">{number}</p>
                  <p className="mt-2 text-xs text-[#CCFBF1] md:text-sm">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F9FC] px-6 py-16 dark:bg-[#0B132B] md:py-20 lg:px-10">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#00A98F] dark:text-[#00F5D4]">Gallery</p>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-4xl font-semibold tracking-tight md:text-5xl">Life behind the work.</h2>
          </div>
          <div className="grid auto-rows-[260px] gap-4 md:grid-cols-2 lg:grid-cols-3">
            {gallery.map((image) => (
              <div key={image.src} className="group overflow-hidden rounded-2xl bg-slate-200">
                <img src={image.src} alt={image.alt} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-20 lg:px-10">
        <div className="mx-auto grid max-w-[1080px] gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#00A98F] dark:text-[#00F5D4]">Frequently Asked Questions</p>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-4xl font-semibold tracking-tight">A little more about us.</h2>
          </div>
          <div className="space-y-3">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group rounded-2xl border border-slate-200 bg-white p-6 open:shadow-lg dark:border-white/10 dark:bg-[#111D37]">
                <summary className="cursor-pointer list-none pr-6 font-semibold marker:hidden">{question}</summary>
                <p className="mt-4 border-t border-slate-100 pt-4 leading-7 text-slate-600 dark:border-white/10 dark:text-slate-400">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-[#F7F9FC] px-6 py-16 text-center dark:border-white/10 dark:bg-[#0B132B] md:py-20">
        <p className="inline-flex rounded-full border-2 border-[#0B132B] bg-[#0B132B] px-5 py-2.5 text-sm font-bold uppercase tracking-[0.16em] text-white shadow-md dark:border-white dark:bg-white dark:text-[#081126]">
          Start a conversation
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl font-[family-name:var(--font-heading)] text-4xl font-semibold tracking-tight md:text-5xl">Become a next-generation business with us.</h2>
        <Link
          href="/contact"
          className="group mx-auto mt-8 flex w-full max-w-sm items-center justify-center gap-3 rounded-xl border-2 border-[#00A98F] bg-[#00A98F] px-8 py-4 text-base font-bold text-white shadow-xl shadow-[#00A98F]/25 transition hover:-translate-y-1 hover:border-[#0B132B] hover:bg-[#0B132B] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#00A98F]/30 dark:border-[#00F5D4] dark:bg-[#00F5D4] dark:text-[#081126] dark:hover:border-white dark:hover:bg-white sm:w-fit"
        >
          Let&apos;s talk
          <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </section>
    </main>
  );
}
