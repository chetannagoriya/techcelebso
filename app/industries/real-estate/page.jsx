import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, BarChart3, Bot, Building2, CheckCircle2, ClipboardList,
  Database, FileSearch, Layers3, Lightbulb, Map, MapPin, Radar, Satellite,
  ShieldCheck, Target, TrendingUp,
} from "lucide-react";
import TechStackMarquee from "../../../components/TechStackMarquee";
import TrustedOrganizationsMarquee from "../../../components/TrustedOrganizationsMarquee";
import UseCasesMarquee from "../../../components/UseCasesMarquee";

const challenges = [
  [Database, "Property Data Scattered"], [Target, "Manual Site Selection"],
  [Map, "No GIS Visibility"], [TrendingUp, "Poor Market Insights"],
  [FileSearch, "Slow Land Assessment"], [ShieldCheck, "Legal Boundary Issues"],
];

const workflow = [
  [ClipboardList, "Property Data"], [Satellite, "Satellite Mapping"],
  [Layers3, "GIS Analysis"], [Lightbulb, "AI Insights"],
  [Building2, "Investment Decision"], [ShieldCheck, "Monitoring"],
];

const realEstateUseCases = [
  ["Residential", "/images/industries/Real Estate.jpg"],
  ["Commercial", "/images/industries/Professional Services.jpg"],
  ["Smart Cities", "/images/energy-utilities/connected-energy-city.png"],
  ["Construction", "/images/construction-infrastructure/construction-hero.png"],
  ["Government", "/images/industry-showcases/government-smart-cities.png"],
  ["Infrastructure", "/images/gis_cta_satellite.jpg"],
  ["Urban Planning", "/images/gis_hero_map.jpg"],
  ["Real Estate Agencies", "/images/consulting_hero.jpg"],
];

function MapPanel({ className = "" }) {
  return <div className={`relative overflow-hidden rounded-lg bg-[#071c27] ${className}`}><Image src="/images/gis_hero_map.jpg" alt="Interactive real estate GIS map" fill sizes="(max-width: 900px) 100vw, 50vw" className="object-cover"/><div className="absolute inset-0 bg-emerald-950/10"/>{[[28,34],[47,56],[63,31],[76,63],[39,72]].map(([x,y],i)=><MapPin key={i} size={20} fill="#0bb98a" className="absolute text-white drop-shadow" style={{left:`${x}%`,top:`${y}%`}}/>)}</div>;
}

