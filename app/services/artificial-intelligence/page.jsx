"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Bot, 
  MessageSquare, 
  Settings, 
  Brain, 
  Mic, 
  Heart, 
  Building, 
  Wallet, 
  ShoppingCart, 
  Factory, 
  GraduationCap, 
  Truck, 
  Building2, 
  ArrowRight,
  Shield,
  Activity,
  Users,
  Clock,
  CheckCircle
} from "lucide-react";

// Original Technology SVGs
const OpenAILogo = () => (
  <svg className="w-5 h-5 text-[#00A37F]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/>
  </svg>
);

const GeminiLogo = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="gemini-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#38bdf8" />
        <stop offset="50%" stopColor="#818cf8" />
        <stop offset="100%" stopColor="#ec4899" />
      </linearGradient>
    </defs>
    <path d="M12 2C12 7.5 7.5 12 2 12C7.5 12 12 16.5 12 22C12 16.5 16.5 12 22 12C16.5 12 12 7.5 12 2Z" fill="url(#gemini-grad)" />
  </svg>
);

const ClaudeLogo = () => (
  <svg className="w-5 h-5 text-[#D97754]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.3041 3.541h-3.6718l6.696 16.918H24Zm-10.6082 0L0 20.459h3.7442l1.3693-3.5527h7.0052l1.3693 3.5528h3.7442L10.5363 3.5409Zm-.3712 10.2232 2.2914-5.9456 2.2914 5.9456Z"/>
  </svg>
);

const LangChainLogo = () => (
  <svg className="w-5 h-5 text-[#13ef95]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.0988 5.9175C2.7359 5.9175 0 8.6462 0 12s2.736 6.0825 6.0988 6.0825h11.8024C21.2641 18.0825 24 15.3538 24 12s-2.736-6.0825-6.0988-6.0825ZM5.9774 7.851c.493.0124 1.02.2496 1.273.6228.3673.4592.4778 1.0668.8944 1.4932.5604.6118 1.199 1.1505 1.7161 1.802.4892.5954.8386 1.2937 1.1436 1.9975.1244.2335.1257.5202.31.7197.0908.1204.5346.4483.4383.5645.0555.1204.4702.286.3263.4027-.1944.04-.4129.0476-.5616-.1074-.0549.126-.183.0596-.2819.0432a4 4 0 0 0-.025.0736c-.3288.0219-.5754-.3126-.732-.565-.3111-.168-.6642-.2702-.982-.446-.0182.2895.0452.6485-.231.8353-.014.5565.8436.0656.9222.4804-.061.0067-.1286-.0095-.1774.0373-.2239.2172-.4805-.1645-.7385-.007-.3464.174-.3808.3161-.8096.352-.0237-.0359-.0143-.0592.0059-.0811.1207-.1399.1295-.3046.3356-.3643-.2122-.0334-.3899.0833-.5686.1757-.2323.095-.2304-.2141-.5878.0164-.0396-.0322-.0208-.0615.0018-.0864.0908-.1107.2102-.127.345-.1208-.663-.3686-.9751.4507-1.2813.0432-.092.0243-.1265.1068-.1845.1652-.05-.0548-.0123-.1212-.0099-.1857-.0598-.028-.1356-.041-.1179-.1366-.1171-.0395-.1988.0295-.286.0952-.0787-.0608.0532-.1492.0776-.2125.0702-.1216.23-.025.3111-.1126.2306-.1308.552.0814.8155.0455.203.0255.4544-.1825.3526-.39-.2171-.2767-.179-.6386-.1839-.9695-.0268-.1929-.491-.4382-.6252-.6462-.1659-.1873-.295-.4047-.4243-.6182-.4666-.9008-.3198-2.0584-.9077-2.8947-.266.1466-.6125.0774-.8418-.119-.1238.1125-.1292.2598-.139.4161-.297-.2962-.2593-.8559-.022-1.1855.0969-.1302.2127-.2373.342-.3316.0292-.0213.0391-.0419.0385-.0747.1174-.5267.5764-.7391 1.0694-.7267m12.4071.46c.5575 0 1.0806.2159 1.474.6082s.61.9145.61 1.4704c0 .556-.2167 1.078-.61 1.4698v.0006l-.902.8995a2.08 2.08 0 0 1-.8597.5166l-.0164.0047-.0058.0164a2.05 2.05 0 0 1-.474.7308l-.9018.8995c-.3934.3924-.917.6083-1.4745.6083s-1.0806-.216-1.474-.6083c-.813-.8107-.813-2.1294 0-2.9402l.9019-.8995a2.056 2.056 0 0 1 .858-.5143l.017-.0053.0058-.0158a2.07 2.07 0 0 1 .4752-.7337l.9018-.8995c.3934-.3924.9171-.6083 1.4745-.6083zm0 .8965a1.18 1.18 0 0 0-.8388.3462l-.9018.8995a1.181 1.181 0 0 0-.3427.9252l.0053.0572c.0323.2652.149.5044.3374.6917.13.1296.2733.2114.4471.2686a.9.9 0 0 1 .014.1582.884.884 0 0 1-.2609.6304l-.0554.0554c-.3013-.1028-.5525-.253-.7794-.4792a2.06 2.06 0 0 1-.5761-1.0968l-.0099-.0578-.0461.0368a1.1 1.1 0 0 0-.0876.0794l-.9024.8995c-.4623.461-.4623 1.212 0 1.673.2311.2305.535.346.8394.3461.3043 0 .6077-.1156.8388-.3462l.9019-.8995c.4623-.461.4623-1.2113 0-1.673a1.17 1.17 0 0 0-.4367-.2749 1 1 0 0 1-.014-.1611c0-.2591.1023-.505.2901-.6923.3019.1028.57.2694.7962.495.3007.2999.4994.679.5756 1.0968l.0105.0578.0455-.0373a1.1 1.1 0 0 0 .0887-.0794l.902-.8996c.4622-.461.4628-1.2124 0-1.6735a1.18 1.18 0 0 0-.8395-.3462Zm-9.973 5.1567-.0006.0006c-.0793.3078-.1048.8318-.506.847-.033.1776.1228.2445.2655.1874.141-.0645.2081.0508.2557.1657.2177.0317.5394-.0725.5516-.3298-.325-.1867-.4253-.5418-.5662-.8709"/>
  </svg>
);

