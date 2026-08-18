import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  CircleCheckBig,
  Sparkles,
} from "lucide-react";

export default function ProductDetailsPage({ product }) {
  return (
    <main className="bg-white text-[#07152f] dark:bg-[#071126] dark:text-white">
      <section className="relative overflow-hidden bg-[#071124] text-white">
        <div
          className="absolute inset-0 opacity-90"
          style={{
            background: `radial-gradient(circle at 78% 24%, ${product.glow}, transparent 32%), radial-gradient(circle at 12% 80%, rgba(58,134,255,.2), transparent 34%)`,
          }}
        />
        <div className="relative mx-auto max-w-[1360px] px-6 pb-16 pt-10 md:px-10 md:pb-20 lg:px-14">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-xs font-bold text-white/70 transition hover:text-white"
          >
            <ArrowLeft size={15} /> Back to Products
          </Link>

          <div className="mt-10 grid items-center gap-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
            <div>
              <span
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[.12em]"
                style={{ color: product.accent }}
              >
                <Sparkles size={14} /> Antellay Product
              </span>
              <h1 className="mt-6 text-5xl font-extrabold leading-[1.03] tracking-[-.05em] sm:text-6xl lg:text-7xl">
                {product.name}
              </h1>
              <p className="mt-5 max-w-xl text-xl font-bold leading-8 text-white/90">
                {product.tagline}
              </p>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/65 md:text-base">
                {product.overview}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-extrabold text-[#071124] transition hover:-translate-y-0.5"
                  style={{ backgroundColor: product.accent }}
                >
                  Book an Appointment <ArrowRight size={16} />
                </Link>
                <Link
                  href="#features"
                  className="inline-flex items-center justify-center rounded-md border border-white/30 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  Explore Features
                </Link>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3 shadow-2xl shadow-black/30">
              <div className="relative h-full overflow-hidden rounded-2xl">
                <Image
                  src={product.image}
                  alt={`${product.name} product preview`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071124]/55 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1360px] gap-8 px-6 py-14 md:px-10 md:py-20 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[.12em] text-[#3a86ff]">Overview</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-[-.04em] md:text-4xl">
            Built to turn ambitious ideas into practical outcomes.
          </h2>
        </div>
        <div className="space-y-5 text-sm leading-7 text-slate-600 md:text-base md:leading-8">
          {product.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </section>

      <section id="features" className="bg-slate-50 px-6 py-14 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1360px]">
          <p className="text-center text-xs font-extrabold uppercase tracking-[.12em] text-[#3a86ff]">Key Features</p>
          <h2 className="mx-auto mt-3 max-w-2xl text-center text-3xl font-extrabold tracking-[-.04em] md:text-5xl">
            Everything you need in one focused platform.
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {product.features.map(({ title, copy }) => (
              <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <span
                  className="grid h-11 w-11 place-items-center rounded-full"
                  style={{ backgroundColor: product.tint, color: product.color }}
                >
                  <CheckCircle2 size={21} />
                </span>
                <h3 className="mt-5 text-lg font-extrabold">{title}</h3>
                <p className="mt-2 text-xs leading-6 text-slate-600">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1360px] gap-6 px-6 py-14 md:px-10 md:py-20 lg:grid-cols-2">
        <article className="rounded-3xl bg-[#071124] p-7 text-white md:p-10">
          <p className="text-xs font-extrabold uppercase tracking-[.12em]" style={{ color: product.accent }}>Benefits</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-[-.04em]">Why teams choose {product.name}</h2>
          <ul className="mt-7 space-y-4">
            {product.benefits.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-6 text-white/72">
                <CircleCheckBig size={18} className="mt-0.5 shrink-0" style={{ color: product.accent }} />
                {item}
              </li>
            ))}
          </ul>
        </article>
        <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10">
          <p className="text-xs font-extrabold uppercase tracking-[.12em] text-[#3a86ff]">Use Cases</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-[-.04em]">Designed for real-world workflows</h2>
          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {product.useCases.map((item) => (
              <li key={item} className="flex items-start gap-2 rounded-xl bg-slate-50 p-4 text-xs font-bold leading-5 text-slate-700">
                <Check size={15} className="mt-0.5 shrink-0" style={{ color: product.color }} />
                {item}
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="bg-slate-50 px-6 py-14 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1360px]">
          <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr]">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[.12em] text-[#3a86ff]">Product Information</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-[-.04em] md:text-4xl">Specifications at a glance</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">{product.additionalInfo}</p>
            </div>
            <dl className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white sm:grid-cols-2">
              {product.specifications.map(([label, value]) => (
                <div key={label} className="border-b border-slate-200 p-5 last:border-b-0 sm:border-r sm:last:border-r-0">
                  <dt className="text-[10px] font-extrabold uppercase tracking-[.12em] text-slate-400">{label}</dt>
                  <dd className="mt-2 text-sm font-bold text-[#07152f]">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1360px] px-6 py-14 md:px-10 md:py-20">
        <div className="relative overflow-hidden rounded-3xl bg-[#071124] p-8 text-white md:p-12">
          <div className="absolute inset-0" style={{ background: `radial-gradient(circle at 85% 20%, ${product.glow}, transparent 34%)` }} />
          <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="text-3xl font-extrabold tracking-[-.04em] md:text-5xl">Ready to explore {product.name}?</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/65">
                Schedule a conversation with our product team for a tailored walkthrough and answers to your questions.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-extrabold text-[#071124]"
              style={{ backgroundColor: product.accent }}
            >
              Book an Appointment <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
