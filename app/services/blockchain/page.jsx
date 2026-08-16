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
  Cpu,
  Layers,
  Code2,
  Workflow,
  Search,
  Globe,
  Wallet,
  Activity,
  Award
} from "lucide-react";

// --- Supported Blockchain Platforms Vector Logos ---
const EthereumLogo = () => (
  <span className="flex items-center gap-1.5 text-[10px] font-black text-slate-800 dark:text-slate-200">
    <svg className="w-4 h-4 text-[#627EEA]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L3.5 12.5L12 16L20.5 12.5L12 2Z" opacity="0.6" />
      <path d="M12 16L3.5 12.5L12 22L20.5 12.5L12 16Z" />
    </svg>
    Ethereum
  </span>
);

const PolygonLogo = () => (
  <span className="flex items-center gap-1 text-[10px] font-bold text-[#8247E5]">
    ⬡ Polygon
  </span>
);

const SolanaLogo = () => (
  <span className="flex items-center gap-1.5 text-[10px] font-bold text-[#00FFA3]">
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
    Solana
  </span>
);

const BNBChainLogo = () => (
  <span className="flex items-center gap-1 text-[10px] font-black text-[#F3BA2F]">
    ♦ BNB Chain
  </span>
);

const HyperledgerLogo = () => (
  <span className="flex items-center gap-1 text-[10px] font-bold text-slate-800 dark:text-slate-200 uppercase tracking-tight">
    ▓ Hyperledger
  </span>
);

const AvalancheLogo = () => (
  <span className="flex items-center gap-1 text-[10px] font-bold text-[#E84142]">
    ▲ Avalanche
  </span>
);

const ArbitrumLogo = () => (
  <span className="flex items-center gap-1 text-[10px] font-black text-[#28A0F0]">
    🔵 Arbitrum
  </span>
);

const OptimismLogo = () => (
  <span className="flex items-center gap-1 text-[10px] font-bold text-[#FF0420]">
    🔴 Optimism
  </span>
);

// --- Technologies We Use Vector Logos ---
const SolidityLogo = () => <span className="text-[10px] font-black text-slate-800 dark:text-slate-200">⧫ Solidity</span>;
const RustLogo = () => <span className="text-[10px] font-bold text-[#DE5B26]">⚙️ Rust</span>;
const HardhatLogo = () => <span className="text-[10px] font-bold text-amber-500">👷 Hardhat</span>;
const FoundryLogo = () => <span className="text-[10px] font-black text-[#D02626]"> Foundry</span>;
const Web3jsLogo = () => <span className="text-[10px] font-bold text-slate-800 dark:text-slate-200">W3 Web3.js</span>;
const EthersjsLogo = () => <span className="text-[10px] font-bold text-purple-600">Ξ Ethers.js</span>;
const IPFSLogo = () => <span className="text-[10px] font-bold text-[#00F5D4]">⚓ IPFS</span>;
const ChainlinkLogo = () => <span className="text-[10px] font-bold text-[#375BD2]">⬡ Chainlink</span>;
const MetaMaskLogo = () => <span className="text-[10px] font-bold text-[#E2761B]">🦊 MetaMask</span>;
const OpenZeppelinLogo = () => <span className="text-[10px] font-bold text-blue-600">🛡️ OpenZeppelin</span>;
const NodejsLogo = () => <span className="text-[10px] font-bold text-emerald-600">JS Node.js</span>;
const ReactLogo = () => <span className="text-[10px] font-bold text-cyan-400">⚛ React</span>;

