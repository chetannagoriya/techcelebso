"use client";

import React from "react";
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

const cloudProviderLogos = [
  { name: "AWS", Component: AWSLogo },
  { name: "Microsoft Azure", Component: AzureLogo },
  { name: "Google Cloud", Component: GCPLogo },
  { name: "DigitalOcean", Component: () => <span className="text-sm font-black text-[#0080FF]">DigitalOcean</span> },
  { name: "Linode", Component: () => <span className="text-sm font-bold text-[#00A95C]">Linode</span> },
  { name: "Vultr", Component: () => <span className="text-sm font-black text-[#007BFC]">Vultr</span> },
];

const technologyLogos = [
  { name: "Docker", Component: DockerLogo },
  { name: "Kubernetes", Component: K8sLogo },
  { name: "Terraform", Component: TerraformLogo },
  { name: "Prometheus", Component: PrometheusLogo },
  { name: "Grafana", Component: GrafanaLogo },
  { name: "Jenkins", Component: JenkinsLogo },
  { name: "GitLab", Component: GitLabLogo },
  { name: "Nginx", Component: NginxLogo },
  { name: "Redis", Component: RedisLogo },
  { name: "GitHub Actions", Component: () => <span className="text-sm font-bold text-slate-800 dark:text-slate-200">GitHub Actions</span> },
  { name: "Ansible", Component: () => <span className="text-sm font-bold text-slate-700 dark:text-slate-200">Ansible</span> },
  { name: "ELK Stack", Component: () => <span className="text-sm font-bold text-[#E8478B]">ELK Stack</span> },
];

