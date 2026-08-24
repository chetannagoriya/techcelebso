"use client";

import Image from "next/image";
import { ArrowRight, CheckCircle2, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function CaseStudyModal({ image, tag, title, copy, stats }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#00A98F] dark:text-[#00F5D4]">
        Read Case Study <ArrowRight size={15} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[200] grid place-items-center bg-[#071126]/75 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label={`${title} case study`} onMouseDown={() => setIsOpen(false)}>
          <div className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-slate-200 bg-[#f7fbff] shadow-2xl dark:border-white/10 dark:bg-[#071126]" onMouseDown={(event) => event.stopPropagation()}>
            <div className="relative h-64 overflow-hidden sm:h-80">
              <Image src={image} alt={title} fill sizes="(max-width: 896px) 100vw, 896px" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071126]/75 via-transparent to-transparent" />
              <span className="absolute bottom-5 left-6 rounded-full bg-white/90 px-4 py-2 text-xs font-black text-[#008D7A]">{tag}</span>
              <button onClick={() => setIsOpen(false)} aria-label="Close case study" className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-black/50 text-white backdrop-blur hover:bg-black/70"><X size={19} /></button>
            </div>

            <div className="p-6 text-[#07152f] dark:text-white sm:p-9">
              <p className="text-xs font-bold uppercase tracking-[.16em] text-[#00A98F] dark:text-[#00F5D4]">Draft case study</p>
              <h2 className="mt-3 text-3xl font-black leading-tight tracking-[-.04em] sm:text-4xl">{title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{copy}</p>

              <div className="mt-7 grid gap-3 sm:grid-cols-3">{stats.map(([value, label]) => <div key={label} className="rounded-xl border border-slate-200 bg-white p-4 text-center dark:border-white/10 dark:bg-[#101b34]"><b className="text-2xl text-[#00A98F] dark:text-[#00F5D4]">{value}</b><p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{label}</p></div>)}</div>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {[
                  ["The Challenge", "Temporary copy: the client needed to replace fragmented processes, limited visibility and slow manual decisions."],
                  ["Our Solution", "Antellay combined connected data, intelligent workflows and accessible dashboards in a phased implementation."],
                  ["The Outcome", "The initial rollout reduced repetitive work and created faster access to reliable, decision-ready information."],
                ].map(([heading, text], index) => <article key={heading} className="rounded-xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-[#101b34]"><span className="grid h-8 w-8 place-items-center rounded-full bg-[#00A98F] text-xs font-black text-white dark:bg-[#00F5D4] dark:text-[#071126]">0{index + 1}</span><h3 className="mt-4 font-black">{heading}</h3><p className="mt-3 text-xs leading-6 text-slate-600 dark:text-slate-300">{text}</p></article>)}
              </div>

              <div className="mt-7 flex items-center gap-3 rounded-xl bg-[#00A98F]/10 p-4 text-sm text-slate-700 dark:bg-[#00F5D4]/10 dark:text-slate-200"><CheckCircle2 className="shrink-0 text-[#00A98F] dark:text-[#00F5D4]" size={20} /> Full client-approved case study content will replace this temporary copy.</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
