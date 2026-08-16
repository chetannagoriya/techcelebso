import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, Bot, Boxes, Check, ChevronRight, Cloud, Code2,
  Gauge, LockKeyhole, Palette, Rocket, ShieldCheck, Smartphone,
  Sparkles, TrendingUp, Users, WandSparkles,
} from "lucide-react";

const solutions = [
  { title: "Mobile Apps", icon: Smartphone, image: "/images/consumer-technology/mobile-apps.png", copy: "High-performance, feature-rich mobile apps for iOS & Android that deliver seamless user experiences.", items: ["Native & Cross-platform Apps", "UI/UX Design", "App Modernization", "Maintenance & Support"] },
  { title: "SaaS Platforms", icon: Cloud, image: "/images/consumer-technology/saas-platforms.png", copy: "Scalable, secure and multi-tenant SaaS platforms designed to grow your business and delight users.", items: ["SaaS Product Development", "Multi-tenant Architecture", "Subscription & Billing", "Cloud & DevOps"] },
  { title: "AI Products", icon: Bot, image: "/images/consumer-technology/ai-products.png", copy: "Intelligent AI-powered products that automate workflows, unlock insights and create real business value.", items: ["AI/ML Product Development", "Chatbots & Assistants", "Computer Vision", "NLP & Predictive Analytics"] },
];

const useCases = [
  ["Social & Community", "/images/industries/Media & Communication.jpg"],
  ["E-commerce & Retail", "/images/industries/E-Commerce.jpg"],
  ["Education & E-learning", "/images/industries/Education.jpg"],
  ["Health & Wellness", "/images/industries/Healthcare & Life Sciences.jpg"],
  ["Finance & Banking", "/images/industries/Financial Services.jpg"],
  ["Media & Entertainment", "/images/event/collaboration/Retail Brands.webp"],
  ["Productivity & Tools", "/images/industries/Professional Services.jpg"],
  ["Travel & Hospitality", "/images/industry-showcases/hospitality-travel.png"],
];

const capabilities = [
  [WandSparkles, "AI-Powered Features", "Integrate AI to automate, personalize and predict."],
  [ShieldCheck, "Scalable & Secure", "Built with security, scalability and reliability at the core."],
  [Palette, "Great User Experience", "Beautiful design with intuitive user journeys."],
  [Rocket, "Fast Time to Market", "Agile development for rapid delivery."],
  [TrendingUp, "Data Analytics", "Real-time insights to drive better decisions."],
  [Cloud, "Cloud Native", "Built for performance and scale."],
];

const workflow = [
  [Users, "Discover", "Understand users & needs"], [Palette, "Design", "UX/UI & prototyping"],
  [Code2, "Develop", "Agile engineering"], [Gauge, "Test", "Quality & performance"],
  [Cloud, "Deploy", "Cloud deployment"], [TrendingUp, "Optimize", "Monitor & improve"],
];

const faqs = [
  "What types of consumer tech products do you build?",
  "Do you build both mobile apps and SaaS platforms?",
  "Can you integrate AI into our existing product?",
  "What is your development process?",
  "Do you provide post-launch support?",
];

function SectionTitle({ children }) {
  return <h2 className="mb-6 text-center text-[11px] font-extrabold uppercase tracking-[.08em] text-[#111936]">{children}</h2>;
}

