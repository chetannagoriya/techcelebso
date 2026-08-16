"use client";

import React from "react";
import Link from "next/link";
import { 
  CheckCircle2, 
  ArrowRight, 
  Database, 
  ShieldCheck, 
  Users, 
  Clock, 
  Sparkles,
  Check,
  TrendingUp,
  Brain,
  Cpu,
  Layers,
  Award,
  Globe,
  Settings,
  Workflow,
  Search,
  Eye,
  FileText,
  Volume2,
  Activity,
  HeartPulse,
  DollarSign,
  ShoppingCart,
  GraduationCap,
  Building,
  Wrench,
  Truck,
  CloudLightning
} from "lucide-react";

// --- Supported Tools & Platforms Vector Logos ---
const OpenAILogo = () => (
  <span className="flex items-center gap-1.5 text-[10px] font-black text-slate-800 dark:text-slate-200">
    🟢 OpenAI
  </span>
);

const AWSLogo = () => (
  <span className="text-[10px] font-black text-slate-800 dark:text-slate-200">
    aws
  </span>
);

const AzureLogo = () => (
  <span className="text-[10px] font-bold text-[#0089CF]">
    Azure
  </span>
);

const GCPLogo = () => (
  <span className="text-[10px] font-bold text-slate-700 dark:text-slate-300">
    Google Cloud
  </span>
);

const Microsoft365Logo = () => (
  <span className="text-[10px] font-bold text-blue-600">
    Microsoft 365
  </span>
);

const FigmaLogo = () => (
  <span className="text-[10px] font-black text-pink-500">
    Figma
  </span>
);

const JiraLogo = () => (
  <span className="text-[10px] font-bold text-blue-500">
    Jira
  </span>
);

const NotionLogo = () => (
  <span className="text-[10px] font-bold text-slate-800 dark:text-slate-200">
    📓 Notion
  </span>
);

const DockerLogo = () => (
  <span className="text-[10px] font-extrabold text-[#2496ED]">
    🐳 Docker
  </span>
);

const K8sLogo = () => (
  <span className="text-[10px] font-bold text-[#326CE5]">
    ⎈ Kubernetes
  </span>
);

