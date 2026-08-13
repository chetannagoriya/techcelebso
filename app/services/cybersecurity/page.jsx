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
  Monitor,
  Lock,
  Eye,
  Activity,
  AlertTriangle,
  Server,
  Zap,
  Briefcase,
  Search
} from "lucide-react";

// --- Supported Platforms & Security Tech Vector Logos ---
const AWSLogo = () => <span className="text-[10px] font-black text-slate-800 dark:text-slate-200">AWS</span>;
const AzureLogo = () => <span className="text-[10px] font-bold text-[#0089CF]">Azure</span>;
const GCPLogo = () => <span className="text-[10px] font-bold text-slate-700 dark:text-slate-300">Google Cloud</span>;
const CloudflareLogo = () => <span className="text-[10px] font-black text-orange-500">Cloudflare</span>;
const OktaLogo = () => <span className="text-[10px] font-bold text-slate-800 dark:text-slate-200">Okta</span>;
const DefenderLogo = () => <span className="text-[10px] font-bold text-blue-500">MS Defender</span>;
const CiscoLogo = () => <span className="text-[10px] font-black text-sky-600">Cisco</span>;
const PaloAltoLogo = () => <span className="text-[10px] font-bold text-orange-600">Palo Alto</span>;

const OWASPLogo = () => <span className="text-[10px] font-black text-slate-800 dark:text-slate-200">OWASP</span>;
const WAFLogo = () => <span className="text-[10px] font-bold text-slate-700 dark:text-slate-300">WAF</span>;
const SIEMLogo = () => <span className="text-[10px] font-bold text-orange-500">SIEM</span>;
const IAMLogo = () => <span className="text-[10px] font-bold text-blue-600">IAM</span>;
const MFALogo = () => <span className="text-[10px] font-black text-slate-800 dark:text-slate-200">MFA</span>;
const JWTLogo = () => <span className="text-[10px] font-bold text-pink-500">JWT</span>;
const OAuthLogo = () => <span className="text-[10px] font-bold text-slate-800 dark:text-slate-200">OAuth 2.0</span>;
const K8sSecLogo = () => <span className="text-[10px] font-bold text-blue-500">K8s Security</span>;
const DockerSecLogo = () => <span className="text-[10px] font-bold text-[#2496ED]">Docker Security</span>;
const SSLLogo = () => <span className="text-[10px] font-bold text-emerald-600">SSL/TLS</span>;
const SplunkLogo = () => <span className="text-[10px] font-bold text-slate-800 dark:text-slate-200 font-mono">splunk&gt;</span>;
const SOCLogo = () => <span className="text-[10px] font-bold text-red-500">SOC</span>;