export default function ConsumerTechnologyPage() {
  return (
    <main className="bg-[#fbfcff] text-[#10172f] dark:bg-[#fbfcff] dark:text-[#10172f]">
      <section className="relative min-h-[610px] overflow-hidden bg-[#020a1d] text-white">
        <Image src="/images/consumer-technology/consumer-tech-hero.png" alt="Consumer technology product analytics dashboard" fill priority className="object-cover object-center" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,10,29,.98)_0%,rgba(2,10,29,.9)_35%,rgba(2,10,29,.2)_72%,rgba(2,10,29,.08)_100%)]" />
        <div className="relative mx-auto flex min-h-[610px] max-w-[1440px] items-center px-6 py-14 md:px-10 lg:px-14">
          <div className="max-w-[620px]">
            <span className="rounded border border-violet-400/25 bg-violet-400/10 px-3 py-1.5 text-[10px] font-bold tracking-wider text-violet-300">CONSUMER TECHNOLOGY</span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-[-.04em] sm:text-5xl lg:text-[52px]">Powering the Future of <span className="block bg-gradient-to-r from-[#9d7bff] to-[#5b7cff] bg-clip-text text-transparent">Consumer Technology</span></h1>
            <p className="mt-6 max-w-[500px] text-sm leading-7 text-white/72">We build intelligent Mobile Apps, Scalable SaaS Platforms, and AI-powered Products that users love and businesses trust.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-md bg-[#1264ff] px-5 py-3 text-xs font-bold transition hover:bg-[#347dff]">Book Free Consultation <ArrowRight size={14}/></Link>
            </div>
            <div className="mt-11 grid grid-cols-3 gap-5 sm:grid-cols-6">
              {[[Palette,"User-Centric Design"],[Boxes,"Scalable Architecture"],[Sparkles,"AI-First Approach"],[Cloud,"Cloud Native"],[LockKeyhole,"Secure & Compliant"],[TrendingUp,"Data Driven Insights"]].map(([Icon,label]) => <div key={label} className="text-center"><Icon className="mx-auto text-[#8d7cff]" size={22}/><span className="mt-2 block text-[8px] font-semibold leading-3 text-white/75">{label}</span></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto -mt-5 max-w-[1360px] px-6 md:px-10">
        <div className="rounded-xl border border-slate-100 bg-white px-6 py-5 shadow-xl shadow-slate-900/5">
          <p className="text-center text-[10px] font-extrabold uppercase tracking-wide">Trusted by innovative consumer tech companies</p>
          <div className="mt-5 grid grid-cols-2 items-center gap-5 text-center text-base font-bold text-slate-500 sm:grid-cols-4 lg:grid-cols-8">
            {[["Google","text-[#4285f4]"],["Microsoft","text-[#555]"],["Adobe","text-[#ed1c24]"],["airbnb","text-[#ff5a5f]"],["Uber","text-black"],["Dropbox","text-[#0061ff]"],["Canva","text-[#00a6b8]"],["ATLASSIAN","text-[#1868db]"]].map(([brand,color])=><span key={brand} className={color}>{brand}</span>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1360px] px-6 py-14 md:px-10">
        <SectionTitle>Our Consumer Technology Solutions</SectionTitle>
        <div className="grid gap-5 lg:grid-cols-3">
          {solutions.map(({title,icon:Icon,image,copy,items}) => <article key={title} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="relative h-48 overflow-hidden"><Image src={image} alt={`${title} consumer technology solution`} fill className="object-cover" /></div>
            <div className="p-5"><div className="flex items-center gap-3"><span className="grid h-9 w-9 place-items-center rounded-lg bg-[#6f5cff] text-white"><Icon size={18}/></span><h3 className="text-base font-bold">{title}</h3></div><p className="mt-4 text-[11px] leading-5 text-slate-600">{copy}</p><ul className="mt-4 space-y-2 text-[10px] text-slate-700">{items.map(item=><li key={item} className="flex items-center gap-2"><Check size={12} className="text-[#725cff]"/>{item}</li>)}</ul><Link href="/contact" className="mt-5 inline-flex items-center gap-1 text-[10px] font-bold text-[#5d54e8]">Learn More <ArrowRight size={12}/></Link></div>
          </article>)}
        </div>
      </section>

      <section className="mx-auto max-w-[1360px] px-6 pb-12 md:px-10"><SectionTitle>Use Cases</SectionTitle><div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">{useCases.map(([label,image])=><div key={label}><div className="relative aspect-[1.12] overflow-hidden rounded-lg"><Image src={image} alt={`${label} consumer technology use case`} fill className="object-cover transition duration-500 hover:scale-105"/></div><p className="mt-2 text-center text-[9px] font-semibold">{label}</p></div>)}</div></section>

      <section className="mx-auto grid max-w-[1360px] gap-5 px-6 pb-12 md:px-10 lg:grid-cols-[.92fr_1.08fr]">
        <div className="relative min-h-[350px] overflow-hidden rounded-xl bg-[#06102c]"><Image src="/images/consumer-technology/capabilities.png" alt="Consumer product analytics capabilities" fill className="object-cover"/></div>
        <div className="rounded-xl border border-slate-200 bg-white p-6"><h2 className="text-[11px] font-extrabold uppercase tracking-wide">Key Capabilities</h2><div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{capabilities.map(([Icon,title,copy])=><div key={title} className="flex gap-3"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#f0edff] text-[#6654eb]"><Icon size={17}/></span><div><h3 className="text-[10px] font-bold">{title}</h3><p className="mt-1 text-[8px] leading-4 text-slate-500">{copy}</p></div></div>)}</div></div>
      </section>

      <section className="mx-auto grid max-w-[1360px] gap-5 px-6 pb-12 md:px-10 lg:grid-cols-[.82fr_1.18fr]">
        <div className="rounded-xl border border-slate-200 bg-white p-6"><h2 className="text-center text-[11px] font-extrabold uppercase">Technologies We Use</h2><div className="mt-6 grid grid-cols-3 gap-3 text-center text-[10px] font-bold text-slate-600 sm:grid-cols-5 lg:grid-cols-3 xl:grid-cols-5">{["React","Next.js","Flutter","Swift","Kotlin","Node.js","Python","AWS","Firebase","Docker","PostgreSQL","MongoDB","GraphQL","Strapi","TensorFlow"].map(x=><span key={x} className="rounded-md bg-slate-50 px-2 py-3">{x}</span>)}</div></div>
        <div className="rounded-xl border border-slate-200 bg-white p-6"><h2 className="text-center text-[11px] font-extrabold uppercase">Our Product Development Workflow</h2><div className="mt-7 grid grid-cols-3 gap-5 sm:grid-cols-6">{workflow.map(([Icon,title,copy],i)=><div key={title} className="relative text-center">{i<5&&<ChevronRight size={14} className="absolute -right-3 top-5 hidden text-[#7c63ff] sm:block"/>}<span className="mx-auto grid h-11 w-11 place-items-center rounded-full bg-[#f2efff] text-[#6654eb]"><Icon size={20}/></span><p className="mt-3 text-[9px] font-bold">{title}</p><p className="mt-1 text-[7px] leading-3 text-slate-500">{copy}</p></div>)}</div></div>
      </section>

      <section className="mx-auto max-w-[1360px] px-6 pb-8 md:px-10"><div className="grid grid-cols-2 overflow-hidden rounded-xl bg-[#07122f] text-white sm:grid-cols-3 lg:grid-cols-6">{[["200+","Products Delivered"],["98%","Client Satisfaction"],["50M+","Users Impacted"],["30%","Faster Time to Market"],["99.9%","Uptime & Reliability"],["24/7","Support & Maintenance"]].map(([v,l])=><div key={l} className="border-white/10 p-6 text-center lg:border-r"><b className="text-2xl text-[#a278ff]">{v}</b><span className="mt-2 block text-[8px] text-white/75">{l}</span></div>)}</div></section>

      <section className="mx-auto grid max-w-[1360px] gap-5 px-6 pb-12 md:px-10 lg:grid-cols-[.78fr_1.22fr]">
        <div className="rounded-xl border border-slate-200 bg-white p-5"><h2 className="mb-3 text-[11px] font-extrabold uppercase">FAQ</h2>{faqs.map(q=><details key={q} className="border-b border-slate-200 py-3"><summary className="cursor-pointer text-[9px] font-semibold">{q}</summary><p className="pt-2 text-[8px] leading-4 text-slate-500">Our product experts tailor architecture, delivery and post-launch support to your goals.</p></details>)}</div>
        <div className="relative min-h-[330px] overflow-hidden rounded-xl bg-[#06102c] text-white"><Image src="/images/consumer-technology/cta.png" alt="Product designer building a consumer technology experience" fill className="object-cover object-center"/><div className="absolute inset-0 bg-gradient-to-r from-[#06102c] via-[#06102c]/85 to-transparent"/><div className="relative max-w-md p-8"><h2 className="text-3xl font-bold">Ready to Build the Next Big Thing?</h2><p className="mt-3 text-[11px] leading-5 text-white/75">Let&apos;s build powerful consumer technology products that your users will love.</p><div className="mt-6 flex flex-wrap gap-3"><Link href="/contact" className="rounded-md bg-[#1264ff] px-5 py-3 text-[10px] font-bold">Book Free Consultation</Link><Link href="/contact" className="rounded-md border border-white/50 px-5 py-3 text-[10px] font-bold">Schedule a Demo</Link></div></div></div>
      </section>
    </main>
  );
}
