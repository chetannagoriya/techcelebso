import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart3, Brain, Building2, Clock, Eye, Mail, MapPin, Search, Sparkles, Tag, Workflow } from "lucide-react";

export const metadata = {
  title: "Our Blog | Antellay Resources",
  description: "Expert insights on AI, data, GIS and engineering from Antellay.",
};

const categories = [
  [Brain, "AI & Machine Learning", "24"],
  [MapPin, "GIS & Mapping", "18"],
  [Tag, "Data Annotation", "22"],
  [Eye, "Computer Vision", "16"],
  [Building2, "Enterprise Software", "20"],
  [Workflow, "Automation", "15"],
  [BarChart3, "Industry Insights", "30"],
];

const posts = [
  ["/images/robot_ai_head.jpg", "AI AGENTS", "Building AI Agents for Enterprise Success", "Learn how AI agents automate workflows, improve efficiency and drive real business outcomes.", "May 28, 2026"],
  ["/images/automotive/automotive-hero.png", "COMPUTER VISION", "Complete Guide to Image Annotation", "Bounding box vs polygon vs segmentation — everything you need to know.", "May 24, 2026"],
  ["/images/industry-showcases/government-smart-cities.png", "GIS", "The Future of GIS in Smart Cities", "How geospatial intelligence drives better planning and sustainable futures.", "May 20, 2026"],
  ["/images/consumer-technology/saas-platforms.png", "ENTERPRISE", "CRM + AI = Smarter Business Decisions", "Integrating AI into CRM helps businesses personalize and increase conversions.", "May 16, 2026"],
  ["/images/manufacturing/manufacturing-hero.png", "MANUFACTURING", "Predictive Maintenance with AI", "Reduce downtime, optimize assets and prevent failures before they happen.", "May 14, 2026"],
  ["/images/healthcare/healthcare-dashboard.png", "HEALTHCARE", "AI in Healthcare and Medical Imaging", "Computer vision and AI are transforming diagnostics and patient care.", "May 12, 2026"],
  ["/images/retail-ecommerce/retail-hero.png", "RETAIL", "Recommendation Systems That Sell", "Discover how AI personalization increases engagement and conversions.", "May 10, 2026"],
  ["/images/agriculture-ai-hero.png", "AGRICULTURE", "AI in Precision Agriculture", "Using satellite data and AI to improve crop yield and support sustainable farming.", "May 8, 2026"],
];

const chips = ["AI Agents", "LLM", "Computer Vision", "GIS", "Data Annotation", "Automation", "NLP", "OCR", "Data Labeling", "Predictive Analytics"];

function CategoryPill({ Icon, label, count }) {
  return (
    <div className="group flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition hover:-translate-y-0.5 hover:border-[#00A98F]/40 hover:shadow-md dark:border-white/10 dark:bg-[#111D37] dark:hover:border-[#00F5D4]/40">
      <span className="flex items-center gap-3 text-sm font-bold"><span className="grid h-8 w-8 place-items-center rounded-lg bg-[#00A98F]/10 text-[#008D7A] dark:bg-[#00F5D4]/10 dark:text-[#00F5D4]"><Icon size={18} /></span>{label}</span>
      <span className="text-xs font-bold text-slate-500 dark:text-slate-400">{count}</span>
    </div>
  );
}

