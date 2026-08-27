import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BatteryCharging, Brain, Cpu, Lightbulb, Lock, Mic, Sparkles, Thermometer, Volume2, Wifi, Zap } from "lucide-react";

export const metadata = {
  title: "Grehni.ai | Spatial AI Operating System",
  description: "Grehni.ai is a voice-first spatial AI operating system for homes, hotels, offices and venues.",
};

const stats = [
  ["40%", "Energy Reduction"],
  ["<0.3s", "Voice Response"],
  ["200+", "Integrations"],
  ["99.9%", "Uptime"],
];

const intelligence = [
  [Mic, "360° Voice Capture", "Far-field mics that hear you clearly, anywhere."],
  [Lock, "Privacy by Design", "No always-on cloud. Your data stays yours."],
  [Cpu, "On-device Intelligence", "Processes locally for speed, privacy and reliability."],
  [Volume2, "Natural Interaction", "Human-like conversations with real understanding."],
];

const spaces = [
  ["Luxury Homes", "Comfort that anticipates"],
  ["Hotels & Resorts", "Guest experience redefined"],
  ["Corporate Offices", "Smarter workplaces"],
  ["Retail & Venues", "Engage. Automate. Scale."],
  ["Healthcare", "Better care environments"],
  ["Campuses", "Safe. Smart. Scalable."],
];

const components = [
  ["Acoustic", "Microphone Array"],
  ["Audio", "High Fidelity Speaker"],
  ["Compute", "AI Processing Chip"],
  ["Connectivity", "Wi‑Fi, Zigbee, BLE"],
  ["Design", "Premium Build"],
];

const automation = [
  [Thermometer, "Temperature", "24°C"],
  [Brain, "AI Decision", "Optimize Comfort"],
  [Zap, "AC", "Turns On"],
  [Lightbulb, "Lights", "Dim 40%"],
  [BatteryCharging, "Energy", "Saving 12%"],
];

function SectionLabel({ children }) {
  return <p className="text-[10px] font-black uppercase tracking-[.28em] text-emerald-400/70">{children}</p>;
}

function DarkPanel({ children, className = "" }) {
  return <div className={`rounded-3xl border border-white/8 bg-white/[.035] shadow-[0_30px_90px_rgba(0,0,0,.28)] ${className}`}>{children}</div>;
}

function DeviceVisual({ compact = false }) {
  return (
    <div className={`relative mx-auto grid place-items-center ${compact ? "h-56 w-56" : "h-[430px] w-full"}`}>
      <div className="absolute h-72 w-72 rounded-full bg-emerald-400/25 blur-3xl" />
      <div className="absolute h-56 w-56 rounded-full bg-cyan-500/15 blur-3xl" />
      <div className={`${compact ? "h-32 w-32 rounded-[2rem]" : "h-64 w-64 rounded-[3.4rem]"} relative grid place-items-center bg-[linear-gradient(145deg,#262d2c,#050808_65%)] shadow-[inset_12px_12px_30px_rgba(255,255,255,.08),inset_-20px_-20px_40px_rgba(0,0,0,.8),0_35px_80px_rgba(0,0,0,.55)]`}>
        <div className={`${compact ? "h-16 w-16" : "h-28 w-28"} grid place-items-center rounded-full border-[6px] border-emerald-400/85 bg-emerald-400/10 shadow-[0_0_55px_rgba(16,185,129,.65)]`}>
          <div className={`${compact ? "h-5 w-5" : "h-9 w-9"} rounded-lg bg-emerald-400`} />
        </div>
        <span className="absolute bottom-10 text-sm font-semibold text-white/18">Grehni</span>
      </div>
      <div className="absolute bottom-10 h-16 w-72 rounded-[50%] bg-black/70 blur-md" />
    </div>
  );
}

