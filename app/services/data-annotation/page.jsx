import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck, Bot, Boxes, Car, ChevronRight,
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

function ServiceVisual({ kind, Icon }) {
  if (kind === "text") return <div className="flex h-full flex-col justify-center bg-white px-4 text-[10px] leading-5 text-slate-700"><p>Antellay provides <mark className="bg-emerald-100 px-1">quality</mark> annotation services for <mark className="bg-slate-100 px-1">AI</mark> models. Our team ensures high <mark className="bg-amber-100 px-1">accuracy</mark>.</p></div>;
  if (kind === "audio") return <div className="flex h-full flex-col items-center justify-center bg-white px-3 text-blue-600"><Waves size={58} strokeWidth={1.25}/><div className="mt-3 flex w-full justify-between text-[9px] text-slate-500"><span>00:00</span><span>00:10</span></div><div className="mt-1 h-1 w-full rounded bg-slate-200"><div className="h-full w-1/3 rounded bg-blue-500" /></div></div>;
  if (kind === "document") return <div className="relative h-full bg-slate-100 p-4"><div className="mx-auto h-full w-[76%] rotate-3 rounded bg-white p-3 shadow-md"><div className="mb-2 h-2 w-1/2 bg-slate-300"/><div className="space-y-2">{[82,62,90,72].map(n=><div key={n} className="h-1.5 bg-slate-200" style={{width:`${n}%`}}/>)}<div className="mt-3 h-7 rounded border-2 border-emerald-400"/></div></div></div>;
  return <div className={`relative h-full overflow-hidden ${kind === "lidar" ? "bg-[#06111f]" : "bg-slate-800"}`}><Image src="/images/data-annotation-workspace.png" alt="Annotated street dataset" fill sizes="(max-width: 768px) 50vw, 220px" className={`object-cover ${kind === "lidar" ? "saturate-[2] hue-rotate-[35deg] contrast-125" : ""}`} /><div className="absolute inset-0 bg-slate-950/5"/>{kind === "video" && <span className="absolute inset-0 m-auto grid h-10 w-10 place-items-center rounded-full border-2 border-white bg-black/45 text-white"><Play size={18} fill="currentColor" /></span>}<Icon className="absolute bottom-2 right-2 text-white/75" size={18}/></div>;
}

