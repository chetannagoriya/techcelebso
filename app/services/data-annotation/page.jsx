"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck, Bot, Boxes, Car, ChevronLeft, ChevronRight,
  CircleGauge, ClipboardCheck, Clock3, Database, FileText, Factory,
  HeartPulse, LockKeyhole, PenTool, Plane, Play, Radar,
  ScanLine, Send, ShieldCheck, ShoppingCart, Sparkles, Upload, Users, Waves,
} from "lucide-react";

const serviceCards = [
  { title: "Image Annotation", copy: "Bounding Boxes, Polygons, Semantic Segmentation, Keypoints & more.", kind: "photo", icon: ScanLine },
  { title: "Video Annotation", copy: "Object Tracking, Frame-by-Frame Labeling, Activity Recognition.", kind: "video", icon: Play },
  { title: "Text Annotation", copy: "NER, Sentiment Analysis, Intent Classification, Text Categorization.", kind: "text", icon: FileText },
  { title: "Audio Annotation", copy: "Speech Transcription, Speaker Identification, Emotion Detection.", kind: "audio", icon: Waves },
  { title: "LiDAR Annotation", copy: "3D Point Cloud, Cuboids, Object Tracking, Autonomous Driving Datasets.", kind: "lidar", icon: Boxes },
  { title: "Document Annotation", copy: "OCR, Invoice Processing, Forms, Receipts, PDF Labeling.", kind: "document", icon: ClipboardCheck },
];

const industries = [
  [Car, "Autonomous Vehicles"], [HeartPulse, "Healthcare"], [ShoppingCart, "Retail & E-commerce"],
  [Plane, "Drone & GIS"], [Bot, "Robotics"], [Radar, "Remote Sensing"],
  [Factory, "Manufacturing"], [ShieldCheck, "Security & Surveillance"],
];

const reasons = [
  [ShieldCheck, "High Accuracy", "99%+ accuracy with multi-level quality checks."],
  [Users, "Expert Annotators", "Trained domain experts for complex annotation requirements."],
  [Clock3, "Fast Turnaround", "Scalable teams to deliver large datasets within deadlines."],
  [LockKeyhole, "Secure & Compliant", "Strict data security protocols and NDAs for all projects."],
];

const workflow = [
  [Database, "1. Data Collection", "Collect raw data from various sources."],
  [PenTool, "2. Data Annotation", "Annotate data with industry best practices."],
  [ShieldCheck, "3. Quality Review", "Multi-level QA to ensure high accuracy."],
  [ClipboardCheck, "4. Validation", "Final validation and error resolution."],
  [Send, "5. Delivery", "Deliver clean data ready for AI model training."],
];

const annotationTools = [
  ["CVAT", "Computer Vision", "/images/annotation-tools/cvat.png"],
  ["Label Studio", "Multi-Modal Labeling", "/images/annotation-tools/label-studio.png"],
  ["V7 Darwin", "AI Data Platform", "/images/annotation-tools/v7-darwin.png"],
  ["SuperAnnotate", "Annotation Platform", "/images/annotation-tools/superannotate.png"],
  ["Roboflow", "Vision Datasets", "/images/annotation-tools/roboflow.png"],
  ["Dataloop", "Data Operations", "/images/annotation-tools/dataloop.png"],
  ["Scale AI", "Training Data", "/images/annotation-tools/scale-ai.png"],
  ["Amazon SageMaker", "ML Data Labeling", "/images/annotation-tools/amazon-sagemaker.png"],
];

function ServiceVisual({ kind, Icon }) {
  if (kind === "text") return <div className="relative h-full overflow-hidden bg-white"><Image src="/images/text-annotation-example.png" alt="Types of text annotation including classification, parsing, sentiment and entity recognition" fill sizes="(max-width: 640px) 86vw, (max-width: 1024px) 47vw, 340px" className="object-cover object-center transition-transform duration-700 group-hover:scale-105"/></div>;
  if (kind === "audio") return <div className="relative h-full overflow-hidden bg-[#06111f]"><Image src="/images/audio-annotation-example.png" alt="Audio waveform annotation example" fill sizes="(max-width: 640px) 86vw, (max-width: 1024px) 47vw, 340px" className="object-cover object-center transition-transform duration-700 group-hover:scale-105"/></div>;
  if (kind === "lidar") return <div className="relative h-full overflow-hidden bg-[#06111f]"><Image src="/images/lidar-annotation-example.png" alt="LiDAR point cloud annotation example" fill sizes="(max-width: 640px) 86vw, (max-width: 1024px) 47vw, 340px" className="object-cover object-center transition-transform duration-700 group-hover:scale-105"/></div>;
  if (kind === "document") return <div className="relative h-full overflow-hidden bg-[#06111f]"><Image src="/images/document-annotation-example.png" alt="Document annotation and intelligent document processing example" fill sizes="(max-width: 640px) 86vw, (max-width: 1024px) 47vw, 340px" className="object-cover object-center transition-transform duration-700 group-hover:scale-105"/></div>;
  return <div className={`relative h-full overflow-hidden ${kind === "lidar" ? "bg-[#06111f]" : "bg-slate-800"}`}><Image src="/images/data-annotation-workspace.png" alt="Annotated street dataset" fill sizes="(max-width: 768px) 50vw, 220px" className={`object-cover ${kind === "lidar" ? "saturate-[2] hue-rotate-[35deg] contrast-125" : ""}`} /><div className="absolute inset-0 bg-slate-950/5"/>{kind === "video" && <span className="absolute inset-0 m-auto grid h-10 w-10 place-items-center rounded-full border-2 border-white bg-black/45 text-white"><Play size={18} fill="currentColor" /></span>}<Icon className="absolute bottom-2 right-2 text-white/75" size={18}/></div>;
}