export default function BlogPage() {
  return (
    <main className="bg-[#f7fbff] text-[#07152f] transition-colors duration-300 dark:bg-[#071126] dark:text-white">
      <section className="relative overflow-hidden px-7 pb-12 pt-12 lg:px-14">
        <div className="absolute left-0 top-0 h-56 w-56 rounded-full bg-emerald-100 blur-3xl dark:bg-[#00F5D4]/10" />
        <div className="absolute right-20 top-4 h-[420px] w-[420px] rounded-full bg-[#00F5D4]/10 blur-3xl dark:bg-[#00A98F]/10" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-cyan-100 blur-3xl dark:bg-cyan-400/5" />
        <div className="relative mx-auto grid max-w-[1320px] items-center gap-10 lg:grid-cols-[.48fr_.52fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[.12em] text-[#008D7A] dark:text-[#00F5D4]">Our Blog</p>
            <h1 className="mt-4 text-[58px] font-black leading-[.98] tracking-[-.06em] md:text-[78px]">
              Insights. Innovation. <span className="text-[#00A98F] dark:text-[#00F5D4]">Impact.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-700 dark:text-slate-300">
              Stay ahead with expert insights on AI, data, GIS and engineering. Strategies, trends and real-world solutions to help you build smarter, more scalable outcomes.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="#articles" className="inline-flex items-center gap-2 rounded-md bg-[#00A98F] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-[#00A98F]/20 transition hover:bg-[#008D7A] dark:bg-[#00F5D4] dark:text-[#071126] dark:hover:bg-[#70EEFF]">Explore Articles <ArrowRight size={16} /></Link>
              <Link href="#subscribe" className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-7 py-4 text-sm font-bold shadow-sm transition hover:border-[#00A98F] dark:border-white/15 dark:bg-white/5 dark:hover:border-[#00F5D4]">Subscribe <Mail size={16} /></Link>
            </div>
          </div>
          <div className="relative min-h-[350px] overflow-hidden rounded-[2rem] bg-[#071124] shadow-2xl shadow-[#00A98F]/10 dark:shadow-black/30">
            <Image src="/images/gis_cta_satellite.jpg" alt="Global technology insights" fill priority sizes="50vw" className="object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#071124]/15 via-transparent to-[#071124]/25" />
            <div className="absolute right-8 top-16 w-80 rounded-2xl border border-white/15 bg-[#071124]/82 p-5 text-white shadow-2xl backdrop-blur">
              {["AI Solutions", "Data That Delivers", "GIS That Maps Possibilities", "Engineering That Builds Tomorrow"].map((item) => (
                <p key={item} className="mb-4 flex items-center gap-3 rounded-xl bg-white/5 px-3 py-2 text-sm last:mb-0"><Sparkles size={16} className="text-emerald-300" />{item}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1320px] gap-6 px-7 pb-10 lg:grid-cols-[1fr_340px] lg:px-14">
        <article className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/70 dark:border-white/10 dark:bg-[#111D37] dark:shadow-black/20 md:grid-cols-[.48fr_.52fr]">
          <div className="relative min-h-[315px]">
            <Image src="/images/robot_ai_head.jpg" alt="Featured AI article" fill sizes="520px" className="object-cover" />
            <span className="absolute left-6 top-6 rounded-md bg-[#00A98F] px-4 py-2 text-xs font-bold text-white dark:bg-[#00F5D4] dark:text-[#071126]">FEATURED</span>
          </div>
          <div className="flex flex-col justify-center p-8">
            <h2 className="text-3xl font-black leading-tight tracking-[-.035em]">AI Agents Are Redefining Enterprise Operations in 2026</h2>
            <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-300">From automating complex workflows to making data-driven decisions in real-time, AI agents are helping businesses operate smarter, faster and at scale.</p>
            <p className="mt-6 flex flex-wrap gap-3 text-xs text-slate-500 dark:text-slate-400"><span>8 Min Read</span><span>•</span><span>AI Agents</span><span>•</span><span>May 28, 2026</span></p>
            <Link href="/contact" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#008D7A] dark:text-[#00F5D4]">Read Article <ArrowRight size={15} /></Link>
          </div>
        </article>

        <aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/70 dark:border-white/10 dark:bg-[#111D37] dark:shadow-black/20">
          <div className="flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-400 dark:border-white/10">Search articles... <Search size={18} className="ml-auto text-slate-800 dark:text-slate-200" /></div>
          <div className="mt-5 flex items-center justify-between"><b>Categories</b><Link href="#categories" className="text-sm text-[#008D7A] dark:text-[#00F5D4]">View all →</Link></div>
          <div className="mt-4 space-y-2">{categories.map(([Icon, label, count]) => <CategoryPill key={label} Icon={Icon} label={label} count={count} />)}</div>
        </aside>
      </section>

      <section className="mx-auto max-w-[1320px] px-7 pb-10 lg:px-14" id="categories">
        <div className="mb-6">
          <p className="text-xs font-black uppercase tracking-[.16em] text-[#008D7A] dark:text-[#00F5D4]">Explore our expertise</p>
          <h2 className="mt-2 text-3xl font-black tracking-[-.03em]">Browse by Category</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Find practical insights for the technology and business challenges that matter to you.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map(([Icon, label, count]) => (
            <Link href="#articles" key={label} className="group flex min-h-28 items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#00A98F]/40 hover:shadow-lg dark:border-white/10 dark:bg-[#111D37] dark:hover:border-[#00F5D4]/40">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#00A98F]/10 text-[#008D7A] transition group-hover:bg-[#00A98F] group-hover:text-white dark:bg-[#00F5D4]/10 dark:text-[#00F5D4] dark:group-hover:bg-[#00F5D4] dark:group-hover:text-[#071126]"><Icon size={22} /></span>
              <span className="min-w-0 flex-1">
                <span className="block text-base font-black leading-snug">{label}</span>
                <span className="mt-1 block text-xs font-medium text-slate-500 dark:text-slate-400">{count} articles</span>
              </span>
              <ArrowRight size={17} className="shrink-0 text-slate-300 transition group-hover:translate-x-1 group-hover:text-[#00A98F] dark:text-white/20 dark:group-hover:text-[#00F5D4]" />
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-7 pb-10 lg:px-14" id="articles">
        <div className="mb-6 flex items-center justify-between"><h2 className="text-2xl font-black">Latest Articles</h2><Link href="/contact" className="text-sm font-bold text-[#008D7A] dark:text-[#00F5D4]">View All →</Link></div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {posts.map(([image, tag, title, copy, date]) => (
            <article key={title} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-[#111D37] dark:hover:border-[#00F5D4]/30">
              <div className="relative h-44 overflow-hidden">
                <Image src={image} alt={title} fill sizes="300px" className="object-cover transition duration-500 group-hover:scale-105" />
                <span className="absolute bottom-3 left-3 rounded bg-white/90 px-3 py-1 text-[10px] font-bold text-[#008D7A] dark:bg-[#071126]/90 dark:text-[#00F5D4]">{tag}</span>
              </div>
              <div className="p-5">
                <h3 className="text-base font-black leading-snug">{title}</h3>
                <p className="mt-3 text-xs leading-6 text-slate-600 dark:text-slate-300">{copy}</p>
                <p className="mt-4 flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400"><Clock size={13} /> 6 Min Read • {date}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-[1320px] gap-5 px-7 pb-14 lg:px-14">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-[#111D37]">
          <div className="grid lg:grid-cols-[280px_1fr]">
            <div className="bg-gradient-to-br from-[#071124] to-[#102746] p-6 text-white sm:p-7">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#00F5D4]/12 text-[#00F5D4] ring-1 ring-[#00F5D4]/20"><Tag size={20} /></span>
              <h2 className="mt-5 text-2xl font-black">Trending Topics</h2>
              <p className="mt-2 text-base leading-7 text-white/65">Explore the technologies and ideas shaping smarter businesses.</p>
            </div>
            <div className="grid grid-cols-2 gap-3 p-5 sm:grid-cols-3 sm:p-7 lg:grid-cols-5">
              {chips.map((chip, index) => (
                <span key={chip} className="group flex min-h-16 items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold transition hover:-translate-y-0.5 hover:border-[#00A98F]/40 hover:bg-[#00A98F]/5 hover:text-[#008D7A] dark:border-white/10 dark:bg-white/5 dark:hover:border-[#00F5D4]/40 dark:hover:bg-[#00F5D4]/5 dark:hover:text-[#00F5D4]">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#00A98F]/10 text-[11px] font-black text-[#008D7A] dark:bg-[#00F5D4]/10 dark:text-[#00F5D4]">{String(index + 1).padStart(2, "0")}</span>
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
        <div className="flex flex-col rounded-2xl border border-[#00A98F]/20 bg-[#00A98F]/8 p-6 shadow-sm dark:border-[#00F5D4]/20 dark:bg-[#00F5D4]/8 sm:p-7" id="subscribe">
          <div>
            <h2 className="flex items-center gap-2 text-xl font-black"><Mail className="text-[#008D7A] dark:text-[#00F5D4]" />Stay Updated</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">Get expert insights and the latest updates straight to your inbox.</p>
          </div>
          <div className="mt-auto flex w-full pt-5">
            <input type="email" aria-label="Email address" placeholder="Enter your email" className="min-w-0 flex-1 rounded-l-lg border border-slate-200 bg-white px-4 py-3 text-sm text-[#07152f] outline-none focus:border-[#00A98F] dark:border-white/10 dark:bg-[#111D37] dark:text-white dark:focus:border-[#00F5D4]" />
            <button className="rounded-r-lg bg-[#00A98F] px-5 text-sm font-bold text-white transition hover:bg-[#008D7A] dark:bg-[#00F5D4] dark:text-[#071126] dark:hover:bg-[#70EEFF]">Subscribe</button>
          </div>
        </div>

        <div className="relative flex flex-col overflow-hidden rounded-2xl bg-[#071124] p-7 text-white shadow-lg sm:p-8">
          <div className="absolute -right-10 -top-16 h-48 w-48 rounded-full bg-[#00F5D4]/10 blur-2xl" />
          <div className="relative">
            <h2 className="text-2xl font-black">Ready to Build Smarter Solutions?</h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-white/65">Let’s bring your ideas to life with AI, Data, GIS and Enterprise Technology.</p>
          </div>
          <Link href="/contact" className="relative mt-auto inline-flex w-fit shrink-0 items-center rounded-lg border border-[#00F5D4] bg-[#00F5D4] px-6 py-3 text-sm font-bold !text-[#071124] shadow-lg shadow-[#00F5D4]/15 transition hover:border-white hover:bg-white hover:!text-[#071124]">Let’s Talk →</Link>
        </div>
        </div>
      </section>
    </main>
  );
}
