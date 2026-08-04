"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  Boxes,
  BrainCircuit,
  Code2,
  Globe2,
  GraduationCap,
  HomeIcon,
  Landmark,
  Network,
  PanelsTopLeft,
  Pause,
  Play,
  Rocket,
  Volume2,
  VolumeX,
} from "lucide-react";
import CompactFooter from "../components/CompactFooter";

const ecosystemCompanies = [
  ["Antellay", "AI, GIS & Engineering", BrainCircuit],
  ["ByiZon AI", "Dynamic AI Interface", PanelsTopLeft],
  ["Grehni AI", "Smart AI OS", HomeIcon],
  ["CelebsoX", "Social Network", Network],
  ["Startup Valley", "Incubator & Coworking", Rocket],
  ["NXTFUND", "Venture Capital", Landmark],
  ["Startup School", "Learning Platform", GraduationCap],
  ["Celebso Production", "Media & Events", Boxes],
] as const;

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(1);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const landingVideoRef = useRef<HTMLVideoElement>(null);

  const testimonials = [
    {
      name: "Manoj Pooleery",
      title: "Cofounder & CTO, SiteRx Inc",
      quote: "Overall, a very positive experience. The team was very responsive, organized and up to task. We had engaged them when we had a very tight deadline and they were able to help us meet it.",
      img: "/images/client_photo/OIP (1).webp"
    },
    {
      name: "Brandon",
      title: "Director, Cypress Learning Solutions",
      quote: "I love working with these guys. They are knowledgable and have really been clutch in building custom solutions & Lightning web components. Thank you for all your hard work!.",
      img: "/images/client_photo/OIP.webp"
    },
    {
      name: "Cameron Billings",
      title: "CTO, placesforless",
      quote: "We enjoyed working with Antellay. They were easy to communicate with and easy to work with.",
      img: "/images/client_photo/download.webp"
    }
  ];

  const handlePrev = () => setCurrentTestimonial(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const handleNext = () => setCurrentTestimonial(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
  const toggleLandingVideo = () => {
    const video = landingVideoRef.current;
    if (!video) return;

    if (video.paused) {
      void video.play();
    } else {
      video.pause();
    }
  };
  const toggleLandingVideoSound = () => {
    const video = landingVideoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsVideoMuted(video.muted);
  };
  return (
    <main className="landing-page min-h-screen bg-white text-[#0B132B] dark:text-white transition-colors duration-300">

      {/* Landing Intro */}
      <section className="landing-intro" aria-labelledby="landing-intro-title">
        <div className="landing-intro-copy">
          <h1 id="landing-intro-title" className="landing-title-motion">
            AI Infrastructure<br />for Modern Enterprises
          </h1>
        </div>

        <div className="landing-intro-visual">
          <Image
            src="/images/vr-consulting-hero.png"
            alt="A woman exploring immersive technology with a virtual reality headset"
            fill
            priority
            sizes="(max-width: 767px) 100vw, 58vw"
            className="landing-intro-image"
          />
          <div className="landing-intro-bar">
            <a href="#about" className="landing-intro-button">Know More</a>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section id="about" className="hero-section bg-white pb-20 pt-32 transition-colors duration-300 dark:bg-transparent">
        <div className="flex justify-center w-full px-6 my-12 cursor-pointer">
          <img 
            src="/images/Antellay_name.jpeg" 
            alt="Antellay" 
            className="w-full max-w-xl mx-auto block object-contain mix-blend-multiply dark:invert dark:mix-blend-screen transition-all duration-500 ease-out transform hover:scale-[1.03] hover:filter hover:drop-shadow-[0_0_15px_rgba(58,134,255,0.3)] dark:hover:drop-shadow-[0_0_15px_rgba(0,245,212,0.5)]"
          />
        </div>

        <div className="mx-auto mt-16 max-w-[1400px] px-6 md:px-10">
          <div className="relative left-1/2 w-screen -translate-x-1/2 px-6 text-left md:px-10">
            <h1 className="text-center font-[family-name:var(--font-body)] text-3xl font-normal tracking-[-0.025em] text-[#0B132B] dark:text-white md:text-4xl">
              Welcome To Antellay
            </h1>
            <p
              className="mt-8 text-base leading-8 text-slate-600 dark:text-slate-300 md:text-lg"
              style={{ fontFamily: "var(--font-body), Arial, sans-serif" }}
            >
              <strong>ANTELLAY</strong>, the technology arm of <strong>Celebso Group</strong>, is an AI-first Technology, GIS, and Engineering company delivering scalable AI solutions for modern businesses. We build intelligent software, AI infrastructure, dynamic AI interface systems, enterprise automation, geospatial solutions, and AI training platforms for startups, enterprises, and governments worldwide.
            </p>
          </div>

        </div>
      </section>

      {/* Landing Video Showcase */}
      <section className="bg-white px-4 pb-12 dark:bg-[#0B132B] md:px-8 md:pb-20">
        <div className="relative mx-auto min-h-[420px] max-w-[1440px] overflow-hidden rounded-[1.5rem] bg-[#0B132B] shadow-[0_30px_80px_rgba(11,19,43,0.18)] md:min-h-[620px] md:rounded-[2rem]">
          <video
            ref={landingVideoRef}
            className="absolute inset-0 h-full w-full object-cover"
            src="/videos/our-valued-customers.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            onPlay={() => setIsVideoPlaying(true)}
            onPause={() => setIsVideoPlaying(false)}
          />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#071126]/70 to-transparent" />

          <div className="relative z-10 flex min-h-[420px] flex-col justify-end p-7 text-white md:min-h-[620px] md:p-14 lg:p-20">
            <a
              href="/contact"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-[#00F5D4] px-6 py-3 font-semibold text-[#071126] transition hover:bg-white"
            >
              Build with us
              <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="absolute right-5 top-5 z-20 flex gap-2 md:right-8 md:top-8">
            <button
              type="button"
              onClick={toggleLandingVideoSound}
              aria-label={isVideoMuted ? "Unmute landing page video" : "Mute landing page video"}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur-md transition hover:bg-black/50 focus:outline-none focus:ring-2 focus:ring-[#00F5D4]"
            >
              {isVideoMuted ? <VolumeX size={19} /> : <Volume2 size={19} />}
            </button>
            <button
              type="button"
              onClick={toggleLandingVideo}
              aria-label={isVideoPlaying ? "Pause landing page video" : "Play landing page video"}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur-md transition hover:bg-black/50 focus:outline-none focus:ring-2 focus:ring-[#00F5D4]"
            >
              {isVideoPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" />}
            </button>
          </div>
        </div>
      </section>

      {/* Mind Activation Showcase */}
      <section className="bg-white px-4 pb-12 dark:bg-[#0B132B] md:px-8 md:pb-20">
        <div className="relative mx-auto grid w-full max-w-[1100px] items-center gap-8 overflow-hidden md:grid-cols-[minmax(170px,1fr)_420px_minmax(170px,1fr)]">
          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(58,134,255,0.12),transparent_38%)] dark:bg-[radial-gradient(circle_at_center,rgba(0,245,212,0.09),transparent_40%)]" />

          <div className="relative z-10 hidden flex-col gap-12 md:flex">
            <div className="mind-motion mind-motion-one ml-auto flex w-full max-w-[210px] items-center gap-3 rounded-2xl border border-blue-100 bg-white/85 p-4 shadow-[0_16px_45px_rgba(58,134,255,0.10)] backdrop-blur-sm dark:border-white/10 dark:bg-[#111d3a]/85">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#3A86FF]/10 text-[#3A86FF] dark:bg-[#00F5D4]/10 dark:text-[#00F5D4]"><BrainCircuit size={22} /></span>
              <div><p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">Smarter</p><p className="mt-1 font-semibold">Intelligence</p></div>
            </div>
            <div className="mind-motion mind-motion-two flex w-full max-w-[210px] items-center gap-3 rounded-2xl border border-blue-100 bg-white/85 p-4 shadow-[0_16px_45px_rgba(58,134,255,0.10)] backdrop-blur-sm dark:border-white/10 dark:bg-[#111d3a]/85">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#3A86FF]/10 text-[#3A86FF] dark:bg-[#00F5D4]/10 dark:text-[#00F5D4]"><Code2 size={22} /></span>
              <div><p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">Built for</p><p className="mt-1 font-semibold">Engineering</p></div>
            </div>
          </div>

          <div className="relative z-10 w-full max-w-[420px] overflow-hidden">
            <img
              src="/images/mind-activation-transparent.png"
              alt="Mind activation and usable knowledge concept"
              className="block h-[460px] w-full object-cover object-center sm:h-[520px]"
            />
            <div aria-hidden="true" className="absolute inset-x-0 top-0 h-10 bg-white dark:bg-[#0B132B]" />
            <div aria-hidden="true" className="absolute left-0 top-[58%] h-10 w-16 bg-white dark:bg-[#0B132B]" />
          </div>

          <div className="relative z-10 hidden flex-col gap-12 md:flex">
            <div className="mind-motion mind-motion-three flex w-full max-w-[210px] items-center gap-3 rounded-2xl border border-blue-100 bg-white/85 p-4 shadow-[0_16px_45px_rgba(58,134,255,0.10)] backdrop-blur-sm dark:border-white/10 dark:bg-[#111d3a]/85">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#3A86FF]/10 text-[#3A86FF] dark:bg-[#00F5D4]/10 dark:text-[#00F5D4]"><Globe2 size={22} /></span>
              <div><p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">Always</p><p className="mt-1 font-semibold">Connected</p></div>
            </div>
            <div className="mind-motion mind-motion-four ml-auto flex w-full max-w-[210px] items-center gap-3 rounded-2xl border border-blue-100 bg-white/85 p-4 shadow-[0_16px_45px_rgba(58,134,255,0.10)] backdrop-blur-sm dark:border-white/10 dark:bg-[#111d3a]/85">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#3A86FF]/10 text-[#3A86FF] dark:bg-[#00F5D4]/10 dark:text-[#00F5D4]"><Rocket size={22} /></span>
              <div><p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">Ready for</p><p className="mt-1 font-semibold">Growth</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* Antellay Product Logos */}
      <section className="bg-white px-4 pb-12 transition-colors duration-300 dark:bg-[#0B132B] md:px-8 md:pb-20">
        <div className="product-logo-map relative mx-auto w-full max-w-[998px]">
          <img
            src="/images/antellay-product-logos-transparent.png"
            alt="Byizon, Celebso, Space, Grehni and NxtFund products"
            className="product-logo-image block h-auto w-full object-contain dark:brightness-0 dark:invert"
          />
          <a href="/products/byizon-ai" aria-label="Open Byizon AI product page" title="Byizon AI" className="logo-hotspot logo-byizon absolute left-[2%] top-[18%] h-[58%] w-[17%] cursor-pointer rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00F5D4]" />
          <a href="/products/celebsox" aria-label="Open CelebsoX product page" title="CelebsoX" className="logo-hotspot logo-celebso absolute left-[19%] top-[16%] h-[60%] w-[22%] cursor-pointer rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00F5D4]" />
          <a href="/products" aria-label="Explore Space and all Antellay products" title="Explore products" className="logo-hotspot logo-space absolute left-[43%] top-[5%] h-[90%] w-[14%] cursor-pointer rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00F5D4]" />
          <a href="/products/grehni-ai" aria-label="Open Grehni AI product page" title="Grehni AI" className="logo-hotspot logo-grehni absolute left-[58%] top-[18%] h-[58%] w-[15%] cursor-pointer rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00F5D4]" />
          <a href="/products/nxtfund-capital" aria-label="Open NXTFund Capital product page" title="NXTFund Capital" className="logo-hotspot logo-nxtfund absolute left-[75%] top-[15%] h-[62%] w-[21%] cursor-pointer rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00F5D4]" />
        </div>
      </section>

      {/* Trusted Partner Section */}
      <section id="events" className="trusted-partner">
        <div className="relative mx-auto aspect-[2048/578] w-full max-w-[1200px] overflow-hidden">
          <img
            src="/images/personalized-journey-transparent.png"
            alt="Start your personalized IT journey"
            className="absolute left-0 top-0 h-auto w-full"
            style={{ transform: "translateY(-24.74%)" }}
          />
        </div>
      </section>

      <section className="bg-white px-6 py-20 dark:bg-[#0B132B] md:px-10">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Part of Celebso Group Ecosystem</h2>
          <div className="ecosystem-slider mt-9">
            <div className="ecosystem-slider-track">
              {[true, false].map((isDuplicate) => (
                <div key={isDuplicate ? "duplicate" : "primary"} className="ecosystem-slider-group" aria-hidden={isDuplicate || undefined}>
                  {ecosystemCompanies.map(([name, description, Icon]) => (
                    <div key={name} className="rounded-xl border border-slate-200 bg-[#f8fafc] p-5 text-center dark:border-white/10 dark:bg-[#111d3a]">
                      {name === "Antellay" ? (
                        <Image src="/images/ecosystem/antellay-logo.png" alt="Antellay logo" width={42} height={40} className="mx-auto h-10 w-10 object-contain" />
                      ) : name === "Grehni AI" ? (
                        <Image src="/images/ecosystem/grehni-logo.svg" alt="Grehni AI logo" width={40} height={40} className="mx-auto h-10 w-10 rounded-lg object-cover" />
                      ) : name === "NXTFUND" ? (
                        <Image src="/images/ecosystem/nxtfund-logo.png" alt="NXTFUND logo" width={78} height={32} className="mx-auto h-10 w-[78px] object-contain" />
                      ) : (
                        <Icon size={25} className="mx-auto text-[#3A86FF] dark:text-[#00F5D4]" />
                      )}
                      <h3 className="mt-3 text-sm font-bold">{name}</h3>
                      <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">{description}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="relative mt-12 overflow-hidden rounded-3xl bg-[#06173c] px-8 py-12 text-white shadow-2xl md:px-14">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src="/videos/future-ai-card-v2.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#06173c]/95 via-[#102e78]/75 to-[#140836]/45" />
            <div className="absolute -right-10 -top-20 h-72 w-72 rounded-full border-[32px] border-[#00F5D4]/10" />
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-3xl font-bold md:text-5xl">Let&apos;s Build the Future with AI.</h2>
              <p className="mt-4 text-white/65">Ready to transform your business with intelligent solutions?</p>
              <a href="/contact" className="mt-7 inline-flex items-center gap-2 rounded-lg border border-[#00F5D4]/60 bg-[#00F5D4] px-6 py-3 font-bold text-[#071126] transition hover:bg-white">
                Book a Free Consultation <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {false && <>
      {/* Get To Know Us */}
      <section id="about-us" className="get-to-know">
        <div className="section-title-left">
          <h2>Tech-Adept, Business-Centric: Get To Know Us</h2>
        </div>
        <p>Antellay was founded in 2018, backed by the vision of driving mutual growth with cutting-edge technologies. Our belief in mutual success has been our core ethos spurring us on the upward spiral of growth. Today, we stand on top, having grown from a startup to a trusted IT consulting company for Fortune 500 companies. Yet, we've kept our roots. We have retained a small company's agility and personal touch, ensuring personalized attention to each client.</p>
      </section>

      {/* Our Work Services */}
      <section id="services" className="services-section">
        <h2 className="text-center">Our Work Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#1c44ac" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M19 11v8.4l-3-2.6-3 2.6V11a4 4 0 0 1 6 0z" />
                <circle cx="16" cy="11" r="1" fill="#1c44ac" />
              </svg>
            </div>
            <h3>Web Designer</h3>
            <span className="service-tag">ECOMMERCE</span>
            <p>Our creative design solutions are for people, not for machines. Yet made by people and machines.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#1c44ac" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
                <line x1="2" y1="13" x2="22" y2="13" />
              </svg>
            </div>
            <h3>UX/UI & Graphics</h3>
            <span className="service-tag">REAL SPECIALIST</span>
            <p>Our creative design solutions are for people, not for machines. Yet made by people and machines.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#1c44ac" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="6" y="3" width="12" height="18" rx="6" />
                <path d="M12 3v7" />
                <path d="M6 10h12" />
                <rect x="11" y="6" width="2" height="3" rx="1" />
              </svg>
            </div>
            <h3>UX/UI Design</h3>
            <span className="service-tag">APPS DESIGN</span>
            <p>Our creative design solutions are for people, not for machines. Yet made by people and machines.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#1c44ac" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                <polyline points="2 12 12 17 22 12" />
                <polyline points="2 17 12 22 22 17" />
              </svg>
            </div>
            <h3>Product develop</h3>
            <span className="service-tag">BRANDING DESIGN</span>
            <p>Our creative design solutions are for people, not for machines. Yet made by people and machines.</p>
          </div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section id="video-showcase" className="video-section">
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/QyhwSYhX09s?si=STnEYIv5tf0v41qS"
            title="Video Showcase"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Work Portfolio */}
      <section id="portfolio" className="portfolio-section">
        <h2>Work Portfolio</h2>
        <p className="portfolio-desc">Check out our impressive body of work to understand our diverse expertise in the Salesforce ecosystem.</p>

        <div className="portfolio-card">
          <div className="portfolio-content">
            <img src="/images/keells_logo.png" alt="Keells Logo" className="h-12 w-auto mb-6 object-contain" />
            <h4 className="portfolio-title">Redefining Customer Loyalty With Salesforce Loyalty Management</h4>
            <p className="portfolio-text">We helped Keells, one of Sri Lanka's largest retail chains, migrate their legacy loyalty program into Salesforce Loyalty Management. The new platform enabled real-time points accrual, automated expiry & transfers, and strengthened data security to boost customer engagement and operational efficiency.</p>
            <div className="portfolio-stats">
              <div className="stat-col">
                <strong>135+ Stores</strong>
                <span>Live in 12 Days</span>
              </div>
              <div className="stat-col">
                <strong>2.4M+ Nexus</strong>
                <span>Members Unified</span>
              </div>
              <div className="stat-col">
                <strong>Optimized</strong>
                <span>Member Lifecycle</span>
              </div>
            </div>
            <button className="btn btn-outline portfolio-btn">Know More <i className="fas fa-chevron-right ml-2 text-xs"></i></button>
          </div>
          <div className="portfolio-image-container">
            <img src="/images/kells_community.png" alt="Keells Project Showcase" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="products" className="tech-section">
        <h2>TECNLOGIES.</h2>
        <div className="tech-grid">
          <div className="tech-icon">
            <div className="tech-icon-box flex items-center justify-center">
              <span className="text-[#f7df1e]">JS</span>
            </div>
            <span>JavaScript</span>
          </div>
          <div className="tech-icon">
            <div className="tech-icon-box flex items-center justify-center">
              <span className="text-[#3178c6]">TS</span>
            </div>
            <span>TypeScript</span>
          </div>
          <div className="tech-icon">
            <div className="tech-icon-box flex items-center justify-center">
              <i className="fab fa-python text-[#3776ab]"></i>
            </div>
            <span>Python</span>
          </div>
          <div className="tech-icon">
            <div className="tech-icon-box flex items-center justify-center">
              <i className="fab fa-java text-[#b07219]"></i>
            </div>
            <span>Java</span>
          </div>
          <div className="tech-icon">
            <div className="tech-icon-box flex items-center justify-center">
              <span className="text-[#f34b7d]">C++</span>
            </div>
            <span>C++</span>
          </div>
          <div className="tech-icon">
            <div className="tech-icon-box flex items-center justify-center">
              <i className="fab fa-golang text-[#00add8]"></i>
            </div>
            <span>Go</span>
          </div>
          <div className="tech-icon">
            <div className="tech-icon-box flex items-center justify-center">
              <i className="fab fa-node-js text-[#339933]"></i>
            </div>
            <span>Node.js</span>
          </div>
          <div className="tech-icon">
            <div className="tech-icon-box flex items-center justify-center">
              <i className="fab fa-react text-[#61dafb]"></i>
            </div>
            <span>React</span>
          </div>
          {/* Row 2 */}
          <div className="tech-icon">
            <div className="tech-icon-box flex items-center justify-center">
              <i className="fab fa-html5 text-[#e34f26]"></i>
            </div>
            <span>HTML5</span>
          </div>
          <div className="tech-icon">
            <div className="tech-icon-box flex items-center justify-center">
              <i className="fab fa-css3-alt text-[#1572b6]"></i>
            </div>
            <span>CSS3</span>
          </div>
          <div className="tech-icon">
            <div className="tech-icon-box flex items-center justify-center">
              <i className="fas fa-leaf text-[#47a248]"></i>
            </div>
            <span>MongoDB</span>
          </div>
          <div className="tech-icon">
            <div className="tech-icon-box flex items-center justify-center">
              <i className="fas fa-database text-[#336791]"></i>
            </div>
            <span>PostgreSQL</span>
          </div>
          <div className="tech-icon">
            <div className="tech-icon-box flex items-center justify-center">
              <i className="fas fa-database text-[#4479a1]"></i>
            </div>
            <span>MySQL</span>
          </div>
          <div className="tech-icon">
            <div className="tech-icon-box flex items-center justify-center">
              <i className="fab fa-docker text-[#2496ed]"></i>
            </div>
            <span>Docker</span>
          </div>
          <div className="tech-icon">
            <div className="tech-icon-box flex items-center justify-center">
              <i className="fas fa-dharmachakra text-[#326ce5]"></i>
            </div>
            <span>Kubernetes</span>
          </div>
          <div className="tech-icon">
            <div className="tech-icon-box flex items-center justify-center">
              <span className="font-bold text-black">NEXT</span>
            </div>
            <span>Next.js</span>
          </div>
        </div>

        <div id="contact" className="cta-banner">
          <div className="cta-content">
            <h2>Make The Move</h2>
            <button className="btn btn-accent-outline">LET'S COLLABORATE</button>
          </div>
          <div className="cta-text">
            <span className="reach-out">REACH OUT</span>
            <p>If you're looking for a holistic agency to work on<br />your big dream, just say the magic words!</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="testimonials-section">
        <h2 className="text-center">Hear It From Our Clients</h2>
        <p className="text-center text-[#777] mb-12">Read what our satisfied clients have to say about their experience.</p>

        <div className="testimonials-slider">
          <button className="slider-btn prev" onClick={handlePrev}><i className="fas fa-chevron-left"></i></button>
          <div className="testimonial-cards">
            {testimonials.map((test, index) => (
              <div key={index} className={`testimonial-card ${index === currentTestimonial ? 'active' : ''}`}>
                <div className="client-img-container">
                  {test.img ? (
                    <img src={test.img} alt={test.name} className="client-img" />
                  ) : (
                    <div className="client-img-placeholder">
                      {test.name.charAt(0)}
                    </div>
                  )}
                </div>
                <h4>{test.name}</h4>
                <p className="client-title">{test.title}</p>
                <p className="client-quote">{test.quote}</p>
              </div>
            ))}
          </div>
          <button className="slider-btn next" onClick={handleNext}><i className="fas fa-chevron-right"></i></button>
        </div>
      </section>
      </>}

      <CompactFooter />
    </main>
  );
}