const PythonLogo = () => (
  <svg className="w-5 h-5" viewBox="0 0 128 128" fill="none">
    <defs>
      <linearGradient id="python-original-a" gradientUnits="userSpaceOnUse" x1="70.252" y1="1237.476" x2="170.659" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"><stop offset="0" stopColor="#5A9FD4"/><stop offset="1" stopColor="#306998"/></linearGradient>
      <linearGradient id="python-original-b" gradientUnits="userSpaceOnUse" x1="209.474" y1="1098.811" x2="173.62" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"><stop offset="0" stopColor="#FFD43B"/><stop offset="1" stopColor="#FFE873"/></linearGradient>
    </defs>
    <path fill="url(#python-original-a)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z" transform="translate(0 10.26)"/>
    <path fill="url(#python-original-b)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z" transform="translate(0 10.26)"/>
  </svg>
);

const FastAPILogo = () => (
  <svg className="w-5 h-5 text-[#059669]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .0387C5.3729.0384.0003 5.3931 0 11.9988c-.001 6.6066 5.372 11.9628 12 11.9625 6.628.0003 12.001-5.3559 12-11.9625-.0003-6.6057-5.3729-11.9604-12-11.96m-.829 5.4153h7.55l-7.5805 5.3284h5.1828L5.279 18.5436q2.9466-6.5444 5.892-13.0896"/>
  </svg>
);

const PineconeLogo = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
    <path d="M12 2L17 7H7L12 2Z" fill="#22c55e" />
    <path d="M12 6L19 13H5L12 6Z" fill="#16a34a" />
    <path d="M12 11L21 20H3L12 11Z" fill="#15803d" />
    <rect x="11" y="20" width="2" height="3" fill="#166534" />
  </svg>
);

const AWSLogo = () => (
  <svg className="w-5 h-5 text-[#FF9900]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167zM21.698 16.207c-2.626 1.94-6.442 2.969-9.722 2.969-4.598 0-8.74-1.7-11.87-4.526-.247-.223-.024-.527.272-.351 3.384 1.963 7.559 3.153 11.877 3.153 2.914 0 6.114-.607 9.06-1.852.439-.2.814.287.383.607zM22.792 14.961c-.336-.43-2.22-.207-3.074-.103-.255.032-.295-.192-.063-.36 1.5-1.053 3.967-.75 4.254-.399.287.36-.08 2.826-1.485 4.007-.215.184-.423.088-.327-.151.32-.79 1.03-2.57.695-2.994z"/>
  </svg>
);

