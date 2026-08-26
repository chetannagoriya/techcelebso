import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Bot, Cpu, Globe2, Orbit, Radar, Satellite, ShieldCheck, Sparkles, Waves } from "lucide-react";

const configs = {
  space: {
    name: "ANTELLAY SPACE",
    eyebrow: "Space intelligence platform",
    tagline: "Space Intelligence. Reimagined.",
    copy: "An AI operating system for the space economy—turning satellite signals, earth observation and mission data into decisions at orbital speed.",
    image: "/images/products/antellay-space-reference.png",
    heroImage: "/images/industry-showcases/aviation-aerospace.png",
    accent: "#f08a45",
    capabilities: [
      [Satellite, "Satellite Intelligence", "Unify telemetry, imagery and orbital data into a mission-ready intelligence layer."],
      [Globe2, "Earth Observation", "Monitor global infrastructure, climate and activity through continuous geospatial insight."],
      [Radar, "Mission Analytics", "Detect events, forecast risk and coordinate operations with AI-assisted decision support."],
      [ShieldCheck, "Secure Space Data", "Protect critical workflows with governed access, resilient pipelines and traceable intelligence."],
    ],
    domains: ["Orbit", "Earth", "Ground Stations", "Weather", "Missions", "Security"],
  },
  x: {
    name: "ANTELLAY X",
    eyebrow: "Autonomous intelligence platform",
    tagline: "Autonomy. Redefined.",
    copy: "One embodied intelligence layer built to perceive, predict, decide and adapt across humanoid, land, air, sea and space systems.",
    image: "/images/products/antellay-x-reference.png",
    heroImage: "/images/robotics/robotics-hero.png",
    accent: "#b9d4ff",
    capabilities: [
      [Bot, "Embodied AI", "Intelligence designed to understand physical environments and operate alongside people."],
      [Cpu, "Autonomy Core", "A unified perception, planning and control stack for intelligent machines."],
      [Waves, "Multi-domain Systems", "Coordinate autonomous fleets across land, air, sea and orbital environments."],
      [ShieldCheck, "Safety by Design", "Governed decisions, human oversight and resilient controls built into every layer."],
    ],
    domains: ["Humanoid", "Land", "Air", "Sea", "Space", "Industry"],
  },
};

export default function FutureProductPage({ variant }) {
  const product = configs[variant];

  return (
    <main className="overflow-hidden bg-[#030508] text-white">
      <section className="relative isolate min-h-[720px] overflow-hidden border-b border-white/10">
        <Image src={product.heroImage} alt={`${product.name} autonomous intelligence`} fill priority sizes="100vw" className="-z-20 object-cover opacity-55" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#020305_0%,rgba(2,3,5,.93)_38%,rgba(2,3,5,.3)_76%),radial-gradient(circle_at_72%_50%,rgba(240,138,69,.16),transparent_36%)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="mx-auto flex min-h-[720px] max-w-[1440px] items-center px-6 py-20 md:px-10 lg:px-14">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.38em]" style={{ color: product.accent }}><Sparkles size={13} /> {product.eyebrow}</span>
            <h1 className="mt-8 text-5xl font-light tracking-[.2em] sm:text-6xl lg:text-8xl">{product.name}</h1>
            <p className="mt-7 text-xl font-light uppercase tracking-[.34em] text-white/72 sm:text-2xl">{product.tagline}</p>
            <p className="mt-8 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">{product.copy}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="#capabilities" className="inline-flex items-center gap-3 rounded-full border px-6 py-3 text-xs font-bold uppercase tracking-[.12em] transition hover:bg-white/10" style={{ borderColor: `${product.accent}88` }}>Explore platform <ArrowRight size={15} /></Link>
              <Link href="/contact" className="rounded-full bg-white px-6 py-3 text-xs font-black uppercase tracking-[.12em] text-black">Contact us</Link>
            </div>
          </div>
        </div>
      </section>

      <section id="capabilities" className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 lg:py-28">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div><p className="text-[10px] font-bold uppercase tracking-[.3em]" style={{ color: product.accent }}>Core intelligence</p><h2 className="mt-4 text-4xl font-light tracking-[-.03em] sm:text-5xl">One platform. Every environment.</h2></div>
          <p className="max-w-lg text-sm leading-7 text-white/48">Built to transform complex physical-world signals into secure, coordinated and continuously improving action.</p>
        </div>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
          {product.capabilities.map(([Icon, title, copy]) => <article key={title} className="min-h-72 bg-[#070a0f] p-7"><span className="grid h-12 w-12 place-items-center rounded-full border border-white/12" style={{ color: product.accent }}><Icon size={22} /></span><h3 className="mt-10 text-lg font-semibold">{title}</h3><p className="mt-4 text-xs leading-6 text-white/45">{copy}</p></article>)}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#06080c] px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div><Orbit size={30} style={{ color: product.accent }} /><p className="mt-8 text-[10px] font-bold uppercase tracking-[.3em] text-white/38">Connected intelligence</p><h2 className="mt-5 text-4xl font-light leading-tight sm:text-6xl">Built to understand the physical world.</h2><p className="mt-6 max-w-xl text-sm leading-7 text-white/48">Perceive changing conditions, reason across multiple data streams and coordinate intelligent systems through a single, scalable foundation.</p></div>
          <div className="relative min-h-[520px] overflow-hidden rounded-2xl border border-white/10 bg-black"><Image src={product.image} alt={`${product.name} visual concept`} fill sizes="(max-width: 1024px) 100vw, 760px" className="object-cover object-top opacity-85" /><div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/10" /></div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 lg:py-28">
        <p className="text-center text-[10px] font-bold uppercase tracking-[.34em]" style={{ color: product.accent }}>Unified domains</p>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">{product.domains.map((domain, index) => <div key={domain} className="relative flex min-h-36 flex-col items-center justify-center rounded-xl border border-white/10 bg-white/[.025] text-center"><span className="text-[10px] text-white/25">0{index + 1}</span><p className="mt-4 text-xs font-bold uppercase tracking-[.16em]">{domain}</p></div>)}</div>
      </section>

      <section className="px-6 pb-20 md:px-10">
        <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-2xl border border-white/10 bg-[#090c12] px-6 py-20 text-center sm:px-12"><div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(240,138,69,.22),transparent_52%)]" /><div className="relative"><p className="text-[10px] font-bold uppercase tracking-[.32em]" style={{ color: product.accent }}>The future is physical</p><h2 className="mx-auto mt-6 max-w-4xl text-4xl font-light tracking-[-.03em] sm:text-6xl">Build the next intelligence frontier with {product.name}.</h2><Link href="/contact" className="mt-9 inline-flex items-center gap-3 rounded-full bg-white px-7 py-3 text-xs font-black uppercase tracking-[.12em] text-black">Enter the future <ArrowRight size={15} /></Link></div></div>
      </section>
    </main>
  );
}