export default function DataAnnotationPage() {
  const servicesCarouselRef = useRef(null);

  const scrollServices = (direction) => {
    const carousel = servicesCarouselRef.current;
    if (!carousel) return;
    carousel.scrollBy({
      left: direction * Math.max(300, carousel.clientWidth * 0.8),
      behavior: "smooth",
    });
  };

  return (
    <main className="data-annotation-page bg-[#f8faff] text-[#091a3a] transition-colors duration-300 dark:bg-[#081126] dark:text-white">
      <section className="data-annotation-hero border-b border-[#00F5D4]/20 bg-[radial-gradient(circle_at_8%_40%,#E8FFFB_0,transparent_34%),#fbfcff]">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-6 pb-10 pt-12 md:px-10 lg:grid-cols-[.76fr_1.24fr] lg:px-14 lg:pb-6 lg:pt-5">
          <div className="flex flex-col justify-center lg:pb-8">
            <p className="mb-3 text-xs font-extrabold tracking-[.08em] text-[#00A98F]">DATA THAT TRAINS</p>
            <h1 className="max-w-[580px] font-[family-name:var(--font-heading)] text-5xl font-bold leading-[1.04] tracking-[-.04em] sm:text-6xl lg:text-[64px]">Data Annotation<br/>Services</h1>
            <p className="mt-5 max-w-[510px] text-sm leading-6 text-slate-700">High-quality, scalable, and accurate data annotation services for image, video, text, audio, LiDAR and document datasets to train powerful AI/ML models.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-md bg-[#00F5D4] px-5 py-3.5 text-xs font-bold text-[#0B132B] shadow-lg shadow-[#00F5D4]/20 transition hover:-translate-y-0.5"><Sparkles size={15}/>Get Free Consultation</Link>
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-md border border-slate-700 bg-white px-5 py-3.5 text-xs font-bold"><FileText size={15}/>Request Sample Dataset</Link>
            </div>
            <div className="mt-9 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:max-w-[560px]">
              {[[BadgeCheck,"99%+","Accuracy"],[CircleGauge,"Scalable","On Demand"],[ShieldCheck,"Secure","Data Handling"],[Clock3,"Fast","Turnaround"]].map(([Icon,top,bottom])=><div key={top} className="flex items-center gap-2"><Icon size={23} className="text-[#00A98F]"/><span className="text-[10px] leading-4"><b className="block text-[11px]">{top}</b>{bottom}</span></div>)}
            </div>
          </div>
          <div className="min-w-0">
            <div className="overflow-hidden rounded-xl border border-slate-700 bg-[#07111f] shadow-[0_24px_55px_rgba(21,54,105,.23)]"><Image src="/images/data-annotation-workspace.png" alt="Computer vision data annotation workspace" width={1680} height={945} priority className="h-auto w-full"/></div>
            <div className="relative z-10 -mt-1 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {["Image Annotation","Semantic Segmentation","LiDAR Annotation","Document OCR"].map((name,i)=><div key={name} className="rounded-md border border-slate-200 bg-white p-1.5 shadow-md"><div className="relative aspect-[1.72] overflow-hidden rounded-sm bg-slate-100">{i<3?<Image src="/images/data-annotation-workspace.png" alt="" fill sizes="160px" className={`object-cover ${i===1?"hue-rotate-90 saturate-150":i===2?"hue-rotate-[35deg] saturate-[2] contrast-125":""}`}/>:<ServiceVisual kind="document" Icon={FileText}/>}</div><p className="py-1 text-center text-[9px] font-bold">{name}</p></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-5 md:px-10 lg:px-8">
        <div className="rounded-2xl bg-white px-5 py-8 shadow-[0_14px_40px_rgba(11,19,43,.08)] ring-1 ring-[#00F5D4]/20 md:px-8">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px flex-1 bg-[#00F5D4]/25"></span>
            <h2 className="shrink-0 text-center text-xl font-black uppercase tracking-wider md:text-2xl">Our Annotation Services</h2>
            <span className="h-px flex-1 bg-[#00F5D4]/25"></span>
          </div>
          <div className="relative mt-8">
            <button type="button" onClick={() => scrollServices(-1)} aria-label="Previous annotation services" className="absolute -left-5 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 cursor-pointer place-items-center rounded-full border border-slate-200 bg-white text-[#091a3a] shadow-lg transition hover:border-[#00F5D4] hover:bg-[#00F5D4]">
              <ChevronLeft size={22}/>
            </button>

            <div ref={servicesCarouselRef} className="annotation-services-carousel flex snap-x snap-mandatory gap-5 overflow-x-auto px-1 py-3">
              {serviceCards.map(({title,copy,kind,icon:Icon}) => (
                <article key={title} className="group min-w-[86%] snap-start overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-[#00F5D4]/70 hover:shadow-[0_18px_38px_rgba(11,19,43,.13)] sm:min-w-[47%] lg:min-w-[calc((100%-60px)/4)]">
                  <div className="relative h-44 overflow-hidden bg-slate-100">
                    <ServiceVisual kind={kind} Icon={Icon}/>
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071127]/55 via-transparent to-transparent opacity-70"></div>
                    <span className="absolute bottom-4 left-4 grid h-11 w-11 place-items-center rounded-lg border border-white/20 bg-[#071127]/80 text-[#00F5D4] shadow-lg backdrop-blur-md">
                      <Icon size={21}/>
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-base font-extrabold text-[#091a3a]">{title}</h3>
                    <p className="mt-2 text-xs leading-5 text-slate-600">{copy}</p>
                    <div className="mt-5 h-0.5 w-10 rounded-full bg-[#00F5D4] transition-all duration-300 group-hover:w-20"></div>
                  </div>
                </article>
              ))}
            </div>

            <button type="button" onClick={() => scrollServices(1)} aria-label="Next annotation services" className="absolute -right-5 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 cursor-pointer place-items-center rounded-full border border-slate-200 bg-white text-[#091a3a] shadow-lg transition hover:border-[#00F5D4] hover:bg-[#00F5D4]">
              <ChevronRight size={22}/>
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-6 md:px-10 lg:px-8">
        <div className="rounded-2xl border border-[#00F5D4]/20 bg-white p-6 shadow-[0_14px_40px_rgba(11,19,43,.07)] md:p-8">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px flex-1 bg-[#00F5D4]/25"></span>
            <h2 className="shrink-0 text-center text-xl font-black uppercase tracking-wider md:text-2xl">Industries We Serve</h2>
            <span className="h-px flex-1 bg-[#00F5D4]/25"></span>
          </div>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-6 text-slate-600">Purpose-built annotation expertise for demanding AI applications across leading industries.</p>
          <div className="mt-7 grid grid-cols-2 gap-4 md:grid-cols-4">
            {industries.map(([Icon,label])=><article key={label} className="group relative flex min-h-36 flex-col items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-[linear-gradient(145deg,#ffffff,#f7fffd)] px-4 py-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-[#00F5D4]/70 hover:shadow-[0_16px_32px_rgba(11,19,43,.12)]">
              <span className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-[#00F5D4]/10 transition-transform duration-500 group-hover:scale-150"></span>
              <span className="relative grid h-14 w-14 place-items-center rounded-xl bg-[#071127] text-[#00F5D4] shadow-[0_10px_22px_rgba(7,17,39,.18)] transition duration-300 group-hover:bg-[#00F5D4] group-hover:text-[#071127]">
                <Icon size={27} strokeWidth={1.7}/>
              </span>
              <h3 className="relative mt-4 text-sm font-extrabold leading-5 text-[#091a3a]">{label}</h3>
              <span className="relative mt-3 h-0.5 w-8 rounded-full bg-[#00F5D4] transition-all duration-300 group-hover:w-16"></span>
            </article>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-7 md:px-10 lg:px-8">
        <div className="rounded-2xl border border-[#00F5D4]/20 bg-white p-6 shadow-[0_14px_40px_rgba(11,19,43,.07)] md:p-8">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px flex-1 bg-[#00F5D4]/25"></span>
            <h2 className="shrink-0 text-center text-xl font-black uppercase tracking-wider md:text-2xl">Annotation Tools We Use</h2>
            <span className="h-px flex-1 bg-[#00F5D4]/25"></span>
          </div>
          <p className="mx-auto mt-3 max-w-2xl text-center text-xs leading-5 text-slate-600">Professional platforms selected for accurate, scalable, and secure data labeling workflows.</p>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {annotationTools.map(([name,category,logo]) => (
              <div key={name} className="annotation-tool-card group flex min-h-[155px] flex-col items-center justify-center rounded-xl border border-slate-200 bg-[#fbfdfd] p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#00F5D4]/70 hover:bg-[#E8FFFB]/55 hover:shadow-md">
                <span className="annotation-tool-logo grid h-16 w-16 place-items-center overflow-hidden rounded-xl bg-white p-2 shadow-sm ring-1 ring-slate-100 transition-transform duration-300 group-hover:scale-105">
                  <Image src={logo} alt={`${name} logo`} width={56} height={56} className="h-full w-full object-contain"/>
                </span>
                <h3 className="mt-4 text-sm font-extrabold text-[#091a3a]">{name}</h3>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-[#00A98F]">{category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto flex max-w-[1440px] flex-col gap-6 px-6 py-8 md:px-10 lg:px-8">
        <div className="min-h-[280px] rounded-2xl border border-[#00F5D4]/20 bg-[#E8FFFB] p-6 md:p-8">
          <h2 className="text-center text-xl font-black uppercase tracking-wider">Why Choose Antellay?</h2>
          <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map(([Icon,title,copy]) => (
              <div key={title} className="flex min-h-[170px] flex-col items-center justify-center rounded-xl border border-white bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#00F5D4]/50 hover:shadow-md">
                <span className="mb-4 grid h-12 w-12 place-items-center rounded-full bg-[#E8FFFB] text-[#00A98F]"><Icon size={26} strokeWidth={1.6}/></span>
                <h3 className="text-sm font-extrabold">{title}</h3>
                <p className="mt-2 max-w-[240px] text-xs leading-5 text-slate-600">{copy}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="min-h-[280px] rounded-2xl border border-[#00F5D4]/20 bg-[#E8FFFB] p-6 md:p-8">
          <h2 className="text-center text-xl font-black uppercase tracking-wider">Our Annotation Workflow</h2>
          <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-5">
            {workflow.map(([Icon,title,copy],i) => (
              <div key={title} className="relative flex min-h-[175px] flex-col items-center justify-center rounded-xl bg-white p-4 text-center shadow-sm">
                {i < 4 && <ChevronRight className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-[#00A98F] sm:block" size={18}/>}
                <span className="grid h-13 w-13 place-items-center rounded-full bg-[#E8FFFB] text-[#00A98F] shadow-sm"><Icon size={25} strokeWidth={1.6}/></span>
                <h3 className="mt-3 text-xs font-extrabold">{title}</h3>
                <p className="mt-2 max-w-[180px] text-[10px] leading-4 text-slate-600">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 pb-5 pt-6 md:px-10 lg:px-8"><div className="relative flex min-h-[250px] items-center overflow-hidden rounded-xl bg-[linear-gradient(110deg,#031a46,#04357a)] px-7 py-10 text-white sm:px-10 md:min-h-[280px] md:px-12 md:py-12 lg:px-16"><div className="absolute inset-y-0 right-0 w-2/5 bg-[radial-gradient(circle,#00F5D4_0,transparent_18%),radial-gradient(circle_at_70%_30%,#00A98F_0,transparent_35%)] opacity-80"/><div className="relative flex w-full flex-col justify-between gap-7 md:flex-row md:items-center lg:gap-10"><div><h2 className="text-3xl font-bold leading-tight sm:text-[34px] lg:text-4xl">Ready to Train Better AI Models?</h2><p className="mt-3 max-w-xl text-sm leading-6 text-white/80 lg:text-base">Partner with Antellay for accurate, scalable, and secure data annotation services. Upload your dataset or talk to our experts today.</p></div><div className="flex shrink-0 flex-wrap gap-3"><Link href="/contact" className="rounded-md bg-[#00F5D4] px-6 py-3 text-sm font-bold text-[#0B132B] transition hover:-translate-y-0.5 hover:bg-white">Get Free Consultation</Link><Link href="/contact" className="inline-flex items-center gap-2 rounded-md border border-white/70 px-6 py-3 text-sm font-bold transition hover:-translate-y-0.5 hover:bg-white hover:text-[#0B132B]"><Upload size={16}/>Upload Your Dataset</Link></div></div></div></section>
    </main>
  );
}
