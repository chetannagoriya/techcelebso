"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { 
  CheckCircle, 
  ArrowRight, 
  Map, 
  Layers, 
  Compass, 
  Activity, 
  Globe, 
  MousePointer,
  Shield,
  Layers3,
  Sparkles,
  Award,
  Database,
  Eye,
  Server,
  Network,
  Cpu,
  Tv,
  Settings,
  FileText,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

// --- Trusted Partner Vector Logos ---
const EsriLogo = () => (
  <span className="flex items-center gap-1.5 text-xs font-black tracking-tight text-[#0B132B] dark:text-white">
    <svg className="w-5 h-5 text-[#8ac33e]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5v-5l-10 5-10-5v5z" />
    </svg>
    esri
  </span>
);

const TrimbleLogo = () => (
  <span className="flex items-center gap-1 text-xs font-black tracking-tight text-slate-800 dark:text-slate-200">
    <svg className="w-4 h-4 text-[#005F9E]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2 22h20L12 2zm0 4l6.5 13H5.5L12 6z" />
    </svg>
    TRIMBLE
  </span>
);

const NasaLogo = () => (
  <span className="flex items-center gap-1 text-xs font-black tracking-tight text-[#E30613]">
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#0066B2" />
      <path d="M4 14l5-9 6 12 5-9" stroke="#E30613" strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="12" r="2" fill="white" />
    </svg>
    NASA
  </span>
);

const UsgsLogo = () => (
  <span className="flex items-center gap-1 text-xs font-black tracking-tight text-[#006400]">
    <span className="bg-[#006400] text-white px-1 py-0.5 rounded-sm text-[8px] font-bold">USGS</span>
    science for a changing world
  </span>
);

const GoogleEarthLogo = () => (
  <span className="flex items-center gap-1 text-xs font-bold text-slate-700 dark:text-slate-300">
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="#4285F4" strokeWidth="2" />
      <path d="M12 2c5.523 0 10 4.477 10 10S17.523 22 12 22" stroke="#34A853" strokeWidth="2" />
      <circle cx="12" cy="12" r="5" fill="#FBBC05" />
    </svg>
    Google Earth
  </span>
);

const SpaceLensLogo = () => (
  <span className="flex items-center gap-1 text-xs font-bold text-amber-600">
    <span className="text-amber-500">✦</span> space lens
  </span>
);

const DigitalGlobeLogo = () => (
  <span className="flex items-center gap-1 text-xs font-black text-[#0089CF]">
    🌐 DigitalGlobe
  </span>
);

const HexagonLogo = () => (
  <span className="flex items-center gap-1 text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider">
    ⬢ HEXAGON
  </span>
);

const MaxarLogo = () => (
  <span className="flex items-center gap-1 text-xs font-black text-amber-500 uppercase tracking-widest">
    MAXAR
  </span>
);

// --- Technology Stack Vector Logos ---
const ArcGISLogo = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
    <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#007AC2" />
    <path d="M2 17L12 22L22 17V12L12 17L2 12V17Z" fill="#005A92" />
    <path d="M2 12L12 17L22 12V7L12 12L2 7V12Z" fill="#007AC2" opacity="0.8" />
  </svg>
);

const QGISLogo = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="#589632" strokeWidth="3" />
    <path d="M16 16L21 21" stroke="#589632" strokeWidth="4" strokeLinecap="round" />
    <path d="M8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16" stroke="#86C156" strokeWidth="2.5" />
  </svg>
);

const EarthEngineLogo = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" fill="#4285F4" opacity="0.1" />
    <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10" stroke="#34A853" strokeWidth="2.5" />
    <circle cx="12" cy="12" r="4" fill="#EA4335" />
  </svg>
);

const ENVILogo = () => (
  <svg className="w-5 h-5 text-[#1A5F7A]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 3H21V7H3V3ZM3 9H17V13H3V9ZM3 15H21V19H3V15Z" />
  </svg>
);

const ErdasLogo = () => (
  <svg className="w-5 h-5 text-[#D80032]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L22 12L12 22L2 12L12 2ZM12 6L6 12L12 18L18 12L12 6Z" />
  </svg>
);

const GlobalMapperLogo = () => (
  <svg className="w-5 h-5 text-[#004B23]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12" />
  </svg>
);

const PostGISLogo = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
    <ellipse cx="12" cy="7" rx="8" ry="3" fill="#336791" opacity="0.3" stroke="#336791" strokeWidth="1.5" />
    <path d="M4 7V13C4 14.5 8 16 12 16" stroke="#336791" strokeWidth="1.5" />
    <path d="M8 6L12 10L16 6" stroke="#22c55e" strokeWidth="2" />
  </svg>
);

const GeoServerLogo = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="9" stroke="#1A80B8" strokeWidth="2" />
    <circle cx="12" cy="12" r="4" fill="#E8A024" />
  </svg>
);

const PythonLogo = () => (
  <svg className="w-5 h-5" viewBox="0 0 128 128" fill="none">
    <defs>
      <linearGradient id="py-gis-a" gradientUnits="userSpaceOnUse" x1="70.252" y1="1237.476" x2="170.659" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"><stop offset="0" stop-color="#5A9FD4"/><stop offset="1" stop-color="#306998"/></linearGradient>
      <linearGradient id="py-gis-b" gradientUnits="userSpaceOnUse" x1="209.474" y1="1098.811" x2="173.62" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"><stop offset="0" stop-color="#FFD43B"/><stop offset="1" stop-color="#FFE873"/></linearGradient>
    </defs>
    <path fill="url(#py-gis-a)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008z" transform="translate(0 10.26)"/>
    <path fill="url(#py-gis-b)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412h-24.66v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268z" transform="translate(0 10.26)"/>
  </svg>
);

