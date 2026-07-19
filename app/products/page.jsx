import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Bot, BrainCircuit, Building2, Camera, Check, CircleDollarSign, Command, Globe2, Home, Layers, Rocket, ShieldCheck, Sparkles, Users, Zap } from "lucide-react";

const products = [
  {
    name: "CelebsoX",
    tagline: "A social network for ambitious dreamers.",
    copy: "A creator-first network where creators, professionals, brands and public figures connect, showcase work and discover collaborations.",
    image: "/images/products/celebsox.jpeg",
    accent: "#f7b817",
    icon: Users,
    bullets: ["Creator profiles", "Portfolio & media", "Brand collaborations", "Community discovery"],
  },
  {
    name: "Byizon.ai",
    tagline: "The AI business operating system.",
    copy: "Connect CRM, business tools and data into one natural-language AI workspace for dashboards, reports, insights and automation.",
    image: "/images/products/byizon-ai.jpeg",
    accent: "#5b6cff",
    icon: Bot,
    bullets: ["Conversational BI", "Business memory", "CRM connectors", "Real-time dashboards"],
  },
  {
    name: "Grehni.ai",
    tagline: "The operating system for every space.",
    copy: "Voice-first spatial AI that gives homes, hotels, offices and venues a brain for automation, sensing and autonomous control.",
    image: "/images/products/grehni-ai.jpeg",
    accent: "#18d884",
    icon: Home,
    bullets: ["Voice-first control", "Spatial AI", "Energy optimization", "Device automation"],
  },
  {
    name: "Celebso Production",
    tagline: "Crafting iconic visuals.",
    copy: "Premium production for fashion, editorial, commercial campaigns, celebrity shoots, model portfolios and brand storytelling.",
    image: "/images/products/celebso-production.jpeg",
    accent: "#c89b3c",
    icon: Camera,
    bullets: ["Fashion photography", "Brand campaigns", "Celebrity shoots", "Video production"],
  },
  {
    name: "NXTFund Capital",
    tagline: "India's next generation startup fund.",
    copy: "A founder-focused fund and startup ecosystem with AI due diligence, incubation, mentorship and growth support.",
    image: "/images/products/nxtfund-capital.jpeg",
    accent: "#ff684f",
    icon: CircleDollarSign,
    bullets: ["Startup funding", "AI due diligence", "Incubation", "Founder mentorship"],
  },
];

const systems = [
  [BrainCircuit, "AI-native platforms", "Products built around automation, insight and intelligent workflows."],
  [Layers, "Complete ecosystems", "Each product has a clear audience, workflow and business model."],
  [ShieldCheck, "Enterprise ready", "Designed with reliability, access control and scalable operations in mind."],
  [Globe2, "Market focused", "Built for creators, businesses, spaces, production teams and founders."],
];

export const metadata = {
  title: "Our Products | Antellay",
  description: "Explore Antellay products including CelebsoX, Byizon.ai, Grehni.ai, Celebso Production and NXTFund Capital.",
};

