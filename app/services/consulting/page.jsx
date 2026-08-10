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
    <main className="min-h-screen bg-white transition-colors duration-300 font-[family-name:var(--font-sans)]">
      
      {/* 1. Hero Section */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden bg-[#0A1128]">
        {/* Glow pathways */}
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#3A86FF]/10 blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#00F5D4]/10 blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-[1400px] mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left text column */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div>
                <span className="text-[#3A86FF] text-xs font-bold uppercase tracking-widest block mb-3 bg-[#3A86FF]/10 px-3 py-1 rounded-full w-fit">
                  Strategy • Innovation • Growth
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.08] tracking-tight font-[family-name:var(--font-heading)]">
                  Consulting That <br />Drives Real Business <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3A86FF] via-[#70EEFF] to-[#00F5D4]">
                    Transformation
                  </span>
                </h1>
              </div>
              <p className="text-base text-slate-300 leading-relaxed font-light">
                From strategy to execution, we help businesses unlock growth with AI, technology, and product consulting. Build smarter products, scale faster, and stay ahead of the curve.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-2">
                <Link href="/contact" className="px-6 py-3.5 bg-[#3A86FF] hover:bg-[#3A86FF]/90 text-white text-sm font-bold rounded-sm shadow-lg shadow-[#3A86FF]/20 transition-all hover:-translate-y-0.5">
                  Get Free Consultation →
                </Link>
                <Link href="/contact" className="group flex items-center gap-2 px-6 py-3.5 bg-transparent border border-slate-500 hover:border-white text-white text-sm font-bold rounded-sm transition-all hover:bg-white/5">
                  <svg className="w-4 h-4 text-slate-400 group-hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  Talk to Our Consultant
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
            <div className="lg:col-span-7 relative">
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
                            <span className="w-4 h-4 rounded-full bg-[#3A86FF] text-white flex items-center justify-center text-[7px] font-black">
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
                    <div className="relative w-28 h-28 rounded-full border border-dashed border-[#3A86FF]/30 flex items-center justify-center">
                      <div className="absolute w-20 h-20 rounded-full border border-dashed border-[#00F5D4]/20 animate-spin" style={{ animationDuration: "12s" }}></div>
                      
                      {/* Central growth badge */}
                      <div className="relative z-10 w-16 h-16 rounded-full bg-[#3A86FF] flex flex-col items-center justify-center p-1 text-center shadow-lg">
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
      <section className="py-16 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className="h-[1px] bg-slate-300 flex-1"></span>
            <h2 className="text-[#0B132B] text-xl md:text-2xl font-black uppercase tracking-wider shrink-0 font-[family-name:var(--font-heading)]">
              Our Consulting Services
            </h2>
            <span className="h-[1px] bg-slate-300 flex-1"></span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {coreServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className={`bg-white border-t-4 ${service.color} border-x border-b border-[#E2E8F0] p-6 rounded-sm flex flex-col justify-between hover:shadow-lg transition-all duration-300 group`}>
                  <div>
                    <div className={`w-10 h-10 ${service.iconColor} text-white flex items-center justify-center rounded-sm mb-4`}>
                      <Icon size={20} />
                    </div>
                    <h3 className="text-base font-extrabold text-[#0B132B] mb-2">{service.title}</h3>
                    <p className="text-xs text-[#0B132B]/60 leading-relaxed mb-4">{service.description}</p>
                    
                    <ul className="space-y-1.5 mb-6">
                      {service.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-[#0B132B]/85 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#3A86FF]"></span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link href="/contact" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3A86FF] hover:underline group-hover:gap-2 transition-all">
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
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
            <h2 className="text-[#0B132B] text-base font-black uppercase tracking-wider shrink-0">
              Our Approach
            </h2>
            <span className="h-[1px] bg-slate-200 flex-1"></span>
          </div>

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 max-w-5xl mx-auto">
            {/* Connecting dashed line */}
            <div className="absolute top-[28px] left-[5%] right-[5%] h-[1.5px] border-t border-dashed border-[#3A86FF]/40 hidden md:block -z-10"></div>
            
            {approachSteps.map((wf, idx) => {
              const StepIcon = wf.icon;
              return (
                <div key={idx} className="flex flex-col items-center text-center max-w-[130px] flex-1 relative z-10">
                  <div className="w-14 h-14 rounded-full bg-white border border-[#E2E8F0] shadow-sm flex items-center justify-center text-[#3A86FF] hover:border-[#3A86FF] hover:scale-105 transition-all duration-300">
                    <StepIcon size={22} />
                  </div>
                  <span className="text-[9px] font-black text-[#3A86FF] mt-3">0{idx + 1} • {wf.step}</span>
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
            <h2 className="text-[#0B132B] text-base font-black uppercase tracking-wider shrink-0">
              Industries We Serve
            </h2>
            <span className="h-[1px] bg-slate-300 flex-1"></span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 max-w-6xl mx-auto mb-8">
            {industries.map((ind, idx) => {
              const IndIcon = ind.icon;
              return (
                <div key={idx} className="bg-white border border-[#E2E8F0] p-4 rounded-sm text-center flex flex-col items-center gap-3 hover:border-[#3A86FF] transition-all">
                  <div className="text-[#3A86FF]">
                    <IndIcon size={22} />
                  </div>
                  <h4 className="text-[11px] font-bold text-[#0B132B] leading-tight">{ind.name}</h4>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Link href="/industries" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3A86FF] hover:underline">
              View All Industries <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us & Technologies (Side-by-Side) */}
      <section className="py-16 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Why Choose Us */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-200 pb-3 mb-6">
                <h3 className="text-base font-extrabold text-[#0B132B] uppercase tracking-wide">
                  Why Choose Antellay?
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {whyChooseUs.map((item, idx) => (
                  <div key={idx} className="flex gap-3 text-left">
                    <div className="w-8 h-8 rounded-sm bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center text-[#3A86FF] shrink-0 shadow-sm">
                      <CheckCircle2 size={16} />
                    </div>
                    <div>
                      <p className="text-[11px] text-[#0B132B]/80 leading-relaxed font-bold">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="lg:col-span-6 bg-[#F8FAFC] border border-[#E2E8F0] p-6 rounded-sm shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-6">
                <h3 className="text-base font-extrabold text-[#0B132B] uppercase tracking-wide">
                  Tools & Technologies We Work With
                </h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {[
                  OpenAILogo,
                  AWSLogo,
                  AzureLogo,
                  GCPLogo,
                  Microsoft365Logo,
                  FigmaLogo,
                  JiraLogo,
                  NotionLogo,
                  DockerLogo,
                  K8sLogo
                ].map((LogoComp, idx) => (
                  <div key={idx} className="flex items-center justify-center border border-[#E2E8F0] bg-white p-3 rounded-sm hover:scale-[1.03] transition-transform">
                    <LogoComp />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. CTA Banner */}
      <section className="py-12 bg-white">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="bg-[#0A1128] border border-slate-800 rounded-sm relative overflow-hidden p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8 shadow-2xl">
            
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
              <Link href="/contact" className="px-6 py-3.5 bg-[#3A86FF] hover:bg-[#3A86FF]/90 text-white text-sm font-bold rounded-sm shadow-lg shadow-[#3A86FF]/20 transition-all hover:-translate-y-0.5">
                Book Free Consultation →
              </Link>
              <Link href="/contact" className="px-6 py-3.5 bg-transparent border border-slate-600 hover:border-white text-white text-sm font-bold rounded-sm transition-all hover:bg-white/5">
                Schedule a Call
              </Link>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
