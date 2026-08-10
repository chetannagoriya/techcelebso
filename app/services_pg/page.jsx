"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { servicesData, generateSlug } from "../../data/services";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0B132B] transition-colors duration-300 pb-20">
      
      {/* Dynamic Hero Section */}
      <section className="relative w-full pt-32 pb-20 overflow-hidden border-b border-[#E2E8F0] dark:border-[#1C2541]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#3A86FF]/5 to-white dark:from-[#3A86FF]/5 dark:to-[#0B132B] -z-10"></div>
        <div className="max-w-[1400px] mx-auto px-8 flex flex-col items-center text-center">
          <span className="inline-block px-4 py-1.5 rounded-sm bg-[#3A86FF]/10 dark:bg-[#00F5D4]/10 text-[#3A86FF] dark:text-[#00F5D4] text-sm font-bold tracking-wide mb-6 shadow-sm border border-[#3A86FF]/20 dark:border-[#00F5D4]/20 uppercase">
            Global Capabilities
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-[#0B132B] dark:text-white mb-6 tracking-tight leading-[1.1] font-[family-name:var(--font-heading)]">
            Engineering the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3A86FF] to-[#70EEFF] dark:from-[#00F5D4] dark:to-[#3A86FF]">Future.</span>
          </h1>
          <p className="text-xl text-[#0B132B]/50 dark:text-white/40 max-w-2xl leading-relaxed">
            From hyper-scalable cloud infrastructure to cutting-edge generative AI models, explore our comprehensive suite of enterprise-grade technology services.
          </p>
        </div>
      </section>

      {/* Mega-Grid Directory Architecture */}
      <section className="max-w-[1400px] mx-auto px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {servicesData.map((category, idx) => {
            const Icon = category.icon;
            return (
              <div 
                key={idx} 
                className="group bg-white dark:bg-[#1C2541] rounded-sm p-8 border border-[#E2E8F0] dark:border-[#2D3A54] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col"
              >
                {/* Ambient Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#F4F7FA] to-transparent dark:from-[#3A86FF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                {/* Category Header */}
                <div className="relative z-10 flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-sm bg-[#3A86FF]/10 dark:bg-[#00F5D4]/10 flex items-center justify-center text-[#3A86FF] dark:text-[#00F5D4] shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={24} />
                  </div>
                  <h2 className="text-xl font-bold text-[#0B132B] dark:text-white tracking-tight leading-tight">
                    {category.category}
                  </h2>
                </div>

                {/* Sub-Services Links */}
                <div className="relative z-10 flex flex-col gap-1">
                  {category.items.map((item, i) => (
                    <Link 
                      key={i} 
                      href={`/services_pg/${generateSlug(item)}`}
                      className="group/link flex items-center py-2 text-sm font-medium text-[#0B132B]/70 dark:text-white/70 hover:text-[#3A86FF] dark:hover:text-[#00F5D4] transition-colors relative overflow-hidden"
                    >
                      <span className="relative z-10">{item}</span>
                      <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all duration-300 ml-1 text-[#3A86FF] dark:text-[#00F5D4]" />
                      
                      {/* Microscopic bottom sliding border */}
                      <span className="absolute bottom-1 left-0 w-full h-[1px] bg-[#3A86FF] dark:bg-[#00F5D4] -translate-x-full group-hover/link:translate-x-0 transition-transform duration-500 ease-out"></span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </main>
  );
}
