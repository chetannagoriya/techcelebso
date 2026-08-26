import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart3, BrainCircuit, LockKeyhole, MessageCircle, Network, Sparkles, Workflow, Zap } from "lucide-react";

const overview = [
  [MessageCircle, "Natural Language Interface", "Ask anything in plain English and get instant answers."],
  [BarChart3, "Real-Time Dashboards", "AI generates live dashboards and reports from your questions."],
  [Network, "CRM & Tool Integrations", "Connect CRM, ERP, email and third-party tools."],
  [Workflow, "Automated Reports", "Schedule and receive automated reports, delivered to you."],
  [Sparkles, "Actionable Insights", "Turn data into insights so your team can take action faster."],
  [LockKeyhole, "Enterprise Security", "Bank-grade security, access controls and data privacy."],
];

const steps = [
  [MessageCircle, "Ask Anything", "Type or speak your question."],
  [BrainCircuit, "AI Understands", "Byizon reads context and connected data."],
  [BarChart3, "Generate Insights", "Dashboards, reports and charts appear instantly."],
  [Zap, "Take Action", "Act directly from the platform."],
];

const modules = [
  ["Byizon CRM", "Manage leads, deals, customers and pipelines in one intelligent CRM."],
  ["Byizon DSI", "Dynamic Software Interface that automatically builds screens and workflows."],
  ["Byizon Analytics", "Advanced analytics and visualizations that help you make better decisions."],
  ["Byizon Automate", "Automate tasks, notifications and workflows across your business."],
  ["Byizon AI Assistant", "Your AI business assistant, available 24/7 to help with anything."],
];

const integrations = ["Salesforce", "HubSpot", "Zoho", "Microsoft 365", "SAP", "Oracle", "Gmail", "Slack", "+ More"];

export const metadata = {
  title: "Byizon | AI Business Operating System",
  description: "Run your business through conversation with Byizon AI.",
};

function DashboardPreview({ compact = false }) {
  return (
    <div className={`overflow-hidden rounded-xl ${compact ? "h-32 bg-[#06152f] text-white" : "bg-[#f8fbff] p-4 text-[#07152f] shadow-2xl"}`}>
      {!compact && <div className="mb-3 flex items-center justify-between border-b border-slate-200 pb-3"><b className="flex items-center gap-2 text-xs"><span className="grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 text-[9px] text-white">B</span>Byizon AI</b><span className="text-[9px] text-blue-600">Generating your dashboard...</span></div>}
      <div className={`grid ${compact ? "h-full grid-cols-3 gap-1 p-2" : "grid-cols-2 gap-3 sm:grid-cols-4"}`}>
        {(compact ? [62, 84, 48] : ["$8.42M", "124", "1,243", "$67.8K"]).map((value, index) => (
          <div key={value} className={`rounded-lg p-2 ${compact ? "border border-white/10 bg-white/[.06]" : "border border-slate-200 bg-white shadow-sm"}`}>
            {!compact && <><span className="text-[8px] text-slate-500">{["Total Revenue", "Deals Closed", "Active Customers", "Avg Deal Size"][index]}</span><b className="mt-1 block text-lg">{value}</b><span className="text-[8px] text-emerald-600">+12.6%</span></>}
            {compact && <div className="flex h-full items-end gap-1">{[.4, .75, .55, .9, .66].map((height, bar) => <span key={bar} className="flex-1 rounded-t bg-gradient-to-t from-[#1677ff] to-[#43c9e8]" style={{ height: `${height * Number(value)}%` }} />)}</div>}
          </div>
        ))}
      </div>
      {!compact && <div className="mt-3 grid grid-cols-3 gap-3"><div className="h-36 rounded-lg border border-slate-200 bg-[linear-gradient(145deg,transparent_44%,#1688ff_45%,#1688ff_48%,transparent_49%)]" /><div className="grid h-36 place-items-center rounded-lg border border-slate-200 bg-white"><div className="grid h-20 w-20 place-items-center rounded-full bg-[conic-gradient(#1688ff_0_45%,#44d1c5_45%_70%,#dbe4f1_70%)]"><span className="h-11 w-11 rounded-full bg-white" /></div></div><div className="space-y-4 rounded-lg border border-slate-200 bg-white p-4">{[90, 72, 60, 45].map((width) => <div key={width} className="h-2 rounded bg-slate-100"><div className="h-full rounded bg-[#1688ff]" style={{ width: `${width}%` }} /></div>)}</div></div>}
    </div>
  );
}

