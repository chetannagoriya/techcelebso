import Image from "next/image";
import Link from "next/link";
import { Bot, BrainCircuit, ChartNoAxesCombined, Code2, DatabaseZap, Eye, Globe2, Lightbulb, Network, Orbit, Rocket, Target } from "lucide-react";

const capabilities = [
  { icon: BrainCircuit, title: "Artificial Intelligence", text: "Intelligent systems, automation, and next-generation software." },
  { icon: Globe2, title: "Geospatial Intelligence", text: "Location-based insights, mapping, and spatial data at scale." },
  { icon: DatabaseZap, title: "Data & AI Infrastructure", text: "Reliable data pipelines and scalable intelligence systems." },
  { icon: Code2, title: "Software Engineering", text: "Digital products, platforms, APIs, and modern cloud technology." },
  { icon: Bot, title: "Autonomous Systems", text: "Technologies designed to support complex operations." },
  { icon: Orbit, title: "Space Intelligence", text: "Satellite capabilities for observation and decision-making." },
];

const products = [
  { image: "/images/products/celebsox.jpeg", name: "CelebsoX", href: "/products/celebsox", text: "A social network for ambitious dreamers." },
  { image: "/images/products/antellay-space-reference.png", name: "Antellay Space", href: "/products/antellay-space", text: "Space intelligence, reimagined." },
  { image: "/images/products/antellay-x-reference.png", name: "Antellay X", href: "/products/antellay-x", text: "Autonomy, redefined." },
  { image: "/images/products/byizon-ai.jpeg", name: "Byizon", href: "/products/byizon-ai", text: "The AI business operating system." },
  { image: "/images/products/nxtfund-capital.jpeg", name: "NXT Fund", href: "/products/nxtfund-capital", text: "India's next generation startup fund." },
  { image: "/images/products/grehni-ai.jpeg", name: "Grehni", href: "/products/grehni-ai", text: "The operating system for every space." },
];

const gallery = [1, 2, 3, 4, 5, 6].map((number) => ({
  src: `/images/about/gallery/antellay-gallery-0${number}.jfif`,
  alt: `Life at Antellay, moment ${number}`,
}));

const approach = [
  { icon: Eye, title: "Observe", text: "See the real world clearly." },
  { icon: BrainCircuit, title: "Understand", text: "Turn signals into context." },
  { icon: Network, title: "Reason", text: "Connect complex information." },
  { icon: ChartNoAxesCombined, title: "Predict", text: "Anticipate what comes next." },
  { icon: Rocket, title: "Act", text: "Create meaningful progress." },
];