const RLangLogo = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
    <ellipse cx="12" cy="12" rx="10" ry="7" stroke="#276BBE" strokeWidth="2.5" />
    <path d="M10 8h3c1.5 0 2 .5 2 1.5s-.5 1.5-2 1.5h-3V8zm0 3h2l3 4" stroke="#276BBE" strokeWidth="2" />
  </svg>
);

const OpenCVLogo = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="6" r="4" stroke="#E33E2B" strokeWidth="2" />
    <circle cx="7" cy="15" r="4" stroke="#22C55E" strokeWidth="2" />
    <circle cx="17" cy="15" r="4" stroke="#007AC2" strokeWidth="2" />
  </svg>
);

const TensorFlowLogo = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
    <path d="M12 2L20 6.5V15.5L12 20L4 15.5V6.5L12 2Z" stroke="#FF6F00" strokeWidth="2" />
  </svg>
);

const AWSLogo = () => (
  <svg className="w-5 h-5 text-[#FF9900]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.76 10.03c0 .3.03.54.09.71.06.18.14.37.26.58.04.06.06.13.06.18 0 .08-.05.16-.15.24l-.5.34a.38.38 0 0 1-.21.07c-.08 0-.16-.04-.24-.11-.08-.07-.18-.2-.29-.38a6.18 6.18 0 0 1-.25-.47c-.62.73-1.4 1.1-2.35 1.1-.67 0-1.2-.2-1.6-.57-.4-.38-.6-.9-.6-1.53 0-.68.24-1.23.73-1.64.49-.42 1.13-.63 1.96-.63.27 0 .55.03.85.07.3.04.6.1.92.18v-.58c0-.6-.13-1.03-.38-1.28-.25-.25-.68-.37-1.3-.37-.28 0-.57.03-.86.1-.3.07-.58.16-.86.27-.08.03-.18.07-.28.1a.49.49 0 0 1-.13.03c-.11 0-.17-.08-.17-.25v-.39c0-.13.02-.22.06-.28a.6.6 0 0 1 .22-.17c.28-.14.61-.26 1-.36a4.84 4.84 0 0 1 1.25-.15c.95 0 1.64.22 2.09.65.44.43.66 1.08.66 1.96v2.58zm-3.24 1.22c.26 0 .53-.05.82-.15.29-.1.54-.27.76-.51.13-.15.22-.32.27-.51.05-.19.08-.42.08-.69v-.34c-.23-.05-.48-.09-.73-.13a6.02 6.02 0 0 0-.75-.05c-.54 0-.93.1-1.19.32-.26.22-.39.52-.39.92 0 .37.1.65.3.84.19.2.47.3.84.3z" />
  </svg>
);

const AzureLogo = () => (
  <svg className="w-5 h-5" viewBox="0 0 128 128" fill="none">
    <defs>
      <linearGradient id="az-gis-x" x1="60.919" y1="9.602" x2="18.667" y2="134.423" gradientUnits="userSpaceOnUse"><stop stop-color="#114A8B"/><stop offset="1" stop-color="#0669BC"/></linearGradient>
      <linearGradient id="az-gis-y" x1="74.117" y1="67.772" x2="64.344" y2="71.076" gradientUnits="userSpaceOnUse"><stop stop-opacity=".3"/><stop offset=".071" stop-opacity=".2"/><stop offset=".321" stop-opacity=".1"/><stop offset=".623" stop-opacity=".05"/><stop offset="1" stop-opacity="0"/></linearGradient>
      <linearGradient id="az-gis-z" x1="68.742" y1="5.961" x2="115.122" y2="129.525" gradientUnits="userSpaceOnUse"><stop stop-color="#3CCBF4"/><stop offset="1" stop-color="#2892DF"/></linearGradient>
    </defs>
    <path d="M46.09.002h40.685L44.541 125.137a6.485 6.485 0 01-6.146 4.413H6.733a6.482 6.482 0 01-5.262-2.699 6.474 6.474 0 01-.876-5.848L39.944 4.414A6.488 6.488 0 0146.09 0z" fill="url(#az-gis-x)" transform="translate(.587 4.468) scale(.91904)"/>
    <path d="M97.28 81.607H37.987a2.743 2.743 0 00-1.874 4.751l38.1 35.562a5.991 5.991 0 004.087 1.61h33.574z" fill="#0078d4"/>
    <path d="M46.09.002A6.434 6.434 0 0039.93 4.5L.644 120.897a6.469 6.469 0 006.106 8.653h32.48a6.942 6.942 0 005.328-4.531l7.834-23.089 27.985 26.101a6.618 6.618 0 004.165 1.519h36.396l-15.963-45.616-46.533.011L86.922.002z" fill="url(#az-gis-y)" transform="translate(.587 4.468) scale(.91904)"/>
    <path d="M98.055 4.408A6.476 6.476 0 0091.917.002H46.575a6.478 6.478 0 016.137 4.406l39.35 116.594a6.476 6.476 0 01-6.137 8.55h45.344a6.48 6.48 0 006.136-8.55z" fill="url(#az-gis-z)" transform="translate(.587 4.468) scale(.91904)"/>
  </svg>
);

