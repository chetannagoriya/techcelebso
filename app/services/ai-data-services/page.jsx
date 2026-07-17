"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  CheckCircle2, 
  ArrowRight, 
  Database, 
  Filter, 
  ShieldCheck, 
  Users, 
  Clock, 
  Sparkles,
  HelpCircle,
  Plus, 
  Minus, 
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
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const coreServices = [
    {
      title: "Dataset Collection",
      description: "Collect diverse and high-quality data from multiple sources including web, sensors, APIs, databases, and real-world environments.",
      color: "border-blue-500",
      iconColor: "bg-blue-500",
      icon: Database
    },
    {
      title: "Dataset Cleaning",
      description: "Remove duplicates, noise, inconsistencies, irrelevant records and prepare clean, structured, and model-ready datasets.",
      color: "border-emerald-500",
      iconColor: "bg-emerald-500",
      icon: Filter
    },
    {
      title: "Data Validation",
      description: "Multi-level validation with automated checks and human-in-the-loop review to ensure accuracy and completeness.",
      color: "border-purple-500",
      iconColor: "bg-purple-500",
      icon: ShieldCheck
    },
    {
      title: "Data Labeling",
      description: "High-quality annotation for images, videos, text, audio, LiDAR, and documents across multiple AI/ML use cases.",
      color: "border-orange-500",
      iconColor: "bg-orange-500",
      icon: Sparkles
    },
    {
      title: "AI Model Evaluation",
      description: "Evaluate, benchmark and improve model performance using robust evaluation frameworks and metrics.",
      color: "border-teal-500",
      iconColor: "bg-teal-500",
      icon: Brain
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
    { name: "Image Data", icon: ImageIcon },
    { name: "Video Data", icon: Video },
    { name: "Text Data", icon: FileText },
    { name: "Audio Data", icon: Volume2 },
    { name: "Documents", icon: FileSpreadsheet },
    { name: "LiDAR Data", icon: Layers },
    { name: "Satellite Imagery", icon: Globe },
    { name: "Time-Series Data", icon: Activity },
    { name: "Sensor Data", icon: Cpu }
  ];

  const lifecycleSteps = [
    { num: "1", label: "Data Collection", icon: Database },
    { num: "2", label: "Cleaning", icon: Filter },
    { num: "3", label: "Validation", icon: ShieldCheck },
    { num: "4", label: "Labeling", icon: Sparkles },
    { num: "5", label: "Quality Assurance", icon: CheckCircle2 },
    { num: "6", label: "AI Model Evaluation", icon: Brain },
    { num: "7", label: "Deployment Ready Dataset", icon: Check }
  ];

  const whyChooseUs = [
    { title: "99%+ Quality", desc: "Industry-leading quality standards with strict verification pipelines.", icon: CheckCircle2 },
    { title: "Human + AI Review", desc: "AI-assisted tools paired with expert human-in-the-loop validation.", icon: Users },
    { title: "Secure & Compliant", desc: "Enterprise-grade data security with full regulatory compliance.", icon: ShieldCheck },
    { title: "Scalable Operations", desc: "Global delivery model with thousands of experienced annotators.", icon: Globe },
    { title: "Fast Turnaround", desc: "On-time delivery with agile management and automated pipelines.", icon: Clock },
    { title: "Enterprise Ready", desc: "Trusted by top-tier startups and Fortune 500 corporations.", icon: Sparkles }
  ];

  const faqs = [
    {
      q: "How do you ensure 99%+ data annotation quality?",
      a: "We implement a strict multi-tiered quality control system. This includes automated syntax and rule checks, peer reviews, consensus labeling, and final validation by domain-expert Quality Assurance leads. Only datasets passing our 99%+ accuracy threshold are delivered."
    },
    {
      q: "Which data annotation formats do you support?",
      a: "We support all industry-standard formats including COCO, YOLO, Pascal VOC, TFRecord, GeoJSON, CSV, JSON, and custom formats. We can directly export annotation files ready to load into CVAT, Label Studio, Darwin, or your custom ML pipeline."
    },
    {
      q: "How do you handle sensitive or private data?",
      a: "Security is our highest priority. We operate under strict NDA policies and offer secure, air-gapped on-premise infrastructure setups. We are SOC2 and GDPR compliant, ensuring your IP and sensitive user data remain fully secure."
    },
    {
      q: "Can you source custom datasets for us?",
      a: "Yes. Our Dataset Collection services cover web scraping, sensor recordings, custom audio datasets, high-resolution photography, and specialized remote sensing imagery tailored to your ML model's targeted domain."
    }
  ];

  return (
    <main className="min-h-screen bg-white transition-colors duration-300 font-[family-name:var(--font-sans)]">
      
      {/* 1. Hero Section */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden bg-[#0A1128]">
        {/* Gradients */}
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#3A86FF]/10 blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#00F5D4]/10 blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-[1400px] mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left text column */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div>
                <span className="text-[#3A86FF] text-xs font-bold uppercase tracking-widest block mb-3 bg-[#3A86FF]/10 px-3 py-1 rounded-full w-fit">
                  AI Data Services
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.08] tracking-tight font-[family-name:var(--font-heading)]">
                  AI Data Services
                </h1>
                <h2 className="text-lg md:text-xl font-bold text-[#70EEFF] mt-3 leading-snug">
                  Build High-Quality AI Datasets That Power Smarter Machine Learning Models
                </h2>
              </div>
              <p className="text-base text-slate-300 leading-relaxed font-light">
                From data collection and cleaning to validation, labeling, and AI model evaluation, ANTELLAY delivers enterprise-grade AI data services for building reliable and accurate AI systems.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-2">
                <Link href="/contact" className="px-6 py-3.5 bg-[#3A86FF] hover:bg-[#3A86FF]/90 text-white text-sm font-bold rounded-sm shadow-lg shadow-[#3A86FF]/20 transition-all hover:-translate-y-0.5">
                  Get Free Consultation →
                </Link>
                <Link href="/contact" className="px-6 py-3.5 bg-transparent border border-slate-500 hover:border-white text-white text-sm font-bold rounded-sm transition-all hover:bg-white/5">
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
              <div className="bg-[#0F172A] border border-slate-800 rounded-sm shadow-2xl p-4 md:p-6 text-white overflow-hidden group">
                
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
                          step.status === "done" ? "bg-[#3A86FF] text-white" :
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
                        <path d="M 0 35 Q 15 15, 30 25 T 60 10 T 95 5" fill="none" stroke="#3A86FF" strokeWidth="1.5" />
                        <circle cx="60" cy="10" r="2" fill="#00F5D4" />
                      </svg>
                    </div>

                    {/* Donut distribution */}
                    <div className="bg-slate-900 border border-slate-800 p-2 rounded-sm flex items-center justify-between gap-2">
                      <div className="relative w-10 h-10 rounded-full border-4 border-slate-800 flex items-center justify-center" style={{ borderTopColor: "#3A86FF", borderRightColor: "#00F5D4", borderBottomColor: "#FBBC05" }}>
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
                      <div className="w-1.5 bg-[#3A86FF] h-[65%] rounded-t-sm"></div>
                      <div className="w-1.5 bg-[#3A86FF] h-[80%] rounded-t-sm"></div>
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
                    <p className="text-xs text-[#0B132B]/60 leading-relaxed mb-6">{service.description}</p>
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

      {/* 3. AI Domains We Support */}
      <section className="py-16 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className="h-[1px] bg-slate-200 flex-1"></span>
            <h2 className="text-[#0B132B] text-sm font-black uppercase tracking-wider shrink-0">
              AI Domains We Support
            </h2>
            <span className="h-[1px] bg-slate-200 flex-1"></span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {domains.map((dom, idx) => {
              const DomIcon = dom.icon;
              return (
                <div key={idx} className="bg-[#F8FAFC] border border-[#E2E8F0] p-4 rounded-sm text-center flex flex-col items-center gap-3 hover:border-[#3A86FF] hover:bg-white hover:shadow-md transition-all duration-200">
                  <div className="text-[#3A86FF]">
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
          <div className="flex items-center justify-center gap-4 mb-10">
            <span className="h-[1px] bg-slate-300 flex-1"></span>
            <h3 className="text-[#0B132B] text-xs font-black uppercase tracking-wider shrink-0">
              Data Types We Work With
            </h3>
            <span className="h-[1px] bg-slate-300 flex-1"></span>
          </div>

          <div className="flex flex-wrap justify-center gap-3.5 max-w-5xl mx-auto">
            {dataTypes.map((dt, idx) => {
              const DtIcon = dt.icon;
              return (
                <div key={idx} className="flex items-center gap-2.5 bg-white border border-[#E2E8F0] px-4.5 py-2.5 rounded-sm text-xs font-bold text-[#0B132B] hover:shadow-sm hover:border-[#3A86FF] transition-all cursor-default">
                  <DtIcon size={16} className="text-[#3A86FF]" />
                  {dt.name}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. End-To-End Data Lifecycle */}
      <section className="py-16 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="flex items-center justify-center gap-4 mb-14">
            <span className="h-[1px] bg-slate-200 flex-1"></span>
            <h2 className="text-[#0B132B] text-base font-black uppercase tracking-wider shrink-0">
              Our End-to-End Data Lifecycle
            </h2>
            <span className="h-[1px] bg-slate-200 flex-1"></span>
          </div>

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 max-w-6xl mx-auto">
            {/* Connection Line */}
            <div className="absolute top-[28px] left-[5%] right-[5%] h-[1.5px] border-t border-dashed border-[#3A86FF]/40 hidden md:block -z-10"></div>
            
            {lifecycleSteps.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <div key={idx} className="flex flex-col items-center text-center max-w-[130px] flex-1 relative z-10">
                  <div className="w-14 h-14 rounded-full bg-white border border-[#E2E8F0] shadow-sm flex items-center justify-center text-[#3A86FF] hover:border-[#3A86FF] hover:scale-105 transition-all duration-300">
                    <StepIcon size={22} />
                  </div>
                  <span className="text-[9px] font-black text-[#3A86FF] mt-3">{step.num}</span>
                  <h4 className="text-xs font-bold text-[#0B132B] mt-1">{step.label}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Why Choose Us & Technologies (Side-by-Side) */}
      <section className="py-16 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Why Choose Us */}
            <div className="lg:col-span-6">
              <div className="flex items-center gap-3 border-b border-slate-200 pb-3 mb-6">
                <h3 className="text-base font-extrabold text-[#0B132B] uppercase tracking-wide">
                  Why Choose Antellay
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {whyChooseUs.map((item, idx) => {
                  const ItemIcon = item.icon;
                  return (
                    <div key={idx} className="flex gap-3 text-left">
                      <div className="w-8 h-8 rounded-sm bg-white border border-[#E2E8F0] flex items-center justify-center text-[#3A86FF] shrink-0 shadow-sm">
                        <ItemIcon size={16} />
                      </div>
                      <div>
                        <h4 className="text-xs font-black text-[#0B132B]">{item.title}</h4>
                        <p className="text-[10px] text-[#0B132B]/60 leading-relaxed mt-1 font-medium">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="lg:col-span-6 bg-white border border-[#E2E8F0] p-6 rounded-sm shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-6">
                <h3 className="text-base font-extrabold text-[#0B132B] uppercase tracking-wide">
                  Technologies & Platforms We Use
                </h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {[
                  CVATLogo,
                  LabelStudioLogo,
                  SuperAnnotateLogo,
                  DarwinLogo,
                  PythonLogo,
                  OpenCVLogo,
                  TensorFlowLogo,
                  PyTorchLogo,
                  AWSLogo,
                  AzureLogo,
                  GoogleCloudLogo,
                  SnowflakeLogo
                ].map((LogoComp, idx) => (
                  <div key={idx} className="flex items-center justify-center border border-[#E2E8F0] bg-[#F8FAFC] p-3 rounded-sm hover:scale-[1.03] transition-transform">
                    <LogoComp />
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
              <Link href="/contact" className="px-6 py-3.5 bg-[#3A86FF] hover:bg-[#3A86FF]/90 text-white text-sm font-bold rounded-sm shadow-lg shadow-[#3A86FF]/20 transition-all hover:-translate-y-0.5">
                Book Free Consultation →
              </Link>
              <Link href="/contact" className="px-6 py-3.5 bg-transparent border border-slate-600 hover:border-white text-white text-sm font-bold rounded-sm transition-all hover:bg-white/5">
                Contact AI Data Team
              </Link>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
