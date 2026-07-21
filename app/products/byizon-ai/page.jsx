import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart3, Bot, Brain, Building2, Check, Database, Lock, MessageSquareText, Mic, Play, ShieldCheck, SlidersHorizontal, Workflow, Zap } from "lucide-react";

export const metadata = {
  title: "Byizon.ai | AI Business Operating System",
  description: "Byizon.ai connects CRM, business tools and data through natural language dashboards, reports, automations and AI recommendations.",
};

const logos = ["salesforce", "HubSpot", "Microsoft", "ZOHO", "SAP", "ORACLE", "pipedrive", "Freshsales"];

const heroFeatures = [
  [MessageSquareText, "Natural Language", "Ask anything"],
  [BarChart3, "Real-time Insights", "Live dashboards"],
  [Workflow, "AI Automation", "Smart workflows"],
  [ShieldCheck, "Enterprise Ready", "Secure & scalable"],
  [Building2, "Works with your CRM", "No switch. Just connect."],
];

const howItWorks = [
  [Mic, "Voice Commands", "Speak naturally to Byizon AI"],
  [MessageSquareText, "Conversational AI", "Understands intent and context"],
  [Brain, "Intelligent Engine", "Analyzes data and generates insights"],
  [Database, "Business Memory", "Stores context for smarter responses"],
  [Workflow, "Enterprise Connectors", "Connects all your business systems"],
  [SlidersHorizontal, "Dynamic Software Interface (DSI)", "Creates dashboards, reports & workflows in real-time"],
  [BarChart3, "Real-time Output", "Dashboards, reports, alerts & insights"],
];

const sideActions = [
  [Mic, "Ask in Natural Language", "Ask questions the way you think."],
  [BarChart3, "Get Instant Dashboards", "AI creates beautiful, real-time dashboards for you."],
  [Zap, "Take Action", "Drill down, export, share and automate workflows."],
];

const integrations = {
  CRM: ["Salesforce", "HubSpot", "Zoho CRM", "Pipedrive", "Microsoft Dynamics"],
  "ERP & Finance": ["SAP", "Oracle", "QuickBooks", "Zoho Books", "Tally"],
  "HR & Payroll": ["Workday", "Darwinbox", "BambooHR", "ADP", "Keka"],
  Marketing: ["Google Analytics", "Meta Ads", "LinkedIn Ads", "Mailchimp", "Salesforce Marketing Cloud"],
  Collaboration: ["Slack", "Microsoft Teams", "Gmail", "Outlook", "Google Workspace"],
  "Market Intelligence": ["Bloomberg", "Reuters", "Yahoo Finance", "Finnhub"],
  "And More": ["Custom APIs", "Databases", "Cloud Storage", "Other Apps"],
};

const roles = [
  ["CEO", "Executive overview, KPIs & decisions"],
  ["COO", "Operations, efficiency & performance"],
  ["Sales Head", "Pipeline, revenue, deals & forecasts"],
  ["Finance Head", "P&L, cash flow, budgets & variance"],
  ["HR Head", "Workforce, attendance, payroll & engagement"],
  ["Marketing Head", "Campaigns, ROI, leads & conversions"],
];

const impact = [
  ["70%", "Less Reporting Time"],
  ["95%", "Faster Decision Making"],
  ["80%", "Process Automation"],
  ["10x", "Executive Productivity"],
];

function SectionTitle({ children }) {
  return <p className="text-center text-xs font-black uppercase tracking-[.14em] text-[#142c85]">{children}</p>;
}

function WhiteCard({ children, className = "" }) {
  return <div className={`rounded-2xl border border-[#e7ebf4] bg-white shadow-[0_10px_35px_rgba(15,23,42,.05)] ${className}`}>{children}</div>;
}