export default function CloudInfrastructurePage() {
  const coreServices = [
    {
      title: "Cloud Infrastructure",
      image: "/images/cloud-infrastructure-hero-2026.png",
      description: "Design, deploy and manage highly scalable, secure, and multi-region cloud architectures tailored to your business needs.",
      bullets: ["Multi-Region Setup", "Auto-Scaling", "Load Balancing", "High Availability", "Disaster Recovery"],
      color: "border-blue-500",
      iconColor: "bg-blue-500",
      icon: Cloud
    },
    {
      title: "AI Infrastructure",
      image: "/images/ai_data_hero.jpg",
      description: "Accelerate your AI workloads with specialized high-performance computing, GPU nodes, and optimized dataset orchestration pipelines.",
      bullets: ["GPU Nodes", "Kubeflow Pipelines", "High-Throughput Storage", "Scalable ML Clusters", "Resource Scheduling"],
      color: "border-purple-500",
      iconColor: "bg-purple-500",
      icon: Cpu
    },
    {
      title: "DevOps Services",
      image: "/images/cloud_infra_cta.jpg",
      description: "Standardize application releases, infrastructure testing, and config management with automated pipelines.",
      bullets: ["CI/CD Automation", "Infrastructure-as-Code", "Configuration Management", "Containerization", "Artifact Repositories"],
      color: "border-emerald-500",
      iconColor: "bg-emerald-500",
      icon: Settings
    },
    {
      title: "Database Architecture",
      image: "/images/blockchain_hero.jpg",
      description: "Scale databases under high concurrency with multi-node replication, clustering, caching, and fine-tuned configurations.",
      bullets: ["High Concurrency Scaling", "Replication & Clustering", "Caching (Redis/Memcached)", "Backup & Restore Systems", "Performance Tuning"],
      color: "border-orange-500",
      iconColor: "bg-orange-500",
      icon: Database
    },
    {
      title: "Server Management",
      image: "/images/cybersecurity_hero.jpg",
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

  return (
    <main className="service-modern-page cloud-infrastructure-page min-h-screen bg-white transition-colors duration-300 font-[family-name:var(--font-sans)]">
      
      {/* 1. Hero Section */}
      <section className="relative pt-10 pb-12 md:pt-14 md:pb-16 overflow-hidden bg-[#0A1128]">
        <img
          src="/images/cloud-infrastructure-hero-2026.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-80"
        />

        <div className="max-w-[1400px] mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left text context */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              <div>
                <span className="text-[#00A98F] text-xs font-bold uppercase tracking-widest block mb-3 bg-[#00A98F]/10 px-3 py-1 rounded-full w-fit">
                  Cloud & Infrastructure Services
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.08] tracking-tight font-[family-name:var(--font-heading)]">
                  Cloud & Infrastructure <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A98F] via-[#70EEFF] to-[#00F5D4]">
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
                <Link href="/contact" className="px-6 py-3.5 bg-[#00A98F] hover:bg-[#00A98F]/90 text-white text-sm font-bold rounded-sm shadow-lg shadow-[#00A98F]/20 transition-all hover:-translate-y-0.5">
                  Book Free Consultation
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

          </div>
        </div>
      </section>

      {/* 2. Our Cloud & Infrastructure Services */}
      <section className="border-b border-[#E2E8F0] bg-[#F8FAFC] py-16 transition-colors dark:border-white/10 dark:bg-[#0E1930] md:py-20">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="mb-12 flex flex-col items-center gap-3 text-center">
            <div className="flex flex-col items-center">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#00A98F] dark:text-[#00F5D4]">What we deliver</span>
              <h2 className="mt-2 text-2xl font-black tracking-tight text-[#0B132B] dark:text-white md:text-4xl font-[family-name:var(--font-heading)]">
              Our Cloud & Infrastructure Services
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {coreServices.map((service, idx) => {
              const accent = ["#3B82F6", "#8B5CF6", "#10B981", "#F97316", "#06B6D4"][idx];
              return (
                <article
                  key={service.title}
                  className="cloud-image-service-card group relative overflow-hidden rounded-3xl border border-slate-200 bg-white"
                  style={{ "--service-accent": accent }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img src={service.image} alt={`${service.title} service`} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071126]/90 via-[#071126]/25 to-transparent"></div>
                  </div>

                  <div className="flex min-h-[360px] flex-col p-5">
                    <h3 className="text-xl font-extrabold leading-tight text-[#0B132B] dark:text-white">{service.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{service.description}</p>

                    <ul className="mt-5 grid gap-2.5">
                      {service.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 dark:text-slate-200">
                          <span className="cloud-service-image-check grid h-5 w-5 shrink-0 place-items-center rounded-full"><Check size={12} strokeWidth={3} /></span>
                          <span>{bullet}</span>
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

      {/* 3. Cloud Providers We Support */}
      <section className="overflow-hidden border-b border-[#E2E8F0] bg-white py-16 transition-colors dark:border-white/10 dark:bg-[#0B132B]">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className="h-[1px] bg-slate-200 flex-1"></span>
            <h2 className="shrink-0 text-xl font-extrabold uppercase tracking-wide text-[#0B132B] dark:text-white md:text-2xl">
              Cloud Providers We Support
            </h2>
            <span className="h-[1px] bg-slate-200 flex-1"></span>
          </div>

          <div className="cloud-logo-marquee group overflow-hidden" aria-label="Supported cloud providers">
            <div className="cloud-logo-marquee-track group-hover:[animation-play-state:paused] motion-reduce:![animation:none]">
              {[false, true].map((isDuplicate) => (
                <div key={isDuplicate ? "duplicate" : "primary"} className="cloud-logo-marquee-group" aria-hidden={isDuplicate || undefined}>
                  {cloudProviderLogos.map(({ name, Component }) => (
                    <div key={name} className="cloud-logo-card" title={name}><Component /></div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Technologies We Support */}
      <section className="overflow-hidden border-b border-[#E2E8F0] bg-[#F8FAFC] py-16 transition-colors dark:border-white/10 dark:bg-[#101A31]">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className="h-[1px] bg-slate-300 flex-1"></span>
            <h2 className="shrink-0 text-xl font-extrabold uppercase tracking-wide text-[#0B132B] dark:text-white md:text-2xl">
              Technologies We Support
            </h2>
            <span className="h-[1px] bg-slate-300 flex-1"></span>
          </div>

          <div className="cloud-logo-marquee group overflow-hidden" aria-label="Supported infrastructure technologies">
            <div className="cloud-logo-marquee-track cloud-logo-marquee-track-slow group-hover:[animation-play-state:paused] motion-reduce:![animation:none]">
              {[false, true].map((isDuplicate) => (
                <div key={isDuplicate ? "duplicate" : "primary"} className="cloud-logo-marquee-group" aria-hidden={isDuplicate || undefined}>
                  {technologyLogos.map(({ name, Component }) => (
                    <div key={name} className="cloud-logo-card" title={name}><Component /></div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. End-To-End Infrastructure Workflow (8 steps) */}
      <section className="py-16 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="flex items-center justify-center gap-4 mb-14">
            <span className="h-[1px] bg-slate-200 flex-1"></span>
            <h2 className="shrink-0 text-xl font-extrabold uppercase tracking-wide text-[#0B132B] dark:text-white md:text-2xl">
              Our End-To-End Infrastructure Workflow
            </h2>
            <span className="h-[1px] bg-slate-200 flex-1"></span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 max-w-6xl mx-auto">
            {workflowSteps.map((wf, idx) => {
              const WfIcon = wf.icon;
              return (
                <div key={idx} className="flex flex-col items-center text-center bg-[#F8FAFC] border border-[#E2E8F0] p-4 rounded-sm hover:border-[#00A98F] hover:bg-white hover:shadow-md transition-all duration-200 group">
                  <div className="w-10 h-10 rounded-full bg-white border border-[#E2E8F0] shadow-sm flex items-center justify-center text-[#00A98F] group-hover:bg-[#00A98F] group-hover:text-white transition-colors duration-300">
                    <WfIcon size={18} />
                  </div>
                  <span className="text-[9px] font-black text-[#00A98F] mt-3">STEP {wf.step}</span>
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
          <div>
            
            {/* Why Choose Us */}
            <div className="space-y-6">
              <div className="mb-8 flex items-center justify-center border-b border-slate-200 pb-4 text-center">
                <h3 className="text-xl font-extrabold uppercase tracking-wide text-[#0B132B] dark:text-white md:text-2xl">
                  Why Choose Antellay
                </h3>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {whyChooseUs.map((item, idx) => (
                  <div key={idx} className="flex gap-3 text-left">
                    <div className="w-8 h-8 rounded-sm bg-white border border-[#E2E8F0] flex items-center justify-center text-[#00A98F] shrink-0 shadow-sm">
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

          </div>
        </div>
      </section>

      {/* 8. CTA Banner */}
      <section className="py-12 bg-white">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="relative flex min-h-[260px] flex-col items-center justify-between gap-8 overflow-hidden rounded-3xl border border-slate-700 bg-[#0A1128] p-9 shadow-2xl md:flex-row md:p-12">
            
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
              <Link href="/contact" className="px-6 py-3.5 bg-[#00A98F] hover:bg-[#00A98F]/90 text-white text-sm font-bold rounded-sm shadow-lg shadow-[#00A98F]/20 transition-all hover:-translate-y-0.5">
                Book Free Consultation
              </Link>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