const AzureLogo = () => (
  <svg className="w-5 h-5" viewBox="0 0 128 128" fill="none">
    <defs>
      <linearGradient id="azure-original-a" x1="60.919" y1="9.602" x2="18.667" y2="134.423" gradientUnits="userSpaceOnUse"><stop stopColor="#114A8B"/><stop offset="1" stopColor="#0669BC"/></linearGradient>
      <linearGradient id="azure-original-b" x1="74.117" y1="67.772" x2="64.344" y2="71.076" gradientUnits="userSpaceOnUse"><stop stopOpacity=".3"/><stop offset=".071" stopOpacity=".2"/><stop offset=".321" stopOpacity=".1"/><stop offset=".623" stopOpacity=".05"/><stop offset="1" stopOpacity="0"/></linearGradient>
      <linearGradient id="azure-original-c" x1="68.742" y1="5.961" x2="115.122" y2="129.525" gradientUnits="userSpaceOnUse"><stop stopColor="#3CCBF4"/><stop offset="1" stopColor="#2892DF"/></linearGradient>
    </defs>
    <path d="M46.09.002h40.685L44.541 125.137a6.485 6.485 0 01-6.146 4.413H6.733a6.482 6.482 0 01-5.262-2.699 6.474 6.474 0 01-.876-5.848L39.944 4.414A6.488 6.488 0 0146.09 0z" fill="url(#azure-original-a)" transform="translate(.587 4.468) scale(.91904)"/>
    <path d="M97.28 81.607H37.987a2.743 2.743 0 00-1.874 4.751l38.1 35.562a5.991 5.991 0 004.087 1.61h33.574z" fill="#0078d4"/>
    <path d="M46.09.002A6.434 6.434 0 0039.93 4.5L.644 120.897a6.469 6.469 0 006.106 8.653h32.48a6.942 6.942 0 005.328-4.531l7.834-23.089 27.985 26.101a6.618 6.618 0 004.165 1.519h36.396l-15.963-45.616-46.533.011L86.922.002z" fill="url(#azure-original-b)" transform="translate(.587 4.468) scale(.91904)"/>
    <path d="M98.055 4.408A6.476 6.476 0 0091.917.002H46.575a6.478 6.478 0 016.137 4.406l39.35 116.594a6.476 6.476 0 01-6.137 8.55h45.344a6.48 6.48 0 006.136-8.55z" fill="url(#azure-original-c)" transform="translate(.587 4.468) scale(.91904)"/>
  </svg>
);