export default function ProductsPage() {
  return (
    <main className="bg-white text-[#07152f] dark:bg-white dark:text-[#07152f]">
      <section className="relative overflow-hidden bg-[#071124] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(58,134,255,.35),transparent_34%),radial-gradient(circle_at_80%_30%,rgba(0,245,212,.22),transparent_30%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />
        <div className="relative mx-auto grid min-h-[620px] max-w-[1440px] items-center gap-10 px-6 py-16 md:px-10 lg:grid-cols-[.88fr_1.12fr] lg:px-14">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[.12em] text-cyan-200">
              <Sparkles size={14} /> Our Products
            </span>
            <h1 className="mt-6 max-w-3xl text-5xl font-extrabold leading-[1.04] tracking-[-.05em] sm:text-6xl lg:text-[76px]">
              Five intelligent products for the next wave of business.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/72">
              From AI business operations and smart spaces to creator networks, production studios and startup capital, Antellay builds products with a sharp point of view and a practical path to scale.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#products" className="inline-flex items-center gap-2 rounded-md bg-[#3a86ff] px-6 py-3 text-sm font-bold text-white">
                Explore Products <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="rounded-md border border-white/30 px-6 py-3 text-sm font-bold text-white">
                Book a Demo
              </Link>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {products.slice(0, 4).map((product, index) => {
              const Icon = product.icon;
              return (
                <article key={product.name} className={`group overflow-hidden rounded-2xl border border-white/10 bg-white/8 p-3 backdrop-blur ${index === 1 ? "sm:translate-y-8" : ""}`}>
                  <div className="relative aspect-[1.25] overflow-hidden rounded-xl bg-slate-900">
                    <Image src={product.image} alt={`${product.name} preview`} fill className="object-cover object-top opacity-85 transition duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071124] via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-3 grid h-9 w-9 place-items-center rounded-full" style={{ backgroundColor: product.accent }}>
                      <Icon size={18} className="text-white" />
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-extrabold">{product.name}</h3>
                  <p className="mt-1 text-xs text-white/62">{product.tagline}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1360px] px-6 py-14 md:px-10" id="products">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[.12em] text-[#3a86ff]">Product Portfolio</p>
            <h2 className="mt-3 text-4xl font-extrabold tracking-[-.04em] md:text-5xl">Our Products</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-600">
            A Cyntexa-inspired product hub: bold product stories, clear use cases, polished previews and fast routes to demo conversations.
          </p>
        </div>
        <div className="grid gap-5 lg:grid-cols-5">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <article key={product.name} className="group flex min-h-[430px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="relative h-52 overflow-hidden bg-slate-950">
                  <Image src={product.image} alt={`${product.name} interface`} fill className="object-cover object-top transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                  <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-[11px] font-bold text-slate-950">
                    <Icon size={14} style={{ color: product.accent }} /> {product.name}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-xl font-extrabold">{product.tagline}</h3>
                  <p className="mt-3 text-xs leading-6 text-slate-600">{product.copy}</p>
                  <ul className="mt-4 space-y-2">
                    {product.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-2 text-[11px] font-semibold text-slate-700">
                        <Check size={13} style={{ color: product.accent }} /> {bullet}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="mt-auto inline-flex items-center gap-2 pt-5 text-xs font-extrabold" style={{ color: product.accent }}>
                    Request Demo <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16 md:px-10">
        <div className="mx-auto grid max-w-[1360px] gap-6 lg:grid-cols-[.85fr_1.15fr]">
          <div className="rounded-3xl bg-[#071124] p-8 text-white">
            <p className="text-xs font-extrabold uppercase tracking-[.12em] text-cyan-300">How We Build</p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-[-.04em]">One product studio. Five focused ecosystems.</h2>
            <p className="mt-5 text-sm leading-7 text-white/65">
              Each product is designed around a specific audience, but the core remains the same: intelligent workflows, beautiful interfaces and measurable business value.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {systems.map(([Icon, title, copy]) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <Icon size={22} className="text-cyan-300" />
                  <h3 className="mt-3 text-sm font-bold">{title}</h3>
                  <p className="mt-2 text-xs leading-5 text-white/58">{copy}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-5">
            <div className="grid gap-5 md:grid-cols-3">
              {[["5", "Flagship products"], ["10x", "Faster product decisions"], ["24/7", "AI-ready workflows"]].map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
                  <b className="text-4xl text-[#3a86ff]">{value}</b>
                  <span className="mt-2 block text-xs font-bold text-slate-600">{label}</span>
                </div>
              ))}
            </div>
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="grid md:grid-cols-[.9fr_1.1fr]">
                <div className="p-8">
                  <p className="text-xs font-extrabold uppercase tracking-[.12em] text-[#3a86ff]">Featured Product</p>
                  <h3 className="mt-4 text-3xl font-extrabold tracking-[-.03em]">Byizon.ai connects business systems through conversation.</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    A flagship AI operating system for business teams that need instant dashboards, CRM answers, automation and recommendations.
                  </p>
                  <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#3a86ff] px-5 py-3 text-xs font-bold text-white">
                    Book Byizon Demo <ArrowRight size={14} />
                  </Link>
                </div>
                <div className="relative min-h-80 bg-slate-950">
                  <Image src="/images/products/byizon-ai.jpeg" alt="Byizon product screen" fill className="object-cover object-top" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1360px] px-6 py-16 md:px-10">
        <div className="grid gap-5 md:grid-cols-5">
          {[
            [Command, "Operate", "Byizon.ai"],
            [Users, "Connect", "CelebsoX"],
            [Zap, "Automate", "Grehni.ai"],
            [Camera, "Create", "Celebso Production"],
            [Rocket, "Fund", "NXTFund Capital"],
          ].map(([Icon, action, name]) => (
            <div key={name} className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
              <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-blue-50 text-[#3a86ff]">
                <Icon size={22} />
              </span>
              <h3 className="mt-4 text-lg font-extrabold">{action}</h3>
              <p className="mt-2 text-xs font-semibold text-slate-500">{name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1360px] px-6 pb-16 md:px-10">
        <div className="relative overflow-hidden rounded-3xl bg-[#071124] p-8 text-white md:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(58,134,255,.32),transparent_34%)]" />
          <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="text-3xl font-extrabold tracking-[-.03em] md:text-5xl">Ready to explore the Antellay product ecosystem?</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/65">
                Tell us which product you want to launch, adopt or partner with, and our team will walk you through the right demo.
              </p>
            </div>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-extrabold text-[#071124]">
              Talk to Product Team <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
