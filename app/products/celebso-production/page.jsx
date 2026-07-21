import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Camera, Clapperboard, Crown, Film, Gem, Instagram, Play, Shirt, Star, Video } from "lucide-react";

export const metadata = {
  title: "Celebso Productions | Crafting Iconic Visuals",
  description: "Celebso Productions creates premium fashion photography, editorials, campaigns, celebrity productions and visual storytelling.",
};

const services = [
  [Camera, "Fashion Photography", "High-end fashion photography for editorials & brands."],
  [Gem, "Commercial Campaigns", "Creative campaigns that bring your brand vision to life."],
  [Star, "Celebrity Production", "End-to-end production for celebrity projects & events."],
  [Clapperboard, "Editorial Shoots", "Magazine editorials, lookbooks & luxury fashion stories."],
  [Video, "Video Production", "Fashion films, music videos & brand storytelling."],
  [Crown, "Event & Fashion Shows", "Complete production of fashion shows & live events."],
];
const process = [["01", "Concept", "Understanding your vision"], ["02", "Planning", "Moodboard, location, team"], ["03", "Production", "Shoot day, bringing ideas to life"], ["04", "Delivery", "Editing, retouching & final delivery"]];
const numbers = [["250+", "Projects Completed"], ["120+", "Brands Collaborated"], ["500+", "Models & Talent Worked"], ["50+", "Fashion Shows Produced"]];

function GoldButton({ href, children, outline = false, className = "" }) {
  return <Link href={href} className={`inline-flex items-center gap-2 border px-7 py-4 text-xs font-black uppercase tracking-[.08em] ${outline ? "border-[#a9823a] text-[#d5ad5d]" : "border-[#c89b3c] bg-[#c89b3c] text-black"} ${className}`}>{children}</Link>;
}

function Label({ children }) {
  return <p className="text-xs font-black uppercase tracking-[.16em] text-[#c89b3c]">{children}</p>;
}

function Shot({ className = "", alt = "Celebso production visual" }) {
  return <div className={`relative overflow-hidden bg-[#16120d] ${className}`}><Image src="/images/products/celebso-production.jpeg" alt={alt} fill sizes="(min-width: 1024px) 35vw, 100vw" className="object-cover object-top opacity-88" /><div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" /></div>;
}