export default function CybersecurityPage() {
  const coreServices = [
    {
      title: "Security Assessment",
      image: "/images/cybersecurity-hero-2026.png",
      description: "Identify vulnerabilities, security gaps, compliance risks, and strengthen your organization's overall security posture.",
      bullets: [
        "Vulnerability Assessment",
        "Security Gap Analysis",
        "Penetration Testing",
        "Compliance Assessment"
      ],
      color: "border-blue-500",
      iconColor: "bg-blue-500",
      icon: ShieldCheck
    },
    {
      title: "API Security",
      image: "/images/cybersecurity_hero.jpg",
      description: "Protect REST APIs, GraphQL APIs, authentication systems, rate limiting, API gateways, and secure integrations.",
      bullets: [
        "API Discovery & Testing",
        "Authentication & Authorization",
        "API Threat Protection",
        "Rate Limiting & Monitoring"
      ],
      color: "border-[#00F5D4]",
      iconColor: "bg-[#00F5D4] text-slate-900",
      icon: Zap
    },
    {
      title: "Cloud Security",
      image: "/images/cloud-infrastructure-hero-2026.png",
      description: "Secure AWS, Azure, and Google Cloud environments with continuous monitoring, compliance, and threat detection.",
      bullets: [
        "Cloud Security Posture",
        "Workload Protection",
        "Data Encryption",
        "Compliance & Governance"
      ],
      color: "border-purple-500",
      iconColor: "bg-purple-500",
      icon: Server
    },
    {
      title: "Identity & Access Management (IAM)",
      image: "/images/cybersecurity_cta.jpg",
      description: "Implement secure authentication, role-based access control (RBAC), Single Sign-On (SSO), Multi-Factor Authentication and more.",
      bullets: [
        "SSO & MFA",
        "RBAC & Least Privilege",
        "Privileged Access Management",
        "User Lifecycle Management"
      ],
      color: "border-orange-500",
      iconColor: "bg-orange-500",
      icon: Lock
    }
  ];

  const provisionSteps = [
    { num: "01", name: "Assessment", desc: "Assess your environment and identify risks", icon: Search },
    { num: "02", name: "Risk Analysis", desc: "Analyze threats and prioritize vulnerabilities", icon: AlertTriangle },
    { num: "03", name: "Security Imp.", desc: "Implement security controls and best practices", icon: Lock },
    { num: "04", name: "Monitoring", desc: "Continuous monitoring of systems and network", icon: Monitor },
    { num: "05", name: "Threat Detection", desc: "Detect and respond to potential threats", icon: Activity },
    { num: "06", name: "Incident Response", desc: "Rapid response and containment", icon: AlertTriangle },
    { num: "07", name: "Continuous Prot.", desc: "Ongoing improvement and updates", icon: CheckCircle2 }
  ];

  const whyChooseUs = [
    { title: "Enterprise Security Experts", desc: "Certified professionals with years of industry experience." },
    { title: "Zero Trust Architecture", desc: "Modern security model for today's threats." },
    { title: "Cloud-Native Security", desc: "Secure your cloud, apps, and data end-to-end." },
    { title: "Compliance Ready", desc: "We support global security and compliance standards." },
    { title: "24/7 Monitoring", desc: "Round-the-clock monitoring and threat detection." },
    { title: "Rapid Incident Response", desc: "Quick action to minimize risk and impact." }
  ];



  return (
    <main className="service-modern-page cybersecurity-modern-page min-h-screen bg-white transition-colors duration-300 font-[family-name:var(--font-sans)]">
      
      {/* 1. Hero Section */}
      <section className="relative flex min-h-[560px] items-center overflow-hidden bg-[#07101f] py-16 md:py-20">
        <img
          src="/images/cybersecurity-hero-2026.png"
          alt="Digital cybersecurity lock protecting connected systems"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07101f]/95 via-[#07101f]/72 to-[#07101f]/15"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#07101f]/55 via-transparent to-[#07101f]/20"></div>
        
        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left text column */}
            <div className="lg:col-span-7 xl:col-span-6 flex flex-col gap-6">
              <div>
                <span className="text-[#00A98F] text-xs font-bold uppercase tracking-widest block mb-3 bg-[#00A98F]/10 px-3 py-1 rounded-full w-fit">
                  Secure Today, Protect Tomorrow
                </span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.03] tracking-tight font-[family-name:var(--font-heading)]">
                  Enterprise Cybersecurity Services
                </h1>
              </div>
              <p className="max-w-2xl text-base md:text-lg text-slate-200 leading-relaxed font-light">
                Protect every layer of your digital business with proactive security, continuous threat monitoring, resilient cloud defense, and identity-first protection.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-2">
                <Link href="/contact" className="px-6 py-3.5 bg-[#00A98F] hover:bg-[#00A98F]/90 text-white text-sm font-bold rounded-sm shadow-lg shadow-[#00A98F]/20 transition-all hover:-translate-y-0.5">
                  Get Free Consultation →
                </Link>
                <Link href="/contact" className="hidden group items-center gap-2 px-6 py-3.5 bg-transparent border border-slate-500 hover:border-white text-white text-sm font-bold rounded-sm transition-all hover:bg-white/5">
                  <svg className="w-4 h-4 text-slate-400 group-hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  Contact Our Team
                </Link>
              </div>

              {/* Badges Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 mt-4 border-t border-slate-800">
                {[
                  { title: "24/7", desc: "Threat Monitoring", icon: Monitor },
                  { title: "Zero Trust", desc: "Security Model", icon: ShieldCheck },
                  { title: "100%", desc: "Confidential", icon: Lock },
                  { title: "Compliance", desc: "Ready", icon: CheckCircle2 }
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

            {/* Right mockup column: Security Dashboard */}
            <div className="hidden lg:col-span-7 relative">
              <div className="bg-[#0F172A] border border-slate-800 rounded-sm shadow-2xl p-4 md:p-6 text-white overflow-hidden group">
                
                {/* Visual Header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Live Security Overview</span>
                  </div>
                  <span className="text-[9px] font-bold text-[#00F5D4] bg-emerald-950/40 px-2 py-0.5 rounded-sm border border-emerald-900">• All Systems Secure</span>
                </div>

                <div className="grid grid-cols-12 gap-4">
                  
                  {/* Left: Threats Monitor and Attack Surface */}
                  <div className="col-span-12 md:col-span-8 space-y-4">
                    {/* Threat Detection and Security Posture side by side */}
                    <div className="grid grid-cols-2 gap-4">
                      {/* Live threats blocked */}
                      <div className="bg-slate-900 border border-slate-800 p-3 rounded-sm">
                        <span className="text-[7.5px] text-slate-400 font-bold uppercase block">Threat Detection</span>
                        <h4 className="text-lg font-black text-white mt-1.5">1,248</h4>
                        <span className="text-[7px] text-slate-500">Live Threats Blocked</span>
                        <div className="w-full h-8 overflow-hidden mt-2">
                          <svg className="w-full h-full" viewBox="0 0 100 20">
                            <path d="M0 18 L15 15 L30 18 L45 8 L60 12 L75 4 L90 10 L100 8" fill="none" stroke="#ef4444" strokeWidth="1.5" />
                          </svg>
                        </div>
                      </div>

                      {/* Security posture circle */}
                      <div className="bg-slate-900 border border-slate-800 p-3 rounded-sm flex flex-col justify-between items-center text-center">
                        <span className="text-[7.5px] text-slate-400 font-bold uppercase">Security Posture</span>
                        <div className="relative w-11 h-11 rounded-full border-4 border-slate-800 flex items-center justify-center mt-1.5" style={{ borderTopColor: "#00F5D4", borderRightColor: "#00F5D4", borderBottomColor: "#00F5D4" }}>
                          <span className="text-[10px] font-black text-white">92%</span>
                        </div>
                        <span className="text-[7px] text-emerald-400 font-bold mt-1">Strong Posture</span>
                      </div>
                    </div>

                    {/* Attack Surface stats */}
                    <div className="bg-slate-900 border border-slate-800 p-3 rounded-sm">
                      <span className="text-[7.5px] text-slate-400 font-bold uppercase block mb-2">Attack Surface Overview</span>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="bg-slate-950 p-2 border border-slate-850 rounded-sm">
                          <p className="text-[6.5px] text-slate-500 uppercase">Assets Scanned</p>
                          <h5 className="text-[10px] font-black text-white mt-0.5">12,546</h5>
                        </div>
                        <div className="bg-slate-950 p-2 border border-slate-850 rounded-sm">
                          <p className="text-[6.5px] text-slate-500 uppercase">Vulnerabilities</p>
                          <h5 className="text-[10px] font-black text-yellow-500 mt-0.5">320 <span className="text-[7px] font-normal">Med/High</span></h5>
                        </div>
                        <div className="bg-slate-950 p-2 border border-slate-850 rounded-sm">
                          <p className="text-[6.5px] text-slate-500 uppercase">Risks Mitigated</p>
                          <h5 className="text-[10px] font-black text-emerald-400 mt-0.5">98%</h5>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right: Status list & Threats */}
                  <div className="col-span-12 md:col-span-4 flex flex-col gap-3 justify-between">
                    {/* System Status */}
                    <div className="bg-slate-900 border border-slate-800 p-3 rounded-sm space-y-1.5 leading-normal">
                      <span className="text-[7.5px] text-slate-400 font-bold uppercase block mb-1">System Status</span>
                      <div className="flex justify-between text-[8px] text-slate-300"><span>Network</span><span className="text-emerald-400 font-bold">● Secure</span></div>
                      <div className="flex justify-between text-[8px] text-slate-300"><span>Endpoints</span><span className="text-emerald-400 font-bold">● Secure</span></div>
                      <div className="flex justify-between text-[8px] text-slate-300"><span>Applications</span><span className="text-emerald-400 font-bold">● Secure</span></div>
                      <div className="flex justify-between text-[8px] text-slate-300"><span>Cloud</span><span className="text-emerald-400 font-bold">● Secure</span></div>
                    </div>

                    {/* Top Threats horizontal bars */}
                    <div className="bg-slate-900 border border-slate-800 p-3 rounded-sm flex-1 flex flex-col justify-between">
                      <span className="text-[7.5px] text-slate-400 font-bold uppercase block mb-1">Top Threats</span>
                      {[
                        { name: "Malware", pct: 32, color: "bg-red-500" },
                        { name: "Phishing", pct: 24, color: "bg-orange-500" },
                        { name: "Exploits", pct: 18, color: "bg-yellow-500" },
                        { name: "DDoS", pct: 10, color: "bg-[#00A98F]" }
                      ].map((thr, i) => (
                        <div key={i} className="space-y-0.5">
                          <div className="flex justify-between text-[7px] text-slate-400">
                            <span>{thr.name}</span>
                            <span className="text-white font-bold">{thr.pct}%</span>
                          </div>
                          <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                            <div className={`${thr.color} h-full`} style={{ width: `${thr.pct * 2}%` }}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Our Cybersecurity Services (4 columns) */}
      <section className="border-b border-[#E2E8F0] bg-[#F8FAFC] py-16 transition-colors dark:border-white/10 dark:bg-[#0E1930] md:py-20">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="mb-12 flex flex-col items-center text-center">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#00A98F] dark:text-[#00F5D4]">What we deliver</span>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-[#0B132B] dark:text-white md:text-4xl font-[family-name:var(--font-heading)]">
              Our Cybersecurity Services
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {coreServices.map((service, idx) => {
              const accent = ["#3B82F6", "#10B981", "#8B5CF6", "#F97316"][idx];
              return (
                <article key={service.title} className="cyber-image-service-card group overflow-hidden rounded-3xl border border-slate-200 bg-white" style={{ "--service-accent": accent }}>
                  <div className="relative h-48 overflow-hidden">
                    <img src={service.image} alt={`${service.title} service`} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071126]/75 via-[#071126]/15 to-transparent"></div>
                  </div>
                  <div className="min-h-[310px] p-5">
                    <h3 className="text-xl font-extrabold leading-tight text-[#0B132B] dark:text-white">{service.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{service.description}</p>
                    <ul className="mt-5 space-y-2.5">
                      {service.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 dark:text-slate-200">
                          <span className="cyber-service-check grid h-5 w-5 shrink-0 place-items-center rounded-full"><Check size={12} strokeWidth={3} /></span>
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

      {/* 3. Security Solutions We Provide */}
      <section className="py-16 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className="hidden h-[1px] bg-slate-200 flex-1 sm:block"></span>
            <h2 className="text-center text-2xl font-extrabold uppercase tracking-wide text-[#0B132B] dark:text-white md:text-3xl">
              Security Solutions We Provide
            </h2>
            <span className="hidden h-[1px] bg-slate-200 flex-1 sm:block"></span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {[
              { name: "Network Security", icon: Server },
              { name: "Endpoint Protection", icon: Monitor },
              { name: "Zero Trust Security", icon: ShieldCheck },
              { name: "Vulnerability Assessment", icon: Search },
              { name: "Penetration Testing", icon: Zap },
              { name: "Compliance & Governance", icon: CheckCircle2 },
              { name: "SOC Monitoring", icon: Activity },
              { name: "Incident Response", icon: AlertTriangle }
            ].map((sol, idx) => {
              const SolIcon = sol.icon;
              return (
                <div key={idx} className="bg-[#F8FAFC] border border-[#E2E8F0] p-5 rounded-lg text-center flex min-h-[132px] flex-col items-center justify-center gap-3 hover:border-[#00A98F] hover:bg-white hover:shadow-md transition-all duration-200">
                  <div className="text-[#00A98F]">
                    <SolIcon size={26} />
                  </div>
                  <h4 className="text-sm font-bold text-[#0B132B] leading-tight">{sol.name}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Platforms We Secure */}
      <section className="py-12 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="flex items-center justify-center gap-4 mb-10">
            <span className="hidden h-[1px] bg-slate-300 flex-1 sm:block"></span>
            <h3 className="text-center text-2xl font-extrabold uppercase tracking-wide text-[#0B132B] dark:text-white md:text-3xl">
              Platforms We Secure
            </h3>
            <span className="hidden h-[1px] bg-slate-300 flex-1 sm:block"></span>
          </div>

          <div className="cyber-logo-marquee">
            <div className="cyber-logo-track">
              {[AWSLogo, AzureLogo, GCPLogo, CloudflareLogo, OktaLogo, DefenderLogo, CiscoLogo, PaloAltoLogo, AWSLogo, AzureLogo, GCPLogo, CloudflareLogo, OktaLogo, DefenderLogo, CiscoLogo, PaloAltoLogo].map((LogoComp, idx) => (
                <div key={idx} className="cyber-logo-card"><LogoComp /></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Technologies & Tools We Use */}
      <section className="py-16 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className="hidden h-[1px] bg-slate-200 flex-1 sm:block"></span>
            <h2 className="text-center text-2xl font-extrabold uppercase tracking-wide text-[#0B132B] dark:text-white md:text-3xl">
              Technologies & Tools We Use
            </h2>
            <span className="hidden h-[1px] bg-slate-200 flex-1 sm:block"></span>
          </div>

          <div className="cyber-logo-marquee">
            <div className="cyber-logo-track cyber-logo-track-slow">
            {[
              OWASPLogo,
              WAFLogo,
              SIEMLogo,
              IAMLogo,
              MFALogo,
              JWTLogo,
              OAuthLogo,
              K8sSecLogo,
              DockerSecLogo,
              SSLLogo,
              SplunkLogo,
              SOCLogo,
              OWASPLogo,
              WAFLogo,
              SIEMLogo,
              IAMLogo,
              MFALogo,
              JWTLogo,
              OAuthLogo,
              K8sSecLogo,
              DockerSecLogo,
              SSLLogo,
              SplunkLogo,
              SOCLogo
            ].map((LogoComp, idx) => (
              <div key={idx} className="cyber-logo-card">
                <LogoComp />
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Our Security Process (7 steps) */}
      <section className="py-16 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="flex items-center justify-center gap-4 mb-14">
            <span className="hidden h-[1px] bg-slate-200 flex-1 sm:block"></span>
            <h2 className="text-center text-2xl font-extrabold uppercase tracking-wide text-[#0B132B] dark:text-white md:text-3xl">
              Our Security Process
            </h2>
            <span className="hidden h-[1px] bg-slate-200 flex-1 sm:block"></span>
          </div>

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 max-w-6xl mx-auto">
            {/* Connection line */}
            <div className="absolute top-[28px] left-[5%] right-[5%] h-[1.5px] border-t border-dashed border-[#00A98F]/40 hidden md:block -z-10"></div>
            
            {provisionSteps.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <div key={idx} className="flex flex-col items-center text-center max-w-[150px] flex-1 relative z-10">
                  <div className="w-16 h-16 rounded-full bg-white border border-[#E2E8F0] shadow-sm flex items-center justify-center text-[#00A98F] hover:border-[#00A98F] hover:scale-105 transition-all duration-300">
                    <StepIcon size={25} />
                  </div>
                  <span className="text-xs font-black text-[#00A98F] mt-3">{step.num}</span>
                  <h4 className="text-sm font-bold text-[#0B132B] mt-1">{step.name}</h4>
                  <p className="text-xs text-[#0B132B]/50 mt-1 leading-normal">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Why Choose Us */}
      <section className="py-16 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Why Choose Us */}
            <div className="lg:col-span-12 space-y-6">
              <div className="flex items-center justify-center border-b border-slate-200 pb-4 mb-8">
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#0B132B] uppercase tracking-wide text-center">
                  Why Choose Antellay
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {whyChooseUs.map((item, idx) => (
                  <div key={idx} className="flex gap-3 text-left">
                    <div className="w-10 h-10 rounded-lg bg-white border border-[#E2E8F0] flex items-center justify-center text-[#00A98F] shrink-0 shadow-sm">
                      <CheckCircle2 size={19} />
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-[#0B132B]">{item.title}</h4>
                      <p className="text-xs text-[#0B132B]/60 leading-relaxed mt-1 font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. CTA Banner */}
      <section className="py-12 bg-white">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="bg-[#0A1128] border border-slate-800 rounded-3xl min-h-[260px] relative overflow-hidden p-9 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8 shadow-2xl">
            
            {/* Visual background */}
            <div className="absolute inset-0 -z-10 opacity-30">
              <img 
                src="/images/cybersecurity_cta.jpg" 
                alt="Cybersecurity server padlock visual"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-[#0F172A]/85 -z-10"></div>
            
            <div className="max-w-2xl text-left">
              <h2 className="text-2xl md:text-3xl font-black text-white leading-tight tracking-tight font-[family-name:var(--font-heading)]">
                Secure Your Business <br />Before Threats Strike
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed mt-4 font-light">
                Protect your applications, APIs, cloud infrastructure, and digital assets with enterprise-grade cybersecurity solutions.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 shrink-0">
              <Link href="/contact" className="px-6 py-3.5 bg-[#00A98F] hover:bg-[#00A98F]/90 text-white text-sm font-bold rounded-sm shadow-lg shadow-[#00A98F]/20 transition-all hover:-translate-y-0.5">
                Book Free Security Assessment
              </Link>
              <Link href="/contact" className="hidden px-6 py-3.5 bg-transparent border border-slate-600 hover:border-white text-white text-sm font-bold rounded-sm transition-all hover:bg-white/5">
                Schedule Consultation
              </Link>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