export default function ByizonAiPage() {
  return (
    <main className="bg-white text-[#07152f] dark:bg-white dark:text-[#07152f]">
      <section className="relative overflow-hidden bg-[#051025] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_7%_48%,rgba(30,103,255,.72),transparent_31%),radial-gradient(circle_at_90%_48%,rgba(150,54,255,.66),transparent_32%)]" />
        <div className="absolute inset-0 opacity-70 [background:linear-gradient(105deg,transparent_8%,rgba(83,129,255,.55)_24%,transparent_42%,transparent_57%,rgba(172,55,255,.48)_76%,transparent_94%)]" />

        <nav className="relative mx-auto flex max-w-[1480px] items-center justify-between px-7 py-7 lg:px-14">
          <Link href="/products" className="text-[34px] font-black leading-none tracking-[-.13em]">BYIZON</Link>
          <div className="hidden items-center gap-8 text-[13px] font-bold text-white/82 lg:flex">
            {["Product⌄", "Solutions⌄", "AI Agents", "Integrations⌄", "Industries⌄", "Resources⌄", "Pricing"].map((item) => <span key={item}>{item}</span>)}
          </div>
          <div className="flex items-center gap-3">
            <Link href="/contact" className="rounded-xl bg-[#4058ff] px-6 py-3 text-sm font-black shadow-lg shadow-blue-950/40">Book a Demo</Link>
            <Link href="/contact" className="hidden rounded-xl border border-white/35 px-6 py-3 text-sm font-black sm:block">Sign In</Link>
          </div>
        </nav>

        <div className="relative mx-auto max-w-[1480px] px-7 pb-12 pt-4 text-center lg:px-14">
          <h1 className="text-[82px] font-black leading-none tracking-[-.12em] sm:text-[120px] lg:text-[158px]">BYIZON</h1>
          <h2 className="mx-auto mt-2 max-w-4xl text-[34px] font-black leading-[1.08] tracking-[-.04em] md:text-[46px]">
            The AI Business Operating System <br className="hidden md:block" />that <span className="text-[#8c83ff]">runs your entire company.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] font-medium leading-7 text-white/75">
            Connect your CRM and business tools. Ask anything in natural language. Get real-time dashboards, reports and AI recommendations instantly.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl bg-[#4058ff] px-8 py-4 text-sm font-black">Book a Demo <ArrowRight size={16} /></Link>
            <Link href="#tour" className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-black/10 px-8 py-4 text-sm font-black">Watch Product Tour <Play size={15} /></Link>
          </div>
          <div className="mx-auto mt-9 grid max-w-6xl grid-cols-2 gap-4 md:grid-cols-5">
            {heroFeatures.map(([Icon, title, copy]) => (
              <div key={title} className="flex items-center gap-3 text-left">
                <Icon size={28} className="text-[#a9a4ff]" />
                <div><b className="text-[13px]">{title}</b><p className="text-xs text-white/62">{copy}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#edf0f6] bg-white px-7 py-7 lg:px-14">
        <SectionTitle>Trusted by 10,000+ businesses worldwide</SectionTitle>
        <div className="mx-auto mt-5 grid max-w-[1380px] grid-cols-2 gap-0 overflow-hidden rounded-2xl border border-[#e7ebf4] md:grid-cols-4 lg:grid-cols-8">
          {logos.map((logo) => (
            <div key={logo} className="grid h-[76px] place-items-center border-b border-r border-[#edf0f6] bg-white px-4 text-center text-[20px] font-black tracking-[-.04em] text-slate-700 last:border-r-0">
              {logo}
            </div>
          ))}
        </div>
      </section>

      <section className="px-7 py-8 lg:px-14">
        <SectionTitle>How Byizon Works</SectionTitle>
        <div className="mx-auto mt-6 grid max-w-[1380px] gap-3 lg:grid-cols-7">
          {howItWorks.map(([Icon, title, copy], index) => (
            <WhiteCard key={title} className="relative p-5 text-center">
              {index < howItWorks.length - 1 && <span className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-2xl font-black text-[#4058ff] lg:block">→</span>}
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-[#f2f3ff] text-[#4058ff]"><Icon size={24} /></span>
              <h3 className="mt-4 text-[13px] font-black">{title}</h3>
              <p className="mt-2 text-xs leading-5 text-slate-500">{copy}</p>
            </WhiteCard>
          ))}
        </div>
      </section>

      <section className="px-7 py-8 lg:px-14" id="tour">
        <SectionTitle>Experience Byizon in Action</SectionTitle>
        <div className="mx-auto mt-6 grid max-w-[1380px] gap-5 lg:grid-cols-[240px_1fr_260px]">
          <div className="grid gap-4">
            {sideActions.map(([Icon, title, copy]) => (
              <WhiteCard key={title} className="p-5">
                <Icon size={26} className="text-[#4058ff]" />
                <h3 className="mt-4 text-sm font-black">{title}</h3>
                <p className="mt-2 text-xs leading-6 text-slate-500">{copy}</p>
              </WhiteCard>
            ))}
          </div>

          <WhiteCard className="overflow-hidden bg-[#08132b] p-4">
            <div className="relative min-h-[505px] overflow-hidden rounded-2xl bg-[#08132b]">
              <Image src="/images/products/byizon-ai.jpeg" alt="Byizon dashboard interface" fill sizes="(min-width: 1024px) 62vw, 100vw" className="object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08132b]/50 via-transparent to-transparent" />
            </div>
          </WhiteCard>

          <div className="rounded-[34px] border-[10px] border-[#070b18] bg-[#071225] p-5 text-white shadow-2xl">
            <p className="text-xs text-white/50">Byizon AI</p>
            <h3 className="mt-2 text-xl font-black">AI Business Assistant</h3>
            <div className="mt-6 rounded-2xl bg-white/8 p-4 text-xs leading-6 text-white/70">
              Show me this month’s revenue, top performing products and sales by region.
            </div>
            <div className="mt-5 rounded-2xl border border-white/10 p-4">
              <p className="text-xs text-white/50">Total Revenue</p>
              <b className="text-2xl">₹148,250</b>
              <p className="text-xs text-emerald-300">+24.5%</p>
            </div>
            <div className="mt-4 h-24 rounded-2xl bg-[linear-gradient(135deg,#213bff,#794cff,#21d9a2)] opacity-90" />
          </div>
        </div>
      </section>

      <section className="px-7 py-8 lg:px-14">
        <SectionTitle>Connect all your business systems</SectionTitle>
        <div className="mx-auto mt-6 grid max-w-[1380px] gap-3 md:grid-cols-2 lg:grid-cols-7">
          {Object.entries(integrations).map(([group, apps]) => (
            <WhiteCard key={group} className="p-5">
              <h3 className="text-center text-xs font-black uppercase text-[#07152f]">{group}</h3>
              <ul className="mt-4 space-y-3">
                {apps.map((app) => <li key={app} className="flex items-center gap-2 text-xs font-bold text-slate-500"><Check size={14} className="text-[#4058ff]" /> {app}</li>)}
              </ul>
            </WhiteCard>
          ))}
        </div>
        <p className="mt-5 text-center text-xs font-semibold text-slate-500">100+ integrations and counting. Connect what you use, not what we choose.</p>
      </section>

      <section className="mx-auto grid max-w-[1380px] gap-5 px-7 py-8 lg:grid-cols-[1.05fr_1.35fr_1fr_.95fr] lg:px-14">
        <WhiteCard className="p-5">
          <SectionTitle>Built for every role</SectionTitle>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {roles.map(([role, copy]) => <div key={role} className="rounded-xl bg-[#f7f6ff] p-4"><b className="text-sm text-[#4058ff]">{role}</b><p className="mt-2 text-xs leading-5 text-slate-500">{copy}</p></div>)}
          </div>
        </WhiteCard>

        <WhiteCard className="p-5">
          <SectionTitle>Before Byizon vs After Byizon</SectionTitle>
          <div className="mt-5 overflow-hidden rounded-xl border border-[#e7ebf4]">
            {[
              ["Manual & time consuming", "AI generated in seconds"],
              ["Static & fixed", "Dynamic & on-demand"],
              ["Multiple tools", "All in one AI OS"],
              ["SQL & technical skills", "Natural language"],
              ["Delayed insights", "Real-time intelligence"],
              ["Low productivity", "10x higher productivity"],
            ].map(([before, after]) => <div key={before} className="grid grid-cols-2 border-b border-[#edf0f6] last:border-b-0"><span className="p-3 text-xs text-slate-500">{before}</span><span className="bg-[#f7f6ff] p-3 text-xs font-black text-slate-700">{after}</span></div>)}
          </div>
        </WhiteCard>

        <WhiteCard className="p-5 text-center">
          <SectionTitle>Business Impact</SectionTitle>
          <div className="mt-5 grid grid-cols-2 gap-4">
            {impact.map(([value, label]) => <div key={label}><b className="text-4xl font-black text-[#4058ff]">{value}</b><p className="mt-2 text-xs font-black text-slate-500">{label}</p></div>)}
          </div>
          <p className="mt-6 text-xs leading-6 text-slate-500">Byizon helps leaders save time, reduce costs and make smarter decisions every day.</p>
        </WhiteCard>

        <WhiteCard className="p-5">
          <SectionTitle>Enterprise Grade Security</SectionTitle>
          <div className="mt-5 space-y-3">
            {["SOC 2 Compliant", "ISO 27001 Certified", "GDPR Compliant", "Role Based Access", "End-to-End Encryption", "Audit Logs & Monitoring"].map((item) => <p key={item} className="flex items-center gap-2 text-xs font-black text-slate-600"><Lock size={14} className="text-[#4058ff]" /> {item}</p>)}
          </div>
        </WhiteCard>
      </section>

      <section className="px-7 pb-16 pt-8 lg:px-14">
        <div className="mx-auto grid max-w-[1380px] gap-6 rounded-3xl bg-[#071024] p-9 text-white md:grid-cols-[1fr_auto] md:items-center md:p-12">
          <div>
            <h2 className="text-4xl font-black tracking-[-.04em]">Run Your Company. Through Conversation.</h2>
            <p className="mt-3 text-white/70">One AI system. Every data. Smarter decisions.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl bg-[#7658ff] px-7 py-4 text-sm font-black">Book a Demo <ArrowRight size={16} /></Link>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-7 py-4 text-sm font-black">Talk to an Expert <Bot size={16} /></Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#edf0f6] px-7 py-10 lg:px-14">
        <div className="mx-auto flex max-w-[1380px] flex-col justify-between gap-6 text-sm text-slate-500 md:flex-row">
          <div><b className="text-3xl font-black tracking-[-.13em] text-[#07152f]">BYIZON</b><p className="mt-3 max-w-sm">The AI business operating system that runs your entire company.</p></div>
          <div className="flex flex-wrap gap-8 font-bold">{["Product", "Solutions", "Integrations", "Resources", "Contact"].map((item) => <span key={item}>{item}</span>)}</div>
        </div>
      </footer>
    </main>
  );
}
