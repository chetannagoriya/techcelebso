import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, BarChart3, Download, Heart, MessageCircle, Play, Radio, Share2, Sparkles, Users } from "lucide-react";

const liveStats = [["500+", "Live streams"], ["10K+", "Creators"], ["1M+", "Views"]];
const profileStats = [["2.3M", "Followers"], ["48", "Collaborations"], ["120M+", "Total reach"]];

export const metadata = {
  title: "CelebsoX | Build Your Digital Identity",
  description: "Build your identity, share your story and create your legacy with CelebsoX.",
};

export default function CelebsoXPage() {
  return (
    <main className="overflow-hidden bg-[#05060a] text-white">
      <section className="relative isolate min-h-[650px] overflow-hidden border-b border-white/10">
        <Image src="/images/products/celebsox/celebsox-paparazzi-hero.png" alt="Public figure facing photographers at a premiere" fill priority sizes="100vw" className="-z-20 object-cover object-center" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#020307_0%,rgba(2,3,7,.97)_18%,rgba(2,3,7,.74)_38%,rgba(2,3,7,.12)_68%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-[#070916] to-transparent" />
        <div className="mx-auto flex min-h-[650px] max-w-[1440px] items-center px-5 py-14 sm:px-8 md:px-10 lg:px-14">
          <div className="w-full max-w-[560px] -translate-y-6 sm:-translate-y-8">
            <span className="ml-2 inline-flex rounded-full border border-[#f1b53a]/70 bg-black/55 px-4 py-2 text-[10px] font-bold uppercase tracking-[.16em] text-[#f1b53a]">Product</span>
            <div className="mt-4 w-fit bg-black/95 px-5 py-3 sm:px-7">
              <h1 className="font-[family-name:var(--font-heading)] text-5xl font-light tracking-[.1em] sm:text-6xl">Celebso<span className="text-[#f1b53a]">X</span></h1>
            </div>
            <div className="max-w-[510px] rounded-br-[1.75rem] bg-[#0b0d1c]/95 px-6 pb-8 pt-5 shadow-2xl backdrop-blur-sm sm:px-8 sm:pb-9">
              <p className="text-xl font-medium leading-tight text-white/92 sm:text-[27px]">Build Your Identity. Create Your</p>
              <span className="mt-1 block pl-6 font-serif text-5xl italic leading-none text-white sm:text-7xl">Legacy</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-3 pl-2">
              <Link href="/contact" className="inline-flex min-h-12 items-center gap-3 rounded-lg border border-white/40 bg-black/70 px-4 py-2 !text-white shadow-lg transition hover:border-[#f1b53a]"><span className="text-2xl leading-none">●</span><span className="text-left text-[9px] leading-tight">Download on the<br /><b className="text-sm">App Store</b></span></Link>
              <Link href="/contact" className="inline-flex min-h-12 items-center gap-3 rounded-lg border border-white/40 bg-black/70 px-4 py-2 !text-white shadow-lg transition hover:border-[#f1b53a]"><Play size={22} fill="currentColor" /><span className="text-left text-[9px] leading-tight">GET IT ON<br /><b className="text-sm">Google Play</b></span></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#070916] px-5 py-16 sm:px-8 lg:px-8 lg:py-20">
        <div className="relative mx-auto min-h-[410px] max-w-[1400px] overflow-hidden rounded-[1.35rem] border border-white/10">
          <Image src="/images/products/celebsox/celebsox-creator-story.png" alt="Entrepreneur sharing his story through video" fill sizes="(max-width: 1400px) 100vw, 1400px" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#05060a]/30 via-transparent to-[#05060a]/85" />
          <div className="absolute inset-x-0 top-0 flex items-center justify-between p-6 sm:p-9">
            <p className="max-w-xs text-2xl font-semibold leading-tight sm:text-3xl">I don&apos;t just dream.<br /><span className="text-[#f1b53a]">I execute.</span></p>
            <span className="grid h-14 w-14 place-items-center rounded-full border border-white/25 bg-black/35 backdrop-blur"><Play size={20} fill="white" /></span>
          </div>
          <div className="absolute bottom-7 right-7 hidden rounded-2xl border border-[#f1b53a]/35 bg-black/65 p-7 text-center backdrop-blur sm:block"><p className="text-3xl font-light tracking-[.1em]">Celebso<span className="text-[#f1b53a]">X</span></p><p className="mt-2 text-sm text-white/65">Build your digital identity.</p></div>
        </div>
      </section>

      <section className="relative bg-[#070916] px-5 pb-20 sm:px-8 lg:px-8 lg:pb-24">
        <div className="absolute inset-x-[10%] top-1/4 h-72 bg-[#5b2cff]/10 blur-[120px]" />
        <div className="relative mx-auto max-w-[1400px] rounded-[1.35rem] border border-white/10 bg-[#0c0a1b] p-5 shadow-[0_30px_100px_rgba(0,0,0,.55)] sm:p-8 lg:p-10">
          <div className="flex flex-col justify-between gap-6 border-b border-white/10 pb-8 lg:flex-row lg:items-end">
            <div><span className="inline-flex items-center gap-2 rounded-full bg-rose-500/12 px-3 py-1.5 text-[10px] font-black uppercase tracking-[.14em] text-rose-400"><Radio size={13} /> Live now</span><h2 className="mt-4 text-4xl font-semibold tracking-[-.04em] sm:text-5xl">Celebso <span className="text-[#d7a8ff]">Live</span></h2><p className="mt-3 text-sm text-white/55">Share knowledge, connect in real time and grow your audience.</p></div>
            <div className="grid grid-cols-3 gap-6 sm:gap-10">{liveStats.map(([value, label]) => <div key={label}><b className="text-xl text-[#f1b53a]">{value}</b><span className="mt-1 block text-[10px] uppercase tracking-wide text-white/38">{label}</span></div>)}</div>
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-[.34fr_.66fr]">
            <article className="flex min-h-72 flex-col justify-end rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_20%_10%,rgba(216,168,255,.18),transparent_36%),#121023] p-6"><p className="text-xs font-bold uppercase tracking-[.14em] text-[#d7a8ff]">Explore business ideas</p><h3 className="mt-3 text-2xl font-semibold">Learn. Share. Execute.</h3><p className="mt-3 text-xs leading-6 text-white/48">Break down trends, insights and opportunities with the people building what&apos;s next.</p><span className="mt-6 inline-flex w-fit items-center gap-2 rounded-lg border border-white/15 px-4 py-2 text-xs font-bold"><Play size={13} /> Watch now</span></article>
            <article className="relative min-h-72 overflow-hidden rounded-2xl border border-white/10">
              <Image src="/images/products/celebsox.jpeg" alt="CelebsoX creator profile experience" fill sizes="(max-width: 1024px) 100vw, 850px" className="object-cover object-[50%_7%] opacity-65" /><div className="absolute inset-0 bg-gradient-to-t from-[#080713] via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex flex-col justify-between gap-5 p-6 sm:flex-row sm:items-end"><div><p className="text-2xl font-semibold">Ananya Sharma <BadgeCheck className="inline text-[#b688ff]" size={18} /></p><p className="mt-1 text-xs text-white/52">Model · Creator · Public Figure</p></div><div className="grid grid-cols-3 gap-5">{profileStats.map(([value, label]) => <div key={label} className="text-center"><b>{value}</b><span className="block text-[9px] text-white/40">{label}</span></div>)}</div></div>
            </article>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-black px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1340px] gap-12 lg:grid-cols-[.42fr_.58fr] lg:items-center">
          <div><p className="text-xs font-black uppercase tracking-[.16em] text-[#f1b53a]">One powerful profile</p><h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-.04em] sm:text-5xl">Your identity deserves more than a bio.</h2><p className="mt-5 text-sm leading-7 text-white/55">Bring your portfolio, audience, collaborations and momentum together in one polished digital presence.</p><div className="mt-7 grid gap-3 sm:grid-cols-2">{[[Users, "Community"], [BarChart3, "Real analytics"], [MessageCircle, "Direct connection"], [Sparkles, "Creator portfolio"]].map(([Icon, label]) => <div key={label} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[.03] p-4 text-sm font-semibold"><Icon size={17} className="text-[#f1b53a]" />{label}</div>)}</div></div>
          <div className="relative mx-auto h-[520px] w-full max-w-[690px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d0d0d] shadow-2xl sm:h-[580px]"><Image src="/images/products/celebsox.jpeg" alt="CelebsoX product interface" fill sizes="(max-width: 1024px) 100vw, 690px" className="object-cover object-[50%_67%]" /><div className="absolute inset-0 ring-1 ring-inset ring-white/10" /></div>
        </div>
      </section>

      <section className="px-6 py-24 text-center sm:py-32">
        <p className="font-[family-name:var(--font-heading)] text-[19vw] font-light leading-none tracking-[.04em] sm:text-[15vw] lg:text-[180px]">Celebso<span className="text-[#f1b53a]">X</span></p>
        <h2 className="mx-auto mt-8 max-w-3xl text-3xl font-semibold tracking-[-.03em] sm:text-5xl">Be seen. Be connected. Be celebrated.</h2><p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/52">Build a digital identity that grows with every idea, collaboration and milestone.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3"><Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-[#f1b53a] px-6 py-3 text-sm font-black !text-black">Get started <ArrowRight size={16} /></Link><Link href="/contact" className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3 text-sm font-bold !text-white">Download app <Download size={16} /></Link></div>
        <div className="mt-10 flex justify-center gap-5 text-white/30"><Heart size={18} /><Share2 size={18} /><Users size={18} /></div>
      </section>
    </main>
  );
}