export default function ArtificialIntelligencePage() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: "AI Agents Development",
      description: "Build custom AI agents that act, learn, and automate complex business processes.",
      detail: "We design goal-driven AI agents that connect with your business tools, reason through multi-step tasks, and complete workflows with clear controls and human oversight.",
      benefits: ["Tool and API orchestration", "Human-in-the-loop approvals", "Monitoring, guardrails, and audit trails"],
      icon: Bot,
      slug: "ai-agents-development"
    },
    {
      title: "AI Chatbots",
      description: "Create intelligent chatbots for websites, WhatsApp, and customer support systems.",
      detail: "Our conversational AI solutions understand context, answer from approved knowledge, qualify leads, and hand complex conversations to your team without losing history.",
      benefits: ["Website and WhatsApp integration", "Knowledge-grounded responses", "Live-agent handoff and analytics"],
      icon: MessageSquare,
      slug: "ai-chatbots"
    },
    {
      title: "Enterprise AI Automation",
      description: "Automate CRM, HR, finance, workflows and repetitive tasks across your organization.",
      detail: "We connect AI with your enterprise systems to reduce manual work, standardize decisions, and keep high-volume operational processes moving accurately around the clock.",
      benefits: ["Cross-system workflow automation", "Document and data processing", "Role-based controls and reporting"],
      icon: Settings,
      slug: "enterprise-enterprise-ai-automation" // Wait, let's verify exact slug in servicesData: "Enterprise AI Automation" is "enterprise-ai-automation"
    },
    {
      title: "Custom AI Solutions",
      description: "Tailor-made AI solutions built to solve your unique business challenges.",
      detail: "From discovery through deployment, we build AI products around your data, users, compliance needs, and measurable business outcomes—not a one-size-fits-all template.",
      benefits: ["Custom model and RAG architecture", "Secure enterprise integrations", "Production deployment and optimization"],
      icon: Brain,
      slug: "custom-ai-solutions"
    },
    {
      title: "Voice AI Assistants",
      description: "Human-like voice AI assistants for calls, support, appointments and more.",
      detail: "Our voice assistants handle natural, real-time conversations for support, bookings, reminders, and outbound workflows while preserving escalation paths to human teams.",
      benefits: ["Natural multilingual conversations", "Call routing and appointment workflows", "Transcripts, summaries, and quality insights"],
      icon: Mic,
      slug: "voice-ai-assistants"
    }
  ];

  const industries = [
    { name: "Healthcare", icon: Heart },
    { name: "Real Estate", icon: Building },
    { name: "Finance", icon: Wallet },
    { name: "Retail", icon: ShoppingCart },
    { name: "Manufacturing", icon: Factory },
    { name: "Education", icon: GraduationCap },
    { name: "Logistics", icon: Truck },
    { name: "Government", icon: Building2 }
  ];

  const reasons = [
    {
      title: "Enterprise Ready",
      description: "Scalable, reliable and secure AI solutions built for enterprises.",
      icon: Shield
    },
    {
      title: "Custom AI Solutions",
      description: "Tailored AI systems designed around your business needs.",
      icon: Brain
    },
    {
      title: "Secure & Compliant",
      description: "Enterprise-grade security with global compliance standards.",
      icon: Shield
    },
    {
      title: "Expert AI Team",
      description: "Skilled AI engineers and data scientists with deep industry experience.",
      icon: Users
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "Understand your business and objectives",
      icon: Activity
    },
    {
      number: "02",
      title: "Planning",
      description: "Define AI strategy and solution architecture",
      icon: Settings
    },
    {
      number: "03",
      title: "Development",
      description: "Build and train AI models with precision",
      icon: Brain
    },
    {
      number: "04",
      title: "Testing",
      description: "Rigorous testing for accuracy and performance",
      icon: CheckCircle
    },
    {
      number: "05",
      title: "Deployment",
      description: "Seamless deployment and integration with systems",
      icon: Bot
    },
    {
      number: "06",
      title: "Support",
      description: "Continuous monitoring and performance improvement",
      icon: Clock
    }
  ];

  // Fix slug for Enterprise AI Automation to match generating scheme
  services[2].slug = "enterprise-ai-automation";
  const selectedServiceDetails = selectedService === null ? null : services[selectedService];
  const SelectedServiceIcon = selectedServiceDetails?.icon;

  return (
    <main className="min-h-screen bg-white dark:bg-[#0B132B] text-[#0B132B] dark:text-white transition-colors duration-300">
      
      {/* 1. Hero Section (Dark Theme) */}
      <section className="relative w-full bg-[#0B132B] pt-12 pb-24 overflow-hidden border-b border-[#1C2541] md:pt-16">
        {/* AI hero background */}
        <div className="absolute inset-0">
          <img
            src="/images/ai-powered-future-bg.png"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover object-center opacity-90"
          />
          <div className="absolute inset-0 bg-black/25"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#071127]/75 via-[#071127]/35 to-transparent"></div>
        </div>
        <div className="relative z-10 mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-16 px-8 lg:grid-cols-2">
          
          {/* Left Content */}
          <div className="flex flex-col">
            <span className="text-[#00F5D4] dark:text-[#00F5D4] text-sm font-bold tracking-wider mb-4 uppercase">
              AI Powered Future
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-[1.1] font-[family-name:var(--font-heading)]">
              Artificial Intelligence
            </h1>
            <p className="text-lg text-white/70 max-w-xl mb-8 leading-relaxed">
              We build intelligent AI solutions that automate operations, enhance customer experiences, and unlock new opportunities for your business.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <Link href="/contact" className="px-8 py-4 bg-[#00F5D4] text-[#0B132B] font-bold rounded-sm hover:opacity-90 transition-opacity flex items-center gap-2 group text-sm">
                Get Free Consultation
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/contact" className="rounded-sm border border-white bg-white px-8 py-4 text-sm font-bold text-[#0B132B] transition-colors hover:border-[#00F5D4] hover:bg-[#00F5D4] dark:border-white/20 dark:bg-transparent dark:text-white dark:hover:border-white/20 dark:hover:bg-white/5">
                Talk to AI Expert
              </Link>
            </div>
            
            {/* 4 Attributes */}
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#00F5D4]/10 dark:bg-[#00F5D4]/10 rounded-sm flex items-center justify-center text-[#00F5D4] dark:text-[#00F5D4] shrink-0">
                  <Users size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">AI Experts</h4>
                  <p className="text-sm text-white/50">Certified Team</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#00F5D4]/10 dark:bg-[#00F5D4]/10 rounded-sm flex items-center justify-center text-[#00F5D4] dark:text-[#00F5D4] shrink-0">
                  <Settings size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Enterprise Ready</h4>
                  <p className="text-sm text-white/50">Scalable Solutions</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#00F5D4]/10 dark:bg-[#00F5D4]/10 rounded-sm flex items-center justify-center text-[#00F5D4] dark:text-[#00F5D4] shrink-0">
                  <Shield size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Secure & Reliable</h4>
                  <p className="text-sm text-white/50">Data Protection</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#00F5D4]/10 dark:bg-[#00F5D4]/10 rounded-sm flex items-center justify-center text-[#00F5D4] dark:text-[#00F5D4] shrink-0">
                  <Clock size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">24/7 Support</h4>
                  <p className="text-sm text-white/50">Always Available</p>
                </div>
              </div>
            </div>
          </div>

          {/* AI dashboard cards without the robot/person image */}
          <div className="relative mx-auto flex aspect-square w-full max-w-[550px] items-center justify-center">
            <div className="absolute left-6 top-6 w-[280px] rounded-sm border border-white/10 bg-slate-950/80 p-4 text-white shadow-xl backdrop-blur-md">
              <div className="mb-3 flex items-center gap-2 border-b border-white/5 pb-2">
                <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-[#00F5D4]"></div>
                <span className="text-sm font-bold uppercase tracking-wide">AI Assistant</span>
              </div>
              <p className="mb-4 text-sm font-semibold leading-relaxed text-white/90">How can I help you today?</p>
              <div className="flex flex-col gap-2">
                {["Analyze sales data", "Generate report", "Automate workflow"].map((action) => (
                  <button key={action} className="w-full cursor-default rounded-sm border border-white/10 bg-white/5 p-2.5 text-left text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white">
                    {action}
                  </button>
                ))}
              </div>
            </div>

            <div className="absolute bottom-6 left-6 right-6 flex gap-4 rounded-sm border border-white/10 bg-slate-950/80 p-4 text-white shadow-xl backdrop-blur-md md:left-auto md:w-[320px]">
              <div className="flex flex-1 flex-col justify-between">
                <span className="mb-2 block text-sm font-bold uppercase tracking-widest text-white/40">Analytics Overview</span>
                <div className="flex flex-col gap-2.5">
                  {[["Total Automation", "1,248"], ["Tasks Completed", "8,567"], ["Time Saved", "2,340 hrs"]].map(([label, value], index) => (
                    <div key={label}>
                      <span className="block text-sm text-white/50">{label}</span>
                      <span className={`text-sm font-black ${index === 0 ? "text-[#00F5D4]" : "text-white"}`}>{value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex w-[100px] shrink-0 flex-col items-center justify-center border-l border-white/5 pl-4">
                <div className="relative flex h-16 w-16 items-center justify-center">
                  <svg className="h-full w-full -rotate-90" viewBox="0 0 36 36">
                    <path className="text-white/10" strokeWidth="3.5" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    <path className="text-[#00F5D4]" strokeDasharray="78, 100" strokeWidth="3.5" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  </svg>
                  <div className="absolute text-[12px] font-black">78%</div>
                </div>
                <span className="mt-2 text-sm font-bold tracking-wide text-white/50">Efficiency</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Our AI Services Section */}
      <section className="bg-white dark:bg-[#0B132B] pt-16 pb-12 border-b border-[#E2E8F0] dark:border-[#1C2541] transition-colors duration-300">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-[#00F5D4] dark:text-[#00F5D4] text-sm font-bold uppercase tracking-wider block mb-2">Our AI Services</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#0B132B] dark:text-white tracking-tight leading-tight font-[family-name:var(--font-heading)]">
              Intelligent Solutions for Modern Businesses
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {services.map((service, index) => {
              const IconComp = service.icon;
              return (
                <div key={index} className="group bg-white dark:bg-[#1C2541] rounded-sm p-6 border border-[#E2E8F0] dark:border-[#2D3A54] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 bg-[#00F5D4]/10 dark:bg-[#00F5D4]/10 rounded-sm flex items-center justify-center text-[#00F5D4] dark:text-[#00F5D4] mb-6 group-hover:scale-110 transition-transform shrink-0">
                      <IconComp size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-[#0B132B] dark:text-white mb-4 leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#0B132B]/60 dark:text-white/60 leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedService(selectedService === index ? null : index)}
                    aria-expanded={selectedService === index}
                    className="text-sm font-bold text-[#00F5D4] dark:text-[#00F5D4] flex items-center gap-1 hover:opacity-85 transition-opacity group/link text-left"
                  >
                    {selectedService === index ? "Hide details" : "Learn more"}
                    <ArrowRight size={14} className={`transition-transform ${selectedService === index ? "rotate-90" : "group-hover/link:translate-x-1"}`} />
                  </button>
                </div>
              );
            })}
          </div>

          {selectedServiceDetails && SelectedServiceIcon && (
            <div
              className="mt-8 rounded-sm border border-[#00F5D4]/25 bg-[#F4F7FA] p-6 shadow-lg shadow-[#00F5D4]/5 dark:border-[#00F5D4]/20 dark:bg-[#1C2541] dark:shadow-[#00F5D4]/5 md:p-8"
              aria-live="polite"
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div className="flex max-w-3xl gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-[#00F5D4]/10 text-[#00F5D4] dark:bg-[#00F5D4]/10 dark:text-[#00F5D4]">
                    <SelectedServiceIcon size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#00F5D4] dark:text-[#00F5D4]">Service details</p>
                    <h3 className="mt-1 text-2xl font-black text-[#0B132B] dark:text-white">{selectedServiceDetails.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#0B132B]/65 dark:text-white/65">{selectedServiceDetails.detail}</p>
                    <ul className="mt-5 grid gap-3 text-sm text-[#0B132B]/75 dark:text-white/75 sm:grid-cols-3">
                      {selectedServiceDetails.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2">
                          <CheckCircle size={16} className="mt-0.5 shrink-0 text-[#00F5D4] dark:text-[#00F5D4]" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  className="shrink-0 rounded-sm border border-[#0B132B]/10 px-4 py-2 text-sm font-bold text-[#0B132B] transition hover:border-[#00F5D4] hover:text-[#00F5D4] dark:border-white/15 dark:text-white dark:hover:border-[#00F5D4] dark:hover:text-[#00F5D4]"
                >
                  Close details
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 3. Industries We Serve Section */}
      <section className="bg-white dark:bg-[#0B132B] pt-16 pb-12 border-b border-[#E2E8F0] dark:border-[#1C2541] transition-colors duration-300">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-[#00F5D4] dark:text-[#00F5D4] text-sm font-bold uppercase tracking-wider block mb-2">Industries We Serve</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#0B132B] dark:text-white tracking-tight leading-tight font-[family-name:var(--font-heading)]">
              AI Solutions for Every Industry
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-12">
            {industries.map((ind, index) => {
              const IndIcon = ind.icon;
              return (
                <div key={index} className="flex flex-col items-center justify-center bg-white dark:bg-[#1C2541] border border-[#E2E8F0] dark:border-[#2D3A54] rounded-sm py-8 px-4 text-center hover:border-[#00F5D4] dark:hover:border-[#00F5D4] hover:shadow-lg transition-all group cursor-pointer">
                  <div className="text-[#00F5D4] dark:text-[#00F5D4] mb-4 group-hover:scale-110 transition-transform">
                    <IndIcon size={28} />
                  </div>
                  <span className="text-sm font-bold text-[#0B132B] dark:text-white">{ind.name}</span>
                </div>
              );
            })}
          </div>
          
          <div className="flex justify-center">
            <Link href="/industries" className="px-6 py-3 border border-[#0B132B]/10 dark:border-white/10 hover:border-[#00F5D4] dark:hover:border-[#00F5D4] hover:text-[#00F5D4] dark:hover:text-[#00F5D4] rounded-sm text-sm font-bold text-[#0B132B] dark:text-white transition-all flex items-center gap-2 group">
              View All Industries
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Technologies We Use Section */}
      <section className="bg-white dark:bg-[#0B132B] py-12 border-b border-[#E2E8F0] dark:border-[#1C2541] transition-colors duration-300">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="text-center mb-12">
            <span className="text-[#00F5D4] dark:text-[#00F5D4] text-sm font-bold uppercase tracking-wider block mb-2">Technologies We Use</span>
            <h2 className="text-2xl md:text-3xl font-black text-[#0B132B] dark:text-white tracking-tight leading-tight font-[family-name:var(--font-heading)]">
              Powered by Leading AI Technologies
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 max-w-4xl mx-auto py-4">
            {[
              { name: "OpenAI", logo: OpenAILogo },
              { name: "Google Gemini", logo: GeminiLogo },
              { name: "Claude", logo: ClaudeLogo },
              { name: "LangChain", logo: LangChainLogo },
              { name: "Python", logo: PythonLogo },
              { name: "FastAPI", logo: FastAPILogo },
              { name: "Pinecone", logo: PineconeLogo },
              { name: "AWS", logo: AWSLogo },
              { name: "Azure", logo: AzureLogo }
            ].map((tech, index) => {
              const LogoComponent = tech.logo;
              return (
                <div key={index} className="flex items-center gap-2.5 bg-[#F4F7FA] dark:bg-[#1C2541] border border-[#E2E8F0] dark:border-[#2D3A54] px-4 py-2.5 rounded-sm hover:scale-105 transition-transform duration-300 shadow-sm">
                  <LogoComponent />
                  <span className="text-sm font-bold text-[#0B132B] dark:text-white">{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Why Choose Antellay Section */}
      <section className="bg-white dark:bg-[#0B132B] pt-16 pb-12 border-b border-[#E2E8F0] dark:border-[#1C2541] transition-colors duration-300">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-[#00F5D4] dark:text-[#00F5D4] text-sm font-bold uppercase tracking-wider block mb-2">Why Choose Antellay</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#0B132B] dark:text-white tracking-tight leading-tight font-[family-name:var(--font-heading)]">
              Why Businesses Choose Us
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, index) => {
              const ReasonIcon = reason.icon;
              return (
                <div key={index} className="flex gap-4 p-6 bg-white dark:bg-[#1C2541] border border-[#E2E8F0] dark:border-[#2D3A54] rounded-sm hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-sm bg-[#00F5D4]/10 dark:bg-[#00F5D4]/10 text-[#00F5D4] dark:text-[#00F5D4] flex items-center justify-center shrink-0">
                    <ReasonIcon size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-[#0B132B] dark:text-white mb-2">{reason.title}</h3>
                    <p className="text-sm text-[#0B132B]/60 dark:text-white/60 leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Our Process Section */}
      <section className="bg-white dark:bg-[#0B132B] pt-16 pb-12 border-b border-[#E2E8F0] dark:border-[#1C2541] transition-colors duration-300">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-[#00F5D4] dark:text-[#00F5D4] text-sm font-bold uppercase tracking-wider block mb-2">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#0B132B] dark:text-white tracking-tight leading-tight font-[family-name:var(--font-heading)]">
              Our Proven AI Development Process
            </h2>
          </div>
          
          {/* Timeline Pipeline layout */}
          <div className="relative flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-4 max-w-6xl mx-auto">
            {/* Horizontal Line connector (Visible on large screens) */}
            <div className="absolute top-12 left-6 right-6 h-[2px] bg-gradient-to-r from-[#00F5D4]/10 via-[#00F5D4]/30 to-[#00F5D4]/20 hidden lg:block -z-10"></div>
            
            {processSteps.map((step, index) => {
              const StepIcon = step.icon;
              return (
                <div key={index} className="flex lg:flex-col items-start lg:items-center gap-4 lg:gap-6 flex-1 text-left lg:text-center w-full group">
                  {/* Circular step badge */}
                  <div className="relative w-16 h-16 rounded-full bg-white dark:bg-[#1C2541] border-2 border-[#00F5D4] dark:border-[#00F5D4] flex items-center justify-center text-[#00F5D4] dark:text-[#00F5D4] shadow-lg shrink-0 group-hover:scale-110 transition-transform">
                    <span className="absolute -top-1.5 -right-1.5 bg-[#00F5D4] text-[#0B132B] text-[9px] font-black w-5 h-5 rounded-full flex items-center justify-center">
                      {step.number}
                    </span>
                    <StepIcon size={22} />
                  </div>
                  
                  {/* Step Description */}
                  <div className="flex flex-col lg:items-center">
                    <h3 className="font-bold text-sm text-[#0B132B] dark:text-white mb-2">{step.title}</h3>
                    <p className="text-sm text-[#0B132B]/60 dark:text-white/60 leading-relaxed max-w-[160px]">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. Call to Action Banner Section */}
      <section className="bg-white dark:bg-[#0B132B] py-12 px-8 transition-colors duration-300">
        <div className="max-w-[1400px] mx-auto bg-gradient-to-r from-[#030712] via-[#0B132B] to-[#1E293B] rounded-2xl md:rounded-3xl border border-[#1E293B] dark:border-[#2D3A54] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden shadow-2xl">
          {/* Ambient Glows */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#00F5D4]/10 rounded-full blur-[80px] pointer-events-none"></div>
          
          <div className="flex flex-col max-w-2xl relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight leading-tight font-[family-name:var(--font-heading)]">
              Ready to Build AI Solutions?
            </h2>
            <p className="text-sm text-white/60 mb-8 leading-relaxed max-w-lg">
              Let's transform your business with intelligent automation and AI-powered innovation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="px-8 py-4 bg-[#00F5D4] text-[#0B132B] font-bold rounded-sm hover:opacity-90 transition-opacity flex items-center gap-2 group text-sm shadow-lg shadow-[#00F5D4]/20">
                Book Free Consultation
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/contact" className="rounded-sm border border-white bg-white px-8 py-4 text-sm font-bold text-[#0B132B] transition-colors hover:border-[#00F5D4] hover:bg-[#00F5D4] dark:border-white/20 dark:bg-transparent dark:text-white dark:hover:border-white/20 dark:hover:bg-white/5">
                Talk to AI Expert
              </Link>
            </div>
          </div>
          
          {/* SVG Brain Neural Graphic */}
          <div className="w-[300px] h-[300px] shrink-0 relative z-10 flex items-center justify-center opacity-80 md:opacity-100">
            <svg viewBox="0 0 200 200" className="w-full h-full text-[#00F5D4] dark:text-[#00F5D4]">
              {/* Left Hemisphere */}
              <path d="M100,30 C50,30 30,50 30,100 C30,150 50,170 100,170" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="3 3" />
              {/* Right Hemisphere */}
              <path d="M100,30 C150,30 170,50 170,100 C170,150 150,170 100,170" fill="none" stroke="currentColor" strokeWidth="2.5" />
              {/* Connecting Nodes */}
              <circle cx="100" cy="30" r="4" fill="currentColor" />
              <circle cx="100" cy="170" r="4" fill="currentColor" />
              
              <circle cx="50" cy="60" r="5" fill="currentColor" className="animate-ping" />
              <circle cx="50" cy="60" r="3.5" fill="currentColor" />
              
              <circle cx="150" cy="60" r="3.5" fill="currentColor" />
              <circle cx="35" cy="100" r="3.5" fill="currentColor" />
              <circle cx="165" cy="100" r="3.5" fill="currentColor" />
              
              <circle cx="60" cy="140" r="5" fill="currentColor" className="animate-ping" />
              <circle cx="60" cy="140" r="3.5" fill="currentColor" />
              
              <circle cx="140" cy="140" r="3.5" fill="currentColor" />
              
              {/* Inner Circuit Connections */}
              <path d="M50,60 L100,80 L150,60" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
              <path d="M35,100 L100,110 L165,100" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
              <path d="M60,140 L100,130 L140,140" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
              <path d="M100,30 L100,170" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
            </svg>
          </div>
        </div>
      </section>

    </main>
  );
}
