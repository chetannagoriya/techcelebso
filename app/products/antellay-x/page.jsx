import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Bot, Car, Plane, Rocket, Ship } from "lucide-react";

export const metadata = {
  title: "Antellay X | Autonomy Redefined",
  description: "One embodied intelligence layer for autonomous systems across humanoid, land, air, sea and space.",
};

const domains = [
  [Bot, "Humanoid", "Human-scale embodied intelligence"],
  [Car, "Land", "Autonomous mobility and logistics"],
  [Plane, "Air", "Intelligent aerial operations"],
  [Ship, "Sea", "Autonomous maritime systems"],
  [Rocket, "Space", "Orbital intelligence and control"],
];

const principles = [
  ["01", "Perceive", "Understand people, objects and changing environments in real time."],
  ["02", "Predict", "Anticipate motion, intent, risk and the next best action."],
  ["03", "Decide", "Reason across multiple signals with safety-aware intelligence."],
  ["04", "Adapt", "Learn from every mission and continuously improve performance."],
];

export default function AntellayXPage() {
  return (
    <main className="overflow-hidden bg-[#f7f8fa] text-[#080b11] dark:bg-[#f7f8fa] dark:text-[#080b11]">
      <section className="relative isolate min-h-[690px] overflow-hidden border-b border-black/10 bg-[#f5f6f7] sm:min-h-[760px]">
        <Image src="/images/robotics/robotics-hero.png" alt="Antellay X autonomous humanoid" fill priority sizes="100vw" className="-z-20 object-cover object-[68%_center] grayscale contrast-125" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#f7f8fa_0%,rgba(247,248,250,.98)_32%,rgba(247,248,250,.68)_54%,rgba(247,248,250,.05)_82%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-36 bg-gradient-to-t from-[#f7f8fa] to-transparent" />
        <div className="mx-auto flex min-h-[690px] max-w-[1440px] items-center px-6 py-20 sm:min-h-[760px] md:px-10 lg:px-14">
          <div className="max-w-2xl -translate-y-10 sm:-translate-y-12 lg:-translate-y-16">
            <p className="text-xs font-black uppercase tracking-[.42em] text-[#00A98F]">Embodied Intelligence</p>
            <h1 className="mt-8 whitespace-nowrap text-[38px] font-light uppercase tracking-[.13em] sm:text-7xl sm:tracking-[.18em] lg:text-[82px]">Antellay-<span className="text-[#00A98F]">X</span></h1>
            <p className="mt-6 text-xs font-bold uppercase tracking-[.46em] text-black/62 sm:text-sm">Autonomy. Redefined.</p>
            <p className="mt-8 max-w-xl text-base leading-8 text-black/55">One intelligence platform built to perceive, predict, decide and adapt across every physical environment.</p>
            <Link href="#ecosystem" className="mt-9 inline-flex items-center gap-3 rounded-full bg-black px-7 py-3.5 text-xs font-black uppercase tracking-[.17em] !text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#00A98F]">Explore Antellay X <ArrowRight size={14} /></Link>
          </div>
        </div>
      </section>

      <section id="ecosystem" className="scroll-mt-24 border-b border-black/10 bg-white px-6 py-16 md:px-10 lg:py-20">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-10 lg:grid-cols-[.38fr_.62fr] lg:items-end">
            <div><p className="text-xs font-black uppercase tracking-[.36em] text-[#00A98F]">One Intelligence</p><h2 className="mt-5 text-4xl font-light uppercase leading-tight tracking-[.17em]">Every<br/>Environment.</h2><p className="mt-5 text-base text-black/50">The physical world is our domain.</p></div>
            <div className="relative min-h-[330px] overflow-hidden border border-black/10"><Image src="/images/industry-showcases/aviation-aerospace.png" alt="Autonomous systems operating across earth and space" fill sizes="(max-width: 1024px) 100vw, 850px" className="object-cover grayscale-[.25] brightness-110"/><div className="absolute inset-0 bg-gradient-to-r from-white/35 to-transparent"/></div>
          </div>
          <div className="mt-8 grid grid-cols-2 border-y border-black/10 sm:grid-cols-5">{domains.map(([Icon, title, copy]) => <article key={title} className="group min-h-40 border-b border-r border-black/10 p-5 transition hover:bg-[#e7faf6] sm:border-b-0"><Icon size={22} className="text-[#00A98F]"/><h3 className="mt-5 text-xs font-black uppercase tracking-[.18em]">{title}</h3><p className="mt-2 text-xs leading-5 text-black/45">{copy}</p></article>)}</div>
        </div>
      </section>

      <section className="grid min-h-[480px] border-b border-black/10 bg-[#f7f8fa] lg:grid-cols-2">
        <div className="flex items-center px-6 py-16 md:px-10 lg:px-14"><div className="max-w-lg"><p className="text-xs font-black uppercase tracking-[.36em] text-[#00A98F]">The Intelligence Core</p><h2 className="mt-6 text-3xl font-light uppercase leading-snug tracking-[.17em] sm:text-4xl">Built to understand<br/>the physical world.</h2><p className="mt-6 text-base leading-8 text-black/48">A unified architecture for perception, prediction, decision-making and action across machines and environments.</p><Link href="#principles" className="mt-8 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[.18em] text-black">Explore the core <ArrowRight size={13}/></Link></div></div>
        <div className="relative min-h-[390px] overflow-hidden bg-white"><Image src="/images/blockchain-hero-2026.png" alt="Antellay X distributed intelligence core" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover brightness-110 contrast-125"/><div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,169,143,.08),transparent_50%)]"/></div>
      </section>

      <section id="principles" className="scroll-mt-24 border-b border-black/10 bg-white px-6 py-16 md:px-10 lg:px-14 lg:py-20">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[.44fr_.56fr] lg:items-center">
          <div className="relative min-h-[520px] overflow-hidden"><Image src="/images/robot_ai_head.jpg" alt="Antellay X humanoid vision system" fill sizes="(max-width: 1024px) 100vw, 620px" className="object-cover object-center grayscale contrast-125"/></div>
          <div><p className="text-xs font-black uppercase tracking-[.36em] text-[#00A98F]">Designed without compromise</p><h2 className="mt-6 text-4xl font-light uppercase leading-tight tracking-[.15em]">Intelligence<br/>in motion.</h2><p className="mt-6 max-w-lg text-base leading-8 text-black/48">Advanced vision. Human-like dexterity. Intelligent motion. Safety and control at every layer.</p><div className="mt-9 grid gap-px overflow-hidden border border-black/10 bg-black/10 sm:grid-cols-2">{principles.map(([num,title,copy]) => <article key={title} className="bg-white p-5"><span className="text-[11px] font-black text-[#00A98F]">{num}</span><h3 className="mt-3 text-sm font-black uppercase tracking-[.16em]">{title}</h3><p className="mt-2 text-xs leading-5 text-black/45">{copy}</p></article>)}</div></div>
        </div>
      </section>

      <section className="grid min-h-[480px] border-b border-black/10 bg-[#f7f8fa] lg:grid-cols-2">
        <div className="flex items-center px-6 py-16 md:px-10 lg:px-14"><div><p className="text-xs font-black uppercase tracking-[.36em] text-[#00A98F]">Built for the real world</p><h2 className="mt-6 text-4xl font-light uppercase leading-tight tracking-[.15em]">Working alongside<br/>humans.</h2><p className="mt-6 max-w-md text-base leading-8 text-black/48">Designed for factories, cities, logistics, infrastructure and the environments where real work happens.</p><Link href="/contact" className="mt-8 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[.18em] text-black">Talk to our team <ArrowRight size={13}/></Link></div></div>
        <div className="relative min-h-[400px]"><Image src="/images/robotics/robotics-hero.png" alt="Antellay X robot working in industry" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-right grayscale contrast-125"/><div className="absolute inset-0 bg-gradient-to-r from-[#f7f8fa] via-transparent to-transparent"/></div>
      </section>

      <section className="relative min-h-[480px] overflow-hidden border-b border-black/10 bg-white">
        <Image src="/images/products/antellay-x-reference.png" alt="Connected Antellay X machine ecosystem" fill sizes="100vw" className="object-cover object-[center_77%] opacity-35 grayscale"/>
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/88 to-white/25"/>
        <div className="relative mx-auto flex min-h-[480px] max-w-[1400px] items-center px-6 py-16 md:px-10 lg:px-14"><div><p className="text-xs font-black uppercase tracking-[.36em] text-[#00A98F]">Unified autonomy</p><h2 className="mt-6 text-4xl font-light uppercase leading-tight tracking-[.15em]">One intelligence.<br/>Infinite machines.</h2><p className="mt-6 max-w-md text-base leading-8 text-black/48">Connected. Synchronized. Scalable. One operating layer across every autonomous domain.</p></div></div>
      </section>

      <section className="relative isolate min-h-[530px] overflow-hidden bg-[#e9eef4]">
        <Image src="/images/future-ai-robot.png" alt="Antellay X future of physical intelligence" fill sizes="100vw" className="-z-20 object-cover object-center grayscale contrast-125"/>
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#f7f8fa_0%,rgba(247,248,250,.9)_45%,rgba(247,248,250,.2)_100%)]"/>
        <div className="mx-auto flex min-h-[530px] max-w-[1400px] items-center px-6 py-20 md:px-10 lg:px-14"><div><p className="text-xs font-black uppercase tracking-[.38em] text-[#00A98F]">The future is physical</p><h2 className="mt-7 text-4xl font-light uppercase tracking-[.2em] sm:text-6xl">Antellay-X</h2><Link href="/contact" className="mt-9 inline-flex items-center gap-3 rounded-full bg-white px-7 py-3 text-xs font-black uppercase tracking-[.17em] text-black shadow-lg transition hover:bg-black hover:!text-white">Enter the future <ArrowRight size={14}/></Link></div></div>
      </section>
    </main>
  );
}