export default function ByizonAiPage() {
  return (
    <main className="bg-white text-[#07152f] dark:bg-white dark:text-[#07152f]">
      <section className="relative overflow-hidden bg-[#030c1d] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_50%,rgba(16,119,255,.3),transparent_38%)]" />
        <div className="relative mx-auto grid min-h-[560px] max-w-[1440px] items-center gap-12 px-6 py-14 md:px-10 lg:grid-cols-[.78fr_1.22fr] lg:px-14">
          <div>
            <div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-[#69bdff] to-[#075fd8] font-black">B</span><b className="text-3xl tracking-[.08em]">BYIZON</b></div>
            <span className="mt-4 inline-flex rounded-full border border-blue-400/25 bg-blue-400/10 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[.13em] text-blue-200">AI Business Operating System</span>
            <h1 className="mt-7 text-4xl font-black leading-[1.08] tracking-[-.04em] sm:text-5xl">Run Your Business.<br /><span className="text-[#50a8ff]">Through Conversation.</span></h1>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/68">Byizon connects to your CRM and enterprise tools. Ask questions in natural language and instantly get real-time reports, dashboards, insights and action—automatically.</p>
            <div className="mt-5 flex flex-wrap gap-2">{["AI-Powered", "Real-Time Insights", "Smart Dashboards", "Enterprise Ready"].map((tag) => <span key={tag} className="rounded-md border border-white/15 px-3 py-2 text-[9px] text-white/70">{tag}</span>)}</div>
            <div className="mt-7 flex flex-wrap gap-3"><Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-[#1677ff] px-7 py-3.5 text-sm font-black !text-white">Book a Demo <ArrowRight size={15} /></Link><Link href="#overview" className="rounded-lg border border-white/40 px-7 py-3.5 text-sm font-bold !text-white">Explore Byizon</Link></div>
          </div>
          <div className="relative pt-14"><div className="absolute -inset-8 bg-blue-500/15 blur-3xl" /><div className="absolute right-[7%] top-0 z-20 max-w-[250px] rounded-2xl rounded-br-sm bg-gradient-to-r from-[#1688ff] to-[#55b8ff] px-5 py-4 text-xs font-semibold leading-5 shadow-xl">Show me this month&apos;s sales performance by region.</div><div className="absolute -right-4 top-14 h-[88%] w-[92%] rounded-2xl border border-white/25 bg-[#07152f] shadow-2xl"><div className="flex h-8 items-center gap-1.5 border-b border-white/10 px-4"><span className="h-2 w-2 rounded-full bg-red-400/70"/><span className="h-2 w-2 rounded-full bg-amber-300/70"/><span className="h-2 w-2 rounded-full bg-emerald-400/70"/></div></div><div className="relative z-10 mt-10 rounded-2xl border border-blue-100 bg-[#f8fbff] p-4 shadow-2xl"><DashboardPreview /></div></div>
        </div>
      </section>

      <section className="px-6 py-14 md:px-10" id="overview">
        <div className="mx-auto max-w-[1360px] text-center"><p className="text-[10px] font-black uppercase tracking-[.14em] text-[#1677ff]">Overview</p><h2 className="mt-3 text-3xl font-black tracking-[-.035em]">The <span className="text-[#1677ff]">AI Operating System</span> for Modern Enterprises</h2><p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-500">Connect people, data and processes into one intelligent system.</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">{overview.map(([Icon, title, copy]) => <article key={title} className="rounded-xl border border-slate-200 bg-white p-5 text-left shadow-sm"><span className="grid h-11 w-11 place-items-center rounded-full bg-blue-50 text-[#1677ff]"><Icon size={20} /></span><h3 className="mt-5 text-sm font-black">{title}</h3><p className="mt-3 text-xs leading-5 text-slate-500">{copy}</p></article>)}</div>
        </div>
      </section>

      <section className="px-6 py-10 md:px-10">
        <div className="mx-auto grid max-w-[1360px] gap-10 border-t border-slate-200 pt-10 lg:grid-cols-2 lg:items-center">
          <div><span className="rounded-full bg-blue-50 px-3 py-2 text-[10px] font-black uppercase text-[#1677ff]">How it works</span><h2 className="mt-5 text-3xl font-black tracking-[-.035em]">Simple. Intelligent. Powerful.</h2><p className="mt-3 max-w-lg text-sm leading-6 text-slate-500">Byizon understands your question, fetches the right data, creates visual insights and helps you take action.</p><div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-4">{steps.map(([Icon, title, copy], index) => <div key={title} className="relative text-center">{index < 3 && <span className="absolute -right-3 top-6 hidden text-blue-300 sm:block">•••</span>}<span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-blue-50 text-[#1677ff]"><Icon size={23} /></span><b className="mt-3 block text-[11px]">{title}</b><p className="mt-2 text-[9px] leading-4 text-slate-500">{copy}</p></div>)}</div></div>
          <div className="relative h-[360px] overflow-hidden rounded-2xl"><Image src="/images/products/byizon/analyst-dashboard.png" alt="Business analyst reviewing a Byizon dashboard" fill sizes="(max-width: 1024px) 100vw, 680px" className="object-cover" /></div>
        </div>
      </section>

      <section className="px-6 py-14 md:px-10">
        <div className="mx-auto max-w-[1360px] text-center"><p className="text-[10px] font-black uppercase tracking-[.14em] text-[#1677ff]">Powerful Modules</p><h2 className="mt-3 text-3xl font-black tracking-[-.035em]">Everything You Need to Run Your Business</h2><div className="mt-8 grid gap-3 md:grid-cols-5">{modules.map(([title, copy]) => <article key={title} className="overflow-hidden rounded-xl border border-slate-200 bg-white text-left shadow-sm"><DashboardPreview compact /><div className="p-5"><h3 className="text-sm font-black">{title}</h3><p className="mt-3 text-xs leading-5 text-slate-500">{copy}</p></div></article>)}</div></div>
      </section>

      <section className="px-6 pb-14 md:px-10"><div className="mx-auto max-w-[1360px] text-center"><p className="text-[10px] font-black uppercase tracking-[.14em] text-[#1677ff]">Integrates With Your Favorite Tools</p><div className="mt-6 grid grid-cols-3 gap-3 md:grid-cols-9">{integrations.map((name) => <div key={name} className="grid min-h-16 place-items-center rounded-xl border border-slate-200 bg-white px-3 text-xs font-black text-slate-600 shadow-sm">{name}</div>)}</div></div></section>

      <section className="px-6 pb-16 md:px-10"><div className="mx-auto flex max-w-[1360px] flex-col justify-between gap-6 rounded-2xl bg-[#06152f] p-8 text-white md:flex-row md:items-center"><div><h2 className="text-2xl font-black">Ready to Run Your Business Smarter with Byizon?</h2><p className="mt-2 text-sm text-white/60">Book a demo and see how Byizon can transform your business operations.</p></div><div className="flex flex-wrap gap-3"><Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-[#1677ff] px-6 py-3 text-sm font-black !text-white">Book a Demo <ArrowRight size={15} /></Link><Link href="/contact" className="rounded-lg border border-white/35 px-6 py-3 text-sm font-bold !text-white">Talk to an Expert</Link></div></div></section>
    </main>
  );
}