export default function RealEstatePage() {
  return (
    <main className="bg-[#fbfdfc] text-[#102b2b] dark:bg-[#071126] dark:text-white">
      <section className="relative overflow-hidden border-b border-emerald-100">
        <div className="absolute inset-0"><Image src="/images/gis_hero_map.jpg" alt="" fill priority className="object-cover opacity-25"/><div className="absolute inset-0 bg-[linear-gradient(90deg,#fff_0%,rgba(255,255,255,.95)_42%,rgba(236,255,249,.3)_100%)]"/></div>
        <div className="relative mx-auto grid max-w-[1440px] gap-8 px-6 py-12 md:px-10 lg:grid-cols-[.72fr_1.28fr] lg:px-14 lg:py-10">
          <div className="flex flex-col justify-center">
            <p className="mb-3 text-xs font-extrabold tracking-[.08em] text-[#07966d]">INDUSTRY SOLUTIONS</p>
            <h1 className="text-4xl font-bold leading-[1.12] tracking-[-.035em] sm:text-5xl lg:text-[54px]">AI-Powered<br/><span className="text-[#078664]">Real Estate &<br/>Property Intelligence</span></h1>
            <p className="mt-5 max-w-[490px] text-sm leading-6 text-slate-700">Make smarter property decisions using AI, GIS Mapping, satellite imagery, land analytics, and predictive market insights.</p>
            <div className="mt-6 flex flex-wrap gap-3"><Link href="/contact" className="inline-flex items-center gap-2 rounded-md bg-[#049b67] px-5 py-3 text-xs font-bold text-white">Book Free Consultation <ArrowRight size={14}/></Link></div>
            <div className="industry-hero-icon-strip mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4" style={{ position: "absolute", bottom: 0, left: "50%", zIndex: 20, width: "min(1200px, calc(100% - 3rem))", minHeight: 78, margin: 0, transform: "translateX(-50%)" }}>{[[Bot,"AI Intelligence"],[MapPin,"GIS Mapping"],[Layers3,"Land Analytics"],[TrendingUp,"Market Insights"]].map(([Icon,label])=><div key={label} className="flex items-center gap-2 text-[9px] font-semibold"><Icon size={20} className="text-[#069c70]"/>{label}</div>)}</div>
          </div>
          <div className="relative min-h-[400px] overflow-hidden rounded-2xl shadow-2xl"><Image src="/images/gis_hero_map.jpg" alt="AI-powered city property intelligence" fill className="object-cover"/><div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,64,59,.05),rgba(4,32,41,.3))]"/></div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-4 md:px-10 lg:px-8"><div className="rounded-lg border border-emerald-100 bg-white px-5 py-5 shadow-sm"><p className="text-center text-[10px] font-bold uppercase tracking-wide">Trusted by Leading Real Estate Companies</p><TrustedOrganizationsMarquee organizations={["CBRE","JLL","Knight Frank","CUSHMAN & WAKEFIELD","DLF"]}/></div></section>

      <section className="mx-auto grid max-w-[1440px] gap-4 px-6 py-4 md:px-10 lg:grid-cols-[.9fr_1.1fr] lg:px-8"><div className="relative min-h-72 overflow-hidden rounded-xl"><Image src="/images/gis_hero_map.jpg" alt="GIS land parcel analysis" fill className="object-cover"/></div><div><h2 className="mb-4 text-center text-sm font-bold uppercase">Industry Challenges</h2><div className="grid grid-cols-2 gap-3 sm:grid-cols-3">{challenges.map(([Icon,label])=><div key={label} className="flex min-h-24 items-center gap-3 rounded-lg border border-emerald-100 bg-white p-4 text-[10px] font-bold shadow-sm"><Icon size={25} className="shrink-0 text-[#079a6e]"/>{label}</div>)}</div></div></section>

      <section className="mx-auto max-w-[1440px] px-6 py-5 md:px-10 lg:px-8"><h2 className="mb-5 text-center text-sm font-bold uppercase">Our AI-Powered Solutions</h2><div className="grid gap-4 lg:grid-cols-3">{[[Map,"GIS Mapping","/images/gis_hero_map.jpg",["Interactive Maps","Parcel Mapping","Heat Maps","Utility Layers","Zoning Analysis"]],[Building2,"Property Intelligence","/images/industries/Real Estate.jpg",["Property Valuation","Market Trends","Price Prediction","Investment Score","Buyer Analytics"]],[TrendingUp,"Land Analytics","/images/agriculture/satellite-analytics.png",["Land Classification","Change Detection","Soil Analysis","Flood Risk","Environmental Analysis"]]].map(([Icon,title,image,items])=><article key={title} className="grid min-h-64 grid-cols-[.82fr_1.18fr] gap-3 rounded-xl border border-emerald-100 bg-white p-4 shadow-sm"><div><h3 className="flex items-center gap-2 text-xs font-bold text-[#077c5d]"><Icon size={19}/>{title}</h3><ul className="mt-4 space-y-3 text-[9px] text-slate-600">{items.map(x=><li key={x} className="flex gap-2"><CheckCircle2 size={12} className="text-[#08a878]"/>{x}</li>)}</ul></div><div className="relative overflow-hidden rounded-lg"><Image src={image} alt={title} fill className="object-cover"/></div></article>)}</div></section>

      <section className="mx-auto grid max-w-[1440px] gap-4 px-6 py-5 md:px-10 lg:grid-cols-[.32fr_.68fr] lg:px-8"><div className="rounded-xl border border-emerald-100 bg-white p-5"><h2 className="text-xs font-bold uppercase">AI Features</h2><div className="mt-4 space-y-3">{[[BarChart3,"AI Price Prediction"],[Radar,"Computer Vision"],[Satellite,"Satellite Analysis"],[Map,"GIS Intelligence"],[TrendingUp,"Predictive Analytics"],[ShieldCheck,"Risk Alerts"]].map(([Icon,label])=><div key={label} className="flex items-center gap-3 text-[10px] font-semibold"><span className="grid h-7 w-7 place-items-center rounded bg-emerald-50 text-[#079b70]"><Icon size={16}/></span>{label}</div>)}</div></div><div><h2 className="mb-3 text-center text-xs font-bold uppercase">Interactive GIS & Property Dashboard</h2><MapPanel className="min-h-[340px]"/></div></section>

      <section className="mx-auto grid max-w-[1440px] gap-5 px-6 py-5 md:px-10 lg:px-8"><div className="rounded-xl border border-emerald-100 bg-white p-5"><h2 className="text-center text-xs font-bold uppercase">Technology Stack</h2><TechStackMarquee technologies={["OpenAI","Google Maps","Mapbox","ArcGIS","Cesium","PostGIS","AWS","Azure","Python","TensorFlow","Docker","PostgreSQL"]}/></div><div className="rounded-xl border border-emerald-100 bg-white p-5"><h2 className="text-center text-xs font-bold uppercase">Our Workflow</h2><div className="mt-6 grid grid-cols-3 gap-5 sm:grid-cols-6">{workflow.map(([Icon,label],i)=><div key={label} className="relative text-center">{i<5&&<ArrowRight className="absolute -right-3 top-5 hidden text-emerald-500 sm:block" size={14}/>}<span className="mx-auto grid h-11 w-11 place-items-center rounded-full bg-emerald-50 text-[#079b70]"><Icon size={22}/></span><p className="mt-2 text-[8px] font-bold">{label}</p></div>)}</div></div></section>

      <section className="mx-auto max-w-[1440px] px-6 py-8 md:px-10 lg:px-8"><h2 className="mb-4 text-center text-xs font-bold uppercase">Industries We Support</h2><UseCasesMarquee useCases={realEstateUseCases} label="Real estate use cases"/></section>

      <section className="mx-auto max-w-[1440px] px-6 pb-4 pt-5 md:px-10 lg:px-8"><div className="relative min-h-64 overflow-hidden rounded-xl bg-[#063643] p-7 text-white"><Image src="/images/gis_hero_map.jpg" alt="" fill className="object-cover opacity-35"/><div className="relative max-w-sm"><h2 className="text-2xl font-bold">Ready to Transform<br/>Real Estate with AI?</h2><p className="mt-3 text-[10px] leading-5 text-white/80">Leverage AI, GIS, and advanced analytics to make smarter property decisions, reduce risk, and maximize your real estate value.</p><div className="mt-5 flex gap-3"><Link href="/contact" className="rounded bg-[#08a66f] px-4 py-2.5 text-[9px] font-bold">Book Free Consultation</Link></div></div></div></section>
    </main>
  );
}
