"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  CheckCircle2, 
  ArrowRight, 
  Cloud, 
  Settings, 
  ShieldCheck, 
  Activity, 
  Cpu, 
  Database, 
  Terminal, 
  Layers, 
  Server, 
  Network,
  HelpCircle,
  Plus, 
  Minus,
  Check,
  TrendingUp,
  Clock,
  ArrowUpRight,
  Monitor,
  GitBranch,
  Repeat
} from "lucide-react";

// --- Supported Providers & Technologies Vector Logos ---
const AWSLogo = () => (
  <span className="flex flex-col items-center justify-center text-[10px] font-black text-slate-800 dark:text-slate-200">
    <svg className="w-5 h-5 text-[#FF9900]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.76 10.03c0 .3.03.54.09.71.06.18.14.37.26.58.04.06.06.13.06.18 0 .08-.05.16-.15.24l-.5.34a.38.38 0 0 1-.21.07c-.08 0-.16-.04-.24-.11-.08-.07-.18-.2-.29-.38a6.18 6.18 0 0 1-.25-.47c-.62.73-1.4 1.1-2.35 1.1-.67 0-1.2-.2-1.6-.57-.4-.38-.6-.9-.6-1.53 0-.68.24-1.23.73-1.64.49-.42 1.13-.63 1.96-.63.27 0 .55.03.85.07.3.04.6.1.92.18v-.58c0-.6-.13-1.03-.38-1.28-.25-.25-.68-.37-1.3-.37-.28 0-.57.03-.86.1-.3.07-.58.16-.86.27-.08.03-.18.07-.28.1a.49.49 0 0 1-.13.03c-.11 0-.17-.08-.17-.25v-.39c0-.13.02-.22.06-.28a.6.6 0 0 1 .22-.17c.28-.14.61-.26 1-.36a4.84 4.84 0 0 1 1.25-.15c.95 0 1.64.22 2.09.65.44.43.66 1.08.66 1.96v2.58zm-3.24 1.22c.26 0 .53-.05.82-.15.29-.1.54-.27.76-.51.13-.15.22-.32.27-.51.05-.19.08-.42.08-.69v-.34c-.23-.05-.48-.09-.73-.13a6.02 6.02 0 0 0-.75-.05c-.54 0-.93.1-1.19.32-.26.22-.39.52-.39.92 0 .37.1.65.3.84.19.2.47.3.84.3z" />
    </svg>
    AWS
  </span>
);

const AzureLogo = () => (
  <span className="flex flex-col items-center justify-center text-[10px] font-bold text-[#0089CF]">
    <svg className="w-5 h-5" viewBox="0 0 128 128" fill="none">
      <path d="M46.09.002H86.78L44.54 125.14c-1.31 3.32-4.57 4.41-6.15 4.41H6.73a6.48 6.48 0 01-5.26-2.7 6.47 6.47 0 01-.88-5.85L39.94 4.41C41.26 1.09 44.51 0 46.09 0z" fill="#0069BC"/>
      <path d="M97.28 81.61H37.99a2.74 2.74 0 00-1.87 4.75l38.1 35.56a5.99 5.99 0 004.09 1.61h33.57z" fill="#0078d4"/>
      <path d="M98.06 4.41a6.48 6.48 0 00-6.14-4.41H46.58c1.31 0 4.56 1.09 6.14 4.41l39.35 116.59c1.31 3.32 4.57 8.55-6.14 8.55h45.34a6.48 6.48 0 006.14-8.55z" fill="#2892DF"/>
    </svg>
    Azure
  </span>
);

const GCPLogo = () => (
  <span className="flex flex-col items-center justify-center text-[10px] font-bold text-slate-700 dark:text-slate-300">
    <span className="text-[#EA4335]">☁️</span> GCP
  </span>
);

const DockerLogo = () => (
  <span className="flex flex-col items-center justify-center text-[10px] font-extrabold text-[#2496ED]">
    🐳 Docker
  </span>
);

const K8sLogo = () => (
  <span className="flex flex-col items-center justify-center text-[10px] font-bold text-[#326CE5]">
    ⎈ Kubernetes
  </span>
);