export const metadata = {
  title: "About Antellay — Intelligence for What Comes Next",
  description: "Meet Antellay, our mission, technology ecosystem, and the people behind the work.",
};

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-white text-[#0b132b] dark:bg-[#07101f] dark:text-white">
      <section className="px-5 pb-8 pt-10 md:px-8 md:pb-10 md:pt-14">
        <div className="mx-auto grid max-w-[1320px] gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-stretch">
          <div className="flex flex-col justify-center py-2 lg:pr-8">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#009e8a] dark:text-[#00f5d4]">About Antellay</p>
            <h1 className="mt-4 max-w-xl font-[family-name:var(--font-heading)] text-[clamp(2.8rem,5.3vw,5.5rem)] font-semibold leading-[0.98] tracking-[-0.055em]">
              Building intelligence for the <span className="text-[#00a98f] dark:text-[#00f5d4]">next era.</span>
            </h1>
            <div className="mt-7 h-0.5 w-20 bg-[#00a98f]" />
            <p className="mt-7 max-w-lg text-base leading-7 text-slate-600 dark:text-slate-300">Antellay is a technology and engineering company building intelligent systems, platforms, and infrastructure for a rapidly changing world.</p>
            <p className="mt-4 max-w-lg text-base leading-7 text-slate-600 dark:text-slate-300">We bring artificial intelligence, data, software engineering, and advanced systems together to turn complexity into useful, human progress.</p>
          </div>
          <div className="group relative min-h-[360px] overflow-hidden rounded-[1.6rem] bg-[#07101f] shadow-[0_22px_70px_rgba(2,12,25,.18)] md:min-h-[500px]">
            <Image src="/images/gis_cta_satellite.jpg" alt="Satellite intelligence above Earth" fill priority sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover transition duration-700 group-hover:scale-[1.025]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06101d]/70 via-transparent to-[#06101d]/15" />
            <div className="absolute right-5 top-5 rounded-xl border border-white/25 bg-[#07101f]/55 px-5 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-md md:right-8 md:top-8">
              <p>AI · Data · Engineering</p><p className="mt-2 text-[#00f5d4]">Intelligence</p><p className="mt-2 text-white/70">Built for the future</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-5 md:px-8">
        <div className="mx-auto grid max-w-[1320px] overflow-hidden rounded-2xl border border-slate-200 bg-[#f8fbfc] shadow-sm dark:border-white/10 dark:bg-white/[0.04] lg:grid-cols-[0.92fr_1.08fr]">
          <div className="flex gap-5 p-7 md:p-9">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#00a98f]/30 text-[#00a98f] dark:text-[#00f5d4]"><Target size={30} /></div>
            <div><p className="text-xs font-bold uppercase tracking-[0.14em] text-[#009e8a] dark:text-[#00f5d4]">Our mission</p><h2 className="mt-2 max-w-md font-[family-name:var(--font-heading)] text-2xl font-semibold leading-tight md:text-3xl">Build intelligent technology that helps people understand, decide, and act.</h2></div>
          </div>
          <div className="border-t border-slate-200 p-7 text-sm leading-7 text-slate-600 dark:border-white/10 dark:text-slate-300 md:p-9 lg:border-l lg:border-t-0">
            <p>We believe the next generation of technology will move beyond traditional software. It will observe complexity, generate insight, and support better decisions at scale.</p>
            <p className="mt-3 font-semibold text-[#009e8a] dark:text-[#00f5d4]">That is the future Antellay is working to build.</p>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-[1320px]">
          <div className="text-center"><p className="text-xs font-bold uppercase tracking-[0.15em] text-[#009e8a] dark:text-[#00f5d4]">What we build</p><h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-semibold tracking-tight md:text-4xl">Intelligent technologies for a complex world.</h2></div>
          <div className="mt-12 grid grid-cols-2 gap-y-10 md:grid-cols-3 lg:grid-cols-6">
            {capabilities.map(({ icon: Icon, title, text }, index) => (
              <article key={title} className={`px-4 text-center ${index ? "border-l border-slate-200 dark:border-white/10" : ""}`}>
                <Icon className="mx-auto text-[#00a98f] dark:text-[#00f5d4]" size={34} strokeWidth={1.6} />
                <h3 className="mt-4 text-sm font-bold leading-5">{title}</h3><p className="mt-3 text-xs leading-5 text-slate-500 dark:text-slate-400">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f8f8] px-5 py-16 dark:bg-[#0a1728] md:px-8 md:py-20">
        <div className="mx-auto max-w-[1320px]">
          <div className="text-center"><p className="text-xs font-bold uppercase tracking-[0.15em] text-[#009e8a] dark:text-[#00f5d4]">Our product &amp; technology ecosystem</p><h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-semibold tracking-tight md:text-4xl">Building intelligent platforms for what comes next.</h2></div>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {products.map((product) => (
              <Link key={product.name} href={product.href} className="group overflow-hidden rounded-xl border border-[#e2e8f0] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#00a98f] hover:shadow-xl dark:border-[#2d3a54] dark:bg-[#101a33] dark:hover:border-[#00f5d4]">
                <div className="relative aspect-[1.5] overflow-hidden bg-[#071126]"><Image src={product.image} alt={`${product.name} product preview`} fill sizes="(max-width: 768px) 50vw, 220px" className="object-cover object-top opacity-90 transition duration-500 group-hover:scale-105 group-hover:opacity-100" /><div className="absolute inset-0 bg-gradient-to-t from-[#071126]/70 via-transparent to-transparent" /></div>
                <div className="p-4"><h3 className="text-sm font-bold text-[#0b132b] transition-colors group-hover:text-[#00a98f] dark:text-white dark:group-hover:text-[#00f5d4]">{product.name}</h3><p className="mt-2 min-h-10 text-xs leading-5 text-[#0b132b]/60 dark:text-white/50">{product.text}</p><span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#00a98f] dark:text-[#00f5d4]">Explore product <span className="transition-transform group-hover:translate-x-1">→</span></span></div>
              </Link>
            ))}
          </div>
          <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-lg border border-[#e2e8f0] bg-white p-5 dark:border-[#2d3a54] dark:bg-[#0b132b] sm:flex-row sm:items-center">
            <div><h3 className="text-sm font-bold">Explore the Antellay product ecosystem</h3><p className="mt-1 text-xs text-[#0b132b]/60 dark:text-white/50">Discover platforms built for creators, businesses, spaces, and founders.</p></div>
            <Link href="/products" className="shrink-0 rounded bg-[#00f5d4] px-5 py-2.5 text-xs font-bold text-[#0b132b] transition-colors hover:bg-[#70eeff]">View all products</Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-8 md:px-8">
        <div className="mx-auto max-w-[1320px] overflow-hidden rounded-[1.6rem] bg-[#071726] px-6 py-10 text-white md:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.92fr_2.08fr] lg:items-center">
            <div><p className="text-xs font-bold uppercase tracking-[0.15em] text-[#00f5d4]">Our approach</p><h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-semibold leading-tight md:text-4xl">Observe. Understand.<br />Reason. Predict. Act.</h2><p className="mt-4 max-w-md text-sm leading-6 text-slate-300">Intelligence should not simply process information. It should help people make better decisions.</p></div>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-5">
              {approach.map(({ icon: Icon, title, text }, index) => (
                <div key={title} className="relative text-center">{index < approach.length - 1 && <span className="absolute left-[68%] top-7 hidden w-[64%] border-t border-dashed border-[#00f5d4]/35 sm:block" />}<div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#00f5d4]/60 bg-[#0b2030] text-[#00f5d4]"><Icon size={24} strokeWidth={1.6} /></div><h3 className="mt-3 text-sm font-bold text-[#00f5d4]">{title}</h3><p className="mt-1 text-[11px] leading-4 text-slate-400">{text}</p></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-[1320px] overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-white/10 dark:bg-[#101d31] lg:grid-cols-[0.75fr_1.25fr]">
          <div className="relative min-h-[390px] bg-slate-100"><Image src="/images/about/antellay-leadership.png" alt="Antellay leadership speaking on stage" fill sizes="(min-width: 1024px) 38vw, 100vw" className="object-cover object-center" /></div>
          <div className="flex flex-col justify-center p-8 md:p-12 lg:p-14"><p className="text-xs font-bold uppercase tracking-[0.15em] text-[#009e8a] dark:text-[#00f5d4]">Built on a belief</p><h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-semibold tracking-tight md:text-4xl">The future will be defined by intelligence that people can trust.</h2><blockquote className="mt-7 border-l-2 border-[#00a98f] pl-6 text-lg leading-8 text-slate-600 dark:text-slate-300">“Our ambition is to turn sophisticated technology into clear, useful systems—built responsibly, and designed around the people who use them.”</blockquote><p className="mt-6 text-sm leading-7 text-slate-500 dark:text-slate-400">We are building Antellay as a home for curious thinkers, practical dreamers, and teams willing to solve difficult problems together.</p></div>
        </div>
      </section>

      <section className="bg-[#f4f8f8] px-5 py-16 dark:bg-[#0a1728] md:px-8 md:py-20">
        <div className="mx-auto max-w-[1320px]">
          <div className="mx-auto mb-11 max-w-2xl text-center"><p className="text-xs font-bold uppercase tracking-[0.15em] text-[#009e8a] dark:text-[#00f5d4]">Our people &amp; culture</p><h2 className="mt-3 font-[family-name:var(--font-heading)] text-4xl font-semibold tracking-tight md:text-5xl">Life behind the work.</h2><p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-500 dark:text-slate-400">Ideas become meaningful when people share them, challenge them, and build them together.</p></div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item) => (
              <div key={item.src} className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-200 shadow-sm"><Image src={item.src} alt={item.alt} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-[#07101f]/30 via-transparent to-transparent opacity-40 transition group-hover:opacity-70" /></div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-8 md:px-8 md:py-10">
        <div className="mx-auto flex max-w-[1320px] flex-col items-center justify-between gap-7 overflow-hidden rounded-2xl bg-gradient-to-r from-[#071726] to-[#0b2d3a] px-7 py-8 text-white md:flex-row md:px-10">
          <div className="flex items-center gap-5"><Lightbulb className="hidden text-[#00f5d4] sm:block" size={44} strokeWidth={1.4} /><div><h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold md:text-3xl">Build what comes next with us.</h2><p className="mt-1 text-sm text-slate-300">Explore our work, products, and vision for intelligent technology.</p></div></div>
          <div className="flex w-full gap-3 sm:w-auto"><Link href="/products" className="flex-1 rounded-lg bg-[#00cdb5] px-6 py-3 text-center text-sm font-bold text-[#061421] transition hover:bg-[#00f5d4] sm:flex-none">Explore products</Link><Link href="/contact" className="flex-1 rounded-lg border border-white/35 px-6 py-3 text-center text-sm font-bold transition hover:bg-white hover:text-[#07101f] sm:flex-none">Contact us</Link></div>
        </div>
      </section>
    </main>
  );
}
