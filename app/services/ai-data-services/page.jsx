"use client";

import React from "react";
import Link from "next/link";
import NextImage from "next/image";
import { 
  CheckCircle2, 
  ArrowRight, 
  Database, 
  Filter, 
  ShieldCheck, 
  Users, 
  Clock, 
  Sparkles,
  Check,
  TrendingUp,
  Brain,
  Cpu,
  Image as ImageIcon,
  Video,
  FileText,
  Volume2,
  FileSpreadsheet,
  Globe,
  Activity,
  Layers,
  Bot,
  Eye,
  MessageSquare,
  Mic,
  Car,
  HeartPulse,
  Wrench
} from "lucide-react";

// --- Supported Technologies Vector Logos ---
const CVATLogo = () => (
  <span className="flex items-center gap-1 text-[10px] font-black text-slate-800 dark:text-slate-200">
    <span className="bg-[#3A86FF] text-white px-1 py-0.5 rounded-sm text-[8px]">CVAT</span>
    Computer Vision
  </span>
);

const LabelStudioLogo = () => (
  <span className="flex items-center gap-1 text-[10px] font-bold text-slate-800 dark:text-slate-200">
    <span className="text-[#FF9900]">🏷️</span> Label Studio
  </span>
);

const SuperAnnotateLogo = () => (
  <span className="flex items-center gap-1 text-[10px] font-extrabold text-[#00F5D4] tracking-tight">
    ⚡ SuperAnnotate
  </span>
);

const DarwinLogo = () => (
  <span className="flex items-center gap-1 text-[10px] font-black text-slate-900 dark:text-white">
    V7 DARWIN
  </span>
);

const PythonLogo = () => (
  <span className="flex items-center gap-1.5 text-[10px] font-bold text-slate-700 dark:text-slate-300">
    <svg className="w-4 h-4" viewBox="0 0 128 128" fill="none">
      <path fill="#306998" d="M63.39 1.99c-4.22.02-8.25.38-11.8 1.01-10.45 1.84-12.34 5.71-12.34 12.83v9.41h24.69v3.14H29.98c-7.18 0-13.46 4.31-15.43 12.52-2.27 9.4-2.37 15.27 0 25.1 1.76 7.31 5.95 12.52 13.13 12.52h8.49V67.23c0-8.15 7.05-15.34 15.43-15.34h24.66c6.87 0 12.35-5.65 12.35-12.55V15.83c0-6.69-5.65-11.72-12.35-12.84-4.24-.7-8.64-1.02-12.86-1z"/>
      <path fill="#FFD43B" d="M91.68 28.38v10.97c0 8.5-7.21 15.65-15.43 15.65H51.59c-6.76 0-12.35 5.78-12.35 12.55v23.51c0 6.69 5.82 10.63 12.35 12.55 7.82 2.3 15.31 2.71 24.67 0 6.21-1.8 12.34-5.42 12.34-12.55v-9.41h-24.66v-3.14h37.01c7.18 0 9.85-5.01 12.35-12.52 2.58-7.74 2.47-15.17 0-25.1-1.78-7.14-5.16-12.52-12.35-12.52h-9.27z"/>
    </svg>
    Python
  </span>
);

const OpenCVLogo = () => (
  <span className="flex items-center gap-1 text-[10px] font-bold text-slate-700 dark:text-slate-300">
    <span className="w-2.5 h-2.5 rounded-full border-2 border-red-500 inline-block"></span>
    <span className="w-2.5 h-2.5 rounded-full border-2 border-emerald-500 inline-block -ml-1"></span>
    <span className="w-2.5 h-2.5 rounded-full border-2 border-blue-500 inline-block -ml-1"></span>
    OpenCV
  </span>
);

const TensorFlowLogo = () => (
  <span className="flex items-center gap-1 text-[10px] font-bold text-orange-600">
    🟧 TensorFlow
  </span>
);