export default function BlockchainPage() {
  const coreServices = [
    {
      title: "Smart Contract Development",
      image: "/images/blockchain-hero-2026.png",
      description: "We build secure, efficient, and audited smart contracts for various blockchain platforms.",
      bullets: [
        "Solidity Development",
        "Smart Contract Audit",
        "Token Standards (ERC20, ERC721)",
        "Upgradeable Contracts"
      ],
      color: "border-purple-500",
      iconColor: "bg-purple-500",
      icon: Code2
    },
    {
      title: "DApp Development",
      image: "/images/blockchain_hero.jpg",
      description: "Decentralized applications with seamless Web3 experiences and wallet integration.",
      bullets: [
        "Frontend dApps",
        "Backend Integration",
        "Web3.js / Ethers.js",
        "Decentralized Storage"
      ],
      color: "border-blue-500",
      iconColor: "bg-blue-500",
      icon: Layers
    },
    {
      title: "Web3 Solutions",
      image: "/images/blockchain_cta.jpg",
      description: "End-to-end Web3 solutions including DeFi, NFT, DAO, GameFi, and Tokenization platforms.",
      bullets: [
        "DeFi Platforms",
        "NFT Marketplaces",
        "DAO Solutions",
        "Tokenization"
      ],
      color: "border-emerald-500",
      iconColor: "bg-emerald-500",
      icon: Globe
    },
    {
      title: "Blockchain Consulting",
      image: "/images/cybersecurity_hero.jpg",
      description: "Strategic consulting for blockchain adoption, architecture design, tokenomics, and audits.",
      bullets: [
        "Blockchain Strategy",
        "Architecture Design",
        "Tokenomics Design",
        "Security & Compliance"
      ],
      color: "border-orange-500",
      iconColor: "bg-orange-500",
      icon: Users
    }
  ];

  const processSteps = [
    { num: "01", name: "Discovery", desc: "Understand requirements and project goals", icon: Search },
    { num: "02", name: "Architecture", desc: "Design scalable and secure architecture", icon: Layers },
    { num: "03", name: "Smart Contract", desc: "Build and test smart contracts", icon: Code2 },
    { num: "04", name: "Security Audit", desc: "Audit smart contracts for vulnerabilities", icon: ShieldCheck },
    { num: "05", name: "DApp Dev", desc: "Develop frontend & backend of dApp", icon: Cpu },
    { num: "06", name: "Testing", desc: "Perform comprehensive testing", icon: Workflow },
    { num: "07", name: "Deployment", desc: "Deploy to mainnet or testnet", icon: CheckCircle2 }
  ];

  const whyChooseUs = [
    { title: "Secure & Reliable", desc: "Security-first approach with industry best practices.", icon: ShieldCheck },
    { title: "Expert Blockchain Team", desc: "Experienced developers and architects with deep blockchain expertise.", icon: Award },
    { title: "Multi-Chain Expertise", desc: "Build across public, private, and consortium blockchains.", icon: Globe },
    { title: "Scalable Solutions", desc: "High-performance and scalable blockchain applications.", icon: Cpu },
    { title: "Transparent Process", desc: "Agile methodology with clear communication and updates.", icon: Workflow },
    { title: "On-time Delivery", desc: "Committed to quality and timely project delivery.", icon: Clock }
  ];

  return (
    <main className="service-modern-page blockchain-modern-page min-h-screen bg-white transition-colors duration-300 font-[family-name:var(--font-sans)]">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[560px] overflow-hidden bg-[#0A1128] py-12 md:flex md:items-center md:py-16">
        <video className="absolute inset-0 h-full w-full object-cover object-center" src="/videos/blockchain-hero-2026.mp4" poster="/images/blockchain-hero-2026.png" autoPlay muted loop playsInline preload="metadata" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050815]/95 via-[#090C20]/78 to-[#090C20]/25"></div>
        
        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 items-center lg:grid-cols-12">
            
            {/* Left text column */}
            <div className="flex max-w-4xl flex-col gap-5 lg:col-span-9">
              <div>
                <span className="mb-4 block w-fit rounded-full border border-[#00F5D4]/30 bg-[#00F5D4]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#73FBE8] backdrop-blur-md">
                  Decentralize • Build • Innovate
                </span>
                <h1 className="text-4xl font-black leading-[1.06] tracking-[-0.04em] text-white md:text-5xl lg:text-6xl font-[family-name:var(--font-heading)]">
                  Enterprise Blockchain<br />
                  <span className="bg-gradient-to-r from-[#70EEFF] via-[#00F5D4] to-[#A78BFA] bg-clip-text text-transparent">Development Services</span>
                </h1>
              </div>
              <p className="max-w-3xl text-base font-medium leading-7 text-slate-200 md:text-lg">
                Build secure, scalable blockchain products—from audited smart contracts and high-performance dApps to Web3 platforms, tokenization ecosystems, and enterprise-grade decentralized infrastructure.
              </p>
              
              <div className="mt-1 flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#00F5D4] px-6 py-3.5 text-sm font-bold text-[#071126] shadow-lg shadow-[#00F5D4]/20 transition-all hover:-translate-y-0.5 hover:bg-white">
                  Get Free Consultation →
                </Link>
              </div>

              {/* Badges Row */}
              <div className="mt-2 grid max-w-3xl grid-cols-1 gap-4 border-t border-white/20 pt-5 sm:grid-cols-3">
                {[
                  { title: "Secure & Audited", desc: "Smart Contracts", icon: ShieldCheck },
                  { title: "Multi-Chain", desc: "Development", icon: Globe },
                  { title: "End-to-End", desc: "Blockchain Services", icon: Layers }
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

            {/* Right mockup column: Blockchain Dashboard */}
            {false && (
            <div className="lg:col-span-7 relative">
              <div className="bg-[#0F172A] border border-slate-800 rounded-sm shadow-2xl p-4 md:p-6 text-white overflow-hidden group">
                
                {/* Visual Header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Network Node Monitor</span>
                  </div>
                  <span className="text-[9px] font-bold text-slate-500">Mainnet Status</span>
                </div>

                <div className="grid grid-cols-12 gap-4">
                  
                  {/* Left: Code Editor and confirmed transaction */}
                  <div className="col-span-12 md:col-span-7 space-y-4">
                    {/* Solidity Code Panel */}
                    <div className="bg-slate-950 border border-slate-800 p-3 rounded-sm font-mono text-[9px] text-slate-300 relative">
                      <div className="absolute top-2 right-2 text-[8px] bg-slate-900 px-2 py-0.5 rounded-sm border border-slate-800 text-sky-400">Solidity</div>
                      <p className="text-slate-500">// SPDX-License-Identifier: MIT</p>
                      <p className="text-purple-400">pragma solidity <span className="text-yellow-400">^0.8.0</span>;</p>
                      <p className="text-blue-400 mt-2">contract <span className="text-white font-bold">Token</span> &#123;</p>
                      <p className="pl-3">mapping(address =&gt; uint) <span className="text-purple-400">public</span> balance;</p>
                      <p className="pl-3 mt-1 text-blue-400">function <span className="text-yellow-400">transfer</span>(address _to, uint _val) public &#123;</p>
                      <p className="pl-6 text-purple-400">require<span className="text-white">(balance[msg.sender] &gt;= _val);</span></p>
                      <p className="pl-6">balance[msg.sender] -= _val;</p>
                      <p className="pl-6">balance[_to] += _val;</p>
                      <p className="pl-3">&#125;</p>
                      <p>&#125;</p>
                    </div>

                    {/* Transaction Confirmed Toast */}
                    <div className="bg-[#0A1128] border border-slate-850 p-2.5 rounded-sm flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center text-xs font-black text-slate-900">✓</span>
                      <div className="text-left flex-1">
                        <h4 className="text-[10px] font-black text-white leading-tight">Transaction Confirmed</h4>
                        <p className="text-[8px] text-slate-400">Tx: 0x9f8...7b2 • Gas Used: 21,000</p>
                      </div>
                      <span className="text-[9px] font-bold text-emerald-400">+12.5 ETH</span>
                    </div>
                  </div>

                  {/* Right: Wallet & Stats */}
                  <div className="col-span-12 md:col-span-5 flex flex-col gap-3 justify-between">
                    {/* My Wallet Mockup */}
                    <div className="bg-slate-900 border border-slate-800 p-3.5 rounded-sm flex flex-col justify-between">
                      <div className="flex justify-between items-center text-[9px] text-slate-400 font-bold uppercase">
                        <span>My Wallet</span>
                        <Wallet size={12} className="text-[#00A98F]" />
                      </div>
                      <h4 className="text-sm font-black text-white mt-2">12.45 ETH</h4>
                      <p className="text-[9px] text-slate-400 font-medium">$24,650.35 USD</p>
                      <div className="grid grid-cols-2 gap-2 mt-3">
                        <button className="bg-[#00A98F] text-white font-bold text-[9px] py-1.5 rounded-sm hover:opacity-90">Send</button>
                        <button className="bg-slate-800 text-white font-bold text-[9px] py-1.5 rounded-sm hover:bg-slate-700">Receive</button>
                      </div>
                    </div>

                    {/* Network Overview stats */}
                    <div className="bg-slate-900 border border-slate-800 p-3.5 rounded-sm flex-1 flex flex-col justify-between">
                      <div className="flex justify-between text-[8px] text-slate-400 font-bold uppercase mb-2">
                        <span>Network Overview</span>
                      </div>
                      <div className="flex justify-between items-baseline mb-2">
                        <div>
                          <p className="text-[7.5px] text-slate-500 uppercase">Total Transactions</p>
                          <h4 className="text-xs font-black text-white">24.5M</h4>
                        </div>
                        <span className="text-[8px] text-emerald-400 font-bold bg-emerald-950 px-1 py-0.5 rounded-sm">+12.4%</span>
                      </div>

                      {/* Sparkline */}
                      <svg className="w-full h-8 overflow-visible" viewBox="0 0 100 20">
                        <path d="M0 15 L20 18 L40 10 L60 12 L80 5 L100 8" fill="none" stroke="#00F5D4" strokeWidth="1.5" />
                        <path d="M0 15 L20 18 L40 10 L60 12 L80 5 L100 8 L100 20 L0 20 Z" fill="rgba(0, 245, 212, 0.05)" />
                      </svg>
                      
                      <div className="flex justify-between items-baseline border-t border-slate-800 pt-2 mt-2">
                        <div>
                          <p className="text-[7px] text-slate-500 uppercase">Active Addresses</p>
                          <h5 className="text-[10px] font-black text-white">8.7M</h5>
                        </div>
                        <span className="text-[7.5px] text-emerald-400 font-bold">+8.2%</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            )}

          </div>
        </div>
      </section>

      {/* 2. Our Blockchain Services */}
      <section className="border-b border-[#E2E8F0] bg-[#F8FAFC] py-16 transition-colors dark:border-white/10 dark:bg-[#0E1930] md:py-20">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="mb-12 flex flex-col items-center text-center">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#00A98F] dark:text-[#00F5D4]">What we deliver</span>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-[#0B132B] dark:text-white md:text-4xl font-[family-name:var(--font-heading)]">
              Our Blockchain Services
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {coreServices.map((service, idx) => {
              const accent = ["#8B5CF6", "#3B82F6", "#10B981", "#F97316"][idx];
              return (
                <article key={service.title} className="blockchain-image-service-card group overflow-hidden rounded-3xl border border-slate-200 bg-white" style={{ "--service-accent": accent }}>
                  <div className="relative h-48 overflow-hidden">
                    <img src={service.image} alt={`${service.title} service`} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071126]/65 to-transparent"></div>
                  </div>
                  <div className="min-h-[310px] p-5">
                    <h3 className="text-xl font-extrabold leading-tight text-[#0B132B] dark:text-white">{service.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{service.description}</p>
                    <ul className="mt-5 space-y-2.5">
                      {service.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 dark:text-slate-200">
                          <span className="blockchain-service-check grid h-5 w-5 shrink-0 place-items-center rounded-full"><Check size={12} strokeWidth={3} /></span>
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

      {/* 3. Blockchain Platforms We Work With */}
      <section className="overflow-hidden border-b border-[#E2E8F0] bg-white py-16 transition-colors dark:border-white/10 dark:bg-[#0B132B]">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className="h-[1px] bg-slate-200 flex-1"></span>
            <h2 className="shrink-0 text-xl font-extrabold uppercase tracking-wide text-[#0B132B] dark:text-white md:text-2xl">
              Blockchain Platforms We Work With
            </h2>
            <span className="h-[1px] bg-slate-200 flex-1"></span>
          </div>

          <div className="blockchain-logo-marquee group overflow-hidden">
            <div className="blockchain-logo-track group-hover:[animation-play-state:paused] motion-reduce:![animation:none]">
              {[false, true].map((duplicate) => (
                <div key={duplicate ? "duplicate" : "primary"} className="blockchain-logo-group" aria-hidden={duplicate || undefined}>
                  {[EthereumLogo, PolygonLogo, SolanaLogo, BNBChainLogo, HyperledgerLogo, AvalancheLogo, ArbitrumLogo, OptimismLogo].map((Logo, index) => <div key={index} className="blockchain-logo-card"><Logo /></div>)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Technologies We Use */}
      <section className="overflow-hidden border-b border-[#E2E8F0] bg-[#F8FAFC] py-16 transition-colors dark:border-white/10 dark:bg-[#101A31]">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className="h-[1px] bg-slate-300 flex-1"></span>
            <h2 className="shrink-0 text-xl font-extrabold uppercase tracking-wide text-[#0B132B] dark:text-white md:text-2xl">
              Technologies We Use
            </h2>
            <span className="h-[1px] bg-slate-300 flex-1"></span>
          </div>

          <div className="blockchain-logo-marquee group overflow-hidden">
            <div className="blockchain-logo-track blockchain-logo-track-slow group-hover:[animation-play-state:paused] motion-reduce:![animation:none]">
              {[false, true].map((duplicate) => <div key={duplicate ? "duplicate" : "primary"} className="blockchain-logo-group" aria-hidden={duplicate || undefined}>{[
              SolidityLogo,
              RustLogo,
              HardhatLogo,
              FoundryLogo,
              Web3jsLogo,
              EthersjsLogo,
              IPFSLogo,
              ChainlinkLogo,
              MetaMaskLogo,
              OpenZeppelinLogo,
              NodejsLogo,
              ReactLogo
            ].map((LogoComp, idx) => (
              <div key={idx} className="blockchain-logo-card">
                <LogoComp />
              </div>
            ))}</div>)}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Process Flow Section (7 steps) */}
      <section className="py-16 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="flex items-center justify-center gap-4 mb-14">
            <span className="h-[1px] bg-slate-200 flex-1"></span>
            <h2 className="shrink-0 text-xl font-extrabold uppercase tracking-wide text-[#0B132B] dark:text-white md:text-2xl">
              Our Blockchain Development Process
            </h2>
            <span className="h-[1px] bg-slate-200 flex-1"></span>
          </div>

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 max-w-6xl mx-auto">
            {/* Connecting lines */}
            <div className="absolute top-[28px] left-[5%] right-[5%] h-[1.5px] border-t border-dashed border-[#00A98F]/40 hidden md:block -z-10"></div>
            
            {processSteps.map((wf, idx) => {
              const StepIcon = wf.icon;
              return (
                <div key={idx} className="flex flex-col items-center text-center max-w-[130px] flex-1 relative z-10">
                  <div className="w-14 h-14 rounded-full bg-white border border-[#E2E8F0] shadow-sm flex items-center justify-center text-[#00A98F] hover:border-[#00A98F] hover:scale-105 transition-all duration-300">
                    <StepIcon size={22} />
                  </div>
                  <span className="text-[9px] font-black text-[#00A98F] mt-3">{wf.num}</span>
                  <h4 className="text-xs font-bold text-[#0B132B] mt-1">{wf.name}</h4>
                  <p className="text-[9px] text-[#0B132B]/50 mt-1 leading-normal">{wf.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Why Choose Us (Grid 6 columns) */}
      <section className="py-16 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className="h-[1px] bg-slate-300 flex-1"></span>
            <h2 className="shrink-0 text-xl font-extrabold uppercase tracking-wide text-[#0B132B] dark:text-white md:text-2xl">
              Why Choose Antellay
            </h2>
            <span className="h-[1px] bg-slate-300 flex-1"></span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {whyChooseUs.map((item, idx) => {
              const ItemIcon = item.icon;
              return (
                <div key={idx} className="bg-white border border-[#E2E8F0] p-6 rounded-sm flex gap-4 hover:shadow-md transition-all duration-200">
                  <div className="w-10 h-10 rounded-sm bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center text-[#00A98F] shrink-0">
                    <ItemIcon size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-[#0B132B] uppercase tracking-wide">{item.title}</h4>
                    <p className="text-[10px] text-[#0B132B]/60 leading-relaxed mt-1 font-medium">{item.desc}</p>
                  </div>
                </div>
              );
            })}
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
                src="/images/blockchain_cta.jpg" 
                alt="Blockchain security layout with wallet"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-[#0F172A]/85 -z-10"></div>
            
            <div className="max-w-2xl text-left">
              <h2 className="text-2xl md:text-3xl font-black text-white leading-tight tracking-tight font-[family-name:var(--font-heading)]">
                Ready to Build the Future <br />with Blockchain?
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed mt-4 font-light">
                Partner with ANTELLAY to build secure, scalable, and innovative blockchain solutions that drive your business forward.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 shrink-0">
              <Link href="/contact" className="px-6 py-3.5 bg-[#00A98F] hover:bg-[#00A98F]/90 text-white text-sm font-bold rounded-sm shadow-lg shadow-[#00A98F]/20 transition-all hover:-translate-y-0.5">
                Book Free Consultation →
              </Link>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