export default function DataAnnotationPage() {
  return (
    <main className="bg-[#f8faff] text-[#091a3a] dark:bg-[#f8faff] dark:text-[#091a3a]">
      <section className="border-b border-blue-100/60 bg-[radial-gradient(circle_at_8%_40%,#edf4ff_0,transparent_34%),#fbfcff]">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-6 pb-10 pt-12 md:px-10 lg:grid-cols-[.76fr_1.24fr] lg:px-14 lg:pb-6 lg:pt-5">
          <div className="flex flex-col justify-center lg:pb-8">
            <p className="mb-3 text-xs font-extrabold tracking-[.08em] text-[#0965d9]">DATA THAT TRAINS</p>
            <h1 className="max-w-[580px] font-[family-name:var(--font-heading)] text-5xl font-bold leading-[1.04] tracking-[-.04em] sm:text-6xl lg:text-[64px]">Data Annotation<br/>Services</h1>
            <p className="mt-5 max-w-[510px] text-sm leading-6 text-slate-700">High-quality, scalable, and accurate data annotation services for image, video, text, audio, LiDAR and document datasets to train powerful AI/ML models.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-md bg-[#0766ed] px-5 py-3.5 text-xs font-bold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5"><Sparkles size={15}/>Get Free Consultation</Link>
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-md border border-slate-700 bg-white px-5 py-3.5 text-xs font-bold"><FileText size={15}/>Request Sample Dataset</Link>
            </div>
            <div className="mt-9 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:max-w-[560px]">
              {[[BadgeCheck,"99%+","Accuracy"],[CircleGauge,"Scalable","On Demand"],[ShieldCheck,"Secure","Data Handling"],[Clock3,"Fast","Turnaround"]].map(([Icon,top,bottom])=><div key={top} className="flex items-center gap-2"><Icon size={23} className="text-[#0868e8]"/><span className="text-[10px] leading-4"><b className="block text-[11px]">{top}</b>{bottom}</span></div>)}
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
        <div className="rounded-xl bg-white px-4 py-6 shadow-[0_8px_30px_rgba(39,78,128,.07)] ring-1 ring-blue-100/70">
          <h2 className="text-center text-xl font-bold uppercase">Our Annotation Services</h2>
          <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
            {serviceCards.map(({title,copy,kind,icon})=><article key={title} className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm"><div className="h-32 sm:h-36"><ServiceVisual kind={kind} Icon={icon}/></div><div className="px-3 py-3 text-center"><h3 className="text-xs font-bold">{title}</h3><p className="mt-1.5 text-[9px] leading-4 text-slate-600">{copy}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-4 md:px-10 lg:px-8"><h2 className="text-center text-xl font-bold uppercase">Industries We Serve</h2><div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">{industries.map(([Icon,label])=><div key={label} className="flex min-h-24 flex-col items-center justify-center rounded-lg border border-blue-100 bg-white px-3 text-center shadow-sm"><Icon size={30} strokeWidth={1.5} className="mb-2 text-[#0868e8]"/><span className="text-[10px] font-bold leading-4">{label}</span></div>)}</div></section>

      <section className="mx-auto max-w-[1440px] px-6 py-4 md:px-10 lg:px-8"><div className="rounded-lg border border-blue-100 bg-white px-4 py-5"><h2 className="mb-5 text-center text-lg font-bold uppercase">Annotation Tools We Use</h2><div className="grid grid-cols-2 gap-y-5 sm:grid-cols-4 lg:grid-cols-8">{[["▣","CVAT"],["⌗","Label Studio"],["V7","DARWIN"],["S","SuperAnnotate"],["R","roboflow"],["D","DATALOOP"],["s","scale"],["✣","Amazon SageMaker"]].map(([mark,name],i)=><div key={name} className="flex items-center justify-center gap-2 border-slate-200 px-2 lg:border-r lg:last:border-r-0"><span className={`grid h-7 min-w-7 place-items-center rounded text-sm font-black ${[0,3].includes(i)?"bg-blue-600 text-white":"text-[#1265d5]"}`}>{mark}</span><span className="text-xs font-bold text-slate-700">{name}</span></div>)}</div></div></section>

      <section className="mx-auto grid max-w-[1440px] gap-4 px-6 py-4 md:px-10 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
        <div className="rounded-xl bg-[#eef5ff] p-4"><h2 className="text-center text-sm font-bold uppercase">Why Choose Antellay?</h2><div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">{reasons.map(([Icon,title,copy])=><div key={title} className="rounded-lg bg-white p-3 text-center shadow-sm"><Icon className="mx-auto mb-2 text-[#0868e8]" size={33} strokeWidth={1.5}/><h3 className="text-[10px] font-bold">{title}</h3><p className="mt-1.5 text-[8px] leading-3.5 text-slate-600">{copy}</p></div>)}</div></div>
        <div className="rounded-xl bg-[#eef5ff] p-4"><h2 className="text-center text-sm font-bold uppercase">Our Annotation Workflow</h2><div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-5">{workflow.map(([Icon,title,copy],i)=><div key={title} className="relative text-center">{i<4&&<ChevronRight className="absolute -right-3 top-6 hidden text-blue-600 sm:block" size={16}/>}<span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-white text-[#0868e8] shadow-sm"><Icon size={25} strokeWidth={1.5}/></span><h3 className="mt-2 text-[9px] font-bold">{title}</h3><p className="mt-1 text-[8px] leading-3.5 text-slate-600">{copy}</p></div>)}</div></div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 pb-3 pt-4 md:px-10 lg:px-8"><div className="relative overflow-hidden rounded-xl bg-[linear-gradient(110deg,#031a46,#04357a)] px-7 py-8 text-white"><div className="absolute inset-y-0 right-0 w-2/5 bg-[radial-gradient(circle,#1677ff_0,transparent_18%),radial-gradient(circle_at_70%_30%,#0a56bc_0,transparent_35%)] opacity-80"/><div className="relative flex flex-col justify-between gap-6 md:flex-row md:items-center"><div><h2 className="text-2xl font-bold">Ready to Train Better AI Models?</h2><p className="mt-2 max-w-lg text-xs leading-5 text-blue-100">Partner with Antellay for accurate, scalable, and secure data annotation services. Upload your dataset or talk to our experts today.</p></div><div className="flex flex-wrap gap-3"><Link href="/contact" className="rounded-md bg-[#0968f4] px-5 py-3 text-xs font-bold">Get Free Consultation</Link><Link href="/contact" className="inline-flex items-center gap-2 rounded-md border border-white/70 px-5 py-3 text-xs font-bold"><Upload size={14}/>Upload Your Dataset</Link></div></div></div></section>
    </main>
  );
}
