"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

export default function ProductFeatureSlideshow({ products = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = products.length;
  const product = products[activeIndex] || products[0];

  useEffect(() => {
    if (paused || total < 2) return undefined;

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % total);
    }, 4500);

    return () => window.clearInterval(intervalId);
  }, [paused, total]);

  if (!product) return null;

  const goToOffset = (offset) => {
    setActiveIndex((current) => (current + offset + total) % total);
  };

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="grid md:grid-cols-[.9fr_1.1fr]">
        <div className="p-6 sm:p-8">
          <div className="flex items-center justify-between gap-4">
            <p className="text-xs font-extrabold uppercase tracking-[.12em]" style={{ color: product.accent }}>
              Featured Product
            </p>
            <button
              type="button"
              onClick={() => setPaused((current) => !current)}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2 text-[11px] font-bold text-slate-600 transition hover:border-slate-300 hover:bg-slate-50"
              aria-label={paused ? "Play featured products slideshow" : "Pause featured products slideshow"}
            >
              {paused ? <Play size={13} /> : <Pause size={13} />}
              {paused ? "Play" : "Pause"}
            </button>
          </div>

          <h3 className="mt-4 text-3xl font-extrabold tracking-[-.03em]">{product.name}</h3>
          <p className="mt-2 text-lg font-extrabold" style={{ color: product.accent }}>
            {product.tagline}
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-600">{product.copy}</p>

          <div className="mt-5 grid gap-2 sm:grid-cols-2">
            {product.bullets?.map((bullet) => (
              <div key={bullet} className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2 text-[11px] font-bold text-slate-700">
                <Check size={13} style={{ color: product.accent }} />
                {bullet}
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href={product.href} className="inline-flex items-center gap-2 rounded-md px-5 py-3 text-xs font-bold text-white" style={{ backgroundColor: product.accent }}>
              View Product <ArrowRight size={14} />
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-md border border-slate-200 px-5 py-3 text-xs font-bold text-slate-800 transition hover:bg-slate-50">
              Book Demo
            </Link>
          </div>

          <div className="mt-7 flex flex-wrap gap-2">
            {products.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  type="button"
                  key={item.name}
                  onClick={() => setActiveIndex(index)}
                  className="rounded-full border px-3 py-2 text-[11px] font-extrabold transition"
                  style={{
                    borderColor: isActive ? item.accent : "rgb(226 232 240)",
                    backgroundColor: isActive ? item.accent : "white",
                    color: isActive ? "white" : "rgb(71 85 105)",
                  }}
                >
                  {index + 1}. {item.name}
                </button>
              );
            })}
          </div>
        </div>

        <div className="relative min-h-[360px] bg-slate-950">
          <Image
            key={product.image}
            src={product.image}
            alt={`${product.name} product preview`}
            fill
            sizes="(min-width: 768px) 52vw, 100vw"
            className="object-cover object-top transition duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white backdrop-blur">
            <p className="text-[11px] font-bold uppercase tracking-[.12em] text-white/60">Slide {activeIndex + 1} of {total}</p>
            <p className="mt-1 text-sm font-extrabold">{product.name}</p>
          </div>
          <div className="absolute bottom-4 right-4 flex gap-2">
            <button
              type="button"
              onClick={() => goToOffset(-1)}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
              aria-label="Previous featured product"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => goToOffset(1)}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
              aria-label="Next featured product"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