const trustedGisLogos = [
  ["1spatial-transparent.png", "1Spatial"],
  ["caliper-maptitude-transparent.png", "Caliper Maptitude"],
  ["cyclomedia-transparent.png", "Cyclomedia"],
  ["genesys-international-transparent.png", "Genesys International"],
  ["supermap-transparent.png", "SuperMap"],
  ["woolpert-transparent.png", "Woolpert"],
  ["blacksky-transparent.png", "BlackSky"],
  ["blue-marble-geographics-transparent.png", "Blue Marble Geographics"],
  ["cyient-transparent.png", "Cyient"],
  ["hexagon-transparent.png", "Hexagon"],
  ["magnasoft-transparent.png", "Magnasoft"],
  ["maxar-intelligence-transparent.png", "Maxar Intelligence"],
  ["nearmap-transparent.png", "Nearmap"],
  ["nv5-transparent.png", "NV5"],
  ["precisely-transparent.png", "Precisely"],
  ["rmsi-transparent.png", "RMSI"],
  ["safe-software-transparent.png", "Safe Software"],
  ["vexcel-imaging-transparent.png", "Vexcel Imaging"],
];

export default function GISGeospatialPage() {
  const [sliderPos, setSliderPos] = useState(50);
  const [selectedCoreService, setSelectedCoreService] = useState(null);
  const industriesCarouselRef = useRef(null);

  const scrollIndustries = (direction) => {
    const carousel = industriesCarouselRef.current;
    if (!carousel) return;
    carousel.scrollBy({
      left: direction * Math.max(280, carousel.clientWidth * 0.78),
      behavior: "smooth",
    });
  };

  const coreServices = [
    {
      title: "GIS & Mapping",
      image: "/images/gis-core-services/gis-mapping.webp",
      description: "High-accuracy maps and spatial databases for better decision-making and planning.",
      detail: "We create dependable digital maps and location databases that bring field, infrastructure, terrain, and asset information into one clear operational view. The result is easier planning, faster collaboration, and confident location-based decisions.",
      bullets: [
        "2D & 3D Mapping",
        "Topographic Mapping",
        "Cadastral Mapping",
        "Utility Mapping",
        "Web GIS Development"
      ],
      icon: Map,
      visual: () => (
        <div className="relative w-full h-36 bg-slate-950 rounded-sm flex flex-col justify-between overflow-hidden border border-[#E2E8F0] dark:border-[#2D3A54] p-3 shadow-inner">
          <div className="flex flex-col gap-1.5 w-full relative z-10">
            <div className="h-4 bg-[#00F5D4]/40 rounded-sm skew-x-12 w-full flex items-center px-2 text-[8px] font-bold text-white">Layer 3: Infrastructure Vectors</div>
            <div className="h-4 bg-[#00F5D4]/30 rounded-sm skew-x-12 w-11/12 flex items-center px-2 text-[8px] font-bold text-white">Layer 2: Hydrology Raster</div>
            <div className="h-4 bg-slate-700/40 rounded-sm skew-x-12 w-10/12 flex items-center px-2 text-[8px] font-bold text-white">Layer 1: Digital Elevation model</div>
          </div>
          <div className="border-t border-slate-800 pt-2 flex justify-between text-[7px] text-slate-400">
            <span>Projection: EPSG:4326</span>
            <span>Scale: 1:25,000</span>
          </div>
        </div>
      )
    },
    {
      title: "Geospatial Intelligence",
      image: "/images/gis-core-services/geospatial-intelligence.webp",
      description: "Extract meaningful insights from geospatial data to understand patterns, risks, and opportunities.",
      detail: "Our geospatial intelligence solutions combine location data, business information, and AI-assisted analysis to reveal relationships that are difficult to see in traditional reports. Teams can monitor change, identify risk, and prioritize opportunities through actionable spatial insight.",
      bullets: [
        "Location Intelligence",
        "Spatial Data Analysis",
        "Geospatial Dashboards",
        "AI & ML Integration",
        "Decision Support Systems"
      ],
      icon: Compass,
      visual: () => (
        <div className="relative w-full h-36 bg-slate-950 rounded-sm flex items-center justify-center overflow-hidden border border-[#E2E8F0] dark:border-[#2D3A54] shadow-inner">
          <div className="absolute w-24 h-24 rounded-full border border-dashed border-[#00F5D4]/30 animate-spin" style={{ animationDuration: "12s" }}></div>
          <div className="absolute w-16 h-16 rounded-full border border-dashed border-[#00F5D4]/20 animate-spin" style={{ animationDuration: "6s", animationDirection: "reverse" }}></div>
          
          {/* Constellation Network */}
          <svg className="absolute inset-0 w-full h-full opacity-60" viewBox="0 0 100 80">
            <line x1="20" y1="20" x2="50" y2="40" stroke="#00F5D4" strokeWidth="0.5" />
            <line x1="50" y1="40" x2="80" y2="20" stroke="#00F5D4" strokeWidth="0.5" />
            <line x1="50" y1="40" x2="50" y2="70" stroke="#00F5D4" strokeWidth="0.5" />
            <circle cx="20" cy="20" r="1.5" fill="#00F5D4" />
            <circle cx="80" cy="20" r="1.5" fill="#00F5D4" />
            <circle cx="50" cy="40" r="2.5" fill="#00F5D4" className="animate-pulse" />
            <circle cx="50" cy="70" r="1.5" fill="#00F5D4" />
          </svg>
          <span className="absolute bottom-2 right-2 text-[7px] text-slate-500 font-mono">Cluster: 98% Density</span>
        </div>
      )
    },
    {
      title: "Remote Sensing",
      image: "/images/gis-core-services/remote-sensing.webp",
      description: "Collect, process, and analyze satellite and aerial imagery for real-world applications.",
      detail: "We transform satellite, drone, and aerial imagery into usable information for monitoring land, infrastructure, agriculture, natural resources, and environmental change. Our workflows support repeatable analysis across large and hard-to-access areas.",
      bullets: [
        "Satellite Imagery Analysis",
        "Land Use / Land Cover",
        "Change Detection",
        "Environmental Monitoring",
        "Disaster Assessment"
      ],
      icon: Globe,
      visual: () => (
        <div className="relative w-full h-36 bg-slate-950 rounded-sm flex items-center justify-center overflow-hidden border border-[#E2E8F0] dark:border-[#2D3A54] shadow-inner">
          <div className="absolute bottom-[-30px] w-28 h-28 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full border border-dashed border-slate-700"></div>
          </div>
          <div className="absolute top-4 flex flex-col items-center">
            <svg className="w-8 h-8 text-[#00F5D4] animate-bounce" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M2 10h20M12 2v20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10" />
            </svg>
            <div className="w-0.5 h-12 bg-gradient-to-b from-[#00F5D4] to-transparent mt-1 animate-pulse"></div>
          </div>
        </div>
      )
    },
    {
      title: "Spatial Analytics",
      image: "/images/gis-core-services/spatial-analytics.webp",
      description: "Advanced spatial analysis to solve complex problems and optimize resources.",
      detail: "Spatial analytics helps organizations understand where events happen, why patterns emerge, and what action should come next. We build models for accessibility, suitability, networks, hotspots, visibility, and resource allocation around real operational questions.",
      bullets: [
        "Spatial Modeling",
        "Network Analysis",
        "Hotspot Analysis",
        "Visibility Analysis",
        "Suitability Analysis"
      ],
      icon: Activity,
      visual: () => (
        <div className="relative w-full h-36 bg-slate-950 rounded-sm flex items-center justify-center overflow-hidden border border-[#E2E8F0] dark:border-[#2D3A54] p-4 shadow-inner">
          <div className="flex items-end justify-between w-full h-full max-w-[150px] gap-2">
            <div className="w-4 bg-slate-800 rounded-t-sm" style={{ height: "45%" }}></div>
            <div className="w-4 bg-[#00F5D4]/70 rounded-t-sm" style={{ height: "70%" }}></div>
            <div className="w-4 bg-[#00F5D4] rounded-t-sm" style={{ height: "90%" }}></div>
            <div className="w-4 bg-[#00F5D4] rounded-t-sm" style={{ height: "55%" }}></div>
            <div className="w-4 bg-slate-700 rounded-t-sm" style={{ height: "30%" }}></div>
          </div>
        </div>
      )
    }
  ];

  const industries = [
    { 
      name: "Urban Planning", 
      desc: "Smart city planning and development.", 
      image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&q=80" 
    },
    { 
      name: "Natural Resource Management", 
      desc: "Forestry, water, land & biodiversity mapping.", 
      image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=400&q=80" 
    },
    { 
      name: "Agriculture", 
      desc: "Precision farming & crop monitoring.", 
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&q=80" 
    },
    { 
      name: "Environment", 
      desc: "Environmental impact & conservation.", 
      image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=400&q=80" 
    },
    { 
      name: "Disaster Management", 
      desc: "Flood, fire & hazard monitoring.", 
      image: "/images/gis-industries/disaster-management.webp"
    },
    { 
      name: "Infrastructure", 
      desc: "Roads, utilities & asset mapping.", 
      image: "/images/gis-industries/infrastructure.webp"
    },
    { 
      name: "Mining & Energy", 
      desc: "Exploration & resource assessment.", 
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&q=80" 
    },
    { 
      name: "Defense & Security", 
      desc: "Surveillance & border monitoring.", 
      image: "/images/gis-industries/defense-security.webp"
    }
  ];

  return (
    <main className="gis-geospatial-page min-h-screen bg-white font-[family-name:var(--font-sans)] transition-colors duration-300">
      
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-[#0A1128] pb-12 pt-10 md:pb-16 md:pt-14">
        <div className="absolute inset-0">
          <img
            src="/images/geospatial-solutions-bg.png"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#050817]/45"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#050817]/90 via-[#050817]/55 to-[#050817]/15"></div>
        </div>
        
        <div className="max-w-[1240px] mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 items-center">
            
            {/* Left Column: Context Text */}
            <div className="flex max-w-3xl flex-col gap-6">
              <div>
                <span className="text-[#00F5D4] text-xs font-bold uppercase tracking-widest block mb-3">
                  Geospatial Solutions
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.08] tracking-tight font-[family-name:var(--font-heading)]">
                  GIS & Mapping <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F5D4] via-[#00F5D4] to-[#00F5D4]">
                    Geospatial Intelligence
                  </span>
                </h1>
              </div>
              <p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl font-light">
                Transform location data into actionable intelligence with GIS, Remote Sensing, Spatial Analytics, and AI-powered geospatial solutions.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-2">
                <Link href="/contact" className="px-6 py-3.5 bg-[#00F5D4] hover:bg-[#00F5D4]/90 text-[#0B132B] text-sm font-bold rounded-sm shadow-lg shadow-[#00F5D4]/20 transition-all hover:-translate-y-0.5">
                  Book Free Consultation
                </Link>
              </div>

              {/* Grid Features */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-4 pt-6 mt-4 border-t border-slate-800">
                {[
                  { title: "Accurate Data", desc: "Sub-meter precision imagery" },
                  { title: "Advanced Analytics", desc: "Topographic & network models" },
                  { title: "AI Powered Insights", desc: "Automated segment extraction" },
                  { title: "Real World Impact", desc: "Smart decisions on field" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle size={16} className="text-[#00F5D4] shrink-0" />
                    <div>
                      <h4 className="text-xs font-bold text-white">{item.title}</h4>
                      <p className="text-[10px] text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>



          </div>
        </div>
      </section>

      {/* 2. Trusted By Section */}
      <section className="overflow-hidden bg-white py-10 border-b border-[#E2E8F0] transition-colors duration-300">
        <div className="mx-auto max-w-[1240px] px-8">
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="h-[1px] bg-slate-300 flex-1"></span>
            <span className="text-[#0B132B] text-xs font-extrabold uppercase tracking-widest text-center shrink-0">
              Trusted by Governments, Enterprises & Research Institutions
            </span>
            <span className="h-[1px] bg-slate-300 flex-1"></span>
          </div>
        </div>
        <div className="gis-logo-marquee" aria-label="Trusted GIS companies">
          <div className="gis-logo-marquee-track">
            {[...trustedGisLogos, ...trustedGisLogos].map(([src, name], index) => (
              <div className="gis-logo-marquee-item" key={`${name}-${index}`} aria-hidden={index >= trustedGisLogos.length}>
                <img src={`/images/gis-company-logos/${src}`} alt={index < trustedGisLogos.length ? `${name} logo` : ""} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Core Services Section */}
      <section className="py-16 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-[1240px] mx-auto px-8">
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className="h-[1px] bg-slate-300 flex-1"></span>
            <h2 className="text-[#0B132B] text-xl md:text-2xl font-black uppercase tracking-wider shrink-0 font-[family-name:var(--font-heading)]">
              Our Core Geospatial Services
            </h2>
            <span className="h-[1px] bg-slate-300 flex-1"></span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <article key={idx} className="group flex h-full flex-col overflow-hidden rounded-xl border border-[#E2E8F0] bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-[#00F5D4]/60 hover:shadow-[0_20px_45px_rgba(11,19,43,0.14)] dark:border-[#2D3A54] dark:bg-[#111D36] dark:hover:shadow-[0_20px_45px_rgba(0,0,0,0.3)]">
                  <div className="relative h-44 overflow-hidden bg-[#071127]">
                    <img
                      src={service.image}
                      alt={`${service.title} visualization`}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071127]/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 bg-[#071127]/75 text-[#00F5D4] shadow-lg backdrop-blur-md">
                      <Icon size={21} />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="mb-2 text-lg font-extrabold text-[#0B132B] dark:text-white">{service.title}</h3>
                    <p className="mb-5 text-xs leading-relaxed text-[#0B132B]/60 dark:text-white/60">{service.description}</p>
                    <ul className="mb-6 space-y-2">
                      {service.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-center gap-2.5 text-xs font-medium text-[#0B132B]/80 dark:text-white/75">
                          <CheckCircle size={14} className="shrink-0 text-[#00F5D4]" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                    <button
                      type="button"
                      onClick={() => setSelectedCoreService(selectedCoreService === idx ? null : idx)}
                      aria-expanded={selectedCoreService === idx}
                      className="mt-auto inline-flex cursor-pointer items-center gap-1.5 border-t border-[#E2E8F0] pt-4 text-left text-xs font-bold text-[#00A98F] transition-all group-hover:gap-2 dark:border-[#2D3A54] dark:text-[#00F5D4]"
                    >
                      Learn More <ArrowRight size={14} />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>

          {selectedCoreService !== null && (() => {
            const service = coreServices[selectedCoreService];
            const DetailIcon = service.icon;
            return (
              <div className="mt-8 rounded-xl border border-[#00F5D4]/30 bg-white p-6 shadow-[0_18px_45px_rgba(11,19,43,0.1)] dark:bg-[#111D36] dark:shadow-[0_18px_45px_rgba(0,0,0,0.28)] md:p-8">
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                  <div className="flex max-w-4xl gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#00F5D4]/15 text-[#00A98F] dark:text-[#00F5D4]">
                      <DetailIcon size={22} />
                    </div>
                    <div>
                      <p className="mb-1 text-xs font-black uppercase tracking-widest text-[#00A98F] dark:text-[#00F5D4]">Service Details</p>
                      <h3 className="mb-3 text-2xl font-black text-[#0B132B] dark:text-white">{service.title}</h3>
                      <p className="text-sm leading-7 text-[#0B132B]/65 dark:text-white/65">{service.detail}</p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {service.bullets.map((bullet) => (
                          <span key={bullet} className="rounded-full border border-[#E2E8F0] bg-[#F8FAFC] px-3 py-1.5 text-xs font-semibold text-[#0B132B]/80 dark:border-[#2D3A54] dark:bg-[#0B132B] dark:text-white/75">
                            {bullet}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedCoreService(null)}
                    className="shrink-0 cursor-pointer rounded-sm border border-[#E2E8F0] px-4 py-2 text-xs font-bold text-[#0B132B] transition-colors hover:border-[#00F5D4] dark:border-[#2D3A54] dark:text-white"
                  >
                    Close
                  </button>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* 4. Split Dashboard & Image Slider Section */}
      <section className="py-16 bg-[#F1F5F9] border-b border-[#E2E8F0]">
        <div className="max-w-[1240px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left: Geospatial Analytics Dashboard Mockup (Col-span 7) */}
            <div className="lg:col-span-7 bg-[#0F172A] border border-slate-800 rounded-sm shadow-2xl p-6 flex flex-col justify-between text-white relative overflow-hidden">
              <div className="absolute top-0 left-0 w-48 h-48 bg-[#00F5D4]/5 rounded-full blur-2xl pointer-events-none"></div>
              
              <div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                  <div>
                    <h3 className="text-sm font-black tracking-wide">Geospatial Analytics Dashboard</h3>
                    <p className="text-[10px] text-slate-400">Integrated multi-source mapping application</p>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-3 py-1 rounded-sm text-xs text-slate-300">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    Operational
                  </div>
                </div>

                <div className="grid grid-cols-12 gap-4">
                  {/* Left Controls List */}
                  <div className="col-span-3 border-r border-slate-800/80 pr-2 space-y-2">
                    <span className="text-[9px] font-bold text-slate-500 block uppercase">Filters</span>
                    {["Overview", "Layers", "Analysis", "Imagery", "Projects", "Reports", "Settings"].map((opt, i) => (
                      <button key={i} className={`w-full text-left text-[10px] px-2 py-1 rounded-sm block ${i === 0 ? "bg-[#00F5D4] text-[#0B132B] font-bold" : "text-slate-400 hover:text-white"}`}>
                        {opt}
                      </button>
                    ))}
                  </div>

                  {/* Center Map Graphics */}
                  <div className="col-span-9 space-y-4">
                    <div className="h-44 bg-slate-950 border border-slate-800/60 rounded-sm relative overflow-hidden flex items-center justify-center">
                      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#3a86ff_1px,transparent_1px)] [background-size:16px_16px]"></div>
                      {/* Abstract Vector Map shapes */}
                      <svg className="w-full h-full opacity-80" viewBox="0 0 300 150">
                        <path d="M20 20 C80 60, 150 10, 280 90 L280 150 L20 150 Z" fill="rgba(0, 245, 212, 0.05)" stroke="#00F5D4" strokeWidth="1" />
                        <path d="M100 80 Q130 50, 180 100 T260 70" fill="none" stroke="#00F5D4" strokeWidth="1.5" strokeDasharray="4 3" />
                        {/* Heat clusters */}
                        <circle cx="120" cy="70" r="15" fill="rgba(239, 68, 68, 0.15)" />
                        <circle cx="120" cy="70" r="8" fill="rgba(239, 68, 68, 0.3)" />
                        <circle cx="120" cy="70" r="3" fill="#ef4444" />
                        
                        <circle cx="200" cy="90" r="20" fill="rgba(0, 245, 212, 0.12)" />
                        <circle cx="200" cy="90" r="10" fill="rgba(0, 245, 212, 0.25)" />
                        <circle cx="200" cy="90" r="3" fill="#00F5D4" />
                      </svg>
                      
                      <div className="absolute top-2 right-2 bg-slate-900/90 border border-slate-700/80 px-2 py-0.5 rounded-sm text-[9px] text-slate-300">
                        Overlay: Heatmap Analytics
                      </div>
                    </div>
                    
                    {/* Charts Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      {/* Donut Data Sources */}
                      <div className="bg-slate-950 border border-slate-800 p-2.5 rounded-sm flex items-center justify-between gap-2">
                        <div className="w-10 h-10 rounded-full border-4 border-slate-800 flex items-center justify-center" style={{ borderTopColor: "#00F5D4", borderRightColor: "#00F5D4" }}>
                          <span className="text-[7.5px] font-bold">SRC</span>
                        </div>
                        <div className="text-[8px] text-slate-400 space-y-0.5 flex-1">
                          <div className="flex justify-between"><span>Satellite</span><span className="text-white font-bold">45%</span></div>
                          <div className="flex justify-between"><span>Aerial</span><span className="text-white font-bold">30%</span></div>
                          <div className="flex justify-between"><span>Survey</span><span className="text-white font-bold">15%</span></div>
                        </div>
                      </div>
                      
                      {/* Monthly Analysis Line */}
                      <div className="bg-slate-950 border border-slate-800 p-2.5 rounded-sm flex flex-col justify-between">
                        <span className="text-[8px] text-slate-400 font-bold uppercase block">Monthly Analysis</span>
                        <svg className="w-full h-8 overflow-visible mt-1" viewBox="0 0 100 30">
                          <path d="M0 25 Q15 5, 30 18 T60 8 T90 20" fill="none" stroke="#00F5D4" strokeWidth="2" strokeLinecap="round" />
                          <path d="M0 25 Q15 5, 30 18 T60 8 T90 20 L90 30 L0 30 Z" fill="rgba(0, 245, 212, 0.05)" />
                          <circle cx="60" cy="8" r="2.5" fill="#00F5D4" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Extra KPIs Row at bottom */}
              <div className="grid grid-cols-4 gap-4 mt-4 pt-4 border-t border-slate-800/80">
                {[
                  { title: "Projects", val: "36" },
                  { title: "Datasets", val: "245" },
                  { title: "Area Processed", val: "25,780 km²" },
                  { title: "Accuracy", val: "98.7%" }
                ].map((item, i) => (
                  <div key={i} className="text-left">
                    <p className="text-[9px] text-slate-400 uppercase font-bold">{item.title}</p>
                    <h4 className="text-xs font-black mt-0.5">{item.val}</h4>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: High Resolution Imagery Before/After Slider (Col-span 5) */}
            <div className="lg:col-span-5 bg-white border border-[#E2E8F0] rounded-sm p-6 flex flex-col justify-between hover:shadow-lg transition-all duration-300">
              <div>
                <span className="text-[#00F5D4] text-xs font-bold uppercase tracking-wider block mb-1">Image Analysis</span>
                <h3 className="text-lg font-black text-[#0B132B] mb-2">High Resolution Imagery</h3>
                <p className="text-xs text-[#0B132B]/60 leading-relaxed mb-6">
                  Slide to compare satellite imagery captured at different dates (Before / After) to track changes in land cover, coastal erosion, or infrastructure development.
                </p>
              </div>

              {/* Slider Visual Container */}
              <div className="relative w-full aspect-[4/3] rounded-sm border border-[#E2E8F0] overflow-hidden select-none bg-slate-200">
                
                {/* BEFORE Image (Underlay - Natural Shoreline) */}
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-[#0F172A]/10 z-10 pointer-events-none"></div>
                  <div className="absolute top-3 left-3 bg-[#0B132B]/85 text-white font-bold text-[9px] px-2.5 py-0.5 rounded-sm z-20 shadow-sm">
                    Before
                  </div>
                  <img 
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80" 
                    alt="Shoreline Before Development"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* AFTER Image (Overlay - Developed Port Area) */}
                <div 
                  className="absolute inset-0 z-10 overflow-hidden"
                  style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
                >
                  <div className="absolute inset-0 bg-[#0F172A]/15 pointer-events-none"></div>
                  <div className="absolute top-3 right-3 bg-[#00F5D4] text-[#0B132B] font-bold text-[9px] px-2.5 py-0.5 rounded-sm z-20 shadow-sm">
                    After
                  </div>
                  <img 
                    src="https://images.unsplash.com/photo-1548345680-f5475ea5df84?w=800&q=80" 
                    alt="Shoreline After Development"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Split Handle Bar */}
                <div 
                  className="absolute top-0 bottom-0 w-0.5 bg-white z-20 pointer-events-none"
                  style={{ left: `${sliderPos}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-white text-[#0B132B] shadow-lg flex items-center justify-center border border-slate-200 text-[10px] font-black cursor-ew-resize">
                    ↔
                  </div>
                </div>

                {/* React Native Drag Controller */}
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={sliderPos}
                  onChange={(e) => setSliderPos(e.target.value)}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30" 
                />
              </div>

              <div className="flex items-center gap-2 mt-4 text-[10px] text-[#0B132B]/50 font-semibold">
                <MousePointer size={14} className="text-[#00F5D4]" />
                Drag the divider above to dynamically wipe satellite history layers.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Industries & Use Cases Section */}
      <section className="py-16 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-[1240px] mx-auto px-8">
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className="h-[1px] bg-slate-300 flex-1"></span>
            <h2 className="text-[#0B132B] text-xl md:text-2xl font-black uppercase tracking-wider shrink-0 font-[family-name:var(--font-heading)]">
              Industries & Use Cases
            </h2>
            <span className="h-[1px] bg-slate-300 flex-1"></span>
          </div>

          <div className="relative">
            <button
              type="button"
              onClick={() => scrollIndustries(-1)}
              aria-label="Previous industries"
              className="absolute -left-5 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-[#E2E8F0] bg-white text-[#0B132B] shadow-lg transition-all hover:border-[#00F5D4] hover:bg-[#00F5D4] disabled:opacity-40 dark:border-[#2D3A54] dark:bg-[#111D36] dark:text-white dark:hover:bg-[#00F5D4] dark:hover:text-[#0B132B]"
            >
              <ChevronLeft size={22} />
            </button>

            <div ref={industriesCarouselRef} className="gis-industries-carousel flex snap-x snap-mandatory gap-6 overflow-x-auto px-1 py-3">
              {industries.map((ind, idx) => (
                <article key={idx} className="group min-w-[82%] snap-start overflow-hidden rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] transition-all duration-300 hover:-translate-y-1 hover:border-[#00F5D4]/60 hover:shadow-[0_16px_35px_rgba(11,19,43,0.12)] dark:border-[#2D3A54] dark:bg-[#111D36] sm:min-w-[46%] lg:min-w-[calc((100%-72px)/4)]">
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-200">
                    <img
                      src={ind.image}
                      alt={ind.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071127]/80 via-[#071127]/10 to-transparent"></div>
                  </div>
                  <div className="p-5">
                    <h3 className="mb-2 text-base font-extrabold leading-tight text-[#0B132B] dark:text-white">{ind.name}</h3>
                    <p className="text-xs leading-relaxed text-[#0B132B]/60 dark:text-white/60">{ind.desc}</p>
                  </div>
                </article>
              ))}
            </div>

            <button
              type="button"
              onClick={() => scrollIndustries(1)}
              aria-label="Next industries"
              className="absolute -right-5 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-[#E2E8F0] bg-white text-[#0B132B] shadow-lg transition-all hover:border-[#00F5D4] hover:bg-[#00F5D4] dark:border-[#2D3A54] dark:bg-[#111D36] dark:text-white dark:hover:bg-[#00F5D4] dark:hover:text-[#0B132B]"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      </section>

      {/* 6. Technology & Workflow Section */}
      <section className="py-16 bg-[#F8FAFC] border-b border-[#E2E8F0] transition-colors duration-300">
        <div className="max-w-[1240px] mx-auto px-8">
          <div className="flex flex-col gap-12">
            
            {/* Tech Stack Grid */}
            <div>
              <div className="mb-12 flex items-center justify-center gap-4">
                <span className="h-[1px] flex-1 bg-slate-300"></span>
                <h2 className="shrink-0 text-center text-xl font-black uppercase tracking-wider text-[#0B132B] font-[family-name:var(--font-heading)] md:text-2xl">
                  Technologies We Use
                </h2>
                <span className="h-[1px] flex-1 bg-slate-300"></span>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {[
                  { name: "ArcGIS", logo: ArcGISLogo },
                  { name: "QGIS", logo: QGISLogo },
                  { name: "Google Earth", logo: EarthEngineLogo },
                  { name: "ENVI", logo: ENVILogo },
                  { name: "ERDAS IMAGINE", logo: ErdasLogo },
                  { name: "Global Mapper", logo: GlobalMapperLogo },
                  { name: "PostGIS", logo: PostGISLogo },
                  { name: "GeoServer", logo: GeoServerLogo },
                  { name: "Python", logo: PythonLogo },
                  { name: "R Language", logo: RLangLogo },
                  { name: "OpenCV", logo: OpenCVLogo },
                  { name: "TensorFlow", logo: TensorFlowLogo },
                  { name: "AWS Cloud", logo: AWSLogo },
                  { name: "Azure", logo: AzureLogo }
                ].map((tech, idx) => {
                  const Logo = tech.logo;
                  return (
                    <div key={idx} className="flex items-center gap-2 bg-[#F8FAFC] border border-[#E2E8F0] px-3 py-2 rounded-sm hover:scale-[1.03] transition-transform duration-200">
                      <Logo />
                      <span className="text-[10px] font-bold text-[#0B132B] truncate">{tech.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Workflow Pipeline */}
            <div>
              <div className="mb-12 flex items-center justify-center gap-4">
                <span className="h-[1px] flex-1 bg-slate-300"></span>
                <h2 className="shrink-0 text-center text-xl font-black uppercase tracking-wider text-[#0B132B] font-[family-name:var(--font-heading)] md:text-2xl">
                  Our Geospatial Workflow
                </h2>
                <span className="h-[1px] flex-1 bg-slate-300"></span>
              </div>

              {/* Horizontal steps on desktop, vertical stack on mobile */}
              <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
                
                {/* Dashed Connecting Line (Desktop) */}
                <div className="absolute top-[28px] left-[5%] right-[5%] h-[1.5px] border-t border-dashed border-[#00F5D4]/40 hidden md:block -z-10"></div>
                
                {[
                  { step: "01", icon: Compass, label: "Data Collection", sub: "Satellite, Aerial, Drone, Survey" },
                  { step: "02", icon: Settings, label: "Data Processing", sub: "Clean, Enhance, Transform" },
                  { step: "03", icon: Eye, label: "Spatial Analysis", sub: "Analyze, Model, Extract Insights" },
                  { step: "04", icon: Tv, label: "Visualization", sub: "Maps, 2D/3D, Dashboards" },
                  { step: "05", icon: FileText, label: "Actionable Insights", sub: "Reports, Alerts & Decision Support" }
                ].map((wf, idx) => {
                  const WfIcon = wf.icon;
                  return (
                    <div key={idx} className="flex flex-col items-center text-center max-w-[130px] relative z-10 flex-1">
                      <div className="w-14 h-14 rounded-full bg-white border border-[#E2E8F0] shadow-sm flex items-center justify-center text-[#00F5D4] hover:border-[#00F5D4] transition-colors duration-300">
                        <WfIcon size={22} />
                      </div>
                      <span className="text-[9px] font-black text-[#00F5D4] mt-3">STEP {wf.step}</span>
                      <h4 className="text-xs font-bold text-[#0B132B] mt-1">{wf.label}</h4>
                      <p className="text-[9px] text-[#0B132B]/50 mt-1 leading-normal">{wf.sub}</p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 9. CTA Banner Section */}
      <section className="py-12 bg-white">
        <div className="max-w-[1240px] mx-auto px-8">
          <div className="relative flex flex-col items-center justify-between gap-8 overflow-hidden rounded-2xl border border-slate-800 bg-[#0A1128] p-8 shadow-2xl md:flex-row md:p-12">
            
            {/* Visual satellite background map */}
            <div className="absolute inset-0 -z-10 opacity-30">
              <img 
                src="/images/gis_cta_satellite.jpg" 
                alt="Satellite in Space background"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute inset-0 bg-[#0F172A]/85 -z-10"></div>
            
            <div className="max-w-2xl text-left">
              <h2 className="text-2xl md:text-3xl font-black text-white leading-tight tracking-tight font-[family-name:var(--font-heading)]">
                Unlock the Power of <br />Location Intelligence
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed mt-4 font-light">
                Leverage GIS, Remote Sensing, and Spatial Analytics to better understand your world, reduce risks, and make smarter decisions.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 shrink-0">
              <Link href="/contact" className="cursor-pointer rounded-lg bg-[#00F5D4] px-6 py-3.5 text-sm font-bold text-[#0B132B] shadow-lg shadow-[#00F5D4]/20 transition-all hover:-translate-y-0.5 hover:bg-[#00F5D4]/90">
                Book Free Consultation
              </Link>
              <Link href="/contact" className="cursor-pointer rounded-lg border border-white bg-white px-6 py-3.5 text-sm font-bold text-[#0B132B] transition-all hover:-translate-y-0.5 hover:border-[#00F5D4] hover:bg-[#00F5D4] dark:border-slate-600 dark:bg-transparent dark:text-white dark:hover:border-white dark:hover:bg-white/5">
                Schedule a Demo
              </Link>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