export default function ConsultingPage() {
  const coreServices = [
    {
      title: "AI Strategy Consulting",
      image: "/images/vr-consulting-hero.png",
      description: "Craft winning AI strategies, identify high-impact use cases, and build AI roadmaps that drive measurable results.",
      bullets: [
        "AI Readiness Assessment",
        "Use Case Identification",
        "AI Roadmap & Strategy",
        "Data & AI Governance"
      ],
      color: "border-blue-500",
      iconColor: "bg-blue-500",
      icon: Brain
    },
    {
      title: "Digital Transformation",
      image: "/images/consulting_hero.jpg",
      description: "Reimagine your business with modern technologies, automation, and customer-centric digital solutions.",
      bullets: [
        "Business Process Transformation",
        "Automation & Integration",
        "Change Management",
        "Digital Maturity Assessment"
      ],
      color: "border-purple-500",
      iconColor: "bg-purple-500",
      icon: Workflow
    },
    {
      title: "Technology Consulting",
      image: "/images/careers/strategy-meeting.png",
      description: "Leverage the right technologies and architecture to build scalable, secure, and future-ready solutions.",
      bullets: [
        "Technology Strategy",
        "Architecture Design",
        "Tech Stack Advisory",
        "Modernization Roadmap"
      ],
      color: "border-emerald-500",
      iconColor: "bg-emerald-500",
      icon: Settings
    },
    {
      title: "Product Consulting",
      image: "/images/consulting_cta.jpg",
      description: "Validate ideas, refine product strategy, and build products that users love and businesses can scale.",
      bullets: [
        "Product Strategy",
        "Market & Competitor Research",
        "Product Roadmap",
        "Go-to-Market Strategy"
      ],
      color: "border-orange-500",
      iconColor: "bg-orange-500",
      icon: Sparkles
    },
    {
      title: "Startup MVP Development",
      image: "/images/ai-powered-future-bg.png",
      description: "Build and launch MVPs fast to validate your idea, attract investors, and accelerate your growth journey.",
      bullets: [
        "MVP Strategy & Planning",
        "Rapid MVP Development",
        "User Testing & Validation",
        "Investor-Ready MVPs"
      ],
      color: "border-pink-500",
      iconColor: "bg-pink-500",
      icon: Cpu
    }
  ];

  const approachSteps = [
    { step: "Discover", desc: "Understand your business, challenges, and goals.", icon: Search },
    { step: "Analyze", desc: "Research, assess, and identify opportunities.", icon: Activity },
    { step: "Strategize", desc: "Create a data-driven strategy and actionable roadmap.", icon: Brain },
    { step: "Design", desc: "Design solutions, systems, and experiences.", icon: Layers },
    { step: "Execute", desc: "Build, implement, and scale with agility.", icon: Workflow },
    { step: "Optimize", desc: "Measure, optimize, and drive continuous growth.", icon: TrendingUp }
  ];

  const industries = [
    { name: "Healthcare", icon: HeartPulse },
    { name: "Fintech", icon: DollarSign },
    { name: "E-commerce", icon: ShoppingCart },
    { name: "Education", icon: GraduationCap },
    { name: "Real Estate", icon: Building },
    { name: "Manufacturing", icon: Wrench },
    { name: "Logistics", icon: Truck },
    { name: "SaaS & Software", icon: CloudLightning }
  ];

  const whyChooseUs = [
    "Senior consultants with industry expertise",
    "Proven frameworks and best practices",
    "Data-driven insights and strategies",
    "End-to-end support from strategy to execution",
    "Agile, collaborative, and transparent approach",
    "Focused on measurable business impact"
  ];

  return (
    <main className="service-modern-page consulting-modern-page min-h-screen bg-white transition-colors duration-300 font-[family-name:var(--font-sans)]">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[560px] overflow-hidden bg-[#07101f] py-12 md:flex md:items-center md:py-16">
        <video className="absolute inset-0 h-full w-full object-cover object-center" src="/videos/about-people-progress.mp4" poster="/images/consulting_hero.jpg" autoPlay muted loop playsInline preload="metadata" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07101f]/95 via-[#07101f]/76 to-[#07101f]/24"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#07101f]/60 via-transparent to-[#07101f]/25"></div>
        
        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left text column */}
            <div className="lg:col-span-7 xl:col-span-6 flex flex-col gap-6">
              <div>
                <span className="text-[#00A98F] text-xs font-bold uppercase tracking-widest block mb-3 bg-[#00A98F]/10 px-3 py-1 rounded-full w-fit">
                  Strategy • Innovation • Growth
                </span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.03] tracking-tight font-[family-name:var(--font-heading)]">
                  Consulting That Drives Real Business
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A98F] via-[#70EEFF] to-[#00F5D4]">
                    Transformation
                  </span>
                </h1>
              </div>
              <p className="max-w-2xl text-base md:text-lg text-slate-200 leading-relaxed font-light">
                From strategy to execution, we help businesses unlock growth with AI, technology, and product consulting. Build smarter products, scale faster, and stay ahead of the curve.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-2">
                <Link href="/contact" className="px-6 py-3.5 bg-[#00A98F] hover:bg-[#00A98F]/90 text-white text-sm font-bold rounded-sm shadow-lg shadow-[#00A98F]/20 transition-all hover:-translate-y-0.5">
                  Get Free Consultation →
                </Link>
              </div>

              {/* Badges Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 mt-4 border-t border-slate-800">
                {[
                  { title: "Experienced", desc: "Consultants", icon: Users },
                  { title: "Proven", desc: "Frameworks", icon: Award },
                  { title: "Outcome", desc: "Driven", icon: CheckCircle2 },
                  { title: "End-to-End", desc: "Support", icon: Layers }
                ].map((item, idx) => {
                  const ItemIcon = item.icon;
                  return (
                    <div key={idx} className="flex flex-col items-start gap-1">
                      <ItemIcon size={14} className="text-[#00F5D4]" />
                      <h4 className="text-xs font-black text-white">{item.title}</h4>
                      <p className="text-[9px] text-slate-400 font-bold uppercase">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right mockup column: Business Impact Dashboard */}
            <div className="hidden lg:col-span-7 relative">
              <div className="bg-[#0F172A] border border-slate-800 rounded-sm shadow-2xl p-4 md:p-6 text-white overflow-hidden group">
                
                {/* Visual Header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Business Impact Dashboard</span>
                  </div>
                  <span className="text-[9px] font-bold text-slate-500">Live Status</span>
                </div>

                <div className="grid grid-cols-12 gap-4">
                  
                  {/* Left: Stats & Transformation Roadmap */}
                  <div className="col-span-12 md:col-span-8 space-y-4">
                    {/* Stats Header */}
                    <div className="grid grid-cols-4 gap-2">
                      {[
                        { label: "Projects Delivered", val: "250+" },
                        { label: "Success Rate", val: "98%" },
                        { label: "Happy Clients", val: "120+" },
                        { label: "Avg. ROI Increase", val: "2.8X" }
                      ].map((stat, i) => (
                        <div key={i} className="bg-slate-900 border border-slate-800 p-2 rounded-sm text-center">
                          <p className="text-[6.5px] text-slate-400 uppercase truncate">{stat.label}</p>
                          <h5 className="text-[10px] font-black text-white mt-0.5">{stat.val}</h5>
                        </div>
                      ))}
                    </div>

                    {/* Transformation Roadmap */}
                    <div className="bg-slate-900 border border-slate-800 p-3 rounded-sm text-left">
                      <span className="text-[7.5px] text-slate-400 font-bold block uppercase mb-2">Transformation Roadmap</span>
                      <div className="flex justify-between items-center text-[7.5px] text-slate-400 font-bold uppercase relative px-1">
                        <div className="absolute top-[8px] left-[5%] right-[5%] h-[1px] bg-slate-800 -z-10"></div>
                        {["Discover", "Strategy", "Design", "Build", "Scale"].map((step, idx) => (
                          <div key={idx} className="flex flex-col items-center gap-1.5">
                            <span className="w-4 h-4 rounded-full bg-[#00A98F] text-white flex items-center justify-center text-[7px] font-black">
                              {idx + 1}
                            </span>
                            <span className="text-[7px] text-slate-400">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Business Impact line chart */}
                    <div className="bg-slate-900 border border-slate-800 p-3 rounded-sm text-left">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-[7.5px] text-slate-400 font-bold uppercase">Business Impact</span>
                        <span className="text-[7.5px] text-emerald-400 font-bold font-mono">+2.8X ROI Increase</span>
                      </div>
                      <svg className="w-full h-12 overflow-visible mt-1" viewBox="0 0 100 30">
                        <path d="M0 28 C20 28, 40 22, 60 10 T100 4" fill="none" stroke="#00F5D4" strokeWidth="2" />
                        <path d="M0 28 C20 28, 40 22, 60 10 T100 4 L100 30 L0 30 Z" fill="rgba(0, 245, 212, 0.05)" />
                      </svg>
                    </div>
                  </div>

                  {/* Right: Circular Growth Model */}
                  <div className="col-span-12 md:col-span-4 bg-slate-900 border border-slate-800 p-4 rounded-sm flex flex-col items-center justify-center text-center">
                    <div className="relative w-28 h-28 rounded-full border border-dashed border-[#00A98F]/30 flex items-center justify-center">
                      <div className="absolute w-20 h-20 rounded-full border border-dashed border-[#00F5D4]/20 animate-spin" style={{ animationDuration: "12s" }}></div>
                      
                      {/* Central growth badge */}
                      <div className="relative z-10 w-16 h-16 rounded-full bg-[#00A98F] flex flex-col items-center justify-center p-1 text-center shadow-lg">
                        <span className="text-[8px] font-black text-white leading-tight">Business Growth</span>
                      </div>

                      {/* Surrounding Node Badges */}
                      <span className="absolute top-0 text-[7px] text-slate-400 font-bold">Strategy</span>
                      <span className="absolute right-0 text-[7px] text-slate-400 font-bold">Technology</span>
                      <span className="absolute bottom-0 text-[7px] text-slate-400 font-bold">Execution</span>
                      <span className="absolute left-0 text-[7px] text-slate-400 font-bold">Process</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Our Consulting Services (5 columns) */}
      <section className="border-b border-[#E2E8F0] bg-[#F8FAFC] py-16 transition-colors dark:border-white/10 dark:bg-[#0E1930] md:py-20">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="mb-12 flex flex-col items-center text-center">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#00A98F] dark:text-[#00F5D4]">What we deliver</span>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-[#0B132B] dark:text-white md:text-4xl font-[family-name:var(--font-heading)]">
              Our Consulting Services
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {coreServices.map((service, idx) => {
              const accent = ["#3B82F6", "#8B5CF6", "#10B981", "#F97316", "#EC4899"][idx];
              return (
                <article key={service.title} className="consulting-image-service-card group overflow-hidden rounded-3xl border border-slate-200 bg-white" style={{ "--service-accent": accent }}>
                  <div className="relative h-48 overflow-hidden">
                    <img src={service.image} alt={`${service.title} service`} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071126]/75 via-[#071126]/15 to-transparent"></div>
                  </div>
                  <div className="min-h-[350px] p-5">
                    <h3 className="text-xl font-extrabold leading-tight text-[#0B132B] dark:text-white">{service.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{service.description}</p>
                    <ul className="mt-5 space-y-2.5">
                      {service.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 dark:text-slate-200">
                          <span className="consulting-service-check grid h-5 w-5 shrink-0 place-items-center rounded-full"><Check size={12} strokeWidth={3} /></span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Our Approach (6 steps) */}
      <section className="py-16 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="flex items-center justify-center gap-4 mb-14">
            <span className="h-[1px] bg-slate-200 flex-1"></span>
            <h2 className="shrink-0 text-xl font-extrabold uppercase tracking-wide text-[#0B132B] dark:text-white md:text-2xl">
              Our Approach
            </h2>
            <span className="h-[1px] bg-slate-200 flex-1"></span>
          </div>

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 max-w-5xl mx-auto">
            {/* Connecting dashed line */}
            <div className="absolute top-[28px] left-[5%] right-[5%] h-[1.5px] border-t border-dashed border-[#00A98F]/40 hidden md:block -z-10"></div>
            
            {approachSteps.map((wf, idx) => {
              const StepIcon = wf.icon;
              return (
                <div key={idx} className="flex flex-col items-center text-center max-w-[130px] flex-1 relative z-10">
                  <div className="w-14 h-14 rounded-full bg-white border border-[#E2E8F0] shadow-sm flex items-center justify-center text-[#00A98F] hover:border-[#00A98F] hover:scale-105 transition-all duration-300">
                    <StepIcon size={22} />
                  </div>
                  <span className="text-[9px] font-black text-[#00A98F] mt-3">0{idx + 1} • {wf.step}</span>
                  <p className="text-[9px] text-[#0B132B]/50 mt-1.5 leading-normal">{wf.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Industries We Serve */}
      <section className="py-16 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className="h-[1px] bg-slate-300 flex-1"></span>
            <h2 className="shrink-0 text-xl font-extrabold uppercase tracking-wide text-[#0B132B] dark:text-white md:text-2xl">
              Industries We Serve
            </h2>
            <span className="h-[1px] bg-slate-300 flex-1"></span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 max-w-6xl mx-auto mb-8">
            {industries.map((ind, idx) => {
              const IndIcon = ind.icon;
              return (
                <div key={idx} className="bg-white border border-[#E2E8F0] p-4 rounded-sm text-center flex flex-col items-center gap-3 hover:border-[#00A98F] transition-all">
                  <div className="text-[#00A98F]">
                    <IndIcon size={22} />
                  </div>
                  <h4 className="text-[11px] font-bold text-[#0B132B] leading-tight">{ind.name}</h4>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Link href="/industries" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00A98F] hover:underline">
              View All Industries <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Tools & Technologies */}
      <section className="overflow-hidden border-b border-[#E2E8F0] bg-white py-16 transition-colors dark:border-white/10 dark:bg-[#0B132B]">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="mb-12 flex items-center justify-center gap-4">
            <span className="h-px flex-1 bg-slate-200"></span>
            <h2 className="shrink-0 text-center text-xl font-extrabold uppercase tracking-wide text-[#0B132B] dark:text-white md:text-2xl">Tools & Technologies We Work With</h2>
            <span className="h-px flex-1 bg-slate-200"></span>
          </div>
          <div className="consulting-logo-marquee group overflow-hidden">
            <div className="consulting-logo-track group-hover:[animation-play-state:paused] motion-reduce:![animation:none]">
              {[false, true].map((duplicate) => (
                <div key={duplicate ? "duplicate" : "primary"} className="consulting-logo-group" aria-hidden={duplicate || undefined}>
                  {[OpenAILogo, AWSLogo, AzureLogo, GCPLogo, Microsoft365Logo, FigmaLogo, JiraLogo, NotionLogo, DockerLogo, K8sLogo].map((LogoComp, idx) => (
                    <div key={idx} className="consulting-logo-card"><LogoComp /></div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Why Choose Us */}
      <section className="border-b border-[#E2E8F0] bg-[#F8FAFC] py-16 dark:border-white/10 dark:bg-[#101A31]">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="mb-12 flex items-center justify-center gap-4">
            <span className="h-px flex-1 bg-slate-300"></span>
            <h2 className="shrink-0 text-center text-xl font-extrabold uppercase tracking-wide text-[#0B132B] dark:text-white md:text-2xl">Why Choose Antellay</h2>
            <span className="h-px flex-1 bg-slate-300"></span>
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item, idx) => (
              <div key={idx} className="flex gap-3 text-left">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border border-[#E2E8F0] bg-white text-[#00A98F] shadow-sm"><CheckCircle2 size={17} /></div>
                <p className="text-xs font-bold leading-relaxed text-[#0B132B]/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA Banner */}
      <section className="py-12 bg-white">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="relative flex min-h-[260px] flex-col items-center justify-between gap-8 overflow-hidden rounded-3xl border border-slate-700 bg-[#0A1128] p-9 shadow-2xl md:flex-row md:p-12">
            
            {/* Visual background */}
            <div className="absolute inset-0 -z-10 opacity-35">
              <img 
                src="/images/consulting_cta.jpg" 
                alt="Consulting team review mockup"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-[#0F172A]/80 -z-10"></div>
            
            <div className="max-w-2xl text-left">
              <h2 className="text-2xl md:text-3xl font-black text-white leading-tight tracking-tight font-[family-name:var(--font-heading)]">
                Ready to Transform <br />Your Business?
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed mt-4 font-light">
                Let's build a strategy that drives growth, innovation, and long-term success.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 shrink-0">
              <Link href="/contact" className="px-6 py-3.5 bg-[#00A98F] hover:bg-[#00A98F]/90 text-white text-sm font-bold rounded-sm shadow-lg shadow-[#00A98F]/20 transition-all hover:-translate-y-0.5">
                Book Free Consultation →
              </Link>
              <Link href="/contact" className="hidden px-6 py-3.5 bg-transparent border border-slate-600 hover:border-white text-white text-sm font-bold rounded-sm transition-all hover:bg-white/5">
                Schedule a Call
              </Link>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