const PyTorchLogo = () => (
  <span className="flex items-center gap-1 text-[10px] font-bold text-red-500">
    🔥 PyTorch
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

const GoogleCloudLogo = () => (
  <span className="text-[10px] font-bold text-slate-700 dark:text-slate-300">
    ☁️ Google Cloud
  </span>
);

const SnowflakeLogo = () => (
  <span className="text-[10px] font-bold text-sky-500">
    ❄️ Snowflake
  </span>
);

export default function AIDataServicesPage() {
  const coreServices = [
    {
      title: "Dataset Collection",
      description: "Collect diverse and high-quality data from multiple sources including web, sensors, APIs, databases, and real-world environments.",
      color: "border-[#00F5D4]",
      iconColor: "bg-[#00F5D4]",
      icon: Database,
      image: "/images/ai_data_hero.jpg"
    },
    {
      title: "Dataset Cleaning",
      description: "Remove duplicates, noise, inconsistencies, irrelevant records and prepare clean, structured, and model-ready datasets.",
      color: "border-emerald-500",
      iconColor: "bg-emerald-500",
      icon: Filter,
      image: "/images/data-annotation-workspace.png"
    },
    {
      title: "Data Validation",
      description: "Multi-level validation with automated checks and human-in-the-loop review to ensure accuracy and completeness.",
      color: "border-purple-500",
      iconColor: "bg-purple-500",
      icon: ShieldCheck,
      image: "/images/document-annotation-example.png"
    },
    {
      title: "Data Labeling",
      description: "High-quality annotation for images, videos, text, audio, LiDAR, and documents across multiple AI/ML use cases.",
      color: "border-orange-500",
      iconColor: "bg-orange-500",
      icon: Sparkles,
      image: "/images/text-annotation-example.png"
    },
    {
      title: "AI Model Evaluation",
      description: "Evaluate, benchmark and improve model performance using robust evaluation frameworks and metrics.",
      color: "border-teal-500",
      iconColor: "bg-teal-500",
      icon: Brain,
      image: "/images/robot_ai_head.jpg"
    }
  ];

  const domains = [
    { name: "Generative AI", icon: Bot },
    { name: "Computer Vision", icon: Eye },
    { name: "NLP", icon: MessageSquare },
    { name: "Speech AI", icon: Mic },
    { name: "Autonomous Driving", icon: Car },
    { name: "GIS & Remote Sensing", icon: Globe },
    { name: "Medical AI", icon: HeartPulse },
    { name: "Robotics", icon: Wrench }
  ];

  const dataTypes = [
    { name: "Image Data", desc: "Photos, medical scans and visual datasets.", icon: ImageIcon },
    { name: "Video Data", desc: "Frames, object tracks and activity footage.", icon: Video },
    { name: "Text Data", desc: "Documents, conversations and language corpora.", icon: FileText },
    { name: "Audio Data", desc: "Speech, sound events and voice recordings.", icon: Volume2 },
    { name: "Documents", desc: "Forms, invoices, PDFs and structured records.", icon: FileSpreadsheet },
    { name: "LiDAR Data", desc: "3D point clouds and spatial measurements.", icon: Layers },
    { name: "Satellite Imagery", desc: "Earth observation and remote-sensing data.", icon: Globe },
    { name: "Time-Series Data", desc: "Sequential metrics, trends and telemetry.", icon: Activity },
    { name: "Sensor Data", desc: "IoT, automotive and industrial device streams.", icon: Cpu }
  ];

  const lifecycleSteps = [
    { num: "01", label: "Data Collection", desc: "Gather diverse, consented data from trusted digital and real-world sources.", icon: Database },
    { num: "02", label: "Cleaning", desc: "Remove duplicates, noise and inconsistencies while standardizing every record.", icon: Filter },
    { num: "03", label: "Validation", desc: "Verify completeness, formats and business rules through automated checks.", icon: ShieldCheck },
    { num: "04", label: "Labeling", desc: "Apply accurate, domain-aware labels across every supported data modality.", icon: Sparkles },
    { num: "05", label: "Quality Assurance", desc: "Run multi-level human and AI reviews to achieve reliable quality targets.", icon: CheckCircle2 },
    { num: "06", label: "Model Evaluation", desc: "Benchmark performance, identify data gaps and refine difficult edge cases.", icon: Brain },
    { num: "07", label: "Deployment Ready", desc: "Deliver secure, versioned datasets with documentation and clear metadata.", icon: Check }
  ];

  const whyChooseUs = [
    { title: "99%+ Quality", desc: "Industry-leading quality standards with strict verification pipelines.", icon: CheckCircle2 },
    { title: "Human + AI Review", desc: "AI-assisted tools paired with expert human-in-the-loop validation.", icon: Users },
    { title: "Secure & Compliant", desc: "Enterprise-grade data security with full regulatory compliance.", icon: ShieldCheck },
    { title: "Scalable Operations", desc: "Global delivery model with thousands of experienced annotators.", icon: Globe },
    { title: "Fast Turnaround", desc: "On-time delivery with agile management and automated pipelines.", icon: Clock },
    { title: "Enterprise Ready", desc: "Trusted by top-tier startups and Fortune 500 corporations.", icon: Sparkles }
  ];

  const technologies = [
    { name: "CVAT", category: "Computer Vision", logo: "/images/annotation-tools/cvat.png" },
    { name: "Label Studio", category: "Multi-Modal Labeling", logo: "/images/annotation-tools/label-studio.png" },
    { name: "V7 Darwin", category: "AI Data Platform", logo: "/images/annotation-tools/v7-darwin.png" },
    { name: "SuperAnnotate", category: "Annotation Platform", logo: "/images/annotation-tools/superannotate.png" },
    { name: "Roboflow", category: "Vision Datasets", logo: "/images/annotation-tools/roboflow.png" },
    { name: "Dataloop", category: "Data Operations", logo: "/images/annotation-tools/dataloop.png" },
    { name: "Scale AI", category: "Training Data", logo: "/images/annotation-tools/scale-ai.png" },
    { name: "Amazon SageMaker", category: "Machine Learning", logo: "/images/annotation-tools/amazon-sagemaker.png" }
  ];

  return (
    <main className="ai-data-services-page min-h-screen bg-white transition-colors duration-300 font-[family-name:var(--font-sans)] dark:bg-[#081126]">
      
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-[#0A1128] pb-12 pt-8 md:pb-16 md:pt-12">
        <NextImage src="/images/ai-data-services-hero-chip.png" alt="" fill priority sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,12,32,.82)_0%,rgba(5,12,32,.58)_45%,rgba(5,12,32,.28)_100%)]"></div>
        {/* Gradients */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#00F5D4]/10 blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-[1400px] mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left text column */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div>
                <span className="mb-3 block w-fit rounded-full bg-[#00F5D4]/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#00F5D4]">
                  AI Data Services
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.08] tracking-tight font-[family-name:var(--font-heading)]">
                  AI Data Services
                </h1>
                <h2 className="mt-3 text-lg font-bold leading-snug text-[#00F5D4] md:text-xl">
                  Build High-Quality AI Datasets That Power Smarter Machine Learning Models
                </h2>
              </div>
              <p className="text-base text-slate-300 leading-relaxed font-light">
                From data collection and cleaning to validation, labeling, and AI model evaluation, ANTELLAY delivers enterprise-grade AI data services for building reliable and accurate AI systems.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-2">
                <Link href="/contact" className="rounded-sm bg-[#00F5D4] px-6 py-3.5 text-sm font-bold text-[#0B132B] shadow-lg shadow-[#00F5D4]/20 transition-all hover:-translate-y-0.5 hover:bg-white">
                  Get Free Consultation →
                </Link>
                <Link href="/contact" className="ai-data-request-button rounded-sm border border-white bg-white px-6 py-3.5 text-sm font-bold text-[#0B132B] shadow-lg transition-all hover:-translate-y-0.5 hover:border-[#00F5D4] hover:bg-[#00F5D4]">
                  Request Sample Dataset
                </Link>
              </div>

              {/* KPI Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 mt-4 border-t border-slate-800">
                {[
                  { title: "99%+", desc: "Data Quality", icon: CheckCircle2 },
                  { title: "Scalable", desc: "Global Teams", icon: Users },
                  { title: "Secure", desc: "Data Handling", icon: ShieldCheck },
                  { title: "Fast", desc: "Turnaround", icon: Clock }
                ].map((item, idx) => {
                  const ItemIcon = item.icon;
                  return (
                    <div key={idx} className="flex flex-col items-center sm:items-start text-center sm:text-left gap-1">
                      <ItemIcon size={14} className="text-[#00F5D4]" />
                      <h4 className="text-xs font-black text-white">{item.title}</h4>
                      <p className="text-[9px] text-slate-400 font-bold uppercase">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right mockup column: Dataset Pipeline */}
            <div className="lg:col-span-7">
              <div className="group overflow-hidden rounded-sm border border-white/15 bg-[rgba(15,23,42,.72)] p-4 text-white shadow-2xl backdrop-blur-sm md:p-6">
                
                {/* Title */}
                <div className="flex items-center justify-between border-b border-slate-850 pb-3 mb-4">
                  <span className="text-xs font-black tracking-wider uppercase text-slate-300">Dataset Pipeline</span>
                  <span className="text-[10px] bg-slate-900 border border-slate-800 px-2 py-0.5 rounded-sm text-emerald-400">• Operational</span>
                </div>

                <div className="grid grid-cols-12 gap-4">
                  
                  {/* Left: Step Checklist */}
                  <div className="col-span-12 md:col-span-4 border-r border-slate-800/80 pr-2 space-y-3">
                    {[
                      { step: "Dataset Collection", desc: "Raw data from multiple sources", status: "done" },
                      { step: "Dataset Cleaning", desc: "Remove noise, duplicates", status: "done" },
                      { step: "Data Validation", desc: "Quality checks & review", status: "done" },
                      { step: "Data Labeling", desc: "Accurate annotation", status: "done" },
                      { step: "AI Model Evaluation", desc: "Evaluate performance", status: "active" },
                      { step: "AI Model Ready", desc: "Production-ready dataset", status: "pending" }
                    ].map((step, idx) => (
                      <div key={idx} className="flex gap-2 items-start text-left">
                        <span className={`w-3.5 h-3.5 rounded-full shrink-0 flex items-center justify-center text-[8px] mt-0.5 font-bold ${
                          step.status === "done" ? "bg-[#00F5D4] text-[#0B132B]" :
                          step.status === "active" ? "bg-[#00F5D4] text-slate-900" : "bg-slate-800 text-slate-500"
                        }`}>
                          {step.status === "done" ? "✓" : idx + 1}
                        </span>
                        <div>
                          <h4 className={`text-[10px] font-black leading-tight ${step.status === "pending" ? "text-slate-500" : "text-white"}`}>{step.step}</h4>
                          <p className="text-[8px] text-slate-400 leading-normal">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Center: Growth & Distribution */}
                  <div className="col-span-12 md:col-span-5 space-y-4">
                    {/* Stats Header */}
                    <div className="grid grid-cols-4 gap-1.5">
                      {[
                        { label: "Total Datasets", val: "12,458" },
                        { label: "Total Records", val: "98.6M" },
                        { label: "Data Modalities", val: "12+" },
                        { label: "Quality Score", val: "99.2%" }
                      ].map((stat, i) => (
                        <div key={i} className="bg-slate-900/60 border border-slate-850 p-1 rounded-sm text-center">
                          <p className="text-[6.5px] text-slate-400 uppercase truncate">{stat.label}</p>
                          <h5 className="text-[10px] font-black text-white mt-0.5">{stat.val}</h5>
                        </div>
                      ))}
                    </div>

                    {/* Chart growth */}
                    <div className="bg-slate-900 border border-slate-800 p-2 rounded-sm">
                      <span className="text-[7.5px] text-slate-400 font-bold block uppercase">Data Growth</span>
                      <svg className="w-full h-14 mt-1 overflow-visible" viewBox="0 0 100 40">
                        <path d="M 0 35 Q 15 15, 30 25 T 60 10 T 95 5 L 95 40 L 0 40 Z" fill="rgba(58, 134, 255, 0.08)" />
                        <path d="M 0 35 Q 15 15, 30 25 T 60 10 T 95 5" fill="none" stroke="#00F5D4" strokeWidth="1.5" />
                        <circle cx="60" cy="10" r="2" fill="#00F5D4" />
                      </svg>
                    </div>

                    {/* Donut distribution */}
                    <div className="bg-slate-900 border border-slate-800 p-2 rounded-sm flex items-center justify-between gap-2">
                      <div className="relative w-10 h-10 rounded-full border-4 border-slate-800 flex items-center justify-center" style={{ borderTopColor: "#00F5D4", borderRightColor: "#00A98F", borderBottomColor: "#FBBC05" }}>
                        <span className="text-[7px] font-bold text-white">MOD</span>
                      </div>
                      <div className="text-[7px] text-slate-400 flex-1 grid grid-cols-2 gap-x-2 gap-y-0.5 leading-normal">
                        <div className="flex justify-between"><span>• Image</span><span className="text-white font-bold">45%</span></div>
                        <div className="flex justify-between"><span>• Text</span><span className="text-white font-bold">20%</span></div>
                        <div className="flex justify-between"><span>• Video</span><span className="text-white font-bold">15%</span></div>
                        <div className="flex justify-between"><span>• Audio</span><span className="text-white font-bold">10%</span></div>
                      </div>
                    </div>

                    {/* Progress Annotation */}
                    <div className="bg-slate-900 border border-slate-800 p-2 rounded-sm">
                      <div className="flex justify-between text-[7px] text-slate-400 font-bold uppercase mb-1">
                        <span>Annotation Progress</span>
                        <span className="text-white">7.4M / 8.2M (90%)</span>
                      </div>
                      <div className="w-full bg-slate-850 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-emerald-500 h-full rounded-full" style={{ width: "90%" }}></div>
                      </div>
                    </div>
                  </div>

                  {/* Right: Model Evaluation */}
                  <div className="col-span-12 md:col-span-3 bg-slate-900/60 border border-slate-850 p-2.5 rounded-sm flex flex-col justify-between">
                    <div>
                      <span className="text-[7px] text-slate-400 font-bold block uppercase">Model Evaluation</span>
                      <div className="flex items-baseline justify-between mt-1">
                        <h4 className="text-base font-black text-white">93.6%</h4>
                        <span className="text-[7px] bg-emerald-950 text-emerald-400 px-1 py-0.5 rounded-sm font-bold">+4.2%</span>
                      </div>
                      <p className="text-[6.5px] text-slate-500">Model Accuracy</p>
                    </div>

                    {/* Bar evaluation */}
                    <div className="flex items-end justify-between h-10 gap-1.5 px-1 py-1">
                      <div className="w-1.5 bg-slate-800 h-[40%] rounded-t-sm"></div>
                      <div className="w-1.5 bg-[#00A98F] h-[65%] rounded-t-sm"></div>
                      <div className="w-1.5 bg-[#00F5D4] h-[80%] rounded-t-sm"></div>
                      <div className="w-1.5 bg-[#00F5D4] h-[95%] rounded-t-sm"></div>
                    </div>

                    {/* Evaluation metrics list */}
                    <div className="text-[7.5px] text-slate-400 space-y-0.5 border-t border-slate-800 pt-2 mt-2 leading-normal">
                      <div className="flex justify-between"><span>Precision</span><span className="text-white font-bold">92.1%</span></div>
                      <div className="flex justify-between"><span>Recall</span><span className="text-white font-bold">94.3%</span></div>
                      <div className="flex justify-between"><span>F1-Score</span><span className="text-white font-bold">93.2%</span></div>
                      <div className="flex justify-between"><span>mAP</span><span className="text-white font-bold">91.8%</span></div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Our AI Data Services (5 columns) */}
      <section className="py-16 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className="h-[1px] bg-slate-300 flex-1"></span>
            <h2 className="text-[#0B132B] text-xl md:text-2xl font-black uppercase tracking-wider shrink-0 font-[family-name:var(--font-heading)]">
              Our AI Data Services
            </h2>
            <span className="h-[1px] bg-slate-300 flex-1"></span>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-5">
            {coreServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <article key={idx} className="group flex min-h-[390px] flex-col overflow-hidden rounded-xl border border-[#E2E8F0] bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-[#00F5D4]/65 hover:shadow-[0_20px_42px_rgba(11,19,43,.14)]">
                  <div className="relative h-40 overflow-hidden bg-slate-900">
                    <NextImage src={service.image} alt={`${service.title} service`} fill sizes="(max-width: 768px) 90vw, (max-width: 1280px) 45vw, 260px" className="object-cover transition-transform duration-700 group-hover:scale-105"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#081126]/85 via-[#081126]/15 to-transparent"></div>
                    <span className="absolute bottom-4 left-4 grid h-11 w-11 place-items-center rounded-lg border border-white/20 bg-[#081126]/85 text-[#00F5D4] backdrop-blur-md"><Icon size={21}/></span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="mb-2 text-lg font-extrabold text-[#0B132B]">{service.title}</h3>
                    <p className="mb-6 text-sm leading-6 text-[#0B132B]/60">{service.description}</p>
                    <Link href="/contact" className="mt-auto inline-flex items-center gap-1.5 border-t border-[#E2E8F0] pt-4 text-sm font-bold text-[#00A98F] transition-all group-hover:gap-2 dark:text-[#00F5D4]">
                    Learn more <ArrowRight size={14} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. AI Domains We Support */}
      <section className="py-16 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="mb-12 flex items-center justify-center gap-4">
            <span className="h-[1px] flex-1 bg-slate-300"></span>
            <h2 className="shrink-0 text-center text-xl font-black uppercase tracking-wider text-[#0B132B] md:text-2xl">
              AI Domains We Support
            </h2>
            <span className="h-[1px] flex-1 bg-slate-300"></span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {domains.map((dom, idx) => {
              const DomIcon = dom.icon;
              return (
                <div key={idx} className="bg-[#F8FAFC] border border-[#E2E8F0] p-4 rounded-sm text-center flex flex-col items-center gap-3 hover:border-[#00F5D4] hover:bg-white hover:shadow-md transition-all duration-200">
                  <div className="text-[#00A98F] dark:text-[#00F5D4]">
                    <DomIcon size={22} />
                  </div>
                  <h4 className="text-[11px] font-bold text-[#0B132B] leading-tight">{dom.name}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Data Types We Work With */}
      <section className="py-12 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="mb-10 flex items-center justify-center gap-4">
            <span className="h-[1px] flex-1 bg-slate-300"></span>
            <h2 className="shrink-0 text-center text-xl font-black uppercase tracking-wider text-[#0B132B] md:text-2xl">
              Data Types We Work With
            </h2>
            <span className="h-[1px] flex-1 bg-slate-300"></span>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 pt-2 sm:grid-cols-2 lg:grid-cols-3">
            {dataTypes.map((dt, idx) => {
              const DtIcon = dt.icon;
              return (
                <article key={idx} className="group relative flex min-h-[165px] items-start gap-4 overflow-hidden rounded-xl border border-[#E2E8F0] bg-white p-5 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#00F5D4]/75 hover:shadow-lg">
                  <span className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-[#00F5D4]/10 transition-transform duration-500 group-hover:scale-150"></span>
                  <span className="relative grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#081126] text-[#00F5D4] transition group-hover:bg-[#00F5D4] group-hover:text-[#0B132B]"><DtIcon size={21}/></span>
                  <div className="relative pt-1">
                    <h3 className="text-base font-extrabold text-[#0B132B]">{dt.name}</h3>
                    <p className="mt-2 text-sm font-medium leading-6 text-[#0B132B]/60">{dt.desc}</p>
                    <span className="mt-4 block h-0.5 w-8 rounded-full bg-[#00F5D4] transition-all group-hover:w-14"></span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. End-To-End Data Lifecycle */}
      <section className="py-16 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="mb-14 flex items-center justify-center gap-4">
            <span className="h-[1px] flex-1 bg-slate-300"></span>
            <h2 className="shrink-0 text-center text-xl font-black uppercase tracking-wider text-[#0B132B] md:text-2xl">
              Our End-to-End Data Lifecycle
            </h2>
            <span className="h-[1px] flex-1 bg-slate-300"></span>
          </div>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {lifecycleSteps.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <article key={idx} className="group relative min-h-[210px] overflow-hidden rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#00F5D4]/70 hover:bg-white hover:shadow-lg">
                  <span className="absolute right-4 top-3 text-4xl font-black text-[#00F5D4]/15">{step.num}</span>
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#081126] text-[#00F5D4] transition group-hover:bg-[#00F5D4] group-hover:text-[#081126]"><StepIcon size={21}/></div>
                  <h4 className="mt-5 text-base font-extrabold text-[#0B132B]">{step.label}</h4>
                  <p className="mt-2 text-sm leading-6 text-[#0B132B]/60">{step.desc}</p>
                  <span className="mt-5 block h-0.5 w-9 rounded-full bg-[#00F5D4] transition-all group-hover:w-16"></span>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Why Choose Us & Technologies (Side-by-Side) */}
      <section className="py-16 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="flex flex-col gap-10">
            
            {/* Why Choose Us */}
            <div className="order-2">
              <div className="mb-8 flex items-center justify-center gap-4">
                <span className="h-[1px] flex-1 bg-slate-300"></span>
                <h2 className="shrink-0 text-center text-xl font-black uppercase tracking-wider text-[#0B132B] md:text-2xl">
                  Why Choose Antellay
                </h2>
                <span className="h-[1px] flex-1 bg-slate-300"></span>
              </div>
              <div className="flex flex-wrap gap-4 pt-2 lg:flex-nowrap">
                {whyChooseUs.map((item, idx) => {
                  const ItemIcon = item.icon;
                  return (
                    <article key={idx} className="group relative flex min-h-[215px] w-full flex-col overflow-hidden rounded-xl border border-[#E2E8F0] bg-white p-5 text-left transition-all duration-300 hover:-translate-y-1.5 hover:border-[#00F5D4]/70 hover:shadow-[0_18px_38px_rgba(11,19,43,.12)] sm:w-[calc(50%-8px)] lg:min-w-0 lg:flex-1">
                      <span className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#00F5D4]/10 transition-transform duration-500 group-hover:scale-150"></span>
                      <div className="relative grid h-12 w-12 place-items-center rounded-xl bg-[#081126] text-[#00F5D4] shadow-md transition-colors duration-300 group-hover:bg-[#00F5D4] group-hover:text-[#081126]">
                        <ItemIcon size={21}/>
                      </div>
                      <h3 className="relative mt-5 text-base font-extrabold text-[#0B132B]">{item.title}</h3>
                      <p className="relative mt-2 text-sm font-medium leading-6 text-[#0B132B]/60">{item.desc}</p>
                      <span className="relative mt-auto block h-0.5 w-9 rounded-full bg-[#00F5D4] pt-0 transition-all duration-300 group-hover:w-16"></span>
                    </article>
                  );
                })}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="order-1 rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm md:p-8">
              <div className="mb-8 flex items-center justify-center gap-4">
                <span className="h-[1px] flex-1 bg-slate-300"></span>
                <h2 className="shrink-0 text-center text-xl font-black uppercase tracking-wider text-[#0B132B] md:text-2xl">
                  Technologies & Platforms We Use
                </h2>
                <span className="h-[1px] flex-1 bg-slate-300"></span>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-2 md:grid-cols-4">
                {technologies.map((technology) => (
                  <article key={technology.name} className="group flex min-h-[195px] min-w-0 flex-col items-center justify-center rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#00F5D4]/70 hover:bg-white hover:shadow-lg">
                    <span className="ai-platform-logo grid h-20 w-full max-w-[180px] place-items-center overflow-hidden rounded-xl bg-white p-3 shadow-sm ring-1 ring-slate-100 transition-transform duration-300 group-hover:scale-[1.03]">
                      <NextImage src={technology.logo} alt={`${technology.name} logo`} width={128} height={128} className="max-h-14 w-auto max-w-full object-contain"/>
                    </span>
                    <h3 className="mt-4 text-sm font-extrabold text-[#0B132B]">{technology.name}</h3>
                    <p className="mt-1 text-[10px] font-bold uppercase tracking-wide text-[#00A98F]">{technology.category}</p>
                  </article>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. CTA Banner */}
      <section className="py-12 bg-white">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="relative isolate flex min-h-[275px] flex-col items-center justify-between gap-8 overflow-hidden rounded-2xl border border-slate-800 bg-[#0A1128] p-8 shadow-2xl md:min-h-[310px] md:flex-row md:p-12">
            
            {/* Visual background */}
            <div className="absolute inset-0 -z-10 opacity-30">
              <img 
                src="/images/ai_data_cta.jpg" 
                alt="AI Data Server backdrop"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-[#0F172A]/85 -z-10"></div>
            
            <div className="max-w-2xl text-left">
              <h2 className="text-2xl md:text-3xl font-black text-white leading-tight tracking-tight font-[family-name:var(--font-heading)]">
                Ready to Build Production-Ready AI Datasets?
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed mt-4 font-light">
                Partner with ANTELLAY to accelerate AI development with reliable, scalable, and enterprise-grade AI data services.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 shrink-0">
              <Link href="/contact" className="rounded-sm bg-[#00F5D4] px-6 py-3.5 text-sm font-bold text-[#0B132B] shadow-lg shadow-[#00F5D4]/20 transition-all hover:-translate-y-0.5 hover:bg-white">
                Book Free Consultation →
              </Link>
              <Link href="/contact" className="ai-data-cta-secondary rounded-sm border border-white bg-white px-6 py-3.5 text-sm font-bold text-[#0B132B] transition-all hover:-translate-y-0.5 hover:bg-[#00F5D4]">
                Contact AI Data Team
              </Link>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