export default function GrehniAiPage() {
  return (
    <main className="bg-[#020807] text-white dark:bg-[#020807]">
      <section className="relative overflow-hidden border-b border-white/8 bg-[#020807]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_22%,rgba(16,185,129,.38),transparent_28%),radial-gradient(circle_at_45%_48%,rgba(0,174,255,.16),transparent_35%)]" />
        <div className="relative mx-auto grid min-h-[610px] max-w-[1380px] items-center gap-10 px-7 py-12 lg:grid-cols-[.9fr_1.1fr] lg:px-14">
          <div>
            <SectionLabel>The AI Operating System</SectionLabel>
            <h1 className="mt-6 max-w-3xl font-serif text-[58px] leading-[.98] tracking-[-.05em] text-white md:text-[82px]">
              The operating system <br />for <span className="italic text-emerald-400">every space.</span>
            </h1>
            <p className="mt-6 max-w-md text-sm leading-7 text-white/62">
              Grehni is an AI-native platform that gives any space — hotel, office, home, or venue — a voice, a brain, and full autonomous control.
            </p>
            <Link href="https://grahni.in" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-7 py-4 text-xs font-black text-[#02120d] transition hover:bg-emerald-400">Explore Grehni <ArrowRight size={15} /></Link>
            <div className="mt-12 grid max-w-xl grid-cols-2 gap-7 sm:grid-cols-4">
              {stats.map(([value, label]) => <div key={label}><b className="font-serif text-3xl text-emerald-400">{value}</b><p className="mt-1 text-[10px] uppercase tracking-[.18em] text-white/38">{label}</p></div>)}
            </div>
          </div>
          <div className="relative">
            <DeviceVisual />
            <div className="absolute bottom-8 right-2 rounded-2xl border border-emerald-400/15 bg-white/[.06] px-5 py-4 backdrop-blur">
              <p className="flex items-center gap-2 text-xs font-bold text-emerald-300"><Sparkles size={15} /> Spatial AI</p>
              <p className="mt-1 text-[11px] text-white/45">Now in Beta</p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid border-b border-white/8 lg:grid-cols-[.34fr_1fr_.24fr]">
        <div className="px-7 py-14 lg:px-14">
          <SectionLabel>Voice-first AI</SectionLabel>
          <h2 className="mt-5 font-serif text-4xl leading-tight">Talk to your space. <br /><span className="italic text-white/80">It listens.</span></h2>
          <p className="mt-5 max-w-xs text-sm leading-7 text-white/52">Natural conversations in any language. Grehni understands context, people, and your environment.</p>
        </div>
        <div className="relative grid min-h-[280px] place-items-center border-x border-white/8 px-7 py-12">
          <div className="absolute h-px w-[78%] bg-gradient-to-r from-transparent via-emerald-400/70 to-transparent" />
          <div className="relative grid h-28 w-28 place-items-center rounded-full border border-emerald-400/30 bg-emerald-400/8 shadow-[0_0_70px_rgba(16,185,129,.35)]"><Mic className="text-emerald-300" size={34} /></div>
          <span className="absolute left-[18%] top-1/2 -translate-y-1/2 text-sm text-white/55">“Hey Grehni...”</span>
          <span className="absolute bottom-12 text-sm text-white/55">Listening...</span>
        </div>
        <div className="grid place-items-center px-7 py-12">
          <DarkPanel className="px-7 py-6">
            <p className="flex items-center gap-2 text-lg font-bold text-emerald-300"><Lightbulb size={20} /> Lights ON</p>
            <p className="mt-2 text-xs text-white/42">Living Room</p>
          </DarkPanel>
        </div>
      </section>

      <section className="border-b border-white/8 px-7 py-16 lg:px-14">
        <div className="mx-auto grid max-w-[1380px] items-center gap-10 lg:grid-cols-[.28fr_1fr]">
          <div>
            <SectionLabel>Built for real spaces</SectionLabel>
            <h2 className="mt-5 font-serif text-4xl leading-tight">One device. <br />Infinite intelligence.</h2>
          </div>
          <div className="relative">
            <DeviceVisual compact />
            <div className="grid gap-4 md:grid-cols-2">
              {intelligence.map(([Icon, title, copy], index) => (
                <DarkPanel key={title} className={`p-5 ${index % 2 === 0 ? "md:-translate-y-4" : "md:translate-y-6"}`}>
                  <Icon className="text-emerald-300" size={24} />
                  <h3 className="mt-3 text-sm font-black">{title}</h3>
                  <p className="mt-2 text-xs leading-6 text-white/48">{copy}</p>
                </DarkPanel>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="grid border-b border-white/8 lg:grid-cols-[.28fr_1fr]">
        <div className="px-7 py-16 lg:px-14">
          <SectionLabel>Control Everything</SectionLabel>
          <h2 className="mt-5 font-serif text-4xl leading-tight">See everything. <br />Control naturally.</h2>
          <p className="mt-5 text-sm leading-7 text-white/52">From a single dashboard, manage every device, scene, and system in real-time.</p>
          <div className="mt-8 space-y-5 text-sm text-white/55">
            <p className="flex gap-3"><Mic className="text-emerald-300" size={18} /> Voice Command</p>
            <p className="flex gap-3"><Brain className="text-emerald-300" size={18} /> AI Processing</p>
            <p className="flex gap-3"><Zap className="text-emerald-300" size={18} /> Action Executed</p>
          </div>
        </div>
        <div className="px-7 py-16">
          <DarkPanel className="overflow-hidden p-4">
            <div className="relative min-h-[450px] rounded-2xl bg-[#071210]">
              <Image src="/images/products/grehni-ai.jpeg" alt="Grehni AI dashboard" fill sizes="(min-width: 1024px) 70vw, 100vw" className="object-cover object-top opacity-85" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020807]/45 via-transparent to-transparent" />
            </div>
          </DarkPanel>
        </div>
      </section>

      <section className="border-b border-white/8 px-7 py-16 lg:px-14">
        <div className="mx-auto grid max-w-[1380px] items-center gap-10 lg:grid-cols-[.26fr_1fr]">
          <div>
            <SectionLabel>Autonomous Automation</SectionLabel>
            <h2 className="mt-5 font-serif text-4xl leading-tight">Grehni thinks. <br />Your space responds.</h2>
            <p className="mt-5 text-sm leading-7 text-white/52">Real-time decisions based on people, context, and environment.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-5">
            {automation.map(([Icon, title, copy], index) => (
              <DarkPanel key={title} className="relative p-5 text-center">
                {index < automation.length - 1 && <span className="absolute -right-4 top-1/2 hidden -translate-y-1/2 text-emerald-400 md:block">→</span>}
                <Icon className="mx-auto text-emerald-300" size={28} />
                <h3 className="mt-4 text-sm font-black">{title}</h3>
                <p className="mt-2 text-xs text-white/48">{copy}</p>
              </DarkPanel>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/8 px-7 py-16 lg:px-14">
        <div className="mx-auto max-w-[1380px]">
          <SectionLabel>Made for every space</SectionLabel>
          <div className="mt-6 grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {spaces.map(([title, copy]) => (
              <DarkPanel key={title} className="overflow-hidden">
                <div className="relative h-36 bg-[#071210]">
                  <Image src="/images/products/grehni-ai.jpeg" alt={`${title} Grehni use case`} fill sizes="220px" className="object-cover object-top opacity-70" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020807] to-transparent" />
                </div>
                <div className="p-4"><h3 className="text-sm font-black">{title}</h3><p className="mt-2 text-xs text-white/45">{copy}</p></div>
              </DarkPanel>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/8 px-7 py-16 lg:px-14" id="technology">
        <div className="mx-auto grid max-w-[1380px] gap-8 lg:grid-cols-[.28fr_1fr]">
          <div>
            <SectionLabel>Engineered Excellence</SectionLabel>
            <h2 className="mt-5 font-serif text-4xl leading-tight">Powerful inside. <br />Beautiful outside.</h2>
            <p className="mt-5 text-sm leading-7 text-white/52">High-performance hardware meets elegant design to deliver unmatched intelligence and reliability.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-5">
            {components.map(([title, copy]) => (
              <DarkPanel key={title} className="p-5 text-center">
                <div className="mx-auto grid h-20 w-20 place-items-center rounded-2xl bg-emerald-400/8 text-emerald-300"><Cpu size={30} /></div>
                <h3 className="mt-4 text-sm font-black">{title}</h3>
                <p className="mt-2 text-xs text-white/45">{copy}</p>
              </DarkPanel>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-7 py-20 text-center lg:px-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_75%,rgba(16,185,129,.3),transparent_28%),radial-gradient(circle_at_75%_70%,rgba(142,74,255,.3),transparent_30%)]" />
        <div className="relative mx-auto grid max-w-[1380px] items-center gap-8 md:grid-cols-[.25fr_1fr_.25fr]">
          <DeviceVisual compact />
          <div>
            <SectionLabel>Ready to transform your space?</SectionLabel>
            <h2 className="mt-5 font-serif text-5xl leading-tight">One system. <br />Limitless <span className="italic text-emerald-400">possibilities.</span></h2>
            <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-8 py-4 text-xs font-black text-[#02120d]">Request Demo <ArrowRight size={15} /></Link>
          </div>
          <div className="mx-auto grid h-48 w-48 place-items-center rounded-[2rem] bg-[linear-gradient(145deg,#2b3432,#050808_68%)] shadow-2xl">
            <Wifi className="text-emerald-300" size={54} />
          </div>
        </div>
      </section>
    </main>
  );
}