export default function CelebsoProductionPage() {
  return (
    <main className="bg-[#080806] text-white dark:bg-[#080806]">
      <section className="relative min-h-[660px] overflow-hidden border-b border-[#2a2115]">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/92 to-black/20" />
        <div className="absolute right-0 top-0 h-full w-[62%]"><Image src="/images/products/celebso-production.jpeg" alt="Celebso Productions hero" fill priority sizes="62vw" className="object-cover object-top" /><div className="absolute inset-0 bg-gradient-to-r from-black via-black/35 to-transparent" /></div>
        <nav className="relative z-10 mx-auto flex max-w-[1380px] items-center justify-between px-7 py-7 lg:px-14">
          <Link href="/products" className="font-serif text-3xl font-black leading-none">CELEBSO<br/><span className="text-sm tracking-[.35em] text-white/65">PRODUCTIONS</span></Link>
          <div className="hidden items-center gap-10 text-xs font-black uppercase tracking-[.08em] text-white/70 lg:flex">{["Home", "About Us", "Services", "Portfolio", "Models", "Contact"].map((x) => <span key={x}>{x}</span>)}</div>
          <GoldButton href="/contact">Book a Shoot</GoldButton>
        </nav>
        <div className="relative z-10 mx-auto max-w-[1380px] px-7 pb-24 pt-24 lg:px-14">
          <h1 className="font-serif text-[64px] font-black leading-[.92] tracking-[-.045em] md:text-[92px]">CELEBSO<br/><span className="text-[#c89b3c]">PRODUCTIONS</span></h1>
          <h2 className="mt-7 text-2xl font-black uppercase tracking-[.08em] text-white/85">Crafting Iconic Visuals</h2>
          <p className="mt-6 max-w-md text-sm leading-8 text-white/66">Fashion photography, editorial shoots, commercial campaigns and celebrity productions — all crafted with perfection.</p>
          <div className="mt-8 flex flex-wrap gap-4"><GoldButton href="/contact">Book a Shoot <ArrowRight size={15} /></GoldButton><GoldButton href="/contact" outline>Get a Quote <ArrowRight size={15} /></GoldButton></div>
        </div>
      </section>

      <section className="grid border-b border-[#2a2115] lg:grid-cols-[.45fr_.55fr]">
        <Shot className="min-h-[380px]" alt="Fashion editorial shoot" />
        <div className="px-7 py-16 lg:px-20">
          <Label>About Celebso Productions</Label>
          <h2 className="mt-5 font-serif text-5xl leading-tight">Turning Concepts <br />Into Iconic Visuals</h2>
          <p className="mt-6 max-w-xl text-sm leading-8 text-white/62">We create premium fashion photography, campaigns, music videos, brand content and celebrity productions with world-class quality and storytelling.</p>
          <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
            {services.slice(0, 4).map(([Icon, title]) => <div key={title} className="text-center"><Icon className="mx-auto text-[#c89b3c]" size={30} /><p className="mt-3 text-xs font-bold text-white/70">{title}</p></div>)}
          </div>
        </div>
      </section>

      <section className="px-7 py-16 lg:px-14">
        <div className="mx-auto max-w-[1380px]">
          <div className="flex items-center justify-between gap-4"><Label>Our Work</Label><GoldButton href="/contact" outline>View All Work <ArrowRight size={14} /></GoldButton></div>
          <div className="mt-7 grid auto-rows-[210px] grid-cols-2 gap-3 md:grid-cols-4">
            <Shot className="row-span-2" alt="Magazine cover shoot" />
            <Shot className="col-span-2" alt="Runway production" />
            <Shot alt="CelebsoX cover" />
            <Shot alt="Jewelry editorial" />
            <Shot alt="Commercial model shoot" />
            <Shot alt="Luxury fashion runway" />
            <Shot className="col-span-2" alt="Celebrity event production" />
          </div>
        </div>
      </section>

      <section className="border-y border-[#2a2115] px-7 py-16 lg:px-14">
        <div className="mx-auto max-w-[1380px]">
          <Label>Our Services</Label>
          <div className="mt-7 grid gap-5 md:grid-cols-3 lg:grid-cols-6">
            {services.map(([Icon, title, copy]) => (
              <div key={title} className="border border-[#3a2d1c] bg-[#0d0c09] p-6 text-center">
                <Icon className="mx-auto text-[#c89b3c]" size={42} />
                <h3 className="mt-5 text-sm font-black uppercase">{title}</h3>
                <p className="mt-3 text-xs leading-6 text-white/52">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1380px] gap-8 px-7 py-16 lg:grid-cols-[.45fr_.55fr] lg:px-14">
        <div>
          <Label>Our Process</Label>
          <div className="mt-7 grid gap-4 md:grid-cols-4">
            {process.map(([num, title, copy], index) => <div key={title} className="relative text-center">{index < process.length - 1 && <span className="absolute -right-4 top-8 hidden h-px w-8 bg-[#c89b3c] md:block" />}<div className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-[#c89b3c] text-[#c89b3c]">{num}</div><h3 className="mt-4 text-sm font-black uppercase">{title}</h3><p className="mt-2 text-xs text-white/50">{copy}</p></div>)}
          </div>
        </div>
        <div>
          <Label>By The Numbers</Label>
          <div className="mt-7 grid gap-5 md:grid-cols-4">
            {numbers.map(([value, label]) => <div key={label} className="border-l border-[#3a2d1c] p-5"><b className="text-5xl font-black text-[#c89b3c]">{value}</b><p className="mt-3 text-xs font-black uppercase text-white/62">{label}</p></div>)}
          </div>
        </div>
      </section>

      <section className="px-7 pb-16 lg:px-14">
        <div className="relative mx-auto grid max-w-[1380px] overflow-hidden border border-[#3a2d1c] bg-[#0d0c09] md:grid-cols-[.36fr_1fr_.36fr]">
          <Shot className="min-h-[260px]" alt="Production runway" />
          <div className="grid place-items-center p-10 text-center">
            <div><h2 className="font-serif text-4xl leading-tight">LET’S CREATE <br/><span className="text-[#c89b3c]">SOMETHING ICONIC</span></h2><p className="mt-4 text-sm text-white/58">From concept to creation, we bring your vision to life with style and perfection.</p><GoldButton href="/contact" className="mt-6">Book Your Shoot</GoldButton></div>
          </div>
          <Shot className="min-h-[260px]" alt="Celebrity portrait" />
        </div>
      </section>

      <footer className="border-t border-[#2a2115] px-7 py-10 lg:px-14">
        <div className="mx-auto grid max-w-[1380px] gap-8 md:grid-cols-[1.3fr_repeat(4,1fr)]">
          <div><b className="font-serif text-3xl">CELEBSO<br/><span className="text-sm tracking-[.35em] text-white/55">PRODUCTIONS</span></b></div>
          {["Company", "Services", "Quick Links"].map((h) => <div key={h}><b className="text-[#c89b3c]">{h}</b><p className="mt-4 text-xs leading-7 text-white/50">About Us<br/>Portfolio<br/>Models<br/>Contact</p></div>)}
          <div><b className="text-[#c89b3c]">Follow Us</b><p className="mt-4 flex gap-3 text-white/55"><Instagram size={18} /><Film size={18} /><Play size={18} /><Shirt size={18} /></p></div>
        </div>
      </footer>
    </main>
  );
}