const TerraformLogo = () => (
  <span className="flex flex-col items-center justify-center text-[10px] font-black text-[#844FBA]">
    ⧉ Terraform
  </span>
);

const PrometheusLogo = () => (
  <span className="flex flex-col items-center justify-center text-[10px] font-bold text-[#E6522C]">
    🔥 Prometheus
  </span>
);

const GrafanaLogo = () => (
  <span className="flex flex-col items-center justify-center text-[10px] font-bold text-[#FADE1A]">
    📊 Grafana
  </span>
);

const JenkinsLogo = () => (
  <span className="text-[10px] font-black text-slate-800 dark:text-slate-200">
    ☕ Jenkins
  </span>
);

const GitLabLogo = () => (
  <span className="text-[10px] font-bold text-[#FCA326]">
    🦊 GitLab
  </span>
);

const NginxLogo = () => (
  <span className="text-[10px] font-bold text-[#009639]">
    🟩 Nginx
  </span>
);

const RedisLogo = () => (
  <span className="text-[10px] font-bold text-[#D82C20]">
    ♦ Redis
  </span>
);

export default function CloudInfrastructurePage() {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const coreServices = [
    {
      title: "Cloud Infrastructure",
      description: "Design, deploy and manage highly scalable, secure, and multi-region cloud architectures tailored to your business needs.",
      bullets: ["Multi-Region Setup", "Auto-Scaling", "Load Balancing", "High Availability", "Disaster Recovery"],
      color: "border-blue-500",
      iconColor: "bg-blue-500",
      icon: Cloud
    },
    {
      title: "AI Infrastructure",
      description: "Accelerate your AI workloads with specialized high-performance computing, GPU nodes, and optimized dataset orchestration pipelines.",
      bullets: ["GPU Nodes", "Kubeflow Pipelines", "High-Throughput Storage", "Scalable ML Clusters", "Resource Scheduling"],
      color: "border-purple-500",
      iconColor: "bg-purple-500",
      icon: Cpu
    },
    {
      title: "DevOps Services",
      description: "Standardize application releases, infrastructure testing, and config management with automated pipelines.",
      bullets: ["CI/CD Automation", "Infrastructure-as-Code", "Configuration Management", "Containerization", "Artifact Repositories"],
      color: "border-emerald-500",
      iconColor: "bg-emerald-500",
      icon: Settings
    },
    {
      title: "Database Architecture",
      description: "Scale databases under high concurrency with multi-node replication, clustering, caching, and fine-tuned configurations.",
      bullets: ["High Concurrency Scaling", "Replication & Clustering", "Caching (Redis/Memcached)", "Backup & Restore Systems", "Performance Tuning"],
      color: "border-orange-500",
      iconColor: "bg-orange-500",
      icon: Database
    },
    {
      title: "Server Management",
      description: "Keep system resources healthy with round-the-clock monitoring, kernel updates, access audits, and performance tuning.",
      bullets: ["24/7/365 Monitoring", "Patching & OS Upgrades", "Access Audit & IAM", "Performance Profiling", "Security Hardening"],
      color: "border-teal-500",
      iconColor: "bg-teal-500",
      icon: Server
    }
  ];

  const workflowSteps = [
    { step: "01", name: "Assessment", icon: Terminal, desc: "Evaluate existing systems" },
    { step: "02", name: "Architecture", icon: Layers, desc: "Design multi-region layouts" },
    { step: "03", name: "Setup", icon: Server, desc: "Deploy computing structures" },
    { step: "04", name: "DevOps", icon: Repeat, desc: "Automate delivery pipelines" },
    { step: "05", name: "Migration", icon: Cloud, desc: "Safely shift workloads" },
    { step: "06", name: "Testing", icon: CheckCircle2, desc: "Verify failover triggers" },
    { step: "07", name: "Monitoring", icon: Monitor, desc: "Configure alarms & telemetry" },
    { step: "08", name: "Continuous Imp.", icon: TrendingUp, desc: "Optimize cost & scale" }
  ];

  const whyChooseUs = [
    { title: "99.9% Uptime SLA", desc: "Enterprise-grade service level agreements ensuring high system availability." },
    { title: "DevOps Expertise", desc: "Certified AWS, Azure, and Kubernetes engineers with deep domain experience." },
    { title: "Secure & Compliant", desc: "Build ISO, SOC2, GDPR, and HIPAA compliant infrastructure configurations." },
    { title: "Cost Optimization", desc: "Reduce cloud spend by up to 40% with right-sizing and serverless models." },
    { title: "24/7/365 Monitoring", desc: "Continuous health profiling, proactive warnings, and instant alert resolutions." },
    { title: "Enterprise Ready", desc: "Deploy container-orchestrated multi-tenant systems designed to scale." }
  ];

  const stats = [
    { val: "99.99%", label: "Uptime SLA" },
    { val: "40%", label: "Cost Savings" },
    { val: "5x", label: "Faster Deployments" },
    { val: "24/7/365", label: "Monitoring" },
    { val: "15 Min", label: "Response Time" },
    { val: "200+", label: "Servers Managed" }
  ];

  const faqs = [
    {
      q: "Which cloud providers do you support?",
      a: "We support AWS, Microsoft Azure, Google Cloud Platform (GCP), DigitalOcean, Vultr, and Linode. We also deploy hybrid architectures spanning private clouds and on-premise physical servers."
    },
    {
      q: "How do you achieve cost optimization?",
      a: "We perform automated right-sizing audits, configure smart auto-scaling, implement serverless functions, utilize spot instances, and set up database connection caching. Most clients reduce cloud spend by 30% to 50%."
    },
    {
      q: "Can you migrate legacy applications to Kubernetes?",
      a: "Yes. Our team containerizes legacy systems with Docker, drafts Terraform templates, builds Jenkins or GitHub CI pipelines, and orchestrates deployment on EKS, AKS, GKE, or custom Kubernetes clusters."
    },
    {
      q: "What monitoring tools do you configure?",
      a: "We deploy Prometheus, Grafana, the ELK Stack, Jaeger tracing, AWS CloudWatch, and Datadog depending on architecture needs. These pipelines trigger email and PagerDuty notifications for critical system updates."
    }
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
            
            {/* Left text context */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <div>
                <span className="text-[#3A86FF] text-xs font-bold uppercase tracking-widest block mb-3 bg-[#3A86FF]/10 px-3 py-1 rounded-full w-fit">
                  Cloud & Infrastructure Services
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.08] tracking-tight font-[family-name:var(--font-heading)]">
                  Cloud & Infrastructure <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3A86FF] via-[#70EEFF] to-[#00F5D4]">
                    Services
                  </span>
                </h1>
                <h2 className="text-sm md:text-base font-medium text-slate-300 mt-4 leading-relaxed max-w-xl">
                  Build Scalable, Secure, and High-Performance Cloud & Infrastructure Solutions for Modern Applications
                </h2>
              </div>
              <p className="text-xs md:text-sm text-slate-400 leading-relaxed max-w-xl font-light">
                From cloud architecture design and migration to DevOps automation, database management, and server administration, ANTELLAY delivers enterprise-grade infrastructure services for your business.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-2">
                <Link href="/contact" className="px-6 py-3.5 bg-[#3A86FF] hover:bg-[#3A86FF]/90 text-white text-sm font-bold rounded-sm shadow-lg shadow-[#3A86FF]/20 transition-all hover:-translate-y-0.5">
                  Book Free Consultation
                </Link>
                <Link href="/contact" className="group flex items-center gap-2 px-6 py-3.5 bg-transparent border border-slate-500 hover:border-white text-white text-sm font-bold rounded-sm transition-all hover:bg-white/5">
                  <svg className="w-4 h-4 text-slate-400 group-hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  Talk to Infrastructure Expert
                </Link>
              </div>

              {/* Badges Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 mt-4 border-t border-slate-800">
                {[
                  { title: "99.9% Uptime", desc: "High Availability SLA", icon: ShieldCheck },
                  { title: "Scalable Setup", desc: "Elastic cluster bounds", icon: Layers },
                  { title: "Secure Compliance", desc: "ISO & SOC2 models", icon: CheckCircle2 },
                  { title: "24/7 Monitoring", desc: "Continuous telemetry alerts", icon: Activity }
                ].map((item, idx) => {
                  const ItemIcon = item.icon;
                  return (
                    <div key={idx} className="flex gap-2.5 items-start text-left">
                      <ItemIcon size={16} className="text-[#00F5D4] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-black text-white leading-tight">{item.title}</h4>
                        <p className="text-[9px] text-slate-500 font-bold uppercase mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right graphic column: Cloud Network Diagram */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-[550px] aspect-[4/3] bg-slate-950 border border-slate-800 rounded-sm shadow-2xl p-4 overflow-hidden flex flex-col justify-between group">
                
                {/* Visual Header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00F5D4] animate-pulse"></span>
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Cluster Topology</span>
                  </div>
                  <span className="text-[9px] font-bold text-slate-500">Region: us-east-1</span>
                </div>

                {/* Cloud Topology Connections Map */}
                <div className="relative w-full h-[calc(100%-80px)] flex items-center justify-center">
                  <img 
                    src="/images/cloud_infra_hero.jpg" 
                    alt="Cloud Network Grid Topology"
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-[#0A1128]/45"></div>

                  {/* SVG Nodes */}
                  <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none" viewBox="0 0 200 150">
                    <circle cx="100" cy="75" r="22" fill="none" stroke="#3A86FF" strokeWidth="1.5" className="animate-pulse" />
                    <circle cx="100" cy="75" r="16" fill="rgba(58, 134, 255, 0.15)" stroke="#3A86FF" strokeWidth="2" />
                    <path d="M93 75 Q100 68 107 75" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                    <path d="M96 78 H104" fill="none" stroke="#fff" strokeWidth="2" />

                    {/* Nodes lines */}
                    <line x1="100" y1="53" x2="100" y2="25" stroke="#00F5D4" strokeWidth="1" strokeDasharray="3 2" />
                    <line x1="100" y1="97" x2="100" y2="125" stroke="#00F5D4" strokeWidth="1" strokeDasharray="3 2" />
                    <line x1="78" y1="75" x2="35" y2="75" stroke="#3A86FF" strokeWidth="1" />
                    <line x1="122" y1="75" x2="165" y2="75" stroke="#3A86FF" strokeWidth="1" />

                    {/* Outer Node circles */}
                    <circle cx="100" cy="25" r="8" fill="#0F172A" stroke="#00F5D4" strokeWidth="1.5" />
                    <circle cx="100" cy="125" r="8" fill="#0F172A" stroke="#00F5D4" strokeWidth="1.5" />
                    <circle cx="35" cy="75" r="8" fill="#0F172A" stroke="#3A86FF" strokeWidth="1.5" />
                    <circle cx="165" cy="75" r="8" fill="#0F172A" stroke="#3A86FF" strokeWidth="1.5" />

                    {/* Symbols inside outer nodes */}
                    <path d="M98 25 H102" stroke="#fff" strokeWidth="1" />
                    <circle cx="100" cy="125" r="2.5" fill="#00F5D4" />
                    <path d="M33 75 H37 M35 73 V77" stroke="#fff" strokeWidth="1" />
                    <path d="M162 77 L168 73" stroke="#fff" strokeWidth="1.5" />
                  </svg>
                  
                  {/* Glowing text boxes */}
                  <div className="absolute top-2 left-2 bg-[#0F172A]/90 border border-slate-800 p-1.5 rounded-sm text-[8px] text-slate-300">
                    <p className="font-bold text-white mb-0.5">Ingress Traffic</p>
                    <span>Load Balancer: 12,450 req/sec</span>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-[#0F172A]/90 border border-slate-800 p-1.5 rounded-sm text-[8px] text-slate-300">
                    <p className="font-bold text-white mb-0.5">CPU Cluster</p>
                    <span className="text-[#00F5D4]">Load: 42.5%</span>
                  </div>
                </div>

                {/* Sub Stats Footer */}
                <div className="grid grid-cols-3 gap-3 border-t border-slate-800 pt-2.5">
                  {[
                    { label: "Active Containers", val: "482" },
                    { label: "Latency", val: "14ms" },
                    { label: "Memory Pool", val: "1.2 TB" }
                  ].map((stat, i) => (
                    <div key={i} className="text-center bg-slate-900 border border-slate-850 p-1.5 rounded-sm">
                      <p className="text-[7.5px] text-slate-400 uppercase tracking-wide truncate">{stat.label}</p>
                      <h4 className="text-xs font-black text-white mt-0.5">{stat.val}</h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Our Cloud & Infrastructure Services (5 columns) */}
      <section className="py-16 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className="h-[1px] bg-slate-300 flex-1"></span>
            <h2 className="text-[#0B132B] text-xl md:text-2xl font-black uppercase tracking-wider shrink-0 font-[family-name:var(--font-heading)]">
              Our Cloud & Infrastructure Services
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
                    Learn more <ArrowRight size={14} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Cloud Providers We Support */}
      <section className="py-16 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className="h-[1px] bg-slate-200 flex-1"></span>
            <h2 className="text-[#0B132B] text-sm font-black uppercase tracking-wider shrink-0">
              Cloud Providers We Support
            </h2>
            <span className="h-[1px] bg-slate-200 flex-1"></span>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-16">
            <AWSLogo />
            <AzureLogo />
            <GCPLogo />
            <span className="text-[10px] font-black text-slate-800 dark:text-slate-200">🌐 DigitalOcean</span>
            <span className="text-[10px] font-bold text-amber-500">✦ Linode</span>
            <span className="text-[10px] font-black text-[#D82C20]">Vultr</span>
          </div>
        </div>
      </section>

      {/* 4. Technologies We Support */}
      <section className="py-16 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className="h-[1px] bg-slate-300 flex-1"></span>
            <h2 className="text-[#0B132B] text-xs font-black uppercase tracking-wider shrink-0">
              Technologies We Support
            </h2>
            <span className="h-[1px] bg-slate-300 flex-1"></span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              DockerLogo,
              K8sLogo,
              TerraformLogo,
              PrometheusLogo,
              GrafanaLogo,
              JenkinsLogo,
              GitLabLogo,
              NginxLogo,
              RedisLogo,
              () => <span className="text-[10px] font-bold text-slate-800 dark:text-slate-200">GitHub Actions</span>,
              () => <span className="text-[10px] font-bold text-slate-700 dark:text-slate-300">Ansible</span>,
              () => <span className="text-[10px] font-bold text-red-500">ELK Stack</span>
            ].map((LogoComp, idx) => (
              <div key={idx} className="flex items-center justify-center border border-[#E2E8F0] bg-white p-3 rounded-sm hover:scale-[1.03] transition-transform shadow-sm">
                <LogoComp />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. End-To-End Infrastructure Workflow (8 steps) */}
      <section className="py-16 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="flex items-center justify-center gap-4 mb-14">
            <span className="h-[1px] bg-slate-200 flex-1"></span>
            <h2 className="text-[#0B132B] text-base font-black uppercase tracking-wider shrink-0">
              Our End-To-End Infrastructure Workflow
            </h2>
            <span className="h-[1px] bg-slate-200 flex-1"></span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 max-w-6xl mx-auto">
            {workflowSteps.map((wf, idx) => {
              const WfIcon = wf.icon;
              return (
                <div key={idx} className="flex flex-col items-center text-center bg-[#F8FAFC] border border-[#E2E8F0] p-4 rounded-sm hover:border-[#3A86FF] hover:bg-white hover:shadow-md transition-all duration-200 group">
                  <div className="w-10 h-10 rounded-full bg-white border border-[#E2E8F0] shadow-sm flex items-center justify-center text-[#3A86FF] group-hover:bg-[#3A86FF] group-hover:text-white transition-colors duration-300">
                    <WfIcon size={18} />
                  </div>
                  <span className="text-[9px] font-black text-[#3A86FF] mt-3">STEP {wf.step}</span>
                  <h4 className="text-xs font-bold text-[#0B132B] mt-1">{wf.name}</h4>
                  <p className="text-[9px] text-[#0B132B]/50 mt-1 leading-normal">{wf.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Why Choose Us & Performance Stats (Side-by-Side) */}
      <section className="py-16 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Why Choose Us */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-200 pb-3 mb-6">
                <h3 className="text-base font-extrabold text-[#0B132B] uppercase tracking-wide">
                  Why Choose Antellay
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {whyChooseUs.map((item, idx) => (
                  <div key={idx} className="flex gap-3 text-left">
                    <div className="w-8 h-8 rounded-sm bg-white border border-[#E2E8F0] flex items-center justify-center text-[#3A86FF] shrink-0 shadow-sm">
                      <CheckCircle2 size={16} />
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-[#0B132B]">{item.title}</h4>
                      <p className="text-[10px] text-[#0B132B]/60 leading-relaxed mt-1 font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance Stats */}
            <div className="lg:col-span-6 bg-white border border-[#E2E8F0] p-6 rounded-sm shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-6">
                <h3 className="text-base font-extrabold text-[#0B132B] uppercase tracking-wide">
                  Infrastructure Performance & Security Stats
                </h3>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {stats.map((stat, idx) => (
                  <div key={idx} className="bg-[#F8FAFC] border border-[#E2E8F0] p-5 rounded-sm text-center shadow-sm hover:border-[#3A86FF] transition-all">
                    <h3 className="text-2xl md:text-3xl font-black text-[#3A86FF] tracking-tight">{stat.val}</h3>
                    <p className="text-[9px] text-[#0B132B]/50 font-extrabold uppercase mt-1 leading-tight">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. FAQs */}
      <section className="py-16 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className="h-[1px] bg-slate-200 flex-1"></span>
            <h2 className="text-[#0B132B] text-xl md:text-2xl font-black uppercase tracking-wider shrink-0 font-[family-name:var(--font-heading)]">
              Frequently Asked Questions
            </h2>
            <span className="h-[1px] bg-slate-200 flex-1"></span>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-[#E2E8F0] rounded-sm overflow-hidden bg-white shadow-sm">
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 text-left text-sm font-bold text-[#0B132B] hover:bg-slate-50 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle size={18} className="text-[#3A86FF]" />
                    {faq.q}
                  </span>
                  {activeFaq === idx ? <Minus size={16} className="text-[#3A86FF]" /> : <Plus size={16} />}
                </button>
                
                {activeFaq === idx && (
                  <div className="p-5 border-t border-[#E2E8F0] text-xs text-[#0B132B]/75 leading-relaxed bg-[#F8FAFC] transition-all">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA Banner */}
      <section className="py-12 bg-white">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="bg-[#0A1128] border border-slate-800 rounded-sm relative overflow-hidden p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8 shadow-2xl">
            
            {/* Visual background */}
            <div className="absolute inset-0 -z-10 opacity-30">
              <img 
                src="/images/cloud_infra_cta.jpg" 
                alt="Cloud Infrastructure virtual mesh backdrop"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-[#0F172A]/85 -z-10"></div>
            
            <div className="max-w-2xl text-left">
              <h2 className="text-2xl md:text-3xl font-black text-white leading-tight tracking-tight font-[family-name:var(--font-heading)]">
                Ready to Optimize Your Cloud Infrastructure?
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed mt-4 font-light">
                Partner with ANTELLAY to build high-performance, cost-effective, and secure cloud environments.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 shrink-0">
              <Link href="/contact" className="px-6 py-3.5 bg-[#3A86FF] hover:bg-[#3A86FF]/90 text-white text-sm font-bold rounded-sm shadow-lg shadow-[#3A86FF]/20 transition-all hover:-translate-y-0.5">
                Book Free Consultation
              </Link>
              <Link href="/contact" className="px-6 py-3.5 bg-transparent border border-slate-600 hover:border-white text-white text-sm font-bold rounded-sm transition-all hover:bg-white/5">
                Schedule Infrastructure Audit
              </Link>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
